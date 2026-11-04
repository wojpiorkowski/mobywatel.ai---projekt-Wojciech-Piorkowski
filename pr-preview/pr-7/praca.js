/* ---------- Moja praca: e-teczka, kwalifikacje, wolontariat, sprawdzenie umowy (dane fikcyjne) ----------
   Ładowany po gmina.js, przed core.js, tak samo jak gmina.js: karta do portfela teraz, scenariusze po DOMContentLoaded. */
const PRACE={
 ewa:{
  pracodawca:'Szkoła Podstawowa w Lipowcu',stanowisko:'nauczycielka matematyki',awans:'nauczycielka dyplomowana',od:'01.09.1993',staz:'33 lata',wymiar:'pełny etat (18 godzin przy tablicy)',
  historia:[['09.1993–08.2001','SP nr 24 w Lublinie, nauczycielka'],['09.2001–obecnie','SP w Lipowcu, nauczycielka, od 2011 r. dyplomowana'],['07.2015–08.2015','Obóz językowy „Lato”, umowa zlecenia']],
  kwalif:[['Magister matematyki','UMCS, 1993'],['Studia podyplomowe z informatyki','UMCS, 2005'],['Kierownik wycieczek szkolnych','kurs, 2018'],['Pierwsza pomoc','ważne do 15.03.2027']],
  wolont:[['Świetlica w Lipowcu Kolonii','korepetycje z matematyki, 46 h w 2026 r.'],['OSP Lipowiec','festyn rodzinny, 12 h w 2026 r.']],
  oferta:{firma:'Lingwa Plus sp. z o.o.',co:'korepetycje online z matematyki',umowa:'umowa zlecenia',stawka:'70 zł za godzinę',godz:20,brutto:1400,zdrowotna:126,pit:134,netto:1140,
   krs:[['KRS','aktywna od 2015 r., bez upadłości i likwidacji'],['Biała lista VAT','czynny podatnik, rachunek z umowy jest na liście'],['Zaległości','brak wpisów w rejestrach dłużników (stan na dziś)']]},
  emerytura:{wiek:'60 lat, 03.02.2029',kapital:'98 700 zł',skladki:'512 300 zł',prognoza:[['W wieku 60 lat','ok. 3 980 zł brutto'],['W wieku 62 lat','ok. 4 730 zł brutto'],['W wieku 65 lat','ok. 6 120 zł brutto']]}
 }
};
const PR=PRACE[OS.id]||null;
if(PR)OS.docs.push({id:'praca',name:'Moja praca',img:'assets/card-praca.svg',sub:PR.pracodawca,alert:'Pierwsza pomoc do 15.03.2027',holder:(OS.imie+' '+OS.nazwisko).toUpperCase(),line:PR.stanowisko,
 f:[['Stanowisko',PR.awans],['Staż',PR.staz]],rows:[]});

function openPraca(){
 const det=$('#detail'),top=getComputedStyle($('.status')).display!=='none'?50:6,d=DOCS.find(x=>x.id==='praca');
 const it=(k,ic,h,s)=>`<button class="it" data-k="${k}"><span class="gi">${svg(ic)}</span><span class="x"><b>${h}</b><small>${s}</small></span>${svg('chev')}</button>`;
 det.innerHTML=`<div style="height:${top}px;flex:none"></div><div class="nav"><button class="back" id="dclose">${svg('back')}Wróć</button><b>Moja praca</b><span></span></div>
  <div class="body"><div class="bigcard" style="background-image:url(${d.img})">${faceHTML(d)}</div>
  <div class="ui"><div class="rows" style="padding-top:4px">${rowsH([['Pracodawca',PR.pracodawca],['Stanowisko',PR.stanowisko],['Stopień awansu',PR.awans],['Zatrudnienie od',PR.od],['Wymiar',PR.wymiar]])}</div>${srcH('ZUS, System Informacji Oświatowej (dane fikcyjne)')}</div>
  <div class="ui list glist">${hd('doc','E-teczka')}
   ${it('pHistoria','clock','Historia zatrudnienia',PR.historia.length+' okresy z ZUS, świadectwa pracy')}
   ${it('pKwalif','id','Kwalifikacje i uprawnienia',PR.kwalif.length+' pozycje · przekażesz znakiem mObywatela')}
   ${it('pWolont','check','Wolontariat',PR.wolont.length+' potwierdzone · do CV')}
   ${it('pEmerytura','coin','Emerytura','wiek emerytalny '+PR.emerytura.wiek)}</div>
  <div class="ui list glist">${hd('shield','Zanim podpiszesz, gdy coś się zmienia')}
   ${it('pUmowa','doc','Sprawdź pracodawcę i umowę','rejestry i ile dostaniesz na rękę')}
   ${it('pUtrata','alert','Gdy stracisz pracę','krok po kroku, bez przerwy w ubezpieczeniu')}
   ${GM?it('gNabory','bell','Praca w gminie',GM.nabory.length+' otwarte nabory'):''}</div></div>`;
 tick();det.classList.add('on');
 $('#dclose').onclick=()=>det.classList.remove('on');
 const Q={pHistoria:'Pokaż moją historię zatrudnienia',pKwalif:'Jakie mam kwalifikacje?',pWolont:'Mój wolontariat',pEmerytura:'Ile będę miała emerytury?',pUmowa:'Dostałam ofertę pracy, sprawdź umowę',pUtrata:'Co zrobić, gdy stracę pracę?',gNabory:'Jakie są nabory do pracy w gminie?'};
 det.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{det.classList.remove('on');setTimeout(()=>startTopic(Q[b.dataset.k],()=>S[b.dataset.k]()),180)});
}

function pracaInit(){
 if(!PR)return;
 const _open=openDoc;openDoc=function(id){id==='praca'?openPraca():_open(id)};
 const O=PR.oferta;
 Object.assign(S,{
  async pHistoria(){
   await info({icon:'clock',title:'Historia zatrudnienia',source:'ZUS, e-Akta (dane fikcyjne)',rows:PR.historia,note:'Świadectwa pracy z obu szkół są w Twoich plikach. Nowe świadectwo pracodawca doda tu sam.'});
   chips([{label:'Kwalifikacje i uprawnienia',go:S.pKwalif},{label:'Ile będę miała emerytury?',go:S.pEmerytura}]);
  },
  async pKwalif(){
   await info({icon:'id',title:'Kwalifikacje i uprawnienia',source:'Rejestry uczelni (POL-on), ewidencja kursów (dane fikcyjne)',rows:PR.kwalif,flag:'Zaświadczenie z pierwszej pomocy wygasa 15.03.2027.'});
   chips([{label:'Przekaż pracodawcy',go:S.pPrzekaz},{label:'Przypomnij o kursie pierwszej pomocy',go:()=>result({title:'Przypomnienie ustawione',rows:[['Kiedy','15.02.2027, 9:00'],['O czym','odnowienie kursu pierwszej pomocy']]})}]);
  },
  async pPrzekaz(){
   await say('Co przekazać? Odbiorca zobaczy tylko to, co zaznaczysz.');
   multi(PR.kwalif.map(k=>k[0]),async sel=>{
    await confirmCard({icon:'scan',title:'Przekazanie kwalifikacji',source:'Znak mObywatela, dane z rejestrów',rows:[['Co',sel.join(', ')],['Komu','zeskanujesz znak mObywatela odbiorcy'],['Ważność potwierdzenia','odbiorca sprawdzi je online przez 30 dni']],label:'Przekaż',
     then:()=>result({title:'Kwalifikacje przekazane',rows:[['Pozycji',String(sel.length)],['Odbiorca','Lingwa Plus sp. z o.o. (przykład)'],['Historia','w Twoich sprawach']]})});
   });
  },
  async pWolont(){
   await info({icon:'check',title:'Wolontariat',source:'Potwierdzenia organizacji (dane fikcyjne)',rows:PR.wolont,note:'Godziny potwierdziły organizacje. Możesz dołączyć je do CV albo e-teczki jako doświadczenie.'});
   chips([{label:'Dodaj do e-teczki',go:()=>result({title:'Dodano do e-teczki',rows:[['Wolontariat','58 h w 2026 r.'],['Widoczne','w CV z mObywatela']]})},{label:'Pobierz zaświadczenie',go:()=>result({title:'Zaświadczenie gotowe',rows:[['Plik','Zaświadczenie o wolontariacie 2026.pdf'],['Gdzie','w Twoich plikach']]})}]);
  },
  async pEmerytura(){
   const E=PR.emerytura;
   await info({icon:'coin',title:'Prognoza emerytury',source:'ZUS, informacja o stanie konta (dane fikcyjne)',rows:[['Wiek emerytalny',E.wiek],['Składki',E.skladki],['Kapitał początkowy',E.kapital],...E.prognoza],note:'Każdy rok dłużej podnosi emeryturę, bo rośnie kapitał i skraca się średnie dalsze trwanie życia.'});
   chips([{label:'Przypomnij o wniosku',go:()=>result({title:'Przypomnienie ustawione',rows:[['Kiedy','04.01.2029'],['O czym','wniosek o emeryturę (EMP) można złożyć od tego dnia']]})},{label:'Umów e-wizytę w ZUS',go:()=>say('Najbliższy wolny termin e-wizyty w ZUS to 6 listopada o 10:30. Napisz „umów”, a zarezerwuję.')}]);
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
  async pUtrata(){
   await info({icon:'alert',title:'Gdy stracisz pracę',source:'Ustawa o rynku pracy, NFZ, karty usług gov.pl',
    rows:[['Świadectwo pracy','pracodawca wystawia w dniu rozwiązania umowy, trafi do e-teczki'],['Ubezpieczenie zdrowotne','jeszcze 30 dni, potem przez urząd pracy'],['Rejestracja','online w urzędzie pracy, zalogujesz się mObywatelem'],['Zasiłek','gdy w ostatnich 18 miesiącach pracowałaś co najmniej 365 dni; liczy się od dnia rejestracji'],['Oferty w okolicy','nabory w urzędach i spółkach gminy, oferty z urzędu pracy']]});
   chips(GM?[{label:'Nabory w gminie',go:S.gNabory},{label:'Na razie wystarczy'}]:[{label:'Na razie wystarczy'}]);
  }
 });
 const _route=route;
 route=function(t){
  if(pending)return _route(t);
  const n=norm(t);
  if(/historia zatrudnienia|swiadectw/.test(n))return S.pHistoria();
  if(/kwalifikac|uprawnien|pierwsz\w* pomoc/.test(n))return S.pKwalif();
  if(/wolontaria/.test(n))return S.pWolont();
  if(/emerytur/.test(n))return S.pEmerytura();
  if(/ofert\w* pracy|sprawdz umow|umow\w* zlecen|na reke|pracodawc/.test(n))return S.pUmowa();
  if(/strac\w* prac|zwolni|bezroboc|urzad pracy/.test(n))return S.pUtrata();
  return _route(t);
 };
}
document.addEventListener('DOMContentLoaded',pracaInit);
