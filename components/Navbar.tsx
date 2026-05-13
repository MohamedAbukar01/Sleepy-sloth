import Link from "next/link";
import { LogoMark } from "./svg/LogoMark";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-night-800/60 bg-night-950/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
      >
        <Link href="/" className="flex items-center gap-2 text-moon-100">
          <LogoMark />
          <span className="font-display text-lg italic tracking-tight text-moon-100/90">
            sleepy sloth
          </span>
        </Link>

        <ul className="hidden gap-8 text-sm text-moon-100/70 md:flex">
          <li>
            <a href="#see-inside" className="transition hover:text-moon-100">
              Screenshots
            </a>
          </li>
          <li>
            <a href="#pricing" className="transition hover:text-moon-100">
              Pricing
            </a>
          </li>
          <li>
            <a href="#hear-from-sam" className="transition hover:text-moon-100">
              Contact
            </a>
          </li>
          <li>
            <a
              href="#resources"
              className="inline-flex items-center gap-1 transition hover:text-moon-100"
            >
              Resources
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path
                  d="M2 3.5l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#hear-from-sam"
            className="rounded-md border border-moon-100/25 px-4 py-2 text-sm text-moon-100/90 transition hover:border-moon-100/60 hover:text-moon-100"
          >
            Sign in
          </a>
          <a
            href="#sam-waiting"
            className="rounded-md bg-moon-100 px-4 py-2 text-sm font-medium text-night-950 transition hover:bg-peach-200"
          >
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}
