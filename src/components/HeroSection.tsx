import React, { useState } from "react";
import { Search, MapPin, Briefcase, Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const [tourType, setTourType] = useState("");
  const [month, setMonth] = useState("");
  const [duration, setDuration] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (tourType) params.append("type", tourType);
    if (month) params.append("month", month);
    if (duration) params.append("duration", duration);

    navigate(`/tours?${params.toString()}`);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like fix */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image (12).png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container-custom relative z-10 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text Content */}
          <div className="lg:col-span-7 text-white">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm font-medium tracking-wide uppercase">Discover the Extraordinary</span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Explore the World, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                One Journey at a Time
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
            >
              At Selam Holidays, we turn your travel dreams into reality with seamless planning, expert guidance, and unforgettable experiences across the globe.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-wrap gap-4 mb-10"
            >
              {['Custom Tours', 'Group Excursions', 'Visa Assistance'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium bg-black/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                  <CheckCircle2 size={16} className="text-primary-foreground" />
                  {item}
                </div>
              ))}
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary-dark shadow-xl hover:shadow-2xl transition-all rounded-full group">
                Start Your Adventure
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Search Card - Floating/Stacked */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Your Next Trip</h3>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MapPin size={16} className="text-primary" /> Destination
                  </label>
                  <Select onValueChange={setLocation}>
                    <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:ring-primary">
                      <SelectValue placeholder="Where do you want to go?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rwanda">Rwanda</SelectItem>
                      <SelectItem value="uganda">Uganda</SelectItem>
                      <SelectItem value="kenya">Kenya</SelectItem>
                      <SelectItem value="tanzania">Tanzania</SelectItem>
                      <SelectItem value="dubai">Dubai</SelectItem>
                      <SelectItem value="turkey">Turkey</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Briefcase size={16} className="text-primary" /> Tour Type
                  </label>
                  <Select onValueChange={setTourType}>
                    <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:ring-primary">
                      <SelectValue placeholder="Adventure, Safari, Holiday..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gorilla">Gorilla Trekking</SelectItem>
                      <SelectItem value="safari">Safari</SelectItem>
                      <SelectItem value="cultural">Cultural Tour</SelectItem>
                      <SelectItem value="holiday">Holiday Package</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Calendar size={16} className="text-primary" /> Month
                    </label>
                    <Select onValueChange={setMonth}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:ring-primary">
                        <SelectValue placeholder="Any Month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="january">January</SelectItem>
                        <SelectItem value="june">June</SelectItem>
                        <SelectItem value="december">December</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Clock size={16} className="text-primary" /> Duration
                    </label>
                    <Select onValueChange={setDuration}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200 focus:ring-primary">
                        <SelectValue placeholder="Any Days" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Day</SelectItem>
                        <SelectItem value="2-3">2-3 Days</SelectItem>
                        <SelectItem value="4-7">4-7 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary-dark mt-4" onClick={handleSearch}>
                  <Search size={18} className="mr-2" />
                  Search Packages
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Search - Bottom Sheet Style (Visible only on small screens) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:hidden z-20">
        <div className="bg-white rounded-t-xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-6">
          <Button className="w-full h-12 text-lg font-semibold bg-primary" onClick={() => document.getElementById('mobile-search-dialog')?.showModal?.()}>
            <Search size={18} className="mr-2" />
            Find Your Trip
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
