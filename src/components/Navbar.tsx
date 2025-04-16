
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-primary mr-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                <path d="M15 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M15 12L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 5L7 7M19 5L17 7M19 19L17 17M5 19L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-bold text-tertiary-dark">TripRex</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-tertiary-dark font-medium hover:text-primary transition-colors">HOME</Link>
              </li>
              <li>
                <Link to="/about" className="text-tertiary-dark font-medium hover:text-primary transition-colors">ABOUT</Link>
              </li>
              <li>
                <Link to="/tours" className="text-tertiary-dark font-medium hover:text-primary transition-colors">TOURS</Link>
              </li>
              <li>
                <Link to="/destination" className="text-tertiary-dark font-medium hover:text-primary transition-colors">DESTINATION</Link>
              </li>
              <li>
                <Link to="/pages" className="text-tertiary-dark font-medium hover:text-primary transition-colors">PAGES</Link>
              </li>
              <li>
                <Link to="/contact" className="text-tertiary-dark font-medium hover:text-primary transition-colors">CONTACT</Link>
              </li>
            </ul>
          </nav>
          
          {/* Contact Info */}
          <div className="hidden md:flex items-center">
            <div className="text-right">
              <p className="text-xs text-primary">To More Inquiry</p>
              <p className="text-sm font-semibold">+990-737 621 432</p>
            </div>
            <div className="ml-2 text-primary bg-green-100 p-2 rounded-full">
              <Phone size={20} />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-tertiary-dark p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col py-4 px-6">
            <li className="py-2">
              <Link to="/" className="block text-tertiary-dark font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                HOME
              </Link>
            </li>
            <li className="py-2">
              <Link to="/about" className="block text-tertiary-dark font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                ABOUT
              </Link>
            </li>
            <li className="py-2">
              <Link to="/tours" className="block text-tertiary-dark font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                TOURS
              </Link>
            </li>
            <li className="py-2">
              <Link to="/destination" className="block text-tertiary-dark font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                DESTINATION
              </Link>
            </li>
            <li className="py-2">
              <Link to="/pages" className="block text-tertiary-dark font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                PAGES
              </Link>
            </li>
            <li className="py-2">
              <Link to="/contact" className="block text-tertiary-dark font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                CONTACT
              </Link>
            </li>
            <li className="py-2 border-t mt-2 pt-4">
              <div className="flex items-center">
                <Phone size={16} className="text-primary mr-2" />
                <span className="text-sm font-semibold">+990-737 621 432</span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
