---
title: "Testing a platform that has no test environment"
subject: "QA and integration on a live English-learning platform"
result: "An empty answer key on all 40 questions, a ~50 requests/minute ceiling, and results truncated at page 7. Two commits merged upstream."
date: 2026-09-03
datePrecision: range
dateLabel: "May – September 2026"
order: 4
code: null
codeNote: "The platform is live and public. The code is not mine to publish, and the client is not named here."
description: "Integration testing and bug-fixing against a live English-learning platform: how the findings were found, why every write is verified by reading it back, and what was merged upstream."
---

## Constraint

The platform is live and in use. There is no staging copy, so every request is against the thing students are using, and every bad write is a bad write someone can see. The client is not named here and the internals are not described; what follows is method and findings.

Three constraints followed from that.

**It is someone else's codebase.** The main author has 24 commits to my 2. Any change has to be small enough to argue for and obvious enough to review.

**The admin interface does not cover every item type.** "Choose TWO letters (A–E)" is a standard Listening question format and there is no way to enter it. The content still has to go in.

**The server rate-limits.** Roughly 50 requests per minute, and it does not warn you first.

## Decision

**Verify every write by reading it back.** Not "the request returned 200" — read the stored record and compare it to what was sent. A success response describes the request, not the state. That is the rule the findings below produced, and it is the one that generalises past this platform.

**Always send the complete answer set.** The API replaces the whole collection rather than merging into it, so a partial update silently clobbers everything it does not mention. All 40 answers go every time, even when one changed.

**Enter content sequentially.** Slower, and correct. Parallel entry failed for a mundane reason — everything contended for a single local browser instance — and the sequential version is the one that finished six Cambridge 19 IELTS exams without a partial write.

**Work around the missing item type in the open.** "Choose TWO letters" items were entered as individual write-in answers, with the workaround recorded rather than left for the next person to rediscover.

## What I rejected

**Trusting the interface's success state.** The most expensive bug here reported success on every one of 40 writes. Anything that only checks the response is not a test.

**Partial updates.** They look efficient and they destroy data on this API. Ruled out entirely rather than used carefully.

**Parallel entry.** Faster on paper, and it does not work against one shared browser. Sequential, every time.

**Fixing the 40 answers by hand.** They were re-sent through a script instead. Forty manual corrections is forty chances to introduce a forty-first bug, and it leaves nothing you can re-run when it happens again.

**Retrying immediately on a 429.** The rate limit means wait 60 seconds. Retrying into it just extends the window you are locked out of.

**Filing the vocabulary problems as one bug.** They were three separate causes with three separate fixes, and merging them into "vocab data is bad" would have got one of them fixed and the other two forgotten.

## Outcome

**The answer key was empty on all 40 questions.** The key was being written under a different name from the one the reader reads, so every question was created with nothing in it — and every write had returned success. Found by reading the records back, fixed by re-sending the full set of 40 through a script. The durable lesson is the one above: send all 40, always.

**Rate limiting: roughly 50 requests per minute.** A 429 means wait 60 seconds and retry, not back off and hope.

**Results were being truncated.** The fetch was stopping at page 7 when the data ran to page 10, so everything past that point was quietly missing from the totals.

**A vocabulary data-quality pass, three distinct bugs.** A parser bug was dropping around 23 translations that were already present in the source. The Numbers category came out in column-major order — 1, 11, 21, 2, 12, 22 — and was replaced with a correct 1-to-100 list. And "thirteen" had picked up a row of dots where its translation should have been.

**Two commits merged upstream.** Small: an importer, and a guard so the backend starts in local development without secrets configured. Both reviewed and merged by someone else, which is the part that makes them evidence rather than a claim.

None of this is architecture. It is the work of finding out that a system does not do what it reports doing, on a system you cannot take offline to check.
