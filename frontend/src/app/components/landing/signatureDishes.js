"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { label: "All Signatures", value: "all" },
  { label: "Sizzlers", value: "sizzlers" },
  { label: "Continental", value: "continental" },
  { label: "Indo-Chinese", value: "indo-chinese" },
];

const dishes = [
  {
    title: "Signature Chicken Sizzler",
    category: "sizzlers",
    categoryLabel: "Signature Sizzler",
    description:
      "A signature sizzling plate crafted around Kuro's love for fire, flavour, and the classic cast-iron sizzler experience.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90",
    alt: "Signature sizzling restaurant dish served on a hot plate",
  },
  {
    title: "Herb-Crusted Pasta",
    category: "continental",
    categoryLabel: "Continental Favourite",
    description:
      "Comforting Continental flavours brought together with herbs, rich textures, and Kuro's contemporary Indian soul.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=90",
    alt: "Herb-crusted pasta served as a Continental restaurant dish",
  },
  {
    title: "Signature Wok Creation",
    category: "indo-chinese",
    categoryLabel: "Indo-Chinese Wok",
    description:
      "Bold wok-tossed flavours inspired by Indo-Chinese cooking, finished with the energy and heat of the Kuro kitchen.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=90",
    alt: "Wok-tossed Indo-Chinese dish served at a restaurant",
  },
];

export default function SignatureDishes() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDishes =
    activeCategory === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section
      id="signature-dishes"
      className="w-full bg-surface py-20"
      aria-labelledby="signature-dishes-heading"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 flex flex-col gap-10">
        {/* Section Heading */}
        <header className="flex flex-col items-center text-center max-w-2xl mx-auto gap-2">
          <span className="font-display font-black text-xs text-wok-black uppercase tracking-[0.25em] bg-primary px-3 py-1 rounded">
            Chef&apos;s Masterpieces
          </span>

          <h2
            id="signature-dishes-heading"
            className="font-display text-3xl sm:text-4xl font-black text-wok-black tracking-tight uppercase"
          >
            ICONIC SIGNATURE DISHES
          </h2>

          <p className="text-sm text-zinc-600">
            Discover the dishes that capture Kuro&apos;s philosophy of fire,
            flavour, and craft across Continental, Chinese, and multi-cuisine
            favourites.
          </p>
        </header>

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Filter signature dishes"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.value)}
                className={
                  isActive
                    ? "px-5 py-2.5 rounded-md bg-wok-black text-primary font-display font-black text-xs uppercase tracking-wider shadow-sm transition-all"
                    : "px-5 py-2.5 rounded-md bg-surface-cream text-wok-black hover:bg-primary/30 font-display font-bold text-xs uppercase tracking-wider transition-all border border-border-soft"
                }
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Dish Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2"
          role="tabpanel"
        >
          {filteredDishes.map((dish) => (
            <article
              key={dish.title}
              className="flex flex-col bg-white rounded-xl overflow-hidden border-2 border-border-soft hover:border-wok-black hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-zinc-100">
                <Image
                  src={dish.image}
                  alt={dish.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />

                <div className="absolute top-3 left-3 px-3 py-1 bg-wok-black text-primary font-display font-black text-xs uppercase rounded">
                  {dish.categoryLabel}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-black text-wok-black">
                    {dish.title}
                  </h3>

                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border-soft">
                  <span className="text-xs font-bold text-zinc-500">
                    Kuro Sizzlers
                  </span>

                  <span
                    className="material-symbols-outlined text-wok-black text-[22px]"
                    aria-hidden="true"
                  >
                    arrow_circle_right
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-4">
          <Link
            href="/menu"
            className="px-8 py-3.5 rounded-lg bg-wok-black hover:bg-zinc-900 text-primary hover:text-white font-display font-black text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2 shadow-lg"
          >
            <span>View Complete Menu</span>

            <span
              className="material-symbols-outlined text-[18px]"
              aria-hidden="true"
            >
              restaurant_menu
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}