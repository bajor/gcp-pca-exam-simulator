---
type: Context
title: Current product names
description: The product names that practice questions must use after the 2026 Agent Platform, security, and data-stack renames, the former names they replace, and products that must not be decisive.
status: Accepted
timestamp: 2026-10-01T00:00:00Z
---

# Current Product Names

The certification page states that the exam "was updated to reflect recent branding changes" and refers candidates to the exam guide for the names used on the exam [1]. The current guide uses the Gemini Enterprise Agent Platform names that Google announced on April 22, 2026 as the evolution of Vertex AI, where the launch edition of the guide version 6.1 used Vertex AI [2] [3] [32]. Questions in this repository must use the current names.

## Naming Rules

1. Use the name the exam guide uses when the guide names the product, because the certification page says the exam uses the guide's names. A name that the current guide uses is not a former name, even where the documentation has moved on; the tables show both names, and feedback may add the documentation name.
2. Otherwise, use the name of the product's current documentation title or Google's name-change page.
3. Use the names exactly as the tables list them. Agent Platform products read either "Agent Platform <product>" or "<product> on Agent Platform"; the long form with "Gemini Enterprise Agent Platform" is also correct.
4. Never use a former name in a prompt, choice, or feedback. Former names may appear only in evidence titles when Google has not yet renamed that documentation page, and in API, role, or command names that Google kept.
5. Cite the final documentation URL after redirects. Many former URLs redirect to a renamed product's page, and some return HTTP 404.

## AI Products

Sources: the Agent Platform name-change page [4], the exam guide [2], and the documentation titles listed.

| Former name | Name to use in questions | Note |
|---|---|---|
| Vertex AI | Agent Platform (Gemini Enterprise Agent Platform) | The guide writes "Gemini Enterprise Agent Platform" in objective 2.4. |
| Vertex AI Agent Builder | Agent Builder, the guide's name in objective 1.3 | Its former documentation URL redirects to the Agent Platform overview [5], and the Agent Search documentation lists Agent Builder among its former names [6]. No current page describes Agent Builder itself, so a question that uses the name must make a specific current product decisive, such as Agent Search or Agent Runtime, and cite that product's page. |
| Vertex AI Pipelines | Agent Platform Pipelines | Named in the guide. |
| Vertex AI Model Garden | Model Garden | Named in the guide. |
| Vertex AI Search | Agent Search | The documentation states that the product is being renamed [6]. |
| Vertex AI Search for commerce, Retail API | AI Commerce Search | The documentation title [7] reads "AI Commerce Search in Gemini Enterprise for Customer Experience", and the name-change page [4] writes "on" instead of "in". The Cymbal Retail case study calls the capability "Discovery AI". |
| Vertex AI Agent Engine | Agent Runtime | |
| Vertex AI Workbench, Colab Enterprise | Agent Platform Workbench, Colab Enterprise | |
| NotebookLM Enterprise | NotebookLM, the guide's name in objective 2.5 | The documentation title is Gemini Notebook Enterprise, and IAM roles keep the NotebookLM name [8]. |

Gemini, Gemini Enterprise, AI Hypercomputer, Model Armor, Document AI, the Cloud Vision API, Cloud Translation, Speech-to-Text, Text-to-Speech, and Dialogflow CX keep their names.

## Security and Identity Products

| Former name | Name to use in questions | Source |
|---|---|---|
| BeyondCorp Enterprise | Chrome Enterprise Premium | Named in the guide; the former documentation URL redirects [9] |
| Cloud Data Loss Prevention (Cloud DLP) | Sensitive Data Protection | Named in the guide; the API keeps the name DLP API [10] |
| Container Analysis | Artifact Analysis | Documentation states the former name [11] |
| VPC firewall rules and firewall policies | Cloud Next Generation Firewall (Cloud NGFW) | Documentation title; "firewall rules" and "hierarchical firewall policies" remain correct terms [12] |

Identity and Access Management (IAM), Identity-Aware Proxy (IAP), Workload Identity Federation, Cloud Key Management Service (Cloud KMS), Secret Manager, VPC Service Controls, Organization Policy, Binary Authorization, Cloud Armor, Cloud IDS, Security Command Center, Assured Workloads, and Cloud Audit Logs keep their names.

## Compute, Containers, and Hybrid Products

| Former name | Name to use in questions | Source |
|---|---|---|
| Anthos, GKE Enterprise | Google Kubernetes Engine (GKE), with fleet management | Google states that the features of GKE Enterprise became part of standard GKE or separate products [13] |
| Anthos clusters on VMware or bare metal | Google Distributed Cloud (software only) | Documentation states the former name [14] |
| Anthos Service Mesh, Traffic Director | Cloud Service Mesh | Documentation states the rename [15] |
| Cloud Functions | Cloud Run functions | Named in the guide |
| OS patch management | VM Manager Patch | The former URL redirects [16] |
| HTTP(S) Load Balancing | Application Load Balancer | Documentation title [17] |

Compute Engine, Spot VMs, Cloud Run, Config Sync, Google Cloud VMware Engine, Migration Center, Migrate to Virtual Machines, Cloud Interconnect, Cross-Cloud Interconnect, Cloud VPN, Network Connectivity Center, Private Service Connect, Shared VPC, and Cloud Load Balancing keep their names.

## Data and Storage Products

| Former name | Name to use in questions | Source |
|---|---|---|
| Cloud Spanner | Spanner | Documentation title [18] |
| Cloud Bigtable | Bigtable | Documentation title [19] |
| Analytics Hub | BigQuery sharing | Documentation states the former name; IAM roles keep the name Analytics Hub [33] |
| Cloud Composer | Managed Service for Apache Airflow | Documentation title [20] |
| Dataproc, Serverless for Apache Spark | Managed Service for Apache Spark | Documentation states the former names [21] |
| Dataplex Universal Catalog | Knowledge Catalog | Renamed on April 10, 2026; API, client library, CLI, and IAM names are unchanged [22] |
| Looker Studio, Google Data Studio | Data Studio | Documentation states the rename [23] |
| Container Registry | Artifact Registry | The former URL redirects [24] |

Cloud Storage, BigQuery, Cloud SQL, AlloyDB for PostgreSQL, Firestore, Memorystore, Filestore, Pub/Sub, Dataflow, Storage Transfer Service, Transfer Appliance, Database Migration Service, and Backup and DR Service keep their names.

## Products That Must Not Be Decisive

A product on this list may appear as context or as a distractor whose feedback states its status, but no correct answer may depend on it.

| Product | Status on 2026-10-01 | Source |
|---|---|---|
| Gemini Cloud Assist | A Preview offering under the Pre-GA Offering Terms, although the guide names it in objectives 1.2 and 5.1 | [25] |
| NotebookLM (Gemini Notebook Enterprise) search-source integration | Public Preview | [8] |
| Video Intelligence API | Deprecated on September 14, 2026, with shutdown on September 14, 2027 | [26] |
| Deployment Manager | End of support on March 31, 2026; use Infrastructure Manager or Terraform | [27] |
| Cloud Source Repositories | Unavailable to new customers since June 17, 2024 | [28] |
| gsutil | A legacy, minimally maintained tool that leaves the Google Cloud CLI installation package after March 2027; use `gcloud storage` | [29] |
| Backup and DR legacy management console | Deprecated on September 30, 2026 | [30] |
| Security Command Center Enterprise tier | Deprecated, with shutdown on May 21, 2027 | [31] |

## Verification

Sources were fetched on 2026-10-01, except [33], which was fetched on 2026-10-02. Re-check this page before authoring each new question set, because Google can rename or retire more products at any time.

# References

[1] GOOGLE CLOUD. **Professional Cloud Architect Certification**. Available at: <https://cloud.google.com/learn/certification/cloud-architect>. Accessed on: 2026-10-01.

[2] GOOGLE CLOUD. **Professional Cloud Architect Certification Exam Guide**. Available at: <https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf>. Accessed on: 2026-10-01.

[3] GOOGLE CLOUD. **v6.1 Professional Cloud Architect Exam Guide**. Available at: <https://services.google.com/fh/files/misc/v6.1_pca_professional_cloud_architect_exam_guide_english.pdf>. Accessed on: 2026-10-01.

[4] GOOGLE CLOUD. **Gemini Enterprise Agent Platform name changes**. Available at: <https://docs.cloud.google.com/gemini-enterprise-agent-platform/vertex-ai-name-changes>. Accessed on: 2026-10-01.

[5] GOOGLE CLOUD. **Agent Platform overview**. Available at: <https://docs.cloud.google.com/gemini-enterprise-agent-platform/overview>. Accessed on: 2026-10-01.

[6] GOOGLE CLOUD. **Agent Search**. Available at: <https://docs.cloud.google.com/generative-ai-app-builder/docs>. Accessed on: 2026-10-01.

[7] GOOGLE CLOUD. **Implement AI Commerce Search**. Available at: <https://docs.cloud.google.com/retail/docs/overview>. Accessed on: 2026-10-01.

[8] GOOGLE CLOUD. **What is Gemini Notebook Enterprise?**. Available at: <https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/overview>. Accessed on: 2026-10-01.

[9] GOOGLE CLOUD. **Chrome Enterprise Premium overview**. Available at: <https://docs.cloud.google.com/chrome-enterprise-premium/docs/overview>. Accessed on: 2026-10-01.

[10] GOOGLE CLOUD. **Sensitive Data Protection overview**. Available at: <https://docs.cloud.google.com/sensitive-data-protection/docs/sensitive-data-protection-overview>. Accessed on: 2026-10-01.

[11] GOOGLE CLOUD. **Artifact Analysis overview**. Available at: <https://docs.cloud.google.com/artifact-analysis/docs/artifact-analysis>. Accessed on: 2026-10-01.

[12] GOOGLE CLOUD. **Cloud NGFW overview**. Available at: <https://docs.cloud.google.com/firewall/docs/about-firewalls>. Accessed on: 2026-10-01.

[13] GOOGLE CLOUD. **GKE Enterprise release notes**. Available at: <https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/release-notes>. Accessed on: 2026-10-01.

[14] GOOGLE CLOUD. **Google Distributed Cloud (software only) for VMware overview**. Available at: <https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview>. Accessed on: 2026-10-01.

[15] GOOGLE CLOUD. **Cloud Service Mesh overview**. Available at: <https://docs.cloud.google.com/service-mesh/docs/overview>. Accessed on: 2026-10-01.

[16] GOOGLE CLOUD. **About Patch, VM Manager**. Available at: <https://docs.cloud.google.com/compute/vm-manager/docs/patch>. Accessed on: 2026-10-01.

[17] GOOGLE CLOUD. **Application Load Balancer overview**. Available at: <https://docs.cloud.google.com/load-balancing/docs/application-load-balancer>. Accessed on: 2026-10-01.

[18] GOOGLE CLOUD. **Spanner documentation**. Available at: <https://docs.cloud.google.com/spanner/docs>. Accessed on: 2026-10-01.

[19] GOOGLE CLOUD. **Bigtable overview**. Available at: <https://docs.cloud.google.com/bigtable/docs/overview>. Accessed on: 2026-10-01.

[20] GOOGLE CLOUD. **Managed Airflow overview**. Available at: <https://docs.cloud.google.com/composer/docs/composer-3/composer-overview>. Accessed on: 2026-10-01.

[21] GOOGLE CLOUD. **Managed Service for Apache Spark on clusters overview**. Available at: <https://docs.cloud.google.com/managed-spark/docs/concepts/clusters-overview>. Accessed on: 2026-10-01.

[22] GOOGLE CLOUD. **Knowledge Catalog overview**. Available at: <https://docs.cloud.google.com/knowledge-catalog/docs/introduction>. Accessed on: 2026-10-01.

[23] GOOGLE CLOUD. **Data Studio documentation**. Available at: <https://docs.cloud.google.com/data-studio>. Accessed on: 2026-10-01.

[24] GOOGLE CLOUD. **Artifact Registry overview**. Available at: <https://docs.cloud.google.com/artifact-registry/docs/overview>. Accessed on: 2026-10-01.

[25] GOOGLE CLOUD. **Gemini Cloud Assist overview**. Available at: <https://docs.cloud.google.com/cloud-assist/overview>. Accessed on: 2026-10-01.

[26] GOOGLE CLOUD. **Features, Video Intelligence API**. Available at: <https://docs.cloud.google.com/video-intelligence/docs/features>. Accessed on: 2026-10-01.

[27] GOOGLE CLOUD. **Deployment Manager deprecation**. Available at: <https://docs.cloud.google.com/deployment-manager/docs/deprecations>. Accessed on: 2026-10-01.

[28] GOOGLE CLOUD. **Cloud Source Repositories release notes**. Available at: <https://docs.cloud.google.com/source-repositories/docs/release-notes>. Accessed on: 2026-10-01.

[29] GOOGLE CLOUD. **gsutil tool**. Available at: <https://docs.cloud.google.com/storage/docs/gsutil>. Accessed on: 2026-10-01.

[30] GOOGLE CLOUD. **Backup and DR overview**. Available at: <https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr>. Accessed on: 2026-10-01.

[31] GOOGLE CLOUD. **Security Command Center overview**. Available at: <https://docs.cloud.google.com/security-command-center/docs/security-command-center-overview>. Accessed on: 2026-10-01.

[32] GOOGLE CLOUD BLOG. **Introducing Gemini Enterprise Agent Platform, powering the next wave of agents**. Published 2026-04-22. Available at: <https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform>. Accessed on: 2026-10-01.

[33] GOOGLE CLOUD. **Introduction to BigQuery sharing**. Available at: <https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction>. Accessed on: 2026-10-02.
