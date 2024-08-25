import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookF, FaHeart, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaLongArrowAltUp } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#273733] text-[#98a6a4] ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 p-6">
        <div className="flex flex-col gap-3 items-start ">
          <div>
            <h2 className="text-2xl font-bold text-white">The Entrust</h2>
            <span className="yexy-lg font-semibold">Initiative</span>
          </div>
          <p className="text-sm">
            Committed to equipping individuals with the skills and knowledge
            they need to lead and serve effectively.
          </p>
          <button className="flex items-center gap-2 bg-[#fbd459] px-5 py-3 rounded-full text-[#0a4446] hover:bg-white mt-2">
            <FaHeart /> Support Now
          </button>
        </div>
        {/* <div className="flex flex-col items-start gap-2">
          <h3 className="text-2xl font-bold text-white">Links</h3>
          <Link>About Us</Link>
          <Link>Contact</Link>
          <Link>Latest News</Link>
          <Link>Recent Events</Link>
          <Link>Donations</Link>
        </div> */}
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-2xl font-bold text-white">Links</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Latest News</Link>
          <Link to="/events">Recent Events</Link>
          <Link to="/donations">Donations</Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-2xl font-bold text-white">Contact</h3>
          <h4>Nairobi, Kenya</h4>
          <div className="flex items-center gap-2">
            <MdOutlinePhoneInTalk className="w-6 h-6 text-[#fbd459]" />
            <span className="hover:text-[#fbd459] text-white text-sm">
              +245791432966 / +25448149943
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail className="w-6 h-6 text-[#fbd459] hover:text-[#01715d]" />
            <a
              href="mailto:theentrustinitiative@gmail.com"
              className="hover:text-[#fbd459] text-white text-sm"
            >
              theentrustinitiative@gmail.com
            </a>
          </div>
          <div className="flex space-x-2 mt-3">
            <a href="#">
              <FaInstagram className="h-8 w-8 hover:text-[#01715d] hover:bg-white text-white p-2 border rounded-full bg-[#202d2b]" />
            </a>
            <a
              href="https://www.facebook.com/entrustinitiative"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="h-8 w-8 hover:text-[#01715d] hover:bg-white text-white p-2 border rounded-full bg-[#202d2b]" />
            </a>
            <a href="https://x.com/EntrustOrg?t=plHqiSpkjcKE9XM0c3GjdA&s=08">
              <FaXTwitter className="h-8 w-8 hover:text-[#01715d] hover:bg-white text-white p-2 border rounded-full bg-[#202d2b]" />
            </a>
            <a
              href="https://www.youtube.com/@theentrustinitiative"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiYoutube className="h-8 w-8 hover:text-[#01715d] hover:bg-white text-white p-2 border rounded-full bg-[#202d2b]" />
            </a>
            <a
              href="https://www.tiktok.com/@theentrustinitiative"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="h-8 w-8 hover:text-[#01715d] hover:bg-white text-white p-2 border rounded-full bg-[#202d2b]" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center bg-[#202d2b] p-4">
        <div className="absolute bottom-6 right-8 border rounded-full p-2 bg-[#fbd459] hover:bg-[#01715d] ">
          <FaLongArrowAltUp className="text-white w-6 h-6" />
        </div>
        <h2 className="text-sm">
          &#169;All Copyright 2024 <span>|</span> <span>Developed by </span>
        </h2>
      </div>
    </div>
  );
}

export default Footer;
