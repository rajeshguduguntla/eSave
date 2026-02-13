#!/usr/bin/env bash
set -euo pipefail

echo "[eSave] Starting infrastructure..."
docker compose -f infra/docker-compose.yml up -d

echo "[eSave] Installing API dependencies..."
(cd apps/api && npm install)

echo "[eSave] Installing Web dependencies..."
(cd apps/web && npm install)

echo "[eSave] Bootstrap complete."
