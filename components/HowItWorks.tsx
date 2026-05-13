import { StepClock, StepCandle, StepMoon } from "./svg/StepIcons";

function StepCard({
  step,
  title,
  body,
  cta,
  Icon,
}: {
  step: string;
  title: string;
  body: string;
  cta: string;
  Icon: ({ className }: { className?: string }) => JSX.Element;
}) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl border border-night-800 bg-night-900/40">
      <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-night-800 to-night-900 md:h-56">
        <Icon className="h-16 w-16 opacity-90" />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-moon-100/55">
          {step}
        </p>
        <h3 className="mt-2 font-display text-xl font-medium leading-snug text-moon-100 md:text-2xl">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-moon-100/65">
          {body}
        </p>
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-moon-100/80 transition hover:text-moon-100"
        >
          {cta}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M3 6h6m0 0L6 3m3 3L6 9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </li>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="relative border-b border-night-800/50 py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-moon-100/55">
            Step one
          </p>
          <h2
            id="how-heading"
            className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-moon-100 md:text-5xl"
          >
            You set your bedtime
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-moon-100/65">
            Sam climbs into his hammock and waits for sleep
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          <StepCard
            step="Step two"
            title="You actually sleep through the night"
            body="Sam rests peacefully, dreaming in the quiet dark"
            cta="Next"
            Icon={StepMoon}
          />
          <StepCard
            step="Step three"
            title="You reach for your phone at midnight"
            body="Sam wakes up sad, wondering why you're still awake"
            cta="Next"
            Icon={StepCandle}
          />
          <StepCard
            step="That's it"
            title="No scores, no streaks, no judgment"
            body="Just Sam, caring quietly about whether you rest"
            cta="Begin"
            Icon={StepClock}
          />
        </ol>
      </div>
    </section>
  );
}
