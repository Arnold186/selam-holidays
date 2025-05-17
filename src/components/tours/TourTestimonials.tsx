
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emma Johnson",
    tour: "Gorilla Trekking Experience",
    text: "The gorilla trekking tour was beyond my wildest expectations. The guides were knowledgeable and passionate, making this a truly once-in-a-lifetime experience. Seeing these majestic creatures up close was absolutely breathtaking.",
    image: "/image.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    tour: "Serengeti Migration Safari",
    text: "The Serengeti safari was meticulously organized from start to finish. We witnessed the great migration, saw the Big Five, and enjoyed stunning accommodations. Our guide's expertise added incredible depth to the experience.",
    image: "/image.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Williams",
    tour: "Dubai City Break",
    text: "Our Dubai trip was flawlessly arranged by Selam Holidays. From the desert safari to the city tours, every detail was taken care of. The hotel selections were perfect and the experiences were unforgettable.",
    image: "/image.png",
    rating: 4,
  },
];

const TourTestimonials = () => {
  return (
    <section className="section-container">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="max-w-3xl mx-auto text-tertiary mt-4">
            Hear from travelers who have experienced our tours firsthand and created memories that will last a lifetime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm card-hover"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tertiary-dark">{testimonial.name}</h4>
                    <p className="text-xs text-primary">{testimonial.tour}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-tertiary text-sm italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read All Reviews
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TourTestimonials;
