
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book a tour with Selam Holidays?",
    answer: "You can book a tour with Selam Holidays by contacting us through our website, email, or phone. Our team will guide you through the booking process and help you customize your trip according to your preferences."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard), bank transfers, PayPal, and mobile money for local clients. All payments are secure and processed through trusted payment gateways."
  },
  {
    question: "Can I customize the itinerary for my tour?",
    answer: "Absolutely! We specialize in creating customized itineraries based on your interests, preferences, and budget. Our experienced travel consultants will work with you to design the perfect trip."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy varies depending on the tour package and timing. Generally, cancellations made 30 days or more before departure receive a full refund minus a small administrative fee. Please check the specific terms for your tour or contact us for details."
  },
  {
    question: "Do you arrange airport transfers?",
    answer: "Yes, we provide airport transfers for all our tour packages. Our driver will meet you at the airport with a signboard and assist you with your luggage to ensure a smooth start to your journey."
  },
  {
    question: "Do I need a visa to travel to Uganda or other East African countries?",
    answer: "Most visitors to Uganda and other East African countries require a visa. We can provide guidance on visa requirements and application processes based on your nationality. Some countries offer e-visas which can be obtained online before travel."
  },
  {
    question: "What should I pack for an East African safari?",
    answer: "For safaris, we recommend lightweight, neutral-colored clothing (avoid bright colors), comfortable walking shoes, sun protection (hat, sunglasses, sunscreen), insect repellent, camera gear, and any personal medications. We provide a detailed packing list upon booking."
  },
];

const ContactFAQ = () => {
  return (
    <section className="section-container bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-subtitle">COMMON QUESTIONS</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="max-w-3xl mx-auto text-tertiary mt-4">
            Find answers to common questions about our tours, booking process, and travel preparations.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem value={`item-${index}`} className="bg-white mb-4 rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="p-4 text-lg font-medium text-tertiary-dark hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-tertiary">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-tertiary mb-4">
            Still have questions? Feel free to contact us directly.
          </p>
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
