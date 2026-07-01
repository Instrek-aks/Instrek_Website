import React from "react";

export const LogoSection = ({
  title,
  subtitle,
  sectionTitle,
  logos,
  direction = "left",
}) => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Section Title */}
      <div className="text-center px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#ea4820]">
          {title} <span className="text-white">{subtitle}</span>
        </h2>
        {sectionTitle && (
          <p className="text-gray-400 mt-2 text-base md:text-xl">
            {sectionTitle}
          </p>
        )}
      </div>

      {/* Logo Scroll Container */}
      <div className="relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Logos */}
        <div className="flex">
          <div
            className={`flex gap-6 sm:gap-8 md:gap-12 py-2 sm:py-4 animate-scroll hover:[animation-play-state:paused]`}
            style={{
              animationDirection: direction === "left" ? "normal" : "reverse",
            }}
          >
            {/* Duplicate loop for seamless animation */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 
                           flex items-center justify-center relative
                           hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10
                           group transition-all duration-300"
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-orange-700 via-cyan-700 to-white z-10">
                  <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white rounded-full animate-ping"></div>
                </div>

                {/* Logo Image Wrapper */}
                <div className="w-full h-full flex justify-center items-center p-3 sm:p-4 bg-transparent z-0">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter brightness-[1.4] contrast-[1.2] 
                             group-hover:brightness-[1.6] group-hover:contrast-[1.3] 
                             transition-all duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-gradient-to-r from-orange-700 via-cyan-700 to-white z-10">
                  <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white rounded-full animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
