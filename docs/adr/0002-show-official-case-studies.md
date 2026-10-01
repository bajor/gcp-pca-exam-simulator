---
type: ADR
title: Show the official case-study documents
description: Refer questions to the four guide case studies by identifier, show Google's hosted documents next to the question, and keep no copy of their text.
status: Accepted
supersedes:
superseded_by:
tags: [architecture, frontend, content]
timestamp: 2026-10-01T00:00:00Z
---

# 0002. Show the Official Case-Study Documents

## Context

Each standard PCA exam includes two of the four case studies that the exam guide names, and 20 to 30% of its questions refer to one of them, which candidates can view on a split screen ([research 0001](/research/0001-exam-format-and-blueprint.md)). [PRD 0001](/prd/0001-cloud-architect-exam-simulator.md) requirement 15 asks the simulator to reproduce this. The ported PMLE application has no concept of a case study. The [constitution](/constitution.md) excludes copies of Google's case-study documents from the application and repository. Google hosts each case study as a PDF document on `services.google.com`, and the server sends no header that forbids embedding it in another page. On 2026-10-01 a Chromium browser rendered the EHR Healthcare document inside an `iframe` element of a page from another origin.

## Decision

- Store the four case studies in `src/domain/caseStudies.ts` as a closed record of identifier, title, and the URL of Google's document. `CaseStudyId` is the union of the four identifiers, so a question cannot name an unknown case study.
- Let a question declare an optional `caseStudyId`. Structural validation requires such a question to cite its case study's URL as evidence, so source verification fetches the document and the content digest of a reviewed set covers the URL.
- Enforce Google's rules in structural validation: a complete set refers to exactly 2 case studies and contains 12 to 18 case-study questions (20% and 30% of 60); a draft refers to at most 2 case studies and contains at most 18 case-study questions.
- Show the case study of the current question between the question and the navigator, with a link that opens Google's document in a new tab. Mount an embedded view of the document only when the browser reports an inline PDF viewer (`navigator.pdfViewerEnabled`) and the screen is at least 1100 pixels wide, because a browser without a PDF viewer downloads an embedded PDF instead of showing it, and narrower splits leave too little width for the question and the document. The embedded view's URL adds the fragment `#navpanes=0&view=FitH`, which Chromium's PDF viewer reads to hide page thumbnails and fit the page width; browsers do not send a fragment to the server. Every other screen and browser gets only the link.
- Fetch the four documents in `make verify-sources`, so that a moved document fails the gate even before any question cites it.

## Alternatives Considered

Copying the case-study text into the repository was rejected because the constitution forbids copies of Google's case-study documents, and because a copy would go stale silently when Google revises a case study. Writing original fictional case studies was rejected because the real exam uses the four guide case studies, so practice with them is the main value of case-study questions. Showing only a link was rejected because it loses the split screen of the real exam on desktop screens. Placing the case study to the left of the question was rejected because the question would then follow the case study in the reading and keyboard order; the guide does not state on which side the real exam shows it.

## Consequences

Easier or gained:

- Practice questions refer to the same case studies as the real exam, and the candidate always sees Google's current version of them.
- A case-study question cannot be registered without citing its case study, and a set cannot be registered with the wrong number of case studies or case-study questions.

Harder or accepted trade-offs:

- The split screen depends on Google keeping the document URLs and allowing embedding. `make verify-sources` detects a moved document; if Google forbids embedding, the embedded view shows a browser error while the link still works.
- The split-screen width of 1100 pixels is defined twice, in `src/styles.css` for the layout and in `src/components/CaseStudyPane.tsx` for mounting the document, because a stylesheet cannot share a constant with the code; both name each other.
- The embedded view uses the browser's PDF viewer, so its text size does not follow `--exam-text-size`.
- The browser tests check the embedded element, its placement, and the absence of downloads, not the rendered document. The desktop project runs the full Chromium build, which has a PDF viewer; the mobile project runs Playwright's headless shell, which has none, like most phone browsers.
- Browsers without an inline PDF viewer, which include most phone browsers, show only the link.
- A revision of a case study at the same URL does not change the content digest; the reviewer's source check covers that risk, as it does for every other evidence page.

## Verification

- Unit tests reject sets with one or three case studies, sets with 11 or 19 case-study questions, a draft with 19 case-study questions, an unknown case study, and a case-study question that does not cite its own case study, and accept sets with 12 and 18 and a draft with 18 case-study questions. A content-digest test proves that an omitted and an undefined case study bind the same digest.
- Component tests show the embedded document and its link next to a case-study question with a PDF viewer at the split-screen width, only the link when either condition is missing, and no case-study elements next to other questions.
- Browser tests embed the document beside the question at 1280 pixels, and show only the link below the question at 1024 and at 390 pixels, all without a download and without horizontal scrolling.

## Related

- PRD: [/prd/0001-cloud-architect-exam-simulator.md](/prd/0001-cloud-architect-exam-simulator.md)
- BDR: [/bdr/0004-case-studies.md](/bdr/0004-case-studies.md)
- Issue: [/issues/0001-port-simulator-for-pca.md](/issues/0001-port-simulator-for-pca.md)
