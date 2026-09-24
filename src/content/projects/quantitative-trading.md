---
title: "Quantitative trading"
subject: "Research and strategy infrastructure for the Vietnamese stock market"
result: "2 strategy tested: 1 in paper trading"
date: 2026-09-07
order: 1
code: null
description: "A quantitative research pipeline for Vietnamese equities — data, factors, backtesting, portfolio construction and simulated execution — and the two studies have been run."
---

## What it is

A research pipeline for the Vietnamese stock market: data acquisition, factor definitions, backtesting, portfolio construction, risk, and a simulated execution layer, with a weekly paper-trading pass that runs on a schedule without me. Python throughout — pandas, statsmodels, scipy, pytest; market data from vnstock's free tier.

It follows the Quant 4.0 reference architecture (Guo et al., 2024) stage for stage, minus the layers that solve hedge-fund-scale problems: distributed systems, neural architecture search, model compression. 

Execution is simulated locally because the broker has no sandbox. Every order has simulated real money. Orders go through one interface, a paper broker fills them, and going live is an explicit opt-in against the same interface.
Status: running

The followings are 2 strategies I explored and did some backtesting. Depending on the result, some may move further to the paper trading phase.

