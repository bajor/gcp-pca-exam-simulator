---
type: Review
title: Independent review of professional-cloud-architect-v6-1-practice-1-v2
description: Semantic and source acceptance for all 60 questions of Practice Exam 1 candidate version 2.
status: Accepted
timestamp: 2026-10-14T00:00:00Z
---

# Independent Review of professional-cloud-architect-v6-1-practice-1-v2

## Review Summary

- **Candidate:** `professional-cloud-architect-v6-1-practice-1-v2` version 2, registered in `src/data/questionSets/practice1/candidates.ts` at commit `11108eb` (pull request #30), whose content is unchanged on `main` at `d09ed19`. The record below binds this review to its SHA-256 content digest.
- **Reviewer:** `claude-opus-5.5-p1-acceptance-v2-20261007`. The review started on 2026-10-07 and finished on 2026-10-14, and the record carries the finishing date.
- **Independence:** The `author` fields of the six sections of the assembled candidate are `claude-opus-5.5-p1-design-v2-20261007`, `claude-opus-5.5-p1-provision-20261002`, `claude-opus-5.5-p1-secure-20261002`, `claude-opus-5.5-p1-analyze-20261002`, `claude-opus-5.5-p1-implement-20261002`, and `claude-opus-5.5-p1-operate-v2-20261007`. The reviewer identifier is not among them and differs from the reviewer of version 1 (`claude-opus-5.5-p1-acceptance-20261007`), and this review session authored and edited no candidate content.
- **Guide and case studies:** On 2026-10-07 and again on 2026-10-14, the [certification page](https://cloud.google.com/learn/certification/cloud-architect) linked the standard exam guide and stated 2 case studies per exam, 20 to 30% case-study questions, and 4 available case studies. On both dates the [exam guide](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf) was byte-identical to the copies of 2026-10-01 and 2026-10-02 (SHA-256 `3803bc09...211d`): six sections weighted about 25, 17.5, 17.5, 15, 12.5, and 12.5%, 22 objectives, and the same four case-study links. The EHR Healthcare and Cymbal Retail case-study PDFs were byte-identical on both dates (SHA-256 `b9171e78...2aa8` and `0d208752...06c0`). Nothing changed, so the review continued.
- **Earlier rejections:** `docs/reviews/` contains [the rejection of version 1](/reviews/professional-cloud-architect-v6-1-practice-1-rejected-2026-10-07.md), which returned `pca-p1-design-13` and `pca-p1-operate-04`. Compared with the rejected candidate, which stays registered, version 2 changes exactly these two questions, and both were revised: the design-13 stem adds that the plan must rest on observed connections rather than on documentation and use no new tools, and the operate-04 stem adds that the release may use spare capacity for only one extra Pod at a time and need no engineer to replace Pods by hand. Their feedback for choices a and c (design-13) and c and d (operate-04) names the new constraints, and their `verifiedOn` dates are 2026-10-07. The other 58 questions are identical to version 1 and were reviewed again from their sources.
- **Sources:** 156 unique evidence URLs, including the 2 case-study PDFs. The reviewer read the passage behind every evidence claim, option, and feedback sentence; all of them are supported. See the source notes below for the changes between the two dates.
- **Verdict:** All 60 questions passed every check in step 6 of the review skill, the set meets requirements 2 to 7 of [PRD 0002](/prd/0002-practice-exam-question-sets.md), and the feasibility check passes. There is no accepted exception.

## Commands Run

| Command | Result |
|---|---|
| `CI=1 make test`, before the review on 2026-10-07 | Passed: documentation check of 34 files, type check, lint, 105 unit tests in 6 files, build, and 22 Playwright tests with 4 skipped by viewport. |
| `make verify-sources`, before the review on 2026-10-07 | Passed: 2 test files, 7 tests, including the live fetch of every evidence URL. |
| `npm run question-set-report -- professional-cloud-architect-v6-1-practice-1-v2`, on 2026-10-07 and 2026-10-14 | Identical output on both dates, summarized in the next section. |
| A script that fetched all 156 evidence URLs with redirects followed | 2026-10-07: 156 of 156 returned HTTP 200 at the cited URL. 2026-10-14: 156 of 156 returned HTTP 200; 154 at the cited URL and 2 after one redirect, described below. |
| `npm run -s create-review-record -- professional-cloud-architect-v6-1-practice-1-v2 claude-opus-5.5-p1-acceptance-v2-20261007 2026-10-14` | The record under the Review Record heading, unmodified. |
| `make docs`, `CI=1 make test`, and `make verify-sources`, after adding this review on 2026-10-14 | Passed: documentation check of 35 files; type check, lint, 105 unit tests, build, and 22 Playwright tests with 4 skipped; and 2 source-verification test files with 7 tests, which validate this record against the candidate. |

## Report Summary

The question-set report measured 60 questions, 4 of them choose-two:

- Stems have 66 to 112 words (median 86), options 18 to 34 words (median 25), and questions 159 to 228 words of reading load (median 189). Within a question, the longest option is at most 1.58 times the shortest (`pca-p1-implement-04`).
- The correct option is strictly the longest in 14 of 56 single-choice questions. Near-miss pairs occur in 44 questions. Correct letters a, b, c, and d occur 14 times each.
- Case-study questions: EHR Healthcare 8 in 6 sections and Cymbal Retail 8 in 4 sections.
- Every objective receives its allocated number of questions, no consideration is the primary topic of more than one question, and every question names a consideration identifier.

## Set-Level Checks

The set meets requirements 2 to 7 of PRD 0002:

1. **Objective allocation and consideration caps:** both match the [coverage matrix](/authoring/coverage-matrix.md). Objectives 1.1, 1.5, 2.4, and 2.5 use 1.1.d, 1.1.g, 1.1.i, 1.1.j, 1.5.c, 2.4.a, and 2.5.a once each.
2. **Feasibility check (coverage rule 4):** Practice Exam 1 is the only practice exam with a registered candidate, and its latest candidate is version 2, so two sets remain. Of 99 testable considerations, 39 are unused, and each objective's unused considerations fit its remaining questions: 1.1 8 of 8, 1.2 3 of 6, 1.3 3 of 8, 1.4 1 of 6, 1.5 2 of 2, 2.1 1 of 6, 2.2 4 of 6, 2.3 3 of 6, 2.4 2 of 2, 2.5 2 of 2, 3.1 1 of 16, 3.2 1 of 6, 4.1 1 of 10, 4.2 3 of 8, 5.1 0 of 8, 5.2 3 of 6, 6.1 0 of 2, 6.2 1 of 4, and 6.3 to 6.6 0 of 2 each. The unused considerations are 1.1.a, 1.1.b, 1.1.c, 1.1.e, 1.1.f, 1.1.h, 1.1.k, 1.1.l, 1.2.a, 1.2.c, 1.2.d, 1.3.a, 1.3.d, 1.3.g, 1.4.a, 1.5.a, 1.5.b, 2.1.b, 2.2.a, 2.2.b, 2.2.c, 2.2.f, 2.3.a, 2.3.b, 2.3.f, 2.4.b, 2.4.c, 2.5.b, 2.5.c, 3.1.c, 3.2.c, 4.1.a, 4.2.a, 4.2.e, 4.2.g, 5.2.a, 5.2.b, 5.2.f, and 6.2.b.
3. **Length targets:** all within the targets in the previous section.
4. **Answer design:** 44 near-miss questions (at least 24), 14 strictly longest correct options (at most 18), letters 14 each (11 to 17), and 4 choose-two questions (4 to 8). In each choose-two question, both correct options are independently required by the stem.
5. **Question types, tallied by the reviewer from research 0003:** T1 1, T2 3, T3 5, T4 5, T5 4, T6 7, T7 8, T8 3, T9 4, T10 11, T11 4, and T12 5. Every minimum holds; T4, T9, and T11 are exactly at their minimums. The reviewer gave each question one primary type with two written rules. A question is T4 when its stem gives symptoms or evidence, leaves the cause to the candidate, and has a distractor that treats the symptom or a wrong cause: `design-07` (slow pages, low backend CPU, normal in-region latency), `provision-07`, `analyze-02`, `implement-06` (Terraform recreating existing rules after simultaneous applies), and `operate-05`. A question whose cause the stem states, such as `operate-04`, is not T4. A question is T9 when a pricing model or capacity type decides between its near-miss options: `design-04`, `provision-04`, `provision-09` (GKE Autopilot and Standard with node auto-provisioning differ only in billing per node or per Pod request), and `analyze-08`. The T11 questions are `design-08`, `provision-10`, `provision-11`, and `analyze-04`; the Model Armor question `secure-08` is counted as T7 and also fits T11, so the T11 minimum holds under either reading.
6. **AI as the decisive topic:** 7 questions (6 to 12): Gemini structured output (`design-08`), Agent Platform Pipelines (`provision-10`), AI Commerce Search (`provision-11`), Model Armor (`secure-08`), Gemini content filter thresholds (`analyze-02`), the Gen AI evaluation service (`analyze-04`), and Provisioned Throughput (`operate-05`).
7. **Case studies:** EHR Healthcare and Cymbal Retail, as the coverage matrix assigns. Every case-study question names its company, restates its decisive facts, cites its case study, does not contradict it, and shares no run of more than 4 words with it.

## Question Checks

- **Constraints:** all 60 stems state two or three explicit constraints. The reviewer counts a constraint as a stated requirement, limit, or stakeholder want that governs which option is correct, and does not count organization goals, current-state facts, or incident history. Following the calibration example of the [question style guide](/authoring/question-style-guide.md), which counts keeping the existing workflows without new infrastructure as one constraint, related facets of one concern stated together count once; for example, `implement-01` counts per-provider credentials, contracted operations, and quotas as one access-control constraint. Under this standard, `provision-04` counts its 7-year retention requirement, which decides between Archive and Coldline storage through their minimum storage durations, and `analyze-02` counts the reviewers' finding that the blocked questions are legitimate as the requirement to answer them.
- **Determinism and distractors:** every question has exactly one correct option, or two for choose-two, and every distractor is possible on Google Cloud and fails a stated constraint for a documented reason.
- **Format:** every feedback starts with "Correct." or "Incorrect." and has one to three sentences. No option uses "all of the above", "none of the above", a negative stem, multi-line code, or an absolute word as a clue; "always-on nodes" in `design-15` describes a configuration rather than making an absolute claim. Every question uses at least two difficulty levers.
- **Currency:** product names match the [current product names](/context/product-names.md), and no stem, option, or feedback uses a former name. Preview notices on cited pages cover features that no correct answer depends on, such as the WildFire sandbox, Global Front End, Binary Authorization continuous validation, Model Armor image screening, the Gemini jailbreak classifier, and Agent Search custom recommendations. IAP enabled directly on Cloud Run carries no Preview label, and the Preview rapid cost estimate of Migration Center appears only in a distractor whose feedback states its status. The reviewer found no deprecation notice for Service Catalog in its overview or release notes.
- **Originality:** the reviewer compared every question in memory with the 19 items of the official sample form, fetched on 2026-10-14, and with the 53 draft questions of Practice Exam 2 on `main`. No question shares a run of more than 6 words with a sample item, and the only 6-word runs are the ask "What should you do? Choose two." No organization type, problem, and decisive feature repeat together; where an organization type recurs, such as a media company using Cloud Deploy, the problem and the decisive feature differ.

## Source Notes

- Between 2026-10-07 and 2026-10-14, the text of 16 of the 156 pages changed. The reviewer re-read the changed passage of each page that supports a claim, and every claim remains supported. The changes are navigation or wording edits (the Adoption Framework, GKE pricing, client libraries, Bigtable import and export, Terraform state, and scheduled Cloud Run jobs pages), formatting of commands (Cloud SQL point-in-time recovery and bringing your own licenses), longer model lists (structured output and Provisioned Throughput supported models), spend caps becoming generally available on the Direct VPC egress comparison, a removed deprecation caution on the backup plans page, and a rewrite of the aggregated sinks overview, which still states that an organization-level sink routes the log entries of all of its child resources.
- On 2026-10-14, `https://docs.cloud.google.com/retail/docs/features` and `https://docs.cloud.google.com/retail/docs/how-it-works`, cited by `provision-11`, redirect once to the same pages under `https://docs.cloud.google.com/gemini-enterprise-cx/ai-commerce-search/`. Apart from the breadcrumb, their text and the product name AI Commerce Search are unchanged, and `make verify-sources` passes because it follows redirects. The URLs were final when the question was verified on 2026-10-02, so this is not a failed check; a later content version should cite the new URLs, as rule 5 of the current product names requires.
- The Dedicated Interconnect overview no longer states in one sentence that a single connection has no uptime SLA. `provision-01` remains supported because the overview states that the SLA requires the defined 99.99% and 99.9% topologies and the cited 99.9% page requires at least two connections, each with its own VLAN attachment.
- In `operate-04`, the feedback for choice b names the missing readiness probe, the failure that the cited pages document. The default maximum surge of a rolling update, which would also exceed one extra Pod for 12 replicas, is not stated on the cited pages, so the feedback correctly leaves it out.

## Review Record

```json
{
  "questionSetId": "professional-cloud-architect-v6-1-practice-1-v2",
  "questionSetVersion": 2,
  "contentSha256": "e5f540dc9bc93109aa66bfaf022e42cb8442b454c751c52c97d13884618c87d6",
  "reviewer": "claude-opus-5.5-p1-acceptance-v2-20261007",
  "authors": [
    "claude-opus-5.5-p1-design-v2-20261007",
    "claude-opus-5.5-p1-provision-20261002",
    "claude-opus-5.5-p1-secure-20261002",
    "claude-opus-5.5-p1-analyze-20261002",
    "claude-opus-5.5-p1-implement-20261002",
    "claude-opus-5.5-p1-operate-v2-20261007"
  ],
  "reviewedOn": "2026-10-14",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 156,
  "acceptedQuestionIds": [
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
  "rejectedQuestions": []
}
```
