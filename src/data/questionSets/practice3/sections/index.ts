import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamThreeDesignSection } from "./design";
import { practiceExamThreeProvisionSection } from "./provision";
import { practiceExamThreeSecureSection } from "./secure";

export const practiceExamThreeV1Sections: readonly AnyQuestionSection[] = [
  practiceExamThreeDesignSection,
  practiceExamThreeProvisionSection,
  practiceExamThreeSecureSection,
];
