
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Sun } from "lucide-react";

const destinations = [
  {
    id: "uganda",
    name: "Uganda",
    tagline: "Pearl of Africa",
    image: "/Uganda.png",
    attractions: ["Bwindi Impenetrable Forest", "Murchison Falls", "Lake Victoria"],
    bestTime: "Dec-Feb, Jun-Sep",
    duration: "5-10 days",
  },
  {
    id: "rwanda",
    name: "Rwanda",
    tagline: "Land of a Thousand Hills",
    image: "/Rwanda.jpg",
    attractions: ["Volcanoes National Park", "Nyungwe Forest", "Lake Kivu"],
    bestTime: "Jun-Sep, Dec-Feb",
    duration: "4-7 days",
  },
  {
    id: "kenya",
    name: "Kenya",
    tagline: "Magical Kenya",
    image: "/Nairobi.jpg",
    attractions: ["Maasai Mara", "Amboseli", "Nairobi National Park"],
    bestTime: "Jul-Oct, Jan-Feb",
    duration: "6-12 days",
  },
  {
    id: "dubai",
    name: "Dubai",
    tagline: "City of Gold",
    image: "/Dubai.jpeg",
    attractions: ["Burj Khalifa", "Palm Jumeirah", "Desert Safari"],
    bestTime: "Nov-Apr",
    duration: "5-7 days",
  },
];

const PopularDestinations = () => {
  return (
    <section className="section-container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">EXPLORE</span>
          <h2 className="section-title">Popular Destinations</h2>
          <p className="max-w-3xl mx-auto text-tertiary mt-4">
            Discover our most sought-after destinations that offer extraordinary experiences, rich cultures, and breathtaking landscapes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-md bg-white h-full"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.tagline}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-tertiary-dark mb-2">Top Attractions:</h4>
                  <ul className="text-sm text-tertiary space-y-1">
                    {destination.attractions.map((attraction, i) => (
                      <li key={i} className="flex items-start">
                        <MapPin size={14} className="text-primary mr-2 mt-1" />
                        <span>{attraction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between text-sm text-tertiary border-t border-gray-100 pt-3">
                  <div className="flex items-center">
                    <Sun size={14} className="mr-1 text-secondary" />
                    <span>Best time: {destination.bestTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1 text-primary" />
                    <span>Stay: {destination.duration}</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 py-2 bg-gray-100 text-tertiary-dark font-medium rounded-md hover:bg-gray-200 transition-colors">
                  View Tours
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
