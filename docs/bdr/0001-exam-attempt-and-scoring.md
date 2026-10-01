---
type: BDR
title: Exam attempt and scoring
description: Observable start, recovery, navigation, submission, scoring, and review behavior.
status: Accepted
superseded_by:
tags: [exam, scoring]
timestamp: 2026-10-01T00:00:00Z
---

# 0001. Exam Attempt and Scoring

## Context

[PRD 0001](/prd/0001-cloud-architect-exam-simulator.md) requires an exam-like 60-question attempt that survives refreshes, ends at an absolute two-hour deadline, and produces transparent practice feedback without claiming an official passing score.

## Behavior Flow

| Current state | Trigger | Next state | Observable result |
|---|---|---|---|
| Ready | Start | In progress | Question 1 appears and a two-hour deadline starts. |
| In progress | Answer or navigate | In progress | State updates and persists locally. |
| In progress | Reload | In progress | Compatible state and the original deadline restore. |
| In progress | Confirm finish | Completed | Answers become read-only and results appear. |
| In progress | Deadline reaches zero | Completed | The attempt submits automatically and results appear. |
| Completed | Start new attempt | In progress | Prior state is replaced after confirmation. |

## Textual Description

Starting creates a new attempt for the selected set with no answers and an absolute deadline two hours after the start instant. Selecting an answer, marking a question, or navigating persists state. At the multiple-select limit, remaining unchecked choices are disabled until a selected choice is cleared. Manual completion reports unanswered and marked counts before confirmation. Deadline expiration bypasses confirmation. Unanswered questions and non-exact multiple-select answers are incorrect. The result percentage is `correct / total * 100`; total and section percentages display to one decimal place. The results show one percentage for each of the six exam-guide sections. Result review exposes all choice feedback and source evidence. No pass or fail label is shown.

A persisted attempt is compatible only if runtime validation accepts its schema version, set identifier and version, status, timestamps, question identifiers, and choice identifiers. Invalid state is discarded. A compatible in-progress attempt whose deadline has passed completes immediately on load. Completed results persist and restore until the candidate confirms a new attempt.

## Scenarios

**Scenario 1: Complete a valid attempt**

- Given an in-progress attempt with time remaining
- When the candidate answers questions and confirms finish
- Then the application shows a reproducible total score, section scores, and cited review

**Scenario 2: Restore without extending time**

- Given a persisted compatible attempt with time remaining
- When the page reloads
- Then answers and position restore and the deadline remains unchanged

**Scenario 3: Deadline expiration**

- Given an in-progress attempt whose deadline is reached
- When the timer observes zero remaining time
- Then the attempt completes without a confirmation dialog

**Scenario 4: Exact multiple-select scoring**

- Given a choose-two question
- When the candidate selects only one correct choice, or one correct and one incorrect choice
- Then the question is scored incorrect

**Scenario 5: Incompatible persisted data**

- Given stored data for a different question-set version, or malformed state
- When the application loads
- Then the stored data is discarded and the ready screen appears

**Scenario 6: Restore an expired attempt**

- Given a compatible persisted attempt whose deadline is in the past
- When the application loads
- Then the attempt completes immediately and the result screen appears

**Scenario 7: Restore a completed attempt**

- Given a compatible completed attempt in browser storage
- When the application reloads
- Then the same read-only score and cited result review appear

## Test Design

| Case | Level | Input or scenario | Observable assertion | Proves |
|---|---|---|---|---|
| Exact score | Unit | Correct, wrong, and unanswered responses | Stable total and section counts | The scoring contract is deterministic. |
| Selection order | Unit | The same correct multiple choices in a different order | Both score as correct | Set equality, not click order, controls scoring. |
| Restoration | Component | Persisted active attempt | Original answers, position, and deadline render | Reload does not reset progress or time. |
| Expiration | Component | Deadline at the current time | Results replace the exam without confirmation | The auto-submit contract holds. |
| Full flow | End-to-end | Start, answer, navigate, mark, finish | Results and evidence render | The candidate-visible workflow is connected. |
| Mobile flow | End-to-end | Narrow viewport and keyboard input | Controls remain reachable and named | Basic responsive accessibility holds. |
| Invalid storage | Component | Incompatible or malformed persisted data | The ready screen renders and bad state is removed | Invalid storage cannot corrupt the attempt flow. |
| Expired restoration | Component | Persisted active attempt past its deadline | Completed results render immediately | Reload cannot extend an expired attempt. |
| Completed restoration | Component | Persisted completed attempt | The same read-only results render | Completion survives reload. |
| Selection limit | Component | Choose-two question with two selections | Remaining unchecked choices disable until one is cleared | Multiple-select input cannot exceed its declared count. |
| Finish confirmation | Component | Unanswered and marked questions | The dialog reports both counts before submission | Manual completion exposes review risk. |
| Percentage format | Unit | Fractional section score | Percentage is rounded to one decimal place | Results use the documented precision. |
| New attempt | Component | Completed attempt and restart action | Confirmation precedes replacement with blank state | Results are not discarded accidentally. |

## Related

- PRD: [/prd/0001-cloud-architect-exam-simulator.md](/prd/0001-cloud-architect-exam-simulator.md)
- ADR: [/adr/0001-port-pmle-simulator.md](/adr/0001-port-pmle-simulator.md)
- Issue: [/issues/0001-port-simulator-for-pca.md](/issues/0001-port-simulator-for-pca.md)
