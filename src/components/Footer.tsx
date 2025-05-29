
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="text-primary mr-2">
              <div className="text-primary mr-2">
              <img src="/selam LOGO (2).png" alt="Logo" className="w-50 h-10" />
            </div>
              </div>
              {/* <span className="text-xl font-bold">Selam Holiday</span> */}
            </div>
            
            <h3 className="text-lg font-semibold mb-4">Want To Take Tour Packages?</h3>
            <button className="btn-primary mb-6">Book A Tour</button>
            
            <div className="flex space-x-4 mt-4">
              <a href="https://web.facebook.com/people/Selam_Travels/100070565520090/?mibextid=LQQJ4d" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/selam_travels?s=21&t=W5EY4LBYlUE7BDzerRVkYg" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/selam_travels?igshid=MzRlODBiNWFlZA%3D%3D" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/selam-travel-solutions/" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-primary transition-colors">Destinations</Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-primary transition-colors">Tour Package</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">Article</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">More Inquiry</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-primary mt-1" />
                <span>+256 762 283203</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-primary mt-1" />
                <span>info@selamtravels.com 
                </span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-primary mt-1" />
                <span>Lloyds Mall, Kampala</span>
              </li>
            </ul>
          </div>
          
          {/* Payment Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-6">We Are Here</h3>
            <p className="text-gray-300 mb-6">
            Come find us in vibrant Uganda! We’re just a visit, call, or click away. At Selam Holidays, we're always ready to guide you on your next adventure with care and attention.
            </p>
            
            <h3 className="text-lg font-semibold mb-4">Payment Partner</h3>
            <div className="flex space-x-3">
              <div className="bg-blue-600 text-white rounded px-2 py-1 text-xs font-semibold">VISA</div>
              <div className="bg-indigo-600 text-white rounded px-2 py-1 text-xs font-semibold">AMEX</div>
              {/* <div className="bg-blue-400 text-white rounded px-2 py-1 text-xs font-semibold">PayPal</div> */}
              <div className="bg-purple-600 text-white rounded px-2 py-1 text-xs font-semibold">Mastercard</div>
              {/* <div className="bg-red-500 text-white rounded px-2 py-1 text-xs font-semibold">Skrill</div> */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy;Copyright 2024 Selam Holiday | Design By <span className="text-primary">Eloi</span>
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">•</span>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
