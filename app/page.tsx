import Link from "next/link";
import StravaWidget from "@/components/StravaWidget";
import { getStravaStats, getLastActivity } from "@/lib/strava";
import { getAllWritings } from "@/lib/writings";

const DOB = new Date("2002-06-23");
const TURNS_30 = new Date("2032-06-23");

function daysUntil30(): number {
  const now = new Date();
  const diff = TURNS_30.getTime() - now.getTime();
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
  {
    href: "/writings",
    label: "writings",
    desc: "essays, thoughts, things I couldn't stop thinking about",
  },
  {
    href: "/projects",
    label: "projects",
    desc: "things I've built or am building",
  },
  {
    href: "/75-before-30",
    label: "75 before 30",
    desc: "a list of things I want to do before I turn 30",
  },
  {
    href: "/timeline",
    label: "timeline",
    desc: "a rough map of where I've been",
  },
  {
    href: "/now",
    label: "now",
    desc: "what I'm doing, thinking, reading right now",
  },
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
    <div className="mx-auto max-w-3xl px-6 py-20 animate-[fade-in_0.4s_ease-out_both]">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="font-display text-5xl font-bold text-[#18120a] mb-4 leading-tight">
          Yash Raj Singh
        </h1>
        <p className="text-[#7a6a58] text-lg leading-relaxed max-w-xl">
          {currentAge} years old. Running, building, thinking out loud.
          This is my digital garden — a place for ideas that are growing,
          not finished.
        </p>
      </section>

      {/* Strava */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
          <span className="text-xs text-[#7a6a58] uppercase tracking-widest">on the move</span>
        </div>
        <StravaWidget stats={stats} lastActivity={lastActivity} />
      </section>

      {/* Navigation sections */}
      <section className="mb-16">
        <ul className="space-y-px">
          {navSections.map(({ href, label, desc }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex items-baseline gap-4 rounded-lg px-3 py-3.5 -mx-3
                  hover:bg-[#f5f0e8] transition-colors"
              >
                <span className="w-32 shrink-0 text-sm font-medium text-[#b45309] group-hover:text-[#d97706] transition-colors">
                  {label}
                </span>
                <span className="text-sm text-[#7a6a58] group-hover:text-[#18120a] transition-colors">
                  {desc}
                </span>
                <span className="ml-auto text-[#e0d8cc] group-hover:text-[#b45309] transition-colors text-lg leading-none">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 30 countdown */}
      <section className="mb-16">
        <div className="rounded-xl border border-[#e0d8cc] bg-[#f5f0e8] px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#7a6a58] uppercase tracking-widest mb-1">
                days until 30
              </p>
              <p className="font-display text-3xl font-bold text-[#b45309]">
                {days.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-[#7a6a58] uppercase tracking-widest mb-1">
                the deadline
              </p>
              <p className="text-sm text-[#18120a]">June 23, 2032</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-1 rounded-full bg-[#e0d8cc] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#b45309] to-[#d97706] rounded-full"
                style={{
                  width: `${Math.min(100, ((currentAge - 18) / 12) * 100)}%`,
                }}
              />
            </div>
            <p className="text-xs text-[#7a6a58] mt-1.5">
              {currentAge} → 30 · use it well
            </p>
          </div>
        </div>
      </section>

      {/* Recent writings */}
      {writings.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xs text-[#7a6a58] uppercase tracking-widest mb-4">
            recent writings
          </h2>
          <ul className="space-y-3">
            {writings.map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/writings/${w.slug}`}
                  className="group flex items-baseline justify-between gap-4 rounded-lg px-3 py-2.5 -mx-3 hover:bg-[#f5f0e8] transition-colors"
                >
                  <span className="text-sm text-[#18120a] group-hover:text-[#b45309] transition-colors">
                    {w.title}
                  </span>
                  <span className="shrink-0 text-xs text-[#7a6a58]">
                    {w.date
                      ? new Date(w.date).toLocaleDateString("en-IN", {
                          month: "short",
                          year: "numeric",
                        })
                      : ""}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/writings"
            className="inline-block mt-3 text-xs text-[#b45309] hover:text-[#d97706] transition-colors"
          >
            all writings →
          </Link>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-[#e0d8cc] pt-8 flex items-center justify-between">
        <span className="text-xs text-[#7a6a58]">
          yash raj singh · {new Date().getFullYear()}
        </span>
        <div className="flex items-center gap-4">
          {[
            { href: "https://github.com/YashRajSingh1001", label: "github" },
            { href: "https://twitter.com/", label: "x" },
            { href: "https://linkedin.com/", label: "linkedin" },
            { href: "https://www.strava.com/athletes/112189344", label: "strava" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#7a6a58] hover:text-[#b45309] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
