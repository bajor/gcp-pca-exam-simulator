---
type: Guide
title: Objective coverage matrix
description: Per-objective question allocation, consideration identifiers, testable decisions, common traps, availability notices, and verified documentation starting points for every practice set.
status: Accepted
tags: [questions, authoring, coverage]
timestamp: 2026-10-01T00:00:00Z
---

# Objective Coverage Matrix

## How to Use This Matrix

The exam guide version 6.1 has 6 sections, 22 objectives, and 96 considerations (the bullet points under an objective). Five objectives in section 6 have no bullet points; this matrix gives each of them one consideration with the suffix `a`, such as `6.3.a`, so that the guide has 101 consideration identifiers. The matrix fixes how many questions each objective receives in every 60-question set.

Objective titles below match the guide, without its parenthetical examples. Write each question's `objective` field as `<objective number> <objective title>: <consideration identifier> <short consideration text>`. For example: `2.3 Configuring compute systems: 2.3.b compute volatility configuration`. The identifier lets reviewers count coverage with a text search.

Coverage rules:

1. Every set allocates questions to objectives exactly as the table below shows. The section totals are enforced in code; the objective split is checked in review.
2. A question's primary topic is the consideration that its `objective` field names, and its correct answer must depend on a decision from that consideration. Within one set, no consideration is the primary topic of more than two questions.
3. Across Practice Exams 1, 2, and 3, every testable consideration is the primary topic of at least one question. A consideration is testable unless the notes below exclude it. The 180 questions of three sets cannot cover 101 considerations twice, so this rule asks for one use, not two.
4. Every set must keep rule 3 achievable, and its review checks this. Count the practice exams from 1 to 3 that have a registered candidate, including the set under review; subtract that number from 3 to get the sets still to be written. For each objective, count its testable considerations that are not the primary topic of any question in the latest candidate of those practice exams. That count must not exceed the objective's questions per set multiplied by the sets still to be written. For example, objective 2.2 has 7 testable considerations and 3 questions per set. If Practice Exam 1 uses 2.2.a, 2.2.c, and 2.2.e, 4 unused considerations remain for 6 questions, which passes. If Practice Exam 2 then uses the same three, 4 unused considerations remain for 3 questions, which fails.
5. Objectives 1.1, 1.5, 2.4, and 2.5 have exactly as many questions across three sets as testable considerations (12, 3, 3, and 3), so rule 4 allows no repeat: each of their considerations is the primary topic of exactly one question across Practice Exams 1, 2, and 3.
6. Every documentation link below returned HTTP 200 at its final URL on 2026-10-01. Re-fetch each link and read the current page before citing it, because the matrix lists starting points, not evidence.
7. Test only generally available (GA) features. A Preview or deprecation notice disqualifies the feature it names, not other features on the same page. [Current product names](/context/product-names.md) lists products that must not be decisive.

## Allocation

| Section | Objective | Questions per set |
|---|---|---|
| `design` (15) | 1.1 Designing a cloud solution infrastructure that meets business requirements | 4 |
| | 1.2 Designing a cloud solution infrastructure that meets technical requirements | 3 |
| | 1.3 Designing network, storage, and compute resources | 4 |
| | 1.4 Creating a migration plan | 3 |
| | 1.5 Envisioning future solution improvements | 1 |
| `provision` (11) | 2.1 Configuring network topologies | 3 |
| | 2.2 Configuring individual storage systems | 3 |
| | 2.3 Configuring compute systems | 3 |
| | 2.4 Leveraging Gemini Enterprise Agent Platform for end-to-end ML workflows | 1 |
| | 2.5 Configuring prebuilt solutions or APIs with Agent Platform | 1 |
| `secure` (11) | 3.1 Designing for security | 8 |
| | 3.2 Designing for compliance | 3 |
| `analyze` (9) | 4.1 Analyzing and defining technical processes | 5 |
| | 4.2 Analyzing and defining business processes | 4 |
| `implement` (7) | 5.1 Advising development and operation teams to ensure the successful deployment of the solution | 4 |
| | 5.2 Interacting with Google Cloud programmatically | 3 |
| `operate` (7) | 6.1 Understanding the principles and recommendations of the operational excellence pillar of the Google Cloud Well-Architected Framework | 1 |
| | 6.2 Familiarity with Google Cloud Observability solutions | 2 |
| | 6.3 Deployment and release management | 1 |
| | 6.4 Assisting with the support of deployed solutions | 1 |
| | 6.5 Evaluating quality control measures | 1 |
| | 6.6 Ensuring the reliability of solutions in production | 1 |

## Case Studies

Each set uses two of the four guide case studies, and 12 to 18 of its questions refer to one of them; structural validation enforces both rules. Case-study questions belong to the objective they test, in any section. Across Practice Exams 1, 2, and 3, every case study is used by at least one set:

| Practice exam | Case studies |
|---|---|
| 1 | EHR Healthcare and Cymbal Retail |
| 2 | Altostrat Media and KnightMotives Automotive |
| 3 | Two case studies chosen by the author, documented in the exam's issue record |

A case-study question tests a requirement stated in its case study, names the company, and restates every decisive fact in its stem. Choose decisions that the case study makes realistic: EHR Healthcare for hybrid connectivity, container platforms, availability, logging, and regulated data; Cymbal Retail for catalog generation, product discovery, human review, data migration, and cost; Altostrat Media for media storage cost, content safety, hybrid Kubernetes, and summarization; KnightMotives Automotive for data monetization, connectivity at plants and in vehicles, EU data protection, security after breaches, and legacy modernization.

## 1.1 Designing a Cloud Solution Infrastructure That Meets Business Requirements

| ID | Consideration | Decisions to test |
|---|---|---|
| 1.1.a | Business use cases and product strategy | Map a stated business goal to a design that serves it, and reject designs that optimize something the business did not ask for. |
| 1.1.b | Identifying functional and non-functional requirements | Separate what the system must do from availability, latency, compliance, and cost requirements, and find the requirement that eliminates a design. |
| 1.1.c | Business continuity plan | Choose recovery objectives and a continuity approach that matches the business impact of an outage. |
| 1.1.d | Cost optimization | Choose pricing models, capacity types, and managed services that meet the requirement at lower total cost. |
| 1.1.e | Supporting the application design | Choose platform services that fit the application's architecture, such as stateless services, event-driven processing, or relational transactions. |
| 1.1.f | Integration patterns with external systems | Choose APIs, messaging, file transfer, or event integration for partners and legacy systems. |
| 1.1.g | Movement of data | Choose online transfer, offline transfer, replication, or streaming by volume, bandwidth, and deadline. |
| 1.1.h | Design decision trade-offs | Weigh consistency, latency, cost, and operational effort, and choose the trade-off the requirements allow. |
| 1.1.i | Workload disposition strategies | Decide whether to rehost, replatform, refactor, replace with a managed product, or retire a workload. |
| 1.1.j | Success measurements | Choose key performance indicators or service level indicators that measure the stated business outcome. |
| 1.1.k | Security and compliance | Translate business security and compliance requirements into design constraints. |
| 1.1.l | Observability | Design observability that gives the business the visibility it requires. |

Common traps: optimizing a technical property the business did not ask for (D2); a measure that cannot show the stated outcome (D6).

Documentation: [Well-Architected Framework](https://docs.cloud.google.com/architecture/framework), [Cloud Architecture Center](https://docs.cloud.google.com/architecture), [Storage Transfer Service](https://docs.cloud.google.com/storage-transfer/docs/overview), [Spot VMs](https://docs.cloud.google.com/compute/docs/instances/spot).

## 1.2 Designing a Cloud Solution Infrastructure That Meets Technical Requirements

| ID | Consideration | Decisions to test |
|---|---|---|
| 1.2.a | Familiarity with the Google Cloud Well-Architected Framework | Apply a pillar's recommendation to a design choice. |
| 1.2.b | High availability and fail-over design | Choose zonal, regional, or multi-regional deployment and failover mechanisms for a stated availability target. |
| 1.2.c | Flexibility of cloud resources | Choose designs that can change capacity or configuration without redesign. |
| 1.2.d | Scalability to meet growth requirements | Choose autoscaling and horizontally scalable services for stated growth. |
| 1.2.e | Performance and latency | Place services and caches near users and choose services that meet a latency target. |
| 1.2.f | Gemini Cloud Assist | Not testable as a decisive feature while Gemini Cloud Assist is a Preview offering. |
| 1.2.g | Backup and recovery | Choose backup scope, frequency, retention, and restore paths that meet recovery objectives. |

Common traps: a multi-regional design where the requirement allows a regional one (D2); a single-zone design for a high availability target (D3).

Documentation: [Well-Architected Framework reliability pillar](https://docs.cloud.google.com/architecture/framework/reliability), [Application Load Balancer](https://docs.cloud.google.com/load-balancing/docs/application-load-balancer), [Backup and DR](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr).

## 1.3 Designing Network, Storage, and Compute Resources

| ID | Consideration | Decisions to test |
|---|---|---|
| 1.3.a | Integration with on-premises and multicloud environments | Choose a hybrid or multicloud architecture for workloads that stay in another environment. |
| 1.3.b | Google Cloud AI and machine learning solutions | Place Gemini models, Model Garden models, Agent Builder, or AI Hypercomputer in an architecture. |
| 1.3.c | Cloud-native networking | Choose VPC structure, Shared VPC, peering, Private Service Connect, load balancers, and firewall design. |
| 1.3.d | Choosing data processing solutions | Choose BigQuery, Dataflow, Managed Service for Apache Spark, or Pub/Sub by processing model and skills. |
| 1.3.e | Choosing appropriate storage types | Choose object, file, block, relational, NoSQL, or analytical storage by access pattern and consistency. |
| 1.3.f | Mapping compute needs to platform products | Choose GKE, Cloud Run, Cloud Run functions, or Compute Engine by workload shape and operational effort. |
| 1.3.g | Choosing compute resources | Choose Spot VMs, custom machine types, or specialized hardware for a workload. |

Common traps: GKE where Cloud Run meets the need with less operation (D1); a relational database for a workload that needs horizontal write scaling across regions (D3).

Documentation: [VPC overview](https://docs.cloud.google.com/vpc/docs/vpc), [Shared VPC](https://docs.cloud.google.com/vpc/docs/shared-vpc), [Private Service Connect](https://docs.cloud.google.com/vpc/docs/private-service-connect), [GKE overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview), [Cloud Run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run), [Spanner](https://docs.cloud.google.com/spanner/docs), [Model Garden](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-garden/explore-models), [AI Hypercomputer](https://docs.cloud.google.com/ai-hypercomputer/docs/overview).

## 1.4 Creating a Migration Plan

| ID | Consideration | Decisions to test |
|---|---|---|
| 1.4.a | Integrating solutions with existing systems | Keep migrated workloads connected to systems that stay on-premises. |
| 1.4.b | Assessing and migrating systems and data | Use Migration Center for asset discovery, assessment, and total cost of ownership reports, and choose migration tools for VMs, databases, and data. The Migration Center rapid cost estimate is Preview and must not be decisive. |
| 1.4.c | Migration methodologies, workload testing, network planning, and dependency planning | Sequence migration waves by dependencies, test before cutover, and plan IP ranges and connectivity. |
| 1.4.d | Software license implications and financial impact | Choose license-included images, bring-your-own-license on sole-tenant nodes, or managed replacements by cost and license terms. |

Common traps: migrating a workload before its dependencies are reachable (D8); overlapping IP ranges between environments (D3).

Documentation: [Migration Center](https://docs.cloud.google.com/migration-center/docs/migration-center-overview), [Migrate to Virtual Machines](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0), [Database Migration Service](https://docs.cloud.google.com/database-migration/docs/overview).

## 1.5 Envisioning Future Solution Improvements

| ID | Consideration | Decisions to test |
|---|---|---|
| 1.5.a | Cloud and technology improvements | Choose a design that can adopt managed improvements without rework. |
| 1.5.b | Evolution of business needs | Choose a design that accommodates a stated future requirement. |
| 1.5.c | Cloud-first design approach | Prefer managed, cloud-native services for new work when they meet the requirements. |

Common traps: building for a future need the business did not state (D2).

Documentation: [Well-Architected Framework](https://docs.cloud.google.com/architecture/framework).

## 2.1 Configuring Network Topologies

| ID | Consideration | Decisions to test |
|---|---|---|
| 2.1.a | Extending to on-premises environments | Choose Dedicated Interconnect, Partner Interconnect, or HA VPN by bandwidth, availability, and lead time. |
| 2.1.b | Extending to a multicloud environment | Choose Cross-Cloud Interconnect, VPN, or Network Connectivity Center for other clouds and between Google Cloud networks. |
| 2.1.c | Security protection | Choose Cloud NGFW rules and policies, Cloud Armor, or Cloud IDS for a stated threat. |
| 2.1.d | VPC design and load balancing | Choose the load balancer type and the VPC layout for internal and external access. |

Common traps: VPN for a sustained high-bandwidth requirement (D3); firewall rules where a web application firewall is needed (D7).

Documentation: [Cloud Interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview), [Cross-Cloud Interconnect](https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cci-overview), [Cloud VPN](https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview), [Network Connectivity Center](https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/overview), [Cloud NGFW](https://docs.cloud.google.com/firewall/docs/about-firewalls), [Cloud Armor](https://docs.cloud.google.com/armor/docs/cloud-armor-overview), [Cloud IDS](https://docs.cloud.google.com/intrusion-detection-system/docs/overview), [Cloud Load Balancing](https://docs.cloud.google.com/load-balancing/docs/load-balancing-overview).

## 2.2 Configuring Individual Storage Systems

| ID | Consideration | Decisions to test |
|---|---|---|
| 2.2.a | Data storage allocation | Choose location type, storage class, and capacity configuration. |
| 2.2.b | Data processing and compute provisioning | Provision database or analytics capacity for the workload, such as instance size, nodes, or slots. |
| 2.2.c | Security and access management | Grant data access with IAM at the right resource level and protect it with encryption settings. |
| 2.2.d | Configuration for data transfer and latency | Choose replicas, regions, and caching for read latency and transfer cost. |
| 2.2.e | Data retention and data lifecycle management | Configure lifecycle rules, retention policies, and object holds. |
| 2.2.f | Data growth planning | Choose storage that scales with stated growth without migration. |
| 2.2.g | Data protection | Choose backups, point-in-time recovery, and soft delete for stated recovery needs. |

Common traps: manual deletion scripts where lifecycle rules exist (D3); a storage class whose retrieval cost exceeds the savings for frequently read data (D2).

Documentation: [storage classes](https://docs.cloud.google.com/storage/docs/storage-classes), [Autoclass](https://docs.cloud.google.com/storage/docs/autoclass), [Cloud SQL](https://docs.cloud.google.com/sql/docs/introduction), [AlloyDB](https://docs.cloud.google.com/alloydb/docs/overview), [Bigtable](https://docs.cloud.google.com/bigtable/docs/overview), [Filestore](https://docs.cloud.google.com/filestore/docs/overview), [Firestore](https://docs.cloud.google.com/firestore/native/docs/overview).

## 2.3 Configuring Compute Systems

| ID | Consideration | Decisions to test |
|---|---|---|
| 2.3.a | Compute resource provisioning | Choose instance templates, managed instance groups, and machine families. |
| 2.3.b | Compute volatility configuration | Use Spot VMs for fault-tolerant work and standard VMs for work that cannot be interrupted. |
| 2.3.c | Cloud-native network configuration for compute resources | Connect Compute Engine, GKE, serverless services, and VMware Engine to VPC networks, for example with Direct VPC egress. |
| 2.3.d | Infrastructure orchestration, resource configuration, and patch management | Use infrastructure as code and VM Manager Patch for consistent configuration and patching. |
| 2.3.e | Container orchestration | Choose GKE Autopilot or Standard, node pools, and autoscaling. |
| 2.3.f | Serverless computing | Configure Cloud Run concurrency, scaling, and minimum instances. |

Common traps: Spot VMs for a stateful workload that cannot tolerate preemption (D3); a serverless connector where Direct VPC egress meets the need with less to operate (D2).

Documentation: [Spot VMs](https://docs.cloud.google.com/compute/docs/instances/spot), [Direct VPC egress](https://docs.cloud.google.com/run/docs/configuring/vpc-direct-vpc), [VM Manager Patch](https://docs.cloud.google.com/compute/vm-manager/docs/patch), [GKE overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview), [Google Cloud VMware Engine](https://docs.cloud.google.com/vmware-engine/docs/overview).

## 2.4 Leveraging Gemini Enterprise Agent Platform for End-to-End ML Workflows

| ID | Consideration | Decisions to test |
|---|---|---|
| 2.4.a | Using Agent Platform Pipelines to automate and orchestrate the ML lifecycle | Choose Agent Platform Pipelines for repeatable, tracked ML workflows. |
| 2.4.b | Preparing for Agent Platform data integration | Prepare data in BigQuery or Cloud Storage for Agent Platform training and inference. |
| 2.4.c | Using AI Hypercomputer | Choose accelerators, consumption models, and managed training for large AI workloads. |

Common traps: hand-built training infrastructure where managed training meets the need (D1).

Documentation: [Agent Platform overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/overview), [AI Hypercomputer](https://docs.cloud.google.com/ai-hypercomputer/docs/overview).

## 2.5 Configuring Prebuilt Solutions or APIs with Agent Platform

| ID | Consideration | Decisions to test |
|---|---|---|
| 2.5.a | Differentiating between the Google AI APIs | Choose the Cloud Vision API, Speech-to-Text, Text-to-Speech, Cloud Translation, Document AI, Agent Search, or a Gemini model for a task. The Video Intelligence API is deprecated and must not be decisive. |
| 2.5.b | Integrating Gemini Enterprise features | Choose Gemini Enterprise agents or NotebookLM to support employee workflows. Preview capabilities, such as NotebookLM's search-source integration, must not be decisive. |
| 2.5.c | Integrating AI models from Model Garden into the solution | Choose a model from Model Garden and a deployment option for a solution. |

Common traps: a custom model where a prebuilt API covers the task (D2).

Documentation: [Cloud Vision API features](https://docs.cloud.google.com/vision/docs/features-list), [Cloud Translation](https://docs.cloud.google.com/translate/docs/overview), [Document AI](https://docs.cloud.google.com/document-ai/docs/overview), [Gemini Enterprise](https://docs.cloud.google.com/gemini/enterprise/docs), [Model Garden](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-garden/explore-models).

## 3.1 Designing for Security

| ID | Consideration | Decisions to test |
|---|---|---|
| 3.1.a | Identity and Access Management | Grant predefined or custom roles by least privilege, with IAM conditions where access must be limited in time or scope. |
| 3.1.b | Resource hierarchy | Place policies at the organization, folder, or project level so that they inherit correctly. |
| 3.1.c | Data security | Choose encryption, key management, and Secret Manager for data and credentials. |
| 3.1.d | Separation of duties | Split permissions so that no single principal can both make and approve a sensitive change. |
| 3.1.e | Security controls | Choose audit logging, VPC Service Controls, context-aware access, organization policies, or hierarchical firewall policies for a stated risk. |
| 3.1.f | Managing customer-managed encryption keys with Cloud KMS | Choose CMEK, key location, protection level, and rotation. |
| 3.1.g | Secure remote access | Choose Identity-Aware Proxy, service account impersonation, Chrome Enterprise Premium, or Workload Identity Federation instead of keys or VPNs. |
| 3.1.h | Securing software supply chain | Use Artifact Registry, Artifact Analysis, and Binary Authorization to control what runs. |
| 3.1.i | Securing AI | Use Model Armor, Sensitive Data Protection, and secure model deployment against prompt attacks and data leaks. |

Common traps: service account keys where Workload Identity Federation or impersonation works (D5); basic roles where a predefined role suffices (D5); IAM alone against data exfiltration through allowed identities (D7).

Documentation: [IAM overview](https://docs.cloud.google.com/iam/docs/overview), [resource hierarchy](https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), [Organization Policy](https://docs.cloud.google.com/organization-policy/overview), [VPC Service Controls](https://docs.cloud.google.com/vpc-service-controls/docs/overview), [CMEK](https://docs.cloud.google.com/kms/docs/cmek), [Secret Manager](https://docs.cloud.google.com/secret-manager/docs/overview), [Identity-Aware Proxy](https://docs.cloud.google.com/iap/docs/concepts-overview), [Workload Identity Federation](https://docs.cloud.google.com/iam/docs/workload-identity-federation), [service account impersonation](https://docs.cloud.google.com/iam/docs/service-account-impersonation), [Chrome Enterprise Premium](https://docs.cloud.google.com/chrome-enterprise-premium/docs/overview), [Binary Authorization](https://docs.cloud.google.com/binary-authorization/docs/overview), [Artifact Analysis](https://docs.cloud.google.com/artifact-analysis/docs/artifact-analysis), [Model Armor](https://docs.cloud.google.com/model-armor/overview), [firewall policies](https://docs.cloud.google.com/firewall/docs/firewall-policies-overview).

## 3.2 Designing for Compliance

| ID | Consideration | Decisions to test |
|---|---|---|
| 3.2.a | Legislation and regulation | Meet health-record privacy, children's privacy, data privacy, ownership, and data sovereignty requirements, for example with Assured Workloads and location restrictions. |
| 3.2.b | Commercial | Handle payment-card data and personally identifiable information with scope reduction and Sensitive Data Protection. |
| 3.2.c | Industry certifications | Use Google Cloud compliance reports and the shared responsibility model for audits such as SOC 2. |
| 3.2.d | Audits | Retain and protect Cloud Audit Logs for the required period. |

Common traps: copying regulated data into an unrestricted location for analysis (D5); assuming that a Google certification covers the customer's own controls (D6).

Documentation: [Assured Workloads](https://docs.cloud.google.com/assured-workloads/docs/overview), [Sensitive Data Protection](https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview), [Cloud Audit Logs](https://docs.cloud.google.com/logging/docs/audit), [Organization Policy](https://docs.cloud.google.com/organization-policy/overview).

## 4.1 Analyzing and Defining Technical Processes

| ID | Consideration | Decisions to test |
|---|---|---|
| 4.1.a | Software development lifecycle | Choose environments, branching, and promotion practices for a team's delivery process. |
| 4.1.b | Continuous integration and continuous deployment | Choose Cloud Build, Cloud Deploy, and Artifact Registry for build, test, and promotion. |
| 4.1.c | Troubleshooting and root cause analysis | Use logs, metrics, traces, and change history to find a cause before changing the system. |
| 4.1.d | Testing and validation of software and infrastructure | Validate infrastructure changes and applications before production. |
| 4.1.e | Service catalog and provisioning | Offer approved, preconfigured solutions to teams through Service Catalog or templates. |
| 4.1.f | Disaster recovery | Choose a disaster recovery pattern, such as backup and restore, warm standby, or active-active, for stated recovery objectives. |

Common traps: redeploying or scaling before diagnosis (D8); an active-active design where the recovery objectives allow a cheaper pattern (D2).

Documentation: [Cloud Build](https://docs.cloud.google.com/build/docs/overview), [Cloud Deploy](https://docs.cloud.google.com/deploy/docs/overview), [Service Catalog](https://docs.cloud.google.com/service-catalog/docs), [disaster recovery planning guide](https://docs.cloud.google.com/architecture/dr-scenarios-planning-guide).

## 4.2 Analyzing and Defining Business Processes

| ID | Consideration | Decisions to test |
|---|---|---|
| 4.2.a | Stakeholder management | Choose how to gain agreement from the stakeholders a decision affects. |
| 4.2.b | Change management | Introduce a change with communication, training, and a reversible rollout. |
| 4.2.c | Team assessment and skills readiness | Choose training or managed services according to the team's current skills. |
| 4.2.d | Decision-making processes | Choose a decision process, such as architecture decision records or a pilot, for a contested choice. |
| 4.2.e | Customer success management | Choose measures and practices that show customers receive the promised value. |
| 4.2.f | Cost optimization and resource optimization | Choose between capital and operating expense models, committed use discounts, and rightsizing. |
| 4.2.g | Business continuity | Keep business processes running during disruptions. |

Common traps: a technical fix for a skills or process problem (D6); a long commitment for an uncertain workload (D2).

Documentation: [Well-Architected Framework cost optimization pillar](https://docs.cloud.google.com/architecture/framework/cost-optimization), [committed use discounts](https://docs.cloud.google.com/docs/cuds), [Well-Architected Framework operational excellence pillar](https://docs.cloud.google.com/architecture/framework/operational-excellence).

## 5.1 Advising Development and Operation Teams to Ensure the Successful Deployment of the Solution

| ID | Consideration | Decisions to test |
|---|---|---|
| 5.1.a | Application and infrastructure deployment | Choose rollout strategies, such as canary or blue-green, and deployment tooling. |
| 5.1.b | API management best practices | Use Apigee for API security, quotas, versioning, and analytics. |
| 5.1.c | Testing frameworks | Choose load, unit, and integration testing for a stated risk. |
| 5.1.d | Data and system migration and management tooling | Choose Database Migration Service, Storage Transfer Service, or Migrate to Virtual Machines. |
| 5.1.e | Gemini Cloud Assist | Not testable as a decisive feature while Gemini Cloud Assist is a Preview offering. |

Common traps: exposing backend services directly where an API gateway enforces policy (D5); an offline transfer for data that fits the network window (D2).

Documentation: [Apigee](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee), [Cloud Deploy](https://docs.cloud.google.com/deploy/docs/overview), [Database Migration Service](https://docs.cloud.google.com/database-migration/docs/overview), [Storage Transfer Service](https://docs.cloud.google.com/storage-transfer/docs/overview).

## 5.2 Interacting with Google Cloud Programmatically

| ID | Consideration | Decisions to test |
|---|---|---|
| 5.2.a | Cloud Shell Editor, Cloud Code, and Cloud Shell Terminal | Choose a development environment for a team's tools and access. |
| 5.2.b | Google Cloud SDKs | Choose `gcloud`, `gcloud storage`, or `bq` for a scripted task. The gsutil tool is legacy and must not be decisive. |
| 5.2.c | Cloud Emulators | Use local emulators for Bigtable, Spanner, Pub/Sub, or Firestore to test without cloud resources. Test the emulator's purpose and documented limits, not command syntax; several emulator commands are in the `gcloud beta` command group. |
| 5.2.d | Infrastructure as code | Use Terraform or Infrastructure Manager for repeatable environments. Deployment Manager reached its end of support and must not be decisive. |
| 5.2.e | Accessing Google API best practices | Authenticate with Application Default Credentials and attached service accounts, and handle quotas with retries and backoff. |
| 5.2.f | Google API client libraries | Prefer client libraries over raw REST calls. |

Common traps: service account key files in code (D5); manual console changes that cannot be reproduced (D3).

Documentation: [Cloud Shell Editor](https://docs.cloud.google.com/shell/docs/editor-overview), [Cloud Code](https://docs.cloud.google.com/code/docs), [Bigtable emulator](https://docs.cloud.google.com/bigtable/docs/emulator), [Pub/Sub emulator](https://docs.cloud.google.com/pubsub/docs/emulator), [Spanner emulator](https://docs.cloud.google.com/spanner/docs/emulator), [Firestore emulator](https://docs.cloud.google.com/firestore/native/docs/emulator), [Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform/terraform-overview), [Infrastructure Manager](https://docs.cloud.google.com/infrastructure-manager/docs/overview), [client libraries](https://docs.cloud.google.com/apis/docs/client-libraries-explained).

## 6.1 to 6.6 Ensuring Solution and Operations Excellence

| ID | Consideration | Decisions to test |
|---|---|---|
| 6.1.a | Understanding the principles and recommendations of the operational excellence pillar of the Google Cloud Well-Architected Framework | Apply the pillar's recommendations, such as automation, incident management, and continuous improvement. |
| 6.2.a | Monitoring and logging | Choose Cloud Monitoring, Cloud Logging, log sinks, and Google Cloud Managed Service for Prometheus. |
| 6.2.b | Profiling and benchmarking | Use Cloud Profiler and benchmarks to find performance bottlenecks. |
| 6.2.c | Alerting strategies | Alert on symptoms tied to service level objectives and route alerts to responders. |
| 6.3.a | Deployment and release management | Choose release strategies and rollback paths. |
| 6.4.a | Assisting with the support of deployed solutions | Choose support practices, escalation, and runbooks. |
| 6.5.a | Evaluating quality control measures | Choose quality gates and measures for releases. |
| 6.6.a | Ensuring the reliability of solutions in production | Choose chaos engineering, penetration testing, or load testing for a reliability risk. |

Common traps: alerting on every cause instead of on user-facing symptoms (D6); load testing in production without safeguards (D5).

Documentation: [operational excellence pillar](https://docs.cloud.google.com/architecture/framework/operational-excellence), [Google Cloud Observability](https://docs.cloud.google.com/stackdriver/docs), [Cloud Profiler](https://docs.cloud.google.com/profiler/docs/about-profiler), [Cloud Deploy](https://docs.cloud.google.com/deploy/docs/overview).
