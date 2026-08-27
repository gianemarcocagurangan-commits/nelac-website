/**
 * SCHOOL ADMINISTRATION
 * ---------------------
 * Names, positions and photographs are preserved exactly as published on the
 * previous NELAC website. Do not add, remove or re-title an officer here
 * unless the change has been confirmed by the school administration.
 */
import type { ImageMetadata } from "astro";

import fajardo from "~/assets/images/leadership/eliezer-mishael-fajardo.jpg";
import quimba from "~/assets/images/leadership/vergilio-quimba-jr.jpg";
import gabion from "~/assets/images/leadership/zenaida-gabion.jpg";
import mateo from "~/assets/images/leadership/alexander-mateo.jpg";

export interface Leader {
  name: string;
  position: string;
  photo: ImageMetadata;
}

export const leadershipHeading = {
  eyebrow: "Leaders",
  title: "School Admin",
} as const;

export const leaders: Leader[] = [
  {
    name: "Pastor Eliezer Mishael Fajardo",
    position: "President",
    photo: fajardo,
  },
  {
    name: "Dr. Vergilio Quimba Jr.",
    position: "Dean for Academics",
    photo: quimba,
  },
  {
    name: "Ms. Zenaida Gabion",
    position: "Treasurer",
    photo: gabion,
  },
  {
    name: "Engr. Alexander Mateo",
    position: "Dean for Student Services",
    photo: mateo,
  },
];

/**
 * PRESIDENT'S MESSAGE
 * The previous website carried this section heading and greeting, but the
 * message itself was never published. The body is intentionally left empty so
 * that the school can supply the official text; nothing has been invented.
 */
export const presidentsMessage = {
  heading: "Message from the President",
  greeting: "Praise God From Whom all blessings Flow!",
  author: "Pastor Eliezer Mishael Fajardo",
  authorPosition: "President",
  /** Set this to the official message text when it is available. */
  body: [] as string[],
  pendingNote:
    "The full message from the President is being prepared for publication. In the meantime, the Office of the President can be reached through the contact details below.",
} as const;
