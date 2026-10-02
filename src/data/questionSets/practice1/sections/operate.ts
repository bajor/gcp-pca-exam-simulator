import type { QuestionSection } from "../../../../domain/questions";

const ehrCaseStudy = {
  id: "case-study",
  title: "EHR Healthcare Case Study",
  url: "https://services.google.com/fh/files/misc/v6.1_pca_ehr_healthcare_case_study_english.pdf",
} as const;

const recoveryTesting = {
  id: "recovery-testing",
  title: "Perform testing for recovery from failures",
  url: "https://docs.cloud.google.com/architecture/framework/reliability/perform-testing-for-recovery-from-failures",
  claim: "Periodically run tests that include regional failovers, release rollbacks, and data restoration from backups, and test the effectiveness of automated failover mechanisms. Prefer a staging or sandbox environment that replicates the production setup, and if you test in production, have safety measures such as automated monitoring and manual rollback procedures ready.",
} as const;

export const practiceExamOneOperateSection = {
  section: "operate",
  author: "claude-opus-5.5-p1-operate-20261002",
  questions: [
    {
      id: "pca-p1-operate-01",
      kind: "single",
      section: "operate",
      objective: "6.1 Understanding the principles and recommendations of the operational excellence pillar of the Google Cloud Well-Architected Framework: 6.1.a understanding the principles and recommendations of the operational excellence pillar of the Google Cloud Well-Architected Framework",
      prompt: "An e-commerce company had three outages in two months that followed similar patterns. After each outage, the operations manager identified the engineer whose change triggered it and disciplined that engineer, and engineers now avoid reporting near misses. The CTO wants the organization to follow the operational excellence recommendations of the Google Cloud Well-Architected Framework, learn from incidents, and prevent them from recurring. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "incident-reviews",
          title: "Manage incidents and problems",
          url: "https://docs.cloud.google.com/architecture/framework/operational-excellence/manage-incidents-and-problems",
          claim: "After an incident, conduct a post-incident review (PIR), also known as a postmortem, that identifies the root cause, contributing factors, and lessons learned and documents the timeline and recommended actions, which you implement to prevent recurrence. The organization must foster a blameless culture that focuses on learning and improvement rather than assigning blame.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Require two managers to approve every production change from now on, so that no single engineer can cause another outage on their own.",
          feedback: "Incorrect. More approvals do not identify the root causes and contributing factors of the outages, which a post-incident review uses to prevent recurrence.",
          evidenceIds: ["incident-reviews"],
        },
        {
          id: "b",
          text: "Run a blameless post-incident review after each incident that documents the timeline, root cause, and contributing factors, and track the action items to completion.",
          feedback: "Correct. A blameless post-incident review identifies the root cause, contributing factors, and recommended actions, and implementing those actions prevents the incidents from recurring.",
          evidenceIds: ["incident-reviews"],
        },
        {
          id: "c",
          text: "Run a post-incident review after each incident that documents the timeline, root cause, and engineer at fault, and track the action items to completion.",
          feedback: "Incorrect. Naming an engineer at fault assigns blame, while post-incident reviews need a blameless culture that focuses on learning, which this company has already lost.",
          evidenceIds: ["incident-reviews"],
        },
        {
          id: "d",
          text: "Wait until the next outage, and then hire an external firm to analyze all four outages together in a single report for the board.",
          feedback: "Incorrect. Postponing the reviews leaves the causes in place until another outage, while a review after each incident identifies corrective actions that prevent recurrence.",
          evidenceIds: ["incident-reviews"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p1-operate-02",
      kind: "single",
      section: "operate",
      objective: "6.2 Familiarity with Google Cloud Observability solutions: 6.2.a monitoring and logging",
      prompt: "A media company runs 40 GKE clusters in three regions. Its services are already instrumented with Prometheus client libraries, and the SRE team uses Grafana dashboards and PromQL alerting rules. The team's self-managed Prometheus servers run out of memory as metrics grow, cannot answer queries across clusters, and keep only two weeks of data. The team wants to stop operating Prometheus servers while keeping its instrumentation, dashboards, and PromQL alerts. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "managed-prometheus",
          title: "Google Cloud Managed Service for Prometheus",
          url: "https://docs.cloud.google.com/stackdriver/docs/managed-prometheus",
          claim: "Managed Service for Prometheus is a fully managed, multi-cloud, cross-project solution that collects metrics from Prometheus exporters without you managing and operating Prometheus at scale. It lets you query data globally with PromQL, so existing Grafana dashboards, PromQL-based alerts, and workflows keep working, and it retains data for 24 months.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Use Google Cloud Managed Service for Prometheus to collect the existing metrics, and point the Grafana dashboards and PromQL alerts at its global query API.",
          feedback: "Correct. The managed service collects the metrics without the team operating Prometheus at scale, queries them globally with PromQL, keeps the dashboards and alerts working, and retains data for 24 months.",
          evidenceIds: ["managed-prometheus"],
        },
        {
          id: "b",
          text: "Add more memory to the Prometheus servers, and deploy a federation layer that queries the Prometheus server of every cluster from a central server.",
          feedback: "Incorrect. Bigger servers and a federation layer keep the team operating Prometheus, which it wants to stop, while the managed service removes that work.",
          evidenceIds: ["managed-prometheus"],
        },
        {
          id: "c",
          text: "Rewrite the services' instrumentation to send custom metrics directly to the Cloud Monitoring API, and rebuild the dashboards in Cloud Monitoring.",
          feedback: "Incorrect. Rewriting the instrumentation and rebuilding the dashboards discards work that Managed Service for Prometheus lets the team keep.",
          evidenceIds: ["managed-prometheus"],
        },
        {
          id: "d",
          text: "Convert the metrics into structured log entries in Cloud Logging, and create log-based metrics and alerting policies from those entries.",
          feedback: "Incorrect. Turning metrics into log entries discards the Prometheus instrumentation and PromQL alerts that the team wants to keep, which the managed service supports directly.",
          evidenceIds: ["managed-prometheus"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p1-operate-03",
      kind: "multiple",
      requiredSelections: 2,
      section: "operate",
      objective: "6.2 Familiarity with Google Cloud Observability solutions: 6.2.c alerting strategies",
      caseStudyId: "ehr-healthcare",
      prompt: "EHR Healthcare's monitoring sends alerts by email to a shared mailbox, where they are often ignored, and many alerts fire on high CPU usage that never affects customers. EHR wants to act early on problems that threaten the 99.9% availability that its customer-facing systems must meet, and it wants each of those alerts to reach the engineer on call within minutes. What should you do? Choose two.",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          ...ehrCaseStudy,
          claim: "EHR's alerts arrive by email and tend to be ignored, EHR wants a single view of system health and early action on problems, and its customer-facing systems need at least 99.9% availability.",
        },
        {
          id: "burn-rate-alerts",
          title: "Alerting on your burn rate",
          url: "https://docs.cloud.google.com/stackdriver/docs/solutions/slo-monitoring/alerting-on-budget-burn-rate",
          claim: "Alerting policies on service-level objectives (SLOs), such as alerts on the burn rate of the error budget, let you know whether you are in danger of violating an SLO.",
        },
        {
          id: "notification-channels",
          title: "Create and manage notification channels",
          url: "https://docs.cloud.google.com/monitoring/support/notification-options",
          claim: "Alerting policies notify channels such as PagerDuty, Slack, the Cloud Mobile App, webhooks, Pub/Sub, and email; when you use PagerDuty, Slack, webhooks, or the mobile app, use email or Pub/Sub as a redundant channel.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Define availability SLOs for the customer-facing services in Cloud Monitoring, and create alerting policies on the burn rate of their error budgets.",
          feedback: "Correct. Burn-rate alerts on the SLOs warn when the services are in danger of violating their availability objective, which is the customer-affecting problem that EHR wants to act on early.",
          evidenceIds: ["burn-rate-alerts", "case-study"],
        },
        {
          id: "b",
          text: "Lower the CPU usage thresholds of the existing alerts from 90% to 70%, so that the team learns about load problems earlier than it does today.",
          feedback: "Incorrect. Lower CPU thresholds produce more alerts about a cause that has not affected customers, instead of alerting on the availability objective.",
          evidenceIds: ["burn-rate-alerts", "case-study"],
        },
        {
          id: "c",
          text: "Send the SLO alerts to an on-call notification channel, such as PagerDuty, and keep email as a redundant channel for the same alerts.",
          feedback: "Correct. An on-call channel such as PagerDuty reaches the responder directly, and Google recommends email or Pub/Sub as a redundant channel for that channel type.",
          evidenceIds: ["notification-channels", "case-study"],
        },
        {
          id: "d",
          text: "Add more recipients to the shared mailbox, and require the team to acknowledge every email alert within one business day.",
          feedback: "Incorrect. More recipients and a one-day acknowledgment keep alerts in the mailbox where they are ignored, and they do not reach the engineer on call within minutes.",
          evidenceIds: ["case-study", "notification-channels"],
        },
        {
          id: "e",
          text: "Create an alerting policy for every metric that each service exports, so that no change in the behavior of a service goes unnoticed.",
          feedback: "Incorrect. Alerts on every metric add noise about behavior that may not affect customers, while burn-rate alerts focus on the availability objective.",
          evidenceIds: ["burn-rate-alerts"],
        },
      ],
      correctChoiceIds: ["a", "c"],
    },
    {
      id: "pca-p1-operate-04",
      kind: "single",
      section: "operate",
      objective: "6.3 Deployment and release management: 6.3.a deployment and release management",
      prompt: "A ride-sharing company runs its dispatch API as a GKE Deployment of 12 replicas. During the last release, the team deleted all Pods so that new ones started with the new image, and the API returned errors for four minutes because each new Pod received traffic before it had loaded its routing data, which takes about 60 seconds. You need to plan the next release so that the API keeps serving every request while the Pods are replaced. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "rolling-updates",
          title: "Deploying a stateless Linux application",
          url: "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/stateless-apps",
          claim: "A Deployment's rolling update strategy sets the maximum surge, the maximum number of Pods that can be created over the desired number, and the maximum unavailable, the maximum number of Pods that can be unavailable during the update.",
        },
        {
          id: "readiness-probes",
          title: "Best practices for running cost-optimized Kubernetes applications on GKE",
          url: "https://docs.cloud.google.com/architecture/best-practices-for-running-cost-effective-kubernetes-applications-on-gke",
          claim: "GKE uses readiness probes to decide when to add Pods to or remove Pods from load balancers, and a readiness probe tells Kubernetes that an application isn't ready to receive traffic, for example while it loads large cache data at startup.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Change the Deployment's update strategy to Recreate, so that all old Pods stop before any new Pod starts and no old and new versions run at the same time.",
          feedback: "Incorrect. Stopping every old Pod before new ones are ready leaves no Pods to serve requests during the release, which repeats the last outage.",
          evidenceIds: ["rolling-updates"],
        },
        {
          id: "b",
          text: "Keep the rolling update strategy with its default settings, and update the image, without adding a readiness probe to the Pods.",
          feedback: "Incorrect. Without a readiness probe, a new Pod can receive traffic before it has loaded its routing data, so requests still fail during the rollout.",
          evidenceIds: ["readiness-probes", "rolling-updates"],
        },
        {
          id: "c",
          text: "Delete the Pods one at a time by hand, and wait one minute between deletions so that each new Pod has time to load its routing data.",
          feedback: "Incorrect. A fixed wait does not confirm that each Pod is ready before it receives traffic, while a rolling update with a readiness probe replaces Pods automatically.",
          evidenceIds: ["readiness-probes", "rolling-updates"],
        },
        {
          id: "d",
          text: "Add a readiness probe that passes after the routing data is loaded, and run a rolling update with a maximum surge of 1 and a maximum unavailable of 0.",
          feedback: "Correct. With a maximum unavailable of 0, no serving Pod is removed before its replacement is available, and the readiness probe keeps traffic away from each new Pod until its routing data is loaded.",
          evidenceIds: ["rolling-updates", "readiness-probes"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p1-operate-05",
      kind: "single",
      section: "operate",
      objective: "6.4 Assisting with the support of deployed solutions: 6.4.a assisting with the support of deployed solutions",
      prompt: "An airline's customer-service chatbot calls a Gemini model on Agent Platform with pay-as-you-go pricing through the global endpoint. Every weekday between 07:00 and 09:00, when passengers rebook after overnight delays, about 8% of requests fail with error 429, even though the client already retries with truncated exponential backoff. The traffic in that window is predictable and cannot move to other hours, and the airline wants a consistent experience for passengers during the peak. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "error-429",
          title: "Error code 429",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/deploy/error-code-429",
          claim: "Error code 429 is returned when requests exceed the capacity allocated to process them. For pay-as-you-go, the options include using the global endpoint instead of a regional endpoint, retrying with truncated exponential backoff, and smoothing traffic, and a Provisioned Throughput subscription reserves throughput for specific models.",
        },
        {
          id: "provisioned-throughput",
          title: "Provisioned Throughput overview",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/provisioned-throughput",
          claim: "Provisioned Throughput is a fixed-cost, fixed-term subscription that reserves throughput for supported generative AI models, suited to real-time production applications such as chatbots, critical workloads that need high throughput, and a consistent and predictable user experience.",
        },
        {
          id: "model-garden",
          title: "Overview of Model Garden",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-garden/explore-models",
          claim: "Model Garden is a model library that helps you discover, test, customize, and deploy models from Google and Google partners.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Increase the number of retries and the maximum backoff time in the client, so that failed requests keep retrying until capacity becomes available.",
          feedback: "Incorrect. The client already retries with backoff, and more retries only delay passengers' answers while the pay-as-you-go capacity is unavailable.",
          evidenceIds: ["error-429"],
        },
        {
          id: "b",
          text: "Deploy an open model from Model Garden on dedicated GPU endpoints in three regions, and send all chatbot traffic to those endpoints instead of Gemini.",
          feedback: "Incorrect. Self-deployed endpoints add capacity for the airline to size and run and change the model, while Provisioned Throughput reserves capacity for the Gemini model in use.",
          evidenceIds: ["model-garden", "provisioned-throughput"],
        },
        {
          id: "c",
          text: "Purchase Provisioned Throughput for the Gemini model, sized for the morning peak, so that reserved throughput serves the requests in that window.",
          feedback: "Correct. Provisioned Throughput reserves throughput for the model through a fixed-term subscription, which suits a critical chatbot that needs a consistent experience at a known peak.",
          evidenceIds: ["provisioned-throughput", "error-429"],
        },
        {
          id: "d",
          text: "Switch the chatbot to the regional endpoint in the region closest to most passengers, so that its requests use that region's capacity.",
          feedback: "Incorrect. Google lists using the global endpoint instead of a regional endpoint as a way to resolve 429 errors, so moving to a regional endpoint goes the other way.",
          evidenceIds: ["error-429"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p1-operate-06",
      kind: "single",
      section: "operate",
      objective: "6.5 Evaluating quality control measures: 6.5.a evaluating quality control measures",
      prompt: "A video streaming company's playback API has an availability SLO of 99.9% over a rolling 28 days. In the current period, frequent feature releases have caused several short outages, and the error budget is nearly spent with 12 days left. Product managers want to keep shipping features every week, while the SRE team wants a quality control measure that keeps releases from putting the SLO at risk. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "slo-concepts",
          title: "Concepts in service monitoring",
          url: "https://docs.cloud.google.com/stackdriver/docs/solutions/slo-monitoring",
          claim: "The error budget quantifies how much a service can fail during the compliance period and still meet its SLO, and the SLO determines the error budget. You can use the error budget to manage deployments of new versions: if it is close to depleted, risky actions like pushing new updates might violate the SLO.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Adopt an error budget policy that pauses feature releases when the error budget is nearly spent and resumes them once the budget recovers.",
          feedback: "Correct. When the error budget is close to depleted, pushing new updates might violate the SLO, so pausing feature releases until the budget recovers manages that risk.",
          evidenceIds: ["slo-concepts"],
        },
        {
          id: "b",
          text: "Lower the SLO to 99% so that the remaining error budget becomes large enough to absorb the weekly feature releases.",
          feedback: "Incorrect. Because the SLO determines the error budget, lowering it only enlarges the budget on paper and reduces the reliability promised to users instead of controlling release risk.",
          evidenceIds: ["slo-concepts"],
        },
        {
          id: "c",
          text: "Add more replicas of the playback API so that it can serve more traffic during the remaining 12 days of the period.",
          feedback: "Incorrect. More capacity does not address the release failures that spent the budget, so weekly releases still risk violating the SLO.",
          evidenceIds: ["slo-concepts"],
        },
        {
          id: "d",
          text: "Keep releasing every week, and review SLO compliance at the end of the period to decide what to change in the next period.",
          feedback: "Incorrect. Waiting for the end of the period keeps pushing updates while the budget is nearly depleted, which is when updates might violate the SLO.",
          evidenceIds: ["slo-concepts"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p1-operate-07",
      kind: "single",
      section: "operate",
      objective: "6.6 Ensuring the reliability of solutions in production: 6.6.a ensuring the reliability of solutions in production",
      prompt: "A bank runs its payment API in two regions behind a global external Application Load Balancer, with a Cloud SQL primary in one region and a cross-region replica in the other. The disaster recovery plan says that traffic and the database fail over to the second region within 15 minutes, but the failover has never been exercised. Auditors require evidence that the failover works, and the bank must not put customer payments at risk while it gathers that evidence. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [recoveryTesting],
      choices: [
        {
          id: "a",
          text: "Shut down the primary region's backends and the Cloud SQL primary in production during business hours, and measure how long payments take to recover.",
          feedback: "Incorrect. Failing production during business hours without safety measures puts customer payments at risk, while a staging environment that replicates production does not.",
          evidenceIds: ["recovery-testing"],
        },
        {
          id: "b",
          text: "Inject a regional failure into a staging environment that replicates production, run the failover runbook, and record the recovery time and data loss as evidence.",
          feedback: "Correct. A test that includes a regional failover verifies that the automated failover works, and a staging environment that replicates production produces the evidence without risking customer payments.",
          evidenceIds: ["recovery-testing"],
        },
        {
          id: "c",
          text: "Review the failover configuration and the runbook in a meeting with the auditors, and sign off that every step is documented correctly.",
          feedback: "Incorrect. A review of documents does not show that the automated failover mechanisms work, which periodic tests that include regional failovers verify.",
          evidenceIds: ["recovery-testing"],
        },
        {
          id: "d",
          text: "Turn on more detailed monitoring and alerting in both regions, so that the team would detect a real regional outage faster.",
          feedback: "Incorrect. Faster detection does not show that the failover works, which only a test that includes a regional failover demonstrates.",
          evidenceIds: ["recovery-testing"],
        },
      ],
      correctChoiceId: "b",
    },
  ],
} satisfies QuestionSection<"operate">;
