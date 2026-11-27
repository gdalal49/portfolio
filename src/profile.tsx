import { experience } from './content/experience'
import { profile } from './content/profile'
import { projects } from './content/projects'
import { skills } from './content/skills'
import { mount } from './mount'
import { ProfilePage } from './pages/ProfilePage'

mount(
  <ProfilePage
    content={{ profile, experience, projects, skills }}
    profileHref="./"
    caseStudyHref={(project) => '../projects/' + project.slug + '/'}
  />,
)
