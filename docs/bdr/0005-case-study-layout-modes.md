---
type: BDR
title: Case-study layout modes
description: A case-study question uses the split screen only when the document is embedded, and otherwise shows the case-study link under the question.
status: Accepted
supersedes:
superseded_by:
tags: [case-studies, presentation]
timestamp: 2026-10-01T00:00:00Z
---

# 0005. Case-Study Layout Modes

## Context

[BDR 0004](/bdr/0004-case-studies.md) splits the screen for a case-study question from 1100 pixels wide and embeds the document only in a browser with an inline PDF viewer. A wide screen in a browser without a viewer therefore shows the question beside a case-study column that holds only a link. [ADR 0003](/adr/0003-decide-case-study-layout-in-exam-screen.md) makes the exam screen decide the layout and the embedding together. This record states the resulting behavior.

## Presentation

This record replaces three rows of the BDR 0004 presentation table, Split screen, Medium screens, and Browsers without a PDF viewer, with these rows:

| Element | Presentation |
|---|---|
| Split screen | On screens at least 1100 pixels wide in a browser with an inline PDF viewer, the case study appears between the question and the navigator. The case study takes three fifths of the width left of the navigator and the question two fifths, because the embedded document scales to its column. The case study shows a title bar, a link that opens Google's document in a new tab, and an embedded view of the document fitted to the column width, with the accessible name "<name> case study document". |
| Link layout | On screens wider than 800 pixels where the document is not embedded, because the screen is narrower than 1100 pixels or the browser has no inline PDF viewer, the question keeps the full width left of the navigator, and the case study's title bar and link appear under the question. |
| Browsers without a PDF viewer | On any screen, a browser that reports no inline PDF viewer, such as most phone browsers, gets only the title bar and the link, because it would download an embedded PDF instead of showing it. On screens wider than 800 pixels it uses the link layout, so the question never sits beside an empty column. |

The other rows of the BDR 0004 presentation table, including Narrow screens, are unchanged.

## Scenarios

**Scenario 1: Link the case study on a wide screen without a PDF viewer**

- Given an attempt on a 1280-pixel-wide screen in a browser that reports no inline PDF viewer
- When the current question refers to a case study
- Then the case-study link appears below the question and left of the navigator, no document is embedded or downloaded, and the page does not scroll horizontally

## Test Design

This record adds one case to the BDR 0004 test design:

| Case | Level | Input or scenario | Observable assertion | Proves |
|---|---|---|---|---|
| Wide screen without a viewer | End-to-end | Case-study question at 1280 by 720 pixels in a browser that reports no PDF viewer | The link sits below the question and left of the navigator, no document is embedded, nothing downloads, and the page does not scroll horizontally | The layout follows the embedding decision, not the width alone. |

## Related

- BDR: [/bdr/0004-case-studies.md](/bdr/0004-case-studies.md)
- ADR: [/adr/0003-decide-case-study-layout-in-exam-screen.md](/adr/0003-decide-case-study-layout-in-exam-screen.md)
- PRD: [/prd/0001-cloud-architect-exam-simulator.md](/prd/0001-cloud-architect-exam-simulator.md)
- Issue: [/issues/0001-port-simulator-for-pca.md](/issues/0001-port-simulator-for-pca.md)
