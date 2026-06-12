import { EmptyState, StorePage } from "@/components/storefront";

export default function WishlistPage() {
  return (
    <StorePage
      eyebrow="Wishlist"
      title="Saved wellness picks."
      text="Keep products you want to ask about later."
    >
      <EmptyState
        title="No saved products yet."
        text="Use this route like the reference wishlist page. Real save behavior can be connected later."
      />
    </StorePage>
  );
}
