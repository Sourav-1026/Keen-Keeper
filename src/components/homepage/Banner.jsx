import React from "react";
import { LuPlus } from "react-icons/lu";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      {/* Heading */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#244D3F] leading-tight">Friends to keep close in your life</h1>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      </div>

      {/* Button */}
      <button className="btn flex items-center gap-2 mx-auto mt-6 text-white bg-[#244D3F] px-6">
        <LuPlus />
        Add Friend
      </button>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="flex flex-col items-center shadow-md border border-gray-200 rounded-md py-6">
          <span className="text-xl sm:text-2xl font-bold text-[#244D3F]">14</span>
          <p className="text-gray-400 text-sm">Total Friends</p>
        </div>

        <div className="flex flex-col items-center shadow-md border border-gray-200 rounded-md py-6">
          <span className="text-xl sm:text-2xl font-bold text-[#244D3F]">3</span>
          <p className="text-gray-400 text-sm">On Track</p>
        </div>

        <div className="flex flex-col items-center shadow-md border border-gray-200 rounded-md py-6">
          <span className="text-xl sm:text-2xl font-bold text-[#244D3F]">6</span>
          <p className="text-gray-400 text-sm">Need Attention</p>
        </div>

        <div className="flex flex-col items-center shadow-md border border-gray-200 rounded-md py-6">
          <span className="text-xl sm:text-2xl font-bold text-[#244D3F]">12</span>
          <p className="text-gray-400 text-sm text-center px-2">Interactions this month</p>
        </div>
      </div>

      {/* Divider */}
      <div className="divider mt-8"></div>
    </div>
  );
};

export default Banner;
