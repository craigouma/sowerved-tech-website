# Sowerved Tech

Marketing site for Sowerved Tech, a Nairobi-based software, web, and machine
learning studio. Static site built with Astro, hand-authored CSS design
tokens, and TypeScript. No client-side framework, no CMS.

Live at [sowerved.tech](https://sowerved.tech).

## Project structure

```text
/
├── public/
│   ├── brand/            logo, apple touch icon
│   ├── team/             team member photos
│   ├── clients/          client logos for the marquee
│   ├── fonts/             self-hosted CMU Serif/Typewriter woff2 files
│   ├── og/               Open Graph share image
│   ├── favicon.svg, favicon.ico, icon-192.png, icon-512.png
│   ├── site.webmanifest
│   └── .htaccess         maps 404s to /404.html on the Apache host
├── src/
│   ├── components/       Nav, Footer, Button, ServiceCard, TeamCard, etc.
│   ├── config/
│   │   └── site.ts       every editable value: nav links, copy, team,
│   │                     services, research papers, social links, GA4 ID,
│   │                     Calendar booking URL, site metadata
│   ├── layouts/
│   │   └── Layout.astro  shared <head>, JSON-LD, theme script, analytics
│   ├── pages/
│   │   ├── index.astro       Home
│   │   ├── studio.astro      Studio (team, values, Person JSON-LD)
│   │   ├── research.astro    Published research
│   │   ├── contact.astro     Start a project
│   │   └── 404.astro
│   └── styles/
│       ├── tokens.css    colors, spacing, radius, type scale (light + dark)
│       └── base.css      resets and shared global rules
└── package.json
```

Everything a client would ask to change (copy, links, team, research
entries, phone/email, social links, the GA4 measurement ID, the Google
Calendar booking URL) lives in `src/config/site.ts`. Start there before
touching a page or component.

## Design system

- Colors, spacing, radius, and type scale are CSS custom properties in
  `src/styles/tokens.css`, with a light theme (default) and a
  `[data-theme="dark"]` override for every token.
- Headings and labels use Computer Modern Serif/Typewriter (self-hosted,
  subset woff2 in `public/fonts/`); body text uses Geist Sans.
- Dark mode is opt-in via a toggle in the nav (desktop) and drawer (mobile),
  persisted to `localStorage`. It never follows the OS preference; light is
  always the default for a first-time visitor.

## Commands

| Command                  | Action                                         |
| :------------------------ | :----------------------------------------------- |
| `npm install`              | Install dependencies                             |
| `astro dev --background`   | Start the dev server in the background           |
| `astro dev stop`           | Stop the background dev server                   |
| `astro dev status`         | Check whether the background dev server is up    |
| `astro dev logs`           | Tail the background dev server's logs            |
| `npm run build`             | Build the static site to `./dist/`               |
| `npm run preview`           | Serve the built `./dist/` locally                |

## Integrations

- **Google Calendar scheduling button** (`SchedulingButton.astro`) renders
  Google's real booking widget, configured with `GOOGLE_CALENDAR_BOOKING_URL`
  in `site.ts`.
- **Google Analytics 4** (`GA4_MEASUREMENT_ID` in `site.ts`), loaded in
  `Layout.astro`. Cross-domain linker decoration is explicitly disabled
  (`gtag("set", "linker", { domains: [], accept_incoming: false })`) so
  `_gl`/`_ga` tracking parameters never appear in the address bar.
- **Secure Privacy** consent banner, loaded as an external script in
  `Layout.astro`.
- **JSON-LD**: `Organization` sitewide, `Person` for the founder on Studio,
  `ScholarlyArticle` for each entry in `RESEARCH_PAPERS`.

## Deployment

The site is static output (`npm run build` → `dist/`). Production is a
Webuzo/Apache VPS serving `dist/` from `/home/craigouma/public_html`. Deploy
by building locally (or pulling `main` into a build checkout on the VPS),
then copying `dist/`'s contents into `public_html`, preserving `.htaccess`.

## Documentation

Full Astro documentation: <https://docs.astro.build>
