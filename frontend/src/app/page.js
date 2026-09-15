"use client"

import { useEffect } from "react";
import Hero from "./components/landing/hero";
import OurStoryPreview from "./components/landing/storyPreview";
import FoodExperience from "./components/landing/foodExperience";
import SignatureDishes from "./components/landing/signatureDishes";
import ExperiencePreview from "./components/landing/experiencePreview";
import GalleryPreview from "./components/landing/galleryPreview";
import ReservationCTA from "./components/landing/reservationCTA";



export default function Home() {

  // page opens on the top
  useEffect(() => {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }
},[]) 
  return (
    <>
    <section className="relative w-screen bg-wok-black">
      <Hero />
      <OurStoryPreview />
      {/* <FoodExperience /> */}
      <ExperiencePreview />
      <SignatureDishes />
      
      <GalleryPreview />
      <ReservationCTA />
    </section>
    </>
  );
}
