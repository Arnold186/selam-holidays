import React from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Liam Nohkan",
    role: "Adventure Traveler",
    date: "May 2023",
    comment: "Selam Holidays gave us an unforgettable safari experience in Akagera. The entire trip was smooth, from the airport pickup to the game drives. Their team knew every hidden gem.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Mateo Daniel",
    role: "Business Traveler",
    date: "May 2023",
    comment: "I booked my trip to Dubai through Selam Holidays, and everything was handled professionally—from visa assistance to hotel reservations. They responded quickly to all my questions.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    id: 3,
    name: "Lucas Mora",
    role: "Corporate Group",
    date: "May 2023",
    comment: "Our company retreat to Musanze with Selam Holidays was outstanding. The entire experience—from transportation to accommodation—was smooth and professionally arranged.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-container bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">What Travelers Say</h2>
        </div>

        <div className="px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-none shadow-lg bg-slate-50">
                      <CardContent className="p-6 flex flex-col h-full min-h-[280px]">
                        <div className="flex gap-1 mb-4">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div className="relative mb-6 flex-grow">
                          <Quote className="absolute -top-2 -left-2 text-primary/10 w-10 h-10 rotate-180" />
                          <p className="text-gray-600 relative z-10 italic">
                            "{t.comment}"
                          </p>
                        </div>
                        <div className="flex items-center gap-4 pt-4 border-t border-gray-200/60">
                          <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                            <AvatarImage src={t.image} />
                            <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                            <p className="text-xs text-primary font-medium">{t.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
