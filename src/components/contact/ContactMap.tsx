
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
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Lloyds+Mall%2C+Entebbe+Road%2C+Kampala%2C+Uganda&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Selam Holidays Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
