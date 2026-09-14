import Link from "next/link";

export const metadata = {
  title: "Contact Kuro Sizzlers | Reservations & Enquiries",
  description:
    "Contact Kuro Sizzlers for table reservations, group enquiries, and general restaurant information.",
};

const contactOptions = [
  {
    icon: "restaurant",
    title: "Reservations",
    description:
      "Planning your next meal at Kuro? Send us your preferred date, time and guest count.",
  },
  {
    icon: "groups",
    title: "Group Enquiries",
    description:
      "Get in touch for group dining, celebrations and special gatherings.",
  },
  {
    icon: "mail",
    title: "General Enquiries",
    description:
      "Have a question about Kuro Sizzlers? We would love to hear from you.",
  },
];

export default function ContactPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section
        aria-labelledby="contact-title"
        className="w-full bg-wok-black px-5 pb-16 pt-24 text-white sm:px-8 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-24 lg:pt-32"
      >
        <div className="mx-auto flex max-w-[1360px] flex-col items-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-body text-xs font-black uppercase tracking-[0.16em] text-primary">
            Reservations & Enquiries
          </span>

          <h1
            id="contact-title"
            className="max-w-4xl text-center font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-7xl"
          >
            LET&apos;S TALK
            <span className="text-primary"> KURO SIZZLERS.</span>
          </h1>

          <p className="mt-6 max-w-2xl font-body text-sm leading-7 text-white/65 sm:text-base text-center">
            Whether you&apos;re planning a table, a gathering, or simply want
            to know more about Kuro Sizzlers, send us a message and our team
            will get back to you.
          </p>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section
        aria-labelledby="contact-form-title"
        className="w-full bg-surface-cream py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-10">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <p className="mb-3 font-body text-xs font-black uppercase tracking-[0.2em] text-on-surface">
              Get In Touch
            </p>

            <h2
              id="contact-form-title"
              className="max-w-xl font-display text-3xl font-extrabold uppercase leading-[1.05] text-on-surface sm:text-4xl lg:text-5xl"
            >
              YOUR TABLE,
              <br />
              YOUR MOMENT.
            </h2>

            <p className="mt-5 max-w-lg font-body text-sm leading-7 text-on-surface-muted sm:text-base">
              Tell us what you&apos;re looking for and share the details below.
              Whether it&apos;s a table for two or a larger gathering, we&apos;ll
              help you plan your Kuro experience.
            </p>

            {/* Contact options */}
            <div className="mt-10 space-y-4">
              {contactOptions.map((option) => (
                <div
                  key={option.title}
                  className="flex gap-4 rounded-xl border border-border-soft bg-surface-card p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-wok-black">
                    <span className="material-symbols-outlined text-[22px]">
                      {option.icon}
                    </span>
                  </span>

                  <div>
                    <h3 className="font-display text-base font-extrabold uppercase text-on-surface">
                      {option.title}
                    </h3>

                    <p className="mt-1 font-body text-sm leading-6 text-on-surface-muted">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="mt-6 rounded-xl bg-wok-black p-6 text-white sm:p-7">
              <p className="font-body text-xs font-black uppercase tracking-[0.18em] text-primary">
                The Kuro Philosophy
              </p>

              <h3 className="mt-3 font-display text-xl font-extrabold uppercase">
                FIRE. FLAVOUR. CRAFT.
              </h3>

              <p className="mt-3 font-body text-sm leading-6 text-white/60">
                Kuro means &quot;black&quot; in Japanese — a tribute to the
                iconic cast-iron sizzler plates that represent the heart of
                the experience.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-wok-black p-6 shadow-xl sm:p-8 lg:p-10">
              <div className="mb-8">
                <span className="font-body text-xs font-black uppercase tracking-[0.18em] text-primary">
                  Send An Enquiry
                </span>

                <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                  TELL US ABOUT YOUR VISIT.
                </h2>

                <p className="mt-3 font-body text-sm leading-6 text-white/55">
                  Fill in the details below and we&apos;ll get back to you.
                </p>
              </div>

              <form
                action="#"
                method="post"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/30 transition focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/30 transition focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Your phone number"
                      className="w-full rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/30 transition focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry"
                      className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                    >
                      Enquiry Type
                    </label>

                    <select
                      id="enquiry"
                      name="enquiry"
                      defaultValue=""
                      className="w-full rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none transition focus:border-primary"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="reservation">Table Reservation</option>
                      <option value="group">Group Enquiry</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                    >
                      Preferred Date
                    </label>

                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="w-full rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none transition focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                    >
                      Number Of Guests
                    </label>

                    <input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      placeholder="e.g. 4"
                      className="w-full rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/30 transition focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-body text-xs font-extrabold uppercase tracking-wide text-white/80"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us anything we should know..."
                    className="w-full resize-none rounded-lg border border-white/10 bg-charcoal-card px-4 py-3.5 font-body text-sm text-white outline-none placeholder:text-white/30 transition focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 font-body text-sm font-black uppercase tracking-wide text-wok-black transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-wok-black sm:w-auto"
                >
                  Send Enquiry
                  <span className="material-symbols-outlined text-[19px]">
                    arrow_forward
                  </span>
                </button>

                <p className="font-body text-xs leading-5 text-white/35">
                  Your details will only be used to respond to your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        aria-labelledby="contact-cta-title"
        className="bg-primary px-5 py-16 text-wok-black sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="font-body text-xs font-black uppercase tracking-[0.2em]">
            Explore More
          </p>

          <h2
            id="contact-cta-title"
            className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl lg:text-5xl"
          >
            READY TO EXPERIENCE KURO?
          </h2>

          <p className="mt-4 max-w-xl font-body text-sm leading-7 text-wok-black/70 sm:text-base">
            Explore our menu and discover the flavours waiting for you.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-wok-black px-6 font-body text-sm font-black uppercase tracking-wide text-primary transition hover:bg-charcoal-night"
            >
              Explore Menu
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>

            <Link
              href="/gallery"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-wok-black px-6 font-body text-sm font-black uppercase tracking-wide text-wok-black transition hover:bg-wok-black hover:text-primary"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}