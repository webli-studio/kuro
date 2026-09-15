"use client";

import MenuPDF from "../components/menuPDF";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);



export default function MenuPage() {
  const pageRef = useRef(null);

  useGSAP(
    () => {
      /*
       * =========================================================
       * HERO — PAGE LOAD
       * =========================================================
       */
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      heroTimeline.fromTo(
        ".menu-hero-content > *",
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

      /*
       * =========================================================
       * MENU SECTION — SCROLL
       * =========================================================
       */
      gsap.fromTo(
        ".menu-section-intro",
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
            trigger: ".menu-section-intro",
            start: "top 82%",
            once: true,
          },
        }
      );

      

      

      /*
       * =========================================================
       * FINAL CTA — SCROLL
       * =========================================================
       */
      gsap.fromTo(
        ".menu-cta-content",
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
            trigger: ".menu-cta-content",
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
        aria-labelledby="menu-title"
        className="w-full bg-wok-black px-5 pb-16 pt-24 text-white sm:px-8 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-24 lg:pt-0"
      >
        <div className="mx-auto flex max-w-[1360px] items-center justify-center px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="menu-hero-content flex max-w-4xl flex-col items-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-mango-gold/40 bg-primary/10 px-4 py-2 font-body text-xs font-black uppercase tracking-[0.16em] text-mango-gold">
              Kuro Sizzlers
            </span>

            <h1
              id="menu-title"
              className="text-center font-display text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl"
            >
              EXPLORE THE
              <br />
              <span className="text-primary">KURO MENU.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-center font-body text-sm leading-7 text-white/65 sm:text-base">
              Discover Continental, Chinese and Multi-Cuisine favourites,
              signature sizzlers, wok creations, pizzas, pastas and indulgent
              desserts.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MENU PDF
      ====================================================== */}
      <section
        aria-labelledby="menu-pdf-title"
        className="w-full bg-surface-cream py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
          {/* Section intro */}
          <div className="menu-section-intro mb-10 text-center sm:mb-12">
            <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-mustard-deep">
              Our Menu
            </p>

            <h2
              id="menu-pdf-title"
              className="mt-2 font-display text-3xl font-black uppercase leading-tight text-wok-black sm:text-4xl"
            >
              FIRE. FLAVOUR. CRAFT.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-7 text-on-surface-muted sm:text-base">
              Take a look through the complete Kuro Sizzlers menu and discover
              something made for your table.
            </p>
          </div>

          {/* PDF */}
          <div className="menu-pdf-container">
            <MenuPDF />
          </div>

          <p className="menu-pdf-note mt-4 text-center font-body text-xs text-on-surface-muted">
            Scroll inside the menu to explore all pages.
          </p>
        </div>
      </section>
            {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section
        aria-labelledby="menu-cta-title"
        className="w-full bg-mango-gold py-16 text-wok-black sm:py-20 lg:py-24"
      >
        <div className="menu-cta-content mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <p className="font-display text-xs font-black uppercase tracking-[0.22em]">
            Experience Kuro
          </p>

          <h2
            id="menu-cta-title"
            className="mt-3 font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl"
          >
            READY FOR THE SIZZLE?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-body text-sm leading-7 text-wok-black/70 sm:text-base">
            Discover the flavours, bring your people together and experience
            Kuro around the table.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#footer-section"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-wok-black px-6 font-body text-sm font-black uppercase tracking-wide text-mango-gold transition hover:bg-charcoal-night"
            >
              Plan Your Visit
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[18px]"
              >
                arrow_forward
              </span>
            </a>

            <a
              href="/gallery"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-wok-black px-6 font-body text-sm font-black uppercase tracking-wide text-wok-black transition hover:bg-wok-black hover:text-mango-gold"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}