#!/usr/bin/env bash
# Create a public GitHub repo and push this folder.
# Requires: gh auth login   (or a connected GitHub account)
set -euo pipefail
cd "$(dirname "$0")/.."
NAME="${1:-payout-street}"
if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: https://cli.github.com/"
  echo "Then: gh auth login"
  exit 1
fi
gh auth status
gh repo create "$NAME" \
  --public \
  --source=. \
  --remote=origin \
  --push \
  --description "Payout Street Night Circuit — deploy package for implementation agents"
echo
echo "Agent pull:"
echo "  git clone $(gh repo view --json url -q .url).git"
echo "  cd $NAME"
echo "  python3 -m http.server 4173"
