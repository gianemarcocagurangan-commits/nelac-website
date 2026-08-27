/**
 * ACADEMIC DEPARTMENTS AND ACCREDITATION
 * --------------------------------------
 * Department names, photographs and accrediting agencies are preserved from
 * the previous NELAC website. Indicative fees are taken from the previous
 * site's Finance page (see src/content/finance.ts), which carried more
 * specific figures than the Departments cards; every amount is presented as
 * approximate, exactly as the original did.
 */
import type { ImageMetadata } from "astro";

import elementary from "~/assets/images/departments/elementary.jpg";
import juniorHigh from "~/assets/images/departments/junior-high.jpg";
import seniorHigh from "~/assets/images/departments/senior-high.jpg";
import artsEducation from "~/assets/images/departments/arts-and-education.jpg";
import techVoc from "~/assets/images/departments/technical-vocational.jpg";

import badgeElementary from "~/assets/images/departments/badge-elementary.jpg";
import badgeJuniorHigh from "~/assets/images/departments/badge-junior-high.jpg";
import badgeSeniorHigh from "~/assets/images/departments/badge-senior-high.jpg";
import badgeArtsEducation from "~/assets/images/departments/badge-arts-and-education.jpg";
import badgeTechVoc from "~/assets/images/departments/badge-technical-vocational.jpg";

import acscu from "~/assets/images/accreditation/acscu-aai.jpg";
import peac from "~/assets/images/accreditation/peac.jpg";
import aaa from "~/assets/images/accreditation/aaa.png";

export interface Department {
  slug: string;
  name: string;
  photo: ImageMetadata;
  /**
   * NOT RENDERED — see `unverifiedListedName` below. Retained so the
   * photograph is not lost from the project.
   */
  badge: ImageMetadata;
  /** Indicative amount as published on the previous Finance page. */
  indicativeFee: string;
  /** Short description of the department, where the school has published one. */
  note?: string;
  /**
   * NOT RENDERED ON THE SITE — retained so the information is not lost.
   *
   * The previous website showed a portrait and an informal name beside each
   * department ("Mam Joy", "Sir Liam", ...) without stating the person's role.
   * Publishing a real person's photograph under a role we cannot confirm would
   * risk misrepresenting them, so these are held here until the school
   * supplies the correct full names and titles. See CONTENT-REVIEW.md.
   */
  unverifiedListedName?: string;
}

export const departmentsHeading = {
  eyebrow: "Departments",
  title: "NELACOLLEGE Departments",
} as const;

export const departments: Department[] = [
  {
    slug: "elementary",
    name: "K2 / Elementary",
    photo: elementary,
    badge: badgeElementary,
    indicativeFee: "Php 12,000.00 - Php 16,000.00",
    unverifiedListedName: "Mam Joy",
  },
  {
    slug: "junior-high-school",
    name: "Junior High School",
    photo: juniorHigh,
    badge: badgeJuniorHigh,
    indicativeFee: "Php 25,000.00",
    unverifiedListedName: "Sir Liam",
  },
  {
    slug: "senior-high-school",
    name: "Senior High School",
    photo: seniorHigh,
    badge: badgeSeniorHigh,
    indicativeFee: "Php 25,000.00",
    unverifiedListedName: "Sir Saddy",
  },
  {
    slug: "school-of-arts-and-education",
    name: "School of Arts & Education",
    photo: artsEducation,
    badge: badgeArtsEducation,
    indicativeFee: "Php 390.00 / unit",
    // Stated on the school's 5th Institutional Research Conference poster,
    // which lists two "4th year BSEd" students of the School of Arts & Education.
    note: "Offers the Bachelor of Secondary Education (BSEd) programme.",
    unverifiedListedName: "Mam Juvy",
  },
  {
    slug: "technical-vocational",
    name: "Technical Vocational",
    photo: techVoc,
    badge: badgeTechVoc,
    indicativeFee: "Php 20,000.00",
    unverifiedListedName: "Sir Jahnel",
  },
];

export const accreditationHeading = {
  eyebrow: "Accrediting Agencies",
  title: "Accreditation",
} as const;

export interface Accreditor {
  name: string;
  logo: ImageMetadata;
  /** Alt text describing the logo image. */
  alt: string;
}

export const accreditors: Accreditor[] = [
  {
    name: "ACSCU-AAI",
    logo: acscu,
    alt: "Logo of the Association of Christian Schools, Colleges and Universities - Accrediting Agency, Incorporated",
  },
  {
    name: "PEAC",
    logo: peac,
    alt: "Logo of the Private Education Assistance Committee (PEAC)",
  },
  {
    name: "AAA",
    logo: aaa,
    alt: "Logo of the Adventist Accrediting Association (AAA)",
  },
];

/**
 * Accreditation statements quoted from the school's official history. These
 * are the only accreditation claims the school has published; do not add
 * others without documentation.
 */
export const accreditationStatements: string[] = [
  "The Northeast Luzon Adventist School of Technology is accredited by the Board of Regents of the General Conference of Seventh-day Adventists and by the Association of Christian Schools, Colleges and Universities-Accrediting Agency, Incorporated (ACSCU-AAI).",
  "The lost status was regained in July 2017. The Level 1 accreditation was granted by ACSCU-AAI.",
];

/** Partnership recorded in the school's official history. */
export const partnerships: string[] = [
  "Eventually, this technical and vocational school offering short-term courses became one of the assessment centers in Isabela for young people pursuing their National Certificate 1 and 2 in Electronics, Driving, and Automotive.",
  "Technical Education Skills and Development Authority (TESDA) became a partner of the school.",
];
