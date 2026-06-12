import { StorePage } from "@/components/storefront";
import { contactLinks } from "@/lib/site-data";

export default function SupportPage() {
  return (
    <StorePage
      eyebrow="Support"
      title="Help, ordering and product guidance."
      text="Support route matching the reference app, focused on MUZIMPE contact and EBGS guidance."
    >
      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1440px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="retail-card rounded-lg p-6 transition hover:-translate-y-1"
            >
              <p className="text-xs font-black uppercase tracking-wide text-[#8b641e]">
                {item.type}
              </p>
              <h2 className="mt-3 break-words text-xl font-black text-[#15110a]">
                {item.label}
              </h2>
            </a>
          ))}
        </div>
      </section>
    </StorePage>
  );
}
