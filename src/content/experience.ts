import { profile } from './profile'
import type { Experience } from './types'

export const experience: readonly Experience[] = [
  {
    id: 'paytm',
    employer: profile.employer,
    role: profile.role,
    current: true,
    dates: { start: { label: 'Jun 2023', dateTime: '2023-06' }, end: { label: 'Present' } },
    domain: 'UPI, notifications, and banking middleware',
    stack: ['Java', 'Spring Boot', 'Kafka', 'AWS', 'Kubernetes'],
    scope: 'I build Java and Spring Boot services, own notification and observability systems, and support service and traffic cutovers for UPI flows.',
    contributions: [
      {
        title: 'WhatsApp notification platform',
        problem: 'Move customer notifications away from SMS and physical mail.',
        contribution: 'Designed and owned an event-driven WhatsApp notification platform built on Kafka.',
        outcome: 'Reached a user base of more than 100 million and achieved 99.9% delivery reliability.',
      },
      {
        title: 'UPI traffic and validation',
        problem: 'Reduce NPCI inward traffic anomalies and improve throughput at peak load.',
        contribution: 'Reworked the meta-transaction API and VPA validation logic.',
        outcome: 'Reduced NPCI inward traffic anomalies by about 30% and improved peak throughput.',
      },
    ],
    technicalNote: {
      label: 'Technical challenges & engineering decisions',
      paragraphs: [
        'Owned the service and traffic cutover for critical UPI flows during the migration from legacy UPI-PSP to TPAP and TSP, with zero data loss.',
        'Built Prometheus and Grafana dashboards and proactive alerts. Uptime reached 99.9%, and incident detection took about one hour less.',
        'Optimized logging across three microservices, reducing log volume by 45%.',
      ],
    },
  },
  {
    id: 'paytm-intern',
    employer: profile.employer,
    role: 'Software Engineer Intern',
    dates: { start: { label: 'Jan 2023', dateTime: '2023-01' }, end: { label: 'Jun 2023', dateTime: '2023-06' } },
    scope: 'Improved the UPI-Panel service, reducing SonarQube blocker issues by 87% and critical issues by 81%. Shipped Java and Spring Boot features with JUnit and Mockito tests.',
  },
]
