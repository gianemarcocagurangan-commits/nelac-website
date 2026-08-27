/**
 * FINANCIAL INFORMATION
 * ---------------------
 * Figures are preserved exactly as published on the previous NELAC Finance
 * page, including the "approximate" wording the school used. The previous
 * page's "See Details" links did not lead anywhere, so each row points to the
 * Finance Office instead of to a page that does not exist.
 */

export interface FeeRow {
  department: string;
  /** Label used on the previous site, e.g. "Approx. Amount". */
  amountLabel: string;
  amount: string;
}

export const financeHeading = {
  eyebrow: "Finance",
  title: "Financial Information",
} as const;

export const fees: FeeRow[] = [
  {
    department: "Elementary Department",
    amountLabel: "Approx. Amount",
    amount: "Php 12,000.00 - Php 16,000.00",
  },
  {
    department: "Junior High School Department",
    amountLabel: "Approx. Amount",
    amount: "Php 25,000.00",
  },
  {
    department: "Senior High School Department",
    amountLabel: "Approx. Amount",
    amount: "Php 25,000.00",
  },
  {
    department: "School of Art & Education Department",
    amountLabel: "Approx. Amount",
    amount: "Php 390.00 / unit",
  },
  {
    department: "Technical Vocational Department",
    amountLabel: "Approx. Amount",
    amount: "Php 20,000.00",
  },
];

export const financeNotice =
  "The amounts above are the approximate figures published by the school and are shown for guidance only. For a detailed breakdown, current rates and payment arrangements, please contact the Finance Office.";
