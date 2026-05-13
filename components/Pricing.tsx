"use client";

import { useState } from "react";

type Plan = "monthly" | "yearly";

const free = [
  "Sam's core experience",
  "Bedtime tracking",
  "Gentle notifications",
];

const premium = [
  "Sleep sounds library",
  "Bedtime stories",
  "Smart wake times",
  "Device syncing",
  "Sam cosmetics",
];

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7.5l3 3 5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 14.5l1.8 1.8L15 12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 3h8l-2 6h-4l-2-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="12" cy="15" r="5.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 13l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2L9 15.2l2-.3z" fill="currentColor" />
    </svg>
  );
}

export function Pricing() {
  const [plan, setPlan] = useState<Plan>("monthly");

  const premiumPrice = plan === "monthly" ? "$9/mo" : "$72/yr";
  const premiumNote =
    plan === "monthly" ? "Cancel any night." : "Save $36 a year.";

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative border-b border-night-800/50 py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-moon-100/55">
            Plans
          </p>
          <h2
            id="pricing-heading"
            className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-moon-100 md:text-5xl"
          >
            Simple pricing
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-moon-100/65">
            Start free. Upgrade only if you want more.
          </p>

          <div
            role="tablist"
            aria-label="Billing period"
            className="mt-8 inline-flex rounded-md border border-moon-100/20 p-1"
          >
            <button
              role="tab"
              aria-selected={plan === "monthly"}
              onClick={() => setPlan("monthly")}
              className={`rounded px-5 py-1.5 text-sm transition ${
                plan === "monthly"
                  ? "bg-moon-100/10 text-moon-100"
                  : "text-moon-100/65 hover:text-moon-100"
              }`}
            >
              Monthly
            </button>
            <button
              role="tab"
              aria-selected={plan === "yearly"}
              onClick={() => setPlan("yearly")}
              className={`rounded px-5 py-1.5 text-sm transition ${
                plan === "yearly"
                  ? "bg-moon-100/10 text-moon-100"
                  : "text-moon-100/65 hover:text-moon-100"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-moon-100/15 bg-night-900/40 p-8 md:p-10">
            <header className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-moon-100">Free plan</p>
                <p className="mt-6 font-display text-5xl font-medium tracking-tight text-moon-100 md:text-6xl">
                  Free
                </p>
              </div>
              <span className="text-moon-100/70">
                <CalendarIcon />
              </span>
            </header>

            <hr className="my-7 border-moon-100/10" />

            <p className="text-sm text-moon-100/55">Includes</p>
            <ul className="mt-3 space-y-3">
              {free.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-moon-100/85">
                  <span className="mt-0.5 text-moss-300">
                    <Check />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex-1" />

            <a
              href="#sam-waiting"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-moon-100 px-4 py-3 text-sm font-medium text-night-950 transition hover:bg-peach-200"
            >
              Start free
            </a>
          </article>

          <article className="relative flex flex-col rounded-2xl border border-moon-100/15 bg-night-900/40 p-8 md:p-10">
            <header className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-moon-100">Premium plan</p>
                <p className="mt-6 font-display text-5xl font-medium tracking-tight text-moon-100 md:text-6xl">
                  {premiumPrice}
                </p>
                <p className="mt-2 text-xs text-moon-100/55">{premiumNote}</p>
              </div>
              <span className="text-peach-300">
                <MedalIcon />
              </span>
            </header>

            <hr className="my-7 border-moon-100/10" />

            <p className="text-sm text-moon-100/55">Includes</p>
            <ul className="mt-3 space-y-3">
              {premium.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-moon-100/85">
                  <span className="mt-0.5 text-peach-300">
                    <Check />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex-1" />

            <a
              href="#sam-waiting"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-moon-100 px-4 py-3 text-sm font-medium text-night-950 transition hover:bg-peach-200"
            >
              Upgrade now
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
