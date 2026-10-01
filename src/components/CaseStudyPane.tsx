import type { CaseStudy } from "../domain/caseStudies";

// Chromium and Firefox PDF viewers read these fragment options; other browsers ignore them.
const pdfViewerOptions = "#navpanes=0&view=FitH";

interface CaseStudyPaneProps {
  readonly caseStudy: CaseStudy;
}

export function CaseStudyPane({ caseStudy }: CaseStudyPaneProps) {
  const name = `${caseStudy.title} case study`;
  return (
    <aside className="case-study-pane" aria-label={name}>
      <p className="eyebrow">{name}</p>
      <a href={caseStudy.url} target="_blank" rel="noreferrer">Open the {name} in a new tab</a>
      <iframe title={`${name} document`} src={`${caseStudy.url}${pdfViewerOptions}`} />
    </aside>
  );
}
