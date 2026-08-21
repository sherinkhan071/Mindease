import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EF] text-[#252421]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link href="/" className="text-xl font-semibold tracking-[-0.03em]">
          mind<span className="text-[#8B9A83]">ease</span>
        </Link>

        <div className="hidden items-center gap-10 text-sm text-[#6F6C66] md:flex">
          <a href="#how-it-works" className="transition hover:text-[#252421]">
            How it works
          </a>
          <a href="#features" className="transition hover:text-[#252421]">
            Features
          </a>
          <a href="#about" className="transition hover:text-[#252421]">
            About
          </a>
        </div>

        <Link
          href="/dashboard"
          className="rounded-full bg-[#252421] px-6 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-[#3A3935]"
        >
          Get started
        </Link>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center px-6 py-16 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DDD8CF] bg-white/60 px-4 py-2 text-xs tracking-wide text-[#6F6C66]">
              <span className="h-2 w-2 rounded-full bg-[#8B9A83]" />
              A calmer way to understand yourself
            </div>

            <h1 className="text-5xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Make space
              <br />
              for a <span className="italic text-[#8B9A83]">lighter</span> mind.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#6F6C66] sm:text-lg">
              MindEase helps you check in with yourself, reflect on your
              thoughts, understand your patterns, and build small habits that
              make everyday life feel a little easier.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="rounded-full bg-[#252421] px-7 py-4 text-center text-sm text-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                Begin your journey
              </Link>

              <a
                href="#how-it-works"
                className="rounded-full border border-[#D8D3CA] bg-white/50 px-7 py-4 text-center text-sm transition hover:bg-white"
              >
                Explore MindEase
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#DDE3D8] p-5 shadow-[0_30px_80px_rgba(50,50,40,0.12)]">
              {/* Decorative circles */}
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F0DCD0]/70" />
              <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#C7D0C1]/60" />

              {/* App preview */}
              <div className="relative flex h-full flex-col rounded-[2rem] border border-white/70 bg-[#F8F6F1]/95 p-6 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#8A8780]">Friday, August 21</p>
                    <h2 className="mt-1 text-xl font-medium">
                      Good afternoon.
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E3E8DF] text-sm">
                    ✦
                  </div>
                </div>

                <div className="mt-8 rounded-3xl bg-[#252421] p-6 text-white">
                  <p className="text-xs text-white/50">TODAY'S CHECK-IN</p>

                  <h3 className="mt-3 text-2xl font-medium">
                    How are you really feeling?
                  </h3>

                  <div className="mt-6 flex justify-between">
                    {["😌", "🙂", "😐", "😕", "😔"].map((emoji) => (
                      <div
                        key={emoji}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-white/20"
                      >
                        {emoji}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-[#E8E6DF] p-5">
                    <p className="text-xs text-[#8A8780]">MOOD</p>
                    <p className="mt-3 text-2xl">7.4</p>
                    <p className="mt-1 text-xs text-[#8A8780]">
                      ↑ 8% this week
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#E7ECE3] p-5">
                    <p className="text-xs text-[#8A8780]">ENERGY</p>
                    <p className="mt-3 text-2xl">Good</p>
                    <p className="mt-1 text-xs text-[#8A8780]">
                      Better than yesterday
                    </p>
                  </div>
                </div>

                <div className="mt-auto rounded-3xl border border-[#DDD9D0] bg-white p-5">
                  <p className="text-xs text-[#8A8780]">MINDEASE INSIGHT</p>
                  <p className="mt-2 text-sm leading-6">
                    You've been feeling more balanced on days when you take
                    time away from your screen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-[#E3DED5] bg-[#FCFAF6] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8B9A83]">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              A few minutes for yourself can change the whole day.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Check in",
                text: "Take a moment to tell MindEase how you're feeling today.",
              },
              {
                number: "02",
                title: "Reflect",
                text: "Put your thoughts into words and let MindEase help you make sense of them.",
              },
              {
                number: "03",
                title: "Understand",
                text: "Discover patterns and small actions that can help you feel more balanced.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-[2rem] border border-[#E2DDD4] bg-white p-8"
              >
                <span className="text-sm text-[#8B9A83]">{item.number}</span>

                <h3 className="mt-14 text-2xl font-medium">{item.title}</h3>

                <p className="mt-4 leading-7 text-[#77736C]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="bg-[#252421] px-6 py-24 text-white lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#AEBBA5]">
                Designed around you
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                Not another productivity app. Not another chatbot.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                "Daily check-ins",
                "AI reflections",
                "Personal patterns",
                "Weekly reports",
                "Focus resets",
                "Private journaling",
              ].map((feature) => (
                <div
                  key={feature}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <span className="text-lg">✦</span>
                  <p className="mt-8 text-sm text-white/75">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="bg-[#252421] px-6 pb-10 pt-20 text-white lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t border-white/10 pt-8 sm:flex-row">
          <div>
            <p className="text-xl font-semibold">
              mind<span className="text-[#AEBBA5]">ease</span>
            </p>
            <p className="mt-2 text-sm text-white/40">
              A little more clarity. A little less noise.
            </p>
          </div>

          <p className="text-sm text-white/40">
            © 2026 MindEase
          </p>
        </div>
      </footer>
    </main>
  );
}
