import React, { lazy, useEffect } from "react";
import TeamCard from "./TeamCard";
//const TeamCard = lazy(() => import("./TeamCard"));
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const teamMembers = [
  {
    id: 1,
    name: "Vineet Sharma",
    role: "Founder",
    image: "/optimized/Vineet.webp",
    bio: "Vineet brings bold ideas and cutting-edge tech strategies to Instrek. An IIM Ahmedabad alum with a knack for big-picture thinking and the details that make them work.",
    linkedinUrl: "https://www.linkedin.com/in/vineet82/",
    location: "Delhi, IND",
  },
  {
    id: 2,
    name: "Sanjana Wadhwa",
    role: "Chief Executive Officer",
    image: "/optimized/sanjanO.webp",
    bio: "With over 11 years in technology leadership, Sanjana has led global teams to deliver innovative solutions across industries. An IIM Ahmedabad alum, she brings sharp strategic insight and a collaborative spirit.",
    linkedinUrl: "https://www.linkedin.com/in/sanjanawadhwa94/",
    location: "Delhi, IND",
  },
  {
    id: 3,
    name: "Sharath M",
    role: "Fractional CTO",
    image: "/optimized/sharat2.jpg",
    bio: "Sharath specializes in Products/Platforms, Blockchain, and IoT, with a passion for developing next-gen technology solutions that work in the real world.",
    linkedinUrl: "https://www.linkedin.com/in/sharath-m-instrek/",
    location: "Karnataka, IND",
  },
  {
    id: 4,
    name: "Gaurab Ganguly",
    role: "Non-Executive Strategic Advisor",
    image: "/optimized/gaurab.webp",
    bio: "A GTM strategist and problem-solver, Gaurab helps teams move smarter and faster with a sharp eye for market fit and tactical execution.",
    linkedinUrl: "https://www.linkedin.com/in/gaurabganguly/",
    location: "Warsaw, Poland",
  },
  {
    id: 5,
    name: "Sankalp G",
    role: "Principal Technologist - R&D and Innovations",
    image: "/optimized/sankalp.webp",
    bio: "An IIT Bombay innovator, Sankalp loves building next-gen tech across drones, robotics, IoT, and EVs. He's the go-to guy for big, bold ideas at Instrek.",
    linkedinUrl: "https://www.linkedin.com/in/sankalp-gupta-tcoe-811733248/",
    location: "Rajasthan, IND",
  },
  {
    id: 6,
    name: "Lt Col Narender Singh",
    role: "Innovations Leader – Robotics & Drones",
    image: "/optimized/narend.jpg",
    bio: "With 25 years in Defence and an IIM Ahmedabad background, Narender now leads our robotics and drone innovations, bringing battle-tested ideas to life at Instrek.",
    linkedinUrl: "https://www.linkedin.com/in/narendersingh1168/",
    location: "Delhi, IND",
  },
  {
    id: 7,
    name: "Tithika Mittal",
    role: "Technology Ecosystem Coordinator",
    image: "/optimized/tithika.webp",
    bio: "Tithika ensures our products/technologies align with market needs, coordinating development with a keen sense of what's next on the map.",
    linkedinUrl: "https://www.linkedin.com/in/tithika-mittal-504775321/",
    location: "Delhi, IND",
  },
  {
    id: 8,
    name: "Anjali Chaurasia",
    role: "Technology Ecosystem Recruiter",
    image: "/optimized/anjali.jpg",
    bio: "Anjali is shaping Instrek's culture by finding the right people and partners, always ready to keep us moving forward at speed.",
    linkedinUrl: "https://www.linkedin.com/in/anjalic97/",
    location: "Delhi, IND",
  },
  {
    id: 9,
    name: "Aryavarta Singh",
    role: "Drone Robotics Expert",
    image: "/optimized/aryavarta.webp",
    bio: "A true robotics enthusiast who loves building Rovers and AMRs, Aryavarta is the brain behind many of our coolest drone innovations at Instrek.",
    linkedinUrl: "https://www.linkedin.com/in/aryavarta-singh-832689195/",
    location: "Karnataka, IND",
  },

  {
    id: 10,
    name: "Srilalitha M Srinivasan",
    role: "Drone Communications Expert",
    image: "/optimized/sri.webp",
    bio: "Sri is working on making our drones talk faster and safer. From secure links to anti-jamming tech, she's all about keeping our drones connected.",
    linkedinUrl:
      "https://www.linkedin.com/in/srilalitha-m-srinivasan-23b531243/",
    location: "Karnataka, IND",
  },

  {
    id: 11,
    name: "Gagan Menderkar",
    role: "Mechanical Design Expert",
    image: "/optimized/gagan.webp",
    bio: "Gagan makes sure our drones aren't just clever on paper his simulation and design skills mean they're strong, reliable, and ready to fly.",
    linkedinUrl: "https://www.linkedin.com/in/gagan-menderkar-b3a243255/",
    location: "Karnataka, IND",
  },
  {
    id: 12,
    name: "Vivek Kolekar",
    role: "Mechanical Design & Manufacturing Expert",
    image: "/optimized/vivek.webp", // (Consider updating with a unique image for Vivek)
    bio: "Vivek turns ideas into real, buildable drone parts. He's all about making sure our designs work in the real world, not just on a screen.",
    linkedinUrl: "https://www.linkedin.com/in/vivek-kolekar-19689721b",
    location: "Karnataka, IND",
  },
];

const WholeTeam = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
    setTimeout(() => {
      const teamSection = document.getElementById("team");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <Header />
      <div className="relative w-full overflow-hidden min-h-screen bg-[#121212] pt-[80px]">
        {/* Background image layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('./optimized/ourteamR.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Content layer */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#EA6220] ">
                OUR TEAM
              </h2>
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-light max-w-4xl mx-auto leading-relaxed">
                Driven by Purpose, Powered by Innovation
              </h3>
            </div>

            {/* Team Grid - 3 cards per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 items-start">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex justify-center">
                  <div className="w-full max-w-[295px]">
                    <TeamCard
                      name={member.name}
                      role={member.role}
                      image={member.image}
                      bio={member.bio}
                      linkedinUrl={member.linkedinUrl}
                      location={member.location}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-16">
            <button
              className="inline-flex items-center px-8 py-4 border-2 border-[#ea4820] text-lg font-semibold rounded-lg text-[#ea4820] hover:bg-[#ea4820] hover:text-white transition-all duration-300 transform hover:scale-105"
              onClick={handleBackClick}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WholeTeam;
