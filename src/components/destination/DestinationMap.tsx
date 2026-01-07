import React from "react";

const DestinationMap = () => {
  return (
    <section className="section-container bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">INTERACTIVE MAP</span>
          <h2 className="section-title">Find Your Next Adventure</h2>
          <p className="max-w-3xl mx-auto text-tertiary mt-4">
            Explore our destinations on the map and discover the perfect location for your next journey.
          </p>
        </div>

        <div className="relative h-[500px] w-full bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://maps.google.com/maps?q=Uganda+Rwanda+Kenya+Tanzania&t=&z=5&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Destinations Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DestinationMap;
