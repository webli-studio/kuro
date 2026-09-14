
import MenuPDF from "../components/menuPDF.js"

export const metadata = {
  title: "Menu | Kuro Sizzlers",
  description:
    "Explore the complete Kuro Sizzlers menu featuring Continental, Chinese and Multi-Cuisine dishes, signature sizzlers, pizzas, pastas and desserts.",
};

export default function MenuPage() {
  return (
    <main className="w-full bg-surface-cream">
      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-8 text-center">
          <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-mustard-deep">
            Kuro Sizzlers
          </p>

          <h1 className="mt-2 font-display text-4xl font-black uppercase leading-tight text-wok-black sm:text-5xl">
            OUR MENU
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-7 text-on-surface-muted">
            Explore our complete menu of Continental, Chinese and
            Multi-Cuisine favourites.
          </p>
        </div>

        <MenuPDF />

        <p className="mt-4 text-center font-body text-xs text-on-surface-muted">
          Scroll inside the menu to explore all pages.
        </p>
      </section>
    </main>
  );
}