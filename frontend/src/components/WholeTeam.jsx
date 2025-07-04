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
  },
  {
    id: 2,
    name: "Sanjana Wadhwa",
    role: "Chief Executive Officer",
    image: "/optimized/sanjana.webp",
    bio: "With over 11 years in technology leadership, Sanjana has led global teams to deliver innovative solutions across industries. An IIM Ahmedabad alum, she brings sharp strategic insight and a collaborative spirit.",
  },
  {
    id: 3,
    name: "Sankalp G",
    role: "Principal Technologist - R&D and Innovations",
    image: "/optimized/sankalp.webp",
    bio: "An IIT Bombay innovator, Sankalp loves building next-gen tech across drones, robotics, IoT, and EVs. He’s the go-to guy for big, bold ideas at Instrek.",
  },
  {
    id: 4,
    name: "Sharath M",
    role: "Fractional CTO",
    image: "/optimized/sharat.webp",
    bio: "Sharath specializes in Products/Platforms, Blockchain, and IoT, with a passion for developing next-gen technology solutions that work in the real world.",
  },
  {
    id: 5,
    name: "Tithika Mittal",
    role: "Technology Ecosystem Coordinator",
    image: "/optimized/tithika.webp",
    bio: "Tithika ensures our products/technologies align with market needs, coordinating development with a keen sense of what’s next on the map.",
  },
  {
    id: 6,
    name: "Anjali Chaurasia",
    role: "Technology Ecosystem Recruiter",
    image: "/optimized/anjali.jpg",
    bio: "Anjali is shaping Instrek’s culture by finding the right people and partners, always ready to keep us moving forward at speed.",
  },
  {
    id: 7,
    name: "Lt Col Narender Singh",
    role: "Innovations Leader – Robotics & Drones",
    image: "/optimized/narend.jpg",
    bio: "With 25 years in Defence and an IIM Ahmedabad background, Narender now leads our robotics and drone innovations, bringing battle-tested ideas to life at Instrek.",
  },
  {
    id: 8,
    name: "Gaurab Ganguly",
    role: "Non-Executive Strategic Advisor",
    image: "/optimized/gaurab.webp",
    bio: "A GTM strategist and problem-solver, Gaurab helps teams move smarter and faster with a sharp eye for market fit and tactical execution.",
  },
  {
    id: 9,
    name: "Srilalitha M Srinivasan",
    role: "Drone Communications Expert",
    image: "/optimized/sri.webp",
    bio: "Sri is working on making our drones talk faster and safer. From secure links to anti-jamming tech, she’s all about keeping our drones connected.",
  },
  {
    id: 10,
    name: "Aryavarta Singh",
    role: "Drone Robotics Expert",
    image: "/optimized/aryavarta.webp",
    bio: "A true robotics enthusiast who loves building Rovers and AMRs, Aryavarta is the brain behind many of our coolest drone innovations at Instrek.",
  },
  {
    id: 11,
    name: "Gagan",
    role: "Mechanical Design Expert",
    image: "/optimized/gagan.webp",
    bio: "Gagan makes sure our drones aren’t just clever on paper his simulation and design skills mean they’re strong, reliable, and ready to fly.",
  },
  {
    id: 12,
    name: "Vivek",
    role: "Mechanical Design & Manufacturing Expert",
    image: "/optimized/vivek.webp", // (Consider updating with a unique image for Vivek)
    bio: "Vivek turns ideas into real, buildable drone parts. He’s all about making sure our designs work in the real world, not just on a screen.",
  },
];

const WholeTeam = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="w-full px-8 py-10 bg-[#121212]">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 items-start">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex justify-center">
                <TeamCard
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  bio={member.bio}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button
            className="border border-[#EA6220] px-6 py-2 rounded text-white hover:bg-[#EA6220] transition-colors duration-300"
            onClick={handleBackClick}
          >
            Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WholeTeam;
