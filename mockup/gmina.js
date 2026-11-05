/* ---------- Moja gmina: co się zmienia przy mnie, kto decyduje, jak zareagować (dane fikcyjne) ----------
   Ładowany po osoby.js, przed core.js: dokłada kartę „Moja gmina” do portfela osoby, która ma dane gminy.
   Scenariusze i trasy dopina po załadowaniu reszty (DOMContentLoaded), bo S i route są w scenarios.js. */
const GMINY={
 ewa:{
  nazwa:'Gmina Lipowiec',krotko:'Lipowiec',typ:'gmina wiejska, powiat lubelski',mieszk:'8 940',solectwo:'Lipowiec Kolonia',soltys:'Halina Mazur',
  urzad:'Urząd Gminy Lipowiec',bip:'BIP Gminy Lipowiec',jednostka:'sołectwa Lipowiec Kolonia',twojaJedn:'Twojego sołectwa',wladza:'Wójt',
  etykRada:'Rada i wójt',radaTyt:'Wójt i rada gminy',alert:'Zmiana planu przy Tobie',f:[['Sołectwo','Lipowiec Kolonia'],['Uwagi do planu','do 18.12.2026']],uchwalaRadny:1,
  wstep:'W gminie Lipowiec najważniejsza sprawa przy Tobie to projekt zmiany planu miejscowego, 380 m od Twojego domu. Uwagi można składać do <b>18.12.2026</b>.',
  liczbyPod:'budżet i dług na tle podobnych gmin',liczbyTyt:'Gmina Lipowiec na tle podobnych gmin',liczbyOpis:'Kreska to średnia 5 gmin wiejskich z województwa o podobnej liczbie mieszkańców.',
  liczbyWniosek:'Najbardziej odstają zadłużenie i wydatki na promocję, w tym biuletyn gminy. Chcesz zobaczyć, komu gmina płaci najwięcej?',
  wojt:{kto:'Zbigniew Kordas',od:2006,kad:'5. kadencja (od 2006)',wybory:'2024: jedyny kandydat, 68% głosów „tak”',limit:'Obecna kadencja jest ostatnią (limit dwóch kadencji liczonych od 2018 r.), chyba że Sejm zniesie limit.'},
  rada:{nazwa:'Rada Gminy Lipowiec',n:15,wojta:13,komitet:'KWW Razem dla Lipowca',jeden:'w 9 z 15 okręgów był tylko jeden kandydat',frekw:'49%',
   radny:{kto:'Stanisław Wójcik',okreg:'okręg nr 4',komitet:'KWW Razem dla Lipowca',dyzur:'pierwszy poniedziałek miesiąca, 16:00–17:00, urząd gminy, pok. 12'},
   glosy:[['Przystąpienie do zmiany planu „Pola Południowe” (03.2025)','za'],['Podwyżka opłaty za odpady do 39 zł (12.2025)','za'],['Nagrania posiedzeń komisji (09.2026, wniosek radnej spoza klubu wójta)','przeciw']]},
  sesja:{tytul:'Sesja Rady Gminy',przyp:'26.11.2026, 9:45',kiedy:'26.11.2026, godz. 10:00',gdzie:'sala GOK, transmisja na BIP',porzadek:['Projekt budżetu na 2027 r. (pierwsze czytanie)','Stawki podatku od nieruchomości na 2027 r.','Sprzedaż działki 214/3 w trybie bezprzetargowym']},
  uchwaly:[
   {re:/budzet\w* na 2027|projekt budzetu/,tytul:'Projekt budżetu na 2027 r.',nr:'projekt uchwały budżetowej, pierwsze czytanie',
    co:'Gmina chce wydać 57,3 mln zł przy dochodach 54,1 mln zł. Brakujące 3,2 mln zł pokryje kredyt.',
    kogo:'wszystkich mieszkańców; w Twoim sołectwie fundusz sołecki 38 tys. zł',
    rows:[['Dochody','54,1 mln zł'],['Wydatki','57,3 mln zł'],['Deficyt','3,2 mln zł, kredyt'],['Największa inwestycja','droga Lipowiec Kolonia – Wola, 2,4 mln zł'],['Szkoła w Lipowcu','termomodernizacja, 1,1 mln zł'],['Promocja i biuletyn','420 tys. zł (w 2026 r. 410 tys. zł)']],
    za:['droga przy Twoim sołectwie, o którą mieszkańcy prosili od 2019 r.','termomodernizacja szkoły obniży rachunki o ok. 90 tys. zł rocznie'],
    przeciw:['dług wzrośnie do ok. 34% dochodów, podobne gminy mają 18%','wydatki na promocję rosną, a na pomoc społeczną bez zmian'],
    komisja:'Komisja budżetowa: opinia pozytywna, 4 za, 1 przeciw',zrodla:'Projekt uchwały budżetowej, opinia RIO, protokół komisji budżetowej'},
   {re:/podatek od nieruchomosci.*(2027|stawk|wzro|rosnie)|stawk\w* podatk/,tytul:'Stawki podatku od nieruchomości na 2027 r.',nr:'projekt uchwały nr XXVII/2026',
    co:'Stawki rosną średnio o 9%. Domy mieszkalne: z 1,05 do 1,15 zł za m², grunty pod domami: z 0,58 do 0,63 zł za m².',
    kogo:'właścicieli domów, mieszkań, działek i firm',
    rows:[['Twój dom','128 m², +12,80 zł rocznie'],['Twoja działka','1 150 m², +57,50 zł rocznie'],['Razem dla Ciebie','<b>+70,30 zł rocznie</b> (z 656 zł do 726 zł)'],['Do budżetu gminy','ok. +410 tys. zł rocznie']],
    za:['inflacja i wyższe koszty utrzymania dróg i szkół','stawki nadal niższe niż maksymalne ustawowe'],
    przeciw:['drugi wzrost z rzędu (w 2026 r. +7%)','dla firm ponad dwa razy więcej niż dla domów, co może odstraszać inwestorów'],
    komisja:'Komisja budżetowa: opinia pozytywna, 3 za, 2 przeciw',zrodla:'Projekt uchwały, uzasadnienie, obwieszczenie MF o maksymalnych stawkach, Twoja decyzja podatkowa'},
   {re:/dzialk\w* 214|bez przetargu|sprzedaz dzialki/,tytul:'Sprzedaż działki 214/3 bez przetargu',nr:'projekt uchwały nr XXVIII/2026',
    co:'Gmina chce sprzedać działkę 0,21 ha przy ul. Polnej właścicielowi przyległej działki, bez przetargu, za 86 tys. zł według wyceny rzeczoznawcy.',
    kogo:'nikogo bezpośrednio; dotyczy majątku gminy',
    rows:[['Działka','214/3, 0,21 ha, ul. Polna'],['Cena','86 tys. zł (wycena rzeczoznawcy z 08.2026)'],['Nabywca','właściciel przyległej działki (firma usługowa)'],['Tryb','bezprzetargowy, poprawa zagospodarowania sąsiedniej nieruchomości']],
    za:['działka jest wąska i sama trudno ją zagospodarować','tryb przewiduje ustawa o gospodarce nieruchomościami'],
    przeciw:['bez przetargu nikt inny nie może zaoferować więcej','wycena sprzed planowanej zmiany planu w okolicy'],
    komisja:'Komisja rewizyjna: brak opinii, sprawa nie trafiła na posiedzenie',zrodla:'Projekt uchwały, operat szacunkowy (do wglądu w urzędzie)'}],
  plan:{nazwa:'Zmiana planu miejscowego „Pola Południowe”',odl:'380 m od Twojego domu',pow:'42 ha',
   teraz:'tereny rolnicze (R), grunty III klasy',projekt:'produkcja, składy i magazyny (P/U), budynki do 18 m',
   dojazd:'ul. Szkolną, obok Szkoły Podstawowej w Lipowcu',wniosek:'na wniosek właściciela gruntów (spółka prawa handlowego)',
   zrodlo:'BIP Gminy Lipowiec, rejestr urbanistyczny (dane fikcyjne)',re:/plan\w* miejsc|magazyn|uwag\w* do planu/,
   intro:'Gmina wyłożyła projekt zmiany planu miejscowego. Dotyczy terenu 380 m od Twojego domu, a dojazd ma prowadzić ul. Szkolną, obok Szkoły Podstawowej w Lipowcu.',
   kto:'Każdy może złożyć uwagę do projektu, nie trzeba być właścicielem działki. Wójt musi ją rozpatrzyć, a uwagi nieuwzględnione trafiają do rady razem z projektem.',
   zg:{ruch:'Ruch ciężarówek przy szkole',noc:'Praca magazynów nocą',wys:'Budynki do 18 m',ziel:'Brak pasa zieleni od domów'},
   zgt:{ruch:'wyznaczenie dojazdu do terenu P/U bezpośrednio z drogi wojewódzkiej, z zakazem ruchu pojazdów powyżej 3,5 t na ul. Szkolnej',
    noc:'ograniczenie działalności powodującej hałas w porze nocnej (22:00–6:00) od strony zabudowy mieszkaniowej',
    wys:'obniżenie maksymalnej wysokości zabudowy do 12 m',ziel:'wprowadzenie pasa zieleni izolacyjnej o szerokości co najmniej 30 m od zabudowy mieszkaniowej'},
   uwagaWstep:'Wnoszę uwagę do projektu: zmiany planu miejscowego „Pola Południowe” (RPP.6721.4.2025). Wnioskuję o: ',
   uzas:'ulica Szkolna prowadzi bezpośrednio obok szkoły podstawowej i domów jednorodzinnych; prognozowany ruch ok. 60 ciężarówek na dobę zagraża bezpieczeństwu dzieci i ogranicza możliwość korzystania z nieruchomości.',
   uwagaTyt:'Uwaga do projektu planu',adresat:'Wójt Gminy Lipowiec',kanal:'Do: Urząd Gminy Lipowiec, przez e-Doręczenia',wynik:'dostaniesz w skrzynce po rozpatrzeniu uwag',
   potem:'Gotowe. Dam Ci znać, jak wójt rozpatrzy uwagę i kiedy rada będzie głosować nad planem. Chcesz, żeby sąsiedzi też się dowiedzieli?',
   spotkanieTyt:'Spotkanie z projektantem planu',spotkanieKiedy:'25.11.2026, godz. 17:00',spotkanieGdzie:'sala GOK, ul. Lubelska 2',spotkaniePrzyp:'25.11, 15:00',
   przyp:['11.12.2026, 9:00','uwagi do planu do 18.12.2026'],sasiedzi:'Mieszkańcy sołectwa Lipowiec Kolonia z aplikacją dostali już powiadomienie, bo mieszkają w promieniu 1 km.',
   wylozenie:'12.10–18.12.2026',spotkanie:'25.11.2026, godz. 17:00, sala GOK',uwagi:'18.12.2026',nr:'RPP.6721.4.2025',
   za:['ok. 120 miejsc pracy według wnioskodawcy','ok. 1,1 mln zł rocznie z podatku od nieruchomości (ok. 4% dochodów gminy)','dojazd do drogi wojewódzkiej bez wjazdu do centrum'],
   przeciw:['prognoza: ok. 60 ciężarówek na dobę ulicą Szkolną','praca magazynów także nocą, hałas przy domach','utrata 42 ha gruntów rolnych III klasy']},
  liczby:[['Dochody na mieszkańca','5 820 zł','5 640 zł',103],['Zadłużenie (% dochodów)','31%','18%',172,1],['Promocja i biuletyn na mieszkańca','46 zł','19 zł',242,1],['Inwestycje (% wydatków)','14%','21%',67,1],['Oświata (% wydatków)','38%','36%',106]],
  umowy:[['Drogbud sp. z o.o.','4,82 mln zł','3 umowy na drogi, przetargi, po 1 ofercie'],['Eko-Wywóz sp. z o.o.','2,10 mln zł','odbiór odpadów, przetarg, 2 oferty'],['Lipa Media','186 tys. zł','biuletyn „Wieści Lipowieckie”, zamówienie z wolnej ręki'],['Kancelaria radcy prawnego','96 tys. zł','obsługa urzędu, zapytanie ofertowe']],
  darczyncy:{komitet:'KWW Razem dla Lipowca (wybory 2024)',suma:'48 600 zł od 21 osób',najwieksze:[['Członek zarządu Drogbud sp. z o.o.','12 000 zł'],['Właściciel Lipa Media','8 000 zł'],['Pozostałe 19 wpłat','28 600 zł']]},
  nabory:[['Inspektor ds. zamówień publicznych','Urząd Gminy','do 14.11.2026'],['Nauczyciel matematyki','SP w Lipowcu','do 20.11.2026'],['Kierowca, operator koparki','Gminny Zakład Komunalny sp. z o.o.','do 30.11.2026']],
  naborStat:'W 2026 r. 11 naborów, w 7 z nich zgłosiła się jedna osoba.',
  glos:{adresat:'Przewodniczący Rady Gminy Lipowiec',kandLabel:'Kandyduj na radną albo sołtyskę',
   pytania:[['Ile ciężarówek będzie jeździć obok szkoły?','Ile ciężarówek na dobę ma jeździć ulicą Szkolną po zmianie planu i czy gmina rozważała inny dojazd?'],['Dlaczego komisje nie są nagrywane?','Dlaczego rada odrzuciła nagrywanie posiedzeń komisji i czy wróci do tej sprawy?']],
   prog:200,progOpis:'200 podpisów (gmina do 20 tys. mieszkańców)',komitet:['Ewa Nowak','Piotr Sadowski','Agnieszka Lis'],
   projekt:{tytul:'Uchwała w sprawie panelu obywatelskiego o zmianie planu „Pola Południowe”',
    tresc:['§ 1. Przed uchwaleniem zmiany planu „Pola Południowe” przeprowadza się panel obywatelski: 24 mieszkańców gminy wylosowanych z rejestru mieszkańców, z zachowaniem proporcji wieku, płci i sołectw.','§ 2. Panel zapoznaje się ze stanowiskami wnioskodawcy, urzędu i mieszkańców oraz przyjmuje rekomendacje większością 80% głosów.','§ 3. Wójt przedstawia radzie rekomendacje panelu wraz z projektem planu i informacją, jak je uwzględniono.'],
    skad:'Na podstawie sprawy planu „Pola Południowe” przygotowałem przykładowy projekt. Możesz go zmienić albo zacząć od własnego pomysłu.',
    uzas:'Zmiana planu dotyczy 42 ha i kilkuset gospodarstw w trzech sołectwach. Panel pozwala rozważyć argumenty za i przeciw przez mieszkańców, którzy nie są stroną sporu.'},
   sesjaProjektu:'28.01.2027',debata:{raport:'Raport o stanie gminy za 2026 r.',kiedy:'czerwiec 2027',podpisy:'20 podpisów mieszkańców'},
   wybory:{przyp:'po ogłoszeniu wyborów w 2029 r.',flag:'W 2024 r. w 9 z 15 okręgów był tylko jeden kandydat, a na wójta jeden kandydat.',
    praca:['Jak wygląda praca radnej?','Sesje mniej więcej raz w miesiącu, posiedzenia komisji, dyżury dla mieszkańców. Radna głosuje imiennie, a jej głosy są publiczne.'],
    kiedy:'wiosna 2029',radny:'25 podpisów wyborców z okręgu',wojt:'150 podpisów (gmina do 20 tys. mieszkańców)',dieta:'ok. 900 zł miesięcznie (uchwała rady, dane fikcyjne)',
    soltys:'zebranie wiejskie po wyborach samorządowych, kandydata zgłasza się na zebraniu'}}
 },
 /* Jan: duże miasto z dzielnicami; inne sprawy niż u Ewy: konsultacje inwestycji drogowej, strefa parkowania,
    budżet obywatelski i zlecenia miasta dla jego firmy. Miasto prawdziwe, ludzie, liczby i projekty fikcyjne. */
 jan:{
  nazwa:'Kraków',krotko:'Kraków',typ:'miasto na prawach powiatu, Dzielnica XIII Podgórze',mieszk:'806 tys.',solectwo:'Dzielnica XIII Podgórze',soltys:'',
  urzad:'Urząd Miasta Krakowa',bip:'BIP Miasta Krakowa',jednostka:'Dzielnicy XIII Podgórze',twojaJedn:'Twojej dzielnicy',wladza:'Prezydent miasta',
  etykRada:'Prezydent i rady',radaTyt:'Władze miasta i dzielnicy',alert:'Konsultacje do 30.11',f:[['Dzielnica','XIII Podgórze'],['Uwagi do','30.11.2026']],uchwalaRadny:0,
  wstep:'W Krakowie najważniejsza sprawa przy Tobie to konsultacje przebudowy ul. Wielickiej, tuż pod Twoim blokiem. Uwagi można składać do <b>30.11.2026</b>. Do tego samego dnia trwa głosowanie w budżecie obywatelskim.',
  liczbyPod:'budżet i dług na tle innych dużych miast',liczbyTyt:'Kraków na tle dużych miast',liczbyOpis:'Kreska to średnia pięciu innych największych miast w Polsce.',
  liczbyWniosek:'Najbardziej odstaje zadłużenie, a udział inwestycji jest niższy niż gdzie indziej. Więcej niż inne miasta Kraków wydaje na komunikację i budżet obywatelski. Chcesz zagłosować na projekty w swojej dzielnicy?',
  wojt:{kto:'Marek Zawada',od:2024,kad:'1. kadencja (od 2024)',wybory:'2024: II tura, 51,2% głosów',limit:'Prezydent przedstawia co roku raport o stanie miasta, a rada głosuje nad wotum zaufania.'},
  wladzaRows:[['Prezydent miasta','Marek Zawada, 1. kadencja (od 2024)'],['Ostatnie wybory','2024: II tura, 51,2% głosów, frekwencja 41%'],['Rada Miasta Krakowa','43 radnych, koalicja 24 radnych'],['Rada Dzielnicy XIII Podgórze','21 radnych, dzieli pieniądze dzielnicy i opiniuje sprawy miasta'],['Twój okręg do Rady Miasta','nr 3: Podgórze, Prokocim, Bieżanów, 8 radnych']],
  rada:{nazwa:'Rada Miasta Krakowa',n:43,wojta:24,komitet:'koalicja KWW Kraków Razem i KWW Nowy Kraków',jeden:'',frekw:'47%',
   radny:{kto:'Tomasz Gil',okreg:'okręg nr 3 (Podgórze, Prokocim, Bieżanów)',komitet:'KWW Kraków Razem',dyzur:'drugi wtorek miesiąca, 17:00–18:00, siedziba Rady Dzielnicy XIII'},
   glosy:[['Wniosek o strefę płatnego parkowania na Podgórzu (06.2026)','za'],['Budżet obywatelski 2027: 40 mln zł (03.2026)','za'],['Nocny zakaz sprzedaży alkoholu w całym mieście (09.2026)','wstrzymał się']]},
  sesja:{tytul:'Sesja Rady Miasta Krakowa',przyp:'25.11.2026, 8:45',kiedy:'25.11.2026, godz. 9:00',gdzie:'sala obrad magistratu, transmisja na BIP'},
  uchwaly:[
   {re:/parkow|strefa? platn|abonament/,tytul:'Strefa płatnego parkowania na Podgórzu',nr:'projekt uchwały nr 1840/2026',
    co:'Od 1 marca 2027 r. parkowanie na ulicach Podgórza, także przy ul. Wielickiej, będzie płatne w dni robocze od 10:00 do 20:00. Mieszkańcy mogą wykupić abonament.',
    kogo:'mieszkańców i firm z Podgórza, którzy parkują na ulicy; u Ciebie dwa auta',
    rows:[['Pierwsza godzina','6 zł'],['Abonament mieszkańca','10 zł miesięcznie za pierwsze auto, 50 zł za drugie'],['Skoda Octavia','abonament mieszkańca, 10 zł'],['Transporter firmowy (leasing)','abonament mieszkańca go nie obejmuje; karta dla firm 250 zł miesięcznie'],['Razem dla Ciebie','<b>ok. 260 zł miesięcznie</b>, mniej, jeśli Transporter stanie poza strefą']],
    za:['łatwiej o miejsce: dziś w dzień zajętych jest 97% miejsc','mniej aut spoza miasta, które stoją na Podgórzu cały dzień'],
    przeciw:['koszt dla rodzin z dwoma autami i dla małych firm usługowych','auta mogą przenieść się na ulice tuż za granicą strefy'],
    komisja:'Komisja Infrastruktury: opinia pozytywna; Rada Dzielnicy XIII: za, z wnioskiem o tańszą kartę dla małych firm',zrodla:'Projekt uchwały, badanie zajętości miejsc (ZDMK), opinia Rady Dzielnicy XIII'},
   {re:/odpad|smieci/,tytul:'Opłata za odpady od 2027 r.',nr:'projekt uchwały nr 1841/2026',
    co:'Miasto chce liczyć opłatę za odpady od zużycia wody, a nie od liczby osób: 13,20 zł za metr sześcienny zamiast 34 zł od osoby.',
    kogo:'wszystkich mieszkańców mieszkań i domów',
    rows:[['Dziś','5 osób × 34 zł = 170 zł miesięcznie'],['Po zmianie','ok. 9,4 m³ wody × 13,20 zł = 124 zł miesięcznie'],['Dla Ciebie','<b>ok. 46 zł mniej miesięcznie</b> (552 zł rocznie)'],['Osoba mieszkająca sama','zwykle zapłaci więcej niż dziś']],
    za:['rodziny wielodzietne płacą mniej','opłata bliżej rzeczywistego zużycia, mniej osób poza systemem'],
    przeciw:['seniorzy mieszkający sami zapłacą więcej','zużycie wody słabo mówi o ilości śmieci, np. przy podlewaniu ogrodu'],
    komisja:'Komisja Budżetowa: opinia pozytywna, 6 za, 3 przeciw',zrodla:'Projekt uchwały, uzasadnienie, zużycie wody z rozliczenia spółdzielni'},
   {re:/alkohol|prohibic|nocn\w* zakaz/,tytul:'Nocny zakaz sprzedaży alkoholu na Podgórzu',nr:'projekt uchwały nr 1842/2026',
    co:'W sklepach na Podgórzu nie będzie można kupić alkoholu od 22:00 do 6:00. W centrum taki zakaz już obowiązuje.',
    kogo:'nikogo z Twojej rodziny bezpośrednio; dotyczy sklepów i ich klientów',
    rows:[['Godziny','22:00–6:00, sklepy i stacje paliw'],['Bary i restauracje','bez zmian'],['Sklepy w dzielnicy','ok. 140 z zezwoleniem'],['Od kiedy','01.04.2027']],
    za:['w centrum po wprowadzeniu zakazu o jedną trzecią mniej nocnych interwencji','wniosek mieszkańców okolic Rynku Podgórskiego, 1 200 podpisów'],
    przeciw:['mniejsze obroty małych sklepów, część może się zamknąć','problem może przenieść się do sąsiednich dzielnic'],
    komisja:'Komisja Bezpieczeństwa: opinia pozytywna, 5 za, 2 przeciw',zrodla:'Projekt uchwały, dane policji, opinia Rady Dzielnicy XIII'}],
  plan:{nazwa:'Przebudowa ul. Wielickiej',odl:'pod Twoim blokiem',pow:'1,4 km',nr:'ZDMK.KS.17.2026',
   teraz:'po 2 pasy ruchu, parkowanie wzdłuż jezdni (ok. 120 miejsc)',projekt:'buspas i droga rowerowa, 70 miejsc postojowych mniej, 34 drzewa do wycinki',
   uwagi:'30.11.2026',zrodlo:'Zarząd Dróg Miasta Krakowa, platforma konsultacji (dane fikcyjne)',re:/wielick|buspas|przebudow|konsultac|drzew|miejsc\w* postojow|droga rowerow/,
   rows:[['Odcinek','1,4 km, od ul. Kamieńskiego do ul. Nowosądeckiej'],['Teraz','po 2 pasy ruchu, parkowanie wzdłuż jezdni (ok. 120 miejsc)'],['Projekt','buspas i droga rowerowa, 70 miejsc postojowych mniej'],['Zieleń','34 drzewa do wycinki, 61 nowych'],['Kto prowadzi','Zarząd Dróg Miasta Krakowa'],['Konsultacje','02.11–30.11.2026'],['Spotkanie','19.11.2026, godz. 18:00, SP nr 34'],['Budowa','2028–2029, ok. 14 miesięcy'],['Uwagi do','<b>30.11.2026</b>']],
   intro:'Miasto konsultuje projekt przebudowy ul. Wielickiej. Zmiana dotyczy odcinka pod Twoim blokiem: znika część miejsc postojowych, a w ich miejscu ma być buspas i droga rowerowa.',
   za:['autobusy w szczycie szybciej o 4–6 minut (prognoza ZDMK)','bezpieczna droga rowerowa do szkół przy Wielickiej','po budowie więcej drzew: 61 nowych za 34 wycięte'],
   przeciw:['70 miejsc postojowych mniej, a już dziś wieczorem brakuje miejsc','wycinka 34 dojrzałych lip; nowe drzewa urosną za kilkanaście lat','14 miesięcy utrudnień i objazdy przez osiedla'],
   zrodla:'Koncepcja przebudowy (ZDMK), analiza ruchu, inwentaryzacja zieleni, wnioski z pierwszego etapu konsultacji',
   decyzja:'Streszczam dokumenty, nie oceniam. Ostateczny kształt ustali miasto po konsultacjach, a pieniądze na budowę musi zapisać w budżecie Rada Miasta.',ktoGlos:'Kto o tym decyduje?',
   kto:'To konsultacje, a nie procedura planu: uwagę może zgłosić każdy. Miasto opublikuje raport z odpowiedzią na każdą uwagę, zanim zamówi projekt budowlany.',
   zg:{park:'Miejsca dla mieszkańców',dost:'Miejsca dostaw dla firm',szk:'Bezpieczne przejście przy SP nr 34',drz:'Ocalenie lip przed blokami',bud:'Budowa etapami, z dojazdem'},
   zgt:{park:'wyznaczenie miejsc dla mieszkańców w ulicach bocznych w zamian za 70 likwidowanych miejsc postojowych',
    dost:'zaprojektowanie zatok dostaw z postojem do 30 minut dla aut usługowych',
    szk:'wyniesione przejście dla pieszych z sygnalizacją przy Szkole Podstawowej nr 34',
    drz:'zachowanie szpaleru lip przed blokami nr 24–32 przez zwężenie drogi rowerowej na tym odcinku',
    bud:'prowadzenie najbardziej uciążliwych prac w wakacje i etapami, z zachowaniem dojazdu do budynków'},
   uwagaWstep:'Zgłaszam uwagę w konsultacjach: przebudowa ul. Wielickiej (ZDMK.KS.17.2026). Wnioskuję o: ',
   uzas:'mieszkam przy ul. Wielickiej 28 i prowadzę firmę instalacyjną z autem dostawczym. Likwidacja 70 miejsc postojowych bez rozwiązania zastępczego utrudni życie mieszkańcom i pracę firm usługowych, które obsługują okoliczne budynki.',
   uwagaTyt:'Uwaga w konsultacjach',adresat:'Zarząd Dróg Miasta Krakowa',kanal:'Do: Zarząd Dróg Miasta Krakowa, platforma konsultacji',wynik:'odpowiedź w raporcie z konsultacji, dam Ci znać',
   potem:'Gotowe. Dam Ci znać, gdy miasto opublikuje raport z konsultacji i odpowie na Twoją uwagę. Chcesz, żeby sąsiedzi też się dowiedzieli?',
   spotkanieTyt:'Spotkanie konsultacyjne',spotkanieKiedy:'19.11.2026, godz. 18:00',spotkanieGdzie:'Szkoła Podstawowa nr 34, ul. Wielicka 40',spotkaniePrzyp:'19.11, 16:00',
   przyp:['27.11.2026, 9:00','uwagi do przebudowy ul. Wielickiej do 30.11.2026'],sasiedzi:'Mieszkańcy ul. Wielickiej z aplikacją dostali już powiadomienie, bo mieszkają w promieniu 300 m od przebudowy.'},
  liczby:[['Dochody na mieszkańca','10 940 zł','11 380 zł',96],['Zadłużenie (% dochodów)','58%','41%',141,1],['Komunikacja miejska na mieszkańca','1 310 zł','1 120 zł',117],['Inwestycje (% wydatków)','12%','16%',75,1],['Budżet obywatelski na mieszkańca','50 zł','38 zł',132]],
  bo:{edycja:'Budżet obywatelski Krakowa 2027',do:'30.11.2026',pula:'40 mln zł, w tym 2,1 mln zł na projekty w Dzielnicy XIII',ile:3,
   zasady:'Wybierasz do 3 projektów w swojej dzielnicy. Głosować może każdy mieszkaniec Krakowa, dzieci do 16 lat z rodzicem.',
   dzielnica:[['Plac zabaw i siłownia przy ul. Wielickiej 24','420 tys. zł','50 m od Ciebie'],['Zielone podwórko przy SP nr 34','380 tys. zł','600 m od Ciebie'],['Zajęcia sportowe dla seniorów','90 tys. zł','cała dzielnica'],['Oświetlenie alejek w parku Bednarskiego','150 tys. zł','1,2 km od Ciebie'],['Tor rowerowy (pumptrack) na Kurdwanowie','610 tys. zł','2,4 km od Ciebie']],
   zaproszenie:'Agnieszka, Michał, Hanna',rodzina:'Agnieszka, Michał (15 lat) i Hanna (11 lat) też mogą zagłosować, dzieci z Twoją zgodą.'},
  zamowienia:[['Wymiana instalacji c.o. w SP nr 34','Zarząd Inwestycji Miejskich, przetarg','ok. 680 tys. zł','oferty do 24.11.2026'],['Przeglądy instalacji gazowych w 312 lokalach komunalnych','Zarząd Budynków Komunalnych, przetarg','ok. 140 tys. zł','oferty do 18.11.2026'],['Klimatyzacja w domu kultury na Podgórzu','zapytanie ofertowe','ok. 85 tys. zł','do 12.11.2026']],
  zamStat:'Dobrane do PKD 43.22.Z z CEIDG. W podobnych zamówieniach miasta w 2026 r. wpływały średnio 3 oferty.',
  glos:{adresat:'Przewodniczący Rady Miasta Krakowa',kandLabel:'Kandyduj do rady dzielnicy',
   pytania:[['Gdzie zaparkujemy po przebudowie Wielickiej?','Gdzie zaparkują mieszkańcy ul. Wielickiej po likwidacji 70 miejsc postojowych i czy miasto przewiduje miejsca zastępcze?'],['Czy małe firmy dostaną tańszy abonament?','Czy w strefie płatnego parkowania na Podgórzu przewidziano tańszą kartę dla małych firm usługowych z dzielnicy?']],
   prog:300,progOpis:'300 podpisów (gmina powyżej 20 tys. mieszkańców)',komitet:['Jan Wiśniewski','Katarzyna Ryba','Paweł Kos'],
   projekt:{tytul:'Uchwała w sprawie strefy Tempo 30 wokół szkół w Dzielnicy XIII Podgórze',
    tresc:['§ 1. Rada Miasta Krakowa wzywa Prezydenta Miasta do wprowadzenia ograniczenia prędkości do 30 km/h na ulicach w promieniu 300 m od wejść do szkół podstawowych w Dzielnicy XIII, w dni nauki od 7:00 do 17:00.','§ 2. Prezydent w ciągu 6 miesięcy przedstawi radzie plan oznakowania i wyniesionych przejść dla pieszych przy każdej szkole.','§ 3. Po roku Zarząd Dróg Miasta Krakowa publikuje raport o prędkościach i zdarzeniach przy szkołach.'],
    skad:'Na podstawie sprawy przejścia przy SP nr 34 przygotowałem przykładowy projekt. Możesz go zmienić albo zacząć od własnego pomysłu.',
    uzas:'Przy szkołach w dzielnicy w ciągu 3 lat doszło do 27 potrąceń pieszych, w tym 9 dzieci. Ograniczenie tylko w godzinach nauki nie utrudnia ruchu poza nimi.'},
   sesjaProjektu:'28.02.2027',debata:{raport:'Raport o stanie miasta za 2026 r.',kiedy:'czerwiec 2027',podpisy:'50 podpisów mieszkańców'},
   wybory:{przyp:'po ogłoszeniu wyborów do rad dzielnic',flag:'W ostatnich wyborach do Rady Dzielnicy XIII w 4 z 21 okręgów był tylko jeden kandydat, a frekwencja wyniosła 14%.',
    praca:['Czym zajmuje się rada dzielnicy?','Rada dzielnicy dzieli pieniądze dzielnicy (w 2027 r. 6,8 mln zł), opiniuje projekty miasta, np. strefę parkowania czy przebudowę ulic, i ma dyżury dla mieszkańców. Sesje są mniej więcej raz w miesiącu, wieczorem.'],
    rows:[['Wybory do rad dzielnic','maj 2027'],['Do Rady Dzielnicy XIII','20 podpisów mieszkańców Twojego okręgu'],['Do Rady Miasta, wiosna 2029','lista komitetu, 150 podpisów wyborców z okręgu'],['Na prezydenta','3 000 podpisów (miasto powyżej 200 tys. mieszkańców)'],['Dieta radnego dzielnicy','ok. 600 zł miesięcznie']]}}
 }
};
const GM=GMINY[OS.id]||null;
if(GM)OS.docs.push({id:'gmina',name:'Moja gmina',img:'assets/card-gmina.svg',sub:GM.nazwa,alert:GM.alert,holder:GM.nazwa.toUpperCase(),line:GM.typ,
 f:GM.f,rows:[]});

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

/* mapka ul. Wielickiej (Jan): znikające miejsca postojowe, buspas, drzewa do wycinki, szkoła */
function mapaWielicka(){const P=GM.plan;return `<svg class="gmap" viewBox="0 0 320 172" role="img" aria-label="Mapka: ${P.nazwa}, ${P.projekt}">
 <defs><pattern id="kresw" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#fdecef"/><path d="M0 0v6" stroke="#dc143c" stroke-width="2" stroke-opacity=".55"/></pattern></defs>
 <rect width="320" height="172" rx="12" fill="#eef3ec"/>
 <g fill="#d5dccf"><rect x="14" y="16" width="34" height="30" rx="2"/><rect x="58" y="16" width="44" height="30" rx="2" fill="#c3cdbb"/><rect x="112" y="16" width="34" height="30" rx="2"/><rect x="214" y="16" width="40" height="30" rx="2"/><rect x="264" y="16" width="44" height="30" rx="2"/><rect x="14" y="132" width="40" height="26" rx="2"/><rect x="70" y="132" width="50" height="26" rx="2"/></g>
 <path d="M180 0v62M180 110v62" stroke="#fff" stroke-width="7"/>
 <rect x="0" y="62" width="320" height="48" fill="#fff"/>
 <g fill="url(#kresw)" stroke="#dc143c" stroke-width="1">${[0,1,2,3,4,5,6,7,8].map(i=>`<rect x="${8+i*18}" y="54" width="14" height="8"/>`).join('')}</g>
 <rect x="0" y="98" width="320" height="12" fill="#dc143c" fill-opacity=".78"/><text x="250" y="107.5" class="ms">buspas i rower</text>
 <text x="8" y="80" class="ml">ul. Wielicka</text>
 <g fill="#9aa3ad">${[0,1,2,3,4].map(i=>`<rect x="${226+i*7}" y="64" width="4" height="34"/>`).join('')}</g>
 ${[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>{const x=12+i*26,w=i>=2&&i<=5;return `<circle cx="${x}" cy="119" r="5.5" fill="#6aa36f"/>`+(w?`<path d="M${x-5} 114l10 10M${x+5} 114l-10 10" stroke="#dc143c" stroke-width="1.8"/>`:'')}).join('')}
 <rect x="214" y="130" width="46" height="26" rx="3" fill="#4a6fa5"/><text x="237" y="147" class="ms">SP 34</text>
 <text x="8" y="93" class="mr">${P.projekt.split(', ')[1]}</text>
 <text x="62" y="168" class="mr">34 drzewa do wycinki</text>
 <g transform="translate(68 2)"><path d="M12 0a12 12 0 0 1 12 12c0 9-12 20-12 20S0 21 0 12A12 12 0 0 1 12 0z" fill="#16805a"/><path d="M6.5 16v-5l5.5-4.2 5.5 4.2v5h-3.6v-3.4h-3.8V16z" fill="#fff"/></g>
 <text x="108" y="12" class="mt">Twój dom</text>
</svg>`}
const MAPY={ewa:mapaPlanu,jan:mapaWielicka},mapa=()=>(MAPY[OS.id]||mapaPlanu)();

/* ---------- panel „Moja gmina” (zamiast zwykłych szczegółów dokumentu) ---------- */
function openGmina(){
 const det=$('#detail'),top=getComputedStyle($('.status')).display!=='none'?50:6,d=DOCS.find(x=>x.id==='gmina'),P=GM.plan;
 const it=(k,ic,h,s)=>`<button class="it" data-k="${k}"><span class="gi">${svg(ic)}</span><span class="x"><b>${h}</b><small>${s}</small></span>${svg('chev')}</button>`;
 det.innerHTML=`<div style="height:${top}px;flex:none"></div><div class="nav"><button class="back" id="dclose">${svg('back')}Wróć</button><b>Moja gmina</b><span></span></div>
  <div class="body"><div class="bigcard" style="background-image:url(${d.img})">${faceHTML(d)}</div>
  <div class="ui galert"><div class="hd"><div class="ic">${svg('alert')}</div><div class="tt">Zmienia się coś przy Tobie<small>${P.nazwa}, ${P.odl}</small></div></div>
   <div class="body">${mapa()}</div>
   <div class="rows">${rowsH([['Teraz',P.teraz],['Projekt',P.projekt],['Uwagi do','<em>'+P.uwagi+'</em>']])}</div>
   <div class="actions"><button class="btn primary" data-k="plan">Zobacz i zgłoś uwagę</button></div>${srcH(P.zrodlo)}</div>
  <div class="ui list glist">${hd('doc','Twoja gmina')}
   ${it('gRada','id',GM.etykRada,GM.wojt.kto+', '+GM.wojt.kad.split(' (')[0]+' · Twój radny: '+GM.rada.radny.kto)}
   ${it('gSesja','clock','Najbliższa sesja rady',GM.sesja.kiedy+' · '+GM.uchwaly.length+' projekty uchwał')}
   ${it('gLiczby','coin',(GM.wladza==='Wójt'?'Gmina':'Miasto')+' w liczbach',GM.liczbyPod)}
   ${GM.bo?it('gBO','check','Budżet obywatelski','głosowanie do '+GM.bo.do+' · '+GM.bo.dzielnica.length+' projektów w dzielnicy'):''}
   ${GM.umowy?it('gUmowy','db','Kto dostaje pieniądze gminy','umowy z Centralnego Rejestru Umów'):''}
   ${GM.nabory?it('gNabory','bell','Praca w gminie',GM.nabory.length+' otwarte nabory'):''}
   ${GM.zamowienia?it('gZam','bell','Zlecenia od miasta dla Twojej firmy',GM.zamowienia.length+' zamówienia z Twojej branży'):''}
   ${it('glos','mail','Zabierz głos','projekt uchwały, pytanie do rady, kandydowanie')}
   ${srcH(GM.typ+', '+GM.mieszk+' mieszkańców')}</div></div>`;
 tick();det.classList.add('on');
 $('#dclose').onclick=()=>det.classList.remove('on');
 const Q={plan:'Co się zmienia przy moim domu?',gRada:'Kto rządzi w mojej gminie?',gSesja:'Czym zajmie się najbliższa sesja rady?',gLiczby:'Jak wygląda budżet mojej gminy?',gUmowy:'Komu gmina płaci najwięcej?',gNabory:'Jakie są nabory do pracy w gminie?',gBO:'Jak zagłosować w budżecie obywatelskim?',gZam:'Jakie zlecenia od miasta są dla mojej firmy?',glos:'Jak mogę zabrać głos w sprawach gminy?'};
 det.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{det.classList.remove('on');setTimeout(()=>startTopic(Q[b.dataset.k],()=>S[b.dataset.k]()),180)});
}

const ETYKIETA='Tak mogłoby działać. Dziś prawo wymaga podpisów na papierze, więc ten krok pokazuje proponowaną zmianę.';
const kroki=a=>'<ol class="gsteps">'+a.map(([t,d,st])=>`<li class="${st||''}"><b>${t}</b><small>${d}</small></li>`).join('')+'</ol>';
const lista=a=>'<ul class="gul">'+a.map(x=>`<li>${x}</li>`).join('')+'</ul>';

function gminaInit(){
 if(!GM)return;
 const _open=openDoc;openDoc=function(id){id==='gmina'?openGmina():_open(id)};
 const P=GM.plan,R=GM.rada;
 Object.assign(S,{
  async gmina(){
   await say(GM.wstep);
   chips([{label:'Co się zmienia przy moim domu?',go:S.plan},{label:'Kto rządzi w mojej gminie?',go:S.gRada},{label:'Budżet na tle podobnych gmin',go:S.gLiczby},GM.bo?{label:'Zagłosuj w budżecie obywatelskim',go:S.gBO}:{label:'Kto dostaje pieniądze gminy?',go:S.gUmowy}]);
  },
  async plan(){
   await say(P.intro);
   await info({icon:'alert',title:P.nazwa,source:GM.bip+', sprawa '+P.nr+' (dane fikcyjne)',body:mapa(),
    rows:P.rows||[['Obszar',P.pow],['Teraz',P.teraz],['Projekt',P.projekt],['Dojazd',P.dojazd],['Skąd zmiana',P.wniosek],['Wyłożenie projektu',P.wylozenie],['Spotkanie z projektantem',P.spotkanie],['Uwagi do','<b>'+P.uwagi+'</b>']]});
   await info({icon:'doc',title:'Argumenty za i przeciw',source:P.zrodla||'Uzasadnienie projektu, prognoza oddziaływania na środowisko, uwagi mieszkańców z etapu wniosków',
    body:`<div class="gzp"><div><h4>Za</h4>${lista(P.za)}</div><div><h4>Przeciw</h4>${lista(P.przeciw)}</div></div>`,
    note:P.decyzja||'Streszczam dokumenty, nie oceniam. O planie zdecyduje rada gminy po rozpatrzeniu uwag przez wójta.'});
   await say(P.kto);
   chips([{label:'Złóż uwagę',go:S.uwaga},{label:'Zapisz mnie na spotkanie '+P.spotkanieKiedy.slice(0,5),go:S.spotkanie},{label:P.ktoGlos||'Kto zagłosuje nad planem?',go:S.gRada},{label:'Przypomnij przed terminem',go:()=>result({title:'Przypomnienie ustawione',rows:[['Kiedy',P.przyp[0]],['O czym',P.przyp[1]]]})}]);
  },
  async uwaga(){
   await say('Co chcesz zgłosić? Możesz wybrać kilka spraw, przygotuję z nich pismo.');
   multi(Object.values(P.zg),async sel=>{
    const k=Object.keys(P.zg).filter(x=>sel.includes(P.zg[x]));
    const tresc=P.uwagaWstep+k.map(x=>P.zgt[x]).join('; ')+'. Uzasadnienie: '+P.uzas;
    await info({icon:'doc',title:'Szkic uwagi',body:tresc,note:'Możesz poprawić treść, napisz po prostu, co zmienić.'});
    await confirmCard({icon:'mail',title:P.uwagaTyt,source:P.kanal,
     rows:[['Do',P.adresat],['Od',OS.imie+' '+OS.nazwisko+', '+OS.moje.adres],['Sprawa',P.nr],['Wnioski',String(k.length)],['Termin','do '+P.uwagi]],
     label:'Podpisz i wyślij',then:async()=>{
      await result({title:'Uwaga złożona',source:'e-Doręczenia, dowód otrzymania',rows:[['Dowód otrzymania','godz. '+now()+', '+today()],['Sprawa','w Twoich sprawach'],['Wynik',P.wynik]]});
      await say(P.potem);
      chips([{label:'Powiadom sąsiadów',go:S.sasiedzi},{label:'Zapisz mnie na spotkanie '+P.spotkanieKiedy.slice(0,5),go:S.spotkanie},{label:'Na razie wystarczy',go:()=>say('Dobrze. Sprawę znajdziesz w zakładce Moja gmina.')}]);
     }});
   });
  },
  async spotkanie(){
   await confirmCard({icon:'clock',title:P.spotkanieTyt,source:GM.urzad,rows:[['Kiedy',P.spotkanieKiedy],['Gdzie',P.spotkanieGdzie],['Pytania z góry','możesz wysłać teraz, projektant odpowie na spotkaniu']],label:'Zapisz mnie',then:()=>result({title:'Zapisano na spotkanie',rows:[['Kalendarz','dodane do kalendarza'],['Przypomnienie',P.spotkaniePrzyp]]})});
  },
  async sasiedzi(){
   await say('Sąsiedzi dostaną to samo podsumowanie z mapką i terminami, bez Twoich danych i bez treści Twojej uwagi.');
   await info({icon:'qr',title:'Udostępnij informację o planie',body:`<div class="gqr">${qrSVG(41)}</div>`,rows:[['Link','mobywatel.gov.pl/gmina/plan/'+P.nr.replace(/\D/g,'')],['Kto zobaczy','każdy, także bez aplikacji']],note:P.sasiedzi});
  },
  async gRada(){
   await info({icon:'id',title:GM.radaTyt,source:'PKW, '+GM.bip+' (dane fikcyjne)',
    rows:GM.wladzaRows||[['Wójt',GM.wojt.kto],['Urzęduje',GM.wojt.kad],['Ostatnie wybory',GM.wojt.wybory],['Rada gminy',R.n+' radnych, '+R.wojta+' z komitetu wójta'],['Wybory do rady 2024',R.jeden],['Frekwencja 2024',R.frekw]],
    note:GM.wojt.limit});
   await info({icon:'doc',title:'Twój radny: '+R.radny.kto,source:'Imienne wyniki głosowań, '+GM.bip,
    rows:[['Okręg',R.radny.okreg],['Komitet',R.radny.komitet],['Dyżur',R.radny.dyzur],...R.glosy.map(([n,v])=>['<i class="gw">'+n+'</i>',v])]});
   chips([{label:'Napisz do radnego',go:()=>S.doRadnego(0)},{label:'Co się zmienia przy moim domu?',go:S.plan}]);
  },
  async gSesja(){
   await info({icon:'clock',title:GM.sesja.tytul,source:GM.bip,rows:[['Kiedy',GM.sesja.kiedy],['Gdzie',GM.sesja.gdzie]]});
   await say('Rada zajmie się trzema projektami. Wybierz, a wyjaśnię prostym językiem, co zmieniają.');
   const c=await card(`<div class="ui list glist">${hd('doc','Porządek obrad')}${GM.uchwaly.map((u,i)=>`<button class="it" data-i="${i}"><span class="gi">${svg('doc')}</span><span class="x"><b>${u.tytul}</b><small>${u.nr}</small></span>${svg('chev')}</button>`).join('')}${srcH(GM.bip+', projekty uchwał')}</div>`);
   c.querySelectorAll('.it').forEach(b=>b.onclick=()=>act(()=>{addUser(GM.uchwaly[+b.dataset.i].tytul);S.uchwala(+b.dataset.i)}));
   chips([{label:'Przypomnij i pokaż transmisję',go:()=>result({title:'Przypomnienie ustawione',rows:[['Kiedy',GM.sesja.przyp],['Transmisja','link w powiadomieniu']]})}]);
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
   const R=GM.rada.radny,u=GM.uchwaly[i!=null?i:GM.uchwalaRadny];
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
   await info({icon:'coin',title:GM.liczbyTyt,source:'Sprawozdania budżetowe 2025 (RIO, Ministerstwo Finansów), GUS (dane fikcyjne)',
    body:GM.liczby.map(bar).join(''),note:GM.liczbyOpis});
   await say(GM.liczbyWniosek);
   chips([GM.bo?{label:'Zagłosuj w budżecie obywatelskim',go:S.gBO}:{label:'Kto dostaje pieniądze gminy?',go:S.gUmowy},{label:'Na razie wystarczy'}]);
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
  async gBO(){
   const B=GM.bo;
   await info({icon:'check',title:B.edycja,source:GM.bip+', budżet obywatelski (dane fikcyjne)',rows:[['Głosowanie','do '+B.do+', tutaj w aplikacji'],['Pula',B.pula],['Zasady',B.zasady]]});
   await info({icon:'doc',title:'Projekty w '+GM.jednostka,source:'Karty projektów, opinie urzędu',rows:B.dzielnica.map(([n,k,o])=>[n+'<small class="gsm">'+o+'</small>',k])});
   await say('Wybierz do '+B.ile+' projektów, na które chcesz zagłosować.');
   const wybierz=()=>multi(B.dzielnica.map(p=>p[0]),async sel=>{
    if(sel.length>B.ile){await say('Możesz wybrać najwyżej '+B.ile+' projekty. Zaznacz jeszcze raz.');return wybierz()}
    await confirmCard({icon:'check',title:'Głos w budżecie obywatelskim',source:'Tożsamość z mDowodu, '+B.edycja,rows:[['Projekty',sel.join(', ')],['Dzielnica',GM.solectwo],['Zmiana głosu','możliwa do '+B.do]],label:'Oddaj głos',
     then:async()=>{
      await result({title:'Głos oddany',source:B.edycja,rows:[['Projektów',String(sel.length)],['Wyniki','w grudniu 2026, dostaniesz powiadomienie']]});
      await say(B.rodzina+' Wysłać im zaproszenie?');
      chips([{label:'Wyślij zaproszenie rodzinie',go:()=>result({title:'Zaproszenia wysłane',rows:[['Do',B.zaproszenie],['Dzieci','zagłosują po Twojej zgodzie w swojej aplikacji']]})},{label:'Na razie wystarczy'}]);
     }});
   });
   wybierz();
  },
  async gZam(){
   await info({icon:'bell',title:'Zlecenia od miasta dla Twojej firmy',source:'Platforma e-Zamówienia, '+GM.bip+' (dane fikcyjne)',rows:GM.zamowienia.map(([n,k,w,t])=>[n+'<small class="gsm">'+k+', '+w+'</small>',t]),flag:GM.zamStat});
   await say('Do przeglądów instalacji gazowych zamawiający wymaga ważnych świadectw kwalifikacyjnych przez cały czas trwania umowy. Mogę sprawdzić Twoje.');
   chips([{label:'Sprawdź moje uprawnienia',go:()=>S.pKwalif()},{label:'Powiadamiaj o zamówieniach z mojej branży',go:()=>result({title:'Powiadomienia włączone',rows:[['Co','zamówienia miasta i spółek miejskich, PKD 43.22.Z'],['Gdzie','Kraków i powiat krakowski']]})}]);
  },
  async glos(){
   await say('W gminie możesz zrobić więcej niż głosować raz na pięć lat. Co Cię interesuje?');
   chips([{label:'Złóż projekt uchwały z sąsiadami',go:S.inicjatywa},{label:'Zapytaj radę pod pseudonimem',go:S.pytanie},{label:'Zabierz głos o raporcie o stanie gminy',go:S.debata},{label:GM.glos.kandLabel,go:S.kandyduj}]);
  },
  async inicjatywa(){
   const G=GM.glos,J=G.projekt;
   await say(`Mieszkańcy mogą sami złożyć projekt uchwały. Potrzebny jest komitet i <b>${G.progOpis}</b>. Rada musi się nim zająć najpóźniej 3 miesiące po złożeniu.`);
   await say(J.skad);
   await info({icon:'doc',title:J.tytul,body:lista(J.tresc)+'<p class="gp"><b>Uzasadnienie.</b> '+J.uzas+'</p>',note:'Projekt sprawdzi radca prawny urzędu, ale rada nie może go odrzucić z powodów formalnych bez wezwania komitetu do poprawek.'});
   chips([{label:'Utwórz komitet z sąsiadami',go:S.komitet},{label:'Mam własny pomysł',go:()=>say('Opisz go własnymi słowami, a przygotuję projekt uchwały i uzasadnienie. W tej wersji pokazu działa przykład z planem.')}]);
  },
  async komitet(){
   const G=GM.glos;
   await confirmCard({icon:'id',title:'Komitet inicjatywy uchwałodawczej',source:'Rejestr mieszkańców gminy (tożsamość z mDowodu)',
    rows:[[rodz('Pełnomocniczka','Pełnomocnik'),G.komitet[0]],['Członkowie',G.komitet.slice(1).join(', ')],['Zaproszenia','wysłane, wszyscy członkowie potwierdzili'],['Projekt',GM.glos.projekt.tytul.replace('Uchwała w sprawie ','')],['Zbiórka podpisów','w aplikacji, od dziś']],
    note:ETYKIETA,label:'Podpisz i otwórz zbiórkę',then:S.zbiorka});
  },
  async zbiorka(){
   const G=GM.glos;
   await say('Zbiórka otwarta. Mieszkańcy gminy, którzy obserwują sprawę planu, dostali powiadomienie i mogą podpisać się mDowodem.');
   const c=await card(`<div class="ui">${hd('id','Podpisy pod projektem')}<div class="body"><div class="gcnt"><b>0</b> z ${G.prog}</div><div class="gprog"><i></i></div><small class="gsm2">Każdy podpis to zweryfikowany mieszkaniec gminy. Nazwiska widzi tylko komitet i urząd.</small></div>${srcH('Pokaz: sąsiedzi podpisują w kilka sekund')}</div>`);
   const b=c.querySelector('.gcnt b'),i=c.querySelector('.gprog i'),N=G.prog+17;
   for(let k=1;k<=14;k++){await sleep(230);const v=Math.round(N*k/14);b.textContent=v;i.style.width=Math.min(100,v/G.prog*100)+'%';if(v>=G.prog)c.classList.add('ok')}
   await say(`Jest ${N} podpisów, więcej niż wymagane ${G.prog}. Złożyć projekt w urzędzie?`);
   chips([{label:'Złóż projekt w urzędzie',go:()=>confirmCard({icon:'mail',title:'Złożenie projektu uchwały',source:'Do: '+G.adresat+', przez e-Doręczenia',
    rows:[['Projekt',G.projekt.tytul.replace('Uchwała w sprawie ','')],['Komitet',G.komitet.length+' osoby'],['Podpisy',N+' (wymagane '+G.prog+')'],['Rada zajmie się projektem','najpóźniej 3 miesiące po złożeniu']],label:'Podpisz i złóż',then:S.sledz})}]);
  },
  async sledz(){
   const G=GM.glos;
   await result({title:'Projekt złożony',source:'e-Doręczenia, dowód otrzymania',rows:[['Dowód otrzymania','godz. '+now()+', '+today()],['Numer','BRG.0006.1.2026']]});
   await info({icon:'clock',title:'Co dalej z projektem',body:kroki([['Złożony','dziś, '+(G.prog+17)+' podpisów','done'],['Weryfikacja podpisów','urząd, do 14 dni','now'],['Opinia komisji rady','grudzień 2026'],['Sesja rady','najpóźniej '+G.sesjaProjektu+', '+rodz('pełnomocniczka','pełnomocnik')+' może przedstawić projekt'],['Wynik głosowania','imiennie, każdy radny osobno']]),
    note:'Powiadomię Ciebie i wszystkie osoby, które się podpisały, o każdym kroku.'});
   chips([{label:'Jak głosował mój radny w podobnych sprawach?',go:S.gRada},{label:'Na razie wystarczy',go:()=>say('Gotowe. Projekt znajdziesz w zakładce Moja gmina.')}]);
  },
  async pytanie(){
   await say('Napisz pytanie do rady. Rada i urząd zobaczą tylko, że pyta zweryfikowany mieszkaniec '+GM.twojaJedn+', a nie kto.');
   chips(GM.glos.pytania.map(([l,q])=>({label:l,go:()=>S.pytanie2(q)})));
   pending=t=>S.pytanie2(t);
  },
  async pytanie2(q){
   pending=null;msgs.querySelectorAll('.chips').forEach(x=>x.remove());
   await confirmCard({icon:'mail',title:'Pytanie do '+GM.rada.nazwa.replace('Rada','Rady'),source:GM.rada.nazwa+', publiczna lista pytań mieszkańców',body:'„'+esc(q)+'”',
    rows:[['Podpis',rodz('Mieszkanka','Mieszkaniec')+' '+GM.jednostka+', '+rodz('zweryfikowana','zweryfikowany')+' mObywatelem'],['Twoje dane','nie trafiają do urzędu ani rady'],['Odpowiedź','publicznie, termin 14 dni']],
    note:'Tak mogłoby działać. Wymaga zmiany regulaminu rady albo przepisów; dziś pytania zadaje się z imienia i nazwiska.',label:'Wyślij pod pseudonimem',
    then:()=>result({title:'Pytanie opublikowane',rows:[['Podpis',rodz('Mieszkanka','Mieszkaniec')+' '+GM.jednostka],['Podpisało się pod pytaniem','powiadomię, gdy inni dołączą'],['Odpowiedź','do 14 dni, dostaniesz powiadomienie']]})});
  },
  async debata(){
   const D=GM.glos.debata;
   await info({icon:'doc',title:'Debata o raporcie o stanie gminy',source:'Ustawa o samorządzie gminnym, '+GM.bip,
    rows:[['Raport',D.raport],['Debata',D.kiedy+', na sesji rady'],['Kto może zabrać głos','każdy mieszkaniec'],['Co trzeba',D.podpisy+' pod zgłoszeniem'],['Kiedy zgłosić','najpóźniej dzień przed sesją']],
    note:GM.wladza+' przedstawia raport co roku do 31 maja. Po debacie rada głosuje nad wotum zaufania.'});
   chips([{label:'Przypomnij, gdy raport będzie gotowy',go:()=>result({title:'Przypomnienie ustawione',rows:[['Kiedy','gdy raport pojawi się na BIP (do 31.05.2027)'],['Potem','zbiórka 20 podpisów w aplikacji, kilka minut']]})},{label:'Na razie wystarczy'}]);
  },
  async kandyduj(){
   const W=GM.glos.wybory;
   await info({icon:'id',title:'Kandydowanie w gminie',source:'Kodeks wyborczy, PKW (dane gminy fikcyjne)',
    rows:W.rows||[['Najbliższe wybory',W.kiedy],['Do rady, Twój okręg',W.radny],['Na wójta',W.wojt],['Dieta radnego',W.dieta],['Sołtys',W.soltys]],
    flag:W.flag});
   chips([{label:'Przypomnij, gdy ruszy kalendarz wyborczy',go:()=>result({title:'Przypomnienie ustawione',rows:[['Kiedy',W.przyp],['Dostaniesz','plan krok po kroku i terminy']]})},{label:W.praca[0],go:()=>say(W.praca[1])}]);
  }
 });
 const _route=route;
 route=function(t){
  if(pending)return _route(t);
  const n=norm(t);
  if(GM.bo&&/budze[tc]\w* obywatel|projekt\w* w (mojej )?dzielnic/.test(n))return S.gBO();
  const u=GM.uchwaly.findIndex(x=>x.re.test(n));if(u>=0)return S.uchwala(u);
  if(/napisz do radnego|do radnego/.test(n))return S.doRadnego(GM.uchwalaRadny);
  if(P.re.test(n)||/zmienia.*(dom|okolic)|przy (moim|twoim) domu/.test(n))return S.plan();
  if(/inicjatyw|projekt uchwaly|podpis\w* pod/.test(n))return S.inicjatywa();
  if(/pseudonim|anonim|zapytaj rad/.test(n))return S.pytanie();
  if(/raport|debat|debac/.test(n))return S.debata();
  if(/kandyd|zostac radn|soltysk/.test(n))return S.kandyduj();
  if(/zabrac glos|zabierz glos/.test(n))return S.glos();
  if(/radn|wojt|prezydent|rada gminy|rada miasta|rad\w* dzielnic|kto rzadzi/.test(n))return S.gRada();
  if(/sesj|uchwal/.test(n))return S.gSesja();
  if(/budze[tc]|zadluz|w liczbach|wydatk/.test(n))return S.gLiczby();
  if(GM.zamowienia&&/zlecen\w* (od|z|dla)|zamowien|przetarg/.test(n))return S.gZam();
  if(GM.umowy&&/umow|przetarg|zamowien|darczyn|placi najwiecej|pieniadze gminy/.test(n))return S.gUmowy();
  if(GM.nabory&&/nabor|praca w gminie|prace? w urzedzie/.test(n))return S.gNabory();
  if(/gmin|soltys|solectw|dzielnic|moje miasto|moim miescie/.test(n))return S.gmina();
  return _route(t);
 };
}
document.addEventListener('DOMContentLoaded',gminaInit);
