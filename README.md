# Google Cloud Professional Machine Learning Engineer Practice Exams

A documentation-backed exam simulator for the Google Cloud Professional Machine Learning Engineer certification. It is ported from the Professional Data Engineer simulator (`bajor/gcp-de-exam-simulator`) without that project's question content.

Each practice exam has 60 questions and a two-hour limit, the maximum of Google's published range of 50 to 60 questions. Questions follow the six sections of the exam guide dated June 1, 2026. Structural validation rejects any question whose prompt has fewer than 60 words, whose choices have fewer than 12 words each, or whose prompt and choices total fewer than 166 words (the length of the shortest official sample question); [research 0001](docs/research/0001-exam-format-and-blueprint.md) explains these floors. No practice exam has been published yet, so the catalog lists Practice Exams 1 to 3 as coming soon.

## Local Development

Node.js 22.22.2 or later is required.

```sh
npm install
npm run dev
```

Run the complete documentation, type, lint, unit, build, and browser-test gate with:

```sh
make test
```

Question-bank changes must also run `make verify-sources`. The command structurally validates every registered draft section and candidate set, verifies indexed review records against immutable candidates, and fetches every unique evidence URL.

## Question Authoring

Authors follow the repository skill [`pmle-question-authoring`](.claude/skills/pmle-question-authoring/SKILL.md). It applies the [question style guide](docs/authoring/question-style-guide.md), the [objective coverage matrix](docs/authoring/coverage-matrix.md), and the [current product names](docs/context/product-names.md). Each practice exam lives in its own `src/data/questionSets/practice<number>/` module tree, and partial sections cannot enter the candidate registry or the runtime catalog. A separate session uses [`pmle-question-review`](.claude/skills/pmle-question-review/SKILL.md) for the final independent review and creates a content-bound review record. Claude Code discovers both skills from `.claude/skills/`.

`npm run question-set-report -- <question-set-id>` prints each question's word counts, the set's answer-letter balance, and its objective coverage, which authors and reviewers compare with the targets.

## Deployment

Merges to `main` build and deploy the simulator to [GitHub Pages](https://bajor.github.io/gcp-ml-exam-simulator/).

## Documentation

Project requirements, decisions, behavior, research, and architecture are indexed in [`docs/index.md`](docs/index.md).
