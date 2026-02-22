
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Calendar, Users, ChevronDown, ChevronUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BookingDialog from "./BookingDialog";
import { cn } from "@/lib/utils";

interface Flight {
  id: string;
  plane_name: string;
  flight_date: string;
  departure_time: string;
  arrival_time: string;
  departure_date: string;
  arrival_date: string;
  departure_airport_name: string;
  arrival_airport_name: string;
  stopover_1_airport_name?: string;
  stopover_1_departure_time?: string;
  stopover_1_arrival_time?: string;
  stopover_1_date?: string;
  stopover_2_airport_name?: string;
  stopover_2_departure_time?: string;
  stopover_2_arrival_time?: string;
  stopover_2_date?: string;
  stopover_3_airport_name?: string;
  stopover_3_departure_time?: string;
  stopover_3_arrival_time?: string;
  stopover_3_date?: string;
  stopover_4_airport_name?: string;
  stopover_4_departure_time?: string;
  stopover_4_arrival_time?: string;
  stopover_4_date?: string;
  price: number;
  available_seats: number;
  status: string;
}

interface FlightCardProps {
  flight: Flight;
}

const FlightCard = ({ flight }: FlightCardProps) => {
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const formatTime = (time: string) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStopovers = () => {
    const stopovers = [];
    for (let i = 1; i <= 4; i++) {
      const airportName = flight[`stopover_${i}_airport_name` as keyof Flight];
      const arrivalTime = flight[`stopover_${i}_arrival_time` as keyof Flight];
      const departureTime = flight[`stopover_${i}_departure_time` as keyof Flight];
      const date = flight[`stopover_${i}_date` as keyof Flight];

      if (airportName) {
        stopovers.push({
          number: i,
          airport: airportName,
          arrivalTime,
          departureTime,
          date
        });
      }
    }
    return stopovers;
  };

  const stopovers = getStopovers();
  const duration = "6h 30m"; // Placeholder duration calculation logic would go here

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
      >
        {/* Top Section: Main Flight Info */}
        <div className="p-6 md:p-8 relative">
          {/* Decorative flight path line */}
          <div className="hidden md:block absolute top-1/2 left-[30%] right-[30%] h-[2px] bg-gray-100 -z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
              <Plane className="text-gray-300 rotate-90" size={16} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 z-10 relative">

            {/* Airline Logo & Name */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#00204E]">
                <Plane size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#00204E]">{flight.plane_name}</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded text-xs font-medium">Economy</span>
              </div>
            </div>

            {/* Flight Route Visual */}
            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-center flex-1 md:px-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#00204E]">{formatTime(flight.departure_time)}</div>
                <div className="text-sm font-medium text-gray-500 mt-1">{flight.departure_airport_name.substring(0, 3).toUpperCase()}</div>
              </div>

              <div className="flex flex-col items-center gap-1 min-w-[100px]">
                <span className="text-xs text-gray-400 font-medium">{duration}</span>
                <div className="w-full h-[2px] bg-gray-200 relative">
                  <div className={`absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 rounded-full bg-[#00204E]`} />
                  <div className={`absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full ${stopovers.length > 0 ? 'bg-orange-400' : 'bg-[#00204E]'}`} />
                </div>
                <span className={`text-xs font-medium ${stopovers.length > 0 ? 'text-orange-500' : 'text-green-600'}`}>
                  {stopovers.length > 0 ? `${stopovers.length} Stop${stopovers.length > 1 ? 's' : ''}` : 'Direct'}
                </span>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-[#00204E]">{formatTime(flight.arrival_time)}</div>
                <div className="text-sm font-medium text-gray-500 mt-1">{flight.arrival_airport_name.substring(0, 3).toUpperCase()}</div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex flex-col items-end gap-2 w-full md:w-auto mt-4 md:mt-0">
              <div className="text-right">
                <span className="text-sm text-gray-400">from</span>
                <div className="text-3xl font-bold text-[#00204E]">${flight.price}</div>
              </div>

              <Button
                onClick={() => setShowBookingDialog(true)}
                disabled={flight.available_seats === 0 || flight.status !== 'active'}
                className="w-full md:w-32 bg-[#00204E] hover:bg-[#00204E]/90 text-white font-bold rounded-lg shadow-lg shadow-blue-900/10"
              >
                {flight.available_seats === 0 ? 'Sold Out' : 'Select'}
              </Button>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-gray-500 border-t border-dashed pt-4">
            <div className="flex items-center gap-4">
              {flight.status === 'active' ? (
                <span className="flex items-center gap-1.5 text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                  <CheckCircle2 size={14} /> Available
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-red-600 font-medium bg-red-50 px-2 py-1 rounded">
                  <AlertCircle size={14} /> {flight.status}
                </span>
              )}
              <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">
                <Users size={14} /> {flight.available_seats} seats
              </span>
            </div>
            <button onClick={() => setExpanded(!expanded)} className="text-[#00204E] font-medium flex items-center gap-1 hover:underline">
              {expanded ? 'Hide details' : 'Flight details'}
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>

        {/* Expanded Details Section */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          className="bg-gray-50 overflow-hidden"
        >
          <div className="p-6 border-t border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-[#00204E] mb-4 flex items-center gap-2">
                  <Calendar size={18} /> Flight Schedule
                </h4>
                <div className="space-y-6 relative pl-4 border-l-2 border-gray-200 ml-2">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 bg-[#00204E] rounded-full ring-4 ring-gray-50"></div>
                    <div className="font-bold text-[#00204E]">{formatTime(flight.departure_time)}</div>
                    <div className="text-sm text-gray-600">{flight.departure_date}</div>
                    <div className="text-gray-900 font-medium">{flight.departure_airport_name}</div>
                  </div>

                  {stopovers.map(stop => (
                    <div key={stop.number} className="relative py-2">
                      <div className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-400 rounded-full ring-4 ring-gray-50"></div>
                      <div className="text-sm font-medium text-orange-600 bg-orange-50 inline-block px-2 py-1 rounded mb-1">
                        Layover: {stop.airport}
                      </div>
                      <div className="text-xs text-gray-500">
                        {stop.arrivalTime && `Arrives ${formatTime(stop.arrivalTime)}`}
                        •
                        {stop.departureTime && `Departs ${formatTime(stop.departureTime)}`}
                      </div>
                    </div>
                  ))}

                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 bg-[#00204E] rounded-full ring-4 ring-gray-50"></div>
                    <div className="font-bold text-[#00204E]">{formatTime(flight.arrival_time)}</div>
                    <div className="text-sm text-gray-600">{flight.arrival_date}</div>
                    <div className="text-gray-900 font-medium">{flight.arrival_airport_name}</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#00204E] mb-4">Fare Breakdown</h4>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Base Fare</span>
                    <span className="font-medium text-[#00204E]">${Math.round(flight.price * 0.8)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Taxes & Fees</span>
                    <span className="font-medium text-[#00204E]">${Math.round(flight.price * 0.2)}</span>
                  </div>
                  <div className="flex justify-between py-2 pt-4">
                    <span className="font-bold text-[#00204E]">Total per person</span>
                    <span className="font-bold text-xl text-[#00204E]">${flight.price}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-[#00204E] mb-2 text-sm">Amenities</h4>
                  <div className="flex gap-4 flex-wrap">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">20kg Baggage</Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">In-flight Meal</Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">USB Charging</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <BookingDialog
        flight={flight}
        isOpen={showBookingDialog}
        onClose={() => setShowBookingDialog(false)}
      />
    </>
  );
};

export default FlightCard;
