# Portfolio implementation plan

This plan covers the three Stitch views for a backend software engineer at Paytm. The first read should help recruiters find work history, projects, and ways to contact the owner. Disclosures and case studies provide room for hiring managers to review contributions and engineering decisions. Development starts after the owner requests it.

## Source audit

| Input | Finding |
| --- | --- |
| [Home export](stitch-reference/home-layout/code.html) | Minimal entry with the linked name and employment line. The large leading block contains browser extension injection, including a `chrome-extension://` script and `stndz-*` style tags. Treat the source as a reference and remove that material from any temporary visual comparison. |
| [Profile export](stitch-reference/profile-layout/code.html) | Main recruiter view with a compact intro, six content sections, and direct contact. The work and project sections contain editorial examples to replace with owner supplied content. |
| [Project export](stitch-reference/project-layout/code.html) | Case study template with a metadata header, example evidence frame and SQL, a decision table, and two expanded disclosures. Only one detail template is supplied. |
| [Design notes](DESIGN.md) | The root notes and exported config agree on dark colors, three font families, and the main spacing scale. The notes' mobile gutter and title sizes differ from the applied HTML. The referenced component sticker sheets are absent. |
| Screenshots and assets | The workspace contains three `code.html` files. No desktop/mobile PNGs, local fonts, resume PDF, diagrams, or images were supplied. The exports use inline styling and request typography and Material Symbols remotely. The Paytm `P` is styled text, and the diagram box is a placeholder. The review establishes structure and values from source. Pixel comparisons and runtime visual behavior remain to be verified. |

### Production changes to the exported markup

| Finding | Planned treatment |
| --- | --- |
| Tailwind browser CDN and duplicated inline theme with unused plugins and both palettes | Compile CSS in Vite. Map just the used dark roles and layout tokens to a shared theme. Remove unused forms/container query plugins and Stitch data attributes. |
| Extension injection, remote icon font, duplicate font requests, and stale theme toggle scripts | Build from clean markup. Bundle a few matching icon shapes and licensed font files with usable fallbacks. Keep the three views dark and omit the unattached scripts. |
| Original link paths target HTML files that are absent | Map all nav, entry, case study, breadcrumb, and footer links to published paths and real fragment IDs. Use explicit links that work when users open a page directly or in a new tab. |
| Resume buttons have no handler or file. GitHub and LinkedIn link to platform homepages and the email is an example | Use a real same origin PDF link for both Resume styles and use the owner’s confirmed contact and repository links. Omit intentional absences from public UI. |
| Header nav disappears below `md`; no sticky scroll offset is present; all pages use a 1024 px body minimum | Keep navigation reachable on mobile. Use natural document height or viewport sizing as appropriate and offset anchor targets. Apply mobile display tokens after checking the reference. |
| Code and table have overflow wrappers, but the grid and wrappers still need narrow screen and keyboard review. Focus styles are inconsistent | Allow grid children to shrink, keep overflow local, and make it reachable and visibly focusable when needed. Use a caption and column scopes on the decision table, semantic sections and links, and a shared focus treatment. |
| Minimal page metadata and example copy and artifacts | Set a truthful page title and description per entry. Use publishable copy only. Include optional evidence, demo URLs, and sharing metadata when confirmed and useful. |

## Architecture recommendation

Use React with strict TypeScript and Vite, with Tailwind compiled to static CSS at build time. Start with Vite's multi-page build. A static HTML entry for each approved page gives recruiters and hiring managers direct URLs that work on a plain static host. The entries share React page and component code, and each can supply its own title and description. This keeps the three fixed views simple and avoids a runtime router or SPA fallback. Add a new static entry and reuse the case study template when a new case is ready. Check path behavior once the deployment base is chosen.

| Public path proposal | Responsibility |
| --- | --- |
| `/` | Stitch entry, with a real link to the profile |
| `/profile/` | Main portfolio. Shared navigation uses `#experience`, `#projects`, `#skills`, and `#about`. On the profile, the header wordmark links to the top. A case study can link into these same sections. |
| `/projects/<slug>/` | One independent page per approved detailed case study, with an explicit link back to `/profile/#projects`. The shared wordmark and return link also lead to the profile. |

Keep a small directory layout. Route entry files mount the relevant page and supply page metadata. `src/pages/` owns the entry, profile, and case study compositions. Use `src/components/` for repeated shell, links, layouts, disclosures, sections, and evidence. Keep tokens and global styles in `src/styles/`. Store approved authored assets under `src/assets/`, and place the resume PDF in `public/` at a stable path when supplied. Keep `stitch-reference/` outside the published output. Use a simple lockfile and existing tooling conventions when scaffolding. The scope fits local data and built in browser interactions without a backend, CMS, global store, or UI kit.

### Content ownership

| Typed module | Editable fields |
| --- | --- |
| `src/content/profile.ts` | Display identity, role, public intro, location or experience line if approved, about paragraphs, verified contact links, and resume asset reference |
| `src/content/experience.ts` | Employer, role, dates, optional public scope and stack, contribution records with problem, contribution and verified outcome, optional prior roles and technical notes |
| `src/content/projects.ts` | Stable approved slug, title, short description, stack, problem and solution, links, and optional detail with scope, architecture, evidence, trade-offs, and testing. Summary and detail read from the same project record. |
| `src/content/skills.ts` | Verified production categories and a separate optional set of exploration topics |

Use string arrays and typed records for authored copy, dates, evidence metadata, and decision rows. A figure record can carry an asset, alt text, and caption. Snippets carry plain text and, when available, a filename and language label. Keep section labels and layout in components. Allow preview examples only where clearly marked. Draft case studies stay out of public navigation and published output. If a verified contribution has no measurable metric, use an owner approved qualitative outcome or omit the metric. Review non-placeholder Stitch copy with the owner too. In particular, the years of experience, location, skill proficiency, target roles, and first person summary can drift or contain generated assumptions.

## Missing inputs and behavior decisions

| Input | Why it matters |
| --- | --- |
| Approved desktop and mobile screenshots for each view, with capture sizes | Establish the comparison baseline and settle mobile navigation, title sizes, and the 20 versus 24 px gutter. A temporary render of the sanitized export can help review layout while waiting. |
| Current resume PDF, preferred download filename, verified public email, LinkedIn, and GitHub | Activate the approved contact and resume controls. Confirm the file is intended for public sharing. |
| Paytm dates, public team or scope, stack, contributions, and verified outcomes, plus prior roles if applicable | Replace examples and validate timeline. Request publishable details and exclude confidential internal information. |
| Actual projects, public project slugs, summary, trade-offs, and evidence | Replace the two example project titles. Confirm which has a full case study and which has repository or demo links. An actual diagram, schema, or snippet is optional and must be approved. |
| Approved headline and about copy, skill list, current exploration, location and role targets | Validate details suggested by Stitch and support recruiter scanning. |
| Production domain and base path; launch icon or sharing asset if desired | Determine canonical links and deployment paths. The three layouts need no added imagery. |

The entry link, profile anchors, case study return, and native disclosure states can be specified from the exports. The proposed mobile nav is a compact disclosure with the same page links. Close it when a link is chosen and preserve keyboard focus and navigation to the destination. Choose a download or PDF viewing behavior that matches the final Resume labels and verified asset. The exports specify no contact form or theme switcher. Preserve that scope.

## Delivery phases and acceptance criteria

| Phase | Work | Acceptance criteria |
| --- | --- | --- |
| 0. Confirm references and content | Reconcile the visual baseline, routes, mobile interactions, and draft inputs. | Each Stitch view maps to a proposed route. Available reference sizes and unconfirmed choices are listed. Missing approved screenshots remain an explicit limit on visual signoff. Public copy and assets have an identified owner. |
| 1. Foundation | Scaffold Vite, React, strict TypeScript, and compiled Tailwind. Set up static entry points, semantic tokens, font files, shared shell, and content types. | Build emits distinct static entry and profile pages and approved detail pages with titles. Shared typography, colors, rules, and spacing trace to the design reference. Production output excludes raw exports, browser extension artifacts, and runtime Tailwind. |
| 2. Build page composition | Implement cover, profile, and case study from the reference skeleton and typed content. Keep draft examples clearly marked in previews. | Approved order, geometry, type roles, and section rhythm compare against the references when available. Work Experience begins in the initial view at the agreed desktop capture size. Repeated shell, links, and disclosures reuse components. Project detail references the same data as its summary. |
| 3. Responsive and interaction review | Wire production links, anchor offsets, mobile navigation, disclosure states, evidence overflow, and keyboard behavior. | Entry, header, breadcrumb, footer, social, and Resume links work where approved. Direct navigation, reload, and Back reach the intended pages or fragments. There is no document level horizontal overflow at 320 px or wider. Code and table overflow are local and keyboard usable. All primary navigation is reachable at mobile widths. Profile disclosures start closed and both case study details start open independently. |
| 4. Content and release review | Replace placeholder content, validate assets, prepare metadata, and verify production output on the intended static host. | No example content, fabricated claims, dead controls, generic profile URLs, accidental internal material, or placeholder contact details appear publicly. Direct paths and the deployment base work. Build and type check pass, and runtime requires no remote stylesheet, font, or icon CDN. Compare the production pages with approved desktop and mobile references before declaring screenshot fidelity. |

For the implementation review, use the widths in [DESIGN.md](DESIGN.md), including both sides of the breakpoint. Inspect the entry, full profile, detail page, and default/open states in a desktop Chromium browser and mobile Safari or an available equivalent. Check keyboard navigation, skip link, focus visibility, headings, link names, disclosure announcements, table headers, reduced motion, and zoom/reflow. Aim for WCAG 2.2 AA. Inspect the built output for first load CSS, JS, and font sizes and avoid blocking remote requests. Any missing artifacts or environment limits belong in the review notes.

## Implementation and review notes

- Run `npm ci`, then `npm run dev` for local review. `npm run lint`, `npm run typecheck`, and `npm run build` check the source and build. Serve `dist/` with directory index support. Current public entries are `/`, `/profile/`, and `/projects/shopeazy/`.
- Edit public copy in `src/content/`. The resume, current and prior Paytm Payments Bank roles, skills, ShopEazy facts, and contact destinations come from the owner-approved PDF. Replace `public/gaurav-dalal-resume.pdf` when the owner supplies an updated version. Set the filename and path in `src/content/profile.ts`. To publish a new project with a detail view, create a `projects/<slug>/index.html` entry modeled on ShopEazy, with matching `data-project` and unique metadata. Vite adds that page when the project's typed content includes `detail`.
- Development-only `/review/profile/` and `/review/project/` render the full Stitch sample layouts from isolated typed data. They are excluded from `dist/`. The public case study has the verified problem, solution, scope, and stack. It omits the design decision and reliability sections, architecture evidence, and repository or demo links pending source material. The profile omits Currently Exploring until the owner supplies topics.
- The desktop review used the three 1280 px views on the approved Stitch canvas and the exported HTML/CSS. No standalone screenshot files or mobile artboards were available for a pixel comparison. Mobile uses the export's 24 px gutters, the supplied mobile type tokens, and a menu disclosure below 768 px. The public pages use the approved dark palette throughout. The design shows no theme control.
- Chrome review covered 320, 390, 767, 768, 1024, 1280, and 1440 px. It exercised the entry link, section anchors, skip link, mobile menu, case study return, and keyboard disclosure behavior. Code and decision table overflow exposed individually named scroll regions at 320 px. The browser completed a resume download, the served PDF matched the supplied file byte for byte, and the social and email destinations matched its annotations.
- Lint, type checking, and the production build passed. The build contains three HTML entries, local assets, and the exact approved PDF. Native Safari and production hosting were outside this review.
