import React from "react";
import { LuPlus } from "react-icons/lu";

const Banner = () => {
  return (
    <div className="w-7xl mx-auto my-10">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-[#244D3F]">Friends to keep close in your life</h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.
        </p>
      </div>
      <button className="btn flex mx-auto mt-6 text-white bg-[#244D3F]">
        <LuPlus />
        Add Friend
      </button>
      <div className="flex justify-between items-center mt-6">
        <div className="flex flex-col items-center shadow-md border border-gray-200 rounded-md px-25 py-8">
          <span>0</span>
          <p>Total Friends</p>
        </div>
        <div className="flex flex-col items-center shadow-md border border-gray-200 rounded-md px-25 py-8">
          <span>0</span>
          <p>On Track</p>
        </div>
        <div className="flex flex-col items-center shadow-md border border-gray-200 rounded-md px-25 py-8">
          <span>0</span>
          <p>Need Attention</p>
        </div>
        <div className="flex flex-col items-center shadow-md border border-gray-200 rounded-md px-25 py-8">
          <span>0</span>
          <p>Interactions this month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
