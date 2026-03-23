# CLAUDE.md — personal-dev-site

**Room:** Photography Portfolio
**Domain:** photography
**Language:** Hugo (Go templates), Nginx

Photography portfolio site at `photo.stephenadei.nl`. Static site built with Hugo + Ananke theme. No database, no auth, no API.

---

## Commands

```bash
# Development
hugo server -D              # Dev server with drafts

# Production (Docker)
docker compose up -d --build   # Builds Hugo + serves via Nginx on :1314
docker compose logs -f
```

## Architecture

- **Hugo** static site generator with Ananke theme
- **Nginx** serves built static files in Docker
- Content in `content/`, layouts in `layouts/`, data in `data/`
- `archetypes/` — Hugo content templates (front matter defaults for `hugo new`)
- `assets/css/` — Custom CSS overrides (e.g. `custom.css`)
- `i18n/` — Hugo i18n translation files (currently empty)
- `resources/_gen/` — Hugo-generated asset cache (compiled SCSS); do not edit manually
- `scripts/` — Deploy utilities (`deploy-debug.js` — Wrangler debug wrapper)
- `themes/` — Hugo themes: `ananke` (active) and `coder`
- Port: 1314 (mapped to container port 80)
- Public URL: `https://photo.stephenadei.nl`

## Key rules

- **Static only** — no backend, no database, no API routes.
- Content edits go in `content/` markdown files.
- Theme customizations in `layouts/` (override Ananke partials).
