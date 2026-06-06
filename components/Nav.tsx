"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/writings", label: "writings" },
  { href: "/projects", label: "projects" },
  { href: "/75-before-30", label: "75 before 30" },
  { href: "/timeline", label: "timeline" },
  { href: "/now", label: "now" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e2a45] bg-[#080b14]/80 backdrop-blur-md">
      <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg text-[#e2e8f8] hover:text-[#a78bfa] transition-colors"
        >
          yash.
        </Link>

        <ul className="flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm transition-colors ${
                    active
                      ? "text-[#a78bfa]"
                      : "text-[#64748b] hover:text-[#e2e8f8]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
