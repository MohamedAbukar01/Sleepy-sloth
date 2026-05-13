import type { ReactNode } from "react";
import { SadSloth } from "./svg/SadSloth";
import { MorningLetter } from "./svg/MorningLetter";
import { SoundWaves } from "./svg/SoundWaves";
import { CozyRoom } from "./svg/CozyRoom";

type Row = {
  eyebrow: string;
  title: string;
  body: string;
  visual: ReactNode;
  flip?: boolean;
};

const rows: Row[] = [
  {
    eyebrow: "Phone pickup detection",
    title: "Sam wakes up sad. Never angry.",
    body: "If you reach for your phone during sleep hours, Sam stirs. There's a five-second grace period to put it back down. Repeated pickups don't reset progress, don't break a streak — Sam just looks a little hurt and tries to go back to sleep.",
    visual: <SadSloth className="w-full max-w-[360px]" />,
  },
  {
    eyebrow: "Morning report",
    title: "A letter, not a dashboard.",
    body: "Wake up to a short note from Sam — how long he slept, what he dreamt about, when you put your phone down. No sleep stages. No score. Just a small, kind acknowledgement that you rested.",
    visual: <MorningLetter className="w-full max-w-[260px]" />,
    flip: true,
  },
  {
    eyebrow: "Sound library",
    title: "Rain, forest, lullaby — looped without seams.",
    body: "Layered ambient soundscapes that cross-fade without a click, with an optional timer or all-night play. Free includes rain, forest, and white noise. Premium adds ocean, thunderstorm, brown noise, binaural beats, and a growing library of sleep stories.",
    visual: <SoundWaves className="w-full max-w-[360px]" />,
  },
  {
    eyebrow: "Cozy world",
    title: "A room that grows softer the more you rest.",
    body: "Consistent nights fill a Cozy Meter — accumulated time, not breakable streaks. Earn new hammock fabrics, weather effects, plants, and seasonal decorations for Sam's little room. Nothing to lose. Only things to discover.",
    visual: <CozyRoom className="w-full max-w-[360px]" />,
    flip: true,
  },
];

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative border-t border-night-800/60 bg-night-900/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-moss-300">
            What&rsquo;s inside
          </p>
          <h2
            id="features-heading"
            className="font-display text-3xl leading-tight text-moon-100 sm:text-4xl md:text-5xl"
          >
            Built for resting, not for tracking.
          </h2>
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {rows.map((row) => (
            <article
              key={row.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                row.flip ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-lavender-400">
                  {row.eyebrow}
                </p>
                <h3 className="font-display text-3xl leading-tight text-moon-100 sm:text-4xl">
                  {row.title}
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-moon-100/75">
                  {row.body}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="rounded-3xl border border-night-700/70 bg-night-900/60 p-6">
                  {row.visual}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
