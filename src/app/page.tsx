import { Hero } from "@/components/home/Hero";
import { Menu } from "@/components/home/Menu";
import { Story } from "@/components/home/Story";
import { Visit } from "@/components/home/Visit";

export default function HomePage() {
  return (
    <div className="page-enter">
      <Hero />
      <Story />
      <Menu />
      <Visit />
    </div>
  );
}
