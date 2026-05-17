import Image from "next/image";
import { HeroShowcase } from "@/components/hero-showcase";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { FloatIn, MotionMain, Reveal } from "@/components/site-motion";
import {
  contactLinks,
  products,
  services,
  trustPoints,
  whatsappUrl,
} from "@/lib/site-data";

const stats = [
  ["EBGS", "Natural wellness store"],
  ["2", "Direct phone contacts"],
  ["4", "Growth focus areas"],
  ["Kigali", "BH Plaza location"],
];

const marqueeItems = [
  "Health",
  "Wellness",
  "Natural living",
  "Family guidance",
  "Entrepreneurship",
  "Life growth",
];

export default function Home() {
  return (
    <MotionMain>
      <section className="relative isolate overflow-hidden bg-[#182a22] text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/products/a266fc50-3451-4f22-ae7f-25bd6cd551cd.jpg"
            alt="Black seeds and flax seeds natural oil"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#13241d]/75" />
        </div>

        <SiteHeader dark />

        <div className="mx-auto grid min-h-[82vh] w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="max-w-[350px] sm:max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/86">
              EBGS - Episerie Bio Gloriette Sante
            </p>
            <h1 className="max-w-4xl text-3xl font-semibold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
              Natural living, family growth and business support
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-xl sm:leading-8">
              Welcome to MUZIMPE Life & Growth Ltd. We promote health and
              wellness through EBGS while supporting entrepreneurship, family
              guidance and life growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+250781375870"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#f2c14e] px-5 text-sm font-semibold text-[#172219] transition hover:bg-[#ffd469]"
              >
                Call 0781375870
              </a>
              <a
                href="mailto:muzimpelifemuzimpegrowth@gmail.com"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/26 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Email us
              </a>
            </div>
          </Reveal>

          <FloatIn delay={0.16} className="max-w-[420px] sm:max-w-none">
            <HeroShowcase />
          </FloatIn>
        </div>
      </section>

      <section className="border-y border-[#dfe5d7] bg-[#f7f5ef] py-5">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-flex gap-8 pr-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#50604d]">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="inline-flex items-center gap-8">
                {item}
                <span className="size-2 rounded-full bg-[#f2c14e]" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-14 sm:px-8 md:grid-cols-3">
        {services.slice(0, 3).map(({ title, text }) => (
          <Reveal key={title} className="rounded-lg border border-[#d8ddce] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#1f372b]">{title}</h2>
            <p className="mt-3 leading-7 text-[#5e665b]">{text}</p>
          </Reveal>
        ))}
      </section>

      <section className="bg-[#f2c14e] py-16 text-[#1e2a20]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em]">
              Welcome
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Practical support for healthier homes and stronger businesses.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-xl leading-9">
              Inspired by the reference style, this site now gives MUZIMPE Life
              & Growth Ltd a clearer story: natural products people can trust,
              family guidance that feels close, and entrepreneurship support
              for people building a better life.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#101f18] py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map(([value, label], index) => (
              <Reveal
                key={label}
                delay={index * 0.05}
                className="rounded-lg border border-white/12 bg-white/[0.06] p-6 text-center transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <p className="text-4xl font-semibold text-[#f2c14e]">{value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/64">
                  {label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#182a22] py-16 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-4">
          {trustPoints.map(([title, text], index) => (
            <Reveal
              key={title}
              delay={index * 0.05}
              className="rounded-lg border border-white/12 bg-white/[0.06] p-5"
            >
              <p className="text-lg font-semibold text-[#f2c14e]">{title}</p>
              <p className="mt-3 leading-7 text-white/74">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#73805d]">
              Now at EBGS
            </p>
            <h2 className="mt-3 text-5xl font-semibold leading-[1.02] text-[#1e2f26] sm:text-7xl">
              Natural picks for your routine.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5b6658]">
              A store-style spotlight inspired by bold product-first websites:
              clear visuals, direct calls to action and quick ways to ask what
              is available today.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#182a22] px-6 text-sm font-semibold text-white transition hover:bg-[#263d31]"
              >
                View products
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#bdc7b3] px-6 text-sm font-semibold text-[#1e2f26] transition hover:border-[#1e2f26]"
              >
                Ask availability
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="grid grid-cols-2 gap-4">
            {products.slice(0, 4).map((product, index) => (
              <a
                key={product.image}
                href="/products"
                className={`group relative overflow-hidden rounded-lg bg-[#dfe5d7] ${
                  index === 0 ? "col-span-2 aspect-[1.8/1]" : "aspect-[0.9/1]"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes={index === 0 ? "(min-width: 1024px) 620px, 90vw" : "300px"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101f18]/84 via-transparent to-transparent opacity-85" />
                <p className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">
                  {product.name}
                </p>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="products" className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#73805d]">
                Product gallery
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1e2f26] sm:text-4xl">
                Natural products available at EBGS
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-[#5e665b]">
              Browse a sample of the products in store, then call or visit BH
              Plaza in Kigali for availability and guidance.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal
                key={product.image}
                delay={(index % 3) * 0.06}
                className="overflow-hidden rounded-lg border border-[#e1e5db] bg-[#fbfaf7]"
              >
                <div className="relative aspect-[4/5] bg-[#eef0e8]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#223428]">{product.name}</h3>
                  <p className="mt-2 leading-6 text-[#64705f]">{product.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7] py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
          <Reveal className="relative min-h-[420px] overflow-hidden rounded-lg bg-[#dfe5d7]">
            <Image
              src="/products/660baa3e-fe96-4195-8ba1-e471c0582fb6.jpg"
              alt="Natural product available at EBGS"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </Reveal>
          <Reveal delay={0.12} className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#73805d]">
              How we help
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#1e2f26] sm:text-5xl">
              A local partner for healthier living and practical growth.
            </h2>
            <div className="mt-8 grid gap-4">
              {[
                "Choose natural products with guidance from the EBGS team.",
                "Get family and wellness support that fits everyday life.",
                "Discuss entrepreneurship ideas and small business growth steps.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 border-t border-[#d8ddce] pt-4"
                >
                  <span className="font-semibold text-[#9a7b1e]">
                    0{index + 1}
                  </span>
                  <p className="text-lg leading-8 text-[#4d5a50]">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-[#edf1e6] py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#71805c]">
              Visit or contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1f3328] sm:text-4xl">
              Find MUZIMPE Life & Growth Ltd in Kigali
            </h2>
            <p className="mt-5 leading-7 text-[#5b6658]">
              BH Plaza, 3rd floor Matheus, near Yussa Plaza - Kigali. Contact
              the team for product questions, wellness support and
              entrepreneurship guidance.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.type === "WhatsApp" ? "_blank" : undefined}
                rel={item.type === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="rounded-lg border border-[#d5dbc8] bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-[#9cae76]"
              >
                <span className="block text-sm font-semibold text-[#75815f]">
                  {item.type}
                </span>
                <span className="mt-2 block break-words text-base font-semibold text-[#25372b]">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f2c14e] px-5 py-16 text-[#1e2a20] sm:px-8">
        <Reveal className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em]">
              Stay connected
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Message us for products, wellness support or growth guidance.
            </h2>
          </div>
          <a
            href="mailto:muzimpelifemuzimpegrowth@gmail.com"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#182a22] px-6 text-sm font-semibold text-white transition hover:bg-[#263d31]"
          >
            Send an email
          </a>
        </Reveal>
      </section>
      <SiteFooter />
    </MotionMain>
  );
}
