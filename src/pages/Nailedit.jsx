import React from "react";
import Navbar from "../components/Navbar";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Appointment from "../assets/naileditImg/appointment-1.png";
import FAQ from "../assets/naileditImg/faq-1.png";
import Jobs from "../assets/naileditImg/jobs-1.png";
import Login from "../assets/naileditImg/login-1.png";
import Orders from "../assets/naileditImg/orders-1.png";
import Products from "../assets/naileditImg/products-1.png";
import Reviews from "../assets/naileditImg/reviews-1-1.png";
import Reviews2 from "../assets/naileditImg/reviews-2.png";
import Shops from "../assets/naileditImg/shops-1.png";
import Tool from "../assets/naileditImg/tool-1.png";

const images = [
  Appointment,
  FAQ,
  Jobs,
  Login,
  Orders,
  Products,
  Reviews,
  Reviews2,
  Shops,
  Tool,
];

const Nailedit = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div
        name="nailedit"
        id="nailedit"
        className="w-full h-full bg-[#0a192f] text-gray-300"
      >
        <div className="max-w-[1000px] mx-auto py-20 px-8 flex flex-col w-full h-full">
          <div className="">
            <p className=" text-4xl font-bold inline border-b-4 border-[#11d670]">
              NailedIT
            </p>
            {/* eslint-disable-next-line */}
            <p className="py-4">
              // NailedIT is my final year project which was focused on the
              title of “How might we use software to promote Remote-Shopping”.
              This was an individual project as part of my dissertation
              focussing on assisting tradespeople to continue working during the
              COVID-19 lockdowns.
            </p>
            <p>
              <li>
                This website tracks stock levels of products withiin 3 different
                shops.
              </li>
              <li>
                Users will be able to view products, view which shop each
                product is available, book appointments with trade
                professionals, order products from whichever shop suits them &
                upload contact details if they are looking for work in the form
                of a 'virtual business card'
              </li>
              <li>
                Logged in users will receive 10% discount on products. They will
                also be able to view their orders and bookings.
              </li>
            </p>
            <br />
            <p className="text-xl font-bold inline border-b-4 border-[#11d670]">
              Screenshots
            </p>
            <br />
            <br />
            <div className="slide-container z-10">
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

export default Nailedit;
