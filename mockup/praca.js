/* ---------- Moja praca: e-teczka, kwalifikacje, sprawy pracownika albo przedsiębiorcy (dane fikcyjne) ----------
   Ładowany po gmina.js, przed core.js, tak samo jak gmina.js: karta do portfela teraz, scenariusze po DOMContentLoaded.
   Menu karty pochodzi z danych osoby: Ewa ma etat w szkole, Jan prowadzi firmę, więc pokazują inne sprawy. */
const PRACE={
 ewa:{
  pracodawca:'Szkoła Podstawowa w Lipowcu',stanowisko:'nauczycielka matematyki',awans:'nauczycielka dyplomowana',od:'01.09.1993',staz:'33 lata',wymiar:'pełny etat (18 godzin przy tablicy)',
  alert:'Pierwsza pomoc do 15.03.2027',f:[['Stanowisko','nauczycielka dyplomowana'],['Staż','33 lata']],
  rows:[['Pracodawca','Szkoła Podstawowa w Lipowcu'],['Stanowisko','nauczycielka matematyki'],['Stopień awansu','nauczycielka dyplomowana'],['Zatrudnienie od','01.09.1993'],['Wymiar','pełny etat (18 godzin przy tablicy)']],
  zrodlo:'ZUS, System Informacji Oświatowej (dane fikcyjne)',
  menu:[['doc','E-teczka',[
    ['pHistoria','clock','Historia zatrudnienia','3 okresy z ZUS, świadectwa pracy','Pokaż moją historię zatrudnienia'],
    ['pKwalif','id','Kwalifikacje i uprawnienia','4 pozycje · przekażesz znakiem mObywatela','Jakie mam kwalifikacje?'],
    ['pWolont','check','Wolontariat','2 potwierdzone · do CV','Mój wolontariat'],
    ['pEmerytura','coin','Emerytura','wiek emerytalny 60 lat, 03.02.2029','Ile będę miała emerytury?']]],
   ['shield','Zanim podpiszesz, gdy coś się zmienia',[
    ['pUmowa','doc','Sprawdź pracodawcę i umowę','rejestry i ile dostaniesz na rękę','Dostałam ofertę pracy, sprawdź umowę'],
    ['pUtrata','alert','Gdy stracisz pracę','krok po kroku, bez przerwy w ubezpieczeniu','Co zrobić, gdy stracę pracę?'],
    ['gNabory','bell','Praca w gminie','3 otwarte nabory','Jakie są nabory do pracy w gminie?']]]],
  historia:[['09.1993–08.2001','SP nr 24 w Lublinie, nauczycielka'],['09.2001–obecnie','SP w Lipowcu, nauczycielka, od 2011 r. dyplomowana'],['07.2015–08.2015','Obóz językowy „Lato”, umowa zlecenia']],
  historiaNote:'Świadectwa pracy z obu szkół są w Twoich plikach. Nowe świadectwo pracodawca doda tu sam.',
  kwalif:[['Magister matematyki','UMCS, 1993'],['Studia podyplomowe z informatyki','UMCS, 2005'],['Kierownik wycieczek szkolnych','kurs, 2018'],['Pierwsza pomoc','ważne do 15.03.2027']],
  kwalifSrc:'Rejestry uczelni (POL-on), ewidencja kursów (dane fikcyjne)',kwalifFlag:'Zaświadczenie z pierwszej pomocy wygasa 15.03.2027.',
  kwalifAkcja:['Przypomnij o kursie pierwszej pomocy','pPrzypKurs'],przekazLabel:'Przekaż pracodawcy',przekazOdbiorca:'Lingwa Plus sp. z o.o. (przykład)',
  wolont:[['Świetlica w Lipowcu Kolonii','korepetycje z matematyki, 46 h w 2026 r.'],['OSP Lipowiec','festyn rodzinny, 12 h w 2026 r.']],
  oferta:{firma:'Lingwa Plus sp. z o.o.',co:'korepetycje online z matematyki',umowa:'umowa zlecenia',stawka:'70 zł za godzinę',godz:20,brutto:1400,zdrowotna:126,pit:134,netto:1140,
   krs:[['KRS','aktywna od 2015 r., bez upadłości i likwidacji'],['Biała lista VAT','czynny podatnik, rachunek z umowy jest na liście'],['Zaległości','brak wpisów w rejestrach dłużników (stan na dziś)']]},
  emerytura:{rows:[['Wiek emerytalny','60 lat, 03.02.2029'],['Składki','512 300 zł'],['Kapitał początkowy','98 700 zł'],['W wieku 60 lat','ok. 3 980 zł brutto'],['W wieku 62 lat','ok. 4 730 zł brutto'],['W wieku 65 lat','ok. 6 120 zł brutto']],
   note:'Każdy rok dłużej podnosi emeryturę, bo rośnie kapitał i skraca się średnie dalsze trwanie życia.',
   przyp:['Przypomnij o wniosku',[['Kiedy','04.01.2029'],['O czym','wniosek o emeryturę (EMP) można złożyć od tego dnia']]]}
 },
 /* Jan: jednoosobowa firma instalacyjna z dwoma pracownikami; dane zgodne z serwer/persony.py (CEIDG, emerytura) */
 jan:{
  pracodawca:'Wiśniewski Instalacje',stanowisko:'własna firma, instalacje sanitarne i grzewcze',
  alert:'Badania pracownika do 02.12',f:[['Forma','jednoosobowa działalność'],['Od','03.2012']],
  rows:[['Firma','Wiśniewski Instalacje Jan Wiśniewski'],['Forma','jednoosobowa działalność (CEIDG)'],['Działa od','03.2012'],['NIP','679 234 56 79'],['Podatek','liniowy od 01.2026'],['Pracownicy','2 osoby']],
  zrodlo:'CEIDG, ZUS, KSeF (dane fikcyjne)',
  menu:[['doc','E-teczka firmy',[
    ['pHistoria','clock','Historia zawodowa','etat, potem własna firma · z ZUS','Pokaż moją historię zawodową'],
    ['pKwalif','id','Kwalifikacje i uprawnienia','4 pozycje · jedna wygasa w styczniu','Jakie mam uprawnienia?'],
    ['pPracownicy','check','Twoi pracownicy','2 osoby · badania okresowe do 02.12','Co muszę zrobić dla moich pracowników?'],
    ['pEmerytura','coin','Emerytura','prognoza przy składkach przedsiębiorcy','Ile będę miał emerytury?']]],
   ['shield','Zanim podpiszesz, gdy coś się zmienia',[
    ['pKontrahent','doc','Sprawdź kontrahenta','zlecenie podwykonawcze na 48 000 zł netto','Dostałem zlecenie, sprawdź kontrahenta'],
    ['pChoroba','alert','Gdy zachorujesz','zasiłek, składki, kto poprowadzi firmę','Co, jeśli zachoruję i nie będę mógł pracować?'],
    ['gZam','bell','Zlecenia od miasta','3 zamówienia z Twojej branży','Jakie zlecenia od miasta są dla mojej firmy?']]]],
  historia:[['09.2002–06.2005','Instal-Bud sp. z o.o., monter instalacji, umowa o pracę'],['07.2005–02.2012','Ciepło-Serwis s.c., monter, od 2009 r. brygadzista'],['03.2012–obecnie','własna firma: Wiśniewski Instalacje']],
  historiaNote:'Świadectwa pracy z obu firm są w Twoich plikach. Okres prowadzenia firmy ZUS liczy z Twoich deklaracji.',
  kwalif:[['Świadectwo kwalifikacyjne G1 (elektryczne), eksploatacja','ważne do 14.06.2029'],['Świadectwo kwalifikacyjne G3 (gazowe), eksploatacja i dozór','ważne do 12.01.2027'],['Certyfikat F-gazowy (klimatyzacje)','UDT, bezterminowy'],['Mistrz w zawodzie monter instalacji','Izba Rzemieślnicza w Krakowie, 2014']],
  kwalifSrc:'Centralny rejestr świadectw kwalifikacyjnych, UDT, Izba Rzemieślnicza (dane fikcyjne)',
  kwalifFlag:'Świadectwo G3 wygasa 12.01.2027. Bez niego nie zrobisz przeglądów instalacji gazowych ani nie złożysz oferty w takim przetargu.',
  kwalifAkcja:['Zapisz mnie na egzamin G3','pEgzamin'],przekazLabel:'Przekaż zamawiającemu',przekazOdbiorca:'Zarząd Budynków Komunalnych w Krakowie (przykład)',
  pracownicy:[['Paweł Mazur, monter','umowa o pracę od 04.2019; badania okresowe do <b>02.12.2026</b>; urlop: zostało 12 z 26 dni'],['Kamil Nowicki, pomocnik','umowa zlecenia od 09.2026; szkolenie BHP wstępne zrobione']],
  oferta:{firma:'Budmax Inwestycje sp. z o.o.',co:'instalacje wodne i c.o. w budynku mieszkalnym na Prokocimiu, jako podwykonawca',kwota:'48 000 zł netto',termin:'płatność 90 dni od faktury',inwestor:'Prokocim Park sp. z o.o.',
   krs:[['KRS','aktywna od 2021 r., kapitał 5 000 zł, zarząd zmieniany 2 razy w 2026 r.'],['Biała lista VAT','czynny podatnik, rachunek jest na liście'],['Krajowy Rejestr Zadłużonych','<b>otwarte postępowanie restrukturyzacyjne</b> (09.2026)']]},
  emerytura:{rows:[['Wiek emerytalny','65 lat, 12.05.2048'],['Konto w ZUS','386 940 zł'],['Subkonto','72 410 zł'],['Składki od 2012 r.','od najniższej podstawy dla firm'],['W wieku 65 lat','ok. 4 380 zł brutto'],['W wieku 67 lat','ok. 5 200 zł brutto'],['W wieku 70 lat','ok. 6 740 zł brutto']],
   note:'Prognoza zakłada, że do końca płacisz składki od najniższej podstawy. Wyższa podstawa to wyższa emerytura, ale też wyższe składki teraz. Wpłaty na IKZE odliczysz od dochodu także przy podatku liniowym, a przedsiębiorca ma wyższy limit.',
   przyp:['Przypomnij o wpłacie na IKZE',[['Kiedy','01.12.2026, 9:00'],['O czym','wpłata na IKZE do 31.12, odliczysz ją w PIT za 2026 r.']]]}
 }
};
const PR=PRACE[OS.id]||null;
if(PR)OS.docs.push({id:'praca',name:'Moja praca',img:'assets/card-praca.svg',sub:PR.pracodawca,alert:PR.alert,holder:(OS.imie+' '+OS.nazwisko).toUpperCase(),line:PR.stanowisko,
 f:PR.f,rows:[]});

function openPraca(){
 const det=$('#detail'),top=getComputedStyle($('.status')).display!=='none'?50:6,d=DOCS.find(x=>x.id==='praca');
 const it=(k,ic,h,s)=>`<button class="it" data-k="${k}"><span class="gi">${svg(ic)}</span><span class="x"><b>${h}</b><small>${s}</small></span>${svg('chev')}</button>`;
 const Q={};
 const grupy=PR.menu.map(([ic,h,a])=>`<div class="ui list glist">${hd(ic,h)}
   ${a.filter(([k])=>GM||k[0]!=='g').map(([k,i,t,s,q])=>{Q[k]=q;return it(k,i,t,s)}).join('\n   ')}</div>`).join('\n  ');
 det.innerHTML=`<div style="height:${top}px;flex:none"></div><div class="nav"><button class="back" id="dclose">${svg('back')}Wróć</button><b>Moja praca</b><span></span></div>
  <div class="body"><div class="bigcard" style="background-image:url(${d.img})">${faceHTML(d)}</div>
  <div class="ui"><div class="rows" style="padding-top:4px">${rowsH(PR.rows)}</div>${srcH(PR.zrodlo)}</div>
  ${grupy}</div>`;
 tick();det.classList.add('on');
 $('#dclose').onclick=()=>det.classList.remove('on');
 det.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{det.classList.remove('on');setTimeout(()=>startTopic(Q[b.dataset.k],()=>S[b.dataset.k]()),180)});
}

function pracaInit(){
 if(!PR)return;
 const _open=openDoc;openDoc=function(id){id==='praca'?openPraca():_open(id)};
 const O=PR.oferta,emerQ='Ile będę '+rodz('miała','miał')+' emerytury?';
 Object.assign(S,{
  async pHistoria(){
   await info({icon:'clock',title:PR.pracownicy?'Historia zawodowa':'Historia zatrudnienia',source:'ZUS, e-Akta (dane fikcyjne)',rows:PR.historia,note:PR.historiaNote});
   chips([{label:'Kwalifikacje i uprawnienia',go:S.pKwalif},{label:emerQ,go:S.pEmerytura}]);
  },
  async pKwalif(){
   await info({icon:'id',title:'Kwalifikacje i uprawnienia',source:PR.kwalifSrc,rows:PR.kwalif,flag:PR.kwalifFlag});
   chips([{label:PR.przekazLabel,go:S.pPrzekaz},{label:PR.kwalifAkcja[0],go:S[PR.kwalifAkcja[1]]}]);
  },
  async pPrzekaz(){
   await say('Co przekazać? Odbiorca zobaczy tylko to, co zaznaczysz.');
   multi(PR.kwalif.map(k=>k[0]),async sel=>{
    await confirmCard({icon:'scan',title:'Przekazanie kwalifikacji',source:'Znak mObywatela, dane z rejestrów',rows:[['Co',sel.join(', ')],['Komu','zeskanujesz znak mObywatela odbiorcy'],['Ważność potwierdzenia','odbiorca sprawdzi je online przez 30 dni']],label:'Przekaż',
     then:()=>result({title:'Kwalifikacje przekazane',rows:[['Pozycji',String(sel.length)],['Odbiorca',PR.przekazOdbiorca],['Historia','w Twoich sprawach']]})});
   });
  },
  pPrzypKurs:()=>result({title:'Przypomnienie ustawione',rows:[['Kiedy','15.02.2027, 9:00'],['O czym','odnowienie kursu pierwszej pomocy']]}),
  async pEgzamin(){
   await say('Świadectwo przedłużysz, zdając egzamin przed komisją kwalifikacyjną. Najbliższe wolne terminy w Krakowie są przed 12 stycznia.');
   await confirmCard({icon:'id',title:'Egzamin kwalifikacyjny G3',source:'Komisja kwalifikacyjna, Kraków (dane fikcyjne)',
    rows:[['Grupa','G3 (gazowe), eksploatacja i dozór'],['Termin','04.12.2026, 9:00'],['Miejsce','ul. Lubicz 25, Kraków'],['Opłata','ok. 280 zł, tutaj przez ePłatności'],['Dokumenty','dane z mDowodu i obecne świadectwo pobiorę z rejestru']],
    label:'Zapisz i zapłać',then:()=>result({title:'Zapisano na egzamin',source:'Potwierdzenie wpłaty w Twoich sprawach',rows:[['Kiedy','04.12.2026, 9:00'],['Przypomnienie','03.12, 18:00'],['Nowe świadectwo','trafi tu po egzaminie, ważne 5 lat']]})});
  },
  async pWolont(){
   await info({icon:'check',title:'Wolontariat',source:'Potwierdzenia organizacji (dane fikcyjne)',rows:PR.wolont,note:'Godziny potwierdziły organizacje. Możesz dołączyć je do CV albo e-teczki jako doświadczenie.'});
   chips([{label:'Dodaj do e-teczki',go:()=>result({title:'Dodano do e-teczki',rows:[['Wolontariat','58 h w 2026 r.'],['Widoczne','w CV z mObywatela']]})},{label:'Pobierz zaświadczenie',go:()=>result({title:'Zaświadczenie gotowe',rows:[['Plik','Zaświadczenie o wolontariacie 2026.pdf'],['Gdzie','w Twoich plikach']]})}]);
  },
  async pPracownicy(){
   await info({icon:'check',title:'Twoi pracownicy',source:'ZUS (zgłoszenia do ubezpieczeń), e-Akta pracownicze (dane fikcyjne)',rows:PR.pracownicy,
    flag:'Pawłowi kończą się badania okresowe 02.12.2026. Bez aktualnego orzeczenia nie możesz dopuścić go do pracy.'});
   await say('Mogę wystawić skierowanie na badania. Paweł dostanie je w aplikacji, a przychodnia medycyny pracy elektronicznie.');
   chips([{label:'Wystaw skierowanie na badania',go:()=>confirmCard({icon:'doc',title:'Skierowanie na badania okresowe',source:'Pracodawca: '+PR.rows[0][1],
     rows:[['Pracownik','Paweł Mazur, monter instalacji'],['Rodzaj','badania okresowe'],['Warunki pracy','praca na wysokości do 3 m, lutowanie, kierowanie autem firmowym'],['Gdzie','przychodnia medycyny pracy, z którą masz umowę'],['Koszt','pokrywa pracodawca']],
     label:'Podpisz i wyślij',then:()=>result({title:'Skierowanie wysłane',rows:[['Do','Paweł Mazur i przychodnia medycyny pracy'],['Przypomnienie','dam Ci znać, gdy orzeczenie wróci do e-akt']]})})},
    {label:'Na razie wystarczy'}]);
  },
  async pEmerytura(){
   const E=PR.emerytura;
   await info({icon:'coin',title:'Prognoza emerytury',source:'ZUS, informacja o stanie konta (dane fikcyjne)',rows:E.rows,note:E.note});
   chips([{label:E.przyp[0],go:()=>result({title:'Przypomnienie ustawione',rows:E.przyp[1]})},{label:'Umów e-wizytę w ZUS',go:()=>say('Najbliższy wolny termin e-wizyty w ZUS to 6 listopada o 10:30. Napisz „umów”, a zarezerwuję.')}]);
  },
  async pUmowa(){
   await say(`Sprawdzę ofertę z Twojej skrzynki: ${O.firma}, ${O.co}, ${O.umowa}, ${O.stawka}.`);
   await info({icon:'shield',title:O.firma,source:'KRS, Biała lista VAT, rejestry dłużników (dane fikcyjne)',rows:O.krs,tone:'ok'});
   await info({icon:'coin',title:'Ile dostaniesz na rękę',source:'Wyliczenie uproszczone, stawki 2026',
    rows:[['Miesięcznie',O.godz+' h × 70 zł = '+O.brutto+' zł brutto'],['Składki emerytalna i rentowa','nie, masz etat z pensją powyżej minimalnej'],['Składka zdrowotna (9%)','−'+O.zdrowotna+' zł'],['Zaliczka na PIT','−'+O.pit+' zł (koszty 20%)'],['Na rękę','<b>ok. '+O.netto+' zł</b>']],
    note:'Karta Nauczyciela: dodatkowa praca nie może utrudniać obowiązków w szkole, a korepetycji dla własnych uczniów lepiej unikać.'});
   await say('Firma wygląda w rejestrach w porządku. W umowie sprawdź jeszcze termin płatności i okres wypowiedzenia.');
   chips([{label:'Przekaż kwalifikacje firmie',go:S.pPrzekaz},{label:'Na razie wystarczy'}]);
  },
  async pKontrahent(){
   await say(`Sprawdzę zlecenie z Twojej skrzynki: ${O.firma}, ${O.co}, ${O.kwota}, ${O.termin}.`);
   await info({icon:'shield',title:O.firma,source:'KRS, Biała lista VAT, Krajowy Rejestr Zadłużonych (dane fikcyjne)',rows:O.krs,
    flag:'Spółka jest w restrukturyzacji. To nie wyklucza współpracy, ale zwiększa ryzyko, że zapłata się opóźni.'});
   await info({icon:'doc',title:'Jak się zabezpieczyć',source:'Kodeks cywilny, ustawa o VAT (uproszczone)',
    rows:[['Zgłoś się inwestorowi','przed rozpoczęciem prac; jeśli inwestor nie sprzeciwi się w 30 dni, odpowiada za Twoje wynagrodzenie razem z wykonawcą (art. 647¹ Kodeksu cywilnego)'],
     ['Termin zapłaty','90 dni to długo przy firmie w restrukturyzacji; zaproponuj 30 dni i płatność po etapach'],
     ['Podzielona płatność','instalacje są w załączniku 15 do ustawy o VAT: przy fakturze powyżej 15 000 zł brutto dopisek „mechanizm podzielonej płatności”'],
     ['Faktura','przez KSeF, kontrahent dostanie ją od razu']]});
   await say('Nie odradzam tego zlecenia, ale zabezpiecz się przed podpisaniem. Mogę przygotować zgłoszenie do inwestora.');
   chips([{label:'Przygotuj zgłoszenie do inwestora',go:()=>confirmCard({icon:'mail',title:'Zgłoszenie podwykonawcy',source:'Do: '+O.inwestor+' (inwestor), przez e-Doręczenia',
     rows:[['Podwykonawca',PR.rows[0][1]],['Wykonawca',O.firma],['Zakres',O.co.split(',')[0]],['Wynagrodzenie',O.kwota],['Skutek','bez sprzeciwu w 30 dni inwestor odpowiada za zapłatę razem z wykonawcą']],
     label:'Podpisz i wyślij',then:()=>result({title:'Zgłoszenie wysłane',source:'e-Doręczenia, dowód otrzymania',rows:[['Dowód otrzymania','godz. '+now()+', '+today()],['Sprzeciw inwestora','możliwy do 30 dni, dam Ci znać']]})})},
    {label:'Przekaż uprawnienia kontrahentowi',go:S.pPrzekaz},{label:'Na razie wystarczy'}]);
  },
  async pUtrata(){
   await info({icon:'alert',title:'Gdy stracisz pracę',source:'Ustawa o rynku pracy, NFZ, karty usług gov.pl',
    rows:[['Świadectwo pracy','pracodawca wystawia w dniu rozwiązania umowy, trafi do e-teczki'],['Ubezpieczenie zdrowotne','jeszcze 30 dni, potem przez urząd pracy'],['Rejestracja','online w urzędzie pracy, zalogujesz się mObywatelem'],['Zasiłek','gdy w ostatnich 18 miesiącach pracowałaś co najmniej 365 dni; liczy się od dnia rejestracji'],['Oferty w okolicy','nabory w urzędach i spółkach gminy, oferty z urzędu pracy']]});
   chips(GM?[{label:'Nabory w gminie',go:S.gNabory},{label:'Na razie wystarczy'}]:[{label:'Na razie wystarczy'}]);
  },
  async pChoroba(){
   await info({icon:'alert',title:'Gdy zachorujesz',source:'Ustawa o systemie ubezpieczeń społecznych, CEIDG, karty usług gov.pl',
    rows:[['Zwolnienie lekarskie','lekarz wystawia e-ZLA, trafi do ZUS i tutaj'],['Zasiłek chorobowy','przysługuje, bo od 2012 r. płacisz dobrowolną składkę chorobową; 80% podstawy'],
     ['Ile to będzie','ok. 120 zł za dzień, ok. 3 590 zł za 30 dni (wyliczenie uproszczone)'],['Składki w tym czasie','społeczne proporcjonalnie za dni bez choroby, zdrowotna w całości'],
     ['Zawieszenie firmy','nie możesz, dopóki zatrudniasz pracownika na umowę o pracę'],['Kto poprowadzi sprawy','pełnomocnik wpisany do CEIDG, np. żona: urzędy, ZUS, faktury w KSeF']]});
   await say('Warto ustanowić pełnomocnika zawczasu, a nie dopiero w szpitalu. Zrobię to tutaj w minutę.');
   chips([{label:'Ustanów pełnomocnika w CEIDG',go:()=>confirmCard({icon:'id',title:'Pełnomocnictwo do spraw firmy',source:'CEIDG, tożsamość z mDowodu',
     rows:[['Pełnomocnik','Agnieszka Wiśniewska (żona)'],['Zakres','sprawy firmy w urzędach, ZUS i US, faktury w KSeF'],['Od','dziś, do odwołania'],['Wpis','CEIDG, bezpłatnie']],
     label:'Podpisz i ustanów',then:()=>result({title:'Pełnomocnik wpisany',source:'CEIDG',rows:[['Pełnomocnik','Agnieszka Wiśniewska'],['Powiadomienie','Agnieszka dostała je w swojej aplikacji'],['Odwołanie','w każdej chwili, tutaj']]})})},
    {label:'Na razie wystarczy'}]);
  }
 });
 // trasy tylko do spraw, które ma bieżąca osoba (np. „zwolnienie” to u Ewy utrata pracy, u Jana choroba)
 const klucze=new Set(PR.menu.flatMap(g=>g[2].map(x=>x[0])));
 const TRASY=[[/kwalifikac|uprawnien|pierwsz\w* pomoc|egzamin|\bg3\b/,'pKwalif'],[/histori\w* (zatrudnienia|zawodow)|swiadectw\w* pracy/,'pHistoria'],
  [/wolontaria/,'pWolont'],[/pracownik|badani\w* okresow|skierowani\w* na badani/,'pPracownicy'],[/emerytur|ikze/,'pEmerytura'],
  [/kontrahent|podwykonaw|sprawdz firm|dostalem zleceni/,'pKontrahent'],[/ofert\w* pracy|sprawdz umow|umow\w* zlecen|na reke|pracodawc/,'pUmowa'],
  [/chorob|zachoruj|\bl4\b|zwolnieni\w* lekarsk|pelnomocnik|zawies\w* (firm|dzialaln)/,'pChoroba'],[/strac\w* prac|zwolni|bezroboc|urzad pracy/,'pUtrata']];
 const _route=route;
 route=function(t){
  if(pending)return _route(t);
  const n=norm(t),tr=TRASY.find(([re,k])=>klucze.has(k)&&re.test(n));
  return tr?S[tr[1]]():_route(t);
 };
}
document.addEventListener('DOMContentLoaded',pracaInit);
