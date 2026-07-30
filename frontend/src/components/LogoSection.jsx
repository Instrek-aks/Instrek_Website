import React from "react";

export const LogoSection = ({
  title,
  subtitle,
  sectionTitle,
  logos,
  direction = "left",
}) => {
  // Triple duplicated list for seamless infinite loop on any screen width
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Heading Container */}
      <div className="text-center px-4 py-3 md:py-5 relative z-20 my-1 md:my-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#ea4820] leading-tight">
          {title} <span className="text-white">{subtitle}</span>
        </h2>
        {sectionTitle && (
          <p className="text-gray-400 mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto">
            {sectionTitle}
          </p>
        )}
      </div>

      {/* Logo Carousel Container */}
      <div className="relative overflow-hidden w-full py-2 md:py-3">
        {/* Edge Gradient overlays for smooth fading */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-black via-black/90 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-black via-black/90 to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex w-full overflow-x-auto no-scrollbar scroll-smooth">
          <div
            className={`flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-4 animate-scroll hover:[animation-play-state:paused] flex-nowrap`}
            style={{
              animationDirection: direction === "left" ? "normal" : "reverse",
            }}
          >
            {duplicatedLogos.map((logo, index) => {
              // Optical scaling factor - defaults to 1.0 for general logos
              const scaleFactor = logo.scale || 1.0;

              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-52 sm:w-60 md:w-64 lg:w-72 h-28 sm:h-32 md:h-36 lg:h-40 
                             flex items-center justify-center relative bg-black/50
                             hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10
                             group transition-all duration-300 rounded-sm cursor-pointer"
                >
                  {/* Top tricolor gradient line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-orange-600 via-cyan-600 to-white z-10">
                    <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                  </div>

                  {/* Logo Image Wrapper - Centered both horizontally & vertically on single baseline */}
                  <div className="w-full h-full flex justify-center items-center p-4 sm:p-5 md:p-6 bg-transparent z-0 overflow-hidden">
                    <img
                      src={logo.image}
                      alt={logo.name || "Partner Logo"}
                      className="max-w-full max-h-full object-contain filter brightness-[1.35] contrast-[1.15] 
                               group-hover:brightness-[1.65] group-hover:contrast-[1.25] 
                               transition-all duration-300"
                      style={{
                        transform: `scale(${scaleFactor})`,
                        imageRendering: "auto",
                      }}
                      loading="lazy"
                    />
                  </div>

                  {/* Bottom tricolor gradient line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-orange-600 via-cyan-600 to-white z-10">
                    <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
