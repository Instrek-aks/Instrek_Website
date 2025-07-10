import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Icons
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useScrollPosition } from "./useScrollPosition";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { saveCurrentScrollPosition, clearSavedScrollPosition } =
    useScrollPosition();

  useEffect(() => {
    // Preload the logo image
    const img = new Image();
    img.src = "/optimized/Logo_White.webp";
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      console.error("Failed to load logo image");
      setIsLoaded(true); // Still show the placeholder even if image fails
    };
  }, []);

  // Update active menu based on current location and scroll position
  useEffect(() => {
    const updateActiveMenu = () => {
      const pathname = location.pathname;

      // If we're on blog page, set active menu to Blog
      if (pathname === "/blog" || pathname.startsWith("/blog/")) {
        setActiveMenu("Blog");
        return;
      }

      // If we're on services page, set active menu to Services
      if (pathname === "/services-page") {
        setActiveMenu("Services");
        return;
      }

      // If we're on team page, set active menu to Team
      if (pathname === "/team") {
        setActiveMenu("Team");
        return;
      }

      // If we're on contact page, set active menu to Contact
      if (pathname === "/contact-us") {
        setActiveMenu("Contact");
        return;
      }

      // If we're on privacy policy page, no specific menu item to highlight
      if (pathname === "/privacy-policy") {
        setActiveMenu(""); // No active menu for privacy policy
        return;
      }

      // If we're on home page, check scroll position for sections
      if (pathname === "/") {
        const sections = ["home", "about", "services", "team"];
        const scrollPosition = window.scrollY + 120; // Increased offset for header height

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop) {
              setActiveMenu(
                sections[i].charAt(0).toUpperCase() + sections[i].slice(1)
              );
              return;
            }
          }
        }

        // Default to Home if no section is found
        setActiveMenu("Home");
      }
    };

    // Update on scroll and on mount
    updateActiveMenu();
    window.addEventListener("scroll", updateActiveMenu);

    return () => {
      window.removeEventListener("scroll", updateActiveMenu);
    };
  }, [location.pathname]);

  const menuItems = [
    { label: "Home", link: "/#home", isHashLink: true },
    { label: "About", link: "/#about", isHashLink: true },
    { label: "Services", link: "/#services", isHashLink: true },
    { label: "Team", link: "/#team", isHashLink: true },
    { label: "Blog", link: "/blog", isHashLink: false },
    {
      label: "Contact",
      link: "/contact-us",
      isHashLink: false,
    },
  ];

  const handleLogoClick = () => {
    // Save current scroll position if we're on home page
    if (window.location.pathname === "/") {
      saveCurrentScrollPosition();
    }
    navigate("/"); // Use React Router navigation instead of window.location.href
  };

  const handleNavigation = (item) => {
    setActiveMenu(item.label);
    setMenuOpen(false);

    // If it's a hash link (like About or Services), navigate to home first then scroll
    if (item.isHashLink) {
      // If we're already on home page, just scroll to section
      if (window.location.pathname === "/") {
        const sectionId = item.link.substring(2); // Remove "#" from "#about" or "#services"
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If we're on another page, navigate to home and then scroll to section
        navigate("/");
        setTimeout(() => {
          const sectionId = item.link.substring(2);
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
      return;
    }

    // Save current scroll position if we're on home page and navigating away
    if (window.location.pathname === "/" && !item.link.startsWith("/#")) {
      saveCurrentScrollPosition();
    }

    // For route navigation, use React Router
    if (!item.link.startsWith("/#")) {
      // Clear saved scroll position when navigating to specific pages
      clearSavedScrollPosition();
      // Use React Router navigation
      navigate(item.link);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#221b60] w-full"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between h-[60px]">
        {/* Logo with loading state */}
        <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
          <img
            src="/optimized/Logo_White.webp"
            alt="Instrek Logo"
            className="h-20 w-25 pl-4 lg:pl-0.5 object-contain"
            loading="eager"
            width="100"
            height="80"
          />
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
                onClick={() => handleNavigation(item)}
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
                onClick={() => handleNavigation(item)}
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
        className={`md:hidden px-6  space-y-4 bg-[#181344] text-white transition-all duration-300 ease-in-out ${
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
              onClick={() => handleNavigation(item)}
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
              onClick={() => handleNavigation(item)}
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
