---
type: Guide
title: Question style guide
description: How to write realistic, hard, original PCA practice questions, with length targets, constraint wording, case-study rules, distractor mechanisms, difficulty levers, and an annotated calibration example.
status: Accepted
tags: [questions, authoring]
timestamp: 2026-10-01T00:00:00Z
---

# Question Style Guide

## Scope and Precedence

This guide applies to every question under `src/data/questionSets/practice<number>/`. It turns [research 0002](/research/0002-official-sample-question-patterns.md) and [research 0003](/research/0003-candidate-reported-question-types.md) into writing rules.

Two kinds of rules apply:

- **Floors and blueprint rules** are enforced by structural validation in `src/domain/questions.ts`: a prompt of at least 59 words, at least 9 words per choice, at least 117 words per question, and the section and case-study counts. A question or set that breaks one cannot be registered.
- **Targets** are defined in this guide and checked by the independent reviewer. A set that misses a target is rejected unless the review document explains why the exception is acceptable.

Terms: the **stem** is the question text before the options (the `prompt` field). A **constraint** is a stated requirement that rules options in or out. A **distractor** is an incorrect option. The **reading load** is the number of words in the stem plus all options.

## Stem Anatomy

Write every stem in this order:

1. **Organization and goal.** One or two sentences about who needs what business outcome.
2. **Current state.** Two to four sentences about what already runs, where data lives, the team's skills, and existing commitments such as licenses or contracts.
3. **Problem or change.** One or two sentences about a new requirement, an incident, a failure, growth, or a migration.
4. **Constraints.** Two or three explicit constraints from the vocabulary below. At least one constraint must eliminate the option that looks most obvious.
5. **Ask.** "What should you do?" by default. Use "What should you do first?" for sequencing, "Which solution should you design?" for designs, and add "Choose two." to multiple-select stems.

Address the candidate as "you", the cloud architect responsible for the outcome. Use present tense for the current state and past tense for incidents.

## Length Targets

| Element | Floor, enforced in code | Target, checked in review |
|---|---|---|
| Stem | 59 words | 65 to 120 words |
| Each option | 9 words | 10 to 35 words |
| Reading load per question | 117 words | 130 to 240 words |
| Median reading load of a set | None | At least 150 words |
| Longest option compared with shortest | None | At most twice as long |

The official samples have a median reading load of 116.5 words, and a candidate who took the current exam finished with 20 minutes left. The set median target of 150 words therefore sits above the samples, in line with the candidate's report that practice questions were shorter than the real exam. A set at the targets gives 60 questions of about 9,000 words plus two case studies of 447 to 769 words each for 120 minutes.

## Constraint Vocabulary

Use these phrases, or close variants, so the decisive property is unambiguous.

| Constraint wording | Rewards | Typically eliminates |
|---|---|---|
| minimize operational overhead or management effort | Managed and serverless services, such as Cloud Run, GKE Autopilot, Cloud SQL, and AlloyDB | Self-managed VMs, clusters, or scripts where a managed capability exists |
| minimize cost, most cost-effective | Spot VMs for fault-tolerant work, committed use discounts for steady use, autoscaling, storage classes and lifecycle rules, rightsizing | Always-on capacity for spiky load, premium tiers without a stated need |
| highly available, survive a zone or region failure, a stated availability percentage | Regional and multi-zonal resources, managed instance groups across zones, regional or multi-regional databases, failover | Single-zone resources, manual failover |
| low latency for users in several regions | Global external Application Load Balancer, Cloud CDN, multi-regional data | One distant region, cross-region round trips |
| securely, least privilege | Predefined roles, dedicated service accounts, IAM conditions, Workload Identity Federation, Identity-Aware Proxy | Basic roles, service account keys, public IP addresses |
| keep data in a country or region, data sovereignty | Resource location organization policies, Assured Workloads, regional resources | Default multi-regional or global placement |
| prevent data exfiltration | VPC Service Controls perimeters | IAM changes alone |
| no downtime, without affecting users | Rolling, blue-green, or canary releases, traffic splitting | In-place replacement, switching all traffic at once |
| as quickly as possible, minimal changes to the application | Rehosting with Migrate to Virtual Machines, managed equivalents of existing engines | Refactoring before moving |
| reproducible, auditable, consistent environments | Terraform, Infrastructure Manager, Cloud Build, Cloud Deploy, Config Sync | Manual console changes |
| follow Google-recommended practices | The documented recommended practice | A working but discouraged shortcut |
| meet an audit or regulation | Cloud Audit Logs retention, CMEK, Assured Workloads, Sensitive Data Protection | Controls that do not produce evidence or do not cover the stated data |

## Option Rules

1. Write each option as a complete imperative action, not a product name. Multi-step options are allowed and may be numbered.
2. Every option must be technically possible on Google Cloud. A distractor is wrong because it fails a stated constraint, never because the feature does not exist.
3. Keep options parallel in grammar, detail, and length. Among single-choice questions, the correct option may be strictly longer than every other option in at most 18 questions of a set.
4. In at least 24 of 60 questions, give two options the same skeleton that differ in one decisive component. This is a near-miss pair. Research 0002 found such pairs in 7 of 19 official samples.
5. Do not use "all of the above", "none of the above", negative stems such as "Which is NOT", joke options, or absolute words such as "always" and "never" as clues.
6. Balance the answer key. Among single-choice questions, each letter from `a` to `d` is correct in 11 to 17 questions of a set.
7. Use 4 to 8 choose-two questions per set. Both correct options must be independently required by the stem, and each of the three distractors must fail a stated constraint.

## Case-Study Questions

Each set uses two of the four case studies and 12 to 18 case-study questions, as structural validation enforces. The application shows the case study next to the question and adds the line "For this question, refer to the <name> case study.", so the stem does not repeat that line.

1. Name the company in the stem and test a requirement or fact stated in its case study.
2. Restate every decisive fact in the stem in your own words, such as a required availability level or the systems that stay on-premises. The answer must not depend on a detail that only the case study states.
3. Cite the case-study document as evidence for the restated facts. Structural validation requires that a case-study question cites its own case study.
4. Never copy sentences from the case study, and never contradict it. Add realistic details that the case study does not state only when they cannot conflict with it.
5. Distribute the questions of each case study across at least three sections.

## Distractor Mechanisms

Build each distractor from one main mechanism and make it fail at least one named requirement. The choice feedback must name every requirement it fails.

| Code | Mechanism | Fails |
|---|---|---|
| D1 | Self-managed: runs on Compute Engine, GKE, or custom code what a managed capability provides | Operational overhead |
| D2 | Over-engineering or over-provisioning: adds unrequested components, capacity, regions, or data copies | Cost, effort, or scope |
| D3 | Unsuitable tool: a service that cannot meet a stated requirement because it is too limited or does not support the workload | Capability, scale, consistency, or availability |
| D4 | Wrong scope or placement: zonal where regional is needed, a project where the organization is needed, or the wrong location | Availability, governance, or residency |
| D5 | Restriction violation: broad roles, long-lived keys, public exposure, or data moved outside an allowed boundary | Security or compliance |
| D6 | Symptom or wrong signal: acts on a symptom or measures something that does not answer the question | Diagnosis or measurement |
| D7 | Right product, wrong feature: the correct service with a feature or setting that does not do the job | Specific documented behavior |
| D8 | Wrong sequence: a later step offered as the first step, or steps in an unsafe order | The "first" or ordering requirement |

## Difficulty Levers

Each question uses at least two levers.

| Code | Lever | Example use |
|---|---|---|
| L1 | Constraint tension | High availability and minimal cost pull in different directions; one option balances both. |
| L2 | Near-miss pair | Two options share every step except the scope of an access condition. |
| L3 | Non-decisive realistic detail | Team size, request rate, or data volume that does not change the answer and does not create ambiguity. |
| L4 | Feature-level knowledge | The answer depends on a documented feature, such as an attribute condition or a lifecycle rule. |
| L5 | Sophisticated overkill | A technically impressive option, such as an active-active multi-region design, that exceeds the need. |
| L6 | Scope word | "first", "most cost-effective", or "least operational overhead" decides between two valid actions. |
| L7 | One wrong step | A multi-step option in which only one step breaks a constraint. |

Avoid artificial difficulty. Do not use trick wording, undocumented defaults, Preview features, quota numbers, command flags, or facts that change often.

## Content Rules

- Use the names in [current product names](/context/product-names.md). Never use a former name such as Vertex AI, Anthos, Cloud Functions, or BeyondCorp Enterprise in a stem, option, or feedback.
- Use only generally available (GA) features. A Preview or deprecation notice disqualifies the feature it names, not other features on the same page. The product-name reference lists products that must not be decisive, such as Gemini Cloud Assist, the Video Intelligence API, and Deployment Manager.
- Make AI the decisive topic in 6 to 12 questions of each set.
- In each set, include at least 5 troubleshooting (T4), 5 reliability and recovery (T6), 6 security and identity (T7), 4 cost optimization (T9), 3 migration planning (T3), and 4 AI solution design (T11) questions, as defined in research 0003.
- Do not include multi-line code or configuration. Inline names such as `gcloud storage` or `roles/run.developer` in running text are allowed.
- Never copy, paraphrase, or re-skin an official sample question, and never reuse a scenario from another practice set. A scenario is reused when the organization type, the problem, and the decisive feature all match.

## Feedback Rules

Each choice's feedback starts with the verdict "Correct." or "Incorrect." followed by one to three sentences of explanation. The correct choice's feedback names every constraint it satisfies. Each distractor's feedback names the constraint it fails and the documented reason. Every sentence must be supported by the cited evidence, and each choice cites at least one evidence item.

## Calibration Example

This original question shows the targets in practice. It is not part of any practice set.

**Stem (99 words):** A logistics company deploys its order-tracking service to Cloud Run from GitHub Actions workflows in its GitHub organization, which hosts more than 200 repositories. Each deployment workflow authenticates with a service account key that is stored as a repository secret and has not been rotated in two years. A security review now prohibits long-lived credentials for deployments and requires that only workflows running on the main branch of the deployment repository can deploy to production. The team runs about 40 deployments per day and wants to keep its GitHub Actions workflows without operating new infrastructure. What should you do?

| Choice | Text | Words | Role |
|---|---|---|---|
| a | Configure Workload Identity Federation with a GitHub provider whose attribute condition accepts only tokens from the main branch of the deployment repository, and let identities from the pool impersonate the deployment service account. | 33 | Correct |
| b | Keep the service account key in the repository secret, and run a scheduled Cloud Run job every 30 days that creates a new key and updates the secret through the GitHub API. | 32 | D5: the key remains a long-lived credential, and the job adds infrastructure to operate |
| c | Configure Workload Identity Federation with a GitHub provider whose attribute condition accepts only tokens from the company's GitHub organization, and let identities from the pool impersonate the deployment service account. | 30 | D7: removes the key, but the pool then accepts every workflow on every branch of every repository in the organization, so any of them can deploy |
| d | Move the deployments to Cloud Build triggers that run on the main branch of the deployment repository, grant the deployment role to the Cloud Build service account, and remove the GitHub Actions workflows. | 33 | D2: replaces the workflows that the team wants to keep |

The reading load is 227 words. The stem states three constraints: no long-lived credentials, deployment only from the main branch of one repository, and keeping the existing workflows without new infrastructure. Choices a and c form a near-miss pair (L2): they are identical except for the scope of the attribute condition. The number of repositories and deployments per day are non-decisive details (L3). The correct answer depends on the documented behavior of attribute conditions (L4), and the correct option is not strictly longer than every other option, because choice d has the same length.

Evidence for the feedback:

- [Configure Workload Identity Federation with deployment pipelines](https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines), cited by a and c: GitHub Actions workflows obtain an OIDC token that identifies the workflow and its repository and exchange it for short-lived Google Cloud credentials, which "eliminates the maintenance and security burden associated with service account keys". An attribute condition must restrict tokens to the GitHub organization and can be extended to restrict them to a subset of workflows or branches.
- [Best practices for managing service account keys](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys), cited by b: the best way to mitigate the threats of service account keys is to avoid user-managed keys whenever possible; rotation only reduces the risk of a leaked key.
- [Execute jobs on a schedule](https://docs.cloud.google.com/run/docs/execute/jobs-on-schedule), cited by b: Cloud Run jobs can run on a Cloud Scheduler schedule, so choice b is technically possible.
- [Building repositories from GitHub](https://docs.cloud.google.com/build/docs/automating-builds/github/build-repos-from-github), cited by d: Cloud Build triggers can build from GitHub repositories, so choice d is technically possible.

## Author Checklist

Before handing a section to review, confirm for every question:

- [ ] The stem follows the anatomy and states two or three constraints.
- [ ] The reading load is between 130 and 240 words, and each option has 10 to 35 words.
- [ ] Every distractor uses a named mechanism and fails at least one named constraint, and its feedback names each failure.
- [ ] At least two difficulty levers are present.
- [ ] Product names match the product-name reference, and no decisive feature is Preview or deprecated.
- [ ] A case-study question names the company, restates every decisive fact, and cites its case study.
- [ ] Every feedback sentence is supported by cited Google-owned evidence fetched on `verifiedOn`.
- [ ] The scenario does not resemble an official sample or another set's question.
