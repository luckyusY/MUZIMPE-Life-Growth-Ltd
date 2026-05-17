import Link from "next/link";
import { contactLinks } from "@/lib/site-data";

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
      className={`mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-5 sm:px-8 ${
        dark ? "text-white" : "text-[#1e2f26]"
      }`}
    >
      <Link href="/" className="text-sm font-semibold uppercase tracking-[0.18em]">
        MUZIMPE Life & Growth Ltd
      </Link>
      <nav
        className={`hidden items-center gap-5 text-sm md:flex ${
          dark ? "text-white/78" : "text-[#53614f]"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`transition ${
              dark ? "hover:text-white" : "hover:text-[#1f3328]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
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
