"use client";

import Image from "next/image";
import Link from "next/link";

const atmosphereFeatures = [
  {
    icon: "groups",
    title: "Gather & Celebrate",
    description:
      "A welcoming space for sharing plates, celebrations, family meals, and memorable evenings.",
  },
  {
    icon: "restaurant",
    title: "Multi-Cuisine Experience",
    description:
      "Explore Continental, Chinese, and multi-cuisine flavours brought together under one roof.",
  },
  {
    icon: "soup_kitchen",
    title: "Fire, Flavour & Craft",
    description:
      "Experience the spirit of Kuro through sizzling plates, crafted dishes, and bold flavours.",
  },
];

export default function ExperiencePreview() {
  return (
    <section
      id="experience-section"
      className="relative w-full py-20 overflow-hidden bg-charcoal-night"
      aria-labelledby="experience-heading"
    >
      {/* Atmospheric Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=3000&q=90"
          alt="Atmospheric restaurant interior"
          fill
          sizes="100vw"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-wok-black via-charcoal-night/95 to-charcoal-night/80" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary font-display font-black text-xs tracking-[0.25em] uppercase">
              <span
                className="material-symbols-outlined text-[16px]"
                aria-hidden="true"
              >
                celebration
              </span>

              <span>The Kuro Experience</span>
            </div>

            <h2
              id="experience-heading"
              className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight"
            >
              MORE THAN JUST A MEAL.
              <br />
              <span className="text-primary">
                A Celebration of Fire &amp; Flavour.
              </span>
            </h2>

            <p className="text-zinc-300 font-body text-base leading-relaxed">
              Step into Kuro Sizzlers, where every plate tells a story of
              fire, flavour, and craft. From sizzling cast-iron plates to
              thoughtfully crafted Continental, Chinese, and multi-cuisine
              dishes, Kuro brings culinary traditions together with an Indian
              soul.
            </p>

            {/* Bento Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {atmosphereFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="p-5 bg-wok-black/80 border border-zinc-800 rounded-lg flex flex-col gap-2"
                >
                  <span
                    className="material-symbols-outlined text-primary text-[28px]"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </span>

                  <h3 className="font-display font-bold text-sm text-white uppercase">
                    {feature.title}
                  </h3>

                  <p className="text-xs text-zinc-400">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-wok-black font-display font-black text-xs uppercase tracking-widest transition-all"
              >
                <span>Plan Your Visit</span>

                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side Visual */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 p-2 bg-wok-black/60">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=3000&q=90"
                  alt="Warm and atmospheric dining space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}