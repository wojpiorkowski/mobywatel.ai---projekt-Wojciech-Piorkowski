/* ---------- Moja gmina: co się zmienia przy mnie, kto decyduje, jak zareagować (dane fikcyjne) ----------
   Ładowany po osoby.js, przed core.js: dokłada kartę „Moja gmina” do portfela osoby, która ma dane gminy.
   Scenariusze i trasy dopina po załadowaniu reszty (DOMContentLoaded), bo S i route są w scenarios.js. */
const GMINY={
 ewa:{
  nazwa:'Gmina Lipowiec',krotko:'Lipowiec',typ:'gmina wiejska, powiat lubelski',mieszk:'8 940',solectwo:'Lipowiec Kolonia',soltys:'Halina Mazur',
  urzad:'Urząd Gminy Lipowiec',bip:'BIP Gminy Lipowiec',
  wojt:{kto:'Zbigniew Kordas',od:2006,kad:'5. kadencja (od 2006)',wybory:'2024: jedyny kandydat, 68% głosów „tak”',limit:'Obecna kadencja jest ostatnią (limit dwóch kadencji liczonych od 2018 r.), chyba że Sejm zniesie limit.'},
  rada:{n:15,wojta:13,komitet:'KWW Razem dla Lipowca',jeden:'w 9 z 15 okręgów był tylko jeden kandydat',frekw:'49%',
   radny:{kto:'Stanisław Wójcik',okreg:'okręg nr 4',komitet:'KWW Razem dla Lipowca',dyzur:'pierwszy poniedziałek miesiąca, 16:00–17:00, urząd gminy, pok. 12'},
   glosy:[['Przystąpienie do zmiany planu „Pola Południowe” (03.2025)','za'],['Podwyżka opłaty za odpady do 39 zł (12.2025)','za'],['Nagrania posiedzeń komisji (09.2026, wniosek radnej spoza klubu wójta)','przeciw']]},
  sesja:{kiedy:'26.11.2026, godz. 10:00',gdzie:'sala GOK, transmisja na BIP',porzadek:['Projekt budżetu na 2027 r. (pierwsze czytanie)','Stawki podatku od nieruchomości na 2027 r.','Sprzedaż działki 214/3 w trybie bezprzetargowym']},
  uchwaly:[
   {tytul:'Projekt budżetu na 2027 r.',nr:'projekt uchwały budżetowej, pierwsze czytanie',
    co:'Gmina chce wydać 57,3 mln zł przy dochodach 54,1 mln zł. Brakujące 3,2 mln zł pokryje kredyt.',
    kogo:'wszystkich mieszkańców; w Twoim sołectwie fundusz sołecki 38 tys. zł',
    rows:[['Dochody','54,1 mln zł'],['Wydatki','57,3 mln zł'],['Deficyt','3,2 mln zł, kredyt'],['Największa inwestycja','droga Lipowiec Kolonia – Wola, 2,4 mln zł'],['Szkoła w Lipowcu','termomodernizacja, 1,1 mln zł'],['Promocja i biuletyn','420 tys. zł (w 2026 r. 410 tys. zł)']],
    za:['droga przy Twoim sołectwie, o którą mieszkańcy prosili od 2019 r.','termomodernizacja szkoły obniży rachunki o ok. 90 tys. zł rocznie'],
    przeciw:['dług wzrośnie do ok. 34% dochodów, podobne gminy mają 18%','wydatki na promocję rosną, a na pomoc społeczną bez zmian'],
    komisja:'Komisja budżetowa: opinia pozytywna, 4 za, 1 przeciw',zrodla:'Projekt uchwały budżetowej, opinia RIO, protokół komisji budżetowej'},
   {tytul:'Stawki podatku od nieruchomości na 2027 r.',nr:'projekt uchwały nr XXVII/2026',
    co:'Stawki rosną średnio o 9%. Domy mieszkalne: z 1,05 do 1,15 zł za m², grunty pod domami: z 0,58 do 0,63 zł za m².',
    kogo:'właścicieli domów, mieszkań, działek i firm',
    rows:[['Twój dom','128 m², +12,80 zł rocznie'],['Twoja działka','1 150 m², +57,50 zł rocznie'],['Razem dla Ciebie','<b>+70,30 zł rocznie</b> (z 656 zł do 726 zł)'],['Do budżetu gminy','ok. +410 tys. zł rocznie']],
    za:['inflacja i wyższe koszty utrzymania dróg i szkół','stawki nadal niższe niż maksymalne ustawowe'],
    przeciw:['drugi wzrost z rzędu (w 2026 r. +7%)','dla firm ponad dwa razy więcej niż dla domów, co może odstraszać inwestorów'],
    komisja:'Komisja budżetowa: opinia pozytywna, 3 za, 2 przeciw',zrodla:'Projekt uchwały, uzasadnienie, obwieszczenie MF o maksymalnych stawkach, Twoja decyzja podatkowa'},
   {tytul:'Sprzedaż działki 214/3 bez przetargu',nr:'projekt uchwały nr XXVIII/2026',
    co:'Gmina chce sprzedać działkę 0,21 ha przy ul. Polnej właścicielowi przyległej działki, bez przetargu, za 86 tys. zł według wyceny rzeczoznawcy.',
    kogo:'nikogo bezpośrednio; dotyczy majątku gminy',
    rows:[['Działka','214/3, 0,21 ha, ul. Polna'],['Cena','86 tys. zł (wycena rzeczoznawcy z 08.2026)'],['Nabywca','właściciel przyległej działki (firma usługowa)'],['Tryb','bezprzetargowy, poprawa zagospodarowania sąsiedniej nieruchomości']],
    za:['działka jest wąska i sama trudno ją zagospodarować','tryb przewiduje ustawa o gospodarce nieruchomościami'],
    przeciw:['bez przetargu nikt inny nie może zaoferować więcej','wycena sprzed planowanej zmiany planu w okolicy'],
    komisja:'Komisja rewizyjna: brak opinii, sprawa nie trafiła na posiedzenie',zrodla:'Projekt uchwały, operat szacunkowy (do wglądu w urzędzie)'}],
  plan:{nazwa:'Zmiana planu miejscowego „Pola Południowe”',odl:'380 m od Twojego domu',pow:'42 ha',
   teraz:'tereny rolnicze (R), grunty III klasy',projekt:'produkcja, składy i magazyny (P/U), budynki do 18 m',
   dojazd:'ul. Szkolną, obok Szkoły Podstawowej w Lipowcu',wniosek:'na wniosek właściciela gruntów (spółka prawa handlowego)',
   wylozenie:'12.10–18.12.2026',spotkanie:'25.11.2026, godz. 17:00, sala GOK',uwagi:'18.12.2026',nr:'RPP.6721.4.2025',
   za:['ok. 120 miejsc pracy według wnioskodawcy','ok. 1,1 mln zł rocznie z podatku od nieruchomości (ok. 4% dochodów gminy)','dojazd do drogi wojewódzkiej bez wjazdu do centrum'],
   przeciw:['prognoza: ok. 60 ciężarówek na dobę ulicą Szkolną','praca magazynów także nocą, hałas przy domach','utrata 42 ha gruntów rolnych III klasy']},
  liczby:[['Dochody na mieszkańca','5 820 zł','5 640 zł',103],['Zadłużenie (% dochodów)','31%','18%',172,1],['Promocja i biuletyn na mieszkańca','46 zł','19 zł',242,1],['Inwestycje (% wydatków)','14%','21%',67,1],['Oświata (% wydatków)','38%','36%',106]],
  umowy:[['Drogbud sp. z o.o.','4,82 mln zł','3 umowy na drogi, przetargi, po 1 ofercie'],['Eko-Wywóz sp. z o.o.','2,10 mln zł','odbiór odpadów, przetarg, 2 oferty'],['Lipa Media','186 tys. zł','biuletyn „Wieści Lipowieckie”, zamówienie z wolnej ręki'],['Kancelaria radcy prawnego','96 tys. zł','obsługa urzędu, zapytanie ofertowe']],
  darczyncy:{komitet:'KWW Razem dla Lipowca (wybory 2024)',suma:'48 600 zł od 21 osób',najwieksze:[['Członek zarządu Drogbud sp. z o.o.','12 000 zł'],['Właściciel Lipa Media','8 000 zł'],['Pozostałe 19 wpłat','28 600 zł']]},
  nabory:[['Inspektor ds. zamówień publicznych','Urząd Gminy','do 14.11.2026'],['Nauczyciel matematyki','SP w Lipowcu','do 20.11.2026'],['Kierowca, operator koparki','Gminny Zakład Komunalny sp. z o.o.','do 30.11.2026']],
  naborStat:'W 2026 r. 11 naborów, w 7 z nich zgłosiła się jedna osoba.',
  glos:{prog:200,progOpis:'200 podpisów (gmina do 20 tys. mieszkańców)',komitet:['Ewa Nowak','Piotr Sadowski','Agnieszka Lis'],
   projekt:{tytul:'Uchwała w sprawie panelu obywatelskiego o zmianie planu „Pola Południowe”',
    tresc:['§ 1. Przed uchwaleniem zmiany planu „Pola Południowe” przeprowadza się panel obywatelski: 24 mieszkańców gminy wylosowanych z rejestru mieszkańców, z zachowaniem proporcji wieku, płci i sołectw.','§ 2. Panel zapoznaje się ze stanowiskami wnioskodawcy, urzędu i mieszkańców oraz przyjmuje rekomendacje większością 80% głosów.','§ 3. Wójt przedstawia radzie rekomendacje panelu wraz z projektem planu i informacją, jak je uwzględniono.'],
    uzas:'Zmiana planu dotyczy 42 ha i kilkuset gospodarstw w trzech sołectwach. Panel pozwala rozważyć argumenty za i przeciw przez mieszkańców, którzy nie są stroną sporu.'},
   sesjaProjektu:'28.01.2027',debata:{raport:'Raport o stanie gminy za 2026 r.',kiedy:'czerwiec 2027',podpisy:'20 podpisów mieszkańców'},
   wybory:{kiedy:'wiosna 2029',radny:'25 podpisów wyborców z okręgu',wojt:'150 podpisów (gmina do 20 tys. mieszkańców)',dieta:'ok. 900 zł miesięcznie (uchwała rady, dane fikcyjne)',
    soltys:'zebranie wiejskie po wyborach samorządowych, kandydata zgłasza się na zebraniu'}}
 }
};
const GM=GMINY[OS.id]||null;
if(GM)OS.docs.push({id:'gmina',name:'Moja gmina',img:'assets/card-gmina.svg',sub:GM.nazwa,alert:'Zmiana planu przy Tobie',holder:GM.nazwa.toUpperCase(),line:GM.typ,
 f:[['Sołectwo',GM.solectwo],['Uwagi do planu','do '+GM.plan.uwagi]],rows:[]});

/* mapka okolicy: dom, szkoła, obszar zmiany planu i dojazd ciężarówek */
function mapaPlanu(){const P=GM.plan;return `<svg class="gmap" viewBox="0 0 320 172" role="img" aria-label="Mapka: obszar zmiany planu ${P.odl}, dojazd ${P.dojazd}">
 <defs><pattern id="kres" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="7" height="7" fill="#fdecef"/><path d="M0 0v7" stroke="#dc143c" stroke-width="2.2" stroke-opacity=".55"/></pattern></defs>
 <rect width="320" height="172" rx="12" fill="#eef3ec"/>
 <path d="M0 58h320" stroke="#fff" stroke-width="9"/><path d="M150 58v114" stroke="#fff" stroke-width="7"/><path d="M150 132h170" stroke="#fff" stroke-width="7"/>
 <text x="8" y="50" class="ml">ul. Lubelska</text><text x="156" y="82" class="ml">ul. Szkolna</text>
 <g fill="#d5dccf"><rect x="40" y="18" width="16" height="12" rx="2"/><rect x="66" y="22" width="14" height="10" rx="2"/><rect x="100" y="70" width="18" height="13" rx="2"/><rect x="40" y="76" width="15" height="11" rx="2"/><rect x="72" y="104" width="16" height="12" rx="2"/></g>
 <rect x="194" y="142" width="122" height="27" fill="url(#kres)" stroke="#dc143c" stroke-width="1.4"/><rect x="222" y="80" width="94" height="46" fill="url(#kres)" stroke="#dc143c" stroke-width="1.4"/>
 <text x="227" y="97" class="mt">Pola Południowe</text><text x="227" y="111" class="ml">${P.pow}, magazyny</text>
 <rect x="160" y="92" width="34" height="22" rx="3" fill="#4a6fa5"/><text x="177" y="107" class="ms">SP</text>
 <path d="M228 132H158V66" fill="none" stroke="#dc143c" stroke-width="2" stroke-dasharray="5 4"/><path d="m153 72 5-8 5 8" fill="none" stroke="#dc143c" stroke-width="2"/>
 <text x="196" y="125" class="mr">dojazd TIR</text>
 <path d="M124 34 226 86" stroke="#6b7280" stroke-width="1" stroke-dasharray="2 3"/><text x="176" y="54" class="ml" transform="rotate(26 176 54)">${P.odl.split(' ')[0]} m</text>
 <g transform="translate(112 12)"><path d="M12 0a12 12 0 0 1 12 12c0 9-12 20-12 20S0 21 0 12A12 12 0 0 1 12 0z" fill="#16805a"/><path d="M6.5 16v-5l5.5-4.2 5.5 4.2v5h-3.6v-3.4h-3.8V16z" fill="#fff"/></g>
 <text x="140" y="26" class="mt">Twój dom</text>
</svg>`}

/* ---------- panel „Moja gmina” (zamiast zwykłych szczegółów dokumentu) ---------- */
function openGmina(){
 const det=$('#detail'),top=getComputedStyle($('.status')).display!=='none'?50:6,d=DOCS.find(x=>x.id==='gmina'),P=GM.plan;
 const it=(k,ic,h,s)=>`<button class="it" data-k="${k}"><span class="gi">${svg(ic)}</span><span class="x"><b>${h}</b><small>${s}</small></span>${svg('chev')}</button>`;
 det.innerHTML=`<div style="height:${top}px;flex:none"></div><div class="nav"><button class="back" id="dclose">${svg('back')}Wróć</button><b>Moja gmina</b><span></span></div>
  <div class="body"><div class="bigcard" style="background-image:url(${d.img})">${faceHTML(d)}</div>
  <div class="ui galert"><div class="hd"><div class="ic">${svg('alert')}</div><div class="tt">Zmienia się coś przy Tobie<small>${P.nazwa}, ${P.odl}</small></div></div>
   <div class="body">${mapaPlanu()}</div>
   <div class="rows">${rowsH([['Teraz',P.teraz],['Projekt',P.projekt],['Uwagi do','<em>'+P.uwagi+'</em>']])}</div>
   <div class="actions"><button class="btn primary" data-k="plan">Zobacz i zgłoś uwagę</button></div>${srcH(GM.bip+', rejestr urbanistyczny (dane fikcyjne)')}</div>
  <div class="ui list glist">${hd('doc','Twoja gmina')}
   ${it('gRada','id','Rada i wójt',GM.wojt.kto+', '+GM.wojt.kad.split(' (')[0]+' · Twój radny: '+GM.rada.radny.kto)}
   ${it('gSesja','clock','Najbliższa sesja rady',GM.sesja.kiedy+' · '+GM.uchwaly.length+' projekty uchwał')}
   ${it('gLiczby','coin','Gmina w liczbach','budżet i dług na tle podobnych gmin')}
   ${it('gUmowy','db','Kto dostaje pieniądze gminy','umowy z Centralnego Rejestru Umów')}
   ${it('gNabory','bell','Praca w gminie',GM.nabory.length+' otwarte nabory')}
   ${it('glos','mail','Zabierz głos','projekt uchwały, pytanie do rady, kandydowanie')}
   ${srcH(GM.typ+', '+GM.mieszk+' mieszkańców')}</div></div>`;
 tick();det.classList.add('on');
 $('#dclose').onclick=()=>det.classList.remove('on');
 const Q={plan:'Co się zmienia przy moim domu?',gRada:'Kto rządzi w mojej gminie?',gSesja:'Czym zajmie się najbliższa sesja rady?',gLiczby:'Jak wygląda budżet mojej gminy?',gUmowy:'Komu gmina płaci najwięcej?',gNabory:'Jakie są nabory do pracy w gminie?',glos:'Jak mogę zabrać głos w sprawach gminy?'};
 det.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{det.classList.remove('on');setTimeout(()=>startTopic(Q[b.dataset.k],()=>S[b.dataset.k]()),180)});
}

const ETYKIETA='Tak mogłoby działać. Dziś prawo wymaga podpisów na papierze, więc ten krok pokazuje proponowaną zmianę.';
const kroki=a=>'<ol class="gsteps">'+a.map(([t,d,st])=>`<li class="${st||''}"><b>${t}</b><small>${d}</small></li>`).join('')+'</ol>';
const lista=a=>'<ul class="gul">'+a.map(x=>`<li>${x}</li>`).join('')+'</ul>';
const ZG={ruch:'Ruch ciężarówek przy szkole',noc:'Praca magazynów nocą',wys:'Budynki do 18 m',ziel:'Brak pasa zieleni od domów'};
const ZGT={ruch:'wyznaczenie dojazdu do terenu P/U bezpośrednio z drogi wojewódzkiej, z zakazem ruchu pojazdów powyżej 3,5 t na ul. Szkolnej',
 noc:'ograniczenie działalności powodującej hałas w porze nocnej (22:00–6:00) od strony zabudowy mieszkaniowej',
 wys:'obniżenie maksymalnej wysokości zabudowy do 12 m',ziel:'wprowadzenie pasa zieleni izolacyjnej o szerokości co najmniej 30 m od zabudowy mieszkaniowej'};

function gminaInit(){
 if(!GM)return;
 const _open=openDoc;openDoc=function(id){id==='gmina'?openGmina():_open(id)};
 const P=GM.plan,R=GM.rada;
 Object.assign(S,{
  async gmina(){
   await say(`W ${GM.nazwa.replace('Gmina','gminie')} najważniejsza sprawa przy Tobie to projekt zmiany planu miejscowego, 380 m od Twojego domu. Uwagi można składać do <b>${P.uwagi}</b>.`);
   chips([{label:'Co się zmienia przy moim domu?',go:S.plan},{label:'Kto rządzi w mojej gminie?',go:S.gRada},{label:'Budżet na tle podobnych gmin',go:S.gLiczby},{label:'Kto dostaje pieniądze gminy?',go:S.gUmowy}]);
  },
  async plan(){
   await say(`Gmina wyłożyła projekt zmiany planu miejscowego. Dotyczy terenu ${P.odl}, a dojazd ma prowadzić ${P.dojazd}.`);
   await info({icon:'alert',title:P.nazwa,source:GM.bip+', sprawa '+P.nr+' (dane fikcyjne)',body:mapaPlanu(),
    rows:[['Obszar',P.pow],['Teraz',P.teraz],['Projekt',P.projekt],['Dojazd',P.dojazd],['Skąd zmiana',P.wniosek],['Wyłożenie projektu',P.wylozenie],['Spotkanie z projektantem',P.spotkanie],['Uwagi do','<b>'+P.uwagi+'</b>']]});
   await info({icon:'doc',title:'Argumenty za i przeciw',source:'Uzasadnienie projektu, prognoza oddziaływania na środowisko, uwagi mieszkańców z etapu wniosków',
    body:`<div class="gzp"><div><h4>Za</h4>${lista(P.za)}</div><div><h4>Przeciw</h4>${lista(P.przeciw)}</div></div>`,
    note:'Streszczam dokumenty, nie oceniam. O planie zdecyduje rada gminy po rozpatrzeniu uwag przez wójta.'});
   await say('Każdy może złożyć uwagę do projektu, nie trzeba być właścicielem działki. Wójt musi ją rozpatrzyć, a uwagi nieuwzględnione trafiają do rady razem z projektem.');
   chips([{label:'Złóż uwagę',go:S.uwaga},{label:'Zapisz mnie na spotkanie 25.11',go:S.spotkanie},{label:'Kto zagłosuje nad planem?',go:S.gRada},{label:'Przypomnij przed terminem',go:()=>result({title:'Przypomnienie ustawione',rows:[['Kiedy','11.12.2026, 9:00'],['O czym','uwagi do planu do '+P.uwagi]]})}]);
  },
  async uwaga(){
   await say('Co chcesz zgłosić? Możesz wybrać kilka spraw, przygotuję z nich pismo.');
   multi(Object.values(ZG),async sel=>{
    const k=Object.keys(ZG).filter(x=>sel.includes(ZG[x]));
    const tresc=`Wnoszę uwagę do projektu: ${P.nazwa.replace('Zmiana','zmiany')} (${P.nr}). Wnioskuję o: `+k.map(x=>ZGT[x]).join('; ')+'. Uzasadnienie: ulica Szkolna prowadzi bezpośrednio obok szkoły podstawowej i domów jednorodzinnych; prognozowany ruch ok. 60 ciężarówek na dobę zagraża bezpieczeństwu dzieci i ogranicza możliwość korzystania z nieruchomości.';
    await info({icon:'doc',title:'Szkic uwagi',body:tresc,note:'Możesz poprawić treść, napisz po prostu, co zmienić.'});
    await confirmCard({icon:'mail',title:'Uwaga do projektu planu',source:'Do: '+GM.urzad+', przez e-Doręczenia',
     rows:[['Do','Wójt '+GM.nazwa.replace('Gmina','Gminy')],['Od',OS.imie+' '+OS.nazwisko+', '+OS.moje.adres],['Sprawa',P.nr],['Wnioski',String(k.length)],['Termin','do '+P.uwagi]],
     label:'Podpisz i wyślij',then:async()=>{
      await result({title:'Uwaga złożona',source:'e-Doręczenia, dowód otrzymania',rows:[['Dowód otrzymania','godz. '+now()+', '+today()],['Sprawa','w Twoich sprawach'],['Wynik','dostaniesz w skrzynce po rozpatrzeniu uwag']]});
      await say('Gotowe. Dam Ci znać, jak wójt rozpatrzy uwagę i kiedy rada będzie głosować nad planem. Chcesz, żeby sąsiedzi też się dowiedzieli?');
      chips([{label:'Powiadom sąsiadów',go:S.sasiedzi},{label:'Zapisz mnie na spotkanie 25.11',go:S.spotkanie},{label:'Na razie wystarczy',go:()=>say('Dobrze. Sprawę znajdziesz w zakładce Moja gmina.')}]);
     }});
   });
  },
  async spotkanie(){
   await confirmCard({icon:'clock',title:'Spotkanie z projektantem planu',source:GM.urzad,rows:[['Kiedy',P.spotkanie.split(', sala')[0]],['Gdzie','sala GOK, ul. Lubelska 2'],['Pytania z góry','możesz wysłać teraz, projektant odpowie na spotkaniu']],label:'Zapisz mnie',then:()=>result({title:'Zapisano na spotkanie',rows:[['Kalendarz','dodane do kalendarza'],['Przypomnienie','25.11, 15:00']]})});
  },
  async sasiedzi(){
   await say('Sąsiedzi dostaną to samo podsumowanie z mapką i terminami, bez Twoich danych i bez treści Twojej uwagi.');
   await info({icon:'qr',title:'Udostępnij informację o planie',body:`<div class="gqr">${qrSVG(41)}</div>`,rows:[['Link','mobywatel.gov.pl/gmina/plan/'+P.nr.replace(/\D/g,'')],['Kto zobaczy','każdy, także bez aplikacji']],note:'Mieszkańcy sołectwa '+GM.solectwo+' z aplikacją dostali już powiadomienie, bo mieszkają w promieniu 1 km.'});
  },
  async gRada(){
   await info({icon:'id',title:'Wójt i rada gminy',source:'PKW, '+GM.bip+' (dane fikcyjne)',
    rows:[['Wójt',GM.wojt.kto],['Urzęduje',GM.wojt.kad],['Ostatnie wybory',GM.wojt.wybory],['Rada gminy',R.n+' radnych, '+R.wojta+' z komitetu wójta'],['Wybory do rady 2024',R.jeden],['Frekwencja 2024',R.frekw]],
    note:GM.wojt.limit});
   await info({icon:'doc',title:'Twój radny: '+R.radny.kto,source:'Imienne wyniki głosowań, '+GM.bip,
    rows:[['Okręg',R.radny.okreg],['Komitet',R.radny.komitet],['Dyżur',R.radny.dyzur],...R.glosy.map(([n,v])=>['<i class="gw">'+n+'</i>',v])]});
   chips([{label:'Napisz do radnego',go:()=>S.doRadnego(0)},{label:'Co się zmienia przy moim domu?',go:S.plan}]);
  },
  async gSesja(){
   await info({icon:'clock',title:'Sesja Rady Gminy',source:GM.bip,rows:[['Kiedy',GM.sesja.kiedy],['Gdzie',GM.sesja.gdzie]]});
   await say('Rada zajmie się trzema projektami. Wybierz, a wyjaśnię prostym językiem, co zmieniają.');
   const c=await card(`<div class="ui list glist">${hd('doc','Porządek obrad')}${GM.uchwaly.map((u,i)=>`<button class="it" data-i="${i}"><span class="gi">${svg('doc')}</span><span class="x"><b>${u.tytul}</b><small>${u.nr}</small></span>${svg('chev')}</button>`).join('')}${srcH(GM.bip+', projekty uchwał')}</div>`);
   c.querySelectorAll('.it').forEach(b=>b.onclick=()=>act(()=>{addUser(GM.uchwaly[+b.dataset.i].tytul);S.uchwala(+b.dataset.i)}));
   chips([{label:'Przypomnij i pokaż transmisję',go:()=>result({title:'Przypomnienie ustawione',rows:[['Kiedy','26.11.2026, 9:45'],['Transmisja','link w powiadomieniu']]})}]);
  },
  async uchwala(i){
   const u=GM.uchwaly[i];
   await say(u.co);
   await info({icon:'doc',title:u.tytul,source:u.zrodla,rows:[['Kogo dotyczy',u.kogo],...u.rows,['Opinia komisji',u.komisja]]});
   await info({icon:'doc',title:'Za i przeciw',body:`<div class="gzp"><div><h4>Za</h4>${lista(u.za)}</div><div><h4>Przeciw</h4>${lista(u.przeciw)}</div></div>`,note:'Streszczam dokumenty, nie oceniam. Pełny tekst projektu jest na BIP.'});
   const inne=GM.uchwaly.map((x,j)=>j===i?null:{label:x.tytul,go:()=>S.uchwala(j)}).filter(Boolean);
   chips([{label:'Napisz do radnego przed sesją',go:()=>S.doRadnego(i)},...inne]);
  },
  async doRadnego(i){
   const R=GM.rada.radny,u=GM.uchwaly[i!=null?i:1];
   await say(`Co chcesz przekazać radnemu ${R.kto.split(' ')[0]}owi przed głosowaniem? Możesz wybrać albo napisać własnymi słowami.`);
   const wyslij=async t=>{pending=null;msgs.querySelectorAll('.chips').forEach(x=>x.remove());
    await confirmCard({icon:'mail',title:'Wiadomość do radnego',source:'Do: '+R.kto+', '+R.okreg+', przez skrzynkę rady',body:'„'+esc(t)+'”',
     rows:[['Sprawa',u.tytul],['Od',OS.imie+' '+OS.nazwisko+', '+rodz('mieszkanka','mieszkaniec')+' okręgu'],['Odpowiedź','do Twojej skrzynki']],label:'Wyślij',
     then:async()=>{await result({title:'Wiadomość wysłana',rows:[['Do',R.kto],['Przed sesją',GM.sesja.kiedy],['Przypomnienie','jeśli nie odpowie w 14 dni']]});
      await say('Po sesji pokażę Ci, jak głosował radny w tej sprawie.')}})};
   chips([{label:'Proszę głosować przeciw',go:()=>wyslij('Proszę o głosowanie przeciw projektowi „'+u.tytul+'” w obecnym kształcie.')},{label:'Proszę o wyjaśnienie na sesji',go:()=>wyslij('Proszę o zadanie na sesji pytania o uzasadnienie projektu „'+u.tytul+'” i przekazanie mi odpowiedzi.')},{label:'Popieram projekt',go:()=>wyslij('Popieram projekt „'+u.tytul+'” i proszę o głosowanie za.')}]);
   pending=t=>wyslij(t);
  },
  async gLiczby(){
   const bar=([n,v,p,w,zle])=>`<div class="gbar"><div class="gl"><span>${n}</span><b>${v}</b></div><div class="gt"><i class="${zle&&w>130?'hi':''}" style="width:${Math.min(100,w/2.5)}%"></i><u style="left:40%"></u></div><small>podobne gminy: ${p}</small></div>`;
   await info({icon:'coin',title:GM.nazwa+' na tle podobnych gmin',source:'Sprawozdania budżetowe 2025 (RIO, Ministerstwo Finansów), GUS (dane fikcyjne)',
    body:GM.liczby.map(bar).join(''),note:'Kreska to średnia 5 gmin wiejskich z województwa o podobnej liczbie mieszkańców.'});
   await say('Najbardziej odstają zadłużenie i wydatki na promocję, w tym biuletyn gminy. Chcesz zobaczyć, komu gmina płaci najwięcej?');
   chips([{label:'Kto dostaje pieniądze gminy?',go:S.gUmowy},{label:'Na razie wystarczy'}]);
  },
  async gUmowy(){
   await info({icon:'db',title:'Najwięksi wykonawcy w 2026 r.',source:'Centralny Rejestr Umów jednostek sektora finansów publicznych (dane fikcyjne)',
    rows:GM.umowy.map(([k,v,o])=>[k+'<small class="gsm">'+o+'</small>',v])});
   await say('W dwóch z trzech przetargów drogowych wpłynęła tylko jedna oferta. Mogę pokazać obok darczyńców komitetów wyborczych z jawnych sprawozdań PKW.');
   chips([{label:'Pokaż darczyńców komitetów',go:async()=>{
    await info({icon:'doc',title:'Wpłaty na komitet wójta',source:'Sprawozdanie finansowe komitetu, PKW (dane fikcyjne)',rows:[['Komitet',GM.darczyncy.komitet],['Razem',GM.darczyncy.suma],...GM.darczyncy.najwieksze],
     note:'To nie jest dowód nieprawidłowości. Pokazuję jawne dane obok siebie, ocena należy do Ciebie.'});
   }},{label:'Budżet na tle podobnych gmin',go:S.gLiczby}]);
  },
  async gNabory(){
   await info({icon:'bell',title:'Otwarte nabory w gminie',source:GM.bip+', spółki gminne',rows:GM.nabory.map(([s,g,t])=>[s+'<small class="gsm">'+g+'</small>',t]),flag:GM.naborStat});
   chips([{label:'Powiadamiaj o nowych naborach',go:()=>result({title:'Powiadomienia włączone',rows:[['Co','nabory w urzędzie, szkołach i spółkach gminy'],['Wyniki naborów','też dostaniesz']]})},{label:'Na razie wystarczy'}]);
  },
  async glos(){
   await say('W gminie możesz zrobić więcej niż głosować raz na pięć lat. Co Cię interesuje?');
   chips([{label:'Złóż projekt uchwały z sąsiadami',go:S.inicjatywa},{label:'Zapytaj radę pod pseudonimem',go:S.pytanie},{label:'Zabierz głos o raporcie o stanie gminy',go:S.debata},{label:'Kandyduj na radną albo sołtyskę',go:S.kandyduj}]);
  },
  async inicjatywa(){
   const G=GM.glos,J=G.projekt;
   await say(`Mieszkańcy mogą sami złożyć projekt uchwały. Potrzebny jest komitet i <b>${G.progOpis}</b>. Rada musi się nim zająć najpóźniej 3 miesiące po złożeniu.`);
   await say('Na podstawie sprawy planu „Pola Południowe” przygotowałem przykładowy projekt. Możesz go zmienić albo zacząć od własnego pomysłu.');
   await info({icon:'doc',title:J.tytul,body:lista(J.tresc)+'<p class="gp"><b>Uzasadnienie.</b> '+J.uzas+'</p>',note:'Projekt sprawdzi radca prawny urzędu, ale rada nie może go odrzucić z powodów formalnych bez wezwania komitetu do poprawek.'});
   chips([{label:'Utwórz komitet z sąsiadami',go:S.komitet},{label:'Mam własny pomysł',go:()=>say('Opisz go własnymi słowami, a przygotuję projekt uchwały i uzasadnienie. W tej wersji pokazu działa przykład z planem.')}]);
  },
  async komitet(){
   const G=GM.glos;
   await confirmCard({icon:'id',title:'Komitet inicjatywy uchwałodawczej',source:'Rejestr mieszkańców gminy (tożsamość z mDowodu)',
    rows:[['Pełnomocniczka',G.komitet[0]],['Członkowie',G.komitet.slice(1).join(', ')],['Zaproszenia','wysłane, obaj sąsiedzi potwierdzili'],['Projekt',GM.glos.projekt.tytul.replace('Uchwała w sprawie ','')],['Zbiórka podpisów','w aplikacji, od dziś']],
    note:ETYKIETA,label:'Podpisz i otwórz zbiórkę',then:S.zbiorka});
  },
  async zbiorka(){
   const G=GM.glos;
   await say('Zbiórka otwarta. Mieszkańcy gminy, którzy obserwują sprawę planu, dostali powiadomienie i mogą podpisać się mDowodem.');
   const c=await card(`<div class="ui">${hd('id','Podpisy pod projektem')}<div class="body"><div class="gcnt"><b>0</b> z ${G.prog}</div><div class="gprog"><i></i></div><small class="gsm2">Każdy podpis to zweryfikowany mieszkaniec gminy. Nazwiska widzi tylko komitet i urząd.</small></div>${srcH('Pokaz: sąsiedzi podpisują w kilka sekund')}</div>`);
   const b=c.querySelector('.gcnt b'),i=c.querySelector('.gprog i'),N=G.prog+17;
   for(let k=1;k<=14;k++){await sleep(230);const v=Math.round(N*k/14);b.textContent=v;i.style.width=Math.min(100,v/G.prog*100)+'%';if(v>=G.prog)c.classList.add('ok')}
   await say(`Jest ${N} podpisów, więcej niż wymagane ${G.prog}. Złożyć projekt w urzędzie?`);
   chips([{label:'Złóż projekt w urzędzie',go:()=>confirmCard({icon:'mail',title:'Złożenie projektu uchwały',source:'Do: Przewodniczący Rady Gminy Lipowiec, przez e-Doręczenia',
    rows:[['Projekt',G.projekt.tytul.replace('Uchwała w sprawie ','')],['Komitet',G.komitet.length+' osoby'],['Podpisy',N+' (wymagane '+G.prog+')'],['Rada zajmie się projektem','najpóźniej 3 miesiące po złożeniu']],label:'Podpisz i złóż',then:S.sledz})}]);
  },
  async sledz(){
   const G=GM.glos;
   await result({title:'Projekt złożony',source:'e-Doręczenia, dowód otrzymania',rows:[['Dowód otrzymania','godz. '+now()+', '+today()],['Numer','BRG.0006.1.2026']]});
   await info({icon:'clock',title:'Co dalej z projektem',body:kroki([['Złożony','dziś, '+(G.prog+17)+' podpisów','done'],['Weryfikacja podpisów','urząd, do 14 dni','now'],['Opinia komisji rady','grudzień 2026'],['Sesja rady','najpóźniej '+G.sesjaProjektu+', pełnomocniczka może przedstawić projekt'],['Wynik głosowania','imiennie, każdy radny osobno']]),
    note:'Powiadomię Ciebie i wszystkie osoby, które się podpisały, o każdym kroku.'});
   chips([{label:'Jak głosował mój radny w podobnych sprawach?',go:S.gRada},{label:'Na razie wystarczy',go:()=>say('Gotowe. Projekt znajdziesz w zakładce Moja gmina.')}]);
  },
  async pytanie(){
   await say('Napisz pytanie do rady. Rada i urząd zobaczą tylko, że pyta zweryfikowany mieszkaniec Twojego sołectwa, a nie kto.');
   chips([{label:'Ile ciężarówek będzie jeździć obok szkoły?',go:()=>S.pytanie2('Ile ciężarówek na dobę ma jeździć ulicą Szkolną po zmianie planu i czy gmina rozważała inny dojazd?')},{label:'Dlaczego komisje nie są nagrywane?',go:()=>S.pytanie2('Dlaczego rada odrzuciła nagrywanie posiedzeń komisji i czy wróci do tej sprawy?')}]);
   pending=t=>S.pytanie2(t);
  },
  async pytanie2(q){
   pending=null;msgs.querySelectorAll('.chips').forEach(x=>x.remove());
   await confirmCard({icon:'mail',title:'Pytanie do Rady Gminy',source:'Rada Gminy Lipowiec, publiczna lista pytań mieszkańców',body:'„'+esc(q)+'”',
    rows:[['Podpis',rodz('Mieszkanka','Mieszkaniec')+' sołectwa '+GM.solectwo+', '+rodz('zweryfikowana','zweryfikowany')+' mObywatelem'],['Twoje dane','nie trafiają do urzędu ani rady'],['Odpowiedź','publicznie, termin 14 dni']],
    note:'Tak mogłoby działać. Wymaga zmiany regulaminu rady albo przepisów; dziś pytania zadaje się z imienia i nazwiska.',label:'Wyślij pod pseudonimem',
    then:()=>result({title:'Pytanie opublikowane',rows:[['Podpis',rodz('Mieszkanka','Mieszkaniec')+' '+GM.solectwo],['Podpisało się pod pytaniem','powiadomię, gdy inni dołączą'],['Odpowiedź','do 14 dni, dostaniesz powiadomienie']]})});
  },
  async debata(){
   const D=GM.glos.debata;
   await info({icon:'doc',title:'Debata o raporcie o stanie gminy',source:'Ustawa o samorządzie gminnym, '+GM.bip,
    rows:[['Raport',D.raport],['Debata',D.kiedy+', na sesji rady'],['Kto może zabrać głos','każdy mieszkaniec'],['Co trzeba',D.podpisy+' pod zgłoszeniem'],['Kiedy zgłosić','najpóźniej dzień przed sesją']],
    note:'Wójt przedstawia raport co roku do 31 maja. Po debacie rada głosuje nad wotum zaufania.'});
   chips([{label:'Przypomnij, gdy raport będzie gotowy',go:()=>result({title:'Przypomnienie ustawione',rows:[['Kiedy','gdy raport pojawi się na BIP (do 31.05.2027)'],['Potem','zbiórka 20 podpisów w aplikacji, kilka minut']]})},{label:'Na razie wystarczy'}]);
  },
  async kandyduj(){
   const W=GM.glos.wybory;
   await info({icon:'id',title:'Kandydowanie w gminie',source:'Kodeks wyborczy, PKW (dane gminy fikcyjne)',
    rows:[['Najbliższe wybory',W.kiedy],['Do rady, Twój okręg',W.radny],['Na wójta',W.wojt],['Dieta radnego',W.dieta],['Sołtys',W.soltys]],
    flag:'W 2024 r. w 9 z 15 okręgów był tylko jeden kandydat, a na wójta jeden kandydat.'});
   chips([{label:'Przypomnij, gdy ruszy kalendarz wyborczy',go:()=>result({title:'Przypomnienie ustawione',rows:[['Kiedy','po ogłoszeniu wyborów w 2029 r.'],['Dostaniesz','plan krok po kroku i terminy']]})},{label:'Jak wygląda praca radnej?',go:()=>say('Sesje mniej więcej raz w miesiącu, posiedzenia komisji, dyżury dla mieszkańców. Radna głosuje imiennie, a jej głosy są publiczne.')}]);
  }
 });
 const _route=route;
 route=function(t){
  if(pending)return _route(t);
  const n=norm(t);
  if(/podatek od nieruchomosci.*(2027|stawk|wzro|rosnie)|stawk\w* podatk/.test(n))return S.uchwala(1);
  if(/budzet\w* na 2027|projekt budzetu/.test(n))return S.uchwala(0);
  if(/dzialk\w* 214|bez przetargu|sprzedaz dzialki/.test(n))return S.uchwala(2);
  if(/napisz do radnego|do radnego/.test(n))return S.doRadnego(1);
  if(/plan\w* miejsc|magazyn|zmienia.*(dom|okolic)|uwag\w* do planu|przy (moim|twoim) domu/.test(n))return S.plan();
  if(/inicjatyw|projekt uchwaly|podpis\w* pod/.test(n))return S.inicjatywa();
  if(/pseudonim|anonim|zapytaj rad/.test(n))return S.pytanie();
  if(/raport|debat|debac/.test(n))return S.debata();
  if(/kandyd|zostac radn|soltysk/.test(n))return S.kandyduj();
  if(/zabrac glos|zabierz glos/.test(n))return S.glos();
  if(/radn|wojt|rada gminy|kto rzadzi/.test(n))return S.gRada();
  if(/sesj|uchwal/.test(n))return S.gSesja();
  if(/budzet|zadluz|w liczbach|wydatk/.test(n))return S.gLiczby();
  if(/umow|przetarg|zamowien|darczyn|placi najwiecej|pieniadze gminy/.test(n))return S.gUmowy();
  if(/nabor|praca w gminie|prace? w urzedzie/.test(n))return S.gNabory();
  if(/gmin|soltys|solectw/.test(n))return S.gmina();
  return _route(t);
 };
}
document.addEventListener('DOMContentLoaded',gminaInit);
