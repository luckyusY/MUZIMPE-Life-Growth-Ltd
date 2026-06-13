import type { Metadata } from "next";
import { BadgePercent, HeartPulse, MessageCircle, Package, Sparkles, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DealCard } from "@/components/deal-card";
import { ProductCard } from "@/components/product-card";
import { serviceImage } from "@/lib/cloudinary-assets";
import { dealsOf, sortProducts } from "@/lib/catalog";
import { WHATSAPP_URL } from "@/lib/contact";
import { getAllProducts } from "@/lib/products-db";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Deals & Specials",
  description:
    "Deals on EBGS wellness products, natural oils, herbal care, and MUZIMPE guidance bundles in Kigali.",
};

const categories = [
  { label: "Natural Oils", href: "/c/natural-oils", icon: Sprout },
  { label: "Wellness", href: "/c/wellness", icon: HeartPulse },
  { label: "Herbal Care", href: "/c/herbal-care", icon: Sparkles },
  { label: "Life Growth", href: "/c/life-growth", icon: Package },
];

export default async function DealsPage() {
  const allProducts = await getAllProducts();
  const actualDeals = dealsOf(allProducts);
  const topDeals = [
    ...actualDeals,
    ...sortProducts(
      allProducts.filter((product) => !actualDeals.some((deal) => deal.slug === product.slug)),
      "rating",
    ),
  ];

  return (
    <main className="bg-[#f6f2ea]">
      <section className="relative isolate overflow-hidden bg-[#050505] text-white">
        <Image
          src={serviceImage("ebgs-natural-living")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/10" />
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ffcf57]">
            MUZIMPE Specials
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Wellness deals, EBGS bundles, and growth support.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
            Browse natural oils, herbal care, family support packs, and life
            growth offers from MUZIMPE Life & Growth Ltd.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded bg-[#d9a441] px-6 py-3 text-sm font-black uppercase tracking-wide text-black"
          >
            <MessageCircle size={19} />
            Ask for a deal
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-3 px-4 py-8 md:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.label}
              href={category.href}
              className="flex items-center gap-3 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#15110a] text-[#ffcf57]">
                <Icon size={22} />
              </span>
              <span className="font-black">{category.label}</span>
            </Link>
          );
        })}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-[#8b641e]">
              <BadgePercent size={18} />
              Featured
            </p>
            <h2 className="mt-2 text-3xl font-black md:text-5xl">
              Today&apos;s MUZIMPE picks.
            </h2>
          </div>
          <Link href="/search" className="hidden text-sm font-black text-[#8b641e] md:block">
            View all products
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topDeals.slice(0, 8).map((product) => (
            <DealCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-6">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8b641e]">
            More wellness options
          </p>
          <h2 className="mt-2 text-3xl font-black md:text-5xl">
            Natural living essentials.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sortProducts(allProducts, "rating").slice(0, 8).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
