const CapabilityCard = ({ title, image, description }) => {
  return (
    <div
      className="group cursor-pointer"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
        <div className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed group-hover:text-orange-400 transition-colors duration-300 mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CapabilityCard;
