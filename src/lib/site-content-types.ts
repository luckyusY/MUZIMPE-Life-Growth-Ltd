// Client-safe content types and defaults. Admin edits stored in MongoDB
// (collection `site_content`) override these via src/lib/site-content.ts.

export type HeroSlide = {
  label?: string;
  brand: string;
  title: string;
  body: string;
  priceLine?: string;
  cta: string;
  href: string;
  image: string;
  mobileImage?: string;
  tone: "light" | "dark";
  copyPosition?: "left" | "center";
};

export type CategoryContent = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
};

const productImage = (slug: string) => `/products/${slug}/1.jpg`;

const u = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const defaultHeroSlides: HeroSlide[] = [
  {
    label: "Welcome",
    brand: "MUZIMPE Life & Growth Ltd",
    title: "Natural wellness for stronger everyday living.",
    body: "Promoting health, wellness, and natural living through EBGS - Episerie Bio Gloriette Sante.",
    priceLine: "Visit BH Plaza 3rd floor, Kigali",
    cta: "Shop Wellness",
    href: "/c/wellness",
    image: productImage("ebgs-wellness-kit"),
    tone: "dark",
  },
  {
    label: "EBGS",
    brand: "Episerie Bio Gloriette Sante",
    title: "Natural oils, guided with care.",
    body: "Black seed, flax seed, ginseng, and herbal care products selected for natural routines.",
    priceLine: "Products from RWF 8,500",
    cta: "Explore Oils",
    href: "/c/natural-oils",
    image: productImage("black-seeds-flax-seeds-oil"),
    tone: "light",
  },
  {
    brand: "Family Guidance",
    title: "Healthier habits for the people you care about.",
    body: "Products and support for households that want practical wellness guidance.",
    priceLine: "Support packs available in Kigali",
    cta: "Family Support",
    href: "/c/family-guidance",
    image: productImage("family-health-support"),
    tone: "dark",
  },
  {
    brand: "Entrepreneurship",
    title: "Business guidance for people ready to move.",
    body: "Idea shaping, sales habits, customer care, and entrepreneurship support for practical growth.",
    priceLine: "Book a business consultation",
    cta: "Business Support",
    href: "/c/entrepreneurship",
    image: u("photo-1556761175-b413da4baf72"),
    tone: "light",
    copyPosition: "center",
  },
  {
    label: "Services",
    brand: "Family & Life Growth",
    title: "Guidance that supports the whole household.",
    body: "Family direction, wellness routines, confidence building, and next-step support from the MUZIMPE team.",
    priceLine: "Support available at BH Plaza, Kigali",
    cta: "Book Guidance",
    href: "/support",
    image: u("photo-1517048676732-d65bc937f952"),
    tone: "dark",
  },
  {
    brand: "WhatsApp Orders",
    title: "Ask, order, and get guidance quickly.",
    body: "Reach the team on 0781375870 or 0784794936 for product guidance and Kigali pickup details.",
    cta: "Contact Us",
    href: "/support",
    image: productImage("natural-living-set"),
    tone: "dark",
  },
];

export const defaultCategoryImages: Record<string, string> = {
  "natural-oils": productImage("black-seeds-flax-seeds-oil"),
  wellness: productImage("ebgs-wellness-kit"),
  "herbal-care": productImage("herbal-wellness-blend"),
  "family-guidance": productImage("family-health-support"),
  entrepreneurship: u("photo-1552664730-d307ca884978", 500),
  "life-growth": productImage("life-growth-pack"),
};
