import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

        {/* Left: Logo */}
        <div className="font-bold text-xl text-black">MyLogo</div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="nav-link cursor-pointer text-black hover:text-[#E63946] font-semibold text-[17px]"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="nav-link cursor-pointer text-black hover:text-[#E63946] font-semibold text-[17px]"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="nav-link cursor-pointer text-black hover:text-[#E63946] font-semibold text-[17px]"
          >
            Skills
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="nav-link cursor-pointer text-black hover:text-[#E63946] font-semibold text-[17px]"
          >
           Education
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="nav-link cursor-pointer text-black hover:text-[#E63946] font-semibold text-[17px]"
          >
           Contact
          </Link>
        </div>

        {/* Right: Download Resume button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="btn bg-[#E63946] text-white border-none hover:bg-black transition"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden text-2xl text-black cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            onClick={toggleMenu} // close menu on click
            className="block nav-link cursor-pointer text-black hover:text-[#E63946] font-semibold text-[17px]"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            onClick={toggleMenu}
            className="block nav-link cursor-pointer text-black hover:text-[#E63946] font-semibold text-[17px]"
          >
            About
          </Link>
          <a
            href="/resume.pdf"
            download
            className="block btn bg-[#E63946] text-white border-none hover:bg-black transition"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
