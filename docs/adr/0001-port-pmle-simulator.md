---
type: ADR
title: Port the PMLE simulator
description: Reuse the static typed simulator, catalog, isolated registries, and content-bound review gates without the Professional Machine Learning Engineer question content.
status: Accepted
supersedes:
superseded_by:
tags: [architecture, frontend, deployment]
timestamp: 2026-10-01T00:00:00Z
---

# 0001. Port the PMLE Simulator

## Context

The candidate already uses a Professional Machine Learning Engineer (PMLE) simulator in the `bajor/gcp-ml-exam-simulator` repository, which was itself ported from a Professional Data Engineer simulator. It is a static React, TypeScript, and Vite application with a typed exam catalog, per-exam question registries, reading-length floors, structural and live-source validation, a dense exam presentation, and independent review records bound to a SHA-256 digest of the reviewed content. The candidate asked for the same simulator for the Professional Cloud Architect (PCA) exam, with PCA documentation and without the PMLE question content. [PRD 0001](/prd/0001-cloud-architect-exam-simulator.md) states the requirements.

## Decision

Copy the PMLE application, tooling, tests, CI, and deployment workflows from commit `d1dce6d`. Exclude every question section, draft, candidate, review record, authoring skill, and document. Adapt the copy as follows:

- Replace the six PMLE sections with the six sections of the PCA exam guide version 6.1, `design`, `provision`, `secure`, `analyze`, `implement`, and `operate`, with 15, 11, 11, 9, 7, and 7 questions. The set size of 60 is still derived from the section counts.
- Identify the guide as version `6.1`, the label of the case studies it links, because the guide prints no date or version.
- Replace the reading-length floors with floors derived from the PCA sample questions: 50 prompt words, 10 words per choice, and 121 words per question.
- Store attempts under `pca-practice-attempt:<set-id>:v<version>` and the selected set under `pca-practice-selected-set-v1`.
- Start with empty draft and candidate registries and a catalog of three coming-soon entries.
- Serve the build from `/gcp-pca-exam-simulator/`.

Case-study support, which the PCA exam requires and the PMLE simulator lacks, is decided separately.

## Alternatives Considered

Building a new simulator was rejected because the PMLE code already implements and tests every required attempt behavior. Extracting a package shared by the three simulators was rejected because the exams change for different reasons, and a shared release process adds coordination cost for one candidate. A GitHub fork was rejected because it would carry PMLE question content and review history. Keeping the PMLE storage keys was rejected because all three GitHub Pages sites share the `https://bajor.github.io` origin, so equal keys would let one simulator read another simulator's attempts. Keeping the PMLE floors was rejected because they were derived from the PMLE samples, whose median reading load of 207 words is far above the PCA samples' 120.5 words, as [research 0001](/research/0001-exam-format-and-blueprint.md) records.

## Consequences

Easier or gained:

- Tested attempt, scoring, persistence, review, presentation, and publication behavior from the start.
- The authoring and review discipline that produced an accepted PMLE practice exam.

Harder or accepted trade-offs:

- A fix made in one simulator must be ported to the others manually.
- Correct answers are present in the downloaded client bundle and are not secret.
- Attempts remain on one browser profile and are cleared with browser storage.

## Verification

- `make test` passes, including unit, component, build, and desktop and mobile browser tests.
- Structural validation rejects a set that does not have 60 questions in the 15, 11, 11, 9, 7, and 7 distribution.
- Production assets resolve below `/gcp-pca-exam-simulator/`.

## Related

- PRD: [/prd/0001-cloud-architect-exam-simulator.md](/prd/0001-cloud-architect-exam-simulator.md)
- BDR: [/bdr/0002-question-validation-and-publication.md](/bdr/0002-question-validation-and-publication.md)
- Issue: [/issues/0001-port-simulator-for-pca.md](/issues/0001-port-simulator-for-pca.md)
