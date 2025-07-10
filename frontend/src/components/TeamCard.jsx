import React, { useState } from "react";
import { Linkedin } from "lucide-react";

const TeamCard = ({ name, role, image, bio, linkedinUrl, location }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLinkedInClick = (e) => {
    e.stopPropagation();
    if (linkedinUrl) {
      window.open(linkedinUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="relative w-full min-w-[200px] max-w-[280px] bg-[#1A1A1A]/90 backdrop-blur-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 isolate h-[500px] sm:h-[400px] flex flex-col"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Hover Zoom - Responsive height */}
      <div className="relative h-48 sm:h-48 w-full overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover object-top transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      {/* Content - Responsive padding and layout */}
      <div className="p-4 sm:p-3 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl sm:text-lg font-semibold text-white truncate flex-1 mr-2">
            {name}
          </h2>
          {linkedinUrl && (
            <button
              onClick={handleLinkedInClick}
              className="p-2 sm:p-1.5 bg-blue-500 rounded-md hover:bg-[#d43d1b] transition-colors duration-300 flex items-center justify-center flex-shrink-0"
              title="View LinkedIn Profile"
            >
              <Linkedin size={16} className="text-white sm:w-3.5 sm:h-3.5" />
            </button>
          )}
        </div>
        <p className="text-[#ea4820] font-medium text-sm sm:text-xs uppercase mb-3">
          {role}
        </p>

        {/* Bio Section - Larger paragraph area for mobile */}
        <div className="flex-1 flex flex-col">
          <p className="text-gray-300 text-sm sm:text-xs leading-relaxed line-clamp-6 sm:line-clamp-3 flex-1">
            {bio}
          </p>
          {location && (
            <p className="text-[#ea6220] text-sm sm:text-xs mt-3 sm:mt-2 flex-shrink-0">
              {location}
            </p>
          )}
        </div>
      </div>

      {/* Card Scale Effect */}
      <div
        className={`absolute inset-0 transition-transform duration-300 bg-[#1A1A1A]/90 rounded-lg -z-10 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
      />
    </div>
  );
};

export default TeamCard;
