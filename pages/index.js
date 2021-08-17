import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/Home/HeroSection";
import Mission from "../components/Home/Mission";
import Reviews from "../components/Home/Reviews";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Mission />
      <Reviews />
      <Footer />
    </div>
  );
}
