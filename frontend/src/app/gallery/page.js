import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    title: "Signature Sizzlers",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=90",
    alt: "Sizzling dish presented on a restaurant table",
    size: "large",
  },
  {
    title: "The Kuro Atmosphere",
    category: "Atmosphere",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=90",
    alt: "Warm restaurant dining atmosphere",
    size: "normal",
  },
  {
    title: "Crafted Cuisine",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1600&q=90",
    alt: "Freshly prepared pasta dish",
    size: "normal",
  },
  {
    title: "Wok-Fired Flavours",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1600&q=90",
    alt: "Wok-tossed dish inspired by Asian cuisine",
    size: "tall",
  },
  {
    title: "A Table Full of Flavour",
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=90",
    alt: "Multiple dishes arranged for a shared dining experience",
    size: "normal",
  },
  {
    title: "Fire, Flavour & Craft",
    category: "Atmosphere",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=90",
    alt: "Restaurant interior with warm dining ambience",
    size: "large",
  },
  {
    title: "Made To Be Shared",
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=90",
    alt: "Restaurant food prepared for sharing",
    size: "normal",
  },
  {
    title: "Fresh From The Kitchen",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=90",
    alt: "Freshly prepared restaurant dish",
    size: "normal",
  },
];

const categories = ["All", "Food", "Dining", "Atmosphere"];

export const metadata = {
  title: "Gallery | Kuro Sizzlers",
  description:
    "Explore the Kuro Sizzlers gallery and get a visual taste of our food, dining atmosphere and the fire, flavour and craft behind the experience.",
};

export default function GalleryPage() {
  return (
    <main className="w-full">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        aria-labelledby="gallery-title"
        className="w-full bg-wok-black text-white "
      >
        <div className="mx-auto flex justify-center max-w-[1360px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 font-display text-xs font-black uppercase tracking-[0.22em] text-primary">
              Kuro Sizzlers
            </p>

            <h1
              id="gallery-title"
              className="font-display text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-7xl"
            >
              A VISUAL
              <br />
              <span className="text-primary">TASTE.</span>
            </h1>

            <p className="mt-6 max-w-2xl font-body text-sm leading-7 text-white/65 sm:text-base">
              Step inside the world of Kuro Sizzlers — from sizzling plates
              and crafted dishes to the atmosphere around the table.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}
      <section
        aria-labelledby="gallery-grid-title"
        className="w-full bg-surface-cream py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
          {/* Section intro */}
          <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-mustard-deep">
                Photo Journal
              </p>

              <h2
                id="gallery-grid-title"
                className="mt-2 font-display text-3xl font-black uppercase leading-tight text-wok-black sm:text-4xl"
              >
                FIRE. FLAVOUR. CRAFT.
              </h2>
            </div>

            <p className="max-w-lg font-body text-sm leading-6 text-on-surface-muted">
              A collection of moments from the Kuro experience — the food,
              the table and the atmosphere that surrounds it.
            </p>
          </div>


          {/* Masonry-style responsive grid */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
  {galleryItems.map((item) => (
    <article
      key={item.title}
      className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl border-2 border-border-soft bg-wok-black"
    >
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-wok-black via-wok-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <span className="font-body text-[10px] font-black uppercase tracking-[0.2em] text-primary">
            {item.category}
          </span>

          <h3 className="mt-1 font-display text-lg font-black uppercase text-white sm:text-xl">
            {item.title}
          </h3>

          <div className="mt-3 flex size-9 items-center justify-center rounded-full bg-primary text-wok-black transition-transform duration-300 group-hover:rotate-45">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[18px]"
            >
              arrow_forward
            </span>
          </div>
        </div>
      </div>
    </article>
  ))}
</div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE CTA
      ====================================================== */}
      <section
        aria-labelledby="gallery-cta-title"
        className="w-full bg-mango-gold py-16 text-wok-black sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <p className="font-display text-xs font-black uppercase tracking-[0.22em]">
            Experience Kuro
          </p>

          <h2
            id="gallery-cta-title"
            className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl"
          >
            PICTURES ARE JUST THE BEGINNING.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-body text-sm leading-7 text-wok-black/70 sm:text-base">
            Come experience the sizzle, discover the flavours and create your
            own moments around the table.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-wok-black px-6 font-body text-sm font-black uppercase tracking-wide text-mango-gold transition hover:bg-charcoal-night"
            >
              Explore Menu
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[18px]"
              >
                arrow_forward
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-wok-black px-6 font-body text-sm font-black uppercase tracking-wide text-wok-black transition hover:bg-wok-black hover:text-mango-gold"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}