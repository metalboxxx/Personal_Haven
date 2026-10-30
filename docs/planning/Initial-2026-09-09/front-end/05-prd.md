# Personal Website — Product Requirements Document

**Version:** 1.1 · **Date:** 2026-09-10, amended through 2026-09-25 · **Status:** in use, amended as the site changes
**Depends on:** [`00-design-summary.md`](00-design-summary.md) (design conclusions) · [`04-project-inventory.md`](04-project-inventory.md) (what can be claimed) · [`../user_personality.md`](../user_personality.md) (who he is)

---

## 1. Purpose

A personal website for the owner. It holds a small number of project writeups, written by him, that show how he works through a problem rather than listing what he knows. It should read as his, not as a recruiter funnel or a template.

## 2. Audience

- **Primary: the owner.** This is his personal site.
- **A visitor in a hurry** (a recruiter, a possible collaborator) is a constraint, not the goal. They must never be blocked: no splash screen, no scroll-jacking, and what he does is visible without scrolling.
- **Rejected:** optimising for recruiters at the cost of personality. `04-project-inventory.md` §6 records why this was raised and reversed.

## 3. Scope

**In scope (v1):**
- Three pages: Home, About, Contact.
- Four project writeups. Two stand alone at `/work/<slug>`. Two are studies inside one project and sit at `/work/quantitative-trading/<slug>`, under a project page that describes the whole project (§5, amended 2026-09-21).
- One decorative, animated visual treatment (§8).
- Dark and light themes.

**Out of scope (v1):**
- A blog. `/writing` is not built in v1.
- Publishing any project repository. All four writeups stand without a code link.
- CV revision. A separate task after the writeups.
- Analytics, newsletter signup, comments, search.

## 4. Architecture

| Decision | Value | Rationale |
|---|---|---|
| Framework | **Astro** | Ships no JS by default and has Markdown content collections. A React island is available if ever needed. An SPA would miss the performance budget in `00` §4. |
| Hosting | **Cloudflare Pages** | Free and fast, and the site repo does not have to be public to use the free tier. |
| Content | Markdown files in the repo | No CMS, no database. Each writeup is one Markdown file. |
| Repo | Local git | Started 2026-09-09. Whether to publish the site repo is a later decision. |
| Domain | **TBD — purchase required.** Until then the site lives at `<project-name>.pages.dev` (Cloudflare's free subdomain; the owner picks the name, subject to availability). | Open only because it costs money. A custom domain can be added later through DNS without a rebuild. Does not block the build. |

## 5. Information architecture

```
/                    Home — opening line, bio, Role of AI, the top-level projects with their results
/work/<slug>         One page per standalone writeup (2)
/work/quantitative-trading            Project page: what the pipeline is, links to its studies
/work/quantitative-trading/<slug>     One page per study (2)
/about               Longer background
/contact             Email + links
/writing             Not built in v1
```

**Home is also the work index.** With three top-level entries, a separate `/work` page would list the same things as the home page, so there is no `/work` page. This replaced the earlier `Home → Work → About → Contact` plan.

**Project page, added 2026-09-21.** The two quant writeups are studies run through one pipeline, and each study was describing that pipeline again. `/work/quantitative-trading/` now describes it once: what the pipeline is, its status, and the studies inside it. Home lists the project once, not its studies. A project page is not a writeup: the §7.2 headings and their acceptance criterion do not apply to it. Content collection `projects`; a writeup inside a `work` folder with the same name is one of its studies.

No Services, Testimonials or Process sections, and no skill-percentage bars.

## 6. Layout

**Archetype B — the structure of [benkuhn.net](https://www.benkuhn.net):** a bio, then a list whose items show their result. His structure is the reference, not his look.

Home, in order: opening line (§7.1) → bio → Role of AI (§7.4) → the top-level projects, each with a one-line result. The email is in the footer.

Requirements on top of that structure:

- Featured writeups are set apart from any future secondary list by type size and spacing, not by bullet indentation.
- Each writeup entry shows a date.
- A modular type scale of 4–6 steps carries the hierarchy (`00` §4).
- Dark mode from the start, with its own palette, not an inversion.
- A sticky left rail at 64em and wider; a top bar below that.

### 6.1 Visual direction

**The owner does not want the plain-colour minimal look most engineer sites use.** He wants the site to look designed.

No reference site is copied for its look. `dhh.dk` is cited only as a site that takes typography seriously; its typographic choices are not the target. Fonts and palette are his choice (§13, 2026-09-22 and 2026-09-24).

**Method:** build a working version, then change it based on his reactions. He said he had no fixed picture yet and would give direction once there was something real on screen. Treat each build as a draft; expect type, colour and the hero to change.

## 7. Content requirements

### 7.1 The opening line

The home page opens with one line, in the owner's words:

> Things that stems from my bathroom thoughts, and see it made reality.

It replaced the drafted thesis ("how does the under-resourced thing beat the better-resourced one?") on 2026-09-22. Do not edit it unless he asks.

**Acceptance criterion:** the line appears once, on the home page. It is not repeated as a tagline, section header, page title, meta description or footer.

### 7.2 Writeup format — the same for all four

**Rewritten 2026-09-21.** He rewrote the two quant studies himself and replaced the format. He writes the writeups; Claude edits, checks and builds. Every writeup uses the same three headings, in this order:

**What it is → Outcome → Logs**

`What it is` is short: what it is, what it does, why he started it. `Outcome` comes second, before any reasoning, so the reader gets the result first. `Logs` is a dated journal (`### Sep 04 2026 - …`), oldest first, with subheads as an entry needs them. Entries are added as the project moves, and a log has no length limit. The old five-heading format (`Constraint → Decision → What I rejected → Outcome`, 2026-09-10) is withdrawn; what it covered now sits inside the log entries.

The register is his: first person, feelings in plain words, mistakes and open questions on the page, and AI's part credited to AI in the same sentence. A claim from his own experience stands as written and is not checked against `04`; `04` covers numbers Claude writes, not his.

**Acceptance criterion:** all three headings are present, in this order, in all four writeups, and `Logs` has at least one dated entry.

**Acceptance criterion (altitude, added 2026-09-10, narrowed 2026-09-21):** applies to text Claude drafts. No Claude-written paragraph contains a file path, a flag name, a config key, a one-line root cause, or a numbered question reference. What he puts in a log entry is his call. The ~700-word cap is withdrawn with the old format. See `.claude/CLAUDE.md`, *Writing*, for the full rules.

### 7.3 The attribution rule

Per `.claude/CLAUDE.md` and `04-project-inventory.md` §1, `Quant_VnStocks` decisions are split by authorship:

- **His, written in first person** (*I chose*, *I required*): long-only; Benjamini-Hochberg + split-half stability.
- **Joint, written without a personal claim on the idea** (state the reasoning, not the authorship): rejecting the Quant 4.0 scale layers; equal-notional over Kelly.

**Acceptance criterion:** no sentence on the site claims a decision he did not make.

### 7.4 AI use, disclosed once

**On the home page since 2026-09-22**, as a `Role of AI` section between the bio and the project list, source `src/content/role-of-ai.md`. He rewrote it: it is now about scope, constraints, and what the person supplies when a model writes the code, not a list of what he caught. It is collapsed to its first paragraph with a CSS-only show-more; the full text scrolls in its own box. Before that it was on `cointegration-screen` (until 2026-09-21), then on the quant project page for one day.

**Amended 2026-09-10:** an earlier version required the verification checklist and the one-line root cause on the page. Both are debugging detail, excluded by §7.2's altitude criterion for Claude-drafted text.

**Rationale:** the 2025 Stack Overflow survey puts AI adoption at 84% and developers who highly trust the output at 3%. The disclosure appears once, in context, never as a badge or a site-wide banner.

### 7.5 The four writeups, and the project page above two of them

The third column is what `04` records for each page. The home page and page headers show the `result` field in each file's frontmatter, which he has edited and which may carry fewer numbers. Do not copy numbers from this table back into `result`.

| Slug | Subject | What `04` records | Code link |
|---|---|---|---|
| `quantitative-trading` *(project page, not a writeup)* | The Vietnamese-market research pipeline | What the pipeline is, its status, links to the two studies below. | None |
| `quantitative-trading/cointegration-screen` | The cointegration pairs screen | 435 pairs → 378 tested → **zero survivors**; VN100 sector 501, zero; pooled 4,950, zero. Plus the ACB/OCB case study and the one pair he paper-traded anyway. | None |
| `quantitative-trading/pead` | Post-earnings-announcement drift, VN equities | **+4.75% abnormal 20-day return, p=0.0008, n=202** in VN100 mid-caps; nothing in VN30 (n=28, p=0.37). Caveats: the Jan-31 proxy date, yearly data. | None |
| `test-extraction` | The Cambridge/YLE extraction pipeline | 91 commits over five months, ten test batches; **35 of 40** auto-extracted on Đề 043–046, the other five had no answer-key lines in the source. The org chose manual entry. | None; public repo is his call |
| `exam-item-scoring` | Scoring image-based exam items on a live education platform | Crop-and-overlay scrapped on three failure modes; replaced by a click tolerance radius (Part 1) and transparent boxes with a fixed palette (Part 5); drawing accepted as text. Two commits merged upstream. | None; client unnamed, no exam artwork |

**Requirement:** a page with no public repository (currently all five) shows a short *code not public* line (`codeNote`), so the missing link reads as deliberate, never as a missing or broken button.

**Requirement:** writeups 3 and 4 concern the same client but make different claims (*I fixed and tested this* vs *I built this*). They stay separate.

## 8. Visual atmosphere

**The owner wants a moving, decorative background, not a plain colour field, with F1 driver sites as the reference.** In scope for v1.

**What the F1 sites do.** [charlesleclerc.com](https://www.charlesleclerc.com) and [landonorris.com](https://www.landonorris.com) are dark and full-bleed, with one strong accent (Ferrari red; lime) and motion in their own image blocks and carousels, not behind body text. Their visual assets are photographs of cars, helmets and races. What carries over: dark, one accent, a full-bleed band of its own. What does not: imagery over text, since his work is not photographs.

**Requirements:**

1. Motion stays in the hero band. **Never behind running text.**
2. Static by default; motion is progressive enhancement. The page is complete and legible with no animation.
3. `prefers-reduced-motion: reduce` removes all movement (a short opacity crossfade may remain).
4. Implementation is CSS, SVG or a small hand-written canvas. **No three.js, no Lottie, no animation library** for a decorative effect.
5. It fits the performance budget in `00` §4 unchanged: LCP < 2.5s, INP < 200ms, CLS < 0.1, critical path under ~170KB.

**Treatment.** The background uses a data series from the user's own work. It is drawn as a slow line field at low contrast in its own band below the hero text, instead of a generic animated gradient. Candidates: the cointegration spread series, or the normalised 30-symbol VN30 intraday panel. `02-sites-public-figures.md` notes the same idea on Jessica Hische's site, where the hand lettering is her work. The current build (`HeroField.astro`) uses a synthetic placeholder series until he picks a real one (§12).

**Recorded departure:** `00-design-summary.md` §6 lists looping background animation as an anti-pattern. §8 is a scoped exception under the five requirements above, and `00` points to this section.

## 9. Build defaults

By reference, not restated. See `00-design-summary.md` §4: 65ch text column, 60/30/10 colour with one accent, two typefaces max, motion on state changes only, WCAG 4.5:1 text / 3:1 UI contrast in both themes, visible focus rings, semantic headings and landmarks, full keyboard operability, `Person` + `CreativeWork` JSON-LD, unique title and description per page.

## 10. Content rules

- **Who he is:** `../user_personality.md`. **How he writes:** `.claude/CLAUDE.md`, *Writing*. **Banned: "passionate", "leveraging", and any adjective a number could replace.** First person throughout.
- **Register:** his, as he writes it in the quant studies and `Role of AI`: a dated story, plain words, hedged opinions, feelings and mistakes on the page. Anything Claude drafts follows the style rules in `.claude/CLAUDE.md`. The CV is different: short, stated, no reasoning.
- **No US-default framing.** Where data or a convention is US-specific, say so.

### 10.1 Never publish

Authoritative list. The site must not carry:

- The client organization's name, internals, backend map, or admin URL.
- Anything identifying students, colleagues, or his employer.
- Broker or account configuration, credentials, or API keys from `Quant_VnStocks`.
- Paper-trading ledger figures, unless he explicitly opts in.

`vnstock`'s free tier is licensed personal / research / non-commercial. Check before publishing anything that reads as commercial use.

## 11. Acceptance criteria

- [ ] Three pages, one project page and four writeups build and deploy to Cloudflare Pages.
- [ ] The opening line appears exactly once across the entire site.
- [ ] All four writeups follow `What it is → Outcome → Logs`, with at least one dated log entry.
- [ ] No sentence claims a decision the owner did not make (§7.3).
- [ ] AI use disclosed once, in the `Role of AI` section on the home page.
- [ ] Every page with no public repository shows a deliberate "code not public" line.
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
| 3 | Which real data series replaces the placeholder in §8 | No — the placeholder is labelled as synthetic in the data file. |

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
| 2026-09-25 | PRD brought up to date and reworded plainly | His call. Stale facts fixed: his opening line replaces the drafted thesis (§1, §7.1, §11), home order (§6), code-link state (§7.5, §11), status line. Opus 5.0 rhetoric removed. Requirements unchanged; §13 rows above left as written |
