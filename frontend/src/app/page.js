"use client"
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import Hero from "./components/landing/hero";



export default function Home() {
  return (
    <>
    <Header />
    <section className="relative w-screen">
      <Hero />
    </section>
    <Footer />
    </>
  );
}
