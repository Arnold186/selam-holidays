import React from 'react';
import { Plane, Hotel, FileText, Car, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Flight Ticket Booking",
      description: "Competitive prices on local and international flights with flexible booking options.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Holiday Packages",
      description: "Pre-designed and custom tour packages to match your budget and interests.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Hotel className="h-8 w-8" />,
      title: "Hotel Reservations",
      description: "Comfort and quality from budget stays to luxury resorts with best rate guarantees.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Visa Assistance",
      description: "Stress-free visa application guidance and support for multiple destinations.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Group & Corporate Travel",
      description: "Organized trips for schools, companies, and organizations with special group rates.",
      color: "bg-pink-50 text-pink-600"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Airport Transfers",
      description: "Reliable ground transport in every city with professional drivers.",
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-container bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">Tailored Travel Experiences</h2>
          <p className="mt-4 text-gray-600 text-lg">We provide a comprehensive range of services to ensure every aspect of your journey is perfect.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden bg-white">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
                <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
