import type { QuestionSection } from "../../../../domain/questions";

const altostratCaseStudy = {
  id: "case-study",
  title: "Altostrat Media Case Study",
  url: "https://services.google.com/fh/files/misc/v6.1_pca_altostrat_media_case_study_english.pdf",
} as const;

const knightMotivesCaseStudy = {
  id: "case-study",
  title: "KnightMotives Automotive Case Study",
  url: "https://services.google.com/fh/files/misc/v6.1_pca_knightmotives_automotive_case_study_english.pdf",
} as const;

const cloudTrace = {
  id: "cloud-trace",
  title: "Cloud Trace overview",
  url: "https://docs.cloud.google.com/trace/docs/overview",
  claim: "Cloud Trace is a distributed tracing system that tracks request latency and helps you troubleshoot performance bottlenecks across services. It measures end-to-end request latency and pinpoints which downstream dependencies cause delays.",
} as const;

const drPlanning = {
  id: "dr-planning",
  title: "Disaster recovery planning guide",
  url: "https://docs.cloud.google.com/architecture/dr-scenarios-planning-guide",
  claim: "DR is a subset of business continuity planning. A business impact analysis defines the recovery time objective (RTO) and the recovery point objective (RPO), and the smaller these values are, the more an application typically costs to run.",
} as const;

export const practiceExamTwoAnalyzeSection = {
  section: "analyze",
  author: "claude-opus-5.5-p2-analyze-20261007",
  questions: [
    {
      id: "pca-p2-analyze-01",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.a software development lifecycle",
      prompt: "A startup's developers deploy straight from their laptops to the one Google Cloud project that runs its development, staging, and production workloads. Last week, a developer testing a schema change deleted a production table. The CTO wants developers to experiment freely without any access to production, and wants only container images that passed testing to reach production, exactly as they were tested. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          id: "environment-folders",
          title: "Organization structure",
          url: "https://docs.cloud.google.com/architecture/blueprints/security-foundations/organization-structure",
          claim: "The enterprise foundations blueprint groups projects into folders by environment and applies configurations such as allow policies and organization policies at the folder level, which all resources in the folder inherit.",
        },
        {
          id: "build-once",
          title: "Best practices for continuous integration and delivery to Google Kubernetes Engine",
          url: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/best-practices-continuous-integration-delivery-kubernetes",
          claim: "Container images shouldn't be rebuilt as they pass through the stages of a CI/CD pipeline. To ensure that the image you tested is the image you deploy, build once and promote along your environments, which are ideally separate development, pre-production, and production environments.",
        },
        {
          id: "iam-conditions",
          title: "Overview of IAM Conditions",
          url: "https://docs.cloud.google.com/iam/docs/conditions-overview",
          claim: "In a role binding, a condition expression can allow access only during specified working hours, but conditions can't be used when you grant legacy basic roles, such as Owner, Editor, and Viewer.",
        },
        {
          id: "labels-overview",
          title: "Labels overview",
          url: "https://docs.cloud.google.com/resource-manager/docs/labels-overview",
          claim: "Labels can be used as queryable annotations for resources, but they can't be used to set conditions on policies.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Keep the single project, and grant developers predefined roles with an IAM condition that allows access only during business hours, so that they cannot change production at night.",
          feedback: "Incorrect. A time-based IAM condition still lets developers change production during business hours, while separate environment projects let IAM keep developers out of production entirely.",
          evidenceIds: ["iam-conditions", "environment-folders"],
        },
        {
          id: "b",
          text: "Keep the single project, create separate VPC networks for development, staging, and production, and label every resource with its environment.",
          feedback: "Incorrect. Labels can't be used to set conditions on IAM policies, and separate VPC networks don't remove developers' roles on the project, so developers keep their access to production resources in the shared project.",
          evidenceIds: ["labels-overview", "environment-folders"],
        },
        {
          id: "c",
          text: "Create separate projects for development, staging, and production, give developers access only to development, and promote the same tested images through staging to production with a pipeline.",
          feedback: "Correct. Separate projects let IAM keep developers out of production, and promoting the same image instead of rebuilding it ensures that production runs exactly what was tested.",
          evidenceIds: ["environment-folders", "build-once"],
        },
        {
          id: "d",
          text: "Create separate projects for development, staging, and production, give developers access only to development, and rebuild the images from source for each environment in a deployment pipeline.",
          feedback: "Incorrect. Rebuilding the images for each environment means that production might run something other than the tested image, while Google recommends building once and promoting.",
          evidenceIds: ["build-once"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p2-analyze-02",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.c troubleshooting and root cause analysis",
      prompt: "A furniture retailer runs online ordering as eight microservices on GKE. Since last week's release, checkout sometimes takes 6 seconds instead of under one second. Error rates, CPU, and memory look normal, and the logs show no errors, so the team cannot tell which downstream call slows checkout. The team wants to find the cause before it changes capacity or rolls back the release. What should you do first?",
      verifiedOn: "2026-10-07",
      evidence: [
        cloudTrace,
        {
          id: "trace-instrumentation",
          title: "Instrument for Cloud Trace",
          url: "https://docs.cloud.google.com/trace/docs/setup",
          claim: "To instrument an application for Cloud Trace, Google recommends an open-source, vendor-neutral instrumentation framework such as OpenTelemetry.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Instrument the services with OpenTelemetry and send the data to Cloud Trace, then examine slow checkout requests to see which downstream call takes the time.",
          feedback: "Correct. Cloud Trace measures end-to-end request latency and pinpoints which downstream dependencies cause delays, so it finds the slow call before the team changes capacity or rolls back the release.",
          evidenceIds: ["cloud-trace", "trace-instrumentation"],
        },
        {
          id: "b",
          text: "Add nodes and replicas to every service, because extra capacity usually removes slow requests during busy periods.",
          feedback: "Incorrect. Adding capacity before the cause is known is what the team wants to avoid, and normal CPU and memory suggest that capacity is not what slows checkout.",
          evidenceIds: ["cloud-trace"],
        },
        {
          id: "c",
          text: "Instrument the services with OpenTelemetry and send the data to Cloud Monitoring, then compare each service's CPU and memory usage during slow and fast checkouts.",
          feedback: "Incorrect. CPU and memory already look normal, so charting them again does not show which downstream call slows checkout, which a trace of each slow request does.",
          evidenceIds: ["cloud-trace"],
        },
        {
          id: "d",
          text: "Roll back last week's release on all services, and then redeploy the changes one service at a time until checkout slows down again.",
          feedback: "Incorrect. Rolling back the release before the cause is known is what the team wants to avoid, while traces of the slow requests show the slow downstream call directly.",
          evidenceIds: ["cloud-trace"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p2-analyze-03",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.b continuous integration and continuous deployment",
      caseStudyId: "altostrat-media",
      prompt: "Altostrat Media builds container images with Cloud Build and stores them in Artifact Registry. Each release must reach its GKE clusters in Google Cloud and its on-premises Kubernetes clusters, which are registered to Altostrat's fleet. Today, engineers run kubectl by hand against each cluster, so the on-premises clusters often run different versions than the GKE clusters. Altostrat wants one managed, central pipeline that promotes each release through the same sequence of environments in both places. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          ...altostratCaseStudy,
          claim: "Altostrat wants to modernize its CI/CD for container deployments with one central management platform, and it needs Kubernetes environments both in its own data center and in Google Cloud.",
        },
        {
          id: "cloud-deploy",
          title: "Overview of Cloud Deploy",
          url: "https://docs.cloud.google.com/deploy/docs/overview",
          claim: "Cloud Deploy is a managed service that automates the delivery of applications to a series of target environments in a defined promotion sequence.",
        },
        {
          id: "deploy-attached",
          title: "Deploy to GKE attached clusters",
          url: "https://docs.cloud.google.com/deploy/docs/anthos-targets",
          claim: "Cloud Deploy can deploy container workloads to clusters that it can access through Connect gateway, which enables deployment to AWS, Azure, and on-premises clusters, including existing Kubernetes clusters that are registered to a fleet.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Write a script that runs kubectl apply against each cluster's kubeconfig file for every release, and run the script from a Compute Engine VM.",
          feedback: "Incorrect. A script on a self-managed VM is hand-built tooling with no promotion sequence, while Cloud Deploy is a managed service that promotes each release through its targets in a defined order.",
          evidenceIds: ["cloud-deploy"],
        },
        {
          id: "b",
          text: "Configure Cloud Build triggers to deploy each new image to all clusters at the same time, and ask the release manager to approve each build.",
          feedback: "Incorrect. Deploying to all clusters at once skips the promotion sequence through environments, while Cloud Deploy promotes a release through targets in a defined order.",
          evidenceIds: ["cloud-deploy"],
        },
        {
          id: "c",
          text: "Use Cloud Deploy with a delivery pipeline whose targets include only the GKE clusters, and keep deploying to the on-premises clusters with kubectl by hand as today.",
          feedback: "Incorrect. Leaving the on-premises clusters to kubectl keeps the manual deployments that cause drift, while Cloud Deploy can reach fleet-registered on-premises clusters through Connect gateway.",
          evidenceIds: ["deploy-attached"],
        },
        {
          id: "d",
          text: "Use Cloud Deploy with a delivery pipeline whose targets include the GKE clusters and the fleet's on-premises clusters, which Cloud Deploy reaches through Connect gateway.",
          feedback: "Correct. Cloud Deploy is a managed service that delivers each release to a series of targets in a defined promotion sequence, and it reaches the fleet's on-premises clusters through Connect gateway, so one pipeline serves both places.",
          evidenceIds: ["cloud-deploy", "deploy-attached", "case-study"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p2-analyze-04",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.d testing and validation of software and infrastructure",
      prompt: "A platform team maintains Terraform modules for the shared network that 30 production projects use. Last month, a change that passed code review removed a route in production and caused an outage. Before any module change reaches production, the team now wants evidence that the changed modules deploy correctly and work together, and its tests must not put production resources at risk. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          id: "terraform-testing",
          title: "Best practices for testing",
          url: "https://docs.cloud.google.com/docs/terraform/best-practices/testing",
          claim: "Static analysis, such as terraform validate, tests the syntax and structure of a configuration without deploying resources. Module integration tests deploy a module into a test environment and verify the resources, and end-to-end tests of a whole environment give the greatest confidence that changes don't break production. Keep the test environment isolated from development and production projects to avoid accidental deletions during cleanup.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Apply each module change to production during a low-traffic window, and roll it back from version control if monitoring then shows errors.",
          feedback: "Incorrect. Applying changes to production to test them puts production resources at risk, while end-to-end tests in an isolated environment show whether a change breaks production before it gets there.",
          evidenceIds: ["terraform-testing"],
        },
        {
          id: "b",
          text: "In the CI pipeline, run terraform validate and then deploy the changed modules to an isolated test project for integration and end-to-end tests before production.",
          feedback: "Correct. Static analysis catches configuration errors, and integration and end-to-end tests in an environment isolated from production show that the modules deploy and work together without risking production resources.",
          evidenceIds: ["terraform-testing"],
        },
        {
          id: "c",
          text: "In the CI pipeline, run terraform validate and then have two senior reviewers approve the changed modules before the pipeline applies them to the production projects.",
          feedback: "Incorrect. Static analysis and reviews do not deploy the modules, so they cannot show that the modules work together, and the change that caused the outage had passed review.",
          evidenceIds: ["terraform-testing"],
        },
        {
          id: "d",
          text: "Deploy test copies of the changed modules into the production projects with a test- prefix, and delete the copies after each test run.",
          feedback: "Incorrect. Tests in the production projects risk accidental deletions during cleanup, which is why Google recommends a test environment isolated from production projects.",
          evidenceIds: ["terraform-testing"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p2-analyze-05",
      kind: "single",
      section: "analyze",
      objective: "4.1 Analyzing and defining technical processes: 4.1.f disaster recovery",
      prompt: "A logistics company runs an internal route-history application on two Compute Engine VMs in one region, and keeps a full copy running in a second region at all times. A new business impact analysis says the application can be offline for up to 12 hours after a regional outage and can lose up to 24 hours of data. The CFO wants to minimize the cost of disaster recovery while still meeting those objectives. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        drPlanning,
        {
          id: "dr-patterns",
          title: "Disaster recovery scenarios for applications",
          url: "https://docs.cloud.google.com/architecture/dr-scenarios-for-applications",
          claim: "In a cold pattern, you have minimal resources in the DR environment, just enough to enable a recovery scenario. A warm pattern keeps RTO and RPO values as small as possible without the effort and expense of a fully highly available configuration.",
        },
        {
          id: "snapshots",
          title: "About archive and standard disk snapshots",
          url: "https://docs.cloud.google.com/compute/docs/disks/snapshots",
          claim: "Standard snapshots are geo-redundant data backups that safeguard against local, zonal, and regional outages. Instant snapshots are local backups for quick restores after user error or application corruption, stored only in the same zone or region as the source disk.",
        },
        {
          id: "instant-restore",
          title: "Restore disks from instant snapshots",
          url: "https://docs.cloud.google.com/compute/docs/disks/restore-instant-snapshot",
          claim: "When you create a disk from an instant snapshot, the new disk always has the same type, location, and encryption as the source disk of the snapshot.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Keep the full copy running in the second region, and move the VMs in both regions to smaller machine types to reduce the cost.",
          feedback: "Incorrect. A copy that runs all the time is far more than a 12-hour recovery objective needs, because smaller recovery objectives cost more, and smaller machine types still pay for two regions.",
          evidenceIds: ["dr-planning"],
        },
        {
          id: "b",
          text: "Replace the full copy with a warm standby in the second region that receives continuous replication from the primary VMs.",
          feedback: "Incorrect. A warm standby keeps recovery objectives as small as possible, which costs more than objectives of 12 hours of downtime and 24 hours of data loss require.",
          evidenceIds: ["dr-patterns", "dr-planning"],
        },
        {
          id: "c",
          text: "Remove the copy in the second region, take daily standard snapshots of the disks, and keep templates that recreate the VMs from the snapshots in another region.",
          feedback: "Correct. A cold pattern keeps only the resources needed for recovery, daily standard snapshots are geo-redundant backups that survive a regional outage, and recreating the VMs within 12 hours meets both objectives.",
          evidenceIds: ["dr-patterns", "snapshots", "dr-planning"],
        },
        {
          id: "d",
          text: "Remove the copy in the second region, take daily instant snapshots of the disks, and restore new disks and VMs from the latest instant snapshots after an outage.",
          feedback: "Incorrect. Instant snapshots are stored only in the source disk's zone or region, and disks restored from them keep that location, so they don't protect against a regional outage as geo-redundant standard snapshots do.",
          evidenceIds: ["snapshots", "instant-restore"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p2-analyze-06",
      kind: "single",
      section: "analyze",
      objective: "4.2 Analyzing and defining business processes: 4.2.a stakeholder management",
      caseStudyId: "knightmotives-automotive",
      prompt: "KnightMotives Automotive plans to license driving data to insurers to help pay for its AI investments, but the initiative has stalled. The legal team worries about EU data protection rules, dealer relations fears a backlash from dealers, security wants new controls after past breaches, and finance wants revenue this year. Each group blocks the others' proposals, and no one owns the decision. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          ...knightMotivesCaseStudy,
          claim: "KnightMotives wants to earn money from its corporate data to fund new technology, treats security as a top concern after earlier breaches, considers following EU data protection rules critical, has a strained relationship with dealers, and wants better communication between its business and technical teams.",
        },
        {
          id: "adoption-framework",
          title: "Google Cloud Adoption Framework",
          url: "https://services.google.com/fh/files/misc/google_cloud_adoption_framework_whitepaper.pdf",
          claim: "The effectiveness of cloud adoption depends on a top-down mandate from sponsors and bottom-up cross-functional collaboration among teams. Sponsors control which resources are allocated and bring stakeholders from different business functions and reporting lines together, and executive sponsorship gives early adopters a widely recognized mandate for change.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Ask an executive sponsor to bring legal, dealer relations, security, and finance into one working group that agrees on goals, constraints, and success measures before a design is chosen.",
          feedback: "Correct. A sponsor brings stakeholders from different business functions together and gives the initiative a widely recognized mandate, which the stalled groups lack, and cross-functional collaboration then drives the work.",
          evidenceIds: ["adoption-framework", "case-study"],
        },
        {
          id: "b",
          text: "Build a prototype data platform first, so that the groups can see what the initiative would deliver before they discuss their concerns.",
          feedback: "Incorrect. A prototype is a technical answer to a disagreement among stakeholders, and it postpones the agreement on goals and constraints that a sponsored cross-functional group would reach.",
          evidenceIds: ["adoption-framework"],
        },
        {
          id: "c",
          text: "Launch a pilot with one insurer now, and bring in legal and security after the pilot shows its first results.",
          feedback: "Incorrect. Starting without legal and security ignores the EU data protection and security concerns that KnightMotives treats as critical.",
          evidenceIds: ["case-study"],
        },
        {
          id: "d",
          text: "Ask each group to write its own requirements document, and choose the design that meets the largest number of the requirements.",
          feedback: "Incorrect. Separate documents keep the groups apart, and counting requirements does not resolve the conflicts between them, which a sponsored cross-functional group can do.",
          evidenceIds: ["adoption-framework"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p2-analyze-07",
      kind: "single",
      section: "analyze",
      objective: "4.2 Analyzing and defining business processes: 4.2.e customer success management",
      prompt: "A SaaS company sells route planning to delivery fleets and promises each customer that its daily routes are ready by 6:00 AM local time. Several customers say they do not get the promised value, while account managers report only login counts and the platform team reports server uptime. The company wants to use its own measurements to show each customer whether the promised value was delivered and when it was not. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          id: "user-experience",
          title: "Define reliability based on user-experience goals",
          url: "https://docs.cloud.google.com/architecture/framework/reliability/define-reliability-based-on-user-experience-goals",
          claim: "To measure the user experience, distinguish internal system behavior from user-facing problems, and prioritize metrics that reflect your users' actual experience.",
        },
        {
          id: "slo-concepts",
          title: "Concepts in service monitoring",
          url: "https://docs.cloud.google.com/stackdriver/docs/solutions/slo-monitoring",
          claim: "A service-level indicator (SLI) is a measurement of performance, and a service-level objective (SLO) is a statement of desired performance that is set for the SLI values.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Send each customer a monthly report of server uptime and CPU utilization for the infrastructure that runs its route planning.",
          feedback: "Incorrect. Server uptime and CPU are internal measures that can look healthy while routes are late, while Google recommends metrics that reflect the users' actual experience.",
          evidenceIds: ["user-experience"],
        },
        {
          id: "b",
          text: "Send each customer a monthly report of how many of its users signed in and which features they used most often.",
          feedback: "Incorrect. Sign-ins and feature use show activity, not whether routes were ready by 6:00 AM, which is the value that the company promised.",
          evidenceIds: ["user-experience"],
        },
        {
          id: "c",
          text: "Send all customers a satisfaction survey once a year, and share the average score with the account managers.",
          feedback: "Incorrect. A yearly average score arrives long after shortfalls happen and does not show each customer whether its routes were ready on time.",
          evidenceIds: ["user-experience"],
        },
        {
          id: "d",
          text: "Define an SLO for routes ready by 6:00 AM, measured for each customer, and review each customer's SLO report and any shortfalls with that customer every month.",
          feedback: "Correct. An SLO on the promised outcome, measured for each customer, reflects the customers' actual experience, and a monthly review shows each customer when its routes were ready on time and when they were not.",
          evidenceIds: ["slo-concepts", "user-experience"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p2-analyze-08",
      kind: "single",
      section: "analyze",
      objective: "4.2 Analyzing and defining business processes: 4.2.g business continuity",
      prompt: "A home-care nursing company's nurses record each visit, including the medications given, in a cloud app on their tablets. Many visits happen in homes without mobile coverage, and last year the app was unavailable for six hours during an outage. Nurses must keep caring for patients and recording medications during such disruptions, and every record must reach the app afterward. The company cannot ship new app features this quarter. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        drPlanning,
        {
          id: "bcp",
          title: "Business continuity with CI/CD on Google Cloud",
          url: "https://docs.cloud.google.com/architecture/business-continuity-with-cicd-on-google-cloud",
          claim: "Business continuity plan development includes writing step-by-step instructions for employees to follow during a disruption. After the plan is documented, test it through simulations and exercises, and train employees on their roles and responsibilities during a disruption.",
        },
        {
          id: "incident-procedures",
          title: "Manage incidents and problems",
          url: "https://docs.cloud.google.com/architecture/framework/operational-excellence/manage-incidents-and-problems",
          claim: "Clear roles and responsibilities, communication protocols, and escalation paths are essential for a coordinated response. Documenting the procedures in a runbook or playbook gives teams a standardized reference with the steps to take at each stage.",
        },
        {
          id: "recovery-testing",
          title: "Perform testing for recovery from failures",
          url: "https://docs.cloud.google.com/architecture/framework/reliability/perform-testing-for-recovery-from-failures",
          claim: "Run tests periodically, and ensure that your team is prepared to do manual interventions if the automated failover mechanisms fail.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Move the app to an active-active deployment in two regions, so that the app stays available to the nurses during an outage in one region.",
          feedback: "Incorrect. A second region keeps the app available during a regional outage, but it does not help nurses in homes without mobile coverage, while a documented manual procedure covers both kinds of disruption.",
          evidenceIds: ["bcp", "dr-planning"],
        },
        {
          id: "b",
          text: "Write a runbook for a paper fallback that assigns roles, explains how to record visits and enter them into the app afterward, and rehearse it every quarter.",
          feedback: "Correct. A business continuity plan includes step-by-step instructions for employees to follow during a disruption, and exercises and training on their roles prepare the nurses to record visits on paper while the app is unavailable.",
          evidenceIds: ["bcp", "incident-procedures", "recovery-testing"],
        },
        {
          id: "c",
          text: "Add alerts that notify the nurses' managers within one minute whenever the app becomes unavailable, so that the managers can call each nurse and decide what to do.",
          feedback: "Incorrect. Faster alerts report the disruption, but they give the nurses no prepared way to keep recording medications while the app is unavailable.",
          evidenceIds: ["incident-procedures"],
        },
        {
          id: "d",
          text: "Wait for the next disruption, observe what the nurses do, and then document the steps that worked best as the official procedure.",
          feedback: "Incorrect. Waiting leaves the nurses without a procedure during the next disruption, while a runbook that is prepared and rehearsed in advance is ready when it happens.",
          evidenceIds: ["incident-procedures", "recovery-testing"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p2-analyze-09",
      kind: "multiple",
      requiredSelections: 2,
      section: "analyze",
      objective: "4.2 Analyzing and defining business processes: 4.2.f cost optimization and resource optimization",
      prompt: "A media company's finance team must charge each product team for its Google Cloud costs every month and analyze trends by product and environment. The company has 40 projects, and several teams share some of them. Today, finance downloads invoices and splits costs by hand in spreadsheets. Finance wants cost attribution that also works inside shared projects, and ad hoc SQL analysis of past months. What should you do? Choose two.",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          id: "labels",
          title: "Labels overview",
          url: "https://docs.cloud.google.com/resource-manager/docs/labels-overview",
          claim: "You can attach labels to resources to organize them and manage costs, and information about labels is forwarded to the billing system so that you can break down billed charges by label.",
        },
        {
          id: "billing-export",
          title: "Export Cloud Billing data to BigQuery",
          url: "https://docs.cloud.google.com/billing/docs/how-to/export-data-bigquery",
          claim: "Cloud Billing export to BigQuery exports detailed billing data, such as usage, cost estimates, and pricing data, automatically throughout the day to a BigQuery dataset for detailed analysis.",
        },
        {
          id: "budgets",
          title: "Create, edit, or delete budgets and budget alerts",
          url: "https://docs.cloud.google.com/billing/docs/how-to/budgets",
          claim: "Budgets track actual costs against planned costs, and budget alert threshold rules trigger email notifications.",
        },
        {
          id: "billing-accounts",
          title: "Enable, disable, or change billing for a project",
          url: "https://docs.cloud.google.com/billing/docs/how-to/modify-project",
          claim: "A Cloud Billing account accrues and calculates costs for the resources and services in each of the projects that are linked to it.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Define team, product, and environment labels, and apply them to every resource through the company's infrastructure-as-code modules.",
          feedback: "Correct. Labels are forwarded to the billing system, so charges can be broken down by team, product, and environment, including inside shared projects.",
          evidenceIds: ["labels"],
        },
        {
          id: "b",
          text: "Create a budget with alert thresholds for each project, and send the budget alerts to the finance team's mailing list.",
          feedback: "Incorrect. Budget alerts compare actual spend with a planned amount and send email notifications, but they don't produce each team's monthly charges or the SQL analysis that finance needs.",
          evidenceIds: ["budgets"],
        },
        {
          id: "c",
          text: "Create a separate Cloud Billing account for each product team, and link each team's projects to its own billing account.",
          feedback: "Incorrect. A billing account accrues the costs of whole projects, so it cannot split the costs of a project that several teams share.",
          evidenceIds: ["billing-accounts"],
        },
        {
          id: "d",
          text: "Enable Cloud Billing export to BigQuery, and give finance a dataset where it can query costs grouped by the resource labels.",
          feedback: "Correct. The export sends detailed usage and cost data to BigQuery throughout the day, where finance can query past months by label with SQL.",
          evidenceIds: ["billing-export", "labels"],
        },
        {
          id: "e",
          text: "Export each month's invoice as a PDF, and divide every shared project's total cost evenly among the teams that use it.",
          feedback: "Incorrect. An even split ignores how much each team actually uses, while labels in the billing data break charges down by the resources that each team uses.",
          evidenceIds: ["labels"],
        },
      ],
      correctChoiceIds: ["a", "d"],
    },
  ],
} satisfies QuestionSection<"analyze">;
