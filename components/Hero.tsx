import { SlothInHammock } from "./svg/SlothInHammock";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-night-800/50"
    >
      <div className="absolute inset-0 starfield opacity-50" aria-hidden="true" />
      <div className="absolute inset-x-0 -top-32 -z-10 mx-auto h-96 w-96 moonglow blur-2xl" aria-hidden="true" />

      <div className="mx-auto max-w-5xl px-6 pb-16 pt-20 text-center md:pt-28">
        <h1
          id="hero-heading"
          className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-moon-100 sm:text-5xl md:text-6xl lg:text-[72px]"
        >
          Sam gets sad when
          <br className="hidden sm:inline" /> you don&apos;t sleep
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-moon-100/70 md:text-lg">
          Meet your gentle companion who cares about your rest. No guilt,
          no tracking, just a sloth who misses you when you&apos;re awake
          at midnight.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#sam-waiting"
            className="rounded-md bg-moon-100 px-5 py-2.5 text-sm font-medium text-night-950 transition hover:bg-peach-200"
          >
            Download
          </a>
          <a
            href="#how"
            className="rounded-md border border-moon-100/25 px-5 py-2.5 text-sm text-moon-100 transition hover:border-moon-100/60"
          >
            Learn
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-night-800 bg-gradient-to-b from-night-800 via-night-900 to-night-900 p-6 shadow-[0_30px_120px_-40px_rgba(180,167,214,0.25)] md:p-10">
          <div className="absolute inset-0 -z-10 starfield opacity-30" aria-hidden="true" />
          <SlothInHammock className="mx-auto h-auto w-full max-w-2xl" />
        </div>
      </div>
    </section>
  );
}
