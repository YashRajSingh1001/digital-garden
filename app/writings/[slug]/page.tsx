import { notFound } from "next/navigation";
import { getAllWritings, getWritingBySlug } from "@/lib/writings";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllWritings().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata(props: PageProps<"/writings/[slug]">) {
  const { slug } = await props.params;
  const writing = getWritingBySlug(slug);
  if (!writing) return {};
  return {
    title: `${writing.title} — Yash Raj Singh`,
    description: writing.excerpt,
  };
}

async function markdownToHtml(content: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(remarkHtml).process(content);
  return result.toString();
}

export default async function WritingPage(props: PageProps<"/writings/[slug]">) {
  const { slug } = await props.params;
  const writing = getWritingBySlug(slug);
  if (!writing) notFound();

  const html = await markdownToHtml(writing.content);

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 animate-[fade-in_0.4s_ease-out_both]">
      <div className="mb-10">
        <Link
          href="/writings"
          className="text-xs text-[#7a6a58] hover:text-[#b45309] transition-colors mb-6 inline-block"
        >
          ← all writings
        </Link>
        <h1 className="font-display text-4xl font-bold text-[#18120a] mb-4 leading-tight">
          {writing.title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-[#7a6a58]">
          {writing.date && (
            <span>
              {new Date(writing.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          )}
          <span>{writing.readTime} min read</span>
          {writing.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded bg-[#eee8dd] text-[#7a6a58]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
