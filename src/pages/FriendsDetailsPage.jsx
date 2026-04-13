import React from "react";
import { useParams, useRouteLoaderData } from "react-router";

const FriendsDetailsPage = () => {
  const { id } = useParams();
  const friends = useRouteLoaderData("root");

  const expectedFriend = friends.find((friend) => friend.id === parseInt(id));
  console.log(expectedFriend);

  return (
    <div className="w-7xl mx-auto">
      <div className="dib-main flex justify-between">
        <div className="dib-left">
          <div className="dib up">
            <div className="shadow-md border border-gray-200 rounded-md bg-base-200 flex flex-col justify-center items-center p-5 space-y-2.5">
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
              <p>{expectedFriend.bio}</p>
              <p>Prefered: Mail</p>
            </div>
          </div>
          <div className="dib bottom shadow-md rounded-md border border-gray-200">
            <div className="">
              <button className="btn">Snooze 2 weeks</button>
            </div>
            <div className="">
              <button className="btn">Archive</button>
            </div>
            <div className="">
              <button className="btn">Delete</button>
            </div>
          </div>
        </div>
        <div className="dib-right">
          <div className="dib-up shadow-md rounded-md border border-gray-200">
            <div className="">
              <span>0</span>
              <p>Days Since Contact</p>
            </div>
            <div className="">
              <span>0</span>
              <p>Goal (Days)</p>
            </div>
            <div className="">
              <span>0</span>
              <p>Next Due</p>
            </div>
          </div>
          <div className="dib-middle flex justify-between shadow-md rounded-md border border-gray-200">
            <div className="">
              <h5>RelationShip Goal</h5>
              <p>Connect Every 30 days</p>
              <button className="btn">Edit</button>
            </div>
          </div>
          <div className="dib-bottom shadow-md rounded-md border border-gray-200">
            <h5>Quick Check In</h5>
            <div className="">
              <div className="">
                <p>Icon</p>
                <p>Call</p>
              </div>
              <div className="">
                <p>Icon</p>
                <p>Call</p>
              </div>
              <div className="">
                <p>Icon</p>
                <p>Call</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetailsPage;
