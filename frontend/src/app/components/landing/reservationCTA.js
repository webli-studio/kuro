import Link from "next/link";

export default function ReservationCTA() {
  return (
    <section
      id="reserve-section"
      className="w-full bg-mango-gold py-20 text-wok-black relative overflow-hidden"
      aria-labelledby="reservation-heading"
    >
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <header className="flex flex-col items-center gap-2 max-w-2xl">
          <span className="px-4 py-1 rounded-full bg-wok-black text-mango-gold font-display font-black text-xs uppercase tracking-widest shadow">
            Reservations &amp; Bookings
          </span>

          <h2
            id="reservation-heading"
            className="font-display text-3xl sm:text-5xl font-black tracking-tight text-wok-black uppercase mt-2"
          >
            YOUR TABLE IS WAITING.
          </h2>

          <p className="text-sm sm:text-base font-medium text-wok-black/80 max-w-xl">
            Ready to experience Kuro? Get in touch with us to plan your visit,
            make a reservation, or enquire about your next gathering.
          </p>
        </header>

        {/* Final CTA Card */}
        <div className="w-full bg-wok-black rounded-2xl p-6 sm:p-8 shadow-2xl text-white border-2 border-wok-black">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex flex-col gap-2">
              <span className="font-display text-xs font-black text-primary uppercase tracking-[0.2em]">
                Ready when you are
              </span>

              <h3 className="font-display text-xl sm:text-2xl font-black uppercase">
                LET&apos;S MAKE YOUR NEXT MEAL MEMORABLE.
              </h3>

              <p className="text-sm text-zinc-400 max-w-xl">
                Contact Kuro Sizzlers for reservations, enquiries, and
                information about your visit.
              </p>
            </div>

            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary hover:bg-primary-hover text-mango-gold font-display font-black text-xs uppercase tracking-widest transition-colors shadow-lg"
            >
              <span>Book Your Table</span>

              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        {/* Supporting CTA */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-wok-black font-bold text-xs uppercase tracking-wider">
          <Link
            href="/contact"
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            <span
              className="material-symbols-outlined text-[16px]"
              aria-hidden="true"
            >
              call
            </span>
            <span>Reservations &amp; Enquiries</span>
          </Link>

          <Link
            href="/contact"
            className="hover:text-white flex items-center gap-1 transition-colors underline underline-offset-4"
          >
            <span
              className="material-symbols-outlined text-[16px]"
              aria-hidden="true"
            >
              mail
            </span>
            <span>Contact Kuro Sizzlers</span>
          </Link>
        </div>
      </div>
    </section>
  );
}