---
title: "Earnings drift exists in VN100 mid-caps and not in VN30"
result: "Mean abnormal drift found in VN100"
date: 2026-08-03
datePrecision: day
dateLabel: "August 2026"
order: 2
code: null
description: "An event study of post-earnings-announcement drift on Vietnamese equities: drift in VN100 mid-caps, nothing detectable in VN30, and what the free data can and can't tell."
---

## What it is

A study run through the [same pipeline](/work/quantitative-trading/) as the [pairs screen](/work/quantitative-trading/cointegration-screen/): does a stock keep drifting in the direction of an earnings surprise after the announcement?

The idea came when I intended to use AI agents to read financial announcements the moment they land, to beat the market on time. The outcome made that unnecessary.

## Outcome

**VN100 mid-caps: there is drift.** 202 events. After a strong earnings beat, the stock beat the market by **+4.75%** on average over the next 20 trading days, and it holds on two different tests.

This also means there is no need for urgency: there are 20 days to get in. The data suggests too early won't yield any profit either — the real drift happens about 2 weeks later; before that it is just noise.

**VN30 large-caps: nothing.** n=**28**, p=**0.37**. My guess is it's already priced in, since these are the thirty most-watched stocks in the market. But 28 events is a small sample, so I read it as "nothing I could detect", not "nothing there".

Two things to keep in mind with both numbers:

- I don't have real announcement dates. The study uses 31 January, the legal filing deadline, as a stand-in.
- Yearly data only, because the free data tier doesn't return enough quarters.

## Logs

### Aug 2026 - Setting it up

PEAD is an old finding in US research. I wanted to see whether it shows up in Vietnam at all, where the disclosure rules and the people trading are different.

### Constraint

The free vnstock tier has no announcement dates. The one date every company shares is the 31 January filing deadline, so that stands in for the announcement. It's the biggest source of noise in the study, and it only works because it's a Vietnamese rule.

It also returns only four or five quarters, which isn't enough to build quarterly surprises from. So the study runs on yearly figures.

### So

A plain event study: how a stock moves in the 20 trading days after that date, compared with the market. VN30 and VN100 mid-caps are kept apart, because they're traded very differently and mixing them could let one hide the other.

The surprise goes in two ways: as a size (how big the beat or miss was) and as just beat or miss. Both came out pointing the way theory says. A weak check, but it's something.

### What didn't pan out

Surprise size explains almost nothing: R² is **0.6%**. Beat or miss carries whatever signal there is.

The idea I liked most was a strong beat on a stock that had already fallen hard. It had one event, n=1, so there's nothing to say about it yet. That one uptrend could just be a normal pullback, not PEAD.
