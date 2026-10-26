# mObywatel.ai: projekt Wojciecha Piórkowskiego

Zgłoszenie na konkurs https://mobywatel.ai/ (termin: 30 listopada 2026). Punkt wyjścia to prototyp Janusza Cieszyńskiego
(licencja MIT, pierwszy commit na `main` to jego kod bez zmian). Konkurs wymaga **klikalnego prototypu, działającego bez logowania**,
plus opisu (30–4000 znaków): jaki problem, dla kogo, co jest najważniejsze. Ocena: czy wersja jest prostsza, wygodniejsza,
bardziej dostępna albo załatwia więcej spraw niż prototyp bazowy. Polskie modele (Bielik, PLLuM) są mile widziane.

Rozmawiamy, piszemy komentarze, nazwy i commity **po polsku**, tak jak w kodzie bazowym.

## Uruchomienie i sprawdzanie

- `python3 serwer/server.py` (port 8790, albo `python3 serwer/server.py 8080`), potem http://127.0.0.1:8790/aplikacja.
  Brak zależności: sama biblioteka standardowa Pythona 3.9+, front to czysty HTML/CSS/JS bez budowania.
- `python3 testy/smoke.py`: test dymny, uruchamia serwer bez kluczy API na wolnym porcie i sprawdza najważniejsze adresy.
  Uruchamia go też hook `SessionStart` (`.claude/hooks/session-start.sh`).
- Bez kluczy aplikacja działa w trybie skryptowym (gotowe scenariusze z `mockup/scenarios.js`), jak na mobywatel.ai.
  Asystent AI wymaga `OPENAI_API_KEY` (domyślnie), `ANTHROPIC_API_KEY` z `PROVIDER=anthropic` albo `PROVIDER=zgodny`
  z `OPENAI_BASE_URL` i `MODEL` (dowolne API zgodne z OpenAI Chat Completions, np. Bielik w vLLM/Ollama). Pełna lista zmiennych w README.md.
- Zrzut ekranu frontu: Playwright (`require('playwright')`, `chromium.launch()`), widok telefonu ok. 420×860.
- Wywołania modeli są płatne i idą z kluczy właściciela. Nie wywołuj `/api/agent`, `/api/stt`, `/api/tts` w pętlach ani testach bez pytania.

## Architektura

**Serwer (`serwer/`)**, `server.py`: `ThreadingHTTPServer`, serwuje pliki z `mockup/` i API:
- `GET /api/health` (które funkcje są dostępne), `GET /api/i18n[.js]?lang=xx` (słownik interfejsu),
- `POST /api/agent`: jedna tura asystenta. **Bezstanowy**: klient wysyła całą historię (`messages`), stan świata (`stan`),
  `osoba` i `jezyk`; dostaje nowe `messages`, `stan`, `events` (do narysowania) i `czeka` (`potwierdzenie`, `odpowiedz`, `qr`, `koniec`).
- `POST /api/stt`, `/api/tts`: mowa (ElevenLabs, a bez klucza lub po błędzie OpenAI), `/api/znak/*`: przekazywanie danych „znakiem mObywatela”
  między urządzeniami (pamięć procesu), `/api/i18n/brak`: rejestr brakujących tłumaczeń.
- Plik `serwer/BLOKADA` wyłącza klucze (awaryjny wyłącznik dla pokazu).

`agent.py`: pętla agenta i system prompt (`SYSTEM`). `llm()` wybiera dostawcę: `claude()` (Anthropic Messages), `openai()` (Responses API),
`zgodny()` (Chat Completions). Wewnętrzny format wiadomości to format Anthropic (bloki `tool_use`/`tool_result`), tłumaczony dla OpenAI.
Po odpowiedzi modelu `popraw_jezyk`/`bez_myslnikow` szlifują polszczyznę.

Narzędzia (`narzedzia.py`, JSON Schema) dzielą się na trzy grupy:
- `ODCZYTY`: tylko czytają fikcyjne rejestry, implementacje w `dane.py` (funkcje `r_<nazwa>` zwracają `(dane_dla_modelu, karta_dla_aplikacji)`);
- `AKCJE`: skutki prawne lub finansowe, w `akcje.py` przez dekorator `@akcja(nazwa)` z parą `podglad(a, s)` (karta potwierdzenia)
  i `wykonaj(a, s)`. Wykonanie następuje **wyłącznie** po potwierdzeniu (Face ID) w aplikacji; gdy się nie da, `podglad` rzuca `ValueError`
  z wyjaśnieniem dla modelu;
- `UI`: sterują interfejsem (np. przekazanie danych, pytania z opcjami).
Nowe narzędzie = definicja w `narzedzia.py` + implementacja w `dane.py` lub `akcje.py` + ewentualnie obsługa zdarzenia w `mockup/agent.js`.

`persony.py`: cztery fikcyjne osoby (`marta` domyślna, `jan`, `ewa`, `kacper`) z dokumentami, rodziną, pojazdami, należnościami, skrzynką.
`P()` zwraca dane osoby bieżącego wątku. `dane.py` ma stałą datę świata `DZIS = 2026-10-18`. Odpowiedniki osób po stronie frontu: `mockup/osoby.js`.

`wiedza.py`: wyszukiwanie BM25 (bez zależności) po kartach usług gov.pl i biznes.gov.pl w `serwer/wiedza/*.jsonl` (ok. 62 MB, nie edytować ręcznie).
`tlumacz.py`: 15 języków poza polskim. Interfejs tłumaczą słowniki `serwer/i18n/*.json` (teksty jako szablony z `{0}` w miejscu liczb);
rozmowę z asystentem tłumaczy w locie model OpenAI z pomocą `serwer/glosariusz/`.

**Front (`mockup/`)**: `index.html` (aplikacja na telefonie) ładuje kolejno `i18n.js`, `osoby.js`, `sylwetki.js` (rysunki aut),
`core.js` (podstawy, czat, karty), `variants.js` (układy portfela, `?uklad=`), `scenarios.js` (tryb skryptowy), `agent.js`
(tryb AI, nadpisuje trasy skryptowe, gdy `/api/health` zgłasza agenta), `znak-kod.js` i `znak.js` (znak mObywatela).
`komputer.html` (`/komputer`) to ekran „komputera” do odbierania danych znakiem. Przydatne parametry: `?osoba=jan`, `?lang=en`, `?uklad=karuzela`.
Pliki są wersjonowane w `index.html` (`core.js?v=21`): po zmianie pliku podbij numer, żeby przeglądarki nie trzymały starej wersji.

## Zasady

- Wszystkie dane są fikcyjne. Nigdy nie wpisuj prawdziwych danych osobowych ani nie podłączaj prawdziwych rejestrów.
- Nie usuwaj informacji o autorze ani `LICENSE` (MIT, Janusz Cieszyński). Licencja nie obejmuje godła RP, oznaczeń mObywatela
  (`mockup/assets/icon-mobywatel.svg`, `logo-mobywatel*`, `card-*`, `strip-*`, `mdowod-ekran.png`), zdjęć osób (`foto-*.jpg`)
  ani tekstów z gov.pl; przy publikacji zgłoszenia trzeba to mieć na uwadze.
- Serwer nie ma logowania ani limitów i używa kluczy właściciela: nie wystawiaj go publicznie bez ochrony. Klucze tylko w `.env` (w `.gitignore`).
- Styl kodu jak w bazie: zwięzły Python i JS, polskie nazwy, krótkie komentarze tłumaczące „dlaczego”.
