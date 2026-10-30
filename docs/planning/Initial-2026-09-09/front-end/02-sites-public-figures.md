# Survey: Real Personal Websites of Public Figures

Date: 2026-09-09
Method: WebFetch on live markup + Playwright screenshots for a subset (jessicahische.is, karpathy.ai, dhh.dk) where rendered visuals were needed beyond raw HTML text.

Governing lens: does the site read as **"catchy but still functional, not eye-flashing — flashy humility"**? Fame is not automatically evidence of good design; several of these are over-produced agency builds and are judged accordingly.

---

## 1. Neil Gaiman — neilgaiman.com

- **Who**: Novelist (*American Gods*, *Coraline*, *The Sandman*).
- **Layout & navigation**: Multi-page. Persistent top nav: Journal, Neil's Work, Cool Stuff & Things, About Neil, Message Boards, Where's Neil, Search, Links & Downloads. Homepage is a stacked feed: New Releases → Journal (dated blog entries) → Coming Soon (event countdown).
- **Typography**: Not distinctive — standard web body text, no custom display face evident in the fetched markup.
- **Color**: Light, text-forward, no strong palette statement.
- **Motion**: Subtle — a countdown timer for a themed event ("All Hallow's Read") is the only dynamic element.
- **What to borrow**: Journal-as-homepage keeps the site perpetually "alive" without a redesign; social share links are tucked into a dedicated block rather than cluttering the header.
- **What to avoid**: Menu sprawl (8+ top-level items) and a design that hasn't been visually refreshed in years — reads dated rather than intentionally minimal.
- **Verdict**: Plain. Functional and content-first, but not catchy — humility without much flash at all.

---

## 2. Jonathan Coulton — jonathancoulton.com

- **Who**: Musician/songwriter, known for internet-era novelty and geek-culture songs ("Thing a Week"), JoCo Cruise.
- **Layout & navigation**: Multi-page, top nav (News, Shows, Bio, FAQ, Store). Homepage leads with logo + "Listen now" CTA, then a carousel of promo tiles (mailing list, albums, cruise, store), then a dated news post, recent releases, tour dates.
- **Typography**: Sans-serif throughout, no unusual display type.
- **Color**: Light/neutral base with sparse colored tiles as accents.
- **Motion**: Subtle — rotating promotional tile carousel.
- **What to borrow**: Tour dates and store are surfaced immediately for a working touring musician — the site is unapologetically a funnel to shows/merch, which is honest about its purpose.
- **What to avoid**: The promo-tile carousel format is closer to a small record label's marketing page than a personal site; little of Coulton's actual voice/personality shows through the layout.
- **Verdict**: Leans flashy-lite/promotional rather than personal — reads as a mini commercial media site more than "someone's home on the web."

---

## 3. Jessica Hische — jessicahische.is

- **Who**: Lettering artist, illustrator, type designer, author (children's books, custom logotypes).
- **Layout & navigation**: Long single scrolling homepage with a slim top nav (Portfolio, Work with Me, Resources, Blog, About, Shop). Confirmed via rendered screenshot: sage-green hero band with a hand-lettered wordmark and hand-lettered tagline ("I'm a lettering artist, bestselling author, and serial entrepreneur..."), a row of small "recent work" thumbnails, a **modal newsletter signup popup fires on load**, then a "Featured Project" block (book cover art + case-study copy), a "Selected Logos" strip, a second book feature, a shop teaser banner, and a footer built from four solid-color CTA blocks (green/pink/orange/dark-green: "Let's Make Something," "Book a Session," "Learn with Me," "Join Studioworks") sitting above a hand-drawn scalloped wave border.
- **Typography**: Mixed — hand-lettered display type (her own lettering work) for headlines/logo, clean sans-serif for body copy. Strong contrast between the two registers is deliberate: the *headlines are the product demo*.
- **Color**: Saturated, playful, multi-color — sage green, coral/pink, teal, mustard/orange — pulled directly from her book-cover and logo work rather than a generic brand palette.
- **Motion**: Subtle-to-moderate — the interruptive newsletter modal is the most "motion" any site in this survey uses; otherwise just a long scroll with static blocks.
- **What to borrow**: Letting the craft itself *be* the visual design (hand lettering as both content and decoration) is an honest, non-generic way to be "flashy" — it's not flash bolted onto unrelated content.
- **What to avoid**: The load-blocking newsletter popup; the homepage runs very long with several nearly-empty full-width color sections that add scroll fatigue without adding information.
- **Verdict**: Catchy-flashy — but earns it, because the flash *is* the résumé. This is the one site in the set where "flashy" is close to correct rather than a compromise.

---

## 4. Andrej Karpathy — karpathy.ai

- **Who**: AI researcher/educator — founding OpenAI member, former Tesla Director of AI, creator of Stanford CS231n.
- **Layout & navigation**: True single page, **no nav bar at all**. Confirmed via screenshot: circular headshot + name + one-line tagline + row of social icons at top; below that, a left-hand vertical timeline (year ranges) paired with small monochrome company logos (Eureka Labs, OpenAI, Tesla, Stanford, UBC, Toronto) marking each career chapter; then plain section headers ("bio," "featured talks," "teaching," "featured writing," "pet projects," "publications," "misc unsorted") each rendered in lowercase; talks section is a dense grid of YouTube video thumbnails; publications are a plain citation list.
- **Typography**: Sans-serif, browser-default scale, no display type, no oversized headers — deliberately unstyled.
- **Color**: Pure black text on white, zero brand palette — color only appears incidentally in company logos and video thumbnails.
- **Motion**: None. The page footer literally states "0 frameworks were used to make this simple responsive website."
- **What to borrow**: Radical content density with zero decoration — a single page that's essentially a CV/portfolio/blog index that respects the reader's time; using recognizable third-party logos as timeline markers is a clever, low-effort way to convey credibility without self-description.
- **What to avoid**: It arguably swings past "humble" into "under-designed" — no visual hierarchy beyond font-weight/size, which only works because the content and the name carry it.
- **Verdict**: Humble almost to a fault — the most "plain" site in the set, but the plainness reads as confidence, not neglect, precisely because of who's behind it.

---

## 5. David Heinemeier Hansson (DHH) — dhh.dk

- **Who**: Creator of Ruby on Rails, co-owner of 37signals (Basecamp/HEY), author, endurance race car driver.
- **Layout & navigation**: Single page, no nav bar. Confirmed via screenshot: circular profile photo centered at top, name rendered in letter-spaced small caps with the initials "D" and "H" in a blue accent color, one-sentence bio line beneath. Content is a narrow centered column (roughly 650–700px) of bold section headers — "Creator of Ruby on Rails," "Creator of Omarchy," "Co-owner of 37signals," "Best-selling author," "Le Mans & WEC class-winning racing driver," "Investor in Danish startups," "Shopify board member," "Podcast guest," "Family man" — each a short paragraph with inline blue text links. Page ends with three large, unstyled photographs (racing shots).
- **Typography**: Serif-leaning body face (not a generic sans), good line length from the narrow column, bold headers create clear scan points.
- **Color**: Cream/off-white background, black body text, one blue accent color used consistently for the name and links — the only color statement on the page.
- **Motion**: None.
- **What to borrow**: The narrow single-column "chapters of a life" structure with one consistent accent color is the closest thing in this survey to the actual "flashy humility" target — restrained, well-typeset, personal without performing.
- **What to avoid**: Nothing structurally — if anything, this is the most exportable pattern of the whole set.
- **Verdict**: Humble-flashy in the right proportion — one of the two best-balanced sites surveyed.

---

## 6. Scott Aaronson — scottaaronson.com

- **Who**: Theoretical computer scientist (UT Austin), quantum computing/complexity theory researcher, former OpenAI AI-safety sabbatical.
- **Layout & navigation**: Single page, no nav bar, sections separated by horizontal rules and bold text headers: bio → book promo → research links → lecture notes → courses → students → postdocs → contact.
- **Typography**: Browser-default body text, no custom typography, minimal size hierarchy — reads as hand-written HTML rather than a themed site.
- **Color**: Black on white, no palette at all.
- **Motion**: None.
- **What to borrow**: Nothing decorative — but the sheer information density (every student, every course, every talk, linked) is a legitimate model for an academic who wants the site to function as a living CV.
- **What to avoid**: The early-2000s aesthetic reads as neglected rather than deliberately minimal — there's a difference between Karpathy's "0 frameworks, on purpose" and this site's "never touched since 2005."
- **Verdict**: Plain — informative but not remotely catchy; useful as the "avoid" reference point for what unintentional plainness looks like versus Karpathy's intentional plainness.

---

## 7. Cal Newport — calnewport.com

- **Who**: Georgetown CS professor, author of *Deep Work*, *Digital Minimalism*; *New Yorker* contributor, podcast host.
- **Layout & navigation**: Multi-page, standard top nav with "Skip to content" (accessible, likely WordPress-based). Homepage: "Meet Cal Newport" hero → newsletter signup CTA → "Cal the Writer" section → "Cal the Academic" section → featured articles (general vs. academic audience, split) → "Technology and Culture Trilogy" book showcase → footer.
- **Typography**: Sans-serif, hierarchical heading scale typical of a professionally themed content site.
- **Color**: Light background, dark text, no bold palette — restrained but polished.
- **Motion**: None detected.
- **What to borrow**: Explicitly splitting "the writer" identity from "the academic" identity is a clean way to serve two different audiences without confusing either.
- **What to avoid**: The newsletter-CTA-first structure and stacked marketing sections make it read like a book-launch funnel more than a personal home.
- **Verdict**: Leans flashy in the "personal brand as content-marketing site" sense — competent, but closer to an agency-built author platform than a humble personal page.

---

## 8. Werner Vogels — allthingsdistributed.com

- **Who**: Amazon CTO, writes on distributed systems and cloud architecture.
- **Layout & navigation**: Multi-page blog. Minimal top nav (home, "Now Go Build," archive, profile). Hero banner image + one-line tagline ("Werner Vogels on building scalable and robust distributed systems"), then 3 featured articles, then a reverse-chronological article list, then footer.
- **Typography**: Plain sans-serif, hierarchy through size only.
- **Color**: Dark text on light background, no palette statement beyond the hero banner image itself.
- **Motion**: None.
- **What to borrow**: The tagline doubles as both bio and mission statement in one line — efficient framing for a technical-blog homepage.
- **What to avoid**: Nothing egregious; it's simply a long-running, unglamorous blog template — a reasonable but not inspiring reference.
- **Verdict**: Humble-plain — functional and consistent with 15+ years of continuous blogging, no attempt at flash.

---

## 9. John Maeda — maeda.pm

- **Who**: Design leader/technologist (ex-RISD president, ex-Automattic/Publicis design exec), writes on design/tech/leadership.
- **Layout & navigation**: Multi-page blog with sticky top nav, "Skip to content" link, sidebar archive going back to 1998, and a plain intro line beneath the header instead of a hero image.
- **Typography**: Sans-serif at varying scale for hierarchy, no custom display type.
- **Color**: Light background, dark text, small blue accent squares/icons used sparingly.
- **Motion**: Minimal — a search overlay is the only interactive flourish noted.
- **What to borrow**: The multi-decade visible archive (1998–2026) is itself a credibility signal — showing depth of output rather than claiming it.
- **What to avoid**: Otherwise fairly generic blog theme; nothing distinctly "Maeda" about the visual design despite him being a well-known designer, which is a little ironic.
- **Verdict**: Humble-functional, mild personality — safe but underwhelming given the person's design pedigree.

---

## 10. Tim Ferriss — tim.blog

- **Who**: Author (*The 4-Hour Workweek*), podcaster (1B+ downloads), angel investor.
- **Layout & navigation**: Multi-page, fixed top nav. Homepage: hero image + testimonials → podcast spotlight → featured interviews → recent episodes → blog posts → videos → about → book showcase → footer with extensive link directory.
- **Typography**: Sans-serif, clear headline/body hierarchy typical of a media property.
- **Color**: Light background, black/gray/white base with selective color highlights in CTA buttons and logos.
- **Motion**: Subtle — embedded podcast players and standard hover/transition states, nothing dramatic.
- **What to borrow**: Nothing distinctly personal — this is closer to a media-company homepage (many "featured," "recent," "as seen in"-style modules) than a personal site pattern worth porting to an ordinary individual's page.
- **What to avoid**: Section-stacking fatigue — nine-plus distinct content modules on one homepage is closer to a magazine's homepage than a person's; it's built for SEO/conversion, not for a visitor getting to know someone.
- **Verdict**: Just flashy — reads as an agency-built media/marketing property, not a personal site. Fame plus a large existing audience is what makes this format tolerable at all.

---

## Patterns that recurred

1. **Content-first blogs stay plainest.** Gaiman, Vogels, Maeda, and Aaronson — all people whose site's real job is hosting their writing — use minimal navigation, little to no hero imagery, and almost no color. Personality comes through voice, not visual design.
2. **Craft-forward sites let the craft be the decoration.** Hische's hand lettering *is* both the product and the page chrome. Karpathy's dense, logo-annotated timeline *is* both his CV and his design language. Neither imports generic "flashy" decoration — the visual flourish (or lack of it) is drawn directly from what the person does.
3. **Commercial/funnel sites blur into agency work regardless of the person's field.** Ferriss, Newport, and Coulton all stack marketing modules (newsletter CTAs, "featured" grids, store/tour links) — these read less like personal pages and more like media-brand or record-label homepages, independent of how famous the person is.
4. **Single narrow column with no nav bar recurs among the most restrained sites** — DHH, Karpathy, Aaronson all drop the nav entirely in favor of one long scroll, relying on section headers for wayfinding.
5. **Motion is almost always functional, never decorative.** Where anything moves (Coulton's carousel, Hische's modal, Gaiman's countdown timer), it serves a concrete purpose (promotion, list-building, event timing) — nobody in this set uses animation purely for visual flourish.
6. **A single accent color, used consistently, is the most common "flash" device** — DHH's blue, Maeda's blue squares, Hische's palette family — rather than a fully saturated brand system.

## Hypothesis: how public-figure sites differ from ordinary personal sites — and what's safe to copy

Fame changes what the site has to *prove*, not what makes it good. Concretely:

- **Trust is pre-paid.** A famous person's sparse site (Karpathy, DHH, Aaronson) reads as confident restraint because the visitor already knows who they are and why they matter. An unknown person's equally sparse site reads as unfinished, because the visitor has no other source of that trust. → *Not safely transferable*: minimalism-as-confidence requires reputation the visitor already has; an ordinary site still needs to earn context on the page itself (a real "why should you care" section).
- **Fame lets a bio be optional or one line.** Several sites here (DHH, Karpathy) spend almost no words introducing the person — the "about" is implicit. → *Not transferable* for most personal sites, which still need an explicit, well-written introduction.
- **Audience-monetization patterns (funnels) only work with an existing audience.** Newsletter CTAs, "featured on," tour dates, book-launch modules (Ferriss, Newport, Coulton) function as conversion tools for people who already have thousands of engaged followers. Copying this structure onto a site with no existing audience just produces empty-feeling CTAs and self-promotion with nothing to back it. → *Not transferable* without the audience.
- **What genuinely is transferable, independent of fame**: content-first structure over decorative hero banners; a single narrow readable column; one consistent accent color instead of a full palette; motion used only when it serves a real function (never decoration for its own sake); and — most importantly — letting the actual work/craft supply the visual interest instead of importing generic "modern" design on top of unrelated content. These are the sites (Hische, DHH, Karpathy) that hold up as models regardless of who's behind them; the ones that don't hold up (Ferriss, Newport) fail specifically because they substitute production value for personality, which fame can currently paper over but ordinary personal sites cannot.
