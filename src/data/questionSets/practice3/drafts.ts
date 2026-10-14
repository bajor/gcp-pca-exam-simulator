import type { DraftQuestionSet } from "../../../domain/questions";
import { practiceExamThreeV1Sections } from "./sections";

export const practiceExamThreeDraftQuestionSets: readonly DraftQuestionSet[] = [
  {
    id: "professional-cloud-architect-v6-1-practice-3",
    version: 1,
    title: "Professional Cloud Architect Practice Exam 3",
    guideVersion: "6.1",
    durationMinutes: 120,
    sections: practiceExamThreeV1Sections,
  },
];
