
import React from "react";
import { motion } from "framer-motion";
import { Star, Heart, Globe } from "lucide-react";

const MissionVision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section-container bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm card-hover"
          >
            <motion.div variants={itemVariants} className="p-4 bg-green-50 rounded-lg inline-block mb-4">
              <Star size={32} className="text-primary" />
            </motion.div>
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-tertiary-dark mb-3">Our Mission</motion.h3>
            <motion.p variants={itemVariants} className="text-tertiary mb-6">
              To create unforgettable travel experiences that connect people with extraordinary destinations, cultures, and wildlife while promoting sustainable tourism and supporting local communities.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 border-t pt-4"
            >
              <p className="text-primary font-medium">Connecting hearts with destinations</p>
            </motion.div>
          </motion.div>
          
          {/* Vision */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm card-hover"
          >
            <motion.div variants={itemVariants} className="p-4 bg-orange-50 rounded-lg inline-block mb-4">
              <Globe size={32} className="text-secondary" />
            </motion.div>
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-tertiary-dark mb-3">Our Vision</motion.h3>
            <motion.p variants={itemVariants} className="text-tertiary mb-6">
              To be the leading travel company that inspires global exploration while setting the standard for responsible tourism, cultural appreciation, and exceptional service in every destination we serve.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 border-t pt-4"
            >
              <p className="text-secondary font-medium">Broadening horizons worldwide</p>
            </motion.div>
          </motion.div>
          
          {/* Values */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-sm card-hover"
          >
            <motion.div variants={itemVariants} className="p-4 bg-green-50 rounded-lg inline-block mb-4">
              <Heart size={32} className="text-primary" />
            </motion.div>
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-tertiary-dark mb-3">Our Values</motion.h3>
            <motion.ul variants={itemVariants} className="text-tertiary space-y-2 mb-6">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Excellence in service</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Respect for cultures and environment</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Integrity in all dealings</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Innovation in travel experiences</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Community empowerment</span>
              </li>
            </motion.ul>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 border-t pt-4"
            >
              <p className="text-primary font-medium">Guided by principles that matter</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
