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

## Constraint

Three constraints, all of them Vietnamese, and none of them optional.

A retail account here cannot short a single stock. There is no securities borrowing and lending; margin is leverage on longs, not a short facility; the only shortable instrument is the VN30F future. Half of the classic pairs trade is unavailable before any statistics are run.

Costs are asymmetric. Brokerage applies on both sides, and a 0.1% transfer tax applies **on the sale only** — not per side, which is how it had first been modelled. I caught that and corrected it. The floor for a real cash account is roughly 14–15bps round trip, and a default of `brokerage_bps: 15` puts a 40bps round trip against any edge the screen finds. That is large enough to flip the sign of a spread return on its own.

And there is no sandbox. Every order endpoint is real money, so paper trading had to be simulated locally rather than borrowed from a test environment that does not exist.

## Decision

**I chose long-only.** Not as a simplification — as the market's actual shape. The full 30×30 matrix is still screened, because knowing which relationships exist is research worth having, but only the cheap leg is ever bought.

That choice has a cost, and the cost is the interesting part. A long-only pairs book carries full market beta, so a backtest can look like it works when it is only holding Vietnam. P&L attribution was therefore made mandatory rather than optional: every result decomposes into market (β × VN30 return) and spread (residual). It earned its place immediately. On synthetic cointegrated data the backtest returned **+4.9%** total, decomposing as **market +5.4% / spread −0.54%**, with costs at **1.65%** of capital. The headline was entirely beta. The signal was underwater.

**I required Benjamini-Hochberg correction plus a split-half stability gate.** Screening 435 pairs at p &lt; 0.05 is 435 chances to be wrong; without a false-discovery correction the screen manufactures candidates. Stability is a second gate for a different reason: a p-value on the full window says the relationship held on average, not that it held throughout.

The Engle-Granger path was also replaced with `statsmodels.coint` after the older plain-ADF-on-fitted-residual approach was measured rejecting **13%** of 200 independent random-walk pairs against a nominal **2.5%**. Across 435 pairs, that gap is roughly **57** candidates that never existed.

Sizing is equal notional, deliberately not Kelly. Kelly sized on in-sample edge is selection bias with a formula attached — every pair that survives a screen looks profitable on the data that selected it. Kelly waits until there is out-of-sample paper P&L to size against.

The pipeline's shape came from the Quant 4.0 paper, minus the parts that do not apply. Its distributed-systems, neural-architecture-search and model-compression layers solve hedge-fund-scale problems this project does not have, so they were left out — written down at the time as a deliberate omission rather than reconstructed afterwards.

## What I rejected

**Shorting.** Covered above: it is not available, and building a strategy that assumes it would have produced a backtest describing a market I cannot trade.

**Sharpe on raw screening data.** Sharpe belongs to evaluating a strategy's returns, not to screening raw stock data. That distinction forced a whole notebook to be rebuilt as pure data acquisition.

**A hardcoded bars-per-day constant for annualization.** It has to be derived empirically from real timestamps, because thin-traded symbols genuinely do have fewer bars. A constant quietly rewards illiquidity.

**Loosening the correction once the screen came back empty.** The temptation is specific, not abstract. Exactly one pair reached the stability gate, and a `recent_only` relaxation was proposed that would have let it through. It was not adopted, because the pair failed stability *non-directionally* — neither half of the sample passes on its own — which is the opposite of "the relationship is recent and the old data is dragging it down". I endorsed reporting the result as it stood.

## Outcome

Nothing survived.

- **VN30.** 435 pairs, 57 rejected on coverage, **378** tested, **zero** survivors. Best raw p **0.0078**; best BH-adjusted p **0.9909**.
- **VN100, sector-grouped** (ICB level 3, 19 groups, 96 of 100 symbols). **501** pairs, **zero**.
- **VN100, pooled.** **4,950** pairs, **4,560** tested, **zero**.

The finding is not "the correction was too harsh". It is that the relationships do not hold across time. One pair in the entire study reached the stability gate, and it failed there.

### ACB/OCB, which is the whole argument in one pair

Sector grouping is not cosmetic. Identical data, identical raw p of **0.000581**: adjusted p is **0.9916** pooled and **0.0889** within Banking. An 11× difference in verdict, produced by the multiple-testing correction alone.

Then it failed stability anyway. First half p **0.1234**, second half p **0.2176**, full window p **0.0006** — neither half passes on its own. Trailing one-year windows show the relationship decaying monotonically over eight weeks on roughly 96% overlapping data: **0.0041 → 0.0558 → 0.0819 → 0.1114 → 0.2077**. A screen run in early July would have accepted this pair and been wrong by August.

The counterpoint gets equal space, because it is a real one. An ADF test only learns reversion from round trips that closed inside the sample, so an open excursion is bar-for-bar what drift produces. Both readings are on the record, and neither is declared the winner.

### One weakness left unfixed on purpose

`z_lookback: 60` measures against a rolling mean, so a 29-bar excursion drags the baseline along with it: the screen reported z = **0.088** while the spread sat at **+1.26** against the two-year mean. That is logged as an open question about entry timing generally, not patched over to make this writeup tidier.

### On the AI question, once

A model wrote much of this code. Saying otherwise would be a lie, and the denial is the wrong answer anyway — the 2025 Stack Overflow survey puts AI adoption around 84% against 3% who highly trust the output. The scarce skill is catching what is wrong, not abstaining.

So here is evidence instead of a claim. While the scheduler wrapper was being tested, PowerShell bound `--dry-run` positionally to `-ScheduledTaskName`. The flag never reached the runner, and a real pass executed instead of a dry run. It was disclosed rather than quietly deleted, fully reverted, and independently re-verified afterwards: cash back to exactly its starting balance, positions empty, `last_session` back to 2026-09-03, the pending order still intact. Root cause was one line — `[CmdletBinding(PositionalBinding = $false)]` — with a comment above it explaining why that line is load-bearing, so nobody deletes it later for looking like noise.

The rest of that record has the same shape: a Sharpe ratio applied to the wrong object, a transaction tax stated as two-sided when it is sell-side only, an open paper position that had bypassed the entry threshold on every baseline window and not only on the stability filter. Each was caught and written down at the time. **256** tests cover the parts that can be tested.

A screen that returns nothing is a cheaper result than a screen that returns something wrong, and it is the one I would rather publish.
