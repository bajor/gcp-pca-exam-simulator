import { reviseQuestionInSection } from "../../../../domain/questions";
import { practiceExamOneDesignSection } from "./design";

// Version 2 keeps every version 1 design question except design-13, which the independent review of
// version 1 returned because its stem stated one explicit constraint.
export const practiceExamOneDesignSectionV2 = reviseQuestionInSection(
  practiceExamOneDesignSection,
  "claude-opus-5.5-p1-design-v2-20261007",
  "pca-p1-design-13",
  {
    prompt: "A logistics company plans to migrate 120 on-premises servers to Google Cloud in four waves over six months. A pilot move of its order-routing application failed last month: after the cutover, the application timed out because it made thousands of calls per minute to an on-premises inventory database that nobody had listed as a dependency. The Migration Center discovery client has collected data with guest OS scans for eight weeks. You need to plan the remaining waves so that servers that depend on each other move together. The plan must rest on observed connections rather than on documentation, without new tools. What should you do?",
    verifiedOn: "2026-10-07",
    feedback: {
      a: "Correct. The report shows the connections that the existing discovery client observed between the scanned servers and databases, including undocumented ones, so tightly coupled servers can move together without new tools.",
      c: "Incorrect. Documentation from application owners is not observed connection data, the pilot failed because of a dependency that nobody had documented, and alphabetical order ignores dependencies when it assigns waves.",
    },
  },
);
