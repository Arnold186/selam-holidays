
import React from "react";

const AboutSection = () => {
  return (
    <section className="section-container pt-36">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="mb-6">
              <span className="section-subtitle">ABOUT US</span>
              <h2 className="text-left section-title">Your Trusted Travel Partner in Africa and Beyond</h2>
            </div>
            
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg className="text-primary w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12.9046 3.06005C12.3372 3 11.6628 3 11.0954 3.06005C7.98071 3.38767 5.53367 5.21586 4.74401 7.48518C4.52599 8.15117 4.46894 8.82354 4.46894 9.5M19.5311 9.5C19.5311 8.82354 19.474 8.15117 19.256 7.48518C18.4663 5.21586 16.0193 3.38767 12.9046 3.06005" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M19.5311 14.5C19.5311 15.1765 19.474 15.8488 19.256 16.5148C18.4663 18.7841 16.0193 20.6123 12.9046 20.9399C12.3372 21 11.6628 21 11.0954 20.9399C7.98071 20.6123 5.53367 18.7841 4.74401 16.5148C4.52599 15.8488 4.46894 15.1765 4.46894 14.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-tertiary-dark mb-2">Who We Are</h3>
                  <p className="text-tertiary">
                    Selam Holidays is a Uganda-based travel and tour company dedicated to helping you discover the beauty of Africa and explore global destinations with ease. Whether you're planning a once-in-a-lifetime gorilla trek, a weekend getaway, or a business trip abroad, our team of experts is here to make your journey smooth and memorable.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg className="text-primary w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 10H16.01M12 10H12.01M8 10H8.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-tertiary-dark mb-2">Our Destinations</h3>
                  <p className="text-tertiary">
                    Our destinations include Uganda, Rwanda, Kenya, Tanzania, Ethiopia, Dubai, Turkey, Egypt, France, and more. We're constantly expanding our reach to provide you with the best travel experiences around the world.
                  </p>
                </div>
              </div>
            </div>
            
            <button className="btn-primary">More About Us</button>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-12 gap-4">
            <div className="col-span-7">
              <img 
                src="/image.png" 
                alt="Beautiful resort with pool" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div className="col-span-5 grid gap-4">
              <div>
                <img 
                  src="/image (3).png" 
                  alt="Desert travel adventure" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="bg-secondary p-4 rounded-lg text-white text-center flex flex-col justify-center">
                <span className="text-4xl font-bold">10+</span>
                <span className="text-sm mt-1">Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
