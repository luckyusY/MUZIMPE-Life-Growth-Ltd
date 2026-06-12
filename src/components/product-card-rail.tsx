import Link from "next/link";
import { CardSwiper } from "@/components/card-swiper";
import { DealCard } from "@/components/deal-card";
import { ProductCard } from "@/components/product-card";
import { type Product } from "@/lib/catalog";

export function ProductCardRail({
  title,
  products,
  href,
  hrefLabel = "See All",
  variant = "card",
  className = "bg-white",
}: {
  title: string;
  products: Product[];
  href?: string;
  hrefLabel?: string;
  variant?: "card" | "deal";
  className?: string;
}) {
  if (products.length === 0) return null;

  return (
    <section className={`border-t border-[#e7ddc7] ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-sm font-black uppercase tracking-wide text-black sm:text-base">
            {title}
          </h2>
          {href && (
            <Link
              href={href}
              className="shrink-0 text-xs font-semibold text-[#8b641e] hover:underline sm:text-sm"
            >
              {hrefLabel}
            </Link>
          )}
        </div>
        <CardSwiper>
          {products.map((product) =>
            variant === "deal" ? (
              <DealCard key={product.slug} product={product} />
            ) : (
              <div key={product.slug} className="w-[160px] sm:w-[210px]">
                <ProductCard product={product} />
              </div>
            ),
          )}
        </CardSwiper>
      </div>
    </section>
  );
}
