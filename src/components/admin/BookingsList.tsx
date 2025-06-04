
import React from "react";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Check, X, Loader2, Mail, Phone, User } from "lucide-react";

const BookingsList = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ['admin-bookings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          flights (
            plane_name,
            departure_airport_name,
            arrival_airport_name,
            departure_date,
            departure_time,
            price
          )
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const updateBookingMutation = useMutation({
    mutationFn: async ({ bookingId, status }: { bookingId: string, status: string }) => {
      const { error } = await supabase
        .from('bookings')
        .update({ booking_status: status })
        .eq('id', bookingId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-bookings'] });
      toast({
        title: "Booking Updated",
        description: "Booking status has been updated successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (time: string) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-tertiary">Loading bookings...</span>
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
          <CardTitle>Flight Bookings ({bookings?.length || 0})</CardTitle>
        </CardHeader>
        <CardContent>
          {!bookings || bookings.length === 0 ? (
            <p className="text-center text-tertiary py-8">No bookings found.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking: any) => (
                <div key={booking.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className={getStatusColor(booking.booking_status)}>
                          {booking.booking_status.toUpperCase()}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          Booked on {formatDate(booking.created_at)}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Customer Info */}
                        <div>
                          <h4 className="font-semibold text-tertiary-dark mb-2">Customer Details</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center gap-2">
                              <User size={14} className="text-gray-500" />
                              <span>{booking.customer_name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail size={14} className="text-gray-500" />
                              <span>{booking.customer_email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone size={14} className="text-gray-500" />
                              <span>{booking.customer_phone}</span>
                            </div>
                          </div>
                        </div>

                        {/* Flight Info */}
                        <div>
                          <h4 className="font-semibold text-tertiary-dark mb-2">Flight Details</h4>
                          <div className="space-y-1 text-sm">
                            <div><strong>Flight:</strong> {booking.flights?.plane_name}</div>
                            <div><strong>Route:</strong> {booking.flights?.departure_airport_name} → {booking.flights?.arrival_airport_name}</div>
                            <div><strong>Date:</strong> {formatDate(booking.flights?.departure_date)}</div>
                            <div><strong>Time:</strong> {formatTime(booking.flights?.departure_time)}</div>
                            <div><strong>Price:</strong> ${booking.flights?.price}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {booking.booking_status === 'pending' && (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateBookingMutation.mutate({ 
                            bookingId: booking.id, 
                            status: 'confirmed' 
                          })}
                          disabled={updateBookingMutation.isPending}
                          className="text-green-600 border-green-600 hover:bg-green-50"
                        >
                          <Check size={16} className="mr-1" />
                          Confirm
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateBookingMutation.mutate({ 
                            bookingId: booking.id, 
                            status: 'rejected' 
                          })}
                          disabled={updateBookingMutation.isPending}
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          <X size={16} className="mr-1" />
                          Reject
                        </Button>
                      </div>
                    )}
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

export default BookingsList;
