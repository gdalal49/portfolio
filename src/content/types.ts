export type Link = { label: string; href?: string }
export type LabeledText = { label: string; text: string }
export type DateLabel = { label: string; dateTime?: string }
export type Note = { label: string; paragraphs: readonly string[] }

export type Profile = {
  name: string
  role: string
  employer: string
  employerShortName?: string
  profession: string
  focus?: readonly string[]
  intro?: string
  overview?: string
  experienceAside?: string
  location?: string
  about?: readonly string[]
  contactIntro?: string
  resume?: { path: string; filename: string }
  links: readonly Link[]
  email?: Link
}

export type Experience = {
  id: string
  employer: string
  role: string
  current?: boolean
  dates?: { start: DateLabel; end: DateLabel }
  domain?: string
  stack?: readonly string[]
  scope?: string
  contributions?: readonly {
    title: string
    problem: string
    contribution: string
    outcome?: string
  }[]
  technicalNote?: Note
}

export type Artifact =
  | { kind: 'figure'; src: string; alt: string; caption?: string }
  | { kind: 'snippet'; filename: string; text: string; label?: string }
  | { kind: 'sample'; label: string; description: string }

export type Project = {
  slug: string
  title: string
  stack: readonly string[]
  problem: string
  solution: string
  links?: readonly Link[]
  summaryNote?: Note & { collapsible?: boolean }
  detail?: {
    summary: string
    scope?: string
    problem?: string
    solution?: string
    links?: readonly Link[]
    artifacts?: readonly Artifact[]
    decisions?: readonly { area: string; approach: string; tradeoff: string }[]
    reliability?: readonly Note[]
  }
}

export type Skills = {
  production: readonly { category: string; skills: readonly { name: string; primary?: boolean }[] }[]
  exploring: readonly string[]
}
