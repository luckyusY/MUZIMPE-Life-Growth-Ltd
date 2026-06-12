import { EmptyState, StorePage } from "@/components/storefront";

export default function AccountPage() {
  return (
    <StorePage
      eyebrow="Account"
      title="Your MUZIMPE account."
      text="A customer account route for future orders, saved products and support history."
    >
      <EmptyState
        title="Account login coming next."
        text="This mirrors the reference account page and is ready for authentication later."
        href="/support"
        cta="Get support"
      />
    </StorePage>
  );
}
