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

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kurosizzlers",
    icon: (
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
    ),
  },
  {
    label: "Google Maps",
    href: "https://maps.app.goo.gl/X5RRXdfMTF4ZsEYA?g_st=ic",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.2" />
      </svg>
    ),
  },
  {
    label: "Zomato",
    href: "https://zomato.onelink.me/zqzv/qgo7fqmm",
    icon: (
      <span className="font-display text-[13px] font-black leading-none">
        Z
      </span>
    ),
  },
  {
    label: "Swiggy",
    href: "https://www.swiggy.com/menu/1414719?source=sharing",
    icon: (
      <span className="font-display text-[13px] font-black leading-none">
        S
      </span>
    ),
  },
  {
    label: "Ownly",
    href: "https://ownly.food/app//brand/BR444681",
    icon: (
      <span className="font-display text-[13px] font-black leading-none">
        O
      </span>
    ),
  },
];

const phoneNumbers = [
  {
    label: "9900803958",
    href: "tel:+919900803958",
  },
  {
    label: "9620421129",
    href: "tel:+919620421129",
  },
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
                    className="scale-[1.35] object-contain object-center"
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
                <a
                  href="https://maps.app.goo.gl/X5RRXdfMTF4ZsEYA?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <span
                    className="mt-0.5 text-sm text-primary"
                    aria-hidden="true"
                  >
                    ●
                  </span>

                  <div>
                    <span className="mb-0.5 block font-bold text-white transition-colors group-hover:text-primary">
                      Kuro Sizzlers
                    </span>

                    <span className="transition-colors group-hover:text-white/70">
                      View location on Google Maps
                    </span>
                  </div>
                </a>

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

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-sm font-bold text-primary"
                    aria-hidden="true"
                  >
                    ☎
                  </span>

                  <div className="flex flex-col gap-1">
                    <span className="mb-0.5 block font-bold text-white">
                      Call / WhatsApp
                    </span>

                    {phoneNumbers.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="w-fit transition-colors hover:text-primary"
                      >
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Ordering */}
            <div className="flex flex-col gap-4 lg:col-span-3">
              <span className="font-display text-xs font-black uppercase tracking-widest text-primary">
                Follow Kuro
              </span>

              <p className="max-w-xs font-body text-xs leading-relaxed text-white/50">
                Follow Kuro Sizzlers and order your favourite dishes online.
              </p>

              {/* Social Links */}
              <div className="mt-1 flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Kuro Sizzlers on ${social.label}`}
                    className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-wok-black"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Order Online */}
              <div className="mt-2">
                <span className="mb-3 block font-display text-[10px] font-bold uppercase tracking-widest text-white/35">
                  Order Online
                </span>

                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://zomato.onelink.me/zqzv/qgo7fqmm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-display text-[10px] font-bold uppercase tracking-wider text-white/60 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-wok-black"
                  >
                    Zomato
                  </a>

                  <a
                    href="https://www.swiggy.com/menu/1414719?source=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-display text-[10px] font-bold uppercase tracking-wider text-white/60 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-wok-black"
                  >
                    Swiggy
                  </a>

                  <a
                    href="https://ownly.food/app//brand/BR444681"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-display text-[10px] font-bold uppercase tracking-wider text-white/60 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-wok-black"
                  >
                    Ownly
                  </a>
                </div>
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
                  className="flex items-center gap-1 text-primary/90 transition-colors hover:text-primary"
                >
                  Launch Haus

                  <span
                    className="material-symbols-outlined -rotate-45 text-[14px]"
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

      {/* Floating WhatsApp / Chat Button */}
      <div className="fixed bottom-20 right-5 z-40">
        <a
          href="https://wa.me/919900803958"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border-2 border-mango-gold bg-wok-black px-4 py-2.5 font-display text-xs font-black uppercase tracking-wider text-mango-gold shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-charcoal-night hover:text-white"
          aria-label="Chat with Kuro Sizzlers on WhatsApp"
        >
          <span className="text-[18px]" aria-hidden="true">
            ✦
          </span>

          <span>Let's Chat!</span>
        </a>
      </div>
    </>
  );
}