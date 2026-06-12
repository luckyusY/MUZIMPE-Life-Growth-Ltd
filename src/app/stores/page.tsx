import { StorePage } from "@/components/storefront";

export default function StoresPage() {
  return (
    <StorePage
      eyebrow="Stores"
      title="Visit EBGS in Kigali."
      text="Store route matching the Photo Factory location page structure."
    >
      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1440px] gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-[#15110a] p-8 text-white">
            <p className="text-sm font-black uppercase tracking-wide text-[#ffcf57]">
              Main store
            </p>
            <h2 className="mt-4 text-4xl font-black">BH Plaza, Kigali</h2>
            <p className="mt-4 leading-8 text-white/72">
              3rd floor Matheus, near Yussa Plaza. Visit for EBGS products,
              product guidance and MUZIMPE support.
            </p>
          </div>
          <div className="retail-card rounded-lg p-8">
            <h2 className="text-3xl font-black text-[#15110a]">Store services</h2>
            <ul className="mt-5 grid gap-3 text-[#6b5f4c]">
              <li>Product availability checks</li>
              <li>Wellness and natural living guidance</li>
              <li>Family and entrepreneurship support conversations</li>
            </ul>
          </div>
        </div>
      </section>
    </StorePage>
  );
}
