---
type: Review
title: Rejected review of professional-cloud-architect-v6-1-practice-3 version 1
description: Semantic and source review of all 60 questions of the Practice Exam 3 candidate, which returns three questions for revision.
status: Rejected
timestamp: 2026-10-14T00:00:00Z
---

# Rejected Review of professional-cloud-architect-v6-1-practice-3

## Review Summary

- **Candidate:** `professional-cloud-architect-v6-1-practice-3` version 1, registered in `src/data/questionSets/practice3/candidates.ts` at commit `3b14c12` (draft pull request #50, which includes pull requests #46 to #49). The record below binds this review to its SHA-256 content digest.
- **Reviewer:** `claude-opus-5.5-p3-acceptance-20261014`, reviewing on 2026-10-14 between 20:16 and 20:50 UTC.
- **Independence:** The `author` fields of the six section modules are `claude-opus-5.5-p3-design-20261014`, `claude-opus-5.5-p3-provision-20261014`, `claude-opus-5.5-p3-secure-20261014`, `claude-opus-5.5-p3-analyze-20261014`, `claude-opus-5.5-p3-implement-20261014`, and `claude-opus-5.5-p3-operate-20261014`. The reviewer identifier is not among them, and this review session authored and edited no candidate content.
- **Guide and case studies:** On 2026-10-14 the [certification page](https://cloud.google.com/learn/certification/cloud-architect) linked the standard exam guide and stated 2 case studies per exam, 20 to 30% case-study questions, 4 available case studies, and that the exam uses the guide's product names. The [exam guide](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf) is byte-identical to the copy of 2026-10-02 that [issue 0005](/issues/0005-author-practice-exam-3.md) records (SHA-256 `3803bc09...211d`): six sections weighted about 25, 17.5, 17.5, 15, 12.5, and 12.5%, 22 objectives, and links to the four case studies. The EHR Healthcare and KnightMotives Automotive case-study PDFs are byte-identical to the copies of 2026-10-02 (SHA-256 `b9171e78...2aa8` and `6712d08d...a044`). Nothing changed, so the review continued.
- **Earlier rejections:** `docs/reviews/` contains rejection reports for Practice Exam 1 version 1 and Practice Exam 2 version 1. No earlier rejection report exists for Practice Exam 3.
- **Sources:** 148 unique evidence URLs, including the 2 case-study PDFs. Each returned HTTP 200 at the cited URL without a redirect, and the reviewer read the passage behind every evidence claim, option, and feedback sentence. Every claim is supported; the feedback sentences that are not supported belong to the returned questions and are described in the record.

## Commands Run

| Command | Result |
|---|---|
| `git fetch origin content/practice-3-candidate`, then `git worktree add -b review/practice-3-acceptance <worktree> origin/content/practice-3-candidate` and `npm ci` | Worktree at `3b14c12`; dependencies installed. |
| `curl` re-fetch of the certification page, the exam guide, and both case-study PDFs, then `sha256sum` against the copies of 2026-10-02 | HTTP 200 for all four; the three PDFs match the recorded copies. |
| `CI=1 make test`, before the review | Passed: documentation check of 37 files, type check, lint, 105 unit tests in 6 files, build, and 22 Playwright tests with 4 skipped by viewport. |
| `make verify-sources`, before the review | Passed: 2 test files, 7 tests, including the live fetch of every evidence URL. |
| `npm run question-set-report -- professional-cloud-architect-v6-1-practice-3` | Summarized in the next section. |
| A script that fetched all 148 evidence URLs with redirects followed | 148 of 148 returned HTTP 200 at the cited URL, with no redirects. |
| A script that compared every field of the 16 case-study questions with their case study | The longest shared run is 4 words, counting hyphenated words both joined and split. |
| A script that compared every question with the official sample form in memory, without storing it | The longest shared run is 6 words, the ask "What should you do? Choose two." |
| `npm run -s create-rejection-record -- professional-cloud-architect-v6-1-practice-3 claude-opus-5.5-p3-acceptance-20261014 2026-10-14 "$(cat rejections.json)"` | The record under the Rejection Record heading, unmodified. |
| `make docs`, `CI=1 make test`, and `make verify-sources`, after adding this report | Passed: documentation check of 38 files; type check, lint, 105 unit tests, build, and 22 Playwright tests with 4 skipped; and 2 source-verification test files with 7 tests, which validate this record against the candidate. |

## Report Summary

The question-set report measured 60 questions, 5 of them choose-two:

- Stems have 65 to 101 words (median 77), options 16 to 31 words (median 21), and questions 139 to 208 words of reading load (median 165). Within a question, the longest option is at most 1.53 times the shortest.
- The correct option is strictly the longest in 7 of 55 single-choice questions. Near-miss pairs occur in 28 questions. Correct letters a, b, c, and d occur 15, 14, 14, and 12 times.
- Case-study questions: EHR Healthcare 8 in 5 sections and KnightMotives Automotive 8 in 6 sections.
- Every objective receives its allocated number of questions. Considerations 4.1.c, 5.1.d, and 6.2.a are each the primary topic of two questions, no consideration of more than two, and every question names a consideration identifier.

## Set-Level Checks

The candidate meets requirements 2 to 7 of [PRD 0002](/prd/0002-practice-exam-question-sets.md), with no accepted exception:

1. **Objective allocation and consideration caps:** both match the [coverage matrix](/authoring/coverage-matrix.md). Objectives 1.1, 1.5, 2.4, and 2.5 use 1.1.e, 1.1.f, 1.1.k, 1.1.l, 1.5.a, 2.4.b, and 2.5.c once each, and neither Practice Exam 1 nor Practice Exam 2 uses them.
2. **Feasibility check (coverage rule 4):** Practice Exams 1, 2, and 3 all have registered candidates, and the latest are Practice Exam 1 version 2, Practice Exam 2 version 2, and this candidate, so no sets and no questions remain. All 99 testable considerations are the primary topic of at least one question across the three candidates. Eight are covered only by this candidate: 1.1.e, 1.1.f, 1.1.k, 1.1.l, 1.5.a, 2.2.f, 2.4.b, and 2.5.c; no returned question holds any of them, and Practice Exam 1 or 2 also covers the consideration of each returned question. Each consideration of objectives 1.1, 1.5, 2.4, and 2.5 is the primary topic of exactly one question across the three sets, as coverage rule 5 requires. All four case studies are used: EHR Healthcare and Cymbal Retail in Practice Exam 1, Altostrat Media and KnightMotives Automotive in Practice Exam 2, and EHR Healthcare and KnightMotives Automotive here. The check passes, and revisions that keep each returned question's consideration leave this result unchanged.
3. **Length targets:** all within the targets in the previous section.
4. **Answer design:** 28 near-miss questions (at least 24), 7 strictly longest correct options (at most 18), letters 15, 14, 14, and 12 (11 to 17 each), and 5 choose-two questions (4 to 8). In each choose-two question, both correct options are independently required by the stem.
5. **Question types, tallied by the reviewer from research 0003:** T1 2, T2 5, T3 4, T4 6, T5 5, T6 6, T7 10, T8 3, T9 4, T10 8, T11 5, and T12 2. Every minimum holds, and T9 is exactly at its minimum. The reviewer gives each question one type, the type whose definition matches the decision that the correct option depends on, with four tie rules: a stem that asks for the cause or first step of an observed failure is T4; a question whose decisive property is availability, failover, backup, recovery, or measured release reliability is T6; a question is T9 only when a pricing model, capacity type, or provisioned size decides among options that otherwise meet the requirements, so a cost-constrained choice among network connections or AI products stays T5 or T11; and a question whose decisive feature is an AI product or AI-specific control is T11 unless the first rule applies or the decision is a release strategy (T10). Under these rules the T4 questions are provision-07, analyze-01, analyze-02, analyze-03, operate-02, and operate-05; the T6 questions are design-05, design-07, provision-05, analyze-05, operate-06, and operate-07; the T7 questions are design-03, secure-01 to secure-07, implement-02, and implement-07; the T9 questions are provision-06, provision-09, analyze-09, and operate-03; the T3 questions are design-13, design-14, implement-03, and implement-04; and the T11 questions are design-08, provision-10, provision-11, secure-08, and analyze-07. design-08 (the batch inference discount) and provision-02 (the lowest-cost connection with a 99.99% SLA) also fit T9, so the T9 minimum holds with a margin under a broader reading. The returned questions are not of types T3, T4, T6, T7, T9, or T11, so their revision cannot break a minimum.
6. **AI as the decisive topic:** 7 questions (6 to 12): design-08 (Gemini batch inference), provision-10 (Agent Platform Feature Store), provision-11 (a Gemma model from Model Garden self-deployed to an Agent Platform endpoint), secure-08 (the Model Garden organization policy), analyze-03 (the Gemini `maxOutputTokens` setting), analyze-07 (BigQuery ML), and operate-04 (a traffic split between two models on one Agent Platform endpoint). The reviewer counts AI as decisive when the correct option names an AI product, model, AI API, or AI-specific control and would fail without it. BigQuery ML trains and serves ML models, so it counts; without it the count is 6, still in range.
7. **Case studies:** EHR Healthcare and KnightMotives Automotive, the pair that issue 0005 records for this set. Every case-study question names its company, restates its decisive facts, cites its case study from a choice, does not contradict it, and shares no run of more than 4 words with it. Added details, such as Salesforce as the CRM, an Oracle ERP database, two 100-Gbps Dedicated Interconnect connections, and a lease that ends in five months, do not conflict with the case studies.

## Question Checks

- **Constraints:** following the stem anatomy and the calibration example of the [question style guide](/authoring/question-style-guide.md) and the standard of the earlier reviews, the reviewer counts a constraint as a stated requirement, limit, or stakeholder want that governs the correct option, does not count organization goals or current-state and incident facts unless they state a limit, and counts clauses about one property once. Under this standard, all 60 stems state two or three explicit constraints. The diagnosis stems count the requirement to identify the cause separately from the requirement to change nothing before it is known; for example, analyze-02 requires finding the configuration that blocks the path and changing nothing else first, and operate-05 requires a quick decision and no escalation or change before it.
- **Determinism and distractors:** every question has exactly one correct option, or two for choose-two. In 57 questions every distractor is technically possible on Google Cloud and fails a stated constraint for a documented reason; the three exceptions are described in the record.
- **Format:** every feedback starts with "Correct." or "Incorrect." and has one to three sentences. No option uses "all of the above", "none of the above", a negative stem, multi-line code, or "always" or "never" as a clue; quantifiers such as "every" and "only" describe the scope of an action. Every question uses at least two difficulty levers: the 28 near-miss questions add feature-level knowledge, constraint tension, or a scope word, and the other 32 combine non-decisive detail, feature-level knowledge, constraint tension, or a scope word.
- **Currency:** product names match the [current product names](/context/product-names.md), and no stem, option, feedback, or claim uses a former name; Data Studio in design-04 is the current name. Preview or deprecation notices on cited pages cover features that no correct answer depends on: project liens, which secure-01's distractor feedback names as Preview; multi-level and multi-party approvals and scope customization in Privileged Access Manager, so secure-04 relies on a single required approver; mandatory tag enforcement and semantic tags; Feature Store Optimized online serving, while provision-10 uses Bigtable online serving; the `gcloud` interface and metadata translation of the batch SQL translator; Teradata default schema detection; IPv6 termination and backend subsetting of internal Application Load Balancers; the 128 TiB Hyperdisk size on C4; OS package remote repositories; Gemini code generation for synthetic monitors; Cloud EKM protection-level migration and usage monitoring; the BigQuery ML console model interface and AI.FORECAST; and Gemini embedding models in batch inference. The Backup for GKE how-to pages show `gcloud beta` command examples, but the product carries no Preview label, the pages also give console steps, and design-07 depends on backup and restore plans, not on a command.
- **Originality:** the reviewer compared every question with the 19 assessment items of the official sample form in memory on 2026-10-14, without storing them. No question shares a run of more than 6 words with a sample item, and the only 6-word runs are the ask "What should you do? Choose two." The closest topical pair is a sample item about the performance of a database disk on Compute Engine and provision-06, whose organization, requirement (capacity and IOPS that change independently as data grows), and decisive feature (Hyperdisk Balanced) differ, so no question copies, paraphrases, or re-skins a sample. The reviewer also compared every question with all questions of Practice Exam 1 versions 1 and 2, including the `designV2` and `operateV2` modules, and of Practice Exam 2 versions 1 and 2, including the `provisionV2` module. No organization type, problem, and decisive feature repeat together. The closest pairs differ in at least one of the three: provision-09 and Practice Exam 2's provision-08 both keep a non-interruptible component on standard capacity, but for a biotech company's API in one GKE Autopilot cluster with Spot Pods instead of an engineering firm's coordinator VM with Spot VMs in a managed instance group; implement-05 and Practice Exam 1's implement-05 both give each CI run an emulator, but the Firestore emulator and its untracked composite indexes decide here instead of the Spanner emulator; secure-09 and Practice Exam 2's secure-10 both concern KnightMotives' EU obligations, but key custody in Cloud EKM decides here instead of data location in the EU Data Boundary; operate-05 and Practice Exam 2's operate-05 both begin with failures after no change, but Personalized Service Health decides here instead of a Gemini model retirement; and design-14 and Practice Exam 1's design-12 both concern EHR's expiring lease, but wave planning with rehosting decides here instead of a Migration Center cost report.
- **Verification dates:** all 60 questions record `verifiedOn` 2026-10-14, and every cited page was fetched on that date.

## Source Notes

- The Cross-Cloud Interconnect overview also describes partner Cross-Cloud Interconnect for AWS, provisioned in minutes from 1 Gbps. It is not among provision-02's options, so the key remains the lowest-cost offered option that meets the 99.99% SLA, encrypted private traffic, and the one-week deadline.
- The Access Approval overview lists Access Transparency's exclusions and an automatic approval path for time-sensitive outages. No option of secure-11 meets the explicit-approval requirement better, and its feedback states the documented guarantee, so the key stands.
- The soft delete overview states that a changed soft delete policy applies only to objects deleted afterward, which supports provision-05's requirement that no one can permanently remove a recoverable copy during its retention.

## Rejection Summary

Three questions are returned for revision. In each, one distractor fails no constraint that the stem states, and its feedback rests on a cost, effort, or data-duplication concern that the stem does not state; one of these distractors also describes a configuration that its cited documentation does not support. Their correct answers are deterministic, and their other choices pass. The other 57 questions passed every check, and the set-level targets and the feasibility check hold. The record below is the only authoritative list of rejected identifiers and reasons.

A separate author must create a corrected draft and candidate with a new identifier and version, and the corrected candidate needs a new independent review. This candidate stays registered with unchanged content, and this report adds no review record.

## Rejection Record

```json
{
  "questionSetId": "professional-cloud-architect-v6-1-practice-3",
  "questionSetVersion": 1,
  "contentSha256": "e0ff11ebfe144aac4c4d322e63ddc675aafd0751708e6ab291b7e53be046e76b",
  "reviewer": "claude-opus-5.5-p3-acceptance-20261014",
  "authors": [
    "claude-opus-5.5-p3-design-20261014",
    "claude-opus-5.5-p3-provision-20261014",
    "claude-opus-5.5-p3-secure-20261014",
    "claude-opus-5.5-p3-analyze-20261014",
    "claude-opus-5.5-p3-implement-20261014",
    "claude-opus-5.5-p3-operate-20261014"
  ],
  "reviewedOn": "2026-10-14",
  "sourceCheckCommand": "make verify-sources",
  "sourceCheckPassed": true,
  "sourceCount": 148,
  "questionIds": [
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
  "rejectedQuestions": [
    {
      "id": "pca-p3-secure-10",
      "reason": "Choice d says to copy every table into one central project each night and run a single inspection job against the copied tables. The cited page on inspecting storage describes an inspection job for one BigQuery table, whose storage configuration names a single table reference, so one job cannot inspect about 3,000 copied tables, and the option is not technically possible as written; read as one job per copied table, the option text misstates what it does. Its feedback names duplicated personal data, which no stated constraint covers, and says that the copies still require inspection, which does not name the stated requirement to avoid scanning tables one by one. Option rule 2 of the question style guide and step 6 of the review skill require every option to be technically possible and every distractor to fail a stated constraint for a documented reason, so choice d must describe a possible configuration that fails a stated constraint, and its feedback must name that constraint with support from its cited evidence. Practice Exams 1 and 2 also cover consideration 3.2.b, so the feasibility check does not depend on this question."
    },
    {
      "id": "pca-p3-analyze-04",
      "reason": "Choice d, building a separate test cluster that copies every workload and applying the enforced constraint there, meets both stated constraints: it blocks no team's deployments in the 30 clusters, and the deployments that fail in the copy list the workloads that violate the constraint. Its feedback names only that the copy adds a cluster to build and run, an effort limit that the stem does not state, and the scope word first does not decide between choices c and d, because each is an alternative way to produce the list rather than a later step. Option rule 2 of the question style guide and step 6 of the review skill require every distractor to fail a stated constraint for a documented reason, so the stem needs a stated requirement that choice d fails, such as no additional clusters or the least effort, or choice d must be replaced, and its feedback must name the failed requirement. Practice Exams 1 and 2 also cover consideration 4.1.d, so the feasibility check does not depend on this question."
    },
    {
      "id": "pca-p3-analyze-08",
      "reason": "Choice d, building both options to production quality for all dealers and keeping the one that dealers use more after a year, meets every stated constraint: the decision rests on evidence of dealer use, nothing in the stem shows that either group would reject that evidence, and the stem states no limit on cost or time. Its feedback rests only on cost, saying that two production builds for a year cost far more than proofs of concept, but the stem states no cost constraint, and the cited proofs-of-concept page says nothing about cost. Option rule 2 of the question style guide and step 6 of the review skill require every distractor to fail a stated constraint for a documented reason and every feedback sentence to be supported by its cited evidence, so the stem needs a stated requirement that choice d fails, such as a decision deadline or a budget limit, and the feedback must name it with support from its evidence. Practice Exam 1 also covers consideration 4.2.d, so the feasibility check does not depend on this question."
    }
  ]
}
```
