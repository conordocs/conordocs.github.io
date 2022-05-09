import React from "react";
import Navbar from "../components/Navbar";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import HomeL from "../assets/CAdmin/index-light.PNG";
import HomeD from "../assets/CAdmin/index-dark.PNG";
import NewProductD from "../assets/CAdmin/new-product-dark.PNG";
import NewProductL from "../assets/CAdmin/new-product-light.PNG";
import NewUserL from "../assets/CAdmin/new-user-light.PNG";
import NewUserD from "../assets/CAdmin/new-user-dark.PNG";
import UsersD from "../assets/CAdmin/users-dark.PNG";
import UsersL from "../assets/CAdmin/users-light.PNG";

const images = [
  HomeL,
  HomeD,
  NewProductD,
  NewProductL,
  NewUserL,
  NewUserD,
  UsersD,
  UsersL,
];

const CAdmin = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div
        name="cadmin"
        id="cadmin"
        className="w-full h-full bg-[#0a192f] text-gray-300"
      >
        <div className="max-w-[1000px] mx-auto py-20 px-8 flex flex-col w-full h-full">
          <div className="">
            <p className=" text-4xl font-bold inline border-b-4 border-[#11d670]">
              CAdmin
            </p>
            {/* eslint-disable-next-line */}
            <p className="py-4">
              // CAdmin is a JavaScript project that I have worked on which uses
              React JS & SASS.
            </p>
            <p>
              <li>
                This website is a basic admin dashboard which displays
                statistics about sales, orders, products etc.
              </li>
              <li>
                This also displays graphs which show a better understanding
              </li>
              <li>
                This is a basic site for now, but I'll be implemting database
                incorporation.
              </li>
              <li>This program can flick between light & dark mode.</li>
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

export default CAdmin;
