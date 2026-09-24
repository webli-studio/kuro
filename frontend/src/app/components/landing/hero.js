"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SmokeEffect from "../effects/smokeEffect";

export default function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const elements = {
        badge: heroRef.current?.querySelector(".hero-badge"),
        eyebrow: heroRef.current?.querySelector(".hero-eyebrow"),
        heading: heroRef.current?.querySelector(".hero-heading"),
        description: heroRef.current?.querySelector(".hero-description"),
        buttons: heroRef.current?.querySelector(".hero-buttons"),
        features: heroRef.current?.querySelector(".hero-features"),
        visual: heroRef.current?.querySelector(".hero-visual"),
      };

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        delay: 0.3,
      });

      tl.fromTo(
        elements.badge,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );

      tl.fromTo(
        elements.eyebrow,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.35"
      );

      tl.fromTo(
        elements.heading,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        "-=0.3"
      );

      tl.fromTo(
        elements.description,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.45"
      );

      tl.fromTo(
        elements.buttons,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.35"
      );

      tl.fromTo(
        elements.features,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.25"
      );

      tl.fromTo(
        elements.visual,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1 },
        "-=0.7"
      );
    },
    {
      scope: heroRef,
    }
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-wok-black"
      aria-labelledby="hero-heading"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[140px]" />

        <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-primary/[0.05] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-wok-black to-transparent" />
      </div>

      {/* Smoke */}
      <SmokeEffect
  count={6}
  color="rgba(218, 212, 212, 0.09)"
  opacity={0.8}
  speed={0.65}
/>

     
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col px-5 py-8 sm:px-8 lg:px-12">

        {/* Top Bar */}
        <div className="hero-badge flex items-center justify-between opacity-0">
          <div className="flex items-center gap-3">
            <span className="flex h-9 items-center rounded-md bg-primary px-3 font-display text-xs font-black uppercase tracking-wider text-wok-black">
              KURO SIZZLERS
            </span>

            <span className="hidden h-px w-10 bg-primary/40 sm:block" />

            <span className="hidden font-body text-xs uppercase tracking-[0.2em] text-zinc-500 sm:block">
              Fire • Flavour • Craft
            </span>
          </div>

          <div className="font-body text-xs uppercase tracking-[0.2em] text-zinc-600">
            Est. / Kuro
          </div>
        </div>

        {/* Main Content */}
        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-12">

          {/* Left */}
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="hero-eyebrow mb-6 flex items-center gap-3 font-display text-xs font-black uppercase tracking-[0.22em] text-primary opacity-0 sm:text-sm">
              <span className="h-[2px] w-10 bg-primary" />
              Experience The Kuro Sizzlers Way
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="hero-heading font-display text-[clamp(3.2rem,8vw,7.5rem)] font-black leading-[0.88] tracking-[-0.055em] text-white opacity-0"
            >
              WHERE
              <br />

              <span className="relative inline-block">
                FLAVOUR
              </span>

              <br />

              <span className="bg-gradient-to-r from-primary via-[#F5D061] to-primary bg-clip-text text-transparent">
                MEETS
              </span>{" "}
              THE SIZZLE.
            </h1>

            {/* Description */}
            <p className="hero-description mt-8 max-w-2xl font-body text-base leading-relaxed text-zinc-400 opacity-0 sm:text-lg">
              Continental, Chinese and multi-cuisine flavours crafted
              with an Indian soul. From sizzling plates to indulgent
              desserts, every dish tells a story of fire, flavour and craft.
            </p>

            {/* Buttons */}
            <div className="hero-buttons mt-8 flex flex-wrap items-center gap-4 opacity-0">

              <Link
                href="/menu"
                className="group flex items-center gap-3 rounded-lg bg-primary px-7 py-4 font-display text-sm font-black uppercase tracking-wider text-wok-black transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover"
              >
                Explore Menu

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.08]"
              >
                Reserve a Table

                <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center opacity-0">

            {/* Outer Ring */}
            <div className="absolute inset-[8%] rounded-full border border-primary/10" />

            <div className="absolute inset-[18%] rounded-full border border-primary/20" />

            <div className="absolute inset-[28%] rounded-full border border-white/[0.06]" />

            {/* Glow */}
            <div className="absolute h-[55%] w-[55%] rounded-full bg-primary/10 blur-[80px]" />

            {/* Central Element */}
            <div className="relative flex h-[58%] w-[58%] items-center justify-center rounded-full border border-primary/30 bg-gradient-to-br from-primary/10 via-wok-black to-primary/[0.04] shadow-[0_0_100px_rgba(237,186,69,0.08)]">

              <div className="absolute inset-4 rounded-full border border-dashed border-primary/20" />

              <div className="text-center">
                <span className="block text-5xl sm:text-6xl">
                  🔥
                </span>

                <span className="mt-3 block font-display text-xs font-black uppercase tracking-[0.3em] text-primary">
                  Fire
                </span>

                <span className="mt-1 block font-body text-xs uppercase tracking-[0.15em] text-zinc-500">
                  Flavour • Craft
                </span>
              </div>
            </div>

            {/* Floating Labels */}
            <div className="absolute left-[2%] top-[28%] rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Continental
              </span>
            </div>

            <div className="absolute bottom-[18%] right-[0%] rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Chinese
              </span>
            </div>

            <div className="absolute right-[12%] top-[10%] h-2 w-2 rounded-full bg-primary shadow-[0_0_15px_rgba(237,186,69,0.8)]" />

            <div className="absolute bottom-[8%] left-[18%] h-1.5 w-1.5 rounded-full bg-primary/70" />
          </div>
        </div>

        {/* Feature Strip */}
        <div className="hero-features grid gap-6 border-t border-white/[0.08] py-6 opacity-0 sm:grid-cols-2">

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
              <span className="text-xl">🔥</span>
            </div>

            <div>
              <span className="block font-display text-xs font-bold uppercase tracking-wider text-white">
                Signature Sizzlers
              </span>

              <span className="mt-1 block font-body text-xs text-zinc-500">
                Served hot on iconic cast-iron plates
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:justify-end">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
              <span className="text-xl">🍽</span>
            </div>

            <div>
              <span className="block font-display text-xs font-bold uppercase tracking-wider text-white">
                Multi-Cuisine
              </span>

              <span className="mt-1 block font-body text-xs text-zinc-500">
                Global flavours with an Indian soul
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
