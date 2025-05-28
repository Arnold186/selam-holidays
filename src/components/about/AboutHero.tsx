
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] text-white"
      style={{ backgroundImage: "url('/image (5).png')" }}
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
            <div className="bg-sky-700 inline-block px-6 py-2 rounded-full mb-3 w-fit">
              <h2 className="text-white font-medium">About Us</h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">Our Story of Exploration & Discovery</h1>
            
            <p className="text-lg opacity-90 max-w-2xl">
              We're passionate about creating authentic travel experiences that connect people with extraordinary destinations, cultures, and wildlife.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
