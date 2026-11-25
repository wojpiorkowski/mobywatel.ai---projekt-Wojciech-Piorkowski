/* Cloudflare Worker panelu „Poprawki do portalu” dla podglądu na GitHub Pages (strona statyczna nie może trzymać kluczy).
   Robi to samo co serwer/poprawki.py: rozmowa z Claude zbierająca poprawki w koszyku i zakładanie z nich issues na GitHubie.
   Sekrety (ustawia workflow .github/workflows/worker.yml): ANTHROPIC_API_KEY, GITHUB_TOKEN, KOD_DOSTEPU.
   Zmienne w wrangler.toml: REPO, ETYKIETA, MODEL, ORIGINY (skąd wolno wołać, po przecinku). */
import P from '../serwer/poprawki.json';

const GALAZ_ZRZUTOW = 'zgloszenia-zalaczniki';
// darmowy plan Cloudflare: 50 zapytań wychodzących na wywołanie, więc przeglądarka wysyła koszyk porcjami
const MAX_BAJTOW = 15e6, MAX_WIADOMOSCI = 300, MAX_POPRAWEK = 6;

export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    const dozwolone = (env.ORIGINY || '').split(',').map(s => s.trim()).filter(Boolean);
    const cors = dozwolone.includes(origin) ? {'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Headers': 'Content-Type, X-Kod',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Max-Age': '86400', Vary: 'Origin'} : {};
    const js = (o, kod = 200) => new Response(JSON.stringify(o), {status: kod, headers: {'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...cors}});
    if (!cors['Access-Control-Allow-Origin']) return js({error: 'niedozwolone pochodzenie'}, 403);   // tylko z podglądu (i lokalnie)
    if (req.method === 'OPTIONS') return new Response(null, {status: 204, headers: cors});
    if (!env.KOD_DOSTEPU) return js({error: 'Worker nie ma ustawionego KOD_DOSTEPU'}, 503);
    if (!rowne(req.headers.get('X-Kod') || '', env.KOD_DOSTEPU)) { await new Promise(r => setTimeout(r, 800)); return js({error: 'zły kod dostępu', kod: true}, 401) }
    const cfg = {repo: env.REPO, etykieta: env.ETYKIETA || 'z-portalu', model: env.MODEL || 'claude-opus-5-5', claude: env.ANTHROPIC_API_KEY, github: env.GITHUB_TOKEN};
    const p = new URL(req.url).pathname.replace(/\/+$/, '');
    try {
      if (req.method === 'GET' && p === '/api/poprawki') {
        const st = {wlaczone: true, claude: !!cfg.claude, github: !!cfg.github, repo: cfg.repo, etykieta: cfg.etykieta, model: cfg.model};
        if (cfg.github) { try { st.historia = await historia(cfg) } catch (e) { st.blad_historii = String(e.message).slice(0, 200) } }
        return js(st);
      }
      if (req.method !== 'POST') return js({error: 'nie ma takiego adresu'}, 404);
      if (+(req.headers.get('Content-Length') || 0) > MAX_BAJTOW) return js({error: 'za duże załączniki'}, 413);
      const tekst = await req.text();
      if (tekst.length > MAX_BAJTOW) return js({error: 'za duże załączniki'}, 413);
      const dane = JSON.parse(tekst || '{}');
      if (p === '/api/poprawki/czat') {
        if (!cfg.claude) return js({error: 'Worker nie ma ANTHROPIC_API_KEY'}, 503);
        const m = Array.isArray(dane.messages) ? dane.messages : [];
        if (m.length > MAX_WIADOMOSCI) return js({error: 'za długa rozmowa, wyślij koszyk i zacznij nową'}, 413);
        return js(await czat(cfg, m, dane.koszyk));
      }
      if (p === '/api/poprawki/wyslij') {
        if (!cfg.github) return js({error: 'Worker nie ma GITHUB_TOKEN'}, 503);
        const k = (Array.isArray(dane.koszyk) ? dane.koszyk : []).slice(0, MAX_POPRAWEK);
        return js({wyniki: await wyslij(cfg, k, dane.zalaczniki || {})});
      }
      return js({error: 'nie ma takiego adresu'}, 404);
    } catch (e) { return js({error: String(e.message || e).slice(0, 400)}, 500) }
  }
};

function rowne(a, b) {   // porównanie bez wczesnego wyjścia, żeby czas odpowiedzi nie zdradzał kodu
  let r = a.length ^ b.length;
  for (let i = 0; i < b.length; i++) r |= (a.charCodeAt(i) || 0) ^ b.charCodeAt(i);
  return r === 0;
}

// --- Claude ---
async function claude(cfg, messages) {
  const body = {model: cfg.model, max_tokens: 8000, system: P.system, tools: P.narzedzia, messages,
    thinking: {type: 'adaptive'}, output_config: {effort: 'low'}, fallbacks: 'default'};
  const nag = {'x-api-key': cfg.claude, 'anthropic-version': '2023-06-01', 'content-type': 'application/json', 'anthropic-beta': 'server-side-fallback-2026-07-01'};
  for (let proba = 0; proba < 4; proba++) {
    const r = await fetch('https://api.anthropic.com/v1/messages', {method: 'POST', headers: nag, body: JSON.stringify(body)});
    if (r.ok) return r.json();
    const t = await r.text();
    if (r.status === 400 && t.includes('fallback') && body.fallbacks) { delete body.fallbacks; delete nag['anthropic-beta']; continue }   // konto bez zapasowego modelu
    if ([429, 500, 502, 503, 529].includes(r.status) && proba < 3) { await new Promise(z => setTimeout(z, 2000 * (proba + 1))); continue }
    throw new Error(`Claude: ${r.status} ${t.slice(0, 300)}`);
  }
}

const POLA = Object.keys(P.narzedzia[0].input_schema.properties);
function wykonaj(nazwa, a, koszyk) {
  const pola = Object.fromEntries(POLA.filter(k => a[k] && (!Array.isArray(a[k]) || a[k].length)).map(k => [k, a[k]]));
  if (nazwa === 'dodaj_poprawke') { koszyk.push(pola); return `Dodano jako pozycję ${koszyk.length}. W koszyku: ${koszyk.length}.` }
  const nr = a.nr;
  if (!Number.isInteger(nr) || nr < 1 || nr > koszyk.length) return `Nie ma pozycji ${nr}. W koszyku: ${koszyk.length}.`;
  if (nazwa === 'zmien_poprawke') { Object.assign(koszyk[nr - 1], pola); return `Zmieniono pozycję ${nr}.` }
  if (nazwa === 'usun_poprawke') { koszyk.splice(nr - 1, 1); return `Usunięto. Numery pozostałych przesunęły się; w koszyku: ${koszyk.length}.` }
  return 'Nieznane narzędzie.';
}

async function czat(cfg, messages, koszyk) {   // jedna tura, bezstanowo: historię i koszyk trzyma przeglądarka
  koszyk = (Array.isArray(koszyk) ? koszyk : []).filter(x => x && typeof x === 'object').map(x => ({...x}));
  const teksty = [];
  for (let i = 0; i < 6; i++) {
    const out = await claude(cfg, messages), tresc = out.content || [];
    messages = [...messages, {role: 'assistant', content: tresc}];   // bloki bez zmian (także myślenie)
    teksty.push(...tresc.filter(b => b.type === 'text' && (b.text || '').trim()).map(b => b.text));
    if (out.stop_reason === 'refusal') { teksty.push('Model odmówił odpowiedzi na tę wiadomość. Spróbuj opisać poprawkę inaczej.'); break }
    const uzycia = tresc.filter(b => b.type === 'tool_use');
    if (!uzycia.length) break;
    messages = [...messages, {role: 'user', content: uzycia.map(b => ({type: 'tool_result', tool_use_id: b.id, content: wykonaj(b.name, b.input || {}, koszyk)}))}];
  }
  return {messages, koszyk, tekst: teksty.join('\n\n')};
}

// --- GitHub ---
async function gh(cfg, metoda, sciezka, dane) {
  const r = await fetch('https://api.github.com' + sciezka, {method: metoda, body: dane === undefined ? undefined : JSON.stringify(dane),
    headers: {Authorization: 'Bearer ' + cfg.github, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'mobywatel-prototyp'}});
  const t = await r.text();
  if (!r.ok) { const e = new Error(`GitHub ${r.status} ${t.slice(0, 200)}`); e.status = r.status; throw e }
  return t ? JSON.parse(t) : null;
}
async function galazZrzutow(cfg) {
  try { await gh(cfg, 'GET', `/repos/${cfg.repo}/git/ref/heads/${GALAZ_ZRZUTOW}`); return } catch (e) { if (e.status !== 404) throw e }
  const glowna = (await gh(cfg, 'GET', `/repos/${cfg.repo}`)).default_branch;
  const sha = (await gh(cfg, 'GET', `/repos/${cfg.repo}/git/ref/heads/${glowna}`)).object.sha;
  await gh(cfg, 'POST', `/repos/${cfg.repo}/git/refs`, {ref: 'refs/heads/' + GALAZ_ZRZUTOW, sha});
}
const teraz = () => new Date().toLocaleString('pl-PL', {timeZone: 'Europe/Warsaw', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'});
async function wyslijZrzut(cfg, dataUrl, nazwa) {
  const m = /^data:image\/(png|jpe?g|webp|gif);base64,([\s\S]+)$/.exec(dataUrl || '');
  if (!m) return null;
  const sciezka = `zgloszenia/${new Date().toISOString().slice(0, 7)}/${nazwa}.${m[1].replace('jpeg', 'jpg')}`;
  await gh(cfg, 'PUT', `/repos/${cfg.repo}/contents/${sciezka}`, {message: 'Zrzut do zgłoszenia z panelu poprawek', branch: GALAZ_ZRZUTOW, content: m[2].replace(/\s/g, '')});
  return `https://raw.githubusercontent.com/${cfg.repo}/${GALAZ_ZRZUTOW}/${sciezka}`;
}
function tresc(p, zrzuty) {
  const w = [];
  if (p.ekran) w.push('**Ekran:** ' + p.ekran);
  if (p.element) w.push('**Wskazany element:** ' + p.element);
  w.push('', '### Opis', '', p.opis || '');
  if (zrzuty.length) w.push('', '### Zrzuty', '', ...zrzuty.map(([n, u]) => `![${n}](${u})`));
  w.push('', '---', `_Zgłoszone z panelu „Poprawki do portalu” (rozmowa z Claude), ${teraz()}._`);
  return w.join('\n');
}
async function wyslij(cfg, koszyk, zalaczniki) {   // po jednym issue na poprawkę, wyniki w kolejności koszyka
  const wyniki = [], zrzuty = {}, stamp = new Date().toISOString().replace(/\D/g, '').slice(0, 14);
  let galaz = false;
  for (const p of koszyk) {
    try {
      const mz = [];
      for (const z of p.zalaczniki || []) {
        if (!(z in zalaczniki)) continue;
        if (!(z in zrzuty)) {
          try { if (!galaz) { await galazZrzutow(cfg); galaz = true } zrzuty[z] = await wyslijZrzut(cfg, zalaczniki[z], `${stamp}-${String(z).replace(/\W/g, '')}`) }
          catch (e) { zrzuty[z] = null }
        }
        if (zrzuty[z]) mz.push([z, zrzuty[z]]);
      }
      const iss = await gh(cfg, 'POST', `/repos/${cfg.repo}/issues`, {title: String(p.tytul || 'Poprawka').slice(0, 200), body: tresc(p, mz), labels: [cfg.etykieta]});
      wyniki.push({nr: iss.number, url: iss.html_url, tytul: iss.title});
    } catch (e) { wyniki.push({blad: String(e.message).slice(0, 200), tytul: p.tytul}) }
  }
  return wyniki;
}
async function historia(cfg) {
  const lista = await gh(cfg, 'GET', `/repos/${cfg.repo}/issues?labels=${encodeURIComponent(cfg.etykieta)}&state=all&per_page=40`);
  return lista.filter(x => !x.pull_request).map(x => ({nr: x.number, tytul: x.title, url: x.html_url, stan: x.state, data: x.created_at.slice(0, 10)}));
}
