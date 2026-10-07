import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamOneAnalyzeSection } from "./analyze";
import { practiceExamOneDesignSection } from "./design";
import { practiceExamOneDesignSectionV2 } from "./designV2";
import { practiceExamOneImplementSection } from "./implement";
import { practiceExamOneOperateSection } from "./operate";
import { practiceExamOneOperateSectionV2 } from "./operateV2";
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

export const practiceExamOneV2Sections: readonly AnyQuestionSection[] = [
  practiceExamOneDesignSectionV2,
  practiceExamOneProvisionSection,
  practiceExamOneSecureSection,
  practiceExamOneAnalyzeSection,
  practiceExamOneImplementSection,
  practiceExamOneOperateSectionV2,
];
