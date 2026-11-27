import { useEffect, useRef } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import type { Profile } from '../content/types'
import { Icon } from './Icon'
import { ResumeLink, TextLink } from './Links'

export const navSections = {
  experience: 'Experience',
  projects: 'Projects',
  skills: 'Skills',
  about: 'About',
} as const

export type SectionId = keyof typeof navSections

export function SiteFrame({ profile, profileHref, sections, caseStudy = false, sample = false, children, mainClassName = '' }: {
  profile: Profile
  profileHref: string
  sections: readonly SectionId[]
  caseStudy?: boolean
  sample?: boolean
  children: ReactNode
  mainClassName?: string
}) {
  const menu = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    if (!location.hash) return
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(location.hash.slice(1))
      target?.scrollIntoView()
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  function closeMenu(event: MouseEvent<HTMLAnchorElement>) {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    if (menu.current) menu.current.open = false
  }

  function navigation(mobile = false) {
    return (
      <nav aria-label="Primary navigation">
        <ul className={mobile ? 'space-y-1' : 'flex items-center gap-6'}>
          {sections.map((id) => {
            const active = caseStudy && id === 'projects'
            const currentClass = active ? 'text-accent underline underline-offset-4' : 'text-muted hover:text-accent'
            return (
              <li key={id}>
                <a
                  href={(caseStudy ? profileHref : '') + '#' + id}
                  className={'rounded-link text-label-lg transition-colors ' + currentClass + (mobile ? ' block px-3 py-2' : '')}
                  aria-current={active ? 'true' : undefined}
                  onClick={mobile ? closeMenu : undefined}
                >
                  {navSections[id]}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }

  return (
    <div className="flex min-h-svh flex-col">
      <a href="#main" className="sr-only z-30 rounded-frame bg-accent px-4 py-2 text-on-accent focus:not-sr-only focus:fixed focus:top-2 focus:left-2">Skip to content</a>
      <header className="sticky top-0 z-20 border-b border-rule bg-surface">
        <div className="page-container flex min-h-header items-center justify-between gap-2 py-1 md:gap-4">
          <a href={caseStudy ? profileHref : '#top'} className="rounded-link font-display text-title transition-colors hover:text-accent">{profile.name}</a>
          <div className="flex shrink-0 items-center gap-2 md:gap-6">
            {sections.length > 0 && (
              <>
                <div className="hidden md:block">{navigation()}</div>
                <details
                  ref={menu}
                  className="group md:hidden"
                  onKeyDown={(event) => {
                    if (event.key !== 'Escape' || !menu.current?.open) return
                    event.preventDefault()
                    menu.current.open = false
                    menu.current.querySelector('summary')?.focus()
                  }}
                >
                  <summary className="flex min-h-8 cursor-pointer list-none items-center gap-1 rounded-frame text-label text-muted hover:text-accent">
                    <span className="min-[360px]:hidden">Menu</span><span className="hidden min-[360px]:inline">Sections</span>
                    <Icon name="chevron" className="size-3.5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="absolute inset-x-0 top-full border-y border-rule bg-surface">
                    <div className="page-container py-2">{navigation(true)}</div>
                  </div>
                </details>
              </>
            )}
            <ResumeLink resume={profile.resume} profileHref={profileHref} variant="outline" sample={sample} />
          </div>
        </div>
      </header>
      <main id="main" tabIndex={-1} className={'page-container flex-1 ' + mainClassName}>
        {children}
      </main>
      <footer className="border-t border-rule">
        <div className="page-container flex flex-wrap items-center justify-between gap-4 py-6">
          <span className="font-mono text-meta text-muted">{profile.name} · {profile.profession}</span>
          {caseStudy
            ? <TextLink link={{ href: profileHref, label: 'Return to Portfolio' }} className="accent-link text-label" />
            : profile.location && <span className="font-mono text-meta text-muted">{profile.location}</span>}
        </div>
      </footer>
    </div>
  )
}
