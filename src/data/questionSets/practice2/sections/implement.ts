import type { QuestionSection } from "../../../../domain/questions";

const knightMotivesCaseStudy = {
  id: "case-study",
  title: "KnightMotives Automotive Case Study",
  url: "https://services.google.com/fh/files/misc/v6.1_pca_knightmotives_automotive_case_study_english.pdf",
} as const;

const deployVerification = {
  id: "deploy-verification",
  title: "Verify your deployment",
  url: "https://docs.cloud.google.com/deploy/docs/verify-deployment",
  claim: "Cloud Deploy can verify that an application deployed to a target works correctly by running your own testing images after the deployment finishes, and if the verification fails, the rollout also fails.",
} as const;

const bqReference = {
  id: "bq-reference",
  title: "bq command-line tool reference",
  url: "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference",
  claim: "The bq load command loads data into a table, for example from a CSV file in Cloud Storage, and the bq cp command creates a copy of a table, a table clone, or a table snapshot.",
} as const;

export const practiceExamTwoImplementSection = {
  section: "implement",
  author: "claude-opus-5.5-p2-implement-20261007",
  questions: [
    {
      id: "pca-p2-implement-01",
      kind: "single",
      section: "implement",
      objective: "5.1 Advising development and operation teams to ensure the successful deployment of the solution: 5.1.a application and infrastructure deployment",
      prompt: "A media streaming company deploys its recommendation API to GKE with Cloud Deploy. Last month, a release with a bad model configuration reached all users at once and lowered engagement for a day before anyone rolled it back. The team now wants each release to reach only a small share of traffic first, to run its automated API tests against the new version without manual steps, and to stop the rollout if those tests fail. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          id: "deploy-canary",
          title: "Use a canary deployment strategy",
          url: "https://docs.cloud.google.com/deploy/docs/deployment-strategies/canary",
          claim: "A canary deployment is a progressive rollout that splits traffic between the deployed version and a new version, rolling the new version out to a subset of users before rolling out fully. Cloud Deploy canaries support GKE targets, and each configured canary phase can include a verify job.",
        },
        deployVerification,
      ],
      choices: [
        {
          id: "a",
          text: "Deploy each release to a second full production cluster, and switch all traffic to it with a DNS change after the team has tested the cluster by hand.",
          feedback: "Incorrect. A DNS switch moves all users to the release at once, and testing by hand is a manual step, while a canary with deployment verification exposes a subset of users and tests automatically.",
          evidenceIds: ["deploy-canary", "deploy-verification"],
        },
        {
          id: "b",
          text: "Configure a canary strategy in the Cloud Deploy pipeline that sends 10% of traffic to the new version first, and have the team test that phase by hand before advancing.",
          feedback: "Incorrect. Testing the canary phase by hand is the manual step that the team wants to remove, while deployment verification runs the team's test images automatically after the phase deploys.",
          evidenceIds: ["deploy-verification"],
        },
        {
          id: "c",
          text: "Configure a canary strategy in the Cloud Deploy pipeline that sends 10% of traffic to the new version first, with deployment verification that runs the API tests on that phase.",
          feedback: "Correct. The canary phase sends a subset of traffic to the new version, its verify job runs the team's tests automatically, and a failed verification fails the rollout before more users are affected.",
          evidenceIds: ["deploy-canary", "deploy-verification"],
        },
        {
          id: "d",
          text: "Deploy each release to all users with a rolling update, and roll the release back from Cloud Deploy if engagement drops in the following days.",
          feedback: "Incorrect. A rolling update to all users exposes everyone before any test runs, while a canary rolls a new version out to a subset of users before rolling out fully.",
          evidenceIds: ["deploy-canary"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p2-implement-02",
      kind: "single",
      section: "implement",
      objective: "5.1 Advising development and operation teams to ensure the successful deployment of the solution: 5.1.b API management best practices",
      caseStudyId: "knightmotives-automotive",
      prompt: "KnightMotives Automotive exposes its build-to-order API to dealer systems through Apigee, with a daily quota for each dealer. The order backend runs on KnightMotives' outdated mainframe, which slows down above 50 requests per second. Last week, a dealer system's retry bug sent 2,000 requests in 10 seconds, stayed within its daily quota, and made ordering unreliable for every dealer. KnightMotives wants to protect the mainframe from such bursts without changing the dealers' daily allowances, the dealer systems, or the mainframe. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          ...knightMotivesCaseStudy,
          claim: "KnightMotives' supply chain still depends on an old mainframe, its online ordering system is unreliable, and weak ordering systems strain its relationship with dealers.",
        },
        {
          id: "spike-arrest",
          title: "SpikeArrest policy",
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/spike-arrest-policy",
          claim: "The SpikeArrest policy protects against traffic surges by throttling the number of requests that an API proxy processes and sends to a backend. The Quota policy sets how many requests an app may submit over an hour, day, week, or month, and Google recommends Quota for business contracts and SpikeArrest for sudden spikes in traffic.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Add a SpikeArrest policy to the API proxy with a rate that the mainframe can handle, so that bursts are throttled before they reach the backend.",
          feedback: "Correct. SpikeArrest throttles the requests that the proxy sends to the backend, which protects the mainframe from sudden spikes without changing the dealers' quotas, their systems, or the mainframe.",
          evidenceIds: ["spike-arrest", "case-study"],
        },
        {
          id: "b",
          text: "Add a Quota policy to the API proxy with a lower daily limit for each dealer, so that bursts are throttled before they reach the backend.",
          feedback: "Incorrect. A Quota policy counts requests over an hour or longer to enforce business contracts, so a lower daily limit changes the dealers' allowances and still lets a 10-second burst through.",
          evidenceIds: ["spike-arrest"],
        },
        {
          id: "c",
          text: "Replace the mainframe's order backend with a new service on Spanner that can absorb the bursts, and point the API proxy at the new service.",
          feedback: "Incorrect. Replacing the order backend changes the mainframe, which KnightMotives wants to avoid, while SpikeArrest protects the existing backend from bursts.",
          evidenceIds: ["spike-arrest"],
        },
        {
          id: "d",
          text: "Ask every dealer to add exponential backoff to its retry logic, and block any dealer whose system sends a burst until the dealer fixes it.",
          feedback: "Incorrect. Fixes in the dealer systems are changes that KnightMotives wants to avoid, and blocking a dealer stops its ordering, while SpikeArrest throttles bursts in the proxy.",
          evidenceIds: ["spike-arrest", "case-study"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p2-implement-03",
      kind: "single",
      section: "implement",
      objective: "5.1 Advising development and operation teams to ensure the successful deployment of the solution: 5.1.c testing frameworks",
      prompt: "A logistics company's CI pipeline in Cloud Build runs thousands of unit tests on its routing service's code and then builds a container image. Last week, a base-image update removed the time zone files that the service reads at startup. All unit tests passed because they run outside the container, and the broken image reached staging. The team wants the pipeline to catch missing files and broken commands in each built image before the image is pushed. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          id: "image-tests",
          title: "Best practices for continuous integration and delivery to Google Kubernetes Engine",
          url: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/best-practices-continuous-integration-delivery-kubernetes",
          claim: "CI pipelines should run unit, functional, integration, and load or performance tests, and should also test the structure of built container images. Structure tests ensure that commands run as expected inside the container and that specific files are in the correct location with the correct content, for example with the Container Structure Tests framework.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Add more unit tests for the routing code that reads time zones, and raise the required code coverage to 90% for every merge.",
          feedback: "Incorrect. Unit tests run outside the container, so more of them cannot show whether the built image contains the files that the service needs.",
          evidenceIds: ["image-tests"],
        },
        {
          id: "b",
          text: "Run a load test against staging after each deployment, and roll the release back if the error rate rises above 1%.",
          feedback: "Incorrect. A load test against staging runs after the broken image has been pushed and deployed, and it measures performance instead of checking the image's contents.",
          evidenceIds: ["image-tests"],
        },
        {
          id: "c",
          text: "Deploy each image to production for a small share of users, and watch the logs for startup errors before the full rollout.",
          feedback: "Incorrect. A production canary runs after the image is pushed and exposes users to a broken image, while a structure test in the pipeline catches missing files first.",
          evidenceIds: ["image-tests"],
        },
        {
          id: "d",
          text: "Add a Container Structure Tests step after the build that checks the image for the required files and commands, and fail the build if a check fails.",
          feedback: "Correct. Testing the structure of the built image checks that commands run as expected inside the container and that specific files are in place, which unit tests outside the container cannot do.",
          evidenceIds: ["image-tests"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p2-implement-04",
      kind: "single",
      section: "implement",
      objective: "5.1 Advising development and operation teams to ensure the successful deployment of the solution: 5.1.d data and system migration and management tooling",
      prompt: "A hospital group plans to move 120 VMware VMs from its data center to Compute Engine over three months. Several VMs run applications whose vendors no longer exist, so the team cannot reinstall or reconfigure them. Each VM may be offline only during a short cutover window, and the team wants to test each migrated VM in Google Cloud before its cutover while the source VM keeps running. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          id: "m2vm-overview",
          title: "Migrate to Virtual Machines documentation",
          url: "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0",
          claim: "Migrate to Virtual Machines migrates VM instances and their disks from sources such as an on-premises vSphere data center to Compute Engine.",
        },
        {
          id: "m2vm-lifecycle",
          title: "VM migration process",
          url: "https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle",
          claim: "Migrate to Virtual Machines continuously replicates disk data from the source VMs to Google Cloud without downtime on the source. You can create test clones from the replicated data and test them on Google Cloud while the source keeps running, and then perform a predictable cut-over.",
        },
        {
          id: "dms-overview",
          title: "Database Migration Service overview",
          url: "https://docs.cloud.google.com/database-migration/docs/overview",
          claim: "Database Migration Service moves data and metadata from a source database to a destination database.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Export each VM as a disk image file, upload the files to Cloud Storage, and import them as Compute Engine images during each cutover window.",
          feedback: "Incorrect. Exporting, uploading, and importing a whole VM during the cutover takes far longer than a short window and gives no tested copy beforehand, while continuous replication keeps the source running until the cut-over.",
          evidenceIds: ["m2vm-lifecycle"],
        },
        {
          id: "b",
          text: "Use Migrate to Virtual Machines to replicate each VM continuously while it runs, test a clone of it in Google Cloud, and then perform a short cut-over.",
          feedback: "Correct. Migrate to Virtual Machines replicates each VM without downtime on the source, test clones let the team check the migrated VM first, and the cut-over needs only a short window.",
          evidenceIds: ["m2vm-overview", "m2vm-lifecycle"],
        },
        {
          id: "c",
          text: "Rebuild each application on new Compute Engine VMs from installation media, and copy the data across with a script during each cutover window.",
          feedback: "Incorrect. Rebuilding from installation media requires reinstalling and reconfiguring applications whose vendors no longer exist, which the team cannot do, while Migrate to Virtual Machines moves the VMs as they are.",
          evidenceIds: ["m2vm-overview"],
        },
        {
          id: "d",
          text: "Use Database Migration Service to replicate the data of each VM to Cloud SQL, and run the applications on new Compute Engine VMs after the data is copied.",
          feedback: "Incorrect. Database Migration Service moves databases between database systems, not whole VMs with their applications, which Migrate to Virtual Machines migrates.",
          evidenceIds: ["dms-overview", "m2vm-overview"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p2-implement-05",
      kind: "single",
      section: "implement",
      objective: "5.2 Interacting with Google Cloud programmatically: 5.2.a Cloud Shell Editor, Cloud Code, and Cloud Shell Terminal",
      prompt: "A university's teaching assistants maintain small Python scripts that manage course resources in a Google Cloud project. They work from shared library computers on which they cannot install software, and each uses the scripts a few hours a week. They need an editor, the Google Cloud CLI already authenticated as their own accounts, and files that persist between sessions. The department has no budget for development infrastructure and no one to administer it. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          id: "cloud-shell",
          title: "Cloud Shell documentation",
          url: "https://docs.cloud.google.com/shell/docs",
          claim: "Cloud Shell is an interactive shell environment that you use from a web browser, with the Google Cloud CLI and other utilities pre-installed, fully authenticated, and up to date.",
        },
        {
          id: "cloud-shell-storage",
          title: "How Cloud Shell works",
          url: "https://docs.cloud.google.com/shell/docs/how-cloud-shell-works",
          claim: "Cloud Shell provisions 5 GB of free persistent disk storage as your home directory, and files in it persist between sessions.",
        },
        {
          id: "cloud-shell-pricing",
          title: "Cloud Shell pricing",
          url: "https://cloud.google.com/shell/pricing",
          claim: "Cloud Shell is free for users with a Google Cloud account.",
        },
        {
          id: "cloud-shell-quotas",
          title: "Quotas and limits",
          url: "https://docs.cloud.google.com/shell/docs/quotas-limits",
          claim: "The default weekly Cloud Shell quota is 50 hours, and Cloud Shell is intended for interactive use.",
        },
        {
          id: "cloud-workstations",
          title: "Cloud Workstations overview",
          url: "https://docs.cloud.google.com/workstations/docs/overview",
          claim: "Cloud Workstations provides managed development environments that are defined by workstation configurations and grouped in workstation clusters attached to a VPC network.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Have the assistants open Cloud Shell Editor in the browser, which includes the Google Cloud CLI authenticated as their accounts and a persistent home directory.",
          feedback: "Correct. Cloud Shell is free and runs in the browser with the Google Cloud CLI pre-installed and authenticated, and its home directory persists between sessions, which suits a few hours of use each week.",
          evidenceIds: ["cloud-shell", "cloud-shell-storage", "cloud-shell-pricing", "cloud-shell-quotas"],
        },
        {
          id: "b",
          text: "Create a Cloud Workstations cluster and a workstation configuration, and give each assistant a workstation that runs a browser-based IDE with the Google Cloud CLI.",
          feedback: "Incorrect. Cloud Workstations needs workstation clusters and configurations that someone must set up and pay for, which the department cannot provide.",
          evidenceIds: ["cloud-workstations", "cloud-shell-pricing"],
        },
        {
          id: "c",
          text: "Create a Compute Engine VM with a remote desktop for each assistant, and install an IDE and the Google Cloud CLI on each VM.",
          feedback: "Incorrect. VMs with remote desktops are development infrastructure that the department would have to pay for and administer, while Cloud Shell is free.",
          evidenceIds: ["cloud-shell-pricing"],
        },
        {
          id: "d",
          text: "Install Visual Studio Code with the Cloud Code extension and the Google Cloud CLI on each of the shared library computers.",
          feedback: "Incorrect. The assistants cannot install software on the library computers, while Cloud Shell needs only a web browser.",
          evidenceIds: ["cloud-shell"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p2-implement-06",
      kind: "single",
      section: "implement",
      objective: "5.2 Interacting with Google Cloud programmatically: 5.2.b Google Cloud SDKs",
      prompt: "A retailer's on-premises server exports the day's sales to CSV files each night. A bash script on that server must upload the files to a Cloud Storage bucket and then load them into a BigQuery table. The operations team wants to use only the command-line tools that come with the Google Cloud CLI, and it does not want to write its own HTTP calls or authentication code. What should you do?",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          id: "gcloud-storage-cp",
          title: "gcloud storage cp",
          url: "https://docs.cloud.google.com/sdk/gcloud/reference/storage/cp",
          claim: "The gcloud storage cp command uploads, downloads, and copies Cloud Storage objects, and it copies data between the local file system and the cloud.",
        },
        bqReference,
        {
          id: "gcloud-compute-scp",
          title: "gcloud compute scp",
          url: "https://docs.cloud.google.com/sdk/gcloud/reference/compute/scp",
          claim: "The gcloud compute scp command copies files to and from Compute Engine virtual machines through scp.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Upload the files with gcloud compute scp, and then load them into the table with bq load.",
          feedback: "Incorrect. gcloud compute scp copies files to and from Compute Engine VMs, not to a Cloud Storage bucket, which gcloud storage cp does.",
          evidenceIds: ["gcloud-compute-scp", "gcloud-storage-cp"],
        },
        {
          id: "b",
          text: "Upload the files with gcloud storage cp, and then copy them into the table with bq cp.",
          feedback: "Incorrect. bq cp copies a table, a table clone, or a table snapshot, so it cannot load CSV files from Cloud Storage, which bq load does.",
          evidenceIds: ["bq-reference"],
        },
        {
          id: "c",
          text: "Upload the files and start the load job with curl calls to the Cloud Storage and BigQuery REST APIs, using an access token that the script requests itself.",
          feedback: "Incorrect. curl calls with a token that the script manages are the HTTP and authentication code that the team does not want to write, while the Google Cloud CLI tools handle both.",
          evidenceIds: ["gcloud-storage-cp", "bq-reference"],
        },
        {
          id: "d",
          text: "Upload the files with gcloud storage cp, and then load them into the table with bq load.",
          feedback: "Correct. gcloud storage cp copies the files from the local file system to Cloud Storage, and bq load loads the CSV data from Cloud Storage into the BigQuery table.",
          evidenceIds: ["gcloud-storage-cp", "bq-reference"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p2-implement-07",
      kind: "multiple",
      requiredSelections: 2,
      section: "implement",
      objective: "5.2 Interacting with Google Cloud programmatically: 5.2.f Google API client libraries",
      prompt: "A claims company's Python service sends each claim note to Gemini on Agent Platform with hand-written REST requests, and it parses the model's free-text answers with regular expressions. The parsing breaks whenever the model words its answers differently, and the request code breaks when request fields change. The developers want Google's supported library for Gemini instead of hand-written requests, and answers that downstream systems can always read as JSON with fixed fields. What should you do? Choose two.",
      verifiedOn: "2026-10-07",
      evidence: [
        {
          id: "genai-sdk",
          title: "Google Gen AI SDK",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/sdks/overview",
          claim: "The Google Gen AI SDK provides a unified interface to Gemini models through the Gemini API on Agent Platform, and its Python version is available on PyPI.",
        },
        {
          id: "structured-output",
          title: "Structured output",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/capabilities/control-generated-output",
          claim: "When you include a response schema with a prompt, the model's response always follows the schema. Generative model outputs can vary, so a response schema ensures that you always receive valid JSON that downstream tasks can rely on, without post-processing.",
        },
        {
          id: "sdk-migration",
          title: "Agent Platform SDK for Python: version 2.0.1 migration guide",
          url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/python-sdk/sdk-migration",
          claim: "The generative AI modules of the vertexai package, such as vertexai.generative_models, are deprecated and migrated to the Google Gen AI SDK.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Keep the REST requests, and add more regular expressions that recognize the new ways in which the model words its answers.",
          feedback: "Incorrect. More regular expressions keep the hand-written requests and the parsing that breaks when the model words answers differently, while a response schema fixes the format.",
          evidenceIds: ["structured-output"],
        },
        {
          id: "b",
          text: "Replace the hand-written REST requests with the Google Gen AI SDK for Python, which provides the supported interface to Gemini models on Agent Platform.",
          feedback: "Correct. The Google Gen AI SDK provides a unified interface to Gemini models on Agent Platform, so the service no longer builds requests by hand.",
          evidenceIds: ["genai-sdk"],
        },
        {
          id: "c",
          text: "Set a response schema in each request, so that the model's answers always follow the schema as valid JSON with the fields that downstream systems expect.",
          feedback: "Correct. When a request includes a response schema, the response always follows it, so downstream systems can rely on valid JSON with fixed fields.",
          evidenceIds: ["structured-output"],
        },
        {
          id: "d",
          text: "Replace the REST requests with the generative_models module of the Agent Platform SDK for Python, and keep parsing the answers with regular expressions.",
          feedback: "Incorrect. The vertexai.generative_models module is deprecated in favor of the Google Gen AI SDK, and regular expressions still break when the wording changes.",
          evidenceIds: ["sdk-migration", "structured-output"],
        },
        {
          id: "e",
          text: "Tune a Gemini model on example claim notes and answers, so that the tuned model learns to answer in the same format every time.",
          feedback: "Incorrect. Generative model outputs can vary, so a tuned model still does not guarantee the format, while a response schema ensures that every answer is valid JSON.",
          evidenceIds: ["structured-output"],
        },
      ],
      correctChoiceIds: ["b", "c"],
    },
  ],
} satisfies QuestionSection<"implement">;
