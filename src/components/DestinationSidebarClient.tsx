"use client";

import { CloudSun, Wallet, Calendar, Navigation } from "lucide-react";
import { Destination } from "@/data/destinations";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";

export default function DestinationSidebarClient({ destination }: { destination: Destination }) {
  const { addToItinerary, removeFromItinerary, isInItinerary } = useStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const inItinerary = mounted ? isInItinerary(destination.id) : false;

  const handleItineraryToggle = () => {
    if (inItinerary) {
      removeFromItinerary(destination.id);
    } else {
      addToItinerary(destination);
    }
  };

  const handleGetDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination.coordinates.lat},${destination.coordinates.lng}`, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Weather Widget (Mock) */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg sticky top-28">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-bold text-blue-100 mb-1">Current Weather</h3>
            <p className="text-4xl font-extrabold flex items-center gap-2">
              <CloudSun className="w-10 h-10" />
              22°C
            </p>
          </div>
          <div className="text-right">
            <p className="text-blue-100 text-sm">Real Feel: 24°C</p>
            <p className="text-blue-100 text-sm">Humidity: 45%</p>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-sm leading-relaxed mb-6">
          <strong>Expected:</strong> {destination.weatherInfo}
        </div>

        <div className="space-y-4 pt-6 border-t border-white/20">
          <h3 className="font-bold text-blue-50 mb-2 flex items-center gap-2 text-lg">
            <Wallet className="w-5 h-5" />
            Estimated Cost
          </h3>
          <div className="text-3xl font-bold text-white">
            {destination.estimatedCost}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 sticky top-[400px]">
        <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 text-lg">
          <Calendar className="w-5 h-5 text-emerald-600" />
          Best Time to Visit
        </h3>
        <div className="flex flex-wrap gap-2">
          {destination.bestMonths.map((month) => (
            <span key={month} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
              {month}
            </span>
          ))}
        </div>
        
        <div className="mt-8 space-y-3">
          <button 
            onClick={handleItineraryToggle}
            className={`w-full font-bold py-4 px-6 rounded-xl shadow-sm transition-all active:scale-95 ${inItinerary ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 dark:bg-red-900/20 dark:border-red-900/50 dark:text-red-400' : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'}`}
          >
            {inItinerary ? 'Remove from Itinerary' : 'Add to Itinerary'}
          </button>

          <button 
            onClick={handleGetDirections}
            className="w-full flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-xl shadow-sm transition-all active:scale-95 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Navigation className="w-5 h-5" />
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
}
