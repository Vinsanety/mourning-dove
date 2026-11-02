import Image from "next/image";
import Link from "next/link";
import { siteConfig, siteImages } from "@/data/site";

export function Story() {
  return (
    <section
      id="story"
      className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-24 lg:px-16"
    >
      <div className="relative min-h-[580px]">
        <Image
          src={siteImages.storyPrimary.src}
          alt={siteImages.storyPrimary.alt}
          width={1200}
          height={1800}
          className="absolute top-0 left-0 h-[84%] w-[82%] object-cover"
        />
        <Image
          src={siteImages.storySecondary.src}
          alt={siteImages.storySecondary.alt}
          width={1000}
          height={667}
          className="absolute right-0 bottom-0 h-[46%] w-[48%] border-[10px] border-cream object-cover"
        />
        <div className="absolute bottom-10 left-6 grid size-28 place-items-center rounded-full bg-honey text-center text-xs font-bold leading-4 tracking-[0.16em] text-forest uppercase">
          <span>
            Since
            <br />
            <strong className="font-display text-2xl normal-case tracking-normal">
              {siteConfig.founded}
            </strong>
          </span>
        </div>
      </div>

      <div>
        <p className="eyebrow">A neighborhood ritual</p>
        <h2 className="section-title mt-5">
          Come as you are.
          <br />
          Stay a while.
        </h2>
        <p className="mt-8 max-w-xl text-xl leading-9 text-moss">
          {siteConfig.name} began with the birds that nested above our first garage drum: a reminder
          that the best parts of the day shouldn&apos;t be rushed. We make coffee with patience, bake
          with the seasons, and know our regulars by name.
        </p>
        <div className="mt-10 grid max-w-xl grid-cols-2 gap-8 border-t border-forest/20 pt-8">
          <div>
            <p className="font-display text-4xl">100%</p>
            <p className="mt-1 text-base text-sage">Responsibly sourced coffee</p>
          </div>
          <div>
            <p className="font-display text-4xl">7 days</p>
            <p className="mt-1 text-base text-sage">A week, rain or shine</p>
          </div>
        </div>
        <Link
          href="/story"
          className="mt-10 inline-flex items-center gap-3 border-b border-forest pb-1 text-base font-bold"
        >
          More about {siteConfig.name} <span aria-hidden>↗</span>
        </Link>
      </div>
    </section>
  );
}
