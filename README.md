# eSave Application Scaffold

This repository provides a production-ready **starter scaffold** for the eSave app with a split architecture:

- **Angular** frontend (`apps/web`)
- **Node.js + Express + TypeScript** backend (`apps/api`)
- Multi-provider OCR/vision abstraction for:
  - Google Vision API
  - AWS Textract
  - Azure Form Recognizer
  - OpenAI vision models
- Data services:
  - PostgreSQL for structured metadata
  - S3-compatible object storage (AWS S3/MinIO/GCP-compatible patterns)

## Monorepo structure

```text
apps/
  web/                # Angular application scaffold
  api/                # Node.js backend scaffold
infra/
  docker-compose.yml  # local PostgreSQL + MinIO dependencies
scripts/
  bootstrap.sh        # setup helper
```

## Quick start

1. Start infra services:

   ```bash
   docker compose -f infra/docker-compose.yml up -d
   ```

2. Copy environment templates:

   ```bash
   cp apps/api/.env.example apps/api/.env
   cp apps/web/src/environments/environment.ts apps/web/src/environments/environment.local.ts
   ```

3. Install dependencies:

   ```bash
   cd apps/api && npm install
   cd ../web && npm install
   ```

4. Run API and web apps independently:

   ```bash
   cd apps/api && npm run dev
   cd apps/web && npm start
   ```

## Integration approach

The backend uses strategy-style provider interfaces:

- `OCRProvider` (`google-vision`, `aws-textract`, `azure-form-recognizer`)
- `VisionModelProvider` (`openai-vision`)

Each provider currently includes method stubs and wiring, enabling phased implementation while keeping API contracts stable.

## Suggested next implementation tasks

1. Implement credential loading per cloud provider in `apps/api/src/config`.
2. Replace stubs in `providers/*.provider.ts` with SDK calls.
3. Add persistence for extracted fields in PostgreSQL with migrations.
4. Add authentication/authorization middleware.
5. Build upload + extraction UX screens in Angular.
