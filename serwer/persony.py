# -*- coding: utf-8 -*-
"""Osoby demonstracyjne (fikcyjne). Każde zapytanie do agenta działa w kontekście jednej osoby:
ustaw(id) w wątku obsługującym zapytanie, P() zwraca jej dane."""
import threading

def pesel(rrmmdd, seria, plec):
    """Poprawny numer PESEL: data (miesiąc z przesunięciem dla roczników 2000+), 3 cyfry serii, cyfra płci, suma kontrolna."""
    s = rrmmdd + seria + str(plec)
    w = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]
    return s + str((10 - sum(int(c) * w[i] for i, c in enumerate(s)) % 10) % 10)

# Program MON „wGotowości”: 4 moduły po ok. 8 godzin, w jednostkach wojskowych, głównie w weekendy.
KURSY_W = lambda miasto, a, b, c: [
    dict(id='MED-2410', rodzaj='medyczny', termin='24.10.2026 (sobota), 9:00–17:00', miejsce='jednostka wojskowa, ' + a, wolne=6),
    dict(id='MED-0811', rodzaj='medyczny', termin='08.11.2026 (niedziela), 9:00–17:00', miejsce='jednostka wojskowa, ' + b, wolne=2),
    dict(id='PRZ-1411', rodzaj='przetrwania', termin='14.11.2026 (sobota), 8:00–16:00', miejsce='jednostka wojskowa, ' + c, wolne=11),
    dict(id='BEZ-0711', rodzaj='podstawowy', termin='07.11.2026 (sobota), 9:00–17:00', miejsce='jednostka wojskowa, ' + a, wolne=14),
    dict(id='CYB-1511', rodzaj='cyberhigiena', termin='15.11.2026 (niedziela), 9:00–17:00', miejsce='jednostka wojskowa, ' + a, wolne=40)]

# Ulgi z Karty Dużej Rodziny: ustawowe i ogólnopolskie (lokalnych partnerów nie zmyślamy, odsyłamy do wyszukiwarki Emp@tii).
KDR_ULGI = lambda miasto: [['PKP Intercity', 'rodzice 37% (miesięczny 49%), od 2 osób z KDR dodatkowo 30%'],
                           ['Pociągi regionalne', 'rodzice 37% na bilety jednorazowe, 49% na miesięczne'],
                           ['Parki narodowe', 'wstęp bezpłatny'], ['Orlen', '8 gr/l, paliwa premium 10 gr/l'],
                           ['Paszport', 'rodzic 70 zł zamiast 140 zł, dzieci 15 lub 35 zł'],
                           ['Partnerzy w Twoim mieście (%s)' % miasto, 'muzea, baseny, kina: wyszukiwarka na empatia.gov.pl']]

PERSONY = {}

# ---------------------------------------------------------------- Jan Wiśniewski: przedsiębiorca z Krakowa, ojciec trójki
PERSONY['jan'] = dict(
    id='jan', plec='M', dop='Jana', okolica='Kraków-Podgórze', miasto='Kraków',
    osoba=dict(imie='Jan', nazwisko='Wiśniewski', pesel=pesel('830512', '034', 5), data_urodzenia='12.05.1983', miejsce_urodzenia='Kraków',
               adres='ul. Wielicka 28 m. 15, 30-552 Kraków (Podgórze)', telefon='+48 512 345 678', email='jan.wisniewski@poczta.pl'),
    rodzina=[dict(rola='żona', imie='Agnieszka Wiśniewska', pesel=pesel('850918', '112', 8), mobywatel=True),
             dict(rola='syn', imie='Michał Wiśniewski', pesel=pesel('110304', '221', 3), wiek=15, paszport='ważny do 2028'),
             dict(rola='córka', imie='Hanna Wiśniewska', pesel=pesel('152709', '318', 2), wiek=11, paszport='ważny do 2027'),
             dict(rola='syn', imie='Igor Wiśniewski', pesel=pesel('192116', '401', 7), wiek=7, paszport='brak')],
    rodzina_opis='żona Agnieszka, dzieci: Michał (15), Hanna (11), Igor (7)',
    drugi_rodzic='Agnieszka Wiśniewska', drugi_rodzic_dop='Agnieszki Wiśniewskiej', nazwisko_dziecka=('Wiśniewska', 'Wiśniewski'), rodzice='Jan i Agnieszka Wiśniewscy',
    szpital='Szpital Uniwersytecki, Kraków', zameldowanie_krotko='ul. Wielicka 28 m. 15', usc='USC Kraków',
    dokumenty={'dowod': dict(nazwa='Dowód osobisty', numer='CDE 778812', wazny_do='2030-05-20', organ='Prezydent Miasta Krakowa', e_dowod=True),
               'paszport': dict(nazwa='Paszport', numer='EZ 1180442', wazny_do='2031-02-11', organ='Wojewoda Małopolski'),
               'prawo_jazdy': dict(nazwa='Prawo jazdy', numer='00871/12/1261', wazny_do='2033-09-30', kategorie='B, C'),
               'kdr': dict(nazwa='Karta Dużej Rodziny', numer='2021/044 117', wazny_do='bezterminowo')},
    paszport_opis='EZ 1180442, ważny do 11.02.2031', dzieci_paszporty='Michał i Hanna mają paszporty, Igor nie',
    pojazdy=[dict(nr='KR 7G210', marka='Skoda Octavia Combi 2.0 TDI', model='Skoda Octavia Combi', dop='Octavii', kolor='granatowy', rok=2020, vin='TMBJJ7NX5LY061208',
                  oc_do='2027-03-02', ubezpieczyciel='PZU', polisa='1021 448 120', oc_auto=True, badanie_do='2027-01-15', licznik='142 880 km (15.01.2026)'),
             dict(nr='KR 2M884', marka='Volkswagen Transporter T6.1 2.0 TDI', model='Volkswagen Transporter', dop='Transportera', kolor='biały', rok=2022, vin='WV1ZZZ7HZNH004512',
                  oc_do='2026-11-03', ubezpieczyciel='Allianz', polisa='AZ 77 301 455', badanie_do='2027-05-10', licznik='96 400 km (10.05.2026)', firmowy=True,
                  leasing='VW Leasing')],
    pojazdy_dawne=['Leasing Volkswagen Transporter KR 2M884', 'właściciel: VW Leasing, umowa do 05.2027'],
    wydzial_komunikacji='Urząd Miasta Krakowa, wydział komunikacji',
    urzad='Urząd Miasta Krakowa, ul. Wielicka 28a', urzad_paszportowy='Małopolski Urząd Wojewódzki, Kraków',
    naleznosci=[dict(id='ZUS-1026', tytul='Składki społeczne ZUS za 10.2026 (działalność)', kwota=1926.76, termin='2026-11-20', wierzyciel='ZUS, Twój rachunek składkowy',
                     kanal='zus', metody=[]),
                dict(id='POD-NIER-IV', tytul='Podatek od nieruchomości, IV rata 2026', kwota=186.0, termin='2026-11-16', wierzyciel='Urząd Miasta Krakowa',
                     kanal='przelew', metody=[])],
    mandaty=[],
    skrzynka=[dict(id='US-1', krotko='Wyjaśnienia VAT dla Urzędu Skarbowego', od='Urząd Skarbowy Kraków-Podgórze', temat='Wezwanie do złożenia wyjaśnień (czynności sprawdzające, VAT)', doreczono='2026-10-16', termin='2026-10-28',
                   tresc='Urząd prosi o wyjaśnienie, dlaczego w korekcie JPK_V7M za 08.2026 zwiększono podatek naliczony o 4 140 zł z faktury Hurtowni Instal-Mix (KSeF), oraz o dowód zapłaty i protokół dostawy.', przeczytana=True),
              dict(id='CEIDG-1', od='CEIDG', temat='Potwierdzenie zmiany wpisu', doreczono='2026-01-19', termin=None, tresc='Zmiana formy opodatkowania na podatek liniowy od 01.2026 wpisana do CEIDG 19.01.2026.', przeczytana=True)],
    pliki=[dict(nazwa='FV 2026/08/412 Instal-Mix.pdf', opis='materiały instalacyjne, 18 000,00 zł netto, VAT 4 140,00 zł (KSeF)'),
           dict(nazwa='Potwierdzenie przelewu Instal-Mix.pdf', opis='zapłata 22 140,00 zł, 12.08.2026'),
           dict(nazwa='JPK_V7M 08.2026 korekta.xml', opis='korekta deklaracji, wysłana 06.10.2026'),
           dict(nazwa='Umowa leasingu Transporter.pdf', opis='leasing operacyjny, VW Leasing, do 05.2027')],
    pesel_stan='zastrzeżony',
    pesel_hist=[['18.02.2025', 'zastrzeżenie (w aplikacji)']],
    pesel_spr=[['03.10.2026', 'Santander Bank Polska, wynik: zastrzeżony'], ['11.10.2026', 'Play (P4), wynik: zastrzeżony']],
    sprawy=[['Czynności sprawdzające VAT, US Kraków-Podgórze', 'czeka na Twoją odpowiedź do 28.10.2026'],
            ['Wniosek o paszport dla Hanny', 'zakończona 06.2022'], ['Karta Dużej Rodziny dla Igora', 'zakończona 02.2021']],
    emerytura=dict(skladki='386 940 zł', subkonto='72 410 zł', wiek=65, tabela={65: 4380, 67: 5200, 70: 6740}, krok=0.09),
    punkty=dict(punkty=0, limit=24, wykroczenia=[]),
    recepty=[dict(osoba='Igor (syn)', lek='Zyrtec, krople doustne', wazna_do='30.10.2026', kod='5117')],
    kursy=KURSY_W('Kraków-Podgórze', 'Kraków', 'Wieliczka', 'Myślenice'),
    wybory=dict(obwod='nr 312', lokal='Szkoła Podstawowa nr 34, ul. Wielicka 40, Kraków', krotko='SP nr 34, ul. Wielicka 40'),
    firma=dict(ceidg=dict(nazwa='Wiśniewski Instalacje Jan Wiśniewski', nip='6792345679', od='03.2012', pkd='43.22.Z', status='aktywna', vat='czynny podatnik VAT', podatek='liniowy od 01.2026'), krs=[],
               rows=[['CEIDG', 'Wiśniewski Instalacje, aktywna od 03.2012'], ['NIP', '679 234 56 79'], ['PKD', '43.22.Z, instalacje wodno-kanalizacyjne, cieplne, gazowe i klimatyzacyjne'], ['VAT', 'czynny podatnik'], ['Podatek', 'liniowy od 01.2026']]),
    ksiegi=[dict(numer='KR1P/00123456/4', opis='lokal mieszkalny, ul. Wielicka 28 m. 15', wlasnosc='współwłasność z Agnieszką Wiśniewską')],
    partnerzy_kdr=KDR_ULGI('Kraków'),
    bilety=[dict(przewoznik='PKP Intercity', trasa='Kraków Główny → Warszawa Centralna', kiedy='27.10.2026, 6:05', miejsce='wagon 12, miejsce 71', pociag='EIP 1000 „Pendolino"')],
    konto='PL •• 9031', liczba_osob=5,
    zalatwienia_extra=[],
)

# ---------------------------------------------------------------- Ewa Nowak: nauczycielka z fikcyjnej gminy wiejskiej Lipowiec pod Lublinem, kilka lat przed emeryturą
PERSONY['ewa'] = dict(
    id='ewa', plec='K', dop='Ewy', okolica='Lipowiec Kolonia (gmina Lipowiec, powiat lubelski)', miasto='Lipowiec',
    osoba=dict(imie='Ewa', nazwisko='Nowak', pesel=pesel('690203', '128', 4), data_urodzenia='03.02.1969', miejsce_urodzenia='Lublin',
               adres='ul. Szkolna 7, Lipowiec Kolonia, gmina Lipowiec', telefon='+48 698 112 054', email='ewa.nowak@poczta.pl'),
    rodzina=[dict(rola='mąż', imie='Krzysztof Nowak', pesel=pesel('660417', '055', 9), mobywatel=True),
             dict(rola='syn', imie='Paweł Nowak', pesel=pesel('940611', '233', 1), wiek=32),
             dict(rola='córka', imie='Magdalena Nowak', pesel=pesel('970822', '149', 6), wiek=29),
             dict(rola='syn', imie='Tomasz Nowak', pesel=pesel('010705', '310', 3), wiek=25),
             dict(rola='mama', imie='Halina Kamińska', pesel=pesel('420119', '077', 0), wiek=84)],
    rodzina_opis='mąż Krzysztof, mama Halina (84 lata)',
    drugi_rodzic='Krzysztof Nowak', drugi_rodzic_dop='Krzysztofa Nowaka', nazwisko_dziecka=('Nowak', 'Nowak'), rodzice='Ewa i Krzysztof Nowakowie',
    szpital='SPSK nr 1, Lublin', zameldowanie_krotko='ul. Szkolna 7, Lipowiec Kolonia', usc='USC w Lipowcu',
    dokumenty={'dowod': dict(nazwa='Dowód osobisty', numer='AXK 552190', wazny_do='2026-12-05', organ='Wójt Gminy Lipowiec', e_dowod=False),
               'paszport': dict(nazwa='Paszport', numer='EA 2209174', wazny_do='2019-08-30', organ='Wojewoda Lubelski', uniewazniony=True),
               'prawo_jazdy': dict(nazwa='Prawo jazdy', numer='03311/98/0663', wazny_do='bezterminowo, wymiana do 19.01.2033', kategorie='B'),
               'kdr': dict(nazwa='Karta Dużej Rodziny', numer='2019/302 881', wazny_do='bezterminowo')},
    paszport_opis='EA 2209174, nieważny od 30.08.2019', dzieci_paszporty='dzieci są dorosłe',
    pojazdy=[dict(nr='LU 5521P', marka='Fiat Panda 1.2', model='Fiat Panda', dop='Pandy', kolor='czerwony', rok=2016, vin='ZFA31200003A71188',
                  oc_do='2027-06-14', ubezpieczyciel='Link4', polisa='L4 0071 226 908', oc_auto=True, badanie_do='2026-11-08', licznik='88 140 km (08.11.2025)')],
    pojazdy_dawne=['Zgłoszenie nabycia pojazdu Fiat Panda LU 5521P', 'zakończona 08.2021'],
    wydzial_komunikacji='Starostwo Powiatowe w Lublinie, wydział komunikacji',
    urzad='Urząd Gminy Lipowiec, ul. Lubelska 1', urzad_paszportowy='Lubelski Urząd Wojewódzki, Lublin',
    naleznosci=[dict(id='POD-NIER-IV', tytul='Podatek od nieruchomości, IV rata 2026', kwota=164.0, termin='2026-11-16', wierzyciel='Urząd Gminy Lipowiec',
                     kanal='eplatnosci', metody=['BLIK'])],
    mandaty=[],
    skrzynka=[dict(id='ZUS-2', od='ZUS', temat='Informacja o stanie konta ubezpieczonego', doreczono='2026-10-15', termin=None,
                   tresc='Wiek emerytalny osiągniesz 03.02.2029. Wniosek o emeryturę (EMP) złożysz najwcześniej 30 dni przed tą datą, czyli od 04.01.2029. Kapitał początkowy: 98 700 zł.', przeczytana=False),
              dict(id='UM-1', od='Urząd Gminy Lipowiec', temat='Decyzja w sprawie podatku od nieruchomości na 2026 r.', doreczono='2026-02-10', termin=None, tresc='Podatek na 2026 r.: 656 zł w 4 ratach.', przeczytana=True)],
    pliki=[dict(nazwa='Potwierdzenie upoważnienia od mamy (IKP).pdf', opis='Halina Kamińska upoważniła Cię w IKP do wglądu w jej konto, od 05.2024'),
           dict(nazwa='Zaświadczenie o zatrudnieniu SP Lipowiec.pdf', opis='nauczycielka dyplomowana, od 09.1993')],
    pesel_stan='niezastrzeżony', pesel_hist=[], pesel_spr=[['20.09.2026', 'PKO BP, wynik: niezastrzeżony']],
    sprawy=[['Dowód osobisty AXK 552190', 'traci ważność 05.12.2026, złóż wniosek do 05.11.2026'],
            ['Upoważnienie od mamy, Haliny Kamińskiej, w IKP', 'aktywne od 05.2024'], ['Karta Dużej Rodziny', 'zakończona 03.2019']],
    emerytura=dict(skladki='512 300 zł', subkonto='41 900 zł', kapital='98 700 zł', wiek=60, tabela={60: 3980, 62: 4730, 65: 6120, 67: 7280}, krok=0.09),
    punkty=dict(punkty=0, limit=24, wykroczenia=[]),
    upowaznienia_ikp=['Halina Kamińska'],  # osoby, które upoważniły użytkowniczkę w IKP
    recepty=[dict(osoba='Ewa', lek='Bisocard 5 mg, tabletki', wazna_do='14.01.2027', kod='3304'),
             dict(osoba='Halina (mama)', lek='Polpril 5 mg, kapsułki', wazna_do='02.11.2026', kod='9182'),
             dict(osoba='Halina (mama)', lek='Atoris 20 mg, tabletki', wazna_do='02.11.2026', kod='9182')],
    kursy=KURSY_W('Lublin-Śródmieście', 'Lublin', 'Świdnik', 'Puławy'),
    wybory=dict(obwod='nr 3', lokal='Szkoła Podstawowa w Lipowcu, ul. Szkolna 2', krotko='SP w Lipowcu, ul. Szkolna 2'),
    firma=dict(ceidg='brak działalności gospodarczej', krs=[], rows=[['CEIDG', 'brak działalności'], ['KRS', 'brak funkcji w podmiotach']]),
    ksiegi=[dict(numer='LU1I/00098765/1', opis='dom jednorodzinny z działką, ul. Szkolna 7, Lipowiec Kolonia', wlasnosc='wspólność majątkowa z Krzysztofem Nowakiem')],
    partnerzy_kdr=KDR_ULGI('Lublin'),
    bilety=[dict(przewoznik='PKP Intercity', trasa='Lublin Główny → Warszawa Centralna', kiedy='30.10.2026, 8:12', miejsce='wagon 4, miejsce 26', pociag='IC 3812 „Bystrzyca"')],
    konto='PL •• 2276', liczba_osob=2,
    zalatwienia_extra=[['Emerytura', 'wiek emerytalny 03.02.2029, wniosek złożysz od 04.01.2029']],
)

# Moja praca (e-teczka) Ewy; odpowiednik mockup/praca.js
PERSONY['ewa']['praca'] = dict(
    pracodawca='Szkoła Podstawowa w Lipowcu', stanowisko='nauczycielka matematyki', awans='nauczycielka dyplomowana', od='01.09.1993', staz='33 lata', wymiar='pełny etat',
    historia=[['09.1993–08.2001', 'SP nr 24 w Lublinie, nauczycielka'], ['09.2001–obecnie', 'SP w Lipowcu, nauczycielka, od 2011 r. dyplomowana'], ['07.2015–08.2015', 'Obóz językowy „Lato”, umowa zlecenia']],
    kwalifikacje=[['Magister matematyki', 'UMCS, 1993'], ['Studia podyplomowe z informatyki', 'UMCS, 2005'], ['Kierownik wycieczek szkolnych', 'kurs, 2018'], ['Pierwsza pomoc', 'ważne do 15.03.2027']],
    wolontariat=[['Świetlica w Lipowcu Kolonii', 'korepetycje z matematyki, 46 h w 2026 r.'], ['OSP Lipowiec', 'festyn rodzinny, 12 h w 2026 r.']],
    oferta=dict(firma='Lingwa Plus sp. z o.o.', co='korepetycje online z matematyki', umowa='umowa zlecenia', stawka='70 zł za godzinę, ok. 20 h miesięcznie',
                rejestry='KRS aktywna od 2015 r., bez upadłości; Biała lista VAT: czynny, rachunek na liście; brak wpisów w rejestrach dłużników',
                wyliczenie='1400 zł brutto; bez składek emerytalnej i rentowej (etat powyżej minimalnej); zdrowotna 126 zł; zaliczka PIT 134 zł; ok. 1140 zł na rękę (uproszczone)'))

DOMYSLNA = 'jan'
_ctx = threading.local()
def ustaw(osoba):
    _ctx.p = PERSONY.get(osoba or DOMYSLNA, PERSONY[DOMYSLNA])
    return _ctx.p
def P():
    p = getattr(_ctx, 'p', None)
    return p if p is not None else PERSONY[DOMYSLNA]
