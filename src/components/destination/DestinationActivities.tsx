
import React from "react";
import { motion } from "framer-motion";

const activities = [
  {
    icon: "🦍",
    title: "Wildlife Safaris",
    description: "Experience close encounters with Africa's magnificent wildlife in their natural habitats.",
  },
  {
    icon: "🏞️",
    title: "Nature Hikes",
    description: "Trek through lush forests, scenic mountains, and breathtaking landscapes.",
  },
  {
    icon: "🏄",
    title: "Adventure Sports",
    description: "Get your adrenaline pumping with white-water rafting, bungee jumping, and zip-lining.",
  },
  {
    icon: "🏛️",
    title: "Cultural Experiences",
    description: "Immerse yourself in local traditions, music, dance, and authentic community visits.",
  },
  {
    icon: "🛍️",
    title: "City Explorations",
    description: "Discover urban attractions, markets, and modern architecture in vibrant cities.",
  },
  {
    icon: "🏝️",
    title: "Beach Getaways",
    description: "Relax on pristine beaches and enjoy water activities in coastal destinations.",
  },
  {
    icon: "🌄",
    title: "Photography Tours",
    description: "Capture stunning landscapes, wildlife, and cultural moments with expert guidance.",
  },
  {
    icon: "🍲",
    title: "Culinary Adventures",
    description: "Sample local cuisines, cooking classes, and food market tours for gastronomic delights.",
  },
];

const DestinationActivities = () => {
  return (
    <section className="section-container bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">EXPERIENCES</span>
          <h2 className="section-title">Activities You'll Love</h2>
          <p className="max-w-3xl mx-auto text-tertiary mt-4">
            Our destinations offer a wide range of activities to suit every traveler's interests, from adventure seekers to culture enthusiasts.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white p-5 rounded-lg shadow-sm text-center"
            >
              <div className="text-4xl mb-3">{activity.icon}</div>
              <h3 className="text-lg font-semibold text-tertiary-dark mb-2">{activity.title}</h3>
              <p className="text-sm text-tertiary">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationActivities;
