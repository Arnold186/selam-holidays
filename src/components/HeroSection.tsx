
import React from "react";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[600px] text-white" style={{ backgroundImage: "url('/lovable-uploads/82454923-5e39-44d2-96b9-65c4c162655c.png')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container-custom relative z-10 h-full">
        <div className="flex flex-col justify-center h-full max-w-3xl pt-20">
          <div className="bg-secondary inline-block px-6 py-2 rounded-full mb-5 w-fit">
            <h2 className="text-white font-medium">Enjoy</h2>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Lets trek and venture to a spot.
          </h1>
          
          <p className="text-lg mb-8 opacity-90">
            Life is short, adventures are waiting, and the hidden spots of the Planet are calling. Enjoy Paris, New York, Venice, Sydney or anywhere that feels like home to you.
          </p>
          
          <button className="btn-primary w-fit">
            Book A Trip
          </button>
        </div>
      </div>
      
      {/* Search Form */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="block text-tertiary-dark font-medium">Select Location</label>
                <div className="relative">
                  <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select a location</option>
                    <option value="paris">Paris</option>
                    <option value="rome">Rome</option>
                    <option value="london">London</option>
                    <option value="tokyo">Tokyo</option>
                  </select>
                  <div className="absolute right-3 top-3 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13.5C14.7614 13.5 17 11.2614 17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 21.5L17.5 16C18.3284 15.1716 19 13.9279 19 12.8284C19 11.7289 18.7893 10.0858 18.3 9M5.7 9C5.21071 10.0858 5 11.7289 5 12.8284C5 13.9279 5.67157 15.1716 6.5 16L12 21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-tertiary-dark font-medium">Select Tour Type</label>
                <div className="relative">
                  <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select tour type</option>
                    <option value="adventure">Adventure</option>
                    <option value="beach">Beach</option>
                    <option value="cultural">Cultural</option>
                    <option value="historical">Historical</option>
                  </select>
                  <div className="absolute right-3 top-3 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 10C3 8.34315 4.34315 7 6 7H18C19.6569 7 21 8.34315 21 10V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V10Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 7V6C7 4.34315 8.34315 3 10 3H14C15.6569 3 17 4.34315 17 6V7" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-tertiary-dark font-medium">Select Month</label>
                <div className="relative">
                  <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select a month</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                  </select>
                  <div className="absolute right-3 top-3 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9H21M9 15H15M7 3V5M17 3V5M6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-tertiary-dark font-medium">Select Duration</label>
                <div className="relative">
                  <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select duration</option>
                    <option value="1-3">1-3 days</option>
                    <option value="3-5">3-5 days</option>
                    <option value="5-7">5-7 days</option>
                    <option value="7-10">7-10 days</option>
                    <option value="10+">10+ days</option>
                  </select>
                  <div className="absolute right-3 top-3 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="btn-primary flex items-center">
                <Search size={16} className="mr-2" />
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
