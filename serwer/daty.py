# -*- coding: utf-8 -*-
"""Ruchome „dziś”, te same zasady co mockup/daty.js. Dane są pisane tak, jakby dziś był 15.11.2026 (BAZA).
Serwer liczy wszystko w tym kalendarzu (dane.DZIS = BAZOWY), a na granicy z modelem i aplikacją przesuwa daty
o pełne tygodnie, które minęły od BAZY (najdalej do 28.02.2027): wyniki narzędzi naprzod(), argumenty od modelu wstecz().
Data z „@” (np. @31.12) to termin ustawowy i się nie przesuwa. Do testów: zmienna środowiska DZIS=2026-12-20."""
import datetime, os, re

BAZA, KONIEC = datetime.date(2026, 11, 15), datetime.date(2027, 2, 28)
OD, DO = BAZA - datetime.timedelta(days=90), BAZA + datetime.timedelta(days=100)

def _dzis():
    try: return datetime.date.fromisoformat(os.environ.get('DZIS', ''))
    except ValueError: return datetime.date.today()
DZIS = min(max(_dzis(), BAZA), KONIEC)                         # prawdziwe dziś (w granicach)
O = datetime.timedelta(days=(DZIS - BAZA).days // 7 * 7)      # przesunięcie danych, w pełnych tygodniach
BAZOWY = DZIS - O                                              # ten sam dzień w kalendarzu danych

SW = {(1, 1), (1, 6), (5, 1), (5, 3), (8, 15), (11, 1), (11, 11), (12, 24), (12, 25), (12, 26)}
def roboczy(x): return x.weekday() < 5 and (x.month, x.day) not in SW
def na_roboczy(x):
    while not roboczy(x): x += datetime.timedelta(days=1)
    return x

MG = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia']
MM = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
ML = ['styczniu', 'lutym', 'marcu', 'kwietniu', 'maju', 'czerwcu', 'lipcu', 'sierpniu', 'wrześniu', 'październiku', 'listopadzie', 'grudniu']
R = re.compile(r'(@?)(?:(\d{4})-(\d{2})-(\d{2})|(?<![\d.,])(\d{1,2})\.(\d{2})(?:\.(\d{4}))?(?!\d|\.\d)|(?<![\d,])(\d{1,2}) (' + '|'.join(MG) +
               r')(?: (\d{4}))?|(' + '|'.join(MM + ML) + r') (\d{4}))')

def _dzien(x, kier):
    if kier > 0:
        if not OD <= x <= DO: return x
        r = x + O
        if not O or not roboczy(x) or roboczy(r) or r == DZIS: return r
        n = na_roboczy(r)
        return r if r < DZIS <= n else n  # przeszłe zostaje przeszłym
    return x - O if OD + O <= x <= DO + O else x

def przesun(s, kier=1):
    """Przesuwa daty w tekście: kier=1 z kalendarza danych na prawdziwy, kier=-1 z powrotem."""
    if not isinstance(s, str) or not O and '@' not in s: return s
    srodek = BAZA if kier > 0 else DZIS
    def bez_roku(dz, mc): return min((datetime.date(y, mc, dz) for y in (2025, 2026, 2027, 2028)), key=lambda x: abs((x - srodek).days))
    def z(m):
        at, iy, im, id_, d, mc, y, gd, gm, gy, mn, my = m.groups()
        if at: return m.group(0)[1:] if kier > 0 else m.group(0)
        try:
            if iy: x = datetime.date(int(iy), int(im), int(id_)); f = lambda r: r.isoformat()
            elif d:
                x = datetime.date(int(y), int(mc), int(d)) if y else bez_roku(int(d), int(mc))
                f = lambda r: (str(r.day) if len(d) == 1 else '%02d' % r.day) + '.%02d' % r.month + ('.%d' % r.year if y else '')
            elif gd:
                i = MG.index(gm); x = datetime.date(int(gy), i + 1, int(gd)) if gy else bez_roku(int(gd), i + 1)
                f = lambda r: '%d %s' % (r.day, MG[r.month - 1]) + (' %d' % r.year if gy else '')
            else:
                t = ML if mn in ML else MM; x = datetime.date(int(my), t.index(mn) + 1, 15)
                f = lambda r: '%s %d' % (t[r.month - 1], r.year)
        except ValueError: return m.group(0)
        r = _dzien(x, kier)
        return m.group(0) if r == x else f(r)
    return R.sub(z, s)

def naprzod(o, kier=1):
    """To samo dla całych struktur (wyniki narzędzi, karty)."""
    if isinstance(o, str): return przesun(o, kier)
    if isinstance(o, dict): return {k: naprzod(v, kier) for k, v in o.items()}
    if isinstance(o, (list, tuple)): return type(o)(naprzod(v, kier) for v in o)
    return o
def wstecz(o): return naprzod(o, -1)

# terminy ustawowe w kalendarzu danych: po przesunięciu naprzod() wypadają dokładnie w prawdziwym terminie
def rata():
    """Najbliższa rata podatku od nieruchomości (15.03, 15.05, 15.09, 15.11): (termin ISO, 'IV rata 2026')."""
    for y in (2026, 2027, 2028):
        for i, m in enumerate((3, 5, 9, 11)):
            n = na_roboczy(datetime.date(y, m, 15))
            if n >= DZIS: return (n - O).isoformat(), '%s rata %d' % (['I', 'II', 'III', 'IV'][i], y)
def zus():
    """Najbliższy termin składek ZUS (20. dzień miesiąca): (termin ISO, 'MM.RRRR' za poprzedni miesiąc)."""
    y, m = DZIS.year, DZIS.month
    n = na_roboczy(datetime.date(y, m, 20))
    if n < DZIS:
        y, m = (y + 1, 1) if m == 12 else (y, m + 1)
        n = na_roboczy(datetime.date(y, m, 20))
    py, pm = (y - 1, 12) if m == 1 else (y, m - 1)
    return (n - O).isoformat(), '%02d.%d' % (pm, py)
