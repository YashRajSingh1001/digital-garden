import Link from "next/link";
import { getAllWritings } from "@/lib/writings";

export const metadata = {
  title: "Writings — Yash Raj Singh",
  description: "Essays, thoughts, and things I couldn't stop thinking about.",
};

export default function WritingsPage() {
  const writings = getAllWritings();
  const byYear = writings.reduce<Record<string, typeof writings>>((acc, w) => {
    const year = w.date ? new Date(w.date).getFullYear().toString() : "undated";
    if (!acc[year]) acc[year] = [];
    acc[year].push(w);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 animate-[fade-in_0.4s_ease-out_both]">
      <div className="mb-12">
        <h1 className="font-display text-4xl font-bold text-[#e2e8f8] mb-3">Writings</h1>
        <p className="text-[#6b7fa3]">Essays, thoughts, and things I couldn&apos;t stop thinking about.</p>
      </div>
      {writings.length === 0 && <p className="text-[#6b7fa3] text-sm">Nothing published yet.</p>}
      <div className="space-y-12">
        {years.map((year) => (
          <div key={year}>
            <h2 className="text-[10px] text-[#6b7fa3] uppercase tracking-widest mb-4">{year}</h2>
            <ul className="space-y-px">
              {byYear[year].map((w) => (
                <li key={w.slug}>
                  <Link href={`/writings/${w.slug}`} className="group flex items-baseline justify-between gap-4 rounded-lg px-3 py-3 -mx-3 hover:bg-[#0c1a35] transition-colors">
                    <div className="min-w-0">
                      <span className="text-sm text-[#e2e8f8] group-hover:text-[#7babf8] transition-colors block">{w.title}</span>
                      {w.tags.length > 0 && (
                        <div className="flex gap-1.5 mt-1.5">
                          {w.tags.map((tag) => (
                            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-[#1a3060] text-[#6b7fa3]">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="shrink-0 flex items-center gap-3 text-xs text-[#6b7fa3]">
                      <span>{w.readTime} min</span>
                      <span>{w.date ? new Date(w.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" }) : ""}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
