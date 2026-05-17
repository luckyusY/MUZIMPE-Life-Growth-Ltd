export const whatsappMessage = encodeURIComponent(
  "Hello MUZIMPE Life & Growth Ltd, I would like to know more about your products and services."
);

export const whatsappUrl = `https://wa.me/250781375870?text=${whatsappMessage}`;

export const products = [
  {
    name: "Black Seeds and Flax Seeds Oil",
    detail: "100% natural oil for daily wellness routines.",
    image: "/products/a266fc50-3451-4f22-ae7f-25bd6cd551cd.jpg",
  },
  {
    name: "Ginseng Oil",
    detail: "A natural oil from the Live Natural collection.",
    image: "/products/f9762fec-8ac0-4305-a1f1-fb037b4e5612.jpg",
  },
  {
    name: "Natural wellness product",
    detail: "Available from EBGS in Kigali.",
    image: "/products/fbbc9e9c-35b6-4395-80dc-71c672c043c2.jpg",
  },
  {
    name: "Herbal care product",
    detail: "Selected for natural living and family wellbeing.",
    image: "/products/f5d90a94-b4e5-44e6-80c9-8e926d4a5365.jpg",
  },
  {
    name: "Bio health product",
    detail: "Part of the EBGS product range.",
    image: "/products/c9cb234f-8d45-4227-8275-8e913de7d29b.jpg",
  },
  {
    name: "Natural living essential",
    detail: "Visit BH Plaza to discover the full selection.",
    image: "/products/bd4aa46e-5732-42c0-9d76-0b93af6fdf8b.jpg",
  },
];

export const contactLinks = [
  { label: "0781375870", href: "tel:+250781375870", type: "Phone" },
  { label: "0784794936", href: "tel:+250784794936", type: "Phone" },
  { label: "Chat on WhatsApp", href: whatsappUrl, type: "WhatsApp" },
  {
    label: "muzimpelifemuzimpegrowth@gmail.com",
    href: "mailto:muzimpelifemuzimpegrowth@gmail.com",
    type: "Email",
  },
];

export const trustPoints = [
  ["Kigali store", "Visit EBGS at BH Plaza, 3rd floor Matheus near Yussa Plaza."],
  ["Natural selection", "Products chosen for wellness, beauty and natural living routines."],
  ["Growth guidance", "Entrepreneurship and family support for practical life progress."],
  ["Direct support", "Call, email or WhatsApp for product availability and guidance."],
];

export const services = [
  {
    title: "Health and wellness",
    text: "Natural oils and bio products selected for everyday wellbeing.",
  },
  {
    title: "Natural living",
    text: "Practical products and guidance for families choosing cleaner routines.",
  },
  {
    title: "Family guidance",
    text: "Supportive conversations for homes making healthier choices.",
  },
  {
    title: "Entrepreneurship support",
    text: "Guidance for small business owners and people starting something new.",
  },
  {
    title: "Life growth",
    text: "Encouragement and practical steps for personal development.",
  },
  {
    title: "Product guidance",
    text: "Help choosing available EBGS products for your daily routine.",
  },
];
