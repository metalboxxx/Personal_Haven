---
title: "An extraction pipeline that lost to manual entry"
subject: "Digitising printed English tests — a side project"
result: "35 of 40 answers auto-extracted on one paper set; the five that failed had no answer key in the source. The organisation went with manual entry anyway."
date: 2026-08-03
datePrecision: range
dateLabel: "March – August 2026"
order: 3
code: null
codeNote: "Code not public — this is a side project and the repository has not been published."
description: "A side-project pipeline that turned printed Cambridge YLE and Vietnamese school papers into structured records, the failure modes it named, and why the organisation chose manual data entry instead."
---

## What it is

A side project that turns printed English tests — Cambridge YLE and KET papers, plus Vietnamese school end-of-term papers — into structured records a system can read. Scans and PDFs go in; questions, answers and tags come out.

It is a LangGraph pipeline over a vision model, rewritten from Python into TypeScript partway through. It was never adopted.

## Constraint

The papers are made by teachers, not by a publisher. Layout varies per document. Answer keys are sometimes a labelled line, sometimes a table, sometimes absent.

Three constraints shaped everything after that.

**Per-document cost has to stay near zero.** This is a side project. A pipeline that needs a frontier model on every page is not a pipeline, it is a subscription.

**The tooling has Vietnamese-shaped holes.** PyMuPDF's text overlay failed on Vietnamese font rendering and forced a different approach entirely. An English-language pipeline would never surface that constraint, which is roughly the point.

**Cross-page structure is real.** A reading passage on page 3 and its questions on page 4 are one object. Anything that processes pages independently throws that away.

## Decision

**A cheap model by default, with failure-mode-specific fallbacks.** Gemini Flash on the default path, swappable across Claude, Gemini and GPT. The fallbacks are the part worth describing: two *distinct* fallback models wired to two *specific* observed failure modes — one for the model's recitation refusal, one for API 503s. Not a generic retry with a different name on it.

**Retry loops as graph edges, not `try`/`except`.** The orchestration is a graph with explicit check nodes, so the control flow is a thing you can look at. That matters when the failure is "it produced plausible garbage" rather than "it threw".

**One batched multi-page call instead of per-page loops**, so the model can resolve structure that spans pages.

**A Python-to-TypeScript rewrite**, with the Python kept read-only rather than deleted — the same move as learning TypeScript by mapping every concept onto the Python already known, at project scale, and reversible.

## What I rejected

**A generic retry wrapper.** Two named failure modes with two different responses is more code than one exponential backoff, and it is the only version that tells you what actually went wrong.

**Per-page calls.** Cheaper per request, wrong per document.

**A frontier model on the default path.** Reserved for the fallback edges, where the cost is paid only on the inputs that need it.

**Deleting the Python pipeline.** A rewrite you cannot diff against is a rewrite you cannot check.

**Silently guessing blanks.** Some questions are blank in the *source*. They get flagged for manual fill, not filled with the model's best guess. A confident wrong answer key is worse than a missing one, because nobody goes looking for it.

## Outcome

Five months, ten dated test batches: three rounds of Cambridge Starters across Reading & Writing, Listening and Speaking, plus Vietnamese school papers and a Vstar A2 set.

The number that says the most: **on one Vietnamese paper set, 35 of 40 answers extracted automatically.** The other five were sentence-arrangement questions with no answer-key lines anywhere in the source teacher's document. There was nothing to extract. They were entered by hand.

That is the honest shape of the result. The pipeline was not beaten by hard documents; it was bounded by documents that did not contain the answer.

Bounding-box cropping never got there either. The model-returned coordinates are often inaccurate and produce crops over the wrong region — logged as an open problem, not a solved one.

**And the organisation chose manual data entry.** The extraction approach was scrapped in production because manual entry was easier to integrate. That is the outcome, and dressing it up as shipped would be a lie about a side project that never claimed to be one.

It is still the better story. A constraint, a build, a rejection and a reason is the same shape as a success, minus the part where you get to be pleased with yourself.
