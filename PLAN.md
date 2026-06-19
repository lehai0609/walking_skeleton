# Rung 0 — Walking Skeleton: Plan

**Goal:** Prove the deploy pipeline (git → GitHub → Vercel → public HTTPS URL). The page is throwaway; the pipeline is the payload.

**Done when:** A public `*.vercel.app` URL opens a static CV page on someone else's phone, and `git push` auto-redeploys.

## Decisions (locked)

| Topic | Decision |
|---|---|
| Domain | None — ship on free `*.vercel.app` (already HTTPS) |
| Scaffold | `create-next-app` defaults: TypeScript, App Router, Tailwind, ESLint, `src/`, alias `@/*` |
| Content | Static CV page, hardcoded placeholders (real values added later) |
| CV sections | Header (name/title/contact links) · Summary · Experience (2–3) · Education (1–2) · Skills |
| UI libs | Tailwind only — no shadcn yet |
| Deploy | GitHub integration, **public** repo, auto-deploy on push |
| Tooling | Node 24, npm 11, git, `gh` (authed as `lehai0609`) — all present |

## Steps

1. **Scaffold** — `npx create-next-app@latest` with the defaults above, into `D:\GitHub\walking_skeleton`.
2. **Build the page** — replace `src/app/page.tsx` with a single centered CV card: 5 sections, Tailwind styling, placeholder content with `TODO` markers.
3. **Strip boilerplate** — remove the default Next.js starter content/assets.
4. **Git init + commit** — `git init`, initial commit.
5. **Push to GitHub** — `gh repo create walking_skeleton --public --source=. --push`.
6. **Vercel (manual, by you)** — import the repo at vercel.com → Deploy. Defaults work for Next.js. *(I can't log into your Vercel account.)*
7. **Verify** — open the live URL, confirm it renders; make a trivial edit + push to confirm auto-redeploy.

## Out of scope (deliberately)

Custom domain · shadcn · real CV data (added later) · any backend/logic · analytics · SEO/meta polish.

## Notes

- No `CONTEXT.md` / ADRs — a static CV page has no domain model or hard-to-reverse decisions worth recording.
- Real CV content: you'll provide; I'll swap into the placeholders.
