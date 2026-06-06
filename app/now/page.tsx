export const metadata = {
  title: "Now — Yash Raj Singh",
  description: "What I'm working on, reading, and thinking about right now.",
};

export default function NowPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 animate-[fade-in_0.4s_ease-out_both]">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold text-[#e2e8f8] mb-3">Now</h1>
        <p className="text-[#64748b] text-sm">
          Updated June 2026 · Bangalore, India
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-xs text-[#64748b] uppercase tracking-widest mb-4">building</h2>
          <ul className="space-y-3">
            {[
              "This digital garden — getting my thoughts off my head and onto the internet.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#e2e8f8]">
                <span className="text-[#7c3aed] shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-[#1e2a45]" />

        <section>
          <h2 className="text-xs text-[#64748b] uppercase tracking-widest mb-4">reading</h2>
          <ul className="space-y-3">
            {[
              "Add what you're reading here",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#e2e8f8]">
                <span className="text-[#7c3aed] shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-[#1e2a45]" />

        <section>
          <h2 className="text-xs text-[#64748b] uppercase tracking-widest mb-4">running</h2>
          <ul className="space-y-3">
            {[
              "Training consistently — 11 runs in the last 4 weeks.",
              "Working towards a half marathon.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#e2e8f8]">
                <span className="text-[#7c3aed] shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-[#1e2a45]" />

        <section>
          <h2 className="text-xs text-[#64748b] uppercase tracking-widest mb-4">thinking about</h2>
          <ul className="space-y-3">
            {[
              "Add what's on your mind right now.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#e2e8f8]">
                <span className="text-[#7c3aed] shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <p className="text-xs text-[#64748b] mt-12">
        This is a{" "}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a78bfa] hover:underline"
        >
          now page
        </a>
        . The idea is simple: what would you tell a friend you haven&apos;t seen in a while?
      </p>
    </div>
  );
}
