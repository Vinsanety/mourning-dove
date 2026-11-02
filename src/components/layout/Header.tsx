"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onHome = pathname === "/";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-20",
        onHome ? "absolute" : "sticky border-b border-forest/10 bg-cream/95 backdrop-blur",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10 lg:px-16">
        <Link
          href="/"
          className={cn(
            "font-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl",
            onHome ? "text-cream-bright" : "text-forest",
          )}
          onClick={closeMenu}
        >
          {siteConfig.name}
          <span className="text-honey-mark">.</span>
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-10 text-base font-medium md:flex",
            onHome ? "text-cream-bright" : "text-forest",
          )}
        >
          {navLinks.map((link) => (
            <Link key={link.href} className="nav-link" href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link
            className={cn(
              "rounded-full border px-5 py-2.5 transition",
              onHome
                ? "border-white/45 hover:bg-white hover:text-forest"
                : "border-forest/40 hover:bg-forest hover:text-cream-bright",
            )}
            href="/#visit"
          >
            Find us
          </Link>
        </nav>

        <button
          type="button"
          className={cn(
            "flex size-10 items-center justify-center rounded-full border md:hidden",
            onHome
              ? "border-white/40 text-cream-bright"
              : "border-forest/40 text-forest",
          )}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="text-xl leading-none" aria-hidden>
            {isMenuOpen ? "×" : "≡"}
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "mx-6 overflow-hidden rounded-2xl border backdrop-blur md:hidden",
          isMenuOpen ? "mb-4 block" : "hidden",
          onHome
            ? "border-white/15 bg-forest/95 text-cream-bright"
            : "border-forest/10 bg-cream text-forest",
        )}
      >
        <nav className="flex flex-col gap-1 p-4 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="rounded-2xl px-4 py-3 hover:bg-black/5"
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className={cn(
              "mt-2 rounded-full border px-5 py-2.5 text-center transition",
              onHome
                ? "border-white/45 hover:bg-white hover:text-forest"
                : "border-forest/40 hover:bg-forest hover:text-cream-bright",
            )}
            href="/#visit"
            onClick={closeMenu}
          >
            Find us
          </Link>
        </nav>
      </div>
    </header>
  );
}
