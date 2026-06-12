import { notFound } from "next/navigation";
import { ProductGrid, StorePage } from "@/components/storefront";
import { categories, getCategoryBySlug, products } from "@/lib/site-data";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((product) => product.category === slug);

  return (
    <StorePage eyebrow="Category" title={category.name} text={category.description}>
      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <ProductGrid products={categoryProducts} />
        </div>
      </section>
    </StorePage>
  );
}
