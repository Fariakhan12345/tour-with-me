import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { destinations as initialDestinations, Destination } from '@/data/destinations';

interface StoreState {
  destinations: Destination[];
  itinerary: Destination[];
  addDestination: (dest: Destination) => void;
  addToItinerary: (dest: Destination) => void;
  removeFromItinerary: (id: string) => void;
  isInItinerary: (id: string) => boolean;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      destinations: initialDestinations,
      itinerary: [],
      addDestination: (dest) => set((state) => ({ 
        destinations: [...state.destinations, dest] 
      })),
      addToItinerary: (dest) => {
        if (!get().isInItinerary(dest.id)) {
          set((state) => ({ itinerary: [...state.itinerary, dest] }));
        }
      },
      removeFromItinerary: (id) => set((state) => ({
        itinerary: state.itinerary.filter((item) => item.id !== id)
      })),
      isInItinerary: (id) => get().itinerary.some((item) => item.id === id),
    }),
    {
      name: 'tour-with-me-storage',
    }
  )
);
