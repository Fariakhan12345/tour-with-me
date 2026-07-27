"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import SeasonSelector from "@/components/SeasonSelector";
import { Season } from "@/data/destinations";

import { useStore } from "@/store/useStore";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

// Dynamically import Map (needs to be wrapped or custom, but we can reuse MapWrapper if we modify it or just import react-leaflet here)
const MapWithPins = dynamic(() => import("@/components/GlobalMap"), { ssr: false });

export default function Home() {
  const [selectedSeason, setSelectedSeason] = useState<Season | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState("");
  
  // Use global store so new destinations show up
  const destinations = useStore((state) => state.destinations);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSeason = selectedSeason === 'All' ? true : dest.bestSeasons.includes(selectedSeason);
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSeason && matchesSearch;
  });

  if (!mounted) return null; // Avoid hydration mismatch on initial render due to store

  return (
    <div className="min-h-screen flex flex-col">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8 w-full" id="destinations">
        
        {/* Global Map Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl tracking-tight">
              Explore on Map
            </h2>
          </div>
          <MapWithPins destinations={destinations} />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl tracking-tight">
            Find Your Next Adventure
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Select a season or search to see the best recommended spots in Pakistan.
          </p>
        </div>

        <SeasonSelector 
          selectedSeason={selectedSeason} 
          onSelect={setSelectedSeason} 
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            No destinations found for your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}
