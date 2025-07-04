import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Icons
import { Link } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload the logo image
    const img = new Image();
    img.src = "./optimized/Logo_White.webp";
    img.onload = () => setIsLoaded(true);
  }, []);

  const menuItems = [
    { label: "Home", link: "#home", isHashLink: true },
    { label: "About", link: "#about", isHashLink: true },
    { label: "Services", link: "#services", isHashLink: true },
    { label: "Team", link: "#team", isHashLink: true },
    { label: "Blog", link: "/blog", isHashLink: false },
    { label: "Contact", link: "#contact", isHashLink: true },
  ];

  const handleLogoClick = () => {
    window.location.href = "/"; // This will force a page reload and navigate to home
  };

  return (
    <header
      className="absolute z-50 bg-[#181344] rounded-3xl top-[20px] left-[4%] right-[4%]"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-1 py-3 flex items-center justify-between h-[60px]">
        {/* Logo with loading state */}
        <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
          {isLoaded ? (
            <img
              src="./optimized/Logo_White.webp"
              alt="Instrek Logo"
              className="h-20 w-25 pl-4 lg:pl-0.5 object-contain"
              loading="eager"
              width="100"
              height="80"
            />
          ) : (
            <div className="h-20 w-25 pl-4 lg:pl-0.5 bg-gray-700 animate-pulse" />
          )}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-5">
          {menuItems.map((item) =>
            item.isHashLink ? (
              <a
                key={item.label}
                href={item.link}
                className={`relative px-3 py-2 text-xl font-medium transition-all duration-300 hover:text-[#EA6220] ${
                  activeMenu === item.label ? "text-[#EA6220]" : "text-white"
                }`}
                onClick={() => setActiveMenu(item.label)}
              >
                {item.label}
                {activeMenu === item.label && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#EA6220] to-white animate-fade-in"></div>
                )}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.link}
                className={`relative px-3 py-2 text-xl font-medium transition-all duration-300 hover:text-[#EA6220] ${
                  activeMenu === item.label ? "text-[#EA6220]" : "text-white"
                }`}
                onClick={() => setActiveMenu(item.label)}
              >
                {item.label}
                {activeMenu === item.label && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#EA6220] to-white animate-fade-in"></div>
                )}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden ml-auto text-white pr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with transition */}
      <div
        className={`md:hidden px-6 pb-4 space-y-4 bg-[#181344] text-white transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 max-h-96"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        {menuItems.map((item) =>
          item.isHashLink ? (
            <a
              key={item.label}
              href={item.link}
              className={`block text-base font-medium transition-all duration-300 hover:text-[#EA6220] ${
                activeMenu === item.label ? "text-[#EA6220]" : "text-gray-300"
              }`}
              onClick={() => {
                setActiveMenu(item.label);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.link}
              className={`block text-base font-medium transition-all duration-300 hover:text-[#EA6220] ${
                activeMenu === item.label ? "text-[#EA6220]" : "text-gray-300"
              }`}
              onClick={() => {
                setActiveMenu(item.label);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
