
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import TeamMembers from "@/components/about/TeamMembers";
import MissionVision from "@/components/about/MissionVision";
import Partners from "@/components/about/Partners";
import NewsletterSection from "@/components/NewsletterSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      {/* <TeamMembers /> */}
      <Partners />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default About;
