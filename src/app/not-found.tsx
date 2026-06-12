import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#15110a]">
      <SiteHeader />
      <section className="px-5 py-20 text-center sm:px-8">
        <p className="gold-ribbon inline-flex py-1 pl-3 pr-6 text-[10px] font-black uppercase tracking-wide text-white">
          404
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-black leading-tight sm:text-7xl">
          This page is not in the catalog.
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-[#6b5f4c]">
          Go back to the storefront and continue browsing MUZIMPE products and
          services.
        </p>
        <Link
          href="/"
          className="press mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#15110a] px-6 text-sm font-black uppercase tracking-wide text-white"
        >
          Back home
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
