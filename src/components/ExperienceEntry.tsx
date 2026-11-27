import type { DateLabel, Experience } from '../content/types'
import { Disclosure, MetadataGroup } from './Editorial'

function DateValue({ value }: { value: DateLabel }) {
  return value.dateTime ? <time dateTime={value.dateTime}>{value.label}</time> : <>{value.label}</>
}

export function ExperienceEntry({ entry }: { entry: Experience }) {
  const hasNarrative = entry.scope || entry.contributions?.length || entry.technicalNote
  return (
    <article className="editorial-grid border-rule py-8 first:pt-0 last:pb-0 [&+article]:border-t">
      <div className={'flex min-w-0 flex-col md:col-span-4 ' + (entry.current ? 'gap-4' : 'gap-1')}>
        <div className="flex items-center gap-2">
          {entry.current && (
            <span aria-hidden="true" className="quiet-panel flex size-9 shrink-0 items-center justify-center font-mono text-mono text-accent">
              {entry.employer.slice(0, 1)}
            </span>
          )}
          <div>
            <h3 className={entry.current ? 'text-item' : 'text-title-lg'}>{entry.employer}</h3>
            {entry.current && <p className="text-label-sm text-accent">Current Employer</p>}
          </div>
        </div>
        <div className="space-y-1">
          <p className={entry.current ? 'text-title' : 'text-label text-muted'}>{entry.role}</p>
          {entry.dates && (
            <p className="font-mono text-meta text-muted tabular-nums">
              <DateValue value={entry.dates.start} /> – <DateValue value={entry.dates.end} />
            </p>
          )}
          {entry.domain && <p className="text-body-sm text-muted">{entry.domain}</p>}
        </div>
        {!!entry.stack?.length && (
          <dl className="border-t border-rule pt-2">
            <MetadataGroup label="Core Stack"><span className="font-mono text-meta">{entry.stack.join(' · ')}</span></MetadataGroup>
          </dl>
        )}
      </div>
      {!!hasNarrative && (
        <div className="min-w-0 space-y-6 md:col-span-8">
          {entry.scope && (entry.current
            ? <dl>
              <MetadataGroup label="Scope of Responsibilities"><p className="text-body text-pretty">{entry.scope}</p></MetadataGroup>
            </dl>
            : <p className="text-body text-pretty text-muted">{entry.scope}</p>
          )}
          {entry.contributions?.map((item, index) => (
            <div key={item.title} className="space-y-2 border-t border-rule pt-4">
              <h4 className="text-title">{index + 1}. {item.title}</h4>
              <dl className="grid gap-2">
                {([
                  ['Problem', item.problem],
                  ['Contribution', item.contribution],
                  ['Outcome', item.outcome],
                ] as const).map(([label, value]) => value && (
                  <div key={label} className="grid grid-cols-1 gap-x-4 gap-y-1 md:grid-cols-12">
                    <dt className="pt-1 font-mono text-meta text-muted md:col-span-3">{label}</dt>
                    <dd className={'text-body text-pretty md:col-span-9 ' + (label === 'Outcome' ? 'text-accent' : '')}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
          {entry.technicalNote && (
            <Disclosure label={entry.technicalNote.label}>
              {entry.technicalNote.paragraphs.map((text) => <p key={text} className="text-pretty">{text}</p>)}
            </Disclosure>
          )}
        </div>
      )}
    </article>
  )
}
