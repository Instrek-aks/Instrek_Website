import React from "react";

const AboutSection = () => {
  return (
    <section
      className=" bg-[#121212] relative overflow-hidden"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/about-preview.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="/about.mp4" type="video/mp4" />
        <source src="/about.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Content Wrapper */}
      <div className="relative z-80 flex flex-col top-0 px-4 md:px-6 py-8 md:py-10 max-w-5xl mx-auto text-center text-white justify-start space-y-6 md:space-y-10">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold mt-4">
          ABOUT <span className="text-[#ea4820]">US</span>
        </h2>

        {/* Paragraphs */}
        <div className="max-w-5xl">
          <p className="text-lg md:text-2xl leading-relaxed">
            Instrek is a purpose-led technology company committed to solving
            real world problems through smart innovation. From AI driven career
            guidance systems to scalable smart city platforms, we create
            solutions that matter.
          </p>
        </div>
        <div className="max-w-2xl text-center mx-auto mt-10 md:mt-10">
          <p className="text-lg md:text-2xl text-[#ea4820] leading-relaxed">
            Our approach blends deep tech with human insight building tools that
            empower people, enable transformation, and drive lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// import React from "react";

// const AboutSection = () => {
//   return (
//     <section
//       className="min-h-screen py-24 bg-[#0e0e0e] relative overflow-hidden"
//       style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
//     >
//       {/* Background Blobs */}
//       <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 py-12 bg-black">
//         {/* Card 1 */}
//         <div className="bg-gradient-to-b from-[#2A2342] to-black rounded-xl p-6 w-72 text-center shadow-lg hover:scale-105 transition-transform duration-300">
//           <div className="text-purple-400 mb-4 text-3xl">✨</div>
//           <h3 className="text-white text-lg font-semibold mb-2">
//             AI Research Assistant
//           </h3>
//           <p className="text-gray-400 text-sm">
//             24/7 AI moderation for consistent studies
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-gradient-to-b from-[#18181B] to-[#1E1E24] rounded-xl p-6 w-72 text-center shadow-lg hover:scale-105 transition-transform duration-300">
//           <div className="text-purple-400 mb-4 text-3xl">🧠</div>
//           <h3 className="text-white text-lg font-semibold mb-2">
//             Auto-Synthesis
//           </h3>
//           <p className="text-gray-400 text-sm">Automated research findings</p>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-gradient-to-b from-[#18181B] to-[#1E1E24] rounded-xl p-6 w-72 text-center shadow-lg hover:scale-105 transition-transform duration-300">
//           <div className="text-purple-400 mb-4 text-3xl">📊</div>
//           <h3 className="text-white text-lg font-semibold mb-2">
//             Deep Analysis Tools
//           </h3>
//           <p className="text-gray-400 text-sm">
//             Multi-level insight generation
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
