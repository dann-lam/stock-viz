import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container w-2/5 shadow-lg py-8 px-8 border-zinc-900 rounded-lg border-0">
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
      />
    </div>
  );
}
export default LineChart;
