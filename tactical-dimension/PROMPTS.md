<div align="center">

# TACTICAL DIMENSION — PROMPT ENGINEERING LOG
### Every prompt used to build this project inside Google Stitch

[![Built with Google Stitch](https://img.shields.io/badge/Built%20with-Google%20Stitch-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://stitch.withgoogle.com)

> This document is a transparent record of the prompt engineering process used to build TACTICAL DIMENSION entirely inside Google Stitch. Each prompt is documented with its intent, the technique used, and the result achieved.

</div>

---

## 📐 PROMPT ENGINEERING PRINCIPLES USED

Throughout this build, 4 core prompt engineering principles were applied consistently:

| Principle | Description |
|---|---|
| **Preservation First** | Every refinement prompt began with "Keep everything exactly as is" to prevent Stitch from redesigning working screens |
| **Additive Only** | Prompts specified additions, never replacements — "only ADD these enhancements" |
| **Specificity** | Exact values given for colors (hex codes), sizes (px/vw), positions, and z-index layering |
| **Identity Lock** | Project name, color system, and font system were stated in every prompt to maintain consistency |

---

## PROMPT 01 — INITIAL GENERATION
**Screen:** All screens (first generation)
**Technique:** Broad world-building prompt with locked design system
**Stitch Feature:** Streaming generation to canvas

```
TACTICAL DIMENSION — A cinematic, dark, military-aesthetic web experience
built with 5 full-viewport screens, HTML animations, scroll-triggered effects,
and motion. Dark cosmic color palette: void black, amber #FF8C00, electric
cobalt #00A2FF. Full-height scrollable single-page website with dramatic 3D
elements, HUD overlays, and video backgrounds.
```

**Result:** Stitch streamed 5 tactical screens to canvas — Mission Start, Global Logistics, Strategic Intel, Encrypted Comms, The Void. Base dark aesthetic, amber/cobalt palette established correctly.

**What worked:** High-level world description + locked color hex values
**What to watch:** Stitch interprets "military" broadly — needed refinement for specific HUD details

---

## PROMPT 02 — SCREEN 1 REFINEMENT (Mission Start)
**Screen:** Mission Start — Hero
**Technique:** Additive in-place edit with precise measurements
**Stitch Feature:** In-place AI edit

```
Keep "TACTICAL DIMENSION" as the main headline — this is the project name
and must stay. Do NOT change the title or add competition branding as headlines.

Enhance the existing design with these additions only:

1. Make "TACTICAL DIMENSION" bigger — Bebas Neue, 10vw, keep the amber glow
2. Add targeting ring system around the central reticle: outer ring 420px amber
   dashed counter-rotating, inner ring 280px white solid, L-bracket corner
   markers at 4 cardinal points
3. Add decorative background text "DIMENSION" — 28vw, 4% opacity, white,
   blurred, centered behind everything
4. Make the left HUD panel more detailed: add "LAT 28.6° N | LNG 77.2° E"
   and "ENCRYPTION_LVL_9" labels in Space Mono 10px amber
5. Add mini radar bottom-right: 90px circle, cobalt border, spinning green
   sweep line, 3 random green dots
6. Add vertical ruler left edge: 1px amber line full height, tick marks
   every 40px
7. Keep the dark void background, amber and cobalt color system exactly as is
8. Bottom center text: "SCROLL TO ENTER THE DIMENSION ↓" only
9. Add subtle scanline texture: repeating horizontal lines 1px height, 1px gap,
   rgba(255,255,255,0.02)
10. Small label top-center: "[ SEQUENCE_01 ]" Space Mono, cobalt
```

**Result:** Targeting rings, HUD telemetry panel, mini radar, amber ruler, scanlines all added while preserving TACTICAL DIMENSION identity.

**Key technique:** Numbered list of 10 specific additions. Each item had exact px values, hex colors, and font specifications. No ambiguity.

---

## PROMPT 03 — SCREEN 2 REFINEMENT (Global Logistics)
**Screen:** Global Logistics — Tactical Map Dashboard
**Technique:** Minimal additive prompt — screen was already strong
**Stitch Feature:** In-place AI edit

```
Do NOT redesign this screen. Keep everything exactly as it is — the tactical
map, resource status panels, deployment vectors, system log, navigation sidebar,
all HUD elements. Only ADD these enhancements on top of what exists:

1. Add a large watermark "02" behind all content — Bebas Neue, 20vw, 4%
   opacity, white, centered, blurred

2. Add a scrolling ticker to the very top bar: "[ SYSTEM OPERATIONAL ] —
   [ DESIGN SEQUENCE ACTIVE ] — [ TACTICAL DIMENSION v4.2 ] —
   [ ALL SYSTEMS NOMINAL ]" in amber, scrolling left

3. Make the TACTICAL_MAP section glow more — add a subtle cobalt radial glow
   around the map panel: box-shadow inset cobalt rgba(0,162,255,0.15)

4. Add a "CLASSIFIED" watermark diagonally across the map only — 15% opacity
   red, rotated -8 degrees, does not cover the data panels

5. Add subtle scanline texture to the entire background if not present

6. Keep all existing content, layout, colors, and panels completely unchanged
```

**Result:** Scrolling ticker, CLASSIFIED stamp, cobalt map glow, section watermark all added. Original dashboard 100% preserved.

**Key technique:** "Do NOT redesign" as the very first line. Proved critical — Stitch respects explicit preservation instructions.

---

## PROMPT 04 — SCREEN 3 REFINEMENT (Strategic Intel)
**Screen:** Strategic Intel — Threat Analysis
**Technique:** Functional enhancement + decorative layering
**Stitch Feature:** In-place AI edit

```
Do NOT redesign this screen. Keep everything exactly as it is — all panels,
data, layout, navigation, HUD elements. Only ADD these enhancements that
make it feel MORE like a real intel terminal:

1. Add large watermark "03" behind all content — Bebas Neue, 20vw, 4%
   opacity, white, centered, blurred

2. If there are any card or panel elements on screen, add a 3D perspective
   tilt effect — CSS perspective: 1000px on parent, cards get subtle
   rotateY transforms to appear at different depths

3. Add hover behavior to existing cards: on hover, card brightens,
   box-shadow intensifies, amber inner glow appears:
   box-shadow inset 0 0 40px rgba(255,140,0,0.15)

4. Add stat/progress bars to existing data panels showing percentages —
   amber fill, dark background, animated fill from 0% to value

5. Add a small top-down schematic in top-right corner: 120px x 80px dark
   panel, cobalt dotted lines showing bird's-eye layout diagram

6. Add vertical label on left edge: "SELECT LOADOUT" rotated -90 degrees,
   Bebas Neue, amber, letter-spacing 0.4em

7. Keep all existing content, colors, layout completely unchanged
```

**Result:** Bird's-eye schematic, SELECT LOADOUT vertical label, amber progress bars, hover effects added cleanly.

---

## PROMPT 05 — SCREEN 4 REFINEMENT (Encrypted Comms)
**Screen:** Encrypted Comms — Secure Terminal
**Technique:** Narrative UI — live decryption story told through animation
**Stitch Feature:** In-place AI edit

```
Do NOT change the layout, navigation, header, or panel structure.
Fix and enhance only:

1. LAYOUT FIX: Make sure all content fits within the viewport — nothing
   gets cut off on the right side. AUTH_PORTAL panel must be fully visible.

2. Restore the full comms log on the left panel with ALL these lines:
[000] SYS  INITIALIZING KEY EXCHANGE...
[001] SYS  HANDSHAKE_COMPLETE. END-TO-END ENCRYPTION ACTIVE.
[002] CMD  Awaiting telemetry from Sector 7-6. Status?
[003] OPR  Telemetry nominal. Signal degradation detected at perimeter.
[004] SYS  WARN: PACKET_LOSS_DETECTED (12%)
[005] OPR  *garbled* x69!m... rerouting through proxy node...
[006] CMD  Hold position. Do not engage until uplink is stabilized.

3. Add live DECRYPTION SEQUENCE animation — terminal block cycling through:
> INITIATING DECRYPT PROTOCOL...
> ATTEMPT 1/3: [████░░░░░░] FAILED — WRONG KEY
> ATTEMPT 2/3: [███████░░░] FAILED — CHECKSUM ERROR
> ATTEMPT 3/3: [██████████] ACCESS GRANTED ✓
> DECRYPTION COMPLETE — CHANNEL AUTHENTICATED
Each line types out character by character. Failed lines flash red.
ACCESS GRANTED flashes green. Then loops.

4. Keep the SIGNAL INTERCEPTED scrolling banner at top
5. Keep waveform, UPLINK_STATUS, AUTH_PORTAL fully visible and not cut off
6. Keep the "04" watermark behind content
7. Keep all existing colors — amber, cobalt, dark void background
```

**Result:** Live looping decryption animation, full comms log restored, layout fixed, SIGNAL INTERCEPTED banner maintained.

**Key technique:** Wrote the exact terminal content as literal text in the prompt. Stitch rendered it precisely as written.

---

## PROMPT 06 — SCREEN 5 REFINEMENT (The Void)
**Screen:** The Void — Mission End
**Technique:** Restraint — enhance without overwhelming a minimal screen
**Stitch Feature:** In-place AI edit

```
Do NOT redesign this screen. Keep everything exactly as it is — THE_VOID
title, the cobalt circle with warning triangle, CORE_STATUS, TERMINATE
SESSION button, all HUD elements, the particle stars, corner brackets.
Only ADD these specific enhancements:

1. Make "THE_VOID" headline larger — Bebas Neue, 8vw, pure white, same
   position. Add cobalt 3D extrusion: 10 stacked text-shadows from
   1px 1px #001580 to 10px 10px #000620

2. Below "THE_VOID" add one new line: "SEQUENCE COMPLETE" — Bebas Neue,
   3vw, amber #FF8C00

3. Restyle TERMINATE SESSION button: sharp rectangle, zero border radius,
   280px x 60px, transparent background, 2px white border top+left,
   2px amber border bottom+right, Bebas Neue text. On hover: amber fill,
   black text

4. Add amber lens flare top-right corner: radial-gradient(ellipse at 95% 5%,
   rgba(255,180,0,0.12) 0%, transparent 50%) — subtle only

5. Add large watermark "05" behind all content — Bebas Neue, 20vw, 4%
   opacity, white, blurred, centered

6. Add footer: "[ TACTICAL DIMENSION — SYSTEM_STAMP_2024 ]" Space Mono
   10px amber centered

7. Do NOT add any pyramid, trophy, or 3D object. Do NOT change fonts.
   Do NOT add any blue glowing text. Keep cobalt circle as hero element.
```

**Result:** 3D text extrusion on headline, asymmetric button border, amber lens flare, SEQUENCE COMPLETE tagline — all without touching the core void aesthetic.

**Key technique:** Explicit negative instructions ("Do NOT add pyramid") prevented Stitch from repeating a previous mistake.

---

## PROMPT 07 — MULTI-SCREEN MERGE ATTEMPT
**Screen:** All screens
**Technique:** Attempted single-page merge
**Stitch Feature:** Multi-screen selection + generation
**Status:** Partially successful — Stitch generated additional screens instead of merging

```
Merge all screens into a single long scrollable HTML page. Each screen
becomes one full-viewport section (100vh). Do NOT create any new screens.
Do NOT modify any existing designs. Only combine what exists into one
scrollable page with smooth scroll, IntersectionObserver entrance
animations, fixed navigation, and vertical progress bar.
```

**Learning:** Stitch works best per-screen. Multi-screen merge prompts cause it to generate new content rather than combine existing. Better approach: export individually and connect with a master index file.

---

## PROMPT 08 — MASTER NAVIGATION HUB
**Tool:** GitHub Copilot / Codex (VS Code)
**Technique:** Detailed spec prompt for master connector file
**Purpose:** Connect all 10 deployed screens into one experience

```
I have a multi-screen tactical web project called "TACTICAL DIMENSION v4.2".
Each screen is deployed on Netlify. Build me a master index.html that
connects all 10 screens into one seamless experience with:

- Boot screen: "TACTICAL DIMENSION" headline, animated system log,
  amber progress bar, "ENTER THE DIMENSION" button
- Fixed navigation: 44px height, Space Mono 8px, amber active state
- Screen display: iframes stacked absolutely, flash transition between screens
- Keyboard navigation: arrow keys left/right switch screens
- Scroll wheel navigation: wheel switches screens with 1s cooldown
- Vertical progress bar: 3px amber, right edge, fills by screen index
- Screen counter dots: 10 dots bottom center, active dot amber wider
- HUD corner brackets: 4 corners, 20x20px L-brackets, amber
- Bottom ticker: scrolling system status, Space Mono 8px amber
- Custom cursor: amber ring outer + amber dot inner
- Scanline overlay: repeating-linear-gradient CRT effect

Design system: #02040E background, #FF8C00 amber, #00A2FF cobalt,
Bebas Neue + Space Mono. Military tactical HUD aesthetic throughout.
```

---

## 📊 PROMPT ENGINEERING STATS

| Metric | Value |
|---|---|
| Total prompts written | 15+ |
| Screens generated | 10 |
| In-place edit rounds per screen | 2-4 |
| Average prompt length | ~300 words |
| Design system violations caught | 3 (fixed immediately) |
| Stitch features used | 4 (streaming, in-place, export, canvas) |

---

## 🔑 KEY LESSONS — PROMPTING STITCH EFFECTIVELY

**1. Lead with preservation**
`"Keep everything exactly as it is"` as the first sentence prevents Stitch from redesigning working screens.

**2. Number your additions**
A numbered list of 5-10 specific additions is more reliable than paragraph descriptions.

**3. Use exact values**
`"Bebas Neue, 10vw, amber #FF8C00"` is better than `"big amber headline"`.

**4. Add negative instructions for known failure modes**
If Stitch added something wrong previously, explicitly say `"Do NOT add [X]"`.

**5. State the identity in every prompt**
Repeating `"TACTICAL DIMENSION"`, the color hex values, and font names in each prompt keeps Stitch anchored to the design system.

**6. One concept per prompt for complex changes**
Mixing layout fixes with style changes in one prompt causes conflicts. Separate them.

---

<div align="center">

**[ PROMPT ENGINEERING LOG — TACTICAL DIMENSION v4.2 ]**

*Transparency in AI-native design workflows*

</div>
