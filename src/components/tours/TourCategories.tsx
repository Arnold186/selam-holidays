
import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", name: "All Tours" },
  { id: "safari", name: "Safari Tours" },
  { id: "cultural", name: "Cultural Tours" },
  { id: "adventure", name: "Adventure Tours" },
  { id: "holiday", name: "Holiday Packages" },
];

const TourCategories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-tertiary hover:bg-gray-200"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCategories;
