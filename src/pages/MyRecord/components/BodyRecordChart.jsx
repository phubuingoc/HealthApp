import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { mockChartData } from "../../../data/mockChartData";


export default function BodyRecordChart() {
  return (
    <div className="w-full h-[305px] bg-main-gray-200">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mockChartData}>
          <XAxis dataKey="month" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="value1" stroke="#00FFE0" strokeWidth={2} />
          <Line type="monotone" dataKey="value2" stroke="#FFCC21" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    
  );
}
