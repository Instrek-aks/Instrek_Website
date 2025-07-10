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
      className=" border boder-white relative w-full h-[400px] md:h-[400px] overflow-hidden rounded-lg text-white cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={handleClick}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('${image}')`, // Replace with correct path
          fontFamily: "'PP Neue Montreal', sans-serif",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6">
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
          <div className="flex items-center text-lg md:text-2xl font-semibold hover:text-[#ea4820] transition-colors duration-300">
            Learn more
            <span className="ml-2 w-6 h-6 md:w-8 md:h-8 bg-[#ea4820] rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white group-hover:text-[#ea4820]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
