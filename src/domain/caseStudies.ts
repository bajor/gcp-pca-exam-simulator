import type { Question } from "./questions";

export interface CaseStudy {
  readonly title: string;
  readonly url: `https://${string}`;
}

// The case studies the exam guide links. The application shows Google's documents instead of copies.
export const caseStudies = {
  "altostrat-media": {
    title: "Altostrat Media",
    url: "https://services.google.com/fh/files/misc/v6.1_pca_altostrat_media_case_study_english.pdf",
  },
  "cymbal-retail": {
    title: "Cymbal Retail",
    url: "https://services.google.com/fh/files/misc/v6.1_pca_cymbal_retail_case_study_english.pdf",
  },
  "ehr-healthcare": {
    title: "EHR Healthcare",
    url: "https://services.google.com/fh/files/misc/v6.1_pca_ehr_healthcare_case_study_english.pdf",
  },
  "knightmotives-automotive": {
    title: "KnightMotives Automotive",
    url: "https://services.google.com/fh/files/misc/v6.1_pca_knightmotives_automotive_case_study_english.pdf",
  },
} as const satisfies Readonly<Record<string, CaseStudy>>;

export type CaseStudyId = keyof typeof caseStudies;

export function isCaseStudyId(value: string): value is CaseStudyId {
  return Object.hasOwn(caseStudies, value);
}

// Distinct case studies in the order the questions first refer to them.
export function referencedCaseStudyIds(questions: readonly Pick<Question, "caseStudyId">[]): CaseStudyId[] {
  return [...new Set(questions.flatMap((question) => question.caseStudyId ?? []))];
}
