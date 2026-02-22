
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, MapPin, Users, Plane, Hotel as HotelIcon, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import HotelSearch from "./HotelSearch";

interface FlightSearchProps {
  onSearch?: (filters: any) => void;
}

const FlightSearch = ({ onSearch }: FlightSearchProps) => {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels'>('flights');

  // Flight Search State
  const [flightFilters, setFlightFilters] = useState({
    tripType: "round-trip",
    from: "",
    to: "",
    departureDate: undefined as Date | undefined,
    returnDate: undefined as Date | undefined,
    isReturn: false,
    adults: "1",
    children: "0",
    infants: "0",
    class: "economy",
    airline: "" // Added Preferred Airline
  });

  const handleFlightSearch = () => {
    console.log('Flight Search filters:', flightFilters);
    onSearch?.({
      type: 'flight',
      ...flightFilters,
      // Ensure we pass the return date explicitly if it's a round trip or if date is selected
      returnDate: flightFilters.tripType === 'round-trip' ? flightFilters.returnDate : undefined
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="flex mb-0">
        <button
          onClick={() => setActiveTab('flights')}
          className={cn(
            "relative px-8 py-4 font-bold text-sm uppercase tracking-wide rounded-t-xl transition-all duration-300",
            activeTab === 'flights'
              ? "text-white"
              : "bg-white/80 text-gray-500 hover:text-[#00204E] hover:bg-white"
          )}
        >
          {activeTab === 'flights' && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-[#00204E] rounded-t-xl"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <div className="relative flex items-center gap-2 z-10">
            <Plane size={18} />
            Flight
          </div>
        </button>
        <button
          onClick={() => setActiveTab('hotels')}
          className={cn(
            "relative px-8 py-4 font-bold text-sm uppercase tracking-wide rounded-t-xl transition-all duration-300",
            activeTab === 'hotels'
              ? "text-white"
              : "bg-white/80 text-gray-500 hover:text-[#00204E] hover:bg-white"
          )}
        >
          {activeTab === 'hotels' && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-[#00204E] rounded-t-xl"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <div className="relative flex items-center gap-2 z-10">
            <HotelIcon size={18} />
            Hotel
          </div>
        </button>
      </div>

      <motion.div
        layout
        className="bg-white rounded-b-xl rounded-tr-xl shadow-2xl p-8 border border-gray-100"
      >
        <AnimatePresence mode="wait">
          {activeTab === 'flights' ? (
            <motion.div
              key="flights"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Trip Type Radio */}
              <RadioGroup
                defaultValue="round-trip"
                onValueChange={(value) => setFlightFilters({ ...flightFilters, tripType: value })}
                className="flex flex-wrap gap-8 mb-8"
              >
                {[
                  { id: "one-way", label: "One Way" },
                  { id: "round-trip", label: "Round-Trip" },
                  { id: "multi-city", label: "Multiple Destinations" },
                  { id: "availability", label: "Availability" }
                ].map((option) => (
                  <div key={option.id} className="flex items-center space-x-2 group cursor-pointer">
                    <RadioGroupItem value={option.id} id={option.id} className="border-[#00204E] text-[#00204E]" />
                    <Label htmlFor={option.id} className="cursor-pointer font-medium text-[#00204E] group-hover:text-[#00204E]/80 transition-colors text-base">{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>

              {/* Flight Search Inputs */}
              <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-start">

                {/* FROM & TO SECTION */}
                <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                  <div className="relative group">
                    <Label className="mb-2 block font-bold text-gray-700 text-sm uppercase tracking-wide">From</Label>
                    <div className="relative transition-transform duration-300 focus-within:scale-[1.02]">
                      <Input
                        placeholder="City or Airport"
                        value={flightFilters.from}
                        onChange={(e) => setFlightFilters({ ...flightFilters, from: e.target.value })}
                        className="h-14 pl-12 rounded-xl border-gray-200 focus:border-[#00204E] focus:ring-[#00204E]/20 text-lg font-medium shadow-sm transition-all"
                      />
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#00204E] transition-colors" size={20} />
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-10">
                    <button
                      className="bg-white border border-gray-200 text-[#00204E] rounded-full p-2 shadow-md hover:bg-[#00204E] hover:text-white transition-all duration-300 hover:rotate-180"
                      onClick={() => setFlightFilters(prev => ({ ...prev, from: prev.to, to: prev.from }))}
                    >
                      <ArrowRightLeft size={18} />
                    </button>
                  </div>

                  <div className="relative group">
                    <Label className="mb-2 block font-bold text-gray-700 text-sm uppercase tracking-wide">To</Label>
                    <div className="relative transition-transform duration-300 focus-within:scale-[1.02]">
                      <Input
                        placeholder="City or Airport"
                        value={flightFilters.to}
                        onChange={(e) => setFlightFilters({ ...flightFilters, to: e.target.value })}
                        className="h-14 pl-12 rounded-xl border-gray-200 focus:border-[#00204E] focus:ring-[#00204E]/20 text-lg font-medium shadow-sm transition-all"
                      />
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#00204E] transition-colors" size={20} />
                    </div>
                  </div>
                </div>

                {/* SPACER FOR ARROW ON LARGE SCREENS */}
                <div className="hidden lg:flex lg:col-span-1 justify-center items-center pt-8">
                </div>

                {/* EMPTY COL FOR LAYOUT */}
                <div className="lg:col-span-5"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* DATE INPUTS */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                  <div className="group">
                    <Label className="mb-2 block font-bold text-gray-700 text-sm uppercase tracking-wide">Departure</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-medium h-14 rounded-xl border-gray-200 hover:border-[#00204E] hover:text-[#00204E] transition-all duration-300 shadow-sm group-hover:shadow-md",
                            !flightFilters.departureDate && "text-muted-foreground"
                          )}
                        >
                          <Calendar className={`mr-3 h-5 w-5 ${flightFilters.departureDate ? "text-[#00204E]" : "text-gray-400"}`} />
                          {flightFilters.departureDate ? (
                            <span className="text-lg text-gray-900">{format(flightFilters.departureDate, "dd/MM/yyyy")}</span>
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={flightFilters.departureDate}
                          onSelect={(date) => setFlightFilters({ ...flightFilters, departureDate: date })}
                          initialFocus
                          className="rounded-xl border shadow-xl"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-2 mb-2">
                      <Label htmlFor="return-check" className="font-bold text-gray-700 cursor-pointer text-sm uppercase tracking-wide flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="return-check"
                          className="w-4 h-4 rounded border-gray-300 text-[#00204E] focus:ring-[#00204E] cursor-pointer"
                          checked={flightFilters.isReturn}
                          onChange={(e) => setFlightFilters({ ...flightFilters, isReturn: e.target.checked })}
                        />
                        Return
                      </Label>
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-medium h-14 rounded-xl border-gray-200 transition-all duration-300 shadow-sm",
                            !flightFilters.isReturn ? "bg-gray-50 opacity-60" : "hover:border-[#00204E] hover:text-[#00204E] group-hover:shadow-md",
                            !flightFilters.returnDate && "text-muted-foreground"
                          )}
                          disabled={!flightFilters.isReturn}
                        >
                          <Calendar className={`mr-3 h-5 w-5 ${flightFilters.returnDate ? "text-[#00204E]" : "text-gray-400"}`} />
                          {flightFilters.returnDate ? (
                            <span className="text-lg text-gray-900">{format(flightFilters.returnDate, "dd/MM/yyyy")}</span>
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={flightFilters.returnDate}
                          onSelect={(date) => setFlightFilters({ ...flightFilters, returnDate: date })}
                          initialFocus
                          className="rounded-xl border shadow-xl"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* PASSENGERS & CLASS */}
                <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Adult", sub: "(12+)", value: flightFilters.adults, key: "adults", icon: Users },
                    { label: "Child", sub: "(2-12)", value: flightFilters.children, key: "children", icon: Users },
                    { label: "Infant", sub: "(0-2)", value: flightFilters.infants, key: "infants", icon: Users },
                  ].map((item) => (
                    <div key={item.key}>
                      <Label className="mb-2 block font-bold text-gray-700 text-center text-sm uppercase tracking-wide">{item.label}</Label>
                      <Select
                        value={item.value}
                        onValueChange={(value) => setFlightFilters({ ...flightFilters, [item.key]: value })}
                      >
                        <SelectTrigger className="h-14 rounded-xl border-gray-200 focus:ring-[#00204E]/20 text-lg font-medium text-center justify-center">
                          <SelectValue placeholder="0" />
                        </SelectTrigger>
                        <SelectContent>
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                            <SelectItem key={num} value={num.toString()} className="justify-center">{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-center font-semibold text-[#00204E]/60 mt-1.5">{item.sub}</p>
                    </div>
                  ))}

                  <div>
                    <Label className="mb-2 block font-bold text-gray-700 text-center text-sm uppercase tracking-wide">Class</Label>
                    <Select
                      value={flightFilters.class}
                      onValueChange={(value) => setFlightFilters({ ...flightFilters, class: value })}
                    >
                      <SelectTrigger className="h-14 rounded-xl border-gray-200 focus:ring-[#00204E]/20 font-medium text-center justify-center px-2">
                        <SelectValue placeholder="..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="first">First</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* AIRLINE PREFERENCE */}
                <div className="grid grid-cols-1 lg:col-span-12">
                  <Label className="mb-2 block font-bold text-gray-700 text-sm uppercase tracking-wide">Preferred Airline (Optional)</Label>
                  <div className="relative transition-transform duration-300 focus-within:scale-[1.01]">
                    <Input
                      placeholder="E.g. RwandAir, Emirates, Qatar Airways"
                      value={flightFilters.airline}
                      onChange={(e) => setFlightFilters({ ...flightFilters, airline: e.target.value })}
                      className="h-14 pl-12 rounded-xl border-gray-200 focus:border-[#00204E] focus:ring-[#00204E]/20 text-lg font-medium shadow-sm transition-all"
                    />
                    <Plane className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#00204E] transition-colors" size={20} />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleFlightSearch}
                  className="bg-[#00204E] hover:bg-[#00204E]/90 text-white px-12 py-4 text-sm uppercase font-bold rounded-xl shadow-lg shadow-[#00204E]/20 flex items-center gap-3 transition-all"
                >
                  <Search size={20} />
                  Search Flights
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="hotels"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <HotelSearch onSearch={onSearch} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FlightSearch;
