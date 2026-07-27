"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?q=80&w=2070&auto=format&fit=crop"
          alt="Hunza Valley"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      </div>
      
      <div className="relative max-w-screen-xl mx-auto px-4 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Discover the True Beauty of <span className="text-emerald-400">Pakistan</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Your smart tourism guide. Find the perfect destination based on the season, weather, and your travel preferences.
          </p>
          
          <div className="mt-10 max-w-xl mx-auto sm:flex justify-center">
            <div className="relative flex-1 flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations (e.g. Hunza, Desert...)"
                className="w-full pl-12 pr-4 py-4 rounded-full border-0 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-lg text-gray-900 shadow-sm"
              />
            </div>
            <button 
              onClick={() => {
                document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="mt-4 sm:mt-0 sm:ml-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              Explore Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
