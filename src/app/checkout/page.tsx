import { StorePage } from "@/components/storefront";
import { contactLinks } from "@/lib/site-data";

export default function CheckoutPage() {
  return (
    <StorePage
      eyebrow="Checkout"
      title="Confirm your wellness order."
      text="A checkout page structure matching the reference app, adapted for direct MUZIMPE confirmation."
    >
      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1440px] gap-6 lg:grid-cols-[1fr_0.7fr]">
          <form className="retail-card rounded-lg p-6">
            <h2 className="text-2xl font-black text-[#15110a]">Customer details</h2>
            {["Full name", "Phone number", "Product request", "Pickup or delivery notes"].map(
              (field) => (
                <label key={field} className="mt-4 block">
                  <span className="text-sm font-black uppercase tracking-wide text-[#8b641e]">
                    {field}
                  </span>
                  <input className="mt-2 min-h-11 w-full rounded-md border border-[#e7ddc7] bg-[#f6f2ea] px-3 outline-none focus:border-[#8b641e]" />
                </label>
              )
            )}
          </form>
          <aside className="retail-card rounded-lg p-6">
            <h2 className="text-2xl font-black text-[#15110a]">Order support</h2>
            <p className="mt-4 leading-7 text-[#6b5f4c]">
              This checkout is ready for payment integration. For now, use the
              contact actions to confirm products with the team.
            </p>
            <div className="mt-5 grid gap-3">
              {contactLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md border border-[#e7ddc7] px-4 py-3 text-sm font-semibold text-[#15110a] hover:border-[#d9a441]"
                >
                  {item.type}: {item.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </StorePage>
  );
}
