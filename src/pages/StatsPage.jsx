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
    <div className="max-w-7xl mx-auto my-10 sm:my-16 lg:my-20 px-4 space-y-6">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center sm:text-left">Friendship Analytics</h1>

      {/* Card */}
      <div className="border border-gray-200 shadow-md rounded-md p-4 sm:p-6 space-y-6">
        <h5 className="text-base sm:text-lg text-[#244D3F] font-semibold text-center sm:text-left">By Interaction Type</h5>

        {/* Chart */}
        <div className="w-full h-62.5 sm:h-75 md:h-87.5">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} innerRadius="60%" outerRadius="90%" cornerRadius={10} fill="#8884d8" paddingAngle={5} dataKey="value" isAnimationActive={true} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
