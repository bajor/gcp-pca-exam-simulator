import { caseStudies, type CaseStudyId } from "../domain/caseStudies";
import {
  createRejectionRecord,
  createReviewRecord,
  examSectionIds,
  expectedSectionCounts,
  minimumCaseStudyQuestions,
  minimumChoiceWords,
  minimumQuestionWords,
  type AnyQuestionSection,
  type DraftQuestionSet,
  type Evidence,
  type ExamSection,
  type QuestionSet,
  type RejectionRecord,
  type ReviewRecord,
  type SingleChoiceQuestion,
} from "../domain/questions";

// The first `caseStudyQuestionCount` questions refer to the given case studies in turn.
export function buildValidQuestionSet(
  caseStudyQuestionCount = minimumCaseStudyQuestions,
  caseStudyIds: readonly CaseStudyId[] = ["ehr-healthcare", "cymbal-retail"],
): QuestionSet {
  const questions: SingleChoiceQuestion[] = [];
  for (const section of examSectionIds) {
    for (let index = 0; index < expectedSectionCounts[section]; index += 1) {
      const position = questions.length;
      const caseStudyId = position < caseStudyQuestionCount ? caseStudyIds[position % caseStudyIds.length] : undefined;
      questions.push(question(section, index + 1, caseStudyId));
    }
  }
  return {
    id: "valid-set",
    version: 1,
    title: "Valid set",
    guideVersion: "6.1",
    durationMinutes: 120,
    authors: ["author"],
    questions,
  };
}

export function buildValidDraft(set = buildValidQuestionSet()): DraftQuestionSet {
  const sections = examSectionIds.map((section) => ({
    section,
    author: "author",
    questions: set.questions.filter((item) => item.section === section),
  })) as AnyQuestionSection[];
  return {
    id: set.id,
    version: set.version,
    title: set.title,
    guideVersion: set.guideVersion,
    durationMinutes: set.durationMinutes,
    sections,
  };
}

export function buildValidReviewRecord(set: QuestionSet): ReviewRecord {
  return createReviewRecord(set, "reviewer", "2026-08-31");
}

export function buildValidRejectionRecord(set: QuestionSet): RejectionRecord {
  return createRejectionRecord(set, "reviewer", "2026-08-31", [
    { id: set.questions[0].id, reason: "The prompt is ambiguous." },
  ]);
}

export function buildReviewDocument(review: ReviewRecord): string {
  return `# Review\n\n## Review Record\n\n\`\`\`json\n${JSON.stringify(review)}\n\`\`\``;
}

export function buildRejectionDocument(review: RejectionRecord): string {
  return `# Rejection\n\n## Rejection Record\n\n\`\`\`json\n${JSON.stringify(review)}\n\`\`\``;
}

function question(section: ExamSection, number: number, caseStudyId?: CaseStudyId): SingleChoiceQuestion {
  const evidence: Evidence[] = [{ id: "source", title: "Docs", url: "https://docs.cloud.google.com/docs", claim: "Claim" }];
  if (caseStudyId) evidence.push(caseStudyEvidence(caseStudyId));
  return {
    id: `${section}-q${number}`,
    kind: "single",
    section,
    objective: "Objective",
    prompt: words("prompt", minimumQuestionWords),
    ...(caseStudyId && { caseStudyId }),
    verifiedOn: "2026-08-31",
    evidence,
    choices: [
      { id: "a", text: words("a", minimumChoiceWords), feedback: "A feedback", evidenceIds: ["source"] },
      { id: "b", text: words("b", minimumChoiceWords), feedback: "B feedback", evidenceIds: ["source"] },
      { id: "c", text: words("c", minimumChoiceWords), feedback: "C feedback", evidenceIds: ["source"] },
      { id: "d", text: words("d", minimumChoiceWords), feedback: "D feedback", evidenceIds: ["source"] },
    ],
    correctChoiceId: "a",
  };
}

function caseStudyEvidence(caseStudyId: CaseStudyId): Evidence {
  const caseStudy = caseStudies[caseStudyId];
  return { id: "case-study", title: `${caseStudy.title} case study`, url: caseStudy.url, claim: "Case-study fact." };
}

export function words(label: string, count: number): string {
  return Array.from({ length: count }, (_, index) => `${label}${index + 1}`).join(" ");
}
