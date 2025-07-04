// import DroneCard from "./ServiceDetail";

// const droneCardData = [
//   {
//     titleLine1: "Drones &",
//     titleLine2: "UAVs",
//     description:
//       "From agriculture to crowd control – our drones take smart automation to the skies",
//     image: "./drone.png",
//   },
//   {
//     titleLine1: "AI-Powered",
//     titleLine2: "Surveillance",
//     description:
//       "Intelligent surveillance systems for public safety and infrastructure.",
//     image: "./surveillance.jpg",
//   },
//   {
//     titleLine1: "Smart",
//     titleLine2: "Delivery Drones",
//     description:
//       "Fast and reliable last-mile logistics using autonomous aerial drones.",
//     image: "./delivery.jpg",
//   },
//   {
//     titleLine1: "Agricultural",
//     titleLine2: "Drones",
//     description:
//       "Optimize crop yield with precision farming technologies in the sky.",
//     image: "./agriculture.jpg",
//   },
//   {
//     titleLine1: "Aerial",
//     titleLine2: "Mapping",
//     description:
//       "High-resolution mapping solutions for engineering and urban planning.",
//     image: "./mapping.jpg",
//   },
// ];

// export default function DroneServices() {
//   const fullList = [...droneCardData, ...droneCardData]; // duplicate for seamless scroll

//   return (
//     <div
//       className="min-h-screen bg-gradient-to-b from-[#121212] to-[#2A2342] py-15 text-white overflow-hidden"
//       style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
//     >
//       {/* Heading */}
//       <div className="mt-10 px-6">
//         <div className="flex justify-center mb-4">
//           <h2 className="text-5xl font-semibold text-[#ea4820] text-center">
//             Future Mind <span className="text-white">Services</span>
//           </h2>
//         </div>

//         <div className="max-w-5xl mx-auto mt-10 ">
//           <p className="text-xl font-semibold text-left">
//             As a one-stop Advisory & Delivery company, we help clients achieve
//             ambitious goals in the digital economy.
//           </p>
//         </div>
//       </div>

//       {/* Infinite Scrolling Cards */}
//       <div className="relative w-full p-8 overflow-hidden">
//         <div className="animate-scroll py-15 flex w-max gap-16 px-8">
//           {fullList.map((card, index) => (
//             <div key={index} className="min-w-[300px] w-[300px]">
//               <DroneCard
//                 titleLine1={card.titleLine1}
//                 titleLine2={card.titleLine2}
//                 description={card.description}
//                 image={card.image}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import DroneCard from "./ServiceDetail";
// import React from "react";

// const droneCardData = [
//   {
//     titleLine1: "Drones &",
//     titleLine2: "UAVs",
//     description:
//       "From agriculture to crowd control—our drones take smart automation to the skies.",
//     image: "/optimized/droneR.webp",
//     headline: "Redefining Aerial Capabilities with Intelligence",
//     overview:
//       "Instrek's drone solutions span agriculture, surveillance, inspections, and emergency response. We offer complete lifecycle support including pilot training, drone repair, and data intelligence.",
//     capabilities: [
//       "Agricultural spraying drones",
//       "Surveillance & crowd control drones",
//       "Emergency response systems",
//       "Training for drone pilots and technicians",
//     ],
//     impact:
//       "Our drones optimize yield, improve public safety, and bring real-time insights to city planners and responders.",
//   },
//   {
//     titleLine1: "Solar &",
//     titleLine2: "Energy",
//     description:
//       "Scalable solar solutions and smart grids for clean, connected cities.",
//     image: "/optimized/images/bulb.webp",
//     headline: "Clean Energy for Smarter Cities",
//     overview:
//       "We deploy solar-powered systems integrated with IoT and smart energy grids for sustainable growth.",
//     capabilities: [
//       "Solar panel installation",
//       "Smart solar energy monitoring",
//       "Battery storage solutions",
//       "Renewable energy labs and training programs",
//     ],
//     impact:
//       "Reducing energy bills and carbon footprints, our systems help communities embrace green energy at scale.",
//   },
//   {
//     titleLine1: "Electric Vehicles",
//     titleLine2: "(EVs)",
//     description: "Building the EV ecosystem—2W, 3W, batteries & beyond.",
//     image: "/optimized/cityR.webp",
//     headline: "Empowering eMobility Ecosystems",
//     overview:
//       "We support India's EV transition with solutions in vehicle assembly, battery tech, and job-ready EV training programs.",
//     capabilities: [
//       "E-scooters, 3W passenger & cargo EVs",
//       "Battery diagnostics & LFP solutions",
//       "EV maintenance & repair labs",
//       "Integrated EV education ecosystem",
//     ],
//     impact:
//       "Driving clean, future-ready mobility through innovation and inclusive workforce development.",
//   },
//   {
//     titleLine1: "Artificial",
//     titleLine2: "Intelligence",
//     description:
//       "From traffic systems to medical diagnosis—AI that understands and acts.",
//     image: "/optimized/agriculR.webp",
//     headline: "Making Machines Think Humanly",
//     overview:
//       "We deploy conversational AI, generative AI, and agentic bots for domains like healthcare, fintech, transport, and education.",
//     capabilities: [
//       "Voice-based bots with NLP & multilingual support",
//       "AI for DevOps, diagnosis & customer experience",
//       "Healthcare AI tools (DietRx, HuntGPT, etc.)",
//       "AI training and application development",
//     ],
//     impact:
//       "Boosting efficiency and precision across industries while reducing human effort in repetitive tasks.",
//   },
//   {
//     titleLine1: "Internet of",
//     titleLine2: "Things (IoT)",
//     description:
//       "Turning infrastructure into insight with real-time, automated control.",
//     image: "/optimized/skillR.webp",
//     headline: "Connecting Intelligence Across Infrastructure",
//     overview:
//       "We build connected ecosystems for energy, utilities, and mobility using smart sensors, controllers, and IoT hubs.",
//     capabilities: [
//       "Smart water meters and lighting systems",
//       "Embedded automation controllers",
//       "Predictive maintenance for city assets",
//       "IoT training labs & simulators",
//     ],
//     impact:
//       "Enabling responsive infrastructure that reduces wastage and enhances city planning.",
//   },
//   {
//     titleLine1: "Blockchain &",
//     titleLine2: "Identity",
//     description:
//       "Digital identity, zero-trust systems, and secure transactions powered by blockchain.",
//     image: "/optimized/droneR.webp",
//     headline: "Decentralized Trust for the Digital Age",
//     overview:
//       "From digital ID systems to credential verification, our blockchain solutions deliver data integrity and user ownership.",
//     capabilities: [
//       "Blockchain-based identity platforms",
//       "Consent-driven verification systems",
//       "Digitally signed certificates & NFTs",
//       "Credential management dashboards",
//     ],
//     impact:
//       "Creating transparent, tamper-proof ecosystems that enhance compliance and digital sovereignty.",
//   },
//   {
//     titleLine1: "Robotics",
//     titleLine2: "Systems",
//     description:
//       "Smart automation across industries—from robotics to utilities.",
//     image: "/optimized/images/bulb.webp",
//     headline: "Automation Built from the Core",
//     overview:
//       "We develop and deploy embedded controllers, remote sensors, and automation modules across verticals.",
//     capabilities: [
//       "Remote device control systems",
//       "Embedded robotics platforms",
//       "IoT-integrated microcontrollers",
//       "End-to-end embedded labs for training",
//     ],
//     impact:
//       "Powering scalable, device-level intelligence to automate operations and enhance control.",
//   },
//   {
//     titleLine1: "Data &",
//     titleLine2: "Analytics",
//     description:
//       "Transform data into decisions with AI-powered analytics and dashboards.",
//     image: "/optimized/cityR.webp",
//     headline: "Decisions That Matter, Driven by Data",
//     overview:
//       "We convert raw data into actionable insights using real-time dashboards, machine learning, and predictive systems.",
//     capabilities: [
//       "Power BI dashboards & ETL pipelines",
//       "Predictive analytics & smart KPIs tracking",
//       "Custom reporting systems for healthcare, mobility, and governance",
//       "Legacy data migration & modernization for scalable analytics",
//     ],
//     impact:
//       "Faster, smarter decision-making across departments and industries.",
//   },
//   {
//     titleLine1: "Cloud &",
//     titleLine2: "DevOps",
//     description:
//       "Accelerate digital delivery with DevOps automation and cloud-native tools.",
//     image: "/optimized/agriculR.webp",
//     headline: "Next-Level Infrastructure with AI-Powered DevOps",
//     overview:
//       "We streamline infrastructure management using natural language commands and AI-based workflows.",
//     capabilities: [
//       "Cross-cloud deployment platforms",
//       "AI-powered DevOps orchestration",
//       "Workflow automation with approval chains",
//       "Infrastructure-as-code and containerization",
//     ],
//     impact:
//       "Cut deployment time and cost while increasing scalability and flexibility.",
//   },
//   {
//     titleLine1: "AR/VR &",
//     titleLine2: "Microapps",
//     description:
//       "Augmented campaigns, 3D demos & remote learning—no downloads required.",
//     image: "/optimized/skillR.webp",
//     headline: "Interactivity Without Barriers",
//     overview:
//       "We deliver no-installation AR/VR microapps for onboarding, marketing, education, and engagement.",
//     capabilities: [
//       "Marker-based AR experiences",
//       "3D model visualizations on mobile",
//       "Microapps via QR/NFC (e.g., demos, feedback, onboarding)",
//       "Immersive VR walkthroughs for training, exhibitions & simulations",
//     ],
//     impact:
//       "Boosting campaign ROI, engagement, and learning through immersive, frictionless interactions.",
//   },
//   {
//     titleLine1: "Tech",
//     titleLine2: "Skilling",
//     description:
//       "Hands-on training in AI, Drones, EVs & more. Learn today, earn tomorrow.",
//     image: "/optimized/droneR.webp",
//     headline: "Building India's Tech Talent from Grassroots to Greatness",
//     overview:
//       "From Grade 1 to 70+, our hands-on training covers AI, EVs, Drones, IoT, and Robotics using certified trainers and modular tools.",
//     capabilities: [
//       "SAPL-aligned STEM kits (Grades 1–12)",
//       "Adult skilling labs in Tier 2/3 cities",
//       "Industry-ready simulators and toolkits",
//       "Job mapping & smart alerts",
//     ],
//     impact:
//       "Creating a tech-savvy workforce that stays, grows, and innovates locally.",
//   },
//   {
//     titleLine1: "Smart",
//     titleLine2: "Cities",
//     description:
//       "Connected infrastructure, AI-powered public services, and clean air tech.",
//     image: "/optimized/images/bulb.webp",
//     headline: "Cities That Think, Act, and Care",
//     overview:
//       "Our technology stack builds cleaner, more efficient urban ecosystems with smart connectivity, clean air, and AI-driven governance.",
//     capabilities: [
//       "AI-powered traffic & lighting",
//       "Indoor/outdoor air purification",
//       "Water monitoring, safety & disaster systems",
//       "Smart transport & planning dashboards",
//     ],
//     impact:
//       "Empowering future-ready cities that are sustainable, connected, and citizen-first.",
//   },
// ];

// export default function DroneServices() {
//   const fullList = [...droneCardData, ...droneCardData];

//   return (
//     <div
//       className="relative py-8 md:py-12 text-white overflow-hidden"
//       style={{
//         fontFamily: "'PP Neue Montreal', sans-serif",
//       }}
//     >
//       {/* Gradient + Background image as absolute layer */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage:
//             "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0.3), rgba(0,0,0,0)), url('/optimized/services1R.webp')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/80" />

//       {/* Content Layer */}
//       <div className="relative z-10 px-4 md:px-6 text-center mb-6 md:mb-8">
//         <h2 className="text-3xl md:text-5xl capitalize font-semibold text-[#ea4820]">
//           FUTURE MIND <span className="text-white">SERVICES</span>
//         </h2>
//         <p className="text-lg md:text-2xl leading-relaxed text-white mt-4 max-w-3xl mx-auto text-left sm:text-center sm:mx-auto px-4 md:px-0">
//           As a one-stop Advisory & Delivery company, we help clients achieve
//           ambitious goals in the digital economy.
//         </p>
//       </div>

//       {/* Infinite Scrolling Cards */}
//       <div className="relative z-10 w-full p-4 md:p-6 overflow-hidden">
//         <div
//           className="py-4 md:py-8 flex w-max gap-6 md:gap-12 px-4 md:px-6 animate-scroll hover:[animation-play-state:paused]"
//           style={{
//             willChange: "transform",
//             animationFillMode: "backwards",
//           }}
//         >
//           {fullList.map((card, index) => (
//             <div
//               key={index}
//               className="min-w-[280px] md:min-w-[300px] w-[280px] md:w-[300px]"
//             >
//               <DroneCard
//                 titleLine1={card.titleLine1}
//                 titleLine2={card.titleLine2}
//                 description={card.description}
//                 image={card.image}
//                 headline={card.headline}
//                 overview={card.overview}
//                 capabilities={card.capabilities}
//                 impact={card.impact}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import StatCard from "./StatCard";
import Team from "./TeamSection";
import DroneCard from "./ServiceDetail";

gsap.registerPlugin(ScrollTrigger);

// const droneCardData = [
//   {
//     titleLine1: "Drones &",
//     titleLine2: "UAVs",
//     description:
//       "From agriculture to crowd control—our drones take smart automation to the skies.",
//     image: "./optimized/droneR.webp",
//     headline: "Redefining Aerial Capabilities with Intelligence",
//     overview:
//       "Instrek's drone solutions span agriculture, surveillance, inspections, and emergency response. We offer complete lifecycle support including pilot training, drone repair, and data intelligence.",
//     capabilities: [
//       "Agricultural spraying drones",
//       "Surveillance & crowd control drones",
//       "Emergency response systems",
//       "Training for drone pilots and technicians",
//     ],
//     impact:
//       "Our drones optimize yield, improve public safety, and bring real-time insights to city planners and responders.",
//   },
//   {
//     titleLine1: "Solar &",
//     titleLine2: "Energy",
//     description:
//       "Scalable solar solutions and smart grids for clean, connected cities.",
//     image: "./optimized/images/bulb.webp",
//     headline: "Clean Energy for Smarter Cities",
//     overview:
//       "We deploy solar-powered systems integrated with IoT and smart energy grids for sustainable growth.",
//     capabilities: [
//       "Solar panel installation",
//       "Smart solar energy monitoring",
//       "Battery storage solutions",
//       "Renewable energy labs and training programs",
//     ],
//     impact:
//       "Reducing energy bills and carbon footprints, our systems help communities embrace green energy at scale.",
//   },
//   {
//     titleLine1: "Electric Vehicles",
//     titleLine2: "(EVs)",
//     description: "Building the EV ecosystem—2W, 3W, batteries & beyond.",
//     image: "./optimized/cityR.webp",
//     headline: "Empowering eMobility Ecosystems",
//     overview:
//       "We support India's EV transition with solutions in vehicle assembly, battery tech, and job-ready EV training programs.",
//     capabilities: [
//       "E-scooters, 3W passenger & cargo EVs",
//       "Battery diagnostics & LFP solutions",
//       "EV maintenance & repair labs",
//       "Integrated EV education ecosystem",
//     ],
//     impact:
//       "Driving clean, future-ready mobility through innovation and inclusive workforce development.",
//   },
//   {
//     titleLine1: "Artificial",
//     titleLine2: "Intelligence",
//     description:
//       "From traffic systems to medical diagnosis—AI that understands and acts.",
//     image: "./optimized/agriculR.webp",
//     headline: "Making Machines Think Humanly",
//     overview:
//       "We deploy conversational AI, generative AI, and agentic bots for domains like healthcare, fintech, transport, and education.",
//     capabilities: [
//       "Voice-based bots with NLP & multilingual support",
//       "AI for DevOps, diagnosis & customer experience",
//       "Healthcare AI tools (DietRx, HuntGPT, etc.)",
//       "AI training and application development",
//     ],
//     impact:
//       "Boosting efficiency and precision across industries while reducing human effort in repetitive tasks.",
//   },
//   {
//     titleLine1: "Internet of",
//     titleLine2: "Things (IoT)",
//     description:
//       "Turning infrastructure into insight with real-time, automated control.",
//     image: "./optimized/skillR.webp",
//     headline: "Connecting Intelligence Across Infrastructure",
//     overview:
//       "We build connected ecosystems for energy, utilities, and mobility using smart sensors, controllers, and IoT hubs.",
//     capabilities: [
//       "Smart water meters and lighting systems",
//       "Embedded automation controllers",
//       "Predictive maintenance for city assets",
//       "IoT training labs & simulators",
//     ],
//     impact:
//       "Enabling responsive infrastructure that reduces wastage and enhances city planning.",
//   },
//   {
//     titleLine1: "Blockchain &",
//     titleLine2: "Identity",
//     description:
//       "Digital identity, zero-trust systems, and secure transactions powered by blockchain.",
//     image: "./optimized/droneR.webp",
//     headline: "Decentralized Trust for the Digital Age",
//     overview:
//       "From digital ID systems to credential verification, our blockchain solutions deliver data integrity and user ownership.",
//     capabilities: [
//       "Blockchain-based identity platforms",
//       "Consent-driven verification systems",
//       "Digitally signed certificates & NFTs",
//       "Credential management dashboards",
//     ],
//     impact:
//       "Creating transparent, tamper-proof ecosystems that enhance compliance and digital sovereignty.",
//   },
//   {
//     titleLine1: "Robotics",
//     titleLine2: "Systems",
//     description:
//       "Smart automation across industries—from robotics to utilities.",
//     image: "./optimized/images/bulb.webp",
//     headline: "Automation Built from the Core",
//     overview:
//       "We develop and deploy embedded controllers, remote sensors, and automation modules across verticals.",
//     capabilities: [
//       "Remote device control systems",
//       "Embedded robotics platforms",
//       "IoT-integrated microcontrollers",
//       "End-to-end embedded labs for training",
//     ],
//     impact:
//       "Powering scalable, device-level intelligence to automate operations and enhance control.",
//   },
//   {
//     titleLine1: "Data &",
//     titleLine2: "Analytics",
//     description:
//       "Transform data into decisions with AI-powered analytics and dashboards.",
//     image: "./optimized/cityR.webp",
//     headline: "Decisions That Matter, Driven by Data",
//     overview:
//       "We convert raw data into actionable insights using real-time dashboards, machine learning, and predictive systems.",
//     capabilities: [
//       "Power BI dashboards & ETL pipelines",
//       "Predictive analytics & smart KPIs tracking",
//       "Custom reporting systems for healthcare, mobility, and governance",
//       "Legacy data migration & modernization for scalable analytics",
//     ],
//     impact:
//       "Faster, smarter decision-making across departments and industries.",
//   },
//   {
//     titleLine1: "Cloud &",
//     titleLine2: "DevOps",
//     description:
//       "Accelerate digital delivery with DevOps automation and cloud-native tools.",
//     image: "./optimized/agriculR.webp",
//     headline: "Next-Level Infrastructure with AI-Powered DevOps",
//     overview:
//       "We streamline infrastructure management using natural language commands and AI-based workflows.",
//     capabilities: [
//       "Cross-cloud deployment platforms",
//       "AI-powered DevOps orchestration",
//       "Workflow automation with approval chains",
//       "Infrastructure-as-code and containerization",
//     ],
//     impact:
//       "Cut deployment time and cost while increasing scalability and flexibility.",
//   },
//   {
//     titleLine1: "AR/VR &",
//     titleLine2: "Microapps",
//     description:
//       "Augmented campaigns, 3D demos & remote learning—no downloads required.",
//     image: "./optimized/skillR.webp",
//     headline: "Interactivity Without Barriers",
//     overview:
//       "We deliver no-installation AR/VR microapps for onboarding, marketing, education, and engagement.",
//     capabilities: [
//       "Marker-based AR experiences",
//       "3D model visualizations on mobile",
//       "Microapps via QR/NFC (e.g., demos, feedback, onboarding)",
//       "Immersive VR walkthroughs for training, exhibitions & simulations",
//     ],
//     impact:
//       "Boosting campaign ROI, engagement, and learning through immersive, frictionless interactions.",
//   },
//   {
//     titleLine1: "Tech",
//     titleLine2: "Skilling",
//     description:
//       "Hands-on training in AI, Drones, EVs & more. Learn today, earn tomorrow.",
//     image: "./optimized/droneR.webp",
//     headline: "Building India's Tech Talent from Grassroots to Greatness",
//     overview:
//       "From Grade 1 to 70+, our hands-on training covers AI, EVs, Drones, IoT, and Robotics using certified trainers and modular tools.",
//     capabilities: [
//       "SAPL-aligned STEM kits (Grades 1–12)",
//       "Adult skilling labs in Tier 2/3 cities",
//       "Industry-ready simulators and toolkits",
//       "Job mapping & smart alerts",
//     ],
//     impact:
//       "Creating a tech-savvy workforce that stays, grows, and innovates locally.",
//   },
//   {
//     titleLine1: "Smart",
//     titleLine2: "Cities",
//     description:
//       "Connected infrastructure, AI-powered public services, and clean air tech.",
//     image: "./optimized/images/bulb.webp",
//     headline: "Cities That Think, Act, and Care",
//     overview:
//       "Our technology stack builds cleaner, more efficient urban ecosystems with smart connectivity, clean air, and AI-driven governance.",
//     capabilities: [
//       "AI-powered traffic & lighting",
//       "Indoor/outdoor air purification",
//       "Water monitoring, safety & disaster systems",
//       "Smart transport & planning dashboards",
//     ],
//     impact:
//       "Empowering future-ready cities that are sustainable, connected, and citizen-first.",
//   },
// ];

const droneCardData = [
  {
    titleLine1: "Drones &",
    titleLine2: "UAVs",
    description:
      "From agriculture to crowd control—our drones take smart automation to the skies.",
    image: "/optimized/droneR.webp",
    headline: "Redefining Aerial Capabilities with Intelligence",
    overview:
      "Instrek's drone solutions span agriculture, surveillance, inspections, and emergency response. We offer complete lifecycle support including pilot training, drone repair, and data intelligence.",
    capabilities: [
      {
        image: "/optimized/agricul.webp",
        text: "Agricultural spraying drones",
      },
      {
        image: "/optimized/images/smartcity.webp",
        text: "Surveillance & crowd control drones",
      },
      {
        image: "/optimized/images/smarcity1.webp",
        text: "Emergency response systems",
      },
      {
        image: "/optimized/images/workforceTrain.webp",
        text: "Training for drone pilots and technicians",
      },
    ],
    impact:
      "Our drones optimize yield, improve public safety, and bring real-time insights to city planners and responders.",
  },
  {
    titleLine1: "Solar &",
    titleLine2: "Energy",
    description:
      "Scalable solar solutions and smart grids for clean, connected cities.",
    image: "/optimized/images/bulb.webp",
    headline: "Clean Energy for Smarter Cities",
    overview:
      "We deploy solar-powered systems integrated with IoT and smart energy grids for sustainable growth.",
    capabilities: [
      {
        image: "/optimized/images/bulb.webp",
        text: "Solar panel installation",
      },
      {
        image: "/optimized/images/strategic.webp",
        text: "Smart solar energy monitoring",
      },
      {
        image: "/optimized/images/env1.webp",
        text: "Battery storage solutions",
      },
      {
        image: "/optimized/images/digitaltrans.webp",
        text: "Renewable energy labs and training programs",
      },
    ],
    impact:
      "Reducing energy bills and carbon footprints, our systems help communities embrace green energy at scale.",
  },
  {
    titleLine1: "Electric Vehicles",
    titleLine2: "(EVs)",
    description: "Building the EV ecosystem—2W, 3W, batteries & beyond.",
    image: "/optimized/cityR.webp",
    headline: "Empowering eMobility Ecosystems",
    overview:
      "We support India's EV transition with solutions in vehicle assembly, battery tech, and job-ready EV training programs.",
    capabilities: [
      {
        image: "/optimized/images/smartcity.webp",
        text: "E-scooters, 3W passenger & cargo EVs",
      },
      {
        image: "/optimized/images/iot.webp",
        text: "Battery diagnostics & LFP solutions",
      },
      {
        image: "/optimized/images/workforceTrain.webp",
        text: "EV maintenance & repair labs",
      },
      {
        image: "/optimized/images/blockchainlern.webp",
        text: "Integrated EV education ecosystem",
      },
    ],
    impact:
      "Driving clean, future-ready mobility through innovation and inclusive workforce development.",
  },
  {
    titleLine1: "Artificial",
    titleLine2: "Intelligence",
    description:
      "From traffic systems to medical diagnosis—AI that understands and acts.",
    image: "/optimized/agriculR.webp",
    headline: "Making Machines Think Humanly",
    overview:
      "We deploy conversational AI, generative AI, and agentic bots for domains like healthcare, fintech, transport, and education.",
    capabilities: [
      {
        image: "/optimized/images/aloudailab.webp",
        text: "Voice-based bots with NLP & multilingual support",
      },
      {
        image: "/optimized/images/aiImage.webp",
        text: "AI for DevOps, diagnosis & customer experience",
      },
      {
        image: "/optimized/images/digitaltrans.webp",
        text: "Healthcare AI tools (DietRx, HuntGPT, etc.)",
      },
      {
        image: "/optimized/images/workforceTrain.webp",
        text: "AI training and application development",
      },
    ],
    impact:
      "Boosting efficiency and precision across industries while reducing human effort in repetitive tasks.",
  },
  {
    titleLine1: "Internet of",
    titleLine2: "Things (IoT)",
    description:
      "Turning infrastructure into insight with real-time, automated control.",
    image: "/optimized/skillR.webp",
    headline: "Connecting Intelligence Across Infrastructure",
    overview:
      "We build connected ecosystems for energy, utilities, and mobility using smart sensors, controllers, and IoT hubs.",
    capabilities: [
      {
        image: "/optimized/images/smartcity.webp",
        text: "Smart water meters and lighting systems",
      },
      {
        image: "/optimized/images/iot.webp",
        text: "Embedded automation controllers",
      },
      {
        image: "/optimized/images/workforceTrain.webp",
        text: "Predictive maintenance for city assets",
      },
      {
        image: "/optimized/images/digitaltrans.webp",
        text: "IoT training labs & simulators",
      },
    ],
    impact:
      "Enabling responsive infrastructure that reduces wastage and enhances city planning.",
  },
  {
    titleLine1: "Blockchain &",
    titleLine2: "Identity",
    description:
      "Digital identity, zero-trust systems, and secure transactions powered by blockchain.",
    image: "/optimized/droneR.webp",
    headline: "Decentralized Trust for the Digital Age",
    overview:
      "From digital ID systems to credential verification, our blockchain solutions deliver data integrity and user ownership.",
    capabilities: [
      {
        image: "/optimized/images/blockchainlern.webp",
        text: "Blockchain-based identity platforms",
      },
      {
        image: "/optimized/images/strategic.webp",
        text: "Consent-driven verification systems",
      },
      {
        image: "/optimized/images/digitaltrans.webp",
        text: "Digitally signed certificates & NFTs",
      },
      {
        image: "/optimized/images/company-overview.webp",
        text: "Credential management dashboards",
      },
    ],
    impact:
      "Creating transparent, tamper-proof ecosystems that enhance compliance and digital sovereignty.",
  },
  {
    titleLine1: "Robotics",
    titleLine2: "Systems",
    description:
      "Smart automation across industries—from robotics to utilities.",
    image: "/optimized/images/bulb.webp",
    headline: "Automation Built from the Core",
    overview:
      "We develop and deploy embedded controllers, remote sensors, and automation modules across verticals.",
    capabilities: [
      {
        image: "/optimized/images/robo.webp",
        text: "Remote device control systems",
      },
      {
        image: "/optimized/images/iot.webp",
        text: "Embedded robotics platforms",
      },
      {
        image: "/optimized/images/digitaltrans.webp",
        text: "IoT-integrated microcontrollers",
      },
      {
        image: "/optimized/images/workforceTrain.webp",
        text: "End-to-end embedded labs for training",
      },
    ],
    impact:
      "Powering scalable, device-level intelligence to automate operations and enhance control.",
  },
  {
    titleLine1: "Data &",
    titleLine2: "Analytics",
    description:
      "Transform data into decisions with AI-powered analytics and dashboards.",
    image: "/optimized/cityR.webp",
    headline: "Decisions That Matter, Driven by Data",
    overview:
      "We convert raw data into actionable insights using real-time dashboards, machine learning, and predictive systems.",
    capabilities: [
      {
        image: "/optimized/icons/powerbi.svg",
        text: "Power BI dashboards & ETL pipelines",
      },
      {
        image: "/optimized/icons/analytics.svg",
        text: "Predictive analytics & smart KPIs tracking",
      },
      {
        image: "/optimized/icons/reporting.svg",
        text: "Custom reporting systems for healthcare, mobility, and governance",
      },
      {
        image: "/optimized/icons/migration.svg",
        text: "Legacy data migration & modernization for scalable analytics",
      },
    ],
    impact:
      "Faster, smarter decision-making across departments and industries.",
  },
  {
    titleLine1: "Cloud &",
    titleLine2: "DevOps",
    description:
      "Accelerate digital delivery with DevOps automation and cloud-native tools.",
    image: "/optimized/agriculR.webp",
    headline: "Next-Level Infrastructure with AI-Powered DevOps",
    overview:
      "We streamline infrastructure management using natural language commands and AI-based workflows.",
    capabilities: [
      {
        image: "/optimized/images/robo.webp",
        text: "Cross-cloud deployment platforms",
      },
      {
        image: "/optimized/images/smartcity.webp",
        text: "AI-powered DevOps orchestration",
      },
      {
        image: "/optimized/icons/workflow.svg",
        text: "Workflow automation with approval chains",
      },
      {
        image: "/optimized/images/strategic.webp",
        text: "Infrastructure-as-code and containerization",
      },
    ],
    impact:
      "Cut deployment time and cost while increasing scalability and flexibility.",
  },
  {
    titleLine1: "AR/VR &",
    titleLine2: "Microapps",
    description:
      "Augmented campaigns, 3D demos & remote learning—no downloads required.",
    image: "/optimized/skillR.webp",
    headline: "Interactivity Without Barriers",
    overview:
      "We deliver no-installation AR/VR microapps for onboarding, marketing, education, and engagement.",
    capabilities: [
      {
        image: "/optimized/icons/ar.svg",
        text: "Marker-based AR experiences",
      },
      {
        image: "/optimized/icons/3d.svg",
        text: "3D model visualizations on mobile",
      },
      {
        image: "/optimized/images/strategic.webp",
        text: "Microapps via QR/NFC (e.g., demos, feedback, onboarding)",
      },
      {
        image: "/optimized/icons/vr.svg",
        text: "Immersive VR walkthroughs for training, exhibitions & simulations",
      },
    ],
    impact:
      "Boosting campaign ROI, engagement, and learning through immersive, frictionless interactions.",
  },
  {
    titleLine1: "Tech",
    titleLine2: "Skilling",
    description:
      "Hands-on training in AI, Drones, EVs & more. Learn today, earn tomorrow.",
    image: "/optimized/droneR.webp",
    headline: "Building India's Tech Talent from Grassroots to Greatness",
    overview:
      "From Grade 1 to 70+, our hands-on training covers AI, EVs, Drones, IoT, and Robotics using certified trainers and modular tools.",
    capabilities: [
      {
        image: "/optimized/icons/stem.svg",
        text: "SAPL-aligned STEM kits (Grades 1–12)",
      },
      {
        image: "/optimized/images/strategic.webp",
        text: "Adult skilling labs in Tier 2/3 cities",
      },
      {
        image: "/optimized/images/strategic.webp",
        text: "Industry-ready simulators and toolkits",
      },
      {
        image: "/optimized/icons/job.svg",
        text: "Job mapping & smart alerts",
      },
    ],
    impact:
      "Creating a tech-savvy workforce that stays, grows, and innovates locally.",
  },
  {
    titleLine1: "Smart",
    titleLine2: "Cities",
    description:
      "Connected infrastructure, AI-powered public services, and clean air tech.",
    image: "/optimized/images/bulb.webp",
    headline: "Cities That Think, Act, and Care",
    overview:
      "Our technology stack builds cleaner, more efficient urban ecosystems with smart connectivity, clean air, and AI-driven governance.",
    capabilities: [
      {
        image: "/optimized/images/workforceTrain.webp",
        text: "AI-powered traffic & lighting",
      },
      {
        image: "/optimized/images/strategic.webp",
        text: "Indoor/outdoor air purification",
      },
      {
        image: "/optimized/images/digitaltrans.webp",
        text: "Water monitoring, safety & disaster systems",
      },
      {
        image: "/optimized/smartcityR1.webp",
        text: "Smart transport & planning dashboards",
      },
    ],
    impact:
      "Empowering future-ready cities that are sustainable, connected, and citizen-first.",
  },
];
const DroneServices = () => {
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
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        pin: true,
        // scrub: 0.5,
        scrub: true,
        snap: {
          snapTo: 1 / (droneCardData.length - 1),
          duration: 0.1,
          delay: 0,
          ease: "power1.out",
          inertia: false,
        },
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

        {/* Cards Container with smoother transitions */}
        <div className="w-full flex items-center overflow-hidden">
          <div
            ref={cardsContainerRef}
            className="flex flex-nowrap gap-6 md:gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-6 md:px-8 lg:px-12 mt-8"
            style={{
              transition: "transform 0.5s ease-out",
              willChange: "transform",
            }}
          >
            {droneCardData.map((card, index) => (
              <div
                key={index}
                className="card min-w-[75vw] sm:min-w-[85vw] md:min-w-[75vw] lg:min-w-[500px] xl:min-w-[600px] 
                          w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[500px] xl:w-[600px] flex-shrink-0 
                          transform transition-all duration-500 ease-out "
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
            <div className="flex flex-col items-center space-y-3 bg-white/5 px-3 py-4 rounded-full ">
              {/* <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                ←
              </div>
              <span className="writing-mode-vertical text-orientation-mixed tracking-wider">
                Scroll
              </span> */}
            </div>
          </div>

          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/80 text-sm hidden lg:block">
            {/* <div className="flex flex-col items-center space-y-3 bg-white/5 px-3 py-4 rounded-full backdrop-blur-sm">
              <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                →
              </div>
              <span className="writing-mode-vertical text-orientation-mixed tracking-wider">
                Scroll
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneServices;
