import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Future-Forward Tech",
      description:
        "We build cutting-edge platforms using AI, IoT, Blockchain, and more—focused on impact and scale.",
      image: "./images/aiImage.jpg",
      tag: "TECH DEVELOPMENT",
    },
    {
      title: "Agentic AI",
      description:
        "Our Agentic systems offer conversational experiences with high accuracy, personalization, and multilingual support.",
      image: "./images/blockchainlern.jpg",
      tag: "AGENTIC AI",
    },
    {
      title: "Training Programs",
      description:
        "From EVs to robotics and AI, we offer skilling programs that are hands-on, modular, and industry-ready.",
      image: "./images/digitaltrans.jpg",
      tag: "TRAINING",
    },
    {
      title: "Smart City Solutions",
      description:
        "We provide integrated tech for cleaner, smarter, connected cities—from traffic to pollution control.",
      image: "./images/smarcity1.jpg",
      tag: "SMART CITY",
    },
    {
      title: "Ai Based Solutiion",
      description:
        "We provide integrated tech for cleaner, smarter, connected cities—from traffic to pollution control.",
      image: "/futureForward.jpg",
      tag: "SMART CITY",
    },
  ];

  // Duplicate cards to enable seamless infinite scroll
  const loopedCards = [...services, ...services];

  return (
    <section
      className="py-20 bg-gradient-to-r from-[#7fa] to-[#7fa] overflow-hidden "
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="w-full overflow-hidden relative px-8">
        {/* Gradient effect on both ends */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#7fa] to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

        {/* Slider container */}
        <div className="relative w-full px-8">
          <div
            className="flex gap-6 animate-marquee"
            style={{ width: "fit-content" }}
          >
            {loopedCards.map((service, index) => (
              <div
                key={index}
                className="w-[330px] flex-shrink-0 bg-[rgb(14,0,51)] text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative group"
              >
                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black group-hover:bg-[#EA6220] group-hover:text-white transition-colors duration-300 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />

                {/* Title & Description */}
                <h3 className="text-[#EA6220] text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Tag */}
                <div className="mt-6 text-sm font-semibold text-white flex items-center space-x-2 group-hover:text-[#EA6220] transition-colors duration-300">
                  <span>{service.tag}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ServicesSection;
