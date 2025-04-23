
import React from "react";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "1-Day Gorilla Trekking in Volcanoes National Park",
    image: "image (11).png",
    price: 1500,
    duration: "1 Day",
    groupSize: "1-8 People",
    location: "Uganda",
    category: "WILDLIFE / ADVENTURE",
    description: "A once-in-a-lifetime encounter with Uganda's majestic mountain gorillas.",
  },
  {
    id: 2,
    title: " Kidepo Valley National Park Safari",
    image: "image (14).webp",
    price: 1200,
    duration: "4 Days",
    groupSize: "2-6 People",
    location: "Uganda",
    category: "SAFARI / WILDLIFE",
    description: "Offers an abundance of wildlife and spectacular Savannah landscapes.",
  },
  {
    id: 3,
    title: "7-Day Discover Rwanda Tour",
    image: "image(15).jpg",
    price: 2500,
    duration: "7 Days",
    groupSize: "2-12 People",
    location: "Rwanda",
    category: "CULTURE / WILDLIFE",
    description: "Culture, wildlife, and breathtaking landscapes across Rwanda.",
  },
  {
    id: 4,
    title: "Dubai Getaway Package",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    price: 1800,
    duration: "5 Days",
    groupSize: "2-20 People",
    location: "Dubai",
    category: "CITY / LUXURY",
    description: "Fly from Kigali and experience the magic of the UAE.",
  },
  {
    id: 5,
    title: "Kenya Wildlife Safari",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    price: 2100,
    duration: "6 Days",
    groupSize: "2-8 People",
    location: "Kenya",
    category: "SAFARI / WILDLIFE",
    description: "Experience the Maasai Mara and witness the incredible wildlife of Kenya.",
  },
  {
    id: 6,
    title: "Istanbul & Cappadocia Experience",
    image: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    price: 2300,
    duration: "8 Days",
    groupSize: "2-15 People",
    location: "Turkey",
    category: "CULTURAL / HISTORICAL",
    description: "Discover the rich history and stunning landscapes of Turkey.",
  }
];

const TravelExperienceSection = () => {
  return (
    <section className="section-container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">TOP PACKAGES</span>
          <h2 className="section-title">Our Popular Tour Packages</h2>
          
          {/* Travel Services */}
          <div className="flex justify-center items-center flex-wrap gap-4 md:gap-8 mt-6">
            <div className="text-tertiary flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary mr-2">
                <path d="M6 9.99739C6.01447 8.29083 6.10921 7.35004 6.72963 6.72963C7.35004 6.10921 8.29083 6.01447 9.99739 6H14.0026C15.7092 6.01447 16.65 6.10921 17.2704 6.72963C17.8908 7.35004 17.9855 8.29083 18 9.99739V14.0026C17.9855 15.7092 17.8908 16.65 17.2704 17.2704C16.65 17.8908 15.7092 17.9855 14.0026 18H9.99739C8.29083 17.9855 7.35004 17.8908 6.72963 17.2704C6.10921 16.65 6.01447 15.7092 6 14.0026V9.99739Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 21H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 18V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 3H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Flight Tickets
            </div>
            
            <div className="text-tertiary flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary mr-2">
                <path d="M17.5 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H17.5ZM17.5 19L13 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Hotel Reservations
            </div>
            
            <div className="text-tertiary flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary mr-2">
                <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Visa Assistance
            </div>
            
            <div className="text-tertiary flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary mr-2">
                <path d="M8 19L8 7M8 7L4 11M8 7L12 11M16 5V17M16 17L12 13M16 17L20 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Airport Transfers
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="rounded-lg overflow-hidden bg-white shadow-md card-hover">
              <div className="relative h-52">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-tertiary-dark text-xs px-3 py-1 rounded-full">
                    {pkg.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-tertiary">
                    <Clock size={16} className="mr-1" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-tertiary">
                    <Users size={16} className="mr-1" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg text-tertiary-dark mb-3 line-clamp-2">
                  {pkg.title}
                </h3>
                
                <p className="text-tertiary text-sm mb-3 line-clamp-2">
                  {pkg.description}
                </p>
                
                <div className="flex items-center gap-1 mb-4">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm text-tertiary">{pkg.location}</span>
                </div>
                
                <div className="flex justify-between items-center border-t pt-4">
                  <div>
                    <span className="block text-sm text-tertiary">Starting From</span>
                    <div className="flex items-center">
                      <span className="text-xl font-bold text-tertiary-dark">${pkg.price}</span>
                      <span className="text-tertiary ml-1">/person</span>
                    </div>
                  </div>
                  
                  <button className="btn-primary py-2 px-4">
                    Book Now <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelExperienceSection;
