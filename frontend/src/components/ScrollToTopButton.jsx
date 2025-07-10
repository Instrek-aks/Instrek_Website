import React, { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";
import { useScrollPosition } from "./useScrollPosition";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { clearSavedScrollPosition } = useScrollPosition();

  // Show button only after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToHero = () => {
    // Clear saved scroll position when user explicitly wants to go to top
    clearSavedScrollPosition();

    const hero = document.getElementById("home");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToHero}
      className="fixed bottom-6 right-6 bg-[#EA6220] text-white p-3 rounded-full shadow-2xl hover:bg-white hover:text-[#EA6220] transition-all z-50 animate-float"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <ArrowUpCircle size={28} />
    </button>
  );
};

export default ScrollToTopButton;
