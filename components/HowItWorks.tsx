import { StepClock, StepCandle, StepMoon } from "./svg/StepIcons";

const steps = [
  {
    Icon: StepClock,
    title: "Tell Sam your bedtime",
    body: "Pick a window that fits your life. Sam learns to start yawning before you do.",
  },
  {
    Icon: StepCandle,
    title: "Wind down together",
    body: "Lights dim, ambient sounds fade in, and Sam slowly settles into his hammock.",
  },
  {
    Icon: StepMoon,
    title: "Put the phone down. Sam sleeps.",
    body: "If you pick it up, Sam wakes up &mdash; confused, a little sad, never angry.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="relative border-t border-night-800/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-moss-300">
            How it works
          </p>
          <h2
            id="how-heading"
            className="font-display text-3xl leading-tight text-moon-100 sm:text-4xl md:text-5xl"
          >
            Three small steps. Then quiet.
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <li
                key={step.title}
                className="relative rounded-3xl border border-night-700/70 bg-night-900/50 p-7"
              >
                <span className="absolute right-6 top-6 font-display text-sm text-moon-100/40">
                  0{i + 1}
                </span>
                <Icon className="h-12 w-12" />
                <h3 className="mt-5 font-display text-2xl text-moon-100">
                  {step.title}
                </h3>
                <p
                  className="mt-3 text-moon-100/70"
                  dangerouslySetInnerHTML={{ __html: step.body }}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
