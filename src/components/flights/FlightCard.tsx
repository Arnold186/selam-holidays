
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BookingDialog from "./BookingDialog";

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

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          {/* Flight Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Plane size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-tertiary-dark">{flight.plane_name}</h3>
              </div>
            </div>

            {/* Main Route */}
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <div className="font-bold text-lg text-tertiary-dark">{formatTime(flight.departure_time)}</div>
                <div className="text-sm text-tertiary flex items-center gap-1">
                  <MapPin size={12} />
                  {flight.departure_airport_name}
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <Calendar size={10} />
                  {formatDate(flight.departure_date)}
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-px bg-gray-300 w-full mb-1"></div>
                  {stopovers.length > 0 ? (
                    <div className="text-xs text-tertiary">
                      {stopovers.length} Stop{stopovers.length > 1 ? 's' : ''}
                    </div>
                  ) : (
                    <div className="text-xs text-primary">Direct</div>
                  )}
                </div>
              </div>

              <div className="text-center">
                <div className="font-bold text-lg text-tertiary-dark">{formatTime(flight.arrival_time)}</div>
                <div className="text-sm text-tertiary flex items-center gap-1">
                  <MapPin size={12} />
                  {flight.arrival_airport_name}
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <Calendar size={10} />
                  {formatDate(flight.arrival_date)}
                </div>
              </div>
            </div>

            {/* Stopover Details */}
            {stopovers.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-sm text-tertiary-dark mb-3">Stopover Details</h4>
                <div className="space-y-3">
                  {stopovers.map((stopover) => (
                    <div key={stopover.number} className="border-l-2 border-primary/30 pl-3">
                      <div className="font-medium text-sm text-tertiary-dark">
                        Stop {stopover.number}: {stopover.airport}
                      </div>
                      {stopover.date && (
                        <div className="text-xs text-gray-600 flex items-center gap-1 mt-1">
                          <Calendar size={10} />
                          {formatDate(stopover.date)}
                        </div>
                      )}
                      {stopover.arrivalTime && stopover.departureTime && (
                        <div className="text-xs text-gray-600 flex items-center gap-1 mt-1">
                          <Clock size={10} />
                          Arrive: {formatTime(stopover.arrivalTime)} • 
                          Depart: {formatTime(stopover.departureTime)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Price and Booking */}
          <div className="text-center lg:text-right">
            <div className="mb-4">
              <div className="text-3xl font-bold text-primary">${flight.price}</div>
              <div className="text-sm text-tertiary">per person</div>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users size={12} />
                {flight.available_seats} seats left
              </Badge>
              <Badge variant="outline" className={`
                ${flight.status === 'active' ? 'text-green-600 border-green-200' : ''}
                ${flight.status === 'delayed' ? 'text-yellow-600 border-yellow-200' : ''}
                ${flight.status === 'cancelled' ? 'text-red-600 border-red-200' : ''}
              `}>
                {flight.status.charAt(0).toUpperCase() + flight.status.slice(1)}
              </Badge>
            </div>

            <Button 
              className="w-full lg:w-auto bg-primary hover:bg-primary/90"
              disabled={flight.available_seats === 0 || flight.status !== 'active'}
              onClick={() => setShowBookingDialog(true)}
            >
              {flight.available_seats === 0 ? 'Sold Out' : 'Book Now'}
            </Button>
          </div>
        </div>
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
