import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-container pt-36 pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="mb-8 relative">
              <span className="text-sm font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">About Selam Holidays</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900">
                Your Trusted Partner in <br />
                <span className="text-primary relative inline-block">
                  African Adventures
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 opacity-50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 3.99991 132.5 -2.00017 259.5 2.00007" stroke="currentColor" strokeWidth="3"></path></svg>
                </span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Who We Are</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Selam Holidays is a premier Uganda-based travel company. We specialize in crafting bespoke journeys that mix thrilling wildlife encounters with deep cultural immersion across East Africa and beyond.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Reach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From the misty mountains of Bwindi to the deserts of Dubai, our network spans continents. We are constantly expanding to bring the world closer to you.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link to="/about">
                <Button size="lg" className="rounded-full px-8 h-12 text-lg shadow-lg hover:shadow-xl transition-all">
                  More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10"></div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8 row-span-2">
                  <img
                    src="/image.png"
                    alt="Luxury Resort"
                    className="w-full h-[400px] object-cover rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="col-span-4">
                  <img
                    src="/image (3).png"
                    alt="Travel"
                    className="w-full h-[190px] object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="col-span-4 bg-primary rounded-3xl p-6 text-white flex flex-col justify-center items-center text-center shadow-xl">
                  <span className="text-5xl font-bold mb-1">10+</span>
                  <span className="text-sm font-medium opacity-90">Countries <br />Explored</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
