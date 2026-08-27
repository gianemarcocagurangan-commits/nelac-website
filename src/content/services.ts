/**
 * STUDENT SERVICES
 * ----------------
 * The six services below are exactly those listed in the previous website's
 * navigation. Descriptive copy that the previous site had not yet published is
 * marked with `status: "pending"` and is shown to visitors as "information
 * being prepared" rather than being filled in with invented text.
 *
 * To publish a service, write its paragraphs into `body` and set
 * `status: "published"`.
 */

export type ServiceStatus = "published" | "pending";

export interface Service {
  slug: string;
  name: string;
  /** One-line summary shown on cards. Only used when status is "published". */
  summary: string;
  icon: string;
  status: ServiceStatus;
  body: string[];
  /** Text carried over verbatim from the previous site, if any. */
  legacyNote?: string;
}

export const services: Service[] = [
  {
    slug: "dormitories",
    name: "Dormitories",
    summary: "On-campus residence halls for our boarding students.",
    icon: "home",
    status: "pending",
    body: [],
    legacyNote: "updates....!!! on the way....",
  },
  {
    slug: "food-services",
    name: "Food Services",
    summary: "Campus dining for resident and day students.",
    icon: "utensils",
    status: "pending",
    body: [],
  },
  {
    slug: "clinic",
    name: "Clinic",
    summary: "Health services for the campus community.",
    icon: "heart-pulse",
    status: "pending",
    body: [],
  },
  {
    slug: "guidance",
    name: "Guidance",
    summary: "Counselling and student guidance services.",
    icon: "compass",
    status: "pending",
    body: [],
  },
  {
    slug: "pathfinder",
    name: "Pathfinder",
    summary: "The Seventh-day Adventist Pathfinder Club on campus.",
    icon: "tent",
    status: "pending",
    body: [],
  },
  {
    slug: "master-guide",
    name: "Master Guide",
    summary: "The Master Guide leadership programme.",
    icon: "award",
    status: "pending",
    body: [],
  },
];

/** Offices listed under "Our Services" in the previous website's footer. */
export const offices = [
  {
    name: "Admission and Records",
    href: "/admissions/",
    description:
      "Enquiries about enrolment, student records and transcripts.",
  },
  {
    name: "Finance",
    href: "/finance/",
    description:
      "School fees, payment arrangements and financial information.",
  },
  {
    name: "Job Vacancy",
    href: "/contact/#job-vacancy",
    description:
      "Enquiries about employment opportunities at the college.",
  },
] as const;

export const getService = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);
