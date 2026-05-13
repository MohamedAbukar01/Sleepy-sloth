import { WaitlistForm } from "./WaitlistForm";
import { SoundWaves } from "./svg/SoundWaves";

export function HearFromSam() {
  return (
    <section
      id="hear-from-sam"
      aria-labelledby="hear-from-sam-heading"
      className="relative border-b border-night-800/50 py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2
            id="hear-from-sam-heading"
            className="font-display text-4xl font-medium leading-tight tracking-tight text-moon-100 md:text-5xl"
          >
            Hear from Sam
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-moon-100/70">
            Get quiet messages and gentle reminders. We&apos;ll never spam
            you&mdash;Sam&apos;s too tired for that.
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm variant="default" id="hear-from-sam-form" source="hear-from-sam" />
          </div>

          <p className="mt-4 text-xs text-moon-100/45">
            By subscribing you agree to our Terms and Privacy Policy.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-night-800 bg-gradient-to-b from-night-800 to-night-900 p-10">
          <SoundWaves className="mx-auto h-auto w-full max-w-2xl" />
        </div>
      </div>
    </section>
  );
}
