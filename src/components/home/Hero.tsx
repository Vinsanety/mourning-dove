import Image from "next/image";
import { siteImages } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-end bg-forest sm:min-h-[820px] lg:min-h-[900px]">
      <Image
        src={siteImages.hero.src}
        alt={siteImages.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,31,24,0.84)_0%,rgba(22,31,24,0.48)_50%,rgba(22,31,24,0.14)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(22,31,24,0.6)_0%,transparent_45%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 text-cream-bright md:px-10 md:pb-20 lg:px-16 lg:pb-24">
        <p className="hero-copy mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-honey-soft">
          Coffee · Bakery · Neighbors
        </p>
        <h1 className="hero-copy font-display max-w-4xl text-[clamp(4rem,10vw,9rem)] leading-[0.92] tracking-[-0.065em]">
          Make time
          <br />
          for <em className="font-normal text-honey-bright">good</em> coffee.
        </h1>
        <div className="hero-copy-delay mt-10 flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:gap-10">
          <a
            className="group flex items-center gap-5 rounded-full bg-honey py-2.5 pr-2.5 pl-6 text-base font-semibold text-forest transition hover:bg-[#f0c780]"
            href="#menu"
          >
            Explore our menu
            <span className="grid size-10 place-items-center rounded-full bg-forest text-lg text-white transition group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <p className="max-w-sm text-base leading-7 text-white/75">
            Roasted down the road. Baked before dawn. Served with genuine care.
          </p>
        </div>
      </div>
    </section>
  );
}
