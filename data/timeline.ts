export interface Milestone {
  year: string;
  month?: string;
  title: string;
  description: string;
  type: "work" | "life" | "project" | "education";
}

export const milestones: Milestone[] = [
  {
    year: "2002",
    month: "June",
    title: "Born",
    description: "Arrived in the world. Didn't know what I was getting into.",
    type: "life",
  },
  {
    year: "2020",
    title: "B.Sc. Mathematics & Statistics — University of Delhi",
    description: "Where the love for numbers became something serious.",
    type: "education",
  },
  {
    year: "2022",
    title: "Diploma in Business Analytics & Data Science — IIT Madras",
    description: "Bridging the gap between raw data and real decisions.",
    type: "education",
  },
  {
    year: "2022",
    title: "First internship",
    description: "Real data, real deadlines. Learned more in 3 months than a full semester.",
    type: "work",
  },
  {
    year: "2023",
    title: "First full-time role",
    description: "Put the skills to work. SQL, Python, dashboards — the full stack of analytics.",
    type: "work",
  },
  {
    year: "2026",
    month: "April",
    title: "Started taking running seriously",
    description: "Laced up and decided this time would be different. It was.",
    type: "life",
  },
  {
    year: "2026",
    month: "May",
    title: "First official 10K — 24th May",
    description: "Crossed the finish line. Didn't stop. That was the point.",
    type: "life",
  },
  {
    year: "2026",
    month: "June",
    title: "Built this garden",
    description: "A place to think out loud on the internet.",
    type: "project",
  },
];
