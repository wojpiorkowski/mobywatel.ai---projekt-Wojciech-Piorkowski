/* Panel „Poprawki do portalu”: narzędzie autora do zbierania uwag o prototypie, nie część aplikacji.
   Rozmowa z Claude (serwer/poprawki.py) zbiera poprawki w koszyku, „Wyślij” zakłada z nich issues na GitHubie.
   Lokalnie rozmawia z serwerem (POPRAWKI=1), na GitHub Pages z Workerem Cloudflare (worker/), który trzyma klucze.
   Na Pages przycisk pojawia się dopiero po wejściu z ?poprawki=1 (przeglądarka to zapamiętuje), ?poprawki=0 go chowa.
   Adres Workera i kod dostępu podaje się raz w panelu (zostają w tej przeglądarce). */
(()=>{
const Q=new URLSearchParams(location.search),K='poprawki:';
const wez=(k,d)=>{try{const v=localStorage.getItem(K+k);return v==null?d:JSON.parse(v)}catch(e){return d}};
const daj=(k,v)=>{try{localStorage.setItem(K+k,JSON.stringify(v));return true}catch(e){return false}};
const ADRES_WORKERA='https://mobywatel-poprawki.wojpiorkowski.workers.dev';   // domyślny adres Workera; inny można wpisać w panelu (zębatka)
let LOK=false,BLAD='',UST=false;   // LOK: jest serwer lokalny; BLAD: czemu Worker nie odpowiada; UST: pokaż ustawienia
const adres=()=>String(wez('adres','')||ADRES_WORKERA).trim().replace(/\/+$/,'');
const baza=()=>LOK?'/api/poprawki':adres()+'/api/poprawki';
function api(sc,dane){return fetch(baza()+sc,{method:dane?'POST':'GET',cache:'no-store',headers:Object.assign(dane?{'Content-Type':'application/json'}:{},LOK?{}:{'X-Kod':wez('kod','')}),body:dane?JSON.stringify(dane):undefined})
 .then(async r=>{let j={};try{j=await r.json()}catch(e){}if(!r.ok||j.error){const e=new Error(j.error||'błąd '+r.status);e.kod=!!j.kod;throw e}return j})}
if(Q.has('poprawki'))daj('pokaz',Q.get('poprawki')!=='0');
const H=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const MD=t=>H(t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/`([^`]+)`/g,'<code>$1</code>').replace(/\n/g,'<br>');
const ICO={x:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',cel:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3"/>',
 spinacz:'<path d="m20 11.5-7.8 7.8a5 5 0 0 1-7.1-7.1l8.3-8.3a3.3 3.3 0 0 1 4.7 4.7l-8.3 8.3a1.7 1.7 0 0 1-2.4-2.4l7.6-7.6"/>',
 wyslij:'<path d="M21 3 10 14M21 3l-7 18-4-7-7-4z"/>',tryb:'<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',olowek:'<path d="M4 20h4L19.5 8.5a2.8 2.8 0 0 0-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>'};
const ico=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICO[n]}</svg>`;
const POWITANIE='Cześć! Opisz, co chcesz poprawić w prototypie, na tym albo innym ekranie. **Celownikiem** wskażesz element, **spinaczem** dodasz zrzut. Dopytam o szczegóły, zapiszę poprawkę w koszyku, a gdy skończysz, wyślesz wszystkie naraz.';

/* stan rozmowy trzymamy w przeglądarce (serwer jest bezstanowy); zrzuty mogą nie zmieścić się w localStorage, wtedy giną po odświeżeniu */
let S=wez('stan',null)||{api:[],widok:[],koszyk:[],zal:{},n:0};
const zapisz=()=>{if(!daj('stan',S))daj('stan',Object.assign({},S,{zal:{}}))};
let SRV=null,celEl=null,czeka=[],zajety=false,karta='rozmowa';

const css=`
#pp-btn{position:fixed;right:20px;bottom:20px;z-index:9000;display:flex;align-items:center;gap:8px;padding:10px 16px 10px 12px;border-radius:99px;
 background:#1d1f24;color:#fff;font:600 14px/1 var(--sans,system-ui);box-shadow:0 8px 24px -8px rgba(0,0,0,.45)}
#pp-btn svg{width:18px;height:18px}#pp-btn i{font-style:normal;background:var(--red,#dc143c);border-radius:99px;padding:3px 7px;font-size:12px}
#pp-btn i:empty{display:none}
#pp{position:fixed;right:16px;top:16px;bottom:16px;width:390px;z-index:9001;display:none;flex-direction:column;background:#f4f2ee;border-radius:14px;overflow:hidden;
 box-shadow:0 20px 60px -15px rgba(0,0,0,.45);font:15px/1.45 var(--sans,system-ui);color:#16171a}
#pp.on{display:flex}body.pp-otwarte #pp-btn{display:none}
@media (min-width:900px){body.pp-otwarte{padding-right:410px}}
@media (max-width:520px){#pp{inset:0;width:auto;border-radius:0}#pp-btn{right:10px;bottom:92px;padding:10px;opacity:.85}#pp-btn span{display:none}}
#pp .gl{background:#1d1f24;color:#fff;padding:14px 16px 12px;display:flex;align-items:flex-start;gap:10px}
#pp .gl div{flex:1;min-width:0}#pp .gl b{display:block;font-size:17px}#pp .gl small{display:block;color:#a9abb3;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#pp .gl button{color:#fff;width:30px;height:30px;display:grid;place-items:center}#pp .gl svg{width:20px;height:20px}
#pp nav{display:flex;gap:4px;background:#fff;border-bottom:1px solid #e3e1dc;padding:0 8px}
#pp nav button{padding:12px 10px 10px;font-weight:600;font-size:14px;color:#6b6d75;border-bottom:2px solid transparent}
#pp nav button.on{color:#16171a;border-color:var(--red,#dc143c)}
#pp .wid{flex:1;overflow:auto;padding:14px 12px;display:flex;flex-direction:column;gap:10px}
#pp .b{max-width:88%;padding:10px 13px;border-radius:14px;background:#fff;border:1px solid #e6e3de;align-self:flex-start;overflow-wrap:anywhere}
#pp .b.ja{align-self:flex-end;background:#1d1f24;color:#fff;border-color:#1d1f24}
#pp .b.blad{background:#fdecef;border-color:#f3c3cc;color:#8a1026}
#pp .b code{font-size:12.5px;background:rgba(0,0,0,.06);padding:1px 4px;border-radius:4px}
#pp .b small{display:block;opacity:.7;font-size:12px;margin-top:4px}
#pp .b img{display:block;max-width:100%;border-radius:8px;margin-top:6px}
#pp .b a{color:inherit}
#pp .pisze{align-self:flex-start;color:#6b6d75;font-size:13px}
#pp .kosz{border-top:1px solid #e3e1dc;background:#fff;padding:8px 12px}
#pp .kosz[hidden]{display:none}
#pp .kosz .w{display:flex;align-items:center;gap:8px}
#pp .kosz .w button.l{flex:1;text-align:left;font-weight:600;font-size:14px}
#pp .kosz ol{margin:6px 0 4px;padding-left:22px;font-size:14px;max-height:30vh;overflow:auto}
#pp .kosz li{margin:3px 0}#pp .kosz li small{color:#6b6d75;display:block}
#pp .kosz li button{color:#8a1026;font-size:12px;margin-left:6px}
#pp .wy{background:var(--red,#dc143c);color:#fff;font-weight:600;font-size:14px;padding:8px 14px;border-radius:99px}
#pp .wy:disabled{opacity:.5}
#pp .dol{border-top:1px solid #e3e1dc;padding:8px 10px 10px;background:#f4f2ee}
#pp .zal{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px}#pp .zal:empty{display:none}
#pp .zal span{display:flex;align-items:center;gap:6px;background:#fff;border:1px solid #e3e1dc;border-radius:99px;padding:3px 4px 3px 10px;font-size:12.5px;max-width:100%}
#pp .zal span em{font-style:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:220px}
#pp .zal img{width:22px;height:22px;object-fit:cover;border-radius:4px}
#pp .zal button{width:20px;height:20px;display:grid;place-items:center;color:#6b6d75}#pp .zal button svg{width:14px;height:14px}
#pp form{display:flex;align-items:flex-end;gap:6px}
#pp form .ib{width:36px;height:40px;display:grid;place-items:center;color:#55575e}#pp form .ib svg{width:21px;height:21px}
#pp form .ib.on{color:var(--red,#dc143c)}
#pp textarea{flex:1;resize:none;min-height:44px;max-height:140px;border:1px solid #d9d6d0;border-radius:12px;padding:10px 12px;font:inherit;background:#fff}
#pp .sl{width:44px;height:44px;border-radius:12px;background:#1d1f24;color:#fff;display:grid;place-items:center}#pp .sl svg{width:20px;height:20px}
#pp .sl:disabled,#pp textarea:disabled{opacity:.45}
#pp .hi{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}
#pp .hi li{background:#fff;border:1px solid #e6e3de;border-radius:12px;padding:10px 12px}
#pp .hi a{color:#16171a;font-weight:600;text-decoration:none}#pp .hi small{display:block;color:#6b6d75;font-size:12.5px;margin-top:2px}
#pp .hi .st{display:inline-block;font-size:11.5px;font-weight:600;padding:1px 7px;border-radius:99px;background:#e9f5ea;color:#2e7d32;margin-right:6px}
#pp .hi .st.z{background:#ecebe8;color:#6b6d75}
#pp [hidden]{display:none!important}
#pp .ust{display:flex;flex-direction:column;align-items:stretch;gap:12px;font-size:14px}#pp .ust p{margin:0}
#pp .ust label{display:flex;flex-direction:column;gap:4px;font-weight:600}
#pp .ust input{font:inherit;font-weight:400;border:1px solid #d9d6d0;border-radius:10px;padding:9px 11px;background:#fff}
#pp .ust .wy{align-self:flex-start}
#pp .pusto{color:#6b6d75;text-align:center;margin-top:30px;font-size:14px}
body.pp-celuje #pp{display:none}body.pp-celuje,body.pp-celuje *{cursor:crosshair!important}
#pp-ramka{position:fixed;z-index:9002;pointer-events:none;border:2px solid var(--red,#dc143c);background:rgba(220,20,60,.08);border-radius:4px;display:none}
#pp-tip{position:fixed;left:50%;top:14px;transform:translateX(-50%);z-index:9003;background:#1d1f24;color:#fff;padding:9px 14px;border-radius:99px;font:600 13px/1.3 var(--sans,system-ui);display:none;pointer-events:none;text-align:center;max-width:92vw}
body.pp-celuje #pp-ramka,body.pp-celuje #pp-tip{display:block}`;

function start(){
 const st=document.createElement('style');st.textContent=css;document.head.append(st);
 const b=document.createElement('button');b.id='pp-btn';b.type='button';b.innerHTML=`${ico('olowek')}<span>Poprawki</span><i></i>`;b.setAttribute('aria-label','Poprawki do portalu');
 b.onclick=otworz;document.body.append(b);
 const p=document.createElement('section');p.id='pp';p.setAttribute('aria-label','Poprawki do portalu');
 p.innerHTML=`<div class="gl"><div><b>Poprawki do portalu</b><small id="pp-ekran"></small></div><button type="button" id="pp-ustb" aria-label="Ustawienia połączenia" title="Ustawienia połączenia" hidden>${ico('tryb')}</button><button type="button" id="pp-zamknij" aria-label="Zamknij">${ico('x')}</button></div>
 <nav><button type="button" data-k="rozmowa" class="on">Rozmowa</button><button type="button" data-k="historia">Historia zgłoszeń</button></nav>
 <div class="wid" id="pp-wid" aria-live="polite"></div>
 <div class="kosz" id="pp-kosz" hidden><div class="w"><button type="button" class="l" id="pp-kl"></button><button type="button" class="wy" id="pp-wyslij">Wyślij</button></div><ol id="pp-lista" hidden></ol></div>
 <div class="dol" id="pp-dol"><div class="zal" id="pp-zal"></div>
  <form id="pp-form"><button type="button" class="ib" id="pp-cel" aria-label="Wskaż element na ekranie" title="Wskaż element na ekranie">${ico('cel')}</button>
  <button type="button" class="ib" id="pp-plik" aria-label="Dodaj zrzut lub zdjęcie" title="Dodaj zrzut lub zdjęcie">${ico('spinacz')}</button>
  <input type="file" id="pp-in" accept="image/*" multiple hidden>
  <textarea id="pp-txt" rows="1" placeholder="Co poprawić?" aria-label="Opisz poprawkę"></textarea>
  <button type="submit" class="sl" aria-label="Wyślij wiadomość">${ico('wyslij')}</button></form></div>`;
 document.body.append(p);
 const r=document.createElement('div');r.id='pp-ramka';const t=document.createElement('div');t.id='pp-tip';t.textContent='Kliknij element, który chcesz poprawić. Esc anuluje.';
 document.body.append(r,t);
 const $=s=>p.querySelector(s),txt=$('#pp-txt');
 $('#pp-zamknij').onclick=zamknij;$('#pp-ustb').hidden=LOK;$('#pp-ustb').onclick=()=>{UST=!UST;karta='rozmowa';rysuj()};
 p.querySelectorAll('nav button').forEach(x=>x.onclick=()=>{karta=x.dataset.k;p.querySelectorAll('nav button').forEach(y=>y.classList.toggle('on',y===x));rysuj();if(karta==='historia')odswiez()});
 $('#pp-form').onsubmit=e=>{e.preventDefault();wyslijWiad()};
 txt.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();wyslijWiad()}};
 txt.oninput=()=>{txt.style.height='auto';txt.style.height=Math.min(140,txt.scrollHeight)+'px'};
 txt.addEventListener('paste',e=>{const f=[...(e.clipboardData||{}).files||[]].filter(x=>x.type.startsWith('image/'));if(f.length){e.preventDefault();f.forEach(dodajPlik)}});
 $('#pp-plik').onclick=()=>$('#pp-in').click();
 $('#pp-in').onchange=e=>{[...e.target.files].forEach(dodajPlik);e.target.value=''};
 $('#pp-cel').onclick=celuj;
 $('#pp-kl').onclick=()=>{const l=$('#pp-lista');l.hidden=!l.hidden};
 $('#pp-wyslij').onclick=wyslijKoszyk;
 if(wez('otwarty',false))otworz();else licznik();
}
function otworz(){document.body.classList.add('pp-otwarte');document.getElementById('pp').classList.add('on');daj('otwarty',true);
 document.getElementById('pp-ekran').textContent='Ekran: '+ekran();rysuj();setTimeout(()=>document.getElementById('pp-txt').focus(),50)}
function zamknij(){document.body.classList.remove('pp-otwarte');document.getElementById('pp').classList.remove('on');daj('otwarty',false);licznik()}
function licznik(){const i=document.querySelector('#pp-btn i');if(i)i.textContent=S.koszyk.length||''}

/* ---------- kontekst bieżącego ekranu ---------- */
const widoczny=e=>e&&e.offsetParent!==null&&getComputedStyle(e).visibility!=='hidden';
function warstwa(){
 const sh=[...document.querySelectorAll('.sheet.on')].pop();if(sh)return sh;
 const app=document.getElementById('app');if(!app)return document.body;
 if(app.classList.contains('todo'))return document.getElementById('todo');
 if(app.classList.contains('chatting'))return document.getElementById('msgs');
 return app;
}
function ekran(){
 const w=warstwa();
 if(w&&w.classList.contains('sheet')){const t=w.querySelector('.nav b,h1,h2,h3');return (t&&t.textContent.trim())||'okno szczegółów'}
 if(w&&w.id==='todo')return 'Do załatwienia';
 if(w&&w.id==='msgs'){const u=[...w.querySelectorAll('.msg.user')].pop(),k=[...w.querySelectorAll('.ui .tt')].pop();
  return 'Rozmowa z asystentem'+(k?': karta „'+k.textContent.trim()+'”':u?': „'+u.textContent.trim().slice(0,70)+'”':'')}
 const t=document.getElementById('title');return 'Ekran główny'+(t&&widoczny(t)?' ('+t.textContent.trim()+')':'');
}
function tekstEkranu(){
 const w=warstwa();if(!w)return '';
 let t;if(w.id==='msgs'){const ost=[...w.children].slice(-3);t=ost.map(x=>x.innerText).join('\n')}else t=w.innerText||'';
 return t.replace(/[ \t]+/g,' ').replace(/\n\s*\n+/g,'\n').trim().slice(0,700);
}
function kontekst(){
 const o=typeof OS!=='undefined'?OS.imie+' '+OS.nazwisko:'';
 return ['[Kontekst]','Ekran: '+ekran(),'Adres: '+location.pathname+location.search,o&&'Osoba w pokazie: '+o,
  celEl?'Wskazany element: '+celEl.opis:'','Tekst widoczny na ekranie (fragment):\n'+tekstEkranu(),'[/Kontekst]'].filter(Boolean).join('\n');
}

/* ---------- celownik: wskazanie elementu i zrzut z zaznaczeniem ---------- */
function sciezka(e){
 const cz=[];for(let x=e,i=0;x&&x.nodeType===1&&x!==document.body&&i<5;x=x.parentElement,i++){
  let s=x.tagName.toLowerCase();if(x.id){cz.unshift(s+'#'+x.id);break}
  const c=[...x.classList].filter(k=>!/^(on|sel|done)$/.test(k)).slice(0,2);if(c.length)s+='.'+c.join('.');cz.unshift(s)}
 return cz.join(' > ');
}
function cel(e){return e.closest('button,a,[role=button],input,textarea,select,img,label,li,.row,.chip,h1,h2,h3,h4,p,.tt,.ui,.card')||e}
function celuj(){
 if(SRV&&!SRV.wlaczone)return;
 const ramka=document.getElementById('pp-ramka');document.body.classList.add('pp-celuje');let akt=null;
 const nasz=e=>e.closest&&e.closest('#pp,#pp-btn');
 const ruch=ev=>{const e=document.elementFromPoint(ev.clientX,ev.clientY);if(!e||nasz(e))return;akt=cel(e);const r=akt.getBoundingClientRect();
  Object.assign(ramka.style,{left:r.left-2+'px',top:r.top-2+'px',width:r.width+4+'px',height:r.height+4+'px'})};
 const stop=ev=>{if(!nasz(ev.target)){ev.preventDefault();ev.stopPropagation()}};
 const klik=ev=>{if(nasz(ev.target))return;stop(ev);ruch(ev);koniec();if(akt)wybrany(akt)};
 const esc=ev=>{if(ev.key==='Escape'){ev.preventDefault();koniec()}};
 const ZD=['pointerdown','mousedown','mouseup','pointerup','touchend'];
 function koniec(){document.body.classList.remove('pp-celuje');document.removeEventListener('pointermove',ruch,true);document.removeEventListener('click',klik,true);
  document.removeEventListener('keydown',esc,true);ZD.forEach(z=>document.removeEventListener(z,stop,true))}
 document.addEventListener('pointermove',ruch,true);document.addEventListener('click',klik,true);document.addEventListener('keydown',esc,true);
 ZD.forEach(z=>document.addEventListener(z,stop,{capture:true,passive:false}));
}
async function wybrany(e){
 const t=(e.innerText||e.getAttribute('aria-label')||e.getAttribute('alt')||e.getAttribute('placeholder')||'').replace(/\s+/g,' ').trim();
 celEl={opis:'`'+sciezka(e)+'`'+(t?' z tekstem „'+(t.length>140?t.slice(0,140)+'…':t)+'”':''),krotko:(t.length>60?t.slice(0,60)+'…':t)||e.tagName.toLowerCase()};
 document.getElementById('pp-ekran').textContent='Ekran: '+ekran();
 rysujZal();document.getElementById('pp-txt').focus();
 const z=await zrzut(e);if(z){celEl.zal=nowyZal(z);rysujZal()}
}
let h2c=null;
function html2canvasLib(){return h2c||(h2c=new Promise((ok,nie)=>{const s=document.createElement('script');
 s.src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';s.onload=()=>ok(window.html2canvas);s.onerror=()=>{h2c=null;nie()};document.head.append(s)}))}
async function zrzut(e){
 try{
  const lib=await html2canvasLib(),cel=document.getElementById('app')||document.body,skala=Math.min(2,window.devicePixelRatio||1);
  const c=await lib(cel,{scale:skala,useCORS:true,logging:false,backgroundColor:'#f2f3f7'});
  const R=cel.getBoundingClientRect(),r=e.getBoundingClientRect(),g=c.getContext('2d');
  g.strokeStyle='#dc143c';g.lineWidth=3*skala;g.strokeRect((r.left-R.left-3)*skala,(r.top-R.top-3)*skala,(r.width+6)*skala,(r.height+6)*skala);
  return pomniejsz(c);
 }catch(err){return null}
}
function pomniejsz(zr,max=1400){
 const w=zr.naturalWidth||zr.width,h=zr.naturalHeight||zr.height,k=Math.min(1,max/Math.max(w,h));
 const c=document.createElement('canvas');c.width=Math.round(w*k);c.height=Math.round(h*k);c.getContext('2d').drawImage(zr,0,0,c.width,c.height);
 return c.toDataURL('image/jpeg',.85);
}
function dodajPlik(f){const u=URL.createObjectURL(f),im=new Image();im.onload=()=>{nowyZal(pomniejsz(im),f.name);URL.revokeObjectURL(u);rysujZal()};im.src=u}
function nowyZal(dataUrl,nazwa){const id='z'+(++S.n);S.zal[id]=dataUrl;czeka.push({id,nazwa:nazwa||'zrzut z zaznaczeniem'});return id}
function rysujZal(){
 const box=document.getElementById('pp-zal'),cb=document.getElementById('pp-cel');cb.classList.toggle('on',!!celEl);
 box.innerHTML=(celEl?`<span data-c="1">${ico('cel')}<em>${H(celEl.krotko)}</em><button type="button" aria-label="Usuń wskazanie">${ico('x')}</button></span>`:'')+
  czeka.filter(z=>!celEl||z.id!==celEl.zal).map(z=>`<span data-z="${z.id}"><img src="${S.zal[z.id]}" alt=""><em>${H(z.nazwa)}</em><button type="button" aria-label="Usuń załącznik">${ico('x')}</button></span>`).join('');
 box.querySelectorAll('button').forEach(b=>b.onclick=()=>{const s=b.parentElement;
  if(s.dataset.c){if(celEl.zal){czeka=czeka.filter(z=>z.id!==celEl.zal);delete S.zal[celEl.zal]}celEl=null}
  else{czeka=czeka.filter(z=>z.id!==s.dataset.z);delete S.zal[s.dataset.z]}rysujZal()});
}

/* ---------- rozmowa ---------- */
function rysuj(){
 const w=document.getElementById('pp-wid'),dol=document.getElementById('pp-dol'),kosz=document.getElementById('pp-kosz');
 if(!w)return;
 if(karta==='historia'){dol.hidden=true;kosz.hidden=true;
  const h=SRV&&SRV.historia;
  w.innerHTML=!SRV||!SRV.wlaczone?`<p class="pusto">${H(blokada())}</p>`:SRV.blad_historii?`<p class="pusto">Nie udało się pobrać zgłoszeń z GitHuba: ${H(SRV.blad_historii)}</p>`:!SRV.github?'<p class="pusto">Brak tokenu GitHuba (GITHUB_TOKEN w .env albo GH_TOKEN_POPRAWKI dla Workera), więc nie widzę zgłoszeń.</p>':
   !h?'<p class="pusto">Wczytuję…</p>':!h.length?'<p class="pusto">Nie ma jeszcze zgłoszeń.</p>':
   `<ul class="hi">${h.map(x=>`<li><a href="${H(x.url)}" target="_blank" rel="noopener">#${x.nr} ${H(x.tytul)}</a><small><span class="st${x.stan==='open'?'':' z'}">${x.stan==='open'?'otwarte':'zamknięte'}</span>${H(x.data.split('-').reverse().join('.'))}</small></li>`).join('')}</ul>`;
  return}
 if(!LOK&&(UST||!adres()||!wez('kod','')||(BLAD&&!SRV))){dol.hidden=true;kosz.hidden=true;
  const zAdresem=UST||!ADRES_WORKERA;   // gdy adres jest wpisany w kod, pytamy tylko o kod (adres zmienia zębatka)
  w.innerHTML=`<form class="ust" id="pp-ust"><p>${zAdresem?'Na podglądzie online czat działa przez Workera Cloudflare. Podaj jego adres i kod dostępu (zostaną w tej przeglądarce).':'Podaj kod dostępu do panelu (zostanie w tej przeglądarce).'}</p>
   ${BLAD?`<p class="b blad">${H(BLAD)}</p>`:''}<label${zAdresem?'':' hidden'}>Adres Workera<input name="a" type="url" required placeholder="https://mobywatel-poprawki.….workers.dev" value="${H(adres())}"></label>
   <label>Kod dostępu<input name="k" type="password" required autocomplete="current-password" value="${H(wez('kod',''))}"></label><button class="wy" type="submit">Połącz</button></form>`;
  w.querySelector('form').onsubmit=e=>{e.preventDefault();const f=e.target;daj('adres',f.a.value.trim());daj('kod',f.k.value.trim());UST=false;BLAD='';SRV=null;w.innerHTML='<p class="pusto">Łączę…</p>';odswiez()};
  return}
 dol.hidden=false;
 const bl=blokada();
 w.innerHTML=[{kto:'bot',t:POWITANIE},...S.widok].map(m=>`<div class="b${m.kto==='ja'?' ja':m.kto==='blad'?' blad':''}">${m.html||MD(m.t)}${(m.zal||[]).map(z=>S.zal[z]?`<img src="${S.zal[z]}" alt="Załącznik ${z}">`:'').join('')}${m.el?`<small>🎯 ${H(m.el)}</small>`:''}</div>`).join('')+
  (bl?`<div class="b blad">${H(bl)}</div>`:'')+(zajety?'<div class="pisze">Claude pisze…</div>':'');
 w.scrollTop=w.scrollHeight;
 const txt=document.getElementById('pp-txt');txt.disabled=!!bl;document.querySelector('#pp .sl').disabled=!!bl||zajety;
 document.getElementById('pp-cel').disabled=document.getElementById('pp-plik').disabled=!!bl;
 const n=S.koszyk.length;kosz.hidden=!n;
 document.getElementById('pp-kl').textContent=`Koszyk: ${n} ${n===1?'poprawka':n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?'poprawki':'poprawek'} ▾`;
 document.getElementById('pp-wyslij').disabled=zajety||!SRV||!SRV.github;
 document.getElementById('pp-wyslij').title=SRV&&!SRV.github?'Brak tokenu GitHuba':'';
 const l=document.getElementById('pp-lista');
 l.innerHTML=S.koszyk.map((p,i)=>`<li><b>${H(p.tytul||'Poprawka')}</b><button type="button" data-i="${i}">usuń</button>${p.ekran?`<small>${H(p.ekran)}</small>`:''}</li>`).join('');
 l.querySelectorAll('button').forEach(b=>b.onclick=()=>{const i=+b.dataset.i,p=S.koszyk[i];S.koszyk.splice(i,1);
  // model musi wiedzieć, że Wojtek sam usunął pozycję (numeracja się zmienia)
  S.notka=(S.notka||'')+`\n(Usunąłem z koszyka pozycję ${i+1}: „${p.tytul}”. Pozostałe przesunęły się.)`;zapisz();rysuj();licznik()});
 licznik();
}
function blokada(){
 if(!SRV)return BLAD||'Łączę…';
 if(!SRV.wlaczone)return 'Panel poprawek jest wyłączony. Dodaj POPRAWKI=1 do .env i uruchom serwer ponownie.';
 if(!SRV.claude)return LOK?'Brak ANTHROPIC_API_KEY w .env. Dodaj klucz i uruchom serwer ponownie.':'Worker nie ma klucza Claude (sekret ANTHROPIC_API_KEY).';
 return '';
}
async function wyslijWiad(){
 const txt=document.getElementById('pp-txt'),t=txt.value.trim();
 if(zajety||blokada()||(!t&&!czeka.length&&!celEl))return;
 const zal=czeka.map(z=>z.id),el=celEl&&celEl.krotko;
 const tresc=[{type:'text',text:kontekst()+(S.notka?'\n'+S.notka.trim():'')+'\n\n'+(t||'(bez opisu, zobacz załącznik)')}];
 zal.forEach(id=>{const m=/^data:(image\/[a-z]+);base64,(.*)$/.exec(S.zal[id]||'');if(m)tresc.push({type:'text',text:'Załącznik '+id+':'},{type:'image',source:{type:'base64',media_type:m[1],data:m[2]}})});
 const hist=S.api.concat([{role:'user',content:tresc}]);
 S.widok.push({kto:'ja',t:t||'(załącznik)',zal,el});S.notka='';czeka=[];celEl=null;txt.value='';txt.style.height='auto';rysujZal();
 zajety=true;rysuj();
 try{
  const j=await api('/czat',{messages:hist,koszyk:S.koszyk});
  S.api=j.messages;S.koszyk=j.koszyk||[];S.widok.push({kto:'bot',t:j.tekst||'Zapisane.'});
 }catch(e){S.widok.push({kto:'blad',t:'Nie udało się: '+e.message+'. Wiadomość nie trafiła do rozmowy, możesz ją wysłać jeszcze raz.'})}
 zajety=false;zapisz();rysuj();
}
async function wyslijKoszyk(){
 if(zajety||!S.koszyk.length)return;zajety=true;rysuj();
 const uzyte={};S.koszyk.forEach(p=>(p.zalaczniki||[]).forEach(z=>{if(S.zal[z])uzyte[z]=S.zal[z]}));
 try{
  const j={wyniki:[]};   // porcjami po 5: Worker na darmowym planie ma limit zapytań na jedno wywołanie
  for(let i=0;i<S.koszyk.length;i+=5){const cz=S.koszyk.slice(i,i+5),zal={};cz.forEach(p=>(p.zalaczniki||[]).forEach(z=>{if(uzyte[z])zal[z]=uzyte[z]}));
   j.wyniki.push(...(await api('/wyslij',{koszyk:cz,zalaczniki:zal})).wyniki)}
  const ok=j.wyniki.filter(w=>w.url),zle=j.wyniki.filter(w=>!w.url);
  const html=(ok.length?`Wysłane na GitHub (${ok.length}):<br>`+ok.map(w=>`<a href="${H(w.url)}" target="_blank" rel="noopener">#${w.nr}</a> ${H(w.tytul)}`).join('<br>'):'')+
   (zle.length?`${ok.length?'<br><br>':''}Nie udało się (zostają w koszyku):<br>`+zle.map(w=>`${H(w.tytul||'Poprawka')}: ${H(w.blad)}`).join('<br>'):'');
  S.koszyk=S.koszyk.filter((p,i)=>!j.wyniki[i]||!j.wyniki[i].url);
  if(!S.koszyk.length){S.api=[];S.widok=[{kto:zle.length?'blad':'bot',html}];S.zal={};S.n=0}   // wszystko poszło: nowa rozmowa
  else{S.widok.push({kto:zle.length?'blad':'bot',html});S.notka=(S.notka||'')+'\n(Część poprawek wysłałem; w koszyku zostały tylko te, których nie udało się wysłać.)'}
  if(SRV)SRV.historia=null;
 }catch(e){S.widok.push({kto:'blad',t:'Wysyłka nie powiodła się: '+e.message})}
 zajety=false;zapisz();rysuj();
}
async function odswiez(){
 if(!LOK&&(!adres()||!wez('kod','')))return rysuj();
 try{SRV=await api('');BLAD=''}catch(e){SRV=null;BLAD=e.kod?'Zły kod dostępu.':'Nie mogę połączyć się z Workerem ('+e.message+'). Sprawdź adres.'}
 rysuj();
}

/* start: przycisk tylko, gdy serwer ma włączony panel albo ktoś wymusił go parametrem (wtedy z informacją, że działa lokalnie) */
fetch('/api/poprawki',{cache:'no-store'}).then(r=>r.ok?r.json():null).catch(()=>null).then(j=>{
 LOK=!!j&&typeof j.wlaczone==='boolean';SRV=LOK?j:null;
 if(LOK?(SRV.wlaczone&&wez('pokaz',true))||wez('pokaz',false):wez('pokaz',false)){start();if(!LOK)odswiez()}
});
})();
