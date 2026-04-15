import React from "react";
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";
import { useTimeLine } from "../context/TimeLineProvider";

const StatsPage = () => {
  const { timeLine } = useTimeLine();

  const counts = {
    call: 0,
    text: 0,
    video: 0,
  };

  timeLine.forEach((item) => {
    if (item.type === "Call") {
      counts.call++;
    } else if (item.type === "Text") {
      counts.text++;
    } else if (item.type === "Video") {
      counts.video++;
    }
  });

  const data = [
    { name: "Call", value: counts.call, fill: "#244D3F" },
    { name: "Text", value: counts.text, fill: "#7E35E1" },
    { name: "Video", value: counts.video, fill: "#37A163" },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 md:my-16 lg:my-20 px-4 space-y-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Friendship Analytics</h1>

      <div className="border border-gray-200 shadow-md rounded-md p-4 md:p-5 space-y-6">
        <h5 className="text-base md:text-lg text-[#244D3F] font-semibold">By Interaction Type</h5>

        <div className="w-full flex justify-center">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "300px", // keeps lg same
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="50%" // unchanged
              paddingAngle={5} // unchanged
              fill="#8884d8"
              dataKey="value"
              isAnimationActive={true}
            />
            <Tooltip />
            <Legend
              wrapperStyle={{
                paddingTop: "12px",
              }}
            />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
