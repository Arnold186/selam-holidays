
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Ultimate Uganda Safari",
    image: "/image (3).png",
    duration: "7 days",
    startingPrice: 1800,
    destination: "Uganda",
  },
  {
    id: 2,
    title: "Rwanda Gorilla Experience",
    image: "/Rwanda.jpg",
    duration: "5 days",
    startingPrice: 2100,
    destination: "Rwanda",
  },
  {
    id: 3,
    title: "Kenya Wildlife Safari",
    image: "/Nairobi.jpg",
    duration: "8 days",
    startingPrice: 1950,
    destination: "Kenya",
  },
  {
    id: 4,
    title: "Dubai City Experience",
    image: "/Dubai.jpeg",
    duration: "6 days",
    startingPrice: 1650,
    destination: "Dubai",
  },
];

const RelatedTours = () => {
  return (
    <section className="section-container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">FEATURED PACKAGES</span>
          <h2 className="section-title">Popular Tours by Destination</h2>
          <p className="max-w-3xl mx-auto text-tertiary mt-4">
            Discover our most beloved tours in each destination, carefully crafted to provide the best experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm card-hover h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                  <div className="p-3 text-white">
                    <h3 className="text-lg font-semibold">{tour.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center text-sm text-tertiary">
                    <MapPin size={14} className="text-primary mr-1" />
                    <span>{tour.destination}</span>
                  </div>
                  <div className="flex items-center text-sm text-tertiary">
                    <Calendar size={14} className="mr-1" />
                    <span>{tour.duration}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-tertiary">Starting from</span>
                    <p className="text-primary font-bold">${tour.startingPrice}</p>
                  </div>
                  
                  <button className="flex items-center text-sm font-medium text-tertiary-dark hover:text-primary transition-colors">
                    View Details
                    <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
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

export default RelatedTours;
