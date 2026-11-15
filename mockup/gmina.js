/* ---------- Moja gmina: co się zmienia przy mnie, kto decyduje, jak zareagować (dane fikcyjne) ----------
   Ładowany po osoby.js, przed core.js: dokłada kartę „Moja gmina” do portfela osoby, która ma dane gminy.
   Scenariusze i trasy dopina po załadowaniu reszty (DOMContentLoaded), bo S i route są w scenarios.js. */
const GMINY={
 ewa:{
  aktywnosc:[
   {ikona:'check',h:'Podpis pod wnioskiem o nagrywanie komisji',kiedy:'09.09.2026',s:'rada odrzuciła wniosek 8 do 7',
    typ:'Podpis pod wnioskiem mieszkańców',nr:'RG.0003.12.2026',do:'Rada Gminy Lipowiec',status:'zakończone: wniosek odrzucony',
    tresc:['Wniosek, który podpisałaś','Wnosimy o nagrywanie i publikowanie na BIP posiedzeń wszystkich komisji Rady Gminy, tak jak sesji. Dziś protokoły komisji są krótkie, a mieszkańcy nie wiedzą, jak radni uzasadniają opinie. Inicjatorka: radna Barbara Kos, poparcie 64 mieszkańców.'],
    odp:{kto:'Przewodniczący Rady Gminy, po sesji 24.09.2026',kiedy:'28.09.2026',tekst:'Rada Gminy na sesji 24.09.2026 nie przyjęła uchwały o nagrywaniu posiedzeń komisji (7 za, 8 przeciw). Większość radnych uznała, że protokoły komisji są wystarczające, a koszt sprzętu i obsługi (ok. 18 tys. zł rocznie) nie jest uzasadniony. Wniosek można ponowić w formie obywatelskiego projektu uchwały.'},
    przebieg:[['Złożony podpis','09.09.2026, 64. podpis','done'],['Wniosek trafił do rady','12.09.2026','done'],['Komisja rewizyjna','bez opinii, sprawa nie weszła na posiedzenie','done'],['Głosowanie na sesji','24.09.2026: 7 za, 8 przeciw','done'],['Odpowiedź przewodniczącego','28.09.2026','done']],
    zrodla:'Treść wniosku, protokół sesji z 24.09.2026, imienne wyniki głosowania',dalej:[['Jak głosował mój radny?','radniGlosy'],['Złóż projekt uchwały obywatelskiej','glos']]},
   {ikona:'mail',h:'Uwaga do studium gminy',kiedy:'14.03.2025',s:'uwzględniona częściowo',
    typ:'Uwaga w procedurze planistycznej',nr:'RPP.6720.2.2024/U/017',do:'Wójt Gminy Lipowiec',status:'rozpatrzona: uwzględniona częściowo',
    tresc:['Twoja uwaga','Wnoszę o pozostawienie pasa zieleni o szerokości 50 m między terenem „Pola Południowe” a Szkołą Podstawową w Lipowcu. Szkoła i boisko sąsiadują z polami, a w studium przewidziano tam tereny produkcyjne. Pas zieleni ograniczy hałas i pył z przyszłych zakładów.'],
    odp:{kto:'Wójt Gminy Lipowiec, rozstrzygnięcie o sposobie rozpatrzenia uwag',kiedy:'22.05.2025',tekst:'Uwaga uwzględniona częściowo. W projekcie studium wyznaczono pas zieleni izolacyjnej o szerokości 30 m. Szerszy pas ograniczyłby możliwość zagospodarowania działek objętych wnioskiem właściciela. Rozstrzygnięcie jest załącznikiem do uchwały w sprawie studium.'},
    przebieg:[['Uwaga złożona','14.03.2025','done'],['Rozpatrzenie przez wójta','22.05.2025','done'],['Rada przyjęła studium','26.06.2025, z pasem zieleni 30 m','done'],['Zmiana planu „Pola Południowe”','wyłożenie do 18.01.2027, możesz złożyć nową uwagę','now']],
    zrodla:'Twoja uwaga, rozstrzygnięcie wójta, uchwała w sprawie studium, rysunek studium',dalej:[['Zobacz obecną zmianę planu','plan']]}],
  nazwa:'Gmina Lipowiec',krotko:'Lipowiec',typ:'gmina wiejska, powiat lubelski',mieszk:'8 940',solectwo:'Lipowiec Kolonia',soltys:'Halina Mazur',
  urzad:'Urząd Gminy Lipowiec',bip:'BIP Gminy Lipowiec',jednostka:'sołectwa Lipowiec Kolonia',twojaJedn:'Twojego sołectwa',wladza:'Wójt',
  etykRada:'Rada i wójt',radaTyt:'Wójt i rada gminy',alert:'Zmiana planu przy Tobie',f:[['Sołectwo','Lipowiec Kolonia'],['Uwagi do planu','do 18.01.2027']],uchwalaRadny:1,
  wstep:'W gminie Lipowiec najważniejsza sprawa przy Tobie to projekt zmiany planu miejscowego, 380 m od Twojego domu. Uwagi można składać do <b>18.01.2027</b>.',
  liczbyPod:'budżet i dług na tle podobnych gmin',liczbyTyt:'Gmina Lipowiec na tle podobnych gmin',liczbyOpis:'Kreska to średnia 5 gmin wiejskich z województwa o podobnej liczbie mieszkańców.',
  liczbyWniosek:'Najbardziej odstają zadłużenie i wydatki na promocję, w tym biuletyn gminy. Chcesz zobaczyć, komu gmina płaci najwięcej?',
  wojt:{kto:'Zbigniew Kordas',od:2006,kad:'5. kadencja (od 2006)',wybory:'2024: jedyny kandydat, 68% głosów „tak”',limit:'Obecna kadencja jest ostatnią (limit dwóch kadencji liczonych od 2018 r.), chyba że Sejm zniesie limit.'},
  rada:{nazwa:'Rada Gminy Lipowiec',n:15,wojta:13,komitet:'KWW Razem dla Lipowca',jeden:'w 9 z 15 okręgów był tylko jeden kandydat',frekw:'49%',
   radny:{kto:'Stanisław Wójcik',okreg:'okręg nr 4',komitet:'KWW Razem dla Lipowca',dyzur:'pierwszy poniedziałek miesiąca, 16:00–17:00, urząd gminy, pok. 12',
    tel:'+48 81 000 04 12',email:'stanislaw.wojcik@rada.lipowiec.pl',komisje:['Komisja Budżetu i Finansów','Komisja Rolnictwa i Ochrony Środowiska','doraźna komisja ds. zmian w Statucie Gminy'],
    funkcje:{'Komisja Rolnictwa i Ochrony Środowiska':'Przewodniczący'},
    interp:[['Z','odbioru odpadów wielkogabarytowych','2026-09-22',1],['I','remontu drogi gminnej w Lipowcu Kolonii','2026-04-14',1]]},
   glosy:[['Przystąpienie do zmiany planu „Pola Południowe” (03.2025)','za'],['Podwyżka opłaty za odpady do 39 zł (12.2025)','za'],['Nagrania posiedzeń komisji (09.2026, wniosek radnej spoza klubu wójta)','przeciw']]},
  sesja:{tytul:'Sesja Rady Gminy',przyp:'29.12.2026, 9:45',kiedy:'29.12.2026, godz. 10:00',gdzie:'sala GOK, transmisja na BIP',porzadek:['Projekt budżetu na 2027 r. (pierwsze czytanie)','Stawki podatku od nieruchomości na 2027 r.','Sprzedaż działki 214/3 w trybie bezprzetargowym']},
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
   potem:'Gotowe. Dam Ci znać, jak wójt rozpatrzy uwagę i kiedy rada będzie głosować nad planem.',
   spotkanieTyt:'Spotkanie z projektantem planu',spotkanieKiedy:'14.01.2027, godz. 17:00',spotkanieGdzie:'sala GOK, ul. Lubelska 2',spotkaniePrzyp:'14.01, 15:00',
   przyp:['11.01.2027, 9:00','uwagi do planu do 18.01.2027'],
   wylozenie:'12.11.2026–18.01.2027',spotkanie:'14.01.2027, godz. 17:00, sala GOK',uwagi:'18.01.2027',nr:'RPP.6721.4.2025',
   za:['ok. 120 miejsc pracy według wnioskodawcy','ok. 1,1 mln zł rocznie z podatku od nieruchomości (ok. 4% dochodów gminy)','dojazd do drogi wojewódzkiej bez wjazdu do centrum'],
   przeciw:['prognoza: ok. 60 ciężarówek na dobę ulicą Szkolną','praca magazynów także nocą, hałas przy domach','utrata 42 ha gruntów rolnych III klasy']},
  /* kolejne sprawy przy domu: każda ma inną procedurę i inne działanie (uwagi, deklaracja) */
  inne:[
   {nazwa:'Ferma drobiu w Woli Lipowieckiej',odl:'1,1 km od Twojego domu',nr:'OŚ.6220.3.2026',ikona:'info',krotko:'decyzja środowiskowa · uwagi do 28.12',q:'Co z fermą drobiu w Woli Lipowieckiej?',
    teraz:'pole uprawne, 6 ha',projekt:'4 kurniki, 160 tys. kurcząt w cyklu',uwagi:'28.12.2026',re:/ferm|kurnik|drob|brojler|smrod|odor/,
    mapa:{obiekt:'Ferma drobiu',opis:'4 kurniki',odl:'1,1 km',wiatr:1},
    intro:'Wójt prowadzi postępowanie w sprawie decyzji środowiskowej dla fermy drobiu, 1,1 km od Twojego domu. Wiatr wieje u Was najczęściej od strony fermy.',
    rows:[['Gdzie','Wola Lipowiecka, dz. 88/2, 1,1 km na zachód od Ciebie'],['Teraz','pole uprawne, 6 ha'],['Projekt','4 kurniki, 160 tys. kurcząt w cyklu, ok. 7 cykli rocznie'],['Wnioskodawca','gospodarstwo rolne z sąsiedniej gminy'],['Raport','uciążliwość zapachowa do 600 m od kurników'],['Kto decyduje','wójt, po uzgodnieniu z RDOŚ i sanepidem'],['Uwagi do','<b>28.12.2026</b>']],
    za:['podatek od budowli i kilka miejsc pracy','według raportu zapach nie dotrze do zabudowań (najbliższe 800 m)'],
    przeciw:['raport liczy średnie roczne, a latem przy wietrze zachodnim zapach może sięgać dalej','ciężarówki z paszą i drobiem przez Lipowiec Kolonię','płyta na pomiot 300 m od cieku i studni'],
    zrodla:'Wniosek, raport o oddziaływaniu na środowisko, obwieszczenie wójta',
    decyzja:'Streszczam dokumenty, nie oceniam. Wójt wyda decyzję po uzgodnieniach z RDOŚ i sanepidem i musi odnieść się do uwag.',ktoGlos:'Kto o tym decyduje?',
    kto:'W tej procedurze uwagi może złożyć każdy w ciągu 30 dni od obwieszczenia. Organizacja ekologiczna, która zgłosi udział, staje się stroną i może odwołać się od decyzji.',
    zg:{zap:'Zapach latem przy wietrze',ruch:'Ciężarówki przez wieś',woda:'Ochrona studni i cieku',biof:'Biofiltry i pas zieleni'},
    zgt:{zap:'ponowne modelowanie zasięgu zapachu dla wiatrów zachodnich w okresie letnim, a nie tylko średniorocznie',ruch:'dojazd do fermy wyłącznie od drogi powiatowej, z pominięciem Lipowca Kolonii',
     woda:'przeniesienie płyty na pomiot co najmniej 500 m od cieku i studni oraz monitoring wód podziemnych',biof:'obowiązek biofiltrów na wentylacji kurników i pasa zieleni izolacyjnej'},
    uwagaWstep:'Składam uwagi w postępowaniu w sprawie decyzji o środowiskowych uwarunkowaniach dla fermy drobiu w Woli Lipowieckiej (OŚ.6220.3.2026). Wnioskuję o: ',
    uzas:'mieszkam w Lipowcu Kolonii, 1,1 km od planowanej fermy, w kierunku przeważających wiatrów; raport opiera się na średnich rocznych, które nie oddają uciążliwości latem.',
    uwagaTyt:'Uwagi do decyzji środowiskowej',adresat:'Wójt Gminy Lipowiec',kanal:'Do: Urząd Gminy Lipowiec, przez e-Doręczenia',wynik:'wójt odniesie się do nich w uzasadnieniu decyzji',
    potem:'Gotowe. Dam Ci znać, gdy wójt wyda decyzję. Odwołać się mogą strony, a mieszkańcy także przez organizację ekologiczną.',
    przyp:['23.12.2026, 9:00','uwagi do fermy drobiu do 28.12.2026']},
   {nazwa:'Kanalizacja w ul. Szkolnej',odl:'przy Twoim domu',nr:'GK.7021.12.2026',ikona:'info',krotko:'deklaracja przyłączenia do 15.01',q:'Co z kanalizacją przy moim domu?',
    teraz:'szambo, wywóz co ok. 6 tygodni',projekt:'kanał sanitarny w ulicy, studzienka na granicy działki',uwagi:'15.01.2027',re:/kanalizac|szamb|przylacz|sciek/,
    mapa:{obiekt:'kanał sanitarny',rura:1},
    intro:'Gmina buduje kanalizację w ul. Szkolnej. Kanał dojdzie do granicy Twojej działki, a odcinek do domu wykonujesz Ty. Gmina zbiera deklaracje, żeby zaprojektować przyłącza.',
    rows:[['Budowa','04–10.2027, ul. Szkolna i Polna'],['Gmina buduje','kanał i studzienkę na granicy działki, bezpłatnie'],['Ty budujesz','przyłącze od studzienki do domu, ok. 18 m'],['Koszt przyłącza','ok. 4–6 tys. zł, dotacja gminy do 3 000 zł'],['Szambo','do likwidacji albo na zbiornik na deszczówkę'],['Obowiązek','przyłączyć trzeba się, gdy sieć będzie gotowa'],['Deklaracja do','<b>15.01.2027</b>']],
    za:['koniec wywozu szamba, ok. 1 300 zł rocznie','ścieki przestaną trafiać do gruntu i studni'],
    przeciw:['koszt przyłącza po Twojej stronie','opłata za ścieki od zużycia wody, ok. 70 zł miesięcznie dla 2 osób','rozkopana ulica przez kilka miesięcy'],
    zrodla:'Projekt sieci, uchwała o dotacjach do przyłączy, taryfa Gminnego Zakładu Komunalnego',
    decyzja:'To nie konsultacje: budowa jest przesądzona. Od deklaracji zależy, czy gmina zaprojektuje przyłącze razem z siecią i czy dostaniesz dotację.',ktoGlos:'Kto o tym decyduje?',
    kto:'Deklaracja nic nie kosztuje. Bez niej projektant nie wyznaczy studzienki przy Twojej działce, a przyłącze później będzie droższe.',
    uwagaLabel:'Złóż deklarację',szkic:'Szkic deklaracji',zlozono:'Deklaracja złożona',
    zg:{dekl:'Chcę się przyłączyć',dot:'Dotacja 3 000 zł',miejsce:'Studzienka od strony podwórza',rata:'Przyłącze wykonane przez gminę, na raty'},
    zgt:{dekl:'przyłączenie budynku przy ul. Szkolnej 7 do sieci kanalizacji sanitarnej',dot:'przyznanie dotacji do budowy przyłącza w wysokości 3 000 zł',miejsce:'lokalizację studzienki od strony podwórza, przy obecnym szambie',rata:'wykonanie przyłącza przez Gminny Zakład Komunalny z rozłożeniem kosztów na raty'},
    uwagaWstep:'Deklaracja w sprawie przyłączenia do kanalizacji sanitarnej (GK.7021.12.2026). Wnoszę o: ',
    uzas:'jestem właścicielką domu przy ul. Szkolnej 7 w Lipowcu Kolonii, w którym mieszkają 2 osoby; obecnie korzystamy ze zbiornika bezodpływowego.',
    uwagaTyt:'Deklaracja przyłączenia',adresat:'Gminny Zakład Komunalny w Lipowcu',kanal:'Do: Gminny Zakład Komunalny sp. z o.o., przez e-Doręczenia',wynik:'projektant uwzględni przyłącze, decyzja o dotacji przyjdzie do skrzynki',
    potem:'Gotowe. Dam Ci znać, gdy projekt przyłącza będzie do uzgodnienia.',
    spotkanieTyt:'Zebranie wiejskie o kanalizacji',spotkanieKiedy:'07.01.2027, godz. 18:00',spotkanieGdzie:'świetlica w Lipowcu Kolonii',spotkaniePrzyp:'07.01, 16:00',spotkaniePyt:'możesz wysłać teraz, odpowie projektant sieci',
    przyp:['08.01.2027, 9:00','deklaracja przyłączenia do 15.01.2027']}],
  liczby:[['Dochody na mieszkańca','5 820 zł','5 640 zł',103],['Zadłużenie (% dochodów)','31%','18%',172,1],['Promocja i biuletyn na mieszkańca','46 zł','19 zł',242,1],['Inwestycje (% wydatków)','14%','21%',67,1],['Oświata (% wydatków)','38%','36%',106]],
  umowy:[['Drogbud sp. z o.o.','4,82 mln zł','3 umowy na drogi, przetargi, po 1 ofercie'],['Eko-Wywóz sp. z o.o.','2,10 mln zł','odbiór odpadów, przetarg, 2 oferty'],['Lipa Media','186 tys. zł','biuletyn „Wieści Lipowieckie”, zamówienie z wolnej ręki'],['Kancelaria radcy prawnego','96 tys. zł','obsługa urzędu, zapytanie ofertowe']],
  darczyncy:{komitet:'KWW Razem dla Lipowca (wybory 2024)',suma:'48 600 zł od 21 osób',najwieksze:[['Członek zarządu Drogbud sp. z o.o.','12 000 zł'],['Właściciel Lipa Media','8 000 zł'],['Pozostałe 19 wpłat','28 600 zł']]},
  nabory:[['Inspektor ds. zamówień publicznych','Urząd Gminy','do 14.12.2026'],['Nauczyciel matematyki','SP w Lipowcu','do 21.12.2026'],['Kierowca, operator koparki','Gminny Zakład Komunalny sp. z o.o.','do 30.12.2026']],
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
  aktywnosc:[
   {ikona:'mail',h:'Pytanie do Rady Dzielnicy XIII',kiedy:'02.10.2026',s:'odpowiedź 14.10.2026 · łatanie do 15.12',
    typ:'Pytanie do rady dzielnicy',nr:'RDXIII.0003.41.2026',do:'Rada Dzielnicy XIII Podgórze',status:'odpowiedź udzielona, naprawa w toku',
    tresc:['Twoje pytanie','Dzień dobry, chodnik przy ul. Wielickiej 24–30 od zimy ma zapadnięte płyty i dziury, a codziennie chodzę tamtędy z dziećmi do SP nr 34. Kiedy planowana jest naprawa? Czy do czasu przebudowy ulicy da się chociaż załatać ubytki?'],
    odp:{kto:'Agnieszka Rak, radna Dzielnicy XIII, na podstawie informacji z ZDMK',kiedy:'14.10.2026',tekst:'Dziękuję za zgłoszenie. Według Zarządu Dróg Miasta Krakowa pełna wymiana chodnika jest w zakresie przebudowy ul. Wielickiej (budowa od 2029 r.). Do tego czasu ZDMK załata ubytki na odcinku 24–30: zlecenie jest w planie napraw, termin do 15.12.2026. Rada Dzielnicy wystąpiła też o oznakowanie najbardziej zniszczonego fragmentu.'},
    przebieg:[['Pytanie wysłane','02.10.2026','done'],['Przekazane do ZDMK','05.10.2026','done'],['Odpowiedź radnej','14.10.2026','done'],['Łatanie ubytków','zlecone, do 15.12.2026','now'],['Wymiana chodnika','w ramach przebudowy, od 2029']],
    zrodla:'Twoje pytanie, odpowiedź radnej, pismo ZDMK o planie napraw',dalej:[['Dopytaj radę','pytanie'],['Przebudowa ul. Wielickiej','plan']]},
   {ikona:'check',h:'Głos w budżecie obywatelskim 2026',kiedy:'17.06.2025',s:'2 z 3 projektów wygrały',
    typ:'Głosowanie w budżecie obywatelskim',nr:'BO 2026, Dzielnica XIII',do:'Urząd Miasta Krakowa',status:'zakończone, projekty w realizacji',
    tabela:[['Oświetlenie przejścia przy SP nr 34','wygrał, 1 912 głosów','gotowe, 09.2026'],['Zielone podwórko przy Wielickiej','wygrał, 1 604 głosy','w budowie, odbiór 12.2026'],['Siłownia plenerowa w Płaszowie','nie wygrał, 988 głosów','zabrakło 212 głosów']],
    przebieg:[['Głos oddany','17.06.2025, 3 projekty','done'],['Wyniki głosowania','09.2025: frekwencja w dzielnicy 9,8%','done'],['Oświetlenie przejścia','gotowe 09.2026, koszt 186 tys. zł','done'],['Zielone podwórko','w budowie, odbiór 12.2026','now']],
    zrodla:'Wyniki głosowania BO 2026, harmonogram realizacji projektów, protokół odbioru oświetlenia',dalej:[['Zagłosuj w tegorocznej edycji','gBO']]}],
  nazwa:'Kraków',krotko:'Kraków',typ:'miasto na prawach powiatu, Dzielnica XIII Podgórze',mieszk:'806 tys.',solectwo:'Dzielnica XIII Podgórze',soltys:'',
  urzad:'Urząd Miasta Krakowa',bip:'BIP Miasta Krakowa',jednostka:'Dzielnicy XIII Podgórze',twojaJedn:'Twojej dzielnicy',wladza:'Prezydent miasta',
  etykRada:'Prezydent i rady',radaTyt:'Władze miasta i dzielnicy',alert:'Konsultacje do 30.12',f:[['Dzielnica','XIII Podgórze'],['Uwagi do','30.12.2026']],uchwalaRadny:0,
  wstep:'W Krakowie najważniejsza sprawa przy Tobie to konsultacje przebudowy ul. Wielickiej, tuż pod Twoim blokiem. Uwagi można składać do <b>30.12.2026</b>. Do tego samego dnia trwa głosowanie w budżecie obywatelskim.',
  liczbyPod:'budżet i dług na tle innych dużych miast',liczbyTyt:'Kraków na tle dużych miast',liczbyOpis:'Kreska to średnia pięciu innych największych miast w Polsce.',
  liczbyWniosek:'Najbardziej odstaje zadłużenie, a udział inwestycji jest niższy niż gdzie indziej. Więcej niż inne miasta Kraków wydaje na komunikację i budżet obywatelski. Chcesz zagłosować na projekty w swojej dzielnicy?',
  wojt:{kto:'Marek Zawada',od:2024,kad:'1. kadencja (od 2024)',wybory:'2024: II tura, 51,2% głosów',limit:'Prezydent przedstawia co roku raport o stanie miasta, a rada głosuje nad wotum zaufania.'},
  wladzaRows:[['Prezydent miasta','Marek Zawada, 1. kadencja (od 2024)'],['Ostatnie wybory','2024: II tura, 51,2% głosów, frekwencja 41%'],['Rada Miasta Krakowa','43 radnych, koalicja 24 radnych'],['Rada Dzielnicy XIII Podgórze','21 radnych, dzieli pieniądze dzielnicy i opiniuje sprawy miasta'],['Twój okręg do Rady Miasta','nr 3: Podgórze, Prokocim, Bieżanów, 8 radnych']],
  rada:{nazwa:'Rada Miasta Krakowa',n:43,wojta:24,komitet:'koalicja KWW Kraków Razem i KWW Nowy Kraków',jeden:'',frekw:'47%',
   // miasto powyżej 20 tys.: okręg wielomandatowy, więc mieszkaniec ma kilku równorzędnych radnych
   okregNr:'3',okregOpis:'Podgórze, Prokocim, Bieżanów',
   glosyTyt:['Wniosek o strefę płatnego parkowania na Podgórzu (06.2026)','Budżet obywatelski 2027: 40 mln zł (03.2026)','Nocny zakaz sprzedaży alkoholu w całym mieście (09.2026)'],
   radni:[
    {kto:'Tomasz Gil',p:'m',komitet:'KWW Kraków Razem',dyzur:'drugi wtorek miesiąca, 17:00–18:00, siedziba Rady Dzielnicy XIII',glosy:['za','za','wstrz']},
    {kto:'Anna Sowa',p:'k',komitet:'KWW Nowy Kraków',dyzur:'pierwszy czwartek miesiąca, 16:00–17:00, biuro radnej przy ul. Kalwaryjskiej',glosy:['za','za','za']},
    {kto:'Paweł Kret',p:'m',komitet:'KWW Kraków Razem',dyzur:'po umówieniu przez skrzynkę rady',glosy:['za','za','przeciw']},
    {kto:'Magdalena Wrona',p:'k',komitet:'KWW Wspólny Kraków',dyzur:'ostatni poniedziałek miesiąca, 18:00–19:00, klub osiedlowy Prokocim',glosy:['przeciw','za','przeciw']},
    {kto:'Jerzy Lis',p:'m',komitet:'KWW Nowy Kraków',dyzur:'trzecia środa miesiąca, 17:00–18:00, siedziba Rady Dzielnicy XIII',glosy:['za','przeciw','za']},
    {kto:'Ewelina Bąk',p:'k',komitet:'KWW Kraków Razem',dyzur:'drugi piątek miesiąca, 15:00–16:00, filia biblioteki w Bieżanowie',glosy:['za','za','za']},
    {kto:'Krzysztof Dudek',p:'m',komitet:'KWW Wspólny Kraków',dyzur:'po umówieniu przez skrzynkę rady',glosy:['przeciw','przeciw','wstrz']},
    {kto:'Iwona Czajka',p:'k',komitet:'KWW Nowy Kraków',dyzur:'pierwszy wtorek miesiąca, 16:30–17:30, magistrat, pok. 201',glosy:['za','za','za']}],
   dzielnica:{rada:'Rada Dzielnicy XIII Podgórze',okreg:'okręg nr 5 (rejon ul. Wielickiej i Płaszowa)',
    osoby:[{kto:'Agnieszka Rak',p:'k',dyzur:'każda środa, 18:00–19:00, siedziba Rady Dzielnicy XIII'},{kto:'Michał Zięba',p:'m',dyzur:'po umówieniu przez skrzynkę rady dzielnicy'}],
    note:'Rada dzielnicy opiniuje sprawy takie jak przebudowa ul. Wielickiej i dzieli pieniądze dzielnicy, np. na remonty chodników.'}},
  sesja:{tytul:'Sesja Rady Miasta Krakowa',przyp:'17.12.2026, 8:45',kiedy:'17.12.2026, godz. 9:00',gdzie:'sala obrad magistratu, transmisja na BIP'},
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
   uwagi:'30.12.2026',zrodlo:'Zarząd Dróg Miasta Krakowa, platforma konsultacji (dane fikcyjne)',re:/wielick|buspas|przebudow|konsultac|drzew|miejsc\w* postojow|droga rowerow/,
   rows:[['Odcinek','1,4 km, od ul. Kamieńskiego do ul. Nowosądeckiej'],['Teraz','po 2 pasy ruchu, parkowanie wzdłuż jezdni (ok. 120 miejsc)'],['Projekt','buspas i droga rowerowa, 70 miejsc postojowych mniej'],['Zieleń','34 drzewa do wycinki, 61 nowych'],['Kto prowadzi','Zarząd Dróg Miasta Krakowa'],['Konsultacje','02.12–30.12.2026'],['Spotkanie','16.12.2026, godz. 18:00, SP nr 34'],['Budowa','2028–2029, ok. 14 miesięcy'],['Uwagi do','<b>30.12.2026</b>']],
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
   potem:'Gotowe. Dam Ci znać, gdy miasto opublikuje raport z konsultacji i odpowie na Twoją uwagę.',
   spotkanieTyt:'Spotkanie konsultacyjne',spotkanieKiedy:'16.12.2026, godz. 18:00',spotkanieGdzie:'Szkoła Podstawowa nr 34, ul. Wielicka 40',spotkaniePrzyp:'16.12, 16:00',
   przyp:['28.12.2026, 9:00','uwagi do przebudowy ul. Wielickiej do 30.12.2026']},
  inne:[
   {nazwa:'Blok 14-piętrowy przy ul. Wielickiej 30',odl:'120 m od Twojego domu',nr:'AU-2.6735.9.2026',ikona:'info',krotko:'tzw. lex deweloper · uwagi do 28.12',q:'Co z blokiem przy Wielickiej 30?',
    teraz:'pawilon handlowy i parking',projekt:'do 45 m, 186 mieszkań, garaż na 150 aut',uwagi:'28.12.2026',re:/blok|wiezowiec|deweloper|14.pietr|inwestycj\w* mieszkan|lex/,
    mapa:{obiekt:'Blok 14 pięter',opis:'186 mieszkań',odl:'120 m'},
    intro:'Deweloper chce postawić 14-piętrowy blok 120 m od Ciebie, choć plan miejscowy pozwala tam na budynki do 12 m. Korzysta ze specustawy mieszkaniowej (tzw. lex deweloper), więc o zgodzie zdecyduje Rada Miasta uchwałą.',
    rows:[['Gdzie','ul. Wielicka 30, działka 1,2 ha, 120 m od Ciebie'],['Teraz','pawilon handlowy i parking'],['Plan miejscowy','usługi, budynki do 12 m'],['Projekt','do 45 m, 186 mieszkań, garaż na 150 aut'],['Tryb','specustawa mieszkaniowa, można odstąpić od planu'],['Inwestor deklaruje','park kieszonkowy 2 000 m² i przedszkole w parterze'],['Kto decyduje','Rada Miasta Krakowa, uchwała o lokalizacji'],['Uwagi do','<b>28.12.2026</b>']],
    za:['186 mieszkań przy linii tramwajowej','przedszkole i park kieszonkowy, których w okolicy brakuje'],
    przeciw:['prawie 4 razy wyżej, niż pozwala plan miejscowy','zimą cień na sąsiednich blokach przez część dnia','150 aut więcej na ulicy, która ma stracić 70 miejsc postojowych'],
    zrodla:'Wniosek inwestora, koncepcja urbanistyczna, analiza przesłaniania, opinia architekta miasta',
    decyzja:'Streszczam dokumenty, nie oceniam. Rada Miasta może zgodzić się na lokalizację, odmówić albo postawić warunki.',ktoGlos:'Kto zagłosuje nad uchwałą?',
    kto:'Uwagi do wniosku może złożyć każdy w ciągu 21 dni od jego publikacji. Prezydent przekazuje je radzie razem z projektem uchwały.',
    zg:{wys:'Wysokość do 8 pięter',cien:'Analiza cienia dla sąsiadów',park:'Miejsca w garażu dla okolicy',przed:'Przedszkole jako warunek'},
    zgt:{wys:'ograniczenie wysokości do 8 kondygnacji (ok. 26 m)',cien:'niezależną analizę przesłaniania dla budynków przy ul. Wielickiej 24–28 w okresie zimowym',
     park:'udostępnienie części miejsc w garażu mieszkańcom okolicy w zamian za likwidowane miejsca przy ul. Wielickiej',przed:'zapisanie budowy przedszkola i parku kieszonkowego jako warunku uchwały, przed oddaniem mieszkań'},
    uwagaWstep:'Zgłaszam uwagi do wniosku o ustalenie lokalizacji inwestycji mieszkaniowej przy ul. Wielickiej 30 (AU-2.6735.9.2026). Wnioskuję o: ',
    uzas:'mieszkam przy ul. Wielickiej 28, 120 m od planowanego budynku; inwestycja kilkukrotnie przekracza wysokość dopuszczoną w planie miejscowym i zwiększy ruch na ulicy, na której miasto planuje likwidację miejsc postojowych.',
    uwagaTyt:'Uwagi do lokalizacji inwestycji',adresat:'Prezydent Miasta Krakowa',kanal:'Do: Urząd Miasta Krakowa, wydział architektury, przez e-Doręczenia',wynik:'trafią do Rady Miasta razem z projektem uchwały',
    potem:'Gotowe. Dam Ci znać, kiedy Rada Miasta zajmie się uchwałą i jak zagłosują radni z Twojego okręgu.',
    przyp:['23.12.2026, 9:00','uwagi do bloku przy Wielickiej 30 do 28.12.2026']},
   {nazwa:'Połączenie szkoły Hani i Igora',odl:'SP nr 34, 600 m od domu',nr:'OK-3.4430.5.2026',ikona:'info',krotko:'Hania od 2027 r. 1,6 km dalej · opinie do 04.01',q:'Co się zmienia w szkole moich dzieci?',
    teraz:'klasy 1–8 przy ul. Wielickiej 40',projekt:'zespół z SP nr 128, klasy 4–8 przy ul. Teligi',uwagi:'04.01.2027',re:/zmian\w* w szkole|szkol\w* (moich )?dzieci|polaczeni\w* szkol|sp (nr )?34|sp (nr )?128/,
    mapa:{obiekt:'SP nr 128',opis:'klasy 4–8',odl:'1,6 km',szkola:1},
    intro:'Miasto chce połączyć szkołę Hani i Igora z SP nr 128. Igor zostałby w budynku przy Wielickiej, a Hania od września 2027 r. chodziłaby na lekcje przy ul. Teligi, 1,6 km dalej.',
    rows:[['Szkoła','SP nr 34, ul. Wielicka 40: Hania (klasa 5), Igor (klasa 1)'],['Projekt','zespół szkół z SP nr 128'],['Klasy 1–3','zostają przy ul. Wielickiej 40'],['Klasy 4–8','od 09.2027 przy ul. Teligi, 1,6 km'],['Dojazd','autobusem ok. 15 minut, pieszo 22 minuty'],['Powód','uczniów jest o 38% mniej niż 10 lat temu'],['Kto decyduje','Rada Miasta, po opinii kuratora oświaty'],['Opinie do','<b>04.01.2027</b>']],
    za:['więcej zajęć dodatkowych w SP nr 128 (basen, pracownie)','ok. 2,1 mln zł rocznie mniej na utrzymanie budynków'],
    przeciw:['dłuższa droga dla starszych dzieci, przez ruchliwe skrzyżowanie','rodzeństwo w dwóch budynkach','zwolniona część budynku może zostać sprzedana'],
    zrodla:'Projekt uchwały intencyjnej, analiza demograficzna wydziału edukacji, opinia rady szkoły',
    decyzja:'Streszczam dokumenty, nie oceniam. Rada Miasta zdecyduje po opinii kuratora oświaty, a rodziców trzeba zawiadomić co najmniej 6 miesięcy przed zmianą.',ktoGlos:'Kto o tym decyduje?',
    kto:'Opinię może przesłać każdy rodzic. Rada rodziców i rada szkoły wydają też opinie formalne, które trafiają do Rady Miasta.',
    uwagaLabel:'Prześlij opinię',szkic:'Szkic opinii',zlozono:'Opinia przesłana',
    zg:{droga:'Bezpieczna droga do nowej szkoły',bus:'Bezpłatny dowóz dla klas 4–8',rodz:'Rodzeństwo w jednym budynku',bud:'Budynek zostaje dla dzielnicy'},
    zgt:{droga:'zapewnienie bezpiecznego przejścia przez skrzyżowanie w drodze do ul. Teligi, z sygnalizacją w godzinach szkolnych',bus:'bezpłatny dowóz uczniów klas 4–8 z rejonu ul. Wielickiej',
     rodz:'możliwość nauki rodzeństwa w jednym budynku na wniosek rodziców',bud:'pozostawienie zwolnionej części budynku przy ul. Wielickiej 40 na cele dzielnicy, bez sprzedaży'},
    uwagaWstep:'Przesyłam opinię w konsultacjach w sprawie połączenia Szkoły Podstawowej nr 34 ze Szkołą Podstawową nr 128 (OK-3.4430.5.2026). Proszę o: ',
    uzas:'jestem rodzicem dwojga uczniów SP nr 34, z klasy 5 i 1; po zmianie dzieci uczyłyby się w dwóch budynkach oddalonych o 1,6 km.',
    uwagaTyt:'Opinia rodzica',adresat:'Wydział edukacji Urzędu Miasta Krakowa',kanal:'Do: Urząd Miasta Krakowa, wydział edukacji, przez e-Doręczenia',wynik:'trafi do raportu z konsultacji dla Rady Miasta',
    potem:'Gotowe. Dam Ci znać, gdy kurator wyda opinię i kiedy Rada Miasta będzie głosować.',
    spotkanieTyt:'Zebranie z rodzicami',spotkanieKiedy:'15.12.2026, godz. 17:30',spotkanieGdzie:'aula SP nr 34, ul. Wielicka 40',spotkaniePrzyp:'15.12, 16:30',spotkaniePyt:'możesz wysłać teraz, odpowie dyrekcja i wydział edukacji',
    przyp:['30.12.2026, 9:00','opinia w sprawie SP nr 34 do 04.01.2027']}],
  liczby:[['Dochody na mieszkańca','10 940 zł','11 380 zł',96],['Zadłużenie (% dochodów)','58%','41%',141,1],['Komunikacja miejska na mieszkańca','1 310 zł','1 120 zł',117],['Inwestycje (% wydatków)','12%','16%',75,1],['Budżet obywatelski na mieszkańca','50 zł','38 zł',132]],
  bo:{edycja:'Budżet obywatelski Krakowa 2027',do:'30.12.2026',pula:'40 mln zł, w tym 2,1 mln zł na projekty w Dzielnicy XIII',ile:3,
   zasady:'Wybierasz do 3 projektów w swojej dzielnicy. Głosować może każdy mieszkaniec Krakowa, dzieci do 16 lat z rodzicem.',
   dzielnica:[['Plac zabaw i siłownia przy ul. Wielickiej 24','420 tys. zł','50 m od Ciebie'],['Zielone podwórko przy SP nr 34','380 tys. zł','600 m od Ciebie'],['Zajęcia sportowe dla seniorów','90 tys. zł','cała dzielnica'],['Oświetlenie alejek w parku Bednarskiego','150 tys. zł','1,2 km od Ciebie'],['Tor rowerowy (pumptrack) na Kurdwanowie','610 tys. zł','2,4 km od Ciebie']],
   zaproszenie:'Agnieszka, Michał, Hanna',rodzina:'Agnieszka, Michał (15 lat) i Hanna (11 lat) też mogą zagłosować, dzieci z Twoją zgodą.'},
  zamowienia:[['Wymiana instalacji c.o. w SP nr 34','Zarząd Inwestycji Miejskich, przetarg','ok. 680 tys. zł','oferty do 23.12.2026'],['Przeglądy instalacji gazowych w 312 lokalach komunalnych','Zarząd Budynków Komunalnych, przetarg','ok. 140 tys. zł','oferty do 18.12.2026'],['Klimatyzacja w domu kultury na Podgórzu','zapytanie ofertowe','ok. 85 tys. zł','do 12.12.2026']],
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
/* Etapy każdej sprawy (harmonogram) i opis spotkań. Status: done = za nami, now = trwa teraz. Dane fikcyjne. */
const PLAN_INFO={
 'RPP.6721.4.2025':{etapy:[['Rada gminy przystępuje do zmiany planu','03.2025, uchwała rady','done'],['Wnioski do planu','04–05.2025','done'],['Projekt, opinie i uzgodnienia','2025–2026','done'],['Wyłożenie projektu i uwagi','12.11.2026–18.01.2027','now'],['Dyskusja publiczna z projektantem','14.01.2027, sala GOK'],['Wójt rozpatruje uwagi','do 21 dni po terminie uwag'],['Głosowanie rady gminy','I kwartał 2027'],['Kontrola wojewody, plan wchodzi w życie','ok. 2 miesiące po uchwale']],
  spot:{czas:'17:00–19:00',forma:'na miejscu, transmisja na BIP',online:0,
   cel:'To dyskusja publiczna, której wymaga ustawa. Projektant wyjaśnia projekt planu i odpowiada na pytania, a przebieg trafia do protokołu. Uwagę do planu trzeba jednak złożyć osobno.',
   kto:['autor projektu planu (urbanista)','zastępca wójta','kierownik referatu planowania'],program:['prezentacja projektu, ok. 20 min','pytania mieszkańców','jak i do kiedy złożyć uwagę'],dostep:'sala na parterze, tłumacz PJM na zgłoszenie do 7 dni przed'}},
 'OŚ.6220.3.2026':{etapy:[['Wniosek inwestora z raportem o oddziaływaniu','08.2026','done'],['Uwagi mieszkańców','30 dni, do 28.12.2026','now'],['Uzgodnienia z RDOŚ i opinia sanepidu','do 01.2027'],['Decyzja wójta','I kwartał 2027'],['Odwołania do SKO','14 dni od doręczenia stronom'],['Pozwolenie na budowę','dopiero po prawomocnej decyzji']]},
 'GK.7021.12.2026':{etapy:[['Dofinansowanie budowy sieci','06.2026','done'],['Deklaracje przyłączenia','do 15.01.2027','now'],['Zebranie wiejskie z projektantem','07.01.2027, świetlica'],['Projekt sieci i przyłączy','do 06.2027'],['Budowa kanału w ul. Szkolnej','2028'],['Twoje przyłącze i dotacja','po odbiorze sieci, wniosek w aplikacji']],
  spot:{czas:'18:00–19:30',forma:'na miejscu',online:0,
   cel:'Projektant pokaże przebieg kanału i miejsca studzienek, wyjaśni koszty przyłącza i zasady dotacji. Można przyjść z mapką swojej działki.',
   kto:['projektant sieci','pracownik Gminnego Zakładu Komunalnego','sołtys Lipowca Kolonii'],program:['przebieg sieci w ul. Szkolnej','gdzie stanie studzienka przy działkach','koszty i dotacja','pytania'],dostep:'świetlica na parterze, bez progów'}},
 'ZDMK.KS.17.2026':{etapy:[['Koncepcja przebudowy','2025','done'],['I etap konsultacji: wnioski mieszkańców','05.2026','done'],['II etap konsultacji: uwagi do projektu','02.12–30.12.2026','now'],['Spotkanie konsultacyjne','16.12.2026, SP nr 34'],['Raport z konsultacji z odpowiedziami','02.2027'],['Projekt budowlany i decyzja ZRID','2027–2028'],['Budowa, etapami','od 2029']],
  spot:{czas:'18:00–20:00',forma:'na miejscu i online (transmisja z czatem)',online:1,
   cel:'Drugie spotkanie konsultacyjne. Projektanci pokazują, co zmienili po pierwszym etapie, i zbierają opinie przy stolikach z mapami. Notatka ze spotkania trafi do raportu z konsultacji.',
   kto:['projektant drogi','Zarząd Dróg Miasta Krakowa','moderator konsultacji','radni Dzielnicy XIII'],program:['prezentacja zmian, ok. 30 min','stoliki: parkowanie, zieleń, komunikacja','pytania do projektantów'],dostep:'pętla indukcyjna, tłumacz PJM na zgłoszenie do 7 dni przed'}},
 'AU-2.6735.9.2026':{etapy:[['Wniosek inwestora (specustawa mieszkaniowa)','10.2026','done'],['Uwagi mieszkańców','21 dni od publikacji, do 28.12.2026','now'],['Opinie architekta miasta i zarządcy drogi','do 01.2027'],['Uchwała Rady Miasta o lokalizacji','do 60 dni od wniosku'],['Pozwolenie na budowę','po uchwale, jeśli rada się zgodzi']]},
 'OK-3.4430.5.2026':{etapy:[['Analiza demograficzna wydziału edukacji','09.2026','done'],['Projekt uchwały intencyjnej','11.2026','done'],['Opinie rodziców, rady rodziców i rady szkoły','do 04.01.2027','now'],['Zebranie z rodzicami','15.12.2026, aula SP nr 34'],['Opinia kuratora oświaty','02.2027'],['Uchwała Rady Miasta','do 28.02.2027, 6 miesięcy przed zmianą'],['Połączenie szkół','od 1.09.2027']],
  spot:{czas:'17:30–19:00',forma:'na miejscu i online',online:1,
   cel:'Wydział edukacji i dyrekcja przedstawiają plan połączenia szkół i odpowiadają na pytania rodziców. Przebieg zebrania trafi do raportu dla Rady Miasta.',
   kto:['dyrektor SP nr 34','przedstawiciel wydziału edukacji','przewodnicząca rady rodziców'],program:['plan połączenia i podział klas','dojazd na ul. Teligi i świetlica','pytania rodziców'],dostep:'aula na parterze, opieka nad dziećmi w świetlicy'}},
};
Object.values(GMINY).forEach(G=>[G.plan,...(G.inne||[])].forEach(Z=>Object.assign(Z,PLAN_INFO[Z.nr]||{})));
/* Cała rada: radni z Twojego okręgu z danych + pozostali wygenerowani (fikcyjni, ta sama lista przy każdym uruchomieniu). */
const SKLAD={ewa:{okregi:Array.from({length:15},(_,k)=>[k+1,1]),klub:['KWW Razem dla Lipowca',13],opoz:['KWW Nasza Gmina']},
 jan:{okregi:[[1,6],[2,6],[3,8],[4,6],[5,6],[6,5],[7,6]],klub:['KWW Kraków Razem','KWW Nowy Kraków'],opoz:['KWW Wspólny Kraków','KWW Kraków dla Ludzi']}};
function pelnaRada(G,id){
 const R=G.rada,K=SKLAD[id];if(!K||R.wszyscy)return;
 const tyt=R.glosyTyt||(R.glosyTyt=R.glosy.map(g=>g[0])),moj=+(R.okregNr||R.radny.okreg.match(/\d+/)[0]);R.okregNr=String(moj);
 const swoi=(R.radni||[{...R.radny,p:'m',glosy:R.glosy.map(g=>g[1])}]).map(r=>({...r,okreg:moj}));
 const IM={m:['Adam','Bartosz','Damian','Grzegorz','Kamil','Łukasz','Marcin','Mariusz','Piotr','Rafał','Robert','Sławomir','Wojciech','Andrzej','Dariusz','Henryk'],k:['Agata','Barbara','Dorota','Elżbieta','Joanna','Justyna','Katarzyna','Małgorzata','Monika','Renata','Teresa','Urszula','Beata','Halina']};
 const NZ=['Wilk','Sikora','Kos','Zając','Pająk','Gołąb','Cieślak','Kur','Szpak','Wróbel','Kowal','Bednarz','Jeleń','Kania','Puchała','Baran','Mróz','Wiatr','Grad','Kmieć','Socha','Rogal','Fijał','Hajduk','Kufel','Marzec','Stróż','Sroka','Kwiek','Rybak','Ptak','Czyż','Bocian','Żuraw','Krupa','Szczygieł','Gawron','Drozd'];
 let z=7+moj;const los=n=>((z=(z*1103515245+12345)%2147483648)>>>16)%n;
 const inni=[];let nr=0,klubIle=R.wojta-swoi.filter(r=>!/Wspólny|Nasza/.test(r.komitet)).length;
 const W0=K.okregi.filter(([o])=>o!==moj).reduce((n,[,ile])=>n+ile,0);
 K.okregi.filter(([o])=>o!==moj).forEach(([o,ile])=>{for(let j=0;j<ile;j++){
  const p=los(2)?'m':'k',zostalo=W0-inni.length,klub=klubIle>0&&(zostalo<=klubIle||los(10)<5);if(klub)klubIle--;
  const komitet=klub?K.klub[los(Array.isArray(K.klub)&&typeof K.klub[1]==='string'?2:1)]:K.opoz[los(K.opoz.length)];
  const g=klub?['za','za',['za','wstrz','przeciw'][los(3)]]:['przeciw',['za','przeciw'][los(2)],['za','wstrz','przeciw'][los(3)]];
  if(id==='ewa'){g[0]=g[1]=klub?'za':'przeciw';g[2]=klub?'przeciw':'za'}
  inni.push({kto:IM[p][los(IM[p].length)]+' '+NZ[nr++%NZ.length],p,komitet,okreg:o,dyzur:los(3)?'po umówieniu przez skrzynkę rady':'pierwszy poniedziałek miesiąca, 16:00–17:00, '+(id==='ewa'?'urząd gminy':'magistrat'),glosy:g.slice(0,tyt.length)});
 }});
 R.wszyscy=[...swoi,...inni];
}
Object.entries(GMINY).forEach(([id,G])=>pelnaRada(G,id));
/* Szczegóły radnego jak w BIP: kontakt, lista, okręg, klub, komisje, interpelacje, oświadczenia, dyżur, załączniki.
   Pola podane w danych wygrywają; resztę dobieramy z puli stałą funkcją imienia (fikcyjne, takie same przy każdym uruchomieniu).
   Telefony są celowo z nieprzydzielonej puli 000, żeby nie trafić w prawdziwy numer. */
const BIPR={
 ewa:{domena:'rada.lipowiec.pl',tel:'+48 81 000 ',listy:{'KWW Razem dla Lipowca':1,'KWW Nasza Gmina':2},
  kluby:{'KWW Razem dla Lipowca':'Klub Radnych Razem dla Lipowca'},
  komisje:['Rewizyjna','Skarg, Wniosków i Petycji','Budżetu i Finansów','Rolnictwa i Ochrony Środowiska','Oświaty, Kultury i Sportu','Bezpieczeństwa i Porządku Publicznego'],
  doraz:'doraźna komisja ds. zmian w Statucie Gminy',
  gdzie:{'urząd gminy':'Urząd Gminy Lipowiec, ul. Lubelska 12'},komisja:'Gminna Komisja Wyborcza w Lipowcu',bip:'BIP Gminy Lipowiec',
  urz:'Wójta Gminy Lipowiec',www:'https://bip.lipowiec.pl',
  interp:['dowozu dzieci do szkoły w Lipowcu','remontu drogi gminnej w Lipowcu Kolonii','oświetlenia ul. Szkolnej','kosztów wydawania biuletynu gminy','odbioru odpadów wielkogabarytowych','ruchu ciężarówek obok szkoły','godzin otwarcia punktu selektywnej zbiórki odpadów','przystanku autobusowego przy ul. Lubelskiej']},
 jan:{domena:'rada.krakow.pl',domenaDz:'rd13.krakow.pl',tel:'+48 12 000 ',listy:{'KWW Kraków Razem':3,'KWW Nowy Kraków':5,'KWW Wspólny Kraków':7,'KWW Kraków dla Ludzi':9},
  kluby:{'KWW Kraków Razem':'Klub Radnych Kraków Razem','KWW Nowy Kraków':'Klub Radnych Nowy Kraków','KWW Wspólny Kraków':'Klub Radnych Wspólny Kraków','KWW Kraków dla Ludzi':'Klub Radnych Kraków dla Ludzi'},
  komisje:['Budżetowa','Infrastruktury','Planowania Przestrzennego i Ochrony Środowiska','Edukacji','Kultury i Ochrony Zabytków','Rewizyjna','Skarg, Wniosków i Petycji','Mieszkalnictwa','Bezpieczeństwa Publicznego','Sportu i Turystyki','Zdrowia i Polityki Społecznej','Dialogu Obywatelskiego','Komunikacji'],
  doraz:'doraźna komisja ds. zmian w Statucie Miasta Krakowa',
  gdzie:{'magistrat':'Urząd Miasta Krakowa, pl. Wszystkich Świętych 3–4'},komisja:'Miejska Komisja Wyborcza w Krakowie',bip:'BIP Miasta Krakowa',
  urz:'Prezydenta Miasta Krakowa',www:'https://www.bip.krakow.pl',
  interp:['remontu chodnika przy ul. Wielickiej','częstotliwości kursowania tramwajów na Prokocim','brakujących miejsc w żłobkach na Bieżanowie','hałasu od torów kolejowych w Płaszowie','parkingu przy Szpitalu Uniwersyteckim w Prokocimiu','wycinki drzew przy ul. Bieżanowskiej','placu zabaw na os. Na Kozłówce','bezpieczeństwa przejścia dla pieszych przy SP nr 34','nocnych kursów autobusów do Bieżanowa']}};
// adres na fikcyjnej stronie BIP: „Komisja Rewizyjna” → komisja-rewizyjna
const slugB=t=>t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ł/g,'l').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const hashS=s=>[...s].reduce((a,c)=>(a*31+c.charCodeAt(0))>>>0,7);
function uzupelnijRadnego(r,K,dz){
 const h=hashS(r.kto),bierz=(a,n,o='')=>a.map(x=>[hashS(r.kto+o+x),x]).sort((p,q)=>p[0]-q[0]).slice(0,n).map(p=>p[1]);
 const [im,...nz]=r.kto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ł/g,'l').split(' ');
 r.email??=im+'.'+nz.join('-')+'@'+(dz?K.domenaDz:K.domena);
 r.tel??=(h%3?K.tel+String(10+h%80).padStart(2,'0')+' '+String(10+(h>>>7)%89):'');
 if(!dz){r.lista??=K.listy[r.komitet]||'';r.klub??=K.kluby[r.komitet]||(r.p==='k'?'radna niezrzeszona':'radny niezrzeszony')}
 r.komisje??=[...bierz(dz?['Komisja Infrastruktury','Komisja Budżetowa','Komisja Bezpieczeństwa i Porządku','Komisja Kultury, Sportu i Edukacji','Komisja Zieleni i Ochrony Środowiska']:K.komisje.map(k=>'Komisja '+k),2+h%2),...(dz||h%4?[]:[K.doraz])];
 if(!r.dyzurKiedy){const d=r.dyzur||'',cz=d.split(', ');
  if(/^po umówieniu/.test(d)){r.dyzurKiedy='po umówieniu';r.dyzurGdzie='termin ustalisz przez skrzynkę rady w aplikacji'}
  else{r.dyzurKiedy=cz.slice(0,2).join(', ');const m=cz[2]||'',reszta=cz.slice(3).join(', ');
   r.dyzurGdzie=K.gdzie[m]?K.gdzie[m]+', '+(reszta||'pok. '+(200+h%40)):cz.slice(2).join(', ').replace(/^./,c=>c.toUpperCase())}}
 if(!dz){
  // [rodzaj I/Z, w sprawie, data otrzymania przez prezydenta/wójta, ile plików odpowiedzi (0 = czeka)]; najnowsza z ostatnich tygodni czeka
  r.interp??=bierz(K.interp,1+h%5,'i').map(t=>{const x=hashS(t+r.kto);return [x%3?'I':'Z',t,'2026-'+String(1+x%10).padStart(2,'0')+'-'+String(1+(x>>>5)%28).padStart(2,'0'),x%7?1:2]})
   .sort((a,b)=>a[2]<b[2]?1:-1).map((w,i)=>i===0&&w[2]>'2026-10-25'?[...w.slice(0,3),0]:w);
  // [za rok, rodzaj, rozmiar pliku w kB], jak tabela oświadczeń w BIP
  r.oswiad??=[['2025','roczne',300+h%400+(h%100)/100],['2024','roczne',700+(h>>>3)%300+(h%37)/100],['2024','na początek kadencji',650+(h>>>6)%300+(h%53)/100]];
  r.funkcje??=(h%5===0?{[r.komisje[0]]:r.p==='k'?'Przewodnicząca':'Przewodniczący'}:h%5===1?{[r.komisje[0]]:r.p==='k'?'Wiceprzewodnicząca':'Wiceprzewodniczący'}:{});
  r.zaswiad??=[K.komisja,'12.04.2024'];
 }
 return r;
}
Object.entries(GMINY).forEach(([id,G])=>{const K=BIPR[id];if(!K)return;G.rada.wszyscy.forEach(r=>uzupelnijRadnego(r,K));(G.rada.dzielnica?.osoby||[]).forEach(r=>uzupelnijRadnego(r,K,1))});
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
function mapaProsta(Z){const M=Z.mapa,dom=`<g transform="translate(112 12)"><path d="M12 0a12 12 0 0 1 12 12c0 9-12 20-12 20S0 21 0 12A12 12 0 0 1 12 0z" fill="#16805a"/><path d="M6.5 16v-5l5.5-4.2 5.5 4.2v5h-3.6v-3.4h-3.8V16z" fill="#fff"/></g><text x="140" y="26" class="mt">Twój dom</text>`;
 const tlo=`<rect width="320" height="172" rx="12" fill="#eef3ec"/><path d="M0 58h320" stroke="#fff" stroke-width="9"/><path d="M150 58v114" stroke="#fff" stroke-width="7"/><g fill="#d5dccf"><rect x="40" y="18" width="16" height="12" rx="2"/><rect x="66" y="22" width="14" height="10" rx="2"/><rect x="100" y="76" width="18" height="13" rx="2"/><rect x="40" y="80" width="15" height="11" rx="2"/><rect x="226" y="20" width="18" height="12" rx="2"/><rect x="276" y="18" width="16" height="12" rx="2"/></g>`;
 const obiekt=M.rura?`<path d="M0 58h320" stroke="#2f6fb3" stroke-width="3.5" stroke-dasharray="9 5"/><circle cx="124" cy="58" r="6" fill="#fff" stroke="#2f6fb3" stroke-width="2.5"/><path d="M124 64v-20" stroke="#2f6fb3" stroke-width="2" stroke-dasharray="3 3"/><text x="160" y="76" class="mr" style="fill:#2f6fb3">${M.obiekt} (2027)</text><text x="96" y="112" class="ml">studzienka na granicy działki</text><path d="M124 100V66" stroke="#6b7280" stroke-width="1" stroke-dasharray="2 3"/>`
  :`<rect x="214" y="84" width="100" height="50" rx="3" fill="${M.szkola?'#4a6fa5':'url(#kres2)'}" stroke="${M.szkola?'#4a6fa5':'#dc143c'}" stroke-width="1.4"/><text x="222" y="104" class="mt" style="${M.szkola?'fill:#fff':''}">${M.obiekt}</text><text x="222" y="120" class="ml" style="${M.szkola?'fill:#e5ecf6':''}">${M.opis}</text>
   <path d="M126 36 214 92" stroke="#6b7280" stroke-width="1" stroke-dasharray="2 3"/><text x="160" y="56" class="ml" transform="rotate(32 160 56)">${M.odl}</text>
   ${M.szkola?'<rect x="60" y="100" width="40" height="22" rx="3" fill="#4a6fa5"/><text x="80" y="115" class="ms">SP 34</text><text x="40" y="140" class="ml">klasy 1–3 zostają</text>':''}
   ${M.wiatr?'<path d="M300 150H170" stroke="#dc143c" stroke-width="2"/><path d="m176 145-8 5 8 5" fill="none" stroke="#dc143c" stroke-width="2"/><text x="186" y="164" class="mr">przeważający wiatr</text>':''}`;
 return `<svg class="gmap" viewBox="0 0 320 172" role="img" aria-label="Mapka: ${Z.nazwa}, ${Z.odl}"><defs><pattern id="kres2" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="7" height="7" fill="#fdecef"/><path d="M0 0v7" stroke="#dc143c" stroke-width="2.2" stroke-opacity=".55"/></pattern></defs>${tlo}${obiekt}${dom}</svg>`}
const MAPY={ewa:mapaPlanu,jan:mapaWielicka},mapa=()=>(MAPY[OS.id]||mapaPlanu)(),mapaZ=Z=>Z.mapa?mapaProsta(Z):mapa();

// radni Twojego okręgu: w gminie do 20 tys. jeden (JOW), w większym mieście kilku (okręg wielomandatowy)
const radniPod=()=>{const R=GM.rada;return R.radni?'Twoi radni z okręgu nr '+R.okregNr+': '+R.radni.length+' osób':'Twój radny z '+R.radny.okreg.replace('okręg','okręgu')+': '+R.radny.kto};
const GLOS={za:['za','za'],przeciw:['przeciw','przeciw'],wstrz:['wstrzymał się','wstrzymała się']},glosH=(r,g)=>(GLOS[g]||[g,g])[r.p==='k'?1:0];
const osobyH=a=>'<ul class="gos">'+a.map(r=>`<li><b>${r.kto}</b><small>${[r.komitet,'dyżur: '+r.dyzur].filter(Boolean).join(' · ')}</small></li>`).join('')+'</ul>';

/* Karta radnego w układzie BIP (kontakt, lista, okręg, klub, komisje, interpelacje, oświadczenia, dyżur, załączniki),
   ale w stylu mObywatela. Interpelacje, oświadczenia i zaświadczenie otwierają się w rozmowie; pliki PDF i komisje prowadzą
   do fikcyjnych adresów BIP (nowa karta), jak linki na prawdziwej stronie radnego. */
async function radnyKarta(r,{rada,okreg,glosy=[],note=''}){
 const k=r.p==='k',sek=t=>`<div class="gsek">${t}</div>`,it=(a,ic,t,sm)=>`<button class="it" data-a="${a}"><span class="gi">${svg(ic)}</span><span class="x"><b>${t}</b><small>${sm}</small></span>${svg('chev')}</button>`;
 const kontakt=[...(r.tel?[['tel.',`<a href="tel:${r.tel.replace(/ /g,'')}">${r.tel}</a>`]]:[]),['e-mail',`<a href="mailto:${r.email}">${r.email}</a>`]];
 const fakty=[...(r.lista?[[k?'Wybrana z listy':'Wybrany z listy','nr '+r.lista+', '+r.komitet]]:[]),['Okręg wyborczy',okreg],...(r.klub?[['Klub',r.klub]]:[])];
 const K=BIPR[OS.id]||{},www=K.www||'',lnk=(u,t)=>`<a href="${u}" target="_blank" rel="noopener">${t}</a>`;
 const ostI=r.interp&&r.interp.length?r.interp[0][2]:'',fu=r.funkcje||{};
 const kom=x=>{const u=www+'/rada/komisje/'+slugB(x);return lnk(u,x)+(fu[x]?' – '+lnk(u+'/sklad',fu[x]):'')};
 const c=await card(`<div class="ui list glist grd">${hd('id',`${r.kto}<small>${k?'Radna':'Radny'} · ${rada}</small>`)}
  ${sek('Kontakt')}<div class="rows">${rowsH(kontakt)}</div>
  <div class="rows grf">${rowsH(fakty)}</div>
  ${sek(r.komisje.length>1?'Pracuje w komisjach':'Pracuje w komisji')}<ul class="grk">${r.komisje.map(x=>`<li>${kom(x)}</li>`).join('')}</ul>
  ${r.interp?it('interp','doc','Interpelacje i zapytania',r.interp.length+' w tej kadencji'+(ostI?', ostatnia '+ostI:'')):''}
  ${r.oswiad?it('oswiad','coin','Oświadczenia majątkowe',r.oswiad.length+' pliki PDF, ostatnie za '+r.oswiad[0][0]):''}
  ${sek('Dyżur')}<div class="rows">${rowsH([['Kiedy',r.dyzurKiedy],['Gdzie',r.dyzurGdzie]])}</div>
  ${r.zaswiad?sek('Załączniki')+it('zasw','doc','Zaświadczenie o wyborze','PDF, '+r.zaswiad[0]+', '+r.zaswiad[1]):''}
  ${glosy.length?`<details class="gdok grad"><summary>${svg('check')}<span>Jak ${k?'głosowała':'głosował'} w ważnych sprawach</span>${svg('chev')}</summary><ul>${glosy.map(([t,g])=>`<li class="os"><b>${t}</b><small><strong>${g}</strong></small></li>`).join('')}</ul></details>`:''}
  ${note?`<div class="note">${note}</div>`:''}${srcH((r.interp?'BIP, rejestr radnych i imienne wyniki głosowań':rada)+' (dane fikcyjne)')}</div>`);
 const A={
  // rejestr jak w BIP, ale zamiast tabeli (za wąska na telefon) jeden wpis pod drugim
  interp:()=>{const sl=slugB(r.kto),pdf=(n,o)=>www+'/interpelacje/2026/'+sl+'-'+n+(o?'-odpowiedz-'+o:'')+'.pdf';
   return card(`<div class="ui gin">${hd('doc',`Interpelacje i zapytania<small>${r.kto}</small>`)}
    <div class="note"><b>I</b> – interpelacja, <b>Z</b> – zapytanie. Data to dzień otrzymania przez ${K.urz}.</div>
    ${r.interp.map(([t,s,d,o],i)=>{const n=r.interp.length-i;return `<div class="gip"><div class="gip-h"><span class="gtag" title="${t==='I'?'interpelacja':'zapytanie'}">${t}</span><span>${d}</span></div>
     <p>w sprawie ${s}</p><div class="gip-l"><span>Treść: ${lnk(pdf(n),'PDF')}</span><span>Odpowiedź: ${o?Array.from({length:o},(_,j)=>lnk(pdf(n,j+1),'PDF')).join(' '):'<i>czeka, do 14 dni</i>'}</span></div></div>`}).join('')}
    ${srcH(K.bip+', rejestr interpelacji i zapytań (dane fikcyjne)')}</div>`)},
  oswiad:()=>{const kb=x=>x.toFixed(2).replace('.',',')+' kB';
   return info({icon:'coin',title:`Oświadczenia majątkowe<small class="gsub">${r.kto}</small>`,source:K.bip+' (dane fikcyjne)',
    rows:[['Jednostka',rada],...r.oswiad.map(([rok,rodzaj,ile],i)=>['Za rok '+rok+'<small class="gsub">'+rodzaj+'</small>',lnk(www+'/oswiadczenie-majatkowe/'+slugB(r.kto)+'-'+rok+'-'+(i+1)+'.pdf','PDF ('+kb(ile)+')')])],
    note:(k?'Radna składa':'Radny składa')+' oświadczenie co roku do 30 kwietnia. Oświadczenia są jawne, poza adresem i położeniem nieruchomości.'})},
  zasw:()=>info({icon:'doc',title:'Zaświadczenie o wyborze',source:r.zaswiad[0]+' (dane fikcyjne)',rows:[['Wydał',r.zaswiad[0]],['Data',r.zaswiad[1]],['Dla',r.kto],['Mandat',(k?'radna ':'radny ')+rada.replace(/^Rada/,'Rady')+', okręg '+okreg.replace(' (Twój okręg)','')],['Wybory','7 kwietnia 2024 r.']]})};
 c.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>act(()=>{addUser(b.querySelector('b').textContent);A[b.dataset.a]()}));
 return c;
}

// harmonogram sprawy jako zwinięta lista (panel); w rozmowie pokazujemy go rozwinięty
const etapyH=(Z,otw)=>Z.etapy?`<details class="gdok getap"${otw?' open':''}><summary>${svg('clock')}<span>Etapy sprawy · teraz: ${(Z.etapy.find(e=>e[2]==='now')||Z.etapy[0])[0].replace(/^.(?=[a-ząćęłńóśźż])/,c=>c.toLowerCase())}</span>${svg('chev')}</summary><div class="gse">${kroki(Z.etapy)}</div></details>`:'';
// Moja aktywność: nowe wpisy z tej sesji na górze, potem wcześniejsze (fikcyjne) z danych gminy
const AKT={},aktyw=()=>[...(AKT[OS.id]||[]),...(GM.aktywnosc||[])];
const dodajAkt=a=>{(AKT[OS.id]=AKT[OS.id]||[]).unshift({kiedy:today(),...a})};
const rez=(ikona,h,s,o,x={})=>{dodajAkt({ikona,h,s,o,...x});return result(o)};
// uwagi złożone w tej sesji (prototyp: tylko w pamięci przeglądarki), klucz: osoba i numer sprawy
const ZLOZ={},kluczU=Z=>OS.id+':'+Z.nr;
const rozm=b=>b>=1e6?(b/1e6).toFixed(1).replace('.',',')+' MB':Math.max(1,Math.round(b/1e3))+' kB';
const plikiH=(f,usun)=>f.length?'<ul class="gzal">'+f.map((x,j)=>`<li>${svg('doc')}<span>${esc(x.n)}</span><small>${x.r}</small>${usun?`<button type="button" data-x="${j}" aria-label="Usuń ${esc(x.n)}">×</button>`:''}</li>`).join('')+'</ul>':'';
const pismoH=(P,st,kiedy)=>`<div class="gpismo"><small>${kiedy||today()} · ${P.adresat}</small><b>${P.uwagaTyt}, sprawa ${P.nr}</b><p>${esc(st.t).replace(/\n/g,'<br>')}</p><small>${OS.imie} ${OS.nazwisko}, ${OS.moje.adres}</small>${plikiH(st.f)}</div>`;

// wszystkie sprawy „przy Tobie”: główna (plan) i pozostałe, każda zwinięta w karcie
const ZMIANY=()=>[GM.plan,...(GM.inne||[])];

/* ---------- panel „Moja gmina” (zamiast zwykłych szczegółów dokumentu) ---------- */
function openGmina(){
 const det=$('#detail'),top=getComputedStyle($('.status')).display!=='none'?50:6,d=DOCS.find(x=>x.id==='gmina');
 const it=(k,ic,h,s)=>`<button class="it" data-k="${k}"><span class="gi">${svg(ic)}</span><span class="x"><b>${h}</b><small>${s}</small></span>${svg('chev')}</button>`;
 det.innerHTML=`<div style="height:${top}px;flex:none"></div><div class="nav"><button class="back" id="dclose">${svg('back')}Wróć</button><b>Moja gmina</b><span></span></div>
  <div class="body"><div class="bigcard" style="background-image:url(${d.img})">${faceHTML(d)}</div>
  <div class="ui galert glist">${hd('dom','Zmienia się coś przy Tobie')}
   ${ZMIANY().map((Z,i)=>`<details class="gz"><summary class="it"><span class="gi">${svg(Z.ikona||'info')}</span><span class="x"><b>${Z.nazwa}</b><small>${Z.odl} · ${Z.krotko||'uwagi do '+Z.uwagi}${ZLOZ[kluczU(Z)]?' · <b class="gok">uwaga złożona</b>':''}</small></span>${svg('chev')}</summary>
    <div class="gzb">${mapaZ(Z)}${rowsH([['Teraz',Z.teraz],['Projekt',Z.projekt],[Z.uwagaLabel?'Termin':'Uwagi do','<em>'+Z.uwagi+'</em>']])}
    <div class="actions"><button class="btn primary" data-k="z${i}">Zobacz i ${(Z.uwagaLabel||'zgłoś uwagę').replace(/^./,c=>c.toLowerCase())}</button></div>${etapyH(Z)}${dokumentyH(Z)}</div></details>`).join('')}</div>
  ${(A=>A.length?`<div class="ui list glist gakt">${hd('clock','Moja aktywność')}${A.slice(0,4).map((a,j)=>it('a'+j,a.ikona,a.h,a.kiedy+' · '+a.s)).join('')}${A.length>4?it('aWszystko','dots','Cała aktywność',A.length+' wpisów'):''}</div>`:'')(aktyw())}
  <div class="ui list glist">${hd('doc','Twoja gmina')}
   ${it('gRada','id',GM.etykRada,GM.wojt.kto+', '+GM.wojt.kad.split(' (')[0]+' · '+radniPod())}
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
 ZMIANY().forEach((z,i)=>Q['z'+i]=i?z.q:Q.plan);aktyw().forEach((a,j)=>Q['a'+j]=a.h);Q.aWszystko='Pokaż całą moją aktywność';
 const idz=k=>k==='aWszystko'?S.aktWszystko():k[0]==='z'?S.plan(+k.slice(1)):k[0]==='a'&&k!=='a'?S.akt(+k.slice(1)):S[k]();
 det.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{det.classList.remove('on');setTimeout(()=>startTopic(Q[b.dataset.k],()=>idz(b.dataset.k)),180)});
}

const ETYKIETA='Tak mogłoby działać. Dziś prawo wymaga podpisów na papierze, więc ten krok pokazuje proponowaną zmianę.';
const kroki=a=>'<ol class="gsteps">'+a.map(([t,d,st])=>`<li class="${st||''}"><b>${t}</b><small>${d}</small></li>`).join('')+'</ol>';
const lista=a=>'<ul class="gul">'+a.map(x=>`<li>${x}</li>`).join('')+'</ul>';
/* Dokumenty źródłowe sprawy: zwinięta lista fikcyjnych odnośników do BIP, budowana z pola `zrodla`.
   Domena .example jest zarezerwowana, więc żaden odnośnik nie trafi do prawdziwego urzędu. */
const DOMYSL_ZR='Uzasadnienie projektu, prognoza oddziaływania na środowisko, uwagi mieszkańców z etapu wniosków';
const slug=t=>norm(t).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function dokumentyH(Z){
 const nazwy=(Z.zrodla||DOMYSL_ZR).split(/,\s*/).filter(Boolean),dom='bip.'+slug(GM.krotko)+'.example',nr=slug(Z.nr||Z.tytul||'sprawa');
 return `<details class="gdok"><summary>${svg('doc')}<span>Dokumenty źródłowe · ${nazwy.length}</span>${svg('chev')}</summary><ul>${nazwy.map((n,i)=>{
  const u=`https://${dom}/sprawy/${nr}/${slug(n)}.pdf`,kb=180+(n.length*37+i*211)%2400,dzien=String(2+i*5).padStart(2,'0');
  return `<li><a class="gdl" href="${u}" data-fikcja="1"><b>${n.replace(/^./,c=>c.toUpperCase())}</b><small>PDF · ${kb>1000?(kb/1000).toFixed(1).replace('.',',')+' MB':kb+' kB'} · ${dzien}.11.2026</small><small class="u">${u.replace('https://','')}</small></a></li>`}).join('')}</ul>
  <div class="note">Odnośniki są fikcyjne (prototyp). W prawdziwej aplikacji otwierałyby dokument z BIP.</div></details>`}
// odnośniki fikcyjne: zamiast przejścia pod nieistniejący adres krótko podświetlamy uwagę pod listą
document.addEventListener('click',e=>{const a=e.target.closest('a.gdl[data-fikcja]');if(!a)return;e.preventDefault();
 const n=a.closest('.gdok').querySelector('.note');n.classList.remove('miga');void n.offsetWidth;n.classList.add('miga')});


function gminaInit(){
 if(!GM)return;
 const _open=openDoc;openDoc=function(id){id==='gmina'?openGmina():_open(id)};
 const P=GM.plan,R=GM.rada,ZM=[GM.plan,...(GM.inne||[])];
 Object.assign(S,{
  async gmina(){
   await say(GM.wstep);
   chips([{label:'Co się zmienia przy moim domu?',go:S.plan},{label:'Kto rządzi w mojej gminie?',go:S.gRada},{label:'Budżet na tle podobnych gmin',go:S.gLiczby},GM.bo?{label:'Zagłosuj w budżecie obywatelskim',go:S.gBO}:{label:'Kto dostaje pieniądze gminy?',go:S.gUmowy}]);
  },
  async plan(i=0){
   const P=ZM[i];
   await say(P.intro);
   await info({icon:'info',title:P.nazwa,source:GM.bip+', sprawa '+P.nr+' (dane fikcyjne)',body:mapaZ(P),
    rows:P.rows||[['Obszar',P.pow],['Teraz',P.teraz],['Projekt',P.projekt],['Dojazd',P.dojazd],['Skąd zmiana',P.wniosek],['Wyłożenie projektu',P.wylozenie],['Spotkanie z projektantem',P.spotkanie],['Uwagi do','<b>'+P.uwagi+'</b>']]});
   if(P.etapy)await info({icon:'clock',title:'Etapy sprawy',source:GM.bip+', sprawa '+P.nr,body:kroki(P.etapy),note:P.spot?'Spotkanie: '+P.spotkanieKiedy+'. Możesz się zapisać i wcześniej zadać pytanie.':''});
   await info({icon:'doc',title:'Argumenty za i przeciw',
    body:`<div class="gzp"><div><h4>Za</h4>${lista(P.za)}</div><div><h4>Przeciw</h4>${lista(P.przeciw)}</div></div>`,
    note:(P.decyzja||'Streszczam dokumenty, nie oceniam. O planie zdecyduje rada gminy po rozpatrzeniu uwag przez wójta.')+dokumentyH(P)});
   await say(P.kto);
   chips([...(ZLOZ[kluczU(P)]?[{label:'Moja złożona uwaga',go:()=>S.mojaUwaga(i)}]:[]),{label:ZLOZ[kluczU(P)]?'Złóż kolejną uwagę':P.uwagaLabel||'Złóż uwagę',go:()=>S.uwaga(i)},...(P.spotkanieKiedy?[{label:'Zapisz mnie na spotkanie '+P.spotkanieKiedy.slice(0,5),go:()=>S.spotkanie(i)}]:[]),{label:P.ktoGlos||'Kto zagłosuje nad planem?',go:S.gRada},{label:'Przypomnij przed terminem',go:()=>S.przypomnij(i)},...(ZM.length>1?[{label:'Co jeszcze się zmienia przy mnie?',go:()=>S.inneZmiany(i)}]:[])]);
  },
  async inneZmiany(i=0){
   await say('Przy Tobie zmienia się też:');
   chips(ZM.map((z,j)=>j===i?null:{label:z.nazwa,go:()=>S.plan(j)}).filter(Boolean));
  },
  // Uwaga własnymi słowami: puste pole, podpowiedzi tylko pomocnicze (zwinięte), załączniki, podgląd pisma przed podpisem.
  async uwaga(i=0,szkic){
   const P=ZM[i],st=szkic?{t:szkic.t,f:[...szkic.f]}:{t:'',f:[]};
   await say(szkic?'Popraw, co chcesz. Nic jeszcze nie zostało wysłane.':'Napisz uwagę własnymi słowami. Urząd rozpatruje każdą uwagę osobno, a Twoje doświadczenie waży więcej niż powtórzony szablon. Podpowiedzi pod polem są tylko pomocą.');
   const c=await card(`<div class="ui guw">${hd('mail',P.uwagaTyt)}<div class="body">
    <label class="gl" for="uwT${i}">Twoja uwaga</label><textarea id="uwT${i}" rows="6" placeholder="Np. mieszkam przy… Najbardziej martwi mnie… Proponuję…">${esc(st.t)}</textarea><div class="gcnt"></div>
    <details class="gdok"><summary>${svg('info')}<span>Podpowiedzi (opcjonalnie)</span>${svg('chev')}</summary>
     <div class="gpod">${Object.entries(P.zg).map(([k,l])=>`<button type="button" data-k="${k}">+ ${l}</button>`).join('')}<button type="button" data-k="_uz">+ Jak mnie to dotyczy</button></div>
     <div class="note">Podpowiedź dopisuje zdanie na końcu tekstu. Zmień je po swojemu.</div></details>
    <div class="gzalw"><div class="gzl"></div><label class="btn ghost gadd">${svg('doc')}Dodaj załącznik<input type="file" accept="image/*,application/pdf" multiple hidden></label><small>zdjęcie, skan albo PDF, do 10 MB. Nic nie wysyłam, dopóki nie podpiszesz.</small></div>
   </div><div class="actions"><button class="btn ghost gno">Anuluj</button><button class="btn primary">Podgląd pisma</button></div>${srcH(P.kanal)}</div>`);
   const ta=c.querySelector('textarea'),cnt=c.querySelector('.gcnt'),ok=c.querySelector('.btn.primary'),fin=c.querySelector('input[type=file]'),zl=c.querySelector('.gzl');
   const odsw=()=>{const n=ta.value.trim().length;cnt.textContent=n<15?(n?'Napisz jeszcze kilka słów':''):n+' znaków';ok.disabled=n<15};
   const rysuj=()=>{zl.innerHTML=plikiH(st.f,1);zl.querySelectorAll('[data-x]').forEach(b=>b.onclick=()=>{st.f.splice(+b.dataset.x,1);rysuj()})};
   const dopisz=t=>{ta.value=(ta.value.trim()?ta.value.trim()+' ':'')+t;odsw()};
   ta.oninput=odsw;odsw();rysuj();
   c.querySelectorAll('.gpod button').forEach(b=>b.onclick=()=>{const k=b.dataset.k;dopisz(k==='_uz'?P.uzas:'Wnioskuję o '+P.zgt[k]+'.');b.disabled=true});
   fin.onchange=()=>{[...fin.files].forEach(f=>st.f.push({n:f.name,r:rozm(f.size)}));fin.value='';rysuj()};
   pending=t=>{dopisz(t);say('Dopisałem to do uwagi. Możesz dalej poprawiać w polu powyżej.')};
   const zamknij=()=>{pending=null;c.querySelector('.actions').remove();ta.readOnly=true;c.querySelector('.gdok').remove();c.querySelector('.gadd').remove();c.querySelector('.gzalw small').remove();zl.querySelectorAll('[data-x]').forEach(b=>b.remove())};
   c.querySelector('.gno').onclick=()=>act(async()=>{zamknij();await say('Anulowałem. Nic nie zostało wysłane.');
    chips([{label:'Wróć do pisania',go:()=>S.uwaga(i,{t:ta.value,f:st.f})},...(ZM.length>1?[{label:'Inna sprawa przy mnie',go:()=>S.inneZmiany(i)}]:[]),{label:'Wróć do sprawy',go:()=>S.plan(i)}])});
   ok.onclick=()=>act(()=>{st.t=ta.value.trim();zamknij();S.uwagaPodglad(i,st)});
  },
  async uwagaPodglad(i,st){
   const P=ZM[i];
   await say('Tak będzie wyglądać pismo. Sprawdź je, zanim podpiszesz.');
   await confirmCard({icon:'mail',title:'Podgląd: '+P.uwagaTyt,source:P.kanal,body:pismoH(P,st),
    rows:[['Do',P.adresat],['Od',OS.imie+' '+OS.nazwisko+', '+OS.moje.adres],['Sprawa',P.nr],['Załączniki',st.f.length?String(st.f.length):'brak'],['Termin','do '+P.uwagi]],
    label:'Podpisz i wyślij',
    onCancel:async()=>{await say('Nic nie zostało wysłane. Możesz wrócić do tekstu i go poprawić albo napisać inną uwagę.');
     chips([{label:'Popraw uwagę',go:()=>S.uwaga(i,st)},{label:'Napisz od nowa',go:()=>S.uwaga(i)},{label:'Wróć do sprawy',go:()=>S.plan(i)}])},
    then:async()=>{
     const nr=P.nr.split('.')[0]+'/U/'+String(40+Object.keys(ZLOZ).length*7+i).padStart(3,'0');
     ZLOZ[kluczU(P)]={...st,kiedy:'godz. '+now()+', '+today(),nr};
     dodajAkt({ikona:'mail',h:'Uwaga złożona: '+P.nazwa,s:nr+' · czeka na rozpatrzenie',go:()=>S.mojaUwaga(i)});
     await result({title:P.zlozono||'Uwaga złożona',source:'e-Doręczenia, dowód otrzymania',rows:[['Dowód otrzymania','godz. '+now()+', '+today()],['Numer uwagi',nr],['Sprawa','w Twoich sprawach'],['Wynik',P.wynik]]});
     await say(P.potem);
     chips([{label:'Zobacz złożoną uwagę',go:()=>S.mojaUwaga(i)},...(P.spotkanieKiedy?[{label:'Zapisz mnie na spotkanie '+P.spotkanieKiedy.slice(0,5),go:()=>S.spotkanie(i)}]:[]),{label:'Na razie wystarczy',go:()=>say('Dobrze. Sprawę i swoją uwagę znajdziesz w zakładce Moja gmina.')}]);
    }});
  },
  // Szczegóły aktywności: co wysłałem, odpowiedź, przebieg krok po kroku, dokumenty i co mogę zrobić dalej.
  async akt(j){
   const a=aktyw()[j];if(!a)return;
   if(a.go)return a.go();
   const o=a.o||{},teraz=(a.przebieg||[]).find(e=>e[2]==='now');
   const tab=a.tabela?`<table class="gtab"><tr><th>Projekt</th><th>Wynik</th><th>Realizacja</th></tr>${a.tabela.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</table>`:'';
   const tr=a.tresc?`<div class="gpismo"><small>${a.kiedy} · do: ${a.do}</small><b>${a.tresc[0]}</b><p>${a.tresc[1]}</p></div>`:'';
   const od=a.odp?`<div class="gpismo godp"><small>${a.odp.kiedy} · ${a.odp.kto}</small><b>Odpowiedź</b><p>${a.odp.tekst}</p></div>`:'';
   await info({icon:a.ikona,title:a.h,source:o.source||'Twoje sprawy w mObywatelu',body:tr+od+tab||'',
    rows:[...(a.typ?[['Rodzaj',a.typ]]:[]),[(o.rows||[]).some(r=>r[0]==='Kiedy')?'Dodano':'Kiedy',a.kiedy],...(a.do?[[a.doL||'Do',a.do]]:[]),...(a.nr?[['Numer',a.nr]]:[]),...(a.status?[['Status','<b>'+a.status+'</b>']]:[]),...(o.rows||[])],
    note:a.zrodla?dokumentyH({zrodla:a.zrodla,nr:a.nr}):''});
   if(a.przebieg)await info({icon:'clock',title:'Przebieg',body:kroki(a.przebieg),note:teraz?'Teraz: '+teraz[0].toLowerCase()+', '+teraz[1]+'.':''});
   chips([...(a.dalej||[]).filter(([,f])=>typeof f==='function'||S[f]).map(([l,f])=>({label:l,go:typeof f==='function'?f:()=>S[f]()})),{label:'Cała moja aktywność',go:S.aktWszystko}]);
  },
  async aktWszystko(){
   const A=aktyw();
   const c=await card(`<div class="ui list glist">${hd('clock','Moja aktywność')}${A.map((a,j)=>`<button class="it" data-j="${j}"><span class="gi">${svg(a.ikona)}</span><span class="x"><b>${a.h}</b><small>${a.kiedy} · ${a.s}</small></span>${svg('chev')}</button>`).join('')}${srcH('uwagi, zapisy, głosy, wiadomości i przypomnienia w sprawach gminy')}</div>`);
   c.querySelectorAll('.it').forEach(b=>b.onclick=()=>act(()=>{addUser(A[+b.dataset.j].h);S.akt(+b.dataset.j)}));
  },
  async mojaUwaga(i=0){
   const P=ZM[i],Z=ZLOZ[kluczU(P)];
   if(!Z)return S.uwaga(i);
   await info({icon:'mail',title:'Twoja uwaga: '+P.nazwa,source:'e-Doręczenia, dowód otrzymania',body:pismoH(P,Z,Z.kiedy),
    rows:[['Złożona',Z.kiedy],['Numer uwagi',Z.nr],['Do',P.adresat],['Status','<b>przyjęta, czeka na rozpatrzenie</b>'],['Co dalej',P.wynik]],note:dokumentyH({zrodla:'Twoja uwaga, dowód doręczenia (e-Doręczenia)'+(Z.f.length?', załączniki ('+Z.f.length+')':''),nr:Z.nr})});
   const E=P.etapy||[],dalej=E.slice(E.findIndex(e=>e[2]==='now')+1).slice(0,2);
   await info({icon:'clock',title:'Przebieg',body:kroki([['Uwaga złożona',Z.kiedy,'done'],['Doręczona do urzędu','e-Doręczenia, ten sam dzień','done'],['Rozpatrzenie',P.wynik,'now'],...dalej.map(e=>[e[0],e[1]])])});
   chips([{label:'Złóż kolejną uwagę',go:()=>S.uwaga(i)},{label:'Wróć do sprawy',go:()=>S.plan(i)},{label:'Cała moja aktywność',go:S.aktWszystko}]);
  },
  // Zapis na spotkanie: najpierw o co chodzi i kto prowadzi, potem opcjonalne pytanie (to nie jest formalna uwaga).
  async przypomnij(i=0){
   const P=ZM[i],[d,m,r]=P.uwagi.split('.').map(Number),termin=new Date(r,m-1,d);
   const DNI=['niedz.','pon.','wt.','śr.','czw.','pt.','sob.'],kiedy=n=>{const x=new Date(termin);x.setDate(x.getDate()-n);return DNI[x.getDay()]+' '+x.toLocaleDateString('pl-PL',{day:'2-digit',month:'2-digit',year:'numeric'})+', 9:00'};
   let n=3;
   await say('Kiedy mam Ci przypomnieć? Termin mija '+P.uwagi+'.');
   const c=await card(`<div class="ui guw">${hd('bell','Przypomnienie przed terminem')}<div class="body">
    <div class="gopt">${[1,3,7].map(k=>`<button type="button" data-n="${k}" class="${k===n?'sel':''}">${k} ${k===1?'dzień':'dni'} przed</button>`).join('')}</div>
    <div class="rows">${rowsH([['Przypomnę','<b class="gkd">'+kiedy(n)+'</b>'],['O czym',P.przyp[1]],['Gdzie','powiadomienie w aplikacji']])}</div>
   </div><div class="actions"><button class="btn ghost gno">Anuluj</button><button class="btn primary">Ustaw przypomnienie</button></div></div>`);
   c.querySelectorAll('.gopt button').forEach(b=>b.onclick=()=>{n=+b.dataset.n;c.querySelectorAll('.gopt button').forEach(x=>x.classList.toggle('sel',x===b));c.querySelector('.gkd').textContent=kiedy(n)});
   const zamknij=()=>{c.querySelector('.actions').remove();c.querySelectorAll('.gopt button').forEach(b=>b.disabled=true)};
   c.querySelector('.gno').onclick=()=>act(async()=>{zamknij();await say('Dobrze, nie ustawiłem przypomnienia.');chips([{label:'Jednak przypomnij',go:()=>S.przypomnij(i)},{label:'Wróć do sprawy',go:()=>S.plan(i)}])});
   c.querySelector('.btn.primary').onclick=()=>act(()=>{zamknij();c.classList.add('done');
    rez('bell','Przypomnienie: '+P.nazwa,kiedy(n)+' · '+n+' '+(n===1?'dzień':'dni')+' przed terminem',{title:'Przypomnienie ustawione',rows:[['Kiedy',kiedy(n)],['O czym',P.przyp[1]],['Gdzie','powiadomienie w aplikacji']]},{typ:'Przypomnienie',status:'aktywne',do:P.nazwa,doL:'Sprawa',przebieg:[['Ustawione',now()+', '+today(),'done'],['Przypomnienie w aplikacji',kiedy(n),'now'],['Termin w sprawie',P.uwagi]],dalej:[['Wróć do sprawy',()=>S.plan(i)]]}).then(()=>chips([{label:ZLOZ[kluczU(P)]?'Złóż kolejną uwagę':P.uwagaLabel||'Złóż uwagę',go:()=>S.uwaga(i)},{label:'Wróć do sprawy',go:()=>S.plan(i)}]))});
  },
  async spotkanie(i=0,szkic){
   const P=ZM[i],O=P.spot||{},st=szkic||{pyt:'',forma:'na miejscu'};
   if(!szkic)await info({icon:'clock',title:P.spotkanieTyt,source:GM.urzad+' (dane fikcyjne)',
    body:(O.cel?`<p class="gcel">${O.cel}</p>`:'')+(O.kto?`<h4 class="gh4">Prowadzą</h4>${lista(O.kto)}`:'')+(O.program?`<h4 class="gh4">Program</h4>${lista(O.program)}`:''),
    rows:[['Kiedy',P.spotkanieKiedy],['Gdzie',P.spotkanieGdzie],...(O.czas?[['Czas',O.czas]]:[]),...(O.forma?[['Forma',O.forma]]:[]),...(O.dostep?[['Dostępność',O.dostep]]:[])]});
   const c=await card(`<div class="ui guw">${hd('clock','Zapis na spotkanie')}<div class="body">
    ${O.online?`<div class="gl">Jak weźmiesz udział?</div><div class="gopt">${['na miejscu','online'].map(f=>`<button type="button" class="${st.forma===f?'sel':''}" data-f="${f}">${f}</button>`).join('')}</div>`:''}
    <label class="gl" for="spP${i}">Pytanie do prowadzących (opcjonalnie)</label><textarea id="spP${i}" rows="3" placeholder="Np. czy w projekcie są miejsca dla dostaw?">${esc(st.pyt)}</textarea>
    <p class="ghint">To nie jest uwaga do sprawy. Pytania zbieramy przed spotkaniem bez Twojego nazwiska, prowadzący odpowiedzą na miejscu, a odpowiedzi trafią do notatki ze spotkania. Uwagę złożysz osobno.</p>
   </div><div class="actions"><button class="btn ghost gno">Anuluj</button><button class="btn primary">Zapisz mnie</button></div>${srcH(GM.urzad)}</div>`);
   const ta=c.querySelector('textarea');
   c.querySelectorAll('.gopt button').forEach(b=>b.onclick=()=>{st.forma=b.dataset.f;c.querySelectorAll('.gopt button').forEach(x=>x.classList.toggle('sel',x===b))});
   pending=t=>{ta.value=(ta.value.trim()?ta.value.trim()+' ':'')+t;say('Dopisałem to do pytania.')};
   const zamknij=()=>{pending=null;st.pyt=ta.value.trim();c.querySelector('.actions').remove();ta.readOnly=true;c.querySelector('.ghint').remove();c.querySelectorAll('.gopt button').forEach(b=>b.disabled=true)};
   c.querySelector('.gno').onclick=()=>act(async()=>{zamknij();await say('Nie zapisałem Cię. Nic nie zostało wysłane.');
    chips([{label:'Wróć do zapisu',go:()=>S.spotkanie(i,st)},{label:'Wróć do sprawy',go:()=>S.plan(i)}])});
   c.querySelector('.btn.primary').onclick=()=>act(async()=>{zamknij();await faceid();c.classList.add('done');
    const forma=O.online?st.forma:(O.forma||'na miejscu');
    await rez('clock','Zapis na spotkanie: '+P.nazwa,P.spotkanieKiedy+' · '+forma+(st.pyt?' · z pytaniem':''),{title:'Zapisano na spotkanie',source:GM.urzad,
     rows:[['Kiedy',P.spotkanieKiedy],['Gdzie',forma==='online'?'link przyjdzie w dniu spotkania':P.spotkanieGdzie],['Kalendarz','dodane do kalendarza'],['Przypomnienie',P.spotkaniePrzyp],...(st.pyt?[['Twoje pytanie','„'+esc(st.pyt)+'”, wysłane bez nazwiska']]:[])]},
     {typ:'Zapis na spotkanie',status:'zapisany, '+forma,do:GM.urzad,tresc:st.pyt?['Twoje pytanie do prowadzących (bez nazwiska)',esc(st.pyt)]:null,przebieg:[['Zapis potwierdzony',now()+', '+today(),'done'],['Przypomnienie',P.spotkaniePrzyp,'now'],['Spotkanie',P.spotkanieKiedy],['Notatka ze spotkania z odpowiedziami','do 14 dni po spotkaniu']],dalej:[['Wróć do sprawy',()=>S.plan(i)]]});
    chips([{label:P.uwagaLabel||'Złóż uwagę',go:()=>S.uwaga(i)},{label:'Na razie wystarczy',go:()=>say('Dobrze. Zapis znajdziesz w Mojej aktywności.')}]);
   });
  },
  async gRada(){
   await info({icon:'id',title:GM.radaTyt,source:'PKW, '+GM.bip+' (dane fikcyjne)',
    rows:GM.wladzaRows||[['Wójt',GM.wojt.kto],['Urzęduje',GM.wojt.kad],['Ostatnie wybory',GM.wojt.wybory],['Rada gminy',R.n+' radnych, '+R.wojta+' z komitetu wójta'],['Wybory do rady 2024',R.jeden],['Frekwencja 2024',R.frekw]],
    note:GM.wojt.limit});
   await S.radniLista(1);
  },
  async radniLista(zChipami){
   const W=R.wszyscy,moj=+R.okregNr,swoi=W.filter(r=>r.okreg===moj),inni=W.filter(r=>r.okreg!==moj),jeden=swoi.length===1;
   const os=(r,twoj)=>`<button class="it" data-r="${W.indexOf(r)}"><span class="gi">${svg('id')}</span><span class="x"><b>${r.kto}</b><small>${r.komitet.replace('KWW ','')}${twoj?'':' · okręg nr '+r.okreg}</small></span>${svg('chev')}</button>`;
   const c=await card(`<div class="ui list glist">${hd('id',R.nazwa+': '+W.length+' radnych')}
    <div class="gsek">${jeden?'Twój radny':'Twoi radni'} z okręgu nr ${moj}</div>${swoi.map(r=>os(r,1)).join('')}
    <details class="gdok grad"><summary>${svg('id')}<span>Pozostali radni · ${inni.length}</span>${svg('chev')}</summary>${inni.map(r=>os(r)).join('')}</details>
    <div class="note">${jeden?'W gminie do 20 tys. mieszkańców każdy okręg wybiera jednego radnego.':'W mieście powyżej 20 tys. mieszkańców okręg wybiera kilku radnych z różnych komitetów.'} Twój okręg wynika z adresu zameldowania. Dotknij osoby, żeby zobaczyć dyżur i głosowania.</div>${srcH('PKW, wyniki wyborów 2024 (dane fikcyjne)')}</div>`);
   c.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>act(()=>{addUser(W[+b.dataset.r].kto);S.radny(+b.dataset.r)}));
   if(zChipami)chips([{label:jeden?'Jak głosował mój radny?':'Jak głosowali radni z mojego okręgu?',go:S.radniGlosy},...(R.dzielnica?[{label:'Radni mojej dzielnicy',go:S.radniDz}]:[]),{label:jeden?'Napisz do radnego':'Napisz do radnych',go:()=>S.doRadnego(0)},{label:'Co się zmienia przy moim domu?',go:S.plan}]);
  },
  async radny(j){
   const r=R.wszyscy[j],twoj=r.okreg===+R.okregNr;
   await radnyKarta(r,{rada:R.nazwa,okreg:'nr '+r.okreg+(twoj?' (Twój okręg)':''),glosy:R.glosyTyt.map((t,k)=>[t,glosH(r,r.glosy[k])]),
    note:twoj?'':(r.p==='k'?'To radna z innego okręgu. Możesz do niej napisać, ale reprezentuje':'To radny z innego okręgu. Możesz do niego napisać, ale reprezentuje')+' przede wszystkim mieszkańców swojego okręgu.'});
   chips([{label:'Napisz wiadomość',go:()=>S.pisz(GM.uchwalaRadny,{kto:r.kto,okreg:'okręg nr '+r.okreg,pyt:'Co chcesz przekazać przed głosowaniem? Możesz wybrać albo napisać własnymi słowami.'})},{label:'Wróć do listy radnych',go:()=>S.radniLista(1)}]);
  },
  async radniGlosy(){
   const swoi=R.wszyscy.filter(r=>r.okreg===+R.okregNr);
   const ile=k=>{if(swoi.length===1)return glosH(swoi[0],swoi[0].glosy[k]);const c={};swoi.forEach(r=>c[r.glosy[k]]=(c[r.glosy[k]]||0)+1);return ['za','przeciw','wstrz'].filter(g=>c[g]).map(g=>(g==='wstrz'?'wstrz.':g)+' '+c[g]).join(' · ')};
   await info({icon:'doc',title:swoi.length===1?'Jak głosował '+swoi[0].kto:'Jak głosowali radni z Twojego okręgu',source:'Imienne wyniki głosowań, '+GM.bip,
    rows:R.glosyTyt.map((t,k)=>['<i class="gw">'+t+'</i>',ile(k)]),
    note:swoi.length>1?`<details class="gdok"><summary>${svg('id')}<span>Głosy imiennie</span>${svg('chev')}</summary><ul>${swoi.map(r=>`<li class="os"><b>${r.kto}</b><small>${r.glosy.map((g,k)=>R.glosyTyt[k].split(' (')[0].split(':')[0]+': <strong>'+glosH(r,g)+'</strong>').join('<br>')}</small></li>`).join('')}</ul></details>`:''});
   chips([{label:'Wróć do listy radnych',go:()=>S.radniLista(1)}]);
  },
  async radniDz(){
   const D=R.dzielnica;
   const c=await card(`<div class="ui list glist">${hd('id','Radni dzielnicy z Twojego okręgu')}<div class="rows">${rowsH([['Rada',D.rada],['Okręg',D.okreg]])}</div>
    ${D.osoby.map((r,k)=>`<button class="it" data-k="${k}"><span class="gi">${svg('id')}</span><span class="x"><b>${r.kto}</b><small>dyżur: ${r.dyzur}</small></span>${svg('chev')}</button>`).join('')}
    <div class="note">${D.note}</div>${srcH(D.rada+' (dane fikcyjne)')}</div>`);
   c.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>act(()=>{const r=D.osoby[+b.dataset.k];addUser(r.kto);
    radnyKarta(r,{rada:D.rada,okreg:D.okreg.split(' (')[0]+' (Twój okręg)'}).then(()=>chips([{label:'Napisz wiadomość',go:()=>S.pisz(GM.uchwalaRadny,{kto:r.kto,okreg:D.okreg.split(' (')[0],pyt:'Co chcesz przekazać? Możesz wybrać albo napisać własnymi słowami.'})},{label:'Wróć do radnych dzielnicy',go:S.radniDz}]))}));
   chips([{label:'Napisz do radnych dzielnicy',go:()=>S.pisz(GM.uchwalaRadny,{kto:'radni '+D.rada.replace('Rada','Rady')+', '+D.okreg.split(' (')[0],okreg:D.okreg.split(' (')[0],pyt:'Co chcesz przekazać? Możesz wybrać albo napisać własnymi słowami.',wielu:1})},{label:'Wróć do listy radnych',go:()=>S.radniLista(1)}]);
  },
  async gSesja(){
   await info({icon:'clock',title:GM.sesja.tytul,source:GM.bip,rows:[['Kiedy',GM.sesja.kiedy],['Gdzie',GM.sesja.gdzie]]});
   await say('Rada zajmie się trzema projektami. Wybierz, a wyjaśnię prostym językiem, co zmieniają.');
   const c=await card(`<div class="ui list glist">${hd('doc','Porządek obrad')}${GM.uchwaly.map((u,i)=>`<button class="it" data-i="${i}"><span class="gi">${svg('doc')}</span><span class="x"><b>${u.tytul}</b><small>${u.nr}</small></span>${svg('chev')}</button>`).join('')}${srcH(GM.bip+', projekty uchwał')}</div>`);
   c.querySelectorAll('.it').forEach(b=>b.onclick=()=>act(()=>{addUser(GM.uchwaly[+b.dataset.i].tytul);S.uchwala(+b.dataset.i)}));
   chips([{label:'Przypomnij i pokaż transmisję',go:()=>rez('bell','Przypomnienie o sesji rady',GM.sesja.kiedy,{title:'Przypomnienie ustawione',rows:[['Kiedy',GM.sesja.przyp],['Transmisja','link w powiadomieniu']]})}]);
  },
  async uchwala(i){
   const u=GM.uchwaly[i];
   await say(u.co);
   await info({icon:'doc',title:u.tytul,rows:[['Kogo dotyczy',u.kogo],...u.rows,['Opinia komisji',u.komisja]],note:dokumentyH(u)});
   await info({icon:'doc',title:'Za i przeciw',body:`<div class="gzp"><div><h4>Za</h4>${lista(u.za)}</div><div><h4>Przeciw</h4>${lista(u.przeciw)}</div></div>`,note:'Streszczam dokumenty, nie oceniam. Pełny tekst projektu jest na BIP.'});
   const inne=GM.uchwaly.map((x,j)=>j===i?null:{label:x.tytul,go:()=>S.uchwala(j)}).filter(Boolean);
   chips([{label:'Napisz do radnego przed sesją',go:()=>S.doRadnego(i)},...inne]);
  },
  async doRadnego(i){
   const RR=GM.rada;
   if(!RR.radni)return S.pisz(i,{kto:RR.radny.kto,okreg:RR.radny.okreg,pyt:`Co chcesz przekazać radnemu ${RR.radny.kto.split(' ')[0]}owi przed głosowaniem? Możesz wybrać albo napisać własnymi słowami.`});
   const ok='okręg nr '+RR.okregNr,D=RR.dzielnica,pyt='Co chcesz przekazać przed głosowaniem? Możesz wybrać albo napisać własnymi słowami.';
   await say(`Z okręgu nr ${RR.okregNr} do Rady Miasta jest ${RR.radni.length} radnych. Napiszesz do wszystkich naraz czy do jednej osoby?`);
   chips([{label:'Wszyscy radni z okręgu ('+RR.radni.length+')',go:()=>S.pisz(i,{kto:'radni z okręgu nr '+RR.okregNr+' ('+RR.radni.length+' osób)',okreg:ok,pyt,wielu:1})},
    ...RR.radni.map(r=>({label:r.kto+' · '+r.komitet.replace('KWW ',''),go:()=>S.pisz(i,{kto:r.kto,okreg:ok,pyt})})),
    ...(D?[{label:'Radni dzielnicy ('+D.osoby.length+')',go:()=>S.pisz(i,{kto:'radni '+D.rada.replace('Rada','Rady')+', '+D.okreg.split(' (')[0],okreg:D.okreg.split(' (')[0],pyt,wielu:1})}]:[])]);
  },
  // Wiadomość do radnych jak uwaga: własne słowa, podpowiedzi tylko pomocnicze, podgląd przed wysłaniem.
  async pisz(i,R,szkic){
   const U=GM.uchwaly,st=szkic||{t:'',u:i!=null?i:GM.uchwalaRadny};
   await say(szkic?'Popraw, co chcesz. Nic jeszcze nie zostało wysłane.':'Napisz własnymi słowami, co chcesz przekazać. Wiadomość od mieszkańca z konkretnym przykładem działa lepiej niż szablon. Podpowiedzi są pod polem.');
   const pod=k=>{const t=U[k].tytul;return [['Proszę głosować przeciw','Proszę o głosowanie przeciw projektowi „'+t+'” w obecnym kształcie.'],['Proszę o wyjaśnienie na sesji','Proszę o zadanie na sesji pytania o uzasadnienie projektu „'+t+'” i przekazanie mi odpowiedzi.'],['Popieram projekt','Popieram projekt „'+t+'” i proszę o głosowanie za.']]};
   const c=await card(`<div class="ui guw">${hd('mail',R.wielu?'Wiadomość do radnych':'Wiadomość do radnego')}<div class="body">
    <div class="gdo">Do: <b>${R.kto}</b></div>
    <label class="gl" for="rdS">Sprawa</label><select id="rdS" class="gsel">${U.map((x,k)=>`<option value="${k}"${k===st.u?' selected':''}>${x.tytul}</option>`).join('')}<option value="-1"${st.u===-1?' selected':''}>Inna sprawa</option></select>
    <label class="gl" for="rdT">Twoja wiadomość</label><textarea id="rdT" rows="5" placeholder="Np. mieszkam w Pana okręgu i chciałbym zwrócić uwagę na…">${esc(st.t)}</textarea><div class="gcnt"></div>
    <details class="gdok"><summary>${svg('info')}<span>Podpowiedzi (opcjonalnie)</span>${svg('chev')}</summary><div class="gpod"></div><div class="note">Podpowiedź dopisuje zdanie na końcu tekstu. Zmień je po swojemu.</div></details>
   </div><div class="actions"><button class="btn ghost gno">Anuluj</button><button class="btn primary">Podgląd</button></div>${srcH('przez skrzynkę rady w aplikacji')}</div>`);
   const ta=c.querySelector('textarea'),sel=c.querySelector('select'),cnt=c.querySelector('.gcnt'),ok=c.querySelector('.btn.primary'),gp=c.querySelector('.gpod');
   const odsw=()=>{const n=ta.value.trim().length;cnt.textContent=n<15?(n?'Napisz jeszcze kilka słów':''):n+' znaków';ok.disabled=n<15};
   const dopisz=t=>{ta.value=(ta.value.trim()?ta.value.trim()+' ':'')+t;odsw()};
   const podp=()=>{const k=+sel.value;gp.innerHTML=k<0?'<small class="ghint">Przy innej sprawie napisz, czego dotyczy i czego oczekujesz.</small>':pod(k).map(([l],j)=>`<button type="button" data-j="${j}">+ ${l}</button>`).join('');
    gp.querySelectorAll('button').forEach(b=>b.onclick=()=>{dopisz(pod(k)[+b.dataset.j][1]);b.disabled=true})};
   sel.onchange=()=>{st.u=+sel.value;podp()};ta.oninput=odsw;odsw();podp();
   pending=t=>{dopisz(t);say('Dopisałem to do wiadomości.')};
   const zamknij=()=>{pending=null;st.t=ta.value.trim();st.u=+sel.value;c.querySelector('.actions').remove();ta.readOnly=true;sel.disabled=true;c.querySelector('.gdok').remove()};
   c.querySelector('.gno').onclick=()=>act(async()=>{zamknij();await say('Anulowałem. Nic nie zostało wysłane.');
    chips([{label:'Wróć do pisania',go:()=>S.pisz(i,R,st)},{label:'Wróć do listy radnych',go:()=>S.radniLista(1)}])});
   ok.onclick=()=>act(async()=>{zamknij();const sprawa=st.u<0?'inna sprawa':U[st.u].tytul;
    await say('Tak będzie wyglądać wiadomość. Sprawdź ją przed wysłaniem.');
    await confirmCard({icon:'mail',title:'Podgląd wiadomości',source:'Do: '+R.kto+(R.wielu?'':', '+R.okreg)+', przez skrzynkę rady',
     body:`<div class="gpismo"><small>${today()} · do: ${R.kto}</small><b>${sprawa}</b><p>${esc(st.t).replace(/\n/g,'<br>')}</p><small>${OS.imie} ${OS.nazwisko}, ${rodz('mieszkanka','mieszkaniec')} ${R.okreg.replace('okręg','okręgu')}</small></div>`,
     rows:[['Sprawa',sprawa],['Odpowiedź','do Twojej skrzynki']],label:'Wyślij',
     onCancel:async()=>{await say('Nic nie zostało wysłane.');chips([{label:'Popraw wiadomość',go:()=>S.pisz(i,R,st)},{label:'Napisz od nowa',go:()=>S.pisz(i,R)},{label:'Wróć do listy radnych',go:()=>S.radniLista(1)}])},
     then:async()=>{await rez('mail','Wiadomość: '+sprawa,'do: '+R.kto,{title:'Wiadomość wysłana',rows:[['Do',R.kto],['Sprawa',sprawa],['Przypomnienie','jeśli nie odpowie w 14 dni']]},
      {typ:R.wielu?'Wiadomość do radnych':'Wiadomość do radnego',status:'wysłana, czeka na odpowiedź',do:R.kto,tresc:['Twoja wiadomość: '+sprawa,esc(st.t)],przebieg:[['Wysłana',now()+', '+today(),'done'],['Doręczona do skrzynki rady','ten sam dzień','done'],['Odpowiedź','do 14 dni, przyjdzie do skrzynki','now'],...(st.u<0?[]:[['Sesja rady',GM.sesja.kiedy]])],dalej:[['Lista radnych',()=>S.radniLista(1)]]});
      await say(st.u<0?'Odpowiedź przyjdzie do Twojej skrzynki.':R.wielu?'Po sesji pokażę Ci, jak głosował każdy z nich w tej sprawie.':'Po sesji pokażę Ci, jak głosował radny w tej sprawie.')}});
   });
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
   chips([{label:'Powiadamiaj o nowych naborach',go:()=>rez('bell','Powiadomienia o naborach do pracy','włączone',{title:'Powiadomienia włączone',rows:[['Co','nabory w urzędzie, szkołach i spółkach gminy'],['Wyniki naborów','też dostaniesz']]})},{label:'Na razie wystarczy'}]);
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
      await rez('check','Głos w budżecie obywatelskim','projektów: '+sel.length+' · wyniki w styczniu 2027',{title:'Głos oddany',source:B.edycja,rows:[['Projektów',String(sel.length)],['Wyniki','w styczniu 2027, dostaniesz powiadomienie']]},
       {typ:'Głosowanie w budżecie obywatelskim',status:'głos oddany',do:B.edycja,tabela:sel.map(n=>[n,'głosowanie trwa','—']),przebieg:[['Głos oddany',now()+', '+today(),'done'],['Zmiana głosu możliwa','do '+B.do,'now'],['Koniec głosowania',B.do],['Wyniki','styczeń 2027']],dalej:[['Zmień głos','gBO']]});
      await say(B.rodzina+' Wysłać im zaproszenie?');
      chips([{label:'Wyślij zaproszenie rodzinie',go:()=>rez('mail','Zaproszenie rodziny do głosowania',B.zaproszenie,{title:'Zaproszenia wysłane',rows:[['Do',B.zaproszenie],['Dzieci','zagłosują po Twojej zgodzie w swojej aplikacji']]})},{label:'Na razie wystarczy'}]);
     }});
   });
   wybierz();
  },
  async gZam(){
   await info({icon:'bell',title:'Zlecenia od miasta dla Twojej firmy',source:'Platforma e-Zamówienia, '+GM.bip+' (dane fikcyjne)',rows:GM.zamowienia.map(([n,k,w,t])=>[n+'<small class="gsm">'+k+', '+w+'</small>',t]),flag:GM.zamStat});
   await say('Do przeglądów instalacji gazowych zamawiający wymaga ważnych świadectw kwalifikacyjnych przez cały czas trwania umowy. Mogę sprawdzić Twoje.');
   chips([{label:'Sprawdź moje uprawnienia',go:()=>S.pKwalif()},{label:'Powiadamiaj o zamówieniach z mojej branży',go:()=>rez('bell','Powiadomienia o zamówieniach miasta','włączone',{title:'Powiadomienia włączone',rows:[['Co','zamówienia miasta i spółek miejskich, PKD 43.22.Z'],['Gdzie','Kraków i powiat krakowski']]})}]);
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
   await rez('doc','Projekt uchwały obywatelskiej złożony','BRG.0006.1.2026 · weryfikacja podpisów',{title:'Projekt złożony',source:'e-Doręczenia, dowód otrzymania',rows:[['Dowód otrzymania','godz. '+now()+', '+today()],['Numer','BRG.0006.1.2026']]},
    {typ:'Obywatelski projekt uchwały',status:'złożony, weryfikacja podpisów',do:GM.rada.nazwa,nr:'BRG.0006.1.2026',przebieg:[['Złożony',now()+', '+today(),'done'],['Weryfikacja podpisów','urząd, do 14 dni','now'],['Opinia komisji rady','styczeń 2027'],['Sesja rady','najpóźniej 3 miesiące po złożeniu']],zrodla:'Projekt uchwały, uzasadnienie, lista podpisów'});
   await info({icon:'clock',title:'Co dalej z projektem',body:kroki([['Złożony','dziś, '+(G.prog+17)+' podpisów','done'],['Weryfikacja podpisów','urząd, do 14 dni','now'],['Opinia komisji rady','styczeń 2027'],['Sesja rady','najpóźniej '+G.sesjaProjektu+', '+rodz('pełnomocniczka','pełnomocnik')+' może przedstawić projekt'],['Wynik głosowania','imiennie, każdy radny osobno']]),
    note:'Powiadomię Ciebie i wszystkie osoby, które się podpisały, o każdym kroku.'});
   chips([{label:GM.rada.radni?'Jak głosowali radni z mojego okręgu?':'Jak głosował mój radny w podobnych sprawach?',go:S.gRada},{label:'Na razie wystarczy',go:()=>say('Gotowe. Projekt znajdziesz w zakładce Moja gmina.')}]);
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
    then:()=>rez('mail','Pytanie do rady','czeka na odpowiedź',{title:'Pytanie opublikowane',rows:[['Podpis',rodz('Mieszkanka','Mieszkaniec')+' '+GM.jednostka],['Podpisało się pod pytaniem','powiadomię, gdy inni dołączą'],['Odpowiedź','do 14 dni, dostaniesz powiadomienie']]},{typ:'Pytanie do rady (pod pseudonimem)',status:'opublikowane, czeka na odpowiedź',do:GM.rada.nazwa,tresc:['Twoje pytanie',esc(q)],przebieg:[['Opublikowane',now()+', '+today(),'done'],['Inni mieszkańcy mogą się podpisać','do odpowiedzi','now'],['Odpowiedź rady','do 14 dni, publicznie']]})});
  },
  async debata(){
   const D=GM.glos.debata;
   await info({icon:'doc',title:'Debata o raporcie o stanie gminy',source:'Ustawa o samorządzie gminnym, '+GM.bip,
    rows:[['Raport',D.raport],['Debata',D.kiedy+', na sesji rady'],['Kto może zabrać głos','każdy mieszkaniec'],['Co trzeba',D.podpisy+' pod zgłoszeniem'],['Kiedy zgłosić','najpóźniej dzień przed sesją']],
    note:GM.wladza+' przedstawia raport co roku do 31 maja. Po debacie rada głosuje nad wotum zaufania.'});
   chips([{label:'Przypomnij, gdy raport będzie gotowy',go:()=>rez('bell','Przypomnienie o raporcie','do 31.05.2027',{title:'Przypomnienie ustawione',rows:[['Kiedy','gdy raport pojawi się na BIP (do 31.05.2027)'],['Potem','zbiórka 20 podpisów w aplikacji, kilka minut']]})},{label:'Na razie wystarczy'}]);
  },
  async kandyduj(){
   const W=GM.glos.wybory;
   await info({icon:'id',title:'Kandydowanie w gminie',source:'Kodeks wyborczy, PKW (dane gminy fikcyjne)',
    rows:W.rows||[['Najbliższe wybory',W.kiedy],['Do rady, Twój okręg',W.radny],['Na wójta',W.wojt],['Dieta radnego',W.dieta],['Sołtys',W.soltys]],
    flag:W.flag});
   chips([{label:'Przypomnij, gdy ruszy kalendarz wyborczy',go:()=>rez('bell','Przypomnienie o wyborach',W.przyp,{title:'Przypomnienie ustawione',rows:[['Kiedy',W.przyp],['Dostaniesz','plan krok po kroku i terminy']]})},{label:W.praca[0],go:()=>say(W.praca[1])}]);
  }
 });
 const _route=route;
 route=function(t){
  if(pending)return _route(t);
  const n=norm(t);
  if(GM.bo&&/budze[tc]\w* obywatel|projekt\w* w (mojej )?dzielnic/.test(n))return S.gBO();
  const z=(GM.inne||[]).findIndex(x=>x.re.test(n));if(z>=0)return S.plan(z+1);
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
