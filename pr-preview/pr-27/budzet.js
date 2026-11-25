/* ---------- Budżet gminy: analiza z pliku budżetu, dokumenty w BIP i pytania do budżetu (dane fikcyjne) ----------
   Ładowany po gmina.js. Plik budżetu (mockup/dane/budzet-*.json) czyta i ta strona, i serwer (narzędzie budzet_gminy),
   więc asystent AI odpowiada z tych samych liczb, które widać na karcie. Bez AI pytania obsługuje proste wyszukiwanie
   pozycji w pliku. Celowo bez porównań z innymi miastami: tylko własny plan, wykonanie i historia gminy. */
const BUDZET_PLIK={jan:'dane/budzet-krakow-2026.json',ewa:'dane/budzet-lipowiec-2026.json'};
let BUD=null;
const budzetDane=()=>BUD||(BUD=fetch(BUDZET_PLIK[OS.id],{cache:'no-cache'}).then(r=>r.json()));

// kwoty z pliku są w „mln zł” albo „tys. zł”; na ekranie zawsze w czytelnej skali
const zlB=(B,x)=>x*(B.jednostka==='mln zł'?1e6:1e3);
const liczbaB=(x,m)=>x.toFixed(m).replace('.',',').replace(/\B(?=(\d{3})+(?!\d))/g,' ');
const kwB=(B,x)=>{const z=zlB(B,x);return z>=1e9?liczbaB(z/1e9,2)+' mld zł':z>=1e6?liczbaB(z/1e6,z>=1e8?0:1)+' mln zł':liczbaB(z/1e3,0)+' tys. zł'};
const naMieszB=(B,x)=>liczbaB(Math.round(zlB(B,x)/B.mieszkancy),0)+' zł';
const procB=(a,b)=>Math.round(100*a/b)+'%';
const sumB=(a,k)=>a.reduce((s,x)=>s+x[k],0);
// pozycje z całego pliku do wyszukiwania: [rodzaj, pozycja]
const pozycjeB=B=>[...B.wydatki.map(x=>['w',x]),...B.dochody.map(x=>['d',x]),...B.inwestycje.map(x=>['i',x])];
const gminaB=()=>GM.wladza==='Wójt'?'gmina':'miasto';

/* Analiza na jednej karcie: na wierzchu cztery liczby, wykonanie i „na co idą pieniądze”; reszta zwinięta. */
async function budzetKarta(){
 const B=await budzetDane(),D=sumB(B.dochody,'plan'),Wy=sumB(B.wydatki,'plan'),Dw=sumB(B.dochody,'wyk'),Ww=sumB(B.wydatki,'wyk');
 const H=B.historia,dlug=H[H.length-1].dlug,maj=sumB(B.wydatki,'majatkowe'),rok=Math.round(100*B.czesc_roku);
 const pasek=(p,hi)=>`<div class="gt"><i class="${hi?'hi':''}" style="width:${Math.min(100,p)}%"></i><u style="left:${rok}%"></u></div>`;
 const tile=(h,v,s)=>`<div><small>${h}</small><b>${v}</b><span>${s}</span></div>`;
 const wyd=[...B.wydatki].sort((a,b)=>b.plan-a.plan);
 const wbar=x=>`<div class="gbar"><div class="gl"><span>${x.nazwa}</span><b>${kwB(B,x.plan)}</b></div><div class="gt"><i style="width:${100*x.plan/wyd[0].plan}%"></i></div><small>${procB(x.plan,Wy)} wydatków · ${naMieszB(B,x.plan)} na mieszkańca · ${x.co}</small></div>`;
 const dbar=x=>`<div class="gbar"><div class="gl"><span>${x.krotko}</span><b>${kwB(B,x.plan)}</b></div><div class="gt"><i style="width:${100*x.plan/B.dochody[0].plan}%"></i></div><small>${procB(x.plan,D)} dochodów · wpłynęło ${procB(x.wyk,x.plan)} planu</small></div>`;
 const wyk=x=>{const p=100*x.wyk/x.plan,wolno=p<rok-15;return `<div class="gbar"><div class="gl"><span>${x.nazwa}</span><b>${Math.round(p)}%</b></div>${pasek(p,wolno)}<small>${kwB(B,x.wyk)} z ${kwB(B,x.plan)}${wolno?' · <em class="gwol">wolniej niż upływ roku</em>':''}</small></div>`};
 const maxD=Math.max(...H.map(h=>h.dlug));
 const dlugH=`<div class="gbud-sl" role="img" aria-label="Dług na koniec roku: ${H.map(h=>h.rok+' '+kwB(B,h.dlug)).join(', ')}">${H.map(h=>`<div title="${h.rok}: ${kwB(B,h.dlug)}"><small>${kwB(B,h.dlug).replace(/ (mld|mln|tys\.) zł/,'')}</small><i class="${h.rok===B.rok?'plan':''}" style="height:${Math.round(70*h.dlug/maxD)}px"></i><span>${h.rok}</span></div>`).join('')}</div>`;
 const hist=`<table class="gtab"><thead><tr><th>Rok</th><th>Dochody</th><th>Wydatki</th><th>Wynik</th></tr></thead><tbody>${H.map(h=>`<tr><td>${h.rok}${h.rok===B.rok?'*':''}</td><td>${kwB(B,h.dochody)}</td><td>${kwB(B,h.wydatki)}</td><td>${h.dochody>=h.wydatki?'+':'−'}${kwB(B,Math.abs(h.dochody-h.wydatki))}</td></tr>`).join('')}</tbody></table>`;
 const inw=[...B.inwestycje].sort((a,b)=>(b.blisko||0)-(a.blisko||0)||b.plan-a.plan);
 const inwH=x=>`<li class="os"><b>${x.nazwa}</b><small>${x.blisko?'<strong class="gblis">przy Tobie</strong> · ':''}${x.gdzie}</small><small>w ${B.rok} r.: ${kwB(B,x.plan)}, wydano ${procB(x.wyk,x.plan)} · cały koszt ${kwB(B,x.koszt)} (${x.lata})</small>${x.stan?`<small>${x.stan}</small>`:''}</li>`;
 const W=WLADZE[OS.id],u=(r,t)=>W.bip+'/budzet/'+r+'/'+slugB(t)+'.pdf',jst=B.nazwa.replace('Budżet ',''),org=GM.wladza==='Wójt'?'Wójta Gminy':'Prezydenta Miasta';
 // dokumenty jak w dziale „Budżet i sprawozdania” w BIP: rok po roku, najnowszy rozwinięty
 const DOK={[B.rok+1]:[`${B.nazwa} na rok ${B.rok+1} – projekt ${org}`,`Opinia Regionalnej Izby Obrachunkowej o projekcie budżetu na ${B.rok+1} rok`],
  [B.rok]:[`${B.nazwa} na rok ${B.rok}`,`Opinie Regionalnej Izby Obrachunkowej za ${B.rok} rok`,`Miesięczna informacja z realizacji budżetu ${jst} w roku ${B.rok}`,`Plan dochodów i wydatków budżetowych w roku ${B.rok}`,`Kwartalna informacja o wykonaniu budżetu jednostki samorządu terytorialnego w ${B.rok} r.`],
  [B.rok-1]:[`${B.nazwa} na rok ${B.rok-1}`,`Sprawozdanie z wykonania budżetu ${jst} za ${B.rok-1} rok`,`Opinie Regionalnej Izby Obrachunkowej za ${B.rok-1} rok`,`Miesięczna informacja z realizacji budżetu ${jst} w roku ${B.rok-1}`,`Plan dochodów i wydatków budżetowych w roku ${B.rok-1}`,`Kwartalna informacja o wykonaniu budżetu jednostki samorządu terytorialnego w ${B.rok-1} r.`,`Roczna informacja o wykonaniu budżetu jednostki samorządu terytorialnego za rok ${B.rok-1}`]};
 const dokH=Object.keys(DOK).sort().reverse().map(r=>`<div class="gbr">${r} rok</div><ul>${DOK[r].map(t=>`<li><a href="${u(r,t)}" target="_blank" rel="noopener"><b>${t}</b><small class="u">${u(r,t).replace(/^https:\/\//,'')}</small></a></li>`).join('')}</ul>`).join('');
 const sek=(ic,t,h,otw)=>`<details class="gdok gbud-d"${otw?' open':''}><summary>${svg(ic)}<span>${t}</span>${svg('chev')}</summary><div class="gbud-b">${h}</div></details>`;
 const PYT=GM.budzetPyt||[];
 const c=await card(`<div class="ui gbud">${hd('coin',`${B.nazwa} na ${B.rok} r.<small>${B.stan_planu}, wykonanie do ${B.wykonanie_na}</small>`)}
  <div class="gbst">${tile('Dochody',kwB(B,D),naMieszB(B,D)+' na mieszkańca')}${tile('Wydatki',kwB(B,Wy),'w tym inwestycje '+procB(maj,Wy))}
   ${tile(D>=Wy?'Nadwyżka':'Deficyt',kwB(B,Math.abs(D-Wy)),D>=Wy?'na spłatę długu':'pokryty kredytem i wolnymi środkami')}${tile('Dług na koniec roku',kwB(B,dlug),procB(dlug,D)+' dochodów')}</div>
  <div class="gsek">Wykonanie do ${B.wykonanie_na} · minęło ${rok}% roku</div>
  <div class="gbud-b">${[['Dochody',Dw,D],['Wydatki',Ww,Wy]].map(([n,a,b])=>`<div class="gbar"><div class="gl"><span>${n}</span><b>${procB(a,b)}</b></div>${pasek(100*a/b)}<small>${kwB(B,a)} z ${kwB(B,b)}</small></div>`).join('')}</div>
  <div class="gsek">Na co idą pieniądze</div>
  <div class="gbud-b">${wyd.slice(0,4).map(wbar).join('')}</div>
  ${sek('dots','Pozostałe wydatki · '+(wyd.length-4)+' działów',wyd.slice(4).map(wbar).join(''))}
  ${sek('coin','Skąd są pieniądze',B.dochody.map(dbar).join(''))}
  ${sek('clock','Wykonanie w działach',`<p class="gbud-p">Kreska to upływ roku (${rok}%). Wydatki na inwestycje rosną zwykle pod koniec roku, po odbiorach.</p>`+wyd.map(wyk).join(''))}
  ${sek('db','Dług i wynik w kolejnych latach',`<p class="gbud-p">Dług na koniec roku${H.some(h=>h.rok===B.rok)?' ('+B.rok+': prognoza z planu)':''}</p>${dlugH}${hist}<p class="gbud-p">* plan. Deficyt ${B.rok} r. pokrywają: ${B.finansowanie.przychody.map(([n,v])=>n.toLowerCase()+' '+kwB(B,v)).join(', ')}; spłata rat: ${kwB(B,sumB(B.finansowanie.rozchody.map(([,v])=>({v})),'v'))}.</p>`)}
  ${sek('dom','Inwestycje przy Tobie i największe',`<ul>${inw.map(inwH).join('')}</ul>`)}
  ${sek('doc','Dokumenty budżetu w '+GM.bip,dokH+`<ul><li><a href="${BUDZET_PLIK[OS.id]}" target="_blank" rel="noopener"><b>Plik budżetu ${B.rok} (dane, JSON)</b><small>z tego pliku liczę wykresy i odpowiadam na pytania</small></a></li></ul><div class="note">Odnośniki do BIP są fikcyjne (prototyp).</div>`)}
  <div class="gsek">Zapytaj o budżet</div>
  <form class="gbq"><input type="text" placeholder="Np. ${esc(PYT[0]||'Ile wydajemy na oświatę?')}" aria-label="Pytanie o budżet" maxlength="200"><button class="btn primary" type="submit">Zapytaj</button></form>
  <div class="gpod gbqp">${PYT.map((q,i)=>`<button type="button" data-q="${i}">${q}</button>`).join('')}</div>
  <div class="note">Odpowiedź pochodzi tylko z pliku budżetu ${B.rok} r. i sprawozdań z lat ${H[0].rok}–${B.rok-1}. Bez porównań z innymi ${GM.wladza==='Wójt'?'gminami':'miastami'}.</div>
  ${srcH(B.uchwala+'; kwartalna informacja o wykonaniu budżetu (dane fikcyjne)')}</div>`);
 const f=c.querySelector('.gbq'),inp=f.querySelector('input');
 f.onsubmit=e=>{e.preventDefault();const q=inp.value.trim();if(q.length<3)return;inp.value='';budzetPytaj(q)};
 c.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>budzetPytaj(PYT[+b.dataset.q]));
 return c;
}

/* Pytanie do budżetu: z AI idzie do asystenta (narzędzie budzet_gminy czyta ten sam plik), bez AI szukamy pozycji w pliku. */
function budzetPytaj(q){
 act(()=>{addUser(q);
  if(app.dataset.agent==='1'&&typeof agentSend==='function')return agentSend(q,{hidden:`[Pytanie o budżet ${GM.nazwa}: odpowiedz tylko na podstawie pliku budżetu z narzędzia budzet_gminy, podaj kwoty i pozycje] ${q}`});
  return S.budzetOdp(q)});
}
const STOP_B=new Set('ile jak jaki jaka jakie czy co gdzie kiedy jest sa na w z do od za po dla the moje moja mojej mojego nasze nasza miasto miasta gmina gminy budzet budzecie budzetu wydaje wydaja wydatki wydatkow kosztuje koszt kosztowac zl roku rok tym tego'.split(' '));
const rdzen=w=>w.slice(0,Math.max(4,Math.min(6,w.length-2)));
function budzetSzukaj(B,q){
 const n=norm(q),sl=n.split(/[^a-z0-9]+/).filter(w=>w.length>=3&&!STOP_B.has(w)).map(rdzen);
 return pozycjeB(B).map(([r,x])=>{const t=norm([x.nazwa,x.krotko,x.slowa,x.co,x.gdzie].filter(Boolean).join(' ')).split(/[^a-z0-9]+/);
  return [sl.filter(s=>t.some(w=>w.startsWith(s))).length+(r==='i'&&/kosztuj|inwestycj|kiedy|budow/.test(n)?.5:0),r,x]}).filter(z=>z[0]>=1).sort((a,b)=>b[0]-a[0]);
}
function budzetZdanie(B,r,x){
 const D=sumB(B.dochody,'plan'),Wy=sumB(B.wydatki,'plan');
 if(r==='w')return `Na „${x.nazwa}” (dział ${x.dzial}) ${gminaB()} ${gminaB()==='gmina'?'zaplanowała':'zaplanowało'} <b>${kwB(B,x.plan)}</b> w ${B.rok} r., czyli ${procB(x.plan,Wy)} wszystkich wydatków i ${naMieszB(B,x.plan)} na mieszkańca. Do ${B.wykonanie_na} wydano ${kwB(B,x.wyk)} (${procB(x.wyk,x.plan)} planu)${x.majatkowe?', w tym na inwestycje zaplanowano '+kwB(B,x.majatkowe):''}.`;
 if(r==='d')return `${x.krotko}: w ${B.rok} r. ${gminaB()} planuje <b>${kwB(B,x.plan)}</b>, czyli ${procB(x.plan,D)} dochodów. Do ${B.wykonanie_na} wpłynęło ${kwB(B,x.wyk)} (${procB(x.wyk,x.plan)} planu).`;
 return `${x.nazwa}: w ${B.rok} r. zaplanowano <b>${kwB(B,x.plan)}</b>, do ${B.wykonanie_na} wydano ${kwB(B,x.wyk)}. Cały koszt to ${kwB(B,x.koszt)}, lata ${x.lata}.${x.stan?' '+x.stan.replace(/^./,c=>c.toUpperCase())+'.':''}`;
}

function budzetInit(){
 if(!GM||!BUDZET_PLIK[OS.id])return;
 budzetDane().catch(()=>{BUD=null});   // wcześniej, żeby trasa pytań mogła odpowiadać od razu
 Object.assign(S,{
  async gLiczby(){
   try{await budzetKarta()}catch(e){await say('Nie udało się wczytać pliku budżetu. Spróbuj jeszcze raz za chwilę.');return}
   chips([{label:'Sesje rady',go:S.gSesja},GM.bo?{label:'Zagłosuj w budżecie obywatelskim',go:S.gBO}:{label:'Kto dostaje pieniądze gminy?',go:S.gUmowy}]);
  },
  async budzetOdp(q){
   const B=await budzetDane(),n=norm(q),H=B.historia,D=sumB(B.dochody,'plan'),Wy=sumB(B.wydatki,'plan');
   let tekst='',rows=[];
   if(/dlug|zadluz|kredyt|oblig|pozycz/.test(n)){
    tekst=`Dług ${gminaB()==='miasto'?'miasta':'gminy'} na koniec ${B.rok} r. ma wynieść <b>${kwB(B,H[H.length-1].dlug)}</b>, czyli ${procB(H[H.length-1].dlug,D)} tegorocznych dochodów. W ${H[0].rok} r. było to ${kwB(B,H[0].dlug)}. Odsetki kosztują w tym roku ${kwB(B,(B.wydatki.find(x=>x.dzial==='757')||{plan:0}).plan)}.`;
    rows=H.map(h=>[h.rok+(h.rok===B.rok?' (plan)':''),kwB(B,h.dlug)]);
   }else if(/deficyt|nadwyzk|brakuj|dziur/.test(n)){
    tekst=`W ${B.rok} r. wydatki są wyższe od dochodów o <b>${kwB(B,Wy-D)}</b>. Różnicę pokrywają: ${B.finansowanie.przychody.map(([k,v])=>k.toLowerCase()+' '+kwB(B,v)).join(' i ')}.`;
    rows=[['Dochody',kwB(B,D)],['Wydatki',kwB(B,Wy)],...B.finansowanie.przychody.map(([k,v])=>[k,kwB(B,v)]),...B.finansowanie.rozchody.map(([k,v])=>[k,kwB(B,v)])];
   }else{
    const T=budzetSzukaj(B,q);
    if(T.length){const [,r,x]=T[0];tekst=budzetZdanie(B,r,x);
     rows=T.slice(0,4).map(([,r,x])=>[x.nazwa+'<small class="gsm">'+(r==='w'?'wydatki, dział '+x.dzial:r==='d'?'dochody':'inwestycja, '+x.lata)+'</small>',kwB(B,x.plan)+'<small class="gsm">wykonano '+procB(x.wyk,x.plan)+'</small>'])}
    else if(/ile|caly|cały|ogolem|razem|wynosi/.test(n)){tekst=`Budżet na ${B.rok} r.: dochody <b>${kwB(B,D)}</b>, wydatki <b>${kwB(B,Wy)}</b>, czyli ${naMieszB(B,Wy)} na mieszkańca.`;rows=[['Dochody',kwB(B,D)],['Wydatki',kwB(B,Wy)]]}
   }
   if(!tekst){await say('Nie znalazłem tego w pliku budżetu. Zapytaj o dział (np. oświata, drogi, kultura), konkretną inwestycję, dochody z podatków albo dług.');
    chips((GM.budzetPyt||[]).map(p=>({label:p,go:()=>S.budzetOdp(p)})));return}
   await say(tekst);
   if(rows.length)await info({icon:'coin',title:'Z pliku budżetu',source:B.uchwala.split(' w sprawie')[0]+', '+B.stan_planu+' (dane fikcyjne)',rows,
    note:'Tryb bez AI: wyszukuję pozycje w pliku budżetu. Z asystentem AI dostaniesz odpowiedź pełnym zdaniem, też wyłącznie z tego pliku.'});
   chips([...(GM.budzetPyt||[]).filter(p=>p!==q).slice(0,2).map(p=>({label:p,go:()=>S.budzetOdp(p)})),{label:'Pokaż cały budżet',go:S.gLiczby}]);
  }
 });
 // pytania typu „ile miasto wydaje na…”, „ile kosztuje…” odpowiadamy z pliku (tylko tryb skryptowy; w trybie AI trasy przejmuje asystent)
 const _route=route;
 route=function(t){
  if(pending||!BUD)return _route(t);
  const n=norm(t);
  if(/\b(ile|kiedy|jak duz|jaki|czy)\b/.test(n)&&/budze|miast|gmin|dlug|zadluz|deficyt|inwestycj|kosztuje? (przebudow|budow|remont|moderniz)/.test(n))return S.budzetOdp(t);
  return _route(t);
 };
}
document.addEventListener('DOMContentLoaded',budzetInit);
