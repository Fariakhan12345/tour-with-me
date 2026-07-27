"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import { ShieldCheck, Plus, CheckCircle2 } from "lucide-react";
import { Destination, Season } from "@/data/destinations";

export default function AdminPage() {
  const addDestination = useStore((state) => state.addDestination);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    region: "",
    type: "",
    description: "",
    imageUrl: "",
    weatherInfo: "",
    estimatedCost: "$$",
    lat: "33.6844",
    lng: "73.0479",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newDest: Destination = {
      id: formData.name.toLowerCase().replace(/\s+/g, '-'),
      name: formData.name,
      region: formData.region,
      type: formData.type,
      description: formData.description,
      bestMonths: ['June', 'July', 'August'], // Default for demo
      bestSeasons: ['Summer', 'Autumn'],
      imageUrl: formData.imageUrl || 'https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?q=80&w=2070&auto=format&fit=crop',
      galleryImages: [],
      weatherInfo: formData.weatherInfo,
      travelTips: ['Book in advance', 'Stay hydrated'],
      estimatedCost: formData.estimatedCost,
      coordinates: {
        lat: parseFloat(formData.lat),
        lng: parseFloat(formData.lng),
      }
    };

    addDestination(newDest);
    setSuccess(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSuccess(false);
      setFormData({
        id: "", name: "", region: "", type: "", description: "", imageUrl: "", weatherInfo: "", estimatedCost: "$$", lat: "33.6844", lng: "73.0479",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-2xl">
            <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-500" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Add new locations to the platform (Saved locally for demo).
            </p>
          </div>
        </div>

        {success && (
          <div className="mb-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-900/50 rounded-xl flex items-center gap-3 text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-semibold">Destination successfully added to Home and Map!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Destination Name</label>
              <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="e.g. Fairy Meadows" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Region</label>
              <input required name="region" value={formData.region} onChange={handleChange} type="text" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="e.g. Gilgit-Baltistan" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Location Type</label>
              <input required name="type" value={formData.type} onChange={handleChange} type="text" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="e.g. Mountains & Valleys" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Estimated Cost</label>
              <select name="estimatedCost" value={formData.estimatedCost} onChange={handleChange} className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                <option value="$">$ (Budget)</option>
                <option value="$$">$$ (Moderate)</option>
                <option value="$$$">$$$ (Expensive)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Latitude (for Map)</label>
              <input required name="lat" value={formData.lat} onChange={handleChange} type="text" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="e.g. 35.3900" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Longitude (for Map)</label>
              <input required name="lng" value={formData.lng} onChange={handleChange} type="text" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="e.g. 74.5800" />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Image URL (Unsplash)</label>
              <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} type="url" className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="https://images.unsplash.com/..." />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Description</label>
              <textarea required name="description" value={formData.description} onChange={handleChange} rows={4} className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none" placeholder="Describe the destination..."></textarea>
            </div>
          </div>

          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all active:scale-95">
            <Plus className="w-5 h-5" />
            Add Destination
          </button>
        </form>

      </div>
    </div>
  );
}
