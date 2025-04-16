
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-20 bg-gray-50">
        <div className="text-center max-w-lg mx-auto px-4">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-2xl font-semibold text-tertiary-dark mb-6">Page Not Found</p>
          <p className="text-tertiary mb-8">
            We're sorry, the page you requested could not be found. Please go back to the homepage or contact us for assistance.
          </p>
          <Link to="/" className="btn-primary">
            Return to Homepage
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
