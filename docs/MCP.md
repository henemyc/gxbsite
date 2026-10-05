# MCP — 21st.dev connection

Status: **CONFIGURED**
Endpoint: `https://21st.dev/api/mcp` (streamable HTTP)
Auth: `x-api-key` header (`Authorization: Bearer <key>` also accepted)

## Client configs in this repo

| File | Client |
| --- | --- |
| `mcp.config.json` | Canonical config — paste into any client that reads `mcpServers` JSON |
| `.mcp.json` | Claude Code (project scope, auto-loaded) |
| `.cursor/mcp.json` | Cursor |
| `.vscode/mcp.json` | VS Code / Copilot (`servers` shape) |

**Other clients**

- **Windsurf** — copy `mcp.config.json` into `~/.codeium/windsurf/mcp_config.json`
- **Claude Desktop** — copy the `mcpServers` block into `claude_desktop_config.json`
- **Zed** — add under `context_servers` in `settings.json`
- **Claude Code CLI one-liner**:

```bash
claude mcp add --transport http 21st https://21st.dev/api/mcp \
  --header "x-api-key: $TWENTYFIRST_API_KEY"
```

## Verify

List tools from your client (or `claude mcp list`). You should see:

**Search & browse (free tier)**

- `search` — find components, themes, templates with filters, as plain data
- `search_picker` — same, with inline visual picker where the host supports it
- `search_logo` — brand/UI SVG logos by name
- `get_component` — component code + demo (free tier reports remaining daily retrievals)
- `list_bookmarks` · `bookmark` · `create_bookmark_list` · `add_to_list`
- `list_teams` · `list_team_libraries` · `list_team_components`

**Manage your own items (API key required)**

- `edit_component` / `delete_component`, `edit_theme` / `delete_theme`, `edit_template` / `delete_template`
- `get_profile` / `edit_profile` / `upload_profile_media`
- `get_usage` — account tier, `aiGenerationEnabled`, remaining free daily quota

**AI generation** — `generate`, `iterate_generation`, `get_generation`, `get_take`
(the server only lists `generate` / `iterate_generation` when AI is enabled on the account;
`get_generation` / `get_take` remain available for reading existing drafts.)

### Verify without a client

```bash
# 1) initialize → capture the returned mcp-session-id response header
curl -i -N https://21st.dev/api/mcp \
  -H "x-api-key: $TWENTYFIRST_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"curl","version":"1.0"}}}'

# 2) tools/list (pass the session id from step 1, after notifications/initialized)
curl -N https://21st.dev/api/mcp \
  -H "x-api-key: $TWENTYFIRST_API_KEY" \
  -H "mcp-session-id: <session-id>" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/list","params":{}}'
```

A bare `GET` on the endpoint returning an error is normal — streamable HTTP
expects the POST handshake above.

## Security

The key lives in the local client configs above. Masked form:
`21st_sk_9498…155c`. If you publish this repo, rotate the key or move it to an
environment variable (`TWENTYFIRST_API_KEY`) and reference it via each client's
secret-input mechanism.

## How it composes

```
ui-ux-pro-max (reasoning engine)          21st.dev (component supply)
─────────────────────────────────         ───────────────────────────
product rule → design system tokens  ──►  search → get_component → assemble & ship
```

The skill decides *what* to build (pattern, style, palette, typography,
anti-patterns); 21st supplies production components to fill that system.
