export const cloudinaryProducts: Record<string, string> = {
  "black-seeds-flax-seeds-oil":
    "https://res.cloudinary.com/djsschspw/image/upload/v1781368078/muzimpe-life-growth/products/black-seeds-flax-seeds-oil.jpg",
  "ginseng-oil":
    "https://res.cloudinary.com/djsschspw/image/upload/v1781368085/muzimpe-life-growth/products/ginseng-oil.jpg",
  "herbal-wellness-blend":
    "https://res.cloudinary.com/djsschspw/image/upload/v1781368088/muzimpe-life-growth/products/herbal-wellness-blend.jpg",
  "natural-care-tonic":
    "https://res.cloudinary.com/djsschspw/image/upload/v1781368090/muzimpe-life-growth/products/natural-care-tonic.jpg",
  "family-health-support":
    "https://res.cloudinary.com/djsschspw/image/upload/v1781368093/muzimpe-life-growth/products/family-health-support.jpg",
  "life-growth-pack":
    "https://res.cloudinary.com/djsschspw/image/upload/v1781368095/muzimpe-life-growth/products/life-growth-pack.jpg",
  "ebgs-wellness-kit":
    "https://res.cloudinary.com/djsschspw/image/upload/v1781368098/muzimpe-life-growth/products/ebgs-wellness-kit.jpg",
  "natural-living-set":
    "https://res.cloudinary.com/djsschspw/image/upload/v1781368100/muzimpe-life-growth/products/natural-living-set.jpg",
};

export const cloudinaryServices: Record<string, string> = {
  "entrepreneurship-support":
    "https://res.cloudinary.com/djsschspw/image/upload/v1781368031/muzimpe-life-growth/services/entrepreneurship-support.png",
  "family-guidance":
    "https://res.cloudinary.com/djsschspw/image/upload/v1781368050/muzimpe-life-growth/services/family-guidance.png",
  "ebgs-natural-living":
    "https://res.cloudinary.com/djsschspw/image/upload/v1781368064/muzimpe-life-growth/services/ebgs-natural-living.png",
  "life-growth-coaching":
    "https://res.cloudinary.com/djsschspw/image/upload/v1781368076/muzimpe-life-growth/services/life-growth-coaching.png",
};

export function productImage(slug: string) {
  return cloudinaryProducts[slug] ?? `/products/${slug}/1.jpg`;
}

export function serviceImage(slug: string) {
  return cloudinaryServices[slug] ?? `/services/${slug}.png`;
}
