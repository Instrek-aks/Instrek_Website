import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SolutionCard = ({ solution, index }) => {
  return (
    <Link
      to={`/solutions/${solution.id}`}
      className="group relative overflow-hidden rounded-2xl h-80 block transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#EA6220]/30 border border-[#EA6220]/20"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Background Image with overlay effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${solution.image})` }}
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#EA6220]/10 to-[#EA6220]/5 transition-all duration-500 group-hover:via-[#EA6220]/20 group-hover:from-[#1a1a2e]" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        {/* Accent Bar */}
        <div className="absolute top-6 right-6 w-1 h-8 bg-gradient-to-b from-[#EA6220] to-[#ff724a] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />

        {/* Title */}
        <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:translate-x-2 text-white leading-tight">
          {solution.title}
        </h3>

        {/* Headline/Description */}
        <p className="text-white/70 text-sm mb-4 line-clamp-2 transition-colors duration-300 group-hover:text-white/90">
          {solution.headline}
        </p>

        {/* CTA with Icon - Animated */}
        <div className="flex items-center gap-2 text-sm font-semibold opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-[#EA6220] group-hover:text-[#ff724a]">
            Learn More
          </span>
          <ArrowRight className="w-4 h-4 text-[#EA6220] group-hover:text-[#ff724a] transition-all duration-300 group-hover:translate-x-1" />
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#EA6220] to-[#ff724a] group-hover:w-full transition-all duration-500" />
      </div>
    </Link>
  );
};

export default SolutionCard;
