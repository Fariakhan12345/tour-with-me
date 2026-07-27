"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { Destination } from "@/data/destinations";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface GlobalMapProps {
  destinations: Destination[];
}

export default function GlobalMap({ destinations }: GlobalMapProps) {
  // Center of Pakistan roughly
  const center: [number, number] = [30.3753, 69.3451];

  return (
    <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 relative z-10">
      <MapContainer
        center={center}
        zoom={5}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {destinations.map((dest) => (
          <Marker key={dest.id} position={[dest.coordinates.lat, dest.coordinates.lng]}>
            <Popup className="custom-popup">
              <div className="w-48">
                <div className="h-24 w-full relative mb-2 rounded-lg overflow-hidden">
                  <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{dest.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{dest.region}</p>
                <Link 
                  href={`/destination/${dest.id}`}
                  className="inline-flex items-center gap-1 text-emerald-600 text-xs font-semibold hover:text-emerald-700"
                >
                  View Details <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
