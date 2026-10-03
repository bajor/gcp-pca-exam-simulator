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
  claim: "Simulate failure scenarios by planning and executing failures with tools like Chaos Monkey or with custom scripts that cause failures of critical services, and test cascading failure impacts, such as how frontend systems behave when backend services are unavailable. Introduce load testing alongside failure scenarios, and use Cloud Monitoring and Cloud Logging to capture metrics and events during the test.",
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
          claim: "After an incident, conduct a post-incident review (PIR), also known as a postmortem, that identifies the root cause, contributing factors, and lessons learned and documents the timeline and recommended actions, which you implement to prevent recurrence. The organization must foster a blameless culture that focuses on learning and improvement rather than assigning blame, which encourages people to report incidents without fear of retribution.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Require two managers to approve each production change from now on, so that one engineer cannot push a risky change alone.",
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
          feedback: "Incorrect. Naming an engineer at fault assigns blame, while post-incident reviews need a blameless culture in which people report incidents without fear of retribution.",
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
      prompt: "EHR Healthcare has started running its customer-facing applications on GKE. Its monitoring sends alerts by email to a shared mailbox, where they are often ignored, and many alerts fire on high CPU usage that never affects customers. EHR wants to act early on problems that threaten the 99.9% availability that its customer-facing systems must meet, and it wants each of those alerts to reach the engineer on call within minutes. What should you do? Choose two.",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          ...ehrCaseStudy,
          claim: "EHR's alerts arrive by email and tend to be ignored, EHR wants a single view of system health and early action on problems, its customer-facing web applications already run in containers on Kubernetes, and its customer-facing systems need at least 99.9% availability.",
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
          text: "Send the alerts about availability problems to an on-call notification channel, such as PagerDuty, and keep email as a redundant channel for the same alerts.",
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
          text: "Create an alerting policy for each metric that the services export, so that the team sees changes in service behavior as they happen.",
          feedback: "Incorrect. Alerts on each metric include causes such as the CPU alerts that never affected customers, while burn-rate alerts warn when the availability SLO is in danger.",
          evidenceIds: ["burn-rate-alerts", "case-study"],
        },
      ],
      correctChoiceIds: ["a", "c"],
    },
    {
      id: "pca-p1-operate-04",
      kind: "single",
      section: "operate",
      objective: "6.3 Deployment and release management: 6.3.a deployment and release management",
      prompt: "A ride-sharing company runs its dispatch API as a GKE Deployment of 12 replicas. During the last release, the team deleted all Pods so that new ones started with the new image, and the API returned errors for four minutes because each new Pod received traffic before it had loaded its routing data, which takes about 60 seconds. The API already shuts down gracefully when a Pod is stopped. You need to plan the next release so that the API keeps serving every request while the Pods are replaced. What should you do?",
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
          claim: "GKE uses readiness probes to decide when to add Pods to or remove Pods from load balancers, and a readiness probe tells Kubernetes that an application isn't ready to receive traffic, for example while it loads large cache data at startup. Pods must also shut down gracefully, because if an application terminates before Kubernetes updates the load balancers, some requests might cause errors on the client side.",
        },
        {
          id: "deployment-patterns",
          title: "Best practices for continuous integration and delivery to Google Kubernetes Engine",
          url: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/best-practices-continuous-integration-delivery-kubernetes",
          claim: "GKE deployment patterns include recreating a deployment, which fully scales down the existing application version before it scales up the new version, and a rolling update, which updates a subset of the running instances at a time instead of all of them at once.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Change the Deployment's update strategy to Recreate, so that all old Pods stop before any new Pod starts and no old and new versions run at the same time.",
          feedback: "Incorrect. Recreating a deployment fully scales down the old version before the new version scales up, so no Pods serve requests during the release, which repeats the last outage.",
          evidenceIds: ["deployment-patterns"],
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
      prompt: "An airline's customer-service chatbot calls a Gemini model on Agent Platform with pay-as-you-go pricing through the global endpoint. Passengers in every time zone use the chatbot, so its traffic stays high and steady around the clock, and about 8% of requests fail with error 429, even though the client already retries with truncated exponential backoff. The airline wants a consistent experience for passengers, and it wants to keep its current Gemini model. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "error-429",
          title: "Error code 429",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/deploy/error-code-429",
          claim: "Error code 429 is returned when requests exceed the capacity allocated to process them. For pay-as-you-go, the options include using the global endpoint instead of a regional endpoint, retrying with truncated exponential backoff, smoothing traffic, and subscribing to Provisioned Throughput for a more consistent level of service.",
        },
        {
          id: "consumption-options",
          title: "Consumption options",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/deploy/consumption-options",
          claim: "Provisioned Throughput provides guaranteed throughput for a commitment period and is ideal for critical, steady-state, always-on workloads where an SLA is needed; for the most consistent performance, use Provisioned Throughput. It can cause underutilization if traffic has spikes.",
        },
        {
          id: "provisioned-throughput-models",
          title: "Supported models",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/provisioned-throughput/supported-models",
          claim: "Provisioned Throughput supports the global endpoint for Google models; to assign Provisioned Throughput to a model's global endpoint, select global as the region when you place the order.",
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
          claim: "Model Garden is a model library that helps you discover, test, customize, and deploy models from Google and Google partners; for open models, you are charged for the compute resources used to deploy the model to an endpoint.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Increase the number of retries and the maximum backoff time in the client, so that failed requests keep retrying until capacity becomes available.",
          feedback: "Incorrect. The client already retries with backoff, and longer retries make passengers wait longer, while Google recommends Provisioned Throughput for a more consistent level of service.",
          evidenceIds: ["error-429"],
        },
        {
          id: "b",
          text: "Deploy an open model from Model Garden on dedicated GPU endpoints in three regions, and send all chatbot traffic to those endpoints instead of Gemini.",
          feedback: "Incorrect. Sending the traffic to an open model replaces the Gemini model that the airline wants to keep, and the airline pays for the compute that the self-deployed endpoints use.",
          evidenceIds: ["model-garden"],
        },
        {
          id: "c",
          text: "Purchase Provisioned Throughput for the Gemini model on the global endpoint, sized for the chatbot's steady traffic, so that reserved throughput serves its requests.",
          feedback: "Correct. Provisioned Throughput reserves throughput for the model through a fixed-term subscription, suits critical, steady, always-on workloads that need consistent performance, and can be assigned to the global endpoint.",
          evidenceIds: ["provisioned-throughput", "consumption-options", "provisioned-throughput-models"],
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
      prompt: "A video streaming company's playback API has an availability SLO of 99.9%, measured over each calendar month. This month, frequent feature releases have caused several short outages, and the error budget is nearly spent with 12 days left. The 99.9% target matches the availability that viewers notice, so the company will not lower it. Product managers want to ship features every week whenever reliability allows, and the SRE team wants a quality control measure that keeps releases from putting the SLO at risk. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "slo-concepts",
          title: "Concepts in service monitoring",
          url: "https://docs.cloud.google.com/stackdriver/docs/solutions/slo-monitoring",
          claim: "The error budget quantifies how much a service can fail during the compliance period and still meet its SLO, and the SLO determines the error budget; if it is close to depleted, risky actions like pushing new updates might violate the SLO. If users cannot tell the difference between 99% and 99.9% availability, use the lower value as the SLO. Calendar-based compliance periods reset the error budget on calendar boundaries.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Adopt an error budget policy that pauses feature releases while the error budget is nearly spent and resumes them when the budget resets.",
          feedback: "Correct. When the error budget is close to depleted, pushing new updates might violate the SLO, so pausing feature releases until the calendar month resets the budget manages that risk without lowering the target.",
          evidenceIds: ["slo-concepts"],
        },
        {
          id: "b",
          text: "Lower the SLO to 99% so that the remaining error budget becomes large enough to absorb the weekly feature releases.",
          feedback: "Incorrect. Because the SLO determines the error budget, lowering it only enlarges the budget on paper, and Google advises a lower SLO only when users cannot tell the difference, while viewers notice this one.",
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
      prompt: "A food delivery company runs its order API on GKE, and the API calls a separate restaurant-availability service before it accepts each order. Last month, while traffic was normal, the availability service slowed down for 20 minutes, the API's requests waited on it, and customers could not place orders. The team has since added a 2-second timeout and a fallback that accepts the order and confirms availability later. Before the next release, you need evidence from the pre-production environment that the timeout and fallback work when the availability service slows down or stops responding. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [recoveryTesting],
      choices: [
        {
          id: "a",
          text: "Run a load test in the pre-production environment that sends three times the normal order traffic to the API, and confirm that its latency stays within target.",
          feedback: "Incorrect. A load test adds traffic while the availability service stays healthy, but the outage happened at normal traffic, so the test does not show how the API behaves when that backend service is slow or unavailable.",
          evidenceIds: ["recovery-testing"],
        },
        {
          id: "b",
          text: "Run a chaos experiment in the pre-production environment that makes the API's calls to the availability service slow or fail, and confirm that orders are still accepted.",
          feedback: "Correct. Making the calls to the availability service slow or fail simulates the failure that caused the outage, and Google recommends testing how a system behaves when the backend services that it depends on are unavailable.",
          evidenceIds: ["recovery-testing"],
        },
        {
          id: "c",
          text: "Run a chaos experiment in the pre-production environment that stops the API's own Pods one at a time, and confirm that the remaining Pods keep accepting orders.",
          feedback: "Incorrect. Stopping the API's own Pods tests whether the API survives the loss of its replicas, not how it behaves when the availability service that it depends on slows down or stops responding.",
          evidenceIds: ["recovery-testing"],
        },
        {
          id: "d",
          text: "Set up Cloud Monitoring dashboards for the API's error rate and the availability service's latency, and review them after the next release.",
          feedback: "Incorrect. Dashboards reviewed after the release produce no evidence from pre-production before the release, while a test that simulates the failure of the availability service does.",
          evidenceIds: ["recovery-testing"],
        },
      ],
      correctChoiceId: "b",
    },
  ],
} satisfies QuestionSection<"operate">;
