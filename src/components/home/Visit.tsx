import { PearlMap } from "@/components/home/PearlMap";
import { siteConfig } from "@/data/site";

export function Visit() {
  return (
    <section
      id="visit"
      className="mx-auto grid max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:grid-cols-2 lg:px-16"
    >
      <div className="bg-honey-deep p-8 sm:p-12 lg:p-16">
        <p className="eyebrow">Find your corner</p>
        <h2 className="section-title mt-5">Visit.</h2>
        <p className="mt-8 max-w-md text-xl leading-9">
          Good days start here. Come by for a cup, a seat by the window, and a little quiet on Pearl
          Street.
        </p>

        <div className="mt-12 space-y-8 border-t border-forest/20 pt-10">
          <div>
            <p className="text-sm font-bold tracking-[0.18em] uppercase">Address</p>
            <p className="mt-3 text-lg leading-8">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.18em] uppercase">Hours</p>
            <p className="mt-3 text-lg leading-8">
              {siteConfig.hours.map((slot) => (
                <span key={slot.days}>
                  {slot.days} {slot.time}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>

        <a
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center gap-4 border-b border-forest pb-1 text-base font-bold"
        >
          Get directions <span aria-hidden>↗</span>
        </a>
      </div>
      <PearlMap />
    </section>
  );
}
