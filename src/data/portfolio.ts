/**
 * Centralized portfolio configuration.
 * Update personal info, links, resume path, experience, projects and case
 * studies here — no component changes required.
 */

export const profile = {
  name: "Arjun Verma",
  title: "Software Developer — Backend & Full-Stack",
  tagline:
    "I design and ship production backends: REST/GraphQL APIs, relational data models, and event-driven services for SaaS and healthcare (LIMS) platforms.",
  location: "Pune, India · Remote friendly",
  email: "arjun.verma.dev@example.com",
  phone: "+91 98000 00000",
  resumePath: "/resume/resume.pdf",
  resumeFileName: "Arjun-Verma-Software-Developer.pdf",
  social: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  stats: [
    { value: "4+", label: "Years building production systems" },
    { value: "60+", label: "REST & GraphQL endpoints shipped" },
    { value: "3", label: "Multi-tenant SaaS platforms" },
    { value: "99.9%", label: "Uptime on core LIMS services" },
  ],
};

export const about = {
  summary: [
    "Software developer with four years of hands-on experience building and maintaining backend services and full-stack applications for regulated, data-heavy domains — clinical laboratory information systems (LIMS), diagnostics workflows and B2B SaaS.",
    "My day-to-day is API design in Laravel/PHP and Node.js, relational modelling in MySQL and PostgreSQL, and React front-ends that consume those APIs. I own features end to end: schema and migrations, request validation, authorization rules, integration contracts, tests, and the observability needed to debug them at 2am.",
    "I care about the boring parts that keep systems alive: idempotent consumers, deterministic migrations, explicit error contracts, N+1 elimination, and load-tested indexes before a release rather than after an incident.",
  ],
  highlights: [
    {
      title: "Backend & API architecture",
      body: "Versioned REST APIs and GraphQL gateways with policy-based authorization, JSON schema validation, consistent error envelopes and cursor pagination.",
    },
    {
      title: "Data modelling & performance",
      body: "Normalized MySQL/PostgreSQL schemas, zero-downtime migrations, composite indexes and query plans — cut a reporting endpoint from 8.4s to 320ms.",
    },
    {
      title: "Event-driven integration",
      body: "RabbitMQ producers/consumers for analyzer results and billing events, with retry topologies, dead-letter queues and idempotency keys.",
    },
    {
      title: "Production ownership",
      body: "CI pipelines, containerized deploys, structured logging, alerting and incident write-ups; feature work measured against latency and error-rate budgets.",
    },
  ],
};

export const skillGroups = [
  { name: "Languages", items: ["PHP", "TypeScript", "JavaScript", "SQL", "Python", "Bash"] },
  {
    name: "Backend",
    items: ["Laravel", "Node.js", "Express", "REST design", "Queues & workers", "Cron/schedulers"],
  },
  {
    name: "Frontend",
    items: ["React", "TanStack Router/Query", "Tailwind CSS", "Vite", "Accessible UI"],
  },
  {
    name: "Databases",
    items: ["MySQL", "PostgreSQL", "Redis", "Schema design", "Migrations", "Query tuning"],
  },
  {
    name: "APIs & Integration",
    items: ["GraphQL", "OpenAPI", "OAuth2 / JWT", "Webhooks", "HL7 / ASTM", "Stripe & Razorpay"],
  },
  {
    name: "DevOps & Tools",
    items: ["Docker", "GitHub Actions", "Nginx", "Linux", "Sentry", "Grafana"],
  },
  { name: "Testing", items: ["PHPUnit", "Pest", "Vitest", "Playwright", "Contract tests", "k6"] },
  {
    name: "Other",
    items: ["RabbitMQ", "Multi-tenancy", "RBAC", "Audit logging", "Domain modelling", "Agile/Scrum"],
  },
];

export const experience = [
  {
    company: "Medlytic Systems",
    role: "Software Developer — Backend",
    duration: "2023 — Present",
    location: "Pune, India",
    summary:
      "Core engineer on a multi-tenant LIMS used by diagnostic labs to run sample intake, testing workflows and reporting.",
    responsibilities: [
      "Own the sample lifecycle domain: intake, accessioning, worklists, result entry, verification and report release.",
      "Design and version REST APIs consumed by the web app, lab analyzer bridges and hospital HIS partners.",
      "Model and migrate the tenant-scoped MySQL schema; review every migration for lock time and rollback safety.",
      "Run RabbitMQ consumers that ingest analyzer results and dispatch report delivery jobs.",
    ],
    tech: ["Laravel", "MySQL", "RabbitMQ", "Redis", "React", "Docker", "GitHub Actions"],
    impact: [
      "Reduced result turnaround for high-volume labs by 41% by replacing synchronous report generation with queued workers.",
      "Cut the daily reconciliation report from 8.4s to 320ms via composite indexes and a denormalized rollup table.",
      "Brought analyzer ingestion failures from ~3%/day to under 0.2% with idempotency keys and a dead-letter replay tool.",
    ],
  },
  {
    company: "Northbridge SaaS Labs",
    role: "Full-Stack Developer",
    duration: "2022 — 2023",
    location: "Remote",
    summary:
      "Built subscription and workspace features for a B2B operations SaaS serving mid-market logistics teams.",
    responsibilities: [
      "Implemented workspace-scoped RBAC, invitations and audit trails across API and UI.",
      "Built the billing integration: plan changes, proration, dunning and webhook reconciliation.",
      "Introduced a GraphQL gateway over existing REST services for the dashboard's aggregate views.",
    ],
    tech: ["Node.js", "PostgreSQL", "GraphQL", "React", "Stripe", "Sentry"],
    impact: [
      "Removed 27 duplicate dashboard requests per page load by consolidating them behind one GraphQL query.",
      "Failed-payment recovery rose from 38% to 61% after a retry + dunning schedule tied to webhook state.",
    ],
  },
  {
    company: "Cobalt Software Services",
    role: "Junior Developer",
    duration: "2021 — 2022",
    location: "Pune, India",
    summary:
      "Delivered client web applications and internal tooling on a Laravel/MySQL stack under senior review.",
    responsibilities: [
      "Built CRUD modules, admin panels and report exports with request validation and policy checks.",
      "Wrote PHPUnit coverage for business rules and fixed defects triaged from production logs.",
    ],
    tech: ["Laravel", "MySQL", "jQuery", "Bootstrap", "Nginx"],
    impact: [
      "Automated a manual monthly export that had cost the operations team ~10 hours per cycle.",
    ],
  },
];

export type CaseStudy = {
  slug: string;
  name: string;
  short: string;
  problem: string;
  contribution: string;
  tech: string[];
  links: { github?: string; demo?: string };
  year: string;
  overview: { purpose: string; businessProblem: string; solution: string };
  architecture: {
    description: string;
    diagram: { layer: string; nodes: string[] }[];
    notes: string[];
  };
  api: { style: string; auth: string; flow: string[]; validation: string; errors: string };
  database: {
    engine: string;
    entities: { name: string; fields: string; relations: string }[];
    dataFlow: string;
    migrations: string;
    optimization: string[];
  };
  challenges: { problem: string; approach: string; solution: string; result: string }[];
  stack: { group: string; items: string[] }[];
};

export const projects: CaseStudy[] = [
  {
    slug: "lims-sample-pipeline",
    name: "LIMS Sample & Result Pipeline",
    short:
      "Multi-tenant laboratory information system handling sample accessioning, analyzer ingestion and verified report release.",
    problem:
      "Labs were keying analyzer output into spreadsheets, so results arrived late and had no audit trail for accreditation.",
    contribution:
      "Designed the sample lifecycle domain, the analyzer ingestion consumers and the tenant-scoped data model.",
    tech: ["Laravel", "MySQL", "RabbitMQ", "Redis", "React", "Docker"],
    links: { github: "https://github.com/", demo: "" },
    year: "2023 — Present",
    overview: {
      purpose:
        "Give diagnostic labs one system of record from sample intake to signed report, with every state transition attributable to a user or device.",
      businessProblem:
        "Manual transcription between analyzers, worklists and reports produced 6–18 hour turnaround times, transcription errors and audit gaps that threatened NABL accreditation.",
      solution:
        "A tenant-isolated Laravel service exposing a versioned REST API, with RabbitMQ consumers ingesting analyzer messages, a rules engine for verification, and queued PDF report generation and delivery.",
    },
    architecture: {
      description:
        "A modular monolith at the core with asynchronous edges: HTTP for interactive work, queues for anything slow, unreliable or device-driven.",
      diagram: [
        { layer: "Clients", nodes: ["React web app", "Analyzer bridge", "Hospital HIS"] },
        { layer: "Edge", nodes: ["Nginx", "Rate limiter", "Auth middleware"] },
        {
          layer: "Application",
          nodes: ["Sample module", "Worklist module", "Results module", "Reporting module"],
        },
        { layer: "Async", nodes: ["RabbitMQ", "Ingest consumer", "Report worker", "DLQ replay"] },
        { layer: "Data", nodes: ["MySQL (tenant-scoped)", "Redis cache", "S3 report store"] },
      ],
      notes: [
        "Frontend talks only to /api/v1; the analyzer bridge publishes to RabbitMQ and never touches HTTP.",
        "Authentication uses short-lived JWT access tokens with rotating refresh tokens; device bridges use scoped API keys.",
        "Tenant isolation is enforced by a global query scope plus a database-level tenant_id constraint on every table.",
      ],
    },
    api: {
      style: "REST, versioned under /api/v1, JSON:API-inspired envelopes with cursor pagination.",
      auth: "JWT bearer tokens with role and permission claims; policy classes authorize every resource action; device keys are scoped to a single tenant and endpoint set.",
      flow: [
        "Client sends POST /api/v1/samples with an Idempotency-Key header.",
        "Middleware resolves the tenant, verifies the token and applies rate limits.",
        "A form request validates payload shape, barcode format and test-panel references.",
        "The service layer creates the sample, emits sample.accessioned to RabbitMQ, and returns 201 with the resource.",
        "Consumers pick up downstream work: worklist placement, label printing, HIS acknowledgement.",
      ],
      validation:
        "Form-request rules per endpoint plus domain invariants in the service layer (a sample cannot be verified before every panel has a result). Rejections return 422 with field-level pointers.",
      errors:
        "One error envelope: { error: { code, message, details[], trace_id } }. Domain exceptions map to stable machine codes, unexpected failures return 500 with a trace_id that matches the structured log entry.",
    },
    database: {
      engine: "MySQL 8 with row-level tenant scoping and InnoDB foreign keys",
      entities: [
        {
          name: "tenants",
          fields: "id, name, code, timezone, settings(json)",
          relations: "parent of every other table",
        },
        {
          name: "patients",
          fields: "id, tenant_id, mrn, name, dob, sex",
          relations: "has many samples",
        },
        {
          name: "samples",
          fields: "id, tenant_id, patient_id, barcode, status, accessioned_at",
          relations: "belongs to patient, has many orders",
        },
        {
          name: "test_orders",
          fields: "id, sample_id, panel_id, status, priority",
          relations: "belongs to sample, has many results",
        },
        {
          name: "results",
          fields: "id, test_order_id, analyte, value, unit, flag, verified_by",
          relations: "belongs to test_order",
        },
        {
          name: "audit_events",
          fields: "id, tenant_id, actor_id, entity, action, payload(json), created_at",
          relations: "polymorphic to any entity",
        },
      ],
      dataFlow:
        "Analyzer message → ingest consumer → result rows written in a transaction → order status recalculated → sample status derived → verification queue → report generated and archived.",
      migrations:
        "Every change ships as a reversible migration, expand/contract in two releases for column changes, and online DDL for large tables. Migrations run in CI against a production-sized snapshot to measure lock time before release.",
      optimization: [
        "Composite index (tenant_id, status, accessioned_at) drives the worklist query.",
        "A nightly rollup table replaced a six-join reporting query: 8.4s → 320ms.",
        "Eager loading and a query-count assertion in tests eliminated N+1s on the sample detail endpoint.",
      ],
    },
    challenges: [
      {
        problem:
          "Analyzer bridges re-sent messages after network drops, producing duplicate results and false criticals.",
        approach:
          "Traced duplicates to at-least-once delivery with no consumer-side dedupe; modelled a natural key per analyzer message.",
        solution:
          "Added a unique (analyzer_id, message_uid) constraint, wrapped ingestion in a transaction with upsert semantics, and routed permanent failures to a dead-letter queue with a replay tool.",
        result: "Duplicate results dropped to zero; ingestion failure rate fell from ~3% to <0.2%.",
      },
      {
        problem:
          "Report generation ran inside the HTTP request, so high-volume labs saw 30s timeouts at shift end.",
        approach:
          "Profiled the endpoint, split rendering from delivery, and measured queue depth under peak load with k6.",
        solution:
          "Moved rendering to a queued worker with per-tenant concurrency limits, and streamed status back over polling with a signed download URL.",
        result: "P95 release latency went from 30s+ timeouts to 1.9s; turnaround improved 41%.",
      },
      {
        problem: "Cross-tenant data leakage was a real risk as modules multiplied.",
        approach:
          "Audited every query path and treated isolation as an infrastructure concern, not a per-query discipline.",
        solution:
          "Global Eloquent scope bound to the resolved tenant, a not-null tenant_id on all tables, and a test suite that fails any query executed without a tenant predicate.",
        result: "Zero isolation defects since introduction, verified by an external security review.",
      },
    ],
    stack: [
      { group: "Backend", items: ["Laravel 11", "PHP 8.3", "Horizon", "RabbitMQ"] },
      { group: "Data", items: ["MySQL 8", "Redis", "S3-compatible storage"] },
      { group: "Frontend", items: ["React", "TanStack Query", "Tailwind CSS"] },
      { group: "Ops", items: ["Docker", "GitHub Actions", "Grafana", "Sentry"] },
    ],
  },
  {
    slug: "saas-billing-platform",
    name: "Workspace Billing & Entitlements",
    short:
      "Subscription, proration and entitlement service for a B2B SaaS with workspace-scoped roles and audit trails.",
    problem:
      "Plan changes and failed payments were reconciled by hand, and feature access drifted out of sync with billing state.",
    contribution:
      "Built the billing state machine, webhook reconciliation and the entitlement checks used across API and UI.",
    tech: ["Node.js", "PostgreSQL", "GraphQL", "Stripe", "React"],
    links: { github: "https://github.com/", demo: "" },
    year: "2022 — 2023",
    overview: {
      purpose:
        "Make billing state the single source of truth for what a workspace can do, and make every transition observable.",
      businessProblem:
        "Support handled ~40 billing tickets a month caused by drift between Stripe and the product database; failed payments quietly kept premium features on.",
      solution:
        "A billing service owning a subscription state machine, reconciled from Stripe webhooks with replay-safe handlers, exposing entitlements to the rest of the platform through a cached resolver.",
    },
    architecture: {
      description:
        "Service-oriented split: an API gateway in GraphQL, a billing service owning subscription state, and the product API asking for entitlements rather than computing them.",
      diagram: [
        { layer: "Clients", nodes: ["React dashboard", "Admin console"] },
        { layer: "Gateway", nodes: ["GraphQL gateway", "Auth (OAuth2/JWT)", "DataLoader batching"] },
        { layer: "Services", nodes: ["Product API", "Billing service", "Entitlement resolver"] },
        { layer: "External", nodes: ["Stripe", "Webhook receiver", "Email provider"] },
        { layer: "Data", nodes: ["PostgreSQL", "Redis (entitlement cache)"] },
      ],
      notes: [
        "The dashboard issues one GraphQL query per screen; DataLoader batches downstream REST calls.",
        "Webhook handlers are idempotent on Stripe event ids and safely replayable from an event archive.",
        "Entitlements are cached in Redis with explicit invalidation on every subscription transition.",
      ],
    },
    api: {
      style:
        "GraphQL gateway for reads and mutations from the dashboard, REST internally between services, plus a signed webhook endpoint.",
      auth: "OAuth2 authorization code flow for users, JWT with workspace and role claims between services, HMAC signature verification on webhooks.",
      flow: [
        "Dashboard sends a GraphQL mutation changePlan(workspaceId, planId).",
        "Gateway authorizes the workspace role and forwards to the billing service.",
        "Billing service computes proration, calls Stripe, and records a pending transition.",
        "Stripe webhook confirms; the handler commits the transition and invalidates the entitlement cache.",
        "Subsequent entitlement checks read the fresh state and unlock or lock features.",
      ],
      validation:
        "Zod schemas at every service boundary, plus state-machine guards that reject illegal transitions (no downgrade while an invoice is past due).",
      errors:
        "Typed GraphQL error extensions with codes such as PLAN_NOT_AVAILABLE and PAYMENT_REQUIRED; retryable versus terminal failures are distinguished so clients know whether to retry.",
    },
    database: {
      engine: "PostgreSQL 15",
      entities: [
        {
          name: "workspaces",
          fields: "id, name, owner_id, created_at",
          relations: "has one subscription, has many members",
        },
        {
          name: "memberships",
          fields: "id, workspace_id, user_id, role",
          relations: "join between users and workspaces",
        },
        {
          name: "subscriptions",
          fields: "id, workspace_id, plan_id, status, current_period_end",
          relations: "belongs to workspace, has many invoices",
        },
        {
          name: "invoices",
          fields: "id, subscription_id, amount_due, status, attempt_count",
          relations: "belongs to subscription",
        },
        {
          name: "billing_events",
          fields: "id, external_id (unique), type, payload(jsonb), processed_at",
          relations: "append-only webhook archive",
        },
      ],
      dataFlow:
        "Stripe event → signature check → append to billing_events → transition subscription in a transaction → invalidate Redis entitlements → notify workspace owner.",
      migrations:
        "SQL migrations under version control with forward and rollback scripts; backfills run as idempotent batched jobs separate from schema changes.",
      optimization: [
        "Partial index on invoices(status) WHERE status = 'past_due' for the dunning sweep.",
        "jsonb GIN index on billing_events.payload for support lookups by customer id.",
        "Entitlement reads served from Redis: P99 dropped from 90ms to 4ms.",
      ],
    },
    challenges: [
      {
        problem: "Out-of-order and duplicated Stripe webhooks corrupted subscription state.",
        approach:
          "Modelled subscriptions as an explicit state machine and treated webhooks as facts with timestamps rather than commands.",
        solution:
          "Unique external_id archive, ordering by event created_at, and guards that ignore transitions older than the persisted state version.",
        result: "Billing support tickets fell from ~40/month to 6/month.",
      },
      {
        problem: "The dashboard fired 30+ requests per load, making it slow on mid-tier connections.",
        approach: "Mapped the data each screen actually needs and batched the underlying calls.",
        solution: "A GraphQL gateway with DataLoader batching and per-field caching hints.",
        result: "Requests per page load: 30 → 3; median load time down 1.6s.",
      },
    ],
    stack: [
      { group: "Backend", items: ["Node.js", "TypeScript", "Apollo Server", "Zod"] },
      { group: "Data", items: ["PostgreSQL 15", "Redis", "Prisma"] },
      { group: "Frontend", items: ["React", "Apollo Client", "Tailwind CSS"] },
      { group: "Ops", items: ["Docker", "GitHub Actions", "Sentry"] },
    ],
  },
  {
    slug: "hl7-integration-gateway",
    name: "HL7 Hospital Integration Gateway",
    short:
      "Bidirectional gateway translating HL7 v2 messages between hospital information systems and the LIMS REST API.",
    problem:
      "Every hospital partner spoke a slightly different HL7 dialect, and each onboarding took weeks of bespoke code.",
    contribution:
      "Built the mapping engine, transport adapters and the replay/observability tooling for failed messages.",
    tech: ["Laravel", "RabbitMQ", "MySQL", "HL7 v2", "Docker"],
    links: { github: "https://github.com/", demo: "" },
    year: "2024",
    overview: {
      purpose:
        "Turn partner onboarding from a code change into a configuration change, without losing traceability of clinical messages.",
      businessProblem:
        "Each new hospital required 2–3 weeks of custom parsing work, and failures were invisible until a lab called to ask where an order had gone.",
      solution:
        "A configuration-driven mapping engine: per-partner profiles describe segment and field mappings, transports are pluggable (MLLP, SFTP, HTTPS), and every message is persisted with its parse result for replay.",
    },
    architecture: {
      description:
        "A thin ingress layer per transport, a shared normalization pipeline, and an outbound dispatcher that mirrors the same profile system in reverse.",
      diagram: [
        { layer: "Partners", nodes: ["MLLP socket", "SFTP drop", "HTTPS push"] },
        { layer: "Ingress", nodes: ["Transport adapters", "Message archive", "Signature/ACK"] },
        { layer: "Pipeline", nodes: ["Parser", "Profile mapper", "Validator", "Normalizer"] },
        { layer: "Core", nodes: ["LIMS REST API", "RabbitMQ", "Replay console"] },
        { layer: "Data", nodes: ["MySQL", "Object storage (raw messages)"] },
      ],
      notes: [
        "Raw messages are archived byte-for-byte before parsing, so a mapping fix can be replayed over history.",
        "Each partner profile is versioned; replays run against the profile version active at receipt time unless overridden.",
        "ACK/NACK responses are generated from validation outcomes, not from transport success.",
      ],
    },
    api: {
      style:
        "HL7 v2 over MLLP inbound, internal REST calls to the LIMS API, and a small admin REST API for profiles and replays.",
      auth: "Mutual TLS per partner on MLLP/HTTPS, SSH keys for SFTP, service tokens for internal calls.",
      flow: [
        "Message arrives on a transport adapter and is archived with a checksum.",
        "Parser produces a segment tree; the partner profile maps it to the canonical order model.",
        "Validator checks required fields, code sets and patient identity rules.",
        "On success the gateway calls the LIMS API and returns an HL7 ACK; on failure it returns a NACK with an error code and queues the message for review.",
      ],
      validation:
        "Two layers: structural (segment/field cardinality per profile) and semantic (known test codes, resolvable patient identifiers, plausible collection times).",
      errors:
        "Every failure records the offending segment, field position and profile rule, surfaced in the replay console with a one-click retry after a profile fix.",
    },
    database: {
      engine: "MySQL 8 plus object storage for raw payloads",
      entities: [
        {
          name: "partners",
          fields: "id, name, transport, profile_version",
          relations: "has many messages",
        },
        {
          name: "profiles",
          fields: "id, partner_id, version, mapping(json), active",
          relations: "belongs to partner",
        },
        {
          name: "messages",
          fields: "id, partner_id, control_id, checksum, status, received_at",
          relations: "has one parse_result",
        },
        {
          name: "parse_results",
          fields: "id, message_id, canonical(json), errors(json)",
          relations: "belongs to message",
        },
      ],
      dataFlow:
        "Raw message → archive → parse → map → validate → LIMS API call → status recorded → ACK/NACK returned.",
      migrations:
        "Additive-only schema changes with backfill jobs; profile mappings are data, so partner changes never require a migration.",
      optimization: [
        "Index (partner_id, status, received_at) powers the failure triage view.",
        "Raw payloads live in object storage, keeping the messages table narrow and fast to scan.",
      ],
    },
    challenges: [
      {
        problem: "Mapping fixes could not be applied to messages that had already failed.",
        approach: "Separated receipt from interpretation so parsing became a pure, repeatable step.",
        solution:
          "Byte-exact archive plus versioned profiles and a replay engine that reprocesses a date range against a chosen profile version.",
        result:
          "Backlogged failures are cleared in minutes; partner onboarding dropped from ~3 weeks to 4 days.",
      },
      {
        problem: "Patient identity collisions across partners created duplicate records.",
        approach: "Analyzed real collisions and defined a deterministic matching rule with lab staff.",
        solution:
          "Composite identity on (partner_id, MRN) with a supervised merge workflow and full audit history.",
        result: "Duplicate patient creation fell by 94%, with an auditable trail for every merge.",
      },
    ],
    stack: [
      { group: "Backend", items: ["Laravel", "PHP 8.3", "ReactPHP (MLLP listener)"] },
      { group: "Messaging", items: ["RabbitMQ", "HL7 v2.5", "ASTM adapters"] },
      { group: "Data", items: ["MySQL 8", "Object storage"] },
      { group: "Ops", items: ["Docker", "Grafana", "Structured logging"] },
    ],
  },
];

export const education = [
  {
    degree: "B.E. in Computer Engineering",
    institution: "Savitribai Phule Pune University",
    year: "2021",
    focus: [
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Data Structures & Algorithms",
      "Software Engineering",
    ],
    note: "Final-year project: a distributed job scheduler with at-least-once delivery and worker health checks.",
  },
];

export const certifications = [
  {
    name: "AWS Certified Developer — Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    link: "https://aws.amazon.com/certification/",
  },
  {
    name: "MySQL 8.0 Database Developer",
    issuer: "Oracle",
    year: "2023",
    link: "https://education.oracle.com/",
  },
  {
    name: "Docker Foundations Professional",
    issuer: "Docker Inc.",
    year: "2023",
    link: "https://www.docker.com/",
  },
];

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];
