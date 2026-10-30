# Survey: Personal Websites of Ordinary People

Source pool: the January 2026 Hacker News thread ["Ask HN: Share your personal website"](https://news.ycombinator.com/item?id=46618714) (950 points, 2,386 comments, framed explicitly around individually-hosted, non-corporate sites), cross-checked against related threads (["Ask HN: Good Examples of Personal Websites"](https://news.ycombinator.com/item?id=40989144), ["Ask HN: Who has the best personal website/blog?"](https://news.ycombinator.com/item?id=21100377)). Sites below are indie devs, a PhD researcher, a systems engineer, a media artist, a solo maker, and bloggers — no celebrities, no agencies. Rubric: **catchy but functional, "flashy humility."**

---

## 1. xeiaso.net

- **URL**: https://xeiaso.net
- **Who / what they do**: Xe Iaso — technical educator, conference speaker, Twitch streamer/VTuber, CEO of Techaro. Writes about DevOps, AI/ML infra, and "cursed" technical experiments.
- **Layout & navigation**: Single scrolling homepage with a persistent top nav (Home, Blog, Contact, Donate, Talks, Signalboost). Hero = avatar (a stylized pink-haired orca character) + short bio blurb, then stacked sections: Recent Articles → Support Options → Notable Publications → Highlighted Projects → Quick Links → footer.
- **Typography**: Sans-serif system, run through a self-authored CSS framework the site calls "Xess" (linked from the footer as "my personal CSS framework"). Clear heading/body size split; no serif anywhere.
- **Color**: Light-mode base, pastel/pink accent tying to the avatar mascot. No dark-mode toggle surfaced in the fetch.
- **Motion level**: Subtle — nothing beyond standard hover states was detectable from source; the visual interest comes from the mascot illustration and copy voice, not animation.
- **What to borrow**: A single consistent mascot/avatar as a recurring brand anchor instead of a generic headshot; an extensive but low-key tag cloud at the footer for topic discovery; transparent "source code" and "site version" links in the footer.
- **What to avoid**: The tag cloud, if copied wholesale, can read as a wall of keywords for SEO rather than navigation — keep it small and curated.
- **Verdict**: Humble-flashy. The personality (mascot, "cursed" framing, self-built CSS framework) is loud in tone but the layout itself is a plain, readable stacked page.

---

## 2. amulya.no

- **URL**: https://amulya.no
- **Who / what they do**: Amulya Baral, final-year PhD researcher (Norwegian University of Life Sciences) studying antimicrobial resistance in cattle via metagenomics.
- **Layout & navigation**: Single page, horizontal top nav (Home, About, Blog, Portfolio). Centered profile photo in the hero, then a strictly linear vertical flow: intro → research description → hobbies (running, coffee, minimalism).
- **Typography**: Sans-serif, system font stack, no display type flourishes — just a clear heading hierarchy.
- **Color**: Plain light mode, white/near-white background, dark text, no accent color called out. No dark-mode toggle observed.
- **Motion level**: None detected — fully static, text-forward.
- **What to borrow**: Mixing a genuinely technical claim ("I've gone through about 1 million prescription records") with a plain personal-interests section immediately after it — credibility and humanity in the same scroll, no separate "fun facts" gimmick page.
- **What to avoid**: The site has essentially no distinguishing visual identity — it's the safest possible template, which risks blending into every other academic homepage.
- **Verdict**: Plain (functional, honest, but not catchy). A good floor example of "at minimum, do this."

---

## 3. gowtham.dev

- **URL**: https://gowtham.dev
- **Who / what they do**: Gowtham Gopalakrishnan, Systems Engineer at Freshworks, self-described "1x engineer."
- **Layout & navigation**: Multi-page (Blog, TIL, Colophon) with a top horizontal nav. Homepage is a landing page: profile photo, short bio, then a reverse-chronological "recent entries" feed pulling from blog + TIL.
- **Typography**: Sans-serif, minimal hierarchy manipulation — headings and body distinguished mainly by weight/size, not by a display font.
- **Color**: Light mode, dark text on light background, conventional.
- **Motion level**: None apparent.
- **What to borrow**: The explicit "TIL" (Today I Learned) micro-post stream sitting alongside full blog posts — gives the site a heartbeat between big posts without requiring polished long-form writing every time. Self-deprecating framing ("rants... from a 1x engineer") sets expectations honestly.
- **What to avoid**: A Colophon page is a nice touch but only works if it's actually maintained — a stale one undercuts the "engineer who ships" persona.
- **Verdict**: Humble-flashy in tone (self-aware copy), plain in visuals — copy voice is doing all the "catchy" work here.

---

## 4. ivanyu.me

- **URL**: https://ivanyu.me
- **Who / what they do**: Ivan Yurchenko, software engineer; blog covers JVM internals, Rust, Kafka protocol, property-based testing.
- **Layout & navigation**: Classic multi-page blog: top nav (My Talks, About), paginated post list, right sidebar with recent posts/categories/tags, circular author photo in the sidebar.
- **Typography**: Sans-serif, sized hierarchically for post titles vs. metadata.
- **Color**: Light background, dark text, no dark mode evident.
- **Motion level**: None.
- **What to borrow**: The self-deprecating tagline "Yet another programming blog" as a deliberate humility signal, paired with genuinely deep technical content — sets a tone of "I'm not selling you anything" before a single post is read.
- **What to avoid**: The two-column blog-with-sidebar pattern is dated (circa-2012 WordPress feel) — functional but not catchy; a modern single-column feed with inline tags would look less templated.
- **Verdict**: Plain. Content-first to a fault — reads as a Jekyll/Hugo default theme with a name on it.

---

## 5. chollinger.com

- **URL**: https://chollinger.com
- **Who / what they do**: Christian Hollinger, Principal Software Engineer at ngrok (data platforms/distributed systems); also runs a geospatial SaaS side-project (SkaldMaps) and a homelab.
- **Layout & navigation**: Multi-page (Home, About, Blog, Tags, Talks) with header social icons (GitHub, LinkedIn, Bluesky, Twitter, RSS). Hero is a centered portrait + bio + a set of labeled skill categories (Software Development, Data Engineering, Infrastructure, Databases, Cloud), followed by a blog preview with post thumbnails.
- **Typography**: Sans-serif throughout, clear size hierarchy, generous whitespace.
- **Color**: Has an actual light/dark theme toggle — one of the few sites in this set with one.
- **Motion level**: Minimal/none — no flashy transitions, the toggle is the only interactive flourish.
- **What to borrow**: Grouping skills into named categories rather than a flat skill-bar wall; running a visible side project (SkaldMaps) alongside the day job as proof-of-work instead of a bullet-point résumé claim; the dark-mode toggle for basic accessibility/preference respect.
- **What to avoid**: Nothing egregious, but the "skill categories" block can tip into résumé-keyword territory if not kept short.
- **Verdict**: Humble-flashy — professional polish (dark mode, real side project, clean nav) without any gimmick or unnecessary animation.

---

## 6. jordan.matelsky.com

- **URL**: https://jordan.matelsky.com
- **Who / what they do**: Jordan Matelsky, computational neuroscientist at Johns Hopkins APL (PhD, UPenn) — connectomics, ML, computational medicine.
- **Layout & navigation**: Single page, no real nav beyond inline links. Hero tagline "Code, Coffee, & Cortex" next to a headshot, immediately establishing personality before credentials. Section order: intro → résumé (external links) → contact/social → "One-Hour Projects" → blog.
- **Typography**: Minimal markup, sans-serif-leaning, no decorative type.
- **Color**: Not distinctly called out — plain light presentation.
- **Motion level**: None.
- **What to borrow**: The "One-Hour Projects" section is the standout idea — a dedicated, explicitly time-boxed bucket for small throwaway builds, which lets a serious academic show playfulness without pretending every project is a magnum opus. Self-aware humor in section copy ("keeps me off the streets").
- **What to avoid**: Relying entirely on inline-link navigation with no visible menu can hurt scannability on longer pages.
- **Verdict**: Humble-flashy — the pun-heavy tagline and "One-Hour Projects" bucket supply personality; the actual page chrome stays plain.

---

## 7. rybakov.com

- **URL**: https://rybakov.com
- **Who / what they do**: Michail Rybakov, media artist/artistic researcher — performative objects, installations, and essays on AI, the body, and ecology.
- **Layout & navigation**: Single-page portfolio, horizontal top nav (Projects, Blog, Teaching, About), logo-as-home-link. Hero introduction followed by a grid of project cards (title + one-line thematic statement + placeholder image area).
- **Typography**: Sans-serif, consistent sizing across project titles with descriptive subtitles.
- **Color**: High-contrast light background, dark text.
- **Motion level**: Not indicated — likely subtle at most (no keyframe/animation evidence surfaced).
- **What to borrow**: The playful project-naming convention (e.g. "gradient.horse: Draw a horse. Watch it run!") turns a portfolio grid into something worth reading caption-by-caption instead of skimming past; closing the page with a quote in the artist's native language for cultural grounding.
- **What to avoid**: Placeholder-style image treatment on project cards can read as unfinished if thumbnails aren't eventually filled in with real work stills.
- **Verdict**: Humble-flashy — conceptually playful copy inside an otherwise restrained grid.

---

## 8. lekevicius.com

- **URL**: https://lekevicius.com
- **Who / what they do**: Jonas Lekevicius, independent maker/former product designer (Vilnius) — creator of the game "Infinite Loop" (50M+ plays), co-founder of Lemon Labs (acquired), hosts a weekly tech podcast and monthly newsletter.
- **Layout & navigation**: Single, long modular page: hero → newsletter signup → podcast block with platform links → featured project (Infinite Loop) → professional background → a client-work grid (15+ logos/projects: Vinted, Barclays, Coca-Cola) → personal bio → footer social/contact.
- **Typography**: Inter (explicitly credited: "Typeset in Inter"), sans-serif, built with Gatsby.
- **Color**: Light mode primary.
- **Motion level**: Not confirmed from source (no keyframes surfaced), but the modular block structure suggests at most subtle scroll reveals typical of a Gatsby marketing-style build.
- **What to borrow**: Leading with an active side project that has real, quantified traction (50M plays) rather than job titles; embedding the newsletter/podcast signup inline near the top rather than hidden in a footer; a single page that serves as portfolio + media hub + newsletter funnel without needing separate site sections.
- **What to avoid**: A 15+ item client-logo grid, if not curated, risks visually mimicking an agency site rather than a personal one — pick fewer, more relevant examples.
- **Verdict**: Leans flashy (traction numbers, podcast, newsletter, client grid) but stays functional because everything ties back to one person's actual work — reads as ambitious-but-earned rather than performative.

---

## 9. dianazink.com

- **URL**: https://dianazink.com
- **Who / what they do**: Diana Zink, product builder/designer working on feedback-mechanism and community products as an alternative to ad-driven platforms.
- **Layout & navigation**: Multi-page, horizontal top nav (Home, Bio, Articles dropdown). Name/logo prominent in hero; social links and project list positioned as sidebar-style elements.
- **Typography**: Clean sans-serif with clear hierarchy, no display flourishes.
- **Color**: Light, neutral-toned, no color palette drama.
- **Motion level**: None — deliberately restrained, matching her own stated philosophy about respecting readers' "brain hours" and cognitive load.
- **What to borrow**: The design directly enacts the site's stated thesis (reducing noise/cognitive load) — a rare example of form matching argument. Worth borrowing the discipline of cutting anything that doesn't serve the reader's attention.
- **What to avoid**: Nothing structurally wrong, but the site is so restrained it risks being forgettable without the essays themselves carrying it.
- **Verdict**: Humble-flashy through philosophy, not decoration — "flashy" here means intellectually distinctive, not visually loud.

---

## 10. madebyoll.in

- **URL**: https://madebyoll.in
- **Who / what they do**: Ollin Boer Bohan, independent ML/emulation researcher — neural networks for game/world emulation and diffusion models.
- **Layout & navigation**: Single page, minimal vertical structure: header/name → reverse-chronological project list → footer with social/contact (GitHub, Mastodon, Twitter, email).
- **Typography**: Sans-serif, larger display size for the name, consistent sizing for project titles/metadata.
- **Color**: Light background, dark text, no dark-mode toggle detected.
- **Motion level**: None apparent.
- **What to borrow**: Radical simplicity — a project list is the entire site, and each entry apparently links straight to real, working demos/research rather than descriptions. Good model for a research-heavy portfolio where the work should speak louder than the chrome.
- **What to avoid**: A pure reverse-chronological list with no categorization can get hard to navigate once the project count grows past a screen or two.
- **Verdict**: Plain, deliberately so — a no-nonsense researcher's portfolio; catchiness would come only from the linked project demos, not the site shell itself.

---

## 11. staticnotes.org

- **URL**: https://staticnotes.org
- **Who / what they do**: Rob, an experienced engineer blogging about data engineering, LLMs, software architecture, plus history/science tangents.
- **Layout & navigation**: Multi-page blog architecture with a full top nav (Home, About, Posts, TIL, Feed, Books, Blogroll, RSS). Single-column body, a mixed-format "Recent" section (long posts, link-blog entries, quick TILs) and a "Featured" callout near the bottom.
- **Typography**: Standard web-safe sans-serif stack, minimal styling.
- **Color**: Light background, dark text, implied rather than stylistically asserted.
- **Motion level**: None.
- **What to borrow**: A "Blogroll" page and explicit RSS advocacy — actively pointing outward to other small sites is a genuinely IndieWeb move that most portfolio-style personal sites skip entirely; a "Books" page as a lightweight, low-effort content type that still shows personality.
- **What to avoid**: Nothing distinguishes this visually from any default static-site-generator theme — it's the definition of function without flash.
- **Verdict**: Plain but earnest — a working notebook, not a showcase, and comfortable being exactly that.

---

## Patterns that recurred across this cohort

1. **Single-column, top-nav, sans-serif is the overwhelming default.** Of 11 sites, none used a serif body font, none used a sidebar-heavy dashboard layout except the two blog-platform-style sites (ivanyu.me, staticnotes.org), and motion was essentially absent everywhere except a possible subtle toggle transition on chollinger.com.
2. **Self-deprecating or plainly honest framing in the tagline/bio** ("Yet another programming blog," "1x engineer," "keeps me off the streets," "gradient.horse: Draw a horse. Watch it run!") is the primary way these sites achieve "catchy" — voice and copy do the work that visual flourish does on agency sites.
3. **The footer/nav almost always includes RSS + a social link cluster** (Mastodon/GitHub/Bluesky/Twitter), signaling participation in a decentralized web culture rather than funneling to one platform.
4. **Real, specific proof-of-work beats generic skill claims.** Traction numbers (50M plays), dataset scale ("1 million prescription records"), and linked working demos appeared far more often than skill-percentage bars or buzzword lists.
5. **Dark mode is the exception, not the rule** — only chollinger.com clearly had one; most sites are light-only, plain-and-functional rather than "the switch is itself a flourish."

## What ordinary-person sites do BETTER than famous-person sites

- **Legible proof over branding.** A famous person's site often leans on name recognition and can get away with a nearly content-free hero; these sites had to earn trust in the first screen, so they front-load real numbers, real links, and real writing.
- **Honest scope-setting.** Taglines like "Yet another programming blog" or "1x engineer" set expectations the content then exceeds — a form of under-promising that celebrity sites, built for image management, rarely risk.
- **Actual RSS/blogroll/IndieWeb citizenship.** Ordinary personal sites tend to link outward generously (blogrolls, RSS badges, "here's my colophon") because they're part of a community of similar sites, not a broadcast channel — something almost no famous-person site bothers with.
- **Side projects as the main event, not a portfolio tile.** Sites like lekevicius.com and madebyoll.in treat an active, still-evolving project as the site's centerpiece rather than a static case study — it stays truthful because it's still being worked on.
- **Cheaper content types kept the sites alive.** TIL posts, one-hour-project logs, and link-blog entries (gowtham.dev, jordan.matelsky.com, staticnotes.org) let a solo person maintain momentum without needing a polished long-form post every time — a sustainability model a corporate or celebrity site doesn't need.

## Common failure modes of ordinary personal sites

- **Genuinely templated, undifferentiated presentation** (amulya.no, madebyoll.in, staticnotes.org, ivanyu.me) — functional and honest but visually indistinguishable from thousands of other Hugo/Jekyll/Gatsby default themes; nothing marks the page as belonging to *this* specific person beyond the text.
- **Stale secondary pages** — a Colophon, Talks, or Portfolio page is easy to spin up and easy to let rot; several sites in this set have exactly one page (the homepage/blog) that's clearly maintained while satellite pages look untouched for years.
- **Two-column sidebar blog layouts that read as dated** (ivanyu.me's categories/tags/recent-posts sidebar) — functional, but visually signals "2012 WordPress" rather than intentional minimalism.
- **Unfilled placeholder content** — rybakov.com's project cards use placeholder-style image treatment; a portfolio grid with unfinished visuals undercuts an otherwise strong concept.
- **No dark mode / no accessibility affordances** — the overwhelming majority default to light-only with no visible toggle, a small but real gap versus more actively maintained sites.
- **Flat, uncategorized long lists** — a pure reverse-chronological project or post list (madebyoll.in) becomes unnavigable once it outgrows a single screen, with no tagging or grouping to rescue it.
- **Client-logo or skill-bar walls creeping toward agency-site territory** — lekevicius.com's 15+ item client grid and the general pull toward "skill categories" blocks are the main places these otherwise-personal sites start to resemble corporate service pages rather than an individual's home.
