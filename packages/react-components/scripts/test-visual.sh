#!/usr/bin/env sh
# Runs visual regression tests inside the pinned Playwright Docker image.
# Extra arguments are passed to Vitest, e.g. `--update` or a story file path.
set -e
cd "$(dirname "$0")/.."

docker compose -f docker-compose.visual.yml run --rm \
  -e HOST_UID="$(id -u)" -e HOST_GID="$(id -g)" \
  visual sh -c '
    npm ci --no-audit --no-fund --loglevel=error || exit $?
    status=0
    npx vitest --project=visual --watch=false \
      --reporter=default --reporter=./scripts/visual-reporter.ts \
      "$@" || status=$?
    # Files are created as root in the container; give them back to the host user
    chown -R "$HOST_UID:$HOST_GID" src .vitest 2>/dev/null || true
    exit $status
  ' sh "$@"
