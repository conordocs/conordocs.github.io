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

const images = [Home, Rent, Buy, Nav, Search, View1, View2];

const Realtor = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div
        name="realtor"
        id="realtor"
        className="w-full h-full bg-[#0a192f] text-gray-300"
      >
        <div className="max-w-[1000px] mx-auto py-20 px-8 flex flex-col w-full h-full">
          <div className="">
            <p className=" text-4xl font-bold inline border-b-4 border-[#11d670]">
              Realtor
            </p>
            {/* eslint-disable-next-line */}
            <p className="py-4">
              // Realtor is a React JS project based on the idea of something similar to PropertyPal.
            </p>
            <p>
              <li>
              A website where a user can log in, view house/apartments etc in Dubai to either buy or rent.
              </li>
              <li>
              This application is created by React JavaScript and uses an API to pull all the necessary data/information for each property
              </li>
              <li>
              Users can define searches to specify what they are looking for.
              </li>
              <li>
              They can also click into a property and view more information about the property, what amenities it has and view images of the property
              </li>
            </p>
            <br />
            <p className="text-xl font-bold inline border-b-4 border-[#11d670]">
              Screenshots
            </p>
            <br />
            <br />
            <div className="slide-container">
              <Zoom scale={0.4}>
                {images.map((each, index) => (
                  <img
                    key={index}
                    style={{ width: "100%" }}
                    src={each}
                    alt=" "
                  />
                ))}
              </Zoom>
            </div>
            <br />
            <p className="text-xl font-bold inline border-b-4 border-[#11d670]">
              Video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realtor;
