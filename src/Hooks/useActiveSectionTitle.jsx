import { useEffect, useState } from "react";
import { useTitle } from "./useTitle";

export default function useActiveSectionTitle() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust these numbers to match your actual section positions
      if (scrollY < 400) setActiveSection("Home");
      else if (scrollY >= 600 && scrollY < 1400) setActiveSection("About");
      else if (scrollY >= 1400 && scrollY < 1800) setActiveSection("Skills");
      else if (scrollY >= 1800 && scrollY < 3000) setActiveSection("Education");
      else if (scrollY >= 3000 && scrollY <3400) setActiveSection("Projects");
      else if (scrollY >= 3400 && scrollY <3600) setActiveSection("Contact");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useTitle(`${activeSection} | Emon Hossain`);
}
