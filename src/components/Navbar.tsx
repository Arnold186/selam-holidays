
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
              <img src="/selam LOGO (2).png" alt="Logo" className="w-50 h-10" />
            </div>
            {/* <span className="text-xl font-bold text-tertiary-dark">Selam Holiday</span> */}
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
                <Link to="/contact" className="text-tertiary-dark font-medium hover:text-primary transition-colors">CONTACT</Link>
              </li>
            </ul>
          </nav>
          
          {/* Contact Info */}
          <div className="hidden md:flex items-center">
            <div className="text-right">
              <p className="text-xs text-primary">To More Inquiry</p>
              <p className="text-sm font-semibold">+256 762 283203</p>
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
