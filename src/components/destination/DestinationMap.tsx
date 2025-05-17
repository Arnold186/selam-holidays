
import React, { useState } from "react";
import { motion } from "framer-motion";

const destinations = [
  { id: "uganda", name: "Uganda", position: { top: "40%", left: "45%" } },
  { id: "rwanda", name: "Rwanda", position: { top: "45%", left: "47%" } },
  { id: "kenya", name: "Kenya", position: { top: "42%", left: "52%" } },
  { id: "tanzania", name: "Tanzania", position: { top: "50%", left: "50%" } },
  { id: "dubai", name: "Dubai", position: { top: "30%", left: "70%" } },
  { id: "turkey", name: "Turkey", position: { top: "20%", left: "60%" } },
  { id: "egypt", name: "Egypt", position: { top: "25%", left: "55%" } },
];

const DestinationMap = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  return (
    <section className="section-container bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">INTERACTIVE MAP</span>
          <h2 className="section-title">Find Your Next Adventure</h2>
          <p className="max-w-3xl mx-auto text-tertiary mt-4">
            Explore our destinations on the map and discover the perfect location for your next journey.
          </p>
        </div>
        
        <div className="relative h-[500px] bg-blue-50 rounded-lg overflow-hidden">
          {/* Map Image Background */}
          <img 
            src="/image(15).jpg" 
            alt="World map" 
            className="w-full h-full object-cover"
          />
          
          {/* Destination Markers */}
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                top: destination.position.top,
                left: destination.position.left,
                transform: "translate(-50%, -50%)",
              }}
              className="cursor-pointer"
              onMouseEnter={() => setSelectedDestination(destination.id)}
              onMouseLeave={() => setSelectedDestination(null)}
            >
              <motion.div 
                className={`rounded-full ${
                  selectedDestination === destination.id ? "bg-secondary" : "bg-primary"
                } h-6 w-6 flex items-center justify-center p-1`}
                animate={{ 
                  scale: selectedDestination === destination.id ? [1, 1.2, 1] : 1
                }}
                transition={{ repeat: selectedDestination === destination.id ? Infinity : 0, duration: 1.5 }}
              >
                <div className="h-2 w-2 bg-white rounded-full"></div>
              </motion.div>
              
              {/* Destination Name Tooltip */}
              <motion.div 
                className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 translate-y-full bg-white text-tertiary-dark px-3 py-1 rounded text-sm shadow-md whitespace-nowrap z-10"
                initial={{ opacity: 0, y: -5 }}
                animate={{ 
                  opacity: selectedDestination === destination.id ? 1 : 0,
                  y: selectedDestination === destination.id ? 0 : -5
                }}
                transition={{ duration: 0.3 }}
              >
                {destination.name}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationMap;
