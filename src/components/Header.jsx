import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
        style={{ backgroundImage: "url('./header_img.png')" }}
        id="Home"
      >
        <Navbar />
        <div className="container text-white text-center mx-auto py-4 px-6 md:px-20 lg:px-32">
          <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
            Explore homes that fit your dreams
          </h2>
          <div className="space-x-6 mt-16">
            <a
              href="#Testimonials"
              className="px-8 py-3 border border-white rounded hover:text-amber-500 hover:border-amber-500"
            >
              Testimonials
            </a>
            <a
              href="#Contact"
              className="px-8 py-3 bg-blue-500 rounded hover:bg-blue-800"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
