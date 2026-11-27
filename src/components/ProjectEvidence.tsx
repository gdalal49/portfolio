import { useLayoutEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import type { Artifact, Project } from '../content/types'

function ScrollRegion({ label, children, className }: { label: string; children: ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [overflow, setOverflow] = useState(false)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return
    const measure = () => setOverflow(element.scrollWidth > element.clientWidth + 1)
    const observer = new ResizeObserver(measure)
    measure()
    observer.observe(element)
    if (element.firstElementChild) observer.observe(element.firstElementChild)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={'overflow-x-auto ' + className} ref={ref} tabIndex={overflow ? 0 : undefined} role={overflow ? 'region' : undefined} aria-label={overflow ? label : undefined}>
      {children}
    </div>
  )
}

export function ArtifactBlock({ artifact }: { artifact: Artifact }) {
  if (artifact.kind === 'figure') {
    return (
      <figure className="quiet-panel space-y-2 p-4">
        <img src={artifact.src} alt={artifact.alt} className="max-w-full" loading="lazy" />
        {artifact.caption && <figcaption className="text-body-sm text-muted">{artifact.caption}</figcaption>}
      </figure>
    )
  }
  if (artifact.kind === 'sample') {
    if (!import.meta.env.DEV) return null
    return (
      <div className="space-y-1 rounded-frame border border-dashed border-artifact bg-panel p-6">
        <p className="font-mono text-meta text-accent">{artifact.label}</p>
        <p className="text-body-sm text-pretty text-muted">{artifact.description}</p>
      </div>
    )
  }
  return (
    <div className="quiet-panel">
      <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-rule px-4 py-1 font-mono text-meta text-muted">
        <span>{artifact.filename}</span>
        {artifact.label && <span>{artifact.label}</span>}
      </div>
      <ScrollRegion label={'Code sample: ' + artifact.filename} className="rounded-b-frame">
        <pre className="w-max min-w-full p-4 font-mono text-meta"><code>{artifact.text}</code></pre>
      </ScrollRegion>
    </div>
  )
}

export function DecisionTable({ decisions }: { decisions: NonNullable<NonNullable<Project['detail']>['decisions']> }) {
  return (
    <ScrollRegion label="Design decisions table" className="rounded-frame border border-rule">
      <table className="w-full min-w-96 border-collapse text-left">
        <caption className="sr-only">Design decisions and accepted trade-offs</caption>
        <thead className="border-b border-rule bg-panel">
          <tr>
            <th scope="col" className="px-4 py-2 text-label">Decision Area</th>
            <th scope="col" className="px-4 py-2 text-label">Chosen Approach</th>
            <th scope="col" className="px-4 py-2 text-label">Trade-off Accepted</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-rule">
          {decisions.map((row) => (
            <tr key={row.area} className="align-top">
              <th scope="row" className="px-4 py-2 font-mono text-meta font-normal">{row.area}</th>
              <td className="px-4 py-2 text-body-sm">{row.approach}</td>
              <td className="px-4 py-2 text-body-sm text-muted">{row.tradeoff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollRegion>
  )
}
