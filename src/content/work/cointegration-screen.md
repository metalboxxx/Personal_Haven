---
title: "A pairs screen that found nothing"
subject: "Cointegration screening on Vietnamese equities"
result: "435 pairs, 378 tested, zero survivors. VN100 gave the same answer twice: 501 sector pairs, zero; 4,950 pooled, zero."
date: 2026-09-04
datePrecision: day
dateLabel: "September 2026"
order: 1
code: null
codeNote: "Code not public."
description: "A cointegration pairs screen on VN30 and VN100 that returned no tradeable pairs, and why the honest reading is that the relationships do not hold across time."
---

## What it is

A research pipeline for the Vietnamese stock market — data acquisition, factor definitions, backtesting, portfolio construction, and a simulated execution layer, with a weekly paper-trading pass.

This writeup is one study run through it: a cointegration screen, looking for pairs of stocks whose prices move together tightly enough to trade the gap between them.

## Constraint

Three constraints, all of them Vietnamese, and none of them optional.

A retail account here cannot short a single stock. There is no securities borrowing and lending; margin is leverage on longs, not a short facility; the only shortable instrument is the VN30F future. Half of the classic pairs trade is unavailable before any statistics are run.

Costs are asymmetric. Brokerage applies on both sides, and a 0.1% transfer tax applies **on the sale only** — not per side, which is how it had first been modelled. I caught that and corrected it. The floor is roughly 14–15bps round trip, large enough to flip the sign of a spread return on its own.

And there is no sandbox. Every order endpoint is real money, so paper trading had to be simulated locally.

## Decision

**I chose long-only.** Not as a simplification — as the market's actual shape. The full 30×30 matrix is still screened, because knowing which relationships exist is research worth having, but only the cheap leg is ever bought.

That choice has a cost, and the cost is the interesting part. A long-only pairs book carries full market beta, so a backtest can look like it works when it is only holding Vietnam. Every result therefore decomposes into market and spread. On synthetic cointegrated data the backtest returned **+4.9%**, splitting into **market +5.4%** and **spread −0.54%**. The headline was entirely beta.

**I required Benjamini-Hochberg correction plus a split-half stability gate.** Screening 435 pairs at p < 0.05 is 435 chances to be wrong. Stability is a second gate for a different reason: a p-value on the full window says the relationship held on average, not that it held throughout.

Sizing is equal notional, deliberately not Kelly — Kelly sized on in-sample edge is selection bias with a formula attached.

## What I rejected

**Shorting.** Covered above: it is not available, and a strategy that assumes it describes a market I cannot trade.

**The scale layers of the reference architecture the pipeline follows.** Its distributed-systems, neural-architecture-search and model-compression sections solve hedge-fund-scale problems this project does not have. Left out, and written down as a deliberate omission at the time rather than reconstructed afterwards.

**Loosening the correction once the screen came back empty.** The temptation is specific, not abstract. Exactly one pair reached the stability gate, and a relaxation was proposed that would have let it through. It was not adopted, because the pair failed stability *non-directionally* — neither half of the sample passes on its own — which is the opposite of "the relationship is recent and the old data is dragging it down". I endorsed reporting the result as it stood.

## Outcome

Nothing survived.

- **VN30.** 435 pairs, 378 tested, **zero** survivors. Best raw p **0.0078**; best BH-adjusted p **0.9909**.
- **VN100, sector-grouped.** **501** pairs, **zero**.
- **VN100, pooled.** 4,950 pairs, 4,560 tested, **zero**.

The finding is not "the correction was too harsh". It is that the relationships do not hold across time.

### ACB/OCB, which is the whole argument in one pair

Sector grouping is not cosmetic. Identical data, identical raw p of **0.000581**: adjusted p is **0.9916** pooled and **0.0889** within Banking. An 11× difference in verdict, produced by the multiple-testing correction alone.

Then it failed stability anyway — neither half of the sample passes on its own, and trailing one-year windows show the relationship decaying monotonically over eight weeks. A screen run in early July would have accepted this pair and been wrong by August.

The counterpoint gets equal space, because it is a real one. An ADF test only learns reversion from round trips that closed inside the sample, so an open excursion is bar-for-bar what drift produces. Neither reading is declared the winner.

### On the AI question, once

A model wrote much of this code. Saying otherwise would be a lie, and the denial is the wrong answer anyway — the 2025 Stack Overflow survey puts AI adoption around 84% against 3% who highly trust the output. The scarce skill is catching what is wrong, not abstaining.

So: evidence instead of a claim. The transaction tax above, stated as two-sided when it is sell-side only. A Sharpe ratio applied to raw screening data. A real run that executed when a dry run was intended — disclosed rather than quietly deleted, reverted, and re-verified afterwards.

A screen that returns nothing is a cheaper result than a screen that returns something wrong, and it is the one I would rather publish.
