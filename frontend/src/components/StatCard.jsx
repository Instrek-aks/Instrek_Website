import React from "react";
import CountUp from "react-countup";

export default function StatCard({ title = "ajay", value, label, upperText }) {
  const numericValue = value.replace(/\D/g, "");
  const suffix = value.replace(/[0-9]/g, "");

  return (
    <div
      className="group w-full h-auto rounded-2xl sm:rounded-3xl bg-white/[0.02] lg:bg-transparent border border-white/[0.05] lg:border-none text-white flex flex-col justify-center items-center text-center relative
                 px-6 sm:px-8 md:px-12 lg:px-10 xl:px-12
                 py-10 sm:py-12 md:py-16 lg:py-8 xl:py-10 2xl:py-12
                 shadow-lg sm:shadow-xl min-h-[68vh] sm:min-h-[65vh] lg:min-h-[48vh] xl:min-h-[50vh]
                  backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] stat-card-responsive"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <div className="absolute top-10 right-10 w-20 h-20 border-2 border-[#ea4820] rounded-full animate-slow-spin"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border border-white rounded-full animate-glow-pulse"></div>
        <div className="absolute top-1/2 right-8 w-8 h-8 bg-[#ea4820] rounded-full animate-float delay-300"></div>
      </div>

      {/* Corner Decorative Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#ea4820] opacity-30"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#ea4820] opacity-30"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white opacity-30"></div>

      {/* Upper Text Section */}
      <div className="mb-6 text-center">
        <p className="text-[15px] sm:text-lg md:text-lg text-white/70 font-light italic">
          {upperText?.line1 || "Experience Excellence in"}
        </p>
        <p className="text-lg sm:text-xl md:text-xl text-[#ea4820] font-medium mt-1">
          {upperText?.line2 || "Digital Innovation"}
        </p>
      </div>

      {/* Top white line */}
      <div
        className="w-full h-[3px] sm:h-[4px] md:h-[5px] lg:h-[4px] xl:h-[5px] bg-gradient-to-r from-orange-700 via-cyan-700 to-white 
                      mt-3 mb-2 sm:mb-6 lg:mb-4 relative"
      >
        <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-ping delay-500"></div>
      </div>

      {/* Title */}
      <h3
        className="text-2xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-white 
                     mb-4 sm:mb-6 lg:mb-4 leading-tight relative"
      >
        {title}
        {/* Title underline animation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#ea4820] transition-all duration-1000 group-hover:w-full"></div>
      </h3>

      {/* Bottom gradient line */}
      <div
        className="w-full h-[3px] sm:h-[4px] md:h-[5px] lg:h-[4px] xl:h-[5px] bg-gradient-to-r from-orange-700 via-cyan-700 to-white 
                      mb-4 sm:mb-6 lg:mb-4 relative"
      >
        <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-ping delay-500"></div>
      </div>

      {/* Gradient Number with background effect */}
      <div className="relative mb-3 sm:mb-6 lg:mb-4">
        {/* Background glow effect */}
        <div
          className="absolute inset-0 text-6xl sm:text-8xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl 
                        font-extralight text-[#ea4820] opacity-20 blur-sm scale-110"
        >
          <CountUp end={parseInt(numericValue)} duration={10} separator="," />
          {suffix}
        </div>

        {/* Main number */}
        <div
          className="relative text-6xl sm:text-8xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl 
                        font-extralight bg-gradient-to-r from-[#ea4820] to-white bg-clip-text text-transparent 
                        leading-none"
        >
          <CountUp end={parseInt(numericValue)} duration={10} separator="," />
          {suffix}
        </div>
      </div>

      {/* Subtitle with improved styling */}
      <div className="relative">
        <p className="text-[19px] sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl text-white leading-relaxed text-center max-w-[95%] lg:max-w-[85%] xl:max-w-[80%] relative z-10">
          {label}
        </p>

        {/* Subtle background pattern for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg -z-10"></div>
      </div>
    </div>
  );
}
