import React from "react";
import assets from "../assets/assets";
import {
  FaFacebookF,
  FaDribbble,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="logo" />
          <p className="text-gray-400 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact us
            </a>
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Visit to our channel
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, photos, and functions — visit our channel.
          </p>
          <ul className="flex gap-4 mt-4">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-500 text-xl"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/"
                target="_blank"
                className="text-gray-400 hover:text-pink-400 text-xl"
              >
                <FaDribbble />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="text-gray-400 hover:text-sky-400 text-xl"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="text-gray-400 hover:text-pink-600 text-xl"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 © Real Estate. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
