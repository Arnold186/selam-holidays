
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destination/DestinationHero";
import DestinationMap from "@/components/destination/DestinationMap";
import PopularDestinations from "@/components/destination/PopularDestinations";
import DestinationActivities from "@/components/destination/DestinationActivities";
import RelatedTours from "@/components/destination/RelatedTours";
import NewsletterSection from "@/components/NewsletterSection";

const Destination = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <DestinationHero />
      <DestinationMap />
      <PopularDestinations />
      <DestinationActivities />
      <RelatedTours />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Destination;
