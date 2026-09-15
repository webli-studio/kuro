"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=3000&q=90",
    alt: "Sizzling dish presented on a restaurant table",
    ratio: "aspect-[4/5]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=3000&q=90",
    alt: "Warm restaurant dining atmosphere",
    ratio: "aspect-[4/3]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=3000&q=90",
    alt: "Freshly prepared pasta dish",
    ratio: "aspect-square",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=3000&q=90",
    alt: "Wok-tossed dish inspired by Asian cuisine",
    ratio: "aspect-[3/4]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=3000&q=90",
    alt: "Multiple dishes arranged for a shared dining experience",
    ratio: "aspect-[4/3]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=3000&q=90",
    alt: "Restaurant interior with warm dining ambience",
    ratio: "aspect-[3/4]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=3000&q=90",
    alt: "Restaurant food prepared for sharing",
    ratio: "aspect-square",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=3000&q=90",
    alt: "Freshly prepared restaurant dish",
    ratio: "aspect-[4/5]",
  },
];

const categories = ["All", "Food", "Dining", "Atmosphere"];



export default function GalleryPage() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      /* =====================================================
         HERO LOAD ANIMATION
      ====================================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      heroTimeline.fromTo(
        ".gallery-hero-content > *",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
        }
      );

      /* =====================================================
         GALLERY INTRO
      ====================================================== */

      gsap.fromTo(
        ".gallery-section-intro",
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
            trigger: ".gallery-section-intro",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =====================================================
         GALLERY IMAGES
      ====================================================== */

      gsap.fromTo(
        ".gallery-item",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 82%",
            once: true,
          },
        }
      );

      /* =====================================================
         CTA
      ====================================================== */

      gsap.fromTo(
        ".gallery-cta-content",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gallery-cta-content",
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    {
      scope: pageRef,
    }
  );

  return (
    <main ref={pageRef} className="w-full">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        aria-labelledby="gallery-title"
        className="w-full bg-wok-black px-5 pb-16 pt-24 text-white sm:px-8 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-24 lg:pt-0"
      >
        <div className="mx-auto flex max-w-[1360px] items-center justify-center px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="gallery-hero-content flex max-w-4xl flex-col items-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-mango-gold/40 bg-primary/10 px-4 py-2 font-body text-xs font-black uppercase tracking-[0.16em] text-mango-gold">
              Kuro Sizzlers
            </span>

            <h1
              id="gallery-title"
              className="text-center font-display text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl"
            >
              A VISUAL
              <br />
              TASTE <span className="text-primary">GALLERY.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-center font-body text-sm leading-7 text-white/65 sm:text-base">
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
          <div className="gallery-section-intro mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
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

          {/* Pinterest-style Masonry Gallery */}
          <div className="gallery-grid columns-2 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 lg:gap-5">
            {galleryItems.map((item, index) => (
              <article
                key={`${item.image}-${index}`}
                className="gallery-item mb-3 break-inside-avoid overflow-hidden rounded-xl sm:mb-4 lg:mb-5"
              >
                <div
                  className={`relative w-full overflow-hidden ${item.ratio}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
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
        <div className="gallery-cta-content mx-auto max-w-[900px] px-5 text-center sm:px-8">
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