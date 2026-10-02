---
type: Issue
title: Author Practice Exam 1
description: Plan, author, review, and publish the first original 60-question PCA practice set, with the EHR Healthcare and Cymbal Retail case studies.
status: in-progress
labels: [content]
blocked_by: []
tracker: "One pull request per section, then candidate review and publication"
timestamp: 2026-10-01T00:00:00Z
---

## Author Practice Exam 1

Implement [PRD 0002](/prd/0002-practice-exam-question-sets.md) for Practice Exam 1 by following the authoring skill `.claude/skills/pca-question-authoring/SKILL.md`, the [question style guide](/authoring/question-style-guide.md), and the [objective coverage matrix](/authoring/coverage-matrix.md).

- Set identifier: `professional-cloud-architect-v6-1-practice-1`, version 1.
- Authors: `claude-opus-5.5-p1-<section>-<YYYYMMDD>`, one identifier per section, dated on the day its section was written.
- Case studies: EHR Healthcare and Cymbal Retail, as the coverage matrix assigns.
- Guide check: on 2026-10-01 the certification page linked the current guide with the same six sections, weights, 22 objectives, and four case studies that research 0001 records.

### Set Targets

The plan allocates questions exactly as the coverage matrix requires and keeps these PRD 0002 targets. "AI" marks questions whose decisive topic is AI.

| Target | Planned |
|---|---|
| Correct letters among 56 single-choice questions (11 to 17 each) | a 14, b 14, c 14, d 14 |
| Choose-two questions (4 to 8) | 4 |
| AI decisive (6 to 12) | 7 |
| Case-study questions (12 to 18) | 16: EHR Healthcare 8 in six sections, Cymbal Retail 8 in four sections |
| T4 troubleshooting (at least 5) | 5 |
| T6 reliability and recovery (at least 5) | 8 |
| T7 security and identity (at least 6) | 10 |
| T9 cost optimization (at least 4) | 4 |
| T3 migration planning (at least 3) | 5 |
| T11 AI solution design (at least 4) | 4 |
| Considerations of objectives 1.1, 1.5, 2.4, and 2.5 | 1.1.d, 1.1.g, 1.1.i, 1.1.j, 1.5.c, 2.4.a, and 2.5.a, each used once across the three sets |
| Feasibility check (coverage rule 4), counting Practice Exam 1 as written | Passes for all 22 objectives. The tightest are 1.1 (8 unused testable considerations for 8 remaining questions), 1.5, 2.4, and 2.5 (2 for 2 each), and 2.2 (4 for 6). |

Near-miss pairs (lever L2) and the longest-option limit are checked per section with `npm run question-set-report`. Kind is `single` or `multiple` (choose-two). T4 and T9 are exactly at their minimums, so a revision that changes the type of a T4 or T9 question must add another question of that type.

### Plan: design

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p1-design-01 | single | 1.1.i | T12 | no | EHR Healthcare | Keep the legacy integrations on-premises and connect them over Dedicated Interconnect | c | D2, D2, D5 | L2, L3 |
| pca-p1-design-02 | single | 1.1.g | T3 | no | none | Transfer Appliance when the link cannot move 450 TB in time | a | D3, D3, D2 | L1, L2 |
| pca-p1-design-03 | single | 1.1.j | T12 | no | Cymbal Retail | KPIs that measure the stated business objectives | d | D6, D6, D6 | L2, L3 |
| pca-p1-design-04 | single | 1.1.d | T9 | no | none | Resource-based commitment for steady load and Spot VMs for the checkpointed batch | b | D2, D3, D7 | L1, L2, L4 |
| pca-p1-design-05 | single | 1.2.b | T6 | no | EHR Healthcare | Regional GKE cluster for zone-failure resilience | a | D4, D1, D1 | L2, L4 |
| pca-p1-design-06 | single | 1.2.g | T6 | no | none | Point-in-time recovery to a new instance, then copy back the affected rows | c | D7, D7, D3 | L2, L4 |
| pca-p1-design-07 | single | 1.2.e | T4 | no | none | Cloud CDN on the existing global external Application Load Balancer | d | D6, D2, D2 | L2, L4, L6 |
| pca-p1-design-08 | single | 1.3.b | T11 | yes | Cymbal Retail | Gemini with a response schema built from the catalog fields | b | D3, D7, D3 | L2, L4 |
| pca-p1-design-09 | single | 1.3.c | T5 | no | none | Shared VPC for central network control | a | D3, D7, D2 | L2, L4 |
| pca-p1-design-10 | single | 1.3.e | T2 | no | none | Filestore for a POSIX file system with locking | c | D3, D3, D7 | L2, L4 |
| pca-p1-design-11 | single | 1.3.f | T2 | no | Cymbal Retail | Cloud Run function invoked by an Eventarc trigger for each upload | d | D1, D1, D7 | L2, L3 |
| pca-p1-design-12 | single | 1.4.b | T3 | no | EHR Healthcare | Migration Center discovery client and TCO report | b | D8, D3, D7 | L2, L6 |
| pca-p1-design-13 | single | 1.4.c | T3 | no | none | Migration Center network dependencies report to group dependent servers | a | D6, D3, D7 | L2, L7 |
| pca-p1-design-14 | single | 1.4.d | T3 | no | none | Bring-your-own-license images on sole-tenant nodes | c | D4, D2, D4 | L2, L4 |
| pca-p1-design-15 | single | 1.5.c | T1 | no | Cymbal Retail | Cloud Run with Cloud SQL and IAP enabled directly on the service | b | D4, D5, D1 | L2, L5 |

### Plan: provision

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p1-provision-01 | single | 2.1.a | T5 | no | EHR Healthcare | Second connection in the other edge availability domain, the cheapest topology with an uptime SLA | b | D7, D4, D2 | L2, L4, L6 |
| pca-p1-provision-02 | single | 2.1.c | T7 | no | none | Cloud NGFW intrusion prevention, which blocks threats inline instead of only detecting them | c | D7, D3, D1 | L2, L4 |
| pca-p1-provision-03 | single | 2.1.d | T5 | no | none | Private Service Connect with a consumer accept list for consumers with overlapping IP ranges | a | D3, D4, D5 | L2, L4 |
| pca-p1-provision-04 | single | 2.2.e | T9 | no | none | Lifecycle rule that moves objects to Archive storage at a known age, instead of Autoclass | d | D7, D7, D7 | L2, L3, L4, L6 |
| pca-p1-provision-05 | single | 2.2.d | T2 | no | none | Bigtable clusters in each region with an app profile that uses multi-cluster routing | d | D1, D7, D3 | L2, L4 |
| pca-p1-provision-06 | single | 2.2.g | T6 | no | none | Backup vault with enforced retention, filled by a Backup and DR backup plan | b | D7, D1, D7 | L3, L4 |
| pca-p1-provision-07 | single | 2.3.c | T4 | no | none | Direct VPC egress so that Cloud Run reaches a private Memorystore address | c | D6, D1, D2 | L2, L4, L6 |
| pca-p1-provision-08 | single | 2.3.d | T10 | no | none | VM Manager patch deployment rolled out zone by zone with a 10% disruption budget | a | D7, D1, D3 | L2, L4 |
| pca-p1-provision-09 | single | 2.3.e | T9 | no | none | GKE Autopilot, billed for Pod resource requests instead of whole nodes | d | D2, D7, D1 | L2, L4 |
| pca-p1-provision-10 | single | 2.4.a | T11 | yes | none | Agent Platform Pipelines for scheduled, reproducible retraining | b | D1, D3, D8 | L2, L4 |
| pca-p1-provision-11 | single | 2.5.a | T11 | yes | Cymbal Retail | AI Commerce Search with the product catalog and user events | c | D3, D7, D3 | L2, L4 |

### Plan: secure

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p1-secure-01 | single | 3.1.a | T7 | no | none | Bucket-level grant to a group with an IAM condition that expires at the deadline | a | D4, D5, D1 | L2, L4 |
| pca-p1-secure-02 | single | 3.1.b | T7 | no | none | Folder for the business unit with roles granted and the location constraint set on the folder | b | D4, D4, D2 | L2, L4 |
| pca-p1-secure-03 | multiple | 3.1.d | T7 | no | none | Dedicated key project, with key administration and key use granted to different principals (choose two) | a, d | D5, D5, D5 | L2, L4 |
| pca-p1-secure-04 | single | 3.1.e | T7 | no | none | VPC Service Controls perimeter with an access level for the corporate network | d | D7, D7, D3 | L2, L4 |
| pca-p1-secure-05 | single | 3.1.f | T7 | no | none | Customer-managed keys with the HSM protection level for FIPS 140-2 Level 3 | c | D7, D7, D2 | L2, L4, L6 |
| pca-p1-secure-06 | single | 3.1.g | T7 | no | none | IAP TCP forwarding for administrator SSH without external IP addresses | a | D1, D5, D2 | L2, L4 |
| pca-p1-secure-07 | single | 3.1.h | T7 | no | none | Binary Authorization in enforced mode requiring the pipeline's attestation | d | D7, D3, D7 | L2, L4 |
| pca-p1-secure-08 | single | 3.1.i | T7 | yes | Cymbal Retail | Model Armor screening of both prompts and responses | b | D4, D3, D8 | L2, L4 |
| pca-p1-secure-09 | single | 3.2.a | T8 | no | EHR Healthcare | Google Cloud BAA with only generally available covered services for PHI | c | D6, D7, D3 | L1, L2, L4 |
| pca-p1-secure-10 | single | 3.2.b | T8 | no | Cymbal Retail | Sensitive Data Protection de-identification before transcripts reach BigQuery | d | D5, D7, D8 | L2, L4 |
| pca-p1-secure-11 | multiple | 3.2.d | T8 | no | none | Organization-level aggregated sink and a locked bucket retention policy (choose two) | b, e | D4, D7, D7 | L3, L4 |

### Plan: analyze

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p1-analyze-01 | single | 4.1.f | T6 | no | EHR Healthcare | Warm standby in a second region for the stated recovery objectives | a | D2, D3, D4 | L1, L5 |
| pca-p1-analyze-02 | single | 4.1.c | T4 | yes | none | Content filter threshold raised only for the category that blocks legitimate answers | c | D6, D6, D4 | L2, L4 |
| pca-p1-analyze-03 | single | 4.1.b | T10 | no | none | Cloud Deploy promotion with an approval before production | d | D3, D7, D1 | L2, L4 |
| pca-p1-analyze-04 | single | 4.1.d | T11 | yes | Cymbal Retail | Gen AI evaluation service comparing the current and proposed versions before release | b | D8, D6, D7 | L2, L4 |
| pca-p1-analyze-05 | single | 4.1.e | T10 | no | none | Service Catalog with Terraform solutions shared to the teams | c | D3, D5, D1 | L3, L4 |
| pca-p1-analyze-06 | single | 4.2.b | T12 | no | none | Phased rollout with a pilot, training, sponsorship, and a fallback | a | D8, D6, D8 | L1, L3 |
| pca-p1-analyze-07 | single | 4.2.c | T12 | no | none | Managed services and targeted training matched to the team's current skills | d | D1, D8, D2 | L1, L3 |
| pca-p1-analyze-08 | single | 4.2.f | T9 | no | none | Rightsize with machine type recommendations before buying commitments | b | D8, D2, D3 | L2, L6 |
| pca-p1-analyze-09 | single | 4.2.d | T12 | no | none | Architecture decision records for a contested choice | d | D3, D6, D8 | L2, L3 |

### Plan: implement

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p1-implement-01 | single | 5.1.b | T1 | no | EHR Healthcare | Apigee API products and an app with its own credentials for each provider | b | D5, D1, D1 | L3, L4 |
| pca-p1-implement-02 | single | 5.1.d | T3 | no | none | Database Migration Service continuous migration with a short cutover | a | D3, D7, D1 | L2, L4 |
| pca-p1-implement-03 | single | 5.1.a | T10 | no | none | Cloud Run traffic splitting for a gradual rollout | c | D2, D7, D3 | L2, L4 |
| pca-p1-implement-04 | single | 5.1.c | T6 | no | none | Distributed load test in a production-like environment before the peak | d | D5, D6, D3 | L1, L3 |
| pca-p1-implement-05 | single | 5.2.c | T10 | no | none | Spanner emulator for isolated integration tests in CI | a | D2, D5, D3 | L3, L4 |
| pca-p1-implement-06 | single | 5.2.d | T4 | no | none | Remote Terraform state in Cloud Storage with state locking | c | D3, D6, D7 | L4, L7 |
| pca-p1-implement-07 | multiple | 5.2.e | T7 | no | none | Attached service account through ADC and Pub/Sub client-library retries (choose two) | c, e | D5, D3, D2 | L4, L7 |

### Plan: operate

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p1-operate-01 | single | 6.1.a | T10 | no | none | Blameless post-incident reviews with tracked action items | b | D3, D6, D8 | L2, L3 |
| pca-p1-operate-02 | single | 6.2.a | T10 | no | none | Managed Service for Prometheus with the existing instrumentation | a | D1, D2, D3 | L3, L4 |
| pca-p1-operate-03 | multiple | 6.2.c | T6 | no | EHR Healthcare | SLO burn-rate alerts routed to an on-call channel (choose two) | a, c | D6, D3, D6 | L3, L4 |
| pca-p1-operate-04 | single | 6.3.a | T10 | no | none | Rolling update with a readiness probe and no unavailable Pods | d | D3, D7, D1 | L4, L7 |
| pca-p1-operate-05 | single | 6.4.a | T4 | yes | none | Provisioned Throughput for predictable peak traffic to Gemini | c | D6, D2, D3 | L1, L4 |
| pca-p1-operate-06 | single | 6.5.a | T6 | no | none | Error budget policy that pauses feature releases | a | D6, D3, D8 | L1, L4 |
| pca-p1-operate-07 | single | 6.6.a | T6 | no | none | Failover test in a staging environment that replicates production | b | D5, D6, D3 | L1, L3 |

### Progress

- 2026-10-01: Planned all 60 questions and authored the `design` section.
- 2026-10-01: Applied the revised authoring rules: added the Kind column, made provision-04 a single-choice cost question (T9) so that the plan meets the T9 minimum, made secure-11 a choose-two question, and checked coverage feasibility. In the `design` section, replaced design-07's option c, which named an unsupported Cloud CDN configuration, and rewrote design-06's option b and design-10's option a as near-miss pairs; the report counts near-miss pairs in 14 of 15 design questions.
- 2026-10-02: Applied the fresh-session review of the `design` section in PR #9.
  - design-02 now uses several Transfer Appliances, because one holds at most 300 TB, and has an eight-week deadline.
  - design-12 adds the database collection scripts, because the discovery client does not collect databases.
  - The stems of design-04, design-14, and design-15 now state the constraints that rule out their distractors.
  - design-01, design-05, and five case-study evidence claims were reworded so that no run of 5 or more words matches a case study.
  - design-03 gained a near-miss distractor.
  - The plan relabels design-01 as T12, design-14 as T3, and the distractor mechanisms of design-11 and design-15. provision-09 becomes a T9 question about GKE Autopilot billing, so T9 stays at 4.
- 2026-10-02: Authored the `provision` section (author `claude-opus-5.5-p1-provision-20261002`).
  - Two questions keep their planned consideration but test a different decision. provision-05 tests Bigtable replication with multi-cluster routing, because design-06's stem already describes the planned Cloud SQL read replica. provision-09 tests GKE Autopilot billing, a decision that the coverage matrix lists for 2.3.e.
  - provision-01 tests the cheapest SLA-backed Interconnect topology rather than 99.99% redundancy, because the 99.99% rules now allow a single-metro topology that changes often.
  - The rows above record each question's final distractor mechanisms and levers.
- 2026-10-02: Authored the `secure` section (author `claude-opus-5.5-p1-secure-20261002`).
  - secure-01 tests time-bounded IAM conditions instead of directory synchronization, because Workforce Identity Federation would make the planned synchronization question arguable.
  - secure-09 keeps the BAA decision. Google's BAA now covers the entire infrastructure, so the question tests the rule against unsupported services and pre-GA offerings for PHI.
  - The rows above record each question's final mechanisms and levers.
- 2026-10-02: Authored the `analyze` section (author `claude-opus-5.5-p1-analyze-20261002`).
  - analyze-02 tests Gemini content filter thresholds instead of a prompt rollback, because the style guide counts a question as AI-decisive only when its answer depends on an AI product, model, or control.
  - analyze-04 counts as T11, AI solution design, because its decision is which Agent Platform capability validates a generative AI change before release. T11 is exactly at its minimum of 4.
  - The correct option is now strictly the longest in 14 of 44 single-choice questions, so the last 12 single-choice questions may add at most 4.
- 2026-10-02: Authored the `implement` section (author `claude-opus-5.5-p1-implement-20261002`).
  - implement-05 uses the Spanner emulator instead of the Pub/Sub emulator, so that the section does not test Pub/Sub twice.
  - implement-07 tests Pub/Sub publishing, because the Cloud Storage client libraries retry uploads by default only when a precondition makes them idempotent.
  - The correct option is strictly the longest in 14 of 50 single-choice questions, so the `operate` section may add at most 4.
- 2026-10-02: Authored the `operate` section (author `claude-opus-5.5-p1-operate-20261002`), so all six sections of the draft exist. The full draft has the following measurements:
  - correct letters a, b, c, and d: 14 each;
  - 4 choose-two questions;
  - near-miss pairs in 43 questions;
  - the correct option strictly longest in 16 of 56 single-choice questions;
  - 16 case-study questions: EHR Healthcare 8 in six sections, Cymbal Retail 8 in four;
  - median reading load: 183.5 words;
  - the coverage matrix's allocation for every objective.
