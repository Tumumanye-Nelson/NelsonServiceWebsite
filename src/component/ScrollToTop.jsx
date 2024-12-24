import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, [pathname]); // Runs every time the pathname changes

  return null; // No UI component to render
}

export default ScrollToTop;
