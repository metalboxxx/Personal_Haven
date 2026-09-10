# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The owner's personal website: an Astro static site holding a small number of long project writeups, plus the planning research the design came from. Three pages (Home, About, Contact) and four writeups at `/work/<slug>`. Home is also the work index — there is no separate `/work` page.

Built and deployed as static output; no server, no database, no client-side JavaScript.

## Organisation

```
docs/
  user_personality.md          Who the site belongs to, and the voice rules for copy
  planning/front-end/
    00-design-summary.md       Condensed design conclusions — build defaults, anti-patterns
    01-design-principles.md    Sourced research behind 00
    02-sites-public-figures.md Survey of 10 real personal sites
    03-sites-individuals.md    Survey of 11 more
    04-project-inventory.md    What exists in the owner's other projects and what may be claimed
    05-prd.md                  THE SPEC — scope, architecture, content rules, acceptance criteria
  history/                     Dated session logs
src/
  data/site.ts                 Name, email, location, links — the single config
  data/hero-series.json        Series driving the hero line field
  content/work/*.md            The four writeups
  pages/                       index, about, contact, work/[slug]
  layouts/Base.astro           Shell, head, header, footer, theme
  components/HeroField.astro   Build-time SVG hero
  styles/global.css            Tokens, type scale, both themes
```

## How the parts connect

**`05-prd.md` is authoritative.** Everything built should trace to it; if code and PRD disagree, one of them is a bug. It in turn rests on the documents beneath it, and each carries a distinct kind of authority:

- **`04-project-inventory.md` is the only source for factual claims about the owner's projects.** Every number on the site comes from it. It also records which decisions were his versus joint — §7.3 of the PRD turns that into a writing rule.
- **`user_personality.md` governs voice.** Read it before writing any copy in his name.
- **`00-design-summary.md` supplies the build defaults** the PRD references rather than restates. Its §6 anti-pattern list has one recorded exception, the animated hero, defined in PRD §8.
- **`05-prd.md` §10.1 lists what must never be published.** Check it before putting anything from another repo on the page.
- Both `04` and `user_personality.md` carry **corrections logs** at the bottom recording claims that turned out to be wrong. Read those before trusting either file.

`src/data/site.ts` is the single config: name, email, location, links. Nothing else hardcodes them — adding a `links` entry renders it on `/contact` on its own.

## Writing the work writeups

Rules for `src/content/work/*.md`. They came from him marking up drafts of his own CV and these pages on 2026-09-10, and they override the instinct to explain.

**Sections, in this order:** `What it is` → `Constraint` → `Decision` → `What I rejected` → `Outcome`. `What it is` is new and non-negotiable: a reader cannot evaluate a constraint on a thing they have not been told about. Four sentences at most — what it is, what it does, what state it is in.

**The altitude test, which is the rule most drafts fail.** A detail earns its place if it changed how the project turned out, or explains why. If its only use is reproducing a fix, it belongs in that project's `docs/history/`, where it already is. Concretely, off the page: file paths, flag names, config keys, one-line root causes, question numbers, per-item verification checklists.

**Keep the number that *is* the finding; drop the statistics that support it.** `n=28, p=0.37` stays when the p-value is the result. `+4.75%` does not need its t-test and its Mann-Whitney beside it.

**No justification tail on a fact.** The rejected alternative gets argued once, under `What I rejected`, and nowhere else. A sentence that states a number and then defends the choice behind it is two sentences in the wrong sections.

**One claim per paragraph. Name tools, do not describe capabilities. Under ~700 words of body text** — before the 2026-09-10 rewrite they ran 729–1,270, and that was the complaint. `cointegration-screen` sits highest because PRD §7.4's AI disclosure lives only there.

**Voice comes from `docs/user_personality.md`**, including its banned list ("passionate", "leveraging", any adjective a number would do better). Attribution comes from PRD §7.3 and `04` §1 — anything the inventory marks as Claude's stays off the page, and no sentence claims a decision he did not make.

**What does *not* transfer from his CV.** He strips negative results and non-adoption from a CV. Here they are the story — the screen that found nothing, the pipeline the organisation did not adopt. Keep them.

## Commands

```bash
npm run dev      # dev server, http://localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the built output
```

Zero client JS is a design property, not an accident. If a build emits a JS bundle, something was added that should not have been.

`05-prd.md` §11 lists the acceptance criteria; several are greppable against `dist/` after a build.

## What is gitignored, and why

- `node_modules/`, `dist/`, `.astro/` — installed or generated; rebuild them.
- `.env`, `.env.*` (except `.env.example`) — the site needs no secrets today; the rule stands so it stays that way.
- `.claude/settings.local.json` — per-machine, not shared.
- `.playwright-mcp/` — snapshots, console logs and screenshots from browser automation. Scratch output; safe to delete.
- `/*.png` at the repo root — stray screenshots from the same tooling. Real image assets belong in `public/`.

## History log

Per the user-scope `CLAUDE.md`: after a significant task, draft a summary, ask, and once given the go-ahead **write the file directly** to `docs/history/<YYYY-MM-DDTHH-MM-SS>.txt`. Open with 1–3 sentences, then numbered points, key decisions, next steps.
