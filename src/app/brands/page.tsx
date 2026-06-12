import Link from "next/link";
import { StorePage } from "@/components/storefront";
import { brands } from "@/lib/site-data";

export default function BrandsPage() {
  return (
    <StorePage
      eyebrow="Brands"
      title="Shop by EBGS wellness brand."
      text="Browse natural living products by brand, collection and product family."
    >
      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1440px] gap-4 md:grid-cols-3">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="retail-card group rounded-lg p-8 transition hover:-translate-y-1"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8b641e]">
                Brand
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#15110a]">
                {brand.name}
              </h2>
              <p className="mt-4 leading-7 text-[#6b5f4c]">
                View available products and wellness selections.
              </p>
            </Link>
          ))}
        </div>
      </section>
    </StorePage>
  );
}
