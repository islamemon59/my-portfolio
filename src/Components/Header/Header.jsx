import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full h-[75px] bg-base-200/80 shadow z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Left: Logo */}
        <Link
          to="hero"
          smooth={true}
          className="font-bold text-xl text-base-content"
        >
          <img src={logo} alt="logo" className="md:w-10 w-8" />
        </Link>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="nav-link cursor-pointer text-base-content hover:text-[#E63946] font-semibold text-[17px]"
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
            className="nav-link cursor-pointer text-base-content hover:text-[#E63946] font-semibold text-[17px]"
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
            className="nav-link cursor-pointer text-base-content hover:text-[#E63946] font-semibold text-[17px]"
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
            className="nav-link cursor-pointer text-base-content hover:text-[#E63946] font-semibold text-[17px]"
          >
            Education
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="nav-link cursor-pointer text-base-content hover:text-[#E63946] font-semibold text-[17px]"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="nav-link cursor-pointer text-base-content hover:text-[#E63946] font-semibold text-[17px]"
          >
            Contact
          </Link>
        </div>

        {/* Right: Download Resume button (Desktop) */}
        <div className="flex justify-center items-center gap-2">
          <div className="hidden md:block">
            <a
              href="https://drive.google.com/file/d/1d721rxVs0D3VK27lAbAotWuqsZjgTX5k/view?usp=sharing"
              download
              className="btn bg-[#E63946] text-white border-none hover:bg-black transition"
            >
              Download Resume
            </a>
          </div>
          {/* Mobile menu button */}
          <div
            className="md:hidden text-2xl text-base-content cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 shadow px-6 py-4 flex justify-between text-s z-50">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="nav-link cursor-pointer text-base-content hover:text-[#E63946] font-semibold text-[14px]"
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
            className="nav-link cursor-pointer text-base-content hover:text-[#E63946] font-semibold text-[14px]"
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
            className="nav-link cursor-pointer text-base-content hover:text-[#E63946] font-semibold text-[14px]"
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
            className="nav-link cursor-pointer text-base-content hover:text-[#E63946] font-semibold text-[14px]"
          >
            Education
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="nav-link cursor-pointer text-base-content hover:text-[#E63946] font-semibold text-[14px]"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            activeClass="active"
            className="nav-link cursor-pointer text-base-content hover:text-[#E63946] font-semibold text-[14px]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
