# TecHBK — techbk.dev

Marketing and portfolio website for **TecHBK**, a software development
consulting business working remotely and on-site from South Africa and the
DRC to the world.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 with shadcn/ui (radix-sera style, Tabler icons)
- GSAP ScrollTrigger scroll storytelling, restrained Lenis smooth scrolling
- pnpm

## Develop

```bash
pnpm install
portless techbk pnpm dev   # https://techbk.localhost
# or: pnpm dev
```

## Verify

```bash
pnpm lint
pnpm build
```

## Structure

- `app/` — routes: `/`, `/services`, `/work`, `/work/[slug]`, `/about`,
  `/contact`, `/privacy`, `/terms`, plus `not-found`, `error`, `sitemap`,
  `robots`, `opengraph-image`
- `components/home/` — homepage scenes (loader, hero, where-we-enter,
  process timeline, climax, final CTA)
- `components/ui/` — shadcn/ui primitives (add via `pnpm dlx shadcn add`)
- `lib/` — content data: `site.ts`, `services.ts`, `process.ts`, `work.ts`
- `hooks/use-gsap.ts` — scoped GSAP setup with cleanup + reduced-motion guard
- `public/assets/` — approved brand assets and case-study screenshots

## Conventions

- The name is always written **TecHBK**.
- Case studies are client-approved only; sections without approved
  information are omitted, never placeholder-filled.
- Reduced motion: Lenis and all GSAP scenes are disabled; content renders
  as a static sequence.
