import Link from "next/link";
import StravaWidget from "@/components/StravaWidget";
import { getStravaStats, getLastActivity } from "@/lib/strava";
import { getAllWritings } from "@/lib/writings";

const DOB = new Date("2002-06-23");
const TURNS_30 = new Date("2032-06-23");

function daysUntil30(): number {
  const diff = TURNS_30.getTime() - new Date().getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function age(): number {
  const now = new Date();
  let years = now.getFullYear() - DOB.getFullYear();
  const m = now.getMonth() - DOB.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < DOB.getDate())) years--;
  return years;
}

const navSections = [
  { href: "/writings",     label: "writings",     desc: "essays, thoughts, things I couldn't stop thinking about" },
  { href: "/projects",     label: "projects",     desc: "things I've built or am building" },
  { href: "/75-before-30", label: "75 before 30", desc: "a list of things I want to do before I turn 30" },
  { href: "/timeline",     label: "timeline",     desc: "a rough map of where I've been" },
  { href: "/now",          label: "now",          desc: "what I'm doing, thinking, reading right now" },
];

const skills = ["SQL", "Python", "Machine Learning", "Tableau", "MetaBase", "Alteryx", "Strategy Consulting"];

export default async function Home() {
  const [stats, lastActivity, writings] = await Promise.all([
    getStravaStats(),
    getLastActivity(),
    Promise.resolve(getAllWritings().slice(0, 3)),
  ]);

  const days = daysUntil30();
  const currentAge = age();

  return (
    <div className="mx-auto max-w-5xl px-6 pt-24 pb-20 animate-[fade-in_0.4s_ease-out_both]">
      {/* ── Hero: two-column ── */}
      <div className="flex gap-8 items-start mb-20">

        {/* Left — Profile card */}
        <aside className="w-72 shrink-0">
          <div className="rounded-2xl border border-[#1a2d50] bg-[#0d1830] overflow-hidden">
            {/* Photo area */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#112040] via-[#0d1830] to-[#070e1f] flex items-center justify-center overflow-hidden">
              {/*
                Replace this placeholder with your actual photo:
                1. Drop your photo into the /public folder as "photo.jpg"
                2. Replace the div below with:
                   <img src="/photo.jpg" alt="Yash Raj Singh" className="w-full h-full object-cover object-top" />
              */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full bg-[#1a2d50] border-2 border-[#7c3aed]/50 flex items-center justify-center">
                  <span className="font-display text-4xl font-bold text-[#a78bfa]">Y</span>
                </div>
                <p className="text-xs text-[#6b7fa3]">add photo.jpg to /public</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1830] via-transparent to-transparent" />
            </div>

            {/* Card info */}
            <div className="px-5 py-4">
              <p className="font-semibold text-[#e2e8f8] text-base">Yash Raj Singh</p>
              <p className="text-xs text-[#a78bfa] mt-0.5">@yashraj.decodes</p>
              <p className="text-xs text-[#6b7fa3] mt-2 leading-relaxed">
                Data professional · Math &amp; Stats, Delhi University · Business Analytics, IIT Madras
              </p>

              <div className="border-t border-[#1a2d50] my-3" />

              {/* Socials */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { href: "https://github.com/YashRajSingh1001", label: "GitHub" },
                  { href: "https://www.linkedin.com/in/yash-raj-singh-1001/", label: "LinkedIn" },
                  { href: "https://www.instagram.com/yashraj.decodes/", label: "Instagram" },
                  { href: "https://www.strava.com/athletes/112189344", label: "Strava" },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] px-2.5 py-1 rounded-full border border-[#1a2d50] text-[#6b7fa3] hover:text-[#a78bfa] hover:border-[#7c3aed]/40 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Right — Content */}
        <div className="flex-1 min-w-0 pt-2">
          <p className="text-xs text-[#6b7fa3] uppercase tracking-widest mb-3">About</p>
          <h1 className="font-display text-5xl font-bold text-[#e2e8f8] mb-5 leading-tight">
            Hi, I&apos;m Yash.
          </h1>

          <p className="text-[#94a3b8] text-lg leading-relaxed mb-4">
            Data professional with a background in Mathematics &amp; Statistics (Delhi University)
            and Business Analytics &amp; Data Science (IIT Madras). I turn messy data into
            decisions that actually matter.
          </p>

          <p className="text-[#6b7fa3] leading-relaxed mb-4">
            Through internships across diverse industries — operations, analytics, research — I've
            built a toolkit that spans SQL, Python, Tableau, and strategy consulting. I care about
            data accuracy, sophisticated reporting, and the story numbers tell when you treat them right.
          </p>

          <p className="text-[#6b7fa3] leading-relaxed mb-6">
            This is my digital garden — thoughts, projects, and lessons as they evolve. Not someone
            who has all the answers. Just someone documenting the path.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full bg-[#112040] border border-[#1a2d50] text-[#6b7fa3]">
                {s}
              </span>
            ))}
          </div>

          <a
            href="mailto:yashrajsingh1001@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-[#a78bfa] border border-[#7c3aed]/30 rounded-full px-4 py-2 hover:bg-[#7c3aed]/10 transition-colors"
          >
            ✉ yashrajsingh1001@gmail.com
          </a>
        </div>
      </div>

      {/* ── Strava ── */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
          <span className="text-[10px] text-[#6b7fa3] uppercase tracking-widest">on the move</span>
        </div>
        <StravaWidget stats={stats} lastActivity={lastActivity} />
      </section>

      {/* ── Explore ── */}
      <section className="mb-16">
        <p className="text-[10px] text-[#6b7fa3] uppercase tracking-widest mb-5">explore</p>
        <ul className="space-y-px">
          {navSections.map(({ href, label, desc }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex items-baseline gap-4 rounded-lg px-3 py-3.5 -mx-3 hover:bg-[#0d1830] transition-colors"
              >
                <span className="w-28 shrink-0 text-sm font-medium text-[#a78bfa] group-hover:text-[#c4b5fd] transition-colors">
                  {label}
                </span>
                <span className="text-sm text-[#6b7fa3] group-hover:text-[#94a3b8] transition-colors">
                  {desc}
                </span>
                <span className="ml-auto text-[#1a2d50] group-hover:text-[#7c3aed] transition-colors text-lg leading-none">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Recent writings ── */}
      {writings.length > 0 && (
        <section className="mb-16">
          <p className="text-[10px] text-[#6b7fa3] uppercase tracking-widest mb-5">recent writings</p>
          <ul className="space-y-1">
            {writings.map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/writings/${w.slug}`}
                  className="group flex items-baseline justify-between gap-4 rounded-lg px-3 py-2.5 -mx-3 hover:bg-[#0d1830] transition-colors"
                >
                  <span className="text-sm text-[#e2e8f8] group-hover:text-[#a78bfa] transition-colors">
                    {w.title}
                  </span>
                  <span className="shrink-0 text-xs text-[#6b7fa3]">
                    {w.date ? new Date(w.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" }) : ""}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/writings" className="inline-block mt-3 text-xs text-[#7c3aed] hover:text-[#a78bfa] transition-colors">
            all writings →
          </Link>
        </section>
      )}

      {/* ── Days until 30 ── */}
      <section className="mb-16">
        <div className="rounded-xl border border-[#1a2d50] bg-[#0d1830] px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-[#6b7fa3] uppercase tracking-widest mb-1">days until 30</p>
              <p className="font-display text-3xl font-bold text-[#a78bfa]">{days.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-[#6b7fa3] uppercase tracking-widest mb-1">the deadline</p>
              <p className="text-sm text-[#e2e8f8]">June 23, 2032</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-1 rounded-full bg-[#1a2d50] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] rounded-full"
                style={{ width: `${Math.min(100, ((currentAge - 18) / 12) * 100)}%` }}
              />
            </div>
            <p className="text-[10px] text-[#6b7fa3] mt-1.5">{currentAge} → 30 · use it well</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a2d50] pt-8 flex items-center justify-between">
        <span className="text-xs text-[#6b7fa3]">yash raj singh · {new Date().getFullYear()}</span>
        <span className="text-xs text-[#1a2d50]">built with next.js</span>
      </footer>
    </div>
  );
}
