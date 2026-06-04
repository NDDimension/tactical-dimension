---
name: Tactical Dimension
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#ddc1ae'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#a48c7a'
  outline-variant: '#564334'
  surface-tint: '#ffb77d'
  primary: '#ffb77d'
  on-primary: '#4d2600'
  primary-container: '#ff8c00'
  on-primary-container: '#623200'
  inverse-primary: '#904d00'
  secondary: '#99cbff'
  on-secondary: '#003355'
  secondary-container: '#00a1fe'
  on-secondary-container: '#003559'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#aba9a9'
  on-tertiary-container: '#3f3e3e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#cfe5ff'
  secondary-fixed-dim: '#99cbff'
  on-secondary-fixed: '#001d34'
  on-secondary-fixed-variant: '#004a78'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.15em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1440px
---

## Brand & Style

This design system is built for mission-critical interfaces where high-stakes decision-making and technical precision intersect. The brand personality is authoritative, cold, and hyper-functional, evoking the atmosphere of a futuristic command center or a high-altitude HUD.

The visual style is a fusion of **Brutalism** and **Glassmorphism**. It utilizes heavy, unyielding structural elements paired with translucent, multi-layered data planes. The emotional response is one of focus and urgency—users should feel they are operating a sophisticated piece of military hardware within a vast, cosmic void. Aesthetics are driven by utility; every border, line, and glow serves as a conduit for information or a boundary for critical data.

## Colors

The palette is strictly dark-mode, designed to minimize eye strain in low-light environments while maximizing the "pop" of tactical data.

- **Void Black (#000000):** The foundational layer. It provides an infinite depth for the interface to live in.
- **Amber (#FF8C00):** Used for primary actions, warnings, and critical status updates. This is the "active" color that demands immediate attention.
- **Electric Cobalt (#00A2FF):** Used for auxiliary data, scanning indicators, and technical readouts. It provides a cool contrast to the heat of the Amber.
- **Tactical Gray (#1A1A1A):** Used for structural surfaces and container backgrounds, providing a subtle separation from the Void Black without breaking the dark atmosphere.

## Typography

The typography in the design system follows a rigid hierarchy that separates high-level commands from technical data.

**Headlines** utilize **Inter** at its heaviest weights (ExtraBold/Black). These should be rendered in uppercase to emphasize the brutalist, industrial nature of the interface. Wide tracking is used for sub-headlines to evoke technical blueprints.

**Body & Data** utilize **JetBrains Mono**. The monospaced nature of the font ensures that numerical data and system readouts align perfectly across rows, maintaining the "HUD" aesthetic. Labels should frequently use "All Caps" with increased letter spacing to simulate hardware engravings or screen-printed military gear.

## Layout & Spacing

This design system employs a **Fixed Grid** model. The interface is constrained within a maximum width of 1440px to ensure that data remains within the user's primary field of vision, simulating a cockpit or control terminal.

- **The 8px Grid:** All spacing and component dimensions are increments of 8px (4px for micro-adjustments), ensuring a mathematically perfect layout.
- **HUD Framing:** Layouts should be encased in "brackets" or corner markers. Content does not simply float; it is "locked in" by the UI.
- **Breakpoints:**
  - **Mobile (<768px):** Single column, 16px margins. Monospaced labels are prioritized over long body text.
  - **Desktop (1024px+):** 12-column grid. Sidebars are often fixed, mimicking hardware control panels.

## Elevation & Depth

Depth is not communicated through traditional soft shadows, but through **Tonal Layering** and **Luminous Borders**.

1.  **Base Layer:** Void Black (#000000).
2.  **Surface Layer:** Tactical Gray (#1A1A1A) with 0.5px solid borders in a slightly lighter gray.
3.  **Glass Layer:** Semi-transparent containers (60-80% opacity) with a `backdrop-filter: blur(12px)`. These layers represent "Heads-Up" data planes floating above the base.
4.  **Active Glow:** Elements that are interactive or critical feature a 1px "Electric Cobalt" or "Amber" border with a faint outer glow (2-4px spread) to simulate a light-emitting screen.

Scanline overlays (1px horizontal lines at 5% opacity) should be applied to the highest-level glass containers to reinforce the digital display aesthetic.

## Shapes

The shape language is strictly **Sharp (0)**. 

Curvature is avoided to maintain the brutalist, industrial aesthetic. To add visual interest without using rounded corners, the design system utilizes **notched corners** (clipped corners at 45-degree angles) for buttons and primary containers. This "stealth-tech" geometry reinforces the military theme. Rectangles should be perfectly crisp, and dividers should be 1px thin lines that extend to the edge of their containers.

## Components

### Buttons
Primary buttons are solid **Amber** with black text, using sharp 90-degree corners or a 4px notched corner. Secondary buttons are "Ghost" style: transparent backgrounds with an **Electric Cobalt** border and a subtle flickering hover state.

### Input Fields
Inputs are Tactical Gray blocks with a bottom-only border in Electric Cobalt. When focused, the border glows and a small "SCANNING" label appears in the top-right corner in 11px JetBrains Mono.

### Chips & Tags
Technical indicators used for status. They are small, rectangular, and use high-contrast text. For "Critical" status, the chip should have a pulsing Amber background.

### Cards
Cards utilize the Glassmorphism style. They feature a thin top-border highlight and often include "corner brackets"—small L-shaped graphics in the corners that frame the content.

### Scanline Overlay
A global or container-specific overlay that adds horizontal texture. It should be non-interactive and purely aesthetic, applied at very low opacity to ensure readability.

### Data Lists
Lists are separated by 1px Tactical Gray lines. Each row should begin with a numerical index (e.g., 001, 002) in a smaller font size to emphasize the systematic nature of the data.