import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { LuVideo } from "react-icons/lu";
import { PiChatText } from "react-icons/pi";
import { useParams, useRouteLoaderData } from "react-router";
import { useTimeLine } from "../context/TimeLineProvider";
import { toast } from "react-toastify";

const FriendsDetailsPage = () => {
  const { id } = useParams();
  const friends = useRouteLoaderData("root");

  const expectedFriend = friends.find((friend) => friend.id === parseInt(id));

  const { addActivity } = useTimeLine();

  const handleAddActivity = (type) => {
    const newActivity = {
      id: Date.now(),
      type,
      name: expectedFriend.name,
      date: new Date(),
    };
    addActivity(newActivity);
    toast.success(`${type} with ${expectedFriend.name}`, { position: "top-center" });
  };

  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/3 space-y-4">
          {/* Profile Card */}
          <div className="shadow-md border border-gray-200 rounded-md flex flex-col items-center p-5 space-y-3">
            <img className="rounded-full w-24 h-24 object-cover" src={expectedFriend.picture} alt="" />

            <h2 className="text-lg font-semibold">{expectedFriend.name}</h2>

            <div className={`badge text-white ${expectedFriend.status == "Almost due" ? "bg-[#EFAD44]" : expectedFriend.status == "Overdue" ? "bg-[#EF4444]" : "bg-[#244D3F]"}`}>
              {expectedFriend.status}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {expectedFriend.tags.map((t, i) => (
                <div key={i} className="badge bg-[#CBFADB] text-[#244D3F]">
                  {t}
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-sm">{expectedFriend.bio}</p>

            <p className="text-gray-400 text-sm">Preferred: Mail</p>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <div className="p-4 btn flex justify-center items-center gap-2">
              <HiOutlineBellSnooze />
              Snooze 2 weeks
            </div>
            <div className="p-4 btn flex justify-center items-center gap-2">
              <FiArchive />
              Archive
            </div>
            <div className="p-4 btn flex justify-center items-center gap-2 text-red-500">
              <FaRegTrashAlt />
              Delete
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full flex flex-col gap-5 space-y-0 lg:space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="shadow-md rounded-md border border-gray-200 flex flex-col items-center py-6">
              <span className="text-xl font-bold text-[#244D3F]">{expectedFriend.days_since_contact}</span>
              <p className="text-gray-400 text-sm">Days Since Contact</p>
            </div>

            <div className="shadow-md rounded-md border border-gray-200 flex flex-col items-center py-6">
              <span className="text-xl font-semibold text-[#244D3F]">{expectedFriend.goal}</span>
              <p className="text-gray-400 text-sm">Goal (Days)</p>
            </div>

            <div className="shadow-md rounded-md border border-gray-200 flex flex-col items-center py-6">
              <span className="text-xl font-semibold text-[#244D3F]">{expectedFriend.next_due_date}</span>
              <p className="text-gray-400 text-sm">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center shadow-md rounded-md border border-gray-200 p-5 gap-4">
            <div>
              <h5 className="text-xl font-semibold text-[#244D3F]">Relationship Goal</h5>
              <p>
                <span className="text-gray-400">Connect Every</span> 30 days
              </p>
            </div>
            <button className="btn w-full sm:w-auto">Edit</button>
          </div>

          {/* Quick Check-In */}
          <div className="shadow-md rounded-md border border-gray-200 p-5 space-y-6">
            <h5 className="text-xl font-semibold text-[#244D3F]">Quick Check-In</h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <button onClick={() => handleAddActivity("Call")} className="shadow-md rounded-md border border-gray-200 bg-base-200 flex flex-col items-center py-6 hover:bg-gray-200">
                <FiPhoneCall className="w-8 h-8 mb-3" />
                <p className="font-semibold">Call</p>
              </button>

              <button onClick={() => handleAddActivity("Text")} className="shadow-md rounded-md border border-gray-200 bg-base-200 flex flex-col items-center py-6 hover:bg-gray-200">
                <PiChatText className="w-8 h-8 mb-3" />
                <p className="font-semibold">Text</p>
              </button>

              <button onClick={() => handleAddActivity("Video")} className="shadow-md rounded-md border border-gray-200 bg-base-200 flex flex-col items-center py-6 hover:bg-gray-200">
                <LuVideo className="w-8 h-8 mb-3" />
                <p className="font-semibold">Video</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailsPage;
