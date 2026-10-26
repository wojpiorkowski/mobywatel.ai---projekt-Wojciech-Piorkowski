#!/bin/bash
# Start sesji Claude Code: projekt nie ma zależności (sama biblioteka standardowa Pythona),
# więc tylko sprawdzamy, czy kod się kompiluje i czy serwer wstaje (test dymny bez kluczy API).
set -euo pipefail
cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}"
python3 -m py_compile serwer/*.py testy/*.py
python3 testy/smoke.py > /dev/null && echo "mObywatel.ai: serwer wstaje (python3 testy/smoke.py OK)" || echo "mObywatel.ai: UWAGA, test dymny nie przechodzi (python3 testy/smoke.py)"
find serwer testy -name __pycache__ -type d -prune -exec rm -rf {} +
