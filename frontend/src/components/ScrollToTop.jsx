import { useScrollPosition } from "./useScrollPosition";

const ScrollToTop = () => {
  // Use the custom hook to handle scroll position management
  useScrollPosition();

  return null;
};

export default ScrollToTop;
