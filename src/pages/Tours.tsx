
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToursHero from "@/components/tours/ToursHero";
import TourCategories from "@/components/tours/TourCategories";
import FeaturedTours from "@/components/tours/FeaturedTours";
import ToursGrid from "@/components/tours/ToursGrid";
import TourPricing from "@/components/tours/TourPricing";

import TourTestimonials from "@/components/tours/TourTestimonials";
import NewsletterSection from "@/components/NewsletterSection";

const Tours = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ToursHero />
      {/* <TourCategories /> */}
      <ToursGrid />
      {/* <TourPricing /> */}

      <TourTestimonials />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Tours;
