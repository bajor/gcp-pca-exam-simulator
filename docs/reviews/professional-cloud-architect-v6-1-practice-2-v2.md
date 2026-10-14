---
type: Review
title: Independent review of professional-cloud-architect-v6-1-practice-2-v2
description: Semantic and source acceptance for all 60 questions of Practice Exam 2 version 2.
status: Accepted
timestamp: 2026-10-14T00:00:00Z
---

# Independent Review of professional-cloud-architect-v6-1-practice-2-v2

## Review Summary

- **Candidate:** `professional-cloud-architect-v6-1-practice-2-v2` version 2, registered in `src/data/questionSets/practice2/candidates.ts` at commit `772123f` (draft pull request #39). The module `src/data/questionSets/practice2/sections/provisionV2.ts` changes only provision-09: its prompt, its `verifiedOn` date, and the feedback of choices b, c, and d. The reviewer compared the JSON of both registered candidates: the other 59 questions, every choice text, every evidence item, and every answer key are identical to version 1. The record below binds this review to the version 2 SHA-256 content digest.
- **Reviewer:** `claude-opus-5.5-p2-acceptance-v2-20261014`, reviewing on 2026-10-14 (UTC).
- **Independence:** The `author` fields of the six version 2 section modules are `claude-opus-5.5-p2-design-20261002`, `claude-opus-5.5-p2-provision-v2-20261014`, `claude-opus-5.5-p2-secure-20261002`, `claude-opus-5.5-p2-analyze-20261007`, `claude-opus-5.5-p2-implement-20261007`, and `claude-opus-5.5-p2-operate-20261007`. The reviewer identifier is not among them. It also differs from the version 1 reviewer, `claude-opus-5.5-p2-acceptance-20261014`, and from `claude-opus-5.5-p2-provision-20261002`, who wrote the ten unchanged provision questions. This review session authored and edited no candidate content.
- **Guide and case studies:** On 2026-10-14 at 10:07 UTC the [certification page](https://cloud.google.com/learn/certification/cloud-architect) still linked the standard exam guide and stated 2 case studies per exam, 20 to 30% case-study questions, 4 available case studies, and that the exam uses the guide's product names. The [exam guide](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf) is byte-identical to the copy of 2026-10-02 that [issue 0004](/issues/0004-author-practice-exam-2.md) records and to the copy that the [version 1 rejection report](/reviews/professional-cloud-architect-v6-1-practice-2-rejected-2026-10-14.md) cites (SHA-256 `3803bc093831cbfe270f56446c270d072c67bbe8ad8f34579027add56549211d`): six sections weighted about 25, 17.5, 17.5, 15, 12.5, and 12.5%, 22 objectives, and the four case studies. The Altostrat Media and KnightMotives Automotive case-study PDFs are byte-identical to the copies of 2026-10-02 (SHA-256 `b8acb7656aa43901e7a2764c775ecbd75b81e591a1affaf25444f3ed5ae9d88b` and `6712d08d5561ef3eb15dcfbd8319eb3fa2dc22243ad5a8fc04560bec4df4a044`). Nothing changed, so the review continued.
- **Earlier rejections:** `docs/reviews/` contains one earlier rejection report for Practice Exam 2, which returned provision-09 of version 1 because its stem stated one explicit constraint. Version 2 revises that question; it does not return unchanged. Its stem now also states that the team cannot change the code or the rules file this quarter, and that the bank accepts the cost of one idle instance but not of more instances than the traffic needs. The response-time requirement rules out choices a, c, and d, and the cost limit also rules out choice d, whose feedback now names it, so the stem states two constraints that rule out options, plus a third that keeps the key's no-change property explicit. The answer stays deterministic, the question stays type T4 as the rejection required, and every revised feedback sentence is supported by its cited pages. The other rejection report in `docs/reviews/` concerns Practice Exam 1.
- **Sources:** 160 unique evidence URLs, including the 2 case-study PDFs. Each returned HTTP 200 at the cited URL without a redirect on 2026-10-14, and the reviewer read the passage behind every evidence claim, option, and feedback sentence. All of them are supported.

## Commands Run

| Command | Result |
|---|---|
| `git fetch origin content/practice-2-v2`, then `git worktree add -b review/practice-2-v2-acceptance <worktree> origin/content/practice-2-v2` and `npm ci` | Worktree at `772123f`; dependencies installed. |
| `curl` re-fetch of the certification page, the exam guide, and both case-study PDFs, then `sha256sum` | HTTP 200 for all four without redirects; the three PDFs match the recorded copies. |
| `CI=1 make test`, before the review | Passed: documentation check of 35 files, type check, lint, 105 unit tests in 6 files, build, and 22 Playwright tests with 4 skipped by viewport. A first attempt stopped because another process held port 4173; the rerun after the port was free passed. |
| `make verify-sources`, before the review | Passed: 2 test files, 7 tests, including the live fetch of every evidence URL. |
| `npm run question-set-report -- professional-cloud-architect-v6-1-practice-2-v2` | Summarized in the next section. |
| A script that fetched all 160 evidence URLs | 160 of 160 returned HTTP 200 at the cited URL, with no redirects. |
| A script that compared every field of the 16 case-study questions with their case study | The longest shared run is 4 words, counting hyphenated words both joined and split. |
| A script that ranked the closest Practice Exam 1 questions for each question, followed by a manual comparison | No organization type, problem, and decisive feature repeat together. |
| A script that read the official sample form through a pipe and compared it in memory | The longest shared run is 6 words, the generic phrase "what should you do choose two". Nothing was written to disk. |
| A script that applied coverage rule 4 to the latest candidates of Practice Exams 1 and 2 | Passes; see the set-level checks. |
| `npm run -s create-review-record -- professional-cloud-architect-v6-1-practice-2-v2 claude-opus-5.5-p2-acceptance-v2-20261014 2026-10-14` | The record under the Review Record heading, unmodified. |
| `make docs`, `CI=1 make test`, and `make verify-sources`, after adding this review | Passed: documentation check of 36 files; type check, lint, 105 unit tests, build, and 22 Playwright tests with 4 skipped; and 2 source-verification test files with 7 tests, which validate this record against the candidate. |

## Report Summary

The question-set report measured 60 questions, 4 of them choose-two:

- Stems have 66 to 108 words (median 76.5), options 15 to 31 words (median 24), and questions 150 to 202 words of reading load (median 174). The longest option is at most 1.65 times the shortest within a question. The revised provision-09 has the longest stem, 108 words, and a reading load of 200 words.
- The correct option is strictly the longest in 12 of 56 single-choice questions. Near-miss pairs occur in 50 questions. Correct letters a, b, c, and d occur 15, 14, 14, and 13 times.
- Case-study questions: Altostrat Media 8 in 5 sections and KnightMotives Automotive 8 in 5 sections.
- Every objective receives its allocated number of questions, no consideration is the primary topic of more than one question, and every question names a consideration identifier.

## Set-Level Checks

The candidate meets requirements 2 to 7 of [PRD 0002](/prd/0002-practice-exam-question-sets.md), with no accepted exception:

1. **Objective allocation and consideration caps:** both match the [coverage matrix](/authoring/coverage-matrix.md). Objectives 1.1, 1.5, 2.4, and 2.5 use 1.1.a, 1.1.b, 1.1.c, 1.1.h, 1.5.b, 2.4.c, and 2.5.b once each, and Practice Exam 1 version 2 uses none of them.
2. **Feasibility check (coverage rule 4):** Practice Exams 1 and 2 have registered candidates, and the latest are Practice Exam 1 version 2 and this candidate, so one set remains. Of 99 testable considerations, 8 are unused. Each objective's unused considerations fit its remaining questions: 1.1 4 of 4 (1.1.e, 1.1.f, 1.1.k, and 1.1.l), 1.5 1 of 1 (1.5.a), 2.2 1 of 3 (2.2.f), 2.4 1 of 1 (2.4.b), and 2.5 1 of 1 (2.5.c). The other 17 objectives have no unused considerations. The check passes, and objective 1.1 has no spare question. The two candidates together use all four case studies.
3. **Length targets:** all within the targets in the previous section.
4. **Answer design:** 50 near-miss questions (at least 24), 12 strictly longest correct options (at most 18), letters 15, 14, 14, and 13 (11 to 17 each), and 4 choose-two questions (4 to 8).
5. **Question types, tallied by the reviewer from research 0003:** T1 5, T2 4, T3 3, T4 5, T5 2, T6 5, T7 10, T8 3, T9 5, T10 10, T11 6, and T12 2. Every minimum holds; T3, T4, and T6 are exactly at their minimums. The reviewer gives each question one type and applies these rules in order: (1) a stem that reports an observed failure, slowdown, or unexpected behavior, and whose answer depends on identifying its cause, is T4; (2) a question whose chosen option is a recovery, continuity, or availability pattern, or a reliability measure, is T6; (3) another question under objective 1.4 or consideration 5.1.d is T3; (4) any other question takes the type of its primary decision as research 0003 defines it, with securing AI counted as T11. Under these rules the T4 questions are design-14, provision-09, analyze-02, operate-02, and operate-05; the T6 questions are design-03, provision-07, analyze-05, analyze-08, and operate-06; and the T3 questions are design-12, design-13, and implement-04. analyze-08 (a rehearsed paper fallback) and operate-06 (deployment failure rate) could also be read as T12 and T10. The T6 minimum still holds under that reading, because design-04's near-miss pair is decided only by the requirement to keep accepting reservations during a regional failure, and operate-07 belongs to objective 6.6, which research 0003 maps to T6; T7 would keep 9 questions.
6. **AI as the decisive topic:** 7 questions (6 to 12): design-02 (the eu multi-region endpoint for Gemini), design-11 (Gemini audio and video understanding), provision-10 (an AI Hypercomputer future reservation in calendar mode), provision-11 (NotebookLM), secure-08 (a perimeter that restricts the Agent Platform API), implement-07 (the Google Gen AI SDK and a response schema), and operate-05 (Gemini model retirement). The reviewer counts AI as decisive when the correct option names an AI product, model, AI API, or AI-specific control and would fail without it. design-01 and analyze-06 mention AI investments only as business context, and the "model" of provision-08 and implement-01 is a crash simulation model and a forecast configuration.
7. **Case studies:** Altostrat Media and KnightMotives Automotive, as the coverage matrix assigns. Every case-study question names its company, restates its decisive facts, cites its case study from a choice, does not contradict it, and shares no run of more than 4 words with it.

## Question Checks

- **Determinism and distractors:** every question has exactly one correct option, or two for choose-two, and every distractor is possible on Google Cloud and fails a stated constraint for a documented reason. analyze-05's choice d stays wrong because an instant snapshot remains in its source disk's zone or region until it is converted to a standard snapshot.
- **Currency:** product names match the [current product names](/context/product-names.md). The only former name in any stem, option, feedback, or claim is the Python module name `vertexai.generative_models` in implement-07, which rule 4 of that page allows as an API name that Google kept. Preview or deprecation notices on the cited pages cover features that no correct answer depends on, such as autoscaled blue-green node pool upgrades, Observability Analytics analytics views, snapshot scopes, the NotebookLM search-source integration, FOCUS billing export, and Preview Gemini models. implement-07's choice d uses the deprecated `vertexai.generative_models` module, which the migration guide still lets users keep by pinning `google-cloud-aiplatform` below 2.0.0, and its feedback states the deprecation.
- **Originality:** the reviewer compared every question with the items of the official sample form in memory on 2026-10-14, without storing them. The longest shared runs are the generic phrases "what should you do choose two" and "which solution should you design". operate-03, secure-01, analyze-09, and design-14 share a topic with a sample item each (log analytics, secret storage, billing export, and address planning for hybrid connectivity), but their organizations, problems, and decisive decisions differ, so none copies, paraphrases, or re-skins a sample. The reviewer also compared every question with the 60 questions of Practice Exam 1 version 2 and with version 1 of its two revised questions. The closest pairs differ in at least two of organization type, problem, and decisive feature: analyze-03 and Practice Exam 1's analyze-03 both concern media companies and Cloud Deploy, but here the problem is drift between cloud and on-premises clusters, decided by fleet targets through Connect gateway; secure-08 and Practice Exam 1's secure-04 both use a VPC Service Controls perimeter, but for a media company's AI API instead of a biotech company's analysts; operate-05 and Practice Exam 1's operate-05 both concern a failing Gemini assistant, but here every request fails after a model retirement, and Provisioned Throughput, the key of Practice Exam 1's question, is a distractor.
- **Format:** every feedback starts with "Correct." or "Incorrect." and has one to three sentences. No option uses "all of the above", "none of the above", a negative stem, multi-line code, or an absolute word as a clue. Every question uses at least two difficulty levers: the 50 near-miss questions add feature-level knowledge or constraint tension, and the other 10 use non-decisive detail with feature-level knowledge, constraint tension, or a multi-step option with one wrong step.
- **Constraints:** following the stem anatomy and the calibration example of the [question style guide](/authoring/question-style-guide.md), and the standard of the earlier reviews, the reviewer counts a constraint as a stated requirement, limit, or stakeholder want that rules out at least one option, does not count organization goals or current-state and incident facts, and counts clauses about one property once. Under this standard every stem, including the revised provision-09, states two or three explicit constraints.
- **Verification dates:** questions record `verifiedOn` dates of 2026-10-02 (20 questions), 2026-10-07 (26), and 2026-10-14 (14). Every cited page, as fetched on 2026-10-14, still supports its claims.

All 60 questions passed the required checks, and the record below accepts every one of them.

## Review Record

```json
{
  "questionSetId": "professional-cloud-architect-v6-1-practice-2-v2",
  "questionSetVersion": 2,
  "contentSha256": "19f8f70af38a90d7e0e5b600c3bfebd745aec3259d6307b616cbe82cc2db8ba0",
  "reviewer": "claude-opus-5.5-p2-acceptance-v2-20261014",
  "authors": [
    "claude-opus-5.5-p2-design-20261002",
    "claude-opus-5.5-p2-provision-v2-20261014",
    "claude-opus-5.5-p2-secure-20261002",
    "claude-opus-5.5-p2-analyze-20261007",
    "claude-opus-5.5-p2-implement-20261007",
    "claude-opus-5.5-p2-operate-20261007"
  ],
  "reviewedOn": "2026-10-14",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 160,
  "acceptedQuestionIds": [
    "pca-p2-design-01",
    "pca-p2-design-02",
    "pca-p2-design-03",
    "pca-p2-design-04",
    "pca-p2-design-05",
    "pca-p2-design-06",
    "pca-p2-design-07",
    "pca-p2-design-08",
    "pca-p2-design-09",
    "pca-p2-design-10",
    "pca-p2-design-11",
    "pca-p2-design-12",
    "pca-p2-design-13",
    "pca-p2-design-14",
    "pca-p2-design-15",
    "pca-p2-provision-01",
    "pca-p2-provision-02",
    "pca-p2-provision-03",
    "pca-p2-provision-04",
    "pca-p2-provision-05",
    "pca-p2-provision-06",
    "pca-p2-provision-07",
    "pca-p2-provision-08",
    "pca-p2-provision-09",
    "pca-p2-provision-10",
    "pca-p2-provision-11",
    "pca-p2-secure-01",
    "pca-p2-secure-02",
    "pca-p2-secure-03",
    "pca-p2-secure-04",
    "pca-p2-secure-05",
    "pca-p2-secure-06",
    "pca-p2-secure-07",
    "pca-p2-secure-08",
    "pca-p2-secure-09",
    "pca-p2-secure-10",
    "pca-p2-secure-11",
    "pca-p2-analyze-01",
    "pca-p2-analyze-02",
    "pca-p2-analyze-03",
    "pca-p2-analyze-04",
    "pca-p2-analyze-05",
    "pca-p2-analyze-06",
    "pca-p2-analyze-07",
    "pca-p2-analyze-08",
    "pca-p2-analyze-09",
    "pca-p2-implement-01",
    "pca-p2-implement-02",
    "pca-p2-implement-03",
    "pca-p2-implement-04",
    "pca-p2-implement-05",
    "pca-p2-implement-06",
    "pca-p2-implement-07",
    "pca-p2-operate-01",
    "pca-p2-operate-02",
    "pca-p2-operate-03",
    "pca-p2-operate-04",
    "pca-p2-operate-05",
    "pca-p2-operate-06",
    "pca-p2-operate-07"
  ],
  "rejectedQuestions": []
}
```
