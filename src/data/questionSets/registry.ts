import type { DraftQuestionSet, QuestionSet } from "../../domain/questions";
import { practiceExamOneDraftQuestionSets } from "./practice1/drafts";
import { practiceExamTwoDraftQuestionSets } from "./practice2/drafts";

// Each practice exam owns a `practice<number>/` module tree and adds its drafts and candidates here.
export const draftQuestionSets: readonly DraftQuestionSet[] = [
  ...practiceExamOneDraftQuestionSets,
  ...practiceExamTwoDraftQuestionSets,
];

export const candidateQuestionSets: readonly QuestionSet[] = [];
