import Image from "next/image";
import Link from "next/link";

const chapters = [
  {
    number: "01",
    title: "Sizzler Platters",
    description:
      "Our signature sizzling plates bring together bold flavours, grilled preparations, fresh vegetables and perfectly crafted accompaniments.",
    category: "House Specialties",
    items: [
      "Signature Chicken Sizzler",
      "Grilled Chicken Platter",
      "Kuro Special Sizzler",
    ],
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90",
    href: "/menu#sizzlers",
    linkText: "Explore Sizzlers",
  },
  {
    number: "02",
    title: "Continental Favourites",
    description:
      "Comforting Continental creations crafted with rich sauces, fresh ingredients and Kuro's distinctive approach to flavour.",
    category: "Continental",
    items: [
      "Cream Soups",
      "Herb-Crusted Pasta",
      "Wood-Fired Pizza",
    ],
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=90",
    href: "/menu#continental",
    linkText: "Explore Continental",
  },
  {
    number: "03",
    title: "Indo-Chinese Wok",
    description:
      "Bold wok creations combining familiar Indo-Chinese flavours with Kuro's signature balance of spice, texture and craft.",
    category: "Wok Creations",
    items: [
      "Wok-Tossed Noodles",
      "Indo-Chinese Starters",
      "Signature Wok Creations",
    ],
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=90",
    href: "/menu#indo-chinese",
    linkText: "Explore Wok Creations",
  },
  {
    number: "04",
    title: "Indulgent Desserts",
    description:
      "A selection of indulgent desserts created to finish the Kuro experience on a sweet and memorable note.",
    category: "Sweet Finish",
    items: [
      "Signature Desserts",
      "Chocolate Creations",
      "Chef's Specials",
    ],
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=90",
    href: "/menu#desserts",
    linkText: "Explore Desserts",
  },
];

export default function FoodExperience() {
  return (
    <section
      className="w-full bg-wok-black py-20 text-white"
      id="menu-chapter"
      aria-labelledby="food-experience-heading"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-display font-black text-xs text-primary uppercase tracking-[0.25em]">
              Food Experience
            </span>

            <h2
              id="food-experience-heading"
              className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white uppercase"
            >
              A TASTE OF KURO
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base">
              From sizzling signature plates to Continental, Chinese and
              multi-cuisine favourites, discover the flavours that define Kuro.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 font-display font-black text-xs uppercase tracking-wider text-mango-gold hover:text-white transition-colors bg-zinc-900 border border-zinc-700 px-4 py-2.5 rounded-lg"
          >
            <span>View Full Menu</span>
            <span aria-hidden="true" className="text-[18px]">
              ↗
            </span>
          </Link>
        </div>

        {/* Chapter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chapters.map((chapter) => (
            <article
              key={chapter.number}
              className="group flex flex-col justify-between bg-charcoal-card border border-zinc-800 rounded-xl p-5 hover:border-primary transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">

                {/* Image */}
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                  <Image
                    src={chapter.image}
                    alt={`${chapter.title} at Kuro Sizzlers`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-primary text-wok-black font-display font-black text-[11px] uppercase tracking-wider">
                    Chapter {chapter.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-lg font-black text-white group-hover:text-primary transition-colors">
                    {chapter.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {chapter.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="flex flex-col gap-1.5 pt-3 border-t border-zinc-800">
                  <span className="font-display text-[11px] font-black text-primary uppercase">
                    {chapter.category}
                  </span>

                  <ul className="text-xs text-zinc-300 flex flex-col gap-1">
                    {chapter.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}