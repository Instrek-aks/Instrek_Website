import React, { useState, useEffect } from "react";

const slides = [
  {
    desktopImage: "./optimized/heroImageRL.webp",
    mobileImage: "./optimized/heroImageRLM2.jpg",
    title1: "Empowering Futures,",
    title2: "Engineered Today",
    description:
      "Harnessing breakthrough technologies to build what the world needs next",
    temperature: "28°C",
    weather: "Cloudy",
  },
  {
    desktopImage: "/optimized/smartR.webp",
    mobileImage: "/optimized/smartR.webp",
    title1: "Smarter Cities,",
    title2: "Stronger Infrastructure",
    description:
      "Building sustainable, data-driven urban ecosystems through cutting-edge digital infrastructure.",
    temperature: "32°C",
    weather: "Sunny",
  },
  {
    desktopImage: "/optimized/skillR.webp",
    mobileImage: "/optimized/skillR.webp",
    title1: "Skilling for the Next ",
    title2: "Tech Frontier",
    description:
      "Bridging the gap between talent and technology through hands-on, industry-aligned training.",
    temperature: "25°C",
    weather: "Rainy",
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
      className="relative w-full font-heading flex items-center justify-start overflow-hidden text-start pt-[60px]"
      style={{
        height: "100vh",
        minHeight: "100vh",
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

      {/* Gradient Overlay - Adjusted for better mobile visibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent opacity-90 md:opacity-90"></div>

      {/* Text Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 flex flex-col items-start text-white max-w-4xl mx-auto sm:mx-0">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
          {slides[currentIndex].title1}
        </h1>
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mt-1 sm:mt-2 md:mt-4 tracking-tight leading-tight">
          {slides[currentIndex].title2}
        </h1>
        <p className="mt-3 sm:mt-4 md:mt-6 text-[#ea4820] text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed max-w-3xl">
          {slides[currentIndex].description}
        </p>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-20 sm:bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/40"
            } transition-all duration-300`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center items-center">
          <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-1 md:mt-2 animate-ping" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
