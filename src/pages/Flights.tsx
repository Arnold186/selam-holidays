
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlightsHero from "@/components/flights/FlightsHero";
import FlightSearch from "@/components/flights/FlightSearch";
import FlightResults from "@/components/flights/FlightResults";
import NewsletterSection from "@/components/NewsletterSection";

const Flights = () => {
  const [searchFilters, setSearchFilters] = useState({
    departure: '',
    arrival: '',
    date: '',
    passengers: 1
  });

  const handleSearch = (filters: typeof searchFilters) => {
    console.log('Search triggered with filters:', filters);
    setSearchFilters(filters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FlightsHero />
      <div className="container-custom py-16">
        <FlightSearch onSearch={handleSearch} />
        <FlightResults searchFilters={searchFilters} />
      </div>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Flights;
