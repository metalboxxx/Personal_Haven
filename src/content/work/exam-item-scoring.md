---
title: "Picture questions, without the pictures moving"
subject: "Scoring image-based exam items on a live English-learning platform"
result: "Cropping objects out of a scene and making them clickable was scrapped. A click tolerance radius and a transparent box replaced it."
date: 2026-09-03
datePrecision: range
dateLabel: "May – September 2026"
order: 4
code: null
codeNote: "The platform is live and public. The code is not mine to publish, and the client is not named here."
description: "Cambridge YLE picture questions assume paper. Porting them to a browser meant scrapping an image-manipulation approach for geometry and text."
---

## What it is

Work on a live English-learning platform used by real students: designing how Cambridge YLE picture questions get asked and scored in a browser, and running quality checks on the exams before they publish.

Two things, both current. The scoring design is the part with decisions in it. The quality checking is where an LLM agent reads published exam content looking for the errors a human proofreader slides past — a missing full stop, a missing comma.

## Constraint

Starters, Movers and Flyers Listening papers assume paper and a pencil.

Part 1 gives a child a busy scene and a set of names, and asks them to draw a line from each name to the right person. Part 5 asks them to colour named objects in a scene, and then to draw something new into it.

Neither survives a naive port. A line drawn with a mouse is not a line drawn with a pencil, and a child cannot click the exact pixel an author had in mind. Drawing is worse: there is no honest browser equivalent of a seven-year-old sketching a ball under a table.

The platform is also live, with no staging copy, and it is not my codebase — the main author has 24 commits to my 2.

## Decision

**Score a click against a tolerance radius.** The author places one point on the target. A student click counts if it lands within a radius of it. Everything the student sees — the name chip, the line, the dot where it ends — is presentation; the only scored object is the click point, and the radius is never drawn.

**For Part 5, put transparent boxes over the objects.** The author draws a box over the real object in the untouched scene and sets the colour it should be. A picture carries several. The student clicks a box and picks from a fixed palette.

**For the drawing half, accept text.** The author writes out what should be drawn and the student writes what they would draw.

All of it is evaluated in the client, for speed, determinism, and so the interface can say plainly what is being asked.

## What I rejected

**Cropping the objects out and layering them back on top.** This was the first attempt, and it was meant to serve both parts: cut the book out of the scene, lay the crop back over the real book, make that region clickable and selectable. It failed three ways. Image quality was unreliable. The crops did not render consistently. And with the whole scene on screen, students could not tell what they were looking at.

It was scrapped for both parts. It was very ugly.

**Real drawing.** The text fallback is a compromise, and cropping-and-layering existed to avoid it. Text is worse than drawing and better than a drawing tool nobody can use.

**Editing the source artwork.** The transparent box goes over the picture, not into it. An exam scene that has been retouched is no longer the exam scene.

## Outcome

Both mechanisms are in use.

The winning one is the cheaper one by a wide margin. A distance test and a rectangle beat an image pipeline — not because the image pipeline was badly built, but because it had to be right about rendering, cropping and legibility all at once, and the geometry only had to be right about arithmetic. Nothing fancy. It is the solution that survived the iterations.

The compromise stays on the record: children write out what they would have drawn, and that is not the same exam. It is the closest a browser gets without asking a seven-year-old to operate a drawing tool.

Alongside this, the quality work on the platform produced two commits merged upstream by its maintainer — a vocabulary importer, and a guard so the backend starts in local development without secrets configured. Small, and reviewed by someone else, which is what makes them evidence rather than a claim.
