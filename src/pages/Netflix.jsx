import React from "react";
import Navbar from "../components/Navbar";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Homepage from "../assets/netflixImg/1.PNG";
import Carousel from "../assets/netflixImg/2.PNG";
import AddFav from "../assets/netflixImg/3.PNG";
import Alert from "../assets/netflixImg/4.PNG";
import Categories from "../assets/netflixImg/5.PNG";
import SignUp from "../assets/netflixImg/6.PNG";
import SignIn from "../assets/netflixImg/7.PNG";
import Account from "../assets/netflixImg/8.PNG";
import { HashLink as Link } from "react-router-hash-link";

import { RiRadioButtonFill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";

const images = [
  Homepage,
  Carousel,
  AddFav,
  Alert,
  Categories,
  SignUp,
  SignIn,
  Account,
];

const Netflix = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-[#0a192f] text-white pt-10">
        <div className="w-full h-[20vh] lg:h-[30vh] relative">
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 lg:h-fit sm:pl-14 sm:pr-20 pr-5">
            <h2 className="py-2 ml-5 text-4xl pb-2 uppercase border-b-4 border-[#12D670] tracking-widest inline-block mb-5">
              Netflix
            </h2>
            <h3 className="pl-5 font-thin">React JS / API / Tailwinds CSS </h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 lg:h-full sm:pl-20 sm:pr-20 pr-5 pl-5 pb-20 pt-10 ">
          <div className="col-span-4">
            {/* <p>Project</p> */}
            <h2 className="py-2 pb-2 uppercase border-b-2 border-[#12D670] text-xl tracking-widest inline-block mb-5">
              Overview
            </h2>
            <p>
              This project is a duplicate of Netflix, which was created with
              React JS, Firebase & Tailwinds CSS.
            </p>
            <ul className="list-disc pl-10 py-5">
              <li className="pb-1 cursor-auto">
                Users can view TV Shows & Movies which are available to stream
                on Netflix.
              </li>
              <li className="pb-1 cursor-auto">
                Users can create an account and sign into their account.
              </li>
              <li className="pb-1 cursor-auto">
                Logged in users will have the ability to add TV Shows & Movies
                to their 'My Shows' category.
              </li>
              <li className="pb-1 cursor-auto">
                Logged in users will also have the ability to remove these TV
                Shows & Movies from their 'My Shows' category.
              </li>
            </ul>
            <div className="py-5">
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#11d670]">
                <a
                  className="flex justify-between items-center w-full text-gray-300 hover:text-[#12D670]"
                  href="https://github.com/conordocs/react_netflix"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
              </button>
            </div>
          </div>
          <div className="h-fit col-span-4 max-w-fit md:col-span-1 shadow-md shadow-gray-700 rounded-xl p-4">
            <div className="p-2">
              <p className="pb-2 uppercase border-b-2 border-[#12D670] text-sm tracking-widest inline-block mb-5">
                Technologies
              </p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-400 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React JS
                </p>
                <p className="text-gray-400 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Tailwinds CSS
                </p>
                <p className="text-gray-400 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Firebase
                </p>
                <p className="text-gray-400 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> API
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] m-auto p-2 pt-8 sm:pl-10 sm:pr-10 pr-5 pl-5">
          <p className="pb-2 uppercase border-b-2 border-[#12D670] text-xl tracking-widest inline-block mb-5">
            Screenshots
          </p>
          <Zoom scale={0.4}>
            {images.map((each, index) => (
              <img key={index} style={{ width: "100%" }} src={each} alt=" " />
            ))}
          </Zoom>
        </div>
        <div className="flex justify-center py-12">
          <Link to="/#work" smooth={true} duration={500}>
            <div className="rounded-full bg-gray-700/80 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineArrowLeft className="text-[#12D670]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Netflix;
