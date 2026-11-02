export const storyIntro = {
  eyebrow: "Our story",
  title: "Named for a quiet bird, not a loud mountain.",
  lede: "Mourning doves nested in the eaves of our first garage roastery off Folsom. They arrived at first light and left the rest of the day to us. The shop is built the same way: early, unhurried, and without a lot of noise.",
} as const;

export const storyChapters = [
  {
    id: "garage",
    title: "A garage, a drum, a pair of birds",
    body: [
      "In 2016 we dragged a secondhand drum into a Folsom Street garage and roasted what we could afford: small lots, odd bags, whatever the importers would sell a couple of unknowns. The mourning doves moved in before we did. Their coo became the soundtrack to first crack.",
      "We kept the name when we moved to Pearl Street. It still fits. Boulder already has plenty of peaks on the labels. We wanted something quieter: a bird that shows up at dawn and does not make a scene.",
    ],
  },
  {
    id: "cup",
    title: "Coffee that tastes like a place",
    body: [
      "We buy green we can name. Producers, plots, processes. Profiles stay slow on purpose. A cup that needs explaining is usually a cup that was rushed.",
      "Espresso for the bar, filter for the people who sit. Bakery before the doors open. Nothing on the board that we would not drink or eat ourselves on a slow Tuesday.",
    ],
  },
  {
    id: "neighbors",
    title: "Pearl Street, seven days",
    body: [
      "The shop is for neighbors first: the early walkers, the laptop crowd that still looks up, the folks who order the same cortado and mean it. Come as you are. Stay a while. Leave when the light shifts.",
      "We are still the birds' shop in spirit. Open rain or shine. Tip if you can. Drink slowly.",
    ],
  },
] as const;

export const storyStats = [
  { value: "2016", label: "First garage roast" },
  { value: "100%", label: "Lots we can name" },
  { value: "7 days", label: "Open on Pearl Street" },
] as const;
