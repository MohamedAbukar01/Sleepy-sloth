import { SlothInHammock } from "./svg/SlothInHammock";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 starfield opacity-60" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-[60vh] section-fade" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-moss-400/40 bg-moss-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-moss-300">
            <span className="h-1.5 w-1.5 rounded-full bg-moss-300" />
            Coming Q3 2026
          </p>
          <h1
            id="hero-heading"
            className="font-display text-4xl leading-[1.05] tracking-tight text-moon-100 sm:text-5xl md:text-6xl"
          >
            The market didn&rsquo;t want a sleep tracker.
            <span className="block text-peach-300">It wanted permission to rest.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-moon-100/75">
            Meet Sam &mdash; a sleepy sloth who curls up in a hammock at your
            bedtime and dozes off with you. No graphs. No scores. No streaks.
            Just a small, gentle reason to put the phone down.
          </p>

          <div className="mt-8">
            <WaitlistForm variant="hero" id="hero-waitlist" />
            <p className="mt-3 text-xs text-moon-100/50">
              We&rsquo;ll only email at launch. No newsletter, ever.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-night-700 bg-night-900/60 px-4 py-2.5 text-sm text-moon-100/70"
            >
              <AppleIcon /> App Store · soon
            </span>
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-night-700 bg-night-900/60 px-4 py-2.5 text-sm text-moon-100/70"
            >
              <PlayIcon /> Google Play · soon
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 moonglow blur-2xl" aria-hidden="true" />
          <SlothInHammock className="mx-auto w-full max-w-[460px]" />
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.7c0-2 1.6-3 1.7-3-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.6-.7-2.7-.7-1.4 0-2.6.8-3.4 2-1.4 2.5-.3 6.2 1.1 8.2.7 1 1.4 2.1 2.5 2.1 1 0 1.4-.7 2.6-.7s1.5.7 2.6.7c1.1 0 1.8-1 2.5-2 .8-1.2 1.1-2.4 1.1-2.4s-2.3-.9-2.3-3.4zM14.5 6.8c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.5.6-1 1.6-.9 2.6 1 .1 2-.5 2.6-1.2z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M4 3.5 14.5 12 4 20.5z" opacity="0.85" />
      <path d="M4 3.5 4 20.5 13 12z" />
    </svg>
  );
}
