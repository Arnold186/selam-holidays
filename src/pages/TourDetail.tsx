import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tourService, Tour } from "@/services/tourService";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar as CalendarIcon, MapPin, Clock, User, CheckCircle2, Share2, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const TourDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState<Tour | null>(null);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState<Date>();
    const [guests, setGuests] = useState(1);
    const [name, setName] = useState("");

    // WhatsApp Number - Replace with actual number
    const WHATSAPP_NUMBER = "+250785713489";

    useEffect(() => {
        const loadTour = async () => {
            if (id) {
                const foundTour = await tourService.getTourById(id);
                if (foundTour) {
                    setTour(foundTour);
                }
            }
            setLoading(false);
        };

        loadTour();
    }, [id]);

    const handleBook = (e: React.FormEvent) => {
        e.preventDefault();
        if (!tour || !date) return;

        const formattedDate = format(date, "PPP");
        const message = `Hello, I would like to book the *${tour.title}*.\n\n*Details:*\nName: ${name}\nDate: ${formattedDate}\nGuests: ${guests}\nTotal Price: $${tour.price * guests}\n\nPlease confirm availability.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!tour) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Tour not found</h2>
                <Button onClick={() => navigate('/tours')}>Back to Tours</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <main className="flex-grow pt-24 pb-16 px-4">
                <div className="container-custom max-w-6xl mx-auto">
                    <Button
                        variant="ghost"
                        className="mb-6 hover:bg-transparent hover:text-primary pl-0"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                    </Button>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Images & Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] w-full relative group">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80';
                                    }}
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary font-bold px-4 py-2 rounded-full shadow-sm">
                                    ${tour.price} <span className="text-sm font-normal text-tertiary">/ person</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <div className="flex flex-wrap gap-4 mb-6 text-sm text-tertiary">
                                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-lg">
                                        <Clock className="w-4 h-4 mr-2 text-primary" />
                                        {tour.duration}
                                    </div>
                                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-lg">
                                        <User className="w-4 h-4 mr-2 text-primary" />
                                        {tour.groupSize}
                                    </div>
                                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-lg">
                                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                                        {tour.location}
                                    </div>
                                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-lg">
                                        <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                                        {tour.category}
                                    </div>
                                </div>

                                <h1 className="text-3xl font-bold text-tertiary-dark mb-4">{tour.title}</h1>

                                <div className="prose max-w-none text-tertiary mb-8">
                                    <h3 className="text-xl font-semibold mb-2 text-tertiary-dark">Description</h3>
                                    {tour.description.split('\n').map((paragraph, index) => (
                                        <p key={index} className="mb-4">{paragraph}</p>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {tour.inclusions && (
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4 text-tertiary-dark flex items-center">
                                                <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                                                Inclusions
                                            </h3>
                                            <ul className="space-y-2">
                                                {tour.inclusions.split('\n').filter(item => item.trim()).map((item, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="mr-2 text-green-600">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {tour.exclusions && (
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4 text-tertiary-dark flex items-center">
                                                <div className="w-5 h-5 mr-2 flex items-center justify-center rounded-full border border-red-500 text-red-500 text-xs">✕</div>
                                                Exclusions
                                            </h3>
                                            <ul className="space-y-2">
                                                {tour.exclusions.split('\n').filter(item => item.trim()).map((item, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="mr-2 text-red-500">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-bold mb-6">Book This Tour</h3>

                                <form onSubmit={handleBook} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="Enter your name"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Preferred Date</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full justify-start text-left font-normal",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                    disabled={(date) => date < new Date()}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="guests">Number of Guests</Label>
                                        <Input
                                            id="guests"
                                            type="number"
                                            min="1"
                                            value={guests}
                                            onChange={(e) => setGuests(parseInt(e.target.value))}
                                            required
                                        />
                                    </div>

                                    <div className="pt-4 border-t border-gray-100 space-y-4">
                                        <div className="flex justify-between items-center text-lg font-semibold">
                                            <span>Total:</span>
                                            <span>${tour.price * guests}</span>
                                        </div>

                                        <Button type="submit" className="w-full h-12 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white">
                                            Book via WhatsApp
                                        </Button>
                                        <p className="text-xs text-center text-gray-500">
                                            You will be redirected to WhatsApp to confirm your booking details.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TourDetail;
