
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Edit, Trash2, Loader2 } from "lucide-react";
import FlightForm from "./FlightForm";

const FlightsList = () => {
  const [editingFlight, setEditingFlight] = useState(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: flights, isLoading } = useQuery({
    queryKey: ['admin-flights'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('flights')
        .select('*')
        .order('flight_date', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (flightId: string) => {
      const { error } = await supabase
        .from('flights')
        .delete()
        .eq('id', flightId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-flights'] });
      queryClient.invalidateQueries({ queryKey: ['flights'] });
      toast({
        title: "Flight deleted",
        description: "Flight has been deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const formatTime = (time: string) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getActiveStopoverCount = (flight: any) => {
    if (flight.stopover_4_airport_name) return 4;
    if (flight.stopover_3_airport_name) return 3;
    if (flight.stopover_2_airport_name) return 2;
    if (flight.stopover_1_airport_name) return 1;
    return 0;
  };

  const renderStopovers = (flight: any) => {
    const stopoverCount = getActiveStopoverCount(flight);
    if (stopoverCount === 0) return null;

    const stopovers = [];
    for (let i = 1; i <= stopoverCount; i++) {
      const airportName = flight[`stopover_${i}_airport_name`];
      const date = flight[`stopover_${i}_date`];
      const arrivalTime = flight[`stopover_${i}_arrival_time`];
      const departureTime = flight[`stopover_${i}_departure_time`];
      
      if (airportName) {
        stopovers.push(
          <div key={i} className="text-sm">
            <strong>Stopover {i}:</strong> {airportName}
            {date && <span> on {formatDate(date)}</span>}
            {arrivalTime && departureTime && (
              <span> ({formatTime(arrivalTime)} - {formatTime(departureTime)})</span>
            )}
          </div>
        );
      }
    }
    
    return stopovers.length > 0 ? (
      <div className="mt-2">
        {stopovers}
      </div>
    ) : null;
  };

  if (editingFlight) {
    return (
      <div>
        <Button 
          variant="outline" 
          onClick={() => setEditingFlight(null)}
          className="mb-4"
        >
          ← Back to List
        </Button>
        <FlightForm 
          flight={editingFlight} 
          onSuccess={() => setEditingFlight(null)} 
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-tertiary">Loading flights...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>All Flights ({flights?.length || 0})</CardTitle>
        </CardHeader>
        <CardContent>
          {!flights || flights.length === 0 ? (
            <p className="text-center text-tertiary py-8">No flights found. Add your first flight!</p>
          ) : (
            <div className="space-y-4">
              {flights.map((flight) => (
                <div key={flight.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg">{flight.plane_name}</h3>
                        <Badge variant={
                          flight.status === 'active' ? 'default' :
                          flight.status === 'delayed' ? 'secondary' : 'destructive'
                        }>
                          {flight.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                        <div>
                          <strong>Departure:</strong> {flight.departure_airport_name}
                          <br />
                          <span className="text-gray-600">
                            {formatDate(flight.departure_date)} at {formatTime(flight.departure_time)}
                          </span>
                        </div>
                        <div>
                          <strong>Arrival:</strong> {flight.arrival_airport_name}
                          <br />
                          <span className="text-gray-600">
                            {formatDate(flight.arrival_date)} at {formatTime(flight.arrival_time)}
                          </span>
                        </div>
                        <div>
                          <strong>Price:</strong> ${flight.price}
                          <br />
                          <strong>Seats:</strong> {flight.available_seats}
                        </div>
                      </div>
                      {renderStopovers(flight)}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingFlight(flight)}
                      >
                        <Edit size={16} className="mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteMutation.mutate(flight.id)}
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 size={16} className="mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FlightsList;
