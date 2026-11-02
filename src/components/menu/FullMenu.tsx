import { fullMenu } from "@/data/menu";

export function FullMenu() {
  return (
    <div className="mx-auto max-w-[1100px] px-6 pt-28 pb-24 md:px-10 md:pt-32 md:pb-32 lg:px-16">
      <div className="max-w-2xl">
        <p className="eyebrow text-honey-mark">The full board</p>
        <h1 className="section-title mt-5">Menu.</h1>
        <p className="mt-6 text-xl leading-9 text-moss">
          Coffee, bakery, and a few plates for lingering. Seasonal items rotate; ask the bar what
          just came out of the oven.
        </p>
      </div>

      <nav
        aria-label="Menu sections"
        className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-b border-forest/15 pb-6 text-base font-medium"
      >
        {fullMenu.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="nav-link text-forest">
            {section.title}
          </a>
        ))}
      </nav>

      <div className="mt-6 flex flex-col gap-20">
        {fullMenu.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <div className="flex flex-col gap-3 border-b border-forest/15 pb-6 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-4xl tracking-[-0.04em] md:text-5xl">{section.title}</h2>
              {section.lede ? (
                <p className="max-w-md text-base leading-7 text-sage">{section.lede}</p>
              ) : null}
            </div>
            <ul className="divide-y divide-forest/10">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="group flex items-start justify-between gap-6 py-6 md:py-7"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="font-display text-2xl tracking-[-0.03em] transition group-hover:text-honey-mark md:text-3xl">
                        {item.name}
                      </h3>
                      {item.note ? (
                        <span className="text-xs font-semibold tracking-[0.16em] text-sage uppercase">
                          {item.note}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 max-w-xl text-base leading-7 text-moss">{item.description}</p>
                  </div>
                  <span className="shrink-0 pt-1 font-sans text-xl font-medium text-honey-mark md:text-2xl">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-20 max-w-lg text-base leading-7 text-sage">
        Prices listed for here. Oat, almond, and soy +$0.75. Kitchen closes at 2pm. Tip the birds if
        you can.
      </p>
    </div>
  );
}
