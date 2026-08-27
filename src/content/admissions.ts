/**
 * ADMISSIONS
 * ----------
 * IMPORTANT: the previous NELAC website did not publish an admission
 * requirements list, deadlines or an application fee, so none are stated here.
 * The steps below describe how to reach the Admission and Records Office using
 * the school's real, published contact details. Where the school still needs
 * to supply information, the step carries a `pending` note instead of invented
 * requirements.
 */

export interface AdmissionStep {
  number: number;
  title: string;
  description: string;
  /** Optional in-page or site link that helps the visitor act on this step. */
  action?: { label: string; href: string };
  pending?: string;
}

export const admissionsIntro = {
  eyebrow: "Admissions",
  title: "How to join NELAC",
  lead: "Northeast Luzon Adventist College welcomes learners from kindergarten through senior high school, technical-vocational courses and college programmes. The Admission and Records Office will guide you through every step.",
} as const;

export const admissionSteps: AdmissionStep[] = [
  {
    number: 1,
    title: "Learn about NELAC",
    description:
      "Read the school's history and identity as a boarding Seventh-day Adventist institution operated by the North Philippine Union Conference, situated on 21 hectares along the national highway in Mabini, Alicia, Isabela.",
    action: { label: "About NELAC", href: "/about/" },
  },
  {
    number: 2,
    title: "Choose your department",
    description:
      "NELAC offers K2/Elementary, Junior High School, Senior High School, the School of Arts & Education, and Technical Vocational programmes.",
    action: { label: "View departments", href: "/academics/#departments" },
  },
  {
    number: 3,
    title: "Review the indicative fees",
    description:
      "The Finance page lists the approximate amounts published by the school for each department, so you can plan ahead before you enquire.",
    action: { label: "Financial information", href: "/finance/" },
  },
  {
    number: 4,
    title: "Contact Admission and Records",
    description:
      "Reach the Admission and Records Office by email or phone, or visit the campus, to ask for the current requirements and the enrolment schedule for your department.",
    action: { label: "Contact the office", href: "/contact/" },
    pending:
      "The official list of admission requirements has not yet been published on this website. Please request it directly from the Admission and Records Office.",
  },
  {
    number: 5,
    title: "Submit your requirements and enrol",
    description:
      "Complete the requirements given to you by the Admission and Records Office and finalise your enrolment with the Finance Office.",
  },
];
