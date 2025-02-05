import React from "react";
import geeklogo from "../assets/logo.png"


function Navbar() {
    return (
      <>
        <header className="text-gray-400 body-font bg-black">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            {/* Logo Section */}
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
              <img src={geeklogo} alt="GeekRoom Logo" className="w-10 h-10 rounded-full" />
              <span className="ml-3 text-xl">GeekRoom</span>
            </a>

            {/* Navigation Links */}
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-white" href="#home">Home</a>
              <a className="mr-5 hover:text-white" href="#about">About Us</a>
              <a className="mr-5 hover:text-white" href="#events">Events</a>
              <a className="mr-5 hover:text-white" href="#contact">Contact Us</a>
            </nav>
  
            {/* Get Started Button */}
            <button className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-white mt-4 md:mt-0">
              Get Started
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>
      </>
    );
  }
  
  export default Navbar;