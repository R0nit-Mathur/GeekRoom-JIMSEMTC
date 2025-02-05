import React from "react";
import logo from "/src/assets/logo.png"; // Adjust the path as needed

const HeroSection = () => {
  return (
    <section id="home" className="relative text-gray-600 body-font font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat brightness-50"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-5xl mb-6 font-bold text-white font-anton">
            Innovate. <span className="text-teal-500">Code.</span> Lead.
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-white font-montserrat">
            A community of passionate developers at JIMS-EMTC, building the future one line of code at a time.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-teal-500 border-0 py-3 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg font-oswald">
              Explore All &gt;
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded-xl" alt="hero" src={logo} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;