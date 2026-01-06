
import React, { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { LogOut, MapPin, Plus, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TourForm from "./TourForm";
import ToursList from "./ToursList";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("tours");
  const [editingTourId, setEditingTourId] = useState<string | null>(null);

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate("/auth");
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <MapPin size={24} className="text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-tertiary-dark">Tour Management</h1>

            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={(val) => { setActiveTab(val); setEditingTourId(null); }}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="tours" className="flex items-center gap-2">
              <LayoutDashboard size={16} />
              Manage Tours
            </TabsTrigger>
            <TabsTrigger value="add-tour" className="flex items-center gap-2">
              <Plus size={16} />
              {editingTourId ? 'Edit Tour' : 'Add Tour'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tours">
            <ToursList onEdit={(id) => {
              setEditingTourId(id);
              setActiveTab("add-tour");
            }} />
          </TabsContent>

          <TabsContent value="add-tour">
            <TourForm
              tourId={editingTourId}
              onSuccess={() => {
                setActiveTab("tours");
                setEditingTourId(null);
              }}
              onCancel={() => {
                setActiveTab("tours");
                setEditingTourId(null);
              }}
            />
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
};

export default AdminDashboard;
