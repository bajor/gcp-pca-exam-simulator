import { assembleCandidateQuestionSets } from "../../../domain/questions";
import { practiceExamThreeDraftQuestionSets } from "./drafts";

export const practiceExamThreeCandidateQuestionSets = assembleCandidateQuestionSets(
  practiceExamThreeDraftQuestionSets,
  ["professional-cloud-architect-v6-1-practice-3"],
);
