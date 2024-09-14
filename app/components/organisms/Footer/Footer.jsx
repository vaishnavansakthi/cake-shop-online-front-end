"use client";
import Image from "next/image";
import React from "react";
import SSLogo from "../../../assets/ssbakes.png";

const Footer = () => {
  return (
    <footer className="bg-[#D35E81] text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-5">
              <Image
                src={SSLogo}
                // width={"80px"} // Set a default width
                // height={"80px"} // Set a default height
                className="w-16 h-16 sm:w-18 sm:h-18 md:w-24 md:h-24 lg:w-28 lg:h-28"
                alt="ss bakes"
              />
            </div>
            <p className="text-gray-100 mb-4">
              We provide quality products and services to enhance your business
              growth.
            </p>
            <p className="text-gray-100">
              Address: 123 Business St, City, Country
            </p>
            <p className="text-gray-100">Email: info@company.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  About Cake Shop
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Creative
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Signature
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Theme
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-100">Phone: (123) 456-7890</p>
            <p className="text-gray-100">Email: support@company.com</p>
            <p className="text-gray-100">Hours: Mon - Fri, 9:00am - 6:00pm</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-pink-400 mt-8 pt-4 text-center">
          <p className="text-gray-100">
            &copy; 2024 Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
