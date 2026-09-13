import Link from "next/link";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Menu", href: "/menu" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <>
      <footer
        className="w-full bg-wok-black text-white border-t-4 border-primary"
        id="footer-section"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

            {/* Brand Column */}
            <div className="lg:col-span-4 flex flex-col items-start gap-4">
              <Link
                href="/"
                aria-label="Kuro Sizzlers home"
                className="flex flex-col"
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-black text-3xl tracking-tighter text-primary uppercase">
                    KURO
                  </span>

                  <span className="font-display font-bold text-xs bg-primary text-wok-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Sizzlers
                  </span>
                </div>

                <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-400 uppercase mt-0.5">
                  — Fire • Flavour • Craft —
                </span>
              </Link>

              <p className="text-xs text-zinc-400 max-w-sm leading-relaxed mt-2">
                Where every plate tells a story of fire, flavour, and craft.
                Kuro Sizzlers brings Continental, Chinese and multi-cuisine
                flavours together with a bold Indian soul.
              </p>

              <div className="flex items-center gap-2 mt-2">
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-primary font-display font-bold text-[11px] uppercase">
                  100% Halal
                </span>

                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-display text-[11px] uppercase">
                  Multi-Cuisine
                </span>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              <span className="font-display font-black text-xs text-primary tracking-widest uppercase">
                Explore
              </span>

              <nav aria-label="Footer navigation">
                <ul className="flex flex-col gap-2 mt-1 text-xs text-zinc-400">
                  {exploreLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Location & Hours */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <span className="font-display font-black text-xs text-primary tracking-widest uppercase">
                Location &amp; Hours
              </span>

              <div className="mt-1 flex flex-col gap-3 text-xs text-zinc-400">

                {/* Location */}
                <div className="flex items-start gap-2">
                  <span
                    className="text-primary text-[18px]"
                    aria-hidden="true"
                  >
                    ●
                  </span>

                  <div>
                    <span className="text-white font-bold block">
                      Kuro Sizzlers
                    </span>
                    Location details coming soon
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-2">
                  <span
                    className="text-primary text-[18px]"
                    aria-hidden="true"
                  >
                    ◷
                  </span>

                  <div>
                    <span className="text-white font-bold block">
                      Opening Hours
                    </span>
                    Please check with the restaurant for current timings.
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-2">
                  <span
                    className="text-primary text-[18px]"
                    aria-hidden="true"
                  >
                    @
                  </span>

                  <div>
                    <Link
                      href="/contact"
                      className="hover:text-primary transition-colors block"
                    >
                      Contact Kuro Sizzlers
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              <span className="font-display font-black text-xs text-primary tracking-widest uppercase">
                Kuro Updates
              </span>

              <p className="text-xs text-zinc-400 mt-1">
                Stay updated with new dishes, special events, and what's
                happening at Kuro Sizzlers.
              </p>

              <form className="flex flex-col gap-2 mt-2">
                <div className="relative w-full">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 placeholder:text-zinc-600 text-white text-xs px-3 py-2.5 rounded-md focus:outline-none focus:border-primary transition-all"
                  />

                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-primary hover:bg-primary-hover text-wok-black rounded font-display font-black text-[11px] uppercase transition-colors"
                  >
                    Join
                  </button>
                </div>

                <span className="text-[10px] text-zinc-500">
                  We respect your privacy. No spam.
                </span>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div>
              © {new Date().getFullYear()} Kuro Sizzlers. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <Link
          href="/contact"
          className="bg-wok-black hover:bg-zinc-900 text-primary hover:text-white px-4 py-2.5 rounded-full shadow-2xl border-2 border-primary flex items-center gap-2 font-display font-black text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105"
          aria-label="Contact Kuro Sizzlers"
        >
          <span
            className="text-[18px]"
            aria-hidden="true"
          >
            ✦
          </span>

          <span>Let's Chat!</span>
        </Link>
      </div>
    </>
  );
}