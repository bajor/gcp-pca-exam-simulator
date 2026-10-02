import type { CaseStudy } from "../domain/caseStudies";

// Chromium's PDF viewer reads these fragment options; other browsers ignore them.
const pdfViewerOptions = "#navpanes=0&view=FitH";

interface CaseStudyPaneProps {
  readonly caseStudy: CaseStudy;
  readonly showsDocument: boolean;
}

export function CaseStudyPane({ caseStudy, showsDocument }: CaseStudyPaneProps) {
  const name = `${caseStudy.title} case study`;
  return (
    <aside className="case-study-pane" aria-label={name}>
      <p className="eyebrow">{name}</p>
      <a href={caseStudy.url} target="_blank" rel="noreferrer">Open the {name} in a new tab</a>
      {showsDocument && <iframe title={`${name} document`} src={`${caseStudy.url}${pdfViewerOptions}`} />}
    </aside>
  );
}
