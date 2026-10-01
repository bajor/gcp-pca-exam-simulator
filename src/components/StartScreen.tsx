import { useEffect, useRef } from "react";
import { caseStudies, referencedCaseStudyIds } from "../domain/caseStudies";
import type { QuestionSet } from "../domain/questions";

interface StartScreenProps {
  readonly questionSet: QuestionSet;
  readonly onBack: () => void;
  readonly onStart: () => void;
}

export function StartScreen({ questionSet, onBack, onStart }: StartScreenProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const caseStudyIds = referencedCaseStudyIds(questionSet.questions);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <main className="start-shell">
      <section className="hero-card" aria-labelledby="page-title">
        <p className="eyebrow">Professional Cloud Architect</p>
        <h1 id="page-title" ref={headingRef} tabIndex={-1}>Documentation-backed practice exam</h1>
        <p className="lede">
          Original scenarios mapped to the current exam guide, with every answer checked against current Google
          Cloud documentation.
        </p>
        <h2 className="selected-exam-title">{questionSet.title}</h2>
        <dl className="exam-facts">
          <div><dt>Questions</dt><dd>{questionSet.questions.length}</dd></div>
          <div><dt>Time</dt><dd>{questionSet.durationMinutes / 60} hours</dd></div>
          <div><dt>Scoring</dt><dd>Exact match</dd></div>
        </dl>
        {caseStudyIds.length > 0 && (
          <>
            <p>This exam refers to these case studies, which you can also open from the questions that use them:</p>
            <ul className="case-study-list">
              {caseStudyIds.map((id) => (
                <li key={id}>
                  <a href={caseStudies[id].url} target="_blank" rel="noreferrer">
                    {caseStudies[id].title} case study <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
        <div className="start-actions">
          <button className="primary-button" onClick={onStart}>Start practice exam</button>
          <button className="secondary-button" onClick={onBack}>Choose another exam</button>
        </div>
        <p className="disclaimer">
          Independent practice project. Not affiliated with or endorsed by Google. Google does not
          publish a passing score, so results are shown only as practice percentages.
        </p>
      </section>
    </main>
  );
}
