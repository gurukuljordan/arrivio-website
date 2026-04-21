# ARRIVIO Website

Official company website for ARRIVIO on [arrivioai.com](https://arrivioai.com).

## Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS
- SEO metadata via `metadata`, `robots.ts`, and `sitemap.ts`

## Routes

- `/` Homepage
- `/product` Arrivio App page
- `/company` Company page
- `/blog` Knowledge Hub
- `/blog/[slug]` Reusable article layout
- `/support` Support page
- `/privacy` Privacy Policy
- `/terms` Terms of Use
- Aliases: `/privacy-policy` and `/terms-of-use`

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` for transactional email delivery
- `EARLY_ACCESS_TO_EMAIL` destination inbox for signups
- `EARLY_ACCESS_FROM_EMAIL` verified sender in Resend
- `EMAIL_PASSWORD` Zoho app password for `hello@arrivioai.com` (used by `/api/contact`)

## Build for production

```bash
npm run build
npm run start
```

## Deployment

This project is Vercel-ready.

- Framework preset: Next.js
- Root directory: `arrivio-website`
- Production domain: `arrivioai.com`
- Add the email env vars in Vercel Project Settings
