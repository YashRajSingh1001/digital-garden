import Link from "next/link";
import Image from "next/image";
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
  { href: "/writings", label: "writings", desc: "essays, thoughts, things I couldn't stop thinking about" },
  { href: "/projects", label: "projects", desc: "things I've built or am building" },
  { href: "/75-before-30", label: "75 before 30", desc: "a list of things I want to do before I turn 30" },
  { href: "/timeline", label: "timeline", desc: "a rough map of where I've been" },
  { href: "/now", label: "now", desc: "what I'm doing, thinking, reading right now" },
];

const socials = [
  { href: "https://github.com/YashRajSingh1001", label: "GitHub" },
  { href: "https://www.linkedin.com/in/yash-raj-singh-1001/", label: "LinkedIn" },
  { href: "https://www.instagram.com/yashraj.decodes/", label: "Instagram" },
  { href: "https://www.strava.com/athletes/112189344", label: "Strava" },
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
    <div className="mx-auto max-w-5xl px-6 py-20 animate-[fade-in_0.4s_ease-out_both]">
      <div className="flex gap-10 items-start">

        {/* ── Left: Profile Card ── */}
        <aside className="w-64 shrink-0 sticky top-24">
          <div className="rounded-2xl border border-[#1a2d50] bg-[#0d1830] overflow-hidden">
            {/* Photo */}
            <div className="relative h-56 w-full bg-gradient-to-br from-[#112040] to-[#0d1830] flex items-center justify-center">
              {/* Replace /photo.jpg with your actual photo */}
              <div className="w-28 h-28 rounded-full bg-[#1a2d50] border-2 border-[#7c3aed]/40 flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-display font-bold text-[#a78bfa]">Y</span>
              </div>
              {/* Violet glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1830] to-transparent" />
            </div>

            {/* Info */}
            <div className="px-5 py-4">
              <h2 className="font-display text-lg font-bold text-[#e2e8f8] mb-0.5">
                Yash Raj Singh
              </h2>
              <p className="text-xs text-[#6b7fa3] mb-3">Bangalore, India</p>

              <div className="border-t border-[#1a2d50] my-3" />

              <p className="text-xs text-[#6b7fa3] leading-relaxed mb-4">
                Data professional. Math &amp; Stats, Delhi University · Business Analytics &amp; Data Science, IIT Madras. Making sense of numbers, one dataset at a time.
              </p>

              {/* Social links */}
              <div className="flex flex-wrap gap-2">
                {socials.map(({ href, label }) => (
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

          {/* Days until 30 — below profile card */}
          <div className="mt-4 rounded-xl border border-[#1a2d50] bg-[#0d1830] px-5 py-4">
            <p className="text-[10px] text-[#6b7fa3] uppercase tracking-widest mb-1">days until 30</p>
            <p className="font-display text-3xl font-bold text-[#a78bfa]">{days.toLocaleString()}</p>
            <div className="mt-3 h-1 rounded-full bg-[#1a2d50] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] rounded-full"
                style={{ width: `${Math.min(100, ((currentAge - 18) / 12) * 100)}%` }}
              />
            </div>
            <p className="text-[10px] text-[#6b7fa3] mt-1.5">{currentAge} → 30 · use it well</p>
          </div>
        </aside>

        {/* ── Right: Main Content ── */}
        <main className="flex-1 min-w-0">
          {/* Hero */}
          <section className="mb-12">
            <h1 className="font-display text-5xl font-bold text-[#e2e8f8] mb-4 leading-tight">
              Hi, I&apos;m Yash.
            </h1>
            <p className="text-[#6b7fa3] text-lg leading-relaxed max-w-lg">
              Data professional with a background in Mathematics &amp; Statistics (Delhi University) and Business Analytics &amp; Data Science (IIT Madras). I work with SQL, Python, Tableau and friends to turn messy data into decisions that actually matter.
            </p>
            <p className="text-[#6b7fa3] text-base leading-relaxed max-w-lg mt-3">
              This is my digital garden — thoughts, projects, and lessons as they evolve. Not polished. Not finished. Just honest.
            </p>
            <a
              href="mailto:yashrajsingh1001@gmail.com"
              className="inline-flex items-center gap-2 mt-5 text-sm text-[#a78bfa] border border-[#7c3aed]/30 rounded-full px-4 py-1.5 hover:bg-[#7c3aed]/10 transition-colors"
            >
              ✉ yashrajsingh1001@gmail.com
            </a>
          </section>

          {/* Strava */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
              <span className="text-[10px] text-[#6b7fa3] uppercase tracking-widest">on the move</span>
            </div>
            <StravaWidget stats={stats} lastActivity={lastActivity} />
          </section>

          {/* Navigation sections */}
          <section className="mb-10">
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

          {/* Recent writings */}
          {writings.length > 0 && (
            <section>
              <h2 className="text-[10px] text-[#6b7fa3] uppercase tracking-widest mb-4">
                recent writings
              </h2>
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
              <Link href="/writings" className="inline-block mt-3 ml-0 text-xs text-[#7c3aed] hover:text-[#a78bfa] transition-colors">
                all writings →
              </Link>
            </section>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-[#1a2d50] pt-8 flex items-center justify-between">
        <span className="text-xs text-[#6b7fa3]">yash raj singh · {new Date().getFullYear()}</span>
        <span className="text-xs text-[#1a2d50]">built with next.js</span>
      </footer>
    </div>
  );
}
