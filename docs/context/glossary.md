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

## CI

Continuous Integration. The GitHub Actions workflows that run the repository quality gates on pull requests and on pushes to `main`.

## Choice feedback

The explanation attached to one answer choice. It states why that choice does or does not satisfy the scenario and references the source-evidence identifiers that support the explanation.

## COI

Conflict of Interest. A source relationship that could influence a claim; project research flags vendor-owned statements with this marker.

## Draft question set

The partial manifest used while independently mergeable question sections are being authored. A draft may omit sections, but every registered section must already contain its final required question count and pass structural and live-source checks.

## Exam catalog

The compiled list of practice-exam entries shown to the candidate. An available entry contains one complete question set; a coming-soon entry contains metadata only and cannot create an attempt.

## Exam guide

Google's official Professional Cloud Architect certification exam guide for the standard exam. The current guide prints no date or version; the case studies it links are labeled `v6.1`, so the code identifies it as guide version `6.1`.

## Exam-guide objective

A numbered item under an exam-guide section, such as "2.3 Configuring compute systems". The guide version 6.1 has 22 objectives.

## Exam-guide section

One of the six weighted parts of the exam guide. The code identifies them as `design` (Designing and planning a cloud solution architecture), `provision` (Managing and provisioning a cloud solution infrastructure), `secure` (Designing for security and compliance), `analyze` (Analyzing and optimizing technical and business processes), `implement` (Managing implementation), and `operate` (Ensuring solution and operations excellence).

## HTTP

Hypertext Transfer Protocol. The web protocol whose status codes, such as 200 or 404, show whether a documentation page was fetched successfully.

## Largest-remainder method

An apportionment method that gives each section the whole-number part of its exact share of 60 questions and assigns the remaining questions to the largest fractional parts. This project breaks ties in favor of the larger guide weight.

## Multiple-select

A question that states the required number of choices and is correct only when the selected identifier set exactly equals the correct identifier set. This project supports choose-two questions with five choices.

## PCA

Professional Cloud Architect. The Google Cloud certification this simulator prepares for.

## PDE

Professional Data Engineer. The Google Cloud certification covered by the first simulator in this family.

## PDF

Portable Document Format. The file format of the official exam guide and case studies.

## Pearson VUE

The testing provider that delivers the real exam at test centers; the exam can also be taken online-proctored.

## PMLE

Professional Machine Learning Engineer. The Google Cloud certification covered by the simulator from which this application was ported.

## PRD

Product Requirements Document. An append-only specification of the user problem, product outcomes, requirements, and acceptance criteria.

## Question bank

All question sets present in the repository, including candidates that are not available in the runtime catalog.

## Question section

All questions assigned to one exam-guide section within a draft question set. A registered section is authored as one typed module and contains exactly 15 `design`, 11 `provision`, 11 `secure`, 9 `analyze`, 7 `implement`, or 7 `operate` questions.

## Question set

An immutable, versioned collection of exactly 60 original practice questions with a declared exam-guide version. The exam catalog can offer multiple available question sets.

## Reading load

The number of words in a question's prompt plus all of its choices. A word is a whitespace-separated token.

## Reading-length floor

A minimum word count enforced by structural validation: 50 words for a prompt, 10 words for each choice, and 121 words of reading load per question.

## Rejection record

The machine-readable JSON block in an indexed rejected review report. It binds rejected question identifiers and reasons to all 60 reviewed identifiers, the exact candidate version and SHA-256 content digest, reviewer, authors, review date, and source-check result.

## Renewal exam

A shorter Professional Cloud Architect exam for certified candidates: 25 questions in one hour about one generative AI case study. This simulator does not reproduce it.

## Review record

The independently authored document under `docs/reviews/` that records a successful semantic audit. Its JSON record identifies the exact question-set version and SHA-256 content digest, reviewer, authors, review date, successful source-check command, unique source count, and every accepted question identifier.

## SHA-256

A cryptographic hash function. Review records store the SHA-256 digest of a candidate's canonical JSON content so that any later content change invalidates the record.

## Set-specific question registry

The section, draft, and candidate modules owned by one practice exam under `src/data/questionSets/practice<number>/`. The aggregate registry combines these modules without changing another exam's files.

## Source evidence

A Google-owned documentation URL, document title, and supported claim used to justify choice feedback. Each question's `verifiedOn` date is the date on which all of its evidence was re-fetched and checked.

## Split screen

The real exam's presentation of a case study next to the question that refers to it.

## Stem

The question text before the answer options, called `prompt` in the code.

## UI

User Interface. The visible and interactive controls through which a candidate takes and reviews an attempt.

## URL

Uniform Resource Locator. The web address used for the deployed application or cited documentation.

## Well-Architected Framework

Google Cloud's guidance for designing and operating workloads, organized in the pillars operational excellence, security, reliability, performance optimization, cost optimization, and sustainability. The exam guide names familiarity with it as a key requirement.
