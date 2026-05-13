import { SadSloth } from "./svg/SadSloth";

export function PhoneWontStop() {
  return (
    <section
      id="phone"
      aria-labelledby="phone-heading"
      className="relative border-b border-night-800/50 py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-moon-100/55">
            Midnight
          </p>
          <h2
            id="phone-heading"
            className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-moon-100 md:text-5xl"
          >
            The phone won&apos;t stop
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-moon-100/65">
            It&apos;s half past eleven and you told yourself you&apos;d sleep
            an hour ago.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-night-800 bg-night-900/40">
          <div className="grid md:grid-cols-2">
            <div className="relative flex items-center justify-center bg-gradient-to-br from-dusk-700 to-night-900 p-10 md:p-12">
              <SadSloth className="h-auto w-full max-w-sm" />
            </div>
            <div className="flex flex-col justify-center p-10 md:p-14">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-moss-300">
                Recognition
              </p>
              <h3 className="mt-3 font-display text-3xl font-medium leading-snug tracking-tight text-moon-100 md:text-4xl">
                Your thumb keeps scrolling while Sam waits
              </h3>
              <p className="mt-5 leading-relaxed text-moon-100/70">
                The screen glows in the dark. Your eyes grow heavier but
                the feed keeps pulling. Sam&apos;s in his hammock,
                wondering where you are.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <a
                  href="#how"
                  className="rounded-md border border-moon-100/25 px-4 py-2 text-sm text-moon-100 transition hover:border-moon-100/60"
                >
                  Explore
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center gap-1 text-sm text-moon-100/80 transition hover:text-moon-100"
                >
                  Arrow
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
