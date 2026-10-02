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

const objectVersioning = {
  id: "object-versioning",
  title: "Object Versioning",
  url: "https://docs.cloud.google.com/storage/docs/object-versioning",
  claim: "Noncurrent object versions remain until they are explicitly removed, and you delete one by including its generation number in a deletion request.",
} as const;

const cmek = {
  id: "cmek",
  title: "Customer-managed encryption keys (CMEK)",
  url: "https://docs.cloud.google.com/kms/docs/cmek",
  claim: "Customer-managed keys in Cloud KMS give the customer ownership and control of the keys that protect data at rest, while Google default encryption uses Google-owned and Google-managed keys that the customer cannot manage.",
} as const;

const sensitiveDataInspection = {
  id: "sdp-inspection",
  title: "Inspect Google Cloud storage and databases for sensitive data",
  url: "https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage",
  claim: "Sensitive Data Protection can detect and classify sensitive data stored in Cloud Storage, Datastore, or BigQuery.",
} as const;

export const practiceExamOneSecureSection = {
  section: "secure",
  author: "claude-opus-5.5-p1-secure-20261002",
  questions: [
    {
      id: "pca-p1-secure-01",
      kind: "single",
      section: "secure",
      objective: "3.1 Designing for security: 3.1.a identity and access management",
      prompt: "A pharmaceutical company has hired an external audit firm whose auditors must read the objects in one Cloud Storage bucket until the audit ends at 23:59 UTC on June 30. The auditors' accounts belong to a Google group that the audit firm manages, and the bucket uses uniform bucket-level access. The security team requires least-privilege access that ends automatically at the deadline, without anyone having to remember to remove it and without custom automation to maintain. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "temporary-access",
          title: "Configure temporary access",
          url: "https://docs.cloud.google.com/iam/docs/configuring-temporary-access",
          claim: "A conditional role binding grants time-bounded access, so that a user can no longer access the resource after the specified expiry date and time.",
        },
        {
          id: "conditions",
          title: "Overview of IAM Conditions",
          url: "https://docs.cloud.google.com/iam/docs/conditions-overview",
          claim: "Conditions in a Cloud Storage bucket's allow policy require uniform bucket-level access, and conditional grants on a higher-level resource, such as the project that contains the bucket, are inherited by the bucket.",
        },
        {
          id: "service-account-credentials",
          title: "Service account credentials",
          url: "https://docs.cloud.google.com/iam/docs/service-account-creds",
          claim: "Service account keys are long-lived credentials, which create more risk than short-lived credentials.",
        },
        {
          id: "run-jobs-schedule",
          title: "Execute jobs on a schedule",
          url: "https://docs.cloud.google.com/run/docs/execute/jobs-on-schedule",
          claim: "Cloud Scheduler can execute a Cloud Run job at a specified frequency.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Grant the Storage Object Viewer role on the bucket to the audit firm's group with an IAM condition that allows access only while the request time is before the deadline.",
          feedback: "Correct. A conditional role binding on the bucket gives only the group read access to that bucket, and the access ends at the expiry time without anyone removing the binding.",
          evidenceIds: ["temporary-access", "conditions"],
        },
        {
          id: "b",
          text: "Grant the Storage Object Viewer role on the project to the audit firm's group with an IAM condition that allows access only while the request time is before the deadline.",
          feedback: "Incorrect. The condition ends access on time, but a grant on the project is inherited by every bucket in the project, which is broader than the one bucket that the auditors need.",
          evidenceIds: ["conditions"],
        },
        {
          id: "c",
          text: "Create a service account with the Storage Object Viewer role on the bucket, and give the auditors a key for it that the security team deletes after the deadline.",
          feedback: "Incorrect. A service account key is a long-lived credential that keeps working until someone deletes it, so the access does not end automatically.",
          evidenceIds: ["service-account-credentials"],
        },
        {
          id: "d",
          text: "Grant the Storage Object Viewer role on the bucket to the audit firm's group, and schedule a Cloud Run job that removes the role binding after the deadline.",
          feedback: "Incorrect. The scheduled job removes the access, but it is custom automation to maintain, while a conditional role binding expires on its own.",
          evidenceIds: ["run-jobs-schedule", "temporary-access"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p1-secure-02",
      kind: "single",
      section: "secure",
      objective: "3.1 Designing for security: 3.1.b resource hierarchy",
      prompt: "A conglomerate manages all of its Google Cloud projects in one organization. Its new medical devices business unit will create about 20 projects over the next year. The unit's security team needs the Security Reviewer role on every project of the unit, including projects created later, but no access to the projects of other business units. Regulators also require that the unit's resources be created only in EU locations, while other units must remain free to use any location. You need to meet these requirements with the least ongoing administration. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "resource-hierarchy",
          title: "About resource hierarchy",
          url: "https://docs.cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
          claim: "Roles granted at a high level, such as an organization or a folder, are inherited by all child resources, and policies applied at the organization level are inherited by every resource in the organization. A Google Workspace or Cloud Identity account can be associated with exactly one organization resource.",
        },
        {
          id: "organization-policy",
          title: "Organization Policy overview",
          url: "https://docs.cloud.google.com/organization-policy/overview",
          claim: "An organization policy set on an organization, folder, or project enforces its constraint on that resource and on its child resources.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Grant the Security Reviewer role to the unit's security team on the organization, and set the resource locations constraint to EU locations on the organization.",
          feedback: "Incorrect. Roles and policies set on the organization are inherited by every project in it, so the team could see other units' projects, and every unit would be limited to EU locations.",
          evidenceIds: ["resource-hierarchy", "organization-policy"],
        },
        {
          id: "b",
          text: "Create a folder for the business unit, create its projects in the folder, and grant the role and set the resource locations constraint on the folder.",
          feedback: "Correct. A role granted on the folder and an organization policy set on it apply to every project in the folder, including projects created there later, and to no other unit's projects.",
          evidenceIds: ["resource-hierarchy", "organization-policy"],
        },
        {
          id: "c",
          text: "Create the unit's projects directly under the organization, and grant the role and set the resource locations constraint on each project as it is created.",
          feedback: "Incorrect. A grant and a policy on a project apply only to that project, so they must be repeated for every new project, which adds the ongoing administration that the company wants to avoid.",
          evidenceIds: ["organization-policy", "resource-hierarchy"],
        },
        {
          id: "d",
          text: "Create a separate organization for the business unit with its own Cloud Identity account, and grant the role and set the constraint on that organization.",
          feedback: "Incorrect. An organization requires its own Google Workspace or Cloud Identity account, so a second organization adds an identity account to administer, while a folder isolates the unit inside the existing organization.",
          evidenceIds: ["resource-hierarchy"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p1-secure-03",
      kind: "multiple",
      requiredSelections: 2,
      section: "secure",
      objective: "3.1 Designing for security: 3.1.d separation of duties",
      prompt: "A bank encrypts the backups of its payments database in Cloud Storage with a customer-managed key in Cloud KMS. Regulators require separation of duties for encryption keys: the central security team must manage the lifecycle of all keys, application teams and their workloads may only use keys to encrypt and decrypt, and nobody who administers a key may also use it or access the data that it protects. Which two actions should you take?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "kms-separation",
          title: "Separation of duties",
          url: "https://docs.cloud.google.com/kms/docs/separation-of-duties",
          claim: "Separation of duties in Cloud KMS requires a strict distinction between key managers, such as principals with the Cloud KMS Admin role, and key users, such as principals with the Cloud KMS CryptoKey Encrypter/Decrypter role. Security Command Center flags any principal, including a Project Owner, that has both administrative and cryptographic permissions on a key. In dedicated-project key storage, a central security team administers the keys in key projects but is restricted from accessing the projects that contain the protected resources.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Create the keys in a dedicated key project that only the central security team administers, separate from the projects that contain the protected data.",
          feedback: "Correct. In dedicated-project key storage, the central security team administers keys in the key project but has no access to the projects that contain the protected data.",
          evidenceIds: ["kms-separation"],
        },
        {
          id: "b",
          text: "Create each key in its application's own project, and grant the application team the Owner role on that project so that it can manage and use the key.",
          feedback: "Incorrect. An Owner can hold both administrative and cryptographic permissions on the key, which is the combination that separation of duties forbids.",
          evidenceIds: ["kms-separation"],
        },
        {
          id: "c",
          text: "Grant the application's service account both the Cloud KMS Admin role and the Cloud KMS CryptoKey Encrypter/Decrypter role on its key so that it can rotate and use it.",
          feedback: "Incorrect. Separation of duties requires that key managers, such as holders of Cloud KMS Admin, and key users, such as holders of Encrypter/Decrypter, be different principals.",
          evidenceIds: ["kms-separation"],
        },
        {
          id: "d",
          text: "Grant the security team the Cloud KMS Admin role on the key project, and grant each application's service account only the Cloud KMS CryptoKey Encrypter/Decrypter role on its keys.",
          feedback: "Correct. The security team manages the key lifecycles as key managers, and each workload only encrypts and decrypts as a key user, so no principal holds both roles.",
          evidenceIds: ["kms-separation"],
        },
        {
          id: "e",
          text: "Grant the security team the Cloud KMS CryptoKey Encrypter/Decrypter role on all keys so that it can test that every key still decrypts the protected backups.",
          feedback: "Incorrect. The security team administers the keys, so letting it decrypt the protected backups gives one team both key management and key use.",
          evidenceIds: ["kms-separation"],
        },
      ],
      correctChoiceIds: ["a", "d"],
    },
    {
      id: "pca-p1-secure-04",
      kind: "single",
      section: "secure",
      objective: "3.1 Designing for security: 3.1.e security controls",
      prompt: "A biotech company stores research data in BigQuery datasets and Cloud Storage buckets in three projects, and its analysts query the data from the corporate network. A risk assessment found that an analyst, or an attacker with an analyst's stolen credentials, could use the analyst's legitimate read access to copy the data into a dataset or bucket in a project that the company does not control. The security team must block such copies while the analysts keep their access from the corporate network. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "vpc-service-controls",
          title: "Overview of VPC Service Controls",
          url: "https://docs.cloud.google.com/vpc-service-controls/docs/overview",
          claim: "Data cannot be copied to unauthorized resources outside a perimeter by using service operations such as gcloud storage cp or bq mk. VPC Service Controls adds context-based control of data egress that is independent of the identity-based access control of IAM.",
        },
        {
          id: "access-levels",
          title: "Allow access to protected resources from outside a perimeter",
          url: "https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels",
          claim: "Access levels, which can include criteria such as IP address and user identity, grant controlled access to resources in a perimeter from outside the perimeter.",
        },
        {
          id: "domain-restricted-sharing",
          title: "Restrict identities with domain-restricted sharing",
          url: "https://docs.cloud.google.com/organization-policy/restrict-domains",
          claim: "When domain-restricted sharing is active, only principals that belong to allowed domains or organizations can be granted IAM roles in the organization.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Replace the analysts' predefined BigQuery and Cloud Storage viewer roles with custom roles that contain only the read permissions that their analysis needs.",
          feedback: "Incorrect. Any role that lets the analysts read the data also lets them copy it to a destination that they control, because IAM controls identities rather than where data goes.",
          evidenceIds: ["vpc-service-controls"],
        },
        {
          id: "b",
          text: "Create a VPC Service Controls perimeter around the three projects without any access levels, so that data cannot be copied to projects outside the perimeter.",
          feedback: "Incorrect. The perimeter blocks the copies, but without an access level, the analysts' requests from the corporate network outside the perimeter can no longer reach the data.",
          evidenceIds: ["vpc-service-controls", "access-levels"],
        },
        {
          id: "c",
          text: "Enable domain-restricted sharing so that only identities in the company's domain can be granted IAM roles in the company's organization.",
          feedback: "Incorrect. Domain-restricted sharing limits who can be granted roles in the company's organization, but the analysts already hold read roles and can still copy the data out.",
          evidenceIds: ["domain-restricted-sharing"],
        },
        {
          id: "d",
          text: "Create a VPC Service Controls perimeter around the three projects with an access level for the corporate network's IP ranges, so that data cannot be copied to projects outside the perimeter.",
          feedback: "Correct. Data in the perimeter cannot be copied to unauthorized resources outside it, and the access level admits the analysts' requests from the corporate network's IP ranges.",
          evidenceIds: ["vpc-service-controls", "access-levels"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p1-secure-05",
      kind: "single",
      section: "secure",
      objective: "3.1 Designing for security: 3.1.f managing customer-managed encryption keys with Cloud KMS",
      prompt: "A payment processor stores cardholder data in Cloud SQL and Cloud Storage. Its auditors require that the keys protecting this data be customer-managed, that the company control their rotation and destruction, and that cryptographic operations with the keys run in hardware security modules validated to FIPS 140-2 Level 3. The company does not want to buy, host, or operate key management hardware or a partner key management service, and it wants the lowest cost that meets these requirements. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        cmek,
        {
          id: "protection-levels",
          title: "Protection levels",
          url: "https://docs.cloud.google.com/kms/docs/protection-levels",
          claim: "Software keys use FIPS 140-3 Level 1 validated primitives and are the cheapest protection level. HSM keys are used in FIPS 140-2 Level 3 validated HSMs in a fully managed service. Cloud EKM keys are generated and stored in an external key management partner system.",
        },
        {
          id: "cmek-services",
          title: "Compatible services",
          url: "https://docs.cloud.google.com/kms/docs/compatible-services",
          claim: "Cloud SQL and Cloud Storage support customer-managed encryption keys, including Cloud EKM keys.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Keep Google's default encryption at rest for both services, and document in the audit evidence that Google manages and rotates the encryption keys.",
          feedback: "Incorrect. Google default encryption uses Google-owned keys that the customer cannot manage, so it does not meet the requirement for customer-managed keys.",
          evidenceIds: ["cmek"],
        },
        {
          id: "b",
          text: "Create Cloud KMS keys with the SOFTWARE protection level, and configure Cloud SQL and Cloud Storage to use them as customer-managed encryption keys.",
          feedback: "Incorrect. Software keys run cryptographic operations in software with FIPS 140-3 Level 1 validated primitives, not in hardware security modules validated to FIPS 140-2 Level 3.",
          evidenceIds: ["protection-levels"],
        },
        {
          id: "c",
          text: "Create Cloud KMS keys with the HSM protection level, and configure Cloud SQL and Cloud Storage to use them as customer-managed encryption keys.",
          feedback: "Correct. Cloud HSM performs the key operations in FIPS 140-2 Level 3 validated HSMs that Google manages, and the company controls the keys as customer-managed encryption keys.",
          evidenceIds: ["protection-levels", "cmek", "cmek-services"],
        },
        {
          id: "d",
          text: "Create keys in an external key management partner's system through Cloud EKM, and configure Cloud SQL and Cloud Storage to use them as customer-managed encryption keys.",
          feedback: "Incorrect. Cloud EKM keys are generated and stored in a partner's external key management system, which is the partner service that the company does not want.",
          evidenceIds: ["protection-levels", "cmek-services"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p1-secure-06",
      kind: "single",
      section: "secure",
      objective: "3.1 Designing for security: 3.1.g secure remote access",
      prompt: "A logistics company's administrators need SSH access to 50 Linux VMs that run its routing engine. Today the VMs have external IP addresses, and the administrators connect from anywhere with shared SSH keys. A security review requires that the VMs have no external IP addresses, that no VM accept SSH connections from the internet, and that access be granted and revoked per administrator through IAM. The company does not want to run a VPN or additional VMs for administrative access. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "iap-tcp-forwarding",
          title: "Use IAP for TCP forwarding",
          url: "https://docs.cloud.google.com/iap/docs/using-tcp-forwarding",
          claim: "IAP TCP forwarding provides administrative access, such as SSH, through an encrypted tunnel to VMs that have no external IP addresses. It needs a firewall rule that allows ingress from 35.235.240.0/20, and administrators need the IAP-secured Tunnel User role.",
        },
        {
          id: "ngfw-overview",
          title: "Cloud NGFW overview",
          url: "https://docs.cloud.google.com/firewall/docs/about-firewalls",
          claim: "Cloud NGFW Essentials rules use standard network attributes such as IP ranges, ports, and protocols.",
        },
        {
          id: "cloud-vpn",
          title: "Cloud VPN overview",
          url: "https://docs.cloud.google.com/network-connectivity/docs/vpn/concepts/overview",
          claim: "Cloud VPN connects a peer network to a VPC network through IPsec VPN connections.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Remove the external IP addresses, allow SSH from the IAP range 35.235.240.0/20 in a firewall rule, and grant each administrator the IAP-secured Tunnel User role.",
          feedback: "Correct. IAP TCP forwarding tunnels SSH to VMs without external IP addresses, the firewall rule admits only IAP's address range, and the IAP-secured Tunnel User role grants or revokes access per administrator in IAM.",
          evidenceIds: ["iap-tcp-forwarding"],
        },
        {
          id: "b",
          text: "Remove the external IP addresses, create a bastion host VM with an external IP address, and let the administrators connect through it with their SSH keys.",
          feedback: "Incorrect. A bastion host is an additional VM that accepts SSH from the internet, and SSH keys bypass the per-administrator IAM control that IAP TCP forwarding provides.",
          evidenceIds: ["iap-tcp-forwarding"],
        },
        {
          id: "c",
          text: "Keep the external IP addresses, and add a firewall rule that allows SSH only from the IP address ranges of the company's office networks.",
          feedback: "Incorrect. The VMs keep the external IP addresses that the review prohibits, and rules based on address ranges do not grant or revoke access per administrator.",
          evidenceIds: ["ngfw-overview"],
        },
        {
          id: "d",
          text: "Remove the external IP addresses, allow SSH from the office IP ranges in a firewall rule, and connect the office network to the VPC network with Cloud VPN.",
          feedback: "Incorrect. The company would run the VPN that it wants to avoid, and a rule for office address ranges does not control access per administrator through IAM.",
          evidenceIds: ["cloud-vpn", "ngfw-overview"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pca-p1-secure-07",
      kind: "single",
      section: "secure",
      objective: "3.1 Designing for security: 3.1.h securing software supply chain",
      prompt: "A fintech company deploys microservices to a production GKE cluster from a Cloud Build pipeline that runs its tests and security checks. An incident review found that an engineer had deployed an image built on a laptop directly to the cluster with kubectl, bypassing the pipeline. The security team requires that the cluster run only images that the pipeline built and checked, and that any other deployment be rejected when it is attempted, whoever attempts it. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "binary-authorization",
          title: "Binary Authorization overview",
          url: "https://docs.cloud.google.com/binary-authorization/docs/overview",
          claim: "Binary Authorization enforcement allows images that conform with a policy to be deployed to GKE or Cloud Run and disallows other images, and Artifact Analysis provides vulnerability information that can be used with Binary Authorization.",
        },
        {
          id: "enforcement-modes",
          title: "Policy YAML reference",
          url: "https://docs.cloud.google.com/binary-authorization/docs/policy-yaml-reference",
          claim: "ENFORCED_BLOCK_AND_AUDIT_LOG blocks deployment and writes to the audit log, while DRYRUN_AUDIT_LOG_ONLY allows deployment of nonconformant images and writes the violation to the audit log.",
        },
        {
          id: "cloud-build-attestation",
          title: "Create a Binary Authorization attestation in a Cloud Build pipeline",
          url: "https://docs.cloud.google.com/binary-authorization/docs/cloud-build",
          claim: "An attestation created in a Cloud Build pipeline helps ensure that only images built and signed as part of the build process are authorized to run.",
        },
        {
          id: "artifact-analysis",
          title: "Artifact Analysis overview",
          url: "https://docs.cloud.google.com/artifact-analysis/docs/artifact-analysis",
          claim: "Artifact Analysis scans images pushed to Artifact Registry for known vulnerabilities and stores the results as metadata.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Turn on Artifact Analysis vulnerability scanning for the Artifact Registry repository, and have the security team review the scan results before each production release.",
          feedback: "Incorrect. Artifact Analysis provides vulnerability information, but a scan and a review do not stop an image from being deployed with kubectl.",
          evidenceIds: ["artifact-analysis", "binary-authorization"],
        },
        {
          id: "b",
          text: "Remove the Artifact Registry Writer role from the engineers so that only the Cloud Build service account can push images to the production repository.",
          feedback: "Incorrect. Restricting who can push to one repository does not stop a deployment of an image from another registry, while Binary Authorization enforcement disallows nonconforming images at deployment.",
          evidenceIds: ["binary-authorization"],
        },
        {
          id: "c",
          text: "Configure a Binary Authorization policy for the cluster in dry-run mode that requires an attestation that the Cloud Build pipeline creates after its checks pass.",
          feedback: "Incorrect. Dry-run mode allows nonconforming images to be deployed and only writes the violation to the audit log, so the engineer's image would still run.",
          evidenceIds: ["enforcement-modes"],
        },
        {
          id: "d",
          text: "Configure a Binary Authorization policy for the cluster in enforced mode that requires an attestation that the Cloud Build pipeline creates after its checks pass.",
          feedback: "Correct. Enforced mode blocks deployments of images that do not conform with the policy, and requiring the pipeline's attestation means that only images that the pipeline built and checked conform.",
          evidenceIds: ["enforcement-modes", "cloud-build-attestation", "binary-authorization"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p1-secure-08",
      kind: "single",
      section: "secure",
      objective: "3.1 Designing for security: 3.1.i securing AI",
      caseStudyId: "cymbal-retail",
      prompt: "Cymbal Retail's conversational shopping agent sends customer messages to a Gemini model and shows the model's answers on Cymbal's website and mobile app. During testing, crafted messages made the agent ignore its instructions, and some answers repeated other customers' phone numbers from retrieved order notes. Cymbal must handle customer data in agent conversations securely. You need to screen every incoming message and every model answer for these risks before it reaches the model or the customer. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          ...cymbalCaseStudy,
          claim: "Cymbal requires secure handling of all customer data, including customer interactions with its virtual agents.",
        },
        {
          id: "model-armor",
          title: "Model Armor overview",
          url: "https://docs.cloud.google.com/model-armor/overview",
          claim: "Model Armor screens LLM prompts and responses, filtering both inputs and outputs, to protect against prompt injection and jailbreak attacks and to reduce the risk of leaking personally identifiable information in prompts or responses.",
        },
        sensitiveDataInspection,
      ],
      choices: [
        {
          id: "a",
          text: "Send each customer message to Model Armor for prompt injection and jailbreak screening, and return the model's answers to customers without screening them.",
          feedback: "Incorrect. Screening only the incoming messages blocks injection attempts, but answers that contain other customers' phone numbers still reach customers.",
          evidenceIds: ["model-armor"],
        },
        {
          id: "b",
          text: "Send each customer message to Model Armor for prompt injection and jailbreak screening, and send each model answer to Model Armor for sensitive data screening.",
          feedback: "Correct. Model Armor screens prompts for prompt injection and jailbreak attempts and screens responses for personal data before they are passed on, which covers both risks found in testing.",
          evidenceIds: ["case-study", "model-armor"],
        },
        {
          id: "c",
          text: "Add system instructions that tell the Gemini model to ignore requests that change its rules and never to reveal personal data in its answers.",
          feedback: "Incorrect. Crafted messages already made the agent ignore its instructions, so more instructions do not screen messages or answers the way Model Armor filters do.",
          evidenceIds: ["model-armor"],
        },
        {
          id: "d",
          text: "Export the conversation logs to BigQuery every day, and run Sensitive Data Protection inspection jobs on them to find answers that exposed personal data.",
          feedback: "Incorrect. Inspection finds exposed personal data only after customers have seen the answers, while the requirement is to screen answers before they reach customers.",
          evidenceIds: ["sdp-inspection"],
        },
      ],
      correctChoiceId: "b",
    },
    {
      id: "pca-p1-secure-09",
      kind: "single",
      section: "secure",
      objective: "3.2 Designing for compliance: 3.2.a legislation and regulation",
      caseStudyId: "ehr-healthcare",
      prompt: "EHR Healthcare stores protected health information (PHI) about US patients in its electronic health record software and must keep complying with HIPAA after its move to Google Cloud. Development teams want to use several newly announced Google Cloud services, some of them in Preview, for a reporting feature that reads patient records. EHR's compliance officer asks what EHR must do so that its use of Google Cloud with PHI supports HIPAA compliance. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          ...ehrCaseStudy,
          claim: "EHR sells software for electronic health records to medical organizations and must maintain regulatory compliance.",
        },
        {
          id: "hipaa",
          title: "HIPAA compliance on Google Cloud and Google Workspace",
          url: "https://docs.cloud.google.com/docs/security/compliance/hipaa",
          claim: "HIPAA compliance is a shared responsibility, and Google supports it within the scope of a Business Associate Agreement (BAA). The BAA includes Google Cloud's entire infrastructure, so customers aren't restricted to a specific region. Customers should enter into the BAA, must not use unsupported services for PHI, and should not use pre-GA offerings with PHI.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Rely on Google to make every workload on Google Cloud HIPAA compliant, because Google Cloud's infrastructure meets HIPAA requirements for all customers.",
          feedback: "Incorrect. Complying with HIPAA is a shared responsibility, and Google supports it only within the scope of a Business Associate Agreement that EHR must enter into.",
          evidenceIds: ["hipaa"],
        },
        {
          id: "b",
          text: "Accept the Google Cloud BAA, and use any service that the BAA covers, including services in Preview, for every workload that stores or processes PHI.",
          feedback: "Incorrect. Google's guidance is not to use pre-GA offerings with PHI unless their terms expressly allow it, so the BAA does not make the Preview services acceptable for the reporting feature.",
          evidenceIds: ["hipaa"],
        },
        {
          id: "c",
          text: "Accept the Google Cloud BAA, and use only generally available services that the BAA covers for every workload that stores or processes PHI.",
          feedback: "Correct. EHR must enter into the BAA, must not use unsupported services for PHI, and must not use pre-GA offerings with PHI, which keeps the Preview services out of the reporting feature.",
          evidenceIds: ["case-study", "hipaa"],
        },
        {
          id: "d",
          text: "Encrypt all PHI with customer-managed encryption keys, which makes any Google Cloud service, including services in Preview, acceptable for PHI.",
          feedback: "Incorrect. Encryption does not change which services the BAA covers, and Google's guidance is not to use unsupported services or pre-GA offerings with PHI.",
          evidenceIds: ["hipaa"],
        },
      ],
      correctChoiceId: "c",
    },
    {
      id: "pca-p1-secure-10",
      kind: "single",
      section: "secure",
      objective: "3.2 Designing for compliance: 3.2.b commercial",
      caseStudyId: "cymbal-retail",
      prompt: "Cymbal Retail transcribes its call center conversations for product and service analysis in BigQuery. The transcripts are free text that contains customers' names and phone numbers, and sometimes payment card numbers that customers read out while agents enter orders for them. Cymbal must handle customer data securely and comply with payment card industry rules, and its analysts must not see these identifiers while they analyze the conversations. What should you do?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          ...cymbalCaseStudy,
          claim: "Cymbal's call center agents enter orders for customers who can't complete them alone, and Cymbal requires secure handling of customer data in line with industry regulations.",
        },
        {
          id: "sdp-deidentify",
          title: "De-identifying sensitive data",
          url: "https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data",
          claim: "Sensitive Data Protection detects sensitive data such as personally identifiable information in text content, including text in tables, and uses a de-identification transformation to mask, delete, or otherwise obscure it.",
        },
        {
          id: "authorized-views",
          title: "Authorized views",
          url: "https://docs.cloud.google.com/bigquery/docs/authorized-views",
          claim: "An authorized view shares a subset of a dataset's data with specific principals, who can query the shared data.",
        },
        cmek,
      ],
      choices: [
        {
          id: "a",
          text: "Load the raw transcripts into BigQuery, and give the analysts an authorized view that excludes the customer ID column of the transcripts table.",
          feedback: "Incorrect. The identifiers are inside the free-text transcripts, so a view that leaves out the customer ID column still shows names, phone numbers, and card numbers.",
          evidenceIds: ["authorized-views"],
        },
        {
          id: "b",
          text: "Load the raw transcripts into a BigQuery dataset protected with a customer-managed encryption key, and grant the analysts read access to the dataset.",
          feedback: "Incorrect. A customer-managed key protects data at rest, but analysts with read access still see the identifiers in their query results.",
          evidenceIds: ["cmek"],
        },
        {
          id: "c",
          text: "Load the raw transcripts into BigQuery, and use Sensitive Data Protection once a week to de-identify the names, phone numbers, and payment card numbers in the table.",
          feedback: "Incorrect. Analysts can see the identifiers in the raw transcripts until the weekly de-identification runs, so the transcripts must be de-identified before they are loaded.",
          evidenceIds: ["sdp-deidentify"],
        },
        {
          id: "d",
          text: "Use Sensitive Data Protection to de-identify the names, phone numbers, and payment card numbers in each transcript before the transcripts are loaded into BigQuery.",
          feedback: "Correct. Sensitive Data Protection detects personal data in text and masks or otherwise obscures it before loading, so analysts work with the conversations without seeing the identifiers.",
          evidenceIds: ["case-study", "sdp-deidentify"],
        },
      ],
      correctChoiceId: "d",
    },
    {
      id: "pca-p1-secure-11",
      kind: "multiple",
      requiredSelections: 2,
      section: "secure",
      objective: "3.2 Designing for compliance: 3.2.d audits",
      prompt: "A brokerage firm must keep the Admin Activity audit logs of every project in its Google Cloud organization for 7 years, including projects created in the future. The organization has about 400 projects in several folders, and teams create new projects every week. During the 7 years, nobody, including administrators, may delete the stored logs or shorten their retention. The firm wants a central solution that needs no changes when projects are created. Which two actions should you take?",
      verifiedOn: "2026-10-02",
      evidence: [
        {
          id: "aggregated-sinks",
          title: "Aggregated sinks overview",
          url: "https://docs.cloud.google.com/logging/docs/export/aggregated_sinks_overview",
          claim: "An aggregated sink receives all log entries that originate in a folder or organization and in its child resources.",
        },
        {
          id: "log-retention",
          title: "Quotas and limits",
          url: "https://docs.cloud.google.com/logging/quotas",
          claim: "The _Required log bucket retains logs for 400 days, and its retention period is not configurable.",
        },
        {
          id: "bucket-lock",
          title: "Bucket Lock",
          url: "https://docs.cloud.google.com/storage/docs/bucket-lock",
          claim: "With a bucket retention policy, objects can be deleted or replaced only after they are older than the retention period, and locking the policy permanently prevents it from being reduced or removed.",
        },
        objectVersioning,
      ],
      choices: [
        {
          id: "a",
          text: "Create a log sink in each existing project that routes its audit logs to a central Cloud Storage bucket, and add the same sink to each new project.",
          feedback: "Incorrect. Sinks in individual projects must be added to every new project, which the firm does not want, while an aggregated sink receives the logs of all child resources.",
          evidenceIds: ["aggregated-sinks"],
        },
        {
          id: "b",
          text: "Create an aggregated log sink at the organization level that includes all child resources and routes the audit logs to a Cloud Storage bucket in a central project.",
          feedback: "Correct. An aggregated sink at the organization level receives the log entries of every child folder and project, including projects created later, and routes them to one central bucket.",
          evidenceIds: ["aggregated-sinks"],
        },
        {
          id: "c",
          text: "Keep the audit logs in each project's _Required log bucket, and grant the security team the Private Logs Viewer role on every project.",
          feedback: "Incorrect. The _Required bucket keeps logs for 400 days, and its retention period can't be configured, so it cannot hold the logs for 7 years.",
          evidenceIds: ["log-retention"],
        },
        {
          id: "d",
          text: "Turn on Object Versioning for the destination Cloud Storage bucket so that any deleted log file can be restored from a noncurrent version.",
          feedback: "Incorrect. Noncurrent versions remain only until someone removes them, so an administrator can still delete the logs.",
          evidenceIds: ["object-versioning"],
        },
        {
          id: "e",
          text: "Set a retention policy of 7 years on the destination Cloud Storage bucket, and lock the retention policy.",
          feedback: "Correct. Objects in a bucket with a retention policy can't be deleted or replaced until they are older than the retention period, and locking the policy permanently prevents it from being reduced or removed.",
          evidenceIds: ["bucket-lock"],
        },
      ],
      correctChoiceIds: ["b", "e"],
    },
  ],
} satisfies QuestionSection<"secure">;
