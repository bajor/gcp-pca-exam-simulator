---
name: pca-question-review
description: Use ONLY for independent semantic acceptance review of a complete 60-question Professional Cloud Architect candidate set in this repository, including final source re-checking and docs/reviews records. Do not use while authoring or editing question content.
---

# Professional Cloud Architect Independent Review

Review a complete 60-question candidate without editing its questions, choices, answer keys, feedback, objectives, case-study references, evidence, or author metadata. If a correction is needed, reject the affected question identifiers and return them to an author. A reviewer who edits content becomes an author and cannot accept that revision.

## Independence Gate

1. Choose a stable reviewer identifier for this session.
2. Read the `author` field of every section module in the candidate; together these values form the candidate's `authors` list.
3. Stop if your identifier appears in `authors`, or if this session authored or edited any of the candidate's content.

## Required Checks

1. Re-fetch the [certification page](https://cloud.google.com/learn/certification/cloud-architect), the [exam guide](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf), and the two case studies the candidate uses. Stop and report if the guide's sections, weights, or case studies changed.
2. Run `make test` and `make verify-sources`. Both must pass before semantic review.
3. Run `npm run question-set-report -- <question-set-id>` and keep the output for the review document.
4. Open every unique evidence URL yourself. Do not rely on the author's claims or feedback.
5. If `docs/reviews/` contains rejection reports for earlier versions of this practice exam, confirm that every previously rejected question was revised or replaced in this candidate, by comparing it with the rejected candidate that stays registered. Reject any rejected question that returns unchanged.
6. For each question, verify all of these conditions:
   - The `objective` names a consideration identifier from `docs/authoring/coverage-matrix.md`, and the question tests that consideration.
   - The stem states two or three explicit constraints, and every constraint needed for a deterministic answer.
   - Exactly one single-choice option, or exactly two choose-two options, satisfy every constraint.
   - Every distractor is technically possible on Google Cloud and fails at least one named constraint for a documented reason.
   - Every choice's feedback starts with "Correct." or "Incorrect." followed by one to three sentences of explanation, and every feedback sentence is supported by its cited evidence.
   - The options follow the style guide's option rules: no "all of the above" or "none of the above", no negative stem, no absolute word as a clue, and no multi-line code.
   - Product names match `docs/context/product-names.md`, and the decisive feature is generally available and not deprecated.
   - A case-study question names its company, restates every decisive fact in its stem, does not contradict its case study or copy its sentences, and cites the case-study document for the restated facts.
   - The question is original. It does not copy, paraphrase, or re-skin an official sample, and it does not reuse a scenario from another practice set.
   - At least two difficulty levers from `docs/authoring/question-style-guide.md` are present.
7. For the whole set, compare the report and your notes with requirements 2 to 7 of `docs/prd/0002-practice-exam-question-sets.md`: objective allocation, consideration caps, length targets and median reading load, near-miss pairs, the longest-option limit, answer-letter balance, the choose-two count, question-type minimums, the AI range, and the case-study assignment and spread. The report does not measure question types or AI questions; tally them from the questions yourself.
8. Apply the feasibility check, rule 4 of `docs/authoring/coverage-matrix.md`, to every practice exam from 1 to 3 that has a registered candidate, using the latest candidate of each. Record each objective's unused testable considerations and remaining questions. When all three practice exams have a registered candidate, no questions remain, so the check confirms that every testable consideration is the primary topic of at least one question; then also confirm that every case study is used.
9. Reject every question that is ambiguous, unsupported, deprecated, preview-dependent, or unoriginal. For a set-level target miss, either reject the questions whose revision fixes it, or accept the set and explain the exception in the review summary. A failed feasibility check is never an accepted exception: in each failing objective, reject enough of the questions whose primary topic repeats an already used consideration that the corrected set can pass rule 4.

Do not create an acceptance record while any question is rejected.

## Rejection Report

If any question fails, generate the machine-readable rejection record from the exact candidate content. Pass every rejected identifier and a concrete reason in one JSON array. If a reason contains an apostrophe, write the array to a file and pass `"$(cat rejections.json)"` instead of the single-quoted literal:

```sh
npm run create-rejection-record -- <question-set-id> <reviewer-id> <YYYY-MM-DD> '[{"id":"<question-id>","reason":"<concrete reason>"}]'
```

Create `docs/reviews/<question-set-id>-rejected-<YYYY-MM-DD>.md` with `type: Review`, `status: Rejected`, the reviewer and author identifiers, the commands run, the report summary, and a concise rejection summary. Add the complete, unmodified command output under the exact `## Rejection Record` heading in a `json` fence. The generated JSON is the only authoritative list of rejected identifiers and reasons; do not repeat that list elsewhere in the report.

Index the report in `docs/reviews/index.md`, then run `make docs`, `make test`, and `make verify-sources`. All three must pass. Do not add a `## Review Record` block, publish the candidate, remove its registration, or edit its content. A separate author creates a corrected draft and candidate with a new identifier and version, and the corrected candidate needs a new independent review.

## Review Record

After accepting all 60 questions, generate the machine record from the exact candidate content:

```sh
npm run create-review-record -- <question-set-id> <reviewer-id> <YYYY-MM-DD>
```

Create `docs/reviews/<question-set-id>.md` with typed frontmatter, a concise review report, and the command output under the exact `## Review Record` heading:

````markdown
---
type: Review
title: Independent review of <question-set-id>
description: Semantic and source acceptance for all 60 questions.
status: Accepted
timestamp: YYYY-MM-DDT00:00:00Z
---

# Independent Review of <question-set-id>

## Review Summary

State the reviewer identifier, the independence check, the guide and case-study check, the commands run, the unique source count, the set-level metrics from the report, your tallies of question types and AI questions, the feasibility check, the check of earlier rejections, any accepted exception, and that all 60 questions passed the required checks.

## Review Record

```json
{
  "questionSetId": "generated value"
}
```
````

Replace the abbreviated JSON example with the complete, unmodified command output. Index the document in `docs/reviews/index.md`, then run `make docs`, `make test`, and `make verify-sources` again. The version and SHA-256 content digest in the record prevent it from accepting later content changes.

## Acceptance Criteria

- The reviewer identity is independent of every recorded author.
- All 60 questions, every unique source, and both case studies were evaluated independently.
- The set-level metrics are recorded, and every exception is explained.
- No rejected question remains in an accepted candidate.
- Every rejection is recorded in an indexed rejection report whose generated record passes machine validation.
- The generated record matches the exact candidate version and SHA-256 digest.
- All repository and source-verification gates pass after the review document is added.
