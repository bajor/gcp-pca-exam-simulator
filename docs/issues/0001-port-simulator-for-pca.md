---
type: Issue
title: Port the simulator for the Professional Cloud Architect exam
description: Port the PMLE simulator without its content, adopt the PCA blueprint and reading-length floors, and add case studies on a split screen.
status: in-progress
labels: [feature, frontend]
blocked_by: []
tracker: "PR [1/5] and PR [2/5]"
timestamp: 2026-10-01T00:00:00Z
---

## Port the Simulator for the Professional Cloud Architect Exam

Implement [PRD 0001](/prd/0001-cloud-architect-exam-simulator.md), [ADR 0001](/adr/0001-port-pmle-simulator.md), [BDR 0001](/bdr/0001-exam-attempt-and-scoring.md), [BDR 0002](/bdr/0002-question-validation-and-publication.md), [BDR 0003](/bdr/0003-exam-presentation.md), [ADR 0002](/adr/0002-show-official-case-studies.md), and [BDR 0004](/bdr/0004-case-studies.md), based on [exam-format research](/research/0001-exam-format-and-blueprint.md).

### Scope

1. PR [1/5]: Copy the application, tooling, tests, and workflows without PMLE content. Adopt the six PCA sections, 60 questions, PCA-derived reading-length floors, `pca-` storage keys, the `/gcp-pca-exam-simulator/` base path, and a coming-soon catalog. Rewrite the documentation for the PCA exam.
2. PR [2/5]: Add case studies: question references to the four guide case studies, the per-set case-study rules, and the split-screen presentation (PRD 0001 requirement 15).

### Acceptance

- The acceptance criteria of PRD 0001 pass.
- `make test` and `make verify-sources` pass locally and in CI.
- The GitHub Pages deployment renders the catalog.

### Progress

- 2026-10-01: PR [1/5] ports the application and documentation.
- 2026-10-01: PR [2/5] adds case-study references, the case-study rules, and the split-screen presentation of Google's case-study documents. The issue is complete when both are on `main` and GitHub Pages renders the catalog.
