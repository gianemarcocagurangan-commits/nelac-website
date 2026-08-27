/**
 * RESEARCH & PUBLICATION
 * ----------------------
 * Content preserved from the previous website's Research & Publication page,
 * plus the details printed on the school's own conference posters (which the
 * previous site published as images only). Nothing here has been invented:
 * every theme, date, name and affiliation is read from the school's material.
 */
import type { ImageMetadata } from "astro";

import irc5Photo from "~/assets/images/research/institutional-research-conference-5th-2026.jpg";
import irc3Photo from "~/assets/images/research/institutional-research-conference-3rd-2024.jpg";
import acraPhoto from "~/assets/images/research/acra-6th-annual-2024.jpg";

export interface Speaker {
  name: string;
  affiliation: string;
  /** e.g. "Keynote speaker", "Plenary speaker", "Student presenter". */
  role?: string;
}

export interface Conference {
  id: string;
  title: string;
  /** ISO date used for <time datetime>. */
  date: string;
  displayDate: string;
  theme?: string;
  venue?: string;
  time?: string;
  features?: string[];
  speakers: Speaker[];
  photo: ImageMetadata;
  photoAlt: string;
}

/**
 * The write-up the school published on its Research & Publication page for the
 * 5th Institutional Research Conference — kept word for word.
 */
export const researchIntro = {
  eyebrow: "Research",
  sectionTitle: "Institutional Research Conference",
  paragraphs: [
    "We are honored to have our distinguished speakers Dr. Leonilo B. Capulso, President/CEO of Beyond Books Publication, and Mrs. Marlyn Gudoy, MAEd, Principal of Seventh-day Adventist Elementary School (SAES) Santiago City Inc., for the 5th Institutional Research Conference on January 26, 2026.",
    "Together with our academic leaders, educators, and student researchers, we celebrate a living culture of inquiry, innovation, and service-driven education&mdash;where research becomes a tool for transformation, not just publication.",
  ],
} as const;

/** Institutional Research Conferences, newest first. */
export const institutionalConferences: Conference[] = [
  {
    id: "irc-5th",
    title: "5th Institutional Research Conference",
    date: "2026-01-26",
    displayDate: "January 26, 2026",
    theme: "Transforming Lives: Integrating Faith, Service, and Innovation",
    venue:
      "Auditorium, Northeast Luzon Adventist College, Inc., Mabini, Alicia, Isabela",
    time: "8:00 AM - 4:00 PM",
    features: ["Research forum", "Poster presentations"],
    speakers: [
      {
        name: "Dr. Leonilo Capulso",
        affiliation: "President/CEO, Beyond Books Publication",
        role: "Speaker",
      },
      {
        name: "Dr. Vergilio Quimba Jr.",
        affiliation: "Dean for Academics, Northeast Luzon Adventist College, Inc.",
        role: "Speaker",
      },
      {
        name: "Marlyn Gudoy, MAEd",
        affiliation:
          "Principal, Seventh-day Adventist Elementary School Santiago City Inc.",
        role: "Speaker",
      },
      {
        name: "Jay Lalantan",
        affiliation: "4th year BSEd student, NELAC School of Arts & Education",
        role: "Student presenter",
      },
      {
        name: "Jasmine Faye Bayer",
        affiliation: "4th year BSEd student, NELAC School of Arts & Education",
        role: "Student presenter",
      },
    ],
    photo: irc5Photo,
    photoAlt:
      "Poster for the 5th Institutional Research Conference of Northeast Luzon Adventist College, Inc. on January 26, 2026, 8:00 AM to 4:00 PM at the college auditorium in Mabini, Alicia, Isabela. Theme: Transforming Lives: Integrating Faith, Service, and Innovation. Speakers: Dr. Leonilo Capulso, Dr. Vergilio Quimba Jr. and Marlyn Gudoy, MAEd; student presenters Jay Lalantan and Jasmine Faye Bayer.",
  },
  {
    id: "irc-3rd",
    title: "3rd Institutional Research Conference",
    date: "2024-01-26",
    displayDate: "Friday, January 26, 2024",
    theme:
      "Innovation in Learning: The Crucial Link between Research and Educational Excellence",
    venue: "NELAC Auditorium, Mabini, Alicia, Isabela",
    time: "7:30 AM - 12:00 NN",
    speakers: [
      {
        name: "Vergilio D. Quimba Jr., PhD",
        affiliation: "Dean for Academics",
        role: "Keynote speaker",
      },
      { name: "Rachelle Delos Reyes", affiliation: "", role: "Presenter" },
      { name: "Regine Llamado", affiliation: "", role: "Presenter" },
      { name: "Frank Adonai Yabres", affiliation: "", role: "Presenter" },
      { name: "Lean Anjelene Estrada", affiliation: "", role: "Presenter" },
    ],
    photo: irc3Photo,
    photoAlt:
      "Poster for the 2024 3rd Institutional Research Conference held Friday, January 26 at the NELAC Auditorium in Mabini, Alicia, Isabela from 7:30 AM to 12:00 NN. Theme: Innovation in Learning: The Crucial Link between Research and Educational Excellence. Keynote speaker Vergilio D. Quimba Jr., PhD, Dean for Academics, with presenters Rachelle Delos Reyes, Regine Llamado, Frank Adonai Yabres and Lean Anjelene Estrada.",
  },
];

/**
 * ACRA — the Adventist Colleges Research Association, Inc.
 * The previous website had not written its statement yet, so the section shows
 * what the school has actually published: the conference it hosted.
 */
export const acra = {
  id: "acra",
  eyebrow: "Research",
  title: "Adventist Colleges Research Association",
  legalName: "Adventist Colleges Research Association Inc.",
  abbreviation: "ACRA",
  /** Member colleges shown on the association's own conference poster. */
  memberColleges: [
    "Northeast Luzon Adventist College, Inc.",
    "Manila Adventist College",
    "Naga View Adventist College",
    "Northern Luzon Adventist College",
  ],
  /** Set this to the school's official ACRA statement when it is available. */
  body: [] as string[],
  pendingNote:
    "The institution's own statement on the Adventist Colleges Research Association is being prepared for publication. In the meantime, the conference NELAC hosted is shown below.",
  conference: {
    id: "acra-6th",
    title: "6th ACRA Annual Research Conference",
    date: "2024-09-23",
    displayDate: "September 23-24, 2024",
    theme: "Internationalization of Workforce: Global Talent Mobility Standards",
    venue: "Northeast Luzon Adventist College, Inc.",
    speakers: [
      {
        name: "Tirso T. Reyes",
        affiliation:
          "Senior Education Program Specialist, Planning and Research Section, School Governance and Operations Division, Schools Division Office of Isabela",
        role: "Keynote speaker",
      },
      {
        name: "Dr. Maria Carmela L. Domocmat",
        affiliation: "Education Supervisor, CHED Region I",
        role: "Keynote speaker",
      },
      {
        name: "Dr. Roque F. Falible",
        affiliation:
          "School Principal IV, Professor of Research at Romblon State University",
        role: "Plenary speaker",
      },
      {
        name: "Dr. Benedict DC. David",
        affiliation:
          "Philippine Chamber of Commerce and Industry; Business Research Lecturer of Marinduque State College",
        role: "Plenary speaker",
      },
      {
        name: "Dr. Lorcelie B. Taclan",
        affiliation: "Associate Professor II, Mariano Marcos State University",
        role: "Plenary speaker",
      },
      {
        name: "Dr. Rowena R. Antemano",
        affiliation: "Professor II, Mariano Marcos State University",
        role: "Plenary speaker",
      },
    ] as Speaker[],
    photo: acraPhoto,
    photoAlt:
      "Poster for the 6th Annual Research Conference of the Adventist Colleges Research Association Inc., held September 23 to 24, 2024 at Northeast Luzon Adventist College Inc. Theme: Internationalization of Workforce: Global Talent Mobility Standards. Keynote speakers Tirso T. Reyes and Dr. Maria Carmela L. Domocmat; plenary speakers Dr. Roque F. Falible, Dr. Benedict DC. David, Dr. Lorcelie B. Taclan and Dr. Rowena R. Antemano.",
  } satisfies Conference,
} as const;
