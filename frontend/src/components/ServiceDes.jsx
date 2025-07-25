import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";

const ServiceDes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when component mounts or service data changes
  useEffect(() => {
    // Use requestAnimationFrame to ensure the scroll happens after the component renders
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [location.state?.service]);

  // Also scroll to top when component first mounts
  useEffect(() => {
    // Only scroll to top if we have service data or if it's the initial mount
    if (location.state?.service || !location.state) {
      window.scrollTo(0, 0);
    }
  }, []);

  const serviceData = location.state?.service || {
    titleLine1: "Our",
    titleLine2: "Services",
    description: "Explore our comprehensive range of services.",
    image: "./optimized/services1R.webp",
    headline: "Our Services",
    overview:
      "At Instrek, we offer a comprehensive range of technology solutions.",
    capabilities: [
      {
        image: "./optimized/images/digitaltrans.webp",
        text: "End-to-end implementation",
      },
      {
        image: "./optimized/images/strategic.webp",
        text: "Expert consultation",
      },
      {
        image: "./optimized/images/workforceTrain.webp",
        text: "Technical support",
      },
      {
        image: "./optimized/images/company-overview.webp",
        text: "Training programs",
      },
    ],
    impact: "Driving digital transformation across industries.",
  };

  const additionalServices = [
    {
      title: "Implementation & Integration",
      image: "./optimized/images/digitaltrans.webp",
      description:
        "End-to-end implementation and seamless integration with existing systems",
    },
    {
      title: "Consulting & Strategy",
      image: "./optimized/images/strategic.webp",
      description:
        "Expert consultation and strategic planning for optimal deployment",
    },
    {
      title: "Training & Support",
      image: "./optimized/images/workforceTrain.webp",
      description:
        "Comprehensive training programs and ongoing technical support",
    },
    {
      title: `${serviceData.titleLine1} ${serviceData.titleLine2} Solutions`,
      image: serviceData.image,
      description: serviceData.description,
    },
  ];

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLinkClick = (href) => {
    // For hash links (internal page sections)
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // For regular routes, navigate
    navigate(href);
  };

  return (
    <div className="relative bg-black text-white ">
      {/* Header Component */}
      <Header />

      <main
        className="pt-20 "
        style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
      >
        {/* Hero Section */}
        <section className="relative">
          {/* Background Image with Gradient */}
          <div className="relative h-[60vh] min-h-[500px]">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url('${serviceData.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

            {/* Hero Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                    <span className="text-[#ea4820]">
                      {serviceData.titleLine1}
                    </span>{" "}
                    <span className="text-white">{serviceData.titleLine2}</span>
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8">
                    {serviceData.headline}
                  </p>
                  <p className="text-lg sm:text-xl text-gray-300">
                    {serviceData.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview Section */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-[#ea4820]">
                Overview
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
                {serviceData.overview}
              </p>
            </div>

            {/* Capabilities Section */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-[#ea4820]">
                Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {serviceData.capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/10"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image Container */}
                      <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                        <div className="relative h-40 xs:h-48 sm:aspect-[4/3] sm:h-full max-h-56 sm:max-h-none overflow-hidden">
                          <img
                            src={capability.image}
                            alt={capability.text}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "./optimized/images/company-overview.webp";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                      </div>

                      {/* Text Container */}
                      <div className="w-full sm:w-1/2 p-6 flex items-center min-h-[60px]">
                        <p className="text-lg sm:text-xl text-gray-200 font-medium">
                          {capability.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Section */}
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-[#ea4820]">
                Impact
              </h2>
              <div className="bg-gradient-to-r from-[#ea4820]/20 to-black p-8 rounded-lg">
                <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
                  {serviceData.impact}
                </p>
              </div>
            </div>

            {/* Additional Services */}
            {/* <div>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-[#ea4820]">
                Additional Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {additionalServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#ea4820] group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default ServiceDes;
