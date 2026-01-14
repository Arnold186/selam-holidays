import { Tour } from "@/services/tourService";

export const initialTours: Omit<Tour, 'id' | 'createdAt'>[] = [
    {
        title: "Musanze Experience",
        location: "Musanze, Rwanda",
        duration: "4 Days / 3 Nights",
        price: 2938,
        category: "Gorilla Trekking",
        groupSize: "2+ People",
        featured: true,
        image: "https://images.unsplash.com/photo-1576487248805-4796a326a2e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Placeholder: Gorilla/Nature
        description: `Day 1: Arrival in Musanze
• Transfer from Kigali to Musanze (2.5 hrs drive).
• Visit Dian Fossey Gorilla Fund Museum (Ellen DeGeneres Campus).
• Evening exploration at Twin Lakes (Burera & Ruhondo).
• Overnight in Five volcanoes boutique hotel on full board

Day 2: Gorilla Trekking
• Early morning Gorilla Trekking in Volcanoes National Park.
• Afternoon cultural experience at Iby’Iwacu Cultural Village.
• Overnight in Five volcanoes boutique hotel on full board

Day 3: Golden Monkey Trekking & Musanze Caves
• Morning Golden Monkey Trekking in Volcanoes National Park.
• Afternoon visit to Musanze Caves.
• Transfer back to Kigali.
• Overnight Parkinn by Radisson Kigali on Bed and Breakfast

Day 4: Departure
• Morning relaxation / local market visit (optional).
• Departure for your flight`,
        inclusions: `• 1 Gorilla trekking permit (per person, according to nationality)
• 1 Golden Monkey trekking permit
• Entry fees for Musanze Caves, Dian Fossey Gorilla Fund Museum, and Twin Lakes visit
• Cultural experience at Iby’Iwacu village
• Private vehicle with English/French-speaking driver-guide
• 3 nights’ accommodation (mid-range lodge)
• Bottled water during transfers and activities
• All government taxes and service charges`,
        exclusions: `• International flights
• Visa fees
• Personal expenses (tips, laundry, etc.)`
    },
    {
        title: "Akagera Safari",
        location: "Akagera National Park, Rwanda",
        duration: "3 Days / 2 Nights",
        price: 925,
        category: "Safari",
        groupSize: "2+ People",
        featured: true,
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80", // Placeholder: Safari/Lion
        description: `Day 1: Arrival & Southern Circuit
• Transfer from Kigali to Akagera National Park (2.5 hrs).
• Half day game drive in the southern part of the park.
• Afternoon boat safari on Lake Ihema (hippos, crocodiles, birdlife).
• Overnight at Ruzizi Tented Lodge / Akagera Game Lodge. On Bed and breakfast

Day 2: Full Day Safari Adventure
• Early morning Big 5 game drive (lions, elephants, giraffes, buffaloes, rhinos, etc.).
• Transfer back to Kigali.
• Overnight Parkinn by Radisson Kigali

Day 3: Departure
• Morning last shopping or transfer to the airport for departure`,
        inclusions: `• Akagera National Park entry fees
• Full day game drive in the northern and southern circuits
• Boat safari on Lake Ihema
• Professional driver-guide and private vehicle
• 2 nights’ accommodation (mid-range lodge)
• Bottled water during transfers and game drives
• All government taxes and service charges`,
        exclusions: `• International flights
• Visa fees
• Personal expenses`
    },
    {
        title: "Nyungwe Rainforest",
        location: "Nyungwe National Park, Rwanda",
        duration: "4 Days / 3 Nights",
        price: 1583,
        category: "Nature",
        groupSize: "2+ People",
        featured: true,
        image: "https://images.unsplash.com/photo-1440552250969-95a63973dfd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Placeholder: Forest/Canopy
        description: `Day 1: Arrival & Canopy Walk
• Transfer from Kigali to Nyungwe National Park (5–6 hrs. scenic drive).
• Afternoon Canopy Walk adventure.
• Overnight at Nyungwe Top View Lodge on Bed and breakfast

Day 2: Chimpanzee Trekking & Nature Walk
• Early morning Chimpanzee Trekking.
• Afternoon bird watching / tea plantation visit.
• Overnight in Nyungwe Top View Lodge on Bed and breakfast

Day 3: Zipline & Waterfall Hike
• Morning Zipline adventure.
• Afternoon hike to Isumo Waterfall.
• Transfer back to Kigali.
• Overnight in Parkinn by Radisson Kigali on Bed and Breakfast

Day 4: Departure
• Transfer to the airport or do the last shopping.`,
        inclusions: `• 1 Chimpanzee trekking permit (per person, according to nationality)
• Canopy Walk permit
• Zipline adventure activity fee
• Isumo Waterfall hike fee
• Guided birdwatching / tea plantation visit (optional based on time)
• Private vehicle with English/French-speaking driver-guide
• 3 nights’ accommodation (mid-range lodge)
• Bottled water during transfers and activities
• All government taxes and service charges`,
        exclusions: `• International flights
• Visa fees
• Personal expenses`
    }
];
