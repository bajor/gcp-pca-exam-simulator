---
type: BDR
title: Exam presentation
description: Dense Pearson-style presentation in which question and answer text share one font size.
status: Accepted
supersedes:
superseded_by:
tags: [exam, presentation, accessibility]
timestamp: 2026-10-01T00:00:00Z
---

# 0003. Exam Presentation

## Context

[PRD 0001](/prd/0001-cloud-architect-exam-simulator.md) requires question and answer text in the same font size and a dense presentation like the Pearson VUE delivery screen. The candidate asked for this presentation after the real Professional Data Engineer exam, and the PMLE simulator adopted it: question text at the same, smaller size as the answers and a less comfortable, older Pearson-style look, so that practice reading effort matches the real exam. The port in [ADR 0001](/adr/0001-port-pmle-simulator.md) keeps it unchanged.

## Behavior

| Element | Presentation |
|---|---|
| Question and answer text | One size, the `--exam-text-size` token in `src/styles.css` (0.875rem, which is 14 CSS pixels at the default browser setting), in regular weight Arial or Helvetica with a line height of 1.4. The same size applies to the question and choices in the result review. |
| Line length | Question and answer text span the full width left of the navigator, without a maximum line length. |
| Header | A dark title bar shows the exam title, "Question N of 60", and the time remaining. |
| Choices | A radio button or checkbox, a letter such as "A.", and the choice text. There are no cards, rounded corners, or shadows. The selected choice has a thin border and a light fill. |
| Controls | Gray raised buttons. Previous and Next sit in a gray toolbar under the choices. |
| Navigator | A numbered grid at the right on wide screens and below the question on screens up to 800 pixels wide. The current question has a thick border and a bold number, an answered question has a thick bottom border, and a marked question has a yellow fill and an asterisk. Borders stay visible in forced-colors (high-contrast) mode. |
| Other screens | Catalog, start, confirmation, and result screens use the same font, title bars, bordered panels, and buttons. |

The presentation keeps the accessibility constraints of the original application. Sizes use `rem` units, including the navigator column, so browser zoom and font settings still apply. Long unbroken words wrap instead of widening the page. Controls are at least 24 CSS pixels tall. Keyboard focus shows a 2-pixel dotted outline. Question state is conveyed by text, borders, and accessible names in addition to color. The layout has no horizontal scrolling at a width of 390 pixels.

## Scenarios

**Scenario 1: Equal question and answer size**

- Given an attempt in progress
- When the exam screen renders a question
- Then the computed font size of the question text equals the computed font size of the choice text, on the exam screen and in the result review

**Scenario 2: Narrow viewport**

- Given a 390 by 844 pixel viewport
- When an attempt starts
- Then all attempt controls are reachable without horizontal page scrolling

**Scenario 3: Keyboard order**

- Given the first question has focus
- When the candidate presses Tab
- Then focus moves to the mark-for-review control before the question navigator

## Test Design

| Case | Level | Input or scenario | Observable assertion | Proves |
|---|---|---|---|---|
| Equal text size | End-to-end | First fixture question on the exam screen and in the result review, on desktop and mobile viewports | The question text and a choice's text have the same computed font size on both screens | The candidate's explicit requirement holds in a real browser. |
| Viewport fit | End-to-end | Attempt on desktop and mobile viewports | Document width does not exceed the viewport | The dense layout stays usable on phones. |
| Keyboard order | End-to-end | Tab from the focused question | Mark for review receives focus | The restyle did not change control order. |

The tests do not assert pixel values or colors, because those are design choices that can change without breaking a requirement.

## Related

- PRD: [/prd/0001-cloud-architect-exam-simulator.md](/prd/0001-cloud-architect-exam-simulator.md)
- Issue: [/issues/0001-port-simulator-for-pca.md](/issues/0001-port-simulator-for-pca.md)
