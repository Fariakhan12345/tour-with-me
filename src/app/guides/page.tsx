import { BookOpen, Backpack, Globe2, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Guides | SeasonScape Pakistan",
  description: "Essential travel guidance, packing tips, and cultural norms for tourists in Pakistan.",
};

export default function GuidesPage() {
  return (
    <div className="bg-slate-50 dark:bg-gray-950 min-h-screen py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Travel <span className="text-emerald-600">Guidance</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know before you pack your bags and head to Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Section 1: Cultural Norms */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-6">
              <Globe2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cultural Etiquette</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Dress modestly, especially in rural areas and religious sites. Women should carry a scarf for mosques.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Always ask for permission before taking photographs of locals, particularly women.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Use your right hand for eating, passing objects, and greeting.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: Packing List */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
              <Backpack className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What to Pack</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Sturdy hiking boots if you plan to visit the Northern Areas.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Power banks. Power outages can happen, especially in remote valleys.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Layers for the mountains — even in summer, nights can drop to near freezing.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Transport & Safety */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm md:col-span-2">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Transport & Safety Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Pakistan is generally very safe for tourists. The locals are famous for their extreme hospitality and will often go out of their way to help you. However, always carry a copy of your passport and visa, especially when traveling through security checkpoints in Gilgit-Baltistan or near borders.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                For transport, apps like InDrive and Bykea work great in major cities (Lahore, Karachi, Islamabad). For the mountains, hire local 4x4 Jeeps for off-road tracks (like Fairy Meadows or Lake Saif-ul-Malook) as standard cars won't make it.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
