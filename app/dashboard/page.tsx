"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const moods = [
  { emoji: "😌", label: "Calm" },
  { emoji: "🙂", label: "Good" },
  { emoji: "😐", label: "Okay" },
  { emoji: "😕", label: "Low" },
  { emoji: "😔", label: "Drained" },
];

const stats = [
  {
    label: "Mood",
    value: "7.4",
    unit: "/ 10",
    change: "+8%",
  },
  {
    label: "Energy",
    value: "Good",
    unit: "",
    change: "+12%",
  },
  {
    label: "Sleep",
    value: "7.2",
    unit: "hrs",
    change: "+0.6h",
  },
];

export default function Dashboard() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [checkIns, setCheckIns] = useState<any[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function loadCheckIns() {
    try {
      const response = await fetch("/api/check-in");
      const data = await response.json();

      setCheckIns(data.checkIns || []);
    } catch (error) {
      console.error("Failed to load check-ins:", error);
    } finally {
      setLoading(false);
    }
  }

  loadCheckIns();
}, []);

  return (
    <main className="min-h-screen bg-[#F7F4EF] text-[#252421]">
      {/* NAVBAR */}
      <nav className="border-b border-[#E3DED5] bg-[#F7F4EF]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="text-xl font-semibold tracking-[-0.03em]"
          >
            mind<span className="text-[#8B9A83]">ease</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-[#77736C] md:flex">
            <Link
              href="/dashboard"
              className="text-[#252421]"
            >
              Dashboard
            </Link>

            <Link href="/journal" className="hover:text-[#252421]">
              Journal
            </Link>

            <Link href="/insights" className="hover:text-[#252421]">
              Insights
            </Link>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDE3D8] text-sm font-medium">
            S
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm text-[#8A8780]">
              Friday, August 21, 2026
            </p>

            <h1 className="mt-2 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
              Good afternoon, Sherin.
            </h1>

            <p className="mt-3 text-[#77736C]">
              Take a moment. See where your mind is today.
            </p>
          </div>

          <Link
            href="/check-in"
            className="rounded-full bg-[#252421] px-6 py-3 text-center text-sm text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start check-in →
          </Link>
        </div>

        {/* MAIN GRID */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          {/* CHECK IN CARD */}
          <div className="rounded-[2rem] bg-[#252421] p-7 text-white sm:p-9">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Today's check-in
                </p>

                <h2 className="mt-4 max-w-md text-3xl font-medium tracking-[-0.035em]">
                  How are you really feeling?
                </h2>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-white/10 sm:flex">
                ✦
              </div>
            </div>

            <div className="mt-9 grid grid-cols-5 gap-2 sm:gap-4">
              {moods.map((mood) => {
                const selected = selectedMood === mood.label;

                return (
                  <button
                    key={mood.label}
                    onClick={() => setSelectedMood(mood.label)}
                    className={`flex flex-col items-center gap-3 rounded-2xl p-3 transition ${
                      selected
                        ? "bg-white text-[#252421]"
                        : "bg-white/10 hover:bg-white/15"
                    }`}
                  >
                    <span className="text-2xl">{mood.emoji}</span>

                    <span
                      className={`text-[11px] ${
                        selected
                          ? "text-[#252421]"
                          : "text-white/55"
                      }`}
                    >
                      {mood.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <p className="text-sm text-white/50">
                {selectedMood
                  ? `Feeling ${selectedMood.toLowerCase()} today`
                  : "Choose how you're feeling"}
              </p>

              <Link
                href="/check-in"
                className="text-sm text-white underline underline-offset-4"
              >
                Continue
              </Link>
            </div>
          </div>

          {/* INSIGHT */}
          <div className="rounded-[2rem] bg-[#E3E8DF] p-7 sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/60">
              ✦
            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-[#7C8676]">
              MindEase noticed
            </p>

            <h2 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.03em]">
              Your energy has been higher this week.
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#687063]">
              You've reported better energy on the days you've taken a
              proper break during the afternoon.
            </p>

            <button className="mt-7 text-sm font-medium underline underline-offset-4">
              View your patterns →
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.75rem] border border-[#E1DCD3] bg-white p-6"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-[#99948B]">
                {stat.label}
              </p>

              <div className="mt-5 flex items-end gap-1">
                <span className="text-3xl font-medium">
                  {stat.value}
                </span>

                <span className="pb-1 text-sm text-[#99948B]">
                  {stat.unit}
                </span>
              </div>

              <p className="mt-2 text-xs text-[#8B9A83]">
                ↑ {stat.change} this week
              </p>
            </div>
          ))}
        </div>

        {/* LOWER SECTION */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* WEEKLY MOOD */}
          <div className="rounded-[2rem] border border-[#E1DCD3] bg-white p-7 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#99948B]">
                  Your week
                </p>

                <h2 className="mt-2 text-2xl font-medium">
                  Mood overview
                </h2>
              </div>

              <span className="text-xs text-[#99948B]">
                Last 7 days
              </span>
            </div>

            <div className="mt-10 flex h-40 items-end justify-between gap-3">
              {[58, 72, 63, 82, 68, 88, 76].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                  >
                    <div
                      className="w-full max-w-10 rounded-full bg-[#DDE3D8] transition hover:bg-[#BFCBB8]"
                      style={{ height: `${height}%` }}
                    />

                    <span className="text-[11px] text-[#99948B]">
                      {["S", "M", "T", "W", "T", "F", "S"][index]}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="rounded-[2rem] bg-[#EFE9E0] p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-[#99948B]">
              Take a moment
            </p>

            <h2 className="mt-2 text-2xl font-medium">
              What do you need right now?
            </h2>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                ["↗", "I need to focus"],
                ["♡", "I feel overwhelmed"],
                ["✎", "I want to journal"],
                ["◌", "I need a reset"],
              ].map(([icon, text]) => (
                <button
                  key={text}
                  className="flex items-center gap-4 rounded-2xl border border-[#DDD7CE] bg-white/70 p-4 text-left transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E3E8DF]">
                    {icon}
                  </span>

                  <span className="text-sm">{text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}