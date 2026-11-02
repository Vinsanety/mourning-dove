export const siteConfig = {
  name: "Mourning Dove",
  legalName: "Mourning Dove Coffee Co.",
  tagline: "Drink slowly. Be kind.",
  description:
    "Mourning Dove is a neighborhood coffee shop in Boulder, Colorado. Named for the doves above the first garage roastery: roasted down the road, baked before dawn, served with genuine care.",
  url: "https://mourningdove.coffee",
  email: "hello@mourningdove.coffee",
  phone: "303-555-0184",
  address: {
    street: "1844 Pearl Street",
    city: "Boulder",
    state: "CO",
    zip: "80302",
  },
  hours: [
    { days: "Mon–Fri", time: "7am–5pm" },
    { days: "Sat–Sun", time: "8am–5pm" },
  ],
  founded: 2016,
  /** Pearl Street pin near 1844 Pearl, Boulder. */
  mapsUrl: "https://maps.google.com/?q=40.01895,-105.2734",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=40.01895,-105.2734&z=16&output=embed&hl=en",
} as const;

export const navLinks = [
  { href: "/story", label: "Our story" },
  { href: "/menu", label: "Menu" },
  { href: "/#visit", label: "Visit" },
] as const;

export const siteImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800",
    alt: "Warmly lit coffee bar at Mourning Dove",
  },
  storyPrimary: {
    src: "https://images.unsplash.com/photo-1511081692775-05d0f180a065?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    alt: "The welcoming interior of Mourning Dove coffee shop",
  },
  storySecondary: {
    src: "https://images.unsplash.com/photo-1564327367919-cb377ea6a88f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000",
    alt: "A carefully made cappuccino",
  },
} as const;

export function formatAddress() {
  const { street, city, state, zip } = siteConfig.address;
  return `${street}, ${city}, ${state} ${zip}`;
}
