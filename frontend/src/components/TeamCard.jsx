import React, { useState } from "react";

const TeamCard = ({ name, role, image, bio }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="relative w-full min-w-[250px] max-w-[300px] bg-[#1A1A1A]/90 backdrop-blur-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 isolate"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Hover Zoom */}
      <div className="relative pt-[100%] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ${
            isHovered || isExpanded ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          {name}
        </h2>
        <p className="text-[#ea4820] font-medium text-sm sm:text-base uppercase">
          {role}
        </p>
        {/* Role and Know More Button Container */}
        <div className="flex items-end justify-end mt-3 mb-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`px-3 py-1 rounded-md  text-sm transition-all duration-300 ml-2 whitespace-nowrap
              ${
                isExpanded
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-[#ea4820] text-white hover:bg-[#d43d1b]"
              }`}
          >
            {isExpanded ? "Know Less" : "Know More"}
          </button>
        </div>

        {/* Bio Section */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {bio}
          </p>
          <p className="text-[#ea4820] text-sm sm:text-base mt-4">Delhi, IND</p>
        </div>
      </div>

      {/* Card Scale Effect */}
      <div
        className={`absolute inset-0 transition-transform duration-300 bg-[#1A1A1A]/90 rounded-lg -z-10 ${
          isHovered || isExpanded ? "scale-105" : "scale-100"
        }`}
      />
    </div>
  );
};

export default TeamCard;
