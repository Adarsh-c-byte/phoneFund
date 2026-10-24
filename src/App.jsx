
import { useState } from "react";

const GOAL = 15000;
const UPI_ID = "9973261361@axl";
const amounts = [100, 200, 500, 1000];


function CardDoodles({ variant = "one" }) {
  return (
    <div className={`card-doodles doodles-${variant}`} aria-hidden="true">
      <span className="sketch sketch-star">✳</span>
      <span className="sketch sketch-heart">♡</span>
      <span className="sketch sketch-spark">✧</span>
      <span className="sketch sketch-squiggle">〰</span>
      <span className="sketch sketch-flower">✿</span>
      <span className="sketch sketch-dot">✦</span>
    </div>
  );
}


function App() {
  const [amount, setAmount] = useState(200);
  const [customAmount, setCustomAmount] = useState("");

  const donationAmount = customAmount !== "" ? Number(customAmount) : amount;

  function donate() {
    if (
      !Number.isFinite(donationAmount) ||
      donationAmount < 1 ||
      !Number.isInteger(donationAmount)
    ) {
      alert("Please enter a valid whole amount in rupees.");
      return;
    }

    const params = new URLSearchParams({
      pa: UPI_ID,
      pn: "New Phone Fund",
      am: donationAmount.toFixed(2),
      cu: "INR",
      tn: "Voluntary support for a replacement phone",
    });

    window.location.href = `upi://pay?${params.toString()}`;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#fffaf5] font-body text-ink">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/70 bg-[#fffaf5]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="font-display text-2xl font-extrabold tracking-tight">
            phone<span className="text-pink-500">fund.</span>
            <span className="ml-1">💛</span>
          </a>

          <a
            href="#donate"
            className="rounded-full bg-ink px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-950/15 transition duration-300 hover:-translate-y-0.5 hover:bg-pink-500"
          >
            Support me <span className="ml-1">↗</span>
          </a>
        </nav>
      </header>

      <main id="home">
        {/* Hero */}
        <section className="hero-bg relative isolate">
          
  {/* Hand-drawn doodles */}
  <div className="doodle-layer" aria-hidden="true">
    <span className="doodle doodle-star">✳</span>
    <span className="doodle doodle-heart">♡</span>
    <span className="doodle doodle-spark">✧</span>
    <span className="doodle doodle-smile">☺</span>
    <span className="doodle doodle-phone">📱</span>
    <span className="doodle doodle-arrow">〰</span>
    <span className="doodle doodle-flower">✿</span>
  </div>

          <div className="pointer-events-none absolute -left-20 top-24 -z-10 h-64 w-64 rounded-full bg-pink-200/60 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-2">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-extrabold shadow-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-pink-500" />
                A little help, a fresh start
                <span>🌈</span>
              </div>

              <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                One phone.
                <br />
                A <span className="gradient-text">fresh start.</span>
                <br />
                <span className="text-ink">New possibilities.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                My phone was stolen, and replacing it is financially difficult
                right now. I'm raising funds for a replacement. If you're able
                and willing to help, every contribution means a lot.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#donate"
                  className="primary-button rounded-2xl bg-ink px-7 py-4 font-extrabold text-white shadow-xl shadow-blue-950/20"
                >
                  Support my goal <span className="ml-2">💛</span>
                </a>

                <a
                  href="#my-story"
                  className="rounded-2xl border border-slate-200 bg-white/80 px-7 py-4 font-extrabold transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg"
                >
                  My story <span className="ml-1">↓</span>
                </a>
              </div>

              <div className="mt-7 flex items-center gap-3 text-sm text-slate-500">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">
                  ✓
                </span>
                <p>Voluntary support. No pressure, ever.</p>
              </div>
            </div>

            {/* Illustration */}
            <div className="animate-fade-up relative mx-auto w-full max-w-md [animation-delay:180ms]">
              <div className="absolute -left-5 top-10 h-24 w-24 rounded-full bg-candy-yellow/70 blur-xl" />
              <div className="absolute -right-4 bottom-12 h-28 w-28 rounded-full bg-pink-300/70 blur-xl" />

              <div className="animate-float relative rounded-[2rem] border border-white/80 bg-white/70 p-3 shadow-2xl shadow-indigo-950/10 backdrop-blur-md sm:p-5">
                <div className="overflow-hidden rounded-[1.5rem] bg-candy-blue">
                  <img
                    src="/images/cartoon-boy.png"
                    alt="Cartoon illustration for my New Phone Fund"
                    className="block h-auto w-full object-cover"
                  />
                </div>

                <div className="absolute -left-5 top-10 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl">
                  <span className="text-xl">✨</span>
                  <span className="ml-2 text-sm font-extrabold">Fresh start</span>
                </div>

                <div className="absolute -right-3 bottom-14 rounded-2xl border border-white bg-candy-yellow px-4 py-3 shadow-xl">
                  <span className="text-sm font-extrabold">Dream big! 📱</span>
                </div>
              </div>

              <div className="absolute -right-1 top-0 animate-twinkle text-3xl">
                ✦
              </div>
              <div className="absolute -left-4 bottom-2 animate-twinkle text-2xl [animation-delay:700ms]">
                ✧
              </div>
            </div>
          </div>
        </section>

        {/* Goal */}
        <section className="mx-auto max-w-5xl scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16">
         <div className="premium-card relative rounded-[2rem] border border-white bg-white p-6 shadow-xl shadow-indigo-950/5 sm:p-10">
            <CardDoodles variant="one" />
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-pink-500">
                  The goal
                </p>
                <h2 className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">
                  ₹{GOAL.toLocaleString("en-IN")}
                </h2>
                <p className="mt-2 text-slate-500">
                  My target for a replacement phone.
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff5dc] px-5 py-4">
                <p className="text-sm font-bold text-slate-500">Verified raised</p>
                <p className="mt-1 font-display text-2xl font-extrabold">₹0</p>
              </div>
            </div>

            <div
              className="mt-8 h-3 overflow-hidden rounded-full bg-slate-100"
              role="progressbar"
              aria-label="Fundraising progress"
              aria-valuemin={0}
              aria-valuemax={GOAL}
              aria-valuenow={0}
            >
              <div className="h-full w-0 rounded-full bg-gradient-to-r from-pink-400 to-orange-300" />
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 text-sm">
              <span className="font-bold text-slate-600">0% of goal</span>
              <span className="text-slate-500">₹15,000 target</span>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              I'll update the total as contributions are received and verified.
            </p>
          </div>
        </section>

        {/* Story */}
        <section
          id="my-story"
          className="mx-auto max-w-6xl scroll-mt-24 px-5 py-12 sm:px-8 sm:py-16"
        >
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-pink-500">
              A little about me
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Behind this little fundraiser
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Sometimes an unexpected setback makes a little kindness go a long way.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="premium-card relative rounded-3xl border border-pink-100 bg-white p-7 sm:p-9">
  <CardDoodles variant="two" />
              <div className="relative z-10">
                <div className="mb-4 inline-block -rotate-6 rounded-lg border-2 border-dashed border-[#c98b9d] bg-[#f5cbd8] px-3 py-1 text-sm font-extrabold">
  THE STORY ✎
</div>
              {/* <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-3xl">
                🥺
              </div> */}
              <h3 className="mt-5 font-display text-2xl font-extrabold">
                What happened?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                My phone was stolen. I've reported the incident to the police,
                but arranging money for a replacement remains a challenge.
                That's why I created this page to ask for voluntary help.
              </p>
              </div>
            </article>

            <article className="premium-card relative rounded-3xl border border-pink-100 bg-white p-7 sm:p-9">
  <CardDoodles variant="three" />
            <div className="relative z-10">
              <div className="mb-4 inline-block rotate-3 rounded-lg border-2 border-dashed border-[#a2b9b1] bg-[#d5e8e8] px-3 py-1 text-sm font-extrabold">
  MY WHY ♡
</div>
              {/* <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                💻
              </div> */}
              <h3 className="mt-5 font-display text-2xl font-extrabold">
                Why it matters
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                As a computer science student, I rely on technology for learning,
                coding, communication, and college work. A replacement phone
                would help me return to my regular routine.
              </p>
            </div>
            </article>
          </div>
        </section>

        {/* Donation */}
        <section
          id="donate"
          className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-3xl">
            <div className="rounded-[2rem] bg-gradient-to-br from-pink-100 via-[#fff3d1] to-sky-100 p-2 sm:p-3">
              <div className="premium-card relative rounded-[1.7rem] border border-white bg-white/90 p-6 shadow-xl shadow-indigo-950/5 backdrop-blur sm:p-10">
                <CardDoodles variant="four" />
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 animate-float items-center justify-center rounded-2xl bg-pink-100 text-3xl">
                    💛
                  </div>
                  <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.18em] text-pink-500">
                    Every bit of kindness counts
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
                    Be part of my fresh start
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
                    Choose any amount you're comfortable with. Please contribute
                    only if you want to and can afford to.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {amounts.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setAmount(value);
                        setCustomAmount("");
                      }}
                      aria-pressed={!customAmount && amount === value}
                      className={`amount-button rounded-2xl border px-3 py-4 font-extrabold ${
                        !customAmount && amount === value
                          ? "selected-amount border-ink bg-candy-yellow"
                          : "border-slate-200 bg-white hover:border-pink-300 hover:bg-pink-50"
                      }`}
                    >
                      ₹{value.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>

                <label htmlFor="custom-amount" className="mt-6 block font-extrabold">
                  Or enter a custom amount (₹)
                </label>
                <input
                  id="custom-amount"
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  value={customAmount}
                  onChange={(event) => setCustomAmount(event.target.value)}
                  placeholder="Enter amount"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#fffaf5] px-4 py-4 outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                />

                <button
                  type="button"
                  onClick={donate}
                  className="primary-button mt-5 w-full rounded-2xl bg-ink px-6 py-4 text-lg font-extrabold text-white shadow-lg shadow-blue-950/15"
                >
                  Continue to UPI · ₹
                  {Number.isFinite(donationAmount) && donationAmount > 0
                    ? donationAmount.toLocaleString("en-IN")
                    : "—"}{" "}
                  ↗
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                  Verify the recipient name and amount in your UPI app before paying.
                  This website does not automatically verify or record payments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-7 text-center sm:p-10">
            <CardDoodles variant="two" />
            <span className="text-3xl">🤝</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold">
              Your trust matters
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
              This is a personal fundraiser, not an official charity.
              I'll keep the fundraising goal and reported contributions honest.
              There's never any obligation to donate.
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-slate-200 bg-white/70 px-5 py-9 text-center">
        <a href="#home" className="font-display text-xl font-extrabold">
          phone<span className="text-pink-500">fund.</span> 💛
        </a>
        <p className="mt-2 text-sm text-slate-500">
          Made with hope, courage, and a little kindness.
        </p>
        <a
          href="#home"
          className="mt-4 inline-block text-sm font-bold text-slate-500 transition hover:text-pink-500"
        >
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
