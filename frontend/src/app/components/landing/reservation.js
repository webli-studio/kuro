"use client";

import { useState } from "react";
import Link from "next/link";

const seatingAreas = [
  {
    value: "main",
    label: "Main Dining",
  },
  {
    value: "counter",
    label: "Chef's Counter",
  },
  {
    value: "private",
    label: "Private / Group Seating",
  },
];

export default function Reservation() {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("4");
  const [seating, setSeating] = useState("main");

  function handleSubmit(event) {
    event.preventDefault();

    // Booking integration can be connected here later.
    console.log({
      date,
      guests,
      seating,
    });
  }

  return (
    <section
      id="reserve-section"
      className="w-full bg-primary py-20 text-wok-black relative overflow-hidden"
      aria-labelledby="reservation-heading"
    >
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <header className="flex flex-col items-center gap-2 max-w-2xl">
          <span className="px-4 py-1 rounded-full bg-wok-black text-primary font-display font-black text-xs uppercase tracking-widest shadow">
            Reservations &amp; Bookings
          </span>

          <h2
            id="reservation-heading"
            className="font-display text-3xl sm:text-5xl font-black tracking-tight text-wok-black uppercase mt-2"
          >
            YOUR TABLE IS WAITING.
          </h2>

          <p className="text-sm sm:text-base font-medium text-wok-black/80 max-w-xl">
            Ready to experience Kuro? Plan your visit for a memorable meal
            built around fire, flavour, and craft.
          </p>
        </header>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-wok-black rounded-2xl p-6 sm:p-8 shadow-2xl text-white flex flex-col lg:flex-row items-stretch gap-4 border-2 border-wok-black"
        >
          {/* Date */}
          <div className="flex-1 flex flex-col items-start px-4 py-3 bg-zinc-900 rounded-xl border border-zinc-800">
            <label
              htmlFor="reservation-date"
              className="font-display text-[11px] font-bold text-primary uppercase flex items-center gap-1.5"
            >
              <span
                className="material-symbols-outlined text-[15px]"
                aria-hidden="true"
              >
                calendar_month
              </span>

              Date
            </label>

            <input
              id="reservation-date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="w-full bg-transparent font-display font-bold text-sm text-white focus:outline-none pt-1 cursor-pointer"
            />
          </div>

          {/* Guests */}
          <div className="flex-1 flex flex-col items-start px-4 py-3 bg-zinc-900 rounded-xl border border-zinc-800">
            <label
              htmlFor="reservation-guests"
              className="font-display text-[11px] font-bold text-primary uppercase flex items-center gap-1.5"
            >
              <span
                className="material-symbols-outlined text-[15px]"
                aria-hidden="true"
              >
                group
              </span>

              Guests
            </label>

            <select
              id="reservation-guests"
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className="w-full bg-transparent font-display font-bold text-sm text-white focus:outline-none pt-1 cursor-pointer"
            >
              <option className="bg-zinc-900" value="2">
                2 Guests
              </option>

              <option className="bg-zinc-900" value="4">
                4 Guests
              </option>

              <option className="bg-zinc-900" value="6">
                6 Guests
              </option>

              <option className="bg-zinc-900" value="8">
                8+ Guests
              </option>
            </select>
          </div>

          {/* Seating */}
          <div className="flex-1 flex flex-col items-start px-4 py-3 bg-zinc-900 rounded-xl border border-zinc-800">
            <label
              htmlFor="reservation-seating"
              className="font-display text-[11px] font-bold text-primary uppercase flex items-center gap-1.5"
            >
              <span
                className="material-symbols-outlined text-[15px]"
                aria-hidden="true"
              >
                chair
              </span>

              Seating
            </label>

            <select
              id="reservation-seating"
              value={seating}
              onChange={(event) => setSeating(event.target.value)}
              className="w-full bg-transparent font-display font-bold text-sm text-white focus:outline-none pt-1 cursor-pointer"
            >
              {seatingAreas.map((area) => (
                <option
                  key={area.value}
                  className="bg-zinc-900"
                  value={area.value}
                >
                  {area.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
          <div className="flex items-stretch lg:w-48">
            <button
              type="submit"
              className="w-full py-3.5 lg:py-0 px-6 rounded-xl bg-primary hover:bg-primary-hover text-wok-black font-display font-black text-xs uppercase tracking-widest transition-colors shadow-lg flex items-center justify-center gap-1.5"
            >
              <span>Find Table</span>

              <span
                className="material-symbols-outlined text-[18px]"
                aria-hidden="true"
              >
                search
              </span>
            </button>
          </div>
        </form>

        {/* Support */}
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

            <span>Contact Kuro Sizzlers</span>
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

            <span>Booking &amp; Enquiries</span>
          </Link>
        </div>
      </div>
    </section>
  );
}