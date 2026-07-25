import React, { useState, useEffect } from "react";

const slides = [
  {
    desktopImage: "/optimized/pic4_main.webp",
    mobileImage: "/optimized/pic4_mainM.webp",
    title1: "Transforming Vision into",
    title2: "Intelligent Systems",
    description:
      "Evaluate your organization's AI maturity and prepare for future growth. Take the Instrek AI Readiness Assessment to map your capabilities and design a customized implementation roadmap.",
    link: "https://sch-t.netlify.app/",
    buttonText: "Access AI Readiness Assessment",
    temperature: "30°C",
    weather: "Partly Cloudy",
  },
  {
    desktopImage: "/cy.png",
    mobileImage: "/cy.png",
    title1: "Where Data, Technology &",
    title2: "Strategy Converge",
    description:
      "Identify vulnerabilities and protect your systems against emerging threats. Use the GCC AI Security Risk Engine to assess risk levels and ensure robust security compliance.",
    link: "https://sca1-t.netlify.app/",
    buttonText: "Launch AI Security Risk Engine",
    temperature: "26°C",
    weather: "Clear",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[70vh] md:h-screen min-h-[70vh] md:min-h-screen font-heading flex items-center justify-start overflow-hidden text-start pt-[60px]"
      style={{
        fontFamily: "'PP Neue Montreal', sans-serif",
      }}
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <picture>
              {/* Mobile image */}
              <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
              {/* Desktop image */}
              <img
                src={slide.desktopImage}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: isMobile ? "center center" : "center 30%",
                  width: "100%",
                  height: "100%",
                }}
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r transition-all duration-1000 ease-in-out from-white via-white/85 to-transparent opacity-85 md:opacity-85" />

      {/* Text Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 flex flex-col items-start max-w-4xl mx-auto sm:mx-0">
        <h1 className="block max-w-3xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
          {slides[currentIndex].title1}
        </h1>
        <h1 className="block max-w-3xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
          {slides[currentIndex].title2}
        </h1>

        <p className="mt-3 sm:mt-4 md:mt-6 text-[#ea4820] text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed max-w-3xl">
          {slides[currentIndex].description}
        </p>

        <a
          href={slides[currentIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 sm:mt-8 px-4 xs:px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#EA6220] to-[#ff724a] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#EA6220]/40 transition-all duration-300 transform hover:scale-105 inline-block text-center text-xs xs:text-sm sm:text-base whitespace-nowrap"
        >
          {slides[currentIndex].buttonText}
        </a>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-20 sm:bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-black/30"
            } transition-all duration-300`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-black rounded-full flex justify-center items-center">
          <div className="w-1 h-2 md:h-3 bg-black rounded-full mt-1 md:mt-2 animate-ping" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
