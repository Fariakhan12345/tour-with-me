export interface Story {
  id: string;
  authorName: string;
  authorImage: string;
  destination: string;
  date: string;
  rating: number;
  content: string;
  imageUrl?: string;
}

export const stories: Story[] = [
  {
    id: "1",
    authorName: "Sarah Ahmed",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    destination: "Hunza Valley",
    date: "April 2026",
    rating: 5,
    content: "Visiting Hunza during the cherry blossom season was a dream come true! The entire valley was covered in pink and white blooms against the backdrop of snow-capped peaks. The hospitality of the locals is unmatched.",
    imageUrl: "https://images.unsplash.com/photo-1586254575616-799e4ae4ca9e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "2",
    authorName: "John Doe",
    authorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
    destination: "Skardu",
    date: "August 2025",
    rating: 5,
    content: "The cold desert in Skardu at sunset is one of the most surreal landscapes I've ever seen. We drove up to Deosai Plains the next day. Make sure to bring warm clothes, even in August!",
    imageUrl: "https://images.unsplash.com/photo-1601022804837-4d5ebf5f3f31?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "3",
    authorName: "Ali Khan",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    destination: "Cholistan Desert",
    date: "February 2026",
    rating: 4,
    content: "Attended the Cholistan Jeep Rally. The vibe was electric! Camping under the stars near Derawar Fort was an unforgettable experience. Days were warm, but nights got quite chilly.",
    imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "4",
    authorName: "Fatima Noor",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    destination: "Karachi",
    date: "December 2025",
    rating: 5,
    content: "Karachi in winter is perfect. The weather is so mild. We spent evenings at Clifton beach and had the best biryani at Burns Road. A true food lover's paradise.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "5",
    authorName: "Michael Smith",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    destination: "Naran Kaghan",
    date: "July 2025",
    rating: 4,
    content: "Lake Saif-ul-Malook is breathtaking. The jeep ride up there was an adventure in itself! It does get a bit crowded in peak summer, so try to start your day early.",
    imageUrl: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "6",
    authorName: "Zainab Malik",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    destination: "Swat Valley",
    date: "May 2026",
    rating: 5,
    content: "Swat truly deserves its title as the Switzerland of the East. The drive through Mingora to Kalam was absolutely scenic. The waterfalls and lush green hills made it a trip I'll never forget!",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "7",
    authorName: "Hassan Raza",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    destination: "Islamabad",
    date: "October 2025",
    rating: 4,
    content: "Margalla Hills in autumn is a hidden gem. The golden leaves, the cool breeze, and the stunning sunset from Trail 5 — absolutely worth the hike. Faisal Mosque at night was breathtaking too.",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop"
  }
];
