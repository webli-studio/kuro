"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function OurStoryPreview() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      /* =====================================================
         IMAGE
      ====================================================== */

      gsap.fromTo(
        ".story-preview-image",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      /* =====================================================
         STORY CONTENT
      ====================================================== */

      gsap.fromTo(
        ".story-preview-content > *",
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
            trigger: ".story-preview-content",
            start: "top 78%",
            once: true,
          },
        }
      );

      /* =====================================================
         FEATURE COUNTERS
      ====================================================== */

      gsap.fromTo(
        ".story-preview-stat",
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".story-preview-stats",
            start: "top 85%",
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
      className="w-full bg-surface-cream py-20 relative overflow-hidden"
      id="our-story"
      aria-labelledby="our-story-heading"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Image
          <div className="lg:col-span-6 relative">
            <div className="story-preview-image relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-wok-black bg-wok-black">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=90"
                alt="Kuro Sizzlers restaurant dining experience"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div> */}

            {/* Primary Accent Backdrop */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary rounded-2xl -z-0" />

            {/* Caption Badge */}
            <div className="absolute -bottom-3 left-6 z-20 bg-wok-black text-primary px-4 py-2 rounded-md shadow-xl flex items-center gap-2 border border-primary/40 font-display font-bold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              Fire • Flavour • Craft
            </div>
          </div>

          {/* Story Content */}
          <div className="story-preview-content lg:col-span-6 flex flex-col gap-6">

            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-wok-black font-display font-black text-xs tracking-[0.25em] uppercase">
              <span className="px-2 py-1 bg-primary rounded font-black text-wok-black">
                Our Heritage
              </span>

              <span>Indian Soul • Global Flavours</span>
            </div>

            {/* Heading */}
            <h2
              id="our-story-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-wok-black tracking-tight leading-tight"
            >
              WHERE EVERY PLATE TELLS A STORY.
            </h2>

            {/* Story */}
            <div className="flex flex-col gap-4 text-zinc-700 leading-relaxed text-base">
              <p>
                Kuro Sizzlers is where every plate tells a story of fire,
                flavour, and craft. The name Kuro, meaning “black” in Japanese,
                pays tribute to the iconic cast-iron sizzler plates at the
                heart of the experience.
              </p>

              <p>
                Bringing together Continental, Chinese and multi-cuisine
                flavours with an Indian soul, Kuro reimagines familiar
                culinary traditions through bold flavours and crafted dishes.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-display font-black text-sm uppercase tracking-wider text-wok-black hover:text-primary transition-colors"
              >
                <span>Discover Our Story</span>

                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1.5 text-primary text-lg"
                >
                  →
                </span>
              </Link>
            </div>

            {/* Feature Counters
            <div className="story-preview-stats grid grid-cols-3 gap-4 pt-4 mt-2 bg-white p-6 rounded-xl border border-border-soft shadow-sm">

              <div className="story-preview-stat flex flex-col border-r border-zinc-200 pr-2">
                <span className="font-display text-2xl sm:text-3xl font-black text-wok-black">
                  3
                </span>

                <span className="font-display text-xs font-bold text-zinc-500 uppercase mt-1">
                  Cuisines
                </span>
              </div>

              <div className="story-preview-stat flex flex-col border-r border-zinc-200 pr-2">
                <span className="font-display text-2xl sm:text-3xl font-black text-primary">
                  KURO
                </span>

                <span className="font-display text-xs font-bold text-zinc-500 uppercase mt-1">
                  Means Black
                </span>
              </div>

              <div className="story-preview-stat flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-black text-wok-black">
                  100%
                </span>

                <span className="font-display text-xs font-bold text-zinc-500 uppercase mt-1">
                  Halal Ingredients
                </span>
              </div>

            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
