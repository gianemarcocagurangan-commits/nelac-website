/**
 * Site search index.
 * Built at compile time from the content modules, so it always matches what is
 * actually published. Entirely client-side; no backend or third-party service.
 */
import { departments, accreditors } from "~/content/academics";
import { services, offices } from "~/content/services";
import { leaders } from "~/content/leadership";
import { timeline, historyChapters } from "~/content/history";
import { news } from "~/content/news";
import { fees } from "~/content/finance";
import { institutionalConferences, acra } from "~/content/research";

export interface SearchEntry {
  title: string;
  href: string;
  section: string;
  text: string;
}

const stripMarkup = (value: string): string =>
  value
    .replace(/<[^>]+>/g, "")
    .replace(/&ldquo;|&rdquo;|&quot;/g, '"')
    .replace(/&rsquo;/g, "'")
    .replace(/&mdash;/g, "—")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

const pages: SearchEntry[] = [
  {
    title: "Home",
    href: "/",
    section: "Pages",
    text: "Northeast Luzon Adventist College NELAC faith-based education service character building knowledge excellence",
  },
  {
    title: "About NELAC",
    href: "/about",
    section: "Pages",
    text: "History administration president's message timeline milestones alumni association",
  },
  {
    title: "Academics",
    href: "/academics",
    section: "Pages",
    text: "Departments accreditation programmes kindergarten elementary junior high senior high technical vocational",
  },
  {
    title: "Student Life & Services",
    href: "/services",
    section: "Pages",
    text: "Dormitories food services clinic guidance pathfinder master guide student services",
  },
  {
    title: "Admissions",
    href: "/admissions",
    section: "Pages",
    text: "Admission and records enrolment enrollment apply requirements how to join",
  },
  {
    title: "Research & Publication",
    href: "/research",
    section: "Pages",
    text: "Institutional research conference ACRA Adventist Colleges Research Association newsletters",
  },
  {
    title: "Financial Information",
    href: "/finance",
    section: "Pages",
    text: "Tuition fees approximate amount finance office payment",
  },
  {
    title: "News & Announcements",
    href: "/news",
    section: "Pages",
    text: "News announcements updates events",
  },
  {
    title: "Contact",
    href: "/contact",
    section: "Pages",
    text: "Contact address email phone map location Mabini Alicia Isabela Maharlika Highway job vacancy",
  },
  {
    title: "The full history of NELAC",
    href: "/history",
    section: "Pages",
    text: "Complete official history Northeast Luzon Academy NELAST PUC-NELC AUP-NELC",
  },
];

export const searchIndex: SearchEntry[] = [
  ...pages,
  ...departments.map((department) => ({
    title: department.name,
    href: `/academics#${department.slug}`,
    section: "Departments",
    text: `${department.name} department indicative fee ${department.indicativeFee}`,
  })),
  ...services.map((service) => ({
    title: service.name,
    href: `/services/${service.slug}`,
    section: "Student Services",
    text: `${service.name} ${service.summary}`,
  })),
  ...offices.map((office) => ({
    title: office.name,
    href: office.href,
    section: "Offices",
    text: `${office.name} ${office.description}`,
  })),
  ...leaders.map((leader) => ({
    title: leader.name,
    href: "/about#administration",
    section: "School Administration",
    text: `${leader.name} ${leader.position}`,
  })),
  ...accreditors.map((accreditor) => ({
    title: accreditor.name,
    href: "/academics#accreditation",
    section: "Accreditation",
    text: stripMarkup(accreditor.alt),
  })),
  ...fees.map((fee) => ({
    title: `${fee.department} fees`,
    href: "/finance",
    section: "Finance",
    text: `${fee.department} ${fee.amountLabel} ${fee.amount}`,
  })),
  ...timeline.map((milestone) => ({
    title: `${milestone.year} — ${milestone.title}`,
    href: "/about#timeline",
    section: "History",
    text: stripMarkup(milestone.description),
  })),
  ...historyChapters.map((chapter) => ({
    title: chapter.heading,
    href: `/history#${chapter.id}`,
    section: "History",
    text: stripMarkup(chapter.paragraphs.slice(0, 4).join(" ")).slice(0, 400),
  })),
  ...news.map((item) => ({
    title: item.title,
    href: `/news#${item.slug}`,
    section: "News",
    text: stripMarkup(
      [item.excerpt, ...(item.lists ?? []).flatMap((list) => list.names)].join(
        " ",
      ),
    ),
  })),
  ...[...institutionalConferences, acra.conference].map((conference) => ({
    title: conference.title,
    href: `/research#${conference.id}`,
    section: "Research",
    text: stripMarkup(
      [
        conference.displayDate,
        conference.theme ?? "",
        conference.venue ?? "",
        ...conference.speakers.map((speaker) => speaker.name),
      ].join(" "),
    ),
  })),
  {
    title: acra.title,
    href: "/research#acra",
    section: "Research",
    text: `${acra.abbreviation} ${acra.legalName} ${acra.memberColleges.join(" ")}`,
  },
];
