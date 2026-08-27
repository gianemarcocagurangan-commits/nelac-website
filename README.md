# Northeast Luzon Adventist College — website

A rebuild of the official NELAC website (https://nelacollege.edu.ph) as a fast,
accessible, statically generated site. All factual content, photographs and
contact details come from the school's own published material.

- **Framework:** [Astro](https://astro.build) 5 (static output, TypeScript)
- **Output:** plain HTML/CSS with a small amount of vanilla JS — no client
  framework, no third-party runtime dependencies, no tracking
- **Images:** the school's own photographs, optimised to WebP at build time
  with responsive `srcset`, explicit dimensions and lazy loading

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
```

```bash
npm run build    # static site into dist/
npm run preview  # serve dist/ locally
npm run check    # TypeScript + Astro diagnostics
```

Deploy `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub
Pages, or plain shared hosting).

## Editing the content

**All editable content lives in `src/content/` — you should not need to touch a
component to change what the site says.**

| File | What it controls |
| --- | --- |
| `site.ts` | School name, tagline, email, phone, address, social links, primary navigation, footer links, copyright |
| `history.ts` | The full published history, the interactive timeline, the "at a glance" figures |
| `leadership.ts` | School administration (name, position, photo) and the President's message |
| `academics.ts` | Departments, indicative fees, accrediting agencies, TESDA partnership |
| `finance.ts` | The fee table and the notice above it |
| `services.ts` | The six student services and the office list |
| `admissions.ts` | The admission steps |
| `research.ts` | Institutional Research Conferences and ACRA |
| `news.ts` | News & announcements |

Each file is commented with where its content came from and what must not be
changed without the school's confirmation.

### Common edits

**Publish a service page.** Open `src/content/services.ts`, write the
paragraphs into that service's `body` array and change `status` to
`"published"`. The "information being prepared" notice disappears
automatically.

**Add a news item.** Add an entry to the top of the `news` array in
`src/content/news.ts`. Put its image in `src/assets/images/announcements/` and
import it at the top of the file. If the item is a poster, transcribe its text
into `body` / `lists` / `figures` so it is readable on a phone and findable by
search.

**Publish the President's message.** Fill in the `body` array in
`src/content/leadership.ts`.

**Change a fee.** Edit `src/content/finance.ts`. The Academics page reads the
same figures, so both pages stay in step.

**Update contact details.** Edit `src/content/site.ts`. The header, footer,
contact page, admissions page, finance page and structured data all read from
there.

## Project structure

```
src/
  assets/images/     Original NELAC photographs, grouped by subject
  components/        Reusable UI (Header, Hero, Timeline, Gallery, forms, cards…)
  content/           ← all editable text and data
  layouts/           BaseLayout (head/SEO/shell) and PageLayout (inner pages)
  lib/search.ts      Search index, built from the content files at compile time
  pages/             One file per route
  styles/            tokens.css (design tokens) and global.css (reset + shared classes)
public/              favicon, robots.txt, Open Graph image
```

## The contact form

The site is static, so the form does not pretend to submit anything. Once the
fields validate, it opens the visitor's own email app with the message
addressed to the school.

To connect a real backend later, set `PUBLIC_CONTACT_ENDPOINT` in a `.env` file
to a URL that accepts a JSON `POST`:

```
PUBLIC_CONTACT_ENDPOINT=https://example.com/api/contact
```

The form will then POST to it instead, using the loading, success and error
states that are already implemented. No other change is needed.

## Design system

Design tokens (colour, type scale, spacing, radii, motion) live in
`src/styles/tokens.css`. Shared classes — `.btn`, `.notice`, `.link-arrow`,
`.container`, `.section`, `.prose` — live in `src/styles/global.css`.
Everything else is scoped to its component.

> **Note for contributors:** Astro scopes component styles. A class you pass
> *into* a child component (for example `class="dept__photo"` on `<Image>`)
> must be targeted with `:global(...)`, otherwise the rule will not apply.

## Accessibility & performance notes

- Semantic HTML, one `<h1>` per page, no skipped heading levels
- Visible focus rings, skip link, keyboard-operable carousel, drawer, dialogs
  and accordions; the mobile drawer traps focus and closes on `Escape`
- `prefers-reduced-motion` disables every animation and scroll animation
- Scroll reveal has a failsafe timer so content can never stay hidden
- The Google Maps embed loads only when the visitor asks for it, so the page
  makes no third-party request on load
- Sitemap and `robots.txt` are generated; every page has a canonical URL,
  meta description, Open Graph tags and `CollegeOrUniversity` structured data

## Content policy

See [`CONTENT-REVIEW.md`](./CONTENT-REVIEW.md) for what was preserved from the
previous website and the short list of items that need the school's
confirmation.
