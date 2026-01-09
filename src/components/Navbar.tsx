import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "HOME", path: "/" },
    { title: "ABOUT", path: "/about" },
    { title: "TOURS", path: "/tours" },
    // { title: "FLIGHTS", path: "/flights" },
    { title: "DESTINATION", path: "/destination" },
    { title: "CONTACT", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="mr-2 transition-transform duration-300 group-hover:scale-105">
              <img src="/selam LOGO (2).png" alt="Selam Holidays" className="h-10 md:h-12 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                      ? "text-primary bg-primary/5"
                      : scrolled ? "text-gray-700 hover:text-primary hover:bg-gray-50" : "text-white hover:bg-white/20 drop-shadow-md"
                      }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Area: Contact / CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+256762283203" className={`hidden xl:flex items-center gap-2 text-sm font-semibold ${scrolled ? "text-gray-800" : "text-white drop-shadow-md"}`}>
              <div className={`p-2 rounded-full ${scrolled ? "bg-primary/10 text-primary" : "bg-white/20 text-white"}`}>
                <Phone size={18} />
              </div>
              <span>+256 762 283203</span>
            </a>
            <Link to="/tours">
              <Button
                className={`rounded-full px-6 transition-all shadow-lg hover:shadow-xl ${scrolled
                  ? "bg-primary text-white"
                  : "bg-white text-primary hover:bg-gray-100"
                  }`}
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-gray-800" : "text-white drop-shadow-md"}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b overflow-hidden shadow-xl"
          >
            <ul className="flex flex-col py-6 px-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className={`block text-lg font-medium transition-colors ${location.pathname === link.path ? "text-primary" : "text-gray-600 hover:text-primary"
                      }`}
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-100">
                <Link to="/tours" onClick={toggleMenu}>
                  <Button className="w-full text-lg h-12 rounded-full">Book A Trip</Button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
