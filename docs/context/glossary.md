---
type: Context
title: Project Glossary
description: Canonical definitions for the practice exam domain and project modules.
status: Accepted
timestamp: 2026-10-01T00:00:00Z
---

# Project Glossary

## ADR

Architecture Decision Record. An append-only record of a structural or implementation decision and its rejected alternatives.

## Agent Platform

Short name for Gemini Enterprise Agent Platform, the Google Cloud AI platform formerly named Vertex AI. The current exam guide uses the new names, and Google lists the renamed products on its name-change page, https://docs.cloud.google.com/gemini-enterprise-agent-platform/vertex-ai-name-changes.

## AI

Artificial Intelligence.

## API

Application Programming Interface. A defined interface through which software components communicate.

## Attempt

The local state of one candidate working through one question set, including answers, review flags, position, and deadline. An attempt is compatible with the application only when its schema version, question-set identifier and version, answer identifiers, timestamps, and status pass runtime validation.

## BDR

Behavior Decision Record. An append-only specification of observable behavior and how that behavior is tested.

## Candidate question set

A complete 60-question set listed for structural, source, and independent semantic checks before it can enter the runtime catalog.

## Case study

A Google-published document that describes a fictitious business, its solution concept, existing technical environment, business and technical requirements, and an executive statement. The exam guide version 6.1 names four: Altostrat Media, Cymbal Retail, EHR Healthcare, and KnightMotives Automotive. Each standard exam uses two of them, and 20 to 30% of its questions refer to one, shown on a split screen.

## Case-study question

A question that refers to one of the four case studies through its `caseStudyId`. It must cite its case study's document as evidence, and the exam screen shows that document next to it.

## Choice feedback

The explanation attached to one answer choice. It states why that choice does or does not satisfy the scenario and references the source-evidence identifiers that support the explanation.

## CI

Continuous Integration. The GitHub Actions workflows that run the repository quality gates on pull requests and on pushes to `main`.

## CI/CD

Continuous integration and continuous delivery or deployment. Practices in which code changes are built, tested, and released automatically.

## CIDR

Classless Inter-Domain Routing. The notation, such as `10.0.0.0/16`, that describes an IP address range.

## CLI

Command-line interface, such as the `gcloud` tool.

## CMEK

Customer-managed encryption key. A Cloud KMS key that the customer creates and controls and that a Google Cloud service uses to protect the customer's data, instead of a Google-managed key.

## COI

Conflict of Interest. A source relationship that could influence a claim; project research flags vendor-owned statements with this marker.

## Constraint

A stated requirement or restriction in a question stem, such as minimal operational overhead, high availability, or data residency. Constraints decide which option is correct.

## Coverage matrix

The document `docs/authoring/coverage-matrix.md`, which assigns every guide consideration an identifier such as `2.3.b`, fixes the questions per objective in each set, and assigns case studies to practice exams.

## Difficulty lever

A deliberate technique that makes a question as hard as the real exam, such as constraint tension or a near-miss pair. The style guide defines levers L1 to L7.

## Distractor

An incorrect answer option. In this project every distractor must be technically possible on Google Cloud and must fail at least one stated requirement for a documented reason.

## Distractor mechanism

The way a distractor fails, such as self-managed infrastructure where a managed capability exists, the wrong scope or placement, or a broad role where least privilege is required. The style guide defines mechanisms D1 to D8.

## DR

Disaster recovery. The policies and mechanisms that restore a workload after an outage of a zone, a region, or a data center.

## Draft question set

The partial manifest used while independently mergeable question sections are being authored. A draft may omit sections, but every registered section must already contain its final required question count and pass structural and live-source checks.

## Exam catalog

The compiled list of practice-exam entries shown to the candidate. An available entry contains one complete question set; a coming-soon entry contains metadata only and cannot create an attempt.

## Exam guide

Google's official Professional Cloud Architect certification exam guide for the standard exam, at https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf. It prints no date or version. It revises the launch edition titled "v6.1 Professional Cloud Architect Exam Guide" with Agent Platform product names, new weights, and one objective fewer, and the case studies it links are labeled `v6.1`, so the code identifies the current guide as version `6.1`. Questions follow the current guide, not the launch edition.

## Exam-guide objective

A numbered item under an exam-guide section, such as "2.3 Configuring compute systems". The current guide has 22 objectives.

## Exam-guide section

One of the six weighted parts of the exam guide. The code identifies them as `design` (Designing and planning a cloud solution architecture), `provision` (Managing and provisioning a cloud solution infrastructure), `secure` (Designing for security and compliance), `analyze` (Analyzing and optimizing technical and business processes), `implement` (Managing implementation), and `operate` (Ensuring solution and operations excellence).

## Feasibility check

Rule 4 of the coverage matrix. A set passes when, for every objective, the testable considerations that no registered practice exam uses as a primary topic do not outnumber the questions that the practice exams still to be written will give that objective, so that covering every testable consideration across Practice Exams 1 to 3 stays possible.

## GA

Generally Available. A product or feature without a Preview label. Practice questions make only GA features decisive.

## GKE

Google Kubernetes Engine. Google Cloud's managed Kubernetes service.

## Guide consideration

One bullet point under an exam-guide objective, such as "Compute volatility configuration" under objective 2.3. The current guide has 96 considerations across 22 objectives. Five objectives in section 6 have no bullet points, so the coverage matrix gives each of them one identifier, such as `6.3.a`, for 101 consideration identifiers.

## HSM

Hardware security module. A device that stores and uses cryptographic keys; Cloud KMS offers HSM protection for keys.

## HTTP

Hypertext Transfer Protocol. The web protocol whose status codes, such as 200 or 404, show whether a documentation page was fetched successfully.

## IAM

Identity and Access Management. The Google Cloud system of principals, roles, and permissions.

## IAP

Identity-Aware Proxy. A Google Cloud service that controls access to applications and VMs by identity and context.

## IP

Internet Protocol. IP addresses identify network interfaces in a VPC network or on the internet.

## Largest-remainder method

An apportionment method that gives each section the whole-number part of its exact share of 60 questions and assigns the remaining questions to the largest fractional parts. This project breaks ties in favor of the larger guide weight.

## ML

Machine Learning.

## Multiple-select

A question that states the required number of choices and is correct only when the selected identifier set exactly equals the correct identifier set. This project supports choose-two questions with five choices.

## Near-miss pair

Two options that share the same skeleton and differ in one decisive component, so the candidate must read both to the end. The style guide measures it as two options that share a run of at least 7 identical words, ignoring letter case and punctuation at the start or end of a word.

## OIDC

OpenID Connect. An identity protocol built on OAuth 2.0 in which an identity provider issues signed tokens that describe a user or workload. Workload Identity Federation accepts OIDC tokens from external providers, such as a CI system.

## PCA

Professional Cloud Architect. The Google Cloud certification this simulator prepares for.

## PDE

Professional Data Engineer. The Google Cloud certification covered by the first simulator in this family.

## PDF

Portable Document Format. The file format of the official exam guide and case studies.

## Pearson VUE

The testing provider that delivers the real exam at test centers; the exam can also be taken online-proctored.

## Plan table

The table in a practice exam's issue record that lists, for each planned question, its kind (single choice or choose-two), consideration, question type, whether AI is decisive, case study, decisive feature, correct letters, distractor mechanisms, and difficulty levers.

## PMLE

Professional Machine Learning Engineer. The Google Cloud certification covered by the simulator from which this application was ported.

## PRD

Product Requirements Document. An append-only specification of the user problem, product outcomes, requirements, and acceptance criteria.

## Preview

A pre-GA launch stage whose offerings Google provides under its Pre-GA Offering Terms. A Preview feature is never the decisive feature of a practice question.

## Primary topic

The guide consideration that a question's `objective` field names. The question's correct answer depends on a decision from that consideration, and the coverage rules count questions by primary topic.

## Question bank

All question sets present in the repository, including candidates that are not available in the runtime catalog.

## Question section

All questions assigned to one exam-guide section within a draft question set. A registered section is authored as one typed module and contains exactly 15 `design`, 11 `provision`, 11 `secure`, 9 `analyze`, 7 `implement`, or 7 `operate` questions.

## Question set

An immutable, versioned collection of exactly 60 original practice questions with a declared exam-guide version. The exam catalog can offer multiple available question sets.

## Question type

The primary task a question asks the candidate to perform, such as troubleshooting or service selection. Research 0003 defines types T1 to T12.

## Question-set report

The output of `npm run question-set-report -- <question-set-id>`: per-question word counts and set-level measurements that authors and reviewers compare with the authoring targets.

## Reading load

The number of words in a question's prompt plus all of its choices. A word is a whitespace-separated token.

## Reading-length floor

A minimum word count enforced by structural validation: 59 words for a prompt, 9 words for each choice, and 117 words of reading load per question.

## Rejection record

The machine-readable JSON block in an indexed rejected review report. It binds rejected question identifiers and reasons to all 60 reviewed identifiers, the exact candidate version and SHA-256 content digest, reviewer, authors, review date, and source-check result.

## Renewal exam

A shorter Professional Cloud Architect exam for certified candidates: 25 questions in one hour about one generative AI case study. This simulator does not reproduce it.

## REST

Representational State Transfer. The style of HTTP API that Google Cloud services expose; client libraries call these APIs for the developer.

## Review record

The independently authored document under `docs/reviews/` that records a successful semantic audit. Its JSON record identifies the exact question-set version and SHA-256 content digest, reviewer, authors, review date, successful source-check command, unique source count, and every accepted question identifier.

## Set-specific question registry

The section, draft, and candidate modules owned by one practice exam under `src/data/questionSets/practice<number>/`. The aggregate registry combines these modules without changing another exam's files.

## SHA-256

A cryptographic hash function. Review records store the SHA-256 digest of a candidate's canonical JSON content so that any later content change invalidates the record.

## SOC 2

System and Organization Controls 2. A third-party audit report, defined by the American Institute of Certified Public Accountants (AICPA), on a service organization's controls for security, availability, processing integrity, confidentiality, or privacy. Google Cloud customers download Google's SOC 2 reports from Compliance Reports Manager; the reports attest to Google's controls, not the customer's own.

## Source evidence

A Google-owned documentation URL, document title, and supported claim used to justify choice feedback. Each question's `verifiedOn` date is the date on which all of its evidence was re-fetched and checked.

## Split screen

The real exam's presentation of a case study next to the question that refers to it.

## Stem

The question text before the answer options, called `prompt` in the code.

## Testable consideration

A guide consideration that a question can make decisive. Considerations that name only a Preview product, such as Gemini Cloud Assist, are not testable.

## UI

User Interface. The visible and interactive controls through which a candidate takes and reviews an attempt.

## URL

Uniform Resource Locator. The web address used for the deployed application or cited documentation.

## VM

Virtual machine, such as a Compute Engine instance.

## VPC

Virtual Private Cloud. A Google Cloud network that connects resources such as VMs, GKE clusters, and private service endpoints.

## VPN

Virtual private network. Cloud VPN connects a peer network to a VPC network through encrypted IPsec tunnels.

## Well-Architected Framework

Google Cloud's guidance for designing and operating workloads, organized in the pillars operational excellence, security, reliability, performance optimization, cost optimization, and sustainability. The exam guide names familiarity with it as a key requirement.
