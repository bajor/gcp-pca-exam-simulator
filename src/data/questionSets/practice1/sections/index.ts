import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamOneDesignSection } from "./design";
import { practiceExamOneProvisionSection } from "./provision";

export const practiceExamOneV1Sections: readonly AnyQuestionSection[] = [
  practiceExamOneDesignSection,
  practiceExamOneProvisionSection,
];
