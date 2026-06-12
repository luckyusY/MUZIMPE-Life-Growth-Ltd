import { notFound } from "next/navigation";
import { ProductGrid, StorePage } from "@/components/storefront";
import { brandSlug, brands, getBrandBySlug, products } from "@/lib/site-data";

export function generateStaticParams() {
  return brands.map((brand) => ({ brand: brand.slug }));
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  const brandProducts = products.filter((product) => brandSlug(product.brand) === slug);

  return (
    <StorePage
      eyebrow="Brand"
      title={brand.name}
      text="A dedicated brand collection page matching the Photo Factory route structure."
    >
      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <ProductGrid products={brandProducts} />
        </div>
      </section>
    </StorePage>
  );
}
