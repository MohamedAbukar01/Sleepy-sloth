import { CozyRoom } from "./svg/CozyRoom";

export function SamWaiting() {
  return (
    <section
      id="sam-waiting"
      aria-labelledby="sam-waiting-heading"
      className="relative border-b border-night-800/50 py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2
            id="sam-waiting-heading"
            className="font-display text-4xl font-medium leading-tight tracking-tight text-moon-100 md:text-5xl"
          >
            Sam is waiting for you
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-moon-100/70">
            Download Sleepy Sloth free and meet your gentle sleep companion.
            No pressure, no judgment&mdash;just a sloth who cares if you
            rest.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#hear-from-sam"
              className="rounded-md bg-moon-100 px-5 py-2.5 text-sm font-medium text-night-950 transition hover:bg-peach-200"
            >
              Download
            </a>
            <a
              href="#how"
              className="rounded-md border border-moon-100/25 px-5 py-2.5 text-sm text-moon-100 transition hover:border-moon-100/60"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-night-800 bg-gradient-to-b from-night-800 to-night-900 p-6 md:p-10">
          <CozyRoom className="mx-auto h-auto w-full max-w-2xl" />
        </div>
      </div>
    </section>
  );
}
