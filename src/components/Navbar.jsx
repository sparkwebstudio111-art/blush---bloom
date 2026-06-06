import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-red-700 text-white shadow-lg">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navbar Height */}
          <div className="flex items-center justify-between h-24">

            {/* Logo */}
            <div className="cursor-pointer flex items-center gap-2">
              <img
                src={logo}
                alt="Logo"
                className="h-16 md:h-24 w-auto object-contain"
              />

              <p className="text-2xl font-bold">
                Blush & Bloom
              </p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 font-semibold text-lg">
              
              <Link
                to="/"
                className="hover:text-yellow-300 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-yellow-300 transition duration-300"
              >
                About
              </Link>

              <Link
                to="/services"
                className="hover:text-yellow-300 transition duration-300"
              >
                Service
              </Link>

              <Link
                to="/contact"
                className="hover:text-yellow-300 transition duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-red-700 px-6 pb-6 space-y-4 font-medium text-lg">
            
            <Link
              to="/"
              className="block hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              to="/services"
              className="block hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Service
            </Link>

            <Link
              to="/contact"
              className="block hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;