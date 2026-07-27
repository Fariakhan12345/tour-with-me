import { stories } from "@/data/stories";
import { Star, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traveler Stories | Tour With Me",
  description: "Read amazing travel stories and reviews from tourists who explored Pakistan.",
};

export default function StoriesPage() {
  return (
    <div className="bg-slate-50 dark:bg-gray-950 min-h-screen py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Traveler <span className="text-emerald-600">Stories</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real experiences from travelers who explored the breathtaking landscapes of Pakistan. Get inspired for your next journey!
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="break-inside-avoid bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {story.imageUrl && (
                <img 
                  src={story.imageUrl} 
                  alt={`Trip to ${story.destination}`} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < story.rating ? 'fill-current' : 'text-gray-300 dark:text-gray-700'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium ml-auto">{story.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  {story.destination}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{story.content}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <img 
                    src={story.authorImage} 
                    alt={story.authorName} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{story.authorName}</p>
                    <p className="text-xs text-gray-500">Verified Traveler</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
