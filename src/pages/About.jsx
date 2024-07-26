import React from "react";
import { PiLineVerticalLight } from "react-icons/pi";
import { BiDonateHeart } from "react-icons/bi";

function About() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto p-10 grid grid-cols-1 md:grid-cols-2 space-x-6">
        <div className="w-full h-full">
          <img
            src="https://investorplace.com/wp-content/uploads/2020/07/music-stocks.jpg"
            alt=""
            className="w-full h-[600px] object-cover rounded-tr-[480%] rounded-b-full"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl text-[#01715d] italics font-bold">
            Welcome to The Entrust Initiative
          </h3>
          <h1 className="text-2xl font-bold tracking-wider">
            Helping each other parsue passions can make the world a little
            better
          </h1>
          <p className="text-sm font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            laudantium quae ipsam qui adipisci esse, placeat deserunt! Dolor
            ratione ut similique vel. Odio optio hic, laborum quasi ut dolor
            corrupti!
          </p>
          <div className="flex items-center justify-center">
            <span className="font-bold">
              <PiLineVerticalLight className="h-10 w-10 font-bold text-[#01715d]" />
            </span>
            <span>
              Helped Fund projects in Kenya, Benefiting multiple people
            </span>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex items-center space-x-2">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/582/996/small/donation-charity-volunteer-help-social-hands-together-community-support-line-style-icon-free-vector.jpg"
                alt=""
                className="w-8 h-8 object-cover bg-[#01715d]"
              />
              <span className="text-xl font-bold">Join our team</span>
            </div>
            <div className="flex items-center space-x-2">
              <BiDonateHeart className="w-10 h-10 text-[#01715d]" />
              <span className="text-xl font-bold">Start Supporting</span>
            </div>
          </div>
          <button className="bg-[#fbd459] text-xs font-bold px-6 py-3 rounded-full uppercase hover:text-white hover:bg-gray-800">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
