
import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Liam Nohkan",
    date: "May 9, 2023",
    comment: "Selam Holidays gave us an unforgettable safari experience in Akagera. The entire trip was smooth, from the airport pickup to the game drives. Their team knew every hidden gem and made sure we felt safe and cared for. We'll definitely book with them again.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Mateo Daniel",
    date: "May 15, 2023",
    comment: "I booked my trip to Dubai through Selam Holidays, and everything was handled professionally—from visa assistance to hotel reservations. They responded quickly to all my questions, and I felt supported throughout my journey.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    id: 3,
    name: "Lucas Mora",
    date: "May 9, 2023",
    comment: "Our company retreat to Musanze with Selam Holidays was outstanding. The entire experience—from transportation to accommodation—was smooth and professionally arranged. The team handled everything with care, and our staff came back refreshed and inspired.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">TESTIMONIAL</span>
          <h2 className="section-title">Regards From Travelers</h2>
        </div>
        
        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-tertiary">{testimonial.date}</span>
                </div>
                
                <p className="text-tertiary mb-6">"{testimonial.comment}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h4 className="font-medium text-tertiary-dark">{testimonial.name}</h4>
                    <div className="flex items-center">
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">Traveler</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3 hidden md:block">
            <ChevronLeft size={20} className="text-tertiary-dark" />
          </button>
          <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3 hidden md:block">
            <ChevronRight size={20} className="text-tertiary-dark" />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-8 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
