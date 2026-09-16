"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SmokeEffect from "../effects/smokeEffect"

export default function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const badges = heroRef.current?.querySelector(".hero-badges");
      const eyebrow = heroRef.current?.querySelector(".hero-eyebrow");
      const heading = heroRef.current?.querySelector(".hero-heading");
      const description = heroRef.current?.querySelector(".hero-description");
      const buttons = heroRef.current?.querySelector(".hero-buttons");
      const features = heroRef.current?.querySelector(".hero-features");

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        delay: 0.45,
      });

      tl.fromTo(
        badges,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        }
      );

      tl.fromTo(
        eyebrow,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        },
        "-=0.35"
      );

      tl.fromTo(
        heading,
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
        },
        "-=0.3"
      );

      tl.fromTo(
        description,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        },
        "-=0.45"
      );

      tl.fromTo(
        buttons,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        },
        "-=0.35"
      );

      tl.fromTo(
        features,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
        "-=0.3"
      );
    },
    {
      scope: heroRef,
    }
  );

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden bg-wok-black"
      aria-labelledby="hero-heading"
    >
      <SmokeEffect
  count={6}
  color="rgba(218, 212, 212, 0.09)"
  opacity={0.8}
  speed={0.65}
/>
      {/* Background Image — ALWAYS VISIBLE */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=3000&q=90"
          alt="Kuro Sizzlers signature dishes"
          fill
          priority
          sizes="100vw"
          className="h-full w-full scale-105 object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-wok-black via-wok-black/85 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-wok-black via-wok-black/75 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1360px] flex-col justify-between px-4 pb-24 pt-20 sm:px-8">

        {/* Badges */}
        <div className="hero-badges flex flex-wrap items-center gap-3 opacity-0">

          <span className="inline-flex items-center gap-1.5 rounded bg-primary px-3 py-1 font-display text-xs font-black uppercase tracking-wider text-wok-black shadow">
            <span
              aria-hidden="true"
              className="text-[15px]"
            >
              ⚡
            </span>
            KURO SIZZLERS
          </span>

          <span className="inline-flex items-center gap-1 rounded border border-primary/30 bg-white/10 px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-md">
            Fire • Flavour • Craft
          </span>

          <span className="hidden items-center gap-1 rounded bg-white/5 px-3 py-1 font-display text-xs text-zinc-300 sm:inline-flex">
            <span
              aria-hidden="true"
              className="text-[14px] text-primary"
            >
              ✓
            </span>
            100% Halal
          </span>

        </div>

        {/* Main Hero Content */}
        <div className="my-16 flex max-w-4xl flex-col gap-6">

          {/* Eyebrow */}
          <div className="hero-eyebrow flex items-center gap-2 font-display text-sm font-black uppercase tracking-[0.2em] text-primary opacity-0 sm:text-base">
            <span className="h-[2px] w-8 bg-primary" />
            Experience The Kuro Sizzlers Way
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="hero-heading font-display text-4xl font-black leading-[1.05] tracking-tight text-white opacity-0 sm:text-6xl md:text-7xl"
          >
            WHERE FLAVOUR
            <br />

            <span className="bg-gradient-to-r from-primary via-[#F5D061] to-primary bg-clip-text text-transparent">
              MEETS THE SIZZLE
            </span>

            <br />

            AT KURO SIZZLERS.
          </h1>

          {/* Description */}
          <p className="hero-description max-w-2xl font-body text-base leading-relaxed text-zinc-300 opacity-0 sm:text-lg">
            Discover Continental, Chinese and multi-cuisine flavours crafted
            with an Indian soul. From sizzling plates to indulgent desserts,
            every dish at Kuro tells a story of fire, flavour, and craft.
          </p>

          {/* Buttons */}
          <div className="hero-buttons flex flex-wrap items-center gap-4 pt-2 opacity-0">

            <Link
              href="/menu"
              className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-display text-sm font-black uppercase tracking-wider text-wok-black shadow-[0_10px_25px_rgba(237,186,69,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              <span>Explore Menu</span>

              <span
                aria-hidden="true"
                className="text-[18px]"
              >
                ↗
              </span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              <span>Reserve a Table</span>

              <span
                aria-hidden="true"
                className="text-[18px]"
              >
                ◷
              </span>
            </Link>

          </div>
        </div>

        {/* Feature Strip */}
        <div className="hero-features grid grid-cols-1 gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-300 opacity-0 md:grid-cols-3">

          {/* Feature 1 */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-wok-black">
              <span
                aria-hidden="true"
                className="text-[20px]"
              >
                🔥
              </span>
            </div>

            <div>
              <span className="block font-display text-xs font-bold uppercase tracking-wider text-white">
                Signature Sizzlers
              </span>

              <span className="text-xs text-zinc-400">
                Served hot on iconic cast-iron plates
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-wok-black">
              <span
                aria-hidden="true"
                className="text-[20px]"
              >
                🍽
              </span>
            </div>

            <div>
              <span className="block font-display text-xs font-bold uppercase tracking-wider text-white">
                Continental • Chinese
              </span>

              <span className="text-xs text-zinc-400">
                Multi-cuisine flavours with an Indian soul
              </span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary font-bold text-wok-black">
              <span
                aria-hidden="true"
                className="text-[20px]"
              >
                ✓
              </span>
            </div>

            <div>
              <span className="block font-display text-xs font-bold uppercase tracking-wider text-white">
                100% Halal
              </span>

              <span className="text-xs text-zinc-400">
                Premium Halal-certified ingredients
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}