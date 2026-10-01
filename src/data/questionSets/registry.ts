import type { DraftQuestionSet, QuestionSet } from "../../domain/questions";
import { practiceExamOneDraftQuestionSets } from "./practice1/drafts";

// Each practice exam owns a `practice<number>/` module tree and adds its drafts and candidates here.
export const draftQuestionSets: readonly DraftQuestionSet[] = [...practiceExamOneDraftQuestionSets];

export const candidateQuestionSets: readonly QuestionSet[] = [];
