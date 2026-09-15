"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    title: "Signature Chicken Sizzler",
    categoryLabel: "Signature Sizzler",
    description:
      "A signature sizzling plate crafted around Kuro's love for fire, flavour, and the classic cast-iron sizzler experience.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90",
    alt: "Signature sizzling restaurant dish served on a hot plate",
  },
  {
    title: "Herb-Crusted Pasta",
    categoryLabel: "Continental Favourite",
    description:
      "Comforting Continental flavours brought together with herbs, rich textures, and Kuro's contemporary Indian soul.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=90",
    alt: "Herb-crusted pasta served as a Continental restaurant dish",
  },
  {
    title: "Signature Wok Creation",
    categoryLabel: "Indo-Chinese Wok",
    description:
      "Bold wok-tossed flavours inspired by Indo-Chinese cooking, finished with the energy and heat of the Kuro kitchen.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=90",
    alt: "Wok-tossed Indo-Chinese dish served at a restaurant",
  },
];

export default function SignatureDishes() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      /* =====================================================
         SECTION HEADING
      ====================================================== */

      gsap.fromTo(
        ".signature-heading > *",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".signature-heading",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =====================================================
         DISH CARDS
      ====================================================== */

      gsap.fromTo(
        ".signature-dish-card",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".signature-dishes-grid",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =====================================================
         CTA
      ====================================================== */

      gsap.fromTo(
        ".signature-dishes-cta",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".signature-dishes-cta",
            start: "top 88%",
            once: true,
          },
        }
      );
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="signature-dishes"
      className="w-full bg-surface py-20"
      aria-labelledby="signature-dishes-heading"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 flex flex-col gap-10">

        {/* Section Heading */}
        <header className="signature-heading flex flex-col items-center text-center max-w-2xl mx-auto gap-2">
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

        {/* Dish Cards */}
        <div
          className="signature-dishes-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-2"
          role="tabpanel"
        >
          {dishes.map((dish) => (
            <article
              key={dish.title}
              className="signature-dish-card flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-zinc-100">
                <Image
                  src={dish.image}
                  alt={dish.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="signature-dishes-cta flex justify-center pt-4">
          <Link
            href="/menu"
            className="px-8 py-3.5 rounded-lg bg-wok-black hover:bg-zinc-900 text-mango-gold hover:text-white font-display font-black text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2 shadow-lg"
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
