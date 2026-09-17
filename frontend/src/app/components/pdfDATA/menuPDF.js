"use client";

import Image from "next/image";

const menuPages = Array.from(
  { length: 18 },
  (_, index) =>
    `/menuImage/Menu-compressed_page-${String(index + 1).padStart(
      4,
      "0"
    )}.jpg`
);

export default function MenuPDF() {
  return (
    <div
      className="h-[70vh] max-h-[1350px] overflow-y-auto overflow-x-hidden rounded-2xl border-2 border-border-soft bg-wok-black [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Kuro Sizzlers menu"
    >
      <div className="flex flex-col items-center gap-4 p-3 sm:gap-5 sm:p-5">
        {menuPages.map((src, index) => (
          <div
            key={src}
            className="w-full max-w-[850px] overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <Image
              src={src}
              alt={`Kuro Sizzlers Menu - Page ${index + 1}`}
              width={850}
              height={1200}
              className="h-auto w-full"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="(max-width: 640px) calc(100vw - 24px), 850px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}