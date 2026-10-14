import { reviseQuestionInSection } from "../../../../domain/questions";
import { practiceExamThreeAnalyzeSection } from "./analyze";

const author = "claude-opus-5.5-p3-analyze-v2-20261014";

// Version 2 keeps every version 1 analyze question except analyze-04 and analyze-08, which the independent
// review of version 1 returned because their option d failed no requirement that the stem stated.
export const practiceExamThreeAnalyzeSectionV2 = reviseQuestionInSection(
  reviseQuestionInSection(practiceExamThreeAnalyzeSection, author, "pca-p3-analyze-04", {
    prompt: "A platform team manages 30 GKE clusters with Policy Controller installed. It plans a new constraint that requires CPU and memory limits on every container. Many existing workloads lack limits, and the team must not block any team's deployments until the owners have fixed their workloads. The team wants a complete list of current violations across the clusters before it enforces the rule, without building or running any additional clusters. What should you do first?",
    verifiedOn: "2026-10-14",
    feedback: {
      d: "Incorrect. A separate test cluster with copies of every workload is the additional cluster that the team does not want to build or run, while a dryrun constraint audits the real clusters without blocking them.",
    },
  }),
  author,
  "pca-p3-analyze-08",
  {
    prompt: "KnightMotives Automotive wants new dealer tools for service technicians. Its business leaders favor a packaged SaaS product, while its IT architects favor building the tools on Google Cloud, and the two groups have debated for months without a decision. KnightMotives also wants better communication between its business and technical teams. The company wants a decision within three months, based on evidence that both groups accept, and its budget covers building only one option for production. What should you do?",
    verifiedOn: "2026-10-14",
    feedback: {
      c: "Correct. Time-boxed proofs of concept built on agreed use cases and requirements validate assumptions and show value to business leaders, which gives both groups evidence they accept before any production build.",
      d: "Incorrect. Building both options for all dealers exceeds a budget that covers only one production build, and a year of dealer use misses the three-month deadline for the decision.",
    },
  },
);
