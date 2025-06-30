import { useEffect, useState } from "react";
import { useTitle } from "./useTitle";

export default function useActiveSectionTitle() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust these numbers to match your actual section positions
      if (scrollY < 400) setActiveSection("Home");
      else if (scrollY >= 400 && scrollY < 800) setActiveSection("About");
      else if (scrollY >= 800 && scrollY < 1000) setActiveSection("Skills");
      else if (scrollY >= 1000 && scrollY < 1200) setActiveSection("Education");
      else if (scrollY >= 1200 && scrollY <1400) setActiveSection("Projects");
      else setActiveSection("Contact");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useTitle(`${activeSection} | Emon Hossain`);
}
