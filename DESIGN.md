---
version: alpha
name: Krishna Suresh Portfolio
description: Design language for the Krishna Suresh portfolio site.
colors:
  background: hsl(252 12% 6%)
  foreground: hsl(250 12% 97%)
  card: hsl(252 10% 10%)
  card-foreground: hsl(250 12% 97%)
  popover: hsl(252 10% 10%)
  popover-foreground: hsl(250 12% 97%)
  primary: hsl(258 88% 68%)
  primary-foreground: hsl(252 30% 8%)
  primary-hover: hsl(258 88% 74%)
  primary-deep: hsl(256 62% 52%)
  primary-soft: hsl(258 40% 16%)
  secondary: hsl(252 8% 15%)
  secondary-foreground: hsl(250 12% 97%)
  muted: hsl(252 8% 15%)
  muted-foreground: hsl(252 6% 64%)
  accent: hsl(258 88% 68%)
  accent-foreground: hsl(252 30% 8%)
  destructive: hsl(358 72% 58%)
  destructive-foreground: hsl(0 0% 100%)
  border: hsl(252 8% 17%)
  input: hsl(252 8% 17%)
  ring: hsl(258 88% 68%)
  available: hsl(160 55% 48%)
  status-progress: hsl(38 92% 60%)
  tag-ai: hsl(258 88% 68%)
  tag-experience: hsl(174 60% 55%)
  tag-interaction: hsl(32 92% 62%)
  tag-conversational: hsl(330 70% 66%)
  tag-research: hsl(140 48% 56%)
  tag-healthcare: hsl(205 85% 64%)
typography:
  sans:
    fontFamily: Inter
    fontSize: 17px
    lineHeight: 1.75
  serif:
    fontFamily: Playfair Display
rounded:
  base: 0.75rem
---

## Overview

A single-page-per-topic portfolio presenting case studies, writing and a personal profile. The interface is dark, editorial and typographic: serif headings over a violet-biased neutral field, with one accent hue carrying all emphasis.

## Colors

Neutrals carry a violet bias so surfaces and accent read as one family; do not introduce grey-neutral or blue-neutral surfaces.

Use `primary` only for interactive and emphasis states: links, hover, focus rings, active navigation and key figures. Use `primary-deep` at low opacity only for ambient depth such as the hero wash and card hover shadow. Use `available` for the availability indicator and `status-progress` for unfinished-work status only.

Tag hues come from the `tag-*` tokens and are shared by case-study cards and the expertise graph; a tag's hue must match in both.

Never write raw color utilities such as `text-white`, `bg-black`, palette classes like `amber-500`, or hex literals in components; reference the tokens above.

## Typography

Headings `h1`–`h4` use the serif family; all interface and body copy uses the sans family. Micro-labels use the shared eyebrow style rather than local size and tracking values.

Page titles, section titles and body copy each use the shared type utilities so scale never varies per page.

## Layout

Reading pages use a `max-w-3xl` column; index, grid and case-study body pages use `max-w-5xl`.

Vertical rhythm comes from the shared section utilities, not per-page padding. Stacked sections on a shared background use the tight variant. Major landing-page sections are separated by the shared band treatment.

## Elevation & Depth

Panels use the shared surface treatment: translucent card fill, one-pixel border, base radius. Depth is expressed with the accent shadow at low opacity, never with heavier borders.

## Shapes

Corners use only three steps derived from the base radius: small for chips and inputs, medium for buttons, large for cards and media. Pills and status dots are fully round. Do not use arbitrary radius literals.

## Components

Chips, tags and status labels are all rendered by the shared Pill primitive with its `outline`, `filled` and `subtle` variants; do not hand-roll a chip.

Scroll-in content is wrapped by the shared reveal component so entrance timing is identical across pages.

Custom interactive controls that are not the Pill or link primitives carry both the shared press feedback and the shared focus ring; do not write per-component focus outlines.

## Do's and Don'ts

- Do route every color, shadow and radius through a token.
- Don't animate with plain `ease-out` or `transition-all`; use the named easing tokens and name the transitioned properties.
- Don't reintroduce the previous blue or terracotta accents.
- Don't place a monogram-in-a-shape mark in place of the wordmark.
