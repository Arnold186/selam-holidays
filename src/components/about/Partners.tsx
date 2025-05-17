
import React from "react";
import { motion } from "framer-motion";

// Partner logos could be replaced with actual partner logos
const partners = [
  { name: "National Geographic", logo: "/image.png" },
  { name: "Uganda Tourism Board", logo: "/image.png" },
  { name: "Kenya Airways", logo: "/image.png" },
  { name: "African Wildlife Foundation", logo: "/image.png" },
  { name: "TripAdvisor", logo: "/image.png" },
  { name: "RwandAir", logo: "/image.png" },
];

const Partners = () => {
  return (
    <section className="section-container bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">OUR NETWORK</span>
          <h2 className="section-title">Trusted Partners</h2>
          <p className="max-w-3xl mx-auto text-tertiary mt-4">
            We collaborate with leading organizations in travel and conservation to provide the best experiences while supporting sustainable tourism.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm h-24"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
