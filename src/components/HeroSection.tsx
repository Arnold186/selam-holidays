
import React, { useState } from "react";
import { Search, MapPin, Briefcase, Calendar, Clock, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const [tourType, setTourType] = useState("");
  const [month, setMonth] = useState("");
  const [duration, setDuration] = useState("");

  const handleSearch = () => {
    if (!location && !tourType && !month && !duration) {
      alert("Please select at least one filter to search.");
      return;
    }

    // Log the selected filter values
    console.log({ location, tourType, month, duration });
    // Here you can add actual search/filter functionality later
    alert(
      `Searching for tours with:\nLocation: ${location || "Any"}\nTour Type: ${
        tourType || "Any"
      }\nMonth: ${month || "Any"}\nDuration: ${duration || "Any"}`
    );
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

          {/* Moved "Book A Trip" button here under content */}
          <button
            className="btn-primary w-fit mb-20"
            onClick={() => alert("Booking a trip!")}
          >
            Book A Trip
          </button>
        </div>
      </div>

      {/* Search Form */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-black">
              <div className="space-y-2">
                <label
                  htmlFor="location"
                  className="block text-tertiary-dark font-medium"
                >
                  Select Location
                </label>
                <div className="relative">
                  <Select
                    value={location}
                    onValueChange={(value) => setLocation(value)}
                  >
                    <SelectTrigger className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary flex items-center">
                      <MapPin className="mr-2 text-primary" size={20} />
                      <SelectValue placeholder="Select a location" />
                      <ChevronDown className="ml-auto text-primary" size={20} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rwanda">Rwanda</SelectItem>
                      <SelectItem value="uganda">Uganda</SelectItem>
                      <SelectItem value="kenya">Kenya</SelectItem>
                      <SelectItem value="tanzania">Tanzania</SelectItem>
                      <SelectItem value="ethiopia">Ethiopia</SelectItem>
                      <SelectItem value="dubai">Dubai</SelectItem>
                      <SelectItem value="turkey">Turkey</SelectItem>
                      <SelectItem value="egypt">Egypt</SelectItem>
                      <SelectItem value="france">France</SelectItem>
                    </SelectContent>
                  </Select>
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
                  <Select
                    value={tourType}
                    onValueChange={(value) => setTourType(value)}
                  >
                    <SelectTrigger className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary flex items-center">
                      <Briefcase className="mr-2 text-primary" size={20} />
                      <SelectValue placeholder="Select tour type" />
                      <ChevronDown className="ml-auto text-primary" size={20} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gorilla">Gorilla Trekking</SelectItem>
                      <SelectItem value="safari">Safari</SelectItem>
                      <SelectItem value="cultural">Cultural Tour</SelectItem>
                      <SelectItem value="holiday">Holiday Package</SelectItem>
                      <SelectItem value="city">City Break</SelectItem>
                    </SelectContent>
                  </Select>
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
                  <Select
                    value={month}
                    onValueChange={(value) => setMonth(value)}
                  >
                    <SelectTrigger className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary flex items-center">
                      <Calendar className="mr-2 text-primary" size={20} />
                      <SelectValue placeholder="Select a month" />
                      <ChevronDown className="ml-auto text-primary" size={20} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="january">January</SelectItem>
                      <SelectItem value="february">February</SelectItem>
                      <SelectItem value="march">March</SelectItem>
                      <SelectItem value="april">April</SelectItem>
                      <SelectItem value="may">May</SelectItem>
                      <SelectItem value="june">June</SelectItem>
                      <SelectItem value="july">July</SelectItem>
                      <SelectItem value="august">August</SelectItem>
                      <SelectItem value="september">September</SelectItem>
                      <SelectItem value="october">October</SelectItem>
                      <SelectItem value="november">November</SelectItem>
                      <SelectItem value="december">December</SelectItem>
                    </SelectContent>
                  </Select>
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
                  <Select
                    value={duration}
                    onValueChange={(value) => setDuration(value)}
                  >
                    <SelectTrigger className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary flex items-center">
                      <Clock className="mr-2 text-primary" size={20} />
                      <SelectValue placeholder="Select duration" />
                      <ChevronDown className="ml-auto text-primary" size={20} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 day</SelectItem>
                      <SelectItem value="2-3">2-3 days</SelectItem>
                      <SelectItem value="4-7">4-7 days</SelectItem>
                      <SelectItem value="7-14">7-14 days</SelectItem>
                      <SelectItem value="14+">14+ days</SelectItem>
                    </SelectContent>
                  </Select>
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
