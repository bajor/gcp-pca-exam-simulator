import { reviseQuestionInSection } from "../../../../domain/questions";
import { practiceExamTwoProvisionSection } from "./provision";

// Version 2 keeps every version 1 provision question except provision-09, which the independent review of
// version 1 returned because its stem stated one explicit constraint.
export const practiceExamTwoProvisionSectionV2 = reviseQuestionInSection(
  practiceExamTwoProvisionSection,
  "claude-opus-5.5-p2-provision-v2-20261014",
  "pca-p2-provision-09",
  {
    prompt: "A bank's internal approval API runs on Cloud Run. It receives a few requests per minute during business hours and almost none at night. Users report that the first approval each morning, and some after quiet periods, take about 9 seconds, while other requests take under 300 milliseconds. The container loads a large rules file each time it starts, and the team cannot change the code or the file this quarter. The bank wants approvals after quiet periods to respond as quickly as the other requests, and it accepts the cost of one idle instance but not of more instances than the traffic needs. What should you do?",
    verifiedOn: "2026-10-14",
    feedback: {
      b: "Correct. A minimum number of instances keeps container instances warm and ready to serve requests, so approvals after quiet periods no longer wait for a slow container start, without any change to the code or the rules file.",
      c: "Incorrect. Startup CPU boost reduces startup latency, but each request after a quiet period still waits for a new instance to start and load the rules file.",
      d: "Incorrect. A concurrency of 1 makes Cloud Run start more instances for the same traffic, which the bank does not want to pay for, and none of them stays ready after a quiet period.",
    },
  },
);
