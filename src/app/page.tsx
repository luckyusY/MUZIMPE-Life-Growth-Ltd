import {
  BadgeCheck,
  HeartPulse,
  MessageCircle,
  PackageCheck,
  Sprout,
  Truck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CardSwiper } from "@/components/card-swiper";
import { DealCard } from "@/components/deal-card";
import { HeroCarousel } from "@/components/hero-carousel";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { dealsOf, sortProducts } from "@/lib/catalog";
import { WHATSAPP_URL } from "@/lib/contact";
import { getAllProducts } from "@/lib/products-db";
import { getCategoryContent, getHeroSlides } from "@/lib/site-content";

export const revalidate = 300;

const services = [
  { icon: HeartPulse, label: "Health, wellness & natural living" },
  { icon: Truck, label: "Kigali pickup and delivery support" },
  { icon: PackageCheck, label: "EBGS selected products" },
  { icon: BadgeCheck, label: "Family and life growth guidance" },
];

const categoryItems = [
  { label: "Natural Oils", slug: "natural-oils" },
  { label: "Wellness", slug: "wellness" },
  { label: "Herbal Care", slug: "herbal-care" },
  { label: "Family Guidance", slug: "family-guidance" },
  { label: "Entrepreneurship", slug: "entrepreneurship" },
  { label: "Life Growth", slug: "life-growth" },
];

export default async function Home() {
  const [allProducts, heroSlides, categoryContent] = await Promise.all([
    getAllProducts(),
    getHeroSlides(),
    getCategoryContent(),
  ]);
  const categoryImages = new Map(
    categoryContent.map((category) => [category.slug, category.image]),
  );
  const deals = dealsOf(allProducts);
  const topDeals = [
    ...deals,
    ...sortProducts(
      allProducts.filter((p) => !p.oldPrice),
      "rating",
    ),
  ].slice(0, 12);
  const wellnessPicks = sortProducts(allProducts, "rating").slice(0, 8);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroCarousel slides={heroSlides} />

      <section className="bg-[#050505] px-3 py-3 md:hidden">
        <h2 className="mb-3 text-center text-sm font-black uppercase tracking-wide text-white">
          Shop by category
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {categoryItems.map((item) => (
            <Link
              key={item.slug}
              href={`/c/${item.slug}`}
              className="overflow-hidden rounded bg-white text-center text-[11px] font-black text-[#15110a]"
            >
              <div className="relative aspect-square">
                <Image
                  src={categoryImages.get(item.slug) ?? "/products/ebgs-wellness-kit/1.jpg"}
                  alt=""
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
              <span className="block px-1 py-2">{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d9a441]/30 bg-[#15110a] text-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 md:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.label} className="flex items-center gap-3">
                <Icon className="text-[#ffcf57]" size={24} />
                <span className="text-sm font-bold">{service.label}</span>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8b641e]">
              EBGS selections
            </p>
            <h2 className="mt-2 text-3xl font-black md:text-5xl">
              Natural products for daily wellness.
            </h2>
          </div>
          <Link href="/search" className="hidden text-sm font-black text-[#8b641e] md:block">
            View all
          </Link>
        </div>
        <CardSwiper>
          {wellnessPicks.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </CardSwiper>
      </section>

      <section className="grid bg-[#050505] text-white md:grid-cols-2">
        <Link href="/c/natural-oils" className="group relative min-h-[360px] overflow-hidden">
          <Image
            src="/products/black-seeds-flax-seeds-oil/1.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-70 transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
          <div className="relative flex h-full min-h-[360px] flex-col justify-end p-8">
            <Sprout className="text-[#ffcf57]" size={36} />
            <h2 className="mt-4 max-w-md text-4xl font-black">Natural oil care, guided by EBGS.</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/78">
              Black seed, flax seed, ginseng, and selected oils for customers
              building a natural routine.
            </p>
          </div>
        </Link>
        <Link href="/c/life-growth" className="group relative min-h-[360px] overflow-hidden">
          <Image
            src="/products/life-growth-pack/1.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-70 transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
          <div className="relative flex h-full min-h-[360px] flex-col justify-end p-8">
            <Users className="text-[#ffcf57]" size={36} />
            <h2 className="mt-4 max-w-md text-4xl font-black">Support for family, business, and growth.</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/78">
              MUZIMPE connects wellness products with practical family guidance
              and entrepreneurship support.
            </p>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#8b641e]">
              Offers
            </p>
            <h2 className="mt-2 text-3xl font-black md:text-5xl">
              Deals and wellness bundles.
            </h2>
          </div>
          <Link href="/deals" className="hidden text-sm font-black text-[#8b641e] md:block">
            Shop deals
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topDeals.slice(0, 8).map((product) => (
            <DealCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-[#15110a] px-4 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ffcf57]">
              BH Plaza, Kigali
            </p>
            <h2 className="mt-2 max-w-3xl text-3xl font-black md:text-5xl">
              Need help choosing the right product or growth support?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Call 0781375870 / 0784794936, email
              muzimpelifemuzimpegrowth@gmail.com, or visit BH Plaza 3rd floor
              near Yussa Plaza.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded bg-[#d9a441] px-7 py-4 text-sm font-black uppercase tracking-wide text-black"
          >
            <MessageCircle size={20} />
            WhatsApp Now
          </a>
        </div>
      </section>
    </main>
  );
}
