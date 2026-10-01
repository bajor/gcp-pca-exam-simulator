---
type: Issue
title: Prepare question authoring
description: Research question patterns, question types, and current product names, then document the authoring and review procedure for original practice sets.
status: complete
labels: [content, docs]
blocked_by: []
tracker: "PR [3/5], PR [4/5], and PR [5/5]"
timestamp: 2026-10-01T00:00:00Z
---

## Prepare Question Authoring

The candidate asked for the PCA simulator to work toward its own question base. This issue prepares the generation of several original 60-question practice sets, including research into the question types the real exam contains. It does not author questions.

### Scope

1. PR [3/5]: [Official sample question patterns](/research/0002-official-sample-question-patterns.md), [question types candidates encounter](/research/0003-candidate-reported-question-types.md), the [current product names](/context/product-names.md), and new glossary terms.
2. PR [4/5]: The [question style guide](/authoring/question-style-guide.md), the [objective coverage matrix](/authoring/coverage-matrix.md), and the [question-set requirements](/prd/0002-practice-exam-question-sets.md).
3. PR [5/5]: The repository skills `.claude/skills/pca-question-authoring/SKILL.md` and `.claude/skills/pca-question-review/SKILL.md`, and the case-study measurements of the question-set report.

### Acceptance

- An author can plan and write a complete section, including case-study questions, using only this repository's documentation and live Google documentation.
- A reviewer can check every structural, style, case-study, and coverage target of a candidate set.
- `make test` passes after each PR.

### Progress

- 2026-10-01: PR [3/5] adds the research records, the product-name reference, and glossary terms.
- 2026-10-01: PR [4/5] adds the style guide, the coverage matrix, and PRD 0002.
- 2026-10-01: PR [5/5] adds the authoring and review skills and the case-study measurements of `npm run question-set-report`, completing this issue.
