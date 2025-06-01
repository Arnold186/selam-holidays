import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

interface FlightFormProps {
  onSuccess?: () => void;
  flight?: any;
}

const FlightForm = ({ onSuccess, flight }: FlightFormProps) => {
  const [formData, setFormData] = useState({
    plane_name: flight?.plane_name || "",
    flight_date: flight?.flight_date || "",
    departure_time: flight?.departure_time || "",
    arrival_time: flight?.arrival_time || "",
    departure_airport_name: flight?.departure_airport_name || "",
    arrival_airport_name: flight?.arrival_airport_name || "",
    stopover_airport_name: flight?.stopover_airport_name || "",
    stopover_departure_time: flight?.stopover_departure_time || "",
    stopover_arrival_time: flight?.stopover_arrival_time || "",
    price: flight?.price || "",
    available_seats: flight?.available_seats || "",
    status: flight?.status || "active"
  });

  const [hasStopover, setHasStopover] = useState(!!flight?.stopover_airport_name);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const payload = {
        ...data,
        price: parseFloat(data.price),
        available_seats: parseInt(data.available_seats),
        stopover_airport_name: hasStopover ? data.stopover_airport_name : null,
        stopover_departure_time: hasStopover ? data.stopover_departure_time : null,
        stopover_arrival_time: hasStopover ? data.stopover_arrival_time : null,
      };

      if (flight?.id) {
        const { error } = await supabase
          .from('flights')
          .update(payload)
          .eq('id', flight.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('flights')
          .insert([payload]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['flights'] });
      queryClient.invalidateQueries({ queryKey: ['admin-flights'] });
      toast({
        title: flight?.id ? "Flight updated" : "Flight created",
        description: `Flight has been ${flight?.id ? 'updated' : 'created'} successfully`,
      });
      onSuccess?.();
      if (!flight?.id) {
        setFormData({
          plane_name: "",
          flight_date: "",
          departure_time: "",
          arrival_time: "",
          departure_airport_name: "",
          arrival_airport_name: "",
          stopover_airport_name: "",
          stopover_departure_time: "",
          stopover_arrival_time: "",
          price: "",
          available_seats: "",
          status: "active"
        });
      }
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStopoverChange = (checked: boolean | "indeterminate") => {
    setHasStopover(checked === true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>{flight?.id ? 'Edit Flight' : 'Add New Flight'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="plane_name">Plane Name</Label>
                <Input
                  id="plane_name"
                  value={formData.plane_name}
                  onChange={(e) => handleInputChange('plane_name', e.target.value)}
                  required
                  placeholder="e.g., Boeing 737"
                />
              </div>
              <div>
                <Label htmlFor="flight_date">Flight Date</Label>
                <Input
                  id="flight_date"
                  type="date"
                  value={formData.flight_date}
                  onChange={(e) => handleInputChange('flight_date', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="departure_time">Departure Time</Label>
                <Input
                  id="departure_time"
                  type="time"
                  value={formData.departure_time}
                  onChange={(e) => handleInputChange('departure_time', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="arrival_time">Arrival Time</Label>
                <Input
                  id="arrival_time"
                  type="time"
                  value={formData.arrival_time}
                  onChange={(e) => handleInputChange('arrival_time', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="departure_airport_name">Departure Airport</Label>
                <Input
                  id="departure_airport_name"
                  value={formData.departure_airport_name}
                  onChange={(e) => handleInputChange('departure_airport_name', e.target.value)}
                  required
                  placeholder="e.g., JFK International"
                />
              </div>
              <div>
                <Label htmlFor="arrival_airport_name">Arrival Airport</Label>
                <Input
                  id="arrival_airport_name"
                  value={formData.arrival_airport_name}
                  onChange={(e) => handleInputChange('arrival_airport_name', e.target.value)}
                  required
                  placeholder="e.g., LAX International"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="has_stopover"
                checked={hasStopover}
                onCheckedChange={handleStopoverChange}
              />
              <Label htmlFor="has_stopover">This flight has a stopover</Label>
            </div>

            {hasStopover && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <Label htmlFor="stopover_airport_name">Stopover Airport</Label>
                  <Input
                    id="stopover_airport_name"
                    value={formData.stopover_airport_name}
                    onChange={(e) => handleInputChange('stopover_airport_name', e.target.value)}
                    placeholder="e.g., ORD International"
                  />
                </div>
                <div>
                  <Label htmlFor="stopover_arrival_time">Stopover Arrival</Label>
                  <Input
                    id="stopover_arrival_time"
                    type="time"
                    value={formData.stopover_arrival_time}
                    onChange={(e) => handleInputChange('stopover_arrival_time', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="stopover_departure_time">Stopover Departure</Label>
                  <Input
                    id="stopover_departure_time"
                    type="time"
                    value={formData.stopover_departure_time}
                    onChange={(e) => handleInputChange('stopover_departure_time', e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  required
                  placeholder="299.99"
                />
              </div>
              <div>
                <Label htmlFor="available_seats">Available Seats</Label>
                <Input
                  id="available_seats"
                  type="number"
                  value={formData.available_seats}
                  onChange={(e) => handleInputChange('available_seats', e.target.value)}
                  required
                  placeholder="150"
                />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                    <SelectItem value="delayed">Delayed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {mutation.isPending ? "Saving..." : flight?.id ? "Update Flight" : "Create Flight"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FlightForm;
