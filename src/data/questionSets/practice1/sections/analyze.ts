import type { QuestionSection } from "../../../../domain/questions";

const ehrCaseStudy = {
  id: "case-study",
  title: "EHR Healthcare Case Study",
  url: "https://services.google.com/fh/files/misc/v6.1_pca_ehr_healthcare_case_study_english.pdf",
} as const;

const cymbalCaseStudy = {
  id: "case-study",
  title: "Cymbal Retail Case Study",
  url: "https://services.google.com/fh/files/misc/v6.1_pca_cymbal_retail_case_study_english.pdf",
} as const;

const adoptionFramework = {
  id: "adoption-framework",
  title: "Google Cloud Adoption Framework",
  url: "https://cloud.google.com/adoption-framework",
  claim: "Cloud adoption effectiveness comes from sponsors' top-down mandates and bottom-up momentum from teams' cross-functional collaboration. The ability to learn comes from upskilling IT staff and from knowledge that third-party partners share, and the ability to scale comes from abstracting away infrastructure with managed and serverless cloud services.",
} as const;

export const practiceExamOneAnalyzeSection = {
  section: "analyze",
  author: "claude-opus-5.5-p1-analyze-20261002",
  questions: [
    {
      id: "pca-p1-analyze-01",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.f disaster recovery",
      caseStudyId: "ehr-healthcare",
      prompt: "EHR Healthcare's customer-facing applications will run in one Google Cloud region, with their databases replicated across the zones of that region. While adapting its disaster recovery plan, EHR's business impact analysis set a recovery time objective of 30 minutes and a recovery point objective of 5 minutes for the loss of the entire region. EHR wants to meet these objectives at the lowest cost and accepts a short interruption while traffic moves to another region. Which disaster recovery design should you choose?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          ...ehrCaseStudy,
          claim: "EHR plans to adapt its disaster recovery plan as it moves its applications to Google Cloud.",
        },
        {
          id: "dr-planning",
          title: "Disaster recovery planning guide",
          url: "https://docs.cloud.google.com/architecture/dr-scenarios-planning-guide",
          claim: "The recovery time objective (RTO) is the maximum acceptable time that an application can be offline, the recovery point objective (RPO) is the maximum acceptable period of data loss, and smaller RTO and RPO values typically cost more to run.",
        },
        {
          id: "dr-patterns",
          title: "Disaster recovery scenarios for applications",
          url: "https://docs.cloud.google.com/architecture/dr-scenarios-for-applications",
          claim: "A warm pattern keeps RTO and RPO values as small as possible without the effort and expense of a fully highly available configuration, while a cold pattern keeps only minimal resources in the recovery environment.",
        },
        {
          id: "dr-outages",
          title: "Architecting disaster recovery for cloud infrastructure outages",
          url: "https://docs.cloud.google.com/architecture/disaster-recovery",
          claim: "Regional resources are redundantly deployed across the zones of one region, while multi-regional resources are distributed within and across regions.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Run a scaled-down copy of the applications in a second region with continuously replicated databases, and scale it up and move traffic to it during a regional outage.",
          feedback: "Correct. A warm standby in a second region keeps the recovery objectives small without the expense of a fully highly available configuration, so it meets the objectives at a lower cost than two full regions.",
          evidenceIds: ["case-study", "dr-patterns", "dr-planning"],
        },
        {
          id: "b",
          text: "Run the full application stack in two regions at all times, serve traffic from both regions, and replicate the databases synchronously between them.",
          feedback: "Incorrect. Two full active regions meet the objectives, but smaller recovery objectives cost more to run, and EHR accepts the short interruption that a cheaper warm standby allows.",
          evidenceIds: ["dr-planning", "dr-patterns"],
        },
        {
          id: "c",
          text: "Back up the databases to Cloud Storage every night, and rebuild the applications and restore the latest backups in another region during a regional outage.",
          feedback: "Incorrect. Nightly backups can lose up to a day of data, which far exceeds the recovery point objective of 5 minutes.",
          evidenceIds: ["dr-planning"],
        },
        {
          id: "d",
          text: "Spread the applications across three zones of the region with automatic failover between zones, so that the loss of one zone does not interrupt them.",
          feedback: "Incorrect. Resources spread across the zones of one region are regional, so they do not protect the applications when the entire region is lost.",
          evidenceIds: ["dr-outages"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p1-analyze-02",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.c troubleshooting and root cause analysis",
      prompt: "A pharmacy chain's assistant uses a Gemini model on Agent Platform to answer customer questions about storing and disposing of medicines. The application sets the content filter threshold of every harm category to BLOCK_LOW_AND_ABOVE. About 3% of answers come back empty, and their logs show the finish reason SAFETY with MEDIUM scores for the dangerous content category, mostly for questions about disposing of expired medication. Reviewers confirmed that these questions are legitimate, and the compliance team requires every other harm category to stay as strict as it is now. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "safety-filters",
          title: "Safety and content filters",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/capabilities/configure-safety-filters",
          claim: "The finish reason SAFETY means that a configurable content filter flagged the response, and MAX_TOKENS means that the response reached the maximum number of tokens. BLOCK_LOW_AND_ABOVE blocks when the probability or severity score is LOW, MEDIUM, or HIGH, BLOCK_ONLY_HIGH blocks only when a score is HIGH, and OFF turns off automated response blocking.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Raise the maximum number of output tokens in the requests, because the empty answers are responses that stopped before the model finished generating them.",
          feedback: "Incorrect. A response that the token limit stops has the finish reason MAX_TOKENS, while SAFETY means that a configurable content filter flagged the response.",
          evidenceIds: ["safety-filters"],
        },
        {
          id: "b",
          text: "Switch the application to a larger Gemini model, because the empty answers show that the current model refuses to discuss medication disposal.",
          feedback: "Incorrect. The SAFETY finish reason shows that the configurable content filter stopped the responses, so the cause is the filter threshold, not the size of the model.",
          evidenceIds: ["safety-filters"],
        },
        {
          id: "c",
          text: "Change the threshold of the dangerous content category to BLOCK_ONLY_HIGH, and keep BLOCK_LOW_AND_ABOVE for every other harm category.",
          feedback: "Correct. BLOCK_ONLY_HIGH blocks only when the probability or severity score is HIGH, so answers that score MEDIUM for dangerous content pass, while the other categories keep their stricter threshold.",
          evidenceIds: ["safety-filters"],
        },
        {
          id: "d",
          text: "Change the threshold of the dangerous content category and of every other harm category to OFF, so that no response is blocked for safety reasons.",
          feedback: "Incorrect. OFF turns off automated blocking for every category, which loosens the categories that the compliance team requires to stay as strict as they are.",
          evidenceIds: ["safety-filters"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p1-analyze-03",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.b continuous integration and continuous deployment",
      prompt: "A media company deploys containers to GKE clusters for its development, staging, and production environments, with a separate deployment script for each environment. Releases sometimes reach production with a different image than the one that was tested in staging, and the change advisory board now requires a recorded approval before any release reaches production. The company wants a managed service that moves the same release through the environments in order. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "deploy-overview",
          title: "Overview of Cloud Deploy",
          url: "https://docs.cloud.google.com/deploy/docs/overview",
          claim: "Cloud Deploy is a managed service that automates delivery to a series of target environments in a defined promotion sequence. A release represents the rendered manifests with references to specific container images, each promotion rolls the release out to the next target, and an approval can be required for promotion to any target.",
        },
        {
          id: "deploy-approvals",
          title: "Promote your release and manage approvals",
          url: "https://docs.cloud.google.com/deploy/docs/promote-release",
          claim: "You can require approval for any target by setting requireApproval in the target configuration, and approvers approve or reject the rollouts into that target.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Create a Cloud Build trigger for each environment that builds a new image from the same Git commit and deploys it whenever the branch is updated.",
          feedback: "Incorrect. Building a new image for each environment can still put an untested image into production, unlike a Cloud Deploy release that references specific images, and the triggers record no approval.",
          evidenceIds: ["deploy-overview"],
        },
        {
          id: "b",
          text: "Create a Cloud Deploy delivery pipeline with development, staging, and production targets, and let each release advance to every target without approval.",
          feedback: "Incorrect. Cloud Deploy promotes the same release in order, but without an approval requirement on the production target, nothing records the board's approval.",
          evidenceIds: ["deploy-overview", "deploy-approvals"],
        },
        {
          id: "c",
          text: "Install an open source continuous delivery server on a Compute Engine VM, and have it run the existing deployment scripts in order with an approval step.",
          feedback: "Incorrect. The company would operate the server and its VM instead of using a managed service, and the separate scripts would still deploy their own images.",
          evidenceIds: ["deploy-overview"],
        },
        {
          id: "d",
          text: "Create a Cloud Deploy delivery pipeline with development, staging, and production targets, promote each release through them, and require approval on the production target.",
          feedback: "Correct. Cloud Deploy promotes one release with specific images through the targets in the defined sequence, and the approval requirement on the production target records the board's decision.",
          evidenceIds: ["deploy-overview", "deploy-approvals"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p1-analyze-04",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.d testing and validation of software and infrastructure",
      caseStudyId: "cymbal-retail",
      prompt: "Cymbal Retail generates product descriptions with a Gemini model, and associates approve or edit each description before it reaches the catalog. The team wants to change the prompt and move to a newer Gemini model, but last quarter a similar change quietly increased the share of descriptions that associates had to rewrite. Cymbal has 2,000 descriptions that associates approved without edits. You need to validate the change before it reaches production and measure whether description quality regresses. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          ...cymbalCaseStudy,
          claim: "Cymbal requires a review step in which associates approve, reject, or modify generated content before it updates the catalog.",
        },
        {
          id: "gen-ai-evaluation",
          title: "Gen AI evaluation service overview",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/evaluation-overview",
          claim: "The Gen AI evaluation service provides objective, data-driven assessment of generative AI models and informs model migrations, prompt editing, and fine-tuning. It supports computation-based metrics when a ground truth is available, and evaluation datasets can be uploaded from files or sampled from production logs.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Deploy the change to production, and compare the share of descriptions that associates edit during the following month with the previous month.",
          feedback: "Incorrect. Measuring edits after release lets a regression reach the associates first, while the requirement is to validate the change before production.",
          evidenceIds: ["case-study", "gen-ai-evaluation"],
        },
        {
          id: "b",
          text: "Use the Gen AI evaluation service with a dataset built from the 2,000 approved descriptions, and compare the current and proposed versions on the same metrics before release.",
          feedback: "Correct. The evaluation service gives an objective, data-driven assessment for prompt edits and model migrations, and the approved descriptions provide a ground truth for comparing both versions on the same metrics.",
          evidenceIds: ["gen-ai-evaluation", "case-study"],
        },
        {
          id: "c",
          text: "Load-test the proposed version, and release it if its response latency and its token usage per description are lower than those of the current version.",
          feedback: "Incorrect. Latency and token usage measure performance and cost, not whether the descriptions are as good as the approved ones, which an evaluation of quality assesses.",
          evidenceIds: ["gen-ai-evaluation"],
        },
        {
          id: "d",
          text: "Use the Gen AI evaluation service with a dataset built from the 2,000 approved descriptions, and release the proposed version if it reaches a fixed minimum score.",
          feedback: "Incorrect. A fixed minimum score does not show whether the proposed version is worse than the current one, so a regression can still pass, while the requirement is to detect regressions.",
          evidenceIds: ["gen-ai-evaluation"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p1-analyze-05",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.e service catalog and provisioning",
      prompt: "A bank's platform team maintains approved Terraform configurations for a hardened GKE cluster and an encrypted Cloud SQL instance. Forty application teams copy these configurations from a wiki page that often lists outdated versions, so teams deploy unapproved settings. The platform team wants teams to find and deploy only the latest approved configurations from one curated place, to control which teams can see them, and to avoid building or hosting its own portal. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "service-catalog",
          title: "Overview of Service Catalog",
          url: "https://docs.cloud.google.com/service-catalog/docs/overview",
          claim: "Service Catalog lets cloud admins curate solutions for internal users, control the distribution of solutions, and share catalogs with users in the organization, who can discover and deploy the solutions if they have permission.",
        },
        {
          id: "terraform-solutions",
          title: "Creating solutions",
          url: "https://docs.cloud.google.com/service-catalog/docs/create-solutions",
          claim: "A Service Catalog solution can be a Terraform configuration that users deploy using Terraform, which Google recommends for an infrastructure as code approach.",
        },
        {
          id: "basic-roles",
          title: "Roles overview",
          url: "https://docs.cloud.google.com/iam/docs/roles-overview",
          claim: "Basic roles are highly permissive roles that give broad access to Google Cloud resources.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Keep the configurations on the wiki page, and add a banner that tells teams to check the version history before they copy a configuration.",
          feedback: "Incorrect. The wiki still depends on each team copying the right version, which is how unapproved settings reached deployment, while a curated catalog keeps solutions current.",
          evidenceIds: ["service-catalog"],
        },
        {
          id: "b",
          text: "Grant each application team the Owner role on a shared project so that the teams can deploy the approved configurations there themselves.",
          feedback: "Incorrect. The Owner role is a highly permissive basic role, and it does not make the approved configurations easier to find or keep them current.",
          evidenceIds: ["basic-roles", "service-catalog"],
        },
        {
          id: "c",
          text: "Add each configuration to Service Catalog as a Terraform solution, assign the solutions to a catalog, and share the catalog with the application teams.",
          feedback: "Correct. Service Catalog lets the platform team curate Terraform solutions, control their distribution, and share a catalog with the teams that should see it, without a portal of its own.",
          evidenceIds: ["service-catalog", "terraform-solutions"],
        },
        {
          id: "d",
          text: "Build a web portal on Cloud Run with a Firestore database that lists the configurations, and have the teams download them from the portal.",
          feedback: "Incorrect. The platform team would build and host its own portal, which it wants to avoid, while Service Catalog already provides curated catalogs that it can share.",
          evidenceIds: ["service-catalog"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p1-analyze-06",
      kind: "single",
      section: "analyze",
      objective: "4.2 Analyzing and defining business processes: 4.2.b change management",
      prompt: "An insurance company will replace its ticket-based process for requesting cloud infrastructure with a self-service pipeline that 30 application teams use to provision approved resources. Two years ago, a new tool that all teams adopted on the same day was abandoned after teams resisted it and work stalled. The CIO requires that teams keep delivering during the transition, that the new process be proven before every team depends on it, and that teams can return to the ticket process if a blocking issue appears. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "manage-change",
          title: "Automate and manage change",
          url: "https://docs.cloud.google.com/architecture/framework/operational-excellence/automate-and-manage-change",
          claim: "Effective change management includes change governance with approval processes and communication plans, the assessment and mitigation of risks, and the testing and validation of changes.",
        },
        adoptionFramework,
      ],
      choices: [
        {
          id: "a",
          text: "Pilot the pipeline with two teams, train them and collect their feedback, communicate the plan with the CIO's backing, and expand in phases while the ticket process remains available.",
          feedback: "Correct. A pilot with training, feedback, and visible sponsorship validates the process and builds momentum, and a phased expansion with the old process still available keeps teams delivering with a fallback.",
          evidenceIds: ["manage-change", "adoption-framework"],
        },
        {
          id: "b",
          text: "Move all 30 teams to the pipeline on the same day, and retire the ticket process at the same time so that the teams cannot return to old habits.",
          feedback: "Incorrect. Switching every team at once without a fallback skips validation and risk mitigation, and it breaks the requirement that teams can return to the ticket process.",
          evidenceIds: ["manage-change"],
        },
        {
          id: "c",
          text: "Announce the pipeline in an email to all teams with a link to its documentation, and measure how many teams use it after six months.",
          feedback: "Incorrect. An announcement is not a tested rollout or a plan to prepare the teams, and waiting six months to measure adoption gives no way to prove the process before teams depend on it.",
          evidenceIds: ["manage-change", "adoption-framework"],
        },
        {
          id: "d",
          text: "Remove the teams' permissions to change infrastructure outside the pipeline on the first day, and train the teams after the pipeline becomes mandatory.",
          feedback: "Incorrect. Forcing the change before the teams are trained and before the process is validated risks stalling the delivery that the CIO requires to continue.",
          evidenceIds: ["manage-change", "adoption-framework"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p1-analyze-07",
      kind: "single",
      section: "analyze",
      objective: "4.2 Analyzing and defining business processes: 4.2.c team assessment and skills readiness",
      prompt: "A regional retailer must launch eight containerized web services on Google Cloud within three months. Its six-person operations team has deep experience with VMware and Windows Server but has never run Kubernetes or containers in production. Leadership wants the services to run reliably from launch without moving the date, and it wants the team to build cloud skills for the long term. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        adoptionFramework,
        {
          id: "what-is-cloud-run",
          title: "What is Cloud Run",
          url: "https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run",
          claim: "Cloud Run is a fully managed application platform, and you don't have to create a cluster or manage infrastructure to be productive with it.",
        },
        {
          id: "gke-overview",
          title: "GKE overview",
          url: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview",
          claim: "GKE provides the operational power of Kubernetes while managing many of the underlying components, such as the control plane and nodes, for you.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Have the team build and operate a self-managed Kubernetes cluster on Compute Engine VMs, so that it learns Kubernetes internals while it runs the services.",
          feedback: "Incorrect. A self-managed cluster puts the whole operation of Kubernetes on a team without that experience, while GKE and Cloud Run manage much of it.",
          evidenceIds: ["gke-overview", "what-is-cloud-run"],
        },
        {
          id: "b",
          text: "Delay the launch until every member of the team has earned a professional Google Cloud certification and has run Kubernetes in a test environment.",
          feedback: "Incorrect. Waiting for certifications moves the launch date, which leadership does not accept; upskilling can continue alongside the launch.",
          evidenceIds: ["adoption-framework"],
        },
        {
          id: "c",
          text: "Run the services on a GKE Standard cluster with custom node pools and a service mesh, and have the team learn each component during the launch.",
          feedback: "Incorrect. Custom node pools and a service mesh add more for an inexperienced team to configure and run at launch than the services need, while Cloud Run needs no cluster at all.",
          evidenceIds: ["what-is-cloud-run"],
        },
        {
          id: "d",
          text: "Run the services on Cloud Run, which needs no cluster management, enroll the team in targeted Google Cloud training, and use a partner for the first deployments.",
          feedback: "Correct. Cloud Run abstracts away the infrastructure, which fits the team's current skills, and training plus a partner's experience builds the skills that the team needs for the long term.",
          evidenceIds: ["what-is-cloud-run", "adoption-framework"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p1-analyze-08",
      kind: "single",
      section: "analyze",
      objective: "4.2 Analyzing and defining business processes: 4.2.f cost optimization and resource optimization",
      prompt: "A logistics company runs 200 Compute Engine VMs for steady production workloads that will run for at least three more years. Finance wants to buy 3-year resource-based committed use discounts for the current machine types next week. Cloud Monitoring shows that 60 of the VMs use less than 25% of their vCPUs and memory, and Compute Engine shows machine type recommendations for them. You need to minimize the company's compute costs over the three years. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "machine-type-recommendations",
          title: "Apply machine type recommendations to VM instances",
          url: "https://docs.cloud.google.com/compute/docs/instances/apply-machine-type-recommendations-for-instances",
          claim: "Compute Engine generates machine type recommendations from system metrics of the previous 8 days, and you can use them to resize an instance's machine type to use its resources more efficiently.",
        },
        {
          id: "cuds",
          title: "Committed use discounts overview",
          url: "https://docs.cloud.google.com/compute/docs/instances/committed-use-discounts-overview",
          claim: "Resource-based CUDs are ideal for predictable and steady state resource usage; you are billed monthly for your committed resources until the end of the term, regardless of whether you use them.",
        },
        {
          id: "spot",
          title: "Spot VMs",
          url: "https://docs.cloud.google.com/compute/docs/instances/spot",
          claim: "Compute Engine can preempt Spot VMs at any time, and they suit fault-tolerant workloads such as batch processing jobs.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Purchase 3-year commitments that cover the current machine types of all 200 VMs now, and apply the machine type recommendations after the purchase.",
          feedback: "Incorrect. Committed resources are billed whether or not they are used, so committing to oversized VMs before rightsizing pays for capacity that the rightsized VMs no longer need.",
          evidenceIds: ["cuds", "machine-type-recommendations"],
        },
        {
          id: "b",
          text: "Apply the machine type recommendations to rightsize the 60 VMs first, and then purchase 3-year commitments that cover the rightsized usage.",
          feedback: "Correct. The recommendations resize the underused VMs to use resources efficiently, and committing afterward sizes the commitments to the steady usage that the workloads actually need.",
          evidenceIds: ["machine-type-recommendations", "cuds"],
        },
        {
          id: "c",
          text: "Purchase 3-year commitments that cover the current usage of all 200 VMs plus 30% for growth, so that no VM ever runs at on-demand prices.",
          feedback: "Incorrect. Committed resources are billed whether or not they are used, so an extra 30% on top of oversized VMs is paid for during the whole term.",
          evidenceIds: ["cuds"],
        },
        {
          id: "d",
          text: "Move all 200 VMs to Spot VMs instead of buying commitments, because Spot VMs cost less than standard VMs with committed use discounts.",
          feedback: "Incorrect. Compute Engine can preempt Spot VMs at any time, which suits fault-tolerant work, not steady production workloads.",
          evidenceIds: ["spot"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p1-analyze-09",
      kind: "single",
      section: "analyze",
      objective: "4.2 Analyzing and defining business processes: 4.2.d decision-making processes",
      prompt: "A payments company's architects chose Spanner over Cloud SQL for a new ledger service after weeks of debate. Six months later, new engineers keep reopening the decision, because nobody recorded the options that were considered, the requirements that drove the choice, or the trade-offs that were accepted. The CTO wants a lightweight practice that preserves this context for future decisions and keeps it close to the code that the decisions affect. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "decision-records",
          title: "Architecture decision records overview",
          url: "https://docs.cloud.google.com/architecture/architecture-decision-records",
          claim: "Architecture decision records (ADRs) explain why teams make design choices. An ADR captures the key options available, the main requirements that drive a decision, and the design decisions themselves, and ADRs are often stored in a Markdown file close to the relevant code.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Ask the CTO to make every contested design decision, and announce each outcome in the engineering team's chat channel.",
          feedback: "Incorrect. Announcing outcomes records neither the options nor the requirements behind a decision, so engineers still lack the context that an ADR captures.",
          evidenceIds: ["decision-records"],
        },
        {
          id: "b",
          text: "Write a meeting summary for each significant decision that captures the attendees, the date, and the outcome, and store it with the service's code.",
          feedback: "Incorrect. The summary sits near the code, but it leaves out the options and the requirements, which is the context that the engineers lack.",
          evidenceIds: ["decision-records"],
        },
        {
          id: "c",
          text: "Rebuild the ledger service on Cloud SQL as a prototype, and compare both databases in production before making a final decision.",
          feedback: "Incorrect. Rebuilding the service reopens a decision that the company already made and still leaves no record of the options and requirements behind it.",
          evidenceIds: ["decision-records"],
        },
        {
          id: "d",
          text: "Write an architecture decision record for each significant decision that captures the options, the requirements, and the choice, and store it with the service's code.",
          feedback: "Correct. An ADR captures the key options, the main requirements that drive a decision, and the decision itself, and storing it near the code lets engineers find the background later.",
          evidenceIds: ["decision-records"],
        },
      ],
      correctChoiceId: "d",
    },
  ],
} satisfies QuestionSection<"analyze">;
