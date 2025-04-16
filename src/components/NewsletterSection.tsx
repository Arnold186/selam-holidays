
import React from "react";
import { ArrowRight } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-12 relative">
      <div className="container-custom">
        <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
          {/* Background with leaves */}
          <div className="absolute top-0 left-0 bottom-0 w-48 bg-contain bg-no-repeat bg-left-bottom opacity-30" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/01/31/22/32/palm-tree-2027973_1280.png')" }}></div>
          <div className="absolute top-0 right-0 bottom-0 w-48 bg-contain bg-no-repeat bg-right-bottom opacity-30" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/01/31/22/32/palm-tree-2027973_1280.png')" }}></div>
          
          <div className="py-10 px-6 md:px-10 relative">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl font-bold text-tertiary-dark mb-3">Join The Newsletter</h2>
              <p className="text-tertiary mb-8">To receive our best monthly deals and special offers</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter Your Email Address..."
                  className="flex-grow px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="btn-primary sm:w-auto w-full flex items-center justify-center">
                  Subscribe <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
