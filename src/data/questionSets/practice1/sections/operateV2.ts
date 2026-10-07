import { reviseQuestionInSection } from "../../../../domain/questions";
import { practiceExamOneOperateSection } from "./operate";

// Version 2 keeps every version 1 operate question except operate-04, which the independent review of
// version 1 returned because its stem stated one explicit constraint.
export const practiceExamOneOperateSectionV2 = reviseQuestionInSection(
  practiceExamOneOperateSection,
  "claude-opus-5.5-p1-operate-v2-20261007",
  "pca-p1-operate-04",
  {
    prompt: "A ride-sharing company runs its dispatch API as a GKE Deployment of 12 replicas. During the last release, the team deleted all Pods so that new ones started with the new image, and the API returned errors for four minutes because each new Pod received traffic before it had loaded its routing data, which takes about 60 seconds. The API already shuts down gracefully when a Pod is stopped. The next release must keep serving every request while the Pods are replaced, use spare capacity for only one extra Pod at a time, and need no engineer to replace Pods by hand. What should you do?",
    verifiedOn: "2026-10-07",
    feedback: {
      c: "Incorrect. Deleting Pods by hand is the manual work that the team wants to avoid, and a fixed wait does not confirm that each Pod is ready before it receives traffic.",
      d: "Correct. With a maximum unavailable of 0, no serving Pod is removed before its replacement is available, a maximum surge of 1 stays within the spare capacity, and the readiness probe keeps traffic away from each new Pod until its routing data is loaded.",
    },
  },
);
