import React from "react";
import { useTimeLine } from "../context/TimeLineProvider";
import callImage from "../assets/call.png";
import textImage from "../assets/text.png";
import videoImage from "../assets/video.png";

const TimelinePage = () => {
  const { timeLine } = useTimeLine();
  console.log(timeLine);

  const getImage = (type) => {
    switch (type) {
      case "call":
        return callImage;
      case "text":
        return textImage;
      case "video":
        return videoImage;
    }
  };

  return (
    <div className="w-7xl mx-auto my-20 space-y-6">
      <h1 className="text-3xl font-bold">TimeLine</h1>
      <div className="space-y-4">
        {timeLine.map((item) => (
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
