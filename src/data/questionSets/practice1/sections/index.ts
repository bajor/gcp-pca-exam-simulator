import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamOneAnalyzeSection } from "./analyze";
import { practiceExamOneDesignSection } from "./design";
import { practiceExamOneImplementSection } from "./implement";
import { practiceExamOneOperateSection } from "./operate";
import { practiceExamOneProvisionSection } from "./provision";
import { practiceExamOneSecureSection } from "./secure";

export const practiceExamOneV1Sections: readonly AnyQuestionSection[] = [
  practiceExamOneDesignSection,
  practiceExamOneProvisionSection,
  practiceExamOneSecureSection,
  practiceExamOneAnalyzeSection,
  practiceExamOneImplementSection,
  practiceExamOneOperateSection,
];
