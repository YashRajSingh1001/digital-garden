"use client";
import { useState } from "react";
import { goals, categoryColors, categoryLabels, type Goal } from "@/data/goals";

const categories = Object.keys(categoryLabels) as Goal["category"][];
const TURNS_30 = new Date("2032-06-23");
function daysLeft() { return Math.max(0, Math.ceil((TURNS_30.getTime() - Date.now()) / 86400000)); }

export default function Goals75Page() {
  const [activeCategory, setActiveCategory] = useState<Goal["category"] | "all">("all");
  const done = goals.filter((g) => g.done).length;
  const total = goals.length;
  const pct = Math.round((done / total) * 100);
  const filtered = activeCategory === "all" ? goals : goals.filter((g) => g.category === activeCategory);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 animate-[fade-in_0.4s_ease-out_both]">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold text-[#e2e8f8] mb-3">75 Before 30</h1>
        <p className="text-[#6b7fa3] mb-6">Things I want to do before June 23, 2032.</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl border border-[#1a3060] bg-[#0c1a35] px-5 py-4">
            <p className="text-[10px] text-[#6b7fa3] uppercase tracking-widest mb-2">progress</p>
            <div className="flex items-end gap-2 mb-2">
              <span className="font-display text-3xl font-bold text-[#7babf8]">{done}</span>
              <span className="text-[#6b7fa3] text-sm mb-0.5">/ {total} done</span>
            </div>
            <div className="h-1 rounded-full bg-[#1a3060] overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#3b6ef7] to-[#7babf8] rounded-full" style={{ width: `${pct}%` }} />
            </div>
            <p className="text-[10px] text-[#6b7fa3] mt-1.5">{pct}% complete</p>
          </div>
          <div className="rounded-xl border border-[#1a3060] bg-[#0c1a35] px-5 py-4">
            <p className="text-[10px] text-[#6b7fa3] uppercase tracking-widest mb-2">time left</p>
            <span className="font-display text-3xl font-bold text-[#7babf8]">{daysLeft().toLocaleString()}</span>
            <p className="text-[10px] text-[#6b7fa3] mt-1.5">days until June 23, 2032</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setActiveCategory("all")} className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${activeCategory === "all" ? "bg-[#3b6ef7]/20 border-[#3b6ef7]/40 text-[#7babf8]" : "border-[#1a3060] text-[#6b7fa3] hover:text-[#e2e8f8]"}`}>all ({total})</button>
          {categories.map((cat) => {
            const color = categoryColors[cat];
            return (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${activeCategory === cat ? "border-current" : "border-[#1a3060] text-[#6b7fa3] hover:text-[#e2e8f8]"}`}
                style={activeCategory === cat ? { color, borderColor: color, background: `${color}15` } : {}}>
                {categoryLabels[cat]} ({goals.filter((g) => g.category === cat).length})
              </button>
            );
          })}
        </div>
      </div>
      <ul className="space-y-px">
        {filtered.map((goal) => {
          const color = categoryColors[goal.category];
          return (
            <li key={goal.id}>
              <div className={`flex items-start gap-3 rounded-lg px-3 py-3 -mx-3 transition-colors ${goal.done ? "opacity-50" : "hover:bg-[#0c1a35]"}`}>
                <div className="mt-0.5 shrink-0">
                  {goal.done ? (
                    <div className="w-4 h-4 rounded-full bg-[#3b6ef7]/20 border border-[#3b6ef7] flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-[#7babf8]" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-[#1a3060]" />
                  )}
                </div>
                <span className={`text-sm leading-relaxed ${goal.done ? "line-through text-[#6b7fa3]" : "text-[#e2e8f8]"}`}>{goal.text}</span>
                <span className="ml-auto shrink-0 text-[10px] px-1.5 py-0.5 rounded" style={{ color, background: `${color}15` }}>{categoryLabels[goal.category]}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
