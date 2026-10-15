import type { ExamCatalogEntry } from "../../domain/catalog";
import type { QuestionSet } from "../../domain/questions";
import { practiceExamOneCandidateQuestionSets } from "./practice1/candidates";
import { practiceExamTwoCandidateQuestionSets } from "./practice2/candidates";
import { practiceExamThreeCandidateQuestionSets } from "./practice3/candidates";

const publishedExamCandidates: readonly QuestionSet[] = [
  ...practiceExamOneCandidateQuestionSets,
  ...practiceExamTwoCandidateQuestionSets,
  ...practiceExamThreeCandidateQuestionSets,
];

// Imports only the candidates of published exams, so the app bundle never contains unreviewed drafts.
// `make verify-sources` checks that each published candidate has an exact acceptance record.
function acceptedCandidate(id: string): QuestionSet {
  const questionSet = publishedExamCandidates.find((candidate) => candidate.id === id);
  if (questionSet === undefined) {
    throw new Error(`${id}: the accepted candidate is not registered.`);
  }
  return questionSet;
}

export const examCatalog: readonly ExamCatalogEntry[] = [
  {
    availability: "available",
    questionSet: acceptedCandidate("professional-cloud-architect-v6-1-practice-1-v2"),
  },
  {
    availability: "available",
    questionSet: acceptedCandidate("professional-cloud-architect-v6-1-practice-2-v2"),
  },
  {
    availability: "available",
    questionSet: acceptedCandidate("professional-cloud-architect-v6-1-practice-3-v2"),
  },
];
