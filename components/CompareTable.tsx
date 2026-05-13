type Row = { app: string; approach: string; us: string };

const rows: Row[] = [
  {
    app: "Calm",
    approach: "A library of meditations and celebrity voices.",
    us: "A character who&rsquo;s present with you, not a catalogue you have to choose from.",
  },
  {
    app: "Sleep Cycle",
    approach: "Sleep tracking and smart alarms.",
    us: "No data anxiety. Emotional feedback, not analytical scores.",
  },
  {
    app: "Opal",
    approach: "Screen-time blocking and rule enforcement.",
    us: "Sam is sad. Your phone isn&rsquo;t locked. The choice stays yours.",
  },
  {
    app: "Forest",
    approach: "Gamified focus trees, broken if you check your phone.",
    us: "A relationship, not a score. You can&rsquo;t lose Sam.",
  },
];

export function CompareTable() {
  return (
    <section
      id="compare"
      aria-labelledby="compare-heading"
      className="relative border-t border-night-800/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-moss-300">
            A different approach
          </p>
          <h2
            id="compare-heading"
            className="font-display text-3xl leading-tight text-moon-100 sm:text-4xl md:text-5xl"
          >
            Where Sleepy Sloth sits.
          </h2>
          <p className="mt-4 text-moon-100/70">
            Other sleep and focus apps do useful things differently. Here&rsquo;s
            how we think about it.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-night-700/70 bg-night-900/60">
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-night-700/70 text-moon-100/60">
                <th className="px-6 py-4 font-medium">App</th>
                <th className="px-6 py-4 font-medium">Their approach</th>
                <th className="px-6 py-4 font-medium">Sleepy Sloth</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.app}
                  className="border-b border-night-800/70 last:border-0 align-top"
                >
                  <td className="px-6 py-5 font-display text-moon-100">
                    {row.app}
                  </td>
                  <td className="px-6 py-5 text-moon-100/70">{row.approach}</td>
                  <td
                    className="px-6 py-5 text-moon-100"
                    dangerouslySetInnerHTML={{ __html: row.us }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
