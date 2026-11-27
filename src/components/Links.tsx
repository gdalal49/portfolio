import type { Link, Profile } from '../content/types'
import { Icon } from './Icon'

export function TextLink({ link, className = 'accent-link', arrow }: {
  link: Link
  className?: string
  arrow?: 'forward' | 'back'
}) {
  const body = <>{arrow === 'back' && <Icon name="back" />}{link.label}{arrow === 'forward' && <Icon name="forward" className="size-3.5" />}</>
  return link.href ? <a className={className} href={link.href}>{body}</a> : <span className={className}>{body}</span>
}

export function ResumeLink({ resume, variant = 'primary', sample = false, profileHref }: {
  resume?: Profile['resume']; profileHref: string; variant?: 'primary' | 'outline'; sample?: boolean
}) {
  const primary = variant === 'primary'
  const classes = primary
    ? 'gap-2 bg-accent px-4 py-2 text-on-accent hover:opacity-90'
    : 'gap-1 border border-rule bg-panel px-2.5 py-1 text-ink hover:border-accent min-[360px]:px-4'
  const className = 'inline-flex items-center justify-center rounded-frame text-label-lg transition ' + classes
  const body = <><Icon name={primary ? 'download' : 'document'} />{primary ? 'Download Resume' : 'Resume'}</>
  if (!resume) return import.meta.env.DEV && sample ? <span className={className} title="Stitch sample control">{body}</span> : null
  return <a className={className} href={profileHref + '../' + resume.path} download={resume.filename}>{body}</a>
}
