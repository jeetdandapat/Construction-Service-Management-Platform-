import React from "react";
import HeroSection from "./HeroSection";
import JoinSection from "./JoinSection";
import HowUserUses from "./HowUserUses";
import AboutSection from "./About.jsx";
import Contact from "./Contact.jsx";
import ServicesPage from "./Services.jsx";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <section id="home">
        <HeroSection />
      </section>

      <section id="join">
        <JoinSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="how">
        <HowUserUses />
      </section>

      <section id="services">
        <ServicesPage />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
