
import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const timelineItems = [
  {
    year: "2015",
    title: "Our Beginning",
    description: "Selam Holidays was founded with a vision to showcase the beauty of Uganda to the world.",
    icon: Calendar,
  },
  {
    year: "2017",
    title: "Expansion to East Africa",
    description: "We expanded our operations to cover Rwanda, Kenya and Tanzania, offering comprehensive East African tours.",
    icon: Calendar,
  },
  {
    year: "2019",
    title: "International Partnerships",
    description: "We formed strategic partnerships with international travel agencies to bring global travelers to Africa.",
    icon: Calendar,
  },
  {
    year: "2021",
    title: "Sustainable Tourism Initiative",
    description: "Launched eco-friendly tour packages and community support projects to promote sustainable tourism.",
    icon: Calendar,
  },
  {
    year: "2023",
    title: "Global Destinations",
    description: "Expanded our offerings to include international destinations like Dubai, Turkey, and Egypt.",
    icon: Calendar,
  },
];

const CompanyStory = () => {
  return (
    <section className="section-container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">OUR JOURNEY</span>
          <h2 className="section-title">The Selam Holidays Story</h2>
          <p className="max-w-3xl mx-auto text-tertiary mt-4">
            From humble beginnings to becoming a trusted name in travel and tourism, our journey has been defined by a passion for exploration and commitment to excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-8 md:space-y-0">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-center md:mb-24 relative`}
              >
                {/* Timeline point */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white items-center justify-center">
                  <item.icon size={24} />
                </div>
                
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} p-6 rounded-lg bg-white shadow-sm card-hover`}>
                  <div className="flex items-center mb-3">
                    <div className="mr-3 bg-green-100 p-2 rounded-full md:hidden">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <span className="text-xl font-bold text-primary">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-tertiary-dark">{item.title}</h3>
                  <p className="text-tertiary">{item.description}</p>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
