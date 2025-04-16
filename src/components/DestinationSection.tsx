
import React from "react";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Sweden",
    image: "https://images.unsplash.com/photo-1586699253884-e199770f63d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Japan",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "India",
    image: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Brazil",
    image: "https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1524820197278-540916411e20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  },
];

const DestinationSection = () => {
  return (
    <section className="section-container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">TOUR & TRAVELS</span>
          <h2 className="section-title">Desired Vacation Spots</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Row - Two Destinations */}
          <div className="relative rounded-lg overflow-hidden h-64 card-hover">
            <img 
              src={destinations[0].image} 
              alt={destinations[0].name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{destinations[0].name}</h3>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-64 card-hover">
            <img 
              src={destinations[1].image} 
              alt={destinations[1].name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{destinations[1].name}</h3>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-64 card-hover">
            <img 
              src={destinations[2].image} 
              alt={destinations[2].name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{destinations[2].name}</h3>
            </div>
          </div>
          
          {/* Second Row - Two Destinations + Button */}
          <div className="relative rounded-lg overflow-hidden h-64 card-hover">
            <img 
              src={destinations[3].image} 
              alt={destinations[3].name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{destinations[3].name}</h3>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-64 card-hover">
            <img 
              src={destinations[4].image} 
              alt={destinations[4].name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{destinations[4].name}</h3>
            </div>
          </div>
          
          <div className="rounded-lg bg-orange-50 h-64 flex flex-col items-center justify-center p-6">
            <div className="text-center">
              <p className="text-secondary font-medium mb-1">View All</p>
              <h3 className="text-xl font-semibold text-tertiary-dark mb-4">Of Our All Destination</h3>
              <button className="btn-secondary">
                View All Destinations <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
