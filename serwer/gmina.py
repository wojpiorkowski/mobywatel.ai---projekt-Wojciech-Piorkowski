# -*- coding: utf-8 -*-
"""Moja gmina: fikcyjne dane gminy dla osób z pokazu (odpowiednik mockup/gmina.js).
Odczyty są w dane.py (r_moja_gmina, r_plan_miejscowy, ...), akcje w akcje.py."""
from persony import P

GMINY = {
    'ewa': dict(
        nazwa='Gmina Lipowiec', dop='Gminy Lipowiec', typ='gmina wiejska, powiat lubelski', mieszkancy=8940,
        solectwo='Lipowiec Kolonia', soltys='Halina Mazur', urzad='Urząd Gminy Lipowiec', bip='BIP Gminy Lipowiec',
        wojt=dict(kto='Zbigniew Kordas', od=2006, kadencja='5. kadencja (od 2006 r.)', wybory_2024='jedyny kandydat, 68% głosów „tak”',
                  limit='obecna kadencja jest ostatnią (limit dwóch kadencji liczonych od 2018 r.), chyba że Sejm zniesie limit'),
        rada=dict(radnych=15, z_komitetu_wojta=13, komitet='KWW Razem dla Lipowca', okregi_z_jednym_kandydatem='9 z 15 (2024)', frekwencja_2024='49%',
                  twoj_radny=dict(kto='Stanisław Wójcik', okreg='okręg nr 4', komitet='KWW Razem dla Lipowca', dyzur='pierwszy poniedziałek miesiąca, 16:00–17:00, urząd gminy, pok. 12',
                                  glosowania=[['Przystąpienie do zmiany planu „Pola Południowe” (03.2025)', 'za'], ['Podwyżka opłaty za odpady do 39 zł (12.2025)', 'za'],
                                              ['Nagrania posiedzeń komisji (09.2026, wniosek radnej spoza klubu wójta)', 'przeciw']])),
        plan=dict(nazwa='Zmiana planu miejscowego „Pola Południowe”', nr='RPP.6721.4.2025', odleglosc='380 m od domu', powierzchnia='42 ha',
                  teraz='tereny rolnicze (R), grunty III klasy', projekt='produkcja, składy i magazyny (P/U), budynki do 18 m',
                  dojazd='ul. Szkolną, obok Szkoły Podstawowej w Lipowcu', skad='na wniosek właściciela gruntów (spółka prawa handlowego)',
                  wylozenie='12.10–18.12.2026', spotkanie='25.11.2026, godz. 17:00, sala GOK', uwagi_do='18.12.2026',
                  za=['ok. 120 miejsc pracy według wnioskodawcy', 'ok. 1,1 mln zł rocznie z podatku od nieruchomości (ok. 4% dochodów gminy)', 'dojazd do drogi wojewódzkiej bez wjazdu do centrum'],
                  przeciw=['prognoza: ok. 60 ciężarówek na dobę ulicą Szkolną', 'praca magazynów także nocą, hałas przy domach', 'utrata 42 ha gruntów rolnych III klasy'],
                  zrodla='uzasadnienie projektu, prognoza oddziaływania na środowisko, uwagi mieszkańców z etapu wniosków'),
        sesja=dict(kiedy='26.11.2026, godz. 10:00', gdzie='sala GOK, transmisja na BIP'),
        uchwaly=[
            dict(id='budzet', tytul='Projekt budżetu na 2027 r.', nr='projekt uchwały budżetowej, pierwsze czytanie',
                 co='wydatki 57,3 mln zł przy dochodach 54,1 mln zł, deficyt 3,2 mln zł pokryje kredyt', kogo='wszystkich mieszkańców; fundusz sołecki Lipowca Kolonii 38 tys. zł',
                 rows=[['Dochody', '54,1 mln zł'], ['Wydatki', '57,3 mln zł'], ['Deficyt', '3,2 mln zł, kredyt'], ['Największa inwestycja', 'droga Lipowiec Kolonia – Wola, 2,4 mln zł'],
                       ['Szkoła w Lipowcu', 'termomodernizacja, 1,1 mln zł'], ['Promocja i biuletyn', '420 tys. zł (w 2026 r. 410 tys. zł)']],
                 za=['droga przy Lipowcu Kolonii, o którą mieszkańcy prosili od 2019 r.', 'termomodernizacja szkoły obniży rachunki o ok. 90 tys. zł rocznie'],
                 przeciw=['dług wzrośnie do ok. 34% dochodów, podobne gminy mają 18%', 'wydatki na promocję rosną, a na pomoc społeczną bez zmian'],
                 komisja='komisja budżetowa: opinia pozytywna, 4 za, 1 przeciw', zrodla='projekt uchwały budżetowej, opinia RIO, protokół komisji budżetowej'),
            dict(id='podatek', tytul='Stawki podatku od nieruchomości na 2027 r.', nr='projekt uchwały nr XXVII/2026',
                 co='stawki rosną średnio o 9%; domy mieszkalne z 1,05 do 1,15 zł za m², grunty pod domami z 0,58 do 0,63 zł za m²', kogo='właścicieli domów, mieszkań, działek i firm',
                 rows=[['Twój dom', '128 m², +12,80 zł rocznie'], ['Twoja działka', '1 150 m², +57,50 zł rocznie'], ['Razem dla Ciebie', '+70,30 zł rocznie (z 656 zł do 726 zł)'], ['Do budżetu gminy', 'ok. +410 tys. zł rocznie']],
                 za=['inflacja i wyższe koszty utrzymania dróg i szkół', 'stawki nadal niższe niż maksymalne ustawowe'],
                 przeciw=['drugi wzrost z rzędu (w 2026 r. +7%)', 'dla firm ponad dwa razy więcej niż dla domów, co może odstraszać inwestorów'],
                 komisja='komisja budżetowa: opinia pozytywna, 3 za, 2 przeciw', zrodla='projekt uchwały, uzasadnienie, obwieszczenie MF o maksymalnych stawkach, Twoja decyzja podatkowa'),
            dict(id='dzialka', tytul='Sprzedaż działki 214/3 bez przetargu', nr='projekt uchwały nr XXVIII/2026',
                 co='sprzedaż działki 0,21 ha przy ul. Polnej właścicielowi przyległej działki, bez przetargu, za 86 tys. zł według wyceny rzeczoznawcy', kogo='nikogo bezpośrednio; dotyczy majątku gminy',
                 rows=[['Działka', '214/3, 0,21 ha, ul. Polna'], ['Cena', '86 tys. zł (wycena rzeczoznawcy z 08.2026)'], ['Nabywca', 'właściciel przyległej działki (firma usługowa)'], ['Tryb', 'bezprzetargowy, poprawa zagospodarowania sąsiedniej nieruchomości']],
                 za=['działka jest wąska i sama trudno ją zagospodarować', 'tryb przewiduje ustawa o gospodarce nieruchomościami'],
                 przeciw=['bez przetargu nikt inny nie może zaoferować więcej', 'wycena sprzed planowanej zmiany planu w okolicy'],
                 komisja='komisja rewizyjna: brak opinii, sprawa nie trafiła na posiedzenie', zrodla='projekt uchwały, operat szacunkowy (do wglądu w urzędzie)')],
        liczby=[['Dochody na mieszkańca', '5 820 zł', '5 640 zł'], ['Zadłużenie (% dochodów)', '31%', '18%'], ['Promocja i biuletyn na mieszkańca', '46 zł', '19 zł'],
                ['Inwestycje (% wydatków)', '14%', '21%'], ['Oświata (% wydatków)', '38%', '36%']],
        umowy=[['Drogbud sp. z o.o.', '4,82 mln zł', '3 umowy na drogi, przetargi, po 1 ofercie'], ['Eko-Wywóz sp. z o.o.', '2,10 mln zł', 'odbiór odpadów, przetarg, 2 oferty'],
               ['Lipa Media', '186 tys. zł', 'biuletyn „Wieści Lipowieckie”, zamówienie z wolnej ręki'], ['Kancelaria radcy prawnego', '96 tys. zł', 'obsługa urzędu, zapytanie ofertowe']],
        darczyncy=dict(komitet='KWW Razem dla Lipowca (wybory 2024)', suma='48 600 zł od 21 osób',
                       najwieksze=[['Członek zarządu Drogbud sp. z o.o.', '12 000 zł'], ['Właściciel Lipa Media', '8 000 zł'], ['Pozostałe 19 wpłat', '28 600 zł']]),
        nabory=[['Inspektor ds. zamówień publicznych', 'Urząd Gminy', 'do 14.11.2026'], ['Nauczyciel matematyki', 'SP w Lipowcu', 'do 20.11.2026'],
                ['Kierowca, operator koparki', 'Gminny Zakład Komunalny sp. z o.o.', 'do 30.11.2026']],
        nabory_statystyka='w 2026 r. 11 naborów, w 7 z nich zgłosiła się jedna osoba',
        inicjatywa=dict(podpisow=200, komitet=['Piotr Sadowski', 'Agnieszka Lis'], sesja_najpozniej='3 miesiące od złożenia'),
        debata=dict(raport='Raport o stanie gminy za 2026 r.', kiedy='czerwiec 2027', podpisow=20),
        wybory=dict(kiedy='wiosna 2029', radny='25 podpisów wyborców z okręgu', wojt='150 podpisów (gmina do 20 tys. mieszkańców)', dieta='ok. 900 zł miesięcznie',
                    soltys='zebranie wiejskie po wyborach samorządowych, kandydata zgłasza się na zebraniu'),
    ),
}

def G():
    """Gmina bieżącej osoby; ValueError, gdy w pokazie nie ma jej danych (narzędzie zwróci błąd z wyjaśnieniem)."""
    g = GMINY.get(P()['id'])
    if not g: raise ValueError('W tej wersji pokazu dane gminy ma tylko Ewa Nowak (gmina Lipowiec). Powiedz, że ta funkcja jest jeszcze niedostępna dla tej gminy.')
    return g
