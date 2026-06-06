"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/",             label: "about"       },
  { href: "/writings",     label: "writings"    },
  { href: "/projects",     label: "projects"    },
  { href: "/75-before-30", label: "75 before 30"},
  { href: "/timeline",     label: "timeline"    },
  { href: "/now",          label: "now"         },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a3060]/60 bg-[#070d1f]/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-8 py-3 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#3b6ef7] flex items-center justify-center">
            <span className="text-white text-xs font-bold font-display">Y</span>
          </div>
          <span className="font-display text-base font-semibold text-[#e2e8f8]">Yash Raj Singh</span>
        </Link>

        <ul className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                    active
                      ? "bg-[#0f2040] text-[#e2e8f8] font-medium"
                      : "text-[#6b7fa3] hover:text-[#e2e8f8]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href="mailto:yashrajsingh1001@gmail.com"
          className="shrink-0 text-sm font-medium px-4 py-2 rounded-full bg-[#3b6ef7] text-white hover:bg-[#2d5fe0] transition-colors shadow-[0_0_20px_#3b6ef733]"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
