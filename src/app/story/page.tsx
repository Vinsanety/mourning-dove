import type { Metadata } from "next";
import { StoryPage } from "@/components/story/StoryPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Our story",
  description: siteConfig.description,
};

export default function StoryRoute() {
  return (
    <div className="page-enter bg-cream">
      <StoryPage />
    </div>
  );
}
