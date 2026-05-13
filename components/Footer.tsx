import Link from "next/link";
import { LogoMark } from "./svg/LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-night-800/60 bg-night-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-2.5 text-moon-100">
            <LogoMark />
            <span className="font-display text-lg tracking-tight">
              Sleepy Sloth
            </span>
          </Link>
          <p className="mt-3 text-sm text-moon-100/60">
            The market didn&rsquo;t want a sleep tracker. It wanted permission to
            rest.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <div>
            <h3 className="font-display text-moon-100">Product</h3>
            <ul className="mt-3 space-y-2 text-moon-100/65">
              <li><a href="#how" className="hover:text-moon-100">How it works</a></li>
              <li><a href="#features" className="hover:text-moon-100">Features</a></li>
              <li><a href="#pricing" className="hover:text-moon-100">Pricing</a></li>
              <li><a href="#faq" className="hover:text-moon-100">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-moon-100">Company</h3>
            <ul className="mt-3 space-y-2 text-moon-100/65">
              <li><a href="#" className="hover:text-moon-100">Press kit</a></li>
              <li><a href="mailto:hello@sleepysloth.app" className="hover:text-moon-100">Contact</a></li>
              <li><a href="#" className="hover:text-moon-100">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-moon-100">Legal</h3>
            <ul className="mt-3 space-y-2 text-moon-100/65">
              <li><a href="#" className="hover:text-moon-100">Privacy</a></li>
              <li><a href="#" className="hover:text-moon-100">Terms</a></li>
              <li><a href="#" className="hover:text-moon-100">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-night-800/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-moon-100/45 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Sleepy Sloth. All rests reserved.</p>
          <p>Made for people who are tired.</p>
        </div>
      </div>
    </footer>
  );
}
