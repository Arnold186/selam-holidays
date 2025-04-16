
import React from 'react';
import { Plane, Hotel, FileText, Car, Users, Globe } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Plane className="h-10 w-10 text-primary" />,
      title: "Flight Ticket Booking",
      description: "Competitive prices on local and international flights with flexible booking options."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Holiday Packages",
      description: "Pre-designed and custom tour packages to match your budget and interests."
    },
    {
      icon: <Hotel className="h-10 w-10 text-primary" />,
      title: "Hotel Reservations",
      description: "Comfort and quality from budget stays to luxury resorts with best rate guarantees."
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Visa Assistance",
      description: "Stress-free visa application guidance and support for multiple destinations."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Group & Corporate Travel",
      description: "Organized trips for schools, companies, and organizations with special group rates."
    },
    {
      icon: <Car className="h-10 w-10 text-primary" />,
      title: "Airport Transfers & Car Rentals",
      description: "Reliable ground transport in every city with professional drivers."
    }
  ];

  return (
    <section className="section-container bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">OUR SERVICES</span>
          <h2 className="section-title">Tailored Travel Experiences Just for You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-tertiary-dark mb-3">{service.title}</h3>
              <p className="text-tertiary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
