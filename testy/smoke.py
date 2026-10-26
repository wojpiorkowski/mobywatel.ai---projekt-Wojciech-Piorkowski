# -*- coding: utf-8 -*-
"""Test dymny: uruchamia serwer na wolnym porcie bez kluczy API (tryb skryptowy) i sprawdza, czy odpowiadają
najważniejsze adresy. Uruchomienie: python3 testy/smoke.py   (kod wyjścia 0 = wszystko działa)"""
import json, os, socket, subprocess, sys, tempfile, time, urllib.request
KORZEN = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ADRESY = ['/api/health', '/aplikacja', '/', '/komputer', '/style.css', '/api/i18n?lang=en']

def wolny_port():
    with socket.socket() as s: s.bind(('127.0.0.1', 0)); return s.getsockname()[1]

def main():
    port = wolny_port()
    env = {k: v for k, v in os.environ.items() if not k.endswith('_API_KEY')}   # bez kluczy: nic nie trafia do płatnych API
    env.update(HOST='127.0.0.1', PORT=str(port), AGENT_LOG=os.path.join(tempfile.gettempdir(), 'mobywatel-smoke.log'))
    srv = subprocess.Popen([sys.executable, os.path.join(KORZEN, 'serwer', 'server.py')], env=env, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
    bledy = []
    try:
        for _ in range(50):
            try: urllib.request.urlopen('http://127.0.0.1:%d/api/health' % port, timeout=1); break
            except OSError: time.sleep(0.2)
        for a in ADRESY:
            try:
                with urllib.request.urlopen('http://127.0.0.1:%d%s' % (port, a), timeout=10) as r:
                    tresc = r.read()
                    if a.startswith('/api/'): json.loads(tresc)
                    print('ok   %s' % a)
            except Exception as e:
                bledy.append(a); print('BŁĄD %s: %s' % (a, e))
    finally:
        srv.terminate(); srv.wait(5)
    if bledy: print(srv.stderr.read().decode('utf-8', 'replace')[-2000:])
    return 1 if bledy else 0

if __name__ == '__main__': sys.exit(main())
