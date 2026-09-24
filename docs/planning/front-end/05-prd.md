# Personal Website — Product Requirements Document

**Version:** 1.0 · **Date:** 2026-09-10 · **Status:** awaiting owner approval
**Depends on:** [`00-design-summary.md`](00-design-summary.md) (design conclusions) · [`04-project-inventory.md`](04-project-inventory.md) (what can be claimed) · [`../user_personality.md`](../user_personality.md) (voice)

---

## 1. Purpose

Build the owner a personal website that is recognisably his — not a recruiter funnel and not a template. It exists to hold a small number of substantial project writeups, written in his own voice, that demonstrate how he thinks rather than listing what he knows.

The site's thesis is that **the under-resourced thing can beat the better-resourced one**, and the site proves it by structure rather than by asserting it.

## 2. Audience

- **Primary: the owner.** This is a personal site. It is his, first.
- **Constraint, not goal: a visitor in a hurry** (a recruiter, a potential collaborator). They must never be *blocked* — no splash screen, no scroll-jacking, the answer to "what does this person do" visible without scrolling. Serving them is a constraint on the design; it is not what the site is for.
- **Explicitly rejected:** optimising for recruiters at the cost of personality. See `04-project-inventory.md` §6 for why this was raised and reversed.

## 3. Scope

**In scope (v1):**
- Three pages: Home, About, Contact.
- Four project writeups. Two stand alone at `/work/<slug>`; two are studies inside one project and sit at `/work/quantitative-trading/<slug>`, under a project page that describes the whole thing (§5, amended 2026-09-21).
- One decorative/animated visual treatment (§8).
- Dark and light themes.

**Out of scope (v1):**
- A blog. `/writing` is reserved in routing but not built; an abandoned blog is worse than none.
- Publishing any project repository. All four writeups must stand without a code link.
- CV revision. A separate follow-on, downstream of these writeups.
- Analytics, newsletter signup, comments, search.

## 4. Architecture

| Decision | Value | Rationale |
|---|---|---|
| Framework | **Astro** | Ships zero JS by default; Markdown content collections; a React island is available if ever needed. An SPA fails the §4 performance budget in `00`. |
| Hosting | **Cloudflare Pages** | Free, fast edge, and the site repo's visibility stays the owner's choice rather than being forced public by a free tier. |
| Content | Markdown files in-repo | No CMS, no database. A writeup is a file. |
| Repo | Local git, `main` | Initialised 2026-09-09. Publishing the site repo is a separate, later decision. |
| Domain | **TBD — purchase required.** Until then the site lives at `<project-name>.pages.dev` (Cloudflare's free subdomain, name chosen by the owner subject to availability). | The only open item in this document, and only because it costs money. A custom domain swaps in later via DNS with no rebuild. Does not block the build. |

## 5. Information architecture

```
/                    Home — thesis, bio, the three top-level projects with their results
/work/<slug>         One page per standalone writeup (2)
/work/quantitative-trading            Project page: what the pipeline is, links to its studies
/work/quantitative-trading/<slug>     One page per study (2)
/about               Longer background
/contact             Email + links
/writing             Reserved in routing, NOT built in v1
```

**Home absorbs Work, deliberately.** With three top-level entries, a separate `/work` index listing them *and* a homepage that also lists them is duplication. The homepage **is** the work index. This collapses four pages of chrome to three and is a change from the earlier `Home → Work → About → Contact` assumption.

**A project page groups studies, added 2026-09-21.** The two quant writeups are studies run through one pipeline, and describing that pipeline twice — once per study — was the duplication the flat layout produced. `/work/quantitative-trading/` is the project: what the pipeline is, its status, and the list of studies inside it. Home lists the project once, not its studies. A project page is not a writeup: it does not follow the §7.2 headings, and the §7.2 heading criterion does not apply to it. Content collection `projects`; a writeup nested under a folder of the same name in `work` is one of its studies.

**No** Services, Testimonials, Process, or skill-percentage bars.

## 6. Layout

**Archetype B — [benkuhn.net](https://www.benkuhn.net)'s information shape.** His *structure* is the reference: bio, then a curated list whose items carry their result. His execution is not.

Home, in order: thesis sentence → two-sentence bio → the three top-level projects, each with a one-line statement of **what it found** → contact line.

Requirements that fix what his site leaves on the table:

- Featured writeups must be visually distinct from any future secondary list — by type scale and spacing, not by bullet indentation.
- Each writeup entry shows a date.
- A real modular type scale carries the hierarchy (4–6 steps, per `00` §4).
- Dark mode from day one, with its own tuned palette — not an inversion.

### 6.1 Visual direction

**The owner explicitly rejects the plain-colour minimalism most engineer sites settle for.** He has a designer's eye and wants the site to look designed, not defaulted. Restraint in this project means *disciplined*, never *bare*.

No single reference site is being copied for its visual style. `dhh.dk` is cited only for taking typography seriously, not as a look to reproduce — its specific typographic choices are **not** the target.

**Method:** build a working v1, then iterate against his reactions. He has said he does not have a fixed picture yet and will direct once there is something real on screen. Treat the first build as a draft to be revised, not a spec to be defended. Expect the type, colour and hero treatment to change after the first review.

## 7. Content requirements

### 7.1 The signature

The thesis appears **exactly once**, on the home page. Draft:

> Most of what I build is an answer to the same question: how does the under-resourced thing beat the better-resourced one?

**Acceptance criterion:** this sentence, or any restatement of it, appears nowhere else — not as a tagline, section header, page title, meta description, or footer. It is stated once and proven by everything after it.

### 7.2 Writeup format — identical for all four

**Rewritten 2026-09-21.** He rewrote the two quant studies himself and replaced the format; the owner writes the writeups from here, and Claude edits, checks and builds. Every writeup follows the same three headings, in this order:

**What it is → Outcome → Logs**

`What it is` is short — what it is, what it does, why he started it. `Outcome` comes second, before any reasoning: the reader gets the number first and the story only if they want it. `Logs` is a dated journal (`### Sep 04 2026 - …`), oldest first, with whatever subheads an entry needs; entries are appended as the project moves, and there is no word cap on a log. The old five-heading format (`Constraint → Decision → What I rejected → Outcome`, 2026-09-10) is gone; what it carried now lives inside the log entries, argued where it happened rather than under a fixed heading.

The register is his: first person, mid-thought, feelings stated plainly, mistakes and open positions on the page, AI's contributions attributed to AI in the same breath. A claim from his own experience stands as written and is not sourced against `04`; `04` governs numbers Claude writes, not his.

**Acceptance criterion:** all three headings are present, in this order, in all four writeups, and `Logs` has at least one dated entry.

**Acceptance criterion (altitude, added 2026-09-10, narrowed 2026-09-21):** applies to text Claude drafts. No Claude-written paragraph contains a file path, a flag name, a config key, a one-line root cause, or a numbered question reference. What he puts in a log entry is his call. The ~700-word cap is withdrawn with the format. See `.claude/CLAUDE.md`, *Writing the work writeups*, for the full rule set.

### 7.3 The attribution rule

Per `CLAUDE.md` and `04-project-inventory.md` §1, `Quant_VnStocks` decisions are split by authorship:

- **His, written in first person** (*I chose*, *I required*): long-only; Benjamini-Hochberg + split-half stability.
- **Joint, written without a personal claim on the idea** — state the reasoning, not the authorship: rejecting the Quant 4.0 scale layers; equal-notional-over-Kelly.

**Acceptance criterion:** no sentence on the site claims a decision he did not make.

### 7.4 AI use, disclosed once

**Moved to the home page on 2026-09-22**, as a `Role of AI` section between the bio and the project list, source `src/content/role-of-ai.md`. He rewrote it: it is no longer a list of what he caught but an argument about scope, constraint and what the human supplies when a model writes the code. Collapsed by default to its first paragraph with a CSS-only show-more; the full text scrolls in its own box. It sat on `cointegration-screen` until 2026-09-21 and on the quant project page for one day after.

**Amended 2026-09-10:** the earlier version of this section required the verification checklist and the one-line root cause on the page. Both are debugging detail and are excluded by §7.2's altitude criterion for Claude-drafted text. The disclosure stays; its forensics do not.

**Rationale:** the 2025 Stack Overflow survey puts AI adoption at 84% against 3% who highly trust the output; the scarce skill is catching what's wrong, not avoiding the tool. Volunteering this is stronger than being asked. It appears once, in context — never as a badge or a site-wide banner.

### 7.5 The four writeups, and the project page above two of them

| Slug | Subject | Headline result | Code link |
|---|---|---|---|
| `quantitative-trading` *(project page, not a writeup)* | The Vietnamese-market research pipeline | What the pipeline is, its status, links to the two studies below. | None — state "code not public" |
| `quantitative-trading/cointegration-screen` | The cointegration pairs screen | 435 pairs → 378 tested → **zero survivors**; VN100 sector 501, zero; pooled 4,950, zero. Plus the ACB/OCB case study and the one pair he paper-traded anyway. | None — state "code not public" |
| `quantitative-trading/pead` | Post-earnings-announcement drift, VN equities | **+4.75% abnormal 20-day return, p=0.0008, n=202** in VN100 mid-caps; nothing in VN30 (n=28, p=0.37). Caveats: the Jan-31 proxy date, yearly data. | None — state "code not public" |
| `test-extraction` | The Cambridge/YLE extraction pipeline | 91 commits over five months, ten test batches; **35 of 40** auto-extracted on Đề 043–046, the other five had no answer-key lines in the source. The org chose manual entry. | Owner's call |
| `exam-item-scoring` | Scoring image-based exam items on a live education platform | Crop-and-overlay scrapped on three failure modes; replaced by a click tolerance radius (Part 1) and transparent boxes with a fixed palette (Part 5); drawing accepted as text. Two commits merged upstream. | Public site; client unnamed, no exam artwork |

**Requirement:** the quant project and both its studies have no public repository. The "no link" state must read as deliberate — a short *code not public* line — never as a missing or broken button.

**Requirement:** writeups 3 and 4 concern the same client but make different claims (*I fixed and tested this* vs *I built this*). They stay separate and must not be conflated.

## 8. Visual atmosphere

**The owner wants a moving, decorative background — not a plain colour field — referencing F1 driver sites.** This is in scope for v1.

**Why those sites work, and what transfers.** [charlesleclerc.com](https://www.charlesleclerc.com) and [landonorris.com](https://www.landonorris.com) are both dark, full-bleed, one strong accent (Ferrari red; lime), with motion in dedicated image blocks and carousels — not running behind body text. They work because **the visual asset is the product**: cars, helmets, race photography. What transfers is dark + one accent + full-bleed treatment in its own band. What does not transfer is imagery-over-text, because his product is not photographs.

**Requirements:**

1. Motion is confined to the hero/header band. **Never behind running text.**
2. Static by default; motion is progressive enhancement. The page must be complete and legible with zero animation.
3. `prefers-reduced-motion: reduce` strips displacement entirely (a short opacity crossfade may remain).
4. Implementation is CSS or a small hand-written canvas. **No three.js, no Lottie, no animation library** for a decorative effect.
5. It must fit the performance budget in `00` §4 unchanged — LCP < 2.5s, INP < 200ms, CLS < 0.1, critical path under ~170KB.

**Recommended treatment — make the decoration his own data.** Rather than a generic animated gradient, derive the moving element from work he actually did: the cointegration spread series, or the normalised 30-symbol VN30 intraday panel already in his repo, drawn as a slow-moving line field at low contrast behind the hero.

This is the one principle from the survey where "flashy" earned its place — `02-sites-public-figures.md` found that Jessica Hische's site works because the hand lettering *is* the product. A gradient blob is decoration bolted onto unrelated content; his own data as background is the signature made visible.

**Recorded departure:** `00-design-summary.md` §6 lists looping background animation as an anti-pattern. §8 is a deliberate, scoped exception under the five constraints above. `00` has been amended with a pointer to this section.

**Round-3 work:** the asset itself — which series, what visual form, what motion — is design work. This PRD locks the constraints and the intent, not the pixels.

## 9. Build defaults

By reference, not restated — see `00-design-summary.md` §4: 65ch text column, 60/30/10 colour with one accent, two typefaces max, motion on state changes only, WCAG 4.5:1 text / 3:1 UI contrast in both themes, visible focus rings, semantic headings and landmarks, full keyboard operability, `Person` + `CreativeWork` JSON-LD, unique title and description per page.

## 10. Content rules

- **Voice:** `../user_personality.md`. Blunt, short, specific. **Banned: "passionate", "leveraging", and any adjective doing work a number could do better.** State outcomes; let the reader supply the adjective. First person throughout.
- **Register:** his, as he writes it in the quant studies and `Role of AI`: a dated story, plain words, hedged opinions, feelings and mistakes on the page. Anything Claude drafts follows the style rules in `.claude/CLAUDE.md`. The CV is different: short, stated, no reasoning.
- **No US-default framing.** Where data or convention is US-specific, say so.
### 10.1 Never publish

Authoritative list. The site must not carry:

- The client organization's name, internals, backend map, or admin URL.
- Anything identifying students, colleagues, or his employer.
- Broker or account configuration, credentials, or API keys from `Quant_VnStocks`.
- Paper-trading ledger figures, unless he explicitly opts in.

`vnstock`'s free tier is licensed personal / research / non-commercial — check before publishing anything that reads as commercial use.

## 11. Acceptance criteria

- [ ] Three pages, one project page and four writeups build and deploy to Cloudflare Pages.
- [ ] The thesis sentence appears exactly once across the entire site.
- [ ] All four writeups follow `What it is → Outcome → Logs`, with at least one dated log entry.
- [ ] No sentence claims a decision the owner did not make (§7.3).
- [ ] AI use disclosed once, in the `Role of AI` section on the home page.
- [ ] Both no-link writeups show a deliberate "code not public" line.
- [ ] Hero motion absent under `prefers-reduced-motion: reduce`; page fully legible with JS disabled (the theme toggle hides itself and the system preference applies).
- [ ] LCP < 2.5s, INP < 200ms, CLS < 0.1; critical path under ~170KB.
- [ ] 4.5:1 text and 3:1 UI contrast verified in **both** themes.
- [ ] Site fully operable by keyboard alone.
- [ ] Nothing from the never-publish list appears in the built output.

## 12. Open items

| # | Item | Blocking? |
|---|---|---|
| 1 | **Domain purchase** | No — build proceeds on the Pages subdomain. |
| 2 | Whether `test-extraction`'s repo can be public | No — writeup stands without it. |
| 3 | Which data series backs the §8 background | No — round-3 design decision. |

## 13. Decisions log

| Date | Decision | Note |
|---|---|---|
| 2026-09-09 | Recruiters are a constraint, not the goal | Reversed an earlier recommendation; see `04` §6 |
| 2026-09-09 | Astro + Cloudflare Pages | Owner had no prior preference; asked for a recommendation |
| 2026-09-09 | Signature = thesis stated once, then proven | Chosen over "cross-domain evidence as first-class content" and "emergent, never stated" |
| 2026-09-09 | Long-only and BH+split-half are the owner's decisions; Quant 4.0 rejection and Kelly are joint | Settles §7.3 |
| 2026-09-10 | Layout archetype B — benkuhn.net's shape, dhh.dk's typography | Owner: "his layout tho needs more work" — §6 lists what to fix |
| 2026-09-10 | Home absorbs Work; three pages, not four | Four writeups make a separate index redundant |
| 2026-09-10 | Animated background is in scope, under five constraints | Scoped exception to `00` §6, recorded in both documents |
| 2026-09-10 | Writeups gain a `What it is` section and an altitude limit | His call: the pages opened on constraints without saying what the thing was, and carried debugging detail already in the project logs. §7.2 and §7.4 amended |
| 2026-09-21 | The two quant writeups become studies under a project page, `/work/quantitative-trading/` | His call: they are the same project. Home lists three projects. §7.4 disclosure moves to the project page; both studies drop below 700 words as a result |
| 2026-09-21 | Writeup format becomes `What it is → Outcome → Logs`; the owner writes the writeups | His call, by rewriting the two quant studies himself: result first, then a dated journal. Five headings and the 700-word cap withdrawn. §7.2 and §11 amended; `.claude/CLAUDE.md` matches |
| 2026-09-22 | `Role of AI` moves to the home page, collapsed behind a CSS-only show-more | His call, with sketches: first paragraph visible with a fade, the rest in a scroll box. Zero-JS property kept — a hidden checkbox drives it. §7.4 and §11 amended |
| 2026-09-22 | Palette replaced with his four colours (#17153B > #2E236C > #433D8B > #C8ACD6); a header sun/moon toggle pins light or dark | Dark theme is the palette as given, light is tints of it. The toggle is the one client-JS exception: two inline snippets, no bundle, hidden when JS is off |
| 2026-09-24 | Overall look reworked: Bree Serif headings over Literata body text (his picks), header becomes a left rail on wide screens, dates replace 01/02/03 in the project list, caps labels and `·` separators removed | His call: the site read as a copy of the Claude sites (serif display over sans, one centred column, caps eyebrows). Theme switch, Role of AI box, hero field and palette unchanged. `dateLabel` made optional, falling back to the month and year of `date` |
| 2026-09-24 | Claude-written copy rewritten to match his style: `pead`, `exam-item-scoring` and `test-extraction` moved to `What it is → Outcome → Logs`; About and Contact rewritten | His call: the Opus 5.0 text read as arrogant (verdicts without hedges, praising its own honesty, one-liners). The files he wrote himself were not touched. §7.5 and §10 amended; style rules in `.claude/CLAUDE.md` |
