---
title: "A pairs screen cointegration findings"
result: "VN30 and VN100 pairs tested but none survivors."
date: 2026-09-04
datePrecision: day
dateLabel: "September 2026"
order: 1
code: null
description: "A cointegration pairs screen on VN30 and VN100 that returned no tradeable pairs, and why the honest reading is that the relationships do not hold across time."
---

## What it is

One study run through the [Vietnamese-market research pipeline](/work/quantitative-trading/): a cointegration screen, looking for pairs of stocks whose prices move together tightly enough to trade the gap between them.

## Outcome

Nothing survived.

- **VN30.** 435 pairs, 378 tested, **zero** survivors. Best raw p **0.0078**; best BH-adjusted p **0.9909**.
- **VN100, sector-grouped.** **501** pairs, **zero**.
- **VN100, pooled.** 4,950 pairs, 4,560 tested, **zero**.

The finding is not "the correction was too harsh". It is that the relationships do not hold across time.

Execute paper trading for the one most promising pair OCB/ACB.

## Logs

### Sep 04 2026 - Initial exploration and initiation

**I required Benjamini-Hochberg correction plus a split-half stability gate.** Over the span of 2 years, screening 435 pairs at p < 0.05 is 435 chances to be wrong. Stability is a second gate for a different reason: a p-value on the full window says the relationship held on average, not that it held throughout.

Sizing is equal notional, deliberately not Kelly — Kelly sized on in-sample edge is selection bias with a formula attached.

### Constraint

Usually in a cointegration pair, we both short and long both side of a pair. However, a retail account here in Vietnam cannot short a single stock. There is no securities borrowing and lending; margin is leverage on longs, not a short facility; the only shortable instrument is the VN30F future. Half of the classic pairs trade is unavailable before any statistics are run.

Costs are asymmetric. Brokerage applies on both sides, and a 0.1% transfer tax applies **on the sale only** — not per side, which is how it had first been modelled. Furthermore, derivatives have their own transfer fees too.

### So
Therefore, **I chose long-only.** The full 30×30 matrix is still screened, because knowing which relationships exist is research worth having, but for now the cheap leg is not bought. That choice has a cost, and the cost is the interesting part. A long-only pairs book carries full market beta, which carries more risk.

Working with AI is really a knife edge: **it can infer the things you don't even consider.** It says: the scale layers of the reference architecture the pipeline follows. Its distributed-systems, neural-architecture-search and model-compression sections solve hedge-fund-scale problems this project does not have. So the AI Left out, and written down as a deliberate omission at the time rather than reconstructed afterwards.
Good I guess? but even the books I read haven't mention the neural architecture search and model compression things yet.

After the run, **I Loosened the correction once the screen came back empty.** Only exactly one pair reached the stability gate, and it failed half stability gate. a relaxation was proposed that would have let it through. The test state the pair failed stability _non-directionally_ — neither half of the sample passes on its own but...

### ACB/OCB, which is the whole argument in one pair

Sector grouping is not cosmetic. Identical data, identical raw p of **0.000581**: adjusted p is **0.9916** pooled and **0.0889** within Banking industry. An 11× difference in verdict compared to every other pairs, produced by the multiple-testing correction alone.

Then it failed stability over the timeline of 2 years — neither half of the sample passes on its own, and trailing one-year windows show the relationship decaying monotonically over eight weeks. A screen run in early July would have accepted this pair and been wrong by August.

The counterpoint gets equal space, because it is a real one. An ADF test only learns reversion from round trips that closed inside the sample, so an open excursion is bar-for-bar what drift produces. And this be the opening that I decide to put my position in, I long OCB.

A screen that returns nothing is a cheaper result than a screen that returns something wrong, and it is the one I would rather publish. And then I traded the one pair anyway, which is the rest of this log.

### Sep 11 2026 - First scheduled run...

It turns out to be a failed run. Both ways: on technical computer and trading aspects

**Internet unavailable on scheduled run** The job is ran on my laptop, the time is intentionally placed when I have to use my laptop or my laptop is on. I see the cmd pop up but nothing happens in the paper trading record md. I think my internet is too weak: my wifi is only 2 bars, but I do expect it to at least run again in a few minutes or even report error to me which it doesnt and silently pass. So more guardrails were implemented such as retries, clear report.

**OCB stock dropped immediately after long** The monday after the friday I placed my order, OCB stock drop to 3%. Actually when I ordered on Friday, it was on a downtrend hard! Tunneled vision into cointegration only, I didn't check the OCB stock individually, it was hitting its peak and in a trading range of resistance for a while; no pull backs that suggest it will bull. Worst! This 7% drop will be the lesson for my trading career, luckily it is just paper trading.

### Sep 21 2026 - Getting back what I lost.

The OCB stock has gone back up, and I pretty much go back to where I start. I get back my virtual 300MIL VND. More than that, from the lookback of 21 days, graphically the 2 stocks are cointegrating from the last time it diverged on Sep 4, so the theory might be working! So the caveat here is not that I don't enter, but if I had entered just about 4 days when the gap was reasonably wide, I would have won this trade. Let's see what happens next, I'm _now_ excited.
