import { useEffect, useState } from "react";
import {useTitle} from "./useTitle";

export default function useActiveSectionTitle() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust these numbers to match your actual section positions
      if (scrollY < 400) setActiveSection("Home");
      else if (scrollY >= 400 && scrollY < 1000) setActiveSection("About");
      else if (scrollY >= 1000 && scrollY < 2400) setActiveSection("Skills");
      else if (scrollY >= 2600 && scrollY < 3200) setActiveSection("Education");
      else setActiveSection("Contact");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useTitle(`${activeSection} | Emon Hossain`);
}
