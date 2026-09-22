---
title: "Earnings drift exists in VN100 mid-caps and not in VN30"
subject: "Post-earnings-announcement drift, Vietnamese equities"
result: "Mean abnormal drift found in VN100"
date: 2026-08-03
datePrecision: day
dateLabel: "August 2026"
order: 2
code: null
codeNote: "Code not public."
description: "An event study of post-earnings-announcement drift on Vietnamese equities: a significant result in VN100 mid-caps, nothing in VN30, and the caveats stated as loudly as the number."
---

## What it is

An event study run through the [same pipeline](/work/quantitative-trading/) as the [pairs screen](/work/quantitative-trading/cointegration-screen/): does a stock keep drifting in the direction of an earnings surprise after the announcement?

The idea came when I intended to use AI agents to read financial announcements the moment they land, to beat the market on time. The outcome made that unnecessary.

## Outcome

**VN100 mid-caps: real drift.** n=**202** events. Strong-beat mean abnormal 20-day return **+4.75%**, significant on both a t-test and a rank test — which matters, because event-study returns are not well behaved.

This also means there is no need for urgency: there are 20 days to get in. The data suggests too early won't yield any profit either — the real drift happens about 2 weeks later; before that it is just noise.

**VN30 large-caps: nothing.** n=**28**, p=**0.37**. The straightforward reading is that it is already priced in — the most-covered thirty names in the market do not leave a twenty-day gap lying around.

The caveats, restated because they belong beside the result:

- The event date is a proxy: the 31 January statutory deadline, not an observed announcement.
- Annual data, because the free tier will not return more.
- n=28 in VN30 is small enough that "nothing" means "nothing detectable at this sample size", not "nothing exists".

Neither number was allowed to travel without its caveats, and that is the only reason the positive one is worth anything.

## Logs

### Constraint
Post-earnings-announcement drift is one of the oldest anomalies in the US literature. That is exactly why it should not be assumed to transfer: it is a claim about US disclosure conventions, US coverage and US investor mix. The Vietnamese market is a different question, and the data available for asking it is worse.

Two constraints came straight from the free data tier.

**No announcement dates.** The vnstock free tier does not carry them. The statutory filing deadline is the only date every issuer shares, so 31 January stands in for the announcement date. That proxy is the single largest source of noise in the study, and it is a *Vietnamese* deadline — nothing about this design carries to another market unedited.

**Annual, not quarterly.** The free tier returns four to five quarters, which is not enough history to build quarterly surprises from. Annual figures are what the sample is made of.

### Hence
Run it as a plain event study and split the universe rather than pooling it.

The measure is abnormal return over the 20 trading days after the event date. Surprise enters twice: once as a continuous magnitude in an OLS specification alongside prior drawdown, and once as a binary beat/miss classification. Both signs came out as theory predicts, which is a weak check but a real one.

The split is VN30 large-caps against VN100 mid-caps, kept separate on the reasoning that they are different liquidity and coverage regimes, and that pooling them would let one absorb the other.

**Surprise magnitude as the tradeable signal.** OLS R² is **0.6%** — R² = 1 − RSS/TSS, the share of the drift the model explains, so 0.6% means surprise *size* explains almost nothing. The binary beat/miss classification carries what signal there is; magnitude stays in only as a specification check.

**The beat × deep-drawdown interaction.** It is the most interesting hypothesis in the study — a strong beat on a badly beaten-down stock — and it has **n=1**. The uptrend could just be a normal pullback, not PEAD.

**Treating the proxy date as good enough to headline.** The result is stated with the proxy attached every time it is stated, including here.

