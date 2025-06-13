import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import PortfolioSection from "./components/PortfolioSection";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <div className="font-[Neue_Montreal]">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
