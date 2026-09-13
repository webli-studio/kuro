"use client"
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
   
      <section
      className="relative w-full overflow-hidden bg-wok-black"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Kuro Sizzlers signature dishes"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-wok-black via-wok-black/85 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-wok-black via-wok-black/75 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-8 pt-20 pb-24 flex flex-col justify-between min-h-[85vh]">

        {/* Badges Bar */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary text-wok-black font-display font-black text-xs uppercase tracking-wider shadow">
            <span aria-hidden="true" className="text-[15px]">
              ⚡
            </span>
            KURO SIZZLERS
          </span>

          <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-white/10 text-primary border border-primary/30 backdrop-blur-md font-display font-bold text-xs uppercase tracking-wider">
            Fire • Flavour • Craft
          </span>

          <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded bg-white/5 text-zinc-300 font-display text-xs">
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
        <div className="max-w-4xl my-16 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-primary font-display font-black text-sm sm:text-base tracking-[0.2em] uppercase">
            <span className="w-8 h-[2px] bg-primary" />
            Experience The Kuro Way
          </div>

          <h1
            id="hero-heading"
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05]"
          >
            WHERE FLAVOUR
            <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#F5D061] to-primary">
              MEETS THE SIZZLE
            </span>
            <br />
            AT KURO.
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-body leading-relaxed">
            Discover Continental, Chinese and multi-cuisine flavours crafted
            with an Indian soul. From sizzling plates to indulgent desserts,
            every dish at Kuro tells a story of fire, flavour, and craft.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/menu"
              className="px-8 py-4 rounded-lg bg-primary hover:bg-primary-hover text-wok-black font-display font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_10px_25px_rgba(237,186,69,0.35)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore Menu</span>

              <span aria-hidden="true" className="text-[18px]">
                ↗
              </span>
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-display font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Reserve a Table</span>

              <span aria-hidden="true" className="text-[18px]">
                ◷
              </span>
            </Link>
          </div>
        </div>

        {/* Hero Feature Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-zinc-800 text-zinc-300 text-sm">

          {/* Feature 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary text-wok-black font-bold flex items-center justify-center flex-shrink-0">
              <span aria-hidden="true" className="text-[20px]">
                🔥
              </span>
            </div>

            <div>
              <span className="block font-display font-bold text-white text-xs uppercase tracking-wider">
                Signature Sizzlers
              </span>

              <span className="text-xs text-zinc-400">
                Served hot on iconic cast-iron plates
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary text-wok-black font-bold flex items-center justify-center flex-shrink-0">
              <span aria-hidden="true" className="text-[20px]">
                🍽
              </span>
            </div>

            <div>
              <span className="block font-display font-bold text-white text-xs uppercase tracking-wider">
                Continental • Chinese
              </span>

              <span className="text-xs text-zinc-400">
                Multi-cuisine flavours with an Indian soul
              </span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary text-wok-black font-bold flex items-center justify-center flex-shrink-0">
              <span aria-hidden="true" className="text-[20px]">
                ✓
              </span>
            </div>

            <div>
              <span className="block font-display font-bold text-white text-xs uppercase tracking-wider">
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