import Link from "next/link";
import { LogoMark } from "./svg/LogoMark";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-night-800/60 bg-night-950/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link href="/" className="flex items-center gap-2.5 text-moon-100">
          <LogoMark />
          <span className="font-display text-lg tracking-tight">
            Sleepy Sloth
          </span>
        </Link>

        <ul className="hidden gap-7 text-sm text-moon-100/70 md:flex">
          <li>
            <a href="#how" className="hover:text-moon-100">How it works</a>
          </li>
          <li>
            <a href="#features" className="hover:text-moon-100">Features</a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-moon-100">Pricing</a>
          </li>
          <li>
            <a href="#faq" className="hover:text-moon-100">FAQ</a>
          </li>
        </ul>

        <a
          href="#waitlist"
          className="rounded-full bg-moon-100 px-4 py-2 text-sm font-medium text-night-950 transition hover:bg-peach-200"
        >
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
