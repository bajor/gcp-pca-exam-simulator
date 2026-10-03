---
type: Issue
title: Author Practice Exam 2
description: Plan, author, review, and publish the second original 60-question PCA practice set, with the Altostrat Media and KnightMotives Automotive case studies.
status: in-progress
labels: [content]
blocked_by: []
tracker: "One pull request per section, then candidate review and publication"
timestamp: 2026-10-02T00:00:00Z
---

## Author Practice Exam 2

Implement [PRD 0002](/prd/0002-practice-exam-question-sets.md) for Practice Exam 2 by following the authoring skill `.claude/skills/pca-question-authoring/SKILL.md`, the [question style guide](/authoring/question-style-guide.md), and the [objective coverage matrix](/authoring/coverage-matrix.md).

- Set identifier: `professional-cloud-architect-v6-1-practice-2`, version 1.
- Authors: `claude-opus-5.5-p2-<section>-<YYYYMMDD>`, one identifier per section, dated on the day its section is written.
- Case studies: Altostrat Media and KnightMotives Automotive, as the coverage matrix assigns.
- Guide check: on 2026-10-02 the certification page linked the current guide, which is byte-identical to the copy checked on 2026-10-01, with the same six sections, weights, and four case studies.
- Scenario reuse: no row repeats a Practice Exam 1 scenario. Where both sets test the same product, the organization type and the problem differ. For example, provision-04 tests Autoclass for unpredictable access, while Practice Exam 1's provision-04 tested lifecycle rules for a known access pattern.

### Set Targets

The plan allocates questions exactly as the coverage matrix requires and keeps these PRD 0002 targets. "AI" marks questions whose decisive topic is AI.

| Target | Planned |
|---|---|
| Correct letters among 56 single-choice questions (11 to 17 each) | a 15, b 14, c 14, d 13 |
| Choose-two questions (4 to 8) | 4 |
| AI decisive (6 to 12) | 6 |
| Case-study questions (12 to 18) | 16: Altostrat Media 8 in five sections, KnightMotives Automotive 8 in five sections |
| T4 troubleshooting (at least 5) | 5 |
| T6 reliability and recovery (at least 5) | 6 |
| T7 security and identity (at least 6) | 10 |
| T9 cost optimization (at least 4) | 5 |
| T3 migration planning (at least 3) | 3 |
| T11 AI solution design (at least 4) | 5 |
| Considerations of objectives 1.1, 1.5, 2.4, and 2.5 | 1.1.a, 1.1.b, 1.1.c, 1.1.h, 1.5.b, 2.4.c, and 2.5.b, none of which Practice Exam 1 uses |
| Feasibility check (coverage rule 4), counting Practice Exams 1 and 2 as written | Passes for all 22 objectives. Practice Exam 3 must use 1.1.e, 1.1.f, 1.1.k, 1.1.l, 1.5.a, 2.4.b, and 2.5.c, and must also cover 2.2.f. |

The plan uses every consideration that Practice Exam 1 left unused, except those reserved for Practice Exam 3 above. Near-miss pairs (lever L2) and the longest-option limit are checked per section with `npm run question-set-report`. Kind is `single` or `multiple` (choose-two). AI decisive and T3 are exactly at their minimums, so a revision that changes one of those questions must keep its classification or add another question of the same kind.

### Plan: design

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p2-design-01 | single | 1.1.a | T1 | no | KnightMotives Automotive | BigQuery sharing listings that license curated datasets to partners without copies | a | D5, D5, D4 | L2, L4 |
| pca-p2-design-02 | single | 1.1.b | T11 | yes | none | Location requirement that selects the eu multi-region endpoint for Gemini | c | D5, D4, D7 | L1, L2 |
| pca-p2-design-03 | single | 1.1.c | T6 | no | none | Recovery tiers set by the business impact of each system | b | D2, D3, D4 | L1, L2 |
| pca-p2-design-04 | single | 1.1.h | T2 | no | KnightMotives Automotive | Spanner multi-region configuration for consistent global build-to-order reservations | d | D4, D3, D1 | L1, L2 |
| pca-p2-design-05 | single | 1.2.a | T1 | no | none | Well-Architected sustainability pillar: low-carbon region within the residency limits | a | D5, D3, D6 | L2, L3 |
| pca-p2-design-06 | single | 1.2.c | T2 | no | none | Managed instance group autoscaling that can shrink outside the peak | c | D7, D1, D2 | L2, L4 |
| pca-p2-design-07 | single | 1.2.d | T2 | no | none | Memorystore for Redis Cluster shards for write and memory growth | b | D3, D7, D1 | L2, L4 |
| pca-p2-design-08 | single | 1.3.a | T5 | no | Altostrat Media | Google Distributed Cloud software on premises with GKE fleet management | d | D1, D4, D3 | L2, L4 |
| pca-p2-design-09 | single | 1.3.d | T2 | no | KnightMotives Automotive | Dataflow streaming with event-time windows that allow late data | a | D7, D3, D1 | L2, L4 |
| pca-p2-design-10 | single | 1.3.g | T9 | no | none | Custom machine type that avoids paying for unused vCPUs | c | D2, D3, D7 | L2, L7 |
| pca-p2-design-11 | single | 1.3.b | T11 | yes | Altostrat Media | Gemini multimodal summarization of audio and video | b | D7, D1, D6 | L2, L4 |
| pca-p2-design-12 | single | 1.4.a | T3 | no | none | API facade over the mainframe during migration | d | D1, D3, D8 | L2, L4 |
| pca-p2-design-13 | single | 1.4.b | T3 | no | none | Agent-based Storage Transfer Service transfers from an on-premises file system | a | D3, D1, D7 | L2, L4 |
| pca-p2-design-14 | single | 1.4.c | T4 | no | none | Overlapping IP ranges found before connecting plant networks | c | D6, D7, D3 | L2, L4 |
| pca-p2-design-15 | single | 1.5.b | T1 | no | none | Event-driven design that admits future consumers without changing producers | b | D3, D3, D7 | L2, L4 |

### Plan: provision

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p2-provision-01 | single | 2.1.b | T5 | no | KnightMotives Automotive | Cross-Cloud Interconnect between Google Cloud and Microsoft Azure | c | D5, D2, D7 | L2, L4 |
| pca-p2-provision-02 | single | 2.1.a | T5 | no | Altostrat Media | Partner Interconnect where no Dedicated Interconnect colocation facility is reachable | a | D3, D5, D7 | L2, L4 |
| pca-p2-provision-03 | multiple | 2.1.c | T7 | no | none | Cloud Armor rate-based ban and the preconfigured SQL injection rule (choose two) | b, d | D7, D3, D7 | L2, L4 |
| pca-p2-provision-04 | single | 2.2.a | T9 | no | Altostrat Media | Autoclass for a media library with unpredictable access | d | D7, D2, D7 | L2, L4 |
| pca-p2-provision-05 | single | 2.2.b | T9 | no | none | BigQuery Enterprise reservation with a committed baseline and autoscaling | b | D2, D6, D7 | L2, L4 |
| pca-p2-provision-06 | single | 2.2.c | T7 | no | none | BigQuery row-level access policies instead of copies or a view for each customer | a | D5, D7, D2 | L2, L4 |
| pca-p2-provision-07 | single | 2.3.a | T6 | no | none | Regional managed instance group with application-based autohealing | c | D4, D1, D7 | L2, L4 |
| pca-p2-provision-08 | single | 2.3.b | T9 | no | none | Spot VMs for checkpointed workers and a standard VM for the coordinator | d | D2, D3, D7 | L2, L7 |
| pca-p2-provision-09 | single | 2.3.f | T4 | no | none | Cloud Run minimum instances against cold-start latency | b | D6, D7, D6 | L2, L4 |
| pca-p2-provision-10 | single | 2.4.c | T11 | yes | KnightMotives Automotive | AI Hypercomputer future reservation in calendar mode for a fixed 60-day training run | a | D7, D3, D2 | L2, L4 |
| pca-p2-provision-11 | single | 2.5.b | T11 | yes | none | NotebookLM in the company's Google Cloud project with the manuals as sources | c | D1, D2, D5 | L2, L4 |

### Plan: secure

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p2-secure-01 | single | 3.1.c | T7 | no | none | Secret Manager with rotation for third-party API credentials | b | D5, D7, D1 | L2, L4 |
| pca-p2-secure-02 | single | 3.1.a | T7 | no | Altostrat Media | Workforce Identity Federation for users of a third-party identity provider | d | D1, D5, D7 | L2, L4 |
| pca-p2-secure-03 | single | 3.1.b | T7 | no | none | Organization policy inherited with a folder-level exception | a | D4, D3, D5 | L2, L4 |
| pca-p2-secure-04 | multiple | 3.1.e | T7 | no | none | Organization policies that block service account key creation and external IP addresses (choose two) | a, c | D5, D6, D3 | L2, L4 |
| pca-p2-secure-05 | single | 3.1.f | T7 | no | none | Customer-managed key in the same location as the data with automatic rotation | c | D4, D7, D3 | L2, L4 |
| pca-p2-secure-06 | single | 3.1.g | T7 | no | none | Identity-Aware Proxy with context-aware access for a partner web portal | b | D5, D1, D7 | L2, L4 |
| pca-p2-secure-07 | single | 3.1.h | T7 | no | none | Vulnerability scanning gate in the build before images are pushed | d | D8, D6, D7 | L2, L4 |
| pca-p2-secure-08 | single | 3.1.i | T11 | yes | Altostrat Media | Model endpoints reachable only inside the VPC Service Controls perimeter | a | D5, D7, D3 | L2, L4 |
| pca-p2-secure-09 | single | 3.2.c | T8 | no | none | Compliance reports and the shared responsibility model for a SOC 2 audit | c | D6, D7, D3 | L2, L4 |
| pca-p2-secure-10 | single | 3.2.a | T8 | no | KnightMotives Automotive | Assured Workloads for EU data residency | d | D7, D4, D3 | L2, L4 |
| pca-p2-secure-11 | single | 3.2.b | T8 | no | none | Tokenization that reduces PCI DSS scope | b | D5, D7, D3 | L2, L4 |

### Plan: analyze

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p2-analyze-01 | single | 4.1.a | T10 | no | none | Separate projects per environment with promotion through the pipeline | c | D5, D3, D8 | L2, L4 |
| pca-p2-analyze-02 | single | 4.1.c | T4 | no | none | Cloud Trace to find the slow dependency in online ordering | a | D6, D8, D6 | L2, L4 |
| pca-p2-analyze-03 | single | 4.1.b | T10 | no | Altostrat Media | Cloud Deploy targets for cloud and on-premises clusters | d | D1, D3, D7 | L2, L4 |
| pca-p2-analyze-04 | single | 4.1.d | T10 | no | none | Policy validation of Terraform plans in CI before apply | b | D8, D6, D3 | L2, L4 |
| pca-p2-analyze-05 | single | 4.1.f | T6 | no | none | Cold backup-and-restore pattern for a low-criticality system | c | D2, D2, D3 | L1, L5 |
| pca-p2-analyze-06 | single | 4.2.a | T12 | no | KnightMotives Automotive | Stakeholder alignment for the data monetization initiative | a | D6, D8, D3 | L2, L3 |
| pca-p2-analyze-07 | single | 4.2.e | T12 | no | none | Customer success measures that show delivered value | d | D6, D6, D3 | L2, L3 |
| pca-p2-analyze-08 | single | 4.2.g | T6 | no | none | Documented manual fallback that keeps a business process running | b | D8, D3, D6 | L1, L3 |
| pca-p2-analyze-09 | multiple | 4.2.f | T9 | no | none | Resource labels and billing export to BigQuery for cost attribution (choose two) | a, d | D6, D2, D3 | L2, L4 |

### Plan: implement

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p2-implement-01 | single | 5.1.a | T10 | no | none | Cloud Deploy canary deployment with verification | c | D2, D7, D8 | L2, L4 |
| pca-p2-implement-02 | single | 5.1.b | T1 | no | KnightMotives Automotive | Apigee API products with OAuth for dealer systems | a | D5, D1, D3 | L2, L4 |
| pca-p2-implement-03 | single | 5.1.c | T6 | no | none | Integration tests in a production-like environment for a schema change | d | D6, D5, D3 | L2, L6 |
| pca-p2-implement-04 | single | 5.1.d | T3 | no | none | Migrate to Virtual Machines for on-premises VMware servers | b | D3, D1, D7 | L2, L4 |
| pca-p2-implement-05 | single | 5.2.a | T10 | no | none | Cloud Shell Editor for browser-based development with no local installs | a | D1, D3, D2 | L2, L4 |
| pca-p2-implement-06 | single | 5.2.b | T10 | no | none | gcloud storage commands for a scripted bulk copy | d | D3, D7, D1 | L2, L4 |
| pca-p2-implement-07 | multiple | 5.2.f | T10 | no | none | Cloud Client Libraries instead of hand-written REST calls (choose two) | b, c | D1, D3, D5 | L2, L4 |

### Plan: operate

| Question ID | Kind | Consideration | Type | AI | Case study | Decisive feature | Correct letters | Distractor mechanisms | Levers |
|---|---|---|---|---|---|---|---|---|---|
| pca-p2-operate-01 | single | 6.1.a | T10 | no | Altostrat Media | Automated runbooks that remove manual toil | c | D6, D3, D8 | L2, L3 |
| pca-p2-operate-02 | single | 6.2.b | T4 | no | none | Cloud Profiler to find CPU hot spots in production | a | D6, D2, D3 | L2, L4 |
| pca-p2-operate-03 | single | 6.2.a | T10 | no | none | Aggregated logs in a central log bucket with Log Analytics | b | D3, D1, D7 | L2, L4 |
| pca-p2-operate-04 | single | 6.3.a | T10 | no | none | Blue-green release with traffic switch and instant rollback | d | D8, D3, D7 | L2, L4 |
| pca-p2-operate-05 | single | 6.4.a | T4 | yes | none | Migrate to the replacement Gemini model before the retirement date | b | D6, D8, D3 | L2, L4 |
| pca-p2-operate-06 | single | 6.5.a | T6 | no | none | Automated quality gate that blocks a release on failing checks | a | D6, D8, D3 | L2, L4 |
| pca-p2-operate-07 | single | 6.6.a | T7 | no | none | Penetration testing of the company's own resources under the acceptable use policy | c | D5, D6, D3 | L2, L4 |

### Progress

- 2026-10-02: Planned all 60 questions.
- 2026-10-02: Authored the `design` section (author `claude-opus-5.5-p2-design-20261002`).
  - design-02 tests the location requirement that selects the eu multi-region endpoint instead of a latency requirement, because Google documents where each endpoint processes data, while latency comparisons between models change with each model release.
  - Before handoff, every distractor was checked against a stated constraint. design-01, design-06, design-12, and design-15 gained the constraints that rule out copies for partners, a platform move, a delayed launch, and reactions slower than seconds.
  - Every design question has a near-miss pair, and the correct option is strictly the longest in 2 of 15 questions, so the remaining 41 single-choice questions may add at most 16.
  - The product names page now lists BigQuery sharing, formerly Analytics Hub.
- 2026-10-02: Authored the `provision` section (author `claude-opus-5.5-p2-provision-20261002`).
  - provision-01 connects Google Cloud to Microsoft Azure, because partner Cross-Cloud Interconnect also serves AWS and OCI and would make a second option defensible.
  - provision-02 tests Partner Interconnect by the reach of a colocation facility, and its redundant attachments are not decisive, so that it does not repeat Practice Exam 1's provision-01, which tested the second edge availability domain.
  - provision-10 tests the AI Hypercomputer consumption options, and provision-11 uses the guide's name NotebookLM for the product that the documentation calls Gemini Notebook Enterprise.
  - AI decisive (6) and T4 (5) remain exactly at their minimums, so a later section should add one more AI-decisive question to give the set a margin.
  - The correct option is strictly the longest in 5 of 25 single-choice questions so far.
