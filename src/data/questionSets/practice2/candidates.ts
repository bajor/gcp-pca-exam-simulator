import { assembleCandidateQuestionSets } from "../../../domain/questions";
import { practiceExamTwoDraftQuestionSets } from "./drafts";

export const practiceExamTwoCandidateQuestionSets = assembleCandidateQuestionSets(
  practiceExamTwoDraftQuestionSets,
  ["professional-cloud-architect-v6-1-practice-2"],
);
