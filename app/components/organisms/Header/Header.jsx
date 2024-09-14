"use client";
import Image from "next/image";
import React, { useState } from "react";
import SSLogo from "../../../assets/ssbakes.png";

const Header = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#FEF6F8] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div>
            For Orders Call : <span className="text-[#E60E35]">9047609410</span>
          </div>
          <div>
            <a className="hover:underline" href="/signup">
              Sign Up
            </a>{" "}
            |{" "}
            <a className="hover:underline" href="/login">
              Login
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center">
          {/* Brand name or logo */}
          <div className="text-2xl font-bold text-gray-800 py-3">
            <a href="/" className="text-gray-800 hover:text-gray-500">
              <Image
                src={SSLogo}
                // width={"80px"} // Set a default width
                // height={"80px"} // Set a default height
                className="w-16 h-16 sm:w-18 sm:h-18 md:w-24 md:h-24 lg:w-28 lg:h-28"
                alt="ss bakes"
              />
            </a>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-800 hover:text-gray-500">
              Home
            </a>
            <a href="/about" className="text-gray-800 hover:text-gray-500">
              About Cake Shop
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              Creative
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              Signature
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              Theme
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              Contact
            </a>
          </div>

          {/* Hamburger button for mobile screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu (slide-down animation) */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
          >
            About Cake Shop
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
          >
            Creative
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
          >
            Signature
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
          >
            Theme
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
