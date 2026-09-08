---
version: alpha
name: Krishna Suresh Portfolio
description: Design language for a precise, AI-forward product design portfolio.
colors:
  background: hsl(0 0% 4%)
  foreground: hsl(60 5% 96%)
  card: hsl(0 0% 7%)
  card-foreground: hsl(60 5% 96%)
  popover: hsl(0 0% 7%)
  popover-foreground: hsl(60 5% 96%)
  primary: hsl(217 89% 61%)
  primary-foreground: hsl(0 0% 100%)
  primary-hover: hsl(217 89% 67%)
  secondary: hsl(0 0% 11%)
  secondary-foreground: hsl(60 5% 96%)
  muted: hsl(0 0% 11%)
  muted-foreground: hsl(0 0% 62%)
  accent: hsl(217 89% 61%)
  accent-foreground: hsl(0 0% 100%)
  border: hsl(0 0% 18%)
  input: hsl(0 0% 18%)
  ring: hsl(217 89% 61%)
  signal-blue: hsl(217 89% 61%)
  signal-red: hsl(4 79% 56%)
  signal-yellow: hsl(45 97% 50%)
  signal-green: hsl(136 53% 43%)
typography:
  sans:
    fontFamily: Geist Variable
    fontSize: 16px
    lineHeight: 1.65
  mono:
    fontFamily: Geist Mono Variable
rounded:
  base: 0.375rem
---

## Overview

A grid-led portfolio for an AI-forward product designer and engineer. The interface is neutral, precise, and information-rich; visual character comes from structure, project imagery, and a controlled four-color signal system rather than decorative effects.

## Colors

Black, white, and neutral gray carry the interface. Google blue is the primary interactive color. Red, yellow, and green join blue only for capability coding, registration stripes, and small status signals.

Do not use the four-color system as a full-page gradient, blurred glow, orb, haze, or decorative background. Case-study-specific themes may override semantic tokens only inside their detail pages.

## Typography

Geist Sans is the only display and reading face. Geist Mono is reserved for eyebrows, chapter numbers, dates, categories, and compact metadata. Headings use weight and scale—not a second typeface—for hierarchy.

Letter spacing remains zero. Avoid oversized display text that crowds out project evidence.

## Layout

Pages align to a shared wide container and a visible modular grid. Asymmetry is created through column spans, offsets, and image scale while preserving clear alignment.

Major sections are separated by one-pixel rules and surface changes, not gradient bands. Reading copy stays narrower inside the shared shell.

## Elevation & Depth

Use flat surfaces and border contrast. Cards do not glow or float. Hover feedback uses a small translation, border change, image crop, or color-channel reveal.

## Shapes

Use square to subtly rounded corners. The base radius is the maximum for content panels and media; compact controls may be fully round only when their established meaning requires it.

## Components

Project tiles lead with real imagery, then title, description, and compact metadata. Capability cells link directly to filtered work and show the projects behind each capability.

Reveal motion is short, directional, and blur-free. Controls use the shared press and focus treatments.

## Do's and Don'ts

- Do make project evidence the dominant visual material.
- Do use four-color accents as precise signals.
- Don't use serif typography, violet accents, ambient gradients, backdrop blur, magnetic movement, floating particles, or glow shadows.
- Don't introduce decorative network diagrams when a functional matrix communicates the relationship more clearly.
