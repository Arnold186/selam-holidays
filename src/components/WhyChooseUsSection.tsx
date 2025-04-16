
import React from "react";
import { Globe, DollarSign, Zap, Headphones, Calendar, Users } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="section-container bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">WHY CHOOSE US</span>
          <h2 className="section-title">Why Choose Selam Holidays</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg p-6 shadow-sm card-hover">
            <div className="p-4 bg-green-50 rounded-lg inline-block mb-4">
              <Users size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl text-tertiary-dark mb-3">Professional Consultants</h3>
            <p className="text-tertiary">
              Our team consists of experienced travel professionals who are passionate about creating the perfect trip for every client's unique needs and preferences.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white rounded-lg p-6 shadow-sm card-hover">
            <div className="p-4 bg-orange-50 rounded-lg inline-block mb-4">
              <DollarSign size={32} className="text-secondary" />
            </div>
            <h3 className="font-semibold text-xl text-tertiary-dark mb-3">Affordable Prices</h3>
            <p className="text-tertiary">
              We offer competitive rates and value for money on all our packages and services, with transparent pricing and no hidden fees.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white rounded-lg p-6 shadow-sm card-hover">
            <div className="p-4 bg-green-50 rounded-lg inline-block mb-4">
              <Zap size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl text-tertiary-dark mb-3">Personalized Itineraries</h3>
            <p className="text-tertiary">
              Every journey is unique, which is why we tailor each trip to match your specific interests, timeline, and budget requirements.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white rounded-lg p-6 shadow-sm card-hover">
            <div className="p-4 bg-orange-50 rounded-lg inline-block mb-4">
              <Headphones size={32} className="text-secondary" />
            </div>
            <h3 className="font-semibold text-xl text-tertiary-dark mb-3">24/7 Customer Support</h3>
            <p className="text-tertiary">
              Our dedicated support team is available around the clock to assist you with any questions or concerns before, during, and after your trip.
            </p>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-white rounded-lg p-6 shadow-sm card-hover">
            <div className="p-4 bg-green-50 rounded-lg inline-block mb-4">
              <Globe size={32} className="text-primary" />
            </div>
            <h3 className="font-semibold text-xl text-tertiary-dark mb-3">Local Expertise</h3>
            <p className="text-tertiary">
              With deep knowledge of Rwanda and East Africa, our guides and consultants provide authentic insights and access to unforgettable experiences.
            </p>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-white rounded-lg p-6 shadow-sm card-hover">
            <div className="p-4 bg-orange-50 rounded-lg inline-block mb-4">
              <Calendar size={32} className="text-secondary" />
            </div>
            <h3 className="font-semibold text-xl text-tertiary-dark mb-3">Global Connections</h3>
            <p className="text-tertiary">
              Our extensive network of partners worldwide ensures seamless travel experiences whether you're exploring Africa or venturing to international destinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
