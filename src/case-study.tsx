import { experience } from './content/experience'
import { profile } from './content/profile'
import { projects } from './content/projects'
import { skills } from './content/skills'
import { mount } from './mount'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { portfolioSections } from './pages/ProfilePage'

const slug = document.getElementById('root')?.dataset.project
const index = projects.findIndex((project) => project.slug === slug)
const project = projects[index]
if (!project?.detail) throw new Error('Missing published case study: ' + slug)

mount(
  <CaseStudyPage
    profile={profile}
    sections={portfolioSections({ profile, experience, projects, skills })}
    project={{ ...project, detail: project.detail }}
    number={String(index + 1).padStart(2, '0')}
    profileHref="../../profile/"
  />,
)
