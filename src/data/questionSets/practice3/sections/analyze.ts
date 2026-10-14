import type { QuestionSection } from "../../../../domain/questions";

const ehrCaseStudy = {
  id: "case-study",
  title: "EHR Healthcare Case Study",
  url: "https://services.google.com/fh/files/misc/v6.1_pca_ehr_healthcare_case_study_english.pdf",
} as const;

const knightMotivesCaseStudy = {
  id: "case-study",
  title: "KnightMotives Automotive Case Study",
  url: "https://services.google.com/fh/files/misc/v6.1_pca_knightmotives_automotive_case_study_english.pdf",
} as const;

const geminiInference = {
  id: "gemini-inference",
  title: "Generate content with the Gemini API",
  url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/reference/models/inference",
  claim: "The finish reason FINISH_REASON_MAX_TOKENS means that the maximum number of tokens specified in the request was reached. maxOutputTokens sets the maximum number of tokens that can be generated in the response; specify a lower value for shorter responses and a higher value for potentially longer ones. Temperature controls the degree of randomness in token selection.",
} as const;

export const practiceExamThreeAnalyzeSection = {
  section: "analyze",
  author: "claude-opus-5.5-p3-analyze-20261014",
  questions: [
    {
      id: "pca-p3-analyze-01",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.b continuous integration and continuous deployment",
      prompt: "A company's Cloud Build pipeline runs integration tests against a database at 10.20.0.15 in its VPC network, and the database has no external IP address. Every build now fails with connection timeouts at the test step, while the same tests pass from a VM in the VPC network. The builds run in Cloud Build's default pool. Security rules forbid an external IP address on the database, and the team wants to keep Cloud Build without managing build servers. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "private-pools",
          title: "Private pools overview",
          url: "https://docs.cloud.google.com/build/docs/private-pools/private-pools-overview",
          claim: "By default, builds run in a hosted environment with access to the public internet, and the default pool has limits on private network access. Private pools are dedicated, fully managed pools of workers that can access resources in a private network through a VPC peering connection with your VPC network, with no infrastructure to set up, upgrade, or scale.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Give the database an external IP address, and allow connections only from Cloud Build's published IP ranges with a firewall rule.",
          feedback: "Incorrect. An external IP address on the database breaks the security rules, while a private pool reaches the database's internal address through VPC peering.",
          evidenceIds: ["private-pools"],
        },
        {
          id: "b",
          text: "Increase the build timeout and add retries to the test step, so that slow database connections have more time to succeed.",
          feedback: "Incorrect. The default pool has limited access to private networks, so more time and retries do not give the builds a path to the database's internal address.",
          evidenceIds: ["private-pools"],
        },
        {
          id: "c",
          text: "Run the pipeline on a Jenkins server on a Compute Engine VM inside the VPC network, and trigger it from the repository.",
          feedback: "Incorrect. A Jenkins server is a build server that the team would have to manage, while private pools are fully managed by Cloud Build.",
          evidenceIds: ["private-pools"],
        },
        {
          id: "d",
          text: "Create a Cloud Build private pool that is peered with the VPC network, and run the pipeline's builds in that pool.",
          feedback: "Correct. A private pool peered with the VPC network can reach resources at internal addresses, and Cloud Build manages its workers, so the database keeps no external IP address.",
          evidenceIds: ["private-pools"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p3-analyze-02",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.c troubleshooting and root cause analysis",
      caseStudyId: "ehr-healthcare",
      prompt: "EHR Healthcare's new claims service on GKE must call a legacy integration with an insurance provider that stays in EHR's data center, reached over Cloud Interconnect. After a network change last night, the calls time out, while other on-premises systems are still reachable. Several teams changed firewall rules, routes, and BGP advertisements during the change window. EHR wants to find which configuration blocks the path before it changes anything else. What should you do first?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          ...ehrCaseStudy,
          claim: "EHR's legacy integrations with insurance providers stay on premises, and EHR needs a secure connection with high performance between its own facilities and Google Cloud.",
        },
        {
          id: "connectivity-tests",
          title: "Connectivity Tests overview",
          url: "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview",
          claim: "Connectivity Tests is a diagnostics tool that checks connectivity between network endpoints. It analyzes your configuration by simulating the expected forwarding path of a packet through your VPC network, Cloud VPN tunnels, or VLAN attachments, and it helps troubleshoot configuration errors and obsolete configurations caused by network changes.",
        },
        {
          id: "interconnect-overview",
          title: "Cloud Interconnect overview",
          url: "https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/overview",
          claim: "Cloud Interconnect provides low-latency, high-availability connections that let you reliably transfer data between your networks.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Roll back every firewall, route, and BGP change from last night's change window, and then test the calls again.",
          feedback: "Incorrect. Rolling back every change alters the network before the cause is known and can undo needed changes, while Connectivity Tests finds the blocking configuration first.",
          evidenceIds: ["connectivity-tests"],
        },
        {
          id: "b",
          text: "Run Connectivity Tests from the GKE nodes to the integration's address, and review where the simulated path is dropped.",
          feedback: "Correct. Connectivity Tests simulates the forwarding path through the VPC network and VLAN attachments and shows which configuration drops it, without changing anything first.",
          evidenceIds: ["connectivity-tests", "case-study"],
        },
        {
          id: "c",
          text: "Increase the claims service's request timeout and retry count, so that the calls succeed when the network is slow.",
          feedback: "Incorrect. The calls fail after a configuration change, and longer timeouts do not show or fix the configuration that blocks the path.",
          evidenceIds: ["connectivity-tests"],
        },
        {
          id: "d",
          text: "Order a second Cloud Interconnect connection, so that the claims service has another path to the data center.",
          feedback: "Incorrect. Other on-premises systems are reachable over the existing connection, so a second connection adds cost without finding the configuration that blocks this path.",
          evidenceIds: ["interconnect-overview", "connectivity-tests"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p3-analyze-03",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.c troubleshooting and root cause analysis",
      prompt: "A property insurer's claims assistant sends claim documents to a Gemini model on Agent Platform and asks for a detailed summary. Since a configuration change last week, many summaries stop mid-sentence, and the responses report the finish reason FINISH_REASON_MAX_TOKENS. The documents are no longer than before, and the model and prompt are unchanged. The team wants complete summaries without switching models. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        geminiInference,
        {
          id: "generation-parameters",
          title: "Content generation parameters",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/capabilities/content-generation-parameters",
          claim: "Set maxOutputTokens to limit the number of tokens generated in the response. A token is approximately four characters, so 100 tokens correspond to roughly 60 to 80 words.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Raise the maxOutputTokens value in the request's generation configuration, so that the model can generate the full summary.",
          feedback: "Correct. FINISH_REASON_MAX_TOKENS means that the response reached the token limit set in the request, and a higher maxOutputTokens value allows longer responses.",
          evidenceIds: ["gemini-inference", "generation-parameters"],
        },
        {
          id: "b",
          text: "Lower the temperature in the request's generation configuration, so that the model writes more focused and complete summaries.",
          feedback: "Incorrect. Temperature controls randomness in token selection, while the summaries stop because the response reaches the requested token limit.",
          evidenceIds: ["gemini-inference"],
        },
        {
          id: "c",
          text: "Retry each request that ends early with exponential backoff, until the model returns a summary that ends normally.",
          feedback: "Incorrect. A retry sends the same token limit, so the response stops at the same maximum number of tokens again.",
          evidenceIds: ["gemini-inference"],
        },
        {
          id: "d",
          text: "Switch to a larger Gemini model with a bigger context window, so that it can read and summarize longer documents.",
          feedback: "Incorrect. The team does not want to switch models, and the documents are not longer than before, because the limit reached is the output token limit in the request.",
          evidenceIds: ["gemini-inference"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p3-analyze-04",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.d testing and validation of software and infrastructure",
      prompt: "A platform team manages 30 GKE clusters with Policy Controller installed. It plans a new constraint that requires CPU and memory limits on every container. Many existing workloads lack limits, and the team must not block any team's deployments until the owners have fixed their workloads. The team wants a complete list of current violations across the clusters before it enforces the rule. What should you do first?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "policy-controller",
          title: "Policy Controller overview",
          url: "https://docs.cloud.google.com/kubernetes-engine/policy-controller/docs/overview",
          claim: "Policy Controller applies and enforces programmable policies for Kubernetes clusters. Policies can actively block non-compliant API requests or audit the configuration of clusters and report violations, so you can audit a configuration before enforcing it without disrupting running workloads.",
        },
        {
          id: "constraint-enforcement",
          title: "Use the constraint template library",
          url: "https://docs.cloud.google.com/kubernetes-engine/policy-controller/docs/how-to/creating-policy-controller-constraints",
          claim: "Constraints are enforced by default, and a violation prevents the cluster operation. You can set a constraint's spec.enforcementAction to dryrun to report violations without preventing the operation.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Apply the constraint with its default enforcement on every cluster, and fix workloads as their deployments start to fail.",
          feedback: "Incorrect. Constraints are enforced by default and block violating operations, which would block deployments before owners have fixed their workloads.",
          evidenceIds: ["constraint-enforcement"],
        },
        {
          id: "b",
          text: "Ask each application team to report which of its workloads lack resource limits, and collect the answers by the end of the month.",
          feedback: "Incorrect. Self-reported lists can miss workloads, while Policy Controller audits every cluster's configuration and reports each violation.",
          evidenceIds: ["policy-controller"],
        },
        {
          id: "c",
          text: "Apply the constraint with the dryrun enforcement action, and review the reported violations across the clusters.",
          feedback: "Correct. A dryrun constraint reports every violation without preventing operations, so the team gets the complete list first and enforces the rule after owners fix their workloads.",
          evidenceIds: ["constraint-enforcement", "policy-controller"],
        },
        {
          id: "d",
          text: "Build a separate test cluster that copies every workload, and apply the enforced constraint there to see which deployments fail.",
          feedback: "Incorrect. Copying every workload into another cluster adds a cluster to build and run, while a dryrun constraint audits the real clusters without blocking them.",
          evidenceIds: ["constraint-enforcement"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p3-analyze-05",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.f disaster recovery",
      prompt: "A news agency stores photos from its reporters in Cloud Storage and serves them to editors in two regions. After a regional outage last year, the agency set a recovery point objective of 15 minutes for uploaded photos, and its applications must keep using one bucket name in both regions without failover logic. The agency wants the lowest effort that meets these requirements. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "storage-availability",
          title: "Data availability and durability",
          url: "https://docs.cloud.google.com/storage/docs/availability-durability",
          claim: "Dual-region and multi-region buckets store data redundantly in at least two geographic places. Default replication has a recovery point objective of 12 hours for objects, while turbo replication, available for dual-region buckets, replicates 100% of newly written objects to both regions within an RPO of 15 minutes. Cross-bucket replication copies objects asynchronously to a second bucket and doesn't provide an RPO.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Store the photos in a dual-region bucket with default replication, which replicates new objects to both regions asynchronously.",
          feedback: "Incorrect. Default replication has a recovery point objective of 12 hours, which is longer than the 15 minutes that the agency requires.",
          evidenceIds: ["storage-availability"],
        },
        {
          id: "b",
          text: "Store the photos in a dual-region bucket with turbo replication, which replicates new objects to both regions within 15 minutes.",
          feedback: "Correct. Turbo replication replicates every newly written object to both regions of the dual-region bucket within an RPO of 15 minutes, and the applications keep one bucket name.",
          evidenceIds: ["storage-availability"],
        },
        {
          id: "c",
          text: "Store the photos in a regional bucket, and copy new objects to a bucket in a second region with cross-bucket replication.",
          feedback: "Incorrect. Cross-bucket replication uses a second bucket name and doesn't provide an RPO, so the applications would need failover logic.",
          evidenceIds: ["storage-availability"],
        },
        {
          id: "d",
          text: "Store the photos in a multi-region bucket, which keeps redundant copies in several regions across a continent.",
          feedback: "Incorrect. Turbo replication is available only for dual-region buckets, so a multi-region bucket uses default replication, whose RPO is 12 hours.",
          evidenceIds: ["storage-availability"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p3-analyze-06",
      kind: "single",
      section: "analyze",
      objective: "4.2 Analyzing and defining business processes: 4.2.a stakeholder management",
      prompt: "An online furniture retailer's engineering team wants to rebuild order processing on Cloud Run, and the CFO must approve the budget. The finance team objects because cloud invoices change every month and finance cannot see what the spending delivers. Engineering and finance have argued about it for two months. The company wants a decision that both teams accept, and it wants cloud costs to stay tied to business results afterward. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "align-spending",
          title: "Align cloud spending with business value",
          url: "https://docs.cloud.google.com/architecture/framework/cost-optimization/align-cloud-spending-business-value",
          claim: "Aligning cloud spending with business value relies on cross-functional collaboration between business, finance, and technical teams so that cloud decisions match the organization's objectives. Google recommends adopting FinOps to establish a collaborative environment in which everyone can make informed decisions that balance cost and value.",
        },
        {
          id: "cost-awareness",
          title: "Foster a culture of cost awareness",
          url: "https://docs.cloud.google.com/architecture/framework/cost-optimization/foster-culture-cost-awareness",
          claim: "Stakeholders across roles, including product owners, developers, administrators, and financial analysts, need visibility into relevant cost data and its relationship to business value.",
        },
        {
          id: "compute-cuds",
          title: "Committed use discounts (CUDs) for Compute Engine",
          url: "https://docs.cloud.google.com/compute/docs/instances/committed-use-discounts-overview",
          claim: "With a compute flexible commitment, you commit to spending a minimum hourly amount on eligible resources and services for a one-year or three-year term, and that amount becomes your hourly commitment fee.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Start the rebuild now, and send finance the monthly invoices after the launch so that it can review the actual costs.",
          feedback: "Incorrect. Starting before finance agrees bypasses the stakeholder whose approval is needed, and invoices alone do not show what the spending delivers.",
          evidenceIds: ["cost-awareness"],
        },
        {
          id: "b",
          text: "Present engineering's performance benchmarks of Cloud Run to finance in a detailed review meeting, so that it sees the technical benefits of the rebuild.",
          feedback: "Incorrect. Technical benchmarks do not show finance the cost data and its relationship to business value, which it needs to make a decision.",
          evidenceIds: ["cost-awareness"],
        },
        {
          id: "c",
          text: "Buy a three-year compute commitment for the expected spend, so that finance sees a fixed amount on each invoice.",
          feedback: "Incorrect. A commitment fixes a minimum hourly fee for three years before the teams agree on the rebuild, and it still does not tie costs to business results.",
          evidenceIds: ["compute-cuds", "align-spending"],
        },
        {
          id: "d",
          text: "Set up a FinOps practice in which finance, business, and engineering review shared cost data tied to business value, such as cost per order.",
          feedback: "Correct. FinOps creates cross-functional collaboration between business, finance, and technical teams, and shared cost data tied to business value lets both teams decide and keeps costs aligned afterward.",
          evidenceIds: ["align-spending", "cost-awareness"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p3-analyze-07",
      kind: "single",
      section: "analyze",
      objective: "4.2 Analyzing and defining business processes: 4.2.c team assessment and skills readiness",
      prompt: "A meal-kit subscription company wants to predict which customers will cancel next month, so that it can offer them discounts. Its data analysts know SQL well but have no Python or machine learning experience, the customer history is already in BigQuery, and the company has no budget for new hires this year. It wants predictions within the quarter without moving the data out of BigQuery. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "bigquery-ml",
          title: "Introduction to ML in BigQuery",
          url: "https://docs.cloud.google.com/bigquery/docs/bqml-introduction",
          claim: "BigQuery ML lets you create and run machine learning models by using GoogleSQL queries, so SQL practitioners can use their existing SQL tools and skills without programming in Python or Java. Other approaches restrict development to a small set of people and exclude data analysts who understand the data but have limited ML knowledge and programming expertise.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Have the analysts train a classification model with BigQuery ML in SQL on the customer history, and generate predictions with SQL queries.",
          feedback: "Correct. BigQuery ML lets SQL practitioners create and run models with GoogleSQL where the data already is, so the analysts can deliver predictions without Python or new hires.",
          evidenceIds: ["bigquery-ml"],
        },
        {
          id: "b",
          text: "Hire ML engineers to build a custom Python training pipeline on Agent Platform with an export of the customer history.",
          feedback: "Incorrect. New ML engineers are hires that the company has no budget for, and the export moves the data out of BigQuery.",
          evidenceIds: ["bigquery-ml"],
        },
        {
          id: "c",
          text: "Export the customer history to a GKE cluster, and have the analysts write, test, and operate their own Python training code there.",
          feedback: "Incorrect. The analysts have no Python or machine learning experience, and the export moves the data out of BigQuery, while BigQuery ML needs only SQL.",
          evidenceIds: ["bigquery-ml"],
        },
        {
          id: "d",
          text: "Export the customer history to spreadsheets each month, and have the analysts estimate the risk of cancellation with formulas.",
          feedback: "Incorrect. Spreadsheet formulas are not a trained prediction model, and the exports move the data out of BigQuery.",
          evidenceIds: ["bigquery-ml"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p3-analyze-08",
      kind: "single",
      section: "analyze",
      objective: "4.2 Analyzing and defining business processes: 4.2.d decision-making processes",
      caseStudyId: "knightmotives-automotive",
      prompt: "KnightMotives Automotive wants new dealer tools for service technicians. Its business leaders favor a packaged SaaS product, while its IT architects favor building the tools on Google Cloud, and the two groups have debated for months without a decision. KnightMotives also wants better communication between its business and technical teams. The company wants a decision based on evidence that both groups accept. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          ...knightMotivesCaseStudy,
          claim: "KnightMotives wants better tools for dealers' service work, and it wants its business and technical teams to communicate better.",
        },
        {
          id: "proofs-of-concept",
          title: "Migrate to Google Cloud: Assess and discover your workloads",
          url: "https://docs.cloud.google.com/architecture/migration-to-gcp-assessing-and-discovering-your-workloads",
          claim: "Proofs of concept, through experimentation and testing, let you validate assumptions and demonstrate value to business leaders. At a minimum, a proof of concept should include a list of the use cases, the requirements of each use case, and the technologies and products that you want to test.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Let the IT architects build the tools on Google Cloud now, and ask the business leaders to evaluate the finished tools after the launch.",
          feedback: "Incorrect. Building first decides for one group before any evidence exists, so the business leaders have no reason to accept the result.",
          evidenceIds: ["proofs-of-concept"],
        },
        {
          id: "b",
          text: "Ask both groups to vote in a meeting, and adopt the option that gets the most votes from the people present.",
          feedback: "Incorrect. A vote records opinions rather than evidence, while proofs of concept validate assumptions against agreed use cases and requirements.",
          evidenceIds: ["proofs-of-concept"],
        },
        {
          id: "c",
          text: "Agree with both groups on the use cases and requirements first, then run time-boxed proofs of concept of both options and compare them.",
          feedback: "Correct. Proofs of concept built on agreed use cases and requirements validate assumptions and show value to business leaders, which gives both groups evidence they accept and a shared process.",
          evidenceIds: ["proofs-of-concept", "case-study"],
        },
        {
          id: "d",
          text: "Build both options to production quality for all dealers, and keep the one that dealers use more after a year.",
          feedback: "Incorrect. Two production builds for a year cost far more than proofs of concept that test the same assumptions before the decision.",
          evidenceIds: ["proofs-of-concept"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p3-analyze-09",
      kind: "single",
      section: "analyze",
      objective: "4.2 Analyzing and defining business processes: 4.2.f cost optimization and resource optimization",
      prompt: "A software company runs customer-facing services that must not be interrupted on Compute Engine, GKE, and Cloud Run, with a steady minimum spend of about $40 per hour and peaks above that. Every few months, its teams move workloads between the N2 and C3 machine series and between two regions as their needs change. The company wants a three-year discount on its steady spend without tracking commitments for each region and machine configuration. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "compute-cuds",
          title: "Committed use discounts (CUDs) for Compute Engine",
          url: "https://docs.cloud.google.com/compute/docs/instances/committed-use-discounts-overview",
          claim: "Resource-based commitments cover a specific amount of resources in a specific region and machine configuration. Compute flexible CUDs discount spend across Compute Engine, GKE, and Cloud Run regardless of the project or region, without restricting the commitment to one machine configuration. With a compute flexible commitment, you commit to a minimum hourly spend, which becomes your hourly commitment fee for the term.",
        },
        {
          id: "spot-vms",
          title: "Spot VMs",
          url: "https://docs.cloud.google.com/compute/docs/instances/spot",
          claim: "Spot VMs have significant discounts, but Compute Engine might preempt them at any time to reclaim the capacity.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Buy resource-based commitments for the current N2 and C3 resources in each of the two regions.",
          feedback: "Incorrect. Resource-based commitments apply to a specific region and machine configuration, so the company would have to track and adjust them as workloads move.",
          evidenceIds: ["compute-cuds"],
        },
        {
          id: "b",
          text: "Buy a three-year compute flexible commitment for the steady minimum hourly spend across Compute Engine, GKE, and Cloud Run.",
          feedback: "Correct. A compute flexible commitment discounts the committed hourly spend across Compute Engine, GKE, and Cloud Run regardless of region or machine configuration.",
          evidenceIds: ["compute-cuds"],
        },
        {
          id: "c",
          text: "Buy a three-year compute flexible commitment for the peak hourly spend, so that every hour of usage receives the discount.",
          feedback: "Incorrect. The committed hourly amount is a fee paid every hour, so committing to the peak pays for spend that the company does not use outside the peaks.",
          evidenceIds: ["compute-cuds"],
        },
        {
          id: "d",
          text: "Move all of the workloads to Spot VMs, which have significant discounts across every machine series and region.",
          feedback: "Incorrect. Compute Engine can preempt Spot VMs at any time, which would interrupt the customer-facing services that must keep running.",
          evidenceIds: ["spot-vms"],
        },
      ],
      correctChoiceId: "b",
    },
  ],
} satisfies QuestionSection<"analyze">;
