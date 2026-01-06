
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Edit, Trash2, MapPin, Users, Calendar, DollarSign } from "lucide-react";
import { tourService, Tour } from "@/services/tourService";
import { Switch } from "@/components/ui/switch";

interface ToursListProps {
    onEdit: (id: string) => void;
}

const ToursList = ({ onEdit }: ToursListProps) => {
    const { toast } = useToast();
    const [tours, setTours] = useState<Tour[]>([]);

    const loadTours = async () => {
        const data = await tourService.getTours();
        setTours(data);
    };

    useEffect(() => {
        loadTours();
    }, []);

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this tour?")) {
            await tourService.deleteTour(id);
            toast({
                title: "Tour Deleted",
                description: "The tour has been removed.",
            });
            loadTours();
        }
    };

    const handleToggleFeatured = async (id: string, featured: boolean) => {
        await tourService.updateTourStatus(id, { featured });
        setTours(tours.map(t => t.id === id ? { ...t, featured } : t));
        toast({
            title: featured ? "Added to Featured" : "Removed from Featured",
            description: featured ? "Tour will appear on home page (if top rated)" : "Tour removed from home page",
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border">
                <div>
                    <h3 className="font-bold text-lg">Your Tours</h3>
                    <p className="text-gray-500 text-sm">Manage your catalog</p>
                </div>
                <div className="text-right">
                    <div className="font-bold text-2xl text-primary">
                        {tours.filter(t => t.featured).length}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Featured</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.length === 0 ? (
                    <div className="col-span-full text-center py-12 text-gray-500">
                        No tours found. Create one to get started.
                    </div>
                ) : (
                    tours.map((tour) => (
                        <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48 bg-gray-200">
                                {tour.image ? (
                                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        No Image
                                    </div>
                                )}
                                {tour.featured && (
                                    <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                                        Featured
                                    </div>
                                )}
                                <div className="absolute top-2 left-2 bg-primary/90 text-white text-xs px-2 py-1 rounded-full capitalize">
                                    {tour.category}
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg leading-tight">{tour.title}</h3>
                                </div>

                                <div className="space-y-2 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} />
                                        <span>{tour.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users size={14} />
                                        <span>{tour.groupSize}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} />
                                        <span>{tour.season || 'Year-round'}</span>
                                    </div>
                                    <div className="flex items-center gap-2 font-semibold text-primary">
                                        <DollarSign size={14} />
                                        <span>${tour.price}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex-1"
                                        onClick={() => onEdit(tour.id)}
                                    >
                                        <Edit size={14} className="mr-2" />
                                        Edit
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="flex-1"
                                        onClick={() => handleDelete(tour.id)}
                                    >
                                        <Trash2 size={14} className="mr-2" />
                                        Delete
                                    </Button>
                                </div>
                                <div className="mt-4 flex items-center justify-between pt-2 border-t text-sm">
                                    <span className="text-gray-600">Featured on Home</span>
                                    <Switch
                                        checked={tour.featured}
                                        onCheckedChange={(checked) => handleToggleFeatured(tour.id, checked)}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </motion.div>
    );
};

export default ToursList;
