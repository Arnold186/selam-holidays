
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FlightSearchProps {
  onSearch?: (filters: any) => void;
}

const FlightSearch = ({ onSearch }: FlightSearchProps) => {
  const [searchFilters, setSearchFilters] = useState({
    departure: '',
    arrival: '',
    date: '',
    passengers: 1
  });

  const handleSearch = () => {
    onSearch?.(searchFilters);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-lg p-6 mb-8"
    >
      <h2 className="text-2xl font-bold text-tertiary-dark mb-6">Search Flights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <Label htmlFor="departure" className="flex items-center gap-2 mb-2">
            <MapPin size={16} />
            From
          </Label>
          <Input
            id="departure"
            placeholder="Departure airport"
            value={searchFilters.departure}
            onChange={(e) => setSearchFilters(prev => ({ ...prev, departure: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="arrival" className="flex items-center gap-2 mb-2">
            <MapPin size={16} />
            To
          </Label>
          <Input
            id="arrival"
            placeholder="Arrival airport"
            value={searchFilters.arrival}
            onChange={(e) => setSearchFilters(prev => ({ ...prev, arrival: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="date" className="flex items-center gap-2 mb-2">
            <Calendar size={16} />
            Date
          </Label>
          <Input
            id="date"
            type="date"
            value={searchFilters.date}
            onChange={(e) => setSearchFilters(prev => ({ ...prev, date: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="passengers" className="flex items-center gap-2 mb-2">
            <Users size={16} />
            Passengers
          </Label>
          <Input
            id="passengers"
            type="number"
            min="1"
            max="10"
            value={searchFilters.passengers}
            onChange={(e) => setSearchFilters(prev => ({ ...prev, passengers: parseInt(e.target.value) }))}
          />
        </div>
        <div className="flex items-end">
          <Button onClick={handleSearch} className="w-full bg-primary hover:bg-primary/90">
            <Search size={16} className="mr-2" />
            Search
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default FlightSearch;
