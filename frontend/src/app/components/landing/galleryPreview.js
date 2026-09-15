"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=90",
    alt: "Sizzling dish served at Kuro Sizzlers",
    ratio: "aspect-[4/5]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=90",
    alt: "Restaurant dining atmosphere",
    ratio: "aspect-[4/3]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1600&q=90",
    alt: "Freshly prepared Continental dish",
    ratio: "aspect-square",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1600&q=90",
    alt: "Wok-tossed Asian-inspired dish",
    ratio: "aspect-[3/4]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=90",
    alt: "Restaurant food prepared for sharing",
    ratio: "aspect-square",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=90",
    alt: "Freshly prepared restaurant dish",
    ratio: "aspect-[4/5]",
  },
];

export default function GalleryPreview() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".gallery-preview-header > *", {
        opacity: 0,
        y: 20,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gallery-preview-header",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".gallery-preview-item", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gallery-preview-grid",
          start: "top 82%",
          once: true,
        },
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="gallery-section"
      className="w-full bg-wok-black py-20 sm:py-24 lg:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10 px-5 sm:px-8 lg:px-10">

        {/* Section Header */}
        <header className="gallery-preview-header flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-display text-xs font-black uppercase tracking-[0.25em] text-primary">
              Visual Feed
            </span>

            <h2
              id="gallery-heading"
              className="mt-2 font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4xl"
            >
              A VISUAL TASTE
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex w-fit items-center gap-2 font-display text-xs font-black uppercase tracking-wider text-primary transition-colors hover:text-mango-gold"
          >
            <span>View Full Gallery</span>

            <span aria-hidden="true" className="text-lg">
              →
            </span>
          </Link>
        </header>

        {/* Pinterest-style Preview */}
        <div className="gallery-preview-grid columns-2 gap-3 sm:columns-3 sm:gap-4 lg:gap-5">
          {galleryItems.map((item, index) => (
            <article
              key={`${item.image}-${index}`}
              className="gallery-preview-item mb-3 break-inside-avoid overflow-hidden rounded-xl sm:mb-4 lg:mb-5"
            >
              <div
                className={`relative w-full overflow-hidden ${item.ratio}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}