
import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, DollarSign, Users, Calendar } from "lucide-react";

const AdminStats = () => {
  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const { data: flights, error } = await supabase
        .from('flights')
        .select('*');
      
      if (error) throw error;

      const totalFlights = flights.length;
      const activeFlights = flights.filter(f => f.status === 'active').length;
      const totalRevenue = flights.reduce((sum, f) => sum + parseFloat(f.price), 0);
      const totalSeats = flights.reduce((sum, f) => sum + f.available_seats, 0);

      return {
        totalFlights,
        activeFlights,
        totalRevenue,
        totalSeats
      };
    }
  });

  const statCards = [
    {
      title: "Total Flights",
      value: stats?.totalFlights || 0,
      icon: Plane,
      color: "text-blue-600"
    },
    {
      title: "Active Flights",
      value: stats?.activeFlights || 0,
      icon: Calendar,
      color: "text-green-600"
    },
    {
      title: "Total Revenue",
      value: `$${stats?.totalRevenue?.toLocaleString() || 0}`,
      icon: DollarSign,
      color: "text-yellow-600"
    },
    {
      title: "Available Seats",
      value: stats?.totalSeats || 0,
      icon: Users,
      color: "text-purple-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-tertiary-dark">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-tertiary">
                  {stat.title}
                </CardTitle>
                <stat.icon size={20} className={stat.color} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-tertiary-dark">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-tertiary">
            Use the tabs above to manage your flights or add new ones. The system provides real-time updates 
            to users viewing the flights page when you make changes.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AdminStats;
