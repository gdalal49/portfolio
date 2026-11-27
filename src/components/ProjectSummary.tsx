import type { Project } from '../content/types'
import { Disclosure, MetadataGroup } from './Editorial'
import { TextLink } from './Links'

export function ProjectSummary({ project, number, detailHref }: {
  project: Project
  number: string
  detailHref?: string
}) {
  const note = project.summaryNote
  return (
    <article className="editorial-grid items-start py-8 first:pt-0">
      <div className="flex min-w-0 flex-col gap-2 md:col-span-4">
        <p className="font-mono text-meta text-muted">CASE STUDY {number}</p>
        <h3 className="text-item">{project.title}</h3>
        {!!project.stack.length && <p className="font-mono text-meta text-muted">{project.stack.join(' · ')}</p>}
        {(detailHref || !!project.links?.length) && (
          <div className="flex flex-wrap items-center gap-4 pt-1">
            {detailHref && <TextLink link={{ href: detailHref, label: 'Read case study' }} arrow="forward" className="accent-link inline-flex items-center gap-1 text-label" />}
            {project.links?.map((link) => <TextLink key={link.label} link={link} className={link.href ? 'rounded-link text-label text-muted underline underline-offset-4 hover:text-accent' : 'font-mono text-meta text-muted'} />)}
          </div>
        )}
      </div>
      <div className="min-w-0 space-y-4 md:col-span-8">
        <dl className="grid gap-x-4 gap-y-2 md:grid-cols-2">
          <MetadataGroup label="Problem Statement"><p className="text-body-sm text-pretty">{project.problem}</p></MetadataGroup>
          <MetadataGroup label="Technical Solution"><p className="text-body-sm text-pretty">{project.solution}</p></MetadataGroup>
        </dl>
        {note && (note.collapsible
          ? <Disclosure label={note.label}>{note.paragraphs.map((text) => <p key={text} className="text-pretty">{text}</p>)}</Disclosure>
          : <div className="quiet-panel space-y-1 p-4"><p className="text-label-sm">{note.label}</p>{note.paragraphs.map((text) => <p key={text} className="text-body-sm text-pretty text-muted">{text}</p>)}</div>
        )}
      </div>
    </article>
  )
}
