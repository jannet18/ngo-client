import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import {
  MdOutlineLocationOn,
  MdOutlinePhoneInTalk,
  MdOutlineEmail,
} from "react-icons/md";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import logo from "../assets/entrust.jpeg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setDropdownMenu(!dropdownMenu);
  };

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <>
      {/* Top Menu */}
      <div className="bg-gray-100 px-6 py-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold tracking-wider">
              {/* <img src={logo} alt="Entrust Logo" className="h-12 w-12" /> */}
              <h1>The Entrust</h1>
              <span>Initiative</span>
            </Link>
            <div className="hidden sm:flex items-center space-x-4">
              {/* <Link
                to="https://airtable.com/appL0AY242tmDtUOP/pagIrvSEPt4LqpDkS/form"
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#01715d] font-medium"
              >
                <FaHeart className="w-4 h-4 text-[#fbd459]" />
                Become a Volunteer
              </Link> */}
              <a
                href="tel:+254797432966"
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#01715d]"
              >
                <MdOutlinePhoneInTalk className="w-5 h-5 text-[#fbd459]" />
                <div className="flex flex-col items-center">
                  <span>+254797432966</span>
                  <span>+254748149943</span>
                </div>
              </a>
              <a
                href="mailto:theentrustinitiative@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#01715d]"
              >
                <MdOutlineEmail className="w-5 h-5 text-[#fbd459]" />
                Email
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#01715d]"
              >
                <MdOutlineLocationOn className="w-5 h-5 text-[#fbd459]" />
                Nairobi, Kenya
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#01715d] p-2 rounded-full"
            >
              <FaInstagram className="h-6 w-6 text-gray-700 hover:text-white" />
            </a>
            <a
              href="https://www.facebook.com/entrustinitiative"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#01715d] p-2 rounded-full"
            >
              <FaFacebookF className="h-6 w-6 text-gray-700 hover:text-white" />
            </a>
            <a
              href="https://x.com/EntrustOrg?t=plHqiSpkjcKE9XM0c3GjdA&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#01715d] p-2 rounded-full"
            >
              <FaTwitter className="h-6 w-6 text-gray-700 hover:text-white" />
            </a>
            <a
              href="https://www.youtube.com/@theentrustinitiative"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#01715d] p-2 rounded-full"
            >
              <CiYoutube className="h-6 w-6 text-gray-700 hover:text-white" />
            </a>
            <a
              href="https://www.tiktok.com/@theentrustinitiative"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#01715d] p-2 rounded-full"
            >
              <FaTiktok className="h-6 w-6 text-gray-700 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Second Menu */}
      <div className="bg-[#01715d] text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
              {/* <Link to="/donate" className="hover:text-gray-300">
                Donations
              </Link> */}
              <Link to="/events" className="hover:text-gray-300">
                Events
              </Link>
              <Link to="/blog" className="hover:text-gray-300">
                News
              </Link>
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center justify-center hover:bg-white hover:text-gray-800 rounded-sm px-1 py-0.5"
                  aria-expanded="false"
                  onClick={toggleDropdown}
                >
                  Pages
                  <svg
                    className="text-gray-400 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {dropdownMenu && (
                  <div className="absolute mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20">
                    <Link
                      to="https://airtable.com/appL0AY242tmDtUOP/pagIrvSEPt4LqpDkS/form"
                      className="block px-4 py-2 text-gray-800"
                    >
                      Volunteer
                    </Link>
                    <Link
                      to="https://airtable.com/appL0AY242tmDtUOP/pagXAnInrMJT7siLL/form"
                      className="block px-4 py-2 text-gray-800"
                    >
                      Enroll
                    </Link>
                    <Link
                      to="/donate"
                      className="block px-4 py-2 text-gray-800"
                    >
                      Donate
                    </Link>
                    <Link to="/login" className="block px-4 py-2 text-gray-800">
                      Sign In
                    </Link>
                  </div>
                )}
              </div>
              {/* <Link to="/contact" className="hover:text-gray-300">
                Contacts
              </Link> */}
              <Link to="/donations" className="hover:text-gray-300">
                Donations
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-[#fbd459]">
              <IoSearch className="h-6 w-6" />
            </button>
            <Link to="/shop" className="hover:text-[#fbd459]">
              <IoCartOutline className="h-6 w-6" />
            </Link>
            <Link
              to="/donate"
              className="bg-[#fbd459] text-[#01715d] font-medium px-4 py-2 rounded hover:bg-white hover:text-[#01715d]"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="bg-white shadow-lg">
          <div className="px-4 pt-4 pb-2 space-y-1">
            <Link
              to="/"
              className="block py-2 px-3 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 px-3 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/donate"
              className="block py-2 px-3 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Donations
            </Link>
            <Link
              to="/events"
              className="block py-2 px-3 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              to="/blog"
              className="block py-2 px-3 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              News
            </Link>
            <Link
              to="https://airtable.com/appL0AY242tmDtUOP/pagIrvSEPt4LqpDkS/form"
              className="block py-2 px-3 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Volunteer
            </Link>
            <Link
              to="https://airtable.com/appL0AY242tmDtUOP/pagXAnInrMJT7siLL/form"
              className="block py-2 px-3 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Enroll
            </Link>
            <Link
              to="/login"
              className="block py-2 px-3 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Sign In
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-3 rounded-md hover:bg-gray-200"
              onClick={toggleMenu}
            >
              Contacts
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
