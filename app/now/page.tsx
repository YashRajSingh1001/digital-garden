export const metadata = { title: "Now — Yash Raj Singh" };

export default function NowPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 animate-[fade-in_0.4s_ease-out_both]">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold text-[#e2e8f8] mb-3">Now</h1>
        <p className="text-[#6b7fa3] text-sm">Updated June 2026 · Bangalore, India</p>
      </div>
      <div className="space-y-10">
        {[
          { label: "building",        items: ["This digital garden — getting my thoughts off my head and onto the internet."] },
          { label: "reading",         items: ["Add what you're reading here."] },
          { label: "running",         items: ["Training consistently — 11 runs in the last 4 weeks.", "Working towards a half marathon."] },
          { label: "thinking about",  items: ["Add what's on your mind right now."] },
        ].map(({ label, items }, si) => (
          <div key={si}>
            {si > 0 && <div className="border-t border-[#1a3060] mb-10" />}
            <h2 className="text-[10px] text-[#6b7fa3] uppercase tracking-widest mb-4">{label}</h2>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#e2e8f8]">
                  <span className="text-[#3b6ef7] shrink-0 mt-0.5">▸</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#6b7fa3] mt-12">
        This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-[#7babf8] hover:underline">now page</a>.
        What would you tell a friend you haven&apos;t seen in a while?
      </p>
    </div>
  );
}
