import React from "react";

import footerlogo from "../../assets/logo-xl.png";
import facebookImg from "../../assets/facebook.png";
import instagramImg from "../../assets/instagram.png";
import twitterImg from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-6 text-white">
        {/* Logo */}
        <div className="flex justify-center">
          <img className="w-32 sm:w-40" src={footerlogo} alt="" />
        </div>

        {/* Description */}
        <p className="text-center text-gray-300 text-sm sm:text-base max-w-xl mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

        {/* Social */}
        <p className="text-center text-lg sm:text-xl font-bold">Social Links</p>

        <div className="flex justify-center items-center gap-4">
          <img className="w-6 sm:w-7 cursor-pointer" src={instagramImg} alt="" />
          <img className="w-6 sm:w-7 cursor-pointer" src={facebookImg} alt="" />
          <img className="w-6 sm:w-7 cursor-pointer" src={twitterImg} alt="" />
        </div>

        {/* Divider */}
        <div className="divider before:bg-green-950 after:bg-green-950"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-300 text-sm">
          <p className="text-center sm:text-left">© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
            <p className="cursor-pointer hover:text-white">Privacy Policy</p>
            <p className="cursor-pointer hover:text-white">Terms of Service</p>
            <p className="cursor-pointer hover:text-white">Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
