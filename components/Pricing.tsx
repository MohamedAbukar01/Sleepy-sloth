type Feature = { label: string; free: boolean; premium: boolean };

const features: Feature[] = [
  { label: "Sam, the sloth companion", free: true, premium: true },
  { label: "Bedtime + wind-down timer", free: true, premium: true },
  { label: "Phone pickup detection", free: true, premium: true },
  { label: "3 ambient sounds", free: true, premium: true },
  { label: "Morning report letters", free: true, premium: true },
  { label: "Full sound library (50+) and sleep stories", free: false, premium: true },
  { label: "Smart alarm (wake during light sleep)", free: false, premium: true },
  { label: "Partner sync — two sloths, one bed", free: false, premium: true },
  { label: "Cozy World decorations and outfits", free: false, premium: true },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative border-t border-night-800/60 bg-night-900/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-moss-300">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="font-display text-3xl leading-tight text-moon-100 sm:text-4xl md:text-5xl"
          >
            Generous free. Quiet premium.
          </h2>
          <p className="mt-4 text-moon-100/70">
            The core mechanic is free forever. Premium adds sounds, stories,
            partner sync, and seasonal cosmetics for Sam.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Free card */}
          <div className="rounded-3xl border border-night-700/70 bg-night-900/70 p-8">
            <h3 className="font-display text-2xl text-moon-100">Free</h3>
            <p className="mt-1 text-sm text-moon-100/60">Everything you need to actually sleep.</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-5xl text-moon-100">$0</span>
              <span className="text-moon-100/60">forever</span>
            </div>
            <ul className="mt-6 space-y-3 text-moon-100/80">
              {features.filter((f) => f.free).map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  <Check className="text-moss-300" />
                  <span>{f.label}</span>
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="mt-8 inline-flex w-full justify-center rounded-full border border-moon-100/30 px-5 py-3 text-moon-100 transition hover:border-moon-100/60"
            >
              Join the waitlist
            </a>
          </div>

          {/* Premium card */}
          <div className="relative rounded-3xl border border-peach-300/40 bg-gradient-to-b from-dusk-700/60 to-night-900/70 p-8">
            <span className="absolute -top-3 left-8 rounded-full bg-peach-300 px-3 py-1 text-xs font-medium text-night-950">
              Premium
            </span>
            <h3 className="font-display text-2xl text-moon-100">Cozy Plus</h3>
            <p className="mt-1 text-sm text-moon-100/70">For nights you want a little softer.</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-5xl text-moon-100">$5.99</span>
              <span className="text-moon-100/60">/ month</span>
            </div>
            <p className="mt-1 text-sm text-moon-100/60">or $39.99 / year &mdash; about 44% off.</p>
            <ul className="mt-6 space-y-3 text-moon-100/85">
              {features.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  <Check className={f.premium ? "text-peach-300" : "text-moon-100/20"} />
                  <span className={f.premium ? "" : "text-moon-100/40"}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="mt-8 inline-flex w-full justify-center rounded-full bg-peach-300 px-5 py-3 font-medium text-night-950 transition hover:bg-peach-200"
            >
              Get early access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`mt-1 h-4 w-4 flex-none ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 10.5 L 9 13.5 L 14.5 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
