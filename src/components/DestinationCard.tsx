import Link from "next/link";
import { Destination } from "@/data/destinations";
import { MapPin, Wallet, Calendar } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destination/${destination.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100 dark:border-gray-700">
        <div className="relative h-64 overflow-hidden">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 px-3 py-1 rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            {destination.type}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <MapPin className="w-4 h-4" />
            <span>{destination.region}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
            {destination.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
            {destination.description}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-emerald-500" />
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {destination.bestSeasons.join(', ')}
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Wallet className="w-4 h-4 text-emerald-500" />
              <span>{destination.estimatedCost}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
