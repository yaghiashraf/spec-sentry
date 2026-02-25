# SpecSentry 🛡️

**SpecSentry** is an API Contract Guard and Changelog Factory for OpenAPI specs. It is built as a Next.js (App Router) frontend paired entirely with a GitHub Repository backend using GitHub Actions and GitHub API.

## Features
- **PR Guard:** Fails CI and annotates PRs with changelogs if breaking API changes are detected.
- **Scheduled Watch (Paid):** Periodically fetches external OpenAPI URLs, diffs them against known snapshots, and opens a PR if there are upstream changes.
- **Vercel UI:** A Next.js dashboard to view tracked API contracts and changelogs.

## Architecture & Constraints
- Backend: GitHub files (`/config`, `/specs`, `/reports`, `/snapshots`) and GitHub Actions.
- Frontend: Vercel Next.js App Router reading via Octokit.
- Single License Check: App verifies signed `LICENSE_KEY` using edge-compatible `jose`.

---

## 🚀 Setup Instructions

### 1. Fork & Clone
Fork this repository and clone it to your machine.

### 2. Generate Your License (Optional / Paid Tier)
The app runs in **Demo Mode** by default. To unlock the Paid Mode, generate a license locally:
```bash
node tools/generate-license.js
```
This will output a `NEXT_PUBLIC_LICENSE_PUB_KEY` and a `LICENSE_KEY`.
Save these to a `.env.local` file:
```env
NEXT_PUBLIC_LICENSE_PUB_KEY={"kty":"RSA","n":"...","e":"AQAB"}
LICENSE_KEY=eyJhbGciOiJSUzI1NiJ9...
```

### 3. Vercel Deployment
- Import your forked repository into Vercel.
- Configure Environment Variables in Vercel:
  - `NEXT_PUBLIC_LICENSE_PUB_KEY`
  - `LICENSE_KEY`
  - `GITHUB_TOKEN` (A Classic PAT with `repo` and `workflow` scopes to allow the Next.js app to read repository contents).

### 4. Setup GitHub Actions
Two workflows are provided in `.github/workflows`:
1. **`pr-guard.yml`**: Automatically runs when `specs/**` are updated in a PR.
2. **`scheduled-watch.yml`**: Runs on a schedule. **For this to work, you must add `LICENSE_KEY` as a GitHub Actions Repository Secret.**

### 5. Running Locally
```bash
npm install
npm run dev
```

### 6. Testing the PR Guard
In Demo mode, you can test the GitHub action locally by checking out a new branch and modifying `specs/current.yaml` (introducing a breaking change), then pushing it and opening a PR.

---

## Folder Structure
- `config/specs.yml`: List of tracked URLs for scheduled diffs.
- `specs/`: Local OpenAPI specifications monitored by PR Guard.
- `src/`: Next.js frontend code.
- `snapshots/`: Where the scheduled watcher saves the history of external specs.
- `reports/`: Markdown and JSON outputs of `oasdiff`.
