import { milestones, type Milestone } from "@/data/timeline";

export const metadata = {
  title: "Timeline — Yash Raj Singh",
  description: "A rough map of where I've been.",
};

const typeStyles: Record<Milestone["type"], { dot: string; label: string; labelColor: string }> = {
  work:      { dot: "bg-[#06b6d4] shadow-[0_0_8px_#06b6d466]", label: "work",      labelColor: "text-[#06b6d4] bg-[#06b6d4]/10" },
  life:      { dot: "bg-[#22c55e] shadow-[0_0_8px_#22c55e66]", label: "life",      labelColor: "text-[#22c55e] bg-[#22c55e]/10" },
  project:   { dot: "bg-[#a78bfa] shadow-[0_0_8px_#a78bfa66]", label: "project",   labelColor: "text-[#a78bfa] bg-[#a78bfa]/10" },
  education: { dot: "bg-[#f59e0b] shadow-[0_0_8px_#f59e0b66]", label: "education", labelColor: "text-[#f59e0b] bg-[#f59e0b]/10" },
};

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 animate-[fade-in_0.4s_ease-out_both]">
      <div className="mb-12">
        <h1 className="font-display text-4xl font-bold text-[#e2e8f8] mb-3">Timeline</h1>
        <p className="text-[#6b7fa3]">A rough map of where I&apos;ve been.</p>
      </div>

      <div className="relative">
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-[#7c3aed] via-[#1a2d50] to-transparent" />
        <div className="space-y-10 pl-8">
          {[...milestones].reverse().map((m, i) => {
            const s = typeStyles[m.type];
            return (
              <div key={i} className="relative animate-[slide-up_0.5s_ease-out_both]" style={{ animationDelay: `${i * 60}ms` }}>
                <div className={`absolute -left-8 top-1 w-2.5 h-2.5 rounded-full ${s.dot}`} />
                <div className="flex items-start gap-3 mb-1">
                  <span className="text-sm text-[#6b7fa3] shrink-0">{m.month ? `${m.month} ` : ""}{m.year}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${s.labelColor}`}>{s.label}</span>
                </div>
                <h2 className="text-base font-medium text-[#e2e8f8] mb-1">{m.title}</h2>
                <p className="text-sm text-[#6b7fa3] leading-relaxed">{m.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
