import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Menu", href: "/menu" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <>
      <footer
        className="w-full bg-wok-black text-white"
        id="footer-section"
      >
        <div className="mx-auto max-w-[1360px] px-4 pt-16 pb-12 sm:px-8">
          <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">

           {/* Brand */}
<div className="flex flex-col items-start gap-5 lg:col-span-4">
  <Link
    href="/"
    aria-label="Kuro Sizzlers home"
    className="inline-flex"
  >
    <div className="relative h-[92px] w-[155px] overflow-hidden">
      <Image
        src="/logo/logo.png"
        alt="Kuro Sizzlers"
        fill
        sizes="155px"
        className="object-contain object-center scale-[1.35]"
        priority
      />
    </div>
  </Link>

  <p className="mt-1 max-w-sm font-body text-xs leading-relaxed text-white/55">
    Kuro Sizzlers brings Continental, Chinese and multi-cuisine
    flavours together with bold cooking, premium ingredients and
    the unmistakable experience of a sizzling plate.
  </p>

  <div className="flex items-center gap-2">
    <span className="rounded border border-primary/30 bg-primary/10 px-2.5 py-1 font-display text-[11px] font-bold uppercase text-primary">
      100% Halal
    </span>

    <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 font-display text-[11px] uppercase text-white/65">
      Multi-Cuisine
    </span>
  </div>
</div>

            {/* Explore */}
            <div className="flex flex-col gap-3 lg:col-span-2">
              <span className="font-display text-xs font-black uppercase tracking-widest text-primary">
                Explore
              </span>

              <nav aria-label="Footer navigation">
                <ul className="mt-1 flex flex-col gap-2 font-body text-xs text-white/50">
                  {exploreLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Location & Hours */}
            <div className="flex flex-col gap-3 lg:col-span-3">
              <span className="font-display text-xs font-black uppercase tracking-widest text-primary">
                Location &amp; Hours
              </span>

              <div className="mt-1 flex flex-col gap-4 font-body text-xs text-white/50">

                {/* Location */}
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-sm text-primary"
                    aria-hidden="true"
                  >
                    ●
                  </span>

                  <div>
                    <span className="mb-0.5 block font-bold text-white">
                      Kuro Sizzlers
                    </span>
                    Location details coming soon
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-lg leading-none text-primary"
                    aria-hidden="true"
                  >
                    ◷
                  </span>

                  <div>
                    <span className="mb-0.5 block font-bold text-white">
                      Opening Hours
                    </span>
                    Please check with the restaurant for current timings.
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-sm font-bold text-primary"
                    aria-hidden="true"
                  >
                    @
                  </span>

                  <Link
                    href="/contact"
                    className="font-bold transition-colors hover:text-primary"
                  >
                    Contact Kuro Sizzlers
                  </Link>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-4 lg:col-span-3">
              <span className="font-display text-xs font-black uppercase tracking-widest text-primary">
                Follow Kuro
              </span>

              <p className="max-w-xs font-body text-xs leading-relaxed text-white/50">
                Follow Kuro Sizzlers for new dishes, special moments and
                updates from the table.
              </p>

              <div className="mt-1 flex items-center gap-3">

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Kuro Sizzlers on Instagram"
                  className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-wok-black"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Kuro Sizzlers on Facebook"
                  className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-wok-black"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14 8h3V4h-3c-3.314 0-5 1.686-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.667.333-1 1-1Z" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 font-body text-xs text-white/40 md:flex-row">

            <div>
              © {new Date().getFullYear()} Kuro Sizzlers. All rights reserved.
            </div>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>

              <span className="hidden h-4 w-px bg-white/15 sm:block" />

              <span>
                Website by{" "}
                <a
                  href="https://www.launchhaus.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors text-primary/90 hover:text-primary flex items-center gap-1"
                >
                  Launch Haus
                  {/* Arrow */}
                  <span
                    className="material-symbols-outlined text-[14px] -rotate-45"
                    aria-hidden="true"
                  >
                     arrow_forward
                  </span>
                
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-20 right-5 z-40">
        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-full border-2 border-mango-gold bg-wok-black px-4 py-2.5 font-display text-xs font-black uppercase tracking-wider text-mango-gold shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-charcoal-night hover:text-white"
          aria-label="Contact Kuro Sizzlers"
        >
          <span className="text-[18px]" aria-hidden="true">
            ✦
          </span>

          <span>Let's Chat!</span>
        </Link>
      </div>
    </>
  );
}