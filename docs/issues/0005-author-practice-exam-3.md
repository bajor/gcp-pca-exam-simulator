---
type: Issue
title: Author Practice Exam 3
description: Plan, author, review, and publish the third original 60-question PCA practice set, with the EHR Healthcare and KnightMotives Automotive case studies.
status: in-progress
labels: [content]
blocked_by: []
tracker: "One pull request per section, then candidate review and publication"
timestamp: 2026-10-14T00:00:00Z
---

## Author Practice Exam 3

Implement [PRD 0002](/prd/0002-practice-exam-question-sets.md) for Practice Exam 3 by following the authoring skill `.claude/skills/pca-question-authoring/SKILL.md`, the [question style guide](/authoring/question-style-guide.md), and the [objective coverage matrix](/authoring/coverage-matrix.md).

- Set identifier: `professional-cloud-architect-v6-1-practice-3`, version 1.
- Authors: `claude-opus-5.5-p3-<section>-<YYYYMMDD>`, one identifier per section, dated on the day its section is written.
- Case studies: EHR Healthcare and KnightMotives Automotive. The coverage matrix lets the Practice Exam 3 author choose two case studies. Practice Exams 1 and 2 already use all four, and this pair has not been used together. Both case studies still state many untested requirements whose decisions rest on generally available infrastructure products: provider data ingestion, latency to all customers, multiple container environments, and centralized visibility for EHR Healthcare; plant connectivity, the security program after breaches, dealer and CRM integration, and vehicle data for KnightMotives Automotive.
- Guide check: on 2026-10-14 the certification page linked the current guide, which is byte-identical to the copy checked on 2026-10-02, with the same six sections, weights, and four case studies. All four case-study documents are byte-identical to the copies checked on 2026-10-02.
- Scenario reuse: no row repeats a scenario of Practice Exam 1 or 2. Where an earlier set tests the same product, the decisive feature differs. For example, design-15 tests Cloud Run's automatic base image updates, while Practice Exam 1's design-15 tests Cloud Run with IAP for a new application.

### Set Targets

The plan allocates questions exactly as the coverage matrix requires and keeps these PRD 0002 targets. "AI" marks questions whose decisive topic is AI.

| Target | Planned |
|---|---|
| Correct letters among 55 single-choice questions (11 to 17 each) | a 15, b 14, c 14, d 12 |
| Choose-two questions (4 to 8) | 5 |
| AI decisive (6 to 12) | 7 |
| Case-study questions (12 to 18) | 16: EHR Healthcare 8 in five sections, KnightMotives Automotive 8 in six sections |
| T4 troubleshooting (at least 5) | 6 |
| T6 reliability and recovery (at least 5) | 6 |
| T7 security and identity (at least 6) | 8 |
| T9 cost optimization (at least 4) | 4 |
| T3 migration planning (at least 3) | 4 |
| T11 AI solution design (at least 4) | 5 |
| Considerations of objectives 1.1, 1.5, 2.4, and 2.5 | 1.1.e, 1.1.f, 1.1.k, 1.1.l, 1.5.a, 2.4.b, and 2.5.c, none of which Practice Exam 1 or 2 uses |
| Coverage rule 3, counting Practice Exams 1, 2, and 3 as written | Every testable consideration is the primary topic of at least one question. Practice Exams 1 and 2 leave 8 testable considerations unused: the 7 above and 2.2.f, which provision-06 uses. |

The other 52 questions use considerations that earlier sets already cover, with decisive features that differ from theirs. Near-miss pairs (lever L2) and the longest-option limit are checked per section with `npm run question-set-report`. Kind is `single` or `multiple` (choose-two). T9 is exactly at its minimum, so a revision that changes a T9 question must keep its type or add another T9 question.

### Plan: design

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p3-design-01 | single | 1.1.e | T2 | no | none | Workflows callback that pauses a multi-step process until a person decides | a | D7, D3, D1 | L2, L4 |
| pca-p3-design-02 | single | 1.1.f | T1 | no | KnightMotives Automotive | Application Integration with a prebuilt connector to the SaaS CRM instead of custom synchronization code | c | D1, D3, D2 | L3, L4 |
| pca-p3-design-03 | single | 1.1.k | T1 | no | none | A separate customer-managed key for each tenant, so that one tenant's data can be made unreadable | b | D4, D7, D2 | L2, L4 |
| pca-p3-design-04 | single | 1.1.l | T10 | no | EHR Healthcare | A metrics scope in one scoping project that covers every environment project | d | D2, D1, D6 | L2, L3 |
| pca-p3-design-05 | single | 1.2.b | T6 | no | none | Filestore regional tier for a shared file system that survives a zone failure | a | D7, D4, D1 | L3, L4 |
| pca-p3-design-06 | single | 1.2.e | T1 | no | none | Cloud Run in several regions behind a global external Application Load Balancer | c | D6, D7, D4 | L2, L4 |
| pca-p3-design-07 | multiple | 1.2.g | T6 | no | EHR Healthcare | Backup for GKE backup plan with volume data and a prepared restore plan (choose two) | b, d | D1, D6, D7 | L3, L4 |
| pca-p3-design-08 | single | 1.3.b | T11 | yes | none | Gemini batch inference at a discount for a large job that can finish within a day | b | D2, D7, D3 | L1, L4 |
| pca-p3-design-09 | single | 1.3.c | T5 | no | none | Network Connectivity Center hub with VPC spokes for transitive connectivity among many VPC networks | d | D7, D2, D2 | L3, L4 |
| pca-p3-design-10 | single | 1.3.d | T2 | no | none | Managed Service for Apache Spark serverless batches for existing PySpark jobs | a | D7, D3, D1 | L3, L4 |
| pca-p3-design-11 | single | 1.3.e | T2 | no | KnightMotives Automotive | Bigtable for high-rate vehicle readings read by vehicle and time range | c | D3, D7, D3 | L2, L4 |
| pca-p3-design-12 | multiple | 1.4.a | T5 | no | none | Cloud DNS forwarding zone and inbound server policy for hybrid name resolution (choose two) | a, c | D5, D1, D6 | L3, L4 |
| pca-p3-design-13 | single | 1.4.b | T3 | no | none | BigQuery batch SQL translator for existing Teradata scripts | b | D1, D2, D7 | L3, L4 |
| pca-p3-design-14 | single | 1.4.c | T3 | no | EHR Healthcare | First wave rehosts the facility whose lease expires, and modernization follows | d | D2, D8, D2 | L1, L2 |
| pca-p3-design-15 | single | 1.5.a | T1 | no | none | Cloud Run automatic base image updates that patch the runtime without rebuilds | a | D1, D7, D6 | L2, L4 |

### Plan: provision

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p3-provision-01 | single | 2.1.a | T5 | no | EHR Healthcare | MACsec for Cloud Interconnect to encrypt the Dedicated Interconnect connections at line rate | b | D7, D3, D2 | L2, L4 |
| pca-p3-provision-02 | single | 2.1.b | T9 | no | none | HA VPN to AWS for a small encrypted link that is needed within days | d | D2, D3, D5 | L1, L6 |
| pca-p3-provision-03 | single | 2.1.d | T5 | no | none | Cross-region internal Application Load Balancer for internal clients with regional failover | a | D4, D7, D3 | L2, L4 |
| pca-p3-provision-04 | single | 2.2.d | T2 | no | none | Cloud SQL cross-region read replica near readers on another continent | c | D2, D7, D4 | L2, L3 |
| pca-p3-provision-05 | single | 2.2.g | T6 | no | none | Cloud Storage soft delete to recover objects that a faulty job deleted | b | D2, D7, D6 | L2, L4 |
| pca-p3-provision-06 | single | 2.2.f | T9 | no | none | Hyperdisk Balanced, whose capacity and performance change independently as data grows | a | D2, D3, D7 | L1, L4 |
| pca-p3-provision-07 | single | 2.3.c | T4 | no | none | Cloud NAT for private GKE nodes that must pull public images | d | D5, D6, D7 | L3, L4 |
| pca-p3-provision-08 | single | 2.3.d | T10 | no | EHR Healthcare | Config Sync from one Git repository across the fleet's clusters | c | D1, D6, D2 | L2, L4 |
| pca-p3-provision-09 | single | 2.3.e | T9 | no | none | Spot Pods on GKE Autopilot for fault-tolerant batch work | b | D2, D3, D7 | L1, L4 |
| pca-p3-provision-10 | single | 2.4.b | T11 | yes | KnightMotives Automotive | Agent Platform Feature Store serving BigQuery feature data online | a | D1, D3, D7 | L3, L4 |
| pca-p3-provision-11 | single | 2.5.c | T11 | yes | none | Open model from Model Garden deployed to an Agent Platform endpoint | c | D3, D1, D5 | L1, L4 |

### Plan: secure

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p3-secure-01 | single | 3.1.a | T7 | no | none | IAM deny policy that blocks deletions except by a break-glass group | c | D4, D7, D5 | L2, L4 |
| pca-p3-secure-02 | single | 3.1.b | T7 | no | none | Organization policy conditioned on a tag that production projects carry | a | D4, D1, D7 | L2, L4 |
| pca-p3-secure-03 | single | 3.1.c | T7 | no | none | Confidential VMs that keep data encrypted while in use | d | D7, D3, D2 | L2, L4 |
| pca-p3-secure-04 | multiple | 3.1.d | T7 | no | KnightMotives Automotive | Privileged Access Manager entitlement with an approver, and removal of standing grants (choose two) | b, e | D5, D4, D6 | L2, L4 |
| pca-p3-secure-05 | single | 3.1.e | T7 | no | none | Data Access audit logs that record reads of Cloud Storage objects | b | D6, D7, D2 | L2, L4 |
| pca-p3-secure-06 | single | 3.1.g | T7 | no | none | Service account impersonation for local Terraform runs without keys | c | D5, D5, D4 | L2, L4 |
| pca-p3-secure-07 | single | 3.1.h | T7 | no | none | Artifact Registry remote repository as the only source of public packages | a | D1, D6, D7 | L3, L4 |
| pca-p3-secure-08 | single | 3.1.i | T11 | yes | none | Organization policy that limits Model Garden models to an approved list | d | D6, D4, D1 | L2, L4 |
| pca-p3-secure-09 | single | 3.2.a | T8 | no | KnightMotives Automotive | Cloud External Key Manager keys held outside Google | b | D7, D5, D2 | L2, L4 |
| pca-p3-secure-10 | single | 3.2.b | T8 | no | none | Sensitive Data Protection discovery profiles across BigQuery | c | D1, D6, D2 | L3, L4 |
| pca-p3-secure-11 | multiple | 3.2.d | T8 | no | EHR Healthcare | Access Transparency logs and Access Approval requests (choose two) | c, d | D6, D7, D5 | L2, L4 |

### Plan: analyze

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p3-analyze-01 | single | 4.1.b | T4 | no | none | Cloud Build private pool that reaches resources on a private network | d | D5, D6, D1 | L3, L4 |
| pca-p3-analyze-02 | single | 4.1.c | T4 | no | EHR Healthcare | Connectivity Tests to find where packets to an on-premises system are dropped | b | D6, D8, D2 | L3, L6 |
| pca-p3-analyze-03 | single | 4.1.c | T4 | yes | none | Gemini responses cut off at the output token limit | a | D6, D6, D2 | L3, L4 |
| pca-p3-analyze-04 | single | 4.1.d | T10 | no | none | Policy Controller constraints in dry-run mode before enforcement | c | D8, D6, D2 | L2, L6 |
| pca-p3-analyze-05 | single | 4.1.f | T6 | no | none | Dual-region bucket with turbo replication for a 15-minute recovery point | b | D7, D2, D3 | L2, L4 |
| pca-p3-analyze-06 | single | 4.2.a | T12 | no | none | Involve the stakeholders who can block a decision before the design is fixed | d | D8, D6, D2 | L3, L6 |
| pca-p3-analyze-07 | single | 4.2.c | T11 | yes | none | BigQuery ML for analysts who know SQL but not Python | a | D2, D1, D3 | L1, L3 |
| pca-p3-analyze-08 | single | 4.2.d | T12 | no | KnightMotives Automotive | Time-boxed proof of concept with success criteria agreed in advance | c | D8, D6, D2 | L3, L6 |
| pca-p3-analyze-09 | single | 4.2.f | T9 | no | none | Compute flexible committed use discounts for spend spread across machine series | b | D7, D2, D4 | L2, L4 |

### Plan: implement

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p3-implement-01 | single | 5.1.a | T10 | no | none | Cloud Run revision tag to test a revision before it receives traffic | c | D7, D8, D2 | L2, L4 |
| pca-p3-implement-02 | single | 5.1.b | T1 | no | none | Apigee OAuthV2 client credentials grant for partner systems instead of static keys | a | D5, D7, D1 | L2, L4 |
| pca-p3-implement-03 | single | 5.1.d | T3 | no | KnightMotives Automotive | Datastream replication from the ERP database to BigQuery | d | D1, D6, D3 | L3, L4 |
| pca-p3-implement-04 | single | 5.1.d | T3 | no | none | Storage Transfer Service event-driven transfers from Amazon S3 | b | D1, D7, D3 | L2, L4 |
| pca-p3-implement-05 | single | 5.2.c | T10 | no | none | Pub/Sub emulator for local and CI tests | a | D2, D7, D3 | L3, L4 |
| pca-p3-implement-06 | single | 5.2.d | T10 | no | EHR Healthcare | Infrastructure Manager deployments that create each new environment from Terraform | c | D1, D7, D6 | L3, L4 |
| pca-p3-implement-07 | multiple | 5.2.e | T7 | no | none | Workload Identity Federation for GKE instead of keys or the node service account (choose two) | a, d | D5, D4, D5 | L2, L4 |

### Plan: operate

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p3-operate-01 | single | 6.1.a | T10 | no | KnightMotives Automotive | Incident response with defined roles and practiced drills | b | D6, D2, D8 | L3, L4 |
| pca-p3-operate-02 | single | 6.2.a | T4 | no | none | Ops Agent to collect VM memory metrics | d | D6, D7, D1 | L3, L4 |
| pca-p3-operate-03 | single | 6.2.a | T10 | no | none | Log-based alerting policy on a specific log entry | a | D7, D1, D6 | L2, L4 |
| pca-p3-operate-04 | single | 6.3.a | T10 | yes | none | Traffic split between two models deployed to one Agent Platform endpoint | c | D2, D7, D8 | L2, L4 |
| pca-p3-operate-05 | single | 6.4.a | T4 | no | none | Personalized Service Health to check for a Google Cloud incident before escalating | d | D8, D6, D2 | L3, L6 |
| pca-p3-operate-06 | single | 6.5.a | T6 | no | none | Synthetic monitor success rate as a release quality measure | b | D6, D6, D2 | L3, L4 |
| pca-p3-operate-07 | single | 6.6.a | T6 | no | none | Regular recovery drills that restore backups and measure the recovery time | a | D6, D8, D2 | L3, L6 |

Section authors may change a planned row before writing its section. Each change is recorded in the progress entry, and the set targets above are kept.

### Progress

- 2026-10-14: Planned all 60 questions.
- 2026-10-14: Authored the `design` section (author `claude-opus-5.5-p3-design-20261014`).
  - The mechanisms and levers of design-05, -06, and -09 to -15 now describe the options as written.
  - design-05's fourth option is a self-managed NFS pair, because Filestore instance replication is offered only to select customers and cannot be a distractor.
  - design-09's second option is a full mesh of VPC peerings, whose management burden the Network Connectivity Center documentation names.
  - design-13's third option keeps the scripts on Teradata, because BigQuery federated queries cannot reach Teradata.
  - design-03 disables the leaving firm's key versions instead of destroying them, because destruction is scheduled 30 days ahead by default, while data can't be accessed as soon as its key version is disabled.
  - Measurements: the correct option is strictly the longest in 2 of 13 single-choice questions. 8 questions have a near-miss pair, and the median reading load is 177 words. No field shares a run of more than 4 words with a case study, whether hyphenated words are joined or split.
- 2026-10-14: Applied the fresh-session review of the `design` section and the plan. 12 keys were confirmed; design-06, design-08, and design-12 needed changes for their keys to be unique and achievable.
  - design-06's responses now need no data beyond the request, because every Firestore multi-region location is on one continent and would keep a long round trip to the database.
  - design-08 submits batch inference jobs within a one-week deadline, because a job may include up to 200,000 requests and can wait up to 72 hours in the queue.
  - design-12 states that the on-premises records change several times a day, so a nightly copy fails a stated requirement.
  - design-01's callback wait sets a timeout above ten days, because the default timeout is 12 hours. design-02 no longer says the build-to-order system must stay as it is, which conflicted with the case study, and design-05 cites the Filestore overview for transparent failover.
  - design-04 uses the current name Data Studio, and design-11's BigQuery feedback cites Bigtable's documented role for single-keyed, low-latency data.
  - Notes for later sections from the review: secure-04 must use a single-approver entitlement, because multi-level and multi-party approvals in Privileged Access Manager are Preview; secure-09 must make key custody the problem, so that it stays apart from Practice Exam 2's secure-10; and secure-08 must cite the final URL of the Model Garden access page.
