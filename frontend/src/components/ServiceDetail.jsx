import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DroneCard({
  titleLine1,
  titleLine2,
  description,
  image,
  headline,
  overview,
  capabilities,
  impact,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services-page", {
      state: {
        service: {
          titleLine1,
          titleLine2,
          description,
          image,
          headline,
          overview,
          capabilities,
          impact,
        },
      },
    });
  };

  return (
    <div
      className="relative w-full h-[320px] sm:h-[350px] md:h-[400px] text-white cursor-pointer service-card-zoom flex flex-col justify-between"
      onClick={handleClick}
    >
      {/* Top gradient line */}
      <div className="absolute -top-4 md:-top-6 left-0 w-full h-[3px] sm:h-[4px] bg-gradient-to-r from-orange-700 via-cyan-700 to-white z-20">
        <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-ping"></div>
      </div>

      {/* Background Image & Overlay Wrapper (with overflow-hidden) */}
      <div className="absolute inset-0 overflow-hidden z-0 rounded-none">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url('${image}')`,
            fontFamily: "'PP Neue Montreal', sans-serif",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between p-4 md:p-6 my-1">
        <div>
          <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">
            {titleLine1}
          </h3>
          <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">
            {titleLine2}
          </h3>
        </div>

        <div className="space-y-2 md:space-y-4">
          <p className="text-sm md:text-xl leading-relaxed text-white">
            {description}
          </p>
          <div className="flex items-center text-lg md:text-2xl font-semibold">
            Learn more
            <span className="ml-2 w-6 h-6 md:w-8 md:h-8 bg-[#ea4820] rounded-full flex items-center justify-center">
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute -bottom-6 md:-bottom-[36px] left-0 w-full h-[3px] sm:h-[4px] bg-gradient-to-r from-orange-700 via-cyan-700 to-white z-20">
        <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full animate-ping"></div>
      </div>
    </div>
  );
}
