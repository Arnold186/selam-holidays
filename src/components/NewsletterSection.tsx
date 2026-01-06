import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden bg-primary shadow-2xl">
          {/* Abstract Shapes/Background */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black opacity-10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="py-16 px-6 md:px-20 relative z-10 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Mail className="text-white w-6 h-6" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Join Our Newsletter</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Subscribe to receive our best monthly deals, secret offers, and travel inspiration directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter Your Email Address..."
                className="bg-white/95 border-0 h-12 text-gray-900 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button size="lg" className="h-12 bg-gray-900 hover:bg-black text-white px-8">
                Subscribe <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            <p className="text-blue-200 text-xs mt-6">
              No spam, just adventures. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
