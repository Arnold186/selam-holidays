
import React from "react";
import { Globe, DollarSign, Zap, Headphones, Calendar, ArrowRight } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="section-container bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">WE ARE SPECIAL</span>
          <h2 className="section-title">Why Choose TripRex</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg p-6 shadow-sm card-hover">
            <div className="p-4 bg-green-50 rounded-lg inline-block mb-4">
              <Globe size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl text-tertiary-dark mb-3">Worldwide Coverage</h3>
            <p className="text-tertiary">
              Access to thousands of destinations across all continents, ensuring you can travel anywhere your heart desires with our comprehensive global network.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white rounded-lg p-6 shadow-sm card-hover">
            <div className="p-4 bg-orange-50 rounded-lg inline-block mb-4">
              <DollarSign size={32} className="text-secondary" />
            </div>
            <h3 className="font-semibold text-xl text-tertiary-dark mb-3">Competitive Pricing</h3>
            <p className="text-tertiary">
              Unbeatable value with our price-match guarantee, exclusive deals, and special promotions that make luxury travel accessible without compromising quality.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white rounded-lg p-6 shadow-sm card-hover">
            <div className="p-4 bg-green-50 rounded-lg inline-block mb-4">
              <Zap size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl text-tertiary-dark mb-3">Fast Booking</h3>
            <p className="text-tertiary">
              Quick and seamless booking process with instant confirmation, allowing you to secure your dream vacation in minutes through our efficient platform.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white rounded-lg p-6 shadow-sm card-hover">
            <div className="p-4 bg-orange-50 rounded-lg inline-block mb-4">
              <Headphones size={32} className="text-secondary" />
            </div>
            <h3 className="font-semibold text-xl text-tertiary-dark mb-3">Best Support 24/7</h3>
            <p className="text-tertiary">
              Full support throughout your journey with 24/7 customer service, dedicated travel advisors, and local assistance wherever you travel.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-white rounded-lg p-6 shadow-sm card-hover">
            <div className="p-4 bg-green-50 rounded-lg inline-block mb-4">
              <Calendar size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl text-tertiary-dark mb-3">Guided Tours</h3>
            <p className="text-tertiary">
              Expert-led excursions with knowledgeable guides who bring destinations to life with insider insights, hidden gems, and authentic local experiences.
            </p>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-white rounded-lg p-6 shadow-sm card-hover">
            <div className="p-4 bg-orange-50 rounded-lg inline-block mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary">
                <path d="M18 10C18 14 12 18 12 18C12 18 6 14 6 10C6 7.79086 7.79086 6 10 6C11.3909 6 12.6141 6.83649 13.2998 8.0009C13.9856 6.83649 15.2091 6 16.6 6C18.8091 6 20.6 7.79086 20.6 10C20.6 11.7938 19.2384 13.5712 17.5009 15M4.6 10C4.6 11.7938 5.96157 13.5712 7.69909 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-tertiary-dark mb-3">Ultimate Flexibility</h3>
            <p className="text-tertiary">
              Fully customizable travel plans with free cancellation options, date changes, and personalized itineraries that adapt to your preferences and schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
