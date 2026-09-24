---
title: "Grading picture questions"
result: "A click tolerance radius and a transparent box. Cropping objects out of a scene and making them clickable was scrapped due to impracticality."
date: 2026-09-03
datePrecision: range
dateLabel: "May – September 2026"
order: 4
code: null
description: "Cambridge YLE picture questions are made for paper. Moving them into a browser meant dropping an image-cropping approach for a click radius, transparent boxes and text."
---

## What it is

I work on a live English-learning platform that real students use. Two jobs: working out how Cambridge YLE picture questions get asked and scored in a browser, and checking exams for mistakes before they go out. For the checking, an LLM agent reads the published exam and looks for the small errors a human proofreader slides past, like a missing full stop or comma.

It's not my codebase. The main author has 24 commits; I have 2.

## Outcome

Both picture-question types work in the browser now: a click tolerance radius for Part 1, transparent boxes for Part 5. My first idea, cropping objects out of the picture, was scrapped.

The drawing half of Part 5 didn't make it. Students write what they would draw instead. That's a compromise, and it isn't quite the same exam.

Two of my commits were merged upstream: a vocabulary importer, and a fix so the backend starts in local development without secrets set up.

## Logs

### May – Sep 2026 - Picture questions, paper vs browser

### Constraint

Starters, Movers and Flyers Listening papers are made for paper and a pencil. Part 1 gives a child a busy scene and some names, and they draw a line from each name to the right person. Part 5 asks them to colour objects in a scene, then draw something new into it.

In a browser, a child can't click the exact pixel the author had in mind. And there's no good way for a seven-year-old to draw a ball under a table with a mouse.

There's also no staging copy. Changes go straight to the live site.

### First try: crop and layer

Cut the object out of the scene (say, a book), lay the crop back over the real book, and make that spot clickable. It was meant to work for both parts.

It didn't. Image quality was unreliable, the crops didn't render consistently, and with the whole scene on screen students couldn't tell what they were looking at. It was very ugly. Scrapped for both parts.

### So: Part 1

The author puts one point on the target. A student's click counts if it lands within a radius of that point, because realistically students can't click on the exact point. The student sees a line from the name to where they clicked. The radius itself is never shown.

### Part 5

The author draws a transparent box over the real object and sets the colour it should be. The student clicks a box and picks from a fixed palette. For the drawing half, the author writes what should be drawn, and the student writes their answer as text.

It's nothing fancy, but it's the solution after a few iterations of other ideas on how to tackle the image problem. Scoring runs in the browser, for speed, predictable results and a clear screen.
