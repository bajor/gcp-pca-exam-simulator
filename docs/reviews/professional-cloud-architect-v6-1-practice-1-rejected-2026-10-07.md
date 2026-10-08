---
type: Review
title: Rejected review of professional-cloud-architect-v6-1-practice-1 version 1
description: Semantic and source review of all 60 questions of the Practice Exam 1 candidate, which returns two questions for revision.
status: Rejected
timestamp: 2026-10-07T00:00:00Z
---

# Rejected Review of professional-cloud-architect-v6-1-practice-1

## Review Summary

- **Candidate:** `professional-cloud-architect-v6-1-practice-1` version 1, registered in `src/data/questionSets/practice1/candidates.ts` at commit `5825aa3` (pull request #23). The record below binds this review to its SHA-256 content digest.
- **Reviewer:** `claude-opus-5.5-p1-acceptance-20261007`, reviewing on 2026-10-07.
- **Independence:** The `author` fields of the six section modules are `claude-opus-5.5-p1-design-20261001`, `claude-opus-5.5-p1-provision-20261002`, `claude-opus-5.5-p1-secure-20261002`, `claude-opus-5.5-p1-analyze-20261002`, `claude-opus-5.5-p1-implement-20261002`, and `claude-opus-5.5-p1-operate-20261002`. The reviewer identifier is not among them, and this review session authored and edited no candidate content.
- **Guide and case studies:** On 2026-10-07 the [certification page](https://cloud.google.com/learn/certification/cloud-architect) still linked the standard exam guide and stated 2 case studies per exam, 20 to 30% case-study questions, and 4 available case studies. The [exam guide](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf) is byte-identical to the copies of 2026-10-01 and 2026-10-02 (SHA-256 `3803bc09...211d`): six sections weighted about 25, 17.5, 17.5, 15, 12.5, and 12.5%, 22 objectives, and the four case studies. The EHR Healthcare and Cymbal Retail case-study PDFs are byte-identical to the copies of 2026-10-02 (SHA-256 `b9171e78...2aa8` and `0d208752...06c0`). Nothing changed, so the review continued.
- **Earlier rejections:** `docs/reviews/` contained only `index.md`, so no earlier rejection report exists for this practice exam.
- **Sources:** 156 unique evidence URLs, including the 2 case-study PDFs. Each returned HTTP 200 at the cited URL without a redirect, and the reviewer read the passage behind every evidence claim, option, and feedback sentence. All of them are supported.

## Commands Run

| Command | Result |
|---|---|
| `CI=1 make test`, before the review | Passed: documentation check of 33 files, type check, lint, 103 unit tests in 6 files, build, and 22 Playwright tests with 4 skipped by viewport. |
| `make verify-sources`, before the review | Passed: 2 test files, 7 tests, including the live fetch of every evidence URL. |
| `npm run question-set-report -- professional-cloud-architect-v6-1-practice-1` | Summarized in the next section. |
| A script that fetched all 156 evidence URLs | 156 of 156 returned HTTP 200 at the cited URL. |
| `npm run -s create-rejection-record -- professional-cloud-architect-v6-1-practice-1 claude-opus-5.5-p1-acceptance-20261007 2026-10-07 "$(cat rejections.json)"` | The record under the Rejection Record heading, unmodified. |
| `make docs`, `CI=1 make test`, and `make verify-sources`, after adding this report | Passed: documentation check of 34 files; type check, lint, 103 unit tests, build, and 22 Playwright tests with 4 skipped; and 2 source-verification test files with 7 tests, which validate this record against the candidate. |

## Report Summary

The question-set report measured 60 questions, 4 of them choose-two:

- Stems have 66 to 112 words (median 86), options 18 to 34 words, and questions 159 to 228 words of reading load (median 188). The longest option is at most 1.58 times the shortest within a question.
- The correct option is strictly the longest in 14 of 56 single-choice questions. Near-miss pairs occur in 44 questions. Correct letters a, b, c, and d occur 14 times each.
- Case-study questions: EHR Healthcare 8 in 6 sections and Cymbal Retail 8 in 4 sections.
- Every objective receives its allocated number of questions, no consideration is the primary topic of more than one question, and every question names a consideration identifier.

## Set-Level Checks

The set meets requirements 2 to 7 of [PRD 0002](/prd/0002-practice-exam-question-sets.md), with no accepted exception:

1. **Objective allocation and consideration caps:** both match the [coverage matrix](/authoring/coverage-matrix.md). Objectives 1.1, 1.5, 2.4, and 2.5 use 1.1.d, 1.1.g, 1.1.i, 1.1.j, 1.5.c, 2.4.a, and 2.5.a once each.
2. **Feasibility check (coverage rule 4):** Practice Exam 1 is the only practice exam with a registered candidate, so two sets remain. Of 99 testable considerations, 39 are unused. Each objective's unused considerations fit its remaining questions: 1.1 8 of 8, 1.2 3 of 6, 1.3 3 of 8, 1.4 1 of 6, 1.5 2 of 2, 2.1 1 of 6, 2.2 4 of 6, 2.3 3 of 6, 2.4 2 of 2, 2.5 2 of 2, 3.1 1 of 16, 3.2 1 of 6, 4.1 1 of 10, 4.2 3 of 8, 5.1 0 of 8, 5.2 3 of 6, 6.1 0 of 2, 6.2 1 of 4, and 6.3 to 6.6 0 of 2 each. The unused considerations are 1.1.a, 1.1.b, 1.1.c, 1.1.e, 1.1.f, 1.1.h, 1.1.k, 1.1.l, 1.2.a, 1.2.c, 1.2.d, 1.3.a, 1.3.d, 1.3.g, 1.4.a, 1.5.a, 1.5.b, 2.1.b, 2.2.a, 2.2.b, 2.2.c, 2.2.f, 2.3.a, 2.3.b, 2.3.f, 2.4.b, 2.4.c, 2.5.b, 2.5.c, 3.1.c, 3.2.c, 4.1.a, 4.2.a, 4.2.e, 4.2.g, 5.2.a, 5.2.b, 5.2.f, and 6.2.b.
3. **Length targets:** all within the targets in the previous section.
4. **Answer design:** 44 near-miss questions (at least 24), 14 strictly longest correct options (at most 18), letters 14 each (11 to 17), and 4 choose-two questions (4 to 8).
5. **Question types, tallied by the reviewer from research 0003:** T1 2, T2 3, T3 5, T4 5, T5 3, T6 8, T7 10, T8 3, T9 4, T10 8, T11 4, and T12 5. Every minimum holds; T4 and T9 are exactly at their minimums. The reviewer counts the Gen AI evaluation question in `analyze` as T11 and the Model Armor question in `secure` as T7; that question also fits T11, so the T11 minimum holds under either reading.
6. **AI as the decisive topic:** 7 questions (6 to 12): Gemini structured output, Agent Platform Pipelines, AI Commerce Search, Model Armor, Gemini content filter thresholds, the Gen AI evaluation service, and Provisioned Throughput.
7. **Case studies:** EHR Healthcare and Cymbal Retail, as the coverage matrix assigns. Every case-study question names its company, restates its decisive facts, cites its case study, does not contradict it, and shares no run of more than 4 words with it.

## Question Checks

- **Determinism and distractors:** every question has exactly one correct option, or two for choose-two, and every distractor is possible on Google Cloud and fails a stated constraint for a documented reason.
- **Currency:** product names match the [current product names](/context/product-names.md), and no stem, option, or feedback uses a former name. Preview or deprecation notices on cited pages cover features that no correct answer depends on, such as the WildFire sandbox, Binary Authorization continuous validation, and the GenAI Client SDK interface. IAP enabled directly on Cloud Run is generally available, and the Preview rapid cost estimate of Migration Center appears only in a distractor whose feedback states its status.
- **Originality:** the reviewer compared every question with the 19 items of the official sample form, fetched on 2026-10-07, and with the 37 draft questions of Practice Exam 2. No question shares a run of more than 6 words with a sample item, and no organization type, problem, and decisive feature repeat together.
- **Format:** every feedback starts with "Correct." or "Incorrect." and has one to three sentences. No option uses "all of the above", "none of the above", a negative stem, multi-line code, or an absolute word as a clue. Every question uses at least two difficulty levers.
- **Constraints:** 58 of 60 stems state two or three explicit constraints. Following the stem anatomy and the calibration example of the [question style guide](/authoring/question-style-guide.md), the reviewer counts a constraint as a stated requirement, limit, or stakeholder want that governs the decision, and does not count organization goals or current-state and incident facts. Under this standard, the HIPAA question counts both the compliance requirement and the development teams' stated wish to use the new services, which its correct option balances.

## Rejection Summary

Two questions are returned for revision because each stem states only one explicit constraint instead of the two or three that the stem anatomy requires. Their answers are deterministic, and their sources support every sentence. The other 58 questions passed every check. The record below is the only authoritative list of rejected identifiers and reasons.

A separate author must create a corrected draft and candidate with a new identifier and version, and the corrected candidate needs a new independent review. This candidate stays registered with unchanged content, and this report adds no review record.

## Rejection Record

```json
{
  "questionSetId": "professional-cloud-architect-v6-1-practice-1",
  "questionSetVersion": 1,
  "contentSha256": "fe662286982845368b6ed25f546bb564207b4d69d6e7dcc03955c5a732378cef",
  "reviewer": "claude-opus-5.5-p1-acceptance-20261007",
  "authors": [
    "claude-opus-5.5-p1-design-20261001",
    "claude-opus-5.5-p1-provision-20261002",
    "claude-opus-5.5-p1-secure-20261002",
    "claude-opus-5.5-p1-analyze-20261002",
    "claude-opus-5.5-p1-implement-20261002",
    "claude-opus-5.5-p1-operate-20261002"
  ],
  "reviewedOn": "2026-10-07",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 156,
  "questionIds": [
    "pca-p1-design-01",
    "pca-p1-design-02",
    "pca-p1-design-03",
    "pca-p1-design-04",
    "pca-p1-design-05",
    "pca-p1-design-06",
    "pca-p1-design-07",
    "pca-p1-design-08",
    "pca-p1-design-09",
    "pca-p1-design-10",
    "pca-p1-design-11",
    "pca-p1-design-12",
    "pca-p1-design-13",
    "pca-p1-design-14",
    "pca-p1-design-15",
    "pca-p1-provision-01",
    "pca-p1-provision-02",
    "pca-p1-provision-03",
    "pca-p1-provision-04",
    "pca-p1-provision-05",
    "pca-p1-provision-06",
    "pca-p1-provision-07",
    "pca-p1-provision-08",
    "pca-p1-provision-09",
    "pca-p1-provision-10",
    "pca-p1-provision-11",
    "pca-p1-secure-01",
    "pca-p1-secure-02",
    "pca-p1-secure-03",
    "pca-p1-secure-04",
    "pca-p1-secure-05",
    "pca-p1-secure-06",
    "pca-p1-secure-07",
    "pca-p1-secure-08",
    "pca-p1-secure-09",
    "pca-p1-secure-10",
    "pca-p1-secure-11",
    "pca-p1-analyze-01",
    "pca-p1-analyze-02",
    "pca-p1-analyze-03",
    "pca-p1-analyze-04",
    "pca-p1-analyze-05",
    "pca-p1-analyze-06",
    "pca-p1-analyze-07",
    "pca-p1-analyze-08",
    "pca-p1-analyze-09",
    "pca-p1-implement-01",
    "pca-p1-implement-02",
    "pca-p1-implement-03",
    "pca-p1-implement-04",
    "pca-p1-implement-05",
    "pca-p1-implement-06",
    "pca-p1-implement-07",
    "pca-p1-operate-01",
    "pca-p1-operate-02",
    "pca-p1-operate-03",
    "pca-p1-operate-04",
    "pca-p1-operate-05",
    "pca-p1-operate-06",
    "pca-p1-operate-07"
  ],
  "rejectedQuestions": [
    {
      "id": "pca-p1-design-13",
      "reason": "The stem states one explicit constraint: servers that depend on each other must move together. The four-wave plan, the failed pilot, and the eight weeks of discovery data are goal and current-state facts, and all three distractors fail that single constraint. The style guide's stem anatomy and step 6 of the review skill require two or three explicit constraints, so the stem needs a second stated requirement that the correct option meets."
    },
    {
      "id": "pca-p1-operate-04",
      "reason": "The stem states one explicit constraint: the API must keep serving every request while the Pods are replaced. The 12 replicas, the 60-second load time, and the existing graceful shutdown are current-state facts, and all three distractors fail that single constraint. The style guide's stem anatomy and step 6 of the review skill require two or three explicit constraints, so the stem needs a second stated requirement that the correct option meets."
    }
  ]
}
```
