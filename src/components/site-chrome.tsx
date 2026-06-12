import Link from "next/link";
import { contactLinks, whatsappUrl } from "@/lib/site-data";

const navItems = [
  { label: "Deals", href: "/deals" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/brands" },
  { label: "Used", href: "/used" },
  { label: "Stores", href: "/stores" },
  { label: "Support", href: "/support" },
  { label: "Cart", href: "/cart" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Account", href: "/account" },
];

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-40 shadow-lg shadow-black/20"
    >
      <div className="bg-[#050505] px-3 py-1 text-center text-[11px] font-black uppercase tracking-wide text-white">
        <span className="text-[#ffcf57]">MUZIMPE EBGS</span> natural wellness,
        family growth and entrepreneurship support in Kigali
      </div>
      <div className="hidden border-y border-[#d9a441]/25 bg-[#15110a] text-white sm:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-1 text-[10px] font-semibold uppercase tracking-wide 2xl:px-6">
          <div className="hidden gap-5 md:flex">
            <Link href="/about">Business & Families</Link>
            <Link href="/services">Life Growth</Link>
            <Link href="/used/sell">Sell / Exchange</Link>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <a href="tel:+250781375870">0781375870</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <Link href="/contact">BH Plaza Kigali</Link>
          </div>
        </div>
      </div>
      <div className="bg-[#050505] text-white">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-3 py-2 sm:gap-4 sm:px-4 2xl:px-6">
          <Link href="/" className="shrink-0" aria-label="MUZIMPE home">
            <span className="block text-base font-black uppercase leading-none tracking-[0.18em] text-white sm:text-xl">
              MUZIMPE
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9a441]">
              Life & Growth Ltd
            </span>
          </Link>
          <form action="/search" className="relative min-w-0">
            <input
              name="q"
              aria-label="Search products and services"
              placeholder="Search natural products, services, guidance"
              className="h-9 w-full rounded-full border-0 bg-white px-4 pr-10 text-sm font-semibold text-[#111827] outline-none ring-2 ring-transparent transition focus:ring-[#d9a441]"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b641e]"
            >
              Search
            </button>
          </form>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="press hidden min-h-10 items-center justify-center rounded-full bg-[#d9a441] px-4 text-sm font-black text-[#050505] transition hover:bg-[#ffcf57] sm:inline-flex"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <nav className="border-b border-[#d9a441]/25 bg-[#15110a] text-white">
        <div className="mx-auto flex max-w-[1440px] gap-1 overflow-x-auto px-3 py-2 text-xs font-black uppercase tracking-wide sm:justify-center sm:px-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-4 py-2 text-white/82 transition hover:bg-[#8b641e] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#050505] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9a441]">
            MUZIMPE Life & Growth Ltd
          </p>
          <p className="mt-4 max-w-xl leading-7 text-white/72">
            Promoting health, wellness and natural living through EBGS while
            supporting entrepreneurship, family guidance and life growth.
          </p>
          <Link
            href="/admin"
            className="mt-5 inline-flex text-sm font-semibold text-white/62 transition hover:text-[#ffcf57]"
          >
            Admin dashboard
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {contactLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.type === "WhatsApp" ? "_blank" : undefined}
              rel={item.type === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="rounded-md border border-[#d9a441]/25 bg-white/[0.03] px-4 py-3 text-sm text-white/78 transition hover:border-[#ffcf57] hover:text-white"
            >
              <span className="block text-[#ffcf57]">{item.type}</span>
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
    <section className="bg-[#f6f2ea]">
      <SiteHeader />
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-12 sm:px-8">
        <p className="gold-ribbon inline-flex py-1 pl-3 pr-6 text-xs font-black uppercase tracking-[0.18em] text-white">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.98] text-[#15110a] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-[#6b5f4c]">{text}</p>
      </div>
    </section>
  );
}
