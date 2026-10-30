# User Personality — Reference

**Purpose:** persistent reference for who this site belongs to. Read this before writing any site copy, CV text, or project writeup. Last updated 2026-09-25.

---

## Basics

Vietnamese, based in Ho Chi Minh City. Works across **web development, cybersecurity, and LLM/API engineering**, and teaches English part-time, building **English teaching materials for Vietnamese students**.

He has merged the two halves, for example in an English-tutoring chatbot for Vietnamese grade 6–12 students.

## The through-line

**How something under-resourced beats something better-resourced.**

This is the organizing idea of how he thinks, and it shows up in domains that look unrelated:

- **Badminton** — why 173cm players compete at elite level against 190cm ones: lever arms, footwork drilled obsessively because you cannot afford to take the shuttle low, mental durability in attrition rallies.
- **LLM pipelines** — default workflow is a cheap model generating and a smarter model verifying. Followed through to cascading routers, prompt compression, semantic caching, on the reasoning that a well-engineered cheap pipeline usually beats a naive expensive call.
- **Hardware** — a triple-monitor sim racing setup at roughly $80 per monitor, optimizing bezel width and panel type instead of simply buying up.
- **Software** — hunts free alternatives to paid tools; the kind of person who clears hidden cache directories to reclaim disk space.

Constraint-driven optimization is what he finds **fun**, not what he settles for.

## How he thinks and argues

Does not take framings at face value. Examples of positions he has argued:

- A loud ego is not the only kind of ego — it is about gravity, not volume; how much the self filters perception.
- Criticism is a more credible form of loyalty than praise.
- A burned-out intelligence operative has a right not to be confined, given what he paid.

Skeptical of hype cycles in his own field — questioned whether vector databases and RAG still matter now that context windows are enormous, and independently landed on the "just give the model a table of contents" approach before learning it had a name.

Demands rigor and says so: asks explicitly for academic-level sourcing, calls out overstated effect sizes, and has corrected an AI for defaulting to US regulatory frameworks when the question was about Vietnam. Catches factual errors and states them directly without softening.

## Disproportionate interest

**Cross-domain pattern transfer** — specifically what playing drums does to a brain and how that carries into badminton. Corpus callosum thickness in drummers, four-limb independence, timing circuitry, whether the motor learning transfers into reading an opponent's patterns on court. Will read the actual neuroscience literature and then argue about whether the sample sizes justify the claims.

## The party answer that never goes on a CV

Most of what he knows he learned by being quizzed (see Basics). Not a credentialed anything — a person who runs his own curriculum and grades himself honestly.

## How he talks in chat

This is his chat voice, not a model for site copy. For writing in his name, follow `.claude/CLAUDE.md`, *Writing*: he writes the writeups himself, and wants grammar and spelling fixed when he asks (CV, About).

- Lowercase, short, blunt.
- Typos left unfixed rather than gone back over.
- Says "you can do your own research" rather than padding a sentence.
- Skips pleasantries; opens mid-thought.
- Expands scope mid-conversation — asks one question, then three more that go somewhere else entirely.
- Impatient with fluff. **Dislikes open-ended menus when a recommendation was asked for.**

**Banned from any copy written in his name:** "passionate", "leveraging", and any adjective doing work that a specific number could do better.

## Implications for the website

1. **Opening line:** his own, on the home page (PRD §7.1). It replaced the drafted through-line thesis on 2026-09-22.
2. **Writeups:** he writes them. Format in PRD §7.2, style rules in `.claude/CLAUDE.md`, *Writing*.
3. **Audience:** recruiters will read it, but they are a *constraint* (a visitor in a hurry must not be blocked), not the goal. He rejected a recruiter-optimized site: he wants the site to have personality.
4. **Fonts and colours** are his picks. Change only what he names.
5. **Never write US-default framing.** He is in Vietnam and will catch it.

## Corrections log

- **2026-09-09** — The Uma Musume OCR pipeline (EasyOCR + OpenCV) is **not a project**. It was designed but never implemented, because the game shipped the feature natively first. Do not cite it as evidence of anything.
- **2026-09-09** — This file was assembled from chat history *outside* the local project scope. It does not yet reflect `D:\Projects\EnglishTest_Tutor` or `D:\Projects\Quant_VnStocks`; see `docs/planning/front-end/04-project-inventory.md`. The user has said he will expand this file substantially with local project detail and remote work.
- **2026-09-09** — The Vietnamese–English code-switching research is **not a distinct project**. He does not recall it as one; it was likely incidental research inside something else. Do not cite it as a project.
- **2026-09-09** — EnglishTest_Tutor is a **side project**, not production. The extraction approach was scrapped in production in favour of manual data entry; the nested group repository exists only to make experiments easier. See `docs/planning/front-end/04-project-inventory.md` §6.
- **2026-09-25** — Cleaned up at his request. Removed the code-switching research from Basics (see the 2026-09-09 entry above). The voice list is his chat voice; drafting rules for his name live in `.claude/CLAUDE.md`. The "signature element" proposal is replaced by his own opening line. Opus 5.0 framing lines cut; the facts from his 2026-09-09 summary are unchanged.
