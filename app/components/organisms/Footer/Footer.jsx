"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D35E81] text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">SS Bakes</h3>
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
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">
                  Services
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
        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <p className="text-gray-100">
            &copy; 2024 Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
