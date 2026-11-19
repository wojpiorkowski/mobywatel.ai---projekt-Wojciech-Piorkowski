# -*- coding: utf-8 -*-
"""Budżet gminy z pliku (mockup/dane/budzet-*.json): ten sam plik czyta aplikacja, więc asystent odpowiada z liczb,
które widać na karcie budżetu. Dane fikcyjne. Wyszukiwanie pozycji jak w mockup/budzet.js (rdzenie słów, bez zależności)."""
import json, os, re, unicodedata
from persony import P

PLIKI = {'jan': 'budzet-krakow-2026.json', 'ewa': 'budzet-lipowiec-2026.json'}
KATALOG = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'mockup', 'dane')
STOP = set('ile jak jaki jaka jakie czy co gdzie kiedy jest sa na w z do od za po dla moje moja mojej mojego nasze nasza miasto miasta gmina gminy '
           'budzet budzecie budzetu wydaje wydaja wydatki wydatkow kosztuje koszt kosztowac zl roku rok tym tego'.split())

def wczytaj():
    plik = PLIKI.get(P()['id'])
    if not plik: raise ValueError('W tej wersji pokazu plik budżetu mają tylko gminy Jana (Kraków) i Ewy (Lipowiec).')
    with open(os.path.join(KATALOG, plik), encoding='utf-8') as f: return json.load(f)

def norm(t):
    t = unicodedata.normalize('NFD', (t or '').lower().replace('ł', 'l'))
    return ''.join(c for c in t if unicodedata.category(c) != 'Mn')

def szukaj(b, pytanie, ile=6):
    """Pozycje z pliku (wydatki, dochody, inwestycje) pasujące do pytania, najlepsze pierwsze."""
    n = norm(pytanie)
    sl = [w[:max(4, min(6, len(w) - 2))] for w in re.split(r'[^a-z0-9]+', n) if len(w) >= 3 and w not in STOP]
    wyn = []
    for rodzaj, lista in (('wydatki', b['wydatki']), ('dochody', b['dochody']), ('inwestycje', b['inwestycje'])):
        for x in lista:
            slowa = re.split(r'[^a-z0-9]+', norm(' '.join(str(x.get(k) or '') for k in ('nazwa', 'krotko', 'slowa', 'co', 'gdzie'))))
            pkt = sum(1 for s in sl if any(w.startswith(s) for w in slowa))
            if pkt: wyn.append((pkt, rodzaj, x))
    wyn.sort(key=lambda z: -z[0])
    return wyn[:ile]

def bez_slow(a): return [{k: v for k, v in x.items() if k not in ('slowa', 'blisko')} for x in a]

def podsumowanie(b):
    D = sum(x['plan'] for x in b['dochody']); W = sum(x['plan'] for x in b['wydatki'])
    Dw = sum(x['wyk'] for x in b['dochody']); Ww = sum(x['wyk'] for x in b['wydatki'])
    return dict(dochody_plan=round(D, 2), wydatki_plan=round(W, 2), wynik=round(D - W, 2), dochody_wykonane=round(Dw, 2), wydatki_wykonane=round(Ww, 2),
                wydatki_majatkowe_plan=round(sum(x['majatkowe'] for x in b['wydatki']), 2), dlug_koniec_roku=b['historia'][-1]['dlug'], mieszkancy=b['mieszkancy'])

def kw(b, x):
    """Kwota z pliku w czytelnej skali, jak na karcie w aplikacji: 3,02 mld zł, 420 mln zł, 750 tys. zł."""
    z = x * (1e6 if b['jednostka'] == 'mln zł' else 1e3)
    f = lambda v, m: ('{:,.%df}' % m).format(v).replace(',', ' ').replace('.', ',')
    return f(z / 1e9, 2) + ' mld zł' if z >= 1e9 else f(z / 1e6, 0 if z >= 1e8 else 1) + ' mln zł' if z >= 1e6 else f(z / 1e3, 0) + ' tys. zł'
