import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  {
    title: "Signature Sizzlers",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90",
    alt: "Sizzling dish served at Kuro Sizzlers",
  },
  {
    title: "The Kuro Atmosphere",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=90",
    alt: "Restaurant dining atmosphere",
  },
  {
    title: "Crafted Cuisine",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=90",
    alt: "Freshly prepared Continental dish",
  },
  {
    title: "Wok-Fired Flavours",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=90",
    alt: "Wok-tossed Asian-inspired dish",
  },
  {
    title: "A Table Full of Flavour",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90",
    alt: "Restaurant dishes arranged for a shared meal",
  },
  {
    title: "Fire, Flavour & Craft",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=90",
    alt: "Warm restaurant interior at Kuro Sizzlers",
  },
];

export default function GalleryPreview() {
  return (
    <section
      id="gallery-section"
      className="w-full bg-surface-cream py-20"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 flex flex-col gap-8">
        {/* Section Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-display font-black text-xs text-wok-black uppercase tracking-[0.25em]">
              Visual Feed
            </span>

            <h2
              id="gallery-heading"
              className="font-display text-3xl sm:text-4xl font-black text-wok-black tracking-tight uppercase"
            >
              A VISUAL TASTE
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 font-display font-black text-xs uppercase tracking-wider text-wok-black hover:text-primary transition-colors"
          >
            <span>View Full Photography Gallery</span>

            <span
              className="material-symbols-outlined text-[18px]"
              aria-hidden="true"
            >
              photo_camera
            </span>
          </Link>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group relative rounded-xl overflow-hidden aspect-square bg-zinc-900 border-2 border-border-soft"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-wok-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-primary font-display font-bold text-sm">
                  {item.title}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}