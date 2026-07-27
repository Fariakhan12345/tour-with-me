"use client";

import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import DestinationCard from "@/components/DestinationCard";
import { BaggageClaim, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ItineraryPage() {
  const itinerary = useStore((state) => state.itinerary);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-slate-50 dark:bg-gray-950"></div>;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-2xl">
            <BaggageClaim className="w-8 h-8 text-emerald-600 dark:text-emerald-500" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              My Itinerary
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Your planned trips and saved destinations in Pakistan.
            </p>
          </div>
        </div>

        {itinerary.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 text-center shadow-sm border border-gray-100 dark:border-gray-800">
            <BaggageClaim className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your itinerary is empty</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Start exploring our beautiful destinations and add them to your itinerary to plan your perfect trip!
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all"
            >
              Explore Destinations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {itinerary.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
