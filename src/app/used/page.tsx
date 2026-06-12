import { EmptyState, RetailBand, StorePage } from "@/components/storefront";

export default function UsedPage() {
  return (
    <StorePage
      eyebrow="Used"
      title="Pre-owned and trade-in wellness items."
      text="A route equivalent to the reference used marketplace, ready for future second-hand or exchange listings."
    >
      <EmptyState
        title="No pre-owned products listed yet."
        text="This page is ready if MUZIMPE later offers second-hand wellness items, exchanges or partner listings."
        href="/used/sell"
        cta="Request a trade-in"
      />
      <RetailBand
        title="Have something to discuss?"
        text="Use the sell page to start a conversation with the MUZIMPE team."
        cta="Sell or exchange"
        href="/used/sell"
      />
    </StorePage>
  );
}
