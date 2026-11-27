import { profile } from '../src/content/profile'
import type { Project } from '../src/content/types'
import type { PortfolioContent } from '../src/pages/ProfilePage'

// Copy from the Stitch sample for visual comparison. These records are development only.
export const sampleCase = {
  slug: 'layout-sample',
  title: '[Placeholder: Project Title — e.g., Idempotent Payment Ledger Service]',
  stack: ['Java 17', 'Spring Boot', '[Placeholder: Stack]'],
  problem: '[Placeholder: Define the exact systems problem, failure mode, or throughput constraint this project addresses.]',
  solution: '[Placeholder: Summarize the backend architecture, data model, and core Spring Boot / Java components.]',
  links: [{ label: 'GitHub' }],
  summaryNote: {
    label: 'Architecture Decisions & Trade-offs',
    paragraphs: ['[Placeholder: Document key trade-offs, implementation challenges, and testing/reliability guarantees (e.g., Testcontainers integration tests, idempotency keys).]'],
  },
  detail: {
    summary: '[Placeholder: One-sentence technical summary of what the system does and the reliability problem it solves.]',
    scope: '[Placeholder: Solo / Team · Month YYYY]',
    problem: '[Placeholder: Describe the concrete engineering problem, failure scenarios (e.g., duplicate retries, race conditions, partial failures), and non-functional requirements.]',
    solution: '[Placeholder: Walk through the end-to-end request lifecycle, Spring Boot service boundaries, and persistence strategy.]',
    links: [{ label: 'GitHub Repository' }, { label: '[Demo: Optional]' }],
    artifacts: [
      {
        kind: 'sample',
        label: '[Placeholder: Verified Architecture Diagram or Sequence Diagram]',
        description: 'Insert only an actual, verified system diagram, API specification, or database schema once the project details are finalized.',
      },
      {
        kind: 'snippet',
        filename: 'schema-or-endpoint.sql',
        label: 'Editable Snippet',
        text: [
          '-- [Placeholder: Replace with actual DDL, API contract, or Spring Boot config]',
          'CREATE TABLE idempotency_records (',
          '  idempotency_key VARCHAR(64) PRIMARY KEY,',
          '  request_hash    CHAR(64) NOT NULL,',
          '  status          VARCHAR(24) NOT NULL,',
          '  created_at      TIMESTAMP NOT NULL',
          ');',
        ].join('\n'),
      },
    ],
    decisions: [
      { area: '[Placeholder: Concurrency]', approach: '[Placeholder: Optimistic locking / DB unique constraint]', tradeoff: '[Placeholder: Requires retry handling on conflict]' },
      { area: '[Placeholder: Messaging]', approach: '[Placeholder: Outbox pattern / async consumer]', tradeoff: '[Placeholder: Eventual consistency window]' },
    ],
    reliability: [
      { label: 'Implementation challenges', paragraphs: ['[Placeholder: Specific edge cases, timeout tuning, connection pool saturation, or serialization issues encountered and resolved.]'] },
      { label: 'Testing & reliability considerations', paragraphs: ['[Placeholder: JUnit 5 unit tests, Testcontainers integration tests, structured logging, health checks, and verified benchmark results if available.]'] },
    ],
  },
} satisfies Project

export const content: PortfolioContent = {
  profile: {
    ...profile,
    employer: 'Paytm',
    resume: undefined,
    experienceAside: '~3 Years · Backend Engineering',
    focus: ['Java', 'Backend Engineering', 'Spring Boot'],
    intro: 'I am a backend software engineer focused on building reliable, maintainable, and scalable software systems.',
    overview: 'Based in India · 3 years of professional experience · Targeting SDE-2 & Backend roles',
    location: 'India',
    links: [{ label: 'LinkedIn' }, { label: 'GitHub' }],
    email: { label: '[Placeholder: Public email]' },
    about: [
      'I am a backend software engineer with roughly three years of experience building production Java and Spring Boot services, currently working at Paytm in India.',
      'My engineering focus is on clear service boundaries, predictable failure handling, and writing maintainable code that other engineers can reason about under on-call pressure. [Placeholder: Add 1–2 sentences on specific backend interests or recent engineering reading.]',
    ],
    contactIntro: 'Open to SDE-2 and backend engineering conversations. Direct channels—no forms required.',
  },
  experience: [
    {
      id: 'paytm',
      employer: 'Paytm',
      role: profile.role,
      current: true,
      dates: { start: { label: '[Placeholder: Month YYYY' }, end: { label: 'Present]' } },
      domain: '[Placeholder: Team / Business Domain, e.g. Payments Core]',
      stack: ['Java', 'Spring Boot', '[Placeholder: DB / Messaging / Cache stack]'],
      scope: '[Placeholder: Concise summary of service ownership, API design, production reliability, and cross-team collaboration at Paytm.]',
      contributions: [
        {
          title: '[Placeholder: Key Engineering Initiative / Service Title]',
          problem: '[Placeholder: Specific bottleneck, reliability gap, or business requirement encountered in production.]',
          contribution: '[Placeholder: Concrete backend architecture, Java/Spring Boot implementation, and ownership you led.]',
          outcome: '[Placeholder: Verified measurable impact — e.g., latency, error-rate, or operational improvement.]',
        },
        {
          title: '[Placeholder: Second Engineering Contribution / Reliability Improvement]',
          problem: '[Placeholder: Operational pain point, data consistency challenge, or scaling constraint.]',
          contribution: '[Placeholder: Technical solution designed and shipped.]',
          outcome: '[Placeholder: Verified outcome or system stability improvement.]',
        },
      ],
      technicalNote: {
        label: 'Technical challenges & engineering decisions (Hiring Manager view)',
        paragraphs: [
          'Technical Challenges: [Placeholder: Concurrency, idempotency, distributed transactions, or backward-compatible schema migration details.]',
          'Engineering Decisions: [Placeholder: Trade-offs evaluated between consistency vs. latency, sync vs. async processing, or caching strategies.]',
        ],
      },
    },
    {
      id: 'prior-role',
      employer: '[Placeholder: Prior Role / Company]',
      role: '[Placeholder: Designation]',
      dates: { start: { label: '[Placeholder: Month YYYY' }, end: { label: 'Month YYYY]' } },
      scope: '[Placeholder: Add earlier full-time role or internship details if applicable to complete the 3-year timeline, or remove this block if all 3 years were at Paytm.]',
    },
  ],
  projects: [
    sampleCase,
    {
      slug: 'second-layout-sample',
      title: '[Placeholder: Project Title — e.g., Event-Driven Notification Worker]',
      stack: ['Java', 'Spring Boot', '[Placeholder: Stack]'],
      problem: '[Placeholder: Describe the reliability or decoupling challenge solved.]',
      solution: '[Placeholder: Describe consumer retry/DLQ mechanics, concurrency model, and persistence.]',
      links: [{ label: 'GitHub' }, { label: '[Demo: Optional]' }],
      summaryNote: {
        label: 'Trade-offs, challenges & testing strategy',
        collapsible: true,
        paragraphs: ['[Placeholder: Detail ordering guarantees, backpressure handling, and automated integration tests.]'],
      },
    },
  ],
  skills: {
    production: [
      { category: 'Programming Languages', skills: [{ name: 'Java', primary: true }, { name: 'SQL' }, { name: '[Placeholder: Additional languages]' }] },
      { category: 'Backend Development', skills: [{ name: 'Spring Boot', primary: true }, { name: 'Spring MVC' }, { name: 'Spring Data JPA' }, { name: 'RESTful APIs' }, { name: 'Microservices' }] },
      { category: 'Databases & Caching', skills: [{ name: '[Placeholder: e.g., MySQL, PostgreSQL, Redis — list only verified production databases]' }] },
      { category: 'Infrastructure & Tools', skills: [{ name: '[Placeholder: e.g., Apache Kafka, Docker, Kubernetes, Maven/Gradle, Git, CI/CD]' }] },
      { category: 'Engineering & Design', skills: [{ name: 'Distributed Systems' }, { name: 'Concurrency' }, { name: 'Idempotent API Design' }, { name: 'Observability' }, { name: 'Unit & Integration Testing' }] },
    ],
    exploring: ['[Placeholder: e.g., Go, Distributed Consensus, JVM Performance Tuning]'],
  },
}
