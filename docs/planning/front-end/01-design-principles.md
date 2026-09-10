# Design Principles for a Personal Website

**Governing lens:** every decision below is evaluated against one standard — *catchy but still functional, not eye-flashing.* A normal person's site is not inferior to a celebrity's; the goal is **memorable without being loud**. When a technique's main effect is "look what I can build" rather than "here is what you need to know," cut it.

---

## 1. Visual Hierarchy and the Above-the-Fold Decision

Visual hierarchy is the deliberate use of scale, contrast, spacing, position, and color weight to control the order in which a visitor's eye lands on things — "look here first, then here, then there" ([NN/G, Visual Hierarchy in UX](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/); [NN/G, 5 Principles of Visual Design](https://www.nngroup.com/articles/principles-visual-design/)). If you can't tell where a page wants you to look first, the layout has no hierarchy.

**Above the fold gets a disproportionate share of attention** — users spend the majority of their viewing time there before ever scrolling — so the top viewport is not a place for a full-bleed decorative graphic; it is the highest-value real estate on the page. Run the classic **five-second test**: show the hero to someone who has never met you, take it away after five seconds, and ask "what does this person do, and why should I keep reading?" If they can't answer, the hero has failed regardless of how polished it looks.

**Concrete rules for a personal site's hero:**
- One sentence stating who you are and what you do (role + focus, e.g. "Backend engineer building distributed systems," not a job title alone).
- One supporting line or CTA (see recent work / read the blog / contact) — not three.
- A **name + face or wordmark** visible without scrolling; recruiters and readers use this to confirm they're in the right place.
- Limit to **3 type sizes and no more than one accent color** in the hero — NN/G notes that constraining scale to a few sizes builds hierarchy without visual noise ([NN/G, 5 Principles of Visual Design](https://www.nngroup.com/articles/principles-visual-design/)).
- Do not rely on color alone to signal importance/order — color-blind visitors will miss the cue ([NN/G, Visual Hierarchy in UX](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/)).

---

## 2. Typography

**Type scale:** Use a modular scale with 4–6 defined steps (e.g., 14/16/20/28/40/56px or a 1.25–1.333 ratio), not arbitrary one-off sizes per component. Limit yourself to **two typefaces**: one for display/headings, one for body — or a single well-built variable font family that covers both via weight/size variation. A third, monospace face is acceptable for code snippets on a dev's site.

**Pairing:** Pair a distinctive display face (for headings/hero) with a highly legible, workhorse body face. Avoid pairing two "personality" fonts — that reads as visual competition rather than hierarchy.

**Line length and line height:**
- Body copy: **60–75 characters per line**; enforce with `max-width: 65ch` (or similar) on text containers rather than letting text runs to full viewport width — full-width text on desktop is one of the most common readability failures on the web ([Smashing Magazine, Balancing Line Length and Font Size](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/); [web.dev, Typography](https://web.dev/learn/design/typography/)).
- Line height: **1.4–1.6** (unitless) for body text so it scales proportionally with font-size; tighten to **1.1–1.25** for large display headlines, which need less vertical breathing room ([web.dev, Typography](https://web.dev/learn/design/typography/)).

**Web font performance:**
- The fastest font is one that doesn't need to download: consider a **system font stack** (`-apple-system, "Segoe UI", Roboto, ...`) for body copy, reserving a custom webfont only for headings/brand voice.
- If you load a custom font, self-host **subset WOFF2** files (Latin-only unless you need more), and set `font-display: swap` (or `optional` if layout shift matters more than brand-font fidelity) so text renders immediately in a fallback and swaps in, rather than blocking on an invisible-text flash ([web.dev, Typography](https://web.dev/learn/design/typography/)).
- Preload the one or two font files actually used above the fold; never load an entire family of 8 weights when you use 2.

---

## 3. Color

**Restraint by construction, not willpower:** use the **60/30/10 rule** — 60% dominant/background color, 30% secondary/surface color, 10% single accent for CTAs and emphasis. This forces a small palette and guarantees the accent actually stands out because it's scarce ([UX Planet, The 60-30-10 Rule](https://uxplanet.org/the-60-30-10-rule-a-foolproof-way-to-choose-colors-for-your-ui-design-d15625e56d25); [Vision Australia, Accessible Digital Colour Palettes](https://www.visionaustralia.org/business-consulting/digital-access/Creating-accessible-digital-colour-palettes-60-30-10-design-rule)).

**Practical palette for a personal site:** 1 neutral background, 1 neutral surface/border tone, 1 text-primary, 1 text-secondary (muted), and exactly **1 accent color** used only for links, active states, and one CTA style. Resist adding a second accent "for variety" — that is precisely the flashy-gradient trap this document exists to avoid.

**Dark/light mode:** build both from day one via CSS custom properties keyed to `prefers-color-scheme` (plus a manual override toggle if you want one). Don't just invert light-mode colors — dark mode needs its own tuned palette: backgrounds become deep charcoal/near-black (never pure `#000`, which crushes contrast perception), and saturated brand colors should be **desaturated ~10–15%** on dark surfaces to avoid a "neon glow" effect that reads as gaudy ([sixtythirtyten, 60-30-10 Dark Mode Palette](https://www.sixtythirtyten.co/blog/60-30-10-dark-mode-color-palette-css)).

**Contrast is non-negotiable, covered fully in §6.**

---

## 4. Whitespace and Layout Systems

Whitespace is not "empty" — it's a hierarchy tool. Elements with more space around them are perceived as more important and as belonging to their own group (the proximity principle); NN/G explicitly recommends **giving your most important element more space**, not more color or size, when you want it to stand out ([NN/G, Visual Hierarchy in UX](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/)).

**Concrete system:**
- Pick a **base spacing unit** (commonly 4px or 8px) and derive all margins/padding from a scale of multiples (4, 8, 16, 24, 32, 48, 64, 96...). Never use arbitrary pixel values like `13px` or `27px` — they signal an absence of a system.
- Define a **max content width** for text-heavy sections (720–800px, i.e., the 65ch line-length rule above) and a wider max width for the overall page shell (1140–1280px is typical), so the layout doesn't sprawl edge-to-edge on large monitors.
- Use a **12-column grid** (CSS Grid, not float hacks) for multi-column sections like project cards, and let single-column text sections simply be full-width-within-the-content-max-width.
- Vertical rhythm: consistent spacing *between* sections (e.g., 96–128px on desktop, 48–64px on mobile) reads as intentional; inconsistent gaps read as unfinished.
- Minimalist design (few UI elements, flat surfaces, generous negative space, one clear typographic voice) is well-supported by NN/G's usability heuristics as both more usable and lower-maintenance than dense/decorated layouts — heuristic #8, "aesthetic and minimalist design," calls for maximizing signal-to-noise ratio by removing anything that doesn't support a user task ([NN/G, Aesthetic and Minimalist Design](https://www.nngroup.com/articles/aesthetic-minimalist-design/); [NN/G, Characteristics of Minimalism](https://www.nngroup.com/articles/characteristics-minimalism/)).

---

## 5. Motion

**Default position: motion should clarify state changes, not decorate the page.** Good uses: a 150–250ms fade/slide when a menu opens, a subtle hover state on links/cards, a progress indicator on a multi-step form, a smooth scroll-to-anchor. Bad uses: anything whose only purpose is to prove the page has JavaScript.

**Scroll-driven effects:** A scrubbed reveal (opacity/translate tied to scroll position via the native CSS Scroll-Driven Animations API or a scroll-linked class toggle) can help a sequential case-study narrative feel paced. It should **never hijack scroll** — the user's scroll input must always map 1:1 to page movement; the browser's native scrollbar and momentum scrolling must keep working. "Scroll-jacking" (overriding scroll speed/direction, or forcing full-page snaps the user didn't ask for) is a named anti-pattern — even implementation guides for scroll effects stress building them with scrub-based triggers specifically so there is **no scroll-jacking and no timed autoplay** ([Vulk, Building Apple-style scroll sites](https://vulk.dev/blog/how-to-build-an-apple-style-scroll-website-with-ai)).

**`prefers-reduced-motion` is mandatory, not optional:**
- Wrap any non-essential animation in `@media (prefers-reduced-motion: no-preference)`.
- Under `reduce`, don't just delete all motion — **remove spatial displacement (sliding, zooming, parallax, panning) but keep short opacity/color crossfades** (~150ms). Displacement is what triggers vestibular discomfort; a quick fade still communicates "something changed" without the risk ([css-scroll-driven.com, Implementing prefers-reduced-motion](https://www.css-scroll-driven.com/accessibility-inclusive-motion-standards/implementing-prefers-reduced-motion/); [MDN, prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)).
- If you implement smooth-scroll or scroll-linked JS animation, check the media query in JS too and fall back to instant `window.scrollTo({behavior: 'auto'})` rather than assuming CSS alone covers it.

---

## 6. Accessibility Basics

- **Contrast:** minimum **4.5:1** for normal body text, **3:1** for large text (≥24px, or ≥19px bold) and for UI components/icons against their background — this is WCAG 2.2 SC 1.4.3 and 1.4.11 ([WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/); [WebAIM, Contrast and Color Accessibility](https://webaim.org/articles/contrast/)). Check every text/background and icon/background pair in both light and dark themes — dark mode often silently breaks contrast that was fine in light mode.
- **Focus states:** every interactive element must have a **visible** focus indicator (WCAG 2.4.7, Level AA) — never `outline: none` without a replacement. Level AAA guidance (2.4.13) further specifies the indicator should cover an area at least as large as a 2px perimeter around the component and itself have 3:1 contrast against both states ([WCAG 2.4.7](https://accessibility.build/wcag/2-4-7); [AAArdvark, 2.4.13 Focus Appearance](https://aaardvarkaccessibility.com/wcag-plain-english/2-4-13-focus-appearance/)). A thick, high-contrast custom focus ring is both accessible and can be a tasteful brand touch — this is one place where a little extra design flourish is well-spent.
- **Semantic structure:** one `<h1>` per page, headings in strict order (no skipping from h1 to h3 for style reasons), `<nav>`/`<main>`/`<footer>` landmarks, buttons are `<button>` and links are `<a>` (not `<div onclick>`).
- **Keyboard navigation:** the entire site — nav, project filters, contact form, any modal/lightbox — must be operable with Tab/Shift+Tab/Enter/Escape alone. Test this by unplugging your mouse for five minutes before shipping.
- **Alt text:** every meaningful image gets descriptive alt text; decorative images get `alt=""` so screen readers skip them. Project screenshots should describe what's shown, not just repeat the project title.

---

## 7. Performance Budget

Realistic 2026 targets, all measured at the **75th percentile of real-user field data** (this is how Google evaluates Core Web Vitals — 75% of visits must hit "good," not just your one test run) ([web.dev / Core Web Vitals field-data methodology, summarized in](https://www.corewebvitals.io/core-web-vitals)):

| Metric | Good | Poor (fails) |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | > 4.0s |
| **INP** (Interaction to Next Paint) | < 200ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | > 0.25 |

**Page-weight budget:** the median page on the web is already over 1MB, which is a bad baseline, not a target ([web.dev, Performance Budgets 101](https://web.dev/performance-budgets-101/index.html)). Aim to keep the **critical-path resources needed for first paint under ~170KB compressed** (HTML+CSS+critical JS) so the site stays fast even on a mid-range phone on a throttled connection; total page weight including images ideally stays under 1–1.5MB for a content page.

**What blows the budget on a personal site, specifically:**
- Unoptimized hero images/video (serve responsive `srcset` WebP/AVIF; never a raw multi-MB PNG background).
- A full icon-font or animation library (GSAP, Lottie, three.js) loaded for one decorative flourish — tree-shake or replace with CSS.
- Web fonts loaded as multiple full families/weights instead of subset WOFF2 (see §2).
- Render-blocking third-party embeds (analytics, chat widgets, social embeds) loaded synchronously in `<head>` — defer or lazy-load them.
- Layout shift from images/ads/embeds without reserved dimensions (`width`/`height` attributes or `aspect-ratio` CSS) — this is the #1 cause of CLS failures.

---

## 8. Mobile-First and Responsive Breakpoints

Design and build the single-column, small-viewport layout first, then progressively enhance for wider screens — this forces genuine content prioritization (what actually matters gets to stay) rather than shrinking a desktop design down. A pragmatic breakpoint set:

- **< 480px** — small phones (base styles target this)
- **480–768px** — large phones / small tablets portrait
- **768–1024px** — tablets / small laptops
- **1024–1280px** — laptops/desktops (typical content max-width lives here)
- **> 1280px** — large monitors (constrain content max-width; don't let line length or hero images stretch infinitely)

Touch targets ≥ 44×44px, no hover-only interactions (mobile has no hover), and test real devices — over half of web traffic is mobile, so a personal site that's merely "responsive" on a resized desktop browser is not sufficiently tested.

---

## 9. Information Architecture: What Pages a Personal Site Needs

Minimum viable set, in the order a visitor should encounter them:

1. **Home** — the five-second pitch (who/what), a highlight of 2–3 best projects, and a clear path to Work and Contact. Not a full CV dump.
2. **Work / Projects** — the substantive proof. Each project entry: problem, your specific role, approach, outcome/impact, and links (live demo, repo, case study). 3–6 strong projects beat 15 thin ones.
3. **About** — the human context: how you got here, what you're focused on now, what you're like to work with. This is where a controlled amount of personality/photo belongs.
4. **Contact** — a real email (mailto or a lightweight form), plus links to GitHub/LinkedIn/resume. Don't bury this behind a contact-form-only wall if you want people to actually reach you.
5. **Resume/CV** (optional but high-value for job search) — an actual downloadable PDF/print-friendly page, not only a re-statement of the About page.
6. **Blog/Writing** (optional) — valuable for credibility and SEO if you'll actually maintain it; an empty or abandoned blog hurts more than having none.

Skip: dedicated "Services," "Testimonials," or "Process" pages unless you're freelancing and courting clients — those are agency-site conventions, not personal-site necessities ([Wix, Architecture Portfolio](https://www.wix.com/blog/2021/01/architecture-portfolio-website/); general portfolio-IA consensus across sources reviewed).

---

## 10. Content and Voice

Writing about yourself is the part engineers most often get wrong in both directions — either a dry list of technologies, or an overcompensating highlight reel. Two concrete techniques:

- **Lead with what you do for others/the work, not your title.** "I build backend systems that keep checkout reliable at scale" reads more concretely and less boastfully than "Senior Software Engineer." State outcomes, not adjectives about yourself — let the reader supply the adjective ("impressive," "sharp") rather than you supplying it for them.
- **Write ~20% more direct than feels comfortable, then cut adjectives, not facts.** Underselling (false modesty: "just messing around with...", "a small project I made...") is as much a credibility problem as overselling, because it makes the reader do the work of recognizing your actual skill level. State what you built and its real scope/impact plainly; save the humility for tone (plain language, no superlatives like "revolutionary" or "cutting-edge") rather than for minimizing the substance ([Write to Done, Writing About Yourself Without Being Arrogant or Apologetic](https://writetodone.com/writing-about-yourself-without-being-arrogant-or-apologetic/)).
- Keep paragraphs short and scannable — 2–3 sentences — and use first person throughout; third-person bios on a personal site read as an affectation.

---

## 11. Named Anti-Patterns (and why each fails the "flashy humility" test)

- **Autoplay video/audio heroes.** Fights the user for control, burns the performance budget (large media on first load), and is disruptive/inaccessible for motion- and sound-sensitive visitors who didn't ask for it to start.
- **Parallax stacks (multi-layer scroll parallax everywhere).** Adds implementation complexity and jank for a purely decorative effect; explicitly flagged as something to avoid on mobile-first or SEO-critical sites, and it's a documented vestibular-disorder trigger if not gated by `prefers-reduced-motion` ([Vulk, Apple-style scroll sites](https://vulk.dev/blog/how-to-build-an-apple-style-scroll-website-with-ai); [css-scroll-driven.com](https://www.css-scroll-driven.com/accessibility-inclusive-motion-standards/implementing-prefers-reduced-motion/)).
- **Custom cursors.** Overrides a native OS affordance the visitor already understands, breaks accessibility tooling and touch devices (no cursor exists there at all), and communicates nothing about you or your work — pure novelty.
- **Splash/intro screens ("click to enter," logo-reveal loaders).** Adds an artificial extra step before the content the visitor came for; every second of delay here is pure friction with zero informational payoff.
- **Scroll-jacking (overriding native scroll speed/snapping the user through sections against their input).** Removes the user's control over their own reading pace and frequently breaks browser back/forward and mid-page linking.
- **Endless "creative-developer" gradient-blob heroes with a floating 3D object.** Signals "I copied a template/Awwwards trend" rather than "here is what I actually do" — it's decoration with no informational content, and it's now common enough to be its own cliché rather than distinctive.
- **Full-page loading animations for a static site.** If there's no actual heavy asset being fetched, an artificial spinner/animation is theater that adds perceived latency.
- **Infinite/looping background video or canvas animation running behind text.** Competes with the text for attention and usually drags down INP/CPU on lower-end devices for a purely ambient effect.
- **Justified rationale for all of the above:** every one of these techniques optimizes for "look what I can build" over "here is what you need to know" — which is precisely the inversion the governing lens (catchy but functional, not eye-flashing) warns against.

---

## 12. SEO, Metadata, and the Practical Value of a Personal Site

**Why it matters concretely:** surveys of hiring managers report meaningfully higher perceived credibility and callback rates for candidates with a personal site versus a LinkedIn profile alone, and a large majority of employers now search for candidates online before/during hiring decisions — a personal site is one of the few pieces of your online presence you fully control the framing of ([The Interview Guys, Personal Website Examples 2026](https://blog.theinterviewguys.com/personal-website-examples-to-inspire-your-own-in-2026/)). Treat these hiring-manager-behavior figures as directional (marketing-blog sourced, not academically rigorous) but the underlying logic is sound: a controlled, well-designed personal site is a credibility signal that social profiles can't replicate.

**Practical metadata checklist:**
- Unique `<title>` per page: `Name — what you do` on Home, `Project Name — Name` on project pages.
- Unique meta description per page (~150–160 chars), written for a human skimming search results, not keyword-stuffed.
- Open Graph + Twitter Card tags (`og:title`, `og:description`, `og:image`, `twitter:card`) so links you share render properly.
- `Person` and `CreativeWork`/`Article` structured data (JSON-LD) on the homepage and project/blog pages respectively — this both helps traditional search and gives AI-answer engines a clean, unambiguous source to cite ([LawSEO, Role of Metadata in SEO](https://lawseo.com/seo/the-role-of-metadata-in-seo-2026-guide/)).
- Descriptive image alt text doubles as both an accessibility requirement (§6) and an SEO signal — don't treat it as optional boilerplate.
- A single canonical URL per page, a sitemap.xml, and a robots.txt that doesn't accidentally block indexing (common failure on JS-framework sites).
- Semantic HTML headings (§6) are also what search engines and AI summarizers parse for structure — accessibility and SEO reinforce each other here, not a tradeoff.

---

## Sources

- [NN/G — Visual Hierarchy in UX: Definition](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/)
- [NN/G — 5 Principles of Visual Design in UX](https://www.nngroup.com/articles/principles-visual-design/)
- [NN/G — Aesthetic and Minimalist Design (Usability Heuristic #8)](https://www.nngroup.com/articles/aesthetic-minimalist-design/)
- [NN/G — The Characteristics of Minimalism in Web Design](https://www.nngroup.com/articles/characteristics-minimalism/)
- [web.dev — Typography](https://web.dev/learn/design/typography/)
- [web.dev — Performance Budgets 101](https://web.dev/performance-budgets-101/index.html)
- [web.dev — Your First Performance Budget](https://web.dev/your-first-performance-budget/)
- [WCAG 2.2 Quick Reference (W3C)](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM — Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
- [WCAG 2.4.7 Focus Visible — accessibility.build](https://accessibility.build/wcag/2-4-7)
- [WCAG 2.4.13 Focus Appearance — AAArdvark](https://aaardvarkaccessibility.com/wcag-plain-english/2-4-13-focus-appearance/)
- [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)
- [css-scroll-driven.com — Implementing prefers-reduced-motion](https://www.css-scroll-driven.com/accessibility-inclusive-motion-standards/implementing-prefers-reduced-motion/)
- [Vulk — How to Build an Apple-Style Scroll Website](https://vulk.dev/blog/how-to-build-an-apple-style-scroll-website-with-ai)
- [Smashing Magazine — Balancing Line Length and Font Size in Responsive Web Design](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/)
- [UX Planet — The 60-30-10 Rule for UI Color](https://uxplanet.org/the-60-30-10-rule-a-foolproof-way-to-choose-colors-for-your-ui-design-d15625e56d25)
- [Vision Australia — Accessible Digital Colour Palettes Using 60-30-10](https://www.visionaustralia.org/business-consulting/digital-access/Creating-accessible-digital-colour-palettes-60-30-10-design-rule)
- [sixtythirtyten — 60-30-10 Dark Mode Color Palette (CSS Variables, Contrast, prefers-color-scheme)](https://www.sixtythirtyten.co/blog/60-30-10-dark-mode-color-palette-css)
- [Write to Done — Writing About Yourself Without Being Arrogant or Apologetic](https://writetodone.com/writing-about-yourself-without-being-arrogant-or-apologetic/)
- [The Interview Guys — 10 Personal Website Examples to Inspire Your Own in 2026](https://blog.theinterviewguys.com/personal-website-examples-to-inspire-your-own-in-2026/)
- [LawSEO — The Role of Metadata in SEO: 2026 Guide](https://lawseo.com/seo/the-role-of-metadata-in-seo-2026-guide/)
- [Wix — Architecture Portfolio Website Examples and Tips](https://www.wix.com/blog/2021/01/architecture-portfolio-website/)
- [corewebvitals.io — What Are the Core Web Vitals? LCP, INP & CLS Explained](https://www.corewebvitals.io/core-web-vitals)
