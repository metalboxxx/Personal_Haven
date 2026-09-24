---
title: "An extraction pipeline that lost to manual entry"
result: "Most answers auto-extracted, but the organisation went with manual entry."
date: 2026-08-03
datePrecision: range
dateLabel: "March – August 2026"
order: 3
code: null
description: "A side-project pipeline that turned printed Cambridge YLE and Vietnamese school papers into structured records, where it broke, and why the organisation went with manual data entry."
---

## What it is

A side project: turning printed English tests (Cambridge YLE and KET papers, and end-of-term papers from Vietnamese schools) into structured records a system can read. Scans and PDFs go in; questions, answers and tags come out.

It's a LangGraph pipeline over a vision model. It started in Python, and I rewrote it in TypeScript partway through. It was never adopted.

## Outcome

**The organisation went with manual data entry.** It was easier to integrate, so the extraction approach was scrapped in production.

The best result: on one Vietnamese paper set, **35 of 40** answers were extracted automatically. The other five were sentence-arrangement questions, and the teacher's document had no answer key for them anywhere, so there was nothing to extract. Those went in by hand.

Cropping images by bounding box never worked well. The coordinates the model returns are often off, so the crops land on the wrong area. Still an open problem.

Over five months it ran on ten dated test batches: three rounds of Cambridge Starters (Reading & Writing, Listening, Speaking), plus Vietnamese school papers and a Vstar A2 set.

## Logs

### Mar 07 2026 - Starting out

### Constraint

The papers are made by teachers, not publishers, so every layout is different. The answer key is sometimes a line, sometimes a table, sometimes missing.

It's a side project, so each document has to cost almost nothing to process.

A reading passage on page 3 and its questions on page 4 belong together, so the pages can't be handled one at a time.

### So

A cheap model by default (Gemini Flash), swappable between Claude, Gemini and GPT. Two fallback models, each for one failure that actually showed up: one for when the model refuses with a recitation error, one for API 503s.

Retries are steps in the graph with their own checks, instead of try/except, so the control flow is visible. That helped most when the output looked fine but was wrong, rather than throwing an error.

All pages go in one call, so the model can connect a passage to its questions.

If a question is blank in the source, it gets flagged for manual fill instead of guessed.

### Mar – Aug 2026 - Vietnamese fonts

PyMuPDF's text overlay broke on Vietnamese font rendering, so that approach had to go. An English-only pipeline would probably never hit this.

### Mar – Aug 2026 - Python to TypeScript

I rewrote the pipeline in TypeScript so it could be used directly, without a translation step. The Python version is still there, read-only, to compare against. It's the same way I learned TypeScript in the first place: mapping each piece onto Python I already knew.
