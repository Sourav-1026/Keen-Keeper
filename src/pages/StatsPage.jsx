import React from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useTimeLine } from "../context/TimeLineProvider";

const StatsPage = () => {
  const { timeLine } = useTimeLine();

  const counts = {
    call: 0,
    text: 0,
    video: 0,
  };

  timeLine.forEach((item) => {
    if (item.type === "call") {
      counts.call++;
    } else if (item.type === "text") {
      counts.text++;
    } else if (item.type === "video") {
      counts.video++;
    }
  });

  const data = [
    { name: "Call", value: counts.call, fill: "#244D3F" },
    { name: "Text", value: counts.text, fill: "#7E35E1" },
    { name: "Video", value: counts.video, fill: "#37A163" },
  ];

  return (
    <div className="w-7xl mx-auto my-20 space-y-6">
      <h1 className="text-5xl font-bold">Friendship Analytics</h1>
      <div className="border border-gray-200 shadow-md rounded-md p-5 space-y-6">
        <h5 className="text-lg text-[#244D3F] font-semibold">By Interaction Type</h5>
        <PieChart style={{ width: "60%", margin: "auto", maxWidth: "300px", maxHeight: "80vh", aspectRatio: 1 }} responsive>
          <Pie data={data} innerRadius="80%" outerRadius="100%" cornerRadius="50%" fill="#8884d8" paddingAngle={5} dataKey="value" isAnimationActive={true} />
          <Tooltip />
          <br />
          <Legend wrapperStyle={{ paddingTop: "20px" }} />
        </PieChart>
      </div>
    </div>
  );
};

export default StatsPage;
