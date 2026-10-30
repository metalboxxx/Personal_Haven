---
title: "A pairs screen cointegration findings"
result: "VN30 and VN100 pairs tested, but no survivors."
date: 2026-09-04
datePrecision: day
dateLabel: "September 2026"
order: 1
code: null
description: "A cointegration pairs screen on VN30 and VN100 that returned no definitive tradeable pairs."
---

## What it is

One study run through the [Vietnamese-market research pipeline](/work/quantitative-trading/): a cointegration screen, looking for pairs of stocks whose prices move together tightly enough to trade the gap between them.

## Outcome

Nothing conclusively meets the full criteria.

- **VN30.** 435 pairs, 378 tested, **zero** survivors. Best raw p **0.0078**; best BH-adjusted p **0.9909**.
- **VN100, sector-grouped.** **501** pairs, **zero**.
- **VN100, pooled.** 4,950 pairs, 4,560 tested, **zero**.

The finding is not "the correction was too harsh". It is that the relationships do not hold across time.

Executed paper trading on the most promising pair, OCB/ACB.

## Logs

### Sep 04 2026 - Initial exploration and initiation

**I required Benjamini-Hochberg correction plus a split-half stability gate.** Over the span of 2 years, screening 435 pairs at p < 0.05 is 435 chances to be wrong. Stability is a second gate for a different reason: a p-value on the full window says the relationship held on average, not that it held throughout.

Sizing is equal notional, deliberately not Kelly — Kelly sized on in-sample edge is selection bias with a formula attached.

### Constraint

Usually in a cointegration pair, we short one side of a pair and long the other. However, a retail account here in Vietnam cannot short a single stock. There is no securities borrowing and lending; margin is leverage on longs, not a short facility; the only shortable instrument is the VN30F future. Half of the classic pairs trade is unavailable before any statistics are run.

Costs are asymmetric. Brokerage applies on both sides, and a 0.1% transfer tax applies **on the sale only** — not per side, which is how it had first been modelled. Furthermore, derivatives have their own transfer fees too.

### So
Therefore, **I chose long-only** and for now the cheap leg is not bought. A long-only pairs book carries full market beta, which carries more risk.  


The full 30×30 matrix is screened. After the run, I loosened the correction once the screen came back empty. Exactly one pair reached the stability gate, and it failed the split-half stability gate. The test states the pair failed stability _non-directionally_ — neither half of the sample passes on its own but...

### ACB/OCB, which is the one pair

Data of this pair is the most optimistic: identical raw p of **0.000581**: adjusted p is **0.9916** pooled and **0.0889** within Banking industry. An 11× difference in verdict compared to every other pair, produced by the multiple-testing correction.

But it failed stability over the timeline of 2 years — neither half of the sample passes on its own, and trailing one-year windows show the relationship decaying monotonically over eight weeks. A screen run in early July would have accepted this pair and been wrong by August. 

On the other hand, an ADF test only learns reversion from round trips that closed inside the sample. By the time the gap closes, I have already missed opportunity. And this is the opening where I decided to put my position in: I long OCB.



Truthfully, this is just an excuse to test the paper trading system and I just want to see some action. So then I traded the one pair, which is the rest of this log.

### Initializing and setting up

With the help of AI agents and such, I got to focus straight on trading actions. One of the things that annoys me when doing research stuff like trading and machine learning is the bugs happening during the implementation cut my train of thought, leading to frustrating and inefficient workflow. The invention of llm coding really saves me from the anger of debugging, the process I had the worst experience with in university.

Working with AI is really a knife edge: **it can infer the things you don't even consider.** It says: the scale layers of the reference architecture the pipeline follows. Its distributed-systems, neural-architecture-search and model-compression sections solve hedge-fund-scale problems this project does not have. So the AI left them out, and wrote that down as a deliberate omission at the time rather than reconstructing it afterwards.
Good I guess? But even the books I read haven't mentioned the neural architecture search and model compression things yet.

### Sep 11 2026 - First scheduled run...

It turns out to be a failed run, both ways: on the technical side and the trading side.

**Internet unavailable on scheduled run.** The job is ran on my laptop, the time is intentionally placed when I have to use my laptop or my laptop is on. I see the cmd pop up but nothing happens in the paper trading record md. I think my internet is too weak: my wifi is only 2 bars, but I do expect it to at least run again in a few minutes or even report error to me which it doesn't, and silently passes. So more guardrails were implemented such as retries, clear report.

**OCB stock dropped immediately after long.** The Monday after the Friday I placed my order, OCB stock drop to 3%. Actually when I ordered on Friday, it was on a downtrend hard! With tunnel vision on cointegration only, I didn't check the OCB stock individually, it was hitting its peak and in a trading range of resistance for a while; no pullbacks that suggest it will bull. Worst! This 7% drop will be the lesson for my trading career, luckily it is just paper trading.

### Sep 21 2026 - Getting back what I lost.

The OCB stock has gone back up, and I'm pretty much back to where I started. I get back my virtual 300MIL VND. More than that, from the lookback of 21 days, graphically the 2 stocks are cointegrating from the last time they diverged on Sep 4, so the theory might be working! So the caveat here is not that I don't enter, but if I had entered just about 4 days before, when the gap was reasonably wide, I would have won this trade. Let's see what happens next, I'm _now_ excited.
