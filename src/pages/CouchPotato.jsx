import React from "react";
import Navbar from "../components/Navbar";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AddShow from "../assets/couchPotatoImg/add-show.png";
import AdminHome from "../assets/couchPotatoImg/admin-home.png";
import AdminLogin from "../assets/couchPotatoImg/admin-login.png";
import EditDelete from "../assets/couchPotatoImg/edit-delete-show.png";
import Home from "../assets/couchPotatoImg/homepage.png";
import NetflixAwards from "../assets/couchPotatoImg/netflix-awards.png";
import PrimeAwards from "../assets/couchPotatoImg/prime-awards.png";
import Reviews from "../assets/couchPotatoImg/reviews.png";
import ShowDetails from "../assets/couchPotatoImg/show-details.png";
import ShowSearch from "../assets/couchPotatoImg/show-search.png";
import UserLogin from "../assets/couchPotatoImg/user-login.png";
import Watchlist from "../assets/couchPotatoImg/watchlist.png";

const images = [
  AddShow,
  AdminHome,
  AdminLogin,
  EditDelete,
  Home,
  NetflixAwards,
  PrimeAwards,
  Reviews,
  ShowDetails,
  ShowSearch,
  UserLogin,
  Watchlist,
];

const CouchPotato = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div
        name="couchpotato"
        id="couchpotato"
        className="w-full h-full bg-[#0a192f] text-gray-300"
      >
        <div className="max-w-[1000px] mx-auto py-20 px-8 flex flex-col w-full h-full">
          <div className="">
            <p className=" text-4xl font-bold inline border-b-4 border-[#11d670]">
              CouchPotato
            </p>
            {/* eslint-disable-next-line */}
            <p className="py-4">
              // Couch Potato is a project which I have worked on in my own
              time. It is created on the same idea of IMDb or Rotten Tomatoes.
            </p>
            <p>
              <li>
                A website where a user can log in and view TV Shows ratings,
                where to stream, user reviews - (similar to IMDb)
              </li>
              <li>
                Users of this website will be able to search for tv show, read
                star ratings, view awards, view overall imdb/rotten tomatoes
                score, which streaming services they can stream the show on.
              </li>
              <li>
                Logged in users will have the ability to write star ratings &
                add/delete shows to their watchlist.
              </li>
              <li>
                Admin side will have the ability to add, edit and delete
                different shows from the database.
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

export default CouchPotato;
