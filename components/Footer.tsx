import Link from "next/link";
import { WaitlistForm } from "./WaitlistForm";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how" },
      { label: "Pricing", href: "#pricing" },
      { label: "Download", href: "#sam-waiting" },
      { label: "Features", href: "#see-inside" },
      { label: "Company", href: "#" },
    ],
  },
  {
    title: "About us",
    links: [
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Support", href: "#" },
      { label: "Help", href: "#" },
    ],
  },
  {
    title: "Contact us",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Status", href: "#" },
      { label: "Legal", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Cookies",
    links: [
      { label: "Social", href: "#" },
      { label: "Follow us", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Discord", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Sleep science", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Community", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "API docs", href: "#" },
      { label: "Developers", href: "#" },
      { label: "SDK", href: "#" },
      { label: "Webhooks", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      id="resources"
      className="bg-night-950"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="grid items-start gap-10 border-b border-night-800/60 pb-12 md:grid-cols-2 md:gap-6">
          <div>
            <p className="text-sm font-medium text-moon-100">Stay updated</p>
            <p className="mt-2 text-sm text-moon-100/60">
              Get sleep tips and Sam updates in your inbox
            </p>
          </div>
          <div className="flex flex-col items-stretch md:items-end">
            <WaitlistForm
              variant="compact"
              id="footer-stay-updated"
              source="footer"
            />
            <p className="mt-3 text-xs text-moon-100/45 md:text-right">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:grid-cols-3 md:grid-cols-6"
        >
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-medium text-moon-100">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-moon-100/60 transition hover:text-moon-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-night-800/60 py-7 text-xs text-moon-100/55 md:flex-row md:items-center">
          <Link
            href="/"
            className="font-display text-2xl italic text-moon-100/80"
            aria-label="Sleepy Sloth home"
          >
            Sam
          </Link>
          <p>&copy; {new Date().getFullYear()} Sleepy Sloth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
