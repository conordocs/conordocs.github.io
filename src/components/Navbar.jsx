import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import LogoImg from "../assets/logo.png";
import Resume from "../assets/Conor Doherty - CV.pdf";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <Link to="/#home" smooth={true} duration={500}>
          <img src={LogoImg} alt="Logo" className="w-[75px]" />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="/#home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/#about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="/#skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/#work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/#contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* burger button */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      
      
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="/#home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="/#about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="/#skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="/#work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="/#contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-blue-700">
            {/* eslint-disable-next-line */}
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/conor-doherty-101/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-700">
            {/* eslint-disable-next-line */}
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/conordocs?tab=repositories"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#3ba8a3]">
            {/* eslint-disable-next-line */}
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:conordoherty97@hotmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-500">
            {/* eslint-disable-next-line */}
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
