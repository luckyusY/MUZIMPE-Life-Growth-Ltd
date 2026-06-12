"use client";

import { useEffect, useState } from "react";
import { CardSwiper } from "@/components/card-swiper";
import { useCatalog } from "@/components/catalog-client";
import { ProductCard } from "@/components/product-card";

const KEY = "pfr-recent";
const MAX = 12;

function readRecent(): string[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

/** Drop this on a product page to record the view. Renders nothing. */
export function RecordView({ slug }: { slug: string }) {
  useEffect(() => {
    try {
      const current = readRecent().filter((s) => s !== slug);
      const next = [slug, ...current].slice(0, MAX);
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      // storage unavailable
    }
  }, [slug]);
  return null;
}

export function RecentlyViewed({
  excludeSlug,
  title = "Recently Viewed",
}: {
  excludeSlug?: string;
  title?: string;
}) {
  const { products } = useCatalog();
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    setSlugs(readRecent().filter((s) => s !== excludeSlug));
  }, [excludeSlug]);

  const items = slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (items.length === 0) return null;

  return (
    <section className="border-t border-[#e7ddc7] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-wide text-black">
            {title}
          </h2>
          <button
            onClick={() => {
              window.localStorage.removeItem(KEY);
              setSlugs([]);
            }}
            className="text-xs font-semibold text-[#8b641e] hover:underline"
          >
            Clear All
          </button>
        </div>
        <CardSwiper>
          {items.map((product) => (
            <div key={product.slug} className="w-[160px] sm:w-[210px]">
              <ProductCard product={product} />
            </div>
          ))}
        </CardSwiper>
      </div>
    </section>
  );
}
