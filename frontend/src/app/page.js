"use client"
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import Hero from "./components/landing/hero";
import OurStoryPreview from "./components/landing/storyPreview";
import FoodExperience from "./components/landing/foodExperience";
import SignatureDishes from "./components/landing/signatureDishes";
import ExperiencePreview from "./components/landing/experiencePreview";
import GalleryPreview from "./components/landing/galleryPreview";
import Reservation from "./components/landing/reservation";



export default function Home() {
  return (
    <>
    <Header />
    <section className="relative w-screen">
      <Hero />
      <OurStoryPreview />
      <FoodExperience />
      <SignatureDishes />
      <ExperiencePreview />
      <GalleryPreview />
      <Reservation />
    </section>
    <Footer />
    </>
  );
}
