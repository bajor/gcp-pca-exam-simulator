---
type: PRD
title: Professional Cloud Architect exam simulator
description: A timed 60-question simulator with scenario questions, case studies on a split screen, dense exam-style presentation, and cited answer review.
status: Accepted
superseded_by:
tags: [exam, practice]
timestamp: 2026-10-01T00:00:00Z
---

# 0001. Professional Cloud Architect Exam Simulator

## Problem / Motivation

The candidate prepared for the Professional Data Engineer exam with a documentation-backed simulator and then took the real exam. They reported that the real questions were much harder and much longer, and that they ran out of time on the real exam although they finished on the simulator. They then built a Professional Machine Learning Engineer (PMLE) simulator with longer questions and a dense presentation. The candidate now prepares for the Professional Cloud Architect (PCA) exam and needs the same simulator for it. The PCA exam differs from the PMLE exam in two ways that the simulator must reproduce: its official sample questions are shorter, and each exam includes two case studies that 20 to 30% of the questions refer to, as [research 0001](/research/0001-exam-format-and-blueprint.md) records.

## Goals

- Reproduce the maximum real-exam workload: 60 questions in two hours.
- Require question text that is at least as long as the median official sample question.
- Reproduce the case-study format: two case studies per exam, shown on a split screen.
- Present questions in a dense, plain style like the Pearson VUE delivery interface, with question and answer text in the same font size.
- Explain every answer and distractor using current Google-owned documentation.
- Support several independently reviewed practice exams.

## Non-goals

- Predict Google's pass or fail result.
- Simulate the renewal exam.
- Duplicate official samples, case-study documents, or third-party practice banks.
- Provide identity, synchronization, analytics, or administrative interfaces.
- Reproduce the Pearson VUE interface exactly or use Pearson or Google branding.

## Requirements

1. An attempt contains 60 questions and lasts two hours, which leaves an average of two minutes per question.
2. A question set has 15, 11, 11, 9, 7, and 7 questions in exam-guide sections 1 through 6.
3. Every question prompt has at least 50 words, every choice has at least 10 words, and the prompt plus all choices have at least 121 words, the length of the median official sample question.
4. Question text and answer text use the same font size. The exam screen uses a small plain sans-serif font, a compact layout, and plain gray buttons instead of large headings and card-style answers.
5. Questions appear one at a time with previous, next, direct-number, and mark-for-review navigation.
6. The interface distinguishes answered, unanswered, current, and marked questions without relying only on color.
7. The deadline auto-submits the attempt at zero.
8. Refreshing or reopening the browser restores a compatible active attempt without resetting its deadline.
9. Manual submission confirms the number of unanswered and marked questions.
10. Exact-match scoring reports a total percentage and six section percentages.
11. Results show the response, the correct choice or choices, feedback for every choice, and cited source links.
12. The application does not display a passing threshold.
13. The catalog lists planned practice exams as coming soon until a question set passes independent review.
14. The application works from the GitHub Pages project path on desktop and mobile.
15. Each question set uses two of the four case studies named in the exam guide, and 12 to 18 of its questions refer to one of them. While such a question is shown, the case study is visible next to it on wide screens and reachable from it on narrow screens.

## Quality Requirements

| Quality attribute | Scenario | Verified by |
|---|---|---|
| Realism | An author registers a question whose prompt and choices total 100 words; structural validation rejects it before review. | Question-bank unit tests and `make verify-sources`. |
| Correctness | A question author changes a set; unsupported or malformed content blocks publication. | Question-bank tests, `make verify-sources`, and an independent review record. |
| Recoverability | A candidate refreshes during an attempt; answers and the original absolute deadline are retained. | Component and end-to-end restoration tests. |
| Accessibility | A keyboard or screen-reader user takes an attempt; controls expose names, states, and focus order without color-only meaning. | Semantic component tests and Playwright keyboard checks. |
| Portability | GitHub Pages serves the project subpath after deployment; static assets resolve and the catalog renders. | Production build and browser smoke test. |

## Acceptance Criteria

- Structural validation rejects any set that does not have exactly 60 questions in the required section distribution.
- Structural validation rejects any question below a reading-length floor.
- On the exam screen, the computed font size of the question text equals that of the answer text.
- A 390 by 844 pixel mobile viewport and a 1280 by 720 pixel desktop viewport expose all attempt controls without horizontal page scrolling.
- `make test` and `make verify-sources` pass before release.

## Success Metrics

The static application collects no analytics. The candidate assesses success: a completed 60-question attempt should feel at least as time-constrained as the real exam.

## Behavior

- [Exam attempt and scoring](/bdr/0001-exam-attempt-and-scoring.md)
- [Question validation and publication](/bdr/0002-question-validation-and-publication.md)
- [Exam presentation](/bdr/0003-exam-presentation.md)

Requirement 15 is specified by a separate behavior record when case-study support is implemented.

## Open Questions

- The candidate has not stated an exam date.

## Decision Log

- [Port the PMLE simulator](/adr/0001-port-pmle-simulator.md)

## Related

- Constitution: [/constitution.md](/constitution.md)
- Issue: [/issues/0001-port-simulator-for-pca.md](/issues/0001-port-simulator-for-pca.md)
- Research: [/research/0001-exam-format-and-blueprint.md](/research/0001-exam-format-and-blueprint.md)
