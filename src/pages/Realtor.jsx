import React from "react";
import Navbar from "../components/Navbar";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Home from "../assets/RealtorImg/1.png";
import Rent from "../assets/RealtorImg/2.png";
import Buy from "../assets/RealtorImg/3.png";
import Nav from "../assets/RealtorImg/4.png";
import Search from "../assets/RealtorImg/5.png";
import View1 from "../assets/RealtorImg/6.png";
import View2 from "../assets/RealtorImg/7.png";
import { HashLink as Link } from "react-router-hash-link";

import { RiRadioButtonFill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";

const images = [Home, Rent, Buy, Nav, Search, View1, View2];

const Realtor = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-[#0a192f] text-white pt-10">
        <div className="w-full h-[20vh] lg:h-[30vh] relative">
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 lg:h-fit sm:pl-14 sm:pr-20 pr-5">
            <h2 className="py-2 ml-5 text-4xl pb-2 uppercase border-b-4 border-[#12D670] tracking-widest inline-block mb-5">
              Realtor
            </h2>
            <h3 className="pl-5 font-thin">React JS / API / CSS</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 lg:h-full sm:pl-20 sm:pr-20 pr-5 pl-5 pb-20 pt-10 ">
          <div className="col-span-4">
            {/* <p>Project</p> */}
            <h2 className="py-2 pb-2 uppercase border-b-2 border-[#12D670] text-xl tracking-widest inline-block mb-5">
              Overview
            </h2>
            <p>
              Realtor is a React JS project based on the idea of something
              similar to PropertyPal.
            </p>
            <ul className="list-disc pl-10 py-5">
              <li className="pb-1 cursor-auto">
                A website where a user can log in, view house/apartments etc in
                Dubai to either buy or rent.
              </li>
              <li className="pb-1 cursor-auto">
                This application is created by React JavaScript and uses an API
                to pull all the necessary data/information for each property
              </li>
              <li className="pb-1 cursor-auto">
                Users can define searches to specify what they are looking for.
              </li>
              <li className="pb-1 cursor-auto">
                They can also click into a property and view more information
                about the property, what amenities it has and view images of the
                property
              </li>
            </ul>
            <div className="py-5">
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#11d670]">
                <a
                  className="flex justify-between items-center w-full text-gray-300 hover:text-[#12D670]"
                  href="https://github.com/conordocs/react_realestate"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
              </button>
            </div>
          </div>
          <div className="h-fit col-span-4 md:col-span-1 shadow-md shadow-gray-700 rounded-xl p-4">
            <div className="p-2">
              <p className="pb-2 uppercase border-b-2 border-[#12D670] text-sm tracking-widest inline-block mb-5">
                Technologies
              </p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-400 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React JS
                </p>
                <p className="text-gray-400 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> CSS
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

export default Realtor;
