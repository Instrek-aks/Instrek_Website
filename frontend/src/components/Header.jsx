// import React, { useState } from "react";
// import { Button } from "./Button";

// const Header = () => {
//   const [activeMenu, setActiveMenu] = useState("Home");

//   const menuItems = [
//     "Home",
//     "About",
//     "Team",
//     "Portfolio",
//     "Blog",
//     "Shortcodes",
//     "Shop",
//     "Contact",
//   ];

//   return (
//     <header
//       className="fixed bottom-0
//      z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="text-2xl font-bold text-gray-800">
//             <span className="text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text">
//               splashes
//             </span>
//           </div>

//           {/* Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {menuItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => setActiveMenu(item)}
//                 className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
//                   activeMenu === item ? "text-cyan-400" : "text-gray-700"
//                 }`}
//               >
//                 {item}
//                 {activeMenu === item && (
//                   <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 animate-fade-in"></div>
//                 )}
//               </button>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <Button variant="outline" className="md:hidden">
//             <div className="w-6 h-6 flex flex-col justify-center space-y-1">
//               <div className="w-full h-0.5 bg-gray-600"></div>
//               <div className="w-full h-0.5 bg-gray-600"></div>
//               <div className="w-full h-0.5 bg-gray-600"></div>
//             </div>
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons
import { Link } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Team", link: "#team" },
    { label: "Services", link: "#services" },
    { label: "Blog", link: "#blog" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <header
      className="absolute top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="./Logo_White.png"
            alt="Instrek Logo"
            className="h-14 w-auto object-contain" // ⬅️ Increased from h-10 to h-14
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-3xl">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className={`relative px-3 py-2 text-xl font-semibold transition-all duration-300 hover:text-[#EA6220] ${
                activeMenu === item.label ? "text-[#EA6220]" : "text-white"
              }`}
              onClick={() => setActiveMenu(item.label)}
            >
              {item.label}
              {activeMenu === item.label && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#EA6220] to-white animate-fade-in"></div>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-[#030404] text-white transition-all">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className={`block text-lg font-semibold transition-all duration-300 hover:text-[#EA6220] ${
                activeMenu === item.label ? "text-[#EA6220]" : "text-gray-400"
              }`}
              onClick={() => {
                setActiveMenu(item.label);
                setMenuOpen(false); // Close menu on click
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
