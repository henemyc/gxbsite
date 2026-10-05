---
name: ui-ux-pro-max
description: >-
  Design intelligence for building professional UI/UX across platforms and
  frameworks. Use whenever the user asks to build, design, create, implement,
  review, fix, or improve UI/UX — landing pages, dashboards, apps, portfolios,
  mobile UIs, design systems. Generates a complete tailored design system
  (pattern + style + colors + typography + effects + anti-patterns) from 192
  industry-specific reasoning rules, 79 searchable UI styles, 192 color
  palettes, 74 font pairings, 34 landing patterns, 25 chart types, 22 tech
  stacks and 119 UX guidelines.
license: MIT
source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
---

# UI/UX Pro Max

An AI skill that provides design intelligence for building professional UI/UX.

## Workflow

1. **Identify the product type** — map the request to one of the 192 product
   categories (SaaS, fintech, healthcare, e-commerce, portfolio, gaming, ...).
2. **Run the reasoning engine** — the bundled `search.py` performs a
   multi-domain BM25 search over styles, palettes, landing patterns, font
   pairings and UX rules, then assembles a design system.
3. **Generate the UI** with the recommended pattern, style, colors, typography
   and key effects. Respect the anti-patterns list for the industry.
4. **Run the pre-delivery checklist** before considering work done.

## Commands

The full engine (Python 3, standard library only, no network calls) is vendored
in the npm package `ui-ux-pro-max-cli` (installed as a project dependency).
Resolve data/scripts from `node_modules/ui-ux-pro-max-cli` or re-materialize
platform files with:

```bash
uipro init --ai claude        # install skill files for Claude Code
uipro update                  # refresh skill files from installed CLI package
uipro versions                # list available versions
```

Direct design-system generation (when skill files are present):

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "<Project Name>"
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elegant serif" --domain typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dashboard" --domain chart
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "form validation" --stack react
```

## Domains

`style` · `color` · `typography` · `chart` · `ux` · `icons` · `landing` ·
`product` · `stack` · `app-interface`

## Pre-delivery checklist

- [ ] No emojis as icons (use SVG: Lucide / Heroicons)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Interaction timing follows the platform, component, and user preference
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Text, chips, and badges reflow without clipping or broken labels
- [ ] Responsive: 375px, 768px, 1024px, 1440px

## Notes

- Balanced heading wrapping is a progressive enhancement, not a guarantee.
- Badge meaning must not rely on color alone.
- Rapid interactions may cancel animation; final semantic state, focus and
  content must remain correct.
