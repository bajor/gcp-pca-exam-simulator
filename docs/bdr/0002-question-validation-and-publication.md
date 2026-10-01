---
type: BDR
title: Question validation and publication
description: Observable blueprint, reading-length, source, independent-review, content-binding, and catalog-publication behavior for question sets.
status: Accepted
supersedes:
superseded_by:
tags: [questions, sources, catalog]
timestamp: 2026-10-01T00:00:00Z
---

# 0002. Question Validation and Publication

## Context

The [constitution](/constitution.md) prohibits unsupported questions, and [PRD 0001](/prd/0001-cloud-architect-exam-simulator.md) requires realistic question length and a 60-question blueprint. This record carries over the validated publication gates of the PMLE simulator and replaces its blueprint and reading-length floors with the PCA values from [research 0001](/research/0001-exam-format-and-blueprint.md).

## Behavior Flow

| State | Trigger | Next state | Observable result |
|---|---|---|---|
| Section module | Author registers a complete section in a draft | Structurally checked | Wrong counts, identifiers, section mapping, reading length, answer keys, or evidence fail verification. |
| Structurally checked | `make verify-sources` fetches cited URLs | Source checked | Unreachable URLs, or URLs that resolve to a non-Google host, fail verification. |
| Source checked | All six sections exist and the candidate list names the draft | Candidate | A 60-question candidate assembles with its unique section authors. |
| Candidate | Independent reviewer finds any failure | Rejected | An indexed rejection report binds rejected IDs and reasons to the exact content digest. |
| Candidate | Independent reviewer accepts all 60 questions | Accepted | An indexed acceptance record binds the exact version and SHA-256 content digest. |
| Accepted | The catalog lists the candidate as available | Published | CI permits publication only with an exact acceptance and no exact rejection. |

## Textual Description

Each registered section records one author and contains its final count: 15 `design`, 11 `provision`, 11 `secure`, 9 `analyze`, 7 `implement`, or 7 `operate` questions. A draft may omit sections while work proceeds, but a registered section must be complete and valid. Candidate registration accepts only a draft identifier and assembles the 60 questions and unique authors from all six sections.

Every question declares an exam-guide objective, four choices for single-choice or five choices for choose-two questions, correct answer identifiers, feedback for each choice, source evidence, and one authoritative `verifiedOn` date. Choice feedback references supporting evidence identifiers. Structural validation rejects duplicate identifiers, invalid answer references, wrong counts, section mismatches, missing feedback or evidence, non-Google source URLs, and answer-cardinality errors.

Structural validation also enforces three reading-length floors, where a word is a whitespace-separated token:

| Floor | Minimum | Error |
|---|---|---|
| Prompt | 50 words | `<question-id>: prompt must contain at least 50 words.` |
| Each choice | 10 words | `<question-id>/<choice-id>: choice text must contain at least 10 words.` |
| Prompt plus all choices | 121 words | `<question-id>: prompt and choices must contain at least 121 words.` |

For example, a 55-word prompt with four 15-word choices has 115 words and fails the combined floor, although it passes the prompt and choice floors. Each floor is an inclusive minimum: a question exactly at every floor is valid. The constants live only in `src/domain/questions.ts`.

Live verification fetches every unique draft and candidate URL, follows redirects, retries HTTP 408, 429, and 5xx responses up to three attempts, and requires a successful response whose final URL is on an accepted Google-owned host. The final reviewer must be absent from the candidate's authors and independently checks every source, prompt, answer, distractor, objective, product name, deprecation state, and originality constraint.

Any failure produces an indexed, dated rejection report. Its generated machine record is the single authoritative list of rejected question identifiers and reasons, and it binds them to all 60 reviewed identifiers, the candidate version, authors, source-check result, and canonical SHA-256 content digest. The rejected candidate remains registered and unchanged; corrections use a new candidate identifier. Acceptance requires all 60 identifiers, no rejected questions, the canonical source-check command and a successful result, the exact candidate version, and a matching digest. Any content or provenance change invalidates an acceptance record.

## Scenarios

**Scenario 1: Reject a short question**

- Given a registered question whose prompt and choices total 115 words
- When structural validation runs
- Then validation names the question and the 121-word floor

**Scenario 2: Reject a wrong blueprint**

- Given a registered `design` section with 14 questions
- When structural validation runs
- Then validation reports that `design` expects 15 questions

**Scenario 3: Record rejected questions**

- Given an independent reviewer finds an ambiguous question
- When review ends
- Then an indexed rejection report records every rejected identifier and reason, and no acceptance record is created

**Scenario 4: Publish exact reviewed content**

- Given a complete candidate and an acceptance record with the same version and digest
- When the candidate is listed as available in the catalog
- Then `make verify-sources` passes

**Scenario 5: Block content changed after review**

- Given an acceptance record for one candidate
- When any prompt, choice, answer key, feedback, objective, evidence, author, or metadata changes
- Then `make verify-sources` fails for the published entry

## Test Design

| Case | Level | Input or scenario | Observable assertion | Proves |
|---|---|---|---|---|
| Prompt floor | Unit | Prompt one word below the floor | Validation names the question and floor | Short scenarios cannot publish. |
| Choice floor | Unit | One choice one word below the floor | Validation names the question, choice, and floor | Terse options cannot publish. |
| Combined floor | Unit | Valid prompt and choices totaling below 121 words | Validation names the question and floor | Overall reading load meets the median official sample. |
| Exact floors | Unit | Prompt, one choice, and total exactly at their floors | Validation accepts the question | The floors are inclusive minimums without off-by-one errors. |
| Section count | Unit | Registered section below its final count | Validation names the section and expected count | Partial content cannot pass as a complete section. |
| Section mapping | Unit | Question section differs from its module | Validation names the question and expected section | Section ownership remains deterministic. |
| Set size | Unit | Complete draft assembly | The candidate contains 60 questions | The blueprint total is derived correctly. |
| Candidate provenance | Unit | Candidate ID absent from the draft registry | Assembly fails | Candidates derive only from registered drafts. |
| Source policy | Unit | Non-Google source host or redirect | Validation or verification fails | Evidence stays Google-owned. |
| Transient source failure | Unit | HTTP 500 followed by success | Verification succeeds after retry | Temporary failures do not block publication. |
| Review independence | Unit | Reviewer also listed as an author | Validation fails | Authors cannot accept their own work. |
| Content binding | Unit | Record digest differs from candidate content | Validation fails | Acceptance applies only to exact reviewed content. |
| Rejection format | Unit | Missing, duplicate, unknown, or unexplained rejected IDs | Validation fails | Rejection handoffs are complete. |
| Catalog eligibility | Source verification | Every available entry and indexed review records | Exact acceptance exists and no exact rejection exists | Rejected or unreviewed content cannot publish. |
| Review commands | Integration | Documented acceptance and rejection record commands | Commands execute outside Vite | Reviewers can produce both record types. |

## Related

- PRD: [/prd/0001-cloud-architect-exam-simulator.md](/prd/0001-cloud-architect-exam-simulator.md)
- ADR: [/adr/0001-port-pmle-simulator.md](/adr/0001-port-pmle-simulator.md)
- Research: [/research/0001-exam-format-and-blueprint.md](/research/0001-exam-format-and-blueprint.md)
- Issue: [/issues/0001-port-simulator-for-pca.md](/issues/0001-port-simulator-for-pca.md)
