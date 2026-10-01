---
type: Research
title: Professional Cloud Architect exam format and blueprint
description: Official format facts, section weights, case-study rules, sample-question measurements, and the resulting 60-question practice blueprint.
status: complete
tags: [exam, sources, blueprint]
timestamp: 2026-10-01T00:00:00Z
---

# Professional Cloud Architect Exam Format and Blueprint

## Method

On 2026-10-01 the research fetched Google's certification page, the standard exam guide PDF and the four case-study PDFs it links (converted to text with `pdftotext`), the launch edition of the guide version 6.1, the renewal exam guide PDF, the official sample-question form, and the certification misconduct policy. The sample form was analyzed for structure and length only; its questions are not stored in this repository. A word is a whitespace-separated token. "Reading load" means the words in a prompt plus all of its choices. Every option in the form begins with a letter label such as "A.", which the counts exclude, because the application renders the letter itself and structural validation counts only the choice text. Case-study counts exclude bullet symbols.

## Findings

Documented owner fact: The certification page describes the standard exam as two hours long with "50-60 multiple choice and multiple select questions", a registration fee of USD 200, English and Japanese languages, and delivery either online-proctored or at a test center found through Pearson VUE. It recommends 3 or more years of industry experience, including 1 or more years designing and managing solutions using Google Cloud. It states that the exam "was updated to reflect recent branding changes" and refers candidates to the exam guide for the product names used on the exam. [COI: Google] [1]

Documented owner fact: The certification page states that each standard exam "includes 2 case studies", that case-study questions "make up 20-30% of the exam", and that candidates "can view the case studies on a split screen during the exam". It refers to the exam guide for the 4 available case studies. [COI: Google] [1]

Documented owner fact: The standard exam guide prints no date or version number. It links four case studies whose file names begin with `v6.1_pca_`: Altostrat Media, Cymbal Retail, EHR Healthcare, and KnightMotives Automotive. It states that some questions "may refer you to a case study that describes a fictitious business and solution concept" and that several of the businesses use generative AI solutions. Each case study has the parts Company Overview, Solution Concept, Existing Technical Environment, Business Requirements, Technical Requirements, and Executive Statement, and has 447 to 769 words including its title and headings. [COI: Google] [2] [3] [4] [5] [6]

Documented owner fact: The guide defines six sections with approximate weights: Designing and planning a cloud solution architecture (25%), Managing and provisioning a cloud solution infrastructure (17.5%), Designing for security and compliance (17.5%), Analyzing and optimizing technical and business processes (15%), Managing implementation (12.5%), and Ensuring solution and operations excellence (12.5%). The weights sum to 100%. The six sections contain 22 objectives. The guide names familiarity with the Google Cloud Well-Architected Framework as a key requirement whose pillars are "woven throughout the exam objectives". [COI: Google] [2]

Documented owner fact: Google also publishes the launch edition of the guide, titled "v6.1 Professional Cloud Architect Exam Guide", which tells candidates to use it for the English exam "on or after October 30". It names Vertex AI where the current guide names Agent Platform, weights the sections about 25%, 18%, 19%, 15%, 11%, and 12%, and has 23 objectives: an extra objective 4.3 on reliability procedures, such as chaos engineering and penetration testing, overlaps objective 6.6, and the current guide drops it. [COI: Google] [11]

Documented owner fact: The renewal exam is a different product: one hour, 25 multiple choice and multiple select questions, and one generative AI case study whose questions make up 90-100% of the exam. [COI: Google] [1] [7]

Documented owner fact: The official sample form contains 19 assessment items. Sixteen are single-choice items with four options, and three are multiple-select items with five options that end with "(Choose two)". The second item has an empty prompt in the published form, so 18 items can be measured. Ten items are preceded by an instruction to refer to a case study: EHR Healthcare (4), Mountkirk Games (4), Helicopter Racing League (1), and TerramEarth (1). The form states that the samples "do not represent the range of topics or level of difficulty" of the exam. [COI: Google] [8]

Documented owner policy: Google lists "disseminating exam content by any means", including "reconstruction through memorization", and using "brain-dump material and/or unauthorized publication of exam questions" as misconduct. [COI: Google] [9]

Measurement: The three question sets of the Professional Data Engineer (PDE) simulator had median reading loads of 95.5 to 111.5 words. [10]

Candidate report: After using that simulator, the candidate reported that the real PDE questions were much harder and much longer and that time ran out on the real exam. [candidate-reported] [unverified - single source] [10]

Measurement: Reading length of the official PCA samples, by item kind, compared with the official Professional Machine Learning Engineer (PMLE) samples measured by the PMLE simulator's research [10].

| Source | Items | Prompt words (min / median / max) | Choice words (min / median / max) | Reading load per item (min / median / max) |
|---|---|---|---|---|
| PCA official sample form, all measurable items | 18 | 28 / 59 / 109 | 4 / 14 / 34 | 58 / 116.5 / 206 |
| PCA case-study items | 9 | 28 / 49 / 109 | 7 / 16 / 32 | 82 / 116 / 206 |
| PCA standalone items | 9 | 35 / 66 / 86 | 4 / 10.5 / 34 | 58 / 117 / 178 |
| PMLE official sample form | 8 | 52 / 84.5 / 101 | 14 / 32 / 52 | 166 / 207 / 282 |

Nineteen of the 75 PCA sample options (25%) have fewer than 9 words. Nine of the 18 measurable PCA prompts have fewer than 59 words. Two PCA items reach 166 words, the PMLE simulator's combined floor.

## Contradictions

The sample form refers to Mountkirk Games, Helicopter Racing League, and TerramEarth, which the current guide no longer lists, and it links an older copy of the EHR Healthcare case study whose text matches the current one apart from heading capitalization. The form therefore predates the current guide, and its length distribution only approximates the current exam.

The only document titled "v6.1" is the launch edition, which the current guide revises with new product names and weights and one objective fewer. The simulator follows the current guide and uses 6.1 only as its identifier.

The PCA samples are much shorter than the PMLE samples, while the candidate found real Google professional exams longer than practice. The sample form itself disclaims that it represents the exam's difficulty.

## Analysis

The simulator uses 60 questions, the maximum of the published range, because the candidate ran out of time on a real exam and realism has priority over comfort. Sixty questions in 120 minutes leave 2.0 minutes per question.

The section allocation applies the largest-remainder method to the guide weights. Each section first receives the whole-number part of its exact share, which allocates 58 questions. Four sections tie with a fractional part of 0.5 for the remaining two questions; the tie is broken in favor of the larger guide weight, which gives them to `provision` and `secure`. The launch-edition weights give the same allocation without a tie: their exact shares are 15.0, 10.8, 11.4, 9.0, 6.6, and 7.2, and the two largest fractional parts belong to `provision` and `implement`.

| Section | Identifier | Weight | Exact share of 60 | Allocated questions |
|---|---|---|---|---|
| Designing and planning a cloud solution architecture | `design` | 25% | 15.0 | 15 |
| Managing and provisioning a cloud solution infrastructure | `provision` | 17.5% | 10.5 | 11 |
| Designing for security and compliance | `secure` | 17.5% | 10.5 | 11 |
| Analyzing and optimizing technical and business processes | `analyze` | 15% | 9.0 | 9 |
| Managing implementation | `implement` | 12.5% | 7.5 | 7 |
| Ensuring solution and operations excellence | `operate` | 12.5% | 7.5 | 7 |

Case studies change the reading load of an attempt. Two different case studies add 1,036 to 1,508 words that the candidate reads once and consults on the split screen. Twenty to thirty percent of 60 questions is 12 to 18 case-study questions.

The reading-length floors are derived from the PCA measurements, not copied from the PMLE simulator, whose floors came from the much longer PMLE samples:

- The combined floor of 117 words is the median official sample item (116.5 words), rounded up. No practice question is shorter than a typical official sample, and every practice question is longer than the median questions of the PDE simulator that the candidate found too short.
- The prompt floor of 59 words is the median official prompt. Official case-study prompts are shorter (median 49 words) because they can leave context to the case study. Practice case-study prompts restate their decisive facts so that their answers stay deterministic, so the same floor applies to them.
- The choice floor of 9 words removes the shortest quarter of official options: 19 of the 75 have 4 to 8 words. No practice option is as short as the shortest quarter of official options.

The floors are minimums, not targets. Typical question length is an authoring concern and belongs to the question-authoring guidance.

## Recommendations

These recommendations rely on owner-controlled facts that were authoritative on 2026-10-01; re-check the certification page and guide before authoring each new set.

- Use 60 questions and a 120-minute timer, while stating that Google publishes a range of 50 to 60 questions.
- Allocate 15, 11, 11, 9, 7, and 7 questions to the six guide sections.
- Enforce the 59, 9, and 117-word floors in structural validation.
- Use two of the four guide case studies in every set, refer 12 to 18 questions to them, and show the referenced case study on a split screen.
- Support choose-two questions with five options; the samples contain 3 of 19.
- Present question and answer text at the same small size in a plain, dense layout.
- Identify the guide as version 6.1, the title of its launch edition and the label of the case studies it links, because the current guide prints no date or version.
- Use the official samples only to understand style; never copy or paraphrase them. Never copy case-study text into the repository.

Accepted recommendations are specified by [PRD 0001](/prd/0001-cloud-architect-exam-simulator.md), [ADR 0001](/adr/0001-port-pmle-simulator.md), [BDR 0002](/bdr/0002-question-validation-and-publication.md), and [BDR 0003](/bdr/0003-exam-presentation.md), and tracked by [issue 0001](/issues/0001-port-simulator-for-pca.md).

# References

[1] GOOGLE CLOUD. **Professional Cloud Architect Certification**. Available at: <https://cloud.google.com/learn/certification/cloud-architect>. Accessed on: 2026-10-01.

[2] GOOGLE CLOUD. **Professional Cloud Architect Certification Exam Guide**. Available at: <https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf>. Accessed on: 2026-10-01.

[3] GOOGLE CLOUD. **Altostrat Media Case Study**. Available at: <https://services.google.com/fh/files/misc/v6.1_pca_altostrat_media_case_study_english.pdf>. Accessed on: 2026-10-01.

[4] GOOGLE CLOUD. **Cymbal Retail Case Study**. Available at: <https://services.google.com/fh/files/misc/v6.1_pca_cymbal_retail_case_study_english.pdf>. Accessed on: 2026-10-01.

[5] GOOGLE CLOUD. **EHR Healthcare Case Study**. Available at: <https://services.google.com/fh/files/misc/v6.1_pca_ehr_healthcare_case_study_english.pdf>. Accessed on: 2026-10-01.

[6] GOOGLE CLOUD. **KnightMotives Automotive Case Study**. Available at: <https://services.google.com/fh/files/misc/v6.1_pca_knightmotives_automotive_case_study_english.pdf>. Accessed on: 2026-10-01.

[7] GOOGLE CLOUD. **Professional Cloud Architect Renewal Certification Exam Guide**. Available at: <https://services.google.com/fh/files/misc/professional_cloud_architect_renewal_exam_guide_eng.pdf>. Accessed on: 2026-10-01.

[8] GOOGLE CLOUD. **Professional Cloud Architect Sample Questions**. Available at: <https://docs.google.com/forms/d/e/1FAIpQLSf54f7FbtSJcXUY6-DUHfBG31jZ3pujgb8-a5io_9biJsNpqg/viewform>. Accessed on: 2026-10-01.

[9] GOOGLE CLOUD. **Identifying and Preventing Misconduct**. Available at: <https://support.google.com/cloud-certification/answer/9908051?hl=en>. Accessed on: 2026-10-01.

[10] BAJOR/GCP-ML-EXAM-SIMULATOR. **Professional Machine Learning Engineer exam format and blueprint**. Research record 0001. Available at: <https://github.com/bajor/gcp-ml-exam-simulator/blob/d1dce6d/docs/research/0001-exam-format-and-blueprint.md>. Accessed on: 2026-10-01.

[11] GOOGLE CLOUD. **v6.1 Professional Cloud Architect Exam Guide**. Available at: <https://services.google.com/fh/files/misc/v6.1_pca_professional_cloud_architect_exam_guide_english.pdf>. Accessed on: 2026-10-01.
