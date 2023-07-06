import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    //chart-container shadow-lg py-8 px-8 w-4/5 py-8 px-8 h-80
    <div className="chart-container shadow-lg py-8 px-8 h-80 rounded-lg">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
          responsive: true,
          maintainAspectRatio: true,
        }}
        className="h-full"
      />
    </div>
  );
}
export default LineChart;
