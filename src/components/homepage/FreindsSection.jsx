import React from "react";
import { Link, useRouteLoaderData } from "react-router";

const FreindsSection = () => {
  const friends = useRouteLoaderData("root");
  console.log(friends);
  return (
    <div className="w-7xl mx-auto my-10">
      <h3 className="text-2xl font-bold ">Your Friends</h3>
      <div className="grid grid-cols-4 gap-5 mt-6">
        {friends.map((friend, ind) => (
          <Link to={`/friend/${friend.id}`} key={ind} className="shadow-md border border-gray-200 rounded-md bg-base-200 flex flex-col justify-center items-center p-5 space-y-2.5">
            <div className="flex justify-center items-center">
              <img className="rounded-full" src={friend.picture} alt="" />
            </div>
            <h2>{friend.name}</h2>
            <p>{friend.days_since_contact}d ago</p>
            <div className="flex items-center gap-2 ">
              {friend.tags.map((t) => (
                <div className="badge bg-[#CBFADB] text-[#244D3F]">{t}</div>
              ))}
            </div>
            <div className={`badge text-white ${friend.status == "Almost due" ? "bg-[#EFAD44]" : friend.status == "Overdue" ? "bg-[#EF4444]" : friend.status == "On-track" ? "bg-[#244D3F]" : ""}`}>
              {friend.status}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FreindsSection;
