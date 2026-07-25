import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import StatCard from "./StatCard";
import Team from "./TeamSection";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "50+",
    label: "Key clients empowered across sectors",
    title: "Visionary Clients",
    upperText: {
      line1: "From Governments to Startups,",
      line2: "Driving Scalable Impact",
    },
  },
  {
    value: "40+",
    label: "In-house solutions delivered at scale",
    title: "Engineered Solutions",
    upperText: {
      line1: "AI, XR & Autonomous Systems",
      line2: "Built for Real-World Use",
    },
  },
  {
    value: "25+",
    label: "in-house deep-tech innovations",
    title: "Deep-Tech R&D",
    upperText: {
      line1: "Building the Future with",
      line2: "Intelligent Robotics & AI",
    },
  },
  {
    value: "1200+",
    label: "next-gen learners trained",
    title: "Tech Skilling",
    upperText: {
      line1: "Empowering Talent in",
      line2: "AI, IoT, EVs, & More",
    },
  },
  {
    value: "60+",
    label: "cross-disciplinary experts onboard",
    title: "Expert Team",
    upperText: {
      line1: "Fusing AI, DevOps, Embedded",
      line2: "Design & Strategy",
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
    if (!cardsContainer) return;

    const anim = gsap.to(cardsContainer, {
      x: () => -(cardsContainer.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + (cardsContainer.scrollWidth - window.innerWidth),
        pin: true,
        scrub: 0.5,
        snap: {
          snapTo: 1 / (stats.length - 1),
          duration: { min: 0.3, max: 0.8 },
          delay: 0.05,
          ease: "power1.inOut",
        },
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
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <>
      {/* <div id="team">
        <Team />
      </div> */}

      <div className="bg-black relative">
        {/* Main Content Container - takes full screen on all screen sizes */}
        <div ref={containerRef} className="relative h-screen w-full flex flex-col justify-center items-center lg:justify-between gap-8 lg:gap-0 py-6 md:py-8 lg:py-10 box-border">
          {/* Header with adequate spacing and normal flow to avoid overlap */}
          <div className="w-full text-center z-20 pt-24 sm:pt-28 lg:pt-24 pb-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold text-white px-4">
              WHY CHOOSE <span className="text-[#ea4820]">US</span> ?
            </h2>
          </div>

          {/* Stats Cards Wrapper */}
          <div className="w-full flex flex-col justify-center overflow-hidden py-2">
            {/* Stats Cards Container */}
            <div 
              className="w-full overflow-hidden no-scrollbar relative"
            >
              <div
                ref={cardsContainerRef}
                className="flex flex-nowrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 px-[7.5vw] sm:px-[10vw] md:px-[15vw] lg:px-12 py-4"
                style={{
                  willChange: "transform",
                }}
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="card min-w-[85vw] sm:min-w-[80vw] md:min-w-[70vw] lg:min-w-[500px] xl:min-w-[600px] 2xl:min-w-[700px] 
                              w-[85vw] sm:w-[80vw] md:w-[70vw] lg:w-[520px] xl:w-[600px] 2xl:w-[700px] flex-shrink-0"
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
            </div>
          </div>

          {/* Progress Indicators - Bottom */}
          <div className="w-full flex items-center justify-center space-x-4 py-4 z-10">
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
        </div>
      </div>
    </>
  );
};

export default StatsGrid;
