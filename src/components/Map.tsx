"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

interface MapProps {
  lat: number;
  lng: number;
  name: string;
}

export default function Map({ lat, lng, name }: MapProps) {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 relative z-10">
      <MapContainer
        center={[lat, lng]}
        zoom={10}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            <div className="font-bold">{name}</div>
            <div className="text-sm">Coordinates: {lat}, {lng}</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
