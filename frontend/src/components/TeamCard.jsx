import React, { useState } from "react";
import { Linkedin } from "lucide-react";

const TeamCard = ({ name, role, image, bio, linkedinUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleLinkedInClick = (e) => {
    e.stopPropagation();
    if (linkedinUrl) {
      window.open(linkedinUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="relative w-full min-w-[200px] max-w-[280px] bg-[#1A1A1A]/90 backdrop-blur-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 isolate"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Hover Zoom - Made smaller */}
      <div className="relative pt-[80%] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg sm:text-xl font-semibold text-white truncate flex-1 mr-2">
            {name}
          </h2>
          {linkedinUrl && (
            <button
              onClick={handleLinkedInClick}
              className="p-1.5 bg-blue-500 rounded-md hover:bg-[#d43d1b] transition-colors duration-300 flex items-center justify-center flex-shrink-0"
              title="View LinkedIn Profile"
            >
              <Linkedin size={14} className="text-white" />
            </button>
          )}
        </div>
        <p className="text-[#ea4820] font-medium text-xs sm:text-sm uppercase mb-3">
          {role}
        </p>

        {/* Bio Section - Always visible */}
        <div className="mb-3">
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-4">
            {bio}
          </p>
          <p className="text-[#ea4820] text-xs sm:text-sm mt-2">Delhi, IND</p>
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
