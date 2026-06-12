export type Category = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
};

export type ProductCondition = "New" | "Open Box" | "Pre-Owned";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  condition: ProductCondition;
  stock: number;
  images: string[];
  shortSpecs: string[];
  description: string;
  specs: { label: string; value: string }[];
};

const productImage = (slug: string) => `/products/${slug}/1.jpg`;

const u = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories: Category[] = [
  {
    slug: "natural-oils",
    name: "Natural Oils",
    blurb: "Black seed, flax seed, ginseng, and daily natural oil support.",
    image: productImage("black-seeds-flax-seeds-oil"),
  },
  {
    slug: "wellness",
    name: "Wellness",
    blurb: "Everyday wellness essentials selected through EBGS guidance.",
    image: productImage("ebgs-wellness-kit"),
  },
  {
    slug: "herbal-care",
    name: "Herbal Care",
    blurb: "Plant-based care for natural living and balanced routines.",
    image: productImage("herbal-wellness-blend"),
  },
  {
    slug: "family-guidance",
    name: "Family Guidance",
    blurb: "Supportive products and guidance for healthier family habits.",
    image: productImage("family-health-support"),
  },
  {
    slug: "entrepreneurship",
    name: "Entrepreneurship",
    blurb: "Starter packs, coaching, and resources for life growth.",
    image: u("photo-1552664730-d307ca884978"),
  },
  {
    slug: "life-growth",
    name: "Life Growth",
    blurb: "Curated bundles for personal growth, wellness, and confidence.",
    image: productImage("life-growth-pack"),
  },
];

type Seed = Omit<Product, "id" | "slug" | "rating" | "reviews"> & {
  rating?: number;
  reviews?: number;
};

const seeds: Seed[] = [
  {
    name: "Black Seeds & Flax Seeds Oil",
    brand: "EBGS",
    category: "natural-oils",
    price: 12000,
    oldPrice: 15000,
    badge: "Best Seller",
    condition: "New",
    stock: 24,
    images: [productImage("black-seeds-flax-seeds-oil")],
    shortSpecs: ["Natural oil blend", "Daily wellness support", "EBGS selected"],
    description:
      "A natural oil blend prepared for customers who want simple, steady support for daily wellness and natural living.",
    specs: [
      { label: "Program", value: "EBGS - Episerie Bio Gloriette Sante" },
      { label: "Use", value: "Daily natural wellness routine" },
      { label: "Pickup", value: "BH Plaza 3rd floor, Kigali" },
    ],
  },
  {
    name: "Ginseng Oil",
    brand: "EBGS",
    category: "natural-oils",
    price: 10000,
    badge: "New",
    condition: "New",
    stock: 18,
    images: [productImage("ginseng-oil")],
    shortSpecs: ["Ginseng based", "Natural living", "Guided use available"],
    description:
      "A ginseng oil option for customers building a natural care routine with guidance from MUZIMPE Life & Growth Ltd.",
    specs: [
      { label: "Category", value: "Natural oil" },
      { label: "Support", value: "Wellness guidance available" },
      { label: "Contact", value: "0781375870 / 0784794936" },
    ],
  },
  {
    name: "Herbal Wellness Blend",
    brand: "EBGS",
    category: "herbal-care",
    price: 8500,
    oldPrice: 10000,
    badge: "Deal",
    condition: "New",
    stock: 30,
    images: [productImage("herbal-wellness-blend")],
    shortSpecs: ["Plant-based care", "Family friendly", "Natural routine"],
    description:
      "A practical herbal care product for natural living, simple household wellness, and everyday balance.",
    specs: [
      { label: "Focus", value: "Herbal care" },
      { label: "Service", value: "Family guidance available" },
      { label: "Store", value: "BH Plaza, Matheus near Yussa Plaza" },
    ],
  },
  {
    name: "Natural Care Tonic",
    brand: "MUZIMPE",
    category: "wellness",
    price: 9500,
    badge: "Recommended",
    condition: "New",
    stock: 16,
    images: [productImage("natural-care-tonic")],
    shortSpecs: ["Wellness tonic", "EBGS support", "Kigali pickup"],
    description:
      "A selected wellness tonic for customers who want natural products with clear guidance and follow-up.",
    specs: [
      { label: "Focus", value: "Health and wellness" },
      { label: "Guidance", value: "Available by WhatsApp or in store" },
      { label: "Email", value: "muzimpelifemuzimpegrowth@gmail.com" },
    ],
  },
  {
    name: "Family Health Support Pack",
    brand: "MUZIMPE",
    category: "family-guidance",
    price: 25000,
    oldPrice: 30000,
    badge: "Bundle",
    condition: "New",
    stock: 12,
    images: [productImage("family-health-support")],
    shortSpecs: ["Family guidance", "Wellness bundle", "Follow-up support"],
    description:
      "A bundled product and guidance pack made for households that want healthier routines and practical family support.",
    specs: [
      { label: "Includes", value: "Selected wellness products plus guidance" },
      { label: "Ideal for", value: "Families starting natural routines" },
      { label: "Location", value: "Kigali, BH Plaza 3rd floor" },
    ],
  },
  {
    name: "Life Growth Starter Pack",
    brand: "MUZIMPE",
    category: "life-growth",
    price: 35000,
    badge: "Growth Pack",
    condition: "New",
    stock: 9,
    images: [productImage("life-growth-pack")],
    shortSpecs: ["Life growth", "Entrepreneurship", "Family support"],
    description:
      "A starter pack for customers interested in wellness, personal growth, family guidance, and entrepreneurship support.",
    specs: [
      { label: "Program", value: "Life growth and entrepreneurship support" },
      { label: "Consultation", value: "Available in person or by phone" },
      { label: "Phone", value: "0781375870 / 0784794936" },
    ],
  },
  {
    name: "EBGS Wellness Kit",
    brand: "EBGS",
    category: "wellness",
    price: 28000,
    oldPrice: 33000,
    badge: "EBGS",
    condition: "New",
    stock: 14,
    images: [productImage("ebgs-wellness-kit")],
    shortSpecs: ["Curated kit", "Natural wellness", "Kigali delivery"],
    description:
      "A curated EBGS kit for customers who want a stronger entry point into natural wellness and daily health habits.",
    specs: [
      { label: "Brand", value: "EBGS" },
      { label: "Benefit", value: "Curated natural wellness support" },
      { label: "Delivery", value: "Kigali delivery available" },
    ],
  },
  {
    name: "Natural Living Set",
    brand: "MUZIMPE",
    category: "herbal-care",
    price: 18000,
    badge: "Natural",
    condition: "New",
    stock: 20,
    images: [productImage("natural-living-set")],
    shortSpecs: ["Natural living", "Home wellness", "Guided selection"],
    description:
      "A practical set for customers building a natural living routine at home with MUZIMPE guidance.",
    specs: [
      { label: "Focus", value: "Natural living" },
      { label: "Support", value: "Product guidance included" },
      { label: "Visit", value: "BH Plaza 3rd floor, Kigali" },
    ],
  },
  {
    name: "Entrepreneurship Consultation",
    brand: "MUZIMPE",
    category: "entrepreneurship",
    price: 15000,
    badge: "Service",
    condition: "New",
    stock: 50,
    images: [u("photo-1556761175-b413da4baf72"), productImage("life-growth-pack")],
    shortSpecs: ["Business guidance", "Starter advice", "Life growth"],
    description:
      "A focused consultation for people who want practical entrepreneurship support connected to wellness and family life growth.",
    specs: [
      { label: "Session", value: "Entrepreneurship and life growth guidance" },
      { label: "Format", value: "In-store or phone appointment" },
      { label: "Booking", value: "WhatsApp or call MUZIMPE" },
    ],
  },
];

let counter = 100;
const usedSlugs = new Set<string>();

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export const products: Product[] = seeds.map((seed) => {
  counter += 1;
  const baseSlug = slugify(seed.name) || `product-${counter}`;
  let slug = baseSlug;
  let suffix = 2;
  while (usedSlugs.has(slug)) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }
  usedSlugs.add(slug);

  return {
    id: `MUZ-${counter}`,
    slug,
    rating: seed.rating ?? 4 + ((counter * 7) % 10) / 10,
    reviews: seed.reviews ?? 8 + ((counter * 13) % 86),
    ...seed,
  };
});

export const brands = [...new Set(products.map((p) => p.brand))].sort();

export function formatRWF(amount: number) {
  return `RWF ${amount.toLocaleString("en-US")}`;
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function brandsOf(list: Product[]) {
  return [...new Set(list.map((p) => p.brand))].sort();
}

export function byCategory(list: Product[], slug: string) {
  return list.filter((p) => p.category === slug);
}

export function byBrand(list: Product[], brand: string) {
  return list.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
}

export function dealsOf(list: Product[]) {
  return list.filter((p) => p.oldPrice && p.oldPrice > p.price);
}

export function usedOf(list: Product[]) {
  return list.filter((p) => p.condition !== "New");
}

export function relatedOf(list: Product[], product: Product, count = 4) {
  return list
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => {
      const score = (p: Product) =>
        (p.category === product.category ? 2 : 0) +
        (p.brand === product.brand ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, count);
}

export function searchIn(list: Product[], query: string) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [];
  return list.filter((p) => {
    const haystack = [
      p.name,
      p.brand,
      p.category,
      getCategory(p.category)?.name ?? "",
      ...p.shortSpecs,
    ]
      .join(" ")
      .toLowerCase();
    return terms.every((t) => haystack.includes(t));
  });
}

export type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

export function sortProducts(list: Product[], sort: SortOption) {
  const copy = [...list];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "rating":
      return copy.sort((a, b) => b.rating - a.rating);
    default:
      return copy;
  }
}
