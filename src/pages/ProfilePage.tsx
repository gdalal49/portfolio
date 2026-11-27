import { SectionHeading } from '../components/Editorial'
import { ExperienceEntry } from '../components/ExperienceEntry'
import { ResumeLink, TextLink } from '../components/Links'
import { ProjectSummary } from '../components/ProjectSummary'
import { SiteFrame } from '../components/SiteFrame'
import type { SectionId } from '../components/SiteFrame'
import type { Experience, Profile, Project, Skills } from '../content/types'

export type PortfolioContent = {
  profile: Profile
  experience: readonly Experience[]
  projects: readonly Project[]
  skills: Skills
}

export function portfolioSections({ profile, experience, projects, skills }: PortfolioContent): SectionId[] {
  const sections: SectionId[] = []
  if (experience.length) sections.push('experience')
  if (projects.length) sections.push('projects')
  if (skills.production.length || skills.exploring.length) sections.push('skills')
  if (profile.about?.length) sections.push('about')
  return sections
}

export function ProfilePage({ content, profileHref, caseStudyHref, sample = false }: {
  content: PortfolioContent
  profileHref: string
  caseStudyHref: (project: Project) => string
  sample?: boolean
}) {
  const { profile, experience, projects, skills } = content
  const sections = portfolioSections(content)
  const contactLinks = [...profile.links, ...(profile.email ? [profile.email] : [])]
  const hasLinks = Boolean(profile.resume || contactLinks.length || (import.meta.env.DEV && sample))

  return (
    <SiteFrame profile={profile} profileHref={profileHref} sections={sections} sample={sample}>
      {import.meta.env.DEV && sample && <p className="mt-3 font-mono text-meta text-muted">Stitch review · Sample content for layout review</p>}
      <section id="top" tabIndex={-1} aria-labelledby="profile-title" className="editorial-grid gap-6 border-b border-rule py-8">
        <div className="space-y-2 md:col-span-8">
          <h1 id="profile-title" className="font-display text-display-mobile text-balance md:text-display">{profile.name}</h1>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <p className="text-title-lg">
              {profile.role} at {profile.employerShortName ?? profile.employer}
              {!!profile.focus?.length && <span className="ml-4 hidden font-normal text-muted lg:inline" aria-hidden="true">·</span>}
            </p>
            {!!profile.focus?.length && (
              <p className="font-mono text-mono text-accent">{profile.focus.join(' · ')}</p>
            )}
          </div>
          {profile.intro && <p className="max-w-prose pt-1 text-intro text-pretty text-muted">{profile.intro}</p>}
          {profile.overview && <p className="font-mono text-meta text-muted tabular-nums">{profile.overview}</p>}
        </div>
        {hasLinks && (
          <div className="flex flex-col gap-4 pt-1 md:col-span-4 md:items-end">
            <ResumeLink resume={profile.resume} profileHref={profileHref} sample={sample} />
            {!!contactLinks.length && (
              <div className="flex flex-wrap items-center gap-4">
                {contactLinks.map((link) => <TextLink link={{ ...link, label: link === profile.email ? 'Email' : link.label }} key={link.label} className="accent-link text-label" />)}
              </div>
            )}
          </div>
        )}
      </section>

      {!!experience.length && (
        <section id="experience" tabIndex={-1} aria-labelledby="experience-title" className="border-b border-rule py-section">
          <SectionHeading id="experience-title" aside={profile.experienceAside}>Work Experience</SectionHeading>
          {experience.map((entry) => <ExperienceEntry entry={entry} key={entry.id} />)}
        </section>
      )}

      {!!projects.length && (
        <section id="projects" tabIndex={-1} aria-labelledby="projects-title" className="border-b border-rule py-section">
          <SectionHeading id="projects-title" aside={import.meta.env.DEV && sample ? 'Case Studies · Editable Placeholders' : undefined}>Selected Engineering Projects</SectionHeading>
          <div className="divide-y divide-rule">
            {projects.map((project, index) => (
              <ProjectSummary key={project.slug} project={project} number={String(index + 1).padStart(2, '0')} detailHref={project.detail ? caseStudyHref(project) : undefined} />
            ))}
          </div>
        </section>
      )}

      {(!!skills.production.length || !!skills.exploring.length) && (
        <section id="skills" tabIndex={-1} aria-labelledby="skills-title" className="border-b border-rule py-section">
          <SectionHeading id="skills-title" aside={skills.exploring.length ? 'Production Stack vs. Exploring' : undefined}>Technical Expertise</SectionHeading>
          <div className="editorial-grid">
            {!!skills.production.length && (
              <dl className="divide-y divide-rule border-y border-rule md:col-span-8">
                {skills.production.map(({ category, skills }) => (
                  <div key={category} className="grid grid-cols-1 items-center gap-4 py-4 md:grid-cols-12">
                    <dt className="text-label text-muted md:col-span-4">{category}</dt>
                    <dd className="text-body md:col-span-8">
                      {skills.map((skill, index) => (
                        <span key={skill.name}>{index > 0 && ' · '}{skill.primary ? <><strong className="font-semibold text-accent">{skill.name}</strong> (Primary)</> : skill.name}</span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            {!!skills.exploring.length && (
              <aside className="quiet-panel h-fit space-y-2 p-6 md:col-span-4" aria-labelledby="exploring-title">
                <h3 id="exploring-title" className="meta-label text-accent">Currently Exploring</h3>
                <p className="text-body-sm text-pretty text-muted">Technologies and systems topics under active study.</p>
                <p className="pt-1 font-mono text-meta">{skills.exploring.join(' · ')}</p>
              </aside>
            )}
          </div>
        </section>
      )}

      {!!profile.about?.length && (
        <section id="about" tabIndex={-1} aria-labelledby="about-title" className="editorial-grid items-start border-b border-rule py-section">
          <h2 id="about-title" className="font-display text-section md:col-span-4">About</h2>
          <div className="max-w-prose space-y-4 text-body md:col-span-8">
            {profile.about.map((text, index) => <p key={text} className={index > 0 ? 'text-pretty text-muted' : 'text-pretty'}>{text}</p>)}
          </div>
        </section>
      )}

      {hasLinks && (
        <section id="contact" aria-labelledby="contact-title" className="editorial-grid items-center py-section">
          <div className="space-y-1 md:col-span-5">
            <h2 id="contact-title" className="font-display text-section">Contact</h2>
            {profile.contactIntro && <p className="text-body text-pretty text-muted">{profile.contactIntro}</p>}
          </div>
          <div className="flex flex-wrap items-center gap-6 md:col-span-7 md:justify-end">
            {profile.email && <TextLink link={profile.email} className="accent-link font-mono text-mono" />}
            {profile.links.map((link) => <TextLink key={link.label} link={link} className="rounded-link text-label-lg underline underline-offset-4 hover:text-accent" />)}
            <ResumeLink resume={profile.resume} profileHref={profileHref} sample={sample} />
          </div>
        </section>
      )}
    </SiteFrame>
  )
}
