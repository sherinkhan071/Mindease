"use client";

import Link from "next/link";
import { useState } from "react";

const moods = [
  { emoji: "😌", label: "Calm", value: 5 },
  { emoji: "🙂", label: "Good", value: 4 },
  { emoji: "😐", label: "Okay", value: 3 },
  { emoji: "😕", label: "Low", value: 2 },
  { emoji: "😔", label: "Drained", value: 1 },
];

export default function CheckInPage() {
  const [step, setStep] = useState(1);

  const [mood, setMood] = useState<number | null>(null);
  const [stress, setStress] = useState<number | null>(null);
  const [energy, setEnergy] = useState<number | null>(null);
  const [sleep, setSleep] = useState<number | null>(null);
  const [note, setNote] = useState("");

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F4EF] text-[#252421]">
      {/* NAV */}
      <nav className="border-b border-[#E3DED5]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/dashboard"
            className="text-sm text-[#77736C] transition hover:text-[#252421]"
          >
            ← Back to dashboard
          </Link>

          <Link
            href="/"
            className="text-xl font-semibold tracking-[-0.03em]"
          >
            mind<span className="text-[#8B9A83]">ease</span>
          </Link>

          <div className="w-[110px]" />
        </div>
      </nav>

      <section className="mx-auto flex min-h-[calc(100vh-81px)] max-w-3xl items-center px-6 py-12">
        <div className="w-full">
          {/* PROGRESS */}
          <div className="mb-12">
            <div className="flex items-center justify-between text-xs text-[#8A8780]">
              <span>Daily check-in</span>
              <span>{step} of 5</span>
            </div>

            <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#E2DDD4]">
              <div
                className="h-full rounded-full bg-[#8B9A83] transition-all duration-500"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8B9A83]">
                Check in with yourself
              </p>

              <h1 className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                How are you feeling right now?
              </h1>

              <p className="mt-4 text-[#77736C]">
                There&apos;s no right answer. Just choose what feels closest.
              </p>

              <div className="mt-10 grid grid-cols-5 gap-3">
                {moods.map((item) => {
                  const selected = mood === item.value;

                  return (
                    <button
                      key={item.label}
                      onClick={() => setMood(item.value)}
                      className={`flex flex-col items-center gap-3 rounded-3xl border p-4 transition ${
                        selected
                          ? "border-[#8B9A83] bg-[#E3E8DF]"
                          : "border-[#E1DCD3] bg-white hover:-translate-y-1"
                      }`}
                    >
                      <span className="text-3xl">{item.emoji}</span>
                      <span className="text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8B9A83]">
                Stress
              </p>

              <h1 className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                How overwhelmed do you feel?
              </h1>

              <p className="mt-4 text-[#77736C]">
                Choose the level that feels most accurate right now.
              </p>

              <div className="mt-10 grid grid-cols-5 gap-3">
                {[1, 2, 3, 4, 5].map((level) => (
                  <button
                    key={level}
                    onClick={() => setStress(level)}
                    className={`aspect-square rounded-3xl border text-xl transition ${
                      stress === level
                        ? "border-[#252421] bg-[#252421] text-white"
                        : "border-[#E1DCD3] bg-white hover:-translate-y-1"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex justify-between text-xs text-[#99948B]">
                <span>Very calm</span>
                <span>Very overwhelmed</span>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8B9A83]">
                Energy
              </p>

              <h1 className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                How is your energy today?
              </h1>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  ["Low", "I feel drained"],
                  ["Okay", "Getting through the day"],
                  ["High", "I feel energised"],
                ].map(([label, description]) => (
                  <button
                    key={label}
                    onClick={() => setEnergy(label === "Low" ? 1 : label === "Okay" ? 2 : 3)}
                    className={`rounded-3xl border p-6 text-left transition ${
                      energy ===
                      (label === "Low" ? 1 : label === "Okay" ? 2 : 3)
                        ? "border-[#8B9A83] bg-[#E3E8DF]"
                        : "border-[#E1DCD3] bg-white hover:-translate-y-1"
                    }`}
                  >
                    <p className="text-lg font-medium">{label}</p>
                    <p className="mt-2 text-sm text-[#77736C]">
                      {description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8B9A83]">
                Sleep
              </p>

              <h1 className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                How much did you sleep?
              </h1>

              <p className="mt-4 text-[#77736C]">
                Choose the closest number of hours.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-5">
                {[4, 5, 6, 7, 8, 9, 10].map((hours) => (
                  <button
                    key={hours}
                    onClick={() => setSleep(hours)}
                    className={`rounded-2xl border p-5 transition ${
                      sleep === hours
                        ? "border-[#8B9A83] bg-[#E3E8DF]"
                        : "border-[#E1DCD3] bg-white hover:-translate-y-1"
                    }`}
                  >
                    <span className="block text-xl font-medium">{hours}</span>
                    <span className="mt-1 block text-xs text-[#99948B]">
                      hours
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8B9A83]">
                A moment to reflect
              </p>

              <h1 className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                What&apos;s on your mind?
              </h1>

              <p className="mt-4 text-[#77736C]">
                Write as much or as little as you'd like.
              </p>

              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Today, I feel..."
                className="mt-8 min-h-[180px] w-full resize-none rounded-3xl border border-[#E1DCD3] bg-white p-6 text-base outline-none transition placeholder:text-[#B0ABA2] focus:border-[#8B9A83]"
              />

              <p className="mt-3 text-xs text-[#99948B]">
                Your reflection is private and belongs to you.
              </p>
            </div>
          )}

          {/* BUTTONS */}
          <div className="mt-12 flex items-center justify-between">
            <button
              onClick={previousStep}
              className={`text-sm ${
                step === 1
                  ? "invisible"
                  : "text-[#77736C] hover:text-[#252421]"
              }`}
            >
              ← Previous
            </button>

            {step < 5 ? (
              <button
                onClick={nextStep}
                className="rounded-full bg-[#252421] px-7 py-3.5 text-sm text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Continue →
              </button>
            ) : (
              <button
               onClick={async () => {
  try {
    const response = await fetch("/api/check-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mood,
        stress,
        energy,
        sleep,
        note,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to save check-in");
    }

    alert("Your check-in has been saved ✦");
  } catch (error) {
    console.error(error);
    alert("Something went wrong while saving your check-in.");
  }
}}
                className="rounded-full bg-[#252421] px-7 py-3.5 text-sm text-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Complete check-in ✓
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}