
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Flights from "./pages/Flights";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Destination from "./pages/Destination";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ChatBot from "./components/ChatBot";
import TourDetail from "./pages/TourDetail";
import { tourService } from "@/services/tourService";
import { initialTours } from "@/data/initialTours";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  // Seed data on initial load
  useEffect(() => {
    const seedTours = async () => {
      const existingTours = await tourService.getTours();
      if (existingTours.length === 0) {
        console.log("Seeding initial tours...");
        for (const tour of initialTours) {
          await tourService.saveTour(tour);
        }
        console.log("Tours seeded successfully!");
      }
    };
    seedTours();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetail />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatBot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
