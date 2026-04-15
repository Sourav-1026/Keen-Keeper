import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FreindsSection = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/freinds.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-6 mb-20 px-4">
      <h3 className="text-xl sm:text-2xl font-bold">Your Friends</h3>

      {loading ? (
        <div className="w-full h-[50vh] flex justify-center items-center">
          <span className="loading loading-spinner text-success"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {friends.map((friend, ind) => (
            <Link
              to={`/friend/${friend.id}`}
              key={ind}
              className="shadow-md border border-gray-200 rounded-md bg-base-200 flex flex-col items-center p-4 sm:p-5 space-y-2.5 hover:shadow-lg transition"
            >
              {/* Image */}
              <img className="rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover" src={friend.picture} alt="" />

              {/* Name */}
              <h2 className="text-base sm:text-lg font-semibold text-center">{friend.name}</h2>

              {/* Days */}
              <p className="text-gray-400 text-sm">{friend.days_since_contact}d ago</p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {friend.tags.map((t, i) => (
                  <div key={i} className="badge bg-[#CBFADB] text-[#244D3F] text-xs sm:text-sm">
                    {t}
                  </div>
                ))}
              </div>

              {/* Status */}
              <div className={`badge text-white text-xs sm:text-sm ${friend.status == "Almost due" ? "bg-[#EFAD44]" : friend.status == "Overdue" ? "bg-[#EF4444]" : "bg-[#244D3F]"}`}>
                {friend.status}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FreindsSection;
