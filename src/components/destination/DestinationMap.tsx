import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default marker icon in React Leaflet
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const parks = [
  // TANZANIA
  { name: "Serengeti National Park", lat: -2.3333, lng: 34.8333, country: "Tanzania" },
  { name: "Ngorongoro Conservation Area", lat: -3.2044, lng: 35.4851, country: "Tanzania" },
  { name: "Mount Kilimanjaro National Park", lat: -3.0656, lng: 37.3590, country: "Tanzania" },
  { name: "Tarangire National Park", lat: -3.9556, lng: 36.0463, country: "Tanzania" },
  { name: "Lake Manyara National Park", lat: -3.5000, lng: 36.0000, country: "Tanzania" },
  { name: "Ruaha National Park", lat: -7.5000, lng: 35.0000, country: "Tanzania" },
  { name: "Nyerere National Park (Selous)", lat: -9.0000, lng: 37.4000, country: "Tanzania" },

  // KENYA
  { name: "Maasai Mara National Reserve", lat: -1.4862, lng: 35.1328, country: "Kenya" },
  { name: "Amboseli National Park", lat: -2.6358, lng: 37.2439, country: "Kenya" },
  { name: "Tsavo East National Park", lat: -2.7797, lng: 38.7728, country: "Kenya" },
  { name: "Tsavo West National Park", lat: -3.2000, lng: 38.0000, country: "Kenya" },
  { name: "Lake Nakuru National Park", lat: -0.3541, lng: 36.0828, country: "Kenya" },
  { name: "Mount Kenya National Park", lat: -0.1500, lng: 37.3000, country: "Kenya" },
  { name: "Samburu National Reserve", lat: 0.6133, lng: 37.5367, country: "Kenya" },

  // UGANDA
  { name: "Bwindi Impenetrable National Park", lat: -1.0561, lng: 29.6108, country: "Uganda" },
  { name: "Queen Elizabeth National Park", lat: -0.1370, lng: 30.0410, country: "Uganda" },
  { name: "Murchison Falls National Park", lat: 2.2530, lng: 31.8101, country: "Uganda" },
  { name: "Kibale National Park", lat: 0.5000, lng: 30.4000, country: "Uganda" },
  { name: "Kidepo Valley National Park", lat: 3.9000, lng: 33.8500, country: "Uganda" },

  // RWANDA
  { name: "Volcanoes National Park", lat: -1.4725, lng: 29.4914, country: "Rwanda" },
  { name: "Akagera National Park", lat: -1.8211, lng: 30.7090, country: "Rwanda" },
  { name: "Nyungwe National Park", lat: -2.4842, lng: 29.2300, country: "Rwanda" },
];

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

        <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 z-0">
          <MapContainer
            center={[-1.5, 34]}
            zoom={5}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", zIndex: 0 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {parks.map((park, index) => (
              <Marker key={index} position={[park.lat, park.lng]}>
                <Popup>
                  <div className="text-center">
                    <h3 className="font-bold text-primary">{park.name}</h3>
                    <p className="text-xs text-gray-500">{park.country}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default DestinationMap;
