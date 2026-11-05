/* ---------- osoby demonstracyjne (fikcyjne): dokumenty w portfelu, przypomnienia i dane do przekazania ----------
   Wybór: ?osoba=jan w adresie albo w menu „Układ dokumentów”. Zapamiętywane w tej przeglądarce. */
const OSOBY={
 jan:{id:'jan',plec:'M',imie:'Jan',nazwisko:'Wiśniewski',wolacz:'Janie',opis:'Kraków, 43 lata, własna firma, troje dzieci',
  docs:[
   {id:'dowod',name:'mDowód',img:'assets/card-mdowod-bez.png',strip:'assets/strip-mdowod.png',sub:'Dowód ważny do 20.05.2030',photo:1,holder:'JAN WIŚNIEWSKI',line:'PESEL 83051203455',f:[['PESEL','83051203455'],['Data urodzenia','12.05.1983'],['Dowód osobisty','CDE 778812'],['Dowód ważny do','20.05.2030']],rows:[['Imię','Jan'],['Nazwisko','Wiśniewski'],['PESEL','83051203455'],['Data urodzenia','12.05.1983'],['Dowód osobisty','CDE 778812, ważny do 20.05.2030']]}
  ],
  tiles:[
   {i:'mail',h:'Wyjaśnienia VAT dla urzędu',d:'Odpowiedź do 28.10',k:'letter',u:1,s:'Czynności sprawdzające JPK_V7M za sierpień, US Kraków-Podgórze',q:'Co chce ode mnie Urząd Skarbowy?'},
   {i:'car',h:'Koniec okresu OC Transportera',d:'Za 16 dni, 03.11',k:'oc',u:1,s:'Allianz, KR 2M884, auto w leasingu, OC uzgodnij z VW Leasing',q:'Kończy się OC Transportera, co mam zrobić?'},
   {i:'coin',h:'Składki ZUS za październik',d:'1 926,76 zł do 20.11',k:'pay',s:'Składki społeczne, zdrowotna osobno',q:'Ile mam do zapłaty w ZUS i kiedy?'},
   {i:'coin',h:'Podatek od nieruchomości',d:'186 zł do 16.11',k:'pay',s:'IV rata 2026, Urząd Miasta Krakowa, przelewem',q:'Jak zapłacić podatek od nieruchomości?'}
  ],
  moje:{imie_nazwisko:'Jan Wiśniewski',data_urodzenia:'12.05.1983',pesel:'83051203455',dowod:'CDE 778812, ważny do 20.05.2030',nr_dowodu:'CDE 778812',
   pelnoletnosc:'tak, ukończone 18 lat',prawo_jazdy:'kat. B, C, ważne do 30.09.2033',pojazd:'Skoda Octavia Combi, KR 7G210',pojazd_model:'Skoda Octavia Combi',pojazd_kolor:'granatowy',oc:'PZU, polisa 1021 448 120',adres:'ul. Wielicka 28 m. 15, Kraków'},
  sugg:[['Zgubiłem portfel','zastrzeżenie dokumentów'],['Co chce ode mnie Urząd Skarbowy?','pismo w sprawie VAT'],['Chcę na chwilę odblokować PESEL','kredyt na nowe auto'],['Jedziemy z dziećmi do Egiptu','paszport Igora i ostrzeżenia MSZ'],['Miałem stłuczkę','oświadczenie bez druku']],
  ask:{dowod:'Kiedy mój dowód traci ważność?',pj:'Ile mam punktów karnych?',auto:'Kiedy kończy się OC moich aut?',kdr:'Gdzie mogę użyć Karty Dużej Rodziny?'}
 },
 ewa:{id:'ewa',plec:'K',imie:'Ewa',nazwisko:'Nowak',wolacz:'Ewo',opis:'Gmina Lipowiec, 57 lat, nauczycielka, opiekuje się mamą',
  docs:[
   {id:'dowod',name:'mDowód',img:'assets/card-mdowod-bez.png',strip:'assets/strip-mdowod.png',sub:'Dowód ważny do 05.12.2026',alert:'Ważny jeszcze 48 dni',photo:1,holder:'EWA NOWAK',line:'PESEL 69020312845',f:[['PESEL','69020312845'],['Data urodzenia','03.02.1969'],['Dowód osobisty','AXK 552190'],['Dowód ważny do','05.12.2026']],rows:[['Imię','Ewa'],['Nazwisko','Nowak'],['PESEL','69020312845'],['Data urodzenia','03.02.1969'],['Dowód osobisty','AXK 552190, ważny do 05.12.2026']]}
  ],
  tiles:[
   {i:'alert',h:'Zmiana planu przy Twoim domu',d:'Uwagi do 18.12',k:'plan',u:1,s:'Magazyny 380 m od domu, dojazd ul. Szkolną obok szkoły',q:'Co się zmienia przy moim domu?'},
   {i:'id',h:'Dowód traci ważność',d:'05.12.2026, za 48 dni',k:'renew',u:1,s:'Wniosek złożysz tutaj, potem odciski palców w urzędzie do 30 dni',q:'Mój dowód traci ważność, co mam zrobić?'},
   {i:'car',h:'Badanie techniczne Pandy',d:'Do 08.11, za 21 dni',k:'oc',u:1,s:'LU 5521P, stacja kontroli pojazdów',q:'Kiedy mam badanie techniczne auta?'},
   {i:'coin',h:'Podatek od nieruchomości',d:'164 zł do 16.11',k:'pay',s:'IV rata 2026, Urząd Gminy Lipowiec, BLIK',q:'Chcę zapłacić podatek od nieruchomości'},
   {i:'mail',h:'Informacja z ZUS o emeryturze',d:'Nowa wiadomość',k:'letter',s:'Wiek emerytalny 03.02.2029, wniosek złożysz od 04.01.2029',q:'Ile będę miała emerytury?'}
  ],
  moje:{imie_nazwisko:'Ewa Nowak',data_urodzenia:'03.02.1969',pesel:'69020312845',dowod:'AXK 552190, ważny do 05.12.2026',nr_dowodu:'AXK 552190',
   pelnoletnosc:'tak, ukończone 18 lat',prawo_jazdy:'kat. B, bezterminowe',pojazd:'Fiat Panda, LU 5521P',pojazd_model:'Fiat Panda',pojazd_kolor:'czerwony',oc:'Link4, polisa L4 0071 226 908',adres:'ul. Szkolna 7, Lipowiec Kolonia'},
  sugg:[['Co się zmienia w mojej gminie?','plan miejscowy, rada, budżet'],['Mój dowód traci ważność','wniosek tutaj, odciski w urzędzie'],['Ile będę miała emerytury?','prognoza z ZUS'],['Jakie recepty ma moja mama?','upoważnienie od mamy w IKP'],['Dostałam dziwnego SMS-a','sprawdzę i zgłoszę'],['Zgubiłam portfel','zastrzeżenie dokumentów']],
  ask:{dowod:'Mój dowód traci ważność, co mam zrobić?',pj:'Kiedy muszę wymienić prawo jazdy?',auto:'Kiedy mam badanie techniczne?',kdr:'Gdzie mogę użyć Karty Dużej Rodziny?'}
 }
};
const OSOBA_ID=(()=>{let q=null;try{q=new URLSearchParams(location.search).get('osoba')}catch(e){}
 if(q&&OSOBY[q]){try{localStorage.setItem('mobOsoba',q)}catch(e){}return q}
 try{const s=localStorage.getItem('mobOsoba');if(s&&OSOBY[s])return s}catch(e){}return 'jan'})();
const OS=OSOBY[OSOBA_ID];
const rodz=(k,m)=>OS.plec==='K'?k:m;
document.documentElement.style.setProperty('--foto',`url(assets/foto-${OS.id}.jpg)`);
function zmienOsobe(id){if(!OSOBY[id]||id===OSOBA_ID)return;try{localStorage.setItem('mobOsoba',id)}catch(e){}const u=new URL(location.href);u.searchParams.set('osoba',id);location.replace(u.toString())}
