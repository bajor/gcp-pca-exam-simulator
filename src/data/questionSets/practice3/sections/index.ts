import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamThreeAnalyzeSection } from "./analyze";
import { practiceExamThreeAnalyzeSectionV2 } from "./analyzeV2";
import { practiceExamThreeDesignSection } from "./design";
import { practiceExamThreeImplementSection } from "./implement";
import { practiceExamThreeOperateSection } from "./operate";
import { practiceExamThreeProvisionSection } from "./provision";
import { practiceExamThreeSecureSection } from "./secure";
import { practiceExamThreeSecureSectionV2 } from "./secureV2";

export const practiceExamThreeV1Sections: readonly AnyQuestionSection[] = [
  practiceExamThreeDesignSection,
  practiceExamThreeProvisionSection,
  practiceExamThreeSecureSection,
  practiceExamThreeAnalyzeSection,
  practiceExamThreeImplementSection,
  practiceExamThreeOperateSection,
];

export const practiceExamThreeV2Sections: readonly AnyQuestionSection[] = [
  practiceExamThreeDesignSection,
  practiceExamThreeProvisionSection,
  practiceExamThreeSecureSectionV2,
  practiceExamThreeAnalyzeSectionV2,
  practiceExamThreeImplementSection,
  practiceExamThreeOperateSection,
];
