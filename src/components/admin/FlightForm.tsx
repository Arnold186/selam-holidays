
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
import { Plus, Minus } from "lucide-react";

interface FlightFormProps {
  onSuccess?: () => void;
  flight?: any;
}

const FlightForm = ({ onSuccess, flight }: FlightFormProps) => {
  const [formData, setFormData] = useState({
    plane_name: flight?.plane_name || "",
    flight_date: flight?.flight_date || "",
    departure_date: flight?.departure_date || "",
    arrival_date: flight?.arrival_date || "",
    departure_time: flight?.departure_time || "",
    arrival_time: flight?.arrival_time || "",
    departure_airport_name: flight?.departure_airport_name || "",
    arrival_airport_name: flight?.arrival_airport_name || "",
    price: flight?.price || "",
    available_seats: flight?.available_seats || "",
    status: flight?.status || "active"
  });

  const [stopovers, setStopovers] = useState([
    {
      airport_name: flight?.stopover_1_airport_name || "",
      arrival_time: flight?.stopover_1_arrival_time || "",
      departure_time: flight?.stopover_1_departure_time || "",
      date: flight?.stopover_1_date || ""
    },
    {
      airport_name: flight?.stopover_2_airport_name || "",
      arrival_time: flight?.stopover_2_arrival_time || "",
      departure_time: flight?.stopover_2_departure_time || "",
      date: flight?.stopover_2_date || ""
    },
    {
      airport_name: flight?.stopover_3_airport_name || "",
      arrival_time: flight?.stopover_3_arrival_time || "",
      departure_time: flight?.stopover_3_departure_time || "",
      date: flight?.stopover_3_date || ""
    },
    {
      airport_name: flight?.stopover_4_airport_name || "",
      arrival_time: flight?.stopover_4_arrival_time || "",
      departure_time: flight?.stopover_4_departure_time || "",
      date: flight?.stopover_4_date || ""
    }
  ]);

  const [activeStopoverCount, setActiveStopoverCount] = useState(() => {
    if (flight?.stopover_4_airport_name) return 4;
    if (flight?.stopover_3_airport_name) return 3;
    if (flight?.stopover_2_airport_name) return 2;
    if (flight?.stopover_1_airport_name) return 1;
    return 0;
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const payload = {
        ...data,
        price: parseFloat(data.price),
        available_seats: parseInt(data.available_seats),
        stopover_1_airport_name: activeStopoverCount >= 1 ? stopovers[0].airport_name || null : null,
        stopover_1_arrival_time: activeStopoverCount >= 1 ? stopovers[0].arrival_time || null : null,
        stopover_1_departure_time: activeStopoverCount >= 1 ? stopovers[0].departure_time || null : null,
        stopover_1_date: activeStopoverCount >= 1 ? stopovers[0].date || null : null,
        stopover_2_airport_name: activeStopoverCount >= 2 ? stopovers[1].airport_name || null : null,
        stopover_2_arrival_time: activeStopoverCount >= 2 ? stopovers[1].arrival_time || null : null,
        stopover_2_departure_time: activeStopoverCount >= 2 ? stopovers[1].departure_time || null : null,
        stopover_2_date: activeStopoverCount >= 2 ? stopovers[1].date || null : null,
        stopover_3_airport_name: activeStopoverCount >= 3 ? stopovers[2].airport_name || null : null,
        stopover_3_arrival_time: activeStopoverCount >= 3 ? stopovers[2].arrival_time || null : null,
        stopover_3_departure_time: activeStopoverCount >= 3 ? stopovers[2].departure_time || null : null,
        stopover_3_date: activeStopoverCount >= 3 ? stopovers[2].date || null : null,
        stopover_4_airport_name: activeStopoverCount >= 4 ? stopovers[3].airport_name || null : null,
        stopover_4_arrival_time: activeStopoverCount >= 4 ? stopovers[3].arrival_time || null : null,
        stopover_4_departure_time: activeStopoverCount >= 4 ? stopovers[3].departure_time || null : null,
        stopover_4_date: activeStopoverCount >= 4 ? stopovers[3].date || null : null,
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
          departure_date: "",
          arrival_date: "",
          departure_time: "",
          arrival_time: "",
          departure_airport_name: "",
          arrival_airport_name: "",
          price: "",
          available_seats: "",
          status: "active"
        });
        setStopovers([
          { airport_name: "", arrival_time: "", departure_time: "", date: "" },
          { airport_name: "", arrival_time: "", departure_time: "", date: "" },
          { airport_name: "", arrival_time: "", departure_time: "", date: "" },
          { airport_name: "", arrival_time: "", departure_time: "", date: "" }
        ]);
        setActiveStopoverCount(0);
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

  const handleStopoverChange = (index: number, field: string, value: string) => {
    setStopovers(prev => prev.map((stopover, i) => 
      i === index ? { ...stopover, [field]: value } : stopover
    ));
  };

  const addStopover = () => {
    if (activeStopoverCount < 4) {
      setActiveStopoverCount(prev => prev + 1);
    }
  };

  const removeStopover = () => {
    if (activeStopoverCount > 0) {
      setActiveStopoverCount(prev => prev - 1);
      // Clear the data for the removed stopover
      setStopovers(prev => prev.map((stopover, i) => 
        i === activeStopoverCount - 1 
          ? { airport_name: "", arrival_time: "", departure_time: "", date: "" }
          : stopover
      ));
    }
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
                <Label htmlFor="flight_date">Flight Date (Reference)</Label>
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
                <Label htmlFor="departure_date">Departure Date</Label>
                <Input
                  id="departure_date"
                  type="date"
                  value={formData.departure_date}
                  onChange={(e) => handleInputChange('departure_date', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="arrival_date">Arrival Date</Label>
                <Input
                  id="arrival_date"
                  type="date"
                  value={formData.arrival_date}
                  onChange={(e) => handleInputChange('arrival_date', e.target.value)}
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

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Stopovers ({activeStopoverCount}/4)</h3>
                <div className="flex gap-2">
                  {activeStopoverCount < 4 && (
                    <Button type="button" variant="outline" size="sm" onClick={addStopover}>
                      <Plus size={16} className="mr-1" />
                      Add Stopover
                    </Button>
                  )}
                  {activeStopoverCount > 0 && (
                    <Button type="button" variant="outline" size="sm" onClick={removeStopover}>
                      <Minus size={16} className="mr-1" />
                      Remove Stopover
                    </Button>
                  )}
                </div>
              </div>

              {Array.from({ length: activeStopoverCount }, (_, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-4">
                  <h4 className="font-medium">Stopover {index + 1}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor={`stopover_${index}_airport`}>Airport Name</Label>
                      <Input
                        id={`stopover_${index}_airport`}
                        value={stopovers[index].airport_name}
                        onChange={(e) => handleStopoverChange(index, 'airport_name', e.target.value)}
                        placeholder="e.g., ORD International"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`stopover_${index}_date`}>Stopover Date</Label>
                      <Input
                        id={`stopover_${index}_date`}
                        type="date"
                        value={stopovers[index].date}
                        onChange={(e) => handleStopoverChange(index, 'date', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`stopover_${index}_arrival`}>Arrival Time</Label>
                      <Input
                        id={`stopover_${index}_arrival`}
                        type="time"
                        value={stopovers[index].arrival_time}
                        onChange={(e) => handleStopoverChange(index, 'arrival_time', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`stopover_${index}_departure`}>Departure Time</Label>
                      <Input
                        id={`stopover_${index}_departure`}
                        type="time"
                        value={stopovers[index].departure_time}
                        onChange={(e) => handleStopoverChange(index, 'departure_time', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
