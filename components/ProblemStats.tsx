const stats = [
  {
    figure: "35%",
    label: "of adults",
    body: "scroll past bedtime knowing better — &ldquo;revenge bedtime procrastination&rdquo;.",
  },
  {
    figure: "2 weeks",
    label: "median lifespan",
    body: "of the average sleep app before it&rsquo;s deleted. Punitive UX rarely sticks.",
  },
  {
    figure: "0",
    label: "graphs",
    body: "you actually need before sleep. Anxiety about your sleep score is still anxiety.",
  },
];

export function ProblemStats() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="relative border-t border-night-800/60 bg-night-900/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-moss-300">
            The problem
          </p>
          <h2
            id="problem-heading"
            className="font-display text-3xl leading-tight text-moon-100 sm:text-4xl md:text-5xl"
          >
            People don&rsquo;t need more data about bad sleep. They need a reason to stop scrolling.
          </h2>
          <p className="mt-5 text-lg text-moon-100/70">
            Screen time limits feel punitive. Sleep trackers feel clinical. We
            built something softer &mdash; a small companion who&rsquo;s a little
            disappointed, never angry, when you keep him awake.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {stats.map((s) => (
            <li
              key={s.figure}
              className="rounded-3xl border border-night-700/70 bg-night-900/70 p-7"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl text-peach-300">
                  {s.figure}
                </span>
                <span className="text-sm uppercase tracking-wider text-moon-100/55">
                  {s.label}
                </span>
              </div>
              <p
                className="mt-4 text-moon-100/75"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
