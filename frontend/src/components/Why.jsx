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
//       className="relative min-h-screen py-20 text-white overflow-hidden"
//       style={{
//         fontFamily: "'PP Neue Montreal', sans-serif",
//       }}
//     >
//       {/* Gradient + Background image as absolute layer */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage:
//             "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.8), rgba(0,0,0,0.3), rgba(0,0,0,0)), url('./why.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/80" />

//       {/* Content Layer */}
//       <div className="relative z-10 px-6 text-center mb-12">
//         <h2 className="text-5xl font-semibold text-white">
//           WHY CHOOSE <span className="text-[#ea4820]">US</span> ?
//         </h2>
//       </div>

//       {/* Infinite Scrolling Cards */}
//       <div className="relative z-10 w-full p-8 overflow-hidden">
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

export default function ExperienceCard({ title, value, subtext }) {
  return (
    <div
      className="w-full max-w-[360px] md:max-w-[420px] h-auto rounded-2xl bg-transparent text-white flex flex-col justify-center items-center text-center px-6 py-10 md:py-14 shadow-lg"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      {/* Top white line */}
      <div className="w-full h-[3px] md:h-[4px] bg-white mb-6 md:mb-8" />

      {/* Title */}
      <h3 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-8">
        {title}
      </h3>

      {/* Bottom white line */}
      <div className="w-full h-[3px] md:h-[4px] bg-white mb-6 md:mb-8" />

      {/* Gradient Number */}
      <div className="text-5xl md:text-6xl lg:text-8xl font-extralight bg-gradient-to-r from-[#ea4820] to-white bg-clip-text text-transparent mb-4 md:mb-6">
        {value}
      </div>

      {/* Subtitle */}
      <p className="text-base md:text-xl text-white leading-relaxed">
        {subtext}
      </p>
    </div>
  );
}