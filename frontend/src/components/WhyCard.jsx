import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import StatCard from "./StatCard";
import Team from "./TeamSection";
import DroneCard from "./ServiceDetail";

gsap.registerPlugin(ScrollTrigger);

const droneCardData = [
  {
    titleLine1: "Drones &",
    titleLine2: "UAVs",
    description:
      "From agriculture to crowd control—our drones take smart automation to the skies.",
    image: "./optimized/droneR.webp",
    headline: "Redefining Aerial Capabilities with Intelligence",
    overview:
      "Instrek's drone solutions span agriculture, surveillance, inspections, and emergency response. We offer complete lifecycle support including pilot training, drone repair, and data intelligence.",
    capabilities: [
      "Agricultural spraying drones",
      "Surveillance & crowd control drones",
      "Emergency response systems",
      "Training for drone pilots and technicians",
    ],
    impact:
      "Our drones optimize yield, improve public safety, and bring real-time insights to city planners and responders.",
  },
  {
    titleLine1: "Solar &",
    titleLine2: "Energy",
    description:
      "Scalable solar solutions and smart grids for clean, connected cities.",
    image: "./optimized/images/bulb.webp",
    headline: "Clean Energy for Smarter Cities",
    overview:
      "We deploy solar-powered systems integrated with IoT and smart energy grids for sustainable growth.",
    capabilities: [
      "Solar panel installation",
      "Smart solar energy monitoring",
      "Battery storage solutions",
      "Renewable energy labs and training programs",
    ],
    impact:
      "Reducing energy bills and carbon footprints, our systems help communities embrace green energy at scale.",
  },
  {
    titleLine1: "Electric Vehicles",
    titleLine2: "(EVs)",
    description: "Building the EV ecosystem—2W, 3W, batteries & beyond.",
    image: "./optimized/cityR.webp",
    headline: "Empowering eMobility Ecosystems",
    overview:
      "We support India's EV transition with solutions in vehicle assembly, battery tech, and job-ready EV training programs.",
    capabilities: [
      "E-scooters, 3W passenger & cargo EVs",
      "Battery diagnostics & LFP solutions",
      "EV maintenance & repair labs",
      "Integrated EV education ecosystem",
    ],
    impact:
      "Driving clean, future-ready mobility through innovation and inclusive workforce development.",
  },
  {
    titleLine1: "Artificial",
    titleLine2: "Intelligence",
    description:
      "From traffic systems to medical diagnosis—AI that understands and acts.",
    image: "./optimized/agriculR.webp",
    headline: "Making Machines Think Humanly",
    overview:
      "We deploy conversational AI, generative AI, and agentic bots for domains like healthcare, fintech, transport, and education.",
    capabilities: [
      "Voice-based bots with NLP & multilingual support",
      "AI for DevOps, diagnosis & customer experience",
      "Healthcare AI tools (DietRx, HuntGPT, etc.)",
      "AI training and application development",
    ],
    impact:
      "Boosting efficiency and precision across industries while reducing human effort in repetitive tasks.",
  },
  {
    titleLine1: "Internet of",
    titleLine2: "Things (IoT)",
    description:
      "Turning infrastructure into insight with real-time, automated control.",
    image: "./optimized/skillR.webp",
    headline: "Connecting Intelligence Across Infrastructure",
    overview:
      "We build connected ecosystems for energy, utilities, and mobility using smart sensors, controllers, and IoT hubs.",
    capabilities: [
      "Smart water meters and lighting systems",
      "Embedded automation controllers",
      "Predictive maintenance for city assets",
      "IoT training labs & simulators",
    ],
    impact:
      "Enabling responsive infrastructure that reduces wastage and enhances city planning.",
  },
  {
    titleLine1: "Blockchain &",
    titleLine2: "Identity",
    description:
      "Digital identity, zero-trust systems, and secure transactions powered by blockchain.",
    image: "./optimized/droneR.webp",
    headline: "Decentralized Trust for the Digital Age",
    overview:
      "From digital ID systems to credential verification, our blockchain solutions deliver data integrity and user ownership.",
    capabilities: [
      "Blockchain-based identity platforms",
      "Consent-driven verification systems",
      "Digitally signed certificates & NFTs",
      "Credential management dashboards",
    ],
    impact:
      "Creating transparent, tamper-proof ecosystems that enhance compliance and digital sovereignty.",
  },
  {
    titleLine1: "Robotics",
    titleLine2: "Systems",
    description:
      "Smart automation across industries—from robotics to utilities.",
    image: "./optimized/images/bulb.webp",
    headline: "Automation Built from the Core",
    overview:
      "We develop and deploy embedded controllers, remote sensors, and automation modules across verticals.",
    capabilities: [
      "Remote device control systems",
      "Embedded robotics platforms",
      "IoT-integrated microcontrollers",
      "End-to-end embedded labs for training",
    ],
    impact:
      "Powering scalable, device-level intelligence to automate operations and enhance control.",
  },
  {
    titleLine1: "Data &",
    titleLine2: "Analytics",
    description:
      "Transform data into decisions with AI-powered analytics and dashboards.",
    image: "./optimized/cityR.webp",
    headline: "Decisions That Matter, Driven by Data",
    overview:
      "We convert raw data into actionable insights using real-time dashboards, machine learning, and predictive systems.",
    capabilities: [
      "Power BI dashboards & ETL pipelines",
      "Predictive analytics & smart KPIs tracking",
      "Custom reporting systems for healthcare, mobility, and governance",
      "Legacy data migration & modernization for scalable analytics",
    ],
    impact:
      "Faster, smarter decision-making across departments and industries.",
  },
  {
    titleLine1: "Cloud &",
    titleLine2: "DevOps",
    description:
      "Accelerate digital delivery with DevOps automation and cloud-native tools.",
    image: "./optimized/agriculR.webp",
    headline: "Next-Level Infrastructure with AI-Powered DevOps",
    overview:
      "We streamline infrastructure management using natural language commands and AI-based workflows.",
    capabilities: [
      "Cross-cloud deployment platforms",
      "AI-powered DevOps orchestration",
      "Workflow automation with approval chains",
      "Infrastructure-as-code and containerization",
    ],
    impact:
      "Cut deployment time and cost while increasing scalability and flexibility.",
  },
  {
    titleLine1: "AR/VR &",
    titleLine2: "Microapps",
    description:
      "Augmented campaigns, 3D demos & remote learning—no downloads required.",
    image: "./optimized/skillR.webp",
    headline: "Interactivity Without Barriers",
    overview:
      "We deliver no-installation AR/VR microapps for onboarding, marketing, education, and engagement.",
    capabilities: [
      "Marker-based AR experiences",
      "3D model visualizations on mobile",
      "Microapps via QR/NFC (e.g., demos, feedback, onboarding)",
      "Immersive VR walkthroughs for training, exhibitions & simulations",
    ],
    impact:
      "Boosting campaign ROI, engagement, and learning through immersive, frictionless interactions.",
  },
  {
    titleLine1: "Tech",
    titleLine2: "Skilling",
    description:
      "Hands-on training in AI, Drones, EVs & more. Learn today, earn tomorrow.",
    image: "./optimized/droneR.webp",
    headline: "Building India's Tech Talent from Grassroots to Greatness",
    overview:
      "From Grade 1 to 70+, our hands-on training covers AI, EVs, Drones, IoT, and Robotics using certified trainers and modular tools.",
    capabilities: [
      "SAPL-aligned STEM kits (Grades 1–12)",
      "Adult skilling labs in Tier 2/3 cities",
      "Industry-ready simulators and toolkits",
      "Job mapping & smart alerts",
    ],
    impact:
      "Creating a tech-savvy workforce that stays, grows, and innovates locally.",
  },
  {
    titleLine1: "Smart",
    titleLine2: "Cities",
    description:
      "Connected infrastructure, AI-powered public services, and clean air tech.",
    image: "./optimized/images/bulb.webp",
    headline: "Cities That Think, Act, and Care",
    overview:
      "Our technology stack builds cleaner, more efficient urban ecosystems with smart connectivity, clean air, and AI-driven governance.",
    capabilities: [
      "AI-powered traffic & lighting",
      "Indoor/outdoor air purification",
      "Water monitoring, safety & disaster systems",
      "Smart transport & planning dashboards",
    ],
    impact:
      "Empowering future-ready cities that are sustainable, connected, and citizen-first.",
  },
];

const WhyCard = () => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;

    const getPadding = () => {
      if (window.innerWidth < 768) return 20;
      if (window.innerWidth < 1024) return 40;
      return 100;
    };

    gsap.to(cardsContainer, {
      x: () => -(cardsContainer.scrollWidth - window.innerWidth + getPadding()),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        pin: true,
        scrub: 1,
        snap: 1 / (droneCardData.length - 1),
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);
          const index = Math.round(progress * (droneCardData.length - 1));
          setCurrentIndex(index);
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black relative min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/optimized/services1R.webp')",
            backgroundSize: "30px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      {/* Main Content Container */}
      <div ref={containerRef} className="relative">
        {/* Fixed Position Header */}
        <div className="relative z-10 px-4 md:px-6 text-center py-12 md:py-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ea4820] to-[#ff724a]">
            FUTURE MIND <span className="text-white">SERVICES</span>
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed text-white mt-4 max-w-3xl mx-auto text-center font-light">
            As a one-stop Advisory & Delivery company, we help clients achieve
            ambitious goals in the digital economy.
          </p>
        </div>

        {/* Cards Container */}
        <div className="w-full flex items-center overflow-hidden">
          <div
            ref={cardsContainerRef}
            className="flex flex-nowrap gap-6 md:gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 mt-8"
          >
            {droneCardData.map((card, index) => (
              <div
                key={index}
                className="card min-w-[90vw] sm:min-w-[85vw] md:min-w-[75vw] lg:min-w-[500px] xl:min-w-[600px] 
                          w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[500px] xl:w-[600px] flex-shrink-0 
                          transform transition-transform duration-500 hover:scale-[1.02]"
              >
                <DroneCard
                  titleLine1={card.titleLine1}
                  titleLine2={card.titleLine2}
                  description={card.description}
                  image={card.image}
                  headline={card.headline}
                  overview={card.overview}
                  capabilities={card.capabilities}
                  impact={card.impact}
                />
              </div>
            ))}
          </div>

          {/* Side Navigation Hints */}
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/80 text-sm hidden lg:block">
            <div className="flex flex-col items-center space-y-3 bg-white/5 px-3 py-4 rounded-full backdrop-blur-sm">
              <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                ←
              </div>
              <span className="writing-mode-vertical text-orientation-mixed tracking-wider">
                Scroll
              </span>
            </div>
          </div>

          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/80 text-sm hidden lg:block">
            <div className="flex flex-col items-center space-y-3 bg-white/5 px-3 py-4 rounded-full backdrop-blur-sm">
              <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                →
              </div>
              <span className="writing-mode-vertical text-orientation-mixed tracking-wider">
                Scroll
              </span>
            </div>
          </div>
        </div>

        {/* Progress Indicators - Below Cards */}
      </div>
    </div>
  );
};

export default WhyCard;
