
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlightsHero from "@/components/flights/FlightsHero";
import FlightSearch from "@/components/flights/FlightSearch";
import FlightResults from "@/components/flights/FlightResults";
import NewsletterSection from "@/components/NewsletterSection";

const Flights = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FlightsHero />
      <div className="container-custom py-16">
        <FlightSearch />
        <FlightResults />
      </div>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Flights;
