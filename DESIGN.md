---
version: alpha
name: Krishna Suresh Portfolio
description: Design language for a warm, software-forward product design portfolio.
colors:
  background: hsl(48 22% 94%)
  foreground: hsl(216 42% 18%)
  card: hsl(47 28% 97%)
  card-foreground: hsl(216 42% 18%)
  popover: hsl(47 28% 97%)
  popover-foreground: hsl(216 42% 18%)
  primary: hsl(228 73% 49%)
  primary-foreground: hsl(48 22% 97%)
  primary-hover: hsl(228 70% 42%)
  secondary: hsl(225 38% 90%)
  secondary-foreground: hsl(216 42% 18%)
  muted: hsl(225 38% 90%)
  muted-foreground: hsl(216 20% 40%)
  accent: hsl(228 73% 49%)
  accent-foreground: hsl(48 22% 97%)
  border: hsl(221 22% 80%)
  input: hsl(221 22% 80%)
  ring: hsl(228 73% 49%)
typography:
  sans:
    fontFamily: Manrope Variable
    fontSize: 16px
    lineHeight: 1.65
  metadata:
    fontFamily: Manrope Variable
rounded:
  base: 0.375rem
---

## Overview

A warm, image-led portfolio for an AI-forward product designer and engineer. The interface is clear and precise without feeling like a corporate design system; visual character comes from real project imagery, confident type, and restrained Persian Blue accents.

## Colors

Warm off-white, deep ink, and cool pale-blue surfaces carry the interface. Persian Blue is the only brand accent; related blue and indigo shades may distinguish capability metadata without becoming a multicolor identity.

Do not use gradients, blurred glow, or saturated accent fields. Case-study-specific themes may override semantic tokens only inside their detail pages.

## Typography

Manrope is the only display and reading face. Eyebrows, chapter numbers, dates, categories, and compact metadata use smaller size and weight rather than a separate monospace face. Headings use weight and scale—not a second typeface—for hierarchy.

Letter spacing remains zero. Avoid oversized display text that crowds out project evidence.

## Layout

Pages align to a shared wide container. Full-width section bands create rhythm while their inner content shares one left edge; visible grid wallpaper and ornamental side rails are not used.

Major sections are separated by one-pixel rules and surface changes, not gradient bands. Reading copy stays narrower inside the shared shell.

## Elevation & Depth

Use flat surfaces and border contrast. Cards do not glow or float. Hover feedback uses a small translation, border change, image crop, or color-channel reveal.

## Shapes

Use square to subtly rounded corners. The base radius is the maximum for content panels and media; compact controls may be fully round only when their established meaning requires it.

## Components

Project tiles lead with real imagery, then title, description, and compact metadata. The homepage relationship graph is a functional exception: every node maps to a real project tag and links directly to filtered work using restrained blue and indigo emphasis.

Reveal motion is short, directional, and blur-free. Controls use the shared press and focus treatments.

## Do's and Don'ts

- Do make project evidence the dominant visual material.
- Do use Persian Blue as a restrained, consistent interactive signal.
- Don't use multicolor brand stripes, visible grid wallpaper, serif typography, ambient gradients, backdrop blur, magnetic movement, floating particles, or glow shadows.
- Don't introduce decorative network diagrams. The single homepage graph is allowed only because its nodes represent real project tags and lead to filtered work.
