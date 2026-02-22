
import React from 'react';
import { Plane, Clock, Info } from 'lucide-react';
import { format } from 'date-fns';

interface FlightOptionCardProps {
    flight: any; // Type should be more specific in a real app
    isSelected: boolean;
    onSelect: () => void;
    type: 'departure' | 'return';
}

const FlightOptionCard: React.FC<FlightOptionCardProps> = ({ flight, isSelected, onSelect, type }) => {
    const formatTime = (timeString: string) => {
        // Assuming timeString is HH:MM:SS
        if (!timeString) return '';
        const [hours, minutes] = timeString.split(':');
        return `${hours}:${minutes}`;
    };

    const calculateDuration = (dep: string, arr: string) => {
        // Placeholder duration logic since we don't have real date objects mixed with time easily available in this mocked structure
        // In a real app, you'd differenciate timestamps
        return "2h 50m";
    };

    // Calculate stops based on the flight object
    const stopCount = [1, 2, 3, 4].filter(i => flight[`stopover_${i}_airport_name`]).length;

    return (
        <div
            className={`relative border rounded-lg p-4 transition-all duration-200 cursor-pointer ${isSelected
                    ? 'border-[#00204E] bg-blue-50/30 ring-1 ring-[#00204E]'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
            onClick={onSelect}
        >
            <div className="flex items-start gap-3">
                {/* Radio Button */}
                <div className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-[#00204E] bg-white' : 'border-gray-300'
                    }`}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#00204E]" />}
                </div>

                <div className="flex-1 space-y-3">
                    {/* Price & Airline */}
                    <div className="flex justify-between items-start">
                        <div className="font-bold text-lg text-[#00204E]">{flight.price} USD</div>
                        <div className="text-right">
                            <div className="font-bold text-sm text-gray-800">AMADEUS ST</div>
                        </div>
                    </div>

                    {/* Flight Details */}
                    <div className="flex justify-between items-center text-sm">
                        {/* Airline Info */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                {/* Placeholder Logo */}
                                <span className="font-bold text-red-600 text-xs">QA</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-600 text-center">{flight.plane_name}</span>
                            <span className="text-[10px] text-gray-400">KQ471</span>
                        </div>

                        {/* Route & Times */}
                        <div className="flex-1 px-4 text-center">
                            <div className="flex justify-between items-center mb-1">
                                <div className="text-right">
                                    <div className="font-bold text-gray-800">{flight.departure_airport_name?.substring(0, 3).toUpperCase()} {formatTime(flight.departure_time)}</div>
                                </div>
                                <div className="px-2 text-gray-400">/</div>
                                <div className="text-left">
                                    <div className="font-bold text-gray-800">{flight.arrival_airport_name?.substring(0, 3).toUpperCase()} {formatTime(flight.arrival_time)}</div>
                                </div>
                            </div>
                            <div className="flex justify-center text-xs text-gray-500">
                                <span>{stopCount > 0 ? `${stopCount} Stop(s)` : 'Direct'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Stats */}
                    <div className="pt-3 border-t border-dashed border-gray-200 flex justify-between text-xs text-gray-500">
                        <span>Duration: {calculateDuration(flight.departure_time, flight.arrival_time)}</span>
                        <span>Stop: {stopCount > 0 ? '1 hour 10 minute(s)' : 'Non-stop'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightOptionCard;
