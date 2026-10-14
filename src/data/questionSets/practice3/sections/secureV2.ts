import { reviseQuestionInSection } from "../../../../domain/questions";
import { practiceExamThreeSecureSection } from "./secure";

// Version 2 keeps every version 1 secure question except secure-10, which the independent review of
// version 1 returned because its option d described an inspection job that one job cannot run.
export const practiceExamThreeSecureSectionV2 = reviseQuestionInSection(
  practiceExamThreeSecureSection,
  "claude-opus-5.5-p3-secure-v2-20261014",
  "pca-p3-secure-10",
  {
    prompt: "A media group's analysts create BigQuery tables in about 120 projects, and the privacy office does not know which of the roughly 3,000 tables hold personal data such as email addresses and phone numbers. New tables appear every week. The privacy office wants to know which tables contain sensitive data and how sensitive they are, keep that view current as tables are added, and avoid scanning tables one by one. What should you do?",
    verifiedOn: "2026-10-14",
    choiceTexts: {
      d: "Copy every table into one central project each night, and run an inspection job against each copied table there.",
    },
    feedback: {
      d: "Incorrect. An inspection job for each copied table still scans the tables one by one, which the privacy office wants to avoid, while discovery profiles every table in the organization continuously.",
    },
  },
);
