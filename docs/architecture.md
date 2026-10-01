---
type: Architecture View
title: Practice Exam Architecture
description: Static application modules, question lifecycle, attempt data flow, persistence boundary, and deployment ownership.
status: Accepted
tags: [architecture]
timestamp: 2026-10-01T00:00:00Z
---

# Practice Exam Architecture

## Target Context

The browser loads a static React application from GitHub Pages at `https://bajor.github.io/gcp-pca-exam-simulator/`. The application imports a typed catalog of immutable TypeScript question sets, stores current or completed attempts in browser `localStorage`, and opens cited Google Cloud documentation in external pages. There is no application server or user account.

On 2026-10-01 the catalog lists Practice Exams 1, 2, and 3 as coming soon. No question set has passed independent review yet. The application was ported from the Professional Machine Learning Engineer (PMLE) simulator without its question content, as recorded in [ADR 0001](/adr/0001-port-pmle-simulator.md).

## Module Ownership

| Module | Ownership |
|---|---|
| `src/domain/questions.ts` | Exam sections, section counts, reading-length floors, case-study rules, question and review types, structural validation, and SHA-256 content binding. |
| `src/domain/caseStudies.ts` | The four case studies the guide links, with the URLs of Google's documents, and the case studies a set of questions refers to. |
| `src/domain/attempt.ts` | Attempt state, exact scoring, section percentages, and browser persistence. |
| `src/domain/catalog.ts` | Available and coming-soon catalog entry types. |
| `src/data/questionSets/practice<number>/` | One practice exam's section modules, draft manifests, and candidate list. The directory is created when the first section of that exam is authored. |
| `src/data/questionSets/registry.ts` | Aggregates every exam's drafts and candidates for structural, source, and audit verification. |
| `src/data/questionSets/index.ts` | Runtime catalog of available and coming-soon entries. |
| `docs/reviews/` | Independent acceptance and rejection records checked by CI. |
| `src/components/` | Catalog, start, exam, case-study pane, navigation, submission, and result-review screens. |
| `src/styles.css` | Dense exam presentation, including `--exam-text-size`, the single font size shared by question and answer text. |
| `src/App.tsx` | Catalog selection, screen transitions, and restoration of the selected set's attempt. |
| `scripts/` | Documentation lint, live source verification, review-record generation, and question-set reports. |
| `.github/workflows/` | Continuous integration, visual-explanation cleanup, and GitHub Pages deployment. |

## Question Lifecycle

1. An author plans a section in the exam's issue record and writes it as a typed module under `src/data/questionSets/practice<number>/sections/`.
2. The author registers the section in that exam's draft manifest and registers the manifest in `src/data/questionSets/registry.ts`. Structural validation then requires the final section count, the reading-length floors, valid answer keys, Google-owned evidence for every choice, a citation of the case study for every case-study question, and at most 2 case studies.
3. `make verify-sources` validates every registered draft and fetches every unique evidence URL.
4. After all six sections exist, the exam's candidate list assembles a 60-question candidate from the draft identifier. Assembly requires exactly 2 case studies and 12 to 18 case-study questions.
5. An independent reviewer re-fetches the evidence, checks the set against the question-set requirements, and writes either an indexed rejection report or an acceptance record bound to the candidate's SHA-256 content digest.
6. Only a candidate with an exact acceptance record and no matching rejection record can become an `available` catalog entry. Corrections use a new candidate identifier. Rejected candidates stay registered and unchanged so that their rejection records remain verifiable.

[Behavior decision 0002](/bdr/0002-question-validation-and-publication.md) specifies these gates and their tests.

## Attempt Data Flow

1. The candidate selects an available question set from the catalog.
2. The application restores that set's compatible attempt, or creates one with an absolute two-hour deadline when the candidate starts.
3. Answer, navigation, and review-flag changes replace the immutable attempt state and persist it locally. When the current question refers to a case study, the exam screen shows Google's document next to it.
4. Manual submission or deadline expiration creates a completed result.
5. Scoring compares answer identifier sets exactly and calculates total and section percentages.
6. Result review joins each response with choice feedback and source evidence from the immutable question set.

| Current state | Trigger | Next state |
|---|---|---|
| Catalog | Select an available set | Ready |
| Ready | Choose another exam | Catalog |
| Ready | Start | In progress |
| In progress | Answer, navigate, mark, or reload | In progress |
| In progress | Confirm finish, or the deadline expires | Completed |
| Completed | Reload | Completed |
| Completed | Confirm a new attempt | In progress |
| Completed | Choose another exam | Catalog |

## Persistence

`src/domain/attempt.ts` stores each attempt under `pca-practice-attempt:<set-id>:v<version>`, and `src/App.tsx` stores the last selected set under `pca-practice-selected-set-v1`. The `pca-` prefix is required because the PMLE simulator is served from the same `https://bajor.github.io` origin and therefore shares the same `localStorage`. Reload restores only state that runtime validation accepts for the selected set and version; malformed or mismatched data is removed. Completed attempts remain read-only until the candidate confirms a replacement, and returning to the catalog does not clear them.

## Deployment

Vite builds the static site with `/gcp-pca-exam-simulator/` as its base path. After every push to `main`, `.github/workflows/pages.yml` installs the browser test runtime, runs `make test` and `make verify-sources`, uploads `dist/` only if both gates pass, and deploys the artifact to the `github-pages` environment. The workflow has no manual dispatch trigger or required human reviewer.

## Drift Control

`make test` checks documentation structure, TypeScript, ESLint, unit and component behavior, the production build, and desktop and mobile browser flows. Question invariants are checked at section, draft-set, candidate-set, and audit-record boundaries. `make verify-sources` checks draft and candidate registries, every indexed acceptance and rejection record, every available catalog entry, and all evidence URLs.

## Related Decisions

- [Port the PMLE simulator](/adr/0001-port-pmle-simulator.md)
- [Exam attempt and scoring](/bdr/0001-exam-attempt-and-scoring.md)
- [Question validation and publication](/bdr/0002-question-validation-and-publication.md)
- [Exam presentation](/bdr/0003-exam-presentation.md)
- [Show the official case-study documents](/adr/0002-show-official-case-studies.md)
- [Case studies](/bdr/0004-case-studies.md)
