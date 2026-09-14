"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-wok-black text-white text-xs font-semibold py-2 px-4 border-b border-primary/20">
        <div className="max-w-[1360px] mx-auto flex items-center justify-center">
          <span className="text-chili-red font-bold text-center">
            Where Every Plate Tells a Story of Fire, Flavour, and Craft.
          </span>
        </div>
      </div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <div className="h-20 max-w-[1360px] mx-auto px-4 sm:px-8 flex items-center justify-between">

          {/* Brand Logo */}
          <Link
            href="/"
            aria-label="Kuro Sizzlers home"
            className="flex items-center gap-2 group"
          >
            <div className="flex ">
              <Image
               src="/logo/logo.png"
               alt="kuro sizzlers"
               width={100}
               height={100}
               />
            </div>
          </Link>

          {/* Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-4 py-2 rounded font-display text-[13px] uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "font-black bg-wok-black text-mango-gold shadow-sm"
                      : "font-bold text-wok-black hover:bg-wok-black/10 hover:text-mango-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/menu"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border-2 border-wok-black font-display font-bold text-xs uppercase tracking-wider text-wok-black hover:bg-wok-black hover:text-mango-gold transition-all duration-200"
            >
              View Menu
            </Link>

            <Link
              href="/contact"
              className="bg-wok-black hover:bg-zinc-900 text-mango-gold hover:text-white px-5 py-2.5 rounded-lg font-display font-black text-xs uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 border border-wok-black"
            >
              <span>Book Table</span>

              <span
                className="text-[16px]"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}