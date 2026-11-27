---
name: "Gaurav Dalal — Editorial Engineering Portfolio"
description: "Swiss-editorial, content-first design system for a backend software engineer's personal portfolio, prioritizing scannability, typographic hierarchy, and technical credibility."
---

## Overview

This design system shapes the personal engineering portfolio of Gaurav Dalal, a Software Engineer at Paytm with approximately three years of experience in Java and Spring Boot, targeting SDE-2 and backend engineering roles.

The aesthetic is **Swiss-Editorial Minimalism**—drawn from technical publications, engineering blogs, and classic print résumés. It rejects commercial SaaS tropes, decorative gradients, glassmorphism, bento grids, and promotional fluff. Hierarchy is established exclusively through deliberate typography, generous whitespace, hairline horizontal dividers, and high-contrast, understated color.

## Colors

The portfolio uses a **dark-mode-only** palette anchored on a deep warm charcoal ground (`#15130F`—never pure `#000000`, preventing text halation) and warm off-white ink (`#E7E2D9`), paired with a single authoritative editorial cobalt accent (`#A0CAFF`).

- **Primary:** Reserved for primary links, active navigation indicators, focus rings, and key actions such as Resume download.
- **Surface & Surface Containers:** Deep warm charcoal tiers (`#15130F` → `#1D1C16` → `#21201A`). Subtle tonal shifts (`surface-container-low`) replace heavy card borders and drop shadows.
- **Outline Variant:** Used for 1px horizontal section dividers and structured table/list rules.

```yaml
colors:
  light:
    primary: "#003660"
    on-primary: "#FFFFFF"
    primary-container: "#1E4D7B"
    on-primary-container: "#95BEF3"
    secondary: "#515F74"
    on-secondary: "#FFFFFF"
    secondary-container: "#D4E4FC"
    on-secondary-container: "#57657A"
    tertiary: "#4D2D00"
    on-tertiary: "#FFFFFF"
    tertiary-container: "#6C4100"
    on-tertiary-container: "#ECAF68"
    error: "#BA1A1A"
    on-error: "#FFFFFF"
    error-container: "#FFDAD6"
    on-error-container: "#93000A"
    background: "#FEF9F0"
    on-background: "#1D1C16"
    surface: "#FEF9F0"
    surface-dim: "#DED9D1"
    surface-bright: "#FEF9F0"
    surface-container-lowest: "#FFFFFF"
    surface-container-low: "#F8F3EA"
    surface-container: "#F2EDE5"
    surface-container-high: "#EDE8DF"
    surface-container-highest: "#E7E2D9"
    on-surface: "#1D1C16"
    surface-variant: "#DEE2EC"
    on-surface-variant: "#42474F"
    outline: "#737780"
    outline-variant: "#C2C7D0"
    inverse-surface: "#32302B"
    inverse-on-surface: "#F5F0E7"
    inverse-primary: "#A0CAFF"
    shadow: "#000000"
    scrim: "#000000"
  dark:
    primary: "#A0CAFF"
    on-primary: "#003259"
    primary-container: "#1E4D7B"
    on-primary-container: "#95BEF3"
    secondary: "#B8C8DF"
    on-secondary: "#233144"
    secondary-container: "#39485B"
    on-secondary-container: "#A7B6CD"
    tertiary: "#F9BA72"
    on-tertiary: "#482A00"
    tertiary-container: "#6C4100"
    on-tertiary-container: "#ECAF68"
    error: "#FFB4AB"
    on-error: "#690005"
    error-container: "#93000A"
    on-error-container: "#FFDAD6"
    background: "#15130F"
    on-background: "#E7E2D9"
    surface: "#15130F"
    surface-dim: "#15130F"
    surface-bright: "#3B3933"
    surface-container-lowest: "#0F0E0A"
    surface-container-low: "#1D1C16"
    surface-container: "#21201A"
    surface-container-high: "#2C2A24"
    surface-container-highest: "#36352F"
    on-surface: "#E7E2D9"
    surface-variant: "#42474F"
    on-surface-variant: "#C2C7D0"
    outline: "#8C919A"
    outline-variant: "#42474F"
    inverse-surface: "#E7E2D9"
    inverse-on-surface: "#32302B"
    inverse-primary: "#356190"
    shadow: "#000000"
    scrim: "#000000"
```

## Typography

A three-role editorial-technical system:
- **Libre Baskerville** (`display-*`, `headline-*`) provides measured editorial authority for the candidate's name and major section titles without oversized display theatrics.
- **IBM Plex Sans** (`title-*`, `body-*`, `label-*`) carries all body prose, navigation, and structured experience content at a comfortable 16px–17px reading size.
- **JetBrains Mono** (`mono-*`) is reserved strictly for genuine technical artifacts: employment dates, technology stacks, API endpoints, schema snippets, tabular metrics, and clearly marked editable placeholders.

```yaml
typography:
  display-xl:
    fontFamily: "Libre Baskerville"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 72px
    letterSpacing: -1.5px
  display-xl-mobile:
    fontFamily: "Libre Baskerville"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 40px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "Libre Baskerville"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: -0.5px
  display-lg-mobile:
    fontFamily: "Libre Baskerville"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: "Libre Baskerville"
    fontSize: 26px
    fontWeight: 400
    lineHeight: 34px
    letterSpacing: -0.2px
  headline-md:
    fontFamily: "IBM Plex Sans"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.1px
  title-lg:
    fontFamily: "IBM Plex Sans"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 26px
  title-md:
    fontFamily: "IBM Plex Sans"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  body-lg:
    fontFamily: "IBM Plex Sans"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: "IBM Plex Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
  body-sm:
    fontFamily: "IBM Plex Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
  label-lg:
    fontFamily: "IBM Plex Sans"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  label-md:
    fontFamily: "IBM Plex Sans"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 18px
  label-sm:
    fontFamily: "IBM Plex Sans"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  mono-md:
    fontFamily: "JetBrains Mono"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
  mono-sm:
    fontFamily: "JetBrains Mono"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
```

## Layout & Spacing

The layout uses a **Fixed-Max-Width Editorial Grid** (`max-w-5xl`, ~1024px) on desktop with asymmetric two-column splits (e.g., 3-column metadata rail paired with 9-column narrative content for Work Experience) and a **Fluid Single-Column** flow on mobile (`390px`) with `20px` horizontal margins.

- Body prose is constrained to 60–72 characters (`max-w-prose`) for effortless reading.
- Subtle 1px horizontal dividers (`border-t border-light-outline-variant dark:border-dark-outline-variant`) separate major sections without wrapping every section in boxes or cards.
- On desktop, the compact introduction leaves the beginning of the **Work Experience** section visible above the fold.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section: 56px
  page-margin: 24px
```

## Elevation & Depth

This system is intentionally **flat and border-driven**. Hierarchy is communicated through typographic scale, generous whitespace, hairline horizontal rules (`outline-variant`), and subtle surface-container shifts (`surface-container-low` for expandable technical details or code/placeholder blocks). Drop shadows, glassmorphism (`backdrop-blur`), neon glows, and multi-layer nested cards are strictly forbidden.

## Shapes

Architectural, crisp corners that reinforce a technical, editorial tone. Excessively rounded cards and pill-shaped containers are avoided.

```yaml
rounded:
  sm: 2px
  DEFAULT: 4px
  md: 6px
  lg: 8px
  full: 9999px
```

## Motion & Micro-interaction

Motion is minimal, functional, and respects `prefers-reduced-motion`. Interactive states (link underlines, button hover fills, focus rings) resolve within `100ms`. Expandable technical disclosures (`<details>` or toggle panels for engineering details) transition opacity cleanly without layout-shifting bounces or decorative animations.

```yaml
motion:
  state-change:
    duration: 100ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 200ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
```

## Voice & Content Strategy

- **Tone:** Direct, factual, engineer-to-engineer. Zero motivational clichés, zero buzzwords ("Crafting Digital Experiences", "Building the Future"), and zero fabricated metrics.
- **Structure:** Experience contributions follow **Problem → Contribution → Outcome**. Projects follow **Problem → Solution → Architecture & Trade-offs → Testing & Reliability**.
- **Placeholders:** Any unprovided dates, metrics, team names, or project specifics are rendered as clearly marked, editable monospace placeholders (e.g., `[Placeholder: Specific latency reduction % or throughput metric]`) so the candidate can fill them in without guessing.
- **Links vs. Buttons:** External links (LinkedIn, GitHub, Email) are styled as crisp underlined/inline links; actions (Download Resume, Expand Technical Details, Theme Toggle) are styled as distinct, accessible buttons with clear `focus-visible` rings.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Accordion** → `@components/accordion.html` — `accordion-single`, `accordion-group`
- **Button** → `@components/button.html` — `button-primary`, `button-icon`, `button-with-icon`
- **List** → `@components/list.html` — `list-single`, `list-two-line`, `list-leading-icon`, `list-trailing-action`, `list-interactive`, `list-interactive-2`
- **Typography** → `@components/typography.html` — `typography-display`, `typography-body`, `typography-label`
