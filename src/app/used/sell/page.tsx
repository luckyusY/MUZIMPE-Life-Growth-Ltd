import { StorePage } from "@/components/storefront";

export default function SellUsedPage() {
  return (
    <StorePage
      eyebrow="Sell"
      title="Request a trade-in or exchange conversation."
      text="Equivalent to the reference sell-used route, adapted for MUZIMPE future workflows."
    >
      <section className="bg-white px-5 py-14 sm:px-8">
        <form className="mx-auto grid w-full max-w-[900px] gap-4 rounded-lg border border-[#e7ddc7] bg-[#f6f2ea] p-6">
          {["Name", "Phone", "Item or request", "Condition / notes"].map((field) => (
            <label key={field}>
              <span className="text-sm font-black uppercase tracking-wide text-[#8b641e]">
                {field}
              </span>
              <input className="mt-2 min-h-11 w-full rounded-md border border-[#e7ddc7] bg-white px-3 outline-none focus:border-[#8b641e]" />
            </label>
          ))}
          <button className="press min-h-12 rounded-full bg-[#15110a] px-6 text-sm font-black uppercase tracking-wide text-white">
            Submit request
          </button>
        </form>
      </section>
    </StorePage>
  );
}
