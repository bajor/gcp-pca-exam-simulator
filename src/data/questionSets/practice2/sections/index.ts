import type { AnyQuestionSection } from "../../../../domain/questions";
import { practiceExamTwoAnalyzeSection } from "./analyze";
import { practiceExamTwoDesignSection } from "./design";
import { practiceExamTwoImplementSection } from "./implement";
import { practiceExamTwoOperateSection } from "./operate";
import { practiceExamTwoProvisionSection } from "./provision";
import { practiceExamTwoProvisionSectionV2 } from "./provisionV2";
import { practiceExamTwoSecureSection } from "./secure";

export const practiceExamTwoV1Sections: readonly AnyQuestionSection[] = [
  practiceExamTwoDesignSection,
  practiceExamTwoProvisionSection,
  practiceExamTwoSecureSection,
  practiceExamTwoAnalyzeSection,
  practiceExamTwoImplementSection,
  practiceExamTwoOperateSection,
];

export const practiceExamTwoV2Sections: readonly AnyQuestionSection[] = [
  practiceExamTwoDesignSection,
  practiceExamTwoProvisionSectionV2,
  practiceExamTwoSecureSection,
  practiceExamTwoAnalyzeSection,
  practiceExamTwoImplementSection,
  practiceExamTwoOperateSection,
];
