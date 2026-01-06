import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Star, Clock, MapPin, User, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { tourService, Tour } from "@/services/tourService";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

const FeaturedTours = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTours = async () => {
      const data = await tourService.getFeaturedTours();
      // Take only top 3 or 6 for the home page
      setTours(data.slice(0, 6));
      setLoading(false);
    };

    loadTours();
  }, []);

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
    <section className="section-container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">EXPLORE</span>
          <h2 className="section-title">Our Popular Tours</h2>
          <p className="max-w-3xl mx-auto text-tertiary mt-4">
            Discover our collection of handcrafted tours, designed to provide authentic experiences and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredId(tour.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="overflow-hidden card-hover h-full flex flex-col">
                <div className="relative overflow-hidden h-64 shrink-0">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80'; // Fallback image
                    }}
                  />
                  {tour.featured && (
                    <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-white rounded-full px-3 py-1 flex items-center">
                    <Star className="text-yellow-400 fill-yellow-400 h-4 w-4 mr-1" />
                    <span className="text-sm font-semibold">{tour.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-tertiary-dark line-clamp-2">{tour.title}</h3>
                    <div className="text-primary font-bold whitespace-nowrap ml-2">
                      ${tour.price}
                      <span className="text-xs text-tertiary font-normal">/person</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-3 text-tertiary">
                    <MapPin size={16} className="text-primary mr-1 shrink-0" />
                    <span className="text-sm truncate">{tour.location}</span>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm text-tertiary mb-4">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{tour.groupSize}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{tour.season}</span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-primary-dark text-white"
                      onClick={() => navigate(`/tours/${tour.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => navigate('/tours')}
          >
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
