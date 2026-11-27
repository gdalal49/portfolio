import type { Skills } from './types'

export const skills: Skills = {
  production: [
    { category: 'Programming Languages', skills: [{ name: 'Java (8/11/17)', primary: true }, { name: 'SQL' }] },
    { category: 'Backend Development', skills: [{ name: 'Spring Boot', primary: true }, { name: 'Spring MVC' }, { name: 'Spring Security' }, { name: 'JPA' }] },
    { category: 'Databases & Caching', skills: [{ name: 'MySQL' }, { name: 'Oracle SQL' }, { name: 'Elasticsearch' }, { name: 'Aerospike' }] },
    { category: 'Infrastructure & Tools', skills: [{ name: 'AWS' }, { name: 'Docker' }, { name: 'Kubernetes' }, { name: 'Jenkins CI/CD' }, { name: 'Git' }, { name: 'Postman' }, { name: 'Maven' }] },
    { category: 'Observability', skills: [{ name: 'Prometheus' }, { name: 'Grafana' }, { name: 'Kibana' }, { name: 'PagerDuty' }] },
    { category: 'Engineering & Design', skills: [{ name: 'Microservices' }, { name: 'Event-driven architecture (Kafka)' }, { name: 'REST APIs' }, { name: 'Distributed systems' }] },
  ],
  exploring: [],
}
