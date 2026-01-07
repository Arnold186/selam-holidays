import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const destinations = [
  { name: "Uganda", image: "Kampala.jpg", size: "lg" },
  { name: "Rwanda", image: "Rwanda.jpg", size: "sm" },
  { name: "Kenya", image: "Nairobi.jpg", size: "sm" },
  { name: "Tanzania", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", size: "sm" },
  { name: "Dubai", image: "Dubai.jpeg", size: "sm" },
];

const DestinationSection = () => {
  return (
    <section className="section-container bg-slate-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-sm font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">Top Destinations</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">Explore Popular Places</h2>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2">
            View All Destinations <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">
          {/* Main Large Item */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl h-[300px] md:h-full cursor-pointer"
          >
            <img
              src={destinations[0].image}
              alt={destinations[0].name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-1 mb-2 text-white/80 text-sm">
                <MapPin size={14} /> Africa
              </div>
              <h3 className="text-3xl font-bold">{destinations[0].name}</h3>
              <p className="text-white/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">The pearl of Africa</p>
            </div>
          </motion.div>

          {/* Smaller Grid Items */}
          <div className="md:col-span-2 md:row-span-2 grid grid-cols-2 gap-4">
            {destinations.slice(1).map((dest, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-3xl h-[200px] md:h-auto cursor-pointer"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{dest.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button className="w-full" size="lg">View All Destinations</Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
