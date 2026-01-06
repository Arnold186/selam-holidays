
import React from 'react';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DestinationSection from "@/components/DestinationSection";

import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import FeaturedTours from "@/components/tours/FeaturedTours";

const Index = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedTours />
      <DestinationSection />


      <WhyChooseUsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
