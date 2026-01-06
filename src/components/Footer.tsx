import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img src="/selam LOGO (2).png" alt="Selam Holidays" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We make your travel dreams a reality. From local gems in Uganda to global adventures, we guide you every step of the way with expertise and care.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-bold text-white text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              {['About Us', 'Destinations', 'Tours', 'Flights', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-primary transition-colors flex items-center group">
                    {item} <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-white text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase font-bold">Call Us</span>
                  <span className="text-white">+256 762 283203</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase font-bold">Email Us</span>
                  <span className="text-white">info@selamtravels.com</span>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="font-bold text-white mb-2">Ready to travel?</h4>
              <p className="text-slate-400 text-sm mb-4">Book your dream vacation today with our expert agents.</p>
              <Button className="w-full bg-primary hover:bg-primary-dark">Book Now</Button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Selam Holidays. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
