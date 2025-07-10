import { useState } from "react";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !agreed) {
      setSubmitStatus({
        type: "error",
        message: "Please enter your email and agree to the terms.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use Formspree or similar service for direct email sending
      const formData = new FormData();
      formData.append("email", email);
      formData.append(
        "message",
        `Hello,\n\nI would like to get in touch with you.\n\nMy email: ${email}\n\nBest regards,\n${email}`
      );
      formData.append("subject", "Contact from Website");

      // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
      const response = await fetch(
        "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setEmail("");
        setAgreed(false);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email error:", error);
      // Fallback to mailto link if service is not available
      const subject = encodeURIComponent("Contact from Website");
      const body = encodeURIComponent(
        `Hello,\n\nI would like to get in touch with you.\n\nMy email: ${email}\n\nBest regards,\n${email}`
      );
      const mailtoLink = `mailto:connect@instrek.com?subject=${subject}&body=${body}`;

      // Open email client as fallback
      window.open(mailtoLink, "_blank");

      setSubmitStatus({
        type: "success",
        message: "Thankyou. We'll be in touch shortly!",
      });
      setEmail("");
      setAgreed(false);
    } finally {
      setIsSubmitting(false);
    }
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

  const handleServiceClick = (serviceData) => {
    navigate("/services-page", {
      state: {
        service: serviceData,
      },
    });
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  // Service data matching the structure from Services.jsx
  const serviceData = {
    drones: {
      titleLine1: "Drones &",
      titleLine2: "UAVs",
      description:
        "From militry to crowd control - our drones take smart automation to the skies.",
      image: "/optimized/droneR.webp",
      headline: "Redefining Aerial Capabilities with Intelligence",
      overview:
        "Instrek's drone solutions span agriculture, surveillance, inspections, and emergency response. We offer complete lifecycle support including pilot training, drone repair, and data intelligence.",
      capabilities: [
        {
          image: "/capabilities/commercialdrone.webp",
          text: "Commercial Drones ",
        },
        {
          image: "/capabilities/Military.webp",
          text: "Military Drones",
        },
        {
          image: "/capabilities/RDdrone.webp",
          text: "R&D Projects in Drones",
        },
        {
          image: "/optimized/images/workforceTrain.webp",
          text: "Connected Drones with Encrypted Communications",
        },
      ],
      impact:
        "Our drones optimize yield, improve public safety, and bring real-time insights to city planners and responders.",
    },
    solar: {
      titleLine1: "Solar &",
      titleLine2: "Energy",
      description:
        "Scalable solar solutions and smart grids for clean, connected cities.",
      image: "/optimized/agriculR.webp",
      headline: "Clean Energy for Smarter Cities",
      overview:
        "We deploy solar-powered systems integrated with IoT and smart energy grids for sustainable growth.",
      capabilities: [
        {
          image: "/capabilities/soloeimageinst.webp",
          text: "Solar panel installation",
        },
        {
          image: "/capabilities/monitoring.webp",
          text: "Smart solar energy monitoring",
        },
        {
          image: "/capabilities/batterydia.webp",
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
    evs: {
      titleLine1: "Electric Vehicles",
      titleLine2: "(EVs)",
      description: "Building the EV ecosystem—2W, 3W, batteries & beyond.",
      image: "/optimized/electric.webp",
      headline: "Empowering eMobility Ecosystems",
      overview:
        "We support India's EV transition with solutions in vehicle assembly, battery tech, and job-ready EV training programs.",
      capabilities: [
        {
          image: "/capabilities/electric-scooters.webp",
          text: "E-scooters, 3W passenger & cargo EVs",
        },
        {
          image: "/capabilities/batterydia.webp",
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
    ai: {
      titleLine1: "Artificial",
      titleLine2: "Intelligence",
      description:
        "From traffic systems to medical diagnosis—AI that understands and acts.",
      image: "/optimized/images/robo.webp",
      headline: "Making Machines Think Humanly",
      overview:
        "We deploy conversational AI, generative AI, and agentic bots for domains like healthcare, fintech, transport, and education.",
      capabilities: [
        {
          image: "/optimized/images/aloudailab.webp",
          text: "Multilingual LLM Development",
        },
        {
          image: "/optimized/images/aiImage.webp",
          text: " Agentic AI for Effortless Transactions",
        },
        {
          image: "/optimized/images/digitaltrans.webp",
          text: "AI for Skill India",
        },
        {
          image: "/capabilities/Aimentor.webp",
          text: "AI Mentor for Career Success",
        },
      ],
      impact:
        "Boosting efficiency and precision across industries while reducing human effort in repetitive tasks.",
    },
    iot: {
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
          text: "Predictive Maintainance using IoT",
        },
        {
          image: "/capabilities/industrialIot.webp",
          text: "Industrial IoT for Monitoring",
        },
        {
          image: "/capabilities/EmbeddedAuto.webp",
          text: "Embedded Automation Controllers",
        },
        {
          image: "/optimized/images/digitaltrans.webp",
          text: "Hands on IoT Trainings",
        },
      ],
      impact:
        "Enabling responsive infrastructure that reduces wastage and enhances city planning.",
    },
    blockchain: {
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
          image: "/capabilities/BlockchainIdenetity.webp",
          text: "Blockchain-based identity platforms",
        },
        {
          image: "/capabilities/consentveri.webp",
          text: "Consent-driven verification systems",
        },
        {
          image: "/capabilities/nfts.webp",
          text: "Digitally signed certificates & NFTs",
        },
        {
          image: "/capabilities/dashboard.webp",
          text: "Credential management dashboards",
        },
      ],
      impact:
        "Creating transparent, tamper-proof ecosystems that enhance compliance and digital sovereignty.",
    },
    embedded: {
      titleLine1: "Robotics",
      titleLine2: "Systems",
      description:
        "Smart automation across industries—from robotics to utilities.",
      image: "/optimized/images/robo.webp",
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
          text: "Hands on Robotics Trainings",
        },
        {
          image: "/optimized/images/workforceTrain.webp",
          text: "Embedded Roboticd Platforms",
        },
      ],
      impact:
        "Powering scalable, device-level intelligence to automate operations and enhance control.",
    },
    analytics: {
      titleLine1: "Data &",
      titleLine2: "Analytics",
      description:
        "Transform data into decisions with AI-powered analytics and dashboards.",
      image: "/optimized/dataa.webp",
      headline: "Decisions That Matter, Driven by Data",
      overview:
        "We convert raw data into actionable insights using real-time dashboards, machine learning, and predictive systems.",
      capabilities: [
        {
          image: "/optimized/dataa.webp",
          text: "Strategic Data Consulting for Business Growth",
        },
        {
          image: "/optimized/icons/analytics.svg",
          text: "Advanced Analytics Delivering Actionable Business Insights",
        },
        {
          image: "/optimized/icons/reporting.svg",
          text: "Reliable Data Engineering and Seamless Integration",
        },
        {
          image: "/optimized/icons/migration.svg",
          text: "Business Intelligence Solutions for Informed Decisions",
        },
      ],
      impact:
        "Faster, smarter decision-making across departments and industries.",
    },
    cloud: {
      titleLine1: "Cloud &",
      titleLine2: "DevOps",
      description:
        "Accelerate digital delivery with DevOps automation and cloud-native tools.",
      image: "/capabilities/cloudinfra.webp",
      headline: "Cloud-First. Code-Light. Scalable Always.",
      overview:
        "Our AI-enabled DevOps services transform the way teams manage cloud infrastructure. Whether you’re migrating securely, deploying at scale, or automating your CI/CD pipelines, we bring flexibility, speed, and simplicity across AWS, Azure, and Google Cloud.",
      capabilities: [
        {
          image: "/capabilities/cloudMigration.webp",
          text: "Cloud Strategy and Secure Migration Services",
        },
        {
          image: "/capabilities/cloudinfra.webp",
          text: "Scalable Cloud Infrastructure Design and Management",
        },
        {
          image: "/capabilities/cloudDev.webp",
          text: "DevOps Automation for Faster Software Delivery",
        },
        {
          image: "/capabilities/cloudcontinous.webp",
          text: "Continuous Integration and Continuous Deployment Solutions",
        },
      ],
      impact:
        "Cut deployment time and cost while increasing scalability and flexibility.",
    },
    skilling: {
      titleLine1: "Tech",
      titleLine2: "Skilling",
      description:
        "Hands-on training in AI, Drones, EVs & more. Learn today, earn tomorrow.",
      image: "/optimized/images/strategic.webp",

      headline: "Building India's Tech Talent from Grassroots to Greatness",
      overview:
        "From Grade 1 to 70+, our hands-on training covers AI, EVs, Drones, IoT, and Robotics using certified trainers and modular tools.",
      capabilities: [
        {
          image: "/optimized/icons/stem.svg",
          text: "Hands on Drone Trainings",
        },
        {
          image: "/optimized/images/strategic.webp",
          text: "Hands on Robotics Trainings",
        },
        {
          image: "/optimized/images/strategic.webp",
          text: "Hands on Embedded Designs Trainings",
        },
        {
          image: "/optimized/icons/job.svg",
          text: "Hand on EV & Solar Trainings",
        },
      ],
      impact:
        "Creating a tech-savvy workforce that stays, grows, and innovates locally.",
    },
    smartCities: {
      titleLine1: "Smart",
      titleLine2: "Cities",
      description:
        "Connected infrastructure, AI-powered public services, and clean air tech.",
      image: "/optimized/cityq.webp",
      headline: "Cities That Think, Act, and Care",
      overview:
        "Our technology stack builds cleaner, more efficient urban ecosystems with smart connectivity, clean air, and AI-driven governance.",
      capabilities: [
        {
          image: "/capabilities/aipoweredimage.webp",
          text: "AI-powered traffic & lighting",
        },
        {
          image: "/capabilities/5gradio.webp",
          text: "5G Radio and High Capacity Low Latency Networks",
        },
        {
          image: "/capabilities/watermeter.webp",
          text: "Smart water meters",
        },
        {
          image: "/capabilities/singlefreq.webp",
          text: "Single Frequency network for Disaster Management",
        },
      ],
      impact:
        "Empowering future-ready cities that are sustainable, connected, and citizen-first.",
    },
  };

  const footerLinks = {
    company: [
      { name: "Our Team", href: "/team" },
      { name: "Why choose us", href: "#why" },
      {
        name: "Contact us ",
        href: "/contact-us",
      },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
    coreServices: [
      { name: "Drones & UAVs", serviceKey: "drones" },
      { name: "Solar & Energy", serviceKey: "solar" },
      { name: "Electric Vehicles", serviceKey: "evs" },
      { name: "Artificial Intelligence", serviceKey: "ai" },
      { name: "Internet of Things (IoT)", serviceKey: "iot" },
      { name: "Robotics Systems", serviceKey: "embedded" },
    ],
    techServices: [
      { name: "Data & Analytics", serviceKey: "analytics" },
      { name: "Cloud & DevOps", serviceKey: "cloud" },
      { name: "AR/VR & Microapps", serviceKey: "arvr" },
      { name: "Tech Skilling", serviceKey: "skilling" },
      { name: "Smart Cities", serviceKey: "smartCities" },
      { name: "Blockchain & Identity", serviceKey: "blockchain" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/instrek-technologies/posts/",
    },
  ];

  return (
    <footer
      className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800/80 text-white"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Newsletter Section */}
          <div className="space-y-8">
            <div
              onClick={handleLogoClick}
              className="block bg-transparent w-fit px-4 py-2 rounded hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/optimized/Logo_White.webp"
                alt="Instrek Logo"
                className="h-12 w-24 sm:h-25 sm:w-auto object-contain"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#ea4820] mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-300 mb-4">
                Reach out to us - let's talk possibilities.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 pr-16 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <ArrowRight size={20} />
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus && (
                  <div
                    className={`text-sm p-3 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-red-500/20 text-red-300 border border-red-500/30"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                {/* Terms Checkbox */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="agreed"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 text-[#ea4820] bg-gray-700 border-gray-600 rounded focus:ring-[#ea4820] focus:ring-2"
                    disabled={isSubmitting}
                  />
                  <label htmlFor="agreed" className="text-sm text-gray-300">
                    I agree to be contacted via email
                  </label>
                </div>
              </form>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-[#ea4820] mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors text-lg cursor-pointer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-gray-300 hover:text-white transition-colors text-lg text-left"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#ea4820] mb-6">
                Core Services
              </h4>
              <ul className="space-y-4">
                {footerLinks.coreServices.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() =>
                        handleServiceClick(serviceData[link.serviceKey])
                      }
                      className="text-gray-300 hover:text-white transition-colors text-lg text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#ea4820] mb-6">
                Tech Services
              </h4>
              <ul className="space-y-4">
                {footerLinks.techServices.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() =>
                        handleServiceClick(serviceData[link.serviceKey])
                      }
                      className="text-gray-300 hover:text-white transition-colors text-lg text-left cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400">© Instrek Technologies</div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400">All Rights Reserved 2025</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#ea4820] transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
