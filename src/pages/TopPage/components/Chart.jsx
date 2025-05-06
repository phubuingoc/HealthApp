import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getChartData } from "../../../api/chartApi";


export default function Chart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getChartData();
      setChartData(data);
    };
    fetchData();
  }, []);
  return (
    <div className="w-full h-full bg-main-gray-200 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
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
