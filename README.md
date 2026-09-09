# Personal Dev Site

A minimalist personal developer website built with [Hugo](https://gohugo.io) and the [Coder theme](https://github.com/luizdepra/hugo-coder).

## Quick Start

```bash
cd /home/stephen/projects/personal-dev-site
hugo server
```

Open [http://localhost:1313](http://localhost:1313) in your browser.

## Project Structure

```
personal-dev-site/
├── content/          # Markdown content (about, blog posts, projects)
├── static/           # Static assets (images, favicons)
├── themes/coder/     # Hugo Coder theme (git submodule)
└── hugo.toml         # Site configuration
```

## Customization

- **Site config**: Edit `hugo.toml` — author, social links, menu, etc.
- **About page**: `content/about.md`
- **Blog posts**: Add `.md` files to `content/posts/`
- **Projects**: Edit `content/projects.md` or add project list
- **Avatar**: Replace `static/images/avatar.png` with your photo
- **Diagrams**: Follow workspace [docs/development/DIAGRAM_AND_IMAGING_HOUSE_STYLE.md](../../docs/development/DIAGRAM_AND_IMAGING_HOUSE_STYLE.md)

## Build for Production

```bash
hugo
```

Output goes to `public/`. Deploy to Cloudflare Pages, Netlify, Vercel, or any static host.

## Deploy via Docker + Cloudflare DNS (dev.stephenadei.nl)

Self-hosted via Docker Compose, with Cloudflare DNS pointing to your server.

```bash
cd /home/stephen/projects/personal-dev-site
docker compose up -d --build
```

Zie `infrastructure/DEV_STEPHENADEI_DOMAIN.md` voor:
- DNS (A-record `dev` → VPS-IP, Cloudflare proxy aan)
- Nginx reverse proxy config
- SSL (automatisch via Cloudflare)
