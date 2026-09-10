# Local Project Inventory

**Date:** 2026-09-09 · **Revised:** 2026-09-09 after user corrections (see §6)
**Scope:** research only — no site decisions made here.
**Sources:** each project's `.claude/CLAUDE.md`, its Claude memory directory, **all 20 Quant history logs read in full**, two EnglishTest_Tutor logs in full plus the rest grepped, and direct inspection of the repos. Session transcripts (`.jsonl`) were **not** read. `.env` files were not read.

**Standing caveat — read this before trusting anything below.** A project's CLAUDE.md and memory record what past sessions understood, not what is true. The first version of this document drew four conclusions from those files that the user corrected as wrong (§6). Repo files describe *intent*; only the user can confirm outcome and authorship. Verify with him before putting any claim here on a public site.

**The attribution problem, stated once and applying to everything below.** `docs/history/` entries are **Claude's session summaries**. Every "diagnosed", "verified", "measured" in them is Claude reporting its own work in his project. They are excellent evidence that rigorous work happened; they are *not* evidence of who did which part. §1 separates what the logs explicitly attribute to him from what they attribute to Claude, and marks the rest as unsplittable. Do not collapse that distinction to make the site stronger — that is exactly the error in §6.2.

**Correction to earlier work in this repo:** `00-design-summary.md` and `docs/user_personality.md` were written without ever looking outside `Personal_Website`. Neither reflects these projects.

---

## 1. Quant_VnStocks

**The strongest candidate of the set.**

**What it is.** Quantitative research and trading-strategy infrastructure for the Vietnamese stock market. Structured as a full quant pipeline — `data/` → `factors/` → `models/` → `portfolio/` → `execution/` → `risk/`, plus `ops/` for scheduling — mirroring the reference architecture in the Quant 4.0 position paper (Guo et al., 2024), kept in `docs/references/`.

**Status: research infrastructure, running unattended; one strategy screened to a negative result, one separate study with a positive result.** Verified: one strategy package (`cointegration_pairs`), 3 factors in `factors/definitions/factors.yaml`, seven study artifacts dated 2026-09-04, 20 history logs 2026-07-02 → 2026-09-07, **256 tests passing** (158 → 206 → 256 across three days in early September), 300,000,000 VND of paper capital. `paper_trading/` holds only its README — no runner pass has completed end to end; a Windows scheduled task is armed for Fridays 17:00.

**Stack.** Python, pandas/numpy, statsmodels, `vnstock` (free tier), PyYAML for factor definitions, scipy for mean-variance optimization, matplotlib/mplfinance/seaborn, pytest. A Windows scheduled task drives the weekly pass through PowerShell wrappers in `ops/`.

### Attribution

**Explicitly his, per the logs' own wording:**
- "Sharpe belongs to evaluating a strategy's returns, not to screening raw stock data" — forced a whole notebook to be rebuilt as pure data acquisition (07-12).
- Annualization must be derived empirically from real timestamps, never a hardcoded bars-per-day constant, because thin-traded symbols have genuinely fewer bars — recorded as "came from user feedback mid-session" (07-13).
- The 0.1% securities tax applies **on sale only**, correcting an earlier claim that ~15bps per side was right (09-04).
- "Why OCB? It's lower over 5 sessions but higher over 1 month" — the question that surfaced that the open position had bypassed the entry threshold on every baseline window, not just the stability filter (09-06).
- The CLI documentation complaint, in his own words: *"reading now feels like just add some random new -- that magically let the command works?"* — which produced a 624-line CLI reference (09-07).
- Endorsed reporting the negative result honestly; required `ops/` to be strategy-agnostic because more strategies are coming; ruled that CLAUDE.md carries no code examples, only rules and traps.

**Explicitly Claude's, per the logs:** the vnstock prompt-injection finding (07-02), the DNSE TLS-verification finding (08-13), the `ou_signal` random-walk diagnosis (08-16), the significance recalibration, the 1000× ledger bug, the accidental live run, and the fabricated legal citation caught by a subagent.

**Unsplittable from the logs alone** — joint decisions reached in conversation, and **only he can say which were his call**: rejecting the Quant 4.0 scale layers, factors-as-YAML, long-only, equal-notional-over-Kelly, Benjamini-Hochberg plus split-half stability, and the open `z_lookback` question.

### Decisions worth writing up (constraint → decision → rejected alternative → outcome)

- **Refusing scale the project doesn't have.** The distributed-systems, neural-architecture-search and model-compression layers of the Quant 4.0 paper are explicitly *not* mirrored, on the written grounds that they solve hedge-fund-scale problems this project doesn't have. A rejected alternative documented at the time rather than reconstructed afterwards. *(Attribution: unsplittable — ask him.)*
- **Long-only, because retail cannot short Vietnamese single stocks.** No securities borrowing or lending exists; margin is leverage on longs; only VN30F futures are shortable. The full 30×30 matrix is still screened as research, but only the cheap leg is bought — and because long-only carries full market beta, P&L attribution (market = β × VN30 return, spread = residual) was made **mandatory** in the backtest rather than optional. It immediately earned its place: on synthetic cointegrated data the backtest returned +4.9% total, decomposing as **market +5.4% / spread −0.54%** with costs at 1.65% of capital. The headline number was entirely market beta and the actual signal was underwater after costs.
- **Equal notional, deliberately not Kelly.** Kelly sized on in-sample edge is selection bias — every pair surviving a screen looks profitable on the data that selected it. Kelly is deferred until out-of-sample paper P&L exists.
- **Asymmetric Vietnamese costs modelled properly.** A single flat `fee_bps` cannot express brokerage on both sides plus a 0.1% transfer tax on the sell side only; it was replaced with `brokerage_bps` + `sell_tax_bps`. The cost floor (~14–15bps round trip for a real cash account) is treated as a binding constraint on whether a signal is tradeable at all, and the default `brokerage_bps: 15` (a 40bps round trip) is flagged in the logs as possibly sign-flipping the spread component.
- **No sandbox exists, so build the sandbox.** The broker API has no test environment — every order endpoint is real money — so execution sits behind a `Broker` protocol with a local `PaperBroker` fill simulator. Going live is an explicit opt-in against the same interface. The DNSE research took the SDK *source* as ground truth because the published docs proved unreliable (the bundled example is a literal `SyntaxError`; the README's install command names a package that 404s).
- **A silent upstream data bug, found and audited.** `Market().equity(...).ohlcv()` ignores `start` entirely, returning bars backwards from `end`; `Quote.history()` honours the range but prepends sessions before it. Both fail silently with plausible data. Every consumer in the repo was then audited: no truncation anywhere, 5 of 8 cache files carried extra leading rows, 4 of 5 consumers already defended themselves — and **one was genuinely wrong**, running ADF/Hurst/variance-ratio over 17 sessions where 5 were intended, with the discrepancy visible in its own committed output. Fixed trim-only, after `save_df`, so the cache stays consistent with its key. *This is a better story than "clever caching": a silent bug found, every consumer checked, one real error located and fixed.*
- **Statistical rigour applied against the project's own results.** Three separate instances: (a) `ou_signal` fired True for all 30 VN30 stocks — 2,000 simulated random walks showed the OLS lambda is negative 95.3% of the time under a pure null, so the signal was an information-free shadow of the ADF test, and it was deleted rather than kept; (b) Hurst and variance-ratio signals were recalibrated to proper 5% tests, taking false-positive rates from **54% / 58% / 72% down to 5.8% / 5.4% / 5.0%**, with power honestly reported as only 13% / 24% / 52% at n=230; (c) the Engle-Granger path was switched to `statsmodels.coint` after measuring that the old plain-ADF-on-fitted-residual approach rejected 13% of 200 independent random-walk pairs versus 2.5% — across 435 pairs it would have manufactured roughly **57 false candidates**.
- **A negative result, and a refusal to manufacture a positive one.** Precisely: VN30 flat — 435 pairs, 57 rejected on coverage, 378 tested, **zero** survivors (best raw p 0.0078, best BH-adjusted 0.9909). VN100 sector-grouped (ICB level 3, 19 groups, 96/100 symbols) — 501 pairs, **zero**. VN100 pooled — 4,950 pairs, 4,560 tested, **zero**. The finding recorded is not "the correction was too harsh" but "the relationships do not hold across time": only one pair in the entire study reached the stability gate, and it failed there.
- **The ACB/OCB case study — the most rigorous single artifact in either repo.** Sector grouping demonstrably works as a mechanism: identical data, identical raw p of 0.000581, adjusted p **0.9916 pooled vs 0.0889 within Banking** — an 11× difference in verdict from the multiple-testing correction alone. The pair then failed split-half stability *non-directionally* (H1 p=0.1234, H2 p=0.2176, full window p=0.0006 — neither half passes alone), which killed a proposed `recent_only` relaxation. Trailing one-year windows show the relationship decaying monotonically over eight weeks on ~96% overlapping data (p: 0.0041 → 0.0558 → 0.0819 → 0.1114 → 0.2077), so a screen run in early July would have accepted the pair and been wrong by August. And then the counterpoint is given equal weight: an ADF test only learns reversion from round trips that *closed* inside the sample, so an open excursion is bar-for-bar what drift produces — **both readings presented, no winner declared.**
- **A methodological weakness found and left unfixed, on purpose.** `z_lookback: 60` measures against a rolling mean, so a 29-bar excursion drags the baseline along with it: the screen reported z = 0.088 while the spread sat at +1.26 against the two-year mean. Logged as an open question affecting entry timing generally, not patched over.
- **An incident, disclosed and reverted.** While testing the scheduler wrapper, PowerShell bound `--dry-run` positionally to `-ScheduledTaskName`, so the flag never reached the runner and a real pass executed. It was disclosed, fully reverted, independently re-verified (cash exactly 300,000,000 VND, positions empty, `last_session` back to 2026-09-03, the pending order intact), and root-caused with `[CmdletBinding(PositionalBinding = $false)]` plus a comment explaining why that line is load-bearing.

### The separate study: PEAD (a positive result)

A second, independent piece of research — post-earnings-announcement drift on Vietnamese equities — and the reason this project isn't only a negative result.

- **VN100 mid-caps: statistically significant drift.** n=202 events; strong-beat mean abnormal 20-day return **+4.75%**, t-test **p=0.0008**, Mann-Whitney p=0.0055. OLS surprise coefficient and prior-drawdown coefficient both correctly signed.
- **VN30 large-caps: nothing** (n=28, p=0.37) — read as already priced in.
- **Caveats stated in the same breath as the result:** the announcement date is approximated as Jan 31 (the statutory deadline), named as *the single largest source of noise*; OLS R² is only 0.6%, so surprise magnitude alone explains almost nothing and the binary beat/miss classification carries the signal; annual rather than quarterly data because the free tier only returns 4–5 quarters; the beat × deep-drawdown interaction could not be tested because that cell had n=1.

**Together, PEAD and the cointegration screen are the story:** the same standard applied to a result that worked and one that didn't, with the caveats stated as prominently as the headline in both cases.

**Proof available for the site:** a documented pipeline architecture; seven dated study artifacts with real pair counts; a reproducible screen; the negative result; the PEAD positive result; 256 tests; and `docs/history/` itself — 20 dated entries that log their own errors and corrections, which is a work product in its own right, not merely a source.

**What cannot be public:** the broker account and any real-money configuration; API keys; position sizes and the paper ledger if he'd rather not show them. The `vnstock` free tier is licensed "personal, research, non-commercial" — worth checking before publishing anything that reads as commercial.

**Version control — a deliberate hold, not an oversight.** There is no git repository at the root. He has not initialized one because he does not yet feel safe doing so. Do not treat this as a gap to fix unprompted. It does mean there is currently no commit history to cite as evidence of tenure, and no repo to link.

**Open questions for him:**
1. **Which of the "unsplittable" decisions above were his call?** This is the highest-value question in the document. The Quant 4.0 rejection, long-only, equal-notional-over-Kelly and the BH+stability choice are the four that most define the project, and the logs cannot attribute them.
2. Does he want the negative result on the site (I would argue strongly yes)?
3. Should the broker integration be described or omitted entirely?
4. What would make a repo feel safe to publish — scrubbing config, a fresh history with no old commits, or is it private regardless?

---

## 2. EnglishTest_Tutor

**A side project, not production.** ← corrected; see §6.

**What it is.** An experimental pipeline that digitizes printed Cambridge YLE/KET and standardized-test images and PDFs into structured, machine-readable records. It is where the "LLM engineering" and "English teaching materials" halves meet.

**Status: test runs and experiments.** The nested `production_repos/ktv20/` is **the group's repository**, present in this folder so experiments were easier to run against it — it is not evidence that this pipeline shipped. **The extraction approach was scrapped in production:** the organization found manual data entry easier to integrate. Verified repo facts: 91 commits between 2026-03-07 and 2026-08-03 on `main`, `feature/ts-extraction` merged (`30609f9`), 12 history logs 2026-05-18 → 2026-09-03.

**Stack.** TypeScript / Node (`ts-node`), LangGraph for orchestration, Zod schemas, structured LLM output; Python retained for worksheet formatting and PDF enhancement (OpenCV + PyMuPDF unsharp mask). A React + Vite + Tailwind vocabulary-pronunciation front end lives under `webpages/vocab_prnon/`.

**Decisions worth writing up:**

- **Model cost vs. reliability.** A cheap Gemini Flash tier by default, swappable by CLI flag with prefix auto-detection across Claude/Gemini/GPT. Two *distinct* fallback models wired to two *specific* observed failure modes — `RECITATION_FALLBACK_MODEL` for Gemini's recitation refusal, `FILL_503_FALLBACK_MODEL` for API 503s. Failure-mode-specific routing, not a generic retry.
- **Retry loops as graph edges, not try/except.** Explicit `check_extraction` (retries ≤2 on zero records) and `check_fill_fix` (retries ≤1 while answers are null) nodes make the control flow inspectable.
- **One batched multi-page call instead of per-page loops**, so the model can resolve cross-page structure.
- **Python → TypeScript rewrite.** The Python pipeline was kept read-only as `legacy_python_files/` and the active pipeline rewritten in TS so it would be consumable without a translation step — the same "learn TS by mapping onto Python I already know" move at project scale.
- **An honest known-issue log.** LLM-returned bounding-box percentages are recorded as often inaccurate, with crops covering wrong regions — logged as an open problem, with `fill_missing_answers` described as a partial workaround rather than a fix.

**The honest framing, and why it may be the better story.** "I built an extraction pipeline; the org chose manual entry instead" is a real engineering outcome, and a more interesting one than a success. It has a constraint, a build, a rejection, and a reason — the exact shape of the writeup format. It should not be dressed up as production, and it does not need to be.

### Extraction volume and failure modes (from `docs/history/` and `extracted_tests/`)

He pointed at the logs as the place where the frustrating fixes are recorded. They are, and they are the most site-usable material in the repo — **named failure modes with the reason each one failed.**

**Volume.** Ten dated test folders under `extracted_tests/dated_tests/`: three batches of Cambridge Starters (Test 1–3 × Reading&Writing / Listening / Speaking, nine runs each), plus Vietnamese school papers (`Lop6_CuoiKy2`, `Lop7_CuoiKy2`, `TiengAnh6_CuoiKy2_ReadingWriting`) and `Vstar_A2` Reading and Use-of-English. Enough to state a real range rather than a vague claim.

**Extraction failure modes worth naming:**

- **Đề 043–046: 35 of 40 answers auto-extracted.** Q13–17 were sentence-arrangement questions with no "Chọn đáp án" lines in the source teacher's document — nothing to extract — so they were filled by hand. This is the single best line available for the site: a specific number, a specific cause, and an honest manual fallback.
- **Known blanks carried forward:** Đề047 Q11 and Đề055 Q7 were blank in the source and flagged for manual fill rather than silently guessed.
- **PyMuPDF text overlay failed on Vietnamese font rendering**, forcing a different approach — a Vietnamese-specific tooling constraint an English-language pipeline would never surface.
- **Bounding-box cropping** remains logged as inaccurate (above).

### Separate work: QA and integration against the live system

This is **not** the extraction pipeline and should never be merged with it (see §6). It is his work against the group's live platform, and it is evidenced by its own set of log entries:

- **`answer` vs `correctAnswer` field mismatch** — all 40 questions were created with an empty answer key; fixed by re-sending every answer through `fix_answers.py`. The durable finding: the API replaces the whole set, so a partial list clobbers the rest — **always send all 40**.
- **Rate limiting** — the server enforces roughly 50 requests/minute; a 429 means wait 60s and retry.
- **A pagination bug** — results were being truncated until the fetch went to page 10 instead of 7.
- **"Choose TWO letters (A–E)" does not exist in the Listening admin UI**, so those items were entered as individual write-in answers — a workaround around a UI the platform doesn't provide.
- **Six IELTS Cambridge 19 exams entered via six sequential sub-agents**; parallel execution failed because remote agents all contend for a single local browser instance.
- **Vocabulary data-quality pass:** a parser bug was dropping ~23 translations already present; the Numbers category came out in column-major order (1, 11, 21, 2, 12, 22…) and was replaced with a correct 1→100 list; "thirteen" had picked up a `……………` placeholder instead of its translation.

**Verified contribution to the group repository:** two commits under his handle — `vocab: add starters importer + persist imageFile` and `fix(admin-backend): guard Supabase client init for local dev without secrets`. The repo's main author has 24. Small but real, and upstream-merged rather than self-reported.

**What cannot be public:** `.env` contents; the group repository's internals, its backend map, and its admin URL; anything identifying the organization, the students, or the boss.

**Open questions for him:** Is the experimental repo publishable, separate from the group's? Is the vocabulary-pronunciation front end actually deployed on the live site — a fetch of `kienthucvang.com` returned no readable content (likely a JS app), so deployment is **unconfirmed**, though the starters importer did land in the group repo.

### Separate work: exam-authoring design on the live platform

**Provenance: stated directly by the user on 2026-09-10, in conversation. Not in any repository and not in any history log.** It is design work on the group's platform, distinct from both the extraction pipeline (§2) and the QA findings above. Highest authority in this document — he is describing his own decisions — but nothing here has been cross-checked against code, because there is no code here to check.

**The problem.** Cambridge YLE Starters / Movers / Flyers Listening use picture-based item types that assume paper: Part 1 requires marking a position in a large scene, and Part 5 ("colour and write") requires colouring named objects and drawing new ones. None of that survives a naive port to a browser.

**Scrapped first: crop-and-overlay.** Crop the object out of the big picture — his example is a book — and lay the crop back on top of the real book in the scene, making that region clickable and selectable. It was intended to serve **both** Part 1 and Part 5. Three failure modes killed it:

- image quality was unreliable;
- the crops did not render consistently;
- with the whole scene on screen, students could not tell what they were looking at.

His own summary: *"it was very ugly."* Scrapped for both parts.

**Part 1, current solution: a click tolerance radius.** The author places a point on the picture, and a student click counts as correct if it falls within a radius of that point — because, in his words, *"realistically students cant click on the exact point."* He rates it plainly: *"its nothing fancy but its the solution after a few iterations of other solutions on how to tackle the image problem."*

**Resolved by a screenshot he supplied on 2026-09-10** (student view, a Part 1 scene with a horse, a pond and seven name chips). It is line-matching after all, and the earlier two-point ambiguity in his description is dead — one author point per name, one student click, one distance test. The screenshot adds detail his description did not:

- Name chips sit around the perimeter of the scene, matching the paper layout.
- The **example item** is pre-drawn: plain unboxed text, solid black line, already connected.
- A **student answer** renders as a dashed line from the chip ending in a visible dot. **The dot is the click point; the tolerance radius around the author's target is never drawn.** The student sees a line, not a hit test.
- Chips carry **selection** state, not answer state — blue outline unselected, green outline plus a check mark when selected (confirmed by him, 2026-09-10). Daisy is green because it is the chip currently being worked on; the dashed line is its in-progress connection.
- The "line" is therefore presentational. The scored object is the click point alone.

- *Still not confirmed:* whether the radius test runs in normalised image coordinates. That was an inference offered back to him and neither confirmed nor denied.
- **The student view never shows correctness.** Green is selection. The tolerance test runs, but its verdict is not surfaced to the student — which is the correct behaviour for a live test and worth stating explicitly, because a reader shown this screenshot will otherwise read the check mark as "right".

**Do not publish this screenshot or any derivative of it.** It is Cambridge YLE exam artwork inside the client's interface — copyrighted content belonging to two parties, neither of them him, and it identifies the platform. A redrawn schematic of the mechanism (a box, two chips, a target point, a radius) carries the whole idea and owns none of the risk.

**Part 5, current solution: transparent boxes plus a fixed palette.** The author draws a transparent box over the real object in the big image and sets the colour it should be. A picture carries several boxes. The student clicks a box and chooses a colour from a **fixed palette** (confirmed).

**Part 5, the drawing half: no drawing.** The author writes out what should be drawn and the student **writes** the answer as text. This is the compromise the crop-and-overlay approach existed to avoid — the reason it was tried at all — and it stands because the alternative was worse.

**His stated reason for the shape of both solutions**, in his own CV wording: *"built for speed, determinism and UI clarity"* — the scoring is evaluated in the client.

**Why this belongs on the site.** It is the through-line again, in a domain unrelated to the others: image manipulation lost to geometry plus text. The cheap, reliable mechanism beat the clever, fragile one, and the losing approach is documented with its three specific failure modes rather than remembered vaguely. It also has the full constraint → decision → rejected alternative → outcome shape without needing any of it reconstructed.

**Still missing:** what the *other* iterations were. He says the tolerance radius arrived "after a few iterations"; crop-and-overlay is the only one named so far.

---

## 3. Cross-cutting patterns

Appearing in *both* projects, which is what makes them evidence of a way of thinking rather than two unrelated builds:

1. **The cheap-pipeline thesis, implemented twice, differently.** The tutor defaults to a cheap model with failure-mode-specific fallbacks; the quant project structures factors so a new one can be added declaratively without touching the evaluator.
2. **Constraint-first design as a written record.** Both repos document what was *rejected* — the Quant 4.0 layers not built, the Python pipeline not kept. Most projects record only what was built.
3. **Honesty about failure, in writing.** Bounding-box cropping logged as poor. The cointegration screen logged as finding nothing. The extraction approach not adopted. The accidental live run disclosed and reverted. A fabricated legal citation caught and removed. None of it hidden, and all of it written down at the time rather than reconstructed later.
4. **Vietnam-specific domain work.** Vietnamese market microstructure, the sell-side-only transfer tax, the absence of retail stock borrowing; Vietnamese education-system test formats and Vietnamese font rendering in PDF tooling. A genuine specialization, hard to replicate from outside the market.
5. **A dated written record as a habit.** 32 history logs across the two projects (20 + 12), each opening with a summary and closing with what was left undone. Very few personal projects have this, and it is what made this inventory possible at all.
6. **Directing AI work and catching what it gets wrong.** The clearest answer to the "was this coded by AI" worry is not a denial — it is the record of him catching a misplaced Sharpe ratio, a sell-side-only tax stated wrongly, and a paper position that had bypassed the entry threshold, plus a disclosed-and-reverted incident with a load-bearing one-line root-cause fix.

## 4. Candidates for the site

| # | Candidate | Strength | Public? |
|---|---|---|---|
| 1 | Quant_VnStocks: the cointegration screen and its negative result | Strongest of the set: real architecture, a rare honest negative finding, the ACB/OCB case study | Not yet — no repo, by his choice (see below) |
| 2 | Quant_VnStocks: the PEAD study | A *positive*, statistically significant finding (+4.75%, p=0.0008, n=202) with its caveats stated as loudly | Same repo, same call |
| 3 | EnglishTest_Tutor extraction pipeline | Side project; five months, 91 commits, ten test batches, named failure modes with causes | Needs his call |
| 4 | QA and bug-fixing on `kienthucvang.com`, a live production platform | A real live site he works on; evidenced by concrete integration findings and two upstream-merged commits | Site is public; his role is his to describe |
| 5 | Vocabulary-pronunciation web app (React/Vite/Tailwind, TTS audio) | The only visual/front-end artifact; its starters importer is merged upstream, but deployment unconfirmed | Needs his call |
| 6 | Exam-authoring design on the live platform: click tolerance radius (Part 1), transparent boxes + fixed palette (Part 5) | **His own design decisions, stated by him** — a scrapped approach with three named failure modes and a cheap mechanism that beat it. The only candidate whose reasoning needs no reconstruction | Mechanism is his to describe; client stays unnamed |

**#4, #5 and #6 are the same client but three different claims** and must stay separate — "I fix and test a live platform," "I built this page," and "I designed how this item type is scored." Conflating any two would repeat the §6 error.

**On his CV he leads with #6, not #4.** When he rewrote this section himself on 2026-09-10 he replaced every QA-findings bullet with exam-authoring design work. Treat #6 as the primary claim for this client and #4 as supporting evidence, not the reverse — which is the ordering `src/content/work/live-platform-qa.md` currently has backwards (see §6.6).

**The count problem is solved.** Reading the logs turned two-and-a-bit candidates into **four usable plus one unconfirmed**, comfortably inside the 3–6 the design summary assumes. The constraint on the site is no longer "not enough projects" — it is that the strongest two live in a repo with no published code, so their writeups have to carry themselves on reasoning and numbers rather than a link.

### On publishing the quant repo

He named two reasons for holding, and they are not the same reason.

- **The money stake is not an illogical fear.** The repo carries broker configuration, a real account, an OTP-2FA trading-token flow, and the paper ledger. Holding is correct. But the fix is not courage — it is `.gitignore` first, then `git init` locally with **no remote**. That is fully reversible, exposes nothing, and gives him commit history and tenure evidence he currently has none of. Publishing stays a separate decision, taken later or never. An audit of what is sensitive should come before the `init`.
- **"It's probably coded by AI" — the logs answer this better than any denial could.** Yes, a model wrote much of this code; the history logs say so plainly. What they also record is him catching a Sharpe ratio applied to the wrong thing, a transaction tax stated as two-sided when it is sell-side only, and an open paper position that had quietly bypassed the entry threshold on every baseline window — plus an accidental real run that was disclosed, reverted, verified and root-caused rather than quietly deleted. The 2025 Stack Overflow survey puts adoption at 84% against 3% who highly trust the output, with "almost right, but not quite" the top frustration; the scarce skill is catching the not-quite. **The honest framing is not "I wrote this without AI" — it is "I direct this work and I catch what it gets wrong," and unusually, he can prove the second.**

## 5. What I still don't have

- **Which of the joint decisions in §1 were his** — the single most important gap.
- Whether either repo can be public.
- Whether the vocabulary app is actually deployed on the live site.
- The remote work he mentioned ("quimps remotely") — not inspected, not in these repos.
- His GitHub account, and what is already public under it.
- The extraction time cost per test — the logs give failure modes and volume, but not throughput.

## 6. Corrections log

Five claims in this document's earlier versions were wrong. Four were corrected by the user on 2026-09-09; the fifth I found by finally reading the source.

1. **"EnglishTest_Tutor is production, with a real client and real users" — wrong.** It is a side project of test runs and experiments. The nested `production_repos/ktv20/` is the group's repository, present to make experiments easier; the extraction approach was scrapped in production in favour of manual data entry. *Lesson: a deployed-looking path in a repo is not evidence of adoption.*
2. **"He found a prompt-injection payload in `vnstock`'s docstring" — wrong, and the most serious error here.** That finding was Claude's, not his. It has been removed entirely — from the cross-cutting section, from the candidate list, and as any part of the cybersecurity evidence. *Lesson: a note in a project's CLAUDE.md says what was written down, never who discovered it. Never attribute a finding to the user without asking.*
3. **"No git repo — worth fixing regardless" — wrong framing.** The absence is deliberate; he has not initialized one because he does not feel safe publishing it yet. Not an oversight to correct unprompted.
4. **"Vietnamese–English code-switching research" — dropped.** He does not recall it as a distinct project; it was likely incidental research inside something else. Removed as a candidate.
5. **The whole of §1 was written without reading the source.** The first two versions of this document described Quant_VnStocks from its CLAUDE.md and memory files only — twenty history logs sat unread in `docs/history/`. That is *also* the root cause of §6.2: the prompt-injection finding is dated 2026-07-02 and attributed to Claude in the log itself, so the misattribution was not a judgement call but a consequence of not opening the file. The logs also revealed an entire second study (PEAD, a positive result) that no earlier version mentioned. *Lesson: summaries are not sources. Read the primary record before characterising a project — and before attributing anything in it to anyone.*
6. **`live-platform-qa.md` was written about the wrong half of this client's work — replaced on 2026-09-10 by `exam-item-scoring.md`.** All 819 words of it are QA and debugging findings — the empty answer key, the rate limit, the page-7 truncation — because those were what the history logs happened to record. When he wrote his own CV bullets for this client on 2026-09-10 he used none of them, and described exam-authoring design instead (§2, *Separate work: exam-authoring design*). The logs were not wrong; they were the only source consulted, and they only cover what a session happened to be doing. *Lesson: the logs record what Claude worked on, which is a biased sample of what he works on. Absence from the logs is not absence from the job — ask him what the work is before deciding what the writeup is about.*
