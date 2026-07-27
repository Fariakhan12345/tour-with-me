"use client";

import { useState } from "react";
import { Season } from "@/data/destinations";
import { CloudSnow, Sun, Leaf, CloudRain } from "lucide-react";

interface SeasonSelectorProps {
  selectedSeason: Season | 'All';
  onSelect: (season: Season | 'All') => void;
}

const seasons: { name: Season | 'All'; icon: React.ReactNode; color: string }[] = [
  { name: 'All', icon: <MapIcon />, color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300' },
  { name: 'Spring', icon: <Leaf className="w-5 h-5" />, color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  { name: 'Summer', icon: <Sun className="w-5 h-5" />, color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
  { name: 'Autumn', icon: <CloudRain className="w-5 h-5" />, color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
  { name: 'Winter', icon: <CloudSnow className="w-5 h-5" />, color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
];

function MapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
      <line x1="9" y1="3" x2="9" y2="18"></line>
      <line x1="15" y1="6" x2="15" y2="21"></line>
    </svg>
  );
}

export default function SeasonSelector({ selectedSeason, onSelect }: SeasonSelectorProps) {
  return (
    <div className="w-full overflow-x-auto py-4 hide-scrollbar">
      <div className="flex gap-4 min-w-max mx-auto justify-center">
        {seasons.map((season) => (
          <button
            key={season.name}
            onClick={() => onSelect(season.name)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 border-2 
              ${selectedSeason === season.name 
                ? 'border-emerald-500 shadow-md scale-105 bg-white dark:bg-gray-800' 
                : 'border-transparent hover:border-gray-200 dark:hover:border-gray-700 ' + season.color}`}
          >
            {season.icon}
            <span>{season.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
