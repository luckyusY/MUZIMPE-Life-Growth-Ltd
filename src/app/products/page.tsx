import Image from "next/image";
import { PageHero, SiteFooter } from "@/components/site-chrome";
import { MotionMain, Reveal } from "@/components/site-motion";
import { products, whatsappUrl } from "@/lib/site-data";

export default function ProductsPage() {
  return (
    <MotionMain>
      <PageHero
        eyebrow="Products"
        title="Natural products selected for everyday wellbeing."
        text="Browse the EBGS product selection and contact the team for current availability, guidance and visit details."
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal
              key={product.image}
              delay={(index % 3) * 0.06}
              className="group overflow-hidden rounded-lg border border-[#e1e5db] bg-[#fbfaf7] transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#edf1e6]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9a7b1e]">
                  EBGS selection
                </p>
                <h2 className="mt-2 text-xl font-semibold text-[#1e2f26]">
                  {product.name}
                </h2>
                <p className="mt-3 leading-7 text-[#5b6658]">{product.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#f2c14e] py-14 text-[#1e2a20]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="text-3xl font-semibold">Need help choosing?</h2>
            <p className="mt-2 max-w-2xl leading-7">
              Send a product photo or question on WhatsApp and the team will
              guide you from the available EBGS selection.
            </p>
          </Reveal>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#182a22] px-6 text-sm font-semibold text-white transition hover:bg-[#263d31]"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>

      <SiteFooter />
    </MotionMain>
  );
}
