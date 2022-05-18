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
    <div>
      <Navbar />
      <br />
      <div
        name="netflix"
        id="netflix"
        className="w-full h-full bg-[#0a192f] text-gray-300"
      >
        <div className="max-w-[1000px] mx-auto py-20 px-8 flex flex-col w-full h-full">
          <div className="">
            <p className=" text-4xl font-bold inline border-b-4 border-[#11d670]">
              Netflix
            </p>
            {/* eslint-disable-next-line */}
            <p className="py-4">
              // This project is a duplicate of Netflix, which was created with
              React JS, Firebase & Tailwinds CSS.
            </p>
            <p>
              <li>
                Users can view TV Shows & Movies which are available to stream
                on Netflix.
              </li>
              <li>Users can create an account and sign into their account.</li>
              <li>
                Logged in users will have the ability to add TV Shows & Movies
                to their 'My Shows' category.
              </li>
              <li>
                Logged in users will also have the ability to remove these TV Shows & Movies
                from their 'My Shows' category.
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
            <iframe
              className="w-full sm:h-[600px] pt-4"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/LqGMBv89wwg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Netflix;
