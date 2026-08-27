/**
 * SITE-WIDE IDENTITY, CONTACT DETAILS AND NAVIGATION
 * --------------------------------------------------
 * Every value below is taken from the previous official NELAC website
 * (https://nelacollege.edu.ph). Edit this file to update the details that
 * appear in the header, the footer and the contact page across the whole site.
 */

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const site = {
  /** Full institutional name, as it appeared in the original page title. */
  name: "Northeast Luzon Adventist College",
  /**
   * Registered corporate name, as it appears on the school seal and on the
   * school's own posters and conference materials.
   */
  legalName: "Northeast Luzon Adventist College, Inc.",
  /** Short brand mark used in the header and footer. */
  shortName: "NELAC",
  /** Lowercase wordmark used beside the seal on the previous site. */
  wordmark: "nelacollege",
  /**
   * Historical / registered name used throughout the school history.
   * Preserved because the official history refers to the institution by
   * this name and its acronym.
   */
  registeredName: "Northeast Luzon Adventist School of Technology",
  registeredAcronym: "NELAST",
  foundedYear: 1948,
  /** Motto carried on the school seal. */
  tagline: "The School That Trains for Service.",
  /** Stated on the school's own announcement posters. */
  membership: "A Member of Adventist International Education System",
  /** Line used on the school's admission poster. */
  promise: "We Offer More Than Education. We Shape Character.",
  description:
    "Northeast Luzon Adventist College is a boarding Seventh-day Adventist educational institution in Mabini, Alicia, Isabela, offering kindergarten to grade 12, technical/vocational courses, and college courses.",
  url: "https://nelacollege.edu.ph",
  locale: "en_PH",
} as const;

export const contact = {
  email: "nelac1948@gmail.com",
  phone: "09661703852",
  /** Digits only, for tel: links. */
  phoneHref: "+639661703852",
  address: {
    line1: "H26, Maharlika Highway",
    line2: "Brgy. Mabini, Alicia, Isabela",
    country: "Philippines",
  },
  /** Full address on a single line, for schema.org and map links. */
  addressOneLine:
    "H26, Maharlika Highway, Brgy. Mabini, Alicia, Isabela, Philippines",
} as const;

export const social = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/nela.college1948",
    icon: "facebook",
  },
] as const;

/**
 * Primary navigation.
 * Mirrors the section structure of the previous website: About (history,
 * admin, president's message), Academics (accreditation, departments),
 * Research & Publication (ACRA, newsletters), Services (the six listed
 * services), Finance and Contact.
 */
export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "History", href: "/about#history" },
      { label: "Timeline", href: "/about#timeline" },
      { label: "School Administration", href: "/about#administration" },
      { label: "President's Message", href: "/about#presidents-message" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Departments", href: "/academics#departments" },
      { label: "Accreditation", href: "/academics#accreditation" },
    ],
  },
  {
    label: "Student Life",
    href: "/services",
    children: [
      { label: "Dormitories", href: "/services/dormitories" },
      { label: "Food Services", href: "/services/food-services" },
      { label: "Clinic", href: "/services/clinic" },
      { label: "Guidance", href: "/services/guidance" },
      { label: "Pathfinder", href: "/services/pathfinder" },
      { label: "Master Guide", href: "/services/master-guide" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Institutional Research Conference", href: "/research#irc" },
      { label: "ACRA", href: "/research#acra" },
    ],
  },
  { label: "Finance", href: "/finance" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

/** Footer link groups. Carried over from the previous site's footer. */
export const footerLinks = [
  {
    heading: "Useful Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About NELAC", href: "/about" },
      { label: "Alumni Association", href: "/about#alumni" },
      { label: "News & Announcements", href: "/news" },
    ],
  },
  {
    heading: "Our Services",
    links: [
      { label: "Admission and Records", href: "/admissions" },
      { label: "Job Vacancy", href: "/contact#job-vacancy" },
      { label: "Student Services", href: "/services" },
      { label: "Finance", href: "/finance" },
    ],
  },
] as const;

export const copyright = {
  holder: "NELACOLLEGE",
  /** Year the previous site's copyright notice was set. */
  since: 2023,
  credit: "Customized & maintained by: rme",
} as const;
