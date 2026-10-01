# Project Agent Guide

## Living Docs

enforcement: strict
onboarded: 2026-10-01

## Content Policy

- Write original practice questions. Never use exam dumps, reconstructed live exam content, or unauthorized question collections.
- Never copy or paraphrase Google's official sample questions. Use them only to understand format and style.
- Never copy the text of Google's case-study documents into the repository. Refer to the official documents instead.
- Map every question to the current Professional Cloud Architect exam guide, version 6.1.
- Use the product names of the current exam guide, Google's Agent Platform name-change page, and Google's current product documentation.
- Support every correct answer and distractor explanation with current Google-owned documentation.
- Reject questions that are ambiguous, deprecated, preview-dependent, or unsupported by the cited documentation.
- Record the date on which each question's sources were verified.

## Quality Gate

Run `make test` before committing application, documentation, or question-bank changes. Run `make verify-sources` for question-bank changes.

## Maintenance Rule

Whenever project structure, behavior, or documentation changes:

1. Update the relevant typed document under `docs/`.
2. Update `docs/index.md` and the document's directory index.
3. Update architecture or behavior descriptions when their documented flow changes.
4. Add newly named domain terms to `docs/context/glossary.md`.

No structural change ships without its documentation, and no document exists without being indexed.

Supersede accepted decision records instead of rewriting their history. `make docs` must pass before a documentation change ships.
