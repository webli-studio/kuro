"use client";

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
      gsap.fromTo(
        ".story-preview-content > *",
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".story-preview-visual",
        {
          opacity: 0,
          scale: 0.94,
          x: 30,
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
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
      id="our-story"
      aria-labelledby="our-story-heading"
      className="relative w-full overflow-hidden bg-surface-cream py-24 sm:py-28 lg:py-32"
    >
      {/* Background Details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.035)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

        <div className="absolute left-0 top-0 h-px w-full bg-wok-black/10" />
      </div>

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">

        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">

          {/* Story Content */}
          <div className="story-preview-content lg:col-span-8">

            {/* Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 font-display text-xs font-black uppercase tracking-[0.2em] text-wok-black sm:text-sm">
              <span className="rounded bg-primary px-3 py-1.5">
                Our Heritage
              </span>

              <span className="text-zinc-500">
                Indian Soul • Global Flavours
              </span>
            </div>

            {/* Heading */}
            <h2
              id="our-story-heading"
              className="mt-7 max-w-5xl font-display text-4xl font-black leading-[0.95] tracking-[-0.035em] text-wok-black sm:text-5xl lg:text-7xl"
            >
              WHERE EVERY
              <br />

              <span className="text-primary">
                PLATE
              </span>{" "}
              TELLS A STORY.
            </h2>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <span className="h-px w-16 bg-wok-black/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="h-px w-8 bg-wok-black/10" />
            </div>

            {/* Story */}
            <div className="grid gap-6 text-base leading-relaxed text-zinc-600 md:grid-cols-2 md:gap-10">

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
            <div className="mt-9">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 border-b border-wok-black/20 pb-2 font-display text-sm font-black uppercase tracking-wider text-wok-black transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <span>Discover Our Story</span>

                <span
                  aria-hidden="true"
                  className="text-lg text-primary transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Decorative Visual */}
          <div className="story-preview-visual relative hidden min-h-[380px] items-center justify-center lg:col-span-4 lg:flex">

            {/* Large KURO */}
            <div className="absolute select-none font-display text-[11rem] font-black leading-none tracking-[-0.08em] text-wok-black/[0.035]">
              KURO
            </div>

            {/* Main Circle */}
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-wok-black/10">

              <div className="absolute inset-5 rounded-full border border-primary/30" />

              <div className="absolute inset-12 rounded-full bg-primary/10 blur-2xl" />

              <div className="relative text-center">
                <span className="block font-display text-5xl font-black tracking-[-0.05em] text-wok-black">
                  黒
                </span>

                <span className="mt-2 block font-display text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
                  KURO
                </span>

                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  The Colour of Fire
                </span>
              </div>
            </div>

            {/* Decorative Dots */}
            <span className="absolute right-8 top-12 h-2 w-2 rounded-full bg-primary" />
            <span className="absolute bottom-16 left-8 h-1.5 w-1.5 rounded-full bg-primary/60" />

            {/* Vertical Label */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 font-display text-[9px] font-bold uppercase tracking-[0.35em] text-zinc-400">
              Fire • Flavour • Craft
            </div>
          </div>
        </div>

        {/* Bottom Brand Strip */}
        <div className="mt-20 flex flex-col gap-4 border-t border-wok-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
            Continental • Chinese • Multi-Cuisine
          </span>

          <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
            Fire • Flavour • Craft
          </span>

        </div>
      </div>
    </section>
  );
}
