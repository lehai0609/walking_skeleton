# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status: pre-scaffold

This repo currently contains only [PLAN.md](PLAN.md). The Next.js app has **not** been scaffolded yet. Read `PLAN.md` first — it holds the locked decisions for Rung 0 ("walking skeleton") and the build steps. Until `package.json` exists, the commands below are intended-state, not yet runnable.

## What this is

Rung 0 of a learning ladder (see the parent `js-projects.md` ladder this descends from): a deliberately throwaway static **CV page** whose real purpose is to prove the **deploy pipeline** (git → GitHub → Vercel → public HTTPS URL), not the page itself. Done = a public `*.vercel.app` URL renders the page on someone's phone and `git push` auto-redeploys.

Keep it a skeleton. No backend, no logic, no domain model, no custom domain, no shadcn. Resist scope creep — later rungs add features; this one only earns the pipeline.

## Stack

Next.js (App Router) · TypeScript · Tailwind · ESLint · `src/` layout · import alias `@/*`. Deploy via Vercel's GitHub integration (auto-deploy on push to the public repo `lehai0609/walking_skeleton`).

## Commands (after scaffolding)

- `npm run dev` — local dev server
- `npm run build` — production build (also what Vercel runs)
- `npm run lint` — ESLint
- `npm start` — serve the production build

No test setup is planned for this rung.

## Deploy notes

- Push to GitHub auto-triggers a Vercel deploy; no `vercel` CLI is installed or needed.
- The initial Vercel project import is a manual dashboard step done by the user (requires their Vercel login) — Claude cannot perform it.
- CV content is placeholder until the user supplies real values; swap into the placeholders in `src/app/page.tsx`.
