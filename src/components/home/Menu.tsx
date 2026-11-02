import Link from "next/link";
import { getFavoriteItems } from "@/data/menu";

export function Menu() {
  const favorites = getFavoriteItems();

  return (
    <section id="menu" className="bg-forest px-6 py-24 text-cream-soft md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-[1272px]">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-[#e1ac64]">From the bar</p>
            <h2 className="section-title mt-5 text-cream-soft">A few favorites.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-white/60">
            Our menu changes with the season, but these house staples always have a place at the
            table.
          </p>
        </div>

        <div className="mt-16 grid border-t border-white/20 md:grid-cols-2">
          {favorites.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <article
                key={item.name}
                className={`group border-b border-white/20 py-8 md:p-8 ${
                  isLeft ? "md:border-r md:pl-0" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-3xl transition group-hover:text-[#e4b26d]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-white/55">{item.description}</p>
                  </div>
                  <span className="pt-2 font-sans text-xl font-medium text-[#e4b26d] md:text-2xl">
                    {item.price}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <Link
          href="/menu"
          className="mt-12 inline-flex items-center gap-5 rounded-full border border-white/30 py-2.5 pr-2.5 pl-6 text-base font-semibold transition hover:bg-white hover:text-forest"
        >
          View full menu
          <span className="grid size-9 place-items-center rounded-full bg-honey-mid text-forest">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
