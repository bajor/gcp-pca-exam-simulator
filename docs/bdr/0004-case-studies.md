---
type: BDR
title: Case studies
description: Observable case-study validation and the split-screen presentation of the official case studies.
status: Accepted
supersedes:
superseded_by:
tags: [questions, case-studies, presentation]
timestamp: 2026-10-01T00:00:00Z
---

# 0004. Case Studies

## Context

[PRD 0001](/prd/0001-cloud-architect-exam-simulator.md) requirement 15 asks that each question set uses two of the four case studies named in the exam guide, that 12 to 18 of its questions refer to one of them, and that the case study is visible next to such a question on wide screens and reachable from it on narrow screens. [ADR 0002](/adr/0002-show-official-case-studies.md) decides to show Google's own documents instead of copies.

## Validation Flow

| State | Trigger | Next state | Observable result |
|---|---|---|---|
| Question with a case study | Structural validation | Checked | An unknown case study, or evidence that does not cite the case study's document, fails validation. |
| Draft | Structural validation | Checked | A draft that refers to more than 2 case studies or contains more than 18 case-study questions fails validation. |
| Draft with six sections | Candidate assembly | Candidate | A set that does not refer to exactly 2 case studies, or that contains fewer than 12 or more than 18 case-study questions, fails assembly. |

## Textual Description

A question may refer to one of the four case studies, Altostrat Media, Cymbal Retail, EHR Healthcare, or KnightMotives Automotive, by its identifier. Structural validation adds these errors to those of [BDR 0002](/bdr/0002-question-validation-and-publication.md):

| Rule | Error |
|---|---|
| A case-study question cites its case study's document | `<question-id>: case-study question must cite its case study.` |
| The case study is one of the four | `<question-id>: unknown case study.` |
| A draft refers to at most 2 case studies | `Draft must refer to at most 2 case studies.` |
| A draft contains at most 18 case-study questions | `Draft must contain at most 18 case-study questions.` |
| A set refers to exactly 2 case studies | `Question set must refer to exactly 2 case studies.` |
| A set contains 12 to 18 case-study questions | `Question set must contain 12 to 18 case-study questions.` |

The bounds come from the certification page: each exam includes 2 case studies, and case-study questions make up 20 to 30% of the exam, which is 12 to 18 of 60 questions. Both bounds are inclusive.

## Presentation

| Element | Presentation |
|---|---|
| Instruction | Above the question text, a case-study question shows "For this question, refer to the <name> case study." in the exam text size. |
| Split screen | On screens wider than 800 pixels, the case study appears between the question and the navigator, and the question and the case study share the width left of the navigator equally. The case study shows a title bar, a link that opens Google's document in a new tab, and an embedded view of the document, fitted to the column width, with the accessible name "<name> case study document". |
| Narrow screens | On screens up to 800 pixels wide, the question, the case study, and the navigator stack from the top of the page. The embedded view is hidden, because most phone browsers cannot display PDF documents inline, and the link remains below the question. |
| Start screen | The start screen names the set's case studies with links to their documents, so the candidate can read them before starting. |
| Result review | Each case-study question names its case study with a link to the document. |

Questions without a case study show none of these elements. The case study follows the question in the reading and keyboard order, so focus still moves from the question to mark for review, as [BDR 0003](/bdr/0003-exam-presentation.md) requires.

## Scenarios

**Scenario 1: Reject a set with one case study**

- Given a complete set whose 12 case-study questions all refer to EHR Healthcare
- When structural validation runs
- Then validation reports that the set must refer to exactly 2 case studies

**Scenario 2: Reject too few case-study questions**

- Given a complete set with 11 case-study questions
- When structural validation runs
- Then validation reports that the set must contain 12 to 18 case-study questions

**Scenario 3: Require the case-study citation**

- Given a case-study question whose evidence does not include its case study's document
- When structural validation runs
- Then validation names the question and the missing citation

**Scenario 4: Show the case study on a wide screen**

- Given an attempt on a 1280-pixel-wide screen
- When the current question refers to a case study
- Then the instruction, the link, and the embedded document appear, and the page does not scroll horizontally

**Scenario 5: Reach the case study on a phone**

- Given an attempt on a 390-pixel-wide screen
- When the current question refers to a case study
- Then the instruction and the link appear, the embedded document is hidden, and the page does not scroll horizontally

## Test Design

| Case | Level | Input or scenario | Observable assertion | Proves |
|---|---|---|---|---|
| Case-study count | Unit | Complete set whose case-study questions refer to one case study | Validation reports the exactly-2 rule | Sets use two case studies. |
| Case-study share | Unit | Complete set with 11 case-study questions | Validation reports the 12-to-18 rule | Sets meet the 20% minimum. |
| Share bounds | Unit | Complete sets with 12 and with 18 case-study questions | Validation accepts both | The bounds are inclusive and correct. |
| Citation | Unit | Case-study question without its document in the evidence | Validation names the question | Every case-study question cites its case study. |
| Draft limit | Unit | Draft that refers to 3 case studies | Validation reports the at-most-2 rule | Authors learn of a third case study before assembly. |
| Split screen | Component | Case-study question and a question without a case study | The embedded document and link appear only for the case-study question | The pane follows the current question. |
| Start and results | Component | Set with a case-study question | The start screen and the result review name the case study with a link | The candidate can reach the case study outside the attempt. |
| Viewport fit | End-to-end | Case-study question on desktop and mobile viewports | The document width does not exceed the viewport; the embedded document is visible only on the desktop viewport | The split screen stays usable on phones. |

## Related

- PRD: [/prd/0001-cloud-architect-exam-simulator.md](/prd/0001-cloud-architect-exam-simulator.md)
- ADR: [/adr/0002-show-official-case-studies.md](/adr/0002-show-official-case-studies.md)
- Research: [/research/0001-exam-format-and-blueprint.md](/research/0001-exam-format-and-blueprint.md)
- Issue: [/issues/0001-port-simulator-for-pca.md](/issues/0001-port-simulator-for-pca.md)
