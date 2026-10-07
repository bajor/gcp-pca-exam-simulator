import type { DraftQuestionSet } from "../../../domain/questions";
import { practiceExamOneV1Sections, practiceExamOneV2Sections } from "./sections";

export const practiceExamOneDraftQuestionSets: readonly DraftQuestionSet[] = [
  {
    id: "professional-cloud-architect-v6-1-practice-1",
    version: 1,
    title: "Professional Cloud Architect Practice Exam 1",
    guideVersion: "6.1",
    durationMinutes: 120,
    sections: practiceExamOneV1Sections,
  },
  {
    id: "professional-cloud-architect-v6-1-practice-1-v2",
    version: 2,
    title: "Professional Cloud Architect Practice Exam 1",
    guideVersion: "6.1",
    durationMinutes: 120,
    sections: practiceExamOneV2Sections,
  },
];
