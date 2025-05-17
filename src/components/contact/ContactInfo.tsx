
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full"
    >
      <div className="bg-white rounded-lg shadow-md p-8 h-full">
        <h2 className="text-2xl font-bold text-tertiary-dark mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="flex items-start">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <MapPin size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-tertiary-dark mb-1">Office Address</h3>
              <p className="text-tertiary">
                Kampala Cube Building<br />
                Kampala, Uganda
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-start">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <Phone size={20} className="text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-tertiary-dark mb-1">Phone Number</h3>
              <p className="text-tertiary">+256 762 283203</p>
              <p className="text-tertiary">+256 701 759492</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-start">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Mail size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-tertiary-dark mb-1">Email Address</h3>
              <p className="text-tertiary">selamholidaysmug@gmail.com</p>
              <p className="text-tertiary">bookings@selamholidays.com</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-start">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <Clock size={20} className="text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-tertiary-dark mb-1">Working Hours</h3>
              <p className="text-tertiary">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-tertiary">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-tertiary">Sunday: Closed</p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-8">
          <h3 className="font-semibold text-tertiary-dark mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-gray-100 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-gray-100 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-gray-100 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-gray-100 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
