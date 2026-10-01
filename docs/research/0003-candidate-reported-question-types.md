---
type: Research
title: Question types candidates encounter
description: Official and candidate-reported evidence about PCA question formats and tasks, and the resulting question-type taxonomy for practice sets.
status: complete
tags: [exam, questions, research]
timestamp: 2026-10-01T00:00:00Z
---

# Question Types Candidates Encounter

## Method

On 2026-10-01 the research combined three kinds of evidence:

1. Google-owned statements: the certification page, the current exam guide, the launch edition of the guide version 6.1, and the official sample form. [1] [2] [3] [4]
2. Reports that could be read in full: the project owner's report after the real Professional Data Engineer (PDE) exam, one candidate's report after the current PCA exam [5], and two third-party analyses of the October 2025 exam change [6] [7].
3. Search-engine summaries of reports that could not be opened.

Medium pages returned HTTP 403 to automated access, and the research did not try to bypass the block. Claims that rest only on search summaries are marked as unverified and do not drive recommendations. Exam dumps and sites that publish reconstructed exam questions were excluded, as required by Google's misconduct policy. [8]

## Findings

Documented owner fact: Google describes the standard exam as 50-60 "multiple choice and multiple select" questions in two hours, with two case studies per exam whose questions make up 20-30% of the exam and that candidates can view on a split screen. [COI: Google] [1]

Documented owner fact: The launch edition of the guide version 6.1 tells candidates to use it for the English exam "on or after October 30". Compared with the current guide, it names Vertex AI where the current guide names Agent Platform, weights the sections about 25%, 18%, 19%, 15%, 11%, and 12%, and has an extra objective 4.3 on reliability procedures, such as chaos engineering and penetration testing, which overlaps objective 6.6 and which the current guide drops. [COI: Google] [2] [3]

Documented owner fact: The current guide adds AI considerations to sections 1, 2, and 3: Google Cloud AI and machine learning solutions in objective 1.3, Agent Platform workflows in objective 2.4, prebuilt AI APIs, Gemini Enterprise, and Model Garden in objective 2.5, and securing AI in objective 3.1. It names programmatic interaction, including Google Cloud SDKs, emulators, and infrastructure as code, in objective 5.2. [COI: Google] [2]

Documented owner fact: The sample form contains 19 items: 16 single-choice items with four options and 3 choose-two items with five options; ten items refer to a case study. [research 0002](/research/0002-official-sample-question-patterns.md) describes their structure. [COI: Google] [4]

Candidate report, February 28, 2026: A candidate who passed the current exam reports receiving 60 questions and finishing all of them in 1 hour and 40 minutes, with 20 minutes left for review. They describe AI as "woven into the core scenarios", and name GKE, networking, databases, the AI platform, Cloud Run compared with GKE, IAM and organization policies, cost optimization, and data pipelines as heavily tested. They call studying the four case studies beforehand the highest-leverage preparation. [single source] [5]

Training-provider analysis, November 6, 2025: GCP Study Hub estimates a 70% overlap with the previous exam. It reports less emphasis on App Engine, command syntax and flags, subnet sizing and CIDR arithmetic, and quotas and billing, and more emphasis on Cloud Run, Cloud Deploy, Direct VPC egress, Cloud KMS with HSM keys, VPC Service Controls, conditional IAM policies, AI services, AlloyDB and Filestore tiers, cost estimation in Migration Center, and GKE monitoring and autoscaling. It states that multiple-select questions appear and that many case-study questions can be answered without reading the case study. [single source, not a candidate report] [6]

Third-party analysis, October 28, 2025: Shing Lyu reports that the exam version 6.1 launched on October 30, 2025, with the new objectives 2.4 and 2.5, securing AI, the Well-Architected Framework, and Terraform. The author had not taken the exam. [single source, not a candidate report] [7]

Candidate report, project owner: On the real PDE exam, questions were much longer and harder than the PDE simulator's, and time ran out. [candidate-reported] See [research 0001](/research/0001-exam-format-and-blueprint.md).

## Contradictions

The February 2026 candidate finished the PCA exam with 20 minutes left, while the project owner ran out of time on the PDE exam. The PCA official samples are also much shorter than the Professional Machine Learning Engineer samples. Both points suggest that PCA questions are shorter than those of the data and ML exams, but they rest on one candidate report and on a sample form that predates the current guide.

Google lists multiple-select questions without stating their share, and the samples contain 3 of 19. One training provider mentions "select all that apply" wording, which neither Google's page nor the samples use; the samples state the number to choose.

## Analysis

The evidence consistently describes scenario-based design decisions, not recall of command flags or quotas. The recurring tasks are: designing a solution under business and technical constraints, choosing among Google Cloud services, planning migrations, designing networks, designing for reliability and recovery, securing identities and data, meeting compliance obligations, optimizing cost, running delivery and operations, and placing AI services in an architecture. Case studies add a second skill: applying a business's stated requirements to a design decision.

Format taxonomy, with the simulator policy each item implies:

| Format | Evidence | Simulator policy |
|---|---|---|
| Single-answer scenario, four options | The certification page; 16 of 19 samples | The default format. |
| Multiple-select, "Choose two" with five options | The certification page; 3 of 19 samples | A minority of each set, using the project convention "Choose two." with five options. |
| Case-study question | The certification page (20-30%, split screen); 10 of 19 samples | 12 to 18 questions per set about two of the four guide case studies, enforced by structural validation. |
| Command or configuration snippet | Objective 5.2 names SDKs and infrastructure as code; one analysis reports less emphasis on command syntax | No multi-line snippets. Inline names such as `gcloud storage` or a Terraform resource type in running text are allowed. |

Task taxonomy (question types). A question has one primary type; types overlap with guide sections but are not the same thing.

| Type | The candidate must | Main guide objectives |
|---|---|---|
| T1 Solution design under constraints | Choose the end-to-end design that satisfies all stated business and technical requirements | 1.1, 1.2 |
| T2 Service selection | Choose among compute, storage, database, data processing, and integration services for a workload | 1.3, 2.2, 2.3 |
| T3 Migration planning | Assess, sequence, and execute moves of systems and data, including licensing and data transfer | 1.4, 5.1 |
| T4 Troubleshooting and diagnosis | Find the cause or first step for connectivity, access, deployment, performance, or reliability problems | 4.1, 6.2, 6.4 |
| T5 Network design | Design VPCs, hybrid and multicloud connectivity, load balancing, private access, and firewall rules | 1.3, 2.1 |
| T6 Reliability and recovery | Design high availability, failover, backup, disaster recovery, service level objectives, and reliability testing | 1.2, 4.1, 6.6 |
| T7 Security and identity | Apply IAM, the resource hierarchy, organization policies, perimeters, keys, secrets, and secure access | 3.1 |
| T8 Compliance and data protection | Meet residency, privacy, payment-card, audit, and certification obligations | 3.2 |
| T9 Cost optimization | Choose pricing models, capacity types, storage classes, and resource sizes that meet the need at lower cost | 1.1, 2.3, 4.2 |
| T10 Delivery and operations | Choose CI/CD, infrastructure as code, release strategies, observability, and alerting | 4.1, 5.1, 5.2, 6.1, 6.2, 6.3 |
| T11 AI solution design | Place Agent Platform, Model Garden, Gemini, prebuilt AI APIs, or Gemini Enterprise in an architecture and secure it | 1.3, 2.4, 2.5, 3.1 |
| T12 Business and process decisions | Choose disposition, success measures, change management, team readiness, and decision processes | 1.1, 1.5, 4.2 |

The candidate report and the sample measurements show that difficulty comes mainly from constraints that eliminate the obvious option, from near-identical options, and from the case studies' requirements. The report of finishing with 20 minutes left suggests that sets at the reading-length floors would be easier to finish than the real exam, so the style guide's length targets sit above the floors.

## Recommendations

- Write every question as a scenario that requires a decision; never test isolated facts, command flags, or quota numbers.
- Use single-answer questions for most of each set, and use a minority of choose-two questions.
- In every set, include questions of every type T1 to T12, with minimums for the types that the evidence names most often: troubleshooting (T4), reliability and recovery (T6), security and identity (T7), cost optimization (T9), migration (T3), and AI solution design (T11).
- Make AI the decisive topic in a visible minority of questions, because AI appears in four objectives and in all four case studies.
- Give GKE and Cloud Run trade-offs, networking, databases, IAM and organization policies, and cost optimization visible weight, as the candidate report recommends.
- Keep multi-line command or configuration snippets out of practice sets.
- Re-run this research before authoring each new set, because the guide changed in October 2025 and again for the 2026 product renames, and reports under the current guide are scarce.

# References

[1] GOOGLE CLOUD. **Professional Cloud Architect Certification**. Available at: <https://cloud.google.com/learn/certification/cloud-architect>. Accessed on: 2026-10-01.

[2] GOOGLE CLOUD. **Professional Cloud Architect Certification Exam Guide**. Available at: <https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf>. Accessed on: 2026-10-01.

[3] GOOGLE CLOUD. **v6.1 Professional Cloud Architect Exam Guide**. Available at: <https://services.google.com/fh/files/misc/v6.1_pca_professional_cloud_architect_exam_guide_english.pdf>. Accessed on: 2026-10-01.

[4] GOOGLE CLOUD. **Professional Cloud Architect Sample Questions**. Available at: <https://docs.google.com/forms/d/e/1FAIpQLSf54f7FbtSJcXUY6-DUHfBG31jZ3pujgb8-a5io_9biJsNpqg/viewform>. Accessed on: 2026-10-01.

[5] DEV COMMUNITY. **From 2023 to 2026: What Actually Changed in the Google Cloud Professional Architect Exam**. Published 2026-02-28. Available at: <https://dev.to/abdelwaheb_moalla_00c8999/from-2023-to-2026-what-actually-changed-in-the-google-cloud-professional-architect-exam-1nha>. Accessed on: 2026-10-01.

[6] GCP STUDY HUB. **Guide to the new Professional Cloud Architect exam (released October 30th 2025)**. Published 2025-11-06. Available at: <https://gcpstudyhub.com/blog/guide-to-the-new-professional-cloud-architect-exam-released-october-30th-2025>. Accessed on: 2026-10-01.

[7] LYU, Shing. **Google Cloud Professional Cloud Architect Exam Changes October 2025: Key Updates You Need to Know**. Published 2025-10-28. Available at: <https://shinglyu.com/web/2025/10/28/google-cloud-professional-cloud-architect-exam-changes-october-2025-key-updates-you-need-to-know.html>. Accessed on: 2026-10-01.

[8] GOOGLE CLOUD. **Identifying and Preventing Misconduct**. Available at: <https://support.google.com/cloud-certification/answer/9908051?hl=en>. Accessed on: 2026-10-01.
