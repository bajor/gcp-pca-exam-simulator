import type { DraftQuestionSet } from "../../../domain/questions";
import { practiceExamTwoV1Sections, practiceExamTwoV2Sections } from "./sections";

export const practiceExamTwoDraftQuestionSets: readonly DraftQuestionSet[] = [
  {
    id: "professional-cloud-architect-v6-1-practice-2",
    version: 1,
    title: "Professional Cloud Architect Practice Exam 2",
    guideVersion: "6.1",
    durationMinutes: 120,
    sections: practiceExamTwoV1Sections,
  },
  {
    id: "professional-cloud-architect-v6-1-practice-2-v2",
    version: 2,
    title: "Professional Cloud Architect Practice Exam 2",
    guideVersion: "6.1",
    durationMinutes: 120,
    sections: practiceExamTwoV2Sections,
  },
];
