import type { ReactNode } from 'react'
import { Disclosure, MetadataGroup } from '../components/Editorial'
import { TextLink } from '../components/Links'
import { ArtifactBlock, DecisionTable } from '../components/ProjectEvidence'
import { SiteFrame } from '../components/SiteFrame'
import type { SectionId } from '../components/SiteFrame'
import type { Profile, Project } from '../content/types'

function CaseSection({ id, title, children, last = false }: {
  id: string; title: string; children: ReactNode; last?: boolean
}) {
  return (
    <section aria-labelledby={id} className={'editorial-grid py-8 ' + (last ? '' : 'border-b border-rule')}>
      <h2 id={id} className="font-display text-section md:col-span-4">{title}</h2>
      <div className="min-w-0 space-y-6 md:col-span-8">{children}</div>
    </section>
  )
}

export function CaseStudyPage({ profile, sections, project, number, profileHref, sample = false }: {
  profile: Profile
  sections: readonly SectionId[]
  project: Project & { detail: NonNullable<Project['detail']> }
  number: string
  profileHref: string
  sample?: boolean
}) {
  const { detail } = project
  const links = detail.links ?? project.links ?? []
  const hasReliability = !!detail.reliability?.length
  const hasDecisions = !!detail.decisions?.length

  return (
    <SiteFrame profile={profile} profileHref={profileHref} sections={sections} caseStudy sample={sample} mainClassName="py-8">
      {import.meta.env.DEV && sample && <p className="mb-3 font-mono text-meta text-muted">Stitch review · Sample content for layout review</p>}
      <div className="mb-6">
        <TextLink link={{ href: profileHref + '#projects', label: 'Back to Selected Projects' }} arrow="back" className="inline-flex items-center gap-1 rounded-link text-label text-accent underline-offset-4 hover:underline" />
      </div>
      <header className="space-y-4 border-b border-rule pb-8">
        <p className="font-mono text-meta text-muted">ENGINEERING CASE STUDY · {number}</p>
        <h1 className="font-display text-display-mobile text-balance md:text-display">{project.title}</h1>
        <p className="max-w-prose text-intro text-pretty text-muted">{detail.summary}</p>
        {(!!project.stack.length || !!detail.scope || !!links.length) && (
          <dl className="grid grid-cols-1 gap-6 border-t border-rule pt-4 md:grid-cols-3">
            {!!project.stack.length && <MetadataGroup label="Technology Stack"><p className="font-mono text-meta">{project.stack.join(' · ')}</p></MetadataGroup>}
            {detail.scope && <MetadataGroup label="Scope & Timeline"><p className="font-mono text-meta">{detail.scope}</p></MetadataGroup>}
            {!!links.length && (
              <MetadataGroup label="Source & Artifacts">
                <div className="flex flex-wrap items-center gap-4">
                  {links.map((link) => <TextLink key={link.label} link={link} className={!link.href && link.label.startsWith('[') ? 'font-mono text-meta text-muted' : 'accent-link text-label'} />)}
                </div>
              </MetadataGroup>
            )}
          </dl>
        )}
      </header>
      <CaseSection id="problem-title" title="Problem Statement">
        <p className="max-w-prose text-body text-pretty">{detail.problem ?? project.problem}</p>
      </CaseSection>
      <CaseSection id="solution-title" title="Technical Solution" last={!hasDecisions && !hasReliability}>
        <p className="max-w-prose text-body text-pretty">{detail.solution ?? project.solution}</p>
        {detail.artifacts?.map((artifact) => <ArtifactBlock key={artifact.kind === 'figure' ? artifact.src : artifact.kind === 'snippet' ? artifact.filename : artifact.label} artifact={artifact} />)}
      </CaseSection>
      {!!detail.decisions?.length && (
        <CaseSection id="decisions-title" title="Design Decisions" last={!hasReliability}>
          <DecisionTable decisions={detail.decisions} />
        </CaseSection>
      )}
      {!!detail.reliability?.length && (
        <CaseSection id="reliability-title" title="Reliability & Testing" last>
          <div className="quiet-panel divide-y divide-rule">
            {detail.reliability.map((note) => (
              <Disclosure key={note.label} label={note.label} variant="group" defaultOpen>
                {note.paragraphs.map((text) => <p key={text} className="text-pretty">{text}</p>)}
              </Disclosure>
            ))}
          </div>
        </CaseSection>
      )}
    </SiteFrame>
  )
}
