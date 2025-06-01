
import React from "react";
import { motion } from "framer-motion";
import { Plane, Clock, MapPin } from "lucide-react";

const FlightsHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-700 to-primary min-h-[60vh] flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container-custom relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
              <Plane size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Flight
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover amazing destinations with our carefully selected flight options
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>Real-time Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Multiple Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane size={20} />
              <span>Best Prices</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlightsHero;
