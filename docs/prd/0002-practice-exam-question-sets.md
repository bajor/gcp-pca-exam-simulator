---
type: PRD
title: Practice exam question sets
description: Requirements for authoring, reviewing, and publishing three original 60-question PCA practice sets that match the real exam's reading load, difficulty, case-study use, and coverage.
status: Accepted
superseded_by:
tags: [questions, content]
timestamp: 2026-10-01T00:00:00Z
---

# 0002. Practice Exam Question Sets

## Problem / Motivation

The simulator specified by [PRD 0001](/prd/0001-cloud-architect-exam-simulator.md) has no questions yet. The candidate wants several full practice exams. After the real Professional Data Engineer exam, they found the real questions much longer and harder than their practice questions, and they ran out of time. [Research 0002](/research/0002-official-sample-question-patterns.md) and [research 0003](/research/0003-candidate-reported-question-types.md) describe how real PCA questions are built and what they test, including the case studies that 20 to 30% of the questions refer to.

## Goals

- Publish three original, independently reviewed 60-question sets: Practice Exams 1, 2, and 3.
- Match the real exam's reading load, difficulty drivers, case-study use, and guide coverage in every set.
- Cover every testable guide consideration and every case study at least once across the three sets without reusing scenarios.

## Non-goals

- Reproducing, paraphrasing, or re-skinning official samples or real exam content.
- Copying case-study text into questions or the repository.
- Questions with multi-line code or configuration snippets.
- Predicting the candidate's pass or fail result.

## Requirements

1. **Structure.** Each set passes structural validation (60 questions in the 15, 11, 11, 9, 7, and 7 section distribution, the reading-length floors, two case studies with 12 to 18 case-study questions, answer keys, and evidence) and `make verify-sources`.
2. **Objective allocation.** Each set allocates questions to the 22 objectives as the [coverage matrix](/authoring/coverage-matrix.md) specifies.
3. **Consideration coverage.** Within a set, no consideration is the primary topic of more than two questions. Across the three sets, every testable consideration is the primary topic of at least one question. Every set passes the coverage matrix's feasibility check (rule 4), so this stays achievable; as a result, objectives 1.1, 1.5, 2.4, and 2.5 never repeat a consideration.
4. **Length targets.** Stems have 65 to 120 words, options 10 to 35 words, and questions 130 to 240 words of reading load. Each set has a median reading load of at least 150 words. Within a question, the longest option is at most twice as long as the shortest.
5. **Answer design.** At least 24 questions per set contain a near-miss pair. Among single-choice questions, the correct option is strictly longer than every other option in at most 18, and each letter is correct 11 to 17 times. A set has 4 to 8 choose-two questions.
6. **Question-type mix.** Each set has at least 5 troubleshooting (T4), 5 reliability and recovery (T6), 6 security and identity (T7), 4 cost optimization (T9), 3 migration planning (T3), and 4 AI solution design (T11) questions, using the types defined in research 0003. AI is the decisive topic in 6 to 12 questions.
7. **Case studies.** Each set uses the case studies that the coverage matrix assigns to it. Every case-study question names its company, restates every decisive fact in its stem, and cites its case study. The questions of each case study span at least three sections.
8. **Currency.** Questions use the [current product names](/context/product-names.md) and only generally available features; products that the reference lists as Preview or deprecated, such as Gemini Cloud Assist, are never decisive. Every source is fetched on the question's `verifiedOn` date.
9. **Originality.** No question resembles an official sample. No scenario repeats across sets, where a scenario repeats when its organization type, problem, and decisive feature all match.
10. **Independence.** The reviewer is not an author of the set. The acceptance record is bound to the set's version and SHA-256 content digest.
11. **Publication.** A catalog entry changes from coming soon to available only after its exact candidate is accepted. Set identifiers follow `professional-cloud-architect-v6-1-practice-<n>`, and corrections add `-v<version>`.

The [question style guide](/authoring/question-style-guide.md) defines stems, constraints, case-study rules, near-miss pairs, distractor mechanisms, and difficulty levers.

## Quality Requirements

| Quality attribute | Scenario | Verified by |
|---|---|---|
| Realism | A candidate completes a published set; the reading load, case-study use, and time pressure resemble the real exam. | Set metrics in the review record and the candidate's feedback. |
| Correctness | A reviewer re-fetches every source; every correct answer and distractor explanation is supported. | Independent review and `make verify-sources`. |
| Coverage | The three sets are compared; every testable consideration and every case study appears at least once. | Consideration identifiers in `objective` fields and the case-study identifiers of the questions. |
| Originality | A reviewer compares a set with the official samples and earlier sets; no scenario matches. | Independent review. |

## Acceptance Criteria

- Each set has an indexed acceptance record, and its catalog entry is available.
- Each review record documents the set-level metrics from requirements 2 to 7, including the feasibility check, and any accepted exception.
- `make test` and `make verify-sources` pass after each publication.

## Success Metrics

The application collects no analytics. After each completed set, the candidate reports whether its difficulty and time pressure matched the real exam. If a set feels easier, the next set raises the length targets or the share of multi-constraint questions.

## Open Questions

- Should more than three sets be authored?
- When is the candidate's exam date?

## Behavior

- [Question validation and publication](/bdr/0002-question-validation-and-publication.md)
- [Case studies](/bdr/0004-case-studies.md)

## Related

- Issue: [/issues/0002-prepare-question-authoring.md](/issues/0002-prepare-question-authoring.md)
- Guides: [/authoring/question-style-guide.md](/authoring/question-style-guide.md) and [/authoring/coverage-matrix.md](/authoring/coverage-matrix.md)
