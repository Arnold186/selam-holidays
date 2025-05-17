
import React from "react";
import { motion } from "framer-motion";

const ContactMap = () => {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="text-center mb-8">
          <span className="section-subtitle">FIND US</span>
          <h2 className="section-title">Our Location</h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden shadow-md h-[400px]"
        >
          {/* Replace with actual Google Maps embed */}
          <div className="bg-gray-200 w-full h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-tertiary mb-4">Map placeholder - In a real implementation, this would be a Google Maps iframe with the actual office location.</p>
              <p className="text-primary font-medium">Kampala Cube Building, Kampala, Uganda</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
