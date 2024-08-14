import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaHeart, FaInstagram, FaTiktok } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import {
  MdOutlineLocationOn,
  MdOutlinePhoneInTalk,
  MdOutlineEmail,
} from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
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
      <div className="bg-gray-100 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src={logo} alt="" className="logo" />
            </Link>
            <div className="hidden sm:flex items-center space-x-2">
              <FaHeart className="w-6 h-6 text-[#0a4446] p-1 border rounded-full bg-[#fbd459]" />
              <span
                className="hover:text-[#01715d] italic font-bold"
                onClick={() => navigate("/volunteer")}
              >
                Become a Volunteer
              </span>
              <a href="tel:+" className="flex items-center gap-1">
                <MdOutlinePhoneInTalk className="w-6 h-6 text-[#fbd459] hover:text-[#01715d]" />
                <span className="hover:text-[#01715d] ">+245722300000</span>
              </a>
              <a
                href="mailto:janetngei18@gmail.com"
                className="flex items-center gap-1"
              >
                <MdOutlineEmail className="w-6 h-6 text-[#fbd459] hover:text-[#01715d]" />
                <span className="hover:text-[#01715d]">Email</span>
              </a>
              <a href="" className="flex items-center gap-1">
                <MdOutlineLocationOn className="w-6 h-6 text-[#fbd459] hover:text-[#01715d]" />
                <span className="hover:text-[#01715d]">Nairobi, Kenya</span>
              </a>
            </div>
          </div>
          <div className="hidden sm:flex space-x-2">
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-8 w-8 text-gray-700 hover:bg-[#01715d] hover:text-white p-2 border rounded-full bg-[#f9f4e8]" />
            </a>
            <a
              href="https://www.facebook.com/entrustinitiative"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="h-8 w-8 text-gray-700 hover:bg-[#01715d] hover:text-white p-2 border rounded-full bg-[#f9f4e8]" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="h-8 w-8 text-gray-700 hover:bg-[#01715d] hover:text-white p-2 border rounded-full bg-[#f9f4e8]" />
            </a>
            <a
              href="https://www.youtube.com/@theentrustinitiative"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiYoutube className="h-8 w-8 text-gray-700 hover:bg-[#01715d] hover:text-white p-2 border rounded-full bg-[#f9f4e8]" />
            </a>
            <a
              href="https://www.tiktok.com/@theentrustinitiative"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="h-8 w-8 text-gray-700 hover:bg-[#01715d] hover:text-white p-2 border rounded-full bg-[#f9f4e8]" />
            </a>
          </div>
        </div>
      </div>

      {/* Second Menu */}
      <div className="bg-[#01715d] text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-4">
            <button type="button" onClick={toggleMenu} className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
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
              <Link to="/donate" className="hover:text-gray-300">
                Donations
              </Link>
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
                  <div className="absolute mt-5 w-56 bg-white rounded-md shadow-lg py-1 z-20">
                    <Link
                      to="/volunteer"
                      className="block px-4 py-2 text-gray-800"
                    >
                      Volunteer
                    </Link>
                    <Link
                      to="/enroll"
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
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-800"
                    ></Link>
                  </div>
                )}
              </div>
              <Link to="/contact" className="hover:text-gray-300">
                Contacts
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
              className="flex items-center gap-2 bg-[#fbd459] text-gray-800 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md"
            >
              <FaHeart />
              Support Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="bg-gray-100 text-gray-800 md:hidden">
          <Link to="/" className="block py-2 px-4 text-sm">
            Home
          </Link>
          <Link to="/about" className="block py-2 px-4 text-sm">
            About
          </Link>
          <Link to="/donate" className="block py-2 px-4 text-sm">
            Donations
          </Link>
          <Link to="/events" className="block py-2 px-4 text-sm">
            Events
          </Link>
          <Link to="/blogs" className="block py-2 px-4 text-sm">
            News
          </Link>
          <Link to="/contact" className="block py-2 px-4 text-sm">
            Contacts
          </Link>
          <div className="relative px-1">
            <button
              type="button"
              className="py-1.5 px-4 text-sm text-gray-800 flex items-center hover:bg-white hover:text-gray-800 rounded-md"
              aria-expanded="false"
              onClick={toggleDropdown}
            >
              Pages
              <svg
                className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
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
                <Link to="#" className="block px-4 py-2 text-gray-800">
                  Admin Dashboard
                </Link>
                <Link to="#" className="block px-4 py-2 text-gray-800">
                  Teacher Dashboard
                </Link>
                <Link to="#" className="block px-4 py-2 text-gray-800">
                  Students
                </Link>
                <Link to="/login" className="block px-4 py-2 text-gray-800">
                  Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
