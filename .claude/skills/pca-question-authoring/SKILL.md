---
name: pca-question-authoring
description: Use when authoring, adding, revising, or sourcing Professional Cloud Architect practice questions, question sections, case-study questions, answer choices, distractors, or question-set content in this repository. Do not use for independent acceptance review.
---

# Professional Cloud Architect Question Authoring

Create original practice questions for the Google Cloud Professional Cloud Architect exam guide version 6.1. Never use exam dumps, remembered live questions, reconstructed exam content, unauthorized question collections, or Google's official sample questions as source material. Never copy text from Google's case-study documents.

## Required Inputs

Before editing content, identify:

1. The practice exam number `<n>` and one target section with its required count: `design` 15, `provision` 11, `secure` 11, `analyze` 9, `implement` 7, or `operate` 7.
2. A stable author identifier for this agent or session, such as `<model>-p<n>-<section>-<YYYYMMDD>`. It must differ from the later reviewer identifier.
3. The current date in `YYYY-MM-DD` format. Use it as `verifiedOn` only for sources fetched successfully in this session.

## Read First

Read these files completely before planning:

1. `docs/authoring/question-style-guide.md`: stem anatomy, length targets, constraint vocabulary, option rules, case-study rules, distractor mechanisms, difficulty levers, and the calibration example.
2. `docs/authoring/coverage-matrix.md`: objective allocation, consideration identifiers, decisions to test, common traps, case-study assignments, availability notices, and documentation starting points.
3. `docs/context/product-names.md`: the only product names allowed in questions, and the products that must not be decisive.
4. `docs/prd/0002-practice-exam-question-sets.md`: the set-level targets.
5. `docs/research/0003-candidate-reported-question-types.md`: the question types T1 to T12 used in the plan table.

The official sources are the [certification page](https://cloud.google.com/learn/certification/cloud-architect), the [exam guide PDF](https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf), and the four case studies it links, which `src/domain/caseStudies.ts` lists.

## Plan the Section

1. Re-fetch the certification page, the exam guide PDF, and the case studies the set uses. Stop and report if the guide's sections, weights, or case studies changed, or if a case-study document changed in a way that affects a planned question.
2. Open or create the practice exam's issue record, `docs/issues/<NNNN>-author-practice-exam-<n>.md`, and index it in `docs/issues/index.md`.
3. Before writing any question, add a plan table for the section to that issue record:

   | Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
   |---|---|---|---|---|---|---|---|---|---|

   Kind is `single` or `multiple` (choose-two), matching the question's `kind` field.

4. Tally the plan tables of this set's other sections and of every earlier practice exam before choosing topics.
   - Within the set, follow the matrix allocation, use no consideration as the primary topic more than twice, and keep the set on track for PRD 0002 requirements 5 to 7: 11 to 17 correct answers per letter, a correct option strictly longer than every other option in at most 18 single-choice questions, near-miss pairs (lever L2) in at least 24 questions, 4 to 8 choose-two questions, AI decisive in 6 to 12 questions, at least 5 T4, 5 T6, 6 T7, 4 T9, 3 T3, and 4 T11 questions, and 12 to 18 case-study questions about the two case studies the coverage matrix assigns, each case study spread over at least three sections.
   - Across sets, this section's objectives must pass the feasibility check in rule 4 of the coverage matrix. Count as written this set and every other practice exam whose latest candidate or draft already contains this section, and take their primary topics from the `objective` fields of those questions. Objectives 1.1, 1.5, 2.4, and 2.5 must use only considerations that no other practice exam uses. Elsewhere, prefer testable considerations that other practice exams have not used.
5. Check every other practice exam's plan tables and modules for scenario reuse, for example with `grep -rn "<decisive feature>" src/data/questionSets docs/issues`. A scenario is reused when the organization type, the problem, and the decisive feature all match.

## Source Rules

1. Use only current Google-owned documentation from hosts accepted by `isGoogleOwnedSourceUrl` in `src/domain/questions.ts`. Cite the final URL after redirects.
2. Read each cited page on the date you record as `verifiedOn`, and confirm that the tested feature is generally available and not deprecated.
3. Support the correct answer and every distractor explanation with cited evidence. Every choice cites at least one evidence item.
4. A case-study question cites its case study's document from `src/domain/caseStudies.ts` as evidence for every fact it restates. Structural validation rejects a case-study question that does not cite it.
5. Reject content that depends on preview-only, deprecated, undocumented, or ambiguous behavior.
6. Use the official samples only to understand format. Never copy, paraphrase, or re-skin them.

## Typed Template

Question identifiers use `pca-p<n>-<section>-NN`, numbered from `01`. Evidence identifiers are short and question-local. The first draft of Practice Exam `<n>` uses the set identifier `professional-cloud-architect-v6-1-practice-<n>` and version 1. Corrections use `professional-cloud-architect-v6-1-practice-<n>-v<version>` with the matching version number.

Create `src/data/questionSets/practice<n>/sections/<section>.ts`:

```ts
import type { QuestionSection } from "../../../../domain/questions";

export const practiceExamOneSecureSection = {
  section: "secure",
  author: "author-session-id",
  questions: [
    {
      id: "pca-p1-secure-01",
      kind: "single",
      section: "secure",
      objective: "3.1 Designing for security: 3.1.g secure remote access",
      caseStudyId: "ehr-healthcare",
      prompt: "An original scenario of 65 to 120 words that names the company, restates every decisive fact, and ends with the ask. What should you do?",
      verifiedOn: "YYYY-MM-DD",
      evidence: [
        {
          id: "case-study",
          title: "EHR Healthcare Case Study",
          url: "https://services.google.com/fh/files/misc/v6.1_pca_ehr_healthcare_case_study_english.pdf",
          claim: "The case-study fact that the stem restates.",
        },
        {
          id: "iap",
          title: "Identity-Aware Proxy overview",
          url: "https://docs.cloud.google.com/iap/docs/concepts-overview",
          claim: "The specific documented fact used to evaluate the choices.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "A complete action of 10 to 35 words.",
          feedback: "Why this action satisfies or fails each named constraint.",
          evidenceIds: ["case-study", "iap"],
        },
        // Add b, c, and d. A choose-two question uses kind "multiple", requiredSelections 2,
        // five choices a to e, and correctChoiceIds such as ["b", "d"].
      ],
      correctChoiceId: "a",
    },
  ],
} satisfies QuestionSection<"secure">;
```

Omit `caseStudyId` and the case-study evidence for a question that does not refer to a case study.

Register each finished section in `src/data/questionSets/practice<n>/sections/index.ts`:

```ts
import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamOneSecureSection } from "./secure";

export const practiceExamOneV1Sections: readonly AnyQuestionSection[] = [
  practiceExamOneSecureSection,
];
```

Declare the draft in `src/data/questionSets/practice<n>/drafts.ts`, and add it to `draftQuestionSets` in `src/data/questionSets/registry.ts`:

```ts
import type { DraftQuestionSet } from "../../../domain/questions";
import { practiceExamOneV1Sections } from "./sections";

export const practiceExamOneDraftQuestionSets: readonly DraftQuestionSet[] = [
  {
    id: "professional-cloud-architect-v6-1-practice-1",
    version: 1,
    title: "Professional Cloud Architect Practice Exam 1",
    guideVersion: "6.1",
    durationMinutes: 120,
    sections: practiceExamOneV1Sections,
  },
];
```

Only after all six sections exist, create `src/data/questionSets/practice<n>/candidates.ts` and add its candidates to `candidateQuestionSets` in the registry:

```ts
import { assembleCandidateQuestionSets } from "../../../domain/questions";
import { practiceExamOneDraftQuestionSets } from "./drafts";

export const practiceExamOneCandidateQuestionSets = assembleCandidateQuestionSets(
  practiceExamOneDraftQuestionSets,
  ["professional-cloud-architect-v6-1-practice-1"],
);
```

Never change the runtime catalog in `src/data/questionSets/index.ts` before acceptance, and never write a review record.

## Verification

Run after registering each section:

```sh
make test
make verify-sources
npm run question-set-report -- <question-set-id>
```

The first two commands must pass. The report measures the draft; compare it with the targets in the style guide and PRD 0002, and revise before handoff. It lists per-question stem, option, and reading-load word counts, case studies, the longest word run that two options share, the set median reading load, near-miss pairs, correct-letter counts, how often the correct option is the longest, case-study counts, objective counts, and repeated considerations.

## Reviewer Handoff

Open a pull request for each finished section, and have a fresh session that did not author it review the pull request with `/review`. Give that reviewer the section, author identifier, question identifiers, a link to the plan table, the unique source URLs, the report output, and the verification results. Fix its findings in that pull request. After all six sections are assembled into a candidate, a separate session uses the `pca-question-review` skill to review all 60 questions for acceptance. An author never reviews their own questions.

If the review rejects the candidate, keep the rejected draft and candidate registered and unchanged, because the rejection record is bound to them. Make corrections under a new draft and candidate identifier and version, reusing unchanged section modules. Put every changed section in a new module file, such as `sections/secureV2.ts`, and list it in a new sections array, such as `practiceExamOneV2Sections`. Never edit a module that a rejected candidate uses: the rejection record is bound to that content, and `make verify-sources` fails if it changes. Revise or replace every rejected question before handoff.

## Publication

After the acceptance record for the exact candidate is merged, replace the exam's coming-soon entry in `src/data/questionSets/index.ts` with an available entry. Look up the accepted candidate by identifier and throw an error if it is missing. `make verify-sources` then confirms that the published set has an exact acceptance and no matching rejection.

## Acceptance Criteria

- The section has exactly its required count and passes the reading-length floors and case-study rules.
- Every question is original, maps to one consideration identifier, and uses current product names.
- Every case-study question names its company, restates every decisive fact, and cites its case study.
- Every choice has feedback supported by evidence fetched on `verifiedOn`.
- The plan table and the report show that the section follows the matrix allocation and the style-guide targets, or the handoff explains each exception.
- `make test` and `make verify-sources` pass.
