import React, { useState, useEffect } from "react";
import { Linkedin } from "lucide-react";

const TeamCard = ({ name, role, image, bio, linkedinUrl, location }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLinkedInClick = (e) => {
    e.stopPropagation();
    if (linkedinUrl) {
      window.open(linkedinUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleImageError = () => {
    console.log(`Image failed to load: ${image}`);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log(`Image loaded successfully: ${image}`);
    setImageLoaded(true);
    setImageError(false);
  };

  // useEffect(() => {
  //   const img = new Image();
  //   img.onload = handleImageLoad;
  //   img.onerror = handleImageError;
  //   img.src = image;
  // }, [image]);

  return (
    <div
      className="relative w-full bg-[#1A1A1A]/95 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer transition-all duration-300 isolate flex flex-col shadow-lg hover:shadow-2xl border border-gray-800/30 h-[540px] sm:h-[610px] no-scrollbar"
      style={{
        fontFamily:
          "'Inter', 'PP Neue Montreal', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section - Fixed height and positioning */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-800 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover object-top transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          loading="eager"
          onError={handleImageError}
          onLoad={handleImageLoad}
          crossOrigin="anonymous"
        />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Content Section - Fixed height for consistency */}
      <div className="p-5 flex flex-col flex-1 min-h-0">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-2xl sm:text-xl font-bold text-white mr-3 flex-1">
            {name}
          </h2>
          {linkedinUrl && (
            <button
              onClick={handleLinkedInClick}
              className="p-2.5 sm:p-2 bg-[#0077B5] hover:bg-[#005885] rounded-md transition-all duration-300 shadow hover:scale-105 flex-shrink-0"
              title="LinkedIn"
            >
              <Linkedin
                size={20}
                className="text-white sm:w-[18px] sm:h-[18px]"
              />
            </button>
          )}
        </div>

        {/* Role */}
        <p className="text-[#ea4820] text-lg  leading-relaxed  uppercase mb-1.5 flex-shrink-0">
          {role}
        </p>

        {/* Bio - Scrollable if needed */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <p className="text-gray-300 text-xl sm:text-[16px] leading-relaxed h-full overflow-y-auto no-scrollbar">
            {bio}
          </p>
        </div>

        {/* Location - Fixed at bottom */}
        {location && (
          <div className="mt-4 pt-3 border-t border-gray-700/50 flex-shrink-0">
            <p className="text-[#ea6220] text-base sm:text-sm font-medium flex items-center">
              <span className="w-2 h-2 bg-[#ea6220] rounded-full mr-2 font-bold"></span>
              {location}
            </p>
          </div>
        )}
      </div>

      {/* Hover Background Glow */}
      <div
        className={`absolute inset-0 transition-all duration-300 bg-gradient-to-br from-[#1A1A1A]/90 to-[#2A2A2A]/90 rounded-xl -z-10 ${
          isHovered ? "scale-105 opacity-100" : "scale-100 opacity-0"
        }`}
      />
    </div>
  );
};

export default TeamCard;
