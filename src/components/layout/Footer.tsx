import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-forest-deep px-6 py-14 text-cream-soft md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1272px] flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-12 md:flex-row md:items-end">
          <p className="font-display text-4xl tracking-[-0.04em] sm:text-5xl">
            {siteConfig.name}
            <span className="text-honey-mark">.</span>
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-base text-white/65">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 text-sm text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
