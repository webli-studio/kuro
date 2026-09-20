"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SmokeEffect from "../components/effects/smokeEffect";

gsap.registerPlugin(ScrollTrigger);

const cuisineItems = [
  {
    title: "Continental",
    text: "Silky cream soups, crisp starters, wood-fired pizzas and herb-crusted pastas bring a comforting Continental character to the menu.",
  },
  {
    title: "Chinese",
    text: "Our kitchen brings bold Indo-Chinese wok creations together with carefully crafted flavours and satisfying textures.",
  },
  {
    title: "Multi-Cuisine",
    text: "A wider culinary canvas allows Kuro to bring different flavours and traditions together while keeping an Indian soul at its heart.",
  },
];


export default function OurStoryPage() {
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
        ".about-hero-content > *",
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
       * INTRODUCTION — SCROLL
       * =========================================================
       */
      gsap.fromTo(
        ".about-intro-image",
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
            trigger: ".about-intro-image",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-intro-content",
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
            trigger: ".about-intro-content",
            start: "top 82%",
            once: true,
          },
        }
      );

      /*
       * =========================================================
       * WHY KURO — SCROLL
       * =========================================================
       */
      gsap.fromTo(
        ".about-why-content",
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
            trigger: ".about-why-content",
            start: "top 82%",
            once: true,
          },
        }
      );

      /*
       * =========================================================
       * DINING PHILOSOPHY — SCROLL
       * =========================================================
       */
      gsap.fromTo(
        ".about-philosophy-heading",
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
            trigger: ".about-philosophy-heading",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-philosophy-text",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-philosophy-text",
            start: "top 84%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-philosophy-card",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-philosophy-card",
            start: "top 84%",
            once: true,
          },
        }
      );

      /*
       * =========================================================
       * OUR KITCHEN — SCROLL
       * =========================================================
       */
      gsap.fromTo(
        ".about-kitchen-heading",
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
            trigger: ".about-kitchen-heading",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-kitchen-item",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-kitchen-item",
            start: "top 86%",
            once: true,
          },
        }
      );

      /*
       * =========================================================
       * WHAT WE SERVE — SCROLL
       * =========================================================
       */
      gsap.fromTo(
        ".about-food-heading",
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
            trigger: ".about-food-heading",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-food-content",
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
            trigger: ".about-food-content",
            start: "top 82%",
            once: true,
          },
        }
      );

      /*
       * =========================================================
       * INGREDIENTS / PROMISE — SCROLL
       * =========================================================
       */
      gsap.fromTo(
        ".about-promise-card",
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
            trigger: ".about-promise-card",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-promise-item",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-promise-card",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-promise-note",
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-promise-note",
            start: "top 90%",
            once: true,
          },
        }
      );

      /*
       * =========================================================
       * CLOSING CTA — SCROLL
       * =========================================================
       */
      gsap.fromTo(
        ".about-closing-content",
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
            trigger: ".about-closing-content",
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
      {/* =========================================================
          HERO
      ========================================================== */}
      <section
        aria-labelledby="our-story-title"
        className="relative overflow-hidden w-full bg-wok-black px-5 pb-16 pt-24 text-white sm:px-8 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-24 lg:pt-0"
      >
        <SmokeEffect />
        <div className="mx-auto flex max-w-[1360px] items-center justify-center px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="about-hero-content flex max-w-4xl flex-col items-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-mango-gold/40 bg-primary/10 px-4 py-2 font-body text-xs font-black uppercase tracking-[0.16em] text-mango-gold">
              Our Story
            </span>

            <h1
              id="our-story-title"
              className="font-display text-center text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl"
            >
              THE STORY
              <br />
              BEHIND THE{" "}
              <span className="text-primary">SIZZLE.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-center font-body text-sm leading-7 text-white/65 sm:text-base">
              Kuro Sizzlers is where every plate tells a story of fire,
              flavour, and craft — born from a passion for bold cuisine and
              warm hospitality.
            </p>
          </div>
        </div>
      </section>
            {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section
        aria-labelledby="beginning-title"
        className="bg-surface-cream py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
          {/* Image */}
          <div className="about-intro-image lg:col-span-5">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl border-4 border-wok-black bg-wok-black">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=90"
                  alt="Kuro Sizzlers dining atmosphere"
                  width={1000}
                  height={1250}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-primary" />
            </div>
          </div>

          {/* Story */}
          <div className="about-intro-content lg:col-span-7 lg:pt-8">
            <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-mustard-deep">
              Where It Begins
            </p>

            <h2
              id="beginning-title"
              className="mt-3 font-display text-3xl font-black uppercase leading-tight text-wok-black sm:text-4xl"
            >
              A PASSION FOR BOLD CUISINE.
            </h2>

            <div className="mt-7 space-y-6 font-body text-sm leading-8 text-on-surface-muted sm:text-base">
              <p>
                Welcome to Kuro Sizzlers — where every plate tells a story of
                fire, flavour, and craft. Born from a passion for bold cuisine
                and warm hospitality, Kuro is a celebration of the world's
                finest culinary traditions, reimagined with an Indian soul.
              </p>

              <p>
                At Kuro, food is designed to be experienced. From the first
                aroma that reaches the table to the sound of a hot plate
                arriving in front of you, every part of the experience is
                meant to create anticipation.
              </p>

              <p>
                The sizzle is more than a presentation. It is part of what
                makes the meal memorable — the heat, the aroma, the visual
                spectacle and finally the flavour coming together in one
                moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY KURO
      ========================================================== */}
      <section
        aria-labelledby="why-kuro-title"
        className="bg-surface py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="about-why-content border-y border-border-soft py-12 sm:py-16">
            <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-mustard-deep">
              Why Kuro?
            </p>

            <h2
              id="why-kuro-title"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1.05] text-primary sm:text-5xl lg:text-6xl"
            >
              KURO MEANS{" "}
              <span className="text-wok-black">“BLACK”.</span>
            </h2>

            <div className="mt-8 max-w-3xl space-y-6 font-body text-sm leading-8 text-on-surface-muted sm:text-base">
              <p>
                The name Kuro means "black" in Japanese — a tribute to the
                iconic cast-iron sizzler plates that represent the heart
                of the Kuro experience.
              </p>

              <p>
                Those plates are central to the way Kuro approaches dining.
                They carry the heat, the sound and the aroma that make a
                sizzling dish feel like more than just another plate of food.
              </p>

              <p>
                It is this connection between the plate and the experience
                that sits at the heart of Kuro Sizzlers.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* =========================================================
          DINING PHILOSOPHY
      ========================================================== */}
      <section
        aria-labelledby="philosophy-title"
        className="bg-wok-black py-20 text-white sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="about-philosophy-heading max-w-3xl">
            <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-primary">
              Our Philosophy
            </p>

            <h2
              id="philosophy-title"
              className="mt-4 font-display text-4xl font-black uppercase leading-[1.05] sm:text-5xl"
            >
              DINING IS MORE
              <br />
              THAN <span className="text-primary">EATING.</span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="about-philosophy-text font-body text-sm leading-8 text-white/60 sm:text-base">
              <p>
                We believe dining is not just about eating — it is about the
                sizzle, the aroma and the moment of pure delight when the
                plate lands in front of you.
              </p>
            </div>

            <div className="about-philosophy-text font-body text-sm leading-8 text-white/60 sm:text-base">
              <p>
                Every dish is crafted with care and plated with pride. The
                experience brings together flavour, presentation and the
                warmth of sharing a meal around the table.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 border-t border-white/10 sm:grid-cols-3">
            <div className="about-philosophy-card border-b border-white/10 py-7 sm:border-b-0 sm:border-r sm:pr-8">
              <span className="font-display text-3xl font-black text-primary">
                01
              </span>

              <h3 className="mt-4 font-display text-lg font-black uppercase">
                Fire
              </h3>

              <p className="mt-2 font-body text-sm leading-6 text-white/45">
                Heat and the unmistakable theatre of the sizzle.
              </p>
            </div>

            <div className="about-philosophy-card border-b border-white/10 py-7 sm:border-b-0 sm:px-8 sm:border-r">
              <span className="font-display text-3xl font-black text-primary">
                02
              </span>

              <h3 className="mt-4 font-display text-lg font-black uppercase">
                Flavour
              </h3>

              <p className="mt-2 font-body text-sm leading-6 text-white/45">
                Bold flavours inspired by culinary traditions from around the
                world.
              </p>
            </div>

            <div className="about-philosophy-card py-7 sm:pl-8">
              <span className="font-display text-3xl font-black text-primary">
                03
              </span>

              <h3 className="mt-4 font-display text-lg font-black uppercase">
                Craft
              </h3>

              <p className="mt-2 font-body text-sm leading-6 text-white/45">
                Careful preparation and proud presentation in every dish.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* =========================================================
          OUR KITCHEN
      ========================================================== */}
      <section
        aria-labelledby="kitchen-title"
        className="bg-surface-cream py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="about-kitchen-heading max-w-3xl">
            <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-mustard-deep">
              Our Kitchen
            </p>

            <h2
              id="kitchen-title"
              className="mt-4 font-display text-3xl font-black uppercase leading-tight text-wok-black sm:text-4xl lg:text-5xl"
            >
              CULINARY TRADITIONS,
              <br />
              <span className="text-primary">REIMAGINED.</span>
            </h2>

            <p className="mt-5 font-body text-sm leading-7 text-on-surface-muted sm:text-base">
              Our kitchen brings together Continental, Chinese and
              Multi-Cuisine cooking, creating a menu with variety while
              staying rooted in an Indian soul.
            </p>
          </div>

          <div className="mt-12 divide-y divide-border-soft border-y border-border-soft">
            {cuisineItems.map((item, index) => (
              <article
                key={item.title}
                className="about-kitchen-item grid grid-cols-1 gap-4 py-8 sm:grid-cols-[80px_220px_1fr] sm:items-start sm:gap-8"
              >
                <span className="font-display text-sm font-black text-primary">
                  0{index + 1}
                </span>

                <h3 className="font-display text-xl font-black uppercase text-wok-black sm:text-2xl">
                  {item.title}
                </h3>

                <p className="max-w-2xl font-body text-sm leading-7 text-on-surface-muted sm:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
            {/* =========================================================
          WHAT WE SERVE
      ========================================================== */}
      <section
        aria-labelledby="food-title"
        className="bg-surface py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
          <div className="about-food-heading lg:col-span-5">
            <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-mustard-deep">
              From The Kitchen
            </p>

            <h2
              id="food-title"
              className="mt-4 font-display text-3xl font-black uppercase leading-tight text-wok-black sm:text-4xl"
            >
              BUILT AROUND
              <br />
              <span className="text-primary">FLAVOUR.</span>
            </h2>
          </div>

          <div className="about-food-content lg:col-span-7">
            <div className="space-y-6 font-body text-sm leading-8 text-on-surface-muted sm:text-base">
              <p>
                The menu moves from silky cream soups and crisp Continental
                starters to dramatic sizzler platters that arrive at the table
                in a cloud of steam.
              </p>

              <p>
                It continues through wood-fired pizzas and herb-crusted
                pastas, Indo-Chinese wok creations, signature sizzlers and
                indulgent desserts.
              </p>

              <p>
                Every recipe is refined around flavour, with the kitchen
                working with fresh local produce and premium
                ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>
            

      {/* =========================================================
          CLOSING CTA
      ========================================================== */}
      <section
        aria-labelledby="closing-title"
        className="bg-mango-gold py-20 text-wok-black sm:py-24 lg:py-28"
      >
        <div className="about-closing-content mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <p className="font-display text-xs font-black uppercase tracking-[0.22em]">
            The Kuro Experience
          </p>

          <h2
            id="closing-title"
            className="mt-4 font-display text-4xl font-black uppercase leading-[1.02] sm:text-5xl lg:text-6xl"
          >
            FIRE.
            <br />
            FLAVOUR.
            <br />
            CRAFT.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-body text-sm leading-7 text-wok-black/70 sm:text-base">
            Come experience the sizzle, discover the flavours and make your
            own story around the table.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-wok-black px-6 font-body text-sm font-black uppercase tracking-wide text-mango-gold transition hover:bg-charcoal-night"
            >
              Explore Menu
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-wok-black px-6 font-body text-sm font-black uppercase tracking-wide text-wok-black transition hover:bg-wok-black hover:text-primary"
            >
              Contact Kuro Sizzlers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}