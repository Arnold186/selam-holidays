
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, User, Calendar, X, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { tourService, Tour } from "@/services/tourService";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const ToursGrid = () => {
    const [tours, setTours] = useState<Tour[]>([]);
    const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    // Filter States
    const [locationFilter, setLocationFilter] = useState(searchParams.get("location") || "all");
    const [typeFilter, setTypeFilter] = useState(searchParams.get("type") || "all");
    const [durationFilter, setDurationFilter] = useState(searchParams.get("duration") || "all");
    const [sortBy, setSortBy] = useState("recommended");

    // Fetch Tours
    useEffect(() => {
        const loadTours = async () => {
            setLoading(true);
            const data = await tourService.getTours();
            setTours(data);
            setLoading(false);
        };
        loadTours();
    }, []);

    // Filter Logic
    useEffect(() => {
        let result = [...tours];

        // 1. Location Filter
        if (locationFilter && locationFilter !== "all") {
            result = result.filter(tour =>
                tour.location.toLowerCase().includes(locationFilter.toLowerCase())
            );
        }

        // 2. Type/Category Filter
        if (typeFilter && typeFilter !== "all") {
            result = result.filter(tour =>
                tour.category.toLowerCase().includes(typeFilter.toLowerCase())
            );
        }

        // 3. Duration Filter
        if (durationFilter && durationFilter !== "all") {
            result = result.filter(tour => {
                const days = parseInt(tour.duration || "0");
                if (durationFilter === "1") return days === 1;
                if (durationFilter === "2-3") return days >= 2 && days <= 3;
                if (durationFilter === "4-7") return days >= 4 && days <= 7;
                if (durationFilter === "8+") return days >= 8;
                return true;
            });
        }

        // 4. Sorting
        if (sortBy === "price-low") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-high") {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === "duration-short") {
            result.sort((a, b) => parseInt(a.duration || "0") - parseInt(b.duration || "0"));
        } else if (sortBy === "duration-long") {
            result.sort((a, b) => parseInt(b.duration || "0") - parseInt(a.duration || "0"));
        }

        setFilteredTours(result);
    }, [tours, locationFilter, typeFilter, durationFilter, sortBy]);

    // Update URL Params when filters change (optional, but good for shareable links)
    const updateFilters = (key: string, value: string) => {
        const newParams = new URLSearchParams(searchParams);
        if (value && value !== "all") {
            newParams.set(key, value);
        } else {
            newParams.delete(key);
        }
        setSearchParams(newParams);

        // Update local state based on key
        if (key === "location") setLocationFilter(value);
        if (key === "type") setTypeFilter(value);
        if (key === "duration") setDurationFilter(value);
    };

    const clearFilters = () => {
        setLocationFilter("all");
        setTypeFilter("all");
        setDurationFilter("all");
        setSortBy("recommended");
        setSearchParams({});
    };

    if (loading) {
        return (
            <section className="section-container">
                <div className="container-custom text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-tertiary">Loading tours...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="section-container relative">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <span className="section-subtitle">ALL TOURS</span>
                    <h2 className="section-title">Explore All Our Packages</h2>
                    <p className="text-gray-600 mt-2">Found {filteredTours.length} tours for you</p>
                </div>

                {/* Filters Bar */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {/* Location Filter */}
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Location</label>
                            <Select value={locationFilter} onValueChange={(val) => updateFilters("location", val)}>
                                <SelectTrigger className="h-10 bg-gray-50/50">
                                    <SelectValue placeholder="All Locations" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Locations</SelectItem>
                                    <SelectItem value="rwanda">Rwanda</SelectItem>
                                    <SelectItem value="uganda">Uganda</SelectItem>
                                    <SelectItem value="kenya">Kenya</SelectItem>
                                    <SelectItem value="tanzania">Tanzania</SelectItem>
                                    <SelectItem value="dubai">Dubai</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Type Filter */}
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Tour Type</label>
                            <Select value={typeFilter} onValueChange={(val) => updateFilters("type", val)}>
                                <SelectTrigger className="h-10 bg-gray-50/50">
                                    <SelectValue placeholder="All Types" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    <SelectItem value="gorilla">Gorilla Trekking</SelectItem>
                                    <SelectItem value="safari">Safari</SelectItem>
                                    <SelectItem value="cultural">Cultural</SelectItem>
                                    <SelectItem value="holiday">Holiday</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Duration Filter */}
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Duration</label>
                            <Select value={durationFilter} onValueChange={(val) => updateFilters("duration", val)}>
                                <SelectTrigger className="h-10 bg-gray-50/50">
                                    <SelectValue placeholder="Any Duration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Any Duration</SelectItem>
                                    <SelectItem value="1">1 Day</SelectItem>
                                    <SelectItem value="2-3">2-3 Days</SelectItem>
                                    <SelectItem value="4-7">4-7 Days</SelectItem>
                                    <SelectItem value="8+">8+ Days</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Sort By */}
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-500 uppercase">Sort By</label>
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="h-10 bg-gray-50/50">
                                    <SelectValue placeholder="Recommended" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="recommended">Recommended</SelectItem>
                                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                                    <SelectItem value="duration-short">Duration: Shortest</SelectItem>
                                    <SelectItem value="duration-long">Duration: Longest</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Clear Button */}
                        <div className="flex items-end">
                            <Button
                                variant="outline"
                                className="w-full h-10 border-dashed text-gray-500 hover:text-primary hover:border-primary transition-colors"
                                onClick={clearFilters}
                            >
                                <X size={16} className="mr-2" /> Clear Filters
                            </Button>
                        </div>
                    </div>
                </div>

                {filteredTours.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTours.map((tour) => (
                            <motion.div
                                key={tour.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                onMouseEnter={() => setHoveredId(tour.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <Card className="overflow-hidden card-hover h-full flex flex-col group border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <div className="relative overflow-hidden h-64 shrink-0">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                        <img
                                            src={tour.image}
                                            alt={tour.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80';
                                            }}
                                        />
                                        {tour.featured && (
                                            <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-md">
                                                Featured
                                            </div>
                                        )}
                                        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center z-20 shadow-sm">
                                            <Star className="text-yellow-400 fill-yellow-400 h-3.5 w-3.5 mr-1" />
                                            <span className="text-sm font-bold text-gray-800">{tour.rating || 5.0}</span>
                                        </div>
                                    </div>
                                    <CardContent className="p-6 flex flex-col flex-grow bg-white">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">{tour.title}</h3>
                                        </div>
                                        <div className="flex items-center mb-4 text-gray-500">
                                            <MapPin size={16} className="text-primary mr-2 shrink-0" />
                                            <span className="text-sm font-medium truncate">{tour.location}</span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 mb-6">
                                            <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                                <Clock size={14} className="mr-2 text-primary" />
                                                <span>{tour.duration}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                                                <User size={14} className="mr-2 text-primary" />
                                                <span>{tour.groupSize}</span>
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase font-semibold">From</p>
                                                <p className="text-2xl font-bold text-primary">${tour.price}</p>
                                            </div>
                                            <Button
                                                className="rounded-full px-6 bg-gray-900 hover:bg-primary transition-colors"
                                                onClick={() => navigate(`/tours/${tour.id}`)}
                                            >
                                                Details
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                        <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">No tours match your search</h3>
                        <p className="text-gray-500 mt-2 mb-6">Try adjusting your filters or search criteria</p>
                        <Button onClick={clearFilters} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                            View All Tours
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ToursGrid;
