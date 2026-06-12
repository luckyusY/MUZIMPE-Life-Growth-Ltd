import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero, SiteFooter } from "@/components/site-chrome";
import { MotionMain, Reveal } from "@/components/site-motion";
import { brandSlug, type SiteProduct } from "@/lib/site-data";

export function StorePage({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <MotionMain>
      <PageHero eyebrow={eyebrow} title={title} text={text} />
      {children}
      <SiteFooter />
    </MotionMain>
  );
}

export function ProductGrid({ products }: { products: SiteProduct[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <Reveal key={product.slug} delay={(index % 4) * 0.04}>
          <ProductTile product={product} />
        </Reveal>
      ))}
    </div>
  );
}

export function ProductTile({ product }: { product: SiteProduct }) {
  return (
    <article className="group relative flex h-full min-w-0 flex-col bg-white px-3 pb-4 pt-9 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <span className="gold-ribbon absolute left-0 top-3 z-10 py-1 pl-3 pr-6 text-[10px] font-black uppercase tracking-wide text-white">
        {product.badge}
      </span>
      <Link
        href={`/p/${product.slug}`}
        className="relative block aspect-[4/5] w-full overflow-hidden bg-[#f6f2ea]"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.035]"
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
        />
      </Link>
      <Link href={`/p/${product.slug}`} className="mt-4 block">
        <h2 className="line-clamp-3 min-h-[60px] text-[15px] font-semibold leading-5 text-[#15110a] hover:text-[#8b641e] hover:underline">
          {product.name}
        </h2>
      </Link>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#6b5f4c]">
        {product.detail}
      </p>
      <div className="mt-3 flex flex-wrap items-baseline gap-2">
        <span className="text-lg font-black text-[#15110a]">{product.price}</span>
        {"oldPrice" in product && product.oldPrice ? (
          <s className="text-sm font-semibold text-[#777]">{product.oldPrice}</s>
        ) : null}
      </div>
      <Link
        href={`/brands/${brandSlug(product.brand)}`}
        className="mt-3 text-xs font-black uppercase tracking-wide text-[#8b641e] hover:underline"
      >
        {product.brand}
      </Link>
    </article>
  );
}

export function RetailBand({
  title,
  text,
  cta,
  href,
}: {
  title: string;
  text: string;
  cta: string;
  href: string;
}) {
  return (
    <section className="bg-[#d9a441] px-5 py-12 text-[#15110a] sm:px-8">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-black leading-tight sm:text-5xl">{title}</h2>
          <p className="mt-3 max-w-2xl leading-7">{text}</p>
        </div>
        <Link
          href={href}
          className="press inline-flex min-h-12 items-center justify-center rounded-full bg-[#050505] px-6 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#2a2113]"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}

export function EmptyState({
  title,
  text,
  href = "/products",
  cta = "Shop products",
}: {
  title: string;
  text: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="bg-white px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-[760px] rounded-lg border border-[#e7ddc7] bg-[#f6f2ea] p-8 text-center">
        <p className="gold-ribbon inline-flex py-1 pl-3 pr-6 text-[10px] font-black uppercase tracking-wide text-white">
          MUZIMPE
        </p>
        <h2 className="mt-5 text-4xl font-black text-[#15110a]">{title}</h2>
        <p className="mt-4 leading-7 text-[#6b5f4c]">{text}</p>
        <Link
          href={href}
          className="press mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#15110a] px-5 text-sm font-black uppercase tracking-wide text-white"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
