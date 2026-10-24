
import { useState } from "react";

const GOAL = 15000; // Change this to your actual phone budget
const UPI_ID = "9973261361@axl"; // Replace with your real UPI ID

const amounts = [100, 200, 500, 1000];

function App() {
  const [amount, setAmount] = useState(200);
  const [customAmount, setCustomAmount] = useState("");

  const donationAmount = customAmount
    ? Number(customAmount)
    : amount;

  function donate() {
    if (
      !Number.isFinite(donationAmount) ||
      donationAmount < 1 ||
      !Number.isInteger(donationAmount)
    ) {
      alert("Please enter a valid whole amount in rupees.");
      return;
    }

    // if (UPI_ID === "YOUR-UPI-ID@BANK") {
    //   alert("Please add your real UPI ID in App.jsx first.");
    //   return;
    // }

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
    <div className="min-h-screen overflow-hidden bg-[#fffaf0] font-body text-ink">
      {/* Navigation */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#home"
          className="font-display text-2xl font-extrabold tracking-tight"
        >
          phone<span className="text-pink-500">fund.</span> 💛
        </a>

        <a
          href="#donate"
          className="rounded-full border-2 border-ink bg-candy-yellow px-5 py-2.5 text-sm font-extrabold shadow-[3px_3px_0_#182957] transition hover:translate-y-0.5 hover:shadow-[2px_2px_0_#182957]"
        >
          Support me ✨
        </a>
      </header>

      {/* Hero */}
      <main id="home">
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-block -rotate-2 rounded-full border-2 border-ink bg-candy-blue px-4 py-2 text-sm font-extrabold">
              A little help, a fresh start 🌈
            </span>

            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl">
              Help me get
              <br />
              back to <span className="text-pink-500">phone</span>
              <br />
              life! 📱
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-700">
              My phone was stolen, and replacing it is difficult for me
              financially right now. I’m raising funds for a replacement,
              and any voluntary support would mean a lot.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#donate"
                className="rounded-2xl border-2 border-ink bg-candy-yellow px-7 py-4 font-extrabold shadow-[5px_5px_0_#182957] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#182957]"
              >
                Help me out 💛
              </a>

              <a
                href="#my-story"
                className="rounded-2xl border-2 border-ink bg-white px-7 py-4 font-extrabold shadow-[5px_5px_0_#182957] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#182957]"
              >
                Read my story
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              No pressure. Every contribution is completely voluntary.
            </p>
          </div>

          
{/* Cartoon-style illustration */}
<div className="relative mx-auto w-full max-w-lg">
  <div className="absolute inset-3 rotate-3 rounded-[2rem] bg-pink-200" />

  <div className="relative overflow-hidden rounded-[2rem] border-4 border-ink bg-candy-blue shadow-[8px_8px_0_#182957]">
    <img
      src="/images/cartoon-boy.png"
      alt="Cartoon illustration for my New Phone Fund"
      className="block h-auto w-full object-cover"
    />
  </div>

  <div className="absolute -right-2 -top-4 rotate-12 rounded-2xl border-2 border-ink bg-candy-yellow px-4 py-2 font-extrabold shadow-[3px_3px_0_#182957]">
    New phone, new dreams! ✨
  </div>
</div>

        </section>

        {/* Fundraising goal */}
        <section className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
          <div className="rounded-3xl border-4 border-ink bg-candy-yellow p-6 shadow-[6px_6px_0_#182957] sm:p-9">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-extrabold uppercase tracking-widest">
                  My fundraising goal 🎯
                </p>
                <p className="mt-2 font-display text-4xl font-extrabold sm:text-5xl">
                  ₹{GOAL.toLocaleString("en-IN")}
                </p>
              </div>

              <div className="rounded-2xl border-2 border-ink bg-white px-4 py-3">
                <p className="text-sm font-bold">Goal progress</p>
                <p className="font-display text-2xl font-extrabold">
                  0% raised
                </p>
              </div>
            </div>

            <div
              className="mt-6 h-5 overflow-hidden rounded-full border-2 border-ink bg-white"
              role="progressbar"
              aria-label="Fundraising progress"
              aria-valuemin={0}
              aria-valuemax={GOAL}
              aria-valuenow={0}
            >
              <div className="h-full w-0 rounded-full bg-pink-400" />
            </div>

            <p className="mt-3 text-sm font-semibold">
              I’ll update the progress as contributions are actually received.
            </p>
          </div>
        </section>

        {/* Story */}
        <section
          id="my-story"
          className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-2"
        >
          <article className="rounded-3xl border-3 border-ink bg-white p-7 shadow-[5px_5px_0_#182957]">
            <div className="text-4xl">🥺</div>
            <h2 className="mt-4 font-display text-3xl font-extrabold">
              What happened?
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              My phone was stolen. I’ve already reported the incident to
              the police, but arranging money for a replacement is still
              a challenge. That’s why I created this page to ask for
              voluntary help.
            </p>
          </article>

          <article className="rounded-3xl border-3 border-ink bg-candy-pink p-7 shadow-[5px_5px_0_#182957]">
            <div className="text-4xl">💻</div>
            <h2 className="mt-4 font-display text-3xl font-extrabold">
              Why I need a phone
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              As a computer science student, I use technology for
              learning, coding, communication, and college work. A
              replacement phone would help me get back to my daily
              routine.
            </p>
          </article>
        </section>

        {/* Donation */}
        <section
          id="donate"
          className="mx-auto max-w-3xl scroll-mt-8 px-5 py-12 sm:px-8"
        >
          <div className="rounded-[2rem] border-4 border-ink bg-white p-6 shadow-[7px_7px_0_#182957] sm:p-10">
            <div className="text-center">
              <span className="text-5xl">💛</span>
              <h2 className="mt-3 font-display text-4xl font-extrabold">
                Be part of my fresh start
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Choose an amount you’re comfortable with. Even a small
                contribution can help. Please contribute only if you
                wish and can afford to.
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
                  className={`rounded-2xl border-2 border-ink px-3 py-4 font-extrabold transition ${
                    !customAmount && amount === value
                      ? "bg-candy-yellow shadow-[3px_3px_0_#182957]"
                      : "bg-white hover:bg-candy-pink"
                  }`}
                >
                  ₹{value.toLocaleString("en-IN")}
                </button>
              ))}
            </div>

            <label
              htmlFor="custom-amount"
              className="mt-6 block font-extrabold"
            >
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
              className="mt-2 w-full rounded-2xl border-2 border-ink bg-[#fffaf0] px-4 py-4 outline-none focus:ring-4 focus:ring-pink-200"
            />

            <button
              type="button"
              onClick={donate}
              className="mt-5 w-full rounded-2xl border-2 border-ink bg-candy-yellow px-6 py-4 text-lg font-extrabold shadow-[4px_4px_0_#182957] transition hover:translate-y-1 hover:shadow-[2px_2px_0_#182957]"
            >
              Continue to UPI · ₹
              {Number.isFinite(donationAmount) && donationAmount > 0
                ? donationAmount.toLocaleString("en-IN")
                : "—"}{" "}
              💸
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              This button opens a compatible UPI app if available.
              Always verify the recipient name and amount before paying.
              This website does not verify or record payments automatically.
            </p>
          </div>
        </section>

        {/* Transparency */}
        <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
          <div className="rounded-3xl border-2 border-dashed border-ink bg-candy-blue p-7 text-center">
            <h2 className="font-display text-2xl font-extrabold">
              Honesty matters 🤝
            </h2>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">
              This is a personal, voluntary fundraiser, not an official
              charity. I’ll keep the goal and progress honest. Please
              don’t feel obligated to contribute.
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t-2 border-ink/10 px-5 py-8 text-center text-sm text-slate-500">
        <p className="font-display text-lg font-extrabold text-ink">
          Made with 💛 and a little hope.
        </p>
        <p className="mt-2">Thank you for visiting my page.</p>
      </footer>
    </div>
  );
}

export default App;
