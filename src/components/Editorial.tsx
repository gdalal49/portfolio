import type { ReactNode } from 'react'
import { Icon } from './Icon'

export function SectionHeading({ id, children, aside }: { id: string; children: ReactNode; aside?: string }) {
  return (
    <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
      <h2 id={id} className="font-display text-section">{children}</h2>
      {aside && <span className="font-mono text-meta text-muted tabular-nums">{aside}</span>}
    </div>
  )
}

export function MetadataGroup({ label, children }: { label: string; children: ReactNode }) {
  return <div className="flex min-w-0 flex-col gap-1"><dt className="meta-label">{label}</dt><dd>{children}</dd></div>
}

export function Disclosure({ label, children, defaultOpen = false, variant = 'standalone' }: {
  label: string; children: ReactNode; defaultOpen?: boolean; variant?: 'standalone' | 'group'
}) {
  const standalone = variant === 'standalone'
  return (
    <details className={standalone ? 'group quiet-panel' : 'group'} open={defaultOpen}>
      <summary className={'flex min-h-10 cursor-pointer list-none items-center justify-between gap-4 rounded-frame px-4 py-2 transition-colors hover:bg-panel-hover ' + (standalone ? 'text-label text-accent' : 'text-title')}>
        {label}
        <Icon name="chevron" className="size-4 transition-transform group-open:rotate-180" />
      </summary>
      <div className={'space-y-2 px-4 pt-2 pb-4 text-body-sm text-muted ' + (standalone ? 'border-t border-rule' : '')}>
        {children}
      </div>
    </details>
  )
}
