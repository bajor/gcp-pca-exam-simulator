---
type: Review
title: Rejected review of professional-cloud-architect-v6-1-practice-2 version 1
description: Semantic and source review of all 60 questions of the Practice Exam 2 candidate, which returns one question for revision.
status: Rejected
timestamp: 2026-10-14T00:00:00Z
---

# Rejected Review of professional-cloud-architect-v6-1-practice-2

## Review Summary

- **Candidate:** `professional-cloud-architect-v6-1-practice-2` version 1, registered in `src/data/questionSets/practice2/candidates.ts` at commit `6cd5a3d` (draft pull request #35, which includes pull requests #31 and #32). The record below binds this review to its SHA-256 content digest.
- **Reviewer:** `claude-opus-5.5-p2-acceptance-20261014`, reviewing on 2026-10-14.
- **Independence:** The `author` fields of the six section modules are `claude-opus-5.5-p2-design-20261002`, `claude-opus-5.5-p2-provision-20261002`, `claude-opus-5.5-p2-secure-20261002`, `claude-opus-5.5-p2-analyze-20261007`, `claude-opus-5.5-p2-implement-20261007`, and `claude-opus-5.5-p2-operate-20261007`. The reviewer identifier is not among them, and this review session authored and edited no candidate content.
- **Guide and case studies:** On 2026-10-14 the [certification page](https://cloud.google.com/learn/certification/cloud-architect) still linked the standard exam guide and stated 2 case studies per exam, 20 to 30% case-study questions, 4 available case studies, and that the exam uses the guide's product names. The [exam guide](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf) is byte-identical to the copies of 2026-10-01 and 2026-10-02 that [issue 0004](/issues/0004-author-practice-exam-2.md) records (SHA-256 `3803bc09...211d`): six sections weighted about 25, 17.5, 17.5, 15, 12.5, and 12.5%, 22 objectives, and the four case studies. The Altostrat Media and KnightMotives Automotive case-study PDFs are byte-identical to the copies of 2026-10-02 (SHA-256 `b8acb765...d88b` and `6712d08d...a044`). Nothing changed, so the review continued.
- **Earlier rejections:** `docs/reviews/` contains one rejection report, for Practice Exam 1 version 1. No earlier rejection report exists for Practice Exam 2.
- **Sources:** 160 unique evidence URLs, including the 2 case-study PDFs. Each returned HTTP 200 at the cited URL without a redirect, and the reviewer read the passage behind every evidence claim, option, and feedback sentence. All of them are supported.

## Commands Run

| Command | Result |
|---|---|
| `git fetch origin content/practice-2-candidate`, then `git worktree add -b review/practice-2-acceptance <worktree> origin/content/practice-2-candidate` and `npm ci` | Worktree at `6cd5a3d`; dependencies installed. |
| `curl` re-fetch of the certification page, the exam guide, and both case-study PDFs, then `sha256sum` | HTTP 200 for all four; the three PDFs match the authors' copies. |
| `CI=1 make test`, before the review | Passed: documentation check of 34 files, type check, lint, 105 unit tests in 6 files, build, and 22 Playwright tests with 4 skipped by viewport. |
| `make verify-sources`, before the review | Passed: 2 test files, 7 tests, including the live fetch of every evidence URL. |
| `npm run question-set-report -- professional-cloud-architect-v6-1-practice-2` | Summarized in the next section. |
| A script that fetched all 160 evidence URLs | 160 of 160 returned HTTP 200 at the cited URL, with no redirects. |
| A script that compared every field of the 16 case-study questions with their case study | The longest shared run is 4 words, counting hyphenated words both joined and split. |
| `npm run -s create-rejection-record -- professional-cloud-architect-v6-1-practice-2 claude-opus-5.5-p2-acceptance-20261014 2026-10-14 "$(cat rejections.json)"` | The record under the Rejection Record heading, unmodified. |
| `make docs`, `CI=1 make test`, and `make verify-sources`, after adding this report | Passed: documentation check of 35 files; type check, lint, 105 unit tests, build, and 22 Playwright tests with 4 skipped; and 2 source-verification test files with 7 tests, which validate this record against the candidate. |

## Report Summary

The question-set report measured 60 questions, 4 of them choose-two:

- Stems have 66 to 103 words (median 76.5), options 15 to 31 words (median 24), and questions 150 to 202 words of reading load (median 174). The longest option is at most 1.65 times the shortest within a question.
- The correct option is strictly the longest in 12 of 56 single-choice questions. Near-miss pairs occur in 50 questions. Correct letters a, b, c, and d occur 15, 14, 14, and 13 times.
- Case-study questions: Altostrat Media 8 in 5 sections and KnightMotives Automotive 8 in 5 sections.
- Every objective receives its allocated number of questions, no consideration is the primary topic of more than one question, and every question names a consideration identifier.

## Set-Level Checks

The candidate meets requirements 2 to 7 of [PRD 0002](/prd/0002-practice-exam-question-sets.md), with no accepted exception:

1. **Objective allocation and consideration caps:** both match the [coverage matrix](/authoring/coverage-matrix.md). Objectives 1.1, 1.5, 2.4, and 2.5 use 1.1.a, 1.1.b, 1.1.c, 1.1.h, 1.5.b, 2.4.c, and 2.5.b once each, and Practice Exam 1 uses none of them.
2. **Feasibility check (coverage rule 4):** Practice Exams 1 and 2 have registered candidates, and the latest are Practice Exam 1 version 2 and this candidate, so one set remains. Of 99 testable considerations, 8 are unused. Each objective's unused considerations fit its remaining questions: 1.1 4 of 4 (1.1.e, 1.1.f, 1.1.k, and 1.1.l), 1.5 1 of 1 (1.5.a), 2.2 1 of 3 (2.2.f), 2.4 1 of 1 (2.4.b), and 2.5 1 of 1 (2.5.c). The other 17 objectives have no unused considerations. The check passes, and objective 1.1 has no spare question. A revision of the returned question that keeps its consideration leaves this result unchanged.
3. **Length targets:** all within the targets in the previous section.
4. **Answer design:** 50 near-miss questions (at least 24), 12 strictly longest correct options (at most 18), letters 15, 14, 14, and 13 (11 to 17 each), and 4 choose-two questions (4 to 8).
5. **Question types, tallied by the reviewer from research 0003:** T1 5, T2 4, T3 3, T4 5, T5 2, T6 5, T7 10, T8 3, T9 5, T10 10, T11 6, and T12 2. Every minimum holds; T3, T4, and T6 are exactly at their minimums. The reviewer gives each question one type, the type whose definition matches the decision that the correct option depends on, and applies three tie rules: a stem that asks for the cause or first step of an observed failure or slowdown is T4; a question whose decisive property is availability, recovery, or measured release reliability is T6; and a question under objective 1.4 that is not a diagnosis is T3. Under these rules the T4 questions are design-14, provision-09, analyze-02, operate-02, and operate-05; the T6 questions are design-03, provision-07, analyze-05, analyze-08, and operate-06; and the T3 questions are design-12, design-13, and implement-04. analyze-08 (a rehearsed manual fallback for business continuity) and operate-06 (deployment failure rate as a release reliability measure) could also be read as T12 and T10. The T6 minimum still holds under that reading, because design-04's near-miss pair is decided only by the requirement to survive a regional failure, and operate-07 belongs to objective 6.6, which research 0003 maps to T6. The T3 minimum also holds if design-12 is read as T1, because design-14 tests migration network planning under objective 1.4.
6. **AI as the decisive topic:** 7 questions (6 to 12): design-02 (the eu multi-region endpoint for Gemini), design-11 (Gemini audio and video understanding), provision-10 (an AI Hypercomputer calendar-mode reservation), provision-11 (NotebookLM), secure-08 (a perimeter that restricts the Agent Platform API), implement-07 (the Google Gen AI SDK and a response schema), and operate-05 (Gemini model retirement). The reviewer counts AI as decisive when the correct option names an AI product, model, AI API, or AI-specific control and would fail without it, as PRD 0002 defines.
7. **Case studies:** Altostrat Media and KnightMotives Automotive, as the coverage matrix assigns. Every case-study question names its company, restates its decisive facts, cites its case study from a choice, does not contradict it, and shares no run of more than 4 words with it.

## Question Checks

- **Determinism and distractors:** every question has exactly one correct option, or two for choose-two, and every distractor is possible on Google Cloud and fails a stated constraint for a documented reason.
- **Currency:** product names match the [current product names](/context/product-names.md), and no stem, option, feedback, or claim uses a former name. Preview or deprecation notices on cited pages cover features that no correct answer depends on, such as autoscaled blue-green node pool upgrades, Observability Analytics analytics views, the Gemini Notebook Enterprise search-source integration, snapshot scopes, and Preview Gemini models. Implement-07's choice d uses the `vertexai.generative_models` module, which Google deprecated on June 24, 2025 with removal from the SDK announced for June 24, 2026; the migration guide still tells users to pin `google-cloud-aiplatform` below 2.0.0 to keep it. The released 1.x packages still ship the module, so the distractor is technically possible, it is not decisive, and its feedback states the deprecation, which the product-name rules allow for a distractor.
- **Originality:** the reviewer compared every question with the items of the official sample form in memory on 2026-10-14, without storing them. No question shares a run of more than 6 words with a sample item, and those runs are generic phrases. Secure-01, secure-06, and analyze-09 share a topic with a sample item each (secret storage, access without a VPN, and cost visibility for finance), but their organization types, problems, and decisive decisions differ, so none copies, paraphrases, or re-skins a sample. The reviewer also compared every question with the 60 questions of Practice Exam 1 version 2 and with version 1 of its two revised questions. No organization type, problem, and decisive feature repeat together. The closest pairs differ in at least one of the three: secure-08 and Practice Exam 1's secure-04 both use a VPC Service Controls perimeter, but for a media company's AI API and data projects instead of a biotech company's analysts; analyze-03 and Practice Exam 1's analyze-03 both concern media companies and Cloud Deploy, but the problem here is drift between cloud and on-premises clusters, decided by fleet targets through Connect gateway; provision-08 and Practice Exam 1's design-04 both use Spot VMs for checkpointed work, but for irregular simulations whose coordinator must not stop, with commitments as a distractor.
- **Format:** every feedback starts with "Correct." or "Incorrect." and has one to three sentences. No option uses "all of the above", "none of the above", a negative stem, multi-line code, or an absolute word as a clue. Every question uses at least two difficulty levers: the 50 near-miss questions add feature-level knowledge or constraint tension, and the other 10 use non-decisive detail with feature-level knowledge, constraint tension, or a multi-step option with one wrong step.
- **Constraints:** following the stem anatomy and the calibration example of the [question style guide](/authoring/question-style-guide.md), and the standard of the Practice Exam 1 review, the reviewer counts a constraint as a stated requirement, limit, or stakeholder want that rules out at least one option, does not count organization goals or current-state and incident facts, and counts clauses about one property once. Under this standard, 59 of 60 stems state two or three explicit constraints; analyze-06 states its constraints as stakeholder wants, whose legal and security concerns rule out the option that excludes those teams.
- **Verification dates:** questions record `verifiedOn` dates of 2026-10-02 (21 questions), 2026-10-07 (26), and 2026-10-14 (13). Every cited page, as fetched on 2026-10-14, still supports its claims.

## Rejection Summary

One question is returned for revision because its stem states only one explicit constraint instead of the two or three that the stem anatomy requires. Its answer is deterministic, and its sources support every sentence. The other 59 questions passed every check. The set-level targets hold, but the returned question is one of the five T4 questions, so its revision must keep type T4 or the corrected set must add another T4 question. The record below is the only authoritative list of rejected identifiers and reasons.

A separate author must create a corrected draft and candidate with a new identifier and version, and the corrected candidate needs a new independent review. This candidate stays registered with unchanged content, and this report adds no review record.

## Rejection Record

```json
{
  "questionSetId": "professional-cloud-architect-v6-1-practice-2",
  "questionSetVersion": 1,
  "contentSha256": "7a723caabd1842533115d48eaadc3f60f13a75b353440d5777b4dc75ec8e24b9",
  "reviewer": "claude-opus-5.5-p2-acceptance-20261014",
  "authors": [
    "claude-opus-5.5-p2-design-20261002",
    "claude-opus-5.5-p2-provision-20261002",
    "claude-opus-5.5-p2-secure-20261002",
    "claude-opus-5.5-p2-analyze-20261007",
    "claude-opus-5.5-p2-implement-20261007",
    "claude-opus-5.5-p2-operate-20261007"
  ],
  "reviewedOn": "2026-10-14",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 160,
  "questionIds": [
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
  "rejectedQuestions": [
    {
      "id": "pca-p2-provision-09",
      "reason": "The stem states one explicit constraint: business-hours approvals after quiet periods must respond as quickly as the other requests. The request rate, the 9-second delay, and the large rules file that the container loads at startup are current-state and incident facts, and all three distractors fail that single constraint. The stem anatomy of the question style guide and step 6 of the review skill require two or three explicit constraints, the same rule under which the independent review of Practice Exam 1 version 1 returned pca-p1-design-13 and pca-p1-operate-04, so the stem needs a second stated requirement that a distractor fails, such as a limit on cost or on application changes. The question is one of the five troubleshooting (T4) questions that the set needs at minimum, so its revision must keep that type."
    }
  ]
}
```
