import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamThreeAnalyzeSection } from "./analyze";
import { practiceExamThreeDesignSection } from "./design";
import { practiceExamThreeImplementSection } from "./implement";
import { practiceExamThreeProvisionSection } from "./provision";
import { practiceExamThreeSecureSection } from "./secure";

export const practiceExamThreeV1Sections: readonly AnyQuestionSection[] = [
  practiceExamThreeDesignSection,
  practiceExamThreeProvisionSection,
  practiceExamThreeSecureSection,
  practiceExamThreeAnalyzeSection,
  practiceExamThreeImplementSection,
];
