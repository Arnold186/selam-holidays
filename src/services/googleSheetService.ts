
import Papa from 'papaparse';

export interface Tour {
  id: number;
  title: string;
  location: string;
  image: string;
  duration: string;
  groupSize: string;
  season: string;
  price: number;
  rating: number;
  category: string;
  description: string;
  featured: boolean;
}

// Replace this with your actual published Google Sheet CSV URL
// Ensure the sheet has columns: id, title, location, image, duration, groupSize, season, price, rating, category, description, featured
export const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhVQvqTdDyoxzULYJdOtm_dcjMkiKWu3yfT9sT06xoxrA-Gdusu81GA4x3DiD23v02tAiWm40vJRvn/pub?output=csv';

const transformGoogleDriveUrl = (url: string) => {
  if (!url) return '';
  if (url.includes('drive.google.com')) {
    const dMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)|file\/d\/([a-zA-Z0-9_-]+)/);
    if (dMatch && (dMatch[1] || dMatch[2])) {
      const id = dMatch[1] || dMatch[2];
      return `https://drive.google.com/uc?export=view&id=${id}`;
    }
    const idMatch = url.match(/id=([a-zA-Z0-9_-]+)/);
    if (idMatch && idMatch[1]) {
      return `https://drive.google.com/uc?export=view&id=${idMatch[1]}`;
    }
  }
  return url;
};

export const fetchTours = async (): Promise<Tour[]> => {
  try {
    // For now, we will return the hardcoded data if the URL is the placeholder
    if (GOOGLE_SHEET_URL.includes('2PACX-1vR_q5y8o_W9j_c9op_E6a-eQJ4v_T2g_u_k5w_z_x_y_A_B_C_D')) {
      console.warn("Using fallback data because Google Sheet URL is not set.");
      return fallbackTours;
    }

    const response = await fetch(GOOGLE_SHEET_URL);
    const csvText = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          console.log("Raw Google Sheet Data:", results.data); // Debug log

          const tours = results.data.map((row: any) => {
            // Flexible matching for 'featured' column
            const isFeatured =
              row.featured === true || row.featured === 'TRUE' || row.featured === 'true' ||
              row.feature === true || row.feature === 'TRUE' || row.feature === 'true';

            return {
              id: row.id || 0,
              title: row.title || '',
              location: row.location || '',
              image: transformGoogleDriveUrl(row.image || ''),
              duration: row.duration || '',
              groupSize: row.groupSize || '',
              season: row.season || '',
              price: Number(String(row.price).replace(/[^0-9.]/g, '')) || 0,
              rating: Number(row.rating) || 0,
              category: row.category || '',
              description: row.description || '',
              featured: isFeatured,
            };
          }).filter((tour: Tour) => tour.id !== 0 && tour.title !== '');

          console.log("Parsed Tours:", tours); // Debug log
          resolve(tours);
        },
        error: (error: any) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error("Error fetching tours:", error);
    return [];
  }
};

const fallbackTours: Tour[] = [
  {
    id: 1,
    title: "Gorilla Trekking Experience",
    location: "Bwindi Forest, Uganda",
    image: "/image (11).png",
    duration: "3 days",
    groupSize: "2-8 people",
    season: "Year-round",
    price: 1200,
    rating: 4.9,
    category: "safari",
    description: "Experience the thrill of trekking mountain gorillas in their natural habitat.",
    featured: true,
  },
  {
    id: 2,
    title: "Serengeti Migration Safari",
    location: "Tanzania",
    image: "/image (3).png",
    duration: "7 days",
    groupSize: "4-12 people",
    season: "Jul-Oct",
    price: 2300,
    rating: 4.8,
    category: "safari",
    description: "Witness the great migration in the Serengeti.",
    featured: true,
  },
  {
    id: 3,
    title: "Maasai Cultural Experience",
    location: "Maasai Mara, Kenya",
    image: "/image(17).jpg",
    duration: "4 days",
    groupSize: "2-10 people",
    season: "Year-round",
    price: 1100,
    rating: 4.7,
    category: "cultural",
    description: "Immerse yourself in Maasai culture.",
    featured: true,
  },
  {
    id: 4,
    title: "Rwanda Historical Tour",
    location: "Kigali, Rwanda",
    image: "/image(20).jpg",
    duration: "5 days",
    groupSize: "2-10 people",
    season: "Year-round",
    price: 1400,
    rating: 4.8,
    category: "cultural",
    description: "Explore the rich history and culture of Rwanda.",
    featured: false,
  },
  {
    id: 5,
    title: "Murchison Falls Adventure",
    location: "Uganda",
    image: "/image(19).jpeg",
    duration: "4 days",
    groupSize: "4-12 people",
    season: "Dec-Mar",
    price: 1250,
    rating: 4.6,
    category: "adventure",
    description: "Adventure at the powerful Murchison Falls.",
    featured: false,
  },
  {
    id: 6,
    title: "Dubai City Break",
    location: "Dubai, UAE",
    image: "/Dubai.jpeg",
    duration: "5 days",
    groupSize: "2-10 people",
    season: "Oct-Apr",
    price: 1800,
    rating: 4.9,
    category: "holiday",
    description: "Enjoy a luxury city break in Dubai.",
    featured: true,
  },
];
