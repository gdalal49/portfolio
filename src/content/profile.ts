import type { Profile } from './types'

// Public professional details and contact links from the owner-approved résumé.
export const profile: Profile = {
  name: 'Gaurav Dalal',
  role: 'Software Engineer',
  employer: 'Paytm Payments Bank',
  employerShortName: 'Paytm',
  profession: 'Backend Software Engineer',
  focus: ['Java', 'Backend Engineering', 'Spring Boot'],
  intro: 'I build backend systems for UPI, notifications, and banking middleware at Paytm Payments Bank.',
  overview: '3+ years of professional experience · Backend Engineering',
  experienceAside: '3+ Years · Backend Engineering',
  about: [
    'I’m a backend software engineer with more than three years of experience building fintech systems at Paytm Payments Bank.',
    'My work spans Java and Spring Boot microservices, Kafka pipelines, API design, and production observability. I have also contributed to migrations of critical UPI flows.',
  ],
  contactIntro: 'Reach me directly by email, LinkedIn, or GitHub.',
  resume: { path: 'gaurav-dalal-resume.pdf', filename: 'Gaurav-Dalal-Resume.pdf' },
  email: { label: 'gaurav.dalal.dev@gmail.com', href: 'mailto:gaurav.dalal.dev@gmail.com' },
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gdalal49/' },
    { label: 'GitHub', href: 'https://github.com/gdalal49' },
  ],
}
