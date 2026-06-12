import type { Metadata } from "next";
import Link from "next/link";
import {
  ProductListing,
  type ListingSearchParams,
} from "@/components/product-listing";
import { brandsOf, usedOf } from "@/lib/catalog";
import { getAllProducts } from "@/lib/products-db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Special Support",
  description:
    "Special MUZIMPE support packs and growth offers in Kigali.",
};

export default async function UsedPage({
  searchParams,
}: {
  searchParams: Promise<ListingSearchParams>;
}) {
  const used = usedOf(await getAllProducts());
  const availableBrands = brandsOf(used);

  return (
    <main>
      <section className="bg-[#15110a] px-4 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-[#ffde59]">
              MUZIMPE support
            </p>
            <h2 className="mt-1 text-2xl font-black sm:text-3xl">
              Natural living, family guidance, and growth support.
            </h2>
          </div>
          <Link
            href="/used/sell"
            className="rounded-sm bg-[#8b641e] px-6 py-3 text-sm font-black uppercase hover:bg-[#8b641e]"
          >
            Request guidance
          </Link>
        </div>
      </section>
      <ProductListing
        title="Special Support"
        subtitle="Browse available support packs and contact MUZIMPE for the right guidance before choosing."
        basePath="/used"
        products={used}
        params={await searchParams}
        availableBrands={availableBrands}
      />
    </main>
  );
}
