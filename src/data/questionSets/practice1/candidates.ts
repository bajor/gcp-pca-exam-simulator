import { assembleCandidateQuestionSets } from "../../../domain/questions";
import { practiceExamOneDraftQuestionSets } from "./drafts";

export const practiceExamOneCandidateQuestionSets = assembleCandidateQuestionSets(
  practiceExamOneDraftQuestionSets,
  ["professional-cloud-architect-v6-1-practice-1"],
);
