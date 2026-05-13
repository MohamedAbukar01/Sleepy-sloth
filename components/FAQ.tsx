"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Will pickup detection drain my battery?",
    a: "No. We use the significant-motion API rather than continuous accelerometer polling, and only listen during the sleep window. Most beta testers see less than 1% extra overnight drain.",
  },
  {
    q: "What data do you collect about my sleep?",
    a: "The minimum: when wind-down starts and ends, whether your phone moved during sleep hours, and a rough total. No audio recording, no biometrics, no third-party tracking. You can export or delete everything at any time.",
  },
  {
    q: "Does it work without an internet connection?",
    a: "Yes. Sam, ambient sounds you've downloaded, and the wind-down routine all work offline. Sync resumes the next time you're online.",
  },
  {
    q: "Can I share Sam with my partner?",
    a: "On Premium, you can run Partner Sync — two sloths sharing one bed. If one of you stays up late, you'll both see it the next morning, gently.",
  },
  {
    q: "What if I have a really bad night?",
    a: "Tap the “I’m having a rough night” button. Sam dozes off without judging you. Bad nights don't reset progress or break anything. There's nothing to lose here.",
  },
  {
    q: "When is launch?",
    a: "Q3 2026 on iOS and Android. Join the waitlist and we'll email you the day Sam is ready to meet you.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative border-t border-night-800/60 bg-night-900/40"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-moss-300">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="font-display text-3xl leading-tight text-moon-100 sm:text-4xl md:text-5xl"
        >
          Small questions, small answers.
        </h2>

        <ul className="mt-10 divide-y divide-night-700/70 overflow-hidden rounded-3xl border border-night-700/70 bg-night-900/60">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-night-800/40"
                >
                  <span className="font-display text-lg text-moon-100">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-night-700 text-moon-100/70 transition ${
                      isOpen ? "rotate-45 border-peach-300 text-peach-300" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  hidden={!isOpen}
                  className="px-6 pb-6 text-moon-100/75"
                >
                  {item.a}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
