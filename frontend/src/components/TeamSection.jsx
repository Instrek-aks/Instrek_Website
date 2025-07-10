import React, { lazy, useEffect } from "react";
import TeamCard from "./TeamCard";
//const TeamCard = lazy(() => import("./TeamCard"));
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const teamMembers = [
  {
    id: 1,
    name: "Vineet Sharma",
    role: "Founder",
    image: "/optimized/Vineet.webp",
    bio: "Vineet brings bold ideas and cutting-edge tech strategies to Instrek. An IIM Ahmedabad alum with a knack for big-picture thinking and the details that make them work.",
    linkedinUrl: "https://www.linkedin.com/in/vineet82/",
  },
  {
    id: 2,
    name: "Sanjana Wadhwa",
    role: "Chief Executive Officer",
    image: "/optimized/sanjanO.webp",
    bio: "With over 11 years in technology leadership, Sanjana has led global teams to deliver innovative solutions across industries. An IIM Ahmedabad alum, she brings sharp strategic insight and a collaborative spirit.",
    linkedinUrl: "https://www.linkedin.com/in/sanjanawadhwa94/",
  },

  {
    id: 3,
    name: "Sharath M",
    role: "Fractional CTO",
    image: "/optimized/sharat2.jpg",
    bio: "Sharath specializes in Products/Platforms, Blockchain, and IoT, with a passion for developing next-gen technology solutions that work in the real world.",
    linkedinUrl: "https://www.linkedin.com/in/sharath-m-instrek/",
  },
  {
    id: 4,
    name: "Gaurab Ganguly",
    role: "Non-Executive Strategic Advisor",
    image: "/optimized/gaurab.webp",
    bio: "A GTM strategist and problem-solver, Gaurab helps teams move smarter and faster with a sharp eye for market fit and tactical execution.",
    linkedinUrl: "https://www.linkedin.com/in/gaurabganguly/",
  },
  {
    id: 5,
    name: "Sankalp G",
    role: "Principal Technologist - R&D and Innovations",
    image: "/optimized/sankalp.webp",
    bio: "An IIT Bombay innovator, Sankalp loves building next-gen tech across drones, robotics, IoT, and EVs. He's the go-to guy for big, bold ideas at Instrek.",
    linkedinUrl: "https://www.linkedin.com/in/sankalp-gupta-tcoe-811733248/",
  },
  {
    id: 6,
    name: "Lt Col Narender Singh",
    role: "Innovations Leader – Robotics & Drones",
    image: "/optimized/narend.jpg",
    bio: "With 25 years in Defence and an IIM Ahmedabad background, Narender now leads our robotics and drone innovations, bringing battle-tested ideas to life at Instrek.",
    linkedinUrl: "https://www.linkedin.com/in/narendersingh1168/",
  },
  {
    id: 7,
    name: "Tithika Mittal",
    role: "Technology Ecosystem Coordinator",
    image: "/optimized/tithika.webp",
    bio: "Tithika ensures our products/technologies align with market needs, coordinating development with a keen sense of what's next on the map.",
    linkedinUrl: "https://www.linkedin.com/in/tithika-mittal-504775321/",
  },
  {
    id: 8,
    name: "Anjali Chaurasia",
    role: "Technology Ecosystem Recruiter",
    image: "/optimized/anjali.jpg",
    bio: "Anjali is shaping Instrek's culture by finding the right people and partners, always ready to keep us moving forward at speed.",
    linkedinUrl: "https://www.linkedin.com/in/anjalic97/",
  },
];

const Team = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
    // Add a small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const teamSection = document.getElementById("team");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden">
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
        <div className="relative z-10 w-full px-8 py-10 bg-transparent">
          <div>
            <div className="space-y-10">
              <div>
                <h2 className="text-6xl font-bold tracking-tight text-[#EA6220] text-center">
                  OUR TEAM
                </h2>
                <h3 className="text-2xl text-center text-white mt-3 font-light">
                  Driven by Purpose, Powered by Innovation
                </h3>
              </div>

              <div className="text-gray-700 space-y-5">
                <div className="overflow-hidden whitespace-nowrap w-full relative h-10">
                  <style>
                    {`
                  @keyframes marquee {
                    0%   { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                  }
                `}
                  </style>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-12 items-start">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex justify-center">
                  <TeamCard
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    bio={member.bio}
                    linkedinUrl={member.linkedinUrl}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/team")}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ea4820] hover:bg-[#ea4820]/90 transition-all duration-300"
            >
              Know More About Our Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
