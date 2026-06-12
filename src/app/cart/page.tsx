import { EmptyState, RetailBand, StorePage } from "@/components/storefront";

export default function CartPage() {
  return (
    <StorePage
      eyebrow="Cart"
      title="Your MUZIMPE cart."
      text="A Photo Factory-style shopping cart route, ready for real checkout integration."
    >
      <EmptyState
        title="Your cart is ready for products."
        text="Add EBGS products from the catalog, then confirm availability by WhatsApp before pickup or delivery."
      />
      <RetailBand
        title="Prefer direct ordering?"
        text="Call or message the team and place your order directly."
        cta="Contact us"
        href="/contact"
      />
    </StorePage>
  );
}
