const quotes = [
  {
    quote:
      "I've deleted four sleep apps. This is the first one that doesn't make me feel like I'm failing at sleeping. Sam is just there. It's enough.",
    name: "Emma",
    role: "Beta tester · 28",
  },
  {
    quote:
      "The morning letter is so silly. I love it. It says Sam dreamt of clouds and I felt better than I have in months.",
    name: "Andy",
    role: "Beta tester · 22",
  },
  {
    quote:
      "I picked up my phone at 1am. Sam looked at me. I put it back down. That has never happened with any focus app I've used.",
    name: "Jordan",
    role: "Beta tester · 34",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative border-t border-night-800/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-moss-300">
            From the beta
          </p>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl leading-tight text-moon-100 sm:text-4xl md:text-5xl"
          >
            People keep saying the same thing.
          </h2>
          <p className="mt-4 text-moon-100/70">
            That it feels like something different. That they don&rsquo;t dread it.
            Quotes from our private beta &mdash; first names only.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <li
              key={q.name}
              className="flex flex-col rounded-3xl border border-night-700/70 bg-night-900/60 p-7"
            >
              <svg
                viewBox="0 0 32 32"
                className="h-7 w-7 text-peach-300"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M12 8c-4 1.5-7 5-7 10v6h8v-8H8c0-3 2-5.5 5-6.5L12 8zm14 0c-4 1.5-7 5-7 10v6h8v-8h-5c0-3 2-5.5 5-6.5L26 8z" />
              </svg>
              <p className="mt-4 flex-1 text-moon-100/85">&ldquo;{q.quote}&rdquo;</p>
              <div className="mt-6 border-t border-night-700/70 pt-4">
                <p className="font-display text-moon-100">{q.name}</p>
                <p className="text-sm text-moon-100/55">{q.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
