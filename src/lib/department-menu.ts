export type DepartmentGroup = {
  title: string;
  links: string[];
};

export type Department = {
  slug: string;
  label: string;
  image: string;
  imageLabel: string;
  groups: DepartmentGroup[];
};

const productImage = (slug: string) => `/products/${slug}/1.jpg`;
const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;

export const departments: Department[] = [
  {
    slug: "natural-oils",
    label: "Natural Oils",
    image: productImage("black-seeds-flax-seeds-oil"),
    imageLabel: "NATURAL OILS",
    groups: [
      { title: "Featured Oils", links: ["Black Seed Oil", "Flax Seed Oil", "Ginseng Oil", "Daily Oil Blends"] },
      { title: "Guided Use", links: ["Morning Routine", "Family Wellness", "Product Advice", "WhatsApp Support"] },
    ],
  },
  {
    slug: "wellness",
    label: "Wellness",
    image: productImage("ebgs-wellness-kit"),
    imageLabel: "WELLNESS",
    groups: [
      { title: "EBGS Essentials", links: ["Wellness Kits", "Natural Care", "Health Guidance", "Kigali Pickup"] },
      { title: "Customer Support", links: ["Product Questions", "Delivery", "Store Visit", "Follow-up"] },
    ],
  },
  {
    slug: "herbal-care",
    label: "Herbal Care",
    image: productImage("herbal-wellness-blend"),
    imageLabel: "HERBAL CARE",
    groups: [
      { title: "Natural Living", links: ["Herbal Blends", "Home Wellness", "Natural Care Tonics", "Routine Support"] },
      { title: "Shop By Need", links: ["Family Care", "Daily Balance", "Natural Support", "Starter Sets"] },
    ],
  },
  {
    slug: "family-guidance",
    label: "Family Guidance",
    image: productImage("family-health-support"),
    imageLabel: "FAMILY GUIDANCE",
    groups: [
      { title: "Family Support", links: ["Health Habits", "Parent Guidance", "Household Wellness", "Family Packs"] },
      { title: "Visit MUZIMPE", links: ["BH Plaza", "Matheus Area", "Kigali Store", "Phone Support"] },
    ],
  },
  {
    slug: "entrepreneurship",
    label: "Entrepreneurship",
    image: u("photo-1556761175-b413da4baf72"),
    imageLabel: "ENTREPRENEURSHIP",
    groups: [
      { title: "Growth Support", links: ["Starter Advice", "Business Guidance", "Product Sales", "Client Care"] },
      { title: "Life Growth", links: ["Goal Setting", "Family Balance", "Work Discipline", "Confidence"] },
    ],
  },
  {
    slug: "life-growth",
    label: "Life Growth",
    image: productImage("life-growth-pack"),
    imageLabel: "LIFE GROWTH",
    groups: [
      { title: "Programs", links: ["Personal Growth", "Wellness Direction", "Family Guidance", "Entrepreneurship"] },
      { title: "Contact", links: ["WhatsApp", "Phone Booking", "Store Visit", "Email Support"] },
    ],
  },
];

export function getDepartment(slug: string) {
  return departments.find((department) => department.slug === slug);
}
