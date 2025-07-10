import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollPosition = () => {
  const location = useLocation();

  useEffect(() => {
    // Save scroll position when leaving home page
    const saveScrollPosition = () => {
      if (window.location.pathname === "/") {
        sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
      }
    };

    // Restore scroll position when returning to home page
    const restoreScrollPosition = () => {
      if (location.pathname === "/") {
        const savedPosition = sessionStorage.getItem("homeScrollPosition");
        if (savedPosition) {
          // Use requestAnimationFrame for smoother restoration
          requestAnimationFrame(() => {
            window.scrollTo(0, parseInt(savedPosition));
          });
        } else {
          window.scrollTo(0, 0);
        }
      } else {
        // For other pages, scroll to top
        window.scrollTo(0, 0);
      }
    };

    // Handle page unload/refresh
    const handleBeforeUnload = () => {
      if (window.location.pathname === "/") {
        sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
      }
    };

    // Handle visibility change (when user switches tabs)
    const handleVisibilityChange = () => {
      if (
        document.visibilityState === "hidden" &&
        window.location.pathname === "/"
      ) {
        sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
      }
    };

    // Set up event listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Restore position on navigation
    restoreScrollPosition();

    // Cleanup
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [location.pathname]);

  // Function to manually save scroll position (for use in navigation handlers)
  const saveCurrentScrollPosition = () => {
    if (window.location.pathname === "/") {
      sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
    }
  };

  // Function to clear saved scroll position
  const clearSavedScrollPosition = () => {
    sessionStorage.removeItem("homeScrollPosition");
  };

  return { saveCurrentScrollPosition, clearSavedScrollPosition };
};
