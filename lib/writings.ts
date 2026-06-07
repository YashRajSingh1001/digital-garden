import fs from "fs";
import path from "path";
import matter from "gray-matter";

const writingsDir = path.join(process.cwd(), "writings");

export interface Writing {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: number;
  content: string;
  mediumUrl?: string;
}

function calcReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getAllWritings(): Writing[] {
  if (!fs.existsSync(writingsDir)) return [];

  const files = fs.readdirSync(writingsDir).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(writingsDir, file), "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? content.slice(0, 160).trim() + "...",
        tags: data.tags ?? [],
        readTime: calcReadTime(content),
        content,
        mediumUrl: data.mediumUrl,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getWritingBySlug(slug: string): Writing | null {
  const filePath = path.join(writingsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? content.slice(0, 160).trim() + "...",
    tags: data.tags ?? [],
    readTime: calcReadTime(content),
    content,
    mediumUrl: data.mediumUrl,
  };
}
