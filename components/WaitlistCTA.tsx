import { WaitlistForm } from "./WaitlistForm";

export function WaitlistCTA() {
  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-heading"
      className="relative overflow-hidden border-t border-night-800/60"
    >
      <div className="absolute inset-0 starfield opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-moss-300">
          Join the waitlist
        </p>
        <h2
          id="waitlist-heading"
          className="font-display text-3xl leading-tight text-moon-100 sm:text-4xl md:text-5xl"
        >
          We&rsquo;ll wake you when Sam is ready.
        </h2>
        <p className="mt-5 text-lg text-moon-100/70">
          One email at launch. No newsletter, no marketing, no &ldquo;just
          checking in&rdquo;. Sam doesn&rsquo;t do that.
        </p>

        <div className="mt-9 flex justify-center">
          <WaitlistForm variant="band" id="cta-waitlist" />
        </div>
        <p className="mt-5 text-xs text-moon-100/45">
          We use your email only to tell you when Sleepy Sloth launches.
        </p>
      </div>
    </section>
  );
}
