import { getAllProjects, type Project } from "@/lib/projects";

export const metadata = {
  title: "Projects — Yash Raj Singh",
  description: "Things I've built or am currently building.",
};

const statusStyles: Record<Project["status"], { label: string; color: string; dot: string }> = {
  active: { label: "active", color: "text-[#22c55e] bg-[#22c55e]/10 border-[#22c55e]/20", dot: "bg-[#22c55e] shadow-[0_0_6px_#22c55e]" },
  building: { label: "building", color: "text-[#f59e0b] bg-[#f59e0b]/10 border-[#f59e0b]/20", dot: "bg-[#f59e0b] shadow-[0_0_6px_#f59e0b]" },
  shipped: { label: "shipped", color: "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/20", dot: "bg-[#a78bfa]" },
  paused: { label: "paused", color: "text-[#6b7fa3] bg-[#6b7fa3]/10 border-[#6b7fa3]/20", dot: "bg-[#6b7fa3]" },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 animate-[fade-in_0.4s_ease-out_both]">
      <div className="mb-12">
        <h1 className="font-display text-4xl font-bold text-[#e2e8f8] mb-3">Projects</h1>
        <p className="text-[#6b7fa3]">Things I&apos;ve built or am currently building.</p>
      </div>

      {projects.length === 0 && (
        <p className="text-[#6b7fa3] text-sm">Add projects in the /projects directory.</p>
      )}

      <div className="space-y-4">
        {projects.map((p) => {
          const s = statusStyles[p.status];
          return (
            <div key={p.slug} className="rounded-xl border border-[#1a2d50] bg-[#0d1830] p-5 hover:border-[#7c3aed]/40 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <h2 className="text-base font-medium text-[#e2e8f8]">{p.title}</h2>
                  <span className={`flex items-center gap-1.5 text-[10px] px-2 py-0.5 rounded-full border font-medium ${s.color}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {s.label}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-[#6b7fa3] hover:text-[#a78bfa] transition-colors">github</a>}
                  {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[#a78bfa] hover:text-[#c4b5fd] transition-colors">visit →</a>}
                </div>
              </div>
              <p className="text-sm text-[#6b7fa3] leading-relaxed mb-3">{p.description}</p>
              {p.stack.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-[#112040] text-[#6b7fa3] border border-[#1a2d50]">{tech}</span>
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
