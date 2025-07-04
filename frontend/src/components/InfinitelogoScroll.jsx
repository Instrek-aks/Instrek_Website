export const InfiniteLogoScroll = ({ logos, direction }) => {
  // Create multiple copies of logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  const scrollAnimation = {
    animation:
      direction === "left"
        ? "scroll-left 10s linear infinite"
        : "scroll-right 10s linear infinite",
  };

  return (
    <div
      className="relative overflow-hidden py-8"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

      <div
        className="flex items-center space-x-8 md:space-x-12 lg:space-x-16"
        style={{
          ...scrollAnimation,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center 
                         bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 
                         hover:bg-white/20 hover:border-white/30 transition-all duration-300 
                         hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
          >
            {/* Container for the image with fixed dimensions */}
            <div className="w-full h-full flex justify-center items-center p-2">
              <img
                src={logo.image}
                alt={logo.name}
                className="w-full h-full object-contain" // Image will scale within the container
              />
            </div>
            <div className="text-white text-xs md:text-sm lg:text-base font-semibold text-center px-2 md:px-4">
              {logo.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
