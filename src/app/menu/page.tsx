import type { Metadata } from "next";
import { FullMenu } from "@/components/menu/FullMenu";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Menu",
  description: `The full Mourning Dove menu: espresso, brew, bakery, and kitchen plates in ${siteConfig.address.city}.`,
};

export default function MenuPage() {
  return (
    <div className="page-enter bg-cream">
      <FullMenu />
    </div>
  );
}
