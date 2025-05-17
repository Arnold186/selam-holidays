
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const packages = [
  {
    name: "Standard Package",
    price: 799,
    description: "Perfect for first-time travelers looking for essential experiences",
    features: [
      { name: "Guided tours with local experts", included: true },
      { name: "Standard accommodation", included: true },
      { name: "Selected meals", included: true },
      { name: "Ground transportation", included: true },
      { name: "Airport transfers", included: false },
      { name: "Personalized itinerary", included: false },
      { name: "Premium activities", included: false },
    ],
    popular: false,
  },
  {
    name: "Premium Package",
    price: 1499,
    description: "Our most popular option with the perfect balance of comfort and value",
    features: [
      { name: "Guided tours with local experts", included: true },
      { name: "Premium accommodation", included: true },
      { name: "Most meals included", included: true },
      { name: "Ground transportation", included: true },
      { name: "Airport transfers", included: true },
      { name: "Personalized itinerary", included: true },
      { name: "Premium activities", included: false },
    ],
    popular: true,
  },
  {
    name: "Deluxe Package",
    price: 2499,
    description: "The ultimate luxury experience with personalized service",
    features: [
      { name: "Private guided tours", included: true },
      { name: "Luxury accommodation", included: true },
      { name: "All meals included", included: true },
      { name: "Private transportation", included: true },
      { name: "Priority airport transfers", included: true },
      { name: "Fully customized itinerary", included: true },
      { name: "Exclusive activities", included: true },
    ],
    popular: false,
  },
];

const TourPricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section className="section-container bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">PRICING</span>
          <h2 className="section-title">Tour Packages</h2>
          <p className="max-w-3xl mx-auto text-tertiary mt-4">
            Choose the perfect package for your travel style and budget. All our packages can be customized to suit your needs.
          </p>
          
          <div className="mt-8 inline-flex items-center p-1 bg-gray-200 rounded-full">
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                !isYearly ? "bg-primary text-white" : "text-tertiary"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Per Person
            </button>
            <button 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                isYearly ? "bg-primary text-white" : "text-tertiary"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Group Rates
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-lg bg-white overflow-hidden shadow-lg relative ${
                pkg.popular ? "border-2 border-primary" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-b-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-tertiary-dark">{pkg.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold text-primary">
                    ${isYearly ? Math.round(pkg.price * 4 * 0.85) : pkg.price}
                  </span>
                  <span className="text-tertiary">
                    /{isYearly ? "group of 4" : "person"}
                  </span>
                </div>
                <p className="text-tertiary text-sm mb-6">{pkg.description}</p>
                
                <ul className="space-y-4 mt-6 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <div className="rounded-full p-1 bg-green-100 mr-3">
                          <Check size={14} className="text-primary" />
                        </div>
                      ) : (
                        <div className="rounded-full p-1 bg-gray-100 mr-3">
                          <X size={14} className="text-tertiary" />
                        </div>
                      )}
                      <span className="text-sm text-tertiary">{feature.name}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-md font-medium transition-colors ${
                  pkg.popular ? "bg-primary text-white hover:bg-primary-dark" : "bg-gray-100 text-tertiary-dark hover:bg-gray-200"
                }`}>
                  Book This Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPricing;
