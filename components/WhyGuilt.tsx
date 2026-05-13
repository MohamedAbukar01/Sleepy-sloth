import { MorningLetter } from "./svg/MorningLetter";

export function WhyGuilt() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative border-b border-night-800/50 py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-night-800 bg-night-900/40">
          <div className="grid items-center gap-0 md:grid-cols-2">
            <div className="p-10 md:p-14">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-moss-300">
                Why
              </p>
              <h2
                id="why-heading"
                className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-moon-100 md:text-5xl"
              >
                Guilt doesn&apos;t change behaviour
              </h2>
            </div>

            <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-dusk-700/40 to-night-900 p-10 md:p-14">
              <MorningLetter className="h-auto w-44 md:w-52" />
              <p className="mt-8 max-w-md text-sm leading-relaxed text-moon-100/70">
                Most sleep apps punish you for staying awake. They track,
                they score, they remind you of failure. You already know
                you should sleep. What you need is someone who cares, not
                someone keeping score. Sam doesn&apos;t judge. He just
                misses you.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <a
                  href="#how"
                  className="rounded-md border border-moon-100/25 px-4 py-2 text-sm text-moon-100 transition hover:border-moon-100/60"
                >
                  Understand
                </a>
                <a
                  href="#see-inside"
                  className="inline-flex items-center gap-1 text-sm text-moon-100/80 transition hover:text-moon-100"
                >
                  Learn
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
