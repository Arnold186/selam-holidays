
import React, { useState } from "react";
import { Search, MapPin, Briefcase, Calendar, Clock } from "lucide-react";

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const [tourType, setTourType] = useState("");
  const [month, setMonth] = useState("");
  const [duration, setDuration] = useState("");

  const handleSearch = () => {
    // For now just log the values. This can be extended to trigger actual search/filter.
    console.log({ location, tourType, month, duration });
  };

  return (
    <section
      className="relative bg-cover bg-center h-[600px] text-white"
      style={{ backgroundImage: "url('/image (12).png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="container-custom relative z-10 h-full">
        <div className="flex flex-col justify-center h-full max-w-3xl pt-20">
          <div className="bg-secondary inline-block px-6 py-2 rounded-full mb-5 w-fit">
            <h2 className="text-white font-medium">Welcome</h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explore the World, One Journey at a Time
          </h1>

          <p className="text-lg mb-8 opacity-90">
            At Selam Holidays, we turn your travel dreams into reality with
            seamless planning, expert guidance, and unforgettable experiences.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              ✈️ Flight Bookings
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              Custom Tours
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              Group Excursions
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              Visa Assistance
            </span>
          </div>

          {/* Move "Book A Trip" button up here */}
          <button className="btn-primary w-fit mb-10">
            Book A Trip
          </button>
        </div>
      </div>

      {/* Search Form */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="location"
                  className="block text-tertiary-dark font-medium"
                >
                  Select Location
                </label>
                <div className="relative">
                  <select
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a location</option>
                    <option value="rwanda">Rwanda</option>
                    <option value="uganda">Uganda</option>
                    <option value="kenya">Kenya</option>
                    <option value="tanzania">Tanzania</option>
                    <option value="ethiopia">Ethiopia</option>
                    <option value="dubai">Dubai</option>
                    <option value="turkey">Turkey</option>
                    <option value="egypt">Egypt</option>
                    <option value="france">France</option>
                  </select>
                  <div className="absolute right-3 top-3 text-primary pointer-events-none">
                    <MapPin size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="tour-type"
                  className="block text-tertiary-dark font-medium"
                >
                  Select Tour Type
                </label>
                <div className="relative">
                  <select
                    id="tour-type"
                    value={tourType}
                    onChange={(e) => setTourType(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select tour type</option>
                    <option value="gorilla">Gorilla Trekking</option>
                    <option value="safari">Safari</option>
                    <option value="cultural">Cultural Tour</option>
                    <option value="holiday">Holiday Package</option>
                    <option value="city">City Break</option>
                  </select>
                  <div className="absolute right-3 top-3 text-primary pointer-events-none">
                    <Briefcase size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="month"
                  className="block text-tertiary-dark font-medium"
                >
                  Select Month
                </label>
                <div className="relative">
                  <select
                    id="month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a month</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                  </select>
                  <div className="absolute right-3 top-3 text-primary pointer-events-none">
                    <Calendar size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="duration"
                  className="block text-tertiary-dark font-medium"
                >
                  Select Duration
                </label>
                <div className="relative">
                  <select
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select duration</option>
                    <option value="1">1 day</option>
                    <option value="2-3">2-3 days</option>
                    <option value="4-7">4-7 days</option>
                    <option value="7-14">7-14 days</option>
                    <option value="14+">14+ days</option>
                  </select>
                  <div className="absolute right-3 top-3 text-primary pointer-events-none">
                    <Clock size={20} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                className="btn-primary flex items-center"
                onClick={handleSearch}
              >
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

