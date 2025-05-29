
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, User, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const tours = [
  {
    id: 1,
    title: "Gorilla Trekking Experience",
    location: "Bwindi Forest, Uganda",
    image: "/image (11).png",
    duration: "3 days",
    groupSize: "2-8 people",
    season: "Year-round",
    price: 1200,
    rating: 4.9,
    category: "safari",
    featured: false,
  },
  {
    id: 2,
    title: "Serengeti Migration Safari",
    location: "Tanzania",
    image: "/image (3).png",
    duration: "7 days",
    groupSize: "4-12 people",
    season: "Jul-Oct",
    price: 2300,
    rating: 4.8,
    category: "safari",
    featured: false,
  },
  {
    id: 3,
    title: "Maasai Cultural Experience",
    location: "Maasai Mara, Kenya",
    image: "/image(17).jpg",
    duration: "4 days",
    groupSize: "2-10 people",
    season: "Year-round",
    price: 1100,
    rating: 4.7,
    category: "cultural",
    featured: false,
  },
  {
    id: 4,
    title: "Rwanda Historical Tour",
    location: "Kigali, Rwanda",
    image: "/image(20).jpg",
    duration: "5 days",
    groupSize: "2-10 people",
    season: "Year-round",
    price: 1400,
    rating: 4.8,
    category: "cultural",
    featured: false,
  },
  {
    id: 5,
    title: "Murchison Falls Adventure",
    location: "Uganda",
    image: "/image(19).jpeg",
    duration: "4 days",
    groupSize: "4-12 people",
    season: "Dec-Mar",
    price: 1250,
    rating: 4.6,
    category: "adventure",
    featured: false,
  },
  {
    id: 6,
    title: "Dubai City Break",
    location: "Dubai, UAE",
    image: "/Dubai.jpeg",
    duration: "5 days",
    groupSize: "2-10 people",
    season: "Oct-Apr",
    price: 1800,
    rating: 4.9,
    category: "holiday",
    featured: false,
  },
];

const FeaturedTours = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
              <Card className="overflow-hidden card-hover h-full">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
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
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-tertiary-dark">{tour.title}</h3>
                    <div className="text-primary font-bold">
                      ${tour.price}
                      <span className="text-xs text-tertiary font-normal">/person</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-3 text-tertiary">
                    <MapPin size={16} className="text-primary mr-1" />
                    <span className="text-sm">{tour.location}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="flex justify-between text-sm text-tertiary">
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
                  </div>
                  <motion.button
                    className="w-full mt-4 btn-primary"
                    initial={{ opacity: 0.9 }}
                    animate={{ 
                      opacity: hoveredId === tour.id ? 1 : 0.9,
                      scale: hoveredId === tour.id ? 1.02 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    View Details
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Tours
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
