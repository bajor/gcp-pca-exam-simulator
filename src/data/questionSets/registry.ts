import type { DraftQuestionSet, QuestionSet } from "../../domain/questions";
import { practiceExamOneCandidateQuestionSets } from "./practice1/candidates";
import { practiceExamOneDraftQuestionSets } from "./practice1/drafts";
import { practiceExamTwoCandidateQuestionSets } from "./practice2/candidates";
import { practiceExamTwoDraftQuestionSets } from "./practice2/drafts";
import { practiceExamThreeCandidateQuestionSets } from "./practice3/candidates";
import { practiceExamThreeDraftQuestionSets } from "./practice3/drafts";

// Each practice exam owns a `practice<number>/` module tree and adds its drafts and candidates here.
export const draftQuestionSets: readonly DraftQuestionSet[] = [
  ...practiceExamOneDraftQuestionSets,
  ...practiceExamTwoDraftQuestionSets,
  ...practiceExamThreeDraftQuestionSets,
];

export const candidateQuestionSets: readonly QuestionSet[] = [
  ...practiceExamOneCandidateQuestionSets,
  ...practiceExamTwoCandidateQuestionSets,
  ...practiceExamThreeCandidateQuestionSets,
];
