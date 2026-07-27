export type Season = 'Spring' | 'Summer' | 'Autumn' | 'Winter';

export interface Destination {
  id: string;
  name: string;
  region: string;
  type: string;
  description: string;
  bestMonths: string[];
  bestSeasons: Season[];
  imageUrl: string;
  galleryImages: string[];
  weatherInfo: string;
  travelTips: string[];
  estimatedCost: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const destinations: Destination[] = [
  {
    id: 'hunza-valley',
    name: 'Hunza Valley',
    region: 'Gilgit-Baltistan',
    type: 'Mountains',
    description: 'A mountainous valley in the Gilgit-Baltistan region of Pakistan. Known for its stunning scenery, especially during the cherry blossom season in spring and the vibrant colors in autumn.',
    bestMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    bestSeasons: ['Spring', 'Summer', 'Autumn'],
    imageUrl: 'https://images.unsplash.com/photo-1586254575616-799e4ae4ca9e?q=80&w=2070&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1586254575616-799e4ae4ca9e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618082938244-e5ba01976d78?q=80&w=2070&auto=format&fit=crop'
    ],
    weatherInfo: 'Pleasant in summer (15°C to 25°C), cold in winter (can drop below 0°C).',
    travelTips: ['Book hotels in advance during peak summer', 'Try the local walnut cake', 'Visit Baltit and Altit Forts'],
    estimatedCost: '$$$',
    coordinates: { lat: 36.3167, lng: 74.6500 }
  },
  {
    id: 'skardu',
    name: 'Skardu',
    region: 'Gilgit-Baltistan',
    type: 'Mountains & Lakes',
    description: 'The gateway to some of the highest peaks in the world, including K2. Skardu is famous for its crystal clear lakes, cold deserts, and rugged landscapes.',
    bestMonths: ['June', 'July', 'August', 'September'],
    bestSeasons: ['Summer', 'Autumn'],
    imageUrl: 'https://images.unsplash.com/photo-1601022804837-4d5ebf5f3f31?q=80&w=2070&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1601022804837-4d5ebf5f3f31?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618082938244-e5ba01976d78?q=80&w=2070&auto=format&fit=crop'
    ],
    weatherInfo: 'Summers are warm but nights are cool. Winters are extremely harsh and snow-bound.',
    travelTips: ['Carry warm clothing even in summer', 'Visit Shangrila Resort and Deosai National Park', 'Acclimatize properly for high altitudes'],
    estimatedCost: '$$$',
    coordinates: { lat: 35.2971, lng: 75.6333 }
  },
  {
    id: 'naran-kaghan',
    name: 'Naran Kaghan Valley',
    region: 'Khyber Pakhtunkhwa',
    type: 'Valleys & Lakes',
    description: 'A popular tourist destination known for its alpine meadows and pristine lakes, including the famous Lake Saif-ul-Malook.',
    bestMonths: ['June', 'July', 'August', 'September'],
    bestSeasons: ['Summer'],
    imageUrl: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586254575616-799e4ae4ca9e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=2074&auto=format&fit=crop'
    ],
    weatherInfo: 'Cool in summer (10°C to 20°C). Roads usually close in winter due to heavy snowfall.',
    travelTips: ['Hire a jeep for Babusar Top and Saif-ul-Malook', 'Roads can be crowded during summer holidays', 'Taste the local trout fish'],
    estimatedCost: '$$',
    coordinates: { lat: 34.9083, lng: 73.6500 }
  },
  {
    id: 'murree-nathiagali',
    name: 'Murree & Nathiagali',
    region: 'Punjab / KP',
    type: 'Hill Station',
    description: 'Easily accessible hill stations known for pine forests and colonial-era architecture. Very popular for quick weekend getaways and winter snowfall.',
    bestMonths: ['December', 'January', 'February', 'May', 'June', 'July'],
    bestSeasons: ['Winter', 'Summer'],
    imageUrl: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2088&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2088&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=2070&auto=format&fit=crop'
    ],
    weatherInfo: 'Mild summers, snowy and cold winters.',
    travelTips: ['Avoid peak holidays if you dislike crowds', 'Great for a short 2-day trip from Islamabad', 'Enjoy the hiking trails in Nathiagali'],
    estimatedCost: '$$',
    coordinates: { lat: 33.9070, lng: 73.3943 }
  },
  {
    id: 'karachi',
    name: 'Karachi & Coastal Areas',
    region: 'Sindh',
    type: 'Coastal & City',
    description: 'The bustling metropolis by the Arabian Sea. Known for its food, history, and nearby beaches like French Beach and Ormara (Balochistan coast).',
    bestMonths: ['November', 'December', 'January', 'February'],
    bestSeasons: ['Winter'],
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2076&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2076&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop'
    ],
    weatherInfo: 'Winters are very mild and pleasant. Summers are hot and extremely humid.',
    travelTips: ['Try the street food at Burns Road', 'Visit Mohatta Palace and Clifton Beach', 'Plan coastal trips towards Balochistan for cleaner beaches'],
    estimatedCost: '$$',
    coordinates: { lat: 24.8607, lng: 67.0011 }
  },
  {
    id: 'cholistan-desert',
    name: 'Cholistan Desert',
    region: 'Punjab',
    type: 'Desert & Historical',
    description: 'A vast desert known for its rich culture, camel safaris, and the majestic Derawar Fort.',
    bestMonths: ['November', 'December', 'January', 'February', 'March'],
    bestSeasons: ['Winter', 'Spring'],
    imageUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2076&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2076&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2074&auto=format&fit=crop'
    ],
    weatherInfo: 'Scorching hot in summer (can exceed 45°C). Winters are cool and pleasant.',
    travelTips: ['Camp under the stars near Derawar Fort', 'Attend the Cholistan Jeep Rally if visiting in February', 'Respect local traditions'],
    estimatedCost: '$',
    coordinates: { lat: 28.7667, lng: 71.3333 }
  },
  {
    id: 'islamabad',
    name: 'Islamabad',
    region: 'Capital Territory',
    type: 'City & Nature',
    description: 'The green and serene capital city of Pakistan, nestled against the Margalla Hills. Perfect for hiking, dining, and cultural sites.',
    bestMonths: ['March', 'April', 'October', 'November'],
    bestSeasons: ['Spring', 'Autumn'],
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=2070&auto=format&fit=crop'
    ],
    weatherInfo: 'Spring and Autumn are beautiful. Summers are hot and humid, while winters can be quite chilly.',
    travelTips: ['Hike Trail 3 or Trail 5 in the Margalla Hills', 'Visit Faisal Mosque at sunset', 'Dine at Monal for a city view'],
    estimatedCost: '$$$',
    coordinates: { lat: 33.6844, lng: 73.0479 }
  },
  {
    id: 'swat-valley',
    name: 'Swat Valley',
    region: 'Khyber Pakhtunkhwa',
    type: 'Valleys & Rivers',
    description: 'Often called the "Switzerland of the East", Swat is known for its lush green pine forests, snow-capped peaks, and the Swat River.',
    bestMonths: ['April', 'May', 'June', 'September', 'October'],
    bestSeasons: ['Spring', 'Summer', 'Autumn'],
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586254575616-799e4ae4ca9e?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618082938244-e5ba01976d78?q=80&w=2070&auto=format&fit=crop'
    ],
    weatherInfo: 'Pleasant summers. Winters bring heavy snow in upper Swat (Malam Jabba).',
    travelTips: ['Go skiing in Malam Jabba in winter', 'Visit Kalam and Mahodand Lake in summer', 'Enjoy the peach orchards in early summer'],
    estimatedCost: '$$',
    coordinates: { lat: 35.2227, lng: 72.4258 }
  }
];
