import Image from "next/image";
import Link from "next/link";
import { siteConfig, siteImages } from "@/data/site";
import { storyChapters, storyIntro, storyStats } from "@/data/story";

export function StoryPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-6 pt-28 pb-24 md:px-10 md:pt-32 md:pb-32 lg:px-16">
      <div className="max-w-3xl">
        <p className="eyebrow text-honey-mark">{storyIntro.eyebrow}</p>
        <h1 className="section-title mt-5">{storyIntro.title}</h1>
        <p className="mt-8 text-2xl leading-10 text-moss">{storyIntro.lede}</p>
      </div>

      <div className="relative mt-16 aspect-[16/9] overflow-hidden md:mt-20">
        <Image
          src={siteImages.storyPrimary.src}
          alt={siteImages.storyPrimary.alt}
          fill
          sizes="(max-width: 1100px) 100vw, 1100px"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-12 grid gap-8 border-y border-forest/15 py-10 sm:grid-cols-3">
        {storyStats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl tracking-[-0.04em] md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-base text-sage">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-24">
        {storyChapters.map((chapter, index) => (
          <article
            key={chapter.id}
            id={chapter.id}
            className="grid scroll-mt-28 gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16"
          >
            <div>
              <p className="font-sans text-base font-medium text-honey-mark">0{index + 1}</p>
              <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] md:text-4xl">
                {chapter.title}
              </h2>
            </div>
            <div className="space-y-5 text-xl leading-9 text-moss">
              {chapter.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 grid gap-10 border-t border-forest/15 pt-16 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={siteImages.storySecondary.src}
            alt={siteImages.storySecondary.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Still here</p>
          <h2 className="section-title mt-5 text-[clamp(2.5rem,5vw,4.5rem)]">
            Come as you are.
            <br />
            Stay a while.
          </h2>
          <p className="mt-6 text-xl leading-9 text-moss">
            Find us on Pearl Street seven days a week. The birds do not punch a clock, and neither
            does a good cup.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#visit"
              className="inline-flex items-center gap-5 rounded-full bg-honey py-2.5 pr-2.5 pl-6 text-base font-semibold text-forest transition hover:bg-[#f0c780]"
            >
              Visit {siteConfig.name}
              <span className="grid size-10 place-items-center rounded-full bg-forest text-lg text-white">
                →
              </span>
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center border-b border-forest pb-1 text-base font-bold"
            >
              See the menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
