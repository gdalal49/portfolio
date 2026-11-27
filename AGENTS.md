# Portfolio engineering instructions

## Scope and references

- This is Gaurav Dalal's personal portfolio for recruiters and engineering hiring managers. Prioritize a quick read of role, experience, and projects, with technical depth available in disclosures and case studies.
- Implement only when the owner requests development. Read [DESIGN.md](DESIGN.md) and [IMPLEMENTATION.md](IMPLEMENTATION.md) before changing the UI. Use the approved Stitch views in `stitch-reference/` as the visual source. Preserve the raw exports and keep them outside the public build.
- Preserve the dark editorial layout, typography, colors, spacing, section order, and interaction cues. If the reference is ambiguous, distinguish an export observation from a proposed behavior. Use approved screenshots when available to resolve visual differences.

## Engineering conventions

- Use React, strict TypeScript, Vite, and Tailwind compiled at build time. Keep the output suitable for static hosting. Prefer normal links between pages, hash links to profile sections, and native HTML disclosures. Use only the client state required by interactions.
- Define shared color, type, spacing, border, and focus tokens once in the stylesheet used by Tailwind. Use explicit component variants for the repeated resume link and layouts. Extract genuine repetitions and keep one off page composition close to the page.
- Keep editable portfolio data in typed modules under `src/content/` and keep presentation in page and component modules. Case study summaries and detail pages should reference the same project record by slug. Avoid embedding HTML in data.
- Render only owner verified professional claims and public assets. Preserve draft placeholders as explicitly labeled preview material until approved. Omit absent optional details and links from published output. Never present example credentials, project code, metrics, repository URLs, or email addresses as facts. Check with the owner before using internal Paytm materials or details.
- Use native semantic landmarks, one page `h1`, logical heading order, accessible names, skip navigation on shared shell pages, visible keyboard focus, and reduced motion. Preserve mobile access to primary links and sticky header target offsets. Use file links for Resume and make any overflow inside a table or snippet usable by keyboard.
- Exclude extension injected markup and scripts, browser CDN Tailwind, dead theme hooks, and Stitch export paths from app code. Keep dependencies small. Use local, licensed fonts in the weights the UI needs and a small local set of matching icons.

## Review

- When implementation verification is requested, use the acceptance criteria in [IMPLEMENTATION.md](IMPLEMENTATION.md). Inspect representative viewports, headings and keyboard flow, supported browser behavior, direct links and fragments, the public content, and the production build. Document missing approved references or unresolved differences alongside the review findings.
