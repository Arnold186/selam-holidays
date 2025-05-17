
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import ContactFAQ from "@/components/contact/ContactFAQ";
import NewsletterSection from "@/components/NewsletterSection";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ContactHero />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactMap />
      <ContactFAQ />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Contact;
