# -*- coding: utf-8 -*-
"""Buduje statyczną wersję prototypu (tryb skryptowy, bez serwera i bez AI) do podglądu online, np. na GitHub Pages.
Kopiuje mockup/, a słowniki interfejsu z serwer/i18n/ zamienia na pliki i18n/<lang>.js, bo na statycznym hostingu
nie ma /api/i18n.js. Uruchomienie: python3 testy/strona_statyczna.py [katalog]   (domyślnie _site)"""
import json, os, shutil, sys
KORZEN = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def main():
    cel = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(KORZEN, '_site'))
    shutil.rmtree(cel, ignore_errors=True)
    shutil.copytree(os.path.join(KORZEN, 'mockup'), cel)
    os.makedirs(os.path.join(cel, 'i18n'))
    kat = os.path.join(KORZEN, 'serwer', 'i18n')
    for f in sorted(os.listdir(kat)):
        if not f.endswith('.json'): continue
        d = json.load(open(os.path.join(kat, f), encoding='utf-8'))
        with open(os.path.join(cel, 'i18n', f[:-5] + '.js'), 'w', encoding='utf-8') as w:
            w.write('window.I18N=%s;window.__i18nStart&&window.__i18nStart();' % json.dumps(d, ensure_ascii=False))
    # ścieżka względna, bo strona nie leży w katalogu głównym domeny (np. /<repozytorium>/ albo /pr-preview/pr-7/)
    p = os.path.join(cel, 'i18n.js'); s = open(p, encoding='utf-8').read()
    stare = "'<script src=\"/api/i18n.js?lang='+L+'\"><\\/script>'"
    if stare not in s: sys.exit('Nie znalazłem wczytywania słownika w i18n.js: popraw testy/strona_statyczna.py')
    open(p, 'w', encoding='utf-8').write(s.replace(stare, "'<script src=\"i18n/'+L+'.js\"><\\/script>'"))
    open(os.path.join(cel, '.nojekyll'), 'w').close()   # GitHub Pages bez przetwarzania przez Jekyll
    print('Strona statyczna w %s' % cel)

if __name__ == '__main__':
    main()
