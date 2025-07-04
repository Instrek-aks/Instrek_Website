import React from "react";
import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="bg-purple-950/10 backdrop-blur-sm border-2 border-white rounded-2xl p-8 hover:[#ea4820] transition-all duration-300 hover:transform hover:scale-105 group"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <Quote className="w-10 h-10 text-orange-500 fill-current transform rotate-180" />
      </div>

      {/* Quote Text */}
      <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-orange-100 transition-colors">
        {testimonial.quote}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-base leading-relaxed mb-8 min-h-[120px]">
        {testimonial.description}
      </p>

      {/* Author Info */}
      <div className="flex items-center">
        <div className="relative">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-3 border-orange-500"
          />
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-white text-lg">
            {testimonial.name}
          </h4>
          <p className="text-gray-400 text-sm">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
