import { useSyncExternalStore } from "react";
import type { CaseStudy } from "../domain/caseStudies";

// Chromium's PDF viewer reads these fragment options; other browsers ignore them.
const pdfViewerOptions = "#navpanes=0&view=FitH";
// Must match the split-screen media query in src/styles.css.
const wideLayoutQuery = "(min-width: 1100px)";

interface CaseStudyPaneProps {
  readonly caseStudy: CaseStudy;
}

export function CaseStudyPane({ caseStudy }: CaseStudyPaneProps) {
  const showsDocument = useSyncExternalStore(subscribeToLayout, canShowDocument);
  const name = `${caseStudy.title} case study`;
  return (
    <aside className="case-study-pane" aria-label={name}>
      <p className="eyebrow">{name}</p>
      <a href={caseStudy.url} target="_blank" rel="noreferrer">Open the {name} in a new tab</a>
      {showsDocument && <iframe title={`${name} document`} src={`${caseStudy.url}${pdfViewerOptions}`} />}
    </aside>
  );
}

function subscribeToLayout(onChange: () => void): () => void {
  const layout = window.matchMedia(wideLayoutQuery);
  layout.addEventListener("change", onChange);
  return () => layout.removeEventListener("change", onChange);
}

// A browser without an inline PDF viewer downloads an embedded PDF, so it only gets the link.
function canShowDocument(): boolean {
  return navigator.pdfViewerEnabled && window.matchMedia(wideLayoutQuery).matches;
}
