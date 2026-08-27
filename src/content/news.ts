/**
 * NEWS & ANNOUNCEMENTS
 * --------------------
 * Every item below is an announcement the school itself published. The
 * licensure results were published on the previous website as poster images
 * only; the names, figures and dates printed on those posters are transcribed
 * here so that they are searchable, readable on a phone and available to
 * screen readers. Nothing has been added.
 *
 * To publish a new announcement, add an entry to the top of this list.
 */
import type { ImageMetadata } from "astro";

import irc5 from "~/assets/images/research/institutional-research-conference-5th-2026.jpg";
import acra6 from "~/assets/images/research/acra-6th-annual-2024.jpg";
import irc3 from "~/assets/images/research/institutional-research-conference-3rd-2024.jpg";
import letPassers2022 from "~/assets/images/announcements/let-passers-2022-01-30.jpg";
import letPassers2019 from "~/assets/images/announcements/let-passers-2019-03.jpg";
import letPassersTeachers from "~/assets/images/announcements/let-passers-congratulations-teachers.jpg";

export interface NamedList {
  heading?: string;
  names: string[];
}

export interface NewsItem {
  slug: string;
  title: string;
  /** ISO date, used for <time datetime> and sorting. */
  date: string;
  /** How the date is written on the announcement itself. */
  displayDate: string;
  /** True when the school did not state a date on the announcement. */
  dateUnstated?: boolean;
  category: string;
  excerpt: string;
  body: string[];
  /** Lists of people named on the announcement. */
  lists?: NamedList[];
  /** Figures printed on the announcement. */
  figures?: { label: string; values: { label: string; value: string }[] }[];
  image?: ImageMetadata;
  imageAlt?: string;
  /** Optional link to a page with more on this item. */
  href?: string;
}

export const news: NewsItem[] = [
  {
    slug: "5th-institutional-research-conference",
    title: "5th Institutional Research Conference",
    date: "2026-01-26",
    displayDate: "January 26, 2026",
    category: "Research",
    excerpt:
      "A research forum and poster presentations at the college auditorium, on the theme &ldquo;Transforming Lives: Integrating Faith, Service, and Innovation&rdquo;.",
    body: [
      "We are honored to have our distinguished speakers Dr. Leonilo B. Capulso, President/CEO of Beyond Books Publication, and Mrs. Marlyn Gudoy, MAEd, Principal of Seventh-day Adventist Elementary School (SAES) Santiago City Inc., for the 5th Institutional Research Conference on January 26, 2026.",
      "Together with our academic leaders, educators, and student researchers, we celebrate a living culture of inquiry, innovation, and service-driven education&mdash;where research becomes a tool for transformation, not just publication.",
      "The conference runs from 8:00 AM to 4:00 PM at the Auditorium of Northeast Luzon Adventist College, Inc. in Mabini, Alicia, Isabela, and features a research forum and poster presentations.",
    ],
    image: irc5,
    imageAlt:
      "Poster for the 5th Institutional Research Conference of Northeast Luzon Adventist College, Inc. on January 26, 2026, 8:00 AM to 4:00 PM at the college auditorium in Mabini, Alicia, Isabela.",
    href: "/research#irc-5th",
  },
  {
    slug: "6th-acra-annual-research-conference",
    title: "NELAC hosts the 6th ACRA Annual Research Conference",
    date: "2024-09-23",
    displayDate: "September 23-24, 2024",
    category: "Research",
    excerpt:
      "The Adventist Colleges Research Association Inc. met at NELAC on the theme &ldquo;Internationalization of Workforce: Global Talent Mobility Standards&rdquo;.",
    body: [
      "Northeast Luzon Adventist College, Inc. hosted the 6th Annual Research Conference of the Adventist Colleges Research Association Inc. on September 23 and 24, 2024.",
      "The conference theme was &ldquo;Internationalization of Workforce: Global Talent Mobility Standards&rdquo;.",
    ],
    lists: [
      {
        heading: "Keynote speakers",
        names: ["Tirso T. Reyes", "Dr. Maria Carmela L. Domocmat"],
      },
      {
        heading: "Plenary speakers",
        names: [
          "Dr. Roque F. Falible",
          "Dr. Benedict DC. David",
          "Dr. Lorcelie B. Taclan",
          "Dr. Rowena R. Antemano",
        ],
      },
    ],
    image: acra6,
    imageAlt:
      "Poster for the 6th Annual Research Conference of the Adventist Colleges Research Association Inc., held September 23 to 24, 2024 at Northeast Luzon Adventist College Inc.",
    href: "/research#acra",
  },
  {
    slug: "3rd-institutional-research-conference",
    title: "3rd Institutional Research Conference",
    date: "2024-01-26",
    displayDate: "Friday, January 26, 2024",
    category: "Research",
    excerpt:
      "&ldquo;Innovation in Learning: The Crucial Link between Research and Educational Excellence&rdquo;, keynoted by Vergilio D. Quimba Jr., PhD.",
    body: [
      "The 2024 3rd Institutional Research Conference was held on Friday, January 26 at the NELAC Auditorium in Mabini, Alicia, Isabela, from 7:30 AM to 12:00 NN.",
      "The theme was &ldquo;Innovation in Learning: The Crucial Link between Research and Educational Excellence&rdquo;, with Vergilio D. Quimba Jr., PhD, Dean for Academics, as keynote speaker.",
    ],
    lists: [
      {
        heading: "Presenters",
        names: [
          "Rachelle Delos Reyes",
          "Regine Llamado",
          "Frank Adonai Yabres",
          "Lean Anjelene Estrada",
        ],
      },
    ],
    image: irc3,
    imageAlt:
      "Poster for the 2024 3rd Institutional Research Conference at the NELAC Auditorium, Mabini, Alicia, Isabela.",
    href: "/research#irc-3rd",
  },
  {
    slug: "let-passers-january-2022",
    title:
      "Congratulations to the passers of the January 30, 2022 Licensure Examination for Teachers",
    date: "2022-01-30",
    displayDate: "January 30, 2022",
    category: "Achievements",
    excerpt:
      "Seven Northeast Luzon Adventist College graduates are now Licensed Professional Teachers.",
    body: ["We are proud of you!"],
    lists: [
      {
        heading: "Licensed Professional Teachers",
        names: [
          "Mark Andrew T. Florendo, LPT",
          "Normay G. Francia, LPT",
          "April Joy C. Mangoba, LPT",
          "Angelie C. Sales, LPT",
          "Rica Mae G. Ubal, LPT",
          "Rosemarie T. Valdez, LPT",
          "Carla Mae C. Ventura, LPT",
        ],
      },
    ],
    image: letPassers2022,
    imageAlt:
      "Northeast Luzon Adventist College announcement congratulating the passers of the January 30, 2022 Licensure Examination for Teachers, with graduation portraits of the seven new Licensed Professional Teachers.",
  },
  {
    slug: "let-passers-march-2019",
    title: "LET passers of March 2019",
    date: "2019-03-31",
    displayDate: "March 2019",
    category: "Achievements",
    excerpt:
      "Five graduates passed the March 2019 Licensure Examination for Teachers. To God be the Glory!",
    body: ["To God be the Glory!"],
    lists: [
      {
        heading: "Licensed Professional Teachers",
        names: [
          "Leizelle A. Agustin, LPT",
          "Lovelyn O. Calacsan, LPT",
          "Raymond M. Gaunia, LPT",
          "Melody A. Guingab, LPT",
          "Demple Joy U. Mangusing, LPT",
        ],
      },
    ],
    image: letPassers2019,
    imageAlt:
      "Northeast Luzon Adventist College announcement listing the five LET passers of March 2019 with their graduation portraits.",
  },
  {
    slug: "congratulations-teachers-let-results",
    title: "Congratulations Teachers!",
    // No date is printed on this announcement. The ISO value below is a
    // sort key only and is NOT a claim about when the results were released.
    date: "2018-01-01",
    displayDate: "Date not stated on the announcement",
    dateUnstated: true,
    category: "Achievements",
    excerpt:
      "Twenty-seven graduates passed the Licensure Examination for Teachers at elementary and secondary level, with a 95.00% overall passing rate in the secondary level.",
    body: ["To God be all the glory!"],
    lists: [
      {
        heading: "Elementary level",
        names: [
          "Alvin A. Bagauisan",
          "Honorato C. Cabalbal",
          "Dolly Mae A. Flores",
          "Joash Rich A. Mesia",
          "Joevyneil T. Mordido",
          "Ghianne R. Rupinta",
          "Kristine Apple V. Sotelo",
          "Melanie M. Topinio",
        ],
      },
      {
        heading: "Secondary level",
        names: [
          "Abby Mae A. Alfaro",
          "Ludy Mark B. Bulusan",
          "Marifel G. Castillo",
          "Saniata D. Domingo",
          "Ma. Ajayne D. Domingo",
          "Jhay Mark B. Francisco",
          "Precious Mae M. Gutgutao",
          "Gladys Erica J. Jose",
          "Eric A. Juan",
          "Lemar T. Mangrubang",
          "Aleli Shane G. Maranion",
          "Razall Keith C. Martinez",
          "Agnes L. Morta",
          "Arabela Grace M. Rivera",
          "Elpearl Jean G. Romano",
          "Michael Angelo L. Salagan",
          "Jezreel M. Sanchez",
          "Arly Tangiled",
          "Kurt Jef T. Vinoray",
        ],
      },
    ],
    figures: [
      {
        label: "Elementary",
        values: [
          { label: "First time takers", value: "77.78%" },
          { label: "Overall passing rate", value: "72.73%" },
          { label: "National passing rate", value: "51.04%" },
        ],
      },
      {
        label: "Secondary",
        values: [
          { label: "First time takers", value: "94.12%" },
          { label: "Overall passing rate", value: "95.00%" },
          { label: "National passing rate", value: "72.62%" },
        ],
      },
    ],
    image: letPassersTeachers,
    imageAlt:
      "Northeast Luzon Adventist College, Inc. announcement headed Congratulations Teachers, listing eight elementary-level and nineteen secondary-level Licensure Examination for Teachers passers with their portraits, together with the passing rates for each level.",
  },
];
