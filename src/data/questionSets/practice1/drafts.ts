import type { DraftQuestionSet } from "../../../domain/questions";
import { practiceExamOneV1Sections } from "./sections";

export const practiceExamOneDraftQuestionSets: readonly DraftQuestionSet[] = [
  {
    id: "professional-cloud-architect-v6-1-practice-1",
    version: 1,
    title: "Professional Cloud Architect Practice Exam 1",
    guideVersion: "6.1",
    durationMinutes: 120,
    sections: practiceExamOneV1Sections,
  },
];
