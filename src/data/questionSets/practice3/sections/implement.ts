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

const keyRisks = {
  id: "key-best-practices",
  title: "Best practices for managing service account keys",
  url: "https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys",
  claim: "Service account keys can become a security risk if not managed carefully, because they might leak to places where they are not supposed to be stored, and a bad actor can use a leaked key to authenticate.",
} as const;

export const practiceExamThreeImplementSection = {
  section: "implement",
  author: "claude-opus-5.5-p3-implement-20261014",
  questions: [
    {
      id: "pca-p3-implement-01",
      kind: "single",
      section: "implement",
      objective: "5.1 Advising development and operation teams to ensure the successful deployment of the solution: 5.1.a application and infrastructure deployment",
      prompt: "A tax-filing company deploys its web API to Cloud Run several times a week. Its QA team must test each new revision in production, with the production configuration and data connections, before any customer request reaches it, and then move customers to it. Last month, a release went straight to all users and broke filing for an hour. The company does not want a separate production-like environment to maintain. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "run-traffic",
          title: "Rollbacks, gradual rollouts, and traffic migration",
          url: "https://docs.cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration",
          claim: "Cloud Run lets you specify which revisions receive traffic and in what percentages. A common use is to test and vet a new revision before it serves any traffic: deploy it to production without serving traffic, test against a tagged revision, and then migrate traffic to the tagged revision.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Deploy each revision with 5% of the traffic, and have the QA team test it while most customers stay on the previous revision.",
          feedback: "Incorrect. Sending 5% of the traffic to an untested revision lets customer requests reach it before QA has tested it.",
          evidenceIds: ["run-traffic"],
        },
        {
          id: "b",
          text: "Deploy each revision with all of the traffic, have QA test it right away, and roll back to the previous revision if a test fails.",
          feedback: "Incorrect. With all of the traffic, every customer reaches the revision before it is tested, which is how last month's release broke filing.",
          evidenceIds: ["run-traffic"],
        },
        {
          id: "c",
          text: "Deploy each revision with no traffic and a revision tag, have QA test it at the tag's URL, and then migrate traffic to it.",
          feedback: "Correct. A tagged revision deployed to production without traffic can be tested with the production configuration before any customer reaches it, and traffic is migrated to it afterward.",
          evidenceIds: ["run-traffic"],
        },
        {
          id: "d",
          text: "Deploy each revision first to a separate staging project that copies production, test it there, and then deploy it to production.",
          feedback: "Incorrect. A staging project is the separate production-like environment that the company does not want to maintain, while a tagged revision can be tested in production with no traffic.",
          evidenceIds: ["run-traffic"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p3-implement-02",
      kind: "single",
      section: "implement",
      objective: "5.1 Advising development and operation teams to ensure the successful deployment of the solution: 5.1.b API management best practices",
      prompt: "A logistics company exposes a shipment API to partner systems through Apigee. Each partner system sends a static API key that administrators copied into configuration files, and last month a leaked key was used for three weeks before anyone noticed. The company wants partner systems to authenticate machine to machine with access tokens that expire within an hour, without any user signing in and without building its own token service. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "oauth-introduction",
          title: "Introduction to OAuth 2.0",
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/security/oauth/oauth-introduction",
          claim: "Apigee includes an OAuth 2.0 authorization server that can generate and validate access tokens. The client credentials grant suits a client app that acts on its own behalf, while the authorization code grant has the app open a login page where a user signs in.",
        },
        {
          id: "oauthv2-policy",
          title: "OAuthV2 policy",
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/oauthv2-policy",
          claim: "The OAuthV2 policy can generate access tokens with the client_credentials grant type, its ExpiresIn element enforces the expiry time of access tokens, and its VerifyAccessToken operation stops the request with an error unless a valid access token is present.",
        },
        {
          id: "api-keys",
          title: "API keys",
          url: "https://docs.cloud.google.com/apigee/docs/api-platform/security/api-keys",
          claim: "An API key, known in Apigee as a consumer key, is a string value that a client app passes to your API proxies, and API key validation is the simplest form of app-based security.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Configure an OAuthV2 policy that issues access tokens with the client credentials grant and a one-hour expiry, and verify the token on each request.",
          feedback: "Correct. Apigee's OAuthV2 policy issues access tokens to client apps that act on their own behalf, enforces their expiry, and verifies each token, without a user sign-in or a custom token service.",
          evidenceIds: ["oauthv2-policy", "oauth-introduction"],
        },
        {
          id: "b",
          text: "Keep the API keys, and rotate every partner's key each month by issuing a new key and revoking the old one.",
          feedback: "Incorrect. An API key is a static string that stays valid until it is revoked, so monthly rotation still leaves keys that do not expire within an hour.",
          evidenceIds: ["api-keys"],
        },
        {
          id: "c",
          text: "Configure an OAuthV2 policy that issues access tokens with the authorization code grant, so that a partner employee signs in first.",
          feedback: "Incorrect. The authorization code grant has a user sign in through a login page, while the partner systems must authenticate machine to machine without a user.",
          evidenceIds: ["oauth-introduction"],
        },
        {
          id: "d",
          text: "Write a custom token service on Cloud Run that issues signed tokens, and check each token in a JavaScript policy in the proxy.",
          feedback: "Incorrect. A custom token service is what the company does not want to build, while Apigee includes an authorization server that generates and validates access tokens.",
          evidenceIds: ["oauth-introduction"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p3-implement-03",
      kind: "single",
      section: "implement",
      objective: "5.1 Advising development and operation teams to ensure the successful deployment of the solution: 5.1.d data and system migration and management tooling",
      caseStudyId: "knightmotives-automotive",
      prompt: "KnightMotives Automotive's outdated ERP system runs on an on-premises Oracle database that holds orders, promotions, and dealer discounts in about 40 tables. Its analysts need these tables in BigQuery within minutes of each change to build data products, but the ERP database can't take heavy query load, and its application can't be changed. KnightMotives wants a managed service with no servers to run. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          ...knightMotivesCaseStudy,
          claim: "KnightMotives' ERP system is out of date, which makes promotions and dealer discounts hard to introduce, and it wants to earn revenue from corporate data that sits in separate systems.",
        },
        {
          id: "datastream",
          title: "Datastream overview",
          url: "https://docs.cloud.google.com/datastream/docs/overview",
          claim: "Datastream is a serverless change data capture and replication service that synchronizes data with minimal latency from operational databases, including Oracle, into BigQuery, with no resources to provision or manage.",
        },
        {
          id: "bq-reference",
          title: "bq command-line tool reference",
          url: "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference",
          claim: "The bq load command loads data into a table, for example from a CSV file in Cloud Storage.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Run Debezium and Apache Kafka on a GKE cluster to capture the Oracle changes, and write them to BigQuery with a custom consumer.",
          feedback: "Incorrect. Debezium, Kafka, and a custom consumer on a GKE cluster are servers and code that KnightMotives would have to run, while Datastream is serverless.",
          evidenceIds: ["datastream"],
        },
        {
          id: "b",
          text: "Export the ERP tables to CSV files every night, and load the files into BigQuery with bq load the next morning.",
          feedback: "Incorrect. Nightly exports reach BigQuery the next morning, not within minutes of each change.",
          evidenceIds: ["bq-reference", "datastream"],
        },
        {
          id: "c",
          text: "Have the analysts' dashboards query the Oracle database directly every few minutes over the existing network connection.",
          feedback: "Incorrect. Frequent analytical queries put load on the ERP database, which it can't take, while change data capture replicates changes to BigQuery instead.",
          evidenceIds: ["datastream"],
        },
        {
          id: "d",
          text: "Replicate the ERP tables to BigQuery with a Datastream stream that captures the changes from the Oracle database.",
          feedback: "Correct. Datastream captures changes from Oracle and replicates them into BigQuery with minimal latency, without application changes, query load from analysts, or servers to manage.",
          evidenceIds: ["datastream", "case-study"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p3-implement-04",
      kind: "single",
      section: "implement",
      objective: "5.1 Advising development and operation teams to ensure the successful deployment of the solution: 5.1.d data and system migration and management tooling",
      prompt: "A media analytics company receives files from a partner in an Amazon S3 bucket throughout the day. Today, a Storage Transfer Service job copies new files to Cloud Storage every hour, but analysts now need each file in Cloud Storage within minutes of its arrival. The company does not want to write or run its own copy code, and the partner can configure notifications on its bucket. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "event-driven-aws",
          title: "Event-driven transfers from AWS S3",
          url: "https://docs.cloud.google.com/storage-transfer/docs/event-driven-aws",
          claim: "Storage Transfer Service can listen to Amazon S3 Event Notifications sent to Amazon SQS and automatically transfer data that has been added or updated in the source bucket into a Cloud Storage bucket.",
        },
        {
          id: "event-driven-benefits",
          title: "Event-driven transfers",
          url: "https://docs.cloud.google.com/storage-transfer/docs/event-driven-transfers",
          claim: "Because event-driven transfers listen for changes to the source bucket, updates are copied to the destination in near-real time.",
        },
        {
          id: "transfer-schedule",
          title: "Schedule transfers",
          url: "https://docs.cloud.google.com/storage-transfer/docs/schedule-transfer-jobs",
          claim: "You can schedule transfer jobs to run periodically, as frequently as every hour.",
        },
        {
          id: "transfer-appliance",
          title: "Transfer Appliance",
          url: "https://docs.cloud.google.com/transfer-appliance/docs/4.0/overview",
          claim: "Transfer Appliance is a high-capacity storage device that you use to ship data to a Google upload facility, where Google uploads it to Cloud Storage.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Keep the scheduled transfer job, and change its schedule so that it runs as often as Storage Transfer Service allows.",
          feedback: "Incorrect. Scheduled transfers run as frequently as every hour, which is the current schedule, so files still wait up to an hour.",
          evidenceIds: ["transfer-schedule"],
        },
        {
          id: "b",
          text: "Create an event-driven Storage Transfer Service job that listens to the bucket's S3 Event Notifications through an Amazon SQS queue.",
          feedback: "Correct. An event-driven transfer listens for S3 Event Notifications and copies new files to Cloud Storage in near-real time, with no copy code to write or run.",
          evidenceIds: ["event-driven-aws", "event-driven-benefits"],
        },
        {
          id: "c",
          text: "Write an AWS Lambda function that copies each new object to Cloud Storage through the Cloud Storage JSON API.",
          feedback: "Incorrect. A Lambda function is copy code that the company would have to write and run, while an event-driven transfer copies new files without it.",
          evidenceIds: ["event-driven-aws"],
        },
        {
          id: "d",
          text: "Ship the partner's files to Google on a Transfer Appliance every week, and have them uploaded to the Cloud Storage bucket.",
          feedback: "Incorrect. Shipping a storage device takes days, so files arrive long after the few minutes that the analysts need.",
          evidenceIds: ["transfer-appliance"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p3-implement-05",
      kind: "single",
      section: "implement",
      objective: "5.2 Interacting with Google Cloud programmatically: 5.2.c Cloud Emulators",
      prompt: "A fitness app's backend team runs integration tests in CI against a shared Firestore database in a test project. When two pipelines run at the same time, their tests overwrite each other's documents, and leftover test data keeps growing. The team wants each CI run to start with an empty, isolated database, without creating cloud resources or credentials for CI, and without changing the backend code, which uses a Firestore server client library. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "firestore-emulator",
          title: "Use Firestore emulator locally",
          url: "https://docs.cloud.google.com/firestore/native/docs/emulator",
          claim: "The Google Cloud CLI provides a local, in-memory Firestore emulator for testing that works with all Firestore client libraries and should be used only for local testing. Because it stores data only in memory, it does not persist data across runs. When the FIRESTORE_EMULATOR_HOST environment variable is set, the server client libraries automatically connect to the emulator.",
        },
        {
          id: "emulator-command",
          title: "gcloud emulators firestore",
          url: "https://docs.cloud.google.com/sdk/gcloud/reference/emulators/firestore",
          claim: "The gcloud emulators firestore commands start and use a local Firestore emulator.",
        },
        {
          id: "firestore-databases",
          title: "Create and manage databases",
          url: "https://docs.cloud.google.com/firestore/native/docs/manage-databases",
          claim: "You can create and delete multiple Firestore databases in a Google Cloud project.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Start the Firestore emulator in each CI job, and set FIRESTORE_EMULATOR_HOST so that the client library connects to it.",
          feedback: "Correct. Each job's emulator is local and in memory, so every run starts empty and isolated without cloud resources, and the client library connects to it through the environment variable.",
          evidenceIds: ["firestore-emulator", "emulator-command"],
        },
        {
          id: "b",
          text: "Create a new Firestore database in the test project for each CI run, and delete the database when the run finishes.",
          feedback: "Incorrect. A database for each run is a cloud resource that CI needs credentials to create and delete, while the emulator runs locally.",
          evidenceIds: ["firestore-databases", "firestore-emulator"],
        },
        {
          id: "c",
          text: "Run one Firestore emulator on a shared CI server for all pipelines, and point every test run at that emulator's address.",
          feedback: "Incorrect. One emulator keeps its data in memory for as long as it runs, so pipelines that share it still overwrite each other's documents.",
          evidenceIds: ["firestore-emulator"],
        },
        {
          id: "d",
          text: "Replace the Firestore client in the tests with hand-written fakes that keep documents in memory during each run.",
          feedback: "Incorrect. Hand-written fakes replace the client library that the backend code uses, so the tests no longer exercise that code, while the emulator works with the real client library.",
          evidenceIds: ["firestore-emulator"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p3-implement-06",
      kind: "single",
      section: "implement",
      objective: "5.2 Interacting with Google Cloud programmatically: 5.2.d infrastructure as code",
      caseStudyId: "ehr-healthcare",
      prompt: "EHR Healthcare creates a new isolated environment, with its own projects, networks, and GKE clusters, each time it onboards a large customer, and engineers build these environments by hand in the console over several days. Misconfigured systems have caused many of EHR's outages. EHR wants every environment created from the same reviewed Terraform configuration in a Git repository, a preview of changes before they apply, and no Terraform state storage or build pipelines for its team to maintain. What should you do?",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          ...ehrCaseStudy,
          claim: "EHR wants to set up new environments on demand, and misconfigured systems caused many of its outages.",
        },
        {
          id: "infrastructure-manager",
          title: "Infrastructure Manager overview",
          url: "https://docs.cloud.google.com/infrastructure-manager/docs/overview",
          claim: "Infrastructure Manager is a managed service that deploys and manages Google Cloud resources from Terraform configurations stored in Cloud Storage buckets, Git repositories, or local directories. It manages the infrastructure lifecycle through deployments and revisions and creates preview deployments that show how changes affect the infrastructure before they are applied.",
        },
        {
          id: "terraform-state",
          title: "Store Terraform state in a Cloud Storage bucket",
          url: "https://docs.cloud.google.com/docs/terraform/resource-management/store-state",
          claim: "By default, Terraform stores state locally in a file, and you can store it remotely in a Cloud Storage bucket that you create.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Run Terraform from a shared admin VM with the state stored on its disk, and have engineers apply the configuration for each new customer.",
          feedback: "Incorrect. A shared VM with local state is infrastructure and state storage that the team must maintain, while Infrastructure Manager runs Terraform as a managed service.",
          evidenceIds: ["terraform-state", "infrastructure-manager"],
        },
        {
          id: "b",
          text: "Create a Cloud Build trigger that runs terraform apply from the Git repository, with the state in a Cloud Storage bucket that the team manages.",
          feedback: "Incorrect. A Cloud Build trigger and a state bucket are the build pipeline and state storage that EHR does not want to maintain.",
          evidenceIds: ["terraform-state", "infrastructure-manager"],
        },
        {
          id: "c",
          text: "Create an Infrastructure Manager deployment for each environment from the Git repository, and review a preview before each change.",
          feedback: "Correct. Infrastructure Manager deploys Terraform configurations from Git as managed deployments and revisions, and its preview deployments show changes before they apply, with no state storage or pipeline to maintain.",
          evidenceIds: ["infrastructure-manager", "case-study"],
        },
        {
          id: "d",
          text: "Write a detailed runbook of the console steps, and have a second engineer check each environment after it is built.",
          feedback: "Incorrect. A runbook keeps the manual console work that causes misconfigurations, and it uses no reviewed Terraform configuration.",
          evidenceIds: ["infrastructure-manager", "case-study"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p3-implement-07",
      kind: "multiple",
      requiredSelections: 2,
      section: "implement",
      objective: "5.2 Interacting with Google Cloud programmatically: 5.2.e accessing Google API best practices",
      prompt: "A retailer's order service runs in a GKE Standard cluster and reads files from one Cloud Storage bucket with a service account key stored in a Kubernetes Secret. Other teams' workloads run on the same nodes. A security review requires removing every service account key and allowing only the order service's Pods, not other workloads on those nodes, to read the bucket. The service already uses Application Default Credentials through its client library. What should you do? Choose two.",
      verifiedOn: "2026-10-14",
      evidence: [
        {
          id: "workload-identity",
          title: "About Workload Identity Federation for GKE",
          url: "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/workload-identity",
          claim: "Workload Identity Federation for GKE is the recommended way for GKE workloads to access Google Cloud services. It lets you use IAM policies to grant Kubernetes workloads access to specific Google Cloud APIs without service account key files. GKE runs the GKE metadata server on node pools where it is enabled, and an IAM principal identifier can select all Pods that use a specific Kubernetes ServiceAccount. Using the nodes' service account instead is a security compromise, because that account is shared by all workloads on the nodes.",
        },
        keyRisks,
      ],
      choices: [
        {
          id: "a",
          text: "Enable Workload Identity Federation for GKE on the cluster, and update its node pools to use the GKE metadata server.",
          feedback: "Correct. Workload Identity Federation for GKE gives Pods credentials through the GKE metadata server instead of key files, so Application Default Credentials work without a key.",
          evidenceIds: ["workload-identity"],
        },
        {
          id: "b",
          text: "Grant the bucket's read role to the service account of the cluster's nodes, and delete the key from the Secret.",
          feedback: "Incorrect. The nodes' service account is shared by all workloads on those nodes, so every team's Pods could read the bucket.",
          evidenceIds: ["workload-identity"],
        },
        {
          id: "c",
          text: "Create a new key for the service account every 30 days, store it in Secret Manager, and mount it into the order service's Pods.",
          feedback: "Incorrect. A rotated key is still a service account key, which the security review requires removing.",
          evidenceIds: ["key-best-practices"],
        },
        {
          id: "d",
          text: "Grant the bucket's read role to the principal identifier of the order service's Kubernetes ServiceAccount, and delete the key.",
          feedback: "Correct. A principal identifier for a Kubernetes ServiceAccount selects only the Pods that use it, so only the order service can read the bucket without a key.",
          evidenceIds: ["workload-identity"],
        },
        {
          id: "e",
          text: "Keep the existing key in the Kubernetes Secret, encrypt the Secret with a Cloud KMS key, and restrict who can read it.",
          feedback: "Incorrect. Encrypting the Secret still keeps a service account key, which can leak and which the security review requires removing.",
          evidenceIds: ["key-best-practices"],
        },
      ],
      correctChoiceIds: ["a", "d"],
    },
  ],
} satisfies QuestionSection<"implement">;
