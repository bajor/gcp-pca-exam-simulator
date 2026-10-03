import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamTwoDesignSection } from "./design";
import { practiceExamTwoProvisionSection } from "./provision";

export const practiceExamTwoV1Sections: readonly AnyQuestionSection[] = [
  practiceExamTwoDesignSection,
  practiceExamTwoProvisionSection,
];
