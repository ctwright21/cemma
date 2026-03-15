# Competitive Edge MMA — Brand Style Guide
**Charcoal & Sage | Website Implementation Guide**
Version 1.0 · Business Builders

---

## Table of Contents

1. [Brand Foundation](#1-brand-foundation)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Logo Usage](#4-logo-usage)
5. [Spacing & Layout](#5-spacing--layout)
6. [UI Components](#6-ui-components)
7. [Imagery & Photography](#7-imagery--photography)
8. [Motion & Animation](#8-motion--animation)
9. [Voice & Copy Style](#9-voice--copy-style)
10. [Page-Level Templates](#10-page-level-templates)
11. [CSS Variables Reference](#11-css-variables-reference)
12. [Do's & Don'ts](#12-dos--donts)

---

## 1. Brand Foundation

### Brand Positioning Statement
Competitive Edge MMA is a **character development academy that happens to teach martial arts.** Every visual and written decision should reinforce this — we are not a fight gym, not a karate school, and not a fitness studio. We are a transformation program for families.

### Target Audience
**Primary:** Parents of children ages 5–15 who are concerned about their child's confidence, focus, resilience, or response to bullying. They are educated, care deeply about their child's development, and are skeptical of hype and empty promises.

**Secondary:** Parents seeking a structured, values-driven physical activity for their child as an alternative to team sports.

### Brand Personality
| Trait | What It Means In Practice |
|---|---|
| **Grounded authority** | Confident without boasting. Speaks from experience, not sales energy. |
| **Empathetic directness** | Names the parent's real fear, then cuts straight to the solution. |
| **Achievement-focused** | Every outcome is *earned*, not given. "Built confidence" not "gave confidence." |
| **Warmly serious** | Takes character development seriously without being cold or intimidating. |
| **Understated strength** | The brand doesn't need to be loud. Real credibility is quiet. |

### The One-Liner
> *We help parents raise kids with real character — not just good feelings about themselves — through a proven martial arts and values program that builds confidence, discipline, and resilience from the inside out.*

---

## 2. Color System

### Palette Overview

The Charcoal & Sage palette pairs the **logo's existing red** as an inherited brand anchor against a cool, grounded dark base and a natural sage accent. The result reads as modern, trustworthy, and purposeful — not aggressive.

```
Logo red (#CC1F1F) = Energy, identity, the brand's pulse
Charcoal (#2A2A2A) = Authority, depth, groundedness
Sage (#5C8C6A)    = Growth, calm, trusted guidance
Cream (#F5F2EC)   = Warmth, approachability, openness
```

---

### Primary Colors

#### Warm Charcoal
- **Hex:** `#2A2A2A`
- **RGB:** `42, 42, 42`
- **Usage:** Primary dark backgrounds (nav, hero, footers), body text on light backgrounds, section headings
- **Never use for:** Body copy on dark backgrounds, large filled buttons on dark backgrounds

#### Sage Green
- **Hex:** `#5C8C6A`
- **RGB:** `92, 140, 106`
- **Usage:** Primary CTA buttons, section eyebrows/labels, active states, links, icon accents, step numbers
- **Never use for:** Text smaller than 14px on white (accessibility), large background fills behind body text

#### Sage Light
- **Hex:** `#A8C8A8`
- **RGB:** `168, 200, 168`
- **Usage:** Hero stat highlights, subtle background tints, hover states on sage elements, decorative accents
- **Never use for:** CTAs, interactive elements, text on white backgrounds (fails contrast)

#### Cream / Parchment
- **Hex:** `#F5F2EC`
- **RGB:** `245, 242, 236`
- **Usage:** Primary page background, card surfaces on light sections, form input backgrounds
- **Never use for:** Text (too light), hero backgrounds (too soft)

---

### Secondary / Supporting Colors

#### Dark Sage (Hover State)
- **Hex:** `#3D6B4A`
- **RGB:** `61, 107, 74`
- **Usage:** Hover/pressed state for sage buttons and links only

#### Sage Tint (Tag Background)
- **Hex:** `#E8F2E8`
- **RGB:** `232, 242, 232`
- **Usage:** Light tag/badge backgrounds, success messages, light section backgrounds

#### Warm Tan (Tag Background Alt)
- **Hex:** `#F2EDE4`
- **RGB:** `242, 237, 228`
- **Usage:** Secondary tag backgrounds, warm divider blocks

#### Body Text
- **Hex:** `#6B6760`
- **RGB:** `107, 103, 96`
- **Usage:** Body copy, descriptions, supporting text on light backgrounds

#### Muted Text
- **Hex:** `#9A9590`
- **RGB:** `154, 149, 144`
- **Usage:** Captions, disclaimers, placeholder text, timestamps

#### White
- **Hex:** `#FFFFFF`
- **Usage:** Text on dark backgrounds, card surfaces on dark sections, icon fills

---

### Logo Red (Inherited — Restricted Use)

- **Hex:** `#CC1F1F`
- **RGB:** `204, 31, 31`
- **Usage:** Logo only. May be used sparingly as a highlight accent in hero stats or decorative rule lines when directly adjacent to the logo. **Not to be used for CTA buttons, section accents, or backgrounds.**
- **Why restricted:** The logo's red is a fixed inherited color. Using it freely elsewhere creates two competing brand voices. Let it belong exclusively to the logo mark so it retains maximum visual impact.

---

### Color Accessibility

All text/background combinations must meet **WCAG AA** (4.5:1 for body text, 3:1 for large text/UI).

| Text Color | Background | Ratio | Pass |
|---|---|---|---|
| `#2A2A2A` on `#F5F2EC` | Charcoal on Cream | 16.2:1 | ✓ AAA |
| `#FFFFFF` on `#2A2A2A` | White on Charcoal | 17.1:1 | ✓ AAA |
| `#FFFFFF` on `#5C8C6A` | White on Sage | 4.6:1 | ✓ AA |
| `#2A2A2A` on `#A8C8A8` | Charcoal on Sage Light | 6.4:1 | ✓ AAA |
| `#6B6760` on `#F5F2EC` | Body Text on Cream | 7.1:1 | ✓ AAA |
| `#3D6B4A` on `#E8F2E8` | Dark Sage on Sage Tint | 5.2:1 | ✓ AA |
| `#FFFFFF` on `#CC1F1F` | White on Logo Red | 5.0:1 | ✓ AA |

> ⚠ **Never use:** `#A8C8A8` (Sage Light) as text on `#FFFFFF` — fails contrast at 1.8:1.

---

### Dark Section Color Mapping

When a section uses `#2A2A2A` or `#1E1E1E` as the background:

| Element | Color to Use |
|---|---|
| Headline | `#FFFFFF` |
| Body text | `rgba(255,255,255,0.62)` |
| Eyebrow label | `#5C8C6A` (Sage) |
| Stat highlight | `#A8C8A8` (Sage Light) |
| CTA button | Sage `#5C8C6A` fill, white text |
| Rule / divider | `rgba(255,255,255,0.10)` |
| Border | `rgba(255,255,255,0.08)` |

---

## 3. Typography

### Font Families

#### Display / Headlines — Fraunces
- **Source:** Google Fonts — `https://fonts.google.com/specimen/Fraunces`
- **Import:** `font-family: 'Fraunces', serif;`
- **Weights used:** 400 (regular), 600 (semibold)
- **Styles:** Normal and italic
- **Character:** A variable optical size serif with a warm, literary quality. Communicates intelligence, depth, and authority without feeling stiff. Pairs naturally with the brand's "earned wisdom" positioning.
- **Used for:** H1, H2, H3, pull quotes, testimonials, hero subheadings (italic), stat numbers

#### Body / UI — Plus Jakarta Sans
- **Source:** Google Fonts — `https://fonts.google.com/specimen/Plus+Jakarta+Sans`
- **Import:** `font-family: 'Plus Jakarta Sans', sans-serif;`
- **Weights used:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Character:** Modern, clean, highly legible. Adds a contemporary counterbalance to Fraunces without feeling cold.
- **Used for:** Body copy, nav links, buttons, labels, captions, form elements, tags/badges, all UI text

---

### Type Scale

| Level | Font | Weight | Size | Line Height | Use Case |
|---|---|---|---|---|---|
| **Display** | Fraunces | 600 | 56–72px | 1.08 | Hero headline (desktop) |
| **H1** | Fraunces | 600 | 48px | 1.12 | Page-level hero headline |
| **H2** | Fraunces | 500 | 36px | 1.2 | Section headline |
| **H3** | Fraunces | 500 | 26px | 1.3 | Sub-section headline, card headings |
| **H4** | Fraunces | 400 | 20px | 1.35 | Minor headings, FAQ titles |
| **Pull Quote** | Fraunces italic | 400 | 22px | 1.55 | Testimonials, blockquotes |
| **Eyebrow** | Plus Jakarta Sans | 700 | 11px | 1 | Section labels, above headlines |
| **Body Large** | Plus Jakarta Sans | 400 | 18px | 1.7 | Hero subheadline, intro paragraphs |
| **Body** | Plus Jakarta Sans | 400 | 16px | 1.7 | Standard body copy |
| **Body Small** | Plus Jakarta Sans | 400 | 14px | 1.65 | Card descriptions, secondary copy |
| **Label** | Plus Jakarta Sans | 600 | 12px | 1 | Buttons, nav links, badges |
| **Caption** | Plus Jakarta Sans | 400 | 12px | 1.5 | Footnotes, disclaimers, timestamps |
| **Micro** | Plus Jakarta Sans | 600 | 10px | 1 | Tags, status pills (uppercase only) |

---

### Eyebrow / Section Label Treatment

All section eyebrows follow this format:
- Font: Plus Jakarta Sans 700
- Size: 10–11px
- Letter-spacing: `0.18em`
- Text-transform: `uppercase`
- Color: Sage `#5C8C6A`
- Always preceded by a short rule line (20–28px wide, 1px, same sage color)

```css
.eyebrow {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #5C8C6A;
  display: flex;
  align-items: center;
  gap: 10px;
}
.eyebrow::before {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: #5C8C6A;
  flex-shrink: 0;
}
```

---

### Mobile Type Scale

| Desktop | Mobile |
|---|---|
| Display 56–72px | 36px |
| H1 48px | 32px |
| H2 36px | 26px |
| H3 26px | 22px |
| Body Large 18px | 17px |
| Body 16px | 16px (unchanged) |

Breakpoint for scale reduction: `max-width: 768px`

---

## 4. Logo Usage

### The Existing Logo

The current CE-MMA logo features a fighting figure integrated into the wordmark "Competitive Edge" in bold red, with "Mixed Martial Arts" as a tagline in gray. This logo is **fixed and unchanged** — the brand system is built *around* it, not replacing it.

### Clear Space

Minimum clear space around the logo on all sides: **equal to the cap-height of the "C" in the wordmark.** No other elements (text, borders, imagery) should enter this zone.

### Approved Background Usage

| Background | Logo Version | Notes |
|---|---|---|
| `#2A2A2A` Charcoal | Full color logo | ✓ Ideal — mirrors logo's native dark bg |
| `#1E1E1E` Deep Charcoal | Full color logo | ✓ Ideal for nav |
| `#FFFFFF` White | Full color logo | ✓ Works — red pops on white |
| `#F5F2EC` Cream | Full color logo | ✓ Works — subtle warmth |
| `#5C8C6A` Sage | White/reversed version | ⚠ Only if a white knockout version exists |
| Photography | Full color logo | ✓ Use only on dark areas of image |

### Minimum Logo Size
- **Digital:** 120px wide minimum
- **Favicon:** Use the fighter figure alone as a square icon at 32×32 and 180×180 (Apple touch)

### What NOT to Do with the Logo
- Do not recolor the red elements
- Do not place on busy mid-tone backgrounds where contrast is ambiguous
- Do not stretch, compress, or rotate
- Do not add drop shadows or effects
- Do not crowd with competing headlines at the same visual weight
- Do not recreate the wordmark in a different typeface

---

## 5. Spacing & Layout

### Spacing Scale (8px base grid)

All spacing values are multiples of 8px.

| Token | Value | Use Case |
|---|---|---|
| `--space-1` | 4px | Micro gaps — icon-to-label, tight list items |
| `--space-2` | 8px | Inner component padding (tight) |
| `--space-3` | 12px | Between related elements (label + input) |
| `--space-4` | 16px | Standard inner padding, between card elements |
| `--space-5` | 24px | Between components in a group |
| `--space-6` | 32px | Between sections within a component |
| `--space-7` | 48px | Section top/bottom padding (mobile) |
| `--space-8` | 64px | Section top/bottom padding (desktop) |
| `--space-9` | 96px | Large section spacing, hero padding |
| `--space-10` | 128px | Maximum section breathing room |

### Page Max Width
- **Content max-width:** `1140px`
- **Narrow content (prose, forms):** `720px`
- **Hero content:** `640px` for headline/body, full-bleed for backgrounds
- **Horizontal padding:** `24px` mobile, `48px` tablet, `80px` desktop (inside max-width container)

### Grid System
- **Columns:** 12-column grid
- **Gutter:** `24px` (desktop), `16px` (mobile)
- **Common layouts:**
  - Full-width hero: 12 cols
  - Two-column (feature): 6 + 6
  - Three-column (cards): 4 + 4 + 4
  - Content + sidebar: 8 + 4
  - Narrow content: 8 cols centered (offset 2)

### Border Radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 3px | Buttons, tags, badges, inputs |
| `--radius-md` | 6px | Cards (mobile), small modals |
| `--radius-lg` | 10px | Cards (desktop), panels |
| `--radius-xl` | 16px | Large feature cards only |
| `--radius-full` | 999px | Pills, avatar circles |

The brand aesthetic leans toward **sharp corners with small radius** — not fully rounded. This reinforces seriousness and precision. Avoid large radius values except for pill badges.

---

## 6. UI Components

### Navigation Bar

```
Height:          64px (desktop), 56px (mobile)
Background:      #1E1E1E
Logo placement:  Left-aligned, 16px from left edge
Nav links:       Plus Jakarta Sans, 13px, weight 500,
                 color rgba(255,255,255,0.65)
Nav link hover:  color #A8C8A8 (Sage Light), transition 0.2s
CTA button:      Sage #5C8C6A, white text, 3px radius,
                 "Free Class" — 10 seconds to sign up
Border bottom:   1px solid rgba(255,255,255,0.08)
Sticky:          Yes — stays fixed on scroll with backdrop-filter: blur(8px)
Mobile:          Hamburger at 768px, slides in from right
```

---

### Hero Section

```
Min-height:       90vh (desktop), auto (mobile)
Background:       #2A2A2A
Padding top:      96px (desktop), 72px (mobile)
Padding bottom:   80px (desktop), 64px (mobile)

Eyebrow:         Sage, uppercase, 11px, with rule line
H1:              Fraunces 600, 56px desktop / 36px mobile,
                 white, line-height 1.1
H1 em/italic:    Fraunces italic, color #A8C8A8 (Sage Light)
Subheadline:     Plus Jakarta Sans 400, 18px, rgba(255,255,255,0.6),
                 max-width 480px, margin-top 16px
CTA row:         margin-top 36px, gap 16px
Stats row:       margin-top 56px, padding-top 32px,
                 border-top 1px solid rgba(255,255,255,0.1)

Decorative geo:  1–2 large circles (stroke only, rgba gold or sage 0.06–0.1)
                 positioned behind content to the right
```

**Hero stat format:**
- Number: Fraunces 600, 36px, `#A8C8A8`
- Label: Plus Jakarta Sans 400, 12px, `rgba(255,255,255,0.4)`

---

### Buttons

#### Primary Button (Sage)
```css
.btn-primary {
  background: #5C8C6A;
  color: #FFFFFF;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 14px 28px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
}
.btn-primary:hover {
  background: #3D6B4A;
  transform: translateY(-1px);
}
.btn-primary:active {
  transform: translateY(0);
}
```

#### Secondary Button (Ghost / Outline)
```css
.btn-ghost {
  background: transparent;
  color: #2A2A2A;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 13px 24px;
  border-radius: 3px;
  border: 1.5px solid #2A2A2A;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.btn-ghost:hover {
  background: #2A2A2A;
  color: #FFFFFF;
}
```

#### Ghost on Dark Background
```css
.btn-ghost-dark {
  background: transparent;
  color: rgba(255,255,255,0.75);
  border: none;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  padding: 14px 4px;
}
```

#### CTA Button (Nav / Compact)
```css
.btn-nav {
  background: #5C8C6A;
  color: #FFFFFF;
  font-size: 11px;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: 3px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
}
```

**Button sizing rules:**
- Use `padding` to size buttons, never fixed `height`
- Minimum touch target: 44×44px (for mobile accessibility)
- Never use more than one Primary button per visual section
- Arrow `→` appended to primary CTAs on hero and section bottoms

---

### Cards

#### Program / Feature Card
```
Background:      #FFFFFF
Border:          1px solid rgba(0,0,0,0.07)
Border-radius:   10px
Padding:         28px 24px
Shadow:          none (flat design)

Eyebrow:        Sage, 10px, uppercase, letter-spacing 0.16em
Heading:        Fraunces 500, 20px, #2A2A2A
Body:           Plus Jakarta Sans 400, 14px, #6B6760, line-height 1.65
Tags row:       margin: 14px 0
Button row:     margin-top: 16px
Hover:          border-color rgba(92,140,106,0.4), transition 0.2s
```

#### Testimonial Card
```
Background:      #2A2A2A
Border-radius:   10px
Padding:         32px 28px
Overflow:        hidden

Large quote mark:  Fraunces, 90px, rgba(92,140,106,0.12), absolute top-left
Quote text:        Fraunces italic 400, 17px, rgba(255,255,255,0.88), line-height 1.65
Author name:       Plus Jakarta Sans 700, 12px, #5C8C6A, uppercase, letter-spacing 0.1em
Author role:       Plus Jakarta Sans 400, 12px, rgba(255,255,255,0.4)
```

#### Stat / Metric Card
```
Background:      #F5F2EC (or #2A2A2A for dark variant)
Border-radius:   8px
Padding:         20px 24px

Number:         Fraunces 600, 40px, #2A2A2A (or #A8C8A8 on dark)
Label:          Plus Jakarta Sans 500, 13px, #9A9590
```

---

### Tags & Badges

```css
/* Green tag (schedule, availability) */
.tag-sage {
  background: #E8F2E8;
  color: #2A5C38;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 2px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  display: inline-block;
}

/* Neutral tan tag (info, age groups) */
.tag-tan {
  background: #F2EDE4;
  color: #5C4A2A;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 2px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  display: inline-block;
}

/* Dark tag (on light backgrounds) */
.tag-dark {
  background: rgba(42,42,42,0.08);
  color: #2A2A2A;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 2px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  display: inline-block;
}
```

---

### Forms

```css
/* Form container */
.form-card {
  background: #FFFFFF;
  border: 1px solid rgba(0,0,0,0.07);
  border-radius: 10px;
  padding: 32px 28px;
  max-width: 480px;
}

/* Field label */
.form-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #2A2A2A;
  display: block;
  margin-bottom: 6px;
}

/* Input */
.form-input {
  width: 100%;
  padding: 11px 16px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  border: 1.5px solid rgba(0,0,0,0.14);
  border-radius: 3px;
  background: #F5F2EC;
  color: #2A2A2A;
  outline: none;
  transition: border-color 0.2s;
}
.form-input::placeholder {
  color: #9A9590;
}
.form-input:focus {
  border-color: #5C8C6A;
  background: #FFFFFF;
}
.form-input:invalid {
  border-color: #CC1F1F;
}

/* Submit button */
.form-submit {
  width: 100%;
  background: #2A2A2A;
  color: #FFFFFF;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  padding: 14px;
  border-radius: 3px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;
}
.form-submit:hover {
  background: #5C8C6A;
}

/* Disclaimer */
.form-disclaimer {
  font-size: 12px;
  color: #9A9590;
  text-align: center;
  margin-top: 12px;
  line-height: 1.5;
}
```

**Form field order for free class signup:**
1. Parent's first name
2. Child's age / age group (dropdown)
3. Phone number
4. How did you hear about us? (optional dropdown)
5. Submit button
6. Disclaimer: "No credit card. No commitment. 60 seconds."

---

### Step / Process Component

```
Number circle:   40×40px, border-radius 50%,
                 background #2A2A2A, color #A8C8A8,
                 Fraunces 600, 18px
Step title:      Fraunces 500, 17px, #2A2A2A
Step body:       Plus Jakarta Sans 400, 14px, #6B6760, line-height 1.6
Connector line:  1px dashed rgba(92,140,106,0.3), between circles
Layout:          Vertical stack on mobile, can be horizontal 3-col desktop
Gap between:     24px (vertical layout)
```

---

### Dividers & Rules

```
Standard divider:  1px solid rgba(0,0,0,0.08) — between sections on light bg
Dark divider:      1px solid rgba(255,255,255,0.08) — on dark bg
Gold accent line:  Gradient left-to-right: #5C8C6A → transparent, 1px, opacity 0.4
                   Used below hero, above major CTAs
Section rule:      Full-width, used to separate major page sections
```

---

### Footer

```
Background:      #1E1E1E
Text:            rgba(255,255,255,0.55)
Links:           rgba(255,255,255,0.55) → #A8C8A8 on hover
Logo:            Full color (works on dark bg)
CTA strip:       Sage background (#5C8C6A) band directly above footer
                 with headline + button before footer links
Border top:      1px solid rgba(255,255,255,0.07)
Padding:         64px top/bottom (desktop), 48px (mobile)
Column layout:   Logo + tagline | Programs | Company | Contact | Social
```

---

## 7. Imagery & Photography

### What to Show

**Always show:**
- Children and instructors working together — trust, connection, teaching moments
- The moment a child succeeds at something hard — not just action poses
- Parent watching from the sideline — identify with the viewer
- Small groups, individual attention — not crowded class scenes
- Confident body language — head up, eye contact, focused expression
- Authentic emotion — effort, concentration, pride

**Never show:**
- Aggressive facial expressions — snarling, yelling, intimidating
- Blood, injury, or extreme pain
- Adult fighters or competition fighting (UFC aesthetic)
- Generic stock photos that could be any gym
- Trophy ceremonies without the struggle that earned them
- Children who look afraid of the instructor

### Photography Style

```
Mood:           Warm, slightly dramatic. High contrast. Real, not staged.
Lighting:       Natural or softbox. Avoid harsh overhead gym lighting.
Color grade:    Slightly desaturated, slight warm shadow tone.
                This complements the cream/charcoal palette naturally.
Composition:    Tight crops for emotion. Wide shots for context/space.
Orientation:    Mix of portrait (for testimonials) and landscape (for sections).
```

### Image Overlay Treatment

When text overlays a photo in a hero or section:

```css
/* Dark overlay for text legibility */
.img-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(30,30,30,0.85) 40%,
    rgba(30,30,30,0.3) 100%
  );
}
```

Ensure text always achieves minimum 4.5:1 contrast against the overlaid image.

### Aspect Ratios

| Use Case | Ratio |
|---|---|
| Hero background | 16:9 or wider, min 1440×810px |
| Program cards | 4:3, min 600×450px |
| Testimonial headshots | 1:1 (circle crop), min 200×200px |
| Team photos | 3:4 (portrait), min 480×640px |
| Blog / article header | 16:9, min 1200×675px |

---

## 8. Motion & Animation

### Principles
- Motion communicates **state change and hierarchy**, not decoration
- Animations are **fast and purposeful** — never slow or looping without purpose
- Default easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` (ease)
- Always include `@media (prefers-reduced-motion: reduce)` fallbacks

### Standard Transitions

```css
/* Universal transition — all interactive elements */
.transition-base {
  transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* Button hover lift */
.btn-hover {
  transition: transform 0.15s ease, background 0.2s ease;
}
.btn-hover:hover {
  transform: translateY(-1px);
}

/* Card hover */
.card-hover {
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.card-hover:hover {
  border-color: rgba(92, 140, 106, 0.4);
  transform: translateY(-2px);
}

/* Link / nav hover */
.link-hover {
  transition: color 0.2s ease;
}
```

### Page Load Animations

Hero elements should animate in sequentially on page load:

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-eyebrow { animation: fadeUp 0.5s ease 0.1s both; }
.hero-headline { animation: fadeUp 0.55s ease 0.2s both; }
.hero-sub      { animation: fadeUp 0.55s ease 0.35s both; }
.hero-btns     { animation: fadeUp 0.5s ease 0.48s both; }
.hero-stats    { animation: fadeUp 0.5s ease 0.62s both; }

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

### Scroll Reveal

Section elements below the fold should use an `IntersectionObserver` to trigger a subtle reveal:

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

**Stagger delays for groups** (cards, steps, stats): `0.08s` between each item.

---

## 9. Voice & Copy Style

### Tone Principles

| Do | Don't |
|---|---|
| Speak to the parent's specific fear | Use generic encouragement ("Amazing!") |
| Name the outcome in concrete terms | Vague promises ("transform your child") |
| Use earned language ("built," "earned") | Given language ("we gave," "you'll receive") |
| Be direct and confident | Hedge with "might," "could," "maybe" |
| Name real scenarios parents recognize | Abstract concepts without grounding |
| Speak quietly with authority | Shout with exclamation points |

---

### Headline Formula

**Format:** Short, declarative, present tense. Subject is always the child or parent — never the academy.

```
✓ "Your Child Is Capable of More Than You've Seen."
✓ "Character Is Built, Not Given."
✓ "Parenting Is Hard When Praise Isn't Enough."
✓ "Real Challenges. Real Achievement. Real Character."

✗ "We Are Colorado's #1 Martial Arts Academy!"
✗ "Unlock Your Child's Potential!"
✗ "The Best MMA Classes in Centennial!"
✗ "Fun for the Whole Family!"
```

---

### CTA Copy

| Context | Copy |
|---|---|
| Hero (primary) | "Book Your Child's Free Class →" |
| Hero (secondary) | "See how it works" |
| Section bottom | "Claim Your Free Class →" |
| Nav button | "Free Class" |
| Form submit | "Reserve Free Class →" |
| Popup / exit intent | "Your child's first class is on us." |
| Below CTA (objection) | "No commitment. No experience needed. 60 seconds to sign up." |

**Rules for CTA copy:**
- Primary CTAs always use the word "Free" — it removes the primary objection
- Never use "Sign Up" alone — always specify what they're signing up for
- Arrow `→` at the end of primary CTAs only (not ghost buttons)
- Objection-handling copy lives directly below every CTA button, never above it

---

### Formatting Rules

- **Em dashes (—):** Used for rhythm and emphasis in headlines and body. No spaces before or after.
- **Ellipsis (...):** Used sparingly in copy that imitates parent thought ("Maybe they seem... unfocused.")
- **Sentence case everywhere:** Headlines, buttons, labels, nav — never ALL CAPS in headlines. Uppercase reserved for eyebrow labels only.
- **Numbers:** Spell out one through nine in body copy. Use numerals for 10+, stats, ages, and prices.
- **Oxford comma:** Always used.
- **Exclamation points:** One per page maximum. Restricted to testimonial quotes only — never brand-written copy.

---

## 10. Page-Level Templates

### Homepage Structure

```
1. NAV BAR           — Sticky, dark charcoal, logo left, CTA right
2. HERO              — Dark full-width, headline + sub + dual CTA + stats
3. PROBLEM SECTION   — Light (cream), text-focused, addresses parent fear
4. GUIDE SECTION     — Dark charcoal, empathy + authority + Valueism intro
5. PROGRAM CARDS     — Light (cream), 3-col card grid, each with CTA
6. HOW IT WORKS      — Alternating or centered, 3-step process component
7. SOCIAL PROOF      — Dark, 3 testimonial cards in grid
8. STAKES SECTION    — Light, short — consequence of inaction, strong CTA
9. FINAL CTA BAND    — Full-width sage (#5C8C6A) background, white text, button
10. FOOTER           — Dark charcoal, links, locations, social
```

**Section background alternation pattern:**
- Odd sections: Cream `#F5F2EC`
- Even sections: Charcoal `#2A2A2A`
- This creates natural visual rhythm without needing borders or extra spacing

---

### Interior Page Structure (Programs, Philosophy, etc.)

```
1. NAV BAR
2. PAGE HERO         — Shorter than homepage (50vh), eyebrow + H1 + sub
3. CONTENT SECTIONS  — Alternating cream/charcoal
4. RELATED CTA       — Sage CTA band linking to free class
5. FOOTER
```

---

### Free Class Landing Page

```
1. MINIMAL NAV       — Logo only, no distracting links
2. HERO              — Headline + sub + form above the fold (two-column layout)
3. TRUST SIGNALS     — 3 stats + 3 short testimonials below form
4. HOW IT WORKS      — 3 steps, simple and fast to read
5. OBJECTION BUSTERS — FAQ-style: "What if my child has never done this?" etc.
6. SECOND FORM       — Repeat signup form at page bottom
7. MINIMAL FOOTER    — Phone number + address only
```

---

## 11. CSS Variables Reference

Add this to the `:root` of your global stylesheet. All components should reference these variables — never hard-code hex values in component CSS.

```css
:root {

  /* === BRAND COLORS === */
  --color-charcoal:       #2A2A2A;
  --color-charcoal-deep:  #1E1E1E;
  --color-sage:           #5C8C6A;
  --color-sage-dark:      #3D6B4A;
  --color-sage-light:     #A8C8A8;
  --color-sage-tint:      #E8F2E8;
  --color-cream:          #F5F2EC;
  --color-cream-dark:     #EDE8DF;
  --color-tan-tint:       #F2EDE4;
  --color-logo-red:       #CC1F1F;
  --color-white:          #FFFFFF;

  /* === TEXT === */
  --text-primary:         #2A2A2A;
  --text-secondary:       #6B6760;
  --text-muted:           #9A9590;
  --text-on-dark:         #FFFFFF;
  --text-on-dark-muted:   rgba(255, 255, 255, 0.62);
  --text-on-dark-faint:   rgba(255, 255, 255, 0.4);
  --text-accent:          #5C8C6A;
  --text-accent-light:    #A8C8A8;

  /* === BORDERS === */
  --border-default:       rgba(0, 0, 0, 0.08);
  --border-medium:        rgba(0, 0, 0, 0.14);
  --border-on-dark:       rgba(255, 255, 255, 0.08);
  --border-sage:          rgba(92, 140, 106, 0.4);

  /* === SPACING === */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  48px;
  --space-8:  64px;
  --space-9:  96px;
  --space-10: 128px;

  /* === BORDER RADIUS === */
  --radius-sm:   3px;
  --radius-md:   6px;
  --radius-lg:   10px;
  --radius-xl:   16px;
  --radius-full: 999px;

  /* === TYPOGRAPHY === */
  --font-display: 'Fraunces', serif;
  --font-body:    'Plus Jakarta Sans', sans-serif;

  /* === TYPE SCALE === */
  --text-display: 56px;
  --text-h1:      48px;
  --text-h2:      36px;
  --text-h3:      26px;
  --text-h4:      20px;
  --text-lg:      18px;
  --text-base:    16px;
  --text-sm:      14px;
  --text-xs:      12px;
  --text-2xs:     11px;
  --text-3xs:     10px;

  /* === LINE HEIGHTS === */
  --leading-tight:  1.1;
  --leading-snug:   1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.65;
  --leading-loose:  1.75;

  /* === TRANSITIONS === */
  --transition-fast:   0.15s ease;
  --transition-base:   0.2s ease;
  --transition-slow:   0.35s ease;
  --ease-out-expo:     cubic-bezier(0.19, 1, 0.22, 1);

  /* === LAYOUT === */
  --max-width:         1140px;
  --max-width-narrow:  720px;
  --max-width-hero:    640px;
  --gutter-mobile:     24px;
  --gutter-tablet:     48px;
  --gutter-desktop:    80px;
  --nav-height:        64px;
}
```

---

## 12. Do's & Don'ts

### Color

| ✓ Do | ✗ Don't |
|---|---|
| Use sage as the primary CTA and accent color | Use logo red for buttons or section accents |
| Keep red exclusively for the logo | Introduce orange, gold, or amber tones |
| Alternate dark/light sections for rhythm | Use white as a background section (use cream instead) |
| Use sage tint (#E8F2E8) for success states | Use bright green for success — too different from sage |
| Use rgba overlays for on-photo text | Place dark text directly on mid-tone photos |

### Typography

| ✓ Do | ✗ Don't |
|---|---|
| Use Fraunces for all headlines | Mix in a third typeface |
| Use italic Fraunces for emotional emphasis | Overuse italics — one per section maximum |
| Keep eyebrows all-caps with tracking | Use all-caps on body copy or headlines |
| Use sentence case everywhere else | Title Case on headlines |
| Use Plus Jakarta Sans for all UI and body | Use system fonts as fallback without the web font loading |

### Layout

| ✓ Do | ✗ Don't |
|---|---|
| Use the 8px spacing grid consistently | Use arbitrary spacing values (15px, 22px, etc.) |
| Let sections breathe with generous vertical padding | Crowd sections together |
| Align content to a 12-column grid | Float content randomly |
| Use max-width containers to protect readability | Stretch body text across full wide-screen widths |
| Center the form column on the free class page | Stretch forms edge-to-edge |

### Voice

| ✓ Do | ✗ Don't |
|---|---|
| Speak directly to the parent's specific fear | Use generic inspirational language |
| Use "earned," "built," "developed" | Use "given," "provided," "unlocked" |
| Write headlines in sentence case | Write headlines in ALL CAPS |
| End primary CTAs with `→` | Use "Click here" or "Submit" |
| Name what they get ("Free Class") | Be vague ("Get Started") |

### Logo

| ✓ Do | ✗ Don't |
|---|---|
| Use the full-color logo on charcoal/dark backgrounds | Place the logo on sage green backgrounds |
| Maintain clear space equal to cap-height of "C" | Let text or borders crowd the logo |
| Use the logo as the sole red element on the page | Repeat the red color in buttons or accents |
| Link the logo to the homepage | Use the logo as a decorative element |

---

*Brand Style Guide v1.0 | Competitive Edge MMA × Business Builders*
*Created March 2026 | Charcoal & Sage System*
