
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, MapPin, Users, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface HotelSearchProps {
    onSearch?: (filters: any) => void;
}

const HotelSearch = ({ onSearch }: HotelSearchProps) => {
    const [searchFilters, setSearchFilters] = useState({
        searchType: "quick", // quick, advanced
        destination: "",
        checkIn: undefined as Date | undefined,
        checkOut: undefined as Date | undefined,
        rooms: "1",
        adults: "1",
        children: "0",
        nationality: "RWANDA"
    });

    const [date, setDate] = useState<Date>();

    const handleSearch = () => {
        console.log("Hotel Search filters:", searchFilters);
        onSearch?.(searchFilters);
    };

    return (
        <div className="space-y-8">
            {/* Search Type Radio */}
            <RadioGroup
                defaultValue="quick"
                onValueChange={(value) => setSearchFilters({ ...searchFilters, searchType: value })}
                className="flex gap-8 mb-8"
            >
                {[
                    { id: "quick", label: "Quick Search" },
                    { id: "advanced", label: "Advanced Search" }
                ].map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 group cursor-pointer">
                        <RadioGroupItem value={option.id} id={option.id} className="border-[#00204E] text-[#00204E]" />
                        <Label htmlFor={option.id} className="cursor-pointer font-medium text-[#00204E] group-hover:text-[#00204E]/80 transition-colors text-base">{option.label}</Label>
                    </div>
                ))}
            </RadioGroup>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Destination - Full width on top row for better layout match */}
                <div className="md:col-span-8 group">
                    <Label htmlFor="destination" className="mb-2 block font-bold text-gray-700 text-sm uppercase tracking-wide">Destination, Zone, Hotel</Label>
                    <div className="relative transition-transform duration-300 focus-within:scale-[1.02]">
                        <Input
                            id="destination"
                            placeholder="Where are you going?"
                            value={searchFilters.destination}
                            onChange={(e) => setSearchFilters({ ...searchFilters, destination: e.target.value })}
                            className="h-14 pl-12 rounded-xl border-gray-200 focus:border-[#00204E] focus:ring-[#00204E]/20 text-lg font-medium shadow-sm transition-all"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#00204E] transition-colors" size={20} />
                    </div>
                </div>

                {/* Nationality */}
                <div className="md:col-span-4">
                    <Label className="mb-2 block font-bold text-gray-700 text-sm uppercase tracking-wide">Guest Nationality</Label>
                    <Select
                        value={searchFilters.nationality}
                        onValueChange={(value) => setSearchFilters({ ...searchFilters, nationality: value })}
                    >
                        <SelectTrigger className="h-14 rounded-xl border-gray-200 focus:ring-[#00204E]/20 text-lg font-medium">
                            <SelectValue placeholder="Select Nationality" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="RWANDA">RWANDA</SelectItem>
                            <SelectItem value="KENYA">KENYA</SelectItem>
                            <SelectItem value="UGANDA">UGANDA</SelectItem>
                            <SelectItem value="TANZANIA">TANZANIA</SelectItem>
                            <SelectItem value="OTHER">OTHER</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Check-in Date */}
                <div className="md:col-span-3 group">
                    <Label className="mb-2 block font-bold text-gray-700 text-sm uppercase tracking-wide">Check-in Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-medium h-14 rounded-xl border-gray-200 hover:border-[#00204E] hover:text-[#00204E] transition-all duration-300 shadow-sm group-hover:shadow-md",
                                    !searchFilters.checkIn && "text-muted-foreground"
                                )}
                            >
                                <Calendar className={`mr-3 h-5 w-5 ${searchFilters.checkIn ? "text-[#00204E]" : "text-gray-400"}`} />
                                {searchFilters.checkIn ? (
                                    <span className="text-lg text-gray-900">{format(searchFilters.checkIn, "dd/MM/yyyy")}</span>
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <CalendarComponent
                                mode="single"
                                selected={searchFilters.checkIn}
                                onSelect={(date) => setSearchFilters({ ...searchFilters, checkIn: date })}
                                initialFocus
                                className="rounded-xl border shadow-xl"
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Check-out Date */}
                <div className="md:col-span-3 group">
                    <Label className="mb-2 block font-bold text-gray-700 text-sm uppercase tracking-wide">Check-out Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-medium h-14 rounded-xl border-gray-200 hover:border-[#00204E] hover:text-[#00204E] transition-all duration-300 shadow-sm group-hover:shadow-md",
                                    !searchFilters.checkOut && "text-muted-foreground"
                                )}
                            >
                                <Calendar className={`mr-3 h-5 w-5 ${searchFilters.checkOut ? "text-[#00204E]" : "text-gray-400"}`} />
                                {searchFilters.checkOut ? (
                                    <span className="text-lg text-gray-900">{format(searchFilters.checkOut, "dd/MM/yyyy")}</span>
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <CalendarComponent
                                mode="single"
                                selected={searchFilters.checkOut}
                                onSelect={(date) => setSearchFilters({ ...searchFilters, checkOut: date })}
                                initialFocus
                                className="rounded-xl border shadow-xl"
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Room */}
                <div className="md:col-span-2">
                    <Label className="mb-2 block font-bold text-gray-700 text-center text-sm uppercase tracking-wide">Room</Label>
                    <Select
                        value={searchFilters.rooms}
                        onValueChange={(value) => setSearchFilters({ ...searchFilters, rooms: value })}
                    >
                        <SelectTrigger className="h-14 rounded-xl border-gray-200 focus:ring-[#00204E]/20 text-lg font-medium text-center justify-center">
                            <SelectValue placeholder="1" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4+</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Room Label (Visual only from image "1. room") */}
                <div className="md:col-span-2 flex items-center justify-center h-14 pb-0">
                    <span className="font-bold text-[#00204E] text-lg">1. Room</span>
                </div>

                {/* Adult */}
                <div className="md:col-span-1">
                    <Label className="mb-2 block font-bold text-gray-700 text-center text-sm uppercase tracking-wide">Adult</Label>
                    <Select
                        value={searchFilters.adults}
                        onValueChange={(value) => setSearchFilters({ ...searchFilters, adults: value })}
                    >
                        <SelectTrigger className="h-14 rounded-xl border-gray-200 focus:ring-[#00204E]/20 text-lg font-medium text-center justify-center px-2">
                            <SelectValue placeholder="1" />
                        </SelectTrigger>
                        <SelectContent>
                            {[1, 2, 3, 4, 5, 6].map(num => (
                                <SelectItem key={num} value={num.toString()} className="justify-center">{num}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Child */}
                <div className="md:col-span-1">
                    <Label className="mb-2 block font-bold text-gray-700 text-center text-sm uppercase tracking-wide">Child</Label>
                    <Select
                        value={searchFilters.children}
                        onValueChange={(value) => setSearchFilters({ ...searchFilters, children: value })}
                    >
                        <SelectTrigger className="h-14 rounded-xl border-gray-200 focus:ring-[#00204E]/20 text-lg font-medium text-center justify-center px-1">
                            <SelectValue placeholder="0" />
                        </SelectTrigger>
                        <SelectContent>
                            {[0, 1, 2, 3, 4].map(num => (
                                <SelectItem key={num} value={num.toString()} className="justify-center">{num}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

            </div>

            <div className="flex justify-end pt-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSearch}
                    className="bg-[#00204E] hover:bg-[#00204E]/90 text-white px-12 py-4 text-sm uppercase font-bold rounded-xl shadow-lg shadow-[#00204E]/20 flex items-center gap-3 transition-all"
                >
                    <Search size={20} />
                    Search Hotels
                </motion.button>
            </div>

        </div>
    );
};

export default HotelSearch;
