---
type: Constitution
title: Professional Cloud Architect Practice Exam Constitution
description: Foundational scope, data model, and non-negotiables for the practice exam simulator.
status: Ratified
timestamp: 2026-10-01T00:00:00Z
---

# Product Constitution

## Product

The product is a personal practice exam simulator for candidates preparing for the Google Cloud Professional Cloud Architect (PCA) certification. It provides original questions with explanations grounded in current Google-owned documentation.

Realism has priority over reading comfort. Question length, question count, time limit, case-study use, and screen presentation approximate the real standard exam as delivered by Pearson VUE, so that practice produces the same time pressure as the real exam.

## Scope Boundaries

In scope:

- Timed 60-question practice attempts with a two-hour limit.
- Single-choice and multiple-select questions.
- Scenario questions whose reading load is at least that of the median official sample question.
- Questions that refer to the official case studies named in the current exam guide, with the case study visible on a split screen.
- Local attempt recovery, scoring, section breakdowns, and answer review.
- Several original question sets mapped to the current official exam guide.
- Documentation evidence for every answer and distractor.

Explicitly out of scope:

- The renewal exam format of 25 questions in one hour.
- Exam dumps, reconstructed live exam content, or unauthorized question collections.
- Claims that a practice percentage predicts Google's pass or fail decision.
- Accounts, remote persistence, analytics, payments, or a server-side API.
- Reproduction of Google's official sample questions, or copies of Google's case-study documents, in this application or repository.

## Data Model Foundation

A question set contains exactly 60 questions: 15 `design`, 11 `provision`, 11 `secure`, 9 `analyze`, 7 `implement`, and 7 `operate` questions, one group for each section of the exam guide version 6.1. Each question has single-choice or multiple-select answer semantics, cites one or more Google-owned sources, and meets the reading-length floors in `src/domain/questions.ts`: at least 59 prompt words, at least 9 words in every choice, and at least 117 words across the prompt and all choices, the length of the median official sample question. An attempt records answers, review flags, position, start time, and deadline for one question set. A completed attempt produces a result without changing the question set.

Invalid question states must be rejected by TypeScript types and question-bank validation. Answer identifiers must exist among the choices, multiple-select questions must declare the required selection count, and every choice must have feedback supported by cited evidence.

## Non-negotiables

- Every published question is original and mapped to the current official exam guide.
- Every correct answer and distractor explanation is supported by current Google-owned documentation.
- Every question records the date on which its sources were verified.
- Ambiguous, deprecated, preview-dependent, or unsupported questions are rejected.
- Questions use the product names of the current exam guide, Google's Agent Platform name-change page, and Google's current product documentation.
- A separate reviewer re-fetches the evidence before a question set enters the runtime catalog.
- The application never presents a practice percentage as Google's unpublished passing score.
- The deployed application remains usable on current desktop and mobile browsers.

## Amendment Log

- 2026-10-01: Ratified for the Professional Cloud Architect exam, adapted from the Professional Machine Learning Engineer simulator constitution.
