/**
 * THE HISTORY OF NORTHEAST LUZON ADVENTIST COLLEGE
 * ------------------------------------------------
 * The text below is preserved verbatim from the official history published on
 * the previous NELAC website. Only spacing, punctuation spacing and obvious
 * typographic slips have been corrected; no wording, name, date or figure has
 * been changed, added or removed.
 *
 * A small amount of inline markup (<sup> for the reference markers that appear
 * in the original text) is allowed inside `text` and is rendered as HTML.
 */

export interface HistoryParagraph {
  text: string;
}

export interface HistoryChapter {
  id: string;
  heading: string;
  /** Short label used by the on-page chapter navigation. */
  navLabel: string;
  paragraphs: string[];
}

/** Section heading used on the previous site above the history text. */
export const historyHeading = {
  eyebrow: "History",
  title: "NELACOLLEGE History",
} as const;

/** The opening overview of the institution as it stands today. */
export const historyIntro: string[] = [
  "Northeast Luzon Adventist School of Technology, formerly Northeast Luzon Academy, is a boarding Seventh-day Adventist educational institution offering kindergarten to grade 12, technical/vocational courses, and a few college courses.",
  "Northeast Luzon Adventist School of Technology is operated by the North Philippine Union Conference and located in Mabini, Alicia, Isabela, Republic of the Philippines.",
  "It is situated on 21 hectares (48 acres) of land along the national highway, which is 354 kilometers (220 miles) north of the city of Manila.",
  "The school became an extension campus of Philippine Union College bearing the name PUC-NELC in 1983, which later on became AUP-NELC in 1996 when PUC became Adventist University of the Philippines.",
  "In 2001, the school was allowed to offer additional postsecondary technical courses and was renamed Northeast Luzon Adventist School of Technology.",
  "In the 2017/2018 school year, 1,776 students were enrolled, which comprised 52 kindergarten, 301 elementary, 525 junior high, 423 senior high, 376 technical/vocational, and 99 college students.",
];

export const historyChapters: HistoryChapter[] = [
  {
    id: "establishment",
    heading: "Developments That Led to Its Establishment",
    navLabel: "Establishment",
    paragraphs: [
      "On January 1, 1948, the Northeast Luzon Mission came into existence with headquarters at Santiago, Isabela, Philippines. The mission territories included Cagayan, Isabela, Nueva Vizcaya, and Batanes Island. Jose O. Bautista was the first president, and Aniceto Aqui was the secretary-treasurer.",
      "Aqui concurrently served as the treasurer of Northeast Luzon Academy until 1958. The only Adventist school in northern Luzon at that time was Northern Luzon Academy.",
      "The Seventh-day Adventist parents in the new mission had difficulty sending their children to that school. The urgent need for a secondary school was presented to Bautista. As a result, Northeast Luzon Academy (NELA) was opened with the full cooperation and support of the brethren in the region.",
      "Strong promotions and campaigns were done throughout the valley during meetings and Sabbath services. &ldquo;Northeast Luzon Academy was represented by several faculty and students during strong educational fellowship in Cauayan, Isabela.&rdquo;<sup>4</sup>",
    ],
  },
  {
    id: "founding",
    heading: "Founding of the School",
    navLabel: "Founding",
    paragraphs: [
      "The beginnings of Northeast Luzon Academy were humble. The first school building had a thatched cogon grass roof, bamboo walls, earthen floors, and stood in minimal space. The floors of the rooms were dusty, so to minimize the dust, the rooms had to be sprinkled with water.",
      "This first school building was located in Divisoria, Santiago, Isabela, when the institution was founded in June 1948. The school began with four teachers in the elementary and high school: Maria S. Feliciano, Pilar A. Nicolas, Servando G. Corpuz, and Juan A. Bangloy, the principal. They taught 70 elementary and 22 high-school pioneer pupils.",
      "The school buildings were surrounded by the homes of the brethren and mission workers, which made the NELA community unique. Songs like &ldquo;Lord in the Morning&rdquo; and &ldquo;Abide with Me&rdquo; were heard regularly during the morning and evening worships. Every Sabbath morning, people walked to church.",
    ],
  },
  {
    id: "history-of-the-school",
    heading: "History of the School",
    navLabel: "Growth & Development",
    paragraphs: [
      "Northeast Luzon Academy (NELA) started to operate in 1948. It began as a church school at Divisoria, Santiago, Isabela. The school building was made with a grass roof, and the earth served as its hard floor.",
      "The school had an enrollment of only 22 first-year high school students, and most of them came from Divisoria Elementary School.",
      "The next year, 1949, 70 students were enrolled, and a subsidy from the Philippine Union Mission made it possible for the academy to offer second- and third-year courses.",
      "In the 1949/1950 school year, the number of teachers increased from four to seven, including the principal. Both Maria Feliciano and Pilar Nicolas, who later became Mrs. Pilar Corpuz, taught the same grades. Laura C. Carino taught grades five and six.",
      "In the high school department, the advisers of first year, second year, and third year in succession were Jeremias Ocampo, Servando Corpuz, and Rosendo Diagan, who later continued his studies to become a medical doctor.",
      "The faculty increased to eight for the 1950/1951 school year, when the academy was permitted to operate as a full-fledged secondary school. Enrollment was up to 102. The teachers in the elementary department were Aldine Jusay Escara, Luz L. de la Cruz, and Juana T. Donato.",
      "The different advisors in the high school level were Gorgonia M. Coloma for the freshmen, Servando G. Corpuz for the sophomores, Priscilla V. Arafiles for the juniors, and Bonifacio Donato and Juan A. Bangloy for the seniors. In April 1951, Northeast Luzon Academy graduated its first 20 students.",
      "After 12 years of operation in Divisoria, the school needed to expand, so a larger piece of land was purchased.",
      "During the years that the new facility was being built, Victor C. Cabansag acted as the principal while at the same time directing the construction of the new buildings in Mabini, Alicia, Isabela.<sup>9</sup> In the school year 1960/1961, Northeast Luzon Academy was relocated to the new facility in Mabini on 24 hectares (57.5 acres) of land.",
      "Academic programs were also strengthened with extracurricular activities. A Ministerial Association was organized, and members were assigned to visit nearby SDA churches during Wednesday nights and Sabbath.",
      "Spelling bees and talent nights were also conducted for students. Athletic intramurals were also held.",
      "NELA&rsquo;s pioneering years of successful operation in the new site were directed and supervised by the Northeast Luzon Mission president, Jose O. Bautista, and the administrative officers Felix Dela Cruz, Pedro Diaz, and Juan Revita.",
      "In the school year 1981/1982, P. J. Barayuga applied for government approval for the college program. NELA then offered preparatory college education courses.",
      "However, Amos Simorangkir, the Education director from the Far Eastern Division office, came to the campus with some union personnel and advised that the church was not in favor of opening NELA as a college.",
      "Instead, they suggested that NELA become an extension campus of the Philippine Union College (now the Adventist University of the Philippines). Thus, the school&rsquo;s name was changed to Philippine Union College-Northeast Luzon Campus (PUC-NELC).<sup>12</sup>",
      "On August 1, 1996, the Commission on Higher Education granted PUC the long-awaited university status, and the name of that institution changed from Philippine Union College to Adventist University of the Philippines (AUP).",
      "Thus, this extension campus became Adventist University of the Philippines-Northeast Luzon Campus (AUP-NELC).",
      "AUP-NELC was recognized as a full-fledged school of technology and renamed in 2001 as Northeast Luzon Adventist School of Technology (NELAST).",
      "NELAST was the first Adventist technical school in the Philippines, which allowed the school to offer additional postsecondary technical and vocational courses, and it has continued to do so.",
      "NELAST belongs to a chain of more than 7,500 Seventh-day Adventist schools around the world commissioned to train, to win, and to hold the young people of the Church.",
      "The Northeast Luzon Adventist School of Technology is accredited by the Board of Regents of the General Conference of Seventh-day Adventists and by the Association of Christian Schools, Colleges and Universities-Accrediting Agency, Incorporated (ACSCU-AAI).",
      "In 2003, a very challenging time came to the school when strong typhoons and other calamities struck the area.",
      "Buildings and other facilities were destroyed, tearing down the school to the point that it even lost its accreditation status at that time.",
      "The school was in a state of ho-hum and doldrums. In the midst of the debacles and calamities that arose, the Lord&rsquo;s guidance and goodness were still manifested.",
      "The lost status was regained in July 2017. The Level 1 accreditation was granted by ACSCU-AAI.<sup>15</sup>",
      "The alumni of the school who migrated to the U.S.A. were conscious of the needs of their alma mater.",
      "The Northeast Luzon Academy Alumni Association (NELAAA) North America joined their resources and initiated the construction of the school&rsquo;s auditorium in 2006.",
      "The alumni organization donated 75 percent of the funding for this project, while 25 percent was raised locally.",
      "Again, in 2010, a two-story building was donated by loving donors and alumni, and in 2014 the E. A. Manalo Foundation constructed a building for the school.",
      "These projects signify the endless love of our donors, alumni, and friends to the institution in the valley.",
      "Eventually, this technical and vocational school offering short-term courses became one of the assessment centers in Isabela for young people pursuing their National Certificate 1 and 2 in Electronics, Driving, and Automotive.",
      "Technical Education Skills and Development Authority (TESDA) became a partner of the school.",
      "The Northeast Luzon Academy Alumni Association in North America, with Francisca Manalo Diaz as the president, assisted in the physical metamorphosis, enhancing competency through some teachers upgrading programs.",
      "She said, &ldquo;We collectively resolved to continue exploring, developing, thriving and working until our beloved Alma Matter evolved into a full-fledged college.&rdquo;",
      "In 2014, the first class of education majors graduated. One hundred percent of these education graduates passed the Licensure Examination for Teachers.",
      "In the March 2017 Licensure Examination for Teachers, Ferdinand A. Juan placed first and Venus C. Ancheta placed in the top 10 at the regional level.",
      "Both are bachelor in elementary education graduates.",
      "NELAST is now a part of the Northeast Luzon Mission, which was inaugurated in December 2016. The mission&rsquo;s headquarters is temporarily located inside the school campus.",
      "The NELAST song, composed by Gorgonia Coloma-Jimeno, will always ring in the heart of every NELA graduate.",
    ],
  },
];

/** The closing statement of the official history. */
export const historyClosing = {
  paragraph:
    "Through God&rsquo;s help and with the supervision and continual support of the North Philippine Union Conference and Southern Asia-Pacific Division, and the efforts of the whole Northeast Luzon Adventist Alumni Association, Northeast Luzon Adventist School of Technology will continue to shine and be known as",
  quote: "The School That Trains for Service.",
} as const;

/**
 * INTERACTIVE TIMELINE
 * Every entry is drawn directly from the history text above. No date, name or
 * event has been added. `source` records which chapter the entry comes from.
 */
export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const timeline: Milestone[] = [
  {
    year: "1948",
    title: "Northeast Luzon Mission established",
    description:
      "On January 1, 1948, the Northeast Luzon Mission came into existence with headquarters at Santiago, Isabela. Jose O. Bautista was the first president and Aniceto Aqui the secretary-treasurer.",
  },
  {
    year: "June 1948",
    title: "Northeast Luzon Academy opens in Divisoria",
    description:
      "The school was founded in Divisoria, Santiago, Isabela, in a building with a thatched cogon grass roof, bamboo walls and earthen floors. Four teachers &mdash; Maria S. Feliciano, Pilar A. Nicolas, Servando G. Corpuz and principal Juan A. Bangloy &mdash; taught 70 elementary and 22 high-school pioneer pupils.",
  },
  {
    year: "1949",
    title: "Enrollment grows to 70",
    description:
      "A subsidy from the Philippine Union Mission made it possible for the academy to offer second- and third-year courses.",
  },
  {
    year: "1950/1951",
    title: "A full-fledged secondary school",
    description:
      "The academy was permitted to operate as a full-fledged secondary school. The faculty increased to eight and enrollment rose to 102.",
  },
  {
    year: "April 1951",
    title: "First graduating class",
    description:
      "Northeast Luzon Academy graduated its first 20 students.",
  },
  {
    year: "1960/1961",
    title: "Relocation to Mabini, Alicia",
    description:
      "After 12 years in Divisoria, the school moved to a new facility in Mabini on 24 hectares (57.5 acres) of land, built under the direction of principal Victor C. Cabansag.",
  },
  {
    year: "1981/1982",
    title: "College program sought",
    description:
      "P. J. Barayuga applied for government approval for the college program, and NELA began offering preparatory college education courses.",
  },
  {
    year: "1983",
    title: "PUC-NELC",
    description:
      "The school became an extension campus of Philippine Union College and was renamed Philippine Union College-Northeast Luzon Campus.",
  },
  {
    year: "1996",
    title: "AUP-NELC",
    description:
      "On August 1, 1996, the Commission on Higher Education granted Philippine Union College university status as the Adventist University of the Philippines, and the extension campus became AUP-Northeast Luzon Campus.",
  },
  {
    year: "2001",
    title: "Northeast Luzon Adventist School of Technology",
    description:
      "Recognized as a full-fledged school of technology, the school was renamed NELAST &mdash; the first Adventist technical school in the Philippines &mdash; and was allowed to offer additional postsecondary technical and vocational courses.",
  },
  {
    year: "2003",
    title: "Typhoons and rebuilding",
    description:
      "Strong typhoons and other calamities destroyed buildings and facilities, and the school lost its accreditation status at that time.",
  },
  {
    year: "2006",
    title: "Auditorium built by the alumni",
    description:
      "The Northeast Luzon Academy Alumni Association (NELAAA) North America initiated the construction of the school&rsquo;s auditorium, donating 75 percent of the funding while 25 percent was raised locally.",
  },
  {
    year: "2010",
    title: "Two-story building donated",
    description:
      "A two-story building was donated by loving donors and alumni.",
  },
  {
    year: "2014",
    title: "First education majors graduate",
    description:
      "The first class of education majors graduated, and one hundred percent of them passed the Licensure Examination for Teachers. In the same year the E. A. Manalo Foundation constructed a building for the school.",
  },
  {
    year: "December 2016",
    title: "Northeast Luzon Mission inaugurated",
    description:
      "NELAST became part of the newly inaugurated Northeast Luzon Mission, whose headquarters is temporarily located inside the school campus.",
  },
  {
    year: "March 2017",
    title: "Board topnotchers",
    description:
      "In the March 2017 Licensure Examination for Teachers, Ferdinand A. Juan placed first and Venus C. Ancheta placed in the top 10 at the regional level. Both are bachelor in elementary education graduates.",
  },
  {
    year: "July 2017",
    title: "Accreditation regained",
    description:
      "The lost status was regained when Level 1 accreditation was granted by ACSCU-AAI.",
  },
  {
    year: "2017/2018",
    title: "1,776 students enrolled",
    description:
      "Enrollment comprised 52 kindergarten, 301 elementary, 525 junior high, 423 senior high, 376 technical/vocational and 99 college students.",
  },
];

/** Facts stated in the history text, surfaced as at-a-glance figures. */
export const historyFacts = [
  { value: "1948", label: "Founded in Divisoria, Santiago, Isabela" },
  { value: "21 hectares", label: "Campus along the national highway" },
  { value: "1,776", label: "Students enrolled in 2017/2018" },
  { value: "7,500+", label: "Adventist schools worldwide in our network" },
] as const;
