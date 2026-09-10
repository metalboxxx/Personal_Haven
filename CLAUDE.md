# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

The owner's personal website. **As of 2026-09-10 there is no application code** — this repo holds planning research and a PRD. Round 1 (design research), the local project inventory, and the round-2 PRD are written.

Do not scaffold the site until the owner has **approved** `docs/planning/front-end/05-prd.md`.

## Document map

Read in this order when picking up cold:

| File | What it is |
|---|---|
| `docs/user_personality.md` | Who the site belongs to: domains, through-line, how he argues, and **the voice rules for any copy written in his name**. Has a corrections log at the bottom — read it. |
| `docs/planning/front-end/00-design-summary.md` | The condensed design conclusions. Build defaults, IA, anti-pattern blacklist, voice rules. |
| `01-design-principles.md` | Sourced design/accessibility/performance research behind 00. |
| `02-sites-public-figures.md` / `03-sites-individuals.md` | Two surveys of real personal websites (10 and 11 sites) that 00 synthesizes. |
| `04-project-inventory.md` | What actually exists in the owner's other projects, what can be claimed, and what cannot. **Has a corrections log (§6) recording five wrong claims — read it before characterising any project.** |
| `05-prd.md` | **The PRD — authoritative for what gets built.** Scope, architecture, IA, layout, the four writeups, acceptance criteria, decisions log. |

## Hard rules

These come from mistakes already made in this repo. Each cost a correction.

- **Summaries are not sources.** `CLAUDE.md` files and Claude memory directories record what past sessions *understood*. `docs/history/` logs are the primary record. Read the logs before describing any project. The first two versions of `04-project-inventory.md` were written from summaries and were wrong in four separate ways.
- **Never attribute a finding to the owner without evidence.** History logs are Claude's session summaries — every "diagnosed", "verified", "measured" is Claude reporting its own work in his project. `04-project-inventory.md` §1 splits Quant_VnStocks decisions into his / Claude's / joint. Confirmed his: **long-only**, and **Benjamini-Hochberg + split-half stability**. Joint: the Quant 4.0 scale rejection, and equal-notional-over-Kelly. No site copy may claim a decision he did not make.
- **A deployed-looking path is not evidence of adoption.** `EnglishTest_Tutor` is a side project; its extraction approach was scrapped in production in favour of manual data entry.
- **Never write US-default framing.** He is in Ho Chi Minh City and will catch it. Flag when data is US-only rather than implying it transfers.

## Voice

Full rules in `docs/user_personality.md`. The short version: blunt, short, specific. **Banned: "passionate", "leveraging", and any adjective doing work a number could do better.** State outcomes, let the reader supply the adjective. Lead with the verdict; he dislikes being handed an options menu when he asked for a recommendation.

## Standing decisions

Full detail in `docs/planning/front-end/05-prd.md`; that file is authoritative.

- **Stack:** Astro, deployed to Cloudflare Pages. Zero JS by default; content in Markdown. No SPA — it fails the performance budget in `00-design-summary.md` §4.
- **IA:** `Home → About → Contact`, with writeups at `/work/<slug>`. **Home absorbs Work** — with four writeups a separate index duplicates the homepage. `/writing` reserved in routing, not built. No Services/Testimonials/skill bars.
- **Layout:** archetype B — [benkuhn.net](https://www.benkuhn.net)'s information shape (bio, then a curated list whose items carry their *result*), executed with [dhh.dk](https://dhh.dk)'s typographic care.
- **Signature:** the through-line stated **once** on the home page, then proven by structure — never repeated as a tagline.
- **Writeup format, identical for every project:** constraint → decision → what I rejected → outcome. The "rejected" section is non-optional.
- **Audience:** recruiters are a *constraint* (a visitor in a hurry must not be blocked), never the goal.
- **Animated hero background is in scope** — a scoped exception to the `00` §6 anti-pattern list, under the five constraints in `05-prd.md` §8. Hero band only, never behind running text.
- **Out of scope:** blog, publishing any project repo, CV revision.

## Never publish

The site must not carry: the owner's client organization internals, its backend map or admin URL; anything identifying students or his employer; broker/account configuration or credentials from `Quant_VnStocks`; paper-trading ledger figures unless he opts in. `vnstock`'s free tier is licensed personal/research/non-commercial — check before publishing anything that reads as commercial.

## History log

Per the user-scope `CLAUDE.md`: after a significant task, draft a summary, ask, and once given the go-ahead **write the file directly** to `docs/history/<YYYY-MM-DDTHH-MM-SS>.txt`. Open with 1–3 sentences, then numbered points, key decisions, next steps.

## Commands

None yet — no build system exists. Astro's (`npm run dev` / `build` / `preview`) apply once the site is scaffolded; update this section then.
