
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import FlightOptionCard from "./FlightOptionCard";
import { Loader2, ArrowRight } from "lucide-react";

interface FlightResultsProps {
  searchFilters?: {
    departure: string;
    arrival: string;
    date: Date | undefined;
    returnDate: Date | undefined;
    passengers: number;
    tripType?: string;
  };
}

const FlightResults = ({ searchFilters }: FlightResultsProps) => {
  const [selectedDeparture, setSelectedDeparture] = useState<string | null>(null);
  const [selectedReturn, setSelectedReturn] = useState<string | null>(null);

  const { data: flights, isLoading, error, refetch } = useQuery({
    queryKey: ['flights', searchFilters],
    queryFn: async () => {
      let query = supabase
        .from('flights')
        .select('*')
        .eq('status', 'active');

      // In a real app, we would filtering by date and route here.
      // For this demo/template, we'll fetch all active flights and manually separate them 
      // or just mock the separation to show the UI.

      const { data, error } = await query;
      if (error) throw error;
      return data;
    }
  });

  // Mock splitting flights into departure and return for demonstration
  // In a real scenario, these would be two separate queries or filtered lists
  const outboundFlights = flights || [];
  const returnFlights = flights ? [...flights].reverse() : [];

  const isRoundTrip = searchFilters?.tripType === 'round-trip' || searchFilters?.returnDate;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-tertiary">Loading flights...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-600">Error loading flights. Please try again.</p>
        <button onClick={() => refetch()} className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">Retry</button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* DEPARTURE SECTION */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4 sticky top-20 z-10">
            <h3 className="text-lg font-bold text-[#00204E] flex items-center gap-2">
              <span className="bg-[#00204E] text-white text-xs px-2 py-1 rounded">DEPARTURE</span>
              <span className="text-gray-600 text-sm flex items-center gap-1">
                {searchFilters?.departure || 'Origin'} <ArrowRight size={14} /> {searchFilters?.arrival || 'Destination'}
              </span>
            </h3>
            <div className="flex justify-between items-center mt-2 text-sm text-gray-500 font-medium border-t pt-2">
              <span>Date: {searchFilters?.date ? new Date(searchFilters.date).toLocaleDateString() : 'Select Date'}</span>
              <div className="flex gap-4">
                <button className="hover:text-[#00204E]">Duration</button>
                <button className="hover:text-[#00204E]">Stop</button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {outboundFlights.map((flight) => (
              <FlightOptionCard
                key={`dep-${flight.id}`}
                flight={flight}
                isSelected={selectedDeparture === flight.id}
                onSelect={() => setSelectedDeparture(flight.id)}
                type="departure"
              />
            ))}
            {outboundFlights.length === 0 && <div className="text-center p-8 text-gray-500">No departure flights found.</div>}
          </div>
        </div>

        {/* RETURN SECTION - Only show if round trip or return date selected */}
        {isRoundTrip && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4 sticky top-20 z-10">
              <h3 className="text-lg font-bold text-[#00204E] flex items-center gap-2">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">RETURN</span>
                <span className="text-gray-600 text-sm flex items-center gap-1">
                  {searchFilters?.arrival || 'Destination'} <ArrowRight size={14} /> {searchFilters?.departure || 'Origin'}
                </span>
              </h3>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500 font-medium border-t pt-2">
                <span>Date: {searchFilters?.returnDate ? new Date(searchFilters.returnDate).toLocaleDateString() : 'Select Date'}</span>
                <div className="flex gap-4">
                  <button className="hover:text-[#00204E]">Duration</button>
                  <button className="hover:text-[#00204E]">Stop</button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {returnFlights.map((flight) => (
                <FlightOptionCard
                  key={`ret-${flight.id}`}
                  flight={flight}
                  isSelected={selectedReturn === flight.id}
                  onSelect={() => setSelectedReturn(flight.id)}
                  type="return"
                />
              ))}
              {returnFlights.length === 0 && <div className="text-center p-8 text-gray-500">No return flights found.</div>}
            </div>
          </div>
        )}
      </div>

      {/* Footer / Booking Action */}
      {(selectedDeparture && (!isRoundTrip || selectedReturn)) && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 animate-in slide-in-from-bottom duration-300">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-500">Total Price</div>
              <div className="text-2xl font-bold text-[#00204E]">$XXX <span className="text-sm font-normal text-gray-400">/ person</span></div>
            </div>
            <button className="bg-[#00204E] hover:bg-[#00204E]/90 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg">
              Continue Booking
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default FlightResults;
