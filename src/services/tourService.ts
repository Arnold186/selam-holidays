
import { dbUtils } from "@/lib/dbUtils";

export interface Tour {
    id: string;
    title: string;
    location: string;
    image: string;
    duration?: string;
    groupSize: string;
    season?: string;
    price: number;
    discountPrice?: number;
    rating?: number; // Added rating field
    category: string;
    description: string;
    inclusions?: string;
    exclusions?: string;
    featured: boolean;

    createdAt: string;
}

export const tourService = {
    getTours: async (): Promise<Tour[]> => {
        try {
            return await dbUtils.getAll<Tour>();
        } catch (error) {
            console.error("Failed to fetch tours:", error);
            return [];
        }
    },

    getTourById: async (id: string): Promise<Tour | undefined> => {
        try {
            const tours = await tourService.getTours();
            return tours.find(t => t.id === id); // IDB 'get' requires key, but our id is string UUID. getKey might be better if ID is key.
            // Actually dbUtils.get(id) would be better if we keyed by ID.
            // Let's use dbUtils.get(id) if possible, but our dbUtils initDB used { keyPath: 'id' }.
            // So dbUtils.get(id) should work.

            return await dbUtils.get<Tour>(id);
        } catch (error) {
            console.error("Failed to fetch tour:", error);
            return undefined;
        }
    },

    getFeaturedTours: async (): Promise<Tour[]> => {
        const tours = await tourService.getTours();
        // Filter by featured AND sort by rating (highest first) if available
        return tours
            .filter(t => t.featured)
            .sort((a, b) => (b.rating || 0) - (a.rating || 0));
    },

    saveTour: async (tour: Omit<Tour, 'id' | 'createdAt'> & { id?: string }): Promise<Tour> => {
        if (tour.id) {
            // Update existing
            // We need to fetch it first to preserve createdAt if we care, or just overwrite.
            // Let's overwrite but keep createdAt if passed, or find it.
            const existing = await tourService.getTourById(tour.id);
            const updatedTour: Tour = {
                ...existing,
                ...tour,
                id: tour.id,
                createdAt: existing?.createdAt || new Date().toISOString()
            } as Tour;

            await dbUtils.put(updatedTour);
            return updatedTour;
        } else {
            // Create new
            const newTour: Tour = {
                ...tour,
                id: crypto.randomUUID(),
                createdAt: new Date().toISOString(),
            };
            await dbUtils.put(newTour);
            return newTour;
        }
    },

    deleteTour: async (id: string): Promise<void> => {
        await dbUtils.delete(id);
    },

    updateTourStatus: async (id: string, updates: Partial<Tour>): Promise<void> => {
        const existing = await tourService.getTourById(id);
        if (existing) {
            const updatedTour = { ...existing, ...updates };
            await dbUtils.put(updatedTour);
        }
    }
};
