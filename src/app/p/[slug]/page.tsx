import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RetailBand, StorePage } from "@/components/storefront";
import { brandSlug, getProductBySlug, products, whatsappUrl } from "@/lib/site-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <StorePage eyebrow="Product" title={product.name} text={product.detail}>
      <section className="bg-white px-5 py-14 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[560px] overflow-hidden bg-[#f6f2ea]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="gold-ribbon inline-flex w-fit py-1 pl-3 pr-6 text-[10px] font-black uppercase tracking-wide text-white">
              {product.badge}
            </p>
            <h2 className="mt-5 text-5xl font-black leading-tight text-[#15110a]">
              {product.name}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6b5f4c]">{product.detail}</p>
            <div className="mt-6 flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-black text-[#15110a]">
                {product.price}
              </span>
              {"oldPrice" in product && product.oldPrice ? (
                <s className="text-lg font-semibold text-[#777]">{product.oldPrice}</s>
              ) : null}
            </div>
            <Link
              href={`/brands/${brandSlug(product.brand)}`}
              className="mt-4 text-sm font-black uppercase tracking-wide text-[#8b641e] hover:underline"
            >
              {product.brand}
            </Link>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex min-h-12 items-center justify-center rounded-full bg-[#d9a441] px-6 text-sm font-black uppercase tracking-wide text-[#050505]"
              >
                Ask on WhatsApp
              </a>
              <Link
                href="/cart"
                className="press inline-flex min-h-12 items-center justify-center rounded-full bg-[#15110a] px-6 text-sm font-black uppercase tracking-wide text-white"
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </section>
      <RetailBand
        title="Need personal guidance?"
        text="Send the product name to the team and confirm fit, availability and pickup details."
        cta="Contact support"
        href="/support"
      />
    </StorePage>
  );
}
