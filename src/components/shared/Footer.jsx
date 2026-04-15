import React from "react";

import footerlogo from "../../assets/logo-xl.png";
import facebookImg from "../../assets/facebook.png";
import instagramImg from "../../assets/instagram.png";
import twitterImg from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] pt-12 md:pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:w-7xl lg:p-10 space-y-4 text-white">
        <div className="flex justify-center">
          <img className="w-28 md:w-36 lg:w-auto" src={footerlogo} alt="" />
        </div>

        <p className="text-center text-gray-300 text-sm md:text-base lg:text-base">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

        <p className="text-center text-lg md:text-xl lg:text-xl font-bold">Social Links</p>

        <div className="flex justify-center items-center gap-3 md:gap-4 lg:gap-3.5">
          <div>
            <img src={instagramImg} alt="" className="w-6 h-6 md:w-8 md:h-8 lg:w-auto lg:h-auto" />
          </div>
          <div>
            <img src={facebookImg} alt="" className="w-6 h-6 md:w-8 md:h-8 lg:w-auto lg:h-auto" />
          </div>
          <div>
            <img src={twitterImg} alt="" className="w-6 h-6 md:w-8 md:h-8 lg:w-auto lg:h-auto" />
          </div>
        </div>

        <div className="divider before:bg-green-950 after:bg-green-950"></div>

        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center text-gray-300 text-xs md:text-sm lg:text-base gap-3 md:gap-0">
          <p className="text-center md:text-left lg:text-left">© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-center md:justify-end gap-3 md:gap-5 lg:gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
