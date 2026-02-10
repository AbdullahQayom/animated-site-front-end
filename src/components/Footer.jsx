import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white px-16 py-16 mt-32">

      {/* Top Navigation Links */}
      <div className=" text-3xl  mx-auto flex flex-wrap justify-center gap-16 mb-30">
        <span className="hover:underline cursor-pointer">Help</span>
        <span className="hover:underline cursor-pointer">About Us</span>
        <span className="hover:underline cursor-pointer">Company</span>
        <span className="hover:underline cursor-pointer">Service</span>
      </div>

      {/* Download Section (Centered) */}
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 mb-10 text-center">
        <h2 className="text-4xl font-bold ">Download Our App</h2>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
            Play Store
          </button>
          <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
            App Store
          </button>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white opacity-40 mb-6"></div>

      {/* Bottom Navigation & Social Icons */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        
        {/* Left Navigation Links */}
        <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
          <span className="hover:underline cursor-pointer">Contact</span>
          <span className="hover:underline cursor-pointer">Terms</span>
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Conditions</span>
        </div>

        {/* Right Social Icons */}
        <div className="flex gap-6 text-xl">
          <FaTwitter className="hover:text-cyan-400 cursor-pointer" />
          <FaFacebookF className="hover:text-cyan-400 cursor-pointer" />
          <FaYoutube className="hover:text-cyan-400 cursor-pointer" />
          <FaInstagram className="hover:text-cyan-400 cursor-pointer" />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
