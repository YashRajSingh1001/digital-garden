import { getAllProjects, type Project } from "@/lib/projects";

export const metadata = {
  title: "Projects — Yash Raj Singh",
  description: "Things I've built or am currently building.",
};

const statusStyles: Record<Project["status"], { label: string; color: string; dot: string }> = {
  active: {
    label: "active",
    color: "text-[#15803d] bg-[#15803d]/10 border-[#15803d]/20",
    dot: "bg-[#22c55e] shadow-[0_0_6px_#22c55e]",
  },
  building: {
    label: "building",
    color: "text-[#b45309] bg-[#b45309]/10 border-[#b45309]/20",
    dot: "bg-[#d97706] shadow-[0_0_6px_#d97706]",
  },
  shipped: {
    label: "shipped",
    color: "text-[#1d4ed8] bg-[#1d4ed8]/10 border-[#1d4ed8]/20",
    dot: "bg-[#3b82f6]",
  },
  paused: {
    label: "paused",
    color: "text-[#7a6a58] bg-[#7a6a58]/10 border-[#7a6a58]/20",
    dot: "bg-[#7a6a58]",
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 animate-[fade-in_0.4s_ease-out_both]">
      <div className="mb-12">
        <h1 className="font-display text-4xl font-bold text-[#18120a] mb-3">Projects</h1>
        <p className="text-[#7a6a58]">Things I&apos;ve built or am currently building.</p>
      </div>

      {projects.length === 0 && (
        <p className="text-[#7a6a58] text-sm">Add projects in the /projects directory.</p>
      )}

      <div className="space-y-4">
        {projects.map((p) => {
          const s = statusStyles[p.status];
          return (
            <div
              key={p.slug}
              className="rounded-xl border border-[#e0d8cc] bg-[#f5f0e8] p-5 hover:border-[#b45309]/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-base font-medium text-[#18120a]">{p.title}</h2>
                  <span
                    className={`flex items-center gap-1.5 text-[10px] px-2 py-0.5 rounded-full border font-medium ${s.color}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#7a6a58] hover:text-[#b45309] transition-colors"
                    >
                      github
                    </a>
                  )}
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#b45309] hover:text-[#d97706] transition-colors"
                    >
                      visit →
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-[#7a6a58] leading-relaxed mb-3">{p.description}</p>
              {p.stack.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#eee8dd] text-[#7a6a58] border border-[#e0d8cc]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
