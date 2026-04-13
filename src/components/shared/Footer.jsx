import React from "react";

import footerlogo from "../../assets/logo-xl.png";
import facebookImg from "../../assets/facebook.png";
import instagramImg from "../../assets/instagram.png";
import twitterImg from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      <div className="w-7xl mx-auto p-10 space-y-4 text-white">
        <div className="flex justify-center">
          <img src={footerlogo} alt="" />
        </div>
        <p className="text-center text-gray-300">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <p className="text-center text-xl font-bold">Social Links</p>
        <div className="flex justify-center items-center gap-3.5">
          <div className="">
            <img src={instagramImg} alt="" />
          </div>
          <div className="">
            <img src={facebookImg} alt="" />
          </div>
          <div className="">
            <img src={twitterImg} alt="" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex items-center gap-5">
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
