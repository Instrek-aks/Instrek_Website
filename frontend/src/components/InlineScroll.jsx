import React from "react";
import { motion } from "framer-motion";

const InlineScrollImages = () => {
  const images = [
    "./optimized/second.webp",
    "./optimized/tata.webp",
    "./optimized/first.webp",
    "./optimized/yes.webp",
    "./optimized/forth.webp",
  ];

  // Create multiple copies to ensure seamless infinite loop
  const loopedImages = [...images, ...images, ...images];

  return (
    <div
      className="w-full overflow-hidden bg-gradient-to-t from-black via-black to-black py-4 sm:py-6 md:py-8"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#ea4820] text-center mb-4 sm:mb-6 md:mb-8 px-4">
        OUR <span className="text-white">CUSTOMERS</span>
      </h2>

      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 15,
          }}
        >
          {loopedImages.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-6"
            >
              <img
                src={src}
                alt={`Customer logo ${(idx % images.length) + 1}`}
                className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 w-auto object-contain bg-transparent p-1 sm:p-2 rounded-lg filter brightness-90 hover:brightness-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InlineScrollImages;
