import { milestones, type Milestone } from "@/data/timeline";

export const metadata = {
  title: "Timeline — Yash Raj Singh",
  description: "A rough map of where I've been.",
};

const typeStyles: Record<
  Milestone["type"],
  { dot: string; label: string; labelColor: string }
> = {
  work: {
    dot: "bg-[#0891b2]",
    label: "work",
    labelColor: "text-[#0e7490] bg-[#0891b2]/10",
  },
  life: {
    dot: "bg-[#16a34a]",
    label: "life",
    labelColor: "text-[#15803d] bg-[#16a34a]/10",
  },
  project: {
    dot: "bg-[#b45309]",
    label: "project",
    labelColor: "text-[#b45309] bg-[#b45309]/10",
  },
  education: {
    dot: "bg-[#d97706]",
    label: "education",
    labelColor: "text-[#b45309] bg-[#d97706]/10",
  },
};

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 animate-[fade-in_0.4s_ease-out_both]">
      <div className="mb-12">
        <h1 className="font-display text-4xl font-bold text-[#18120a] mb-3">Timeline</h1>
        <p className="text-[#7a6a58]">A rough map of where I&apos;ve been.</p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-[#b45309] via-[#e0d8cc] to-transparent" />

        <div className="space-y-10 pl-8">
          {[...milestones].reverse().map((m, i) => {
            const s = typeStyles[m.type];
            return (
              <div
                key={i}
                className="relative animate-[slide-up_0.5s_ease-out_both]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Dot */}
                <div className={`absolute -left-8 top-1 w-2.5 h-2.5 rounded-full ${s.dot}`} />

                <div className="flex items-start gap-3 mb-1">
                  <span className="text-sm text-[#7a6a58] shrink-0">
                    {m.month ? `${m.month} ` : ""}{m.year}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${s.labelColor}`}>
                    {s.label}
                  </span>
                </div>
                <h2 className="text-base font-medium text-[#18120a] mb-1">{m.title}</h2>
                <p className="text-sm text-[#7a6a58] leading-relaxed">{m.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
