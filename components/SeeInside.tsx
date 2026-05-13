import {
  ScreenBedtime,
  ScreenSlothRoom,
  ScreenSounds,
  ScreenMorning,
  ScreenSadSloth,
  ScreenCozyMeter,
} from "./svg/AppScreens";

const screens = [
  { Component: ScreenBedtime, caption: "Set bedtime" },
  { Component: ScreenSlothRoom, caption: "Sloth room" },
  { Component: ScreenSounds, caption: "Sound library" },
  { Component: ScreenMorning, caption: "Morning letter" },
  { Component: ScreenSadSloth, caption: "Sam misses you" },
  { Component: ScreenCozyMeter, caption: "Cozy meter" },
];

export function SeeInside() {
  return (
    <section
      id="see-inside"
      aria-labelledby="see-inside-heading"
      className="relative border-b border-night-800/50 py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2
            id="see-inside-heading"
            className="font-display text-4xl font-medium leading-tight tracking-tight text-moon-100 md:text-5xl"
          >
            See inside
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-moon-100/65">
            Soft colours, gentle animations, a sloth who reacts to your
            choices
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-6">
          {screens.map(({ Component, caption }) => (
            <li
              key={caption}
              className="group relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl border border-night-800 bg-gradient-to-br from-night-800 to-night-900 p-6"
            >
              <Component className="h-full w-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.45)] transition-transform duration-700 group-hover:-translate-y-1" />
              <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-night-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-moon-100/70 opacity-0 transition-opacity group-hover:opacity-100">
                {caption}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
