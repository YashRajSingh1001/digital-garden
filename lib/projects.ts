import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "projects");

export interface Project {
  slug: string;
  title: string;
  description: string;
  status: "active" | "shipped" | "paused" | "building";
  stack: string[];
  url?: string;
  github?: string;
  year: string;
  content: string;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDir)) return [];

  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(projectsDir, file), "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        status: data.status ?? "active",
        stack: data.stack ?? [],
        url: data.url,
        github: data.github,
        year: data.year ?? new Date().getFullYear().toString(),
        content,
      } as Project;
    })
    .sort((a, b) => (a.year < b.year ? 1 : -1));
}
