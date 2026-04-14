import React, { useState } from "react";
import { useTimeLine } from "../context/TimeLineProvider";
import callImage from "../assets/call.png";
import textImage from "../assets/text.png";
import videoImage from "../assets/video.png";
import { FaArrowRight } from "react-icons/fa";

const TimelinePage = () => {
  const { timeLine } = useTimeLine();

  const [sortingType, setSortingType] = useState("");

  const filterdTimeline = sortingType ? timeLine.filter((item) => item.type === sortingType) : timeLine;

  const getImage = (type) => {
    switch (type) {
      case "Call":
        return callImage;
      case "Text":
        return textImage;
      case "Video":
        return videoImage;
    }
  };

  return (
    <div className="w-7xl mx-auto my-20 space-y-6">
      <h1 className="text-3xl font-bold">TimeLine</h1>
      <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="btn  w-xs flex justify-between">
          Filter timeline {sortingType && `by ${sortingType}`} <FaArrowRight />
        </div>
        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={() => setSortingType("")}>
            <a>All</a>
          </li>
          <li onClick={() => setSortingType("Call")}>
            <a>Call</a>
          </li>
          <li onClick={() => setSortingType("Text")}>
            <a>Text</a>
          </li>
          <li onClick={() => setSortingType("Video")}>
            <a>Video</a>
          </li>
        </ul>
      </div>
      <div className="space-y-4 mt-8">
        {filterdTimeline.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-md shadow-sm">
            <div>
              <img src={getImage(item.type)} alt={item.type} className="w-8 h-8" />
            </div>

            <div>
              <h4 className="font-semibold capitalize">
                {item.type} <span className="text-gray-400">with {item.name}</span>
              </h4>

              <p className="text-gray-400 text-sm">{new Date(item.date).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
