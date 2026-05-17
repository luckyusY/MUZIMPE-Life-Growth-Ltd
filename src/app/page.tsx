import Image from "next/image";

const products = [
  {
    name: "Black Seeds and Flax Seeds Oil",
    detail: "100% natural oil for daily wellness routines.",
    image: "/products/a266fc50-3451-4f22-ae7f-25bd6cd551cd.jfif",
  },
  {
    name: "Ginseng Oil",
    detail: "A natural oil from the Live Natural collection.",
    image: "/products/f9762fec-8ac0-4305-a1f1-fb037b4e5612.jfif",
  },
  {
    name: "Natural wellness product",
    detail: "Available from EBGS in Kigali.",
    image: "/products/fbbc9e9c-35b6-4395-80dc-71c672c043c2.jfif",
  },
  {
    name: "Herbal care product",
    detail: "Selected for natural living and family wellbeing.",
    image: "/products/f5d90a94-b4e5-44e6-80c9-8e926d4a5365.jfif",
  },
  {
    name: "Bio health product",
    detail: "Part of the EBGS product range.",
    image: "/products/c9cb234f-8d45-4227-8275-8e913de7d29b.jfif",
  },
  {
    name: "Natural living essential",
    detail: "Visit BH Plaza to discover the full selection.",
    image: "/products/bd4aa46e-5732-42c0-9d76-0b93af6fdf8b.jfif",
  },
];

const contactLinks = [
  { label: "0781375870", href: "tel:+250781375870" },
  { label: "0784794936", href: "tel:+250784794936" },
  {
    label: "Email",
    href: "mailto:muzimpelifemuzimpegrowth@gmail.com",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfaf7] text-[#22251f]">
      <section className="relative isolate overflow-hidden bg-[#182a22] text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/products/a266fc50-3451-4f22-ae7f-25bd6cd551cd.jfif"
            alt="Black seeds and flax seeds natural oil"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#13241d]/75" />
        </div>

        <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-5 sm:px-8">
          <a href="#" className="text-sm font-semibold uppercase tracking-[0.18em]">
            MUZIMPE Life & Growth Ltd
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/78 md:flex">
            <a href="#products" className="transition hover:text-white">
              Products
            </a>
            <a href="#services" className="transition hover:text-white">
              Focus
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <div className="mx-auto grid min-h-[82vh] w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-[350px] sm:max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/86">
              EBGS - Episerie Bio Gloriette Sante
            </p>
            <h1 className="max-w-4xl text-2xl font-semibold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
              Welcome to MUZIMPE Life & Growth Ltd
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-xl sm:leading-8">
              Promoting health, wellness and natural living through EBGS while
              supporting entrepreneurship, family guidance and life growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+250781375870"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#f2c14e] px-5 text-sm font-semibold text-[#172219] transition hover:bg-[#ffd469]"
              >
                Call 0781375870
              </a>
              <a
                href="mailto:muzimpelifemuzimpegrowth@gmail.com"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/26 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Email us
              </a>
            </div>
          </div>

          <div className="grid max-w-[350px] grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:max-w-none sm:gap-4">
            {products.slice(0, 4).map((product, index) => (
              <div
                key={product.image}
                className={`relative overflow-hidden rounded-lg bg-white/8 shadow-2xl ring-1 ring-white/12 ${
                  index === 0
                    ? "aspect-[1.7/1] min-[420px]:col-span-2"
                    : "aspect-[0.82/1]"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes={index === 0 ? "(min-width: 1024px) 520px, 90vw" : "260px"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto grid w-full max-w-6xl gap-4 px-5 py-14 sm:px-8 md:grid-cols-3">
        {[
          ["Health and wellness", "Natural oils and bio products selected for everyday wellbeing."],
          ["Natural living", "Practical products and guidance for families choosing cleaner routines."],
          ["Life growth", "Entrepreneurship support, family guidance and personal development."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-lg border border-[#d8ddce] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#1f372b]">{title}</h2>
            <p className="mt-3 leading-7 text-[#5e665b]">{text}</p>
          </article>
        ))}
      </section>

      <section id="products" className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#73805d]">
                Product gallery
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1e2f26] sm:text-4xl">
                Natural products available at EBGS
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-[#5e665b]">
              Browse a sample of the products in store, then call or visit BH
              Plaza in Kigali for availability and guidance.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.image}
                className="overflow-hidden rounded-lg border border-[#e1e5db] bg-[#fbfaf7]"
              >
                <div className="relative aspect-[4/5] bg-[#eef0e8]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#223428]">{product.name}</h3>
                  <p className="mt-2 leading-6 text-[#64705f]">{product.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#edf1e6] py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#71805c]">
              Visit or contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#1f3328] sm:text-4xl">
              Find MUZIMPE Life & Growth Ltd in Kigali
            </h2>
            <p className="mt-5 leading-7 text-[#5b6658]">
              BH Plaza, 3rd floor Matheus, near Yussa Plaza - Kigali. Contact
              the team for product questions, wellness support and
              entrepreneurship guidance.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {contactLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#d5dbc8] bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-[#9cae76]"
              >
                <span className="block text-sm font-semibold text-[#75815f]">
                  {item.label === "Email" ? "Email" : "Phone"}
                </span>
                <span className="mt-2 block break-words text-base font-semibold text-[#25372b]">
                  {item.label === "Email"
                    ? "muzimpelifemuzimpegrowth@gmail.com"
                    : item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
