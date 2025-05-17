
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Founder & CEO",
    bio: "With over 15 years in the travel industry, Sarah founded Selam Holidays with a vision to showcase African beauty to the world.",
    image: "/image (1).png",
  },
  {
    name: "David Mutesa",
    position: "Head of Operations",
    bio: "David ensures that every tour runs smoothly, managing our network of guides and partners across East Africa.",
    image: "/image (2).png",
  },
  {
    name: "Amina Nantaba",
    position: "Customer Experience Manager",
    bio: "Amina's passion for exceptional service ensures every traveler has a memorable and comfortable journey.",
    image: "/image (3).png",
  },
  {
    name: "Robert Kimbowa",
    position: "Marketing Director",
    bio: "Robert brings global visibility to our local destinations through innovative digital marketing strategies.",
    image: "/image (4).png",
  },
];

const TeamMembers = () => {
  return (
    <section className="section-container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">OUR EXPERTS</span>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="max-w-3xl mx-auto text-tertiary mt-4">
            Our experienced team of travel enthusiasts is dedicated to creating unforgettable journeys and providing exceptional service at every step.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Social media overlay */}
                <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.2 }}
                    className="bg-white p-2 rounded-full"
                    aria-label={`${member.name}'s Facebook`}
                  >
                    <Facebook size={18} className="text-primary" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.2 }}
                    className="bg-white p-2 rounded-full"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter size={18} className="text-primary" />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.2 }}
                    className="bg-white p-2 rounded-full"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={18} className="text-primary" />
                  </motion.a>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold text-xl text-tertiary-dark">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.position}</p>
                <p className="text-tertiary text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
