---
type: ADR
title: Decide the case-study layout in the exam screen
description: The exam screen decides once whether a case-study question embeds Google's document and marks its layout, so the stylesheet and the embedded view cannot disagree.
status: Accepted
supersedes:
superseded_by:
tags: [architecture, frontend]
timestamp: 2026-10-01T00:00:00Z
---

# 0003. Decide the Case-Study Layout in the Exam Screen

## Context

[ADR 0002](/adr/0002-show-official-case-studies.md) embeds a case-study document only in a browser with an inline PDF viewer on a screen at least 1100 pixels wide. It made that decision in two places: `src/styles.css` switched between the split screen and the link layout with the width query `max-width: 1099px`, and `src/components/CaseStudyPane.tsx` decided with the query `min-width: 1100px` whether to mount the document. ADR 0002 accepted the duplicated width as a trade-off. A review of the result found two cases in which the layout and the embedded view disagree:

- A browser that reports no inline PDF viewer gets the split screen on a wide screen, so the question sits beside a column that holds only a link.
- Neither query matches a fractional width between 1099 and 1100 pixels, which browser zoom and display scaling can produce, so the stylesheet splits the screen while the code embeds no document.

## Decision

- `src/components/ExamScreen.tsx` alone decides whether the current case-study question embeds the document: the browser reports an inline PDF viewer (`navigator.pdfViewerEnabled`), and the screen matches `(min-width: 1100px)`. The exam screen re-evaluates the decision when the width query changes.
- The exam screen marks its layout with `data-case-study="document"` or `data-case-study="link"` and passes the decision to `src/components/CaseStudyPane.tsx`, which only renders it. A question without a case study gets no attribute.
- `src/styles.css` selects the split screen or the link layout from the attribute, not from a width query. The 800-pixel narrow layout stays a width query, because it applies to every exam layout.

This replaces where ADR 0002 makes the embedding decision and removes its trade-off of a split-screen width defined in two files. The rest of ADR 0002 stands.

## Alternatives Considered

Keeping a width query in both files and writing them as exact complements was rejected because the stylesheet still cannot know whether the browser has an inline PDF viewer: CSS has no media feature for it, so a wide browser without a viewer would still get an empty column.

## Consequences

Easier or gained:

- The layout always follows the embedding decision, so a question never sits beside an empty case-study column.
- The split-screen width of 1100 pixels is defined once, in `src/components/ExamScreen.tsx`.
- `src/components/CaseStudyPane.tsx` has no browser dependencies and renders whatever the exam screen decides.

Harder or accepted trade-offs:

- The split screen depends on the attribute, so the stylesheet cannot reproduce it without the exam screen. The exam screen is client-rendered, so the attribute is present whenever the layout is.
- The exam screen re-evaluates the decision only when the width query changes; a browser does not change `navigator.pdfViewerEnabled` while a page is open.

## Verification

- Component tests show the embedded document next to a case-study question with a PDF viewer at the split-screen width, only the link when either condition is missing, and no case-study elements next to other questions.
- Browser tests embed the document beside the question at 1280 pixels, and show only the link below the question at 1024 pixels, at 390 pixels, and at 1280 pixels in a browser that reports no PDF viewer, all without a download and without horizontal scrolling.

## Related

- ADR: [/adr/0002-show-official-case-studies.md](/adr/0002-show-official-case-studies.md)
- BDR: [/bdr/0005-case-study-layout-modes.md](/bdr/0005-case-study-layout-modes.md)
- Issue: [/issues/0001-port-simulator-for-pca.md](/issues/0001-port-simulator-for-pca.md)
