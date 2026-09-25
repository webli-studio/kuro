import Image from "next/image";
import Link from "next/link";
import SmokeEffect from "../effects/smokeEffect"


const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kurosizzlers",
    icon: "/icon/instagram.svg",
  },
];

const orderLinks = [
  {
    label: "Zomato",
    href: "https://zomato.onelink.me/xqzv/qgo7fqmm",
    icon: "/icon/zomato.svg",
  },
  {
    label: "Swiggy",
    href: "https://www.swiggy.com/menu/1414719",
    icon: "/icon/swiggy_192x192.png",
  },
  {
    label: "Ownly",
    href: "https://ownly.food/app/brand/BR444681",
    icon: "/icon/ownly.svg",
  },
];

const phoneNumbers = [
  {
    label: "8971685958",
    href: "tel:+918971685958",
  },
  
];

const mapLink =
  "https://www.google.com/maps/place/KURO+Sizzlers/@12.9149312,77.5171309,17z/data=!4m16!1m9!3m8!1s0x3bae3f5a688c7bd1:0x82379ee0c82c958f!2sKURO+Sizzlers!8m2!3d12.9149312!4d77.5197058!9m1!1b1!16s%2Fg%2F11zckvh98j!3m5!1s0x3bae3f5a688c7bd1:0x82379ee0c82c958f!8m2!3d12.9149312!4d77.5197058!16s%2Fg%2F11zckvh98j?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D";

export default function Footer() {
  return (
    <>
      <footer
        className="relative overflow-hidden w-full bg-wok-black text-white"
        id="footer-section"
      >
        {/* Smoke */}
      <SmokeEffect opacity={0.55} />
        <div className="relative z-10 mx-auto max-w-[1360px] px-4 pt-16 pb-12 sm:px-8">
          {/* Main Footer Grid */}
          <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* =========================================================
                BRAND
            ========================================================= */}
            <div className="flex flex-col items-start gap-5 lg:col-span-4">
              <Link
                href="/"
                aria-label="Kuro Sizzlers home"
                className="inline-flex "
              >
                <div className="relative h-[100px] w-[155px] overflow-hidden">
                  <Image
                    src="/logo/logo.png"
                    alt="Kuro Sizzlers"
                    fill
                    sizes="180px"
                    className="md:scale-[2.2] scale-[2.3] inline-flex self-align-center object-contain object-center"
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

            {/* =========================================================
                EXPLORE
            ========================================================= */}
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
                        className="transition-colors duration-200 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* =========================================================
                LOCATION & HOURS
            ========================================================= */}
            <div className="flex flex-col gap-3 lg:col-span-3">
              <span className="font-display text-xs font-black uppercase tracking-widest text-primary">
                Location &amp; Hours
              </span>

              <div className="mt-1 flex flex-col gap-5 font-body text-xs text-white/50">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-primary"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                    >
                      <path
                        d="M20 10.2C20 15.1 12 21 12 21S4 15.1 4 10.2C4 5.67 7.58 2 12 2s8 3.67 8 8.2Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </span>

                  <div>
                    <span className="mb-0.5 block font-bold text-white">
                      Kuro Sizzlers
                    </span>

                    <span className="text-white/50">
                      Rajrajeshwari Nagar, Bengaluru, Karnataka
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-primary"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M12 7v5l3 2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <div>
                    <span className="mb-0.5 block font-bold text-white">
                      Opening Hours
                    </span>

                    <span>
                      Please check with the restaurant for current timings.
                    </span>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-primary"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                    >
                      <path
                        d="M7.2 3.5 9.5 3c.6-.1 1.2.2 1.4.8l1 2.5c.2.5.1 1.1-.3 1.5L10.2 9c1 2 2.6 3.6 4.6 4.6l1.2-1.4c.4-.4 1-.5 1.5-.3l2.5 1c.6.2.9.8.8 1.4l-.5 2.3c-.2.9-1 1.5-1.9 1.5C11 18.1 5.9 13 5.9 6.1c0-.9.6-1.7 1.5-1.9Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <div className="flex flex-col gap-1">
                    <span className="mb-0.5 block font-bold text-white">
                      Call / WhatsApp
                    </span>

                    {phoneNumbers.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        className="w-fit transition-colors duration-200 hover:text-primary"
                      >
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================
                SOCIAL + ORDER + VISIT
            ========================================================= */}
            <div className="flex flex-col gap-6 lg:col-span-3">
              {/* -------------------------
                  SOCIAL
              ------------------------- */}
              <div className="flex flex-col gap-3">
                <span className="font-display text-xs font-black uppercase tracking-widest text-primary">
                  Social
                </span>

                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Kuro Sizzlers on ${social.label}`}
                      className="group flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 hover:scale-105 hover:border-primary"
                    >
                      <Image
                        src={social.icon}
                        alt=""
                        width={22}
                        height={22}
                        className="size-[22px] object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* -------------------------
                  ORDER ONLINE
              ------------------------- */}
              <div className="flex flex-col gap-3">
                <span className="font-display text-xs font-black uppercase tracking-widest text-primary">
                  Order Online
                </span>

                <div className="flex flex-wrap gap-2">
                  {orderLinks.map((order) => (
                    <a
                      key={order.label}
                      href={order.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Order Kuro Sizzlers on ${order.label}`}
                      className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 font-display text-[10px] font-bold uppercase tracking-wider text-white/60 transition-all duration-300 hover:scale-[1.02] hover:border-primary"
                    >
                      <Image
                        src={order.icon}
                        alt=""
                        width={16}
                        height={16}
                        className={
                          order.label === "Swiggy"
                            ? "size-4 rounded-full object-contain"
                            : "size-4 object-contain"
                        }
                      />

                      {order.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* -------------------------
                  VISIT US
              ------------------------- */}
              <div className="flex flex-col gap-3">
                <span className="font-display text-xs font-black uppercase tracking-widest text-primary">
                  Visit Us
                </span>

                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Kuro Sizzlers on Google Maps"
                  className="group flex items-center gap-3"
                >
                  {/* Google Maps style location icon */}
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-300 group-hover:scale-105 group-hover:border-primary"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6"
                    >
                      <path
                        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
                        fill="currentColor"
                        className="text-primary"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        fill="currentColor"
                        className="text-wok-black"
                      />
                    </svg>
                  </span>

                  <div className="min-w-0">
                    <span className="block font-body text-xs font-bold text-white transition-colors duration-200 group-hover:text-primary">
                      Kuro Sizzlers
                    </span>

                    <span className="mt-0.5 block font-body text-[11px] text-white/45 transition-colors duration-200 group-hover:text-white/65">
                      View location on Google Maps
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto size-4 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h13M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* =========================================================
              BOTTOM BAR
          ========================================================= */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 font-body text-xs text-white/40 md:flex-row">
            <div>
              © {new Date().getFullYear()} Kuro Sizzlers. All rights reserved.
            </div>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy-policy"
                className="transition-colors duration-200 hover:text-primary"
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
                  className="inline-flex items-center gap-1 text-primary/90 transition-colors duration-200 hover:text-primary"
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

      {/* =========================================================
          FLOATING WHATSAPP BUTTON
      ========================================================= */}
      <div className="fixed bottom-20 right-5 z-40">
        <a
          href="https://wa.me/918971685958"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border-2 border-mango-gold bg-wok-black md:px-4 md:py-2.5 p-2 font-display text-xs font-black uppercase tracking-wider text-mango-gold shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-charcoal-night hover:text-white"
          aria-label="Chat with Kuro Sizzlers on WhatsApp"
        >
          <Image
            src="/icon/whatsapp.svg"
            alt=""
            width={25}
            height={25}
            className="md:size-5 size-8 object-contain"
          />

          <span className="md:flex hidden">Let's Chat!</span>
        </a>
      </div>
    </>
  );
}