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
- **Avatar**: Replace `static/images/avatar.jpg` with your photo

## Build for Production

```bash
hugo
```

Output goes to `public/`. Deploy to Cloudflare Pages, Netlify, Vercel, or any static host.

## Deploy to Cloudflare Pages (dev.stephenadei.nl)

1. **Push to GitHub** (if not already):
   ```bash
   git remote add origin git@github.com:stephenadei/personal-dev-site.git
   git push -u origin main
   ```

2. **Cloudflare Dashboard** → Pages → Create project → Connect to Git

3. **Build settings**:
   - Build command: `hugo`
   - Build output directory: `public`
   - Deploy command: `npm run deploy` (or `npx wrangler pages deploy public`)
   - Environment variables:
     - `HUGO_VERSION` = `0.157.0` (or latest)
     - `HUGO_ENV` = `production`

4. **Custom domain**: Pages → Your project → Custom domains → Set up custom domain → `dev.stephenadei.nl`

5. If `stephenadei.nl` is already on Cloudflare, Cloudflare will add the DNS record automatically. Otherwise add a CNAME: `dev` → `your-project.pages.dev`
