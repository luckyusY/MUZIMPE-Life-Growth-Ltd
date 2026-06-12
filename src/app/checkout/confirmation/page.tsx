import { EmptyState, StorePage } from "@/components/storefront";

export default function CheckoutConfirmationPage() {
  return (
    <StorePage
      eyebrow="Confirmation"
      title="Order request received."
      text="Confirmation route matching the reference checkout flow."
    >
      <EmptyState
        title="Thank you for contacting MUZIMPE."
        text="When checkout is connected, customers will land here after submitting an order."
        href="/"
        cta="Back home"
      />
    </StorePage>
  );
}
