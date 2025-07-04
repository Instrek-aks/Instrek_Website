import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import StatCard from "./StatCard";
import Team from "./TeamSection";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    title: "Trusted",
    value: "500K+",
    label: "years in public and enterprise digital transformation",
    upperText: {
      line1: "Setting Standards in",
      line2: "Trust & Reliability",
    },
  },
  {
    value: "99.9%",
    label: "countries served with digital excellence",
    title: "Global Reach",
    upperText: {
      line1: "Expanding Horizons with",
      line2: "Global Impact",
    },
  },
  {
    value: "< 30s",
    label: "solutions deployed across industries",
    title: "Innovators",
    upperText: {
      line1: "Pioneering the Future of",
      line2: "Digital Solutions",
    },
  },
  {
    value: "100+",
    label: "happy public & private sector collaborations",
    title: "Clients",
    upperText: {
      line1: "Building Success Through",
      line2: "Partnerships",
    },
  },
  {
    value: "20K+",
    label: "Clients have strong belief to us",
    title: "Reliable",
    upperText: {
      line1: "Delivering Excellence with",
      line2: "Proven Results",
    },
  },
];

const StatsGrid = () => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;

    const getPadding = () => {
      if (window.innerWidth < 768) return 20;
      if (window.innerWidth < 1024) return 40;
      return 100;
    };

    gsap.to(cardsContainer, {
      x: () => -(cardsContainer.scrollWidth - window.innerWidth + getPadding()),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        pin: true,
        scrub: 0.5,
        snap: 1 / (stats.length - 1),
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);
          const index = Math.round(progress * (stats.length - 1));
          setCurrentIndex(index);
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* <div id="team">
        <Team />
      </div> */}

      <div className="bg-black relative">
        {/* Main Content Container */}
        <div ref={containerRef} className="relative">
          {/* Fixed Position Header */}
          <div className="absolute top-8 left-0 right-0 z-20">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white px-4 mb-8">
                WHY CHOOSE <span className="text-[#ea4820]">US</span> ?
              </h2>
            </div>
          </div>

          {/* Stats Cards Container */}
          <div className="w-full h-screen flex items-center overflow-hidden">
            <div
              ref={cardsContainerRef}
              className="flex flex-nowrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 px-2 sm:px-3 md:px-8 lg:px-12 mt-24"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card min-w-[96vw] sm:min-w-[92vw] md:min-w-[80vw] lg:min-w-[420px] xl:min-w-[480px] 
                            w-[96vw] sm:w-[92vw] md:w-[80vw] lg:w-[420px] xl:w-[480px] flex-shrink-0"
                >
                  <StatCard
                    title={stat.title}
                    value={stat.value}
                    label={stat.label}
                    upperText={stat.upperText}
                  />
                </div>
              ))}
            </div>

            {/* Progress Indicators - Bottom */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-10">
              {/* Progress Dots */}
              <div className="flex space-x-2">
                {stats.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[#ea4820] scale-125"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              {/* Card Counter */}
              <div className="ml-4 text-white/80 text-sm font-medium">
                {currentIndex + 1} / {stats.length}
              </div>
            </div>

            {/* Side Navigation Hints */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 text-xs hidden sm:block">
              {/* <div className="flex flex-col items-center space-y-2">
                <div className="w-6 h-6 border border-white/40 rounded-full flex items-center justify-center">
                  ←
                </div>
                <span className="writing-mode-vertical text-orientation-mixed">
                  Scroll
                </span>
              </div> */}
            </div>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 text-xs hidden sm:block">
              {/* <div className="flex flex-col items-center space-y-2">
                <div className="w-6 h-6 border border-white/40 rounded-full flex items-center justify-center">
                  →
                </div>
                <span className="writing-mode-vertical text-orientation-mixed">
                  Scroll
                </span>
              </div> */}
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
              <div className="absolute top-1/4 left-10 w-32 h-32 border border-[#ea4820] rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-white rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-3/4 left-1/4 w-16 h-16 bg-[#ea4820]/20 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/10 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsGrid;
