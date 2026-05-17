import Link from "next/link";
import { contactLinks, whatsappUrl } from "@/lib/site-data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-xl ${
        dark
          ? "border-white/10 bg-[#102019]/72 text-white"
          : "border-[#dfe5d7] bg-[#fbfaf7]/86 text-[#1e2f26]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
        <Link href="/" className="min-w-0 text-sm font-semibold uppercase tracking-[0.16em]">
          <span className="block truncate">MUZIMPE Life & Growth Ltd</span>
        </Link>

        <nav
          className={`hidden items-center gap-1 rounded-full border p-1 text-sm md:flex ${
            dark
              ? "border-white/12 bg-white/8 text-white/78"
              : "border-[#d8ddce] bg-white/72 text-[#53614f]"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 transition ${
                dark
                  ? "hover:bg-white/12 hover:text-white"
                  : "hover:bg-[#edf1e6] hover:text-[#1f3328]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden min-h-10 items-center justify-center rounded-full px-4 text-sm font-semibold transition sm:inline-flex ${
            dark
              ? "bg-[#f2c14e] text-[#172219] hover:bg-[#ffd469]"
              : "bg-[#182a22] text-white hover:bg-[#263d31]"
          }`}
        >
          WhatsApp
        </a>

        <div className="flex gap-2 md:hidden">
          {[navItems[0], navItems[3], navItems[4]].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full border px-3 py-2 text-xs font-semibold ${
                dark
                  ? "border-white/12 bg-white/8 text-white/82"
                  : "border-[#d8ddce] bg-white/70 text-[#53614f]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#101f18] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f2c14e]">
            MUZIMPE Life & Growth Ltd
          </p>
          <p className="mt-4 max-w-xl leading-7 text-white/72">
            Promoting health, wellness and natural living through EBGS while
            supporting entrepreneurship, family guidance and life growth.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {contactLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.type === "WhatsApp" ? "_blank" : undefined}
              rel={item.type === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="rounded-md border border-white/12 px-4 py-3 text-sm text-white/78 transition hover:border-[#f2c14e] hover:text-white"
            >
              <span className="block text-[#f2c14e]">{item.type}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="bg-[#fbfaf7]">
      <SiteHeader />
      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-12 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#73805d]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[1.02] text-[#1e2f26] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-[#5b6658]">{text}</p>
      </div>
    </section>
  );
}
