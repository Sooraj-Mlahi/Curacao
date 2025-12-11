
import heroImage from "@assets/generated_images/curaçao_hero_image.png";
import blueBayImage from "@assets/generated_images/blue_bay_curaçao.png";
import mamboImage from "@assets/generated_images/mambo_beach_curaçao.png";
import kleinImage from "@assets/generated_images/klein_curaçao.png";
import willemstadImage from "@assets/generated_images/willemstad_city_center.png";
import christoffelImage from "@assets/generated_images/christoffel_national_park.png";

export interface Destination {
  id: string;
  name: string;
  image: string;
  shortDesc: string;
  details: {
    bestTime: string;
    food: string;
    activities: string[];
    tips: string;
  };
}

export const destinations: Destination[] = [
  {
    id: "willemstad",
    name: "Willemstad City Center",
    image: willemstadImage,
    shortDesc: "A UNESCO World Heritage site famous for its colorful colonial architecture.",
    details: {
      bestTime: "Morning (8 AM - 11 AM) to beat the heat and crowds.",
      food: "Keshi Yena at Governeur de Rouville.",
      activities: ["Queen Emma Bridge", "Handelskade Photography", "Kura Hulanda Museum"],
      tips: "Wear comfortable walking shoes. The streets are cobblestone.",
    },
  },
  {
    id: "blue-bay",
    name: "Blue Bay Beach",
    image: blueBayImage,
    shortDesc: "A family-friendly beach with calm waters and excellent snorkeling.",
    details: {
      bestTime: "All day. Sunset is particularly beautiful.",
      food: "Beach Bar snacks and cocktails.",
      activities: ["Snorkeling", "Golf", "Relaxing on sunbeds"],
      tips: "Bring your own snorkel gear if you have it, though rentals are available.",
    },
  },
  {
    id: "mambo-beach",
    name: "Mambo Beach",
    image: mamboImage,
    shortDesc: "The place to be for nightlife, shopping, and beach vibes.",
    details: {
      bestTime: "Late afternoon transitioning into evening nightlife.",
      food: "Fresh seafood at Madero Ocean Club.",
      activities: ["Shopping", "Beach Parties", "Open-air Cinema"],
      tips: "It gets crowded on weekends. Arrive early for a good spot.",
    },
  },
  {
    id: "klein-curacao",
    name: "Klein Curaçao",
    image: kleinImage,
    shortDesc: "An uninhabited island paradise with white sands and sea turtles.",
    details: {
      bestTime: "Full day boat trip (start 7 AM).",
      food: "BBQ lunch provided by most boat tours.",
      activities: ["Swimming with Turtles", "Visiting the Lighthouse", "Shipwreck exploration"],
      tips: "Bring high-SPF sunscreen and motion sickness pills for the boat ride.",
    },
  },
  {
    id: "christoffel",
    name: "Christoffel National Park",
    image: christoffelImage,
    shortDesc: "The largest national park, home to the island's highest peak.",
    details: {
      bestTime: "Very early morning (start hiking by 6:30 AM).",
      food: "Pack plenty of water and energy bars.",
      activities: ["Hiking Mount Christoffel", "Scenic Drive", "Bird Watching"],
      tips: "Climbing the mountain is not allowed after 10 AM due to heat.",
    },
  },
];

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const mockAIResponse = async (query: string): Promise<string> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes("hello") || lowerQuery.includes("hi")) {
    return "Bon bini! I'm your Curaçao travel assistant. How can I help you plan your island getaway today?";
  }
  if (lowerQuery.includes("beach")) {
    return "Curaçao has over 35 spectacular beaches! For snorkeling, I recommend **Blue Bay** or **Playa Lagun**. For a lively atmosphere with bars and shops, **Mambo Beach** is perfect. If you want a secluded paradise, a day trip to **Klein Curaçao** is a must. Which vibe do you prefer?";
  }
  if (lowerQuery.includes("food") || lowerQuery.includes("eat") || lowerQuery.includes("restaurant")) {
    return "You're in for a treat! Local Krioyo food is delicious. You must try **Keshi Yena** (stuffed cheese) and **Stoba** (stew). For a great local experience, visit **Plasa Bieu** in Willemstad. For fine dining with a view, try **Fort Nassau**.";
  }
  if (lowerQuery.includes("itinerary") || lowerQuery.includes("plan")) {
    return "I'd love to help with that! Here's a quick 3-day idea:\n\n**Day 1:** Explore historic Willemstad and walk across the pontoon bridge.\n**Day 2:** Beach hopping at Grote Knip and Cas Abao.\n**Day 3:** Adventure in Christoffel Park or a boat trip to Klein Curaçao.\n\nDoes that sound like your style?";
  }
  if (lowerQuery.includes("weather")) {
    return "It's almost always sunny in Curaçao! Expect temperatures around 28-30°C (84-86°F) with a cooling trade wind. Don't forget sunscreen!";
  }

  return "That's a great question about Curaçao! I'm learning more every day. I'd recommend checking out the 'Explore' tab for detailed guides on the best spots, or ask me specifically about beaches, food, or activities.";
};

export const initialAdminData = [
  { id: 1, query: "Best beaches for kids?", timestamp: "2023-10-24 10:30" },
  { id: 2, query: "How to get to Klein Curacao", timestamp: "2023-10-24 11:15" },
  { id: 3, query: "Vegetarian restaurants Willemstad", timestamp: "2023-10-24 12:45" },
  { id: 4, query: "Car rental tips", timestamp: "2023-10-24 14:20" },
  { id: 5, query: "Is it safe at night?", timestamp: "2023-10-24 16:00" },
];
