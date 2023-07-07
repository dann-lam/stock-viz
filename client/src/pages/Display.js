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
  //items-center justify-center justify-items-center self-center
  return (
    <div className="flex flex-col py-16 h-max w-4/5 items-center">
      {/* <PieChart chartData={chartData} /> */}
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <LineChart chartData={chartData} />
      <Search />
      <Labels />
      <hr className="divide-slate-400/10 w-3/5 m-4" />
      <TickerMod />
      <TickerMod />
    </div>
  );
};

export default Display;
