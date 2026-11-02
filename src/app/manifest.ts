import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mourning Dove Coffee",
    short_name: "Mourning Dove",
    description:
      "Neighborhood coffee in Boulder. Named for the doves above the first garage roastery.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4EFE5",
    theme_color: "#243126",
  };
}
