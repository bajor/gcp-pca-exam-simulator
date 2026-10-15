import type { QuestionSection } from "../../../../domain/questions";

const knightMotivesCaseStudy = {
  id: "case-study",
  title: "KnightMotives Automotive Case Study",
  url: "https://services.google.com/fh/files/misc/v6.1_pca_knightmotives_automotive_case_study_english.pdf",
} as const;

export const practiceExamThreeOperateSection = {
  section: "operate",
  author: "claude-opus-5.5-p3-operate-20261014",
  questions: [
    {
      id: "pca-p3-operate-01",
      kind: "single",
      section: "operate",
      objective: "6.1 Understanding the principles and recommendations of the operational excellence pillar of the Google Cloud Well-Architected Framework: 6.1.a understanding the principles and recommendations of the operational excellence pillar of the Google Cloud Well-Architected Framework",
      caseStudyId: "knightmotives-automotive",
      prompt: "During a security incident last month, engineers from five KnightMotives Automotive teams worked on the same systems in parallel without coordinating, two teams undid each other's fixes, and nobody kept dealers informed. Security is a top concern after the company's earlier breaches, and it is now writing a plan for responding to incidents. KnightMotives wants future incidents handled by a coordinated team with clear communication, as the operational excellence pillar recommends. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          ...knightMotivesCaseStudy,
          claim: "Security is a top concern for KnightMotives after earlier data breaches, and its security program includes a plan for responding to incidents and security training for employees.",
        },
        {
          id: "manage-incidents",
          title: "Manage incidents and problems",
          url: "https://docs.cloud.google.com/architecture/framework/operational-excellence/manage-incidents-and-problems",
          claim: "Clear roles and responsibilities are essential for a coordinated incident response, so you define roles such as incident commanders, investigators, communicators, and technical experts, set up communication and escalation paths, document procedures in runbooks or playbooks, and train teams regularly. Post-incident reviews in a blameless culture identify root causes and corrective actions after an incident.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Buy an additional security monitoring tool, so that the teams detect incidents earlier and have more data during a response.",
          feedback: "Incorrect. More detection data does not decide who leads the response or who informs dealers, while defined incident roles and communication paths do.",
          evidenceIds: ["manage-incidents"],
        },
        {
          id: "b",
          text: "Define incident roles, such as an incident commander, communicators, and technical experts, with escalation paths and runbooks, and train the teams regularly.",
          feedback: "Correct. Clear roles, communication and escalation paths, runbooks, and regular training give the response one coordinator and a communicator who keeps dealers informed.",
          evidenceIds: ["manage-incidents", "case-study"],
        },
        {
          id: "c",
          text: "Page every engineer in all five teams for each incident, so that the response always has enough people working on it.",
          feedback: "Incorrect. Paging everyone adds people without roles or a coordinator, which repeats the uncoordinated work that undid fixes last month.",
          evidenceIds: ["manage-incidents"],
        },
        {
          id: "d",
          text: "Hold a blameless postmortem after each incident, and leave the response itself to whichever team notices the problem first.",
          feedback: "Incorrect. Post-incident reviews help after an incident, but leaving the response to whichever team notices it first gives no defined roles or communication during the incident.",
          evidenceIds: ["manage-incidents"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p3-operate-02",
      kind: "single",
      section: "operate",
      objective: "6.2 Familiarity with Google Cloud Observability solutions: 6.2.a monitoring and logging",
      prompt: "A team runs a Java order service on a managed instance group of Compute Engine VMs, and the service has crashed three times this week with out-of-memory errors. In Cloud Monitoring, the team sees CPU utilization and network traffic for each VM but no memory usage. It wants memory utilization charts and an alert for each VM before it changes any machine types, with the least custom work. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "observe-vms",
          title: "Observe and monitor VMs",
          url: "https://docs.cloud.google.com/compute/docs/instances/observe-monitor-vms",
          claim: "Basic VM metrics such as CPU utilization and network traffic are available when you create a VM, while metrics for memory and process utilization are only available after you install the Ops Agent.",
        },
        {
          id: "ops-agent",
          title: "Ops Agent overview",
          url: "https://docs.cloud.google.com/monitoring/agent/ops-agent",
          claim: "The Ops Agent is the primary agent for collecting telemetry from Compute Engine instances, and it collects logs, metrics, and traces in a single process.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Change the instance template to a machine type with twice the memory, and roll the new template out to the group.",
          feedback: "Incorrect. A larger machine type changes the VMs before the team can see memory usage, which it wants to measure first.",
          evidenceIds: ["observe-vms"],
        },
        {
          id: "b",
          text: "Create an alerting policy on the memory utilization metric of the group's VMs, and chart that metric on a Cloud Monitoring dashboard.",
          feedback: "Incorrect. Memory utilization metrics are only available after the Ops Agent is installed, so the chart and the alert have no data to use.",
          evidenceIds: ["observe-vms"],
        },
        {
          id: "c",
          text: "Write a cron job on each VM that reads the free memory and writes it to Cloud Monitoring as a custom metric through the API.",
          feedback: "Incorrect. A cron job that writes custom metrics is custom work to build and maintain, while the Ops Agent collects memory metrics.",
          evidenceIds: ["ops-agent", "observe-vms"],
        },
        {
          id: "d",
          text: "Install the Ops Agent on the group's VMs, and create an alerting policy on the memory utilization metric that the agent reports.",
          feedback: "Correct. Memory utilization metrics are available after the Ops Agent is installed, so the team gets charts and an alert for each VM without custom code.",
          evidenceIds: ["observe-vms", "ops-agent"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p3-operate-03",
      kind: "single",
      section: "operate",
      objective: "6.2 Familiarity with Google Cloud Observability solutions: 6.2.a monitoring and logging",
      prompt: "A retailer's GKE workloads write verbose DEBUG log entries that make up about 70% of its Cloud Logging volume, and its logging bill has doubled this year. Teams read WARNING and higher entries in Logs Explorer for 30 days, and nobody reads the DEBUG entries in Cloud Logging. The retailer wants to cut the logging cost now without changing or redeploying the applications. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "log-routing",
          title: "Route log entries",
          url: "https://docs.cloud.google.com/logging/docs/routing/overview",
          claim: "A sink routes a log entry to its destination when the entry matches the sink's inclusion filter but doesn't match any of its exclusion filters.",
        },
        {
          id: "logging-pricing",
          title: "Pricing | Google Cloud Observability",
          url: "https://cloud.google.com/products/observability/pricing",
          claim: "Cloud Logging charges each project based on the volume of logs streamed into its user-defined log buckets and its _Default log bucket, and destination storage charges apply to logs routed to other destinations such as Cloud Storage.",
        },
        {
          id: "log-buckets",
          title: "Configure log buckets",
          url: "https://docs.cloud.google.com/logging/docs/buckets",
          claim: "You can set a log bucket's retention period to between 1 day and 3650 days, and you can configure the retention period of the _Default log bucket.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Add an exclusion filter for DEBUG entries to the _Default sink, so that those entries are no longer stored in the _Default log bucket.",
          feedback: "Correct. Entries that match an exclusion filter aren't routed to the _Default bucket, and Cloud Logging charges for the volume streamed into its buckets, so the cost falls without application changes.",
          evidenceIds: ["log-routing", "logging-pricing"],
        },
        {
          id: "b",
          text: "Reduce the retention period of the _Default log bucket to one day, so that the DEBUG entries are deleted sooner.",
          feedback: "Incorrect. Charges are based on the volume streamed into the bucket, so a shorter retention still stores every DEBUG entry, and it also deletes the WARNING entries that teams read for 30 days.",
          evidenceIds: ["logging-pricing", "log-buckets"],
        },
        {
          id: "c",
          text: "Create a sink that routes every log entry to a Cloud Storage bucket, and disable the _Default sink for the project.",
          feedback: "Incorrect. Storage charges apply to every routed entry, including the DEBUG entries, and the teams would lose the WARNING entries that they read in Cloud Logging.",
          evidenceIds: ["logging-pricing"],
        },
        {
          id: "d",
          text: "Change each workload's logging configuration to write only INFO and higher entries, and redeploy all of the workloads.",
          feedback: "Incorrect. Changing and redeploying the workloads is what the retailer wants to avoid, while an exclusion filter stops storing the DEBUG entries without application changes.",
          evidenceIds: ["log-routing"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p3-operate-04",
      kind: "single",
      section: "operate",
      objective: "6.3 Deployment and release management: 6.3.a deployment and release management",
      prompt: "A lender scores loan applications with a custom fraud model deployed to an Agent Platform endpoint, which its application calls by URL. The data science team has trained a new version that looks more accurate in offline tests. The team wants the new version to serve about 10% of live requests while the old version serves the rest, to compare them, and to shift traffic gradually forward or back without changing the application. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "endpoint-deployment",
          title: "Deploy a model to an endpoint",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/general/deployment",
          claim: "You can deploy multiple models to an endpoint. Deploying a new model to the same endpoint lets it serve a small percentage of traffic, and you can gradually increase its traffic split until it serves 100%, without updating the application to a new endpoint URL. A rolling deployment replaces a deployed model.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Deploy the new version to a second endpoint, and change the application to send 10% of its requests to that endpoint's URL.",
          feedback: "Incorrect. A second endpoint requires changing the application to call a new URL, while a traffic split on the same endpoint does not.",
          evidenceIds: ["endpoint-deployment"],
        },
        {
          id: "b",
          text: "Replace the deployed model on the existing endpoint with the new version through a rolling deployment.",
          feedback: "Incorrect. A rolling deployment replaces the deployed model, so the old version does not keep serving most requests for comparison.",
          evidenceIds: ["endpoint-deployment"],
        },
        {
          id: "c",
          text: "Deploy the new version to the same endpoint with a 10% traffic split, and adjust the split as the results come in.",
          feedback: "Correct. Deploying the new model to the same endpoint with a small traffic split serves both versions behind one URL, and the split can be raised or lowered gradually.",
          evidenceIds: ["endpoint-deployment"],
        },
        {
          id: "d",
          text: "Deploy the new version to the same endpoint with all of the traffic, and redeploy the old version if the error rate rises.",
          feedback: "Incorrect. Giving the new version all of the traffic sends every request to it at once, with no 10% comparison and no gradual shift.",
          evidenceIds: ["endpoint-deployment"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p3-operate-05",
      kind: "single",
      section: "operate",
      objective: "6.4 Assisting with the support of deployed solutions: 6.4.a assisting with the support of deployed solutions",
      prompt: "On Tuesday morning, an online language school's API, one of about 40 microservices on GKE in europe-west1, starts returning errors for a third of its requests, and its Cloud SQL queries time out, although nobody changed anything. The on-call engineer must decide quickly whether the cause is in the school's own systems or is a Google Cloud incident, before escalating or changing anything. What should you do first?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "service-health",
          title: "Personalized Service Health overview",
          url: "https://docs.cloud.google.com/service-health/docs/overview",
          claim: "Personalized Service Health helps you identify Google Cloud service health events relevant to your projects. Its Service Health dashboard tracks emerging and active Google Cloud incidents relevant to your projects or organization, and it is the primary channel for incident information relevant to your projects.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Open a support case at the highest priority right away, and wait for Google support to say whether there is an incident.",
          feedback: "Incorrect. Waiting for a reply delays the decision, while Personalized Service Health already shows Google Cloud incidents that affect the school's projects.",
          evidenceIds: ["service-health"],
        },
        {
          id: "b",
          text: "Restart all of the cluster's nodes and the Cloud SQL instance, and then check whether the errors stop.",
          feedback: "Incorrect. Restarting changes the systems before the engineer knows whether a Google Cloud incident is the cause, which the engineer must find out first.",
          evidenceIds: ["service-health"],
        },
        {
          id: "c",
          text: "Deploy a copy of the whole stack in another region, and fail the API over to it before investigating further.",
          feedback: "Incorrect. Building and failing over to another region is a large change made before anyone knows the cause, while Personalized Service Health shows whether an incident affects europe-west1.",
          evidenceIds: ["service-health"],
        },
        {
          id: "d",
          text: "Check Personalized Service Health for incidents that affect the project's services in europe-west1, and then decide how to escalate.",
          feedback: "Correct. Personalized Service Health shows Google Cloud incidents relevant to the project, so the engineer learns quickly whether the cause is a Google Cloud incident before escalating.",
          evidenceIds: ["service-health"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p3-operate-06",
      kind: "single",
      section: "operate",
      objective: "6.5 Evaluating quality control measures: 6.5.a evaluating quality control measures",
      prompt: "An online retailer releases its checkout service to production several times a week. Its last two releases passed every unit test but broke checkout for customers who pay with saved cards, and the team learned of it from complaints hours later. Leadership wants a release quality measure that shows within minutes of each release whether the key purchase journeys still work in production. The team already has Node.js scripts that walk through these journeys. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "synthetic-monitors",
          title: "Create a synthetic monitor",
          url: "https://docs.cloud.google.com/monitoring/synthetic-monitors/create",
          claim: "Synthetic monitors periodically test the availability, consistency, and performance of services, web pages, and APIs. Each one runs a Node.js test script deployed as a Cloud Run function and records the execution status and latency, and you can configure an alerting policy that notifies you when a test fails.",
        },
        {
          id: "uptime-checks",
          title: "Create public uptime checks",
          url: "https://docs.cloud.google.com/monitoring/uptime-checks",
          claim: "Public uptime checks test the availability of URLs and resources by sending periodic HTTP, HTTPS, or TCP requests, and an alerting policy can notify you if the target fails to respond.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Measure the unit test code coverage of each release, and block any release whose coverage is lower than the previous release's.",
          feedback: "Incorrect. The broken releases passed every unit test, so code coverage does not show whether the purchase journeys work in production.",
          evidenceIds: ["synthetic-monitors"],
        },
        {
          id: "b",
          text: "Run the journey scripts as synthetic monitors every few minutes, track their success rate after each release, and alert when a test fails.",
          feedback: "Correct. Synthetic monitors run Node.js test scripts periodically and record their status, so each release's effect on the purchase journeys appears within minutes and failures raise alerts.",
          evidenceIds: ["synthetic-monitors"],
        },
        {
          id: "c",
          text: "Create an uptime check on the checkout page's URL, and alert when the page stops returning a successful response to the check.",
          feedback: "Incorrect. An uptime check only tests whether the URL responds, so it misses a broken payment step on a page that still loads.",
          evidenceIds: ["uptime-checks"],
        },
        {
          id: "d",
          text: "Track how many releases the team ships each week, and review the trend with leadership at the end of every month.",
          feedback: "Incorrect. Release counts show how often the team ships, not whether each release keeps the purchase journeys working.",
          evidenceIds: ["synthetic-monitors"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p3-operate-07",
      kind: "single",
      section: "operate",
      objective: "6.6 Ensuring the reliability of solutions in production: 6.6.a ensuring the reliability of solutions in production",
      prompt: "A payroll software company backs up its customer databases and file stores every night, and its contracts promise a recovery time objective of four hours and a recovery point objective of one day. The backup jobs always report success, but the company has never restored a full environment, and an auditor asks for evidence that it can meet these objectives. The reliability team wants that evidence and confidence before a real incident. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "recovery-testing",
          title: "Perform testing for recovery from data loss",
          url: "https://docs.cloud.google.com/architecture/framework/reliability/perform-testing-for-recovery-from-data-loss",
          claim: "To ensure that a system can recover from lost or corrupted data, you run tests that restore data from backups and bring the services back up with the restored data. Google recommends judging these tests by data integrity, recovery time objective, and recovery point objective, and running them periodically to verify that you can meet business continuity requirements.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Run regular recovery tests that restore the backups into an isolated environment and measure data integrity, recovery time, and data loss.",
          feedback: "Correct. Periodic restore tests judged by data integrity, recovery time, and recovery point show whether the company meets its objectives before a real incident.",
          evidenceIds: ["recovery-testing"],
        },
        {
          id: "b",
          text: "Review the status of the backup jobs every day, and send the auditor a report of the successful backup jobs from the past year.",
          feedback: "Incorrect. Successful backup jobs do not show that a full environment can be restored within four hours, which only a restore test measures.",
          evidenceIds: ["recovery-testing"],
        },
        {
          id: "c",
          text: "Run regular recovery tests that restore the backups of one database into an isolated environment and check that the database starts.",
          feedback: "Incorrect. A database that starts does not show data integrity or whether the full environment recovers within the recovery time and recovery point objectives.",
          evidenceIds: ["recovery-testing"],
        },
        {
          id: "d",
          text: "Wait for the next real incident, and record how long the restore takes as the evidence for the auditor.",
          feedback: "Incorrect. Waiting for an incident gives no evidence or confidence beforehand, which the reliability team needs before a real incident.",
          evidenceIds: ["recovery-testing"],
        },
      ],
      correctChoiceId: "a",
    },
  ],
} satisfies QuestionSection<"operate">;
