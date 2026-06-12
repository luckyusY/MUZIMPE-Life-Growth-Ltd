import { ProductGrid, RetailBand, StorePage } from "@/components/storefront";
import { products } from "@/lib/site-data";

export default function DealsPage() {
  const deals = products.filter((product) => "oldPrice" in product && product.oldPrice);

  return (
    <StorePage
      eyebrow="Deals"
      title="Wellness offers and featured picks."
      text="A Photo Factory-style deals page for EBGS promotions, best sellers and products to ask about today."
    >
      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <ProductGrid products={deals.length ? deals : products.slice(0, 3)} />
        </div>
      </section>
      <RetailBand
        title="Ask before you visit."
        text="Prices and availability can change. Message the team and confirm the exact product you want."
        cta="Contact support"
        href="/support"
      />
    </StorePage>
  );
}
