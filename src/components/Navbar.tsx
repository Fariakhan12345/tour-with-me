"use client";

import { MapPin, Menu, X, BaggageClaim, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useStore } from "@/store/useStore";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const itinerary = useStore((state) => state.itinerary);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <div className="bg-emerald-600 p-2 rounded-lg group-hover:bg-emerald-500 transition-colors">
            <MapPin className="text-white w-5 h-5" />
          </div>
          <span className="self-center text-2xl font-extrabold whitespace-nowrap text-gray-900 dark:text-white tracking-tight">
            Tour With Me
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
          <Link href="/admin" className="hidden sm:flex text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-500 items-center gap-2 px-3 py-2 text-sm font-medium transition-colors">
            <ShieldCheck className="w-5 h-5" />
            <span>Admin</span>
          </Link>
          <Link href="/itinerary" className="relative inline-flex items-center justify-center p-2 text-gray-600 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-500 transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
            <BaggageClaim className="w-5 h-5" />
            {mounted && itinerary.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                {itinerary.length}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 w-full">
            <li>
              <Link href="/" className="block py-2 px-3 text-white bg-emerald-600 rounded-sm md:bg-transparent md:text-emerald-600 md:p-0 md:dark:text-emerald-500" aria-current="page">Explore</Link>
            </li>
            <li>
              <Link href="/stories" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-600 md:p-0 dark:text-white dark:hover:text-emerald-500">Stories</Link>
            </li>
            <li>
              <Link href="/guides" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-600 md:p-0 dark:text-white dark:hover:text-emerald-500">Travel Guides</Link>
            </li>
            <li className="md:hidden">
              <Link href="/admin" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-600 md:p-0 dark:text-white dark:hover:text-emerald-500">Admin Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
