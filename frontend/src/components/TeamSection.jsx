// import React, { useState, useEffect } from "react";

// const TeamSection = () => {
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [bgWhite, setBgWhite] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setBgWhite(true);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, []);

//   const teamMembers = [
//     {
//       id: 1,
//       name: "Vineet Sharma",
//       role: "Founder",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       bio: "Vineet brings cutting-edge tech to India, big ideas to the table, and—if you let him—probably some Chinese proverbs too. He strategizes like a chess master and thinks so much, we’re pretty sure his brain runs on unlimited data!",
//     },
//     {
//       id: 2,
//       name: "Sanjana Wadhwa",
//       role: "CEO",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       bio: "Sanjana has over 15+ years of experience in the technology sector, leading teams to deliver innovative solutions globally. And yeah… let’s talk about FOOD now!",
//     },
//     {
//       id: 3,
//       name: "Tithika Mittal",
//       role: "TE Coordinator",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       bio: "Tithika oversees product development and ensures alignment with market needs. One line for her, “I haven’t been everywhere. But it’s on the list”.",
//     },
//   ];

//   return (
//     <section
//       className={`transition-colors duration-700  text-[16px] ${
//         bgWhite ? "bg-white" : "bg-black"
//       } relative py-24 overflow-hidden `}
//       style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
//     >
//       {/* Blurred background decorations */}
//       <div className="absolute top-16 left-10 w-64 h-64 bg-pink-400 opacity-10 rounded-full blur-3xl z-0"></div>
//       <div className="absolute bottom-16 right-10 w-48 h-48 bg-[#EA6220] opacity-10 rounded-full blur-3xl z-0"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left Content */}
//           <div className="space-y-10">
//             <div>
//               <h2 className="text-6xl font-bold tracking-tight text-[#EA6220]">
//                 OUR TEAM
//               </h2>
//               <h3 className="text-2xl text-gray-500 mt-3 font-light">
//                 Driven by Purpose, Powered by Innovation
//               </h3>
//             </div>

//             <div className="text-gray-700 space-y-5">
//               <p className="font-medium text-[#EA6220]">
//                 Meet the Minds Behind Instrek
//               </p>
//               <p className="leading-relaxed text-xxl">
//                 A diverse team of technologists, designers, and thinkers focused
//                 on building meaningful, future-ready solutions.
//               </p>
//             </div>

//             {/* Member Thumbnails */}
//             <div className="flex gap-6 mt-8">
//               {teamMembers.map((member) => (
//                 <div
//                   key={member.id}
//                   className="cursor-pointer text-center group"
//                   onClick={() => setSelectedMember(member)}
//                 >
//                   <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#EA6220] transition-all duration-300">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                     />
//                   </div>
//                   <p className="text-sm font-semibold mt-2 text-gray-800 group-hover:text-[#EA6220]">
//                     {member.name}
//                   </p>
//                   <p className="text-xs text-gray-400">{member.role}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Featured Member */}
//           <div className="relative">
//             <div className="bg-white shadow-xl rounded-3xl p-10 text-center max-w-md mx-auto transition-all duration-500 hover:shadow-2xl">
//               {selectedMember ? (
//                 <>
//                   <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#EA6220] mb-6">
//                     <img
//                       src={selectedMember.image}
//                       alt={selectedMember.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900">
//                     {selectedMember.name}
//                   </h3>
//                   <p className="text-[#EA6220] font-medium">
//                     {selectedMember.role}
//                   </p>
//                   <p className="text-gray-600 mt-4 text-sm leading-relaxed">
//                     {selectedMember.bio}
//                   </p>
//                 </>
//               ) : (
//                 <>
//                   <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-[#EA6220] to-pink-500 flex items-center justify-center mb-6">
//                     <p className="text-white text-sm font-medium px-4">
//                       Click a team member
//                     </p>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900">
//                     Meet Our Team
//                   </h3>
//                   <p className="text-gray-500 mt-2">
//                     Select a profile to learn more
//                   </p>
//                 </>
//               )}
//             </div>

//             {/* Decorative splash */}
//             <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-[#EA6220] opacity-30 rounded-full blur-xl z-0"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;

// Team.jsx
import React from "react";
import TeamCard from "./TeamCard";

const teamData = [
  {
    id: 1,
    name: "Vineet Sharma",
    role: "Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Vineet brings cutting-edge tech to India, big ideas to the table, and—if you let him—probably some Chinese proverbs too. He strategizes like a chess master and thinks so much, we’re pretty sure his brain runs on unlimited data!",
  },
  {
    id: 2,
    name: "Sanjana Wadhwa",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Sanjana has over 15+ years of experience in the technology sector, leading teams to deliver innovative solutions globally. And yeah… let’s talk about FOOD now!",
  },
  {
    id: 3,
    name: "Tithika Mittal",
    role: "TE Coordinator",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Tithika oversees product development and ensures alignment with market needs. One line for her, “I haven’t been everywhere. But it’s on the list”.",
  },
  {
    id: 4,
    name: "Ajay Bhatt",
    role: "Mentor",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Ajay mentors the team on tech architecture, product roadmaps, and how to make the perfect masala chai. Yes, he’s that good.",
  },
];

const Team = () => {
  return (
    <div className="py-10 px-4 grid sm:grid-cols-1 lg:grid-cols-4 gap-2 justify-items-center">
      {teamData.map((member) => (
        <TeamCard
          key={member.id}
          name={member.name}
          role={member.role}
          image={member.image}
          bio={member.bio}
        />
      ))}
    </div>
  );
};

export default Team;
