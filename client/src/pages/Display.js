import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/data";
// import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import TickerMod from "../components/TickerMod";
import Search from "../components/Search";
import Labels from "../components/Labels";

Chart.register(CategoryScale);

const Display = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="flex items-center justify-center flex-col py-16">
      {/* <PieChart chartData={chartData} /> */}
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <LineChart chartData={chartData} />
      <Search />
      <Labels />
      <TickerMod />
    </div>
  );
};

export default Display;
