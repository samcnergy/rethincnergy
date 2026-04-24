# ReTHINK CNERGY — Corporate Website

Parent-brand authority hub, product portfolio, and lead funnel for
[ReTHINK CNERGY, Inc.](https://rethinkcnergy.com) — a California-based boutique AI
strategy and consulting firm.

## Stack

- **Framework**: Next.js 15 (App Router, RSC)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4 (via `@theme` tokens in `app/globals.css`)
- **UI**: shadcn/ui primitives (Radix under the hood)
- **Forms**: react-hook-form + zod
- **Email**: Resend
- **MDX**: `next-mdx-remote` + `gray-matter` for the Insights hub
- **Animation**: framer-motion (sparingly)
- **Deployment**: Render

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in what you have
cp .env.example .env.local

# 3. Start the dev server
npm run dev
# → http://localhost:3000
```

Without a `RESEND_API_KEY`, the contact form still validates and appends to
`./.data/leads.jsonl`; it just skips the outbound email.

### Useful scripts

```bash
npm run dev         # Next.js dev server with HMR
npm run build       # Production build
npm start           # Run the production build locally
npm run lint        # ESLint (next/core-web-vitals + TypeScript)
npm run typecheck   # Strict TypeScript check, no emit
```

## Project layout

```
app/
  (marketing)/        # All public pages live inside this route group
    page.tsx          # Home
    about/
    services/
    products/         # overview + 4 subpages
    insights/         # MDX-driven hub
    faq/
    contact/
  api/
    contact/          # POST handler: validates, emails via Resend, persists to JSONL
    lead/             # POST handler: qualified-lead passthrough
  layout.tsx          # Root layout (fonts, header/footer, Org JSON-LD)
  sitemap.ts          # Next metadata sitemap
  robots.ts           # AI-crawler-friendly robots
components/
  ui/                 # shadcn primitives (Button, Card, Accordion, Select, …)
  layout/             # Header, Footer, Container, BrandMark
  sections/           # Page sections (Hero, ProductGrid, Philosophy, …)
  forms/              # ContactForm (client component)
content/
  insights/           # MDX seed articles
lib/
  articles.ts         # MDX indexing + reading-time
  faqs.ts             # 30+ small-business AI FAQs
  products.ts         # Product portfolio data + UTM helpers
  seo.ts              # Metadata builder + Organization/Person JSON-LD
  utils.ts            # cn(), SITE_URL, absoluteUrl()
public/
  llms.txt            # Plain-English summary for AI crawlers
  og/                 # Open Graph assets
```

## Environment variables

| Key | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | prod | Base URL for canonical links, sitemap, JSON-LD |
| `RESEND_API_KEY` | prod | Transactional email via Resend |
| `CONTACT_EMAIL_TO` | prod | Where contact-form submissions are delivered |
| `CONTACT_EMAIL_FROM` | prod | Verified sender address for Resend |
| `LEADS_DIR` | optional | Filesystem path for `leads.jsonl` (point at a Render disk in prod) |

## Deploying to Render

The repo ships with `render.yaml` so Render can provision the service in one
click via *Blueprint*.

1. Push the repo to GitHub (already wired to `github.com/samcnergy/rethincnergy`).
2. In Render, **New → Blueprint** and point it at the repo.
3. After the service is created, set the sensitive env vars in the dashboard
   (currently only `RESEND_API_KEY`).
4. Point `rethinkcnergy.com` at the Render service via CNAME / A records.

### Manual service (no Blueprint)

If you prefer to create the service by hand:

- **Build command**: `npm install && npm run build`
- **Start command**: `npm start`
- **Node version**: `20`
- **Health check path**: `/`
- Attach a 1 GB disk mounted at `/var/data/leads` and set
  `LEADS_DIR=/var/data/leads` so `leads.jsonl` survives restarts.

## GEO / AEO

This site is built for AI crawlers as first-class citizens:

- `public/llms.txt` — [llmstxt.org](https://llmstxt.org)-style summary
- `app/robots.ts` — explicit allow-list for GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended, Applebot-Extended, and others
- JSON-LD on every page: `Organization`, `Person`, `Service`, `Product`,
  `Article`, `FAQPage`, `BreadcrumbList`
- Answer-shaped headings and FAQ content for direct lifting by answer engines

## License

Proprietary · © ReTHINK CNERGY, Inc.
