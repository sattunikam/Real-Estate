import React, { useState, useEffect } from "react";
import assets from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(null);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32 bg-transparent">
          <img src={assets.logo} alt="logo" />
          <ul className="hidden sm:flex gap-7 text-white">
            <a href="#Home" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>

            <a
              href="#Testimonials"
              className="cursor-pointer hover:text-gray-400"
            >
              Testimonials
            </a>
            <a href="#Contact" className="cursor-pointer hover:text-gray-400">
              Contact
            </a>
          </ul>
          <button className="cursor-pointer hidden md:block bg-white hover:bg-gray-400 hover:text-white px-8 py-2 rounded-full text-black">
            Sign up
          </button>
          <img
            onClick={() => setshowMobileMenu(true)}
            src={assets.menu_icon}
            className="md:hidden w-7 cursor-pointer"
            alt=""
          />
        </div>

        {/* mobile menu */}
        <div
          className={`md:hidden ${
            showMobileMenu ? "w-full fixed" : "h-0 w-0"
          }  right-0 bottom-0 top-0 overflow-hidden bg-white transition-all`}
        >
          <div className="flex justify-end p-6 cursor-pointer">
            <img
              onClick={() => setshowMobileMenu(false)}
              src={assets.cross_icon}
              className="w-6"
              alt="cross icon"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <a
              onClick={() => setshowMobileMenu(false)}
              href="#Header"
              className="rounded-full px-4 py-2 inline-block"
            >
              Home
            </a>
            <a
              onClick={() => setshowMobileMenu(false)}
              href="#About"
              className="rounded-full px-4 py-2 inline-block"
            >
              About
            </a>
            <a
              onClick={() => setshowMobileMenu(false)}
              href="#Projects"
              className="rounded-full px-4 py-2 inline-block"
            >
              Projects
            </a>
            <a
              onClick={() => setshowMobileMenu(false)}
              href="#Testimonials"
              className="rounded-full px-4 py-2 inline-block"
            >
              Testimonials
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
