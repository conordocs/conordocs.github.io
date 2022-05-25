import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import LogoImg from "../assets/logo.png";
import Resume from "../assets/Conor Doherty - CV.pdf";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [navBg] = useState("#0a192f");

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg shadow-gray-700 z-[100] pr-5 pl-5"
          : "fixed w-full h-20 z-[100] pr-5 pl-5"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 text-gray-200">
        <Link to="/#home" smooth={true} duration={500}>
          <img
            className="hover:cursor-pointer"
            src={LogoImg}
            alt="logo"
            height="50"
            width="88"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link to="/#home" smooth={true} duration={500}>
              <li className="ml-10 text-sm uppercase hover:text-[#12D670]">
                Home
              </li>
            </Link>
            <Link to="/#about" smooth={true} duration={500}>
              <li className="ml-10 text-sm uppercase hover:text-[#12D670]">
                About
              </li>
            </Link>
            <Link to="/#skills" smooth={true} duration={500}>
              <li className="ml-10 text-sm uppercase hover:text-[#12D670]">
                Skills
              </li>
            </Link>
            <Link to="/#work" smooth={true} duration={500}>
              <li className="ml-10 text-sm uppercase hover:text-[#12D670]">
                Projects
              </li>
            </Link>
            <Link to="/#contact" smooth={true} duration={500}>
              <li className="ml-10 text-sm uppercase hover:text-[#12D670]">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleClick}
            className="md:hidden rounded-full bg-gray-700/80 p-3 cursor-pointer hover:scale-110 ease-in duration-250 hover:text-[#12D670]"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-white/20 text-gray-200"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0a1e2f] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link to="/#home" smooth={true} duration={500}>
                <img
                  className="hover:cursor-pointer"
                  src={LogoImg}
                  alt="logo"
                  height="40"
                  width="70"
                />
              </Link>
              <div
                onClick={handleClick}
                className="rounded-full bg-gray-700/80 p-3 cursor-pointer hover:scale-110 ease-in duration-250 hover:text-[#12D670]"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className=""></div>
          </div>

          <div className="py-4 flex flex-col mt-10">
            <ul className="uppercase">
              <Link to="/#home" smooth={true} duration={500}>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#12D670]"
                >
                  Home
                </li>
              </Link>
              <Link to="/#about" smooth={true} duration={500}>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#12D670]"
                >
                  About
                </li>
              </Link>
              <Link to="/#skills" smooth={true} duration={500}>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#12D670]"
                >
                  Skills
                </li>
              </Link>
              <Link to="/#work" smooth={true} duration={500}>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#12D670]"
                >
                  Projects
                </li>
              </Link>
              <Link to="/#contact" smooth={true} duration={500}>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#12D670]"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#12D670]">
                Check out my links
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full bg-gray-700/80 p-3 cursor-pointer hover:scale-110 ease-in duration-250 hover:text-[#12D670]">
                  <a
                    className="flex justify-between items-center w-full text-gray-300 hover:text-[#12D670]"
                    href="https://www.linkedin.com/in/conor-doherty-101/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <div className="rounded-full bg-gray-700/80 p-3 cursor-pointer hover:scale-110 ease-in duration-250 hover:text-[#12D670]">
                  <a
                    className="flex justify-between items-center w-full text-gray-300 hover:text-[#12D670]"
                    href="https://github.com/conordocs?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full bg-gray-700/80 p-3 cursor-pointer hover:scale-110 ease-in duration-250 hover:text-[#12D670]">
                  <a
                    className="flex justify-between items-center w-full text-gray-300 hover:text-[#12D670]"
                    href="mailto:conordoherty97@hotmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full bg-gray-700/80 p-3 cursor-pointer hover:scale-110 ease-in duration-250 hover:text-[#12D670]">
                  <a
                    className="flex justify-between items-center w-full text-gray-300 hover:text-[#12D670]"
                    href={Resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFillPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu end */}

      {/* social icons */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-700/80 p-4">
            {/* eslint-disable-next-line */}
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-[#12D670]"
              href="https://www.linkedin.com/in/conor-doherty-101/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-700/80 p-4">
            {/* eslint-disable-next-line */}
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-[#12D670]"
              href="https://github.com/conordocs?tab=repositories"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-700/80 p-4">
            {/* eslint-disable-next-line */}
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-[#12D670]"
              href="mailto:conordoherty97@hotmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-700/80 p-4">
            {/* eslint-disable-next-line */}
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-[#12D670]"
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
