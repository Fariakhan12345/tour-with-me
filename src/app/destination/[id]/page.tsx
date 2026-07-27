import { destinations } from "@/data/destinations";
import { ArrowLeft, Calendar, CloudSun, MapPin, Wallet, Info, Camera, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Metadata } from "next";

import MapWrapper from "@/components/MapWrapper";
import DestinationSidebarClient from "@/components/DestinationSidebarClient";

type Props = {
  params: Promise<{ id: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const destination = destinations.find((d) => d.id === id);
  if (!destination) {
    return { title: 'Not Found' };
  }
  return {
    title: `${destination.name} | SeasonScape Pakistan`,
    description: destination.description,
  };
}

export default async function DestinationPage({ params }: Props) {
  const { id } = await params;
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    notFound();
  }

  return (
    <div className="bg-slate-50 dark:bg-gray-950 min-h-screen pb-20">
      {/* Hero Image */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        
        <div className="absolute top-24 left-4 sm:left-8 z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full transition-all">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 max-w-screen-xl mx-auto">
          <div className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            {destination.region}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
            {destination.name}
          </h1>
          <div className="flex items-center text-gray-300 gap-2">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{destination.type}</span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* About */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Info className="w-6 h-6 text-emerald-600" />
              About {destination.name}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {destination.description}
            </p>
          </section>

          {/* Photo Gallery */}
          {destination.galleryImages && destination.galleryImages.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Camera className="w-6 h-6 text-emerald-600" />
                Photo Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.galleryImages.map((img, idx) => (
                  <div key={idx} className={`relative rounded-xl overflow-hidden shadow-sm ${idx === 0 ? 'sm:col-span-2 aspect-video' : 'aspect-square'}`}>
                    <Image src={img} alt={`${destination.name} photo ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interactive Map */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-emerald-600" />
              Location Map
            </h2>
            <MapWrapper lat={destination.coordinates.lat} lng={destination.coordinates.lng} name={destination.name} />
          </section>

          {/* Travel Tips */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              Travel Tips
            </h2>
            <ul className="space-y-3">
              {destination.travelTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Sidebar */}
        <DestinationSidebarClient destination={destination} />
      </div>
    </div>
  );
}
