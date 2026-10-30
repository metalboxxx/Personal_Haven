# Front-End Design Plan — Condensed Summary

**Date:** 2026-09-09 · **Round:** 1 (design only)
**Inputs:** [`01-design-principles.md`](01-design-principles.md) · [`02-sites-public-figures.md`](02-sites-public-figures.md) · [`03-sites-individuals.md`](03-sites-individuals.md)

**Method & confidence:** 21 sites surveyed. Rendered visuals were confirmed in a browser for only 3 of them (jessicahische.is, karpathy.ai, dhh.dk); the other 18 sites' typography / colour / motion notes are **inferred from fetched HTML and CSS**, so treat those as directional rather than verified. Cohort skew worth knowing: the ordinary-person set is drawn from a single Hacker News thread and is therefore developer- and researcher-heavy, and the public-figure set contains no mainstream entertainment celebrity (one musician, no actors). The conclusions below held consistently across both sets, but the sample is not representative of the whole web.

**Governing lens:** *catchy but still functional, not eye-flashing — flashy humility.* A normal person's site is not inferior to a celebrity's. Test for every decision: does this help the visitor understand who I am and what I've done, or does it say "look what I can build"?

---

## 1. The single biggest finding

**Across both cohorts, the "catchy" almost never came from visual effects.** It came from **voice and specificity**.

- Famous cohort: the two best-balanced sites (dhh.dk, jessicahische.is) are catchy because of a narrow well-typeset column of *chapters of a life*, and because the craft itself *is* the decoration. Not because anything moves.
- Ordinary cohort: the memorable sites won on copy — "Yet another programming blog," "rants from a 1x engineer," "Code, Coffee, & Cortex," "One-Hour Projects," "gradient.horse: draw a horse, watch it run." Their layouts were plain single columns.
- The sites that reached for production value instead (tim.blog, calnewport.com, jonathancoulton.com) came out reading as **agency-built marketing funnels, not personal sites** — and fame is what makes that tolerable at all.

**Implication:** the design budget for this site should go into typography, spacing, and one accent colour; the *personality* budget goes into writing. Motion gets near-zero budget.

## 2. The asymmetry that actually matters

Fame does not change what makes a site good — it changes **what the site has to prove**.

| | Public figure | Ordinary person |
|---|---|---|
| Trust | Pre-paid by reputation | Must be earned **on the page** |
| Bio | Can be one line, or absent (Karpathy, DHH) | Needs a real, well-written introduction |
| Proof | Implicit (people already know) | Explicit: numbers, links, working demos |
| CTAs / funnels | Work — there's an audience | Produce empty-feeling self-promotion |

Karpathy's near-unstyled page reads as *confident restraint*; the same page from an unknown reads as *unfinished*. **So: copy the restraint, but not the sparseness.** Minimalism is the visual mode; the content still has to do full work.

The ordinary cohort was genuinely **better** at several things — honest scope-setting, linking outward (RSS, blogrolls, colophons), treating a live side project as the centerpiece rather than a frozen case study, and using cheap sustainable content types (TILs, one-hour projects, link posts) to keep the site alive. Those are the things to take.

## 3. The "flashy humility" recipe

**A signature element is the one thing a visitor still remembers after closing the tab.** Every site in the survey that was memorable had exactly one; every site that was forgettable had either none (the default-theme sites) or too many (the module-stacked marketing sites).

Pick **exactly one** and keep everything else quiet. Candidates that worked in the wild:

1. **A craft-as-decoration element** — if the work is visual, let the work be the chrome (Hische).
2. **A recurring avatar/mascot** instead of a generic headshot (xeiaso.net).
3. **A distinctive content bucket** — "One-Hour Projects" (Matelsky), a TIL stream (gowtham.dev), or an invented one of your own in the same spirit, e.g. "things I was wrong about" — *that last is a suggestion, not something the survey observed*.
4. **A voice-forward tagline** that undersells slightly and is then exceeded by the content.
5. **One well-designed detail done unusually well** — e.g. a thick, high-contrast custom focus ring, or a genuinely good type scale.

Everything else follows the boring, correct defaults below. **One signature, not five** — that is the entire difference between "catchy" and "eye-flashing."

## 4. Concrete build defaults (settled)

**Layout** — single narrow column for text (`max-width: 65ch`, ~720–800px), page shell ~1140–1280px, 8px spacing scale, no arbitrary pixel values, 96–128px between desktop sections. Mobile-first; breakpoints ~480 / 768 / 1024 / 1280.

**Type** — two faces max (or one variable family) + optional mono for code. Modular scale, 4–6 steps. Body line-height 1.4–1.6, display 1.1–1.25. Self-hosted subset WOFF2 + `font-display: swap`, preload only above-the-fold faces — or system stack, which is a legitimate choice.

**Colour** — 60/30/10. One accent, used for links/CTA/focus only. Dark mode built from CSS custom properties on day one, with its own tuned palette (near-black not `#000`; desaturate accents 10–15%) — **not** an inversion. Note: dark mode was near-absent in the ordinary cohort, so it's a cheap way to look more maintained than peers.

**Motion** — state changes only (150–250ms). No scroll-jacking, ever. `prefers-reduced-motion` strips displacement (parallax/slide/zoom) but may keep a short crossfade.

**Accessibility** — 4.5:1 text / 3:1 UI contrast in *both* themes, visible focus rings (never `outline:none`), one `<h1>`, ordered headings, real landmarks, full keyboard operability, meaningful alt text.

**Performance** — LCP < 2.5s, INP < 200ms, CLS < 0.1 at p75; critical path under ~170KB compressed. Kill risks: unoptimized hero media, an animation library for one flourish, full font families, sync third-party embeds, unsized images.

**SEO/metadata** — unique title + description per page, OG/Twitter cards, `Person` + `CreativeWork` JSON-LD, sitemap, sane canonical URLs.

## 5. Information architecture

`Home → Work/Projects → About → Contact` (+ optional Resume, + Blog **only if it will actually be maintained** — an abandoned blog is worse than none).

- **Home**: 5-second pitch (role + focus, not a job title), 2–3 best projects, clear path onward. Not a CV dump.
- **Work**: 3–6 strong projects beat 15 thin ones. Each: problem · *your specific role* · approach · outcome · links.
- **About**: the human context; this is where the personality and photo belong.
- **Contact**: a real email, not a form-only wall.
- **Skip** Services / Testimonials / Process pages — those are agency conventions.

## 6. Anti-pattern blacklist

Autoplay video or audio heroes · parallax stacks · custom cursors · splash / "click to enter" screens · scroll-jacking · gradient-blob "creative developer" heroes with a floating 3D object · fake loading animations on a static site · looping background video behind text · skill-percentage bars · walls of client logos · dead "coming soon" project cards · stale satellite pages (Colophon/Talks that rot) · load-triggered newsletter modals · 8+ item top nav · full-viewport-width body text.

**Amendment (2026-09-10):** "looping background video behind text" has a **scoped exception** — see [`05-prd.md`](05-prd.md) §8. The owner wants an animated hero background. It is permitted under five constraints (hero band only, never behind running text; static by default; stripped under `prefers-reduced-motion`; CSS or small canvas, no animation library; performance budget unchanged), and the recommended treatment derives the motion from his own project data rather than generic decoration. The rest of the blacklist stands.

## 7. Voice rules

- Lead with what you do for the work, not a title. *"I build backend systems that keep checkout reliable at scale"* > *"Senior Software Engineer."*
- State outcomes; let the reader supply the adjective.
- Write ~20% more direct than feels comfortable, then **cut adjectives, not facts**. False modesty ("just a small thing I made") costs as much credibility as bragging.
- First person, 2–3 sentence paragraphs. Humility lives in the *tone*, never in shrinking the substance.

## 8. Open questions for round 2

1. **Who is the primary visitor** — recruiters, potential collaborators, or readers? This decides whether Work or Writing leads.
2. **What's the one signature element** from §3? Everything else is downstream of that pick.
3. **Is there a blog commitment?** If not, plan a cheap content type (TIL / project log) instead.
4. **Stack**: static site generator vs. framework vs. hand-written HTML/CSS. The performance budget and anti-pattern list rule out a heavy SPA for a content site; nothing here needs a framework.
5. **Content inventory**: which 3–6 projects exist and what proof (numbers, demos, repos) can back each.

*Rounds 2+ (stack choice, content plan, component inventory, build) are not covered by this research.*
