# UI/UX Pro Max — Install Manifest

Status: **INSTALLED**
Repository: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
Upstream tree: `09170eec67eefd46a7ae85de61b40c194020f997` (main)
License: MIT

## What was installed

| Layer | Location | Notes |
| --- | --- | --- |
| Official CLI + bundled engine | `node_modules/ui-ux-pro-max-cli` | npm package; bundles `search.py`, `core.py`, `design_system.py`, all `data/*.csv`, templates |
| Agent skill definition | `.claude/skills/ui-ux-pro-max/SKILL.md` | Activates on UI/UX requests |
| This manifest | `.claude/skills/ui-ux-pro-max/INSTALL.md` | Provenance |
| Live console (web) | `src/` (Vite + React) | Design Intelligence Console rendering the skill's real data |

## Assets inside the engine

- 192 industry reasoning rules (Tech/SaaS, Finance, Healthcare, E-commerce, Services, Creative, Lifestyle, Emerging Tech)
- 79 searchable UI styles (50 active · 29 supplemental · 9 deprecated aliases)
- 192 color palettes (19-token palettes aligned 1:1 with product types)
- 74 curated font pairings (Google Fonts)
- 34 landing-page patterns · 25 chart types · 22 tech stacks · 119 UX guidelines
- 105 curated icon rows + 1,512-icon Phosphor manifest · 1,934 approved Google Fonts

## Data endpoints used by the console

The live web console resolves catalog data from the upstream raw files
(read-only, CORS-open), with an offline bundled subset as fallback:

- `src/ui-ux-pro-max/data/styles.csv`
- `src/ui-ux-pro-max/data/colors.csv`
- `src/ui-ux-pro-max/data/typography.csv`

## MCP — 21st.dev (connected)

An MCP client connection to **21st.dev** is configured for this project
(streamable HTTP, `x-api-key` auth):

- `mcp.config.json` — canonical `mcpServers` config for any client
- `.mcp.json` — Claude Code project scope
- `.cursor/mcp.json` — Cursor
- `.vscode/mcp.json` — VS Code / Copilot
- `docs/MCP.md` — per-client setup, tool inventory, curl verification

Expected tools: `search`, `search_picker`, `search_logo`, `get_component`,
bookmarks/teams utilities, item management (`edit_*` / `delete_*`), `get_usage`,
and `generate` / `iterate_generation` when AI is enabled on the account.

## Refresh

```bash
npm install ui-ux-pro-max-cli@latest
npx uipro update
```
