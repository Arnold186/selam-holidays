
import React from "react";
import { motion } from "framer-motion";

const DestinationHero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] text-white"
      style={{ backgroundImage: "url('/image (10).png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container-custom relative z-10 h-full">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-secondary inline-block px-6 py-2 rounded-full mb-3 w-fit">
              <h2 className="text-white font-medium">Destinations</h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">Explore Breathtaking Destinations</h1>
            
            <p className="text-lg opacity-90 max-w-2xl">
              Discover the most captivating and scenic destinations across East Africa and beyond, each offering unique experiences and unforgettable memories.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DestinationHero;
