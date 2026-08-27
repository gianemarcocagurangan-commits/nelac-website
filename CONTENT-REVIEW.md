# Content review

What was carried over from the previous NELAC website, where it now lives, and
the short list of things the school needs to confirm.

Source: https://nelacollege.edu.ph (pages `index.html`, `academics.html`,
`services.html`, `finance.html`, `researchpublication.html`).

---

## 1. Preservation checklist

| Item | Status | Where it lives now |
| --- | --- | --- |
| Navigation sections (About, Academics, Research & Publication, Services, Finance, Contact) | Preserved | `src/content/site.ts` → header, mobile drawer, footer |
| School history (every paragraph, verbatim) | Preserved | `src/content/history.ts` → `/about` and `/history` |
| Administrators (4 officers: names, positions, photographs) | Preserved | `src/content/leadership.ts` → `/about#administration` |
| President's message section | Preserved (heading + greeting; body was never published) | `/about#presidents-message` |
| Contact email `nelac1948@gmail.com` | Preserved | Top bar, footer, `/contact`, `/finance`, `/admissions`, service pages |
| Contact number `09661703852` | Preserved | Same as above |
| Address `H26, Maharlika Highway, Brgy. Mabini, Alicia, Isabela, Philippines` | Preserved | Footer, `/contact`, structured data |
| Facebook page | Preserved | Top bar, footer, `/contact`, `/news` |
| Services (Dormitories, Food Services, Clinic, Guidance, Pathfinder, Master Guide) | Preserved | `src/content/services.ts` → `/services` + a page each |
| Departments (K2/Elementary, JHS, SHS, School of Arts & Education, Technical Vocational) | Preserved | `src/content/academics.ts` → `/academics#departments` |
| Accrediting agencies (ACSCU-AAI, PEAC, AAA) + logos | Preserved | `/academics#accreditation` |
| Financial information (5 departments, approximate amounts) | Preserved | `src/content/finance.ts` → `/finance` |
| Research & Publication (IRC write-up, ACRA section) | Preserved and expanded | `src/content/research.ts` → `/research` |
| Footer links (Home, Alumni Association, Admission and Records, Job Vacancy) | Preserved | Footer, `/contact#job-vacancy`, `/admissions` |
| Copyright notice | Preserved | Footer |
| Carousel messages (Faith-based Education / Service & Character Building / Knowledge & Excellence) | Preserved | Homepage hero and highlight cards |
| All 25 photographs | Preserved | `src/assets/images/` |

**Grammar and formatting were the only edits made to school text**, for example
`domitories` → `Dormitories`, `Faith-base` → `Faith-Based`, and a stray space in
`chur   ch` → `church`. No wording, name, date or figure was changed.

---

## 2. Content recovered from the photographs

Several images on the old site were **posters carrying printed information**
that existed nowhere else on the website and was invisible to search engines
and screen readers. That text has been transcribed into the content files and
is now shown alongside each poster.

| Poster | Information recovered |
| --- | --- |
| `admission-poster.jpg` | Registered name **Northeast Luzon Adventist College, Inc.**; the line *"We Offer More Than Education. We Shape Character."* |
| `let-passers-congratulations-teachers.jpg` | *"A Member of Adventist International Education System"*; 8 elementary-level and 19 secondary-level LET passers by name; passing rates (Elementary 77.78% / 72.73% vs 51.04% national; Secondary 94.12% / 95.00% vs 72.62% national) |
| `let-passers-2022-01-30.jpg` | 7 Licensed Professional Teachers, January 30, 2022 LET |
| `let-passers-2019-03.jpg` | 5 Licensed Professional Teachers, March 2019 LET |
| `institutional-research-conference-5th-2026.jpg` | 5th IRC: theme, venue, times, event features, 3 speakers and 2 student presenters |
| `institutional-research-conference-3rd-2024.jpg` | 3rd IRC (Jan 26, 2024): theme, venue, times, keynote speaker, 4 presenters |
| `acra-6th-annual-2024.jpg` | ACRA's registered name, the 6th Annual Research Conference (Sept 23–24, 2024), its theme, 6 speakers, and the 4 member colleges |

---

## 3. Deliberate changes, and why

**Hero photographs swapped for campus photographs.** The old carousel put
website text on top of three posters that already had their own printed text,
which made both unreadable. The hero now uses NELAC's own campus photographs,
and every poster is shown at full size — where its text can actually be read —
on `/news`, `/research` and `/admissions`. No photograph was discarded.

**The department "contact" names are not displayed.** The old Departments cards
showed a portrait and an informal name beside each department (*"Mam Joy"*,
*"Sir Liam"*, *"Sir Saddy"*, *"Mam Juvy"*, *"Sir Jahnel"*) without stating what
role the person held. Publishing a real person's photograph under a role that
cannot be confirmed risks misrepresenting them. The names and photographs are
**retained in `src/content/academics.ts`** (`unverifiedListedName` and `badge`)
and will appear as soon as the school supplies full names and titles.

**`Login` / `Register` were removed.** Both were dead links (`href="#"`) with no
account system behind them. Building a sign-in form that cannot sign anyone in
would be worse than not having one. See §4.

**The contact form does not fake a submission.** It validates, then opens the
visitor's email app with the message addressed to the school. A backend can be
connected by setting one environment variable — see the README.

**`contact.html` was a broken link.** It returned 404 on the old site. There is
now a real `/contact` page.

**Fee figures.** The old Departments cards showed `Php 20,000.00` for every
department, while the Finance page gave five different, specific amounts. The
Finance page figures are used throughout, since the uniform figure appears to
be leftover template text. **Please confirm.**

---

## 4. Needs the school's confirmation

Items marked *pending* on the site, shown to visitors as "being prepared"
rather than filled in with invented text.

- [ ] **Admission requirements, deadlines and fees** — never published. `/admissions` currently directs people to the Admission and Records Office.
- [ ] **Service descriptions** — all six pages are empty. Old site said only *"updates....!!! on the way...."* and *"Satetment Here!"*.
- [ ] **President's message** — the section existed but the text was commented out of the old page and never published.
- [ ] **ACRA statement** — old page said only *"Statement Here!"*.
- [ ] **Department fees** — confirm the Finance-page figures (see §3).
- [ ] **Department heads** — full names and titles for the five people listed informally (see §3).
- [ ] **Programme / course listings** — no subject or course lists were ever published.
- [ ] **Alumni Association contact** — the footer linked to `#`.
- [ ] **Job vacancies** — listed as a service, but no openings or procedure were published.
- [ ] **The admission poster's "free tuition fee" offer** — the poster is undated. Confirm whether it is current and who qualifies.
- [ ] **"Congratulations Teachers!" LET results** — the poster carries no date. Confirm the examination date so it can be placed correctly on `/news`.
- [ ] **1st, 2nd and 4th Institutional Research Conferences** — not documented anywhere on the old site.
- [ ] **Student portal / login** — if the school wants one, it needs a backend. Nothing has been built.
- [ ] **Campus map pin** — the map is centred on the published postal address; the exact campus location has not been independently verified, and the page says so.
- [ ] **History reference markers** — the superscript numbers (4, 9, 12, 15) appear in the school's published history, but the reference list was never supplied.

---

## 5. Not invented

No programme, department, achievement, statistic, accreditation, person,
facility, date, fee or contact detail appears on this site that was not
published by Northeast Luzon Adventist College itself, either as text on the
old website or as printed text on one of its own posters.
