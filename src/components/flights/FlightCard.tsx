
import React from "react";
import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Flight {
  id: string;
  plane_name: string;
  flight_date: string;
  departure_time: string;
  arrival_time: string;
  departure_airport_name: string;
  arrival_airport_name: string;
  stopover_airport_name?: string;
  stopover_departure_time?: string;
  stopover_arrival_time?: string;
  price: number;
  available_seats: number;
  status: string;
}

interface FlightCardProps {
  flight: Flight;
}

const FlightCard = ({ flight }: FlightCardProps) => {
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

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Flight Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <Plane size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-tertiary-dark">{flight.plane_name}</h3>
              <div className="flex items-center gap-2 text-sm text-tertiary">
                <Calendar size={14} />
                <span>{formatDate(flight.flight_date)}</span>
              </div>
            </div>
          </div>

          {/* Route */}
          <div className="flex items-center gap-4 mb-4">
            <div className="text-center">
              <div className="font-bold text-lg text-tertiary-dark">{formatTime(flight.departure_time)}</div>
              <div className="text-sm text-tertiary flex items-center gap-1">
                <MapPin size={12} />
                {flight.departure_airport_name}
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="h-px bg-gray-300 w-full mb-1"></div>
                {flight.stopover_airport_name ? (
                  <div className="text-xs text-tertiary">
                    Stop: {flight.stopover_airport_name}
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
            </div>
          </div>

          {/* Stopover Details */}
          {flight.stopover_airport_name && (
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="text-sm text-tertiary">
                <strong>Stopover:</strong> {flight.stopover_airport_name}
              </div>
              {flight.stopover_arrival_time && flight.stopover_departure_time && (
                <div className="text-sm text-tertiary">
                  Arrive: {formatTime(flight.stopover_arrival_time)} • 
                  Depart: {formatTime(flight.stopover_departure_time)}
                </div>
              )}
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
          >
            {flight.available_seats === 0 ? 'Sold Out' : 'Book Now'}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default FlightCard;
