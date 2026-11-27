import type { Profile } from '../content/types'
import { Icon } from '../components/Icon'

export function CoverPage({ profile, profileHref }: { profile: Profile; profileHref: string }) {
  return (
    <main className="flex min-h-svh items-center justify-center px-gutter">
      <div className="flex w-full max-w-cover flex-col items-start gap-4 border-y border-rule py-section">
        <p className="font-mono text-meta text-muted">{profile.role} at {profile.employerShortName ?? profile.employer}</p>
        <h1 className="font-display text-cover-mobile md:text-cover">
          <a href={profileHref} className="group inline-flex items-center gap-4 rounded-link transition-colors hover:text-accent">
            <span className="underline decoration-rule underline-offset-8 transition-colors group-hover:decoration-accent">{profile.name}</span>
            <Icon name="forward" className="size-7 text-accent transition-transform group-hover:translate-x-1 md:size-9" />
          </a>
        </h1>
      </div>
    </main>
  )
}
