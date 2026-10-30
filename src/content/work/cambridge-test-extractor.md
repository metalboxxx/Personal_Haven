---
title: "Cambridge Test Extractor"
result: "Tests and answers are auto-extracted fine, but image cropping turned out unreliable."
date: 2026-08-03
dateLabel: "March – August 2026"
order: 3
code:
  href: "https://github.com/metalboxxx/Cambridge-Test-Extractor"
  label: "Cambridge-Test-Extractor on GitHub"
description: "A LLM pipeline that turned printed Cambridge YLE into structured records, and the difficulties"
---

## What it is

I was tasked with extracting information from Starters, Movers, ... tests of the Cambridge series, so that the company can put them onto the website for students to do.

My approach was using an image-to-text model to turn printed English tests (Cambridge papers, and end-of-term papers from Vietnamese schools) into structured records a system can read. Scans and PDFs go in; questions, answers and tags come out.

Using tags and text got from the model, the app then reconstructs the layout onto the website, imitating what you see online like you see on paper.

It's a LangGraph pipeline over an image/text-to-text model. Gemini 3.0 models were used the most during testing.

## Outcome

Texts are usually reconstructed accurately, but cropping images by bounding box never worked well. The coordinates the model returns are often off, so the crops land on the wrong area. This problem became extra relevant in Cambridge tests where students rely on images to answer.

The best result was on one Vietnamese paper set as the test was mostly text. There were only 2 questions that are based on images.

**The company chose manual data entry.** It was easier and more reliable for humans to crop the image accurately.

Along the way, I learnt valuable lessons on where the strengths of LLMs lie, and where in production the line between automation and manual work can be drawn. I also learnt how to manage the agentic flow of both building the LLM reasoning graph and the actual coding agent working with me to implement my ideas. The latter is incredibly important as I noted where the automation did best, where it was just going in circles, where to add more guardrails and where it was a repeated step wasting tokens. My future projects will benefit greatly from the lessons I gathered here.
