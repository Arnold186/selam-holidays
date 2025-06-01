
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import FlightCard from "./FlightCard";
import { Loader2 } from "lucide-react";

interface FlightResultsProps {
  searchFilters?: {
    departure: string;
    arrival: string;
    date: string;
    passengers: number;
  };
}

const FlightResults = ({ searchFilters }: FlightResultsProps) => {
  const { data: flights, isLoading, error, refetch } = useQuery({
    queryKey: ['flights', searchFilters],
    queryFn: async () => {
      let query = supabase
        .from('flights')
        .select('*')
        .eq('status', 'active')
        .order('flight_date', { ascending: true });

      // Apply filters if provided
      if (searchFilters?.departure) {
        query = query.ilike('departure_airport_name', `%${searchFilters.departure}%`);
      }
      if (searchFilters?.arrival) {
        query = query.ilike('arrival_airport_name', `%${searchFilters.arrival}%`);
      }
      if (searchFilters?.date) {
        query = query.eq('flight_date', searchFilters.date);
      }
      if (searchFilters?.passengers) {
        query = query.gte('available_seats', searchFilters.passengers);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data;
    }
  });

  // Set up real-time subscription
  useEffect(() => {
    const channel = supabase
      .channel('flights-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'flights'
        },
        () => {
          console.log('Flight data changed, refetching...');
          refetch();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [refetch]);

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
        <button 
          onClick={() => refetch()} 
          className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!flights || flights.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-tertiary text-lg">
          {searchFilters && (searchFilters.departure || searchFilters.arrival || searchFilters.date) 
            ? "No flights found matching your search criteria." 
            : "No flights available at the moment."
          }
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-tertiary-dark mb-6">
        Available Flights ({flights.length})
      </h2>
      <div className="grid gap-6">
        {flights.map((flight, index) => (
          <motion.div
            key={flight.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FlightCard flight={flight} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FlightResults;
