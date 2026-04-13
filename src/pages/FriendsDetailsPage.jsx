import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { LuVideo } from "react-icons/lu";
import { PiChatText } from "react-icons/pi";
import { useParams, useRouteLoaderData } from "react-router";

const FriendsDetailsPage = () => {
  const { id } = useParams();
  const friends = useRouteLoaderData("root");

  const expectedFriend = friends.find((friend) => friend.id === parseInt(id));
  console.log(expectedFriend);

  return (
    <div className="w-7xl mx-auto my-20">
      <div className="dib-main flex gap-5">
        <div className="dib-left space-y-3.5">
          <div className="dib up">
            <div className="shadow-md border border-gray-200 rounded-md  flex flex-col justify-center items-center p-5 space-y-2.5">
              <div className="flex justify-center items-center">
                <img className="rounded-full" src={expectedFriend.picture} alt="" />
              </div>
              <h2>{expectedFriend.name}</h2>
              <div
                className={`badge text-white ${expectedFriend.status == "Almost due" ? "bg-[#EFAD44]" : expectedFriend.status == "Overdue" ? "bg-[#EF4444]" : expectedFriend.status == "On-track" ? "bg-[#244D3F]" : ""}`}
              >
                {expectedFriend.status}
              </div>
              <div className="flex items-center gap-2 ">
                {expectedFriend.tags.map((t) => (
                  <div className="badge bg-[#CBFADB] text-[#244D3F]">{t}</div>
                ))}
              </div>
              <p className="text-center text-gray-400">{expectedFriend.bio}</p>
              <p className="text-gray-400">Prefered: Mail</p>
            </div>
          </div>
          <div className="dib bottom space-y-3">
            <div className="p-5 btn flex justify-center">
              <HiOutlineBellSnooze />
              Snooze 2 weeks
            </div>
            <div className="p-5 btn flex justify-center">
              <FiArchive />
              Archive
            </div>
            <div className="p-5 btn flex justify-center text-red-500">
              <FaRegTrashAlt />
              Delete
            </div>
          </div>
        </div>
        <div className="dib-right w-full flex flex-col space-y-5">
          <div className="dib-up shadow-md rounded-md border border-gray-200 flex justify-between p-5 py-10">
            <div className="shadow-md rounded-md border border-gray-200 px-15 flex flex-col justify-center items-center py-8 space-y-2.5">
              <span className="text-xl font-semibold text-[#244D3F]">{expectedFriend.days_since_contact}</span>
              <p className="text-gray-400">Days Since Contact</p>
            </div>
            <div className="shadow-md rounded-md border border-gray-200 px-15 flex flex-col justify-center items-center py-8 space-y-2.5">
              <span className="text-xl font-semibold text-[#244D3F]">{expectedFriend.goal}</span>
              <p className="text-gray-400">Goal (Days)</p>
            </div>
            <div className="shadow-md rounded-md border border-gray-200 px-15 flex flex-col justify-center items-center py-8 space-y-2.5">
              <span className="text-xl font-semibold text-[#244D3F]">{expectedFriend.next_due_date}</span>
              <p className="text-gray-400">Next Due</p>
            </div>
          </div>
          <div className="dib-middle flex justify-between shadow-md rounded-md border border-gray-200 p-5 py-8">
            <div className="space-y-2.5">
              <h5 className="text-2xl font-semibold text-[#244D3F]">RelationShip Goal</h5>
              <p>
                <span className="text-gray-400">Connect Every</span> 30 days
              </p>
            </div>
            <button className="btn">Edit</button>
          </div>
          <div className="dib-bottom shadow-md rounded-md border border-gray-200 p-5 py-8 space-y-6">
            <h5 className="text-2xl font-semibold text-[#244D3F]">Quick Check-In</h5>
            <div className="flex justify-between">
              <div className="shadow-md rounded-md border border-gray-200 px-25 bg-base-200 flex flex-col justify-center items-center py-8">
                <FiPhoneCall className="w-10 h-10 mb-6" />
                <p className="text-xl font-semibold">Call</p>
              </div>
              <div className="shadow-md rounded-md border border-gray-200 px-25 bg-base-200 flex flex-col justify-center items-center py-8">
                <PiChatText className="w-10 h-10 mb-6" />
                <p className="text-xl font-semibold">Text</p>
              </div>
              <div className="shadow-md rounded-md border border-gray-200 px-25 bg-base-200 flex flex-col justify-center items-center py-8">
                <LuVideo className="w-10 h-10 mb-6" />
                <p className="text-xl font-semibold">Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailsPage;
