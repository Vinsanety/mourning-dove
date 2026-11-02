# Mourning Dove

A portfolio site for **Mourning Dove**, a fictional neighborhood coffee shop in Boulder, Colorado. Named for the doves that nested above a garage drum: coffee, bakery, and a quiet place to stay a while.

Home matches a [Figma Make](https://www.figma.com/make/MUSIskvDTjZdqml1weKFCp/Coffee-Shop-Website) layout, with a full menu, long-form story, and a real Google Map pin on Pearl Street.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **React 19**
- **Tailwind CSS 4**
- **next/image** for Unsplash photography
- Google Maps embed for the visit block

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
npm run lint
```

## What’s in the app

| Route     | What it does                                                      |
| --------- | ----------------------------------------------------------------- |
| `/`       | Hero, story teaser, menu favorites, visit hours, Pearl Street map |
| `/menu`   | Full menu: espresso, brew, bakery, kitchen                        |
| `/story`  | Brand origin, roast philosophy, Pearl Street chapter              |
| `/#visit` | Address, hours, directions, map                                   |

## Architecture

```
src/
  app/           Routes, metadata, sitemap, robots
  components/    Layout, home sections, menu, story
  data/          Site copy, menu, story
  lib/           Small helpers
```

## Design system

**Palette:** `#243126` forest, `#F4EFE5` cream, `#DCA75C` honey gold.

**Type:** DM Sans for UI and prices, Fraunces for display (`next/font`).

**Motion:** hero rise on load, nav underline grow, CTA arrow nudge on hover.

This is a fictional business built as a portfolio piece.
