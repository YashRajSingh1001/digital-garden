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
    title: "Started college",
    description: "Began engineering — first real taste of staying up late for code, not studies.",
    type: "education",
  },
  {
    year: "2021",
    title: "First side project",
    description: "Built something small. It broke. Fixed it. That feeling was addictive.",
    type: "project",
  },
  {
    year: "2022",
    title: "First internship",
    description: "Real code, real deadlines, real coffee dependency.",
    type: "work",
  },
  {
    year: "2023",
    month: "January",
    title: "Started running",
    description: "Joined Strava. First run was embarrassing. Kept going anyway.",
    type: "life",
  },
  {
    year: "2023",
    title: "Joined TresVista Road Runners",
    description: "Realized running is better with people.",
    type: "life",
  },
  {
    year: "2024",
    title: "Crossed 500km running",
    description: "Slow. Steady. Still going.",
    type: "life",
  },
  {
    year: "2025",
    title: "Something big happened",
    description: "Add your milestones here.",
    type: "work",
  },
  {
    year: "2026",
    month: "June",
    title: "Built this garden",
    description: "A place to think out loud on the internet.",
    type: "project",
  },
];
