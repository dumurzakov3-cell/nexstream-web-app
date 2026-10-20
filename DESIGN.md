---
name: NexStream
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#ffb3ad'
  on-tertiary: '#68000a'
  tertiary-container: '#ff817a'
  on-tertiary-container: '#7e000f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-hero:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Manrope
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-performance, cinematic streaming environment calibrated for immersive viewing sessions and effortless discovery. Targeted at modern digital audiences, creators, and cinema enthusiasts, it bridges architectural utility with the sensory experience of a state-of-the-art cinema dashboard.

The aesthetic philosophy centers on dark-mode precision:
- **Atmospheric Dominance:** Deep pitch-black environments eliminate visual competition, prioritizing motion thumbnails, key art, and high-definition streams.
- **Architectural Surfacing:** Content cards and navigational panels utilize razor-sharp charcoal structures framed by micro-borders and subtle translucent highlights rather than heavy physical drops.
- **Luminous Neon Precision:** Energetic electric cyan and indigo gradients articulate interactive states, focal progression bars, and critical player actions, while high-chroma red dictates urgent live broadcasts.
- **Geometric Readability:** Clean, structured display titling commands visual balance against hyper-refined neutral body typography.

## Colors

The palette leverages contrast-driven chromatic hierarchies anchored against a pitch-black canvas:

- **Primary (`#06B6D4`):** Neon Cyan acts as the focal anchor for user action, glowing progress bars, active navigation states, and micro-interactions.
- **Secondary (`#6366F1`):** Electric Indigo serves as the deep gradient counterpart to primary cyan, adding spectral depth to primary call-to-actions, hero badges, and active streaming borders.
- **Tertiary (`#EF4444`):** Crimson Red is exclusively deployed for high-stakes indicators: live streaming status pills, destructive operations, recording markers, and dynamic broadcast cues.
- **Neutral Canvas (`#0A0A0C`):** Base canvas background, driving zero-distraction viewing.
- **Surfaces & Overlays:**
  - `surface-elevated`: `#16161D` (Charcoal container baseline for thumbnails, cards, and sidebars).
  - `surface-layer`: `#20202B` (Hover tiers, dialogs, and popovers).
  - `surface-glass`: `rgba(22, 22, 29, 0.72)` combined with backdrop blur filters.
  - `border-glass`: `rgba(255, 255, 255, 0.08)` for sub-pixel boundary definition.
  - `border-glass-hover`: `rgba(6, 182, 212, 0.35)` to signify element proximity.

## Typography

The typography architecture balances structural presence with ultra-clean technical readability:

- **Headlines & Display (`Outfit`):** Geometric and contemporary, Outfit gives channel titles, stream categories, and mastheads a polished, cinematic stance. Large scale displays apply strict negative tracking to preserve tightness on pitch-black viewports.
- **Body & Labels (`Manrope`):** Engineered with crisp geometric neutrality, Manrope maintains optimal legibility across compact metadata lines, video timestamps, view counts, and chat logs.
- **Hierarchy Rules:**
  - Content titles default to `headline-md` or `headline-sm` with a crisp `#FFFFFF` finish.
  - Secondary metadata (creators, dates, metrics) stays grounded in `body-sm` using `rgba(255, 255, 255, 0.6)`.
  - Badges and stream attributes (resolution, live flags, audio specs) strictly employ uppercase tracking with `label-sm`.

## Layout & Spacing

The layout model adapts a high-density, media-first grid pattern inspired by modern workstation streaming hubs:

- **Grid Architecture:** 
  - **Desktop (1440px+):** Fluid content canvas flanked by an 80px collapsed or 240px expanded navigation rail. The content view spans a 12-column grid system with 24px (`1.5rem`) gutters and 32px (`2rem`) margins. Content shelf rows scale between 4 to 6 video cards per view.
  - **Tablet (768px - 1439px):** 8-column layout with 16px gutters. Navigation collapses strictly to an icon rail or contextual slide-out tray. Content cards reflow into 2 or 3 columns.
  - **Mobile (< 768px):** 4-column layout with 12px gutters and 16px horizontal margins. Video feeds collapse to single-column full-bleed media cards with stacked metadata and bottom navigation anchors.
- **Rhythm Principles:** Spacing tokens govern internal card padding, flex row gaps, and metadata clustering. Dense structural elements (e.g., video details) use `space-xs` and `space-sm` for unified cohesion, whereas macro groupings maintain `space-lg` to `space-xl` separation.

## Elevation & Depth

Visual hierarchy abandons heavy, muddy drop shadows in favor of ambient luminescence and translucent architectural tiers:

- **Level 0 (Canvas):** Pure base tone (`#0A0A0C`), devoid of elevation.
- **Level 1 (Card & Rail Containers):** Solid charcoal `#16161D` bounded by a continuous 1px outline of `rgba(255, 255, 255, 0.08)`. Hover states introduce an interior edge illumination of `rgba(255, 255, 255, 0.16)`.
- **Level 2 (Floating Player & Modals):** Semi-opaque surfaces (`rgba(22, 22, 29, 0.85)`) supported by a `24px` backdrop blur, a fine glass perimeter, and an ambient shadow: `0 16px 40px -8px rgba(0, 0, 0, 0.7)`.
- **Level 3 (Focused & Active Interactive Layers):** Neon Cyan glow mapping applied directly to focused controls, scrubbers, and active video cards: `0 0 20px rgba(6, 182, 212, 0.22)`.

## Shapes

The geometric signature uses tight, architectural soft radii (`roundedness: 1`), conveying technical precision and professional hardware aesthetics:

- **Structural Foundations:** Standard cards, video thumbnails, media tiles, and inner tool panels utilize a baseline radius of `0.25rem` (`4px`).
- **Elevated Modals & Containers:** Flyouts, dialogue sheets, and contextual drawers leverage `rounded-lg` (`0.5rem` / `8px`).
- **Pills & Status Indicators (Exceptions):** Interactive category filter chips, search input bars, action buttons, and status badges systematically override baseline squareness with full pill rounding (`9999px`) to create clear tactile affordances against square media thumbnails.

## Components

### Buttons
- **Primary Action:** Pill-shaped (`border-radius: 9999px`), styled with a horizontal linear gradient from secondary Indigo to primary Cyan (`linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)`). Text in high-contrast solid white `#FFFFFF`. Hover triggers an ambient cyan aura: `0 0 16px rgba(6, 182, 212, 0.4)`.
- **Secondary Action:** Pill-shaped, semi-transparent charcoal base (`rgba(255, 255, 255, 0.06)`) enclosed by a 1px border of `rgba(255, 255, 255, 0.12)`. Hover states transition background to `rgba(255, 255, 255, 0.1)`.
- **Live / Danger Action:** Solid crimson `#EF4444` background with a subtle pulse animation for ongoing live broadcasts.

### Video Cards
- **Media Thumbnail:** Fixed 16:9 ratio with `0.25rem` corners. Overflow hidden.
- **Edge Definition:** 1px ambient border (`rgba(255, 255, 255, 0.08)`) encasing the card.
- **Hover Behavior:** Thumbnail gently scales (`scale(1.03)`) with a transition timing of `200ms ease-out`. The card border transitions to `rgba(6, 182, 212, 0.45)`.
- **Timestamp Overlay:** Bottom-right anchored pill with `rgba(10, 10, 12, 0.85)` background, backdrop blur, `label-sm` font, and 1px border.

### Chips & Filter Pills
- Compact horizontal scroll items with `9999px` corner radius.
- Inactive state: `#16161D` fill, 1px glass border, text in muted `#A1A1AA`.
- Active state: Linear gradient fill (`#6366F1` to `#06B6D4`) or high-contrast solid white fill with deep dark text for quick visual filtering.

### Input Fields & Search Bars
- Elongated pill shape for desktop discovery bars, featuring a recessed dark background (`#101015`) and a subtle 1px border (`rgba(255, 255, 255, 0.08)`).
- Focus state brings an instantaneous transition to a Cyan perimeter (`#06B6D4`) with `0 0 12px rgba(6, 182, 212, 0.25)` outer glow. Placeholder text set to `rgba(255, 255, 255, 0.35)`.

### Checkboxes & Radio Controls
- Geometric square (`0.25rem` radius) for checkboxes, circular for radios.
- Inactive: Deep charcoal fill with 1.5px glass border.
- Active: Filled with primary Cyan (`#06B6D4`), rendering a stark black check or dot for unmistakable state feedback.

### Live Badges & Player Indicators
- **Live Badge:** High-intensity Crimson (`#EF4444`) pill containing uppercase bold tracking (`label-sm`), paired with an animated ping dot.
- **Video Player Scrubber:** Deep track (`rgba(255, 255, 255, 0.15)`), active buffered segment in muted cyan, and active played progress illuminated with the primary `#06B6D4` hue, anchored by a glowing cyan seeker head.