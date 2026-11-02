export type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  lede?: string;
  items: MenuItem[];
};

export const fullMenu: MenuSection[] = [
  {
    id: "espresso",
    title: "Espresso",
    lede: "Pulled on our house roast. Milk alternatives available.",
    items: [
      {
        name: "Espresso",
        description: "Our house-roasted espresso, rich and balanced",
        price: "$3.50",
      },
      {
        name: "Americano",
        description: "Espresso stretched with hot water",
        price: "$4.00",
      },
      {
        name: "Macchiato",
        description: "Espresso marked with a spoon of foam",
        price: "$4.25",
      },
      {
        name: "Cappuccino",
        description: "Equal parts espresso, steamed milk, and foam",
        price: "$4.75",
      },
      {
        name: "Maple Cortado",
        description: "Equal parts espresso and milk with a touch of maple",
        price: "$5.00",
      },
      {
        name: "Latte",
        description: "Espresso with steamed milk",
        price: "$5.50",
      },
      {
        name: "Honey Oat Latte",
        description: "Espresso, oat milk, wildflower honey, sea salt",
        price: "$6.25",
      },
      {
        name: "Mocha",
        description: "Espresso, steamed milk, and dark chocolate",
        price: "$6.00",
      },
      {
        name: "Flat White",
        description: "Double ristretto with microfoam",
        price: "$5.25",
      },
    ],
  },
  {
    id: "brewed",
    title: "Brewed & batch",
    lede: "Filter coffee for slower mornings.",
    items: [
      {
        name: "Drip Coffee",
        description: "Batch brew of the day, rotating origins",
        price: "$3.75",
      },
      {
        name: "Seasonal Pour Over",
        description: "Single origin, hand-brewed to order",
        price: "$5.50",
      },
      {
        name: "Cold Brew",
        description: "Steeped overnight, served over ice",
        price: "$5.00",
      },
      {
        name: "Iced Tea",
        description: "Black or hibiscus, house-steeped",
        price: "$4.00",
      },
    ],
  },
  {
    id: "not-coffee",
    title: "Not coffee",
    items: [
      {
        name: "Hot Chocolate",
        description: "Dark cocoa, steamed milk, whipped cream",
        price: "$4.50",
      },
      {
        name: "Chai Latte",
        description: "Spiced chai with steamed milk",
        price: "$5.25",
      },
      {
        name: "Matcha Latte",
        description: "Ceremonial-grade matcha, lightly sweetened",
        price: "$5.75",
      },
      {
        name: "Fresh Juice",
        description: "Orange or apple, pressed daily",
        price: "$5.00",
      },
      {
        name: "Sparkling Water",
        description: "Chilled and simple",
        price: "$3.00",
      },
    ],
  },
  {
    id: "bakery",
    title: "Bakery",
    lede: "Baked before dawn. Ask about today’s specials.",
    items: [
      {
        name: "Butter Croissant",
        description: "Flaky layers, slow-fermented dough",
        price: "$4.50",
      },
      {
        name: "Almond Croissant",
        description: "Filled with almond cream, toasted almonds",
        price: "$5.50",
      },
      {
        name: "Cardamom Bun",
        description: "Soft swirl, pearl sugar, warm spice",
        price: "$4.75",
      },
      {
        name: "Banana Bread",
        description: "Walnut studded, served warm",
        price: "$4.25",
      },
      {
        name: "Seasonal Muffin",
        description: "Changes with the market",
        price: "$3.75",
      },
      {
        name: "Chocolate Chip Cookie",
        description: "Brown butter, flaky salt",
        price: "$3.50",
      },
      {
        name: "Olive Oil Cake",
        description: "Citrus glaze, rosemary finish",
        price: "$5.00",
        note: "Slice",
      },
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen",
    lede: "Simple plates until 2pm.",
    items: [
      {
        name: "Avocado Toast",
        description: "Sourdough, lemon, chili flake, soft egg",
        price: "$12.00",
      },
      {
        name: "Granola Bowl",
        description: "House granola, yogurt, seasonal fruit, honey",
        price: "$11.00",
      },
      {
        name: "Breakfast Sandwich",
        description: "Egg, cheddar, greens on a soft roll",
        price: "$10.50",
        note: "Add bacon +$2",
      },
      {
        name: "Seasonal Soup",
        description: "Rotating pot with bread",
        price: "$9.00",
      },
      {
        name: "Greens Salad",
        description: "Local greens, herbs, toasted seeds, vinaigrette",
        price: "$11.50",
      },
      {
        name: "Grilled Cheese",
        description: "Three cheeses on country loaf, tomato jam",
        price: "$10.00",
      },
    ],
  },
];

export function getFavoriteItems(): MenuItem[] {
  const byName = new Map(
    fullMenu.flatMap((section) => section.items.map((item) => [item.name.toLowerCase(), item])),
  );

  const favorites: MenuItem[] = [];
  for (const key of [
    "espresso",
    "honey oat latte",
    "maple cortado",
    "seasonal pour over",
  ]) {
    const item = byName.get(key);
    if (item) favorites.push(item);
  }
  return favorites;
}
