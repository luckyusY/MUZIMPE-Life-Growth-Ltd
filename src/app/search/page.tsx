import { ProductGrid, StorePage } from "@/components/storefront";
import { products } from "@/lib/site-data";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const results = query
    ? products.filter((product) =>
        [product.name, product.detail, product.brand, product.category]
          .join(" ")
          .toLowerCase()
          .includes(query)
      )
    : products;

  return (
    <StorePage
      eyebrow="Search"
      title={query ? `Results for "${q}"` : "Search EBGS products"}
      text="Find products, brands, categories and guidance across the MUZIMPE storefront."
    >
      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <ProductGrid products={results} />
        </div>
      </section>
    </StorePage>
  );
}
