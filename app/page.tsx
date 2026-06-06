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

const skills = ["Python", "SQL", "PySpark", "Azure Databricks", "Machine Learning", "Tableau", "MetaBase", "Alteryx", "AWS", "Google Apps Script"];

const socials = [
  { href: "https://github.com/YashRajSingh1001",                label: "GitHub"    },
  { href: "https://www.linkedin.com/in/yash-raj-singh-1001/",  label: "LinkedIn"  },
  { href: "https://www.instagram.com/yashraj.decodes/",        label: "Instagram" },
  { href: "https://www.strava.com/athletes/112189344",         label: "Strava"    },
];

export default async function Home() {
  const [stats, lastActivity, writings] = await Promise.all([
    getStravaStats(),
    getLastActivity(),
    Promise.resolve(getAllWritings().slice(0, 3)),
  ]);

  const days = daysUntil30();
  const currentAge = age();

  return (
    <div className="mx-auto max-w-6xl px-8 pt-24 pb-20 animate-[fade-in_0.4s_ease-out_both]">

      {/* ── HERO ── */}
      <div className="flex gap-12 items-start mb-24">

        {/* LEFT — Profile Card */}
        <div className="w-[300px] shrink-0 rounded-2xl border border-[#1a3060] bg-[#0c1a35] overflow-hidden">

          {/* Photo */}
          <div className="w-full aspect-square overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo.jpg"
              alt="Yash Raj Singh"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Info — centered */}
          <div className="px-6 py-5 text-center">
            <p className="font-bold text-[#e2e8f8] text-lg leading-snug">Yash Raj Singh</p>
            <p className="text-sm text-[#7babf8] mt-1">@yashraj.decodes</p>
            <p className="text-xs text-[#6b7fa3] mt-2">Data Scientist II · MiQ</p>

            <div className="border-t border-[#1a3060] my-4" />

            <div className="flex flex-wrap justify-center gap-2">
              {socials.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] px-3 py-1 rounded-full border border-[#1a3060] text-[#6b7fa3] hover:text-[#7babf8] hover:border-[#3b6ef7]/50 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="flex-1 min-w-0 pt-1">
          <p className="text-xs font-semibold text-[#3b6ef7] uppercase tracking-[0.15em] mb-4">About</p>

          <h1 className="font-display text-6xl font-bold text-[#e2e8f8] leading-tight mb-6">
            Hi, I&apos;m Yash.
          </h1>

          <p className="text-[#94a3b8] text-lg leading-relaxed mb-4">
            Data Scientist II at MiQ. Background in Mathematics &amp; Statistics
            (Delhi University, 9.09 GPA) and Business Analytics &amp; Data Science
            (IIT Madras, 8.64 CGPA).
          </p>

          <p className="text-[#6b7fa3] leading-relaxed mb-4">
            Previously at Treebo and TresVista — revenue strategy, BI dashboards,
            automated pipelines. Now at MiQ going deeper: PySpark, Azure Databricks,
            ML at scale. AWS certified in Cloud &amp; AI (2025).
          </p>

          <p className="text-[#6b7fa3] leading-relaxed mb-8">
            This is my digital garden — not someone who has all the answers,
            just someone documenting the path.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-[#0f2040] border border-[#1a3060] text-[#6b7fa3]">
                {s}
              </span>
            ))}
          </div>

          <a
            href="mailto:yashrajsingh1001@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#3b6ef7] hover:bg-[#2d5fe0] px-6 py-2.5 rounded-full transition-colors shadow-[0_0_24px_#3b6ef733]"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Strava */}
      <section className="mb-14">
        <p className="text-xs font-semibold text-[#3b6ef7] uppercase tracking-[0.15em] mb-4">On the move</p>
        <StravaWidget stats={stats} lastActivity={lastActivity} />
      </section>

      {/* Explore */}
      <section className="mb-14">
        <p className="text-xs font-semibold text-[#3b6ef7] uppercase tracking-[0.15em] mb-5">Explore</p>
        <ul className="space-y-1">
          {navSections.map(({ href, label, desc }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex items-baseline gap-6 rounded-xl px-4 py-3.5 -mx-4 hover:bg-[#0c1a35] transition-colors"
              >
                <span className="w-28 shrink-0 text-sm font-medium text-[#7babf8] group-hover:text-[#a5c8fc] transition-colors">
                  {label}
                </span>
                <span className="text-sm text-[#6b7fa3] group-hover:text-[#94a3b8] transition-colors">
                  {desc}
                </span>
                <span className="ml-auto text-[#1a3060] group-hover:text-[#3b6ef7] transition-colors">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Recent writings */}
      {writings.length > 0 && (
        <section className="mb-14">
          <p className="text-xs font-semibold text-[#3b6ef7] uppercase tracking-[0.15em] mb-5">Recent writings</p>
          <ul className="space-y-1">
            {writings.map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/writings/${w.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-xl px-4 py-3 -mx-4 hover:bg-[#0c1a35] transition-colors"
                >
                  <span className="text-sm text-[#e2e8f8] group-hover:text-[#7babf8] transition-colors">{w.title}</span>
                  <span className="shrink-0 text-xs text-[#6b7fa3]">
                    {w.date ? new Date(w.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" }) : ""}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/writings" className="inline-block mt-3 text-xs text-[#3b6ef7] hover:text-[#7babf8] transition-colors">
            all writings →
          </Link>
        </section>
      )}

      {/* Countdown */}
      <section className="mb-14">
        <p className="text-xs font-semibold text-[#3b6ef7] uppercase tracking-[0.15em] mb-4">The countdown</p>
        <div className="rounded-2xl border border-[#1a3060] bg-[#0c1a35] px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] text-[#6b7fa3] uppercase tracking-widest mb-1">days until 30</p>
              <p className="font-display text-4xl font-bold text-[#7babf8]">{days.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-[#6b7fa3] uppercase tracking-widest mb-1">deadline</p>
              <p className="text-sm text-[#e2e8f8]">June 23, 2032</p>
            </div>
          </div>
          <div className="h-1.5 rounded-full bg-[#1a3060] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#3b6ef7] to-[#7babf8] rounded-full"
              style={{ width: `${Math.min(100, ((currentAge - 18) / 12) * 100)}%` }}
            />
          </div>
          <p className="text-[10px] text-[#6b7fa3] mt-2">{currentAge} → 30 · use it well</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a3060] pt-8 flex items-center justify-between">
        <span className="text-xs text-[#6b7fa3]">yash raj singh · {new Date().getFullYear()}</span>
        <a href="mailto:yashrajsingh1001@gmail.com" className="text-xs text-[#6b7fa3] hover:text-[#7babf8] transition-colors">
          yashrajsingh1001@gmail.com
        </a>
      </footer>
    </div>
  );
}
