---
type: Research
title: Official sample question patterns
description: Structural patterns in Google's 19 official PCA sample questions, described without reproducing them, and their implications for original questions.
status: complete
tags: [exam, questions, style]
timestamp: 2026-10-01T00:00:00Z
---

# Official Sample Question Patterns

## Method

The research analyzed the 19 assessment items of Google's official Professional Cloud Architect sample form [1] on 2026-10-01. It counted stem structure, constraint phrases, option construction, case-study use, product names, and topic coverage. It does not store, quote, or paraphrase any sample question, and it does not state any answer key; Google's form does not publish the keys, and inferring them would add unsupported claims. Word counts come from [research 0001](/research/0001-exam-format-and-blueprint.md). Topic mappings to the exam guide [2] are this project's classification.

In this record, a "stem" is the question text before the options, a "constraint" is a stated requirement or restriction that rules options in or out, and a "distractor" is an incorrect option. A "near-miss pair" is two options of one item that share a run of identical words and differ in one component.

## Findings

Documented owner fact: Sixteen items are single-choice with four options, and three are multiple-select with five options that end with "(Choose two)". One item has an empty stem in the published form. Measurable stems have 28 to 109 words (median 59), options 4 to 34 words (median 14), and items 58 to 206 words (median 116.5). [COI: Google] [1]

Documented owner fact: Ten items are preceded by the instruction to refer to a named case study, with a link to the case-study document. The linked case studies are EHR Healthcare (four items), Mountkirk Games (four), Helicopter Racing League (one), and TerramEarth (one). Only EHR Healthcare remains in the current guide. [COI: Google] [1] [2]

Observation: Eleven of the 18 measurable stems end with "What should you do?". The others ask which solution to design, which two steps to take, how to configure a network with minimal steps, where to store credentials, which roles to grant while following Google-recommended practices, or what to change as soon as possible and cost-effectively. All stems address the candidate as "you", and two assign a role other than architect, such as a compliance officer.

Observation: Eight of the nine measurable case-study stems name the case-study company; the ninth refers only to the company's product. Six of the nine state every decisive fact in the stem, such as a residency requirement, an attack pattern, or a single sign-on setup, so they can be answered from their own text. The other three tell the candidate to weigh the case study's business or technical requirements, and one of those states no constraint besides its goal, so it can only be answered with the case study.

Observation: Sixteen of the 18 measurable stems state one to three explicit constraints. The other two state only a goal: one relies on the case study's requirements, and one asks for a diagnosis. The constraint categories occur as follows, counting each item once per category; the assignment of items to categories is this project's classification:

| Constraint category | Items | Typical wording pattern |
|---|---|---|
| Security, access, or data protection | 8 of 18 | prevent an attack, keep data in a region, store secrets securely, restrict access |
| Compliance or privacy | 3 of 18 | keep data in a region, anonymize, delete personal data after a period |
| Cost | 3 of 18 | minimal cost, cost-effective, showing costs to another team |
| Reliability, recovery, or resilience | 3 of 18 | disaster recovery copy, inconsistent connectivity, service level objectives |
| Effort, speed, or simplicity | 3 of 18 | minimal steps, low risk, as soon as possible |
| Performance or latency | 2 of 18 | improve latency, better performance |
| Google-recommended practice | 2 of 18 | follow Google best practices or recommended practices |
| Compatibility | 1 of 18 | compatible with the on-premises network |
| Operations metrics | 1 of 18 | provide operational metrics |

Observation: Options are mixed. In six of the 19 items, at least half of the options have fewer than 9 words and name a product, a connection type, a storage location, or a pair of roles. In the other thirteen, most options are complete imperative actions, such as deploying a load balancer with a named protection feature. Four items contain a near-miss pair that shares a run of 9 or more identical words, and seven contain one that shares 7 or more. The pairs differ in one decisive component, such as the protection feature, the IP plan, or the control that permits traffic.

Observation: Within an item, the options contrast a few recurring alternatives: a feature that meets the stated threat against a weaker control of the same family, a managed service against custom infrastructure, a recommended practice against an insecure shortcut, a least-privilege grant against a broad role, and a durable design against a manual workaround. This record deliberately does not tie these contrasts to individual items or options, because doing so would reveal answer keys.

Observation: The samples use several product names that Google has since replaced, such as Cloud Data Loss Prevention, Google Data Studio, Cloud Bigtable, Apigee Edge, and BeyondCorp, and they name an older machine family, N1. The form therefore predates the branding update of the current exam. [1] [3]

Observation, project classification: By primary topic, the items cover security controls (six items: edge protection, data perimeters, identity-aware access, secrets, and roles), network design and hybrid connectivity (three), compliance and personal data (two), and one item each on reliability targets, container platform practices, content delivery, device data ingestion, archival with analytics, load-balancer health checks, development-environment cost, and database performance. No item tests generative AI, although the current guide adds AI considerations to sections 1, 2, and 3 and three of the four current case studies, Altostrat Media, Cymbal Retail, and KnightMotives Automotive, state AI requirements. [2]

## Analysis

The samples show a consistent construction: a concrete current state, usually one to three constraints, and four options of which at least one pair often differs in a single decisive component. Case-study items mostly restate the decisive fact and use the case study for context, which matches a training provider's statement that "almost all case study questions can be answered without reading the case studies at all" [4]. The samples are shorter and less often built from near-miss pairs than the Professional Machine Learning Engineer samples, and their topic mix predates the generative AI content of the current guide, so original sets must follow the guide's weights and current products rather than the samples' mix.

## Recommendations

- Build every stem from organization and goal, current state, problem or change, two or three explicit constraints, and the ask.
- Use "What should you do?" as the default ask; also use "Which solution should you design?", "What should you do first?", and "Choose two." stems where the scenario needs them.
- Write options as complete imperative actions, and make a large share of questions contain an option pair that shares a skeleton and differs in one decisive component.
- In case-study questions, name the company, restate every decisive fact the answer depends on, and use the case study for context, so that the answer stays deterministic.
- Build each distractor from a named mechanism, make it fail at least one stated requirement, and name each failure in its feedback.
- Take topics from the guide weights and the current case studies, including generative AI, not from the sample mix.
- Never copy, paraphrase, or re-skin a sample scenario, and never publish inferred sample answer keys.

# References

[1] GOOGLE CLOUD. **Professional Cloud Architect Sample Questions**. Available at: <https://docs.google.com/forms/d/e/1FAIpQLSf54f7FbtSJcXUY6-DUHfBG31jZ3pujgb8-a5io_9biJsNpqg/viewform>. Accessed on: 2026-10-01.

[2] GOOGLE CLOUD. **Professional Cloud Architect Certification Exam Guide**. Available at: <https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf>. Accessed on: 2026-10-01.

[3] GOOGLE CLOUD. **Professional Cloud Architect Certification**. Available at: <https://cloud.google.com/learn/certification/cloud-architect>. Accessed on: 2026-10-01.

[4] GCP STUDY HUB. **Guide to the new Professional Cloud Architect exam (released October 30th 2025)**. Published 2025-11-06. Available at: <https://gcpstudyhub.com/blog/guide-to-the-new-professional-cloud-architect-exam-released-october-30th-2025>. Accessed on: 2026-10-01.
