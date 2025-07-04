import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Header from "./components/Header";
const Header = lazy(() => import("./components/Header"));
//import HeroSection from "./components/HeroSection";
const HeroSection = lazy(() => import("./components/HeroSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
//import AboutSection from "./components/AboutSection";

import TeamSection from "./components/TeamSection";

//import TestimonialsSection from "./components/TestimonialsSection";
const TestimonialsSection = lazy(() =>
  import("./components/TestimonialsSection")
);
import ContactSection from "./components/ContactSection";
//import Footer from "./components/Footer";
const Footer = lazy(() => import("./components/Footer"));
import ScrollToTopButton from "./components/ScrollToTopButton";
import Why from "./components/Why";
import WhyCard from "./components/WhyCard";
//const WhyCard = lazy(() => import("./components/WhyCard"));

import Technology from "./components/Technology";

import Architecture from "./components/Architecture";
import NotFound from "./components/NotFound";
import ServiceDes from "./components/ServiceDes";

import Services from "./components/Services";
import WholeTeam from "./components/WholeTeam";
import InlineScrollImages from "./components/InlineScroll";
import { LogoCarousel } from "./components/LogoCoraousel";
import BlogIndex from "./components/BlogIndex";
import BlogPost from "./components/BlogPost";
import StatsGrid from "./components/StatsGrid.jsx";

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#EA6220]"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-[Neue_Montreal] overflow-x-hidden">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/team" element={<WholeTeam />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/services-page" element={<ServiceDes />} />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <section id="home">
                    <HeroSection />
                    {/* <TiltedImage /> */}
                  </section>

                  <section id="about">
                    <AboutSection />
                  </section>
                  {/* <section id="services">
                    <ServicesSection />
                  </section>
                   */}
                  <section id="services">
                    <Services />
                    {/* <StatsGrid /> */}
                    {/* <WhyCard /> */}
                    {/* <InlineScrollImages /> */}
                  </section>
                  {/* <section id="inline">
                    <InlineScrollImages />
                  </section> */}
                  <section id="inline">
                    <LogoCarousel />
                  </section>

                  <section id="team" className="scroll-mt-20">
                    <TeamSection />
                  </section>

                  <section id="why">
                    <StatsGrid />
                  </section>

                  {/* <TestimonialsSection /> */}

                  {/* <section id="blog">
                    <BlogSection />
                  </section> */}

                  <section id="contact">
                    <Footer />
                    <ScrollToTopButton />
                  </section>
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
