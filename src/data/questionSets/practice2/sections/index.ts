import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamTwoAnalyzeSection } from "./analyze";
import { practiceExamTwoDesignSection } from "./design";
import { practiceExamTwoProvisionSection } from "./provision";
import { practiceExamTwoSecureSection } from "./secure";

export const practiceExamTwoV1Sections: readonly AnyQuestionSection[] = [
  practiceExamTwoDesignSection,
  practiceExamTwoProvisionSection,
  practiceExamTwoSecureSection,
  practiceExamTwoAnalyzeSection,
];
