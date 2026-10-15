---
type: Review
title: Independent review of professional-cloud-architect-v6-1-practice-3-v2
description: Semantic and source acceptance for all 60 questions of Practice Exam 3 version 2.
status: Accepted
timestamp: 2026-10-15T00:00:00Z
---

# Independent Review of professional-cloud-architect-v6-1-practice-3-v2

## Review Summary

- **Candidate:** `professional-cloud-architect-v6-1-practice-3-v2` version 2, registered in `src/data/questionSets/practice3/candidates.ts` at commit `c797c9f` (draft pull request #52). The modules `src/data/questionSets/practice3/sections/secureV2.ts` and `analyzeV2.ts` revise three questions through `reviseQuestionInSection`: secure-10 (the text and feedback of choice d), analyze-04 (the prompt and the feedback of choice d), and analyze-08 (the prompt and the feedback of choices c and d). The reviewer compared the JSON of both registered candidates: the other 57 questions, every evidence item, every answer key, and every other choice are identical to version 1. The record below binds this review to the version 2 SHA-256 content digest.
- **Reviewer:** `claude-opus-5.5-p3-acceptance-v2-20261014`, reviewing from 2026-10-14 21:00 UTC to 2026-10-15 (UTC). The identifier keeps the date on which the session started; the record is dated 2026-10-15, the UTC date on which the review finished and every source was last fetched.
- **Independence:** The `author` fields of the six version 2 section modules are `claude-opus-5.5-p3-design-20261014`, `claude-opus-5.5-p3-provision-20261014`, `claude-opus-5.5-p3-secure-v2-20261014`, `claude-opus-5.5-p3-analyze-v2-20261014`, `claude-opus-5.5-p3-implement-20261014`, and `claude-opus-5.5-p3-operate-20261014`. The reviewer identifier is not among them, and it differs from the version 1 reviewer, `claude-opus-5.5-p3-acceptance-20261014`, and from the version 1 secure and analyze authors. This review session authored and edited no candidate content.
- **Guide and case studies:** On 2026-10-14 at 21:00 UTC and again on 2026-10-15 at 01:02 UTC, the [certification page](https://cloud.google.com/learn/certification/cloud-architect) linked the standard exam guide and stated 2 case studies per exam, 20 to 30% case-study questions, 4 available case studies, and that the exam uses the guide's product names. Both times the [exam guide](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf) was byte-identical to the copy of 2026-10-02 that [issue 0005](/issues/0005-author-practice-exam-3.md) records and that the [version 1 rejection report](/reviews/professional-cloud-architect-v6-1-practice-3-rejected-2026-10-14.md) cites (SHA-256 `3803bc093831cbfe270f56446c270d072c67bbe8ad8f34579027add56549211d`): six sections weighted about 25, 17.5, 17.5, 15, 12.5, and 12.5%, 22 objectives, and links to the four case studies. The EHR Healthcare and KnightMotives Automotive case-study PDFs were byte-identical to the copies of 2026-10-02 (SHA-256 `b9171e78b0c757f4df85dae7411cc1ada6b93211b4b16979f0a2c3f1f7e72aa8` and `6712d08d5561ef3eb15dcfbd8319eb3fa2dc22243ad5a8fc04560bec4df4a044`). Nothing changed, so the review continued.
- **Earlier rejections:** `docs/reviews/` contains one earlier rejection report for Practice Exam 3, which returned secure-10, analyze-04, and analyze-08 of version 1 because a distractor in each failed no stated constraint for a documented reason. Version 2 revises all three; none returns unchanged, and each reason is resolved:
  - secure-10's choice d now runs an inspection job against each copied table. The cited inspection page describes a job that inspects one BigQuery table, so the option is possible as written, and its feedback names the stated requirement it fails, to avoid scanning tables one by one, with support from the inspection and discovery pages. The feedback no longer rests on duplicated data.
  - analyze-04's stem now requires the list "without building or running any additional clusters". Choice d builds a separate test cluster, so it fails that requirement, and its feedback names it.
  - analyze-08's stem now requires a decision within three months and states that the budget covers building only one option for production. Choice d builds both options for all dealers and waits a year, so it fails both, and its feedback names both. Choice c's revised feedback is supported by the cited proofs-of-concept guidance.

  The three questions keep their considerations (3.2.b, 4.1.d, and 4.2.d) and their types. The other rejection reports in `docs/reviews/` concern Practice Exams 1 and 2.
- **Sources:** 148 unique evidence URLs, including the 2 case-study PDFs. Each returned HTTP 200 at the cited URL without a redirect on 2026-10-14 and again on 2026-10-15 at 01:04 UTC, and the reviewer read the passage behind every evidence claim, option, and feedback sentence in the 2026-10-15 copies. Between the two fetches, the text of four pages changed (Hyperdisk Balanced, Persistent Disk, Local SSD, and sole-tenancy), in machine-type and placement details that no claim relies on. Every claim and feedback sentence is supported.

## Commands Run

| Command | Result |
|---|---|
| `git fetch origin content/practice-3-v2`, then `git worktree add -b review/practice-3-v2-acceptance <worktree> origin/content/practice-3-v2` and `npm ci` | Worktree at `c797c9f`; dependencies installed. |
| `curl` re-fetch of the certification page, the exam guide, and both case-study PDFs on 2026-10-14 and 2026-10-15, then `sha256sum` | HTTP 200 for all four without redirects both times; the three PDFs match the recorded copies. |
| `CI=1 make test`, before the review, after ports 4173 and 4174 were free | Passed: documentation check of 39 files, type check, lint, 105 unit tests in 6 files, build, and 22 Playwright tests with 4 skipped by viewport. |
| `make verify-sources`, before the review | Passed: 2 test files, 7 tests, including the live fetch of every evidence URL. |
| `npm run question-set-report -- professional-cloud-architect-v6-1-practice-3-v2` | Summarized in the next section. |
| A script that dumped every registered candidate to JSON and compared the two Practice Exam 3 versions | Only secure-10, analyze-04, and analyze-08 differ, in the fields listed above. |
| A script that fetched all 148 evidence URLs with redirects followed, run on 2026-10-14 and 2026-10-15 | 148 of 148 returned HTTP 200 at the cited URL, with no redirects, both times. |
| A script that compared every field of the 16 case-study questions with their case study | The longest shared run is 4 words, counting hyphenated words both joined and split. |
| A script that ranked the closest questions of Practice Exams 1 and 2, versions 1 and 2, for each question, followed by a manual comparison | No organization type, problem, and decisive feature repeat together. |
| A script that read the official sample form over HTTPS and compared it in memory | The longest shared run is 6 words, the generic phrase "what should you do choose two". Nothing from the form was written to disk. |
| A script that applied coverage rule 4 to the latest candidates of Practice Exams 1, 2, and 3 | Passes; see the set-level checks. |
| `npm run -s create-review-record -- professional-cloud-architect-v6-1-practice-3-v2 claude-opus-5.5-p3-acceptance-v2-20261014 2026-10-15` | The record under the Review Record heading, unmodified. |
| `make docs`, `CI=1 make test`, and `make verify-sources`, after adding this review | Passed: documentation check of 40 files; type check, lint, 105 unit tests, build, and 22 Playwright tests with 4 skipped; and 2 source-verification test files with 7 tests, which validate this record against the candidate. |

## Report Summary

The question-set report measured 60 questions, 5 of them choose-two:

- Stems have 65 to 101 words (median 77.5), options 16 to 31 words (median 21), and questions 139 to 208 words of reading load (median 165). Within a question, the longest option is at most 1.53 times the shortest (secure-06), as the reviewer computed from the option word counts. The revised stems have 74 (secure-10), 75 (analyze-04), and 79 (analyze-08) words.
- The correct option is strictly the longest in 7 of 55 single-choice questions. Near-miss pairs occur in 28 questions. Correct letters a, b, c, and d occur 15, 14, 14, and 12 times.
- Case-study questions: EHR Healthcare 8 in 5 sections and KnightMotives Automotive 8 in 6 sections.
- Every objective receives its allocated number of questions. Considerations 4.1.c, 5.1.d, and 6.2.a are each the primary topic of two questions, no consideration of more than two, and every question names a consideration identifier.

## Set-Level Checks

The candidate meets requirements 2 to 7 of [PRD 0002](/prd/0002-practice-exam-question-sets.md), with no accepted exception:

1. **Objective allocation and consideration caps:** both match the [coverage matrix](/authoring/coverage-matrix.md). Every `objective` field names a consideration identifier of the matrix, and each question's correct answer depends on a decision from that consideration.
2. **Feasibility check (coverage rule 4):** Practice Exams 1, 2, and 3 all have registered candidates, and the latest are Practice Exam 1 version 2, Practice Exam 2 version 2, and this candidate, so no sets and no questions remain. Every objective has 0 unused testable considerations and 0 remaining questions, so the check passes for all 22 objectives: all 99 testable considerations (the 101 identifiers without 1.2.f and 5.1.e) are the primary topic of at least one question across the three candidates. Eight are covered only by this candidate: 1.1.e, 1.1.f, 1.1.k, 1.1.l, 1.5.a, 2.2.f, 2.4.b, and 2.5.c. Each consideration of objectives 1.1, 1.5, 2.4, and 2.5 is the primary topic of exactly one question across the three sets, as coverage rule 5 requires. All four case studies are used: EHR Healthcare and Cymbal Retail in Practice Exam 1, Altostrat Media and KnightMotives Automotive in Practice Exam 2, and EHR Healthcare and KnightMotives Automotive here.
3. **Length targets:** all within the targets in the previous section.
4. **Answer design:** 28 near-miss questions (at least 24), 7 strictly longest correct options (at most 18), letters 15, 14, 14, and 12 (11 to 17 each), and 5 choose-two questions (4 to 8): design-07, design-12, secure-04, secure-11, and implement-07. In each, both correct options are independently required by the stem, and each of the three distractors fails a stated constraint.
5. **Question types, tallied by the reviewer from research 0003:** T1 1, T2 4, T3 4, T4 6, T5 6, T6 5, T7 10, T8 3, T9 4, T10 10, T11 5, and T12 2. Every minimum holds; T6 and T9 are exactly at their minimums. The reviewer gives each question one type, the type whose definition matches the decision that the correct option depends on, and applies these rules in order: (1) a stem that reports an observed failure and asks for its cause, its fix, or the first step to find it is T4; (2) a question whose correct option is a network connection, load balancer, DNS, or routing choice is T5, even when availability or latency motivates it; (3) a question whose decisive property is availability, failover, backup, recovery, or recovery testing is T6; (4) a question whose decisive feature is an AI product, model, or AI-specific control is T11, unless the decision is a release strategy (T10); (5) a question is T9 when cost reduction is the decisive constraint and the correct option changes what is billed, through a pricing model, capacity type, provisioned size, or billed volume; (6) any other question takes the type of its primary decision. Under these rules the T4 questions are provision-07, analyze-01, analyze-02, analyze-03, operate-02, and operate-05; the T6 questions are design-05, design-07, provision-05, analyze-05, and operate-07; the T7 questions are design-03, secure-01 to secure-07, implement-02, and implement-07; the T9 questions are provision-06, provision-09, analyze-09, and operate-03; the T3 questions are design-13, design-14, implement-03, and implement-04; and the T11 questions are design-08, provision-10, provision-11, secure-08, and analyze-07. The minimums have margin under a broader reading: design-08 (the batch inference discount) and provision-02 (the lowest-cost connection with a 99.99% SLA) also fit T9, and provision-03 (cross-region failover) and operate-06 (release monitoring with synthetic monitors) also fit T6.
6. **AI as the decisive topic:** 7 questions (6 to 12): design-08 (Gemini batch inference), provision-10 (Agent Platform Feature Store), provision-11 (a Gemma model from Model Garden self-deployed to an Agent Platform endpoint), secure-08 (the Model Garden organization policy), analyze-03 (the Gemini `maxOutputTokens` setting), analyze-07 (BigQuery ML), and operate-04 (a traffic split between two models on one Agent Platform endpoint). The reviewer counts AI as decisive when the correct option names an AI product, model, AI API, or AI-specific control and would fail without it. BigQuery ML trains and serves ML models, so it counts; without it the count is 6, still in range.
7. **Case studies:** EHR Healthcare and KnightMotives Automotive, the pair that issue 0005 records for this set. Every case-study question names its company, restates its decisive facts, cites its case study from a choice, does not contradict it, and shares no run of more than 4 words with it. The revised analyze-08 restates KnightMotives' need for better tools for service technicians and better communication between business and technical teams; its added deadline and budget do not conflict with the case study, which limits only the dealers' equipment budget.

## Question Checks

- **Constraints:** following the stem anatomy and the calibration example of the [question style guide](/authoring/question-style-guide.md) and the standard of the earlier reviews, the reviewer counts a constraint as a stated requirement, limit, or stakeholder want that governs the correct option, does not count organization goals or current-state and incident facts unless they state a limit, and counts clauses about one property once. Under this standard all 60 stems state two or three explicit constraints. The revised stems state three each: secure-10 (identify sensitive tables and their sensitivity, keep the view current, and avoid scanning tables one by one), analyze-04 (block no deployments, list every current violation before enforcement, and build or run no additional clusters), and analyze-08 (a decision within three months, evidence that both groups accept, and a budget for one production build).
- **Determinism and distractors:** every question has exactly one correct option, or two for choose-two, and every distractor is possible on Google Cloud and fails a stated constraint for a documented reason. Four judgments: secure-05's choice a relies on Admin Activity audit logs, a possible action whose stated premise is the misconception its feedback corrects, and it fails the requirement for records of reads; operate-03's choice c removes the WARNING entries that the stem says teams read in Logs Explorer for 30 days, a stated limit; analyze-09's choice c commits to the peak spend, while the stem asks for a discount on the steady spend; and implement-04's choice d ships files weekly, which fails the requirement for files within minutes regardless of transit time.
- **Format:** every feedback starts with "Correct." or "Incorrect." and has one to three sentences. No option uses "all of the above", "none of the above", a negative stem, multi-line code, or "always" or "never" as a clue; those words occur only in stems and feedback. Every question uses at least two difficulty levers: the 28 near-miss questions add feature-level knowledge, constraint tension, or a scope word, and the other 32 combine non-decisive detail, feature-level knowledge, constraint tension, or a scope word.
- **Currency:** product names match the [current product names](/context/product-names.md), and no stem, option, feedback, or claim uses a former name; Data Studio in design-04 is the current name. Preview or deprecation notices on cited pages cover features that no correct answer depends on: project liens, which secure-01's distractor feedback names as Preview; multi-level and multi-party approvals and scope customization in Privileged Access Manager, so secure-04 relies on a single required approver; mandatory tag enforcement and semantic tags; Feature Store Optimized online serving, while provision-10 uses Bigtable online serving; the `gcloud` interface, metadata translation, and Gemini fixes of the SQL translators, while design-13 uses batch translation jobs; Teradata default schema detection; IPv6 termination of internal Application Load Balancers; IPv6 dynamic routes for VPC spokes; the 128 TiB Hyperdisk size on C4; OS package remote repositories; Gemini code generation for synthetic monitors; Cloud EKM usage monitoring; the BigQuery ML console model interface and AI.FORECAST; Gemini embedding models in batch inference; and user-facing endpoints for custom-model batch inference. The Backup for GKE how-to pages show `gcloud beta` command examples, but the product carries no Preview label, the pages also give console steps, and design-07 depends on backup and restore plans, not on a command.
- **Originality:** the reviewer compared every question with the 19 assessment items of the official sample form in memory on 2026-10-14 and 2026-10-15, without storing them. No question shares a run of more than 6 words with a sample item, and the only runs of 5 or 6 words are generic phrases such as "what should you do choose two" and "which solution should you design". The closest topical pair is a sample item about the performance of a database disk on Compute Engine and provision-06, whose organization, requirement (capacity and IOPS that change independently as data grows), and decisive feature (Hyperdisk Balanced) differ, so no question copies, paraphrases, or re-skins a sample. The reviewer also compared every question with all questions of Practice Exam 1 versions 1 and 2, including the `designV2` and `operateV2` modules, and of Practice Exam 2 versions 1 and 2, including the `provisionV2` module. No organization type, problem, and decisive feature repeat together. The closest pairs differ in at least one of the three: implement-05 and Practice Exam 1's implement-05 both give each CI run an emulator, but for a fitness app instead of a gaming company, and the Firestore emulator with its untracked composite indexes decides here instead of the Spanner emulator; design-14 and Practice Exam 1's design-12 both concern EHR's expiring lease, but rehosting in the first wave decides here instead of a Migration Center cost report; secure-09 and Practice Exam 2's secure-10 both concern KnightMotives' EU obligations, but key custody in Cloud EKM decides here instead of data location in the EU Data Boundary; secure-11 and Practice Exam 1's secure-11 both keep logs for seven years through an aggregated sink, but for a healthcare provider's Access Transparency logs together with Access Approval instead of a brokerage's Admin Activity logs; provision-09 and Practice Exam 2's provision-08 both keep a non-interruptible component on standard capacity, but with Spot Pods in one GKE Autopilot cluster instead of Spot VMs in a managed instance group; and analyze-08 and Practice Exam 2's analyze-06 both resolve a stalled KnightMotives decision, but time-boxed proofs of concept decide here instead of an executive sponsor and a working group.
- **Verification dates:** all 60 questions record `verifiedOn` 2026-10-14, the date on which their authors fetched the cited pages; the reviewer fetched every cited page on 2026-10-14 and again on 2026-10-15, and the 2026-10-15 copies still support every claim.

## Source Notes

- The Gemini inference reference now also defines FINISH_REASON_CONTINUATION, which returns a continuation token for Gemini 4 models. analyze-03's stem reports FINISH_REASON_MAX_TOKENS, which the page still defines as reaching the maximum number of tokens specified in the request, so raising `maxOutputTokens` remains the only option that meets the stem.
- The Cross-Cloud Interconnect overview also describes partner Cross-Cloud Interconnect for AWS, provisioned in minutes from 1 Gbps. It is not among provision-02's options, so the key remains the lowest-cost offered option that meets the 99.99% SLA, encrypted private traffic, and the one-week deadline.
- The soft delete overview states that soft-deleted objects can't be permanently deleted during the retention duration, which supports provision-05's requirement that no one can permanently remove a recoverable copy during that time.

All 60 questions passed the required checks, and the record below accepts every one of them.

## Review Record

```json
{
  "questionSetId": "professional-cloud-architect-v6-1-practice-3-v2",
  "questionSetVersion": 2,
  "contentSha256": "a631c5a12a43c632f8da0258ee746d86b8648b926cc023d7307bb0f98535f8fe",
  "reviewer": "claude-opus-5.5-p3-acceptance-v2-20261014",
  "authors": [
    "claude-opus-5.5-p3-design-20261014",
    "claude-opus-5.5-p3-provision-20261014",
    "claude-opus-5.5-p3-secure-v2-20261014",
    "claude-opus-5.5-p3-analyze-v2-20261014",
    "claude-opus-5.5-p3-implement-20261014",
    "claude-opus-5.5-p3-operate-20261014"
  ],
  "reviewedOn": "2026-10-15",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 148,
  "acceptedQuestionIds": [
    "pca-p3-design-01",
    "pca-p3-design-02",
    "pca-p3-design-03",
    "pca-p3-design-04",
    "pca-p3-design-05",
    "pca-p3-design-06",
    "pca-p3-design-07",
    "pca-p3-design-08",
    "pca-p3-design-09",
    "pca-p3-design-10",
    "pca-p3-design-11",
    "pca-p3-design-12",
    "pca-p3-design-13",
    "pca-p3-design-14",
    "pca-p3-design-15",
    "pca-p3-provision-01",
    "pca-p3-provision-02",
    "pca-p3-provision-03",
    "pca-p3-provision-04",
    "pca-p3-provision-05",
    "pca-p3-provision-06",
    "pca-p3-provision-07",
    "pca-p3-provision-08",
    "pca-p3-provision-09",
    "pca-p3-provision-10",
    "pca-p3-provision-11",
    "pca-p3-secure-01",
    "pca-p3-secure-02",
    "pca-p3-secure-03",
    "pca-p3-secure-04",
    "pca-p3-secure-05",
    "pca-p3-secure-06",
    "pca-p3-secure-07",
    "pca-p3-secure-08",
    "pca-p3-secure-09",
    "pca-p3-secure-10",
    "pca-p3-secure-11",
    "pca-p3-analyze-01",
    "pca-p3-analyze-02",
    "pca-p3-analyze-03",
    "pca-p3-analyze-04",
    "pca-p3-analyze-05",
    "pca-p3-analyze-06",
    "pca-p3-analyze-07",
    "pca-p3-analyze-08",
    "pca-p3-analyze-09",
    "pca-p3-implement-01",
    "pca-p3-implement-02",
    "pca-p3-implement-03",
    "pca-p3-implement-04",
    "pca-p3-implement-05",
    "pca-p3-implement-06",
    "pca-p3-implement-07",
    "pca-p3-operate-01",
    "pca-p3-operate-02",
    "pca-p3-operate-03",
    "pca-p3-operate-04",
    "pca-p3-operate-05",
    "pca-p3-operate-06",
    "pca-p3-operate-07"
  ],
  "rejectedQuestions": []
}
```
