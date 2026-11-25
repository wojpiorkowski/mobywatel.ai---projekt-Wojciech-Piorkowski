# -*- coding: utf-8 -*-
"""Panel „Poprawki do portalu” (tylko do pracy nad prototypem, nie część zgłoszenia konkursowego).
Claude rozmawia z autorem, dopytuje i zbiera poprawki w koszyku; po „Wyślij” każda poprawka staje się issue na GitHubie
(etykieta z-portalu), które potem wdraża Claude Code. Włączenie: POPRAWKI=1 oraz ANTHROPIC_API_KEY i GITHUB_TOKEN w .env.
Tak jak reszta serwera: bez zależności, sama biblioteka standardowa (stąd surowe HTTP zamiast SDK)."""
import json, os, re, time, urllib.request, urllib.error

def wlaczone(): return os.environ.get('POPRAWKI', '').strip().lower() in ('1', 'tak', 'true', 'on')
MODEL = os.environ.get('POPRAWKI_MODEL') or 'claude-opus-5-5'
REPO = os.environ.get('POPRAWKI_REPO') or 'wojpiorkowski/mobywatel.ai---projekt-wojciech-piorkowski'
ETYKIETA = os.environ.get('POPRAWKI_ETYKIETA') or 'z-portalu'
GALAZ_ZRZUTOW = 'zgloszenia-zalaczniki'   # zrzuty ekranu trafiają tu, bo API issues nie przyjmuje obrazków
def klucz_claude(): return os.environ.get('ANTHROPIC_API_KEY') or None
def klucz_github(): return os.environ.get('GITHUB_TOKEN') or os.environ.get('GH_TOKEN') or None

SYSTEM = """Jesteś asystentem autora prototypu mObywatel.ai (Wojtka). Prototyp to klikalna aplikacja mObywatel na telefonie z asystentem AI, \
fikcyjnymi osobami (Jan w Krakowie, Ewa w gminie Lipowiec), modułami „Moja gmina” (władze, radni, sesje, budżet, uwagi do planu, inicjatywy) \
i „Moja praca”. Wojtek opisuje tu, co chce zmienić w prototypie. Zbierasz te poprawki tak, żeby programista (Claude Code) mógł je wdrożyć bez dopytywania.

Zasady:
- Pisz po polsku, krótko i zwyczajnie, bez myślników jako przecinków.
- Każda wiadomość Wojtka zaczyna się od bloku [Kontekst], który mówi, na jakim ekranie był i jaki element wskazał celownikiem. Korzystaj z tego, nie pytaj o to, co już wiesz.
- Gdy poprawka jest niejasna, zadaj jedno konkretne pytanie naraz (co dokładnie, gdzie, jaki ma być efekt). Nie dopytuj o drobiazgi, które programista rozstrzygnie sam.
- Gdy wiesz, co zrobić, od razu dodaj poprawkę narzędziem dodaj_poprawke i potwierdź jednym zdaniem. Jedna sprawa = jedna poprawka; kilka niezależnych zmian rozdziel.
- Gdy Wojtek doprecyzuje albo zmieni zdanie, popraw istniejącą pozycję (zmien_poprawke) zamiast dodawać nową. Gdy rezygnuje, usuń ją.
- Opis poprawki pisz jako zlecenie: co jest teraz, co ma być, gdzie (ekran, element), po czym poznać, że zrobione. Cytuj teksty z ekranu dosłownie.
- Nie wysyłasz zgłoszeń sam. Gdy Wojtek skończy, przypomnij, że wysyła je przyciskiem „Wyślij” pod rozmową.
- Załączniki (zrzuty) mają identyfikatory, np. z1. Dołącz je do poprawki, której dotyczą."""

_POLA = {'tytul': {'type': 'string', 'description': 'Krótki tytuł w trybie rozkazującym, np. „Dodaj filtr po dacie w sesjach rady”.'},
         'opis': {'type': 'string', 'description': 'Zlecenie dla programisty: stan obecny, oczekiwany, gdzie, kryterium odbioru. Markdown.'},
         'ekran': {'type': 'string', 'description': 'Ekran prototypu, którego dotyczy poprawka.'},
         'element': {'type': 'string', 'description': 'Wskazany element (z kontekstu), jeśli dotyczy.'},
         'zalaczniki': {'type': 'array', 'items': {'type': 'string'}, 'description': 'Identyfikatory załączników, np. ["z1"].'}}
NARZEDZIA = [
    {'name': 'dodaj_poprawke', 'description': 'Dodaje poprawkę do koszyka Wojtka.',
     'input_schema': {'type': 'object', 'properties': _POLA, 'required': ['tytul', 'opis']}},
    {'name': 'zmien_poprawke', 'description': 'Zmienia poprawkę w koszyku (podaj tylko zmieniane pola).',
     'input_schema': {'type': 'object', 'properties': dict(nr={'type': 'integer', 'description': 'Numer pozycji w koszyku.'}, **_POLA), 'required': ['nr']}},
    {'name': 'usun_poprawke', 'description': 'Usuwa poprawkę z koszyka.',
     'input_schema': {'type': 'object', 'properties': {'nr': {'type': 'integer'}}, 'required': ['nr']}},
]

def stan():
    return dict(wlaczone=wlaczone(), claude=bool(klucz_claude()), github=bool(klucz_github()), repo=REPO, etykieta=ETYKIETA, model=MODEL)

def _claude(messages, log):
    body = dict(model=MODEL, max_tokens=8000, system=SYSTEM, tools=NARZEDZIA, messages=messages,
                thinking={'type': 'adaptive'}, output_config={'effort': 'low'}, fallbacks='default')
    naglowki = {'x-api-key': klucz_claude(), 'anthropic-version': '2023-06-01', 'content-type': 'application/json',
                'anthropic-beta': 'server-side-fallback-2026-07-01'}
    for proba in range(4):
        req = urllib.request.Request('https://api.anthropic.com/v1/messages', data=json.dumps(body).encode(), headers=naglowki)
        t0 = time.time()
        try:
            with urllib.request.urlopen(req, timeout=180) as r: out = json.loads(r.read())
            log(dict(t='poprawki_llm', model=out.get('model'), ms=int((time.time() - t0) * 1000), usage=out.get('usage'), stop=out.get('stop_reason')))
            return out
        except urllib.error.HTTPError as e:
            txt = e.read().decode('utf-8', 'replace')
            if e.code == 400 and 'fallback' in txt and 'fallbacks' in body:   # konto bez zapasowego modelu: zwykłe zapytanie
                body.pop('fallbacks'); naglowki.pop('anthropic-beta'); continue
            if e.code in (429, 500, 502, 503, 529) and proba < 3:
                time.sleep(2 * (proba + 1)); continue
            raise RuntimeError('Claude: %s %s' % (e.code, txt[:300]))

def _wykonaj(nazwa, a, koszyk):
    pola = {k: a[k] for k in _POLA if a.get(k)}
    if nazwa == 'dodaj_poprawke':
        koszyk.append(pola); return 'Dodano jako pozycję %d. W koszyku: %d.' % (len(koszyk), len(koszyk))
    nr = a.get('nr')
    if not isinstance(nr, int) or not 1 <= nr <= len(koszyk): return 'Nie ma pozycji %s. W koszyku: %d.' % (nr, len(koszyk))
    if nazwa == 'zmien_poprawke':
        koszyk[nr - 1].update(pola); return 'Zmieniono pozycję %d.' % nr
    if nazwa == 'usun_poprawke':
        koszyk.pop(nr - 1); return 'Usunięto. Numery pozostałych przesunęły się; w koszyku: %d.' % len(koszyk)
    return 'Nieznane narzędzie.'

def czat(messages, koszyk, log):
    """Jedna tura rozmowy. Bezstanowo jak /api/agent: klient trzyma historię i koszyk. Zwraca (messages, koszyk, tekst)."""
    koszyk = [dict(p) for p in (koszyk or []) if isinstance(p, dict)]
    teksty = []
    for _ in range(6):
        out = _claude(messages, log)
        messages = messages + [{'role': 'assistant', 'content': out.get('content') or []}]   # bloki bez zmian (także myślenie)
        teksty += [b['text'] for b in out.get('content') or [] if b.get('type') == 'text' and b.get('text', '').strip()]
        if out.get('stop_reason') == 'refusal':
            teksty.append('Model odmówił odpowiedzi na tę wiadomość. Spróbuj opisać poprawkę inaczej.'); break
        uzycia = [b for b in out.get('content') or [] if b.get('type') == 'tool_use']
        if not uzycia: break
        wyniki = [{'type': 'tool_result', 'tool_use_id': b['id'], 'content': _wykonaj(b['name'], b.get('input') or {}, koszyk)} for b in uzycia]
        messages = messages + [{'role': 'user', 'content': wyniki}]
    return messages, koszyk, '\n\n'.join(teksty)

# --- GitHub ---
def _gh(metoda, sciezka, dane=None):
    req = urllib.request.Request('https://api.github.com' + sciezka, method=metoda, data=json.dumps(dane).encode() if dane is not None else None,
                                 headers={'Authorization': 'Bearer ' + klucz_github(), 'Accept': 'application/vnd.github+json',
                                          'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'mobywatel-prototyp'})
    with urllib.request.urlopen(req, timeout=30) as r:
        t = r.read(); return json.loads(t) if t else None

def _galaz_zrzutow():
    try: _gh('GET', '/repos/%s/git/ref/heads/%s' % (REPO, GALAZ_ZRZUTOW)); return
    except urllib.error.HTTPError as e:
        if e.code != 404: raise
    glowna = _gh('GET', '/repos/' + REPO)['default_branch']
    sha = _gh('GET', '/repos/%s/git/ref/heads/%s' % (REPO, glowna))['object']['sha']
    _gh('POST', '/repos/%s/git/refs' % REPO, {'ref': 'refs/heads/' + GALAZ_ZRZUTOW, 'sha': sha})

def _wyslij_zrzut(data_url, nazwa):
    m = re.match(r'data:image/(png|jpe?g|webp|gif);base64,(.+)$', data_url or '', re.S)
    if not m: return None
    sciezka = 'zgloszenia/%s/%s.%s' % (time.strftime('%Y-%m'), nazwa, m.group(1).replace('jpeg', 'jpg'))
    _gh('PUT', '/repos/%s/contents/%s' % (REPO, sciezka), {'message': 'Zrzut do zgłoszenia z panelu poprawek', 'branch': GALAZ_ZRZUTOW,
                                                           'content': re.sub(r'\s', '', m.group(2))})
    return 'https://raw.githubusercontent.com/%s/%s/%s' % (REPO, GALAZ_ZRZUTOW, sciezka)

def _tresc(p, kontekst, zrzuty):
    w = []
    if p.get('ekran'): w.append('**Ekran:** %s' % p['ekran'])
    if p.get('element'): w.append('**Wskazany element:** %s' % p['element'])
    if kontekst.get('adres'): w.append('**Adres:** `%s`' % kontekst['adres'])
    w += ['', '### Opis', '', p.get('opis', '')]
    if zrzuty: w += ['', '### Zrzuty', ''] + ['![%s](%s)' % (n, u) for n, u in zrzuty]
    w += ['', '---', '_Zgłoszone z panelu „Poprawki do portalu” (rozmowa z Claude), %s._' % time.strftime('%d.%m.%Y %H:%M')]
    return '\n'.join(w)

def wyslij(koszyk, zalaczniki, kontekst, log):
    """Tworzy po jednym issue na poprawkę. Zwraca listę wyników (numer i adres albo błąd) w kolejności koszyka."""
    wyniki, zrzuty, galaz = [], {}, False
    for i, p in enumerate(koszyk or []):
        try:
            mz = []
            for z in p.get('zalaczniki') or []:
                if z not in zalaczniki: continue
                if z not in zrzuty:
                    try:
                        if not galaz: _galaz_zrzutow(); galaz = True
                        zrzuty[z] = _wyslij_zrzut(zalaczniki[z], '%s-%s' % (time.strftime('%Y%m%d-%H%M%S'), re.sub(r'\W', '', z)))
                    except Exception as e:
                        zrzuty[z] = None; log(dict(t='poprawki_zrzut_err', z=z, msg=str(e)[:200]))
                if zrzuty[z]: mz.append((z, zrzuty[z]))
            iss = _gh('POST', '/repos/%s/issues' % REPO, {'title': (p.get('tytul') or 'Poprawka')[:200], 'body': _tresc(p, kontekst or {}, mz), 'labels': [ETYKIETA]})
            wyniki.append(dict(nr=iss['number'], url=iss['html_url'], tytul=iss['title']))
        except urllib.error.HTTPError as e:
            wyniki.append(dict(blad='%s %s' % (e.code, e.read().decode('utf-8', 'replace')[:200]), tytul=p.get('tytul')))
        except Exception as e:
            wyniki.append(dict(blad=str(e)[:200], tytul=p.get('tytul')))
        log(dict(t='poprawki_issue', i=i, wynik=wyniki[-1]))
    return wyniki

def historia():
    lista = _gh('GET', '/repos/%s/issues?labels=%s&state=all&per_page=40' % (REPO, ETYKIETA))
    return [dict(nr=x['number'], tytul=x['title'], url=x['html_url'], stan=x['state'], data=x['created_at'][:10]) for x in lista if 'pull_request' not in x]
