import React, { createContext, useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/data";
// import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import TickerMod from "../components/TickerMod";
import Search from "../components/Search";
import Labels from "../components/Labels";
import TimeIntervalButtons from "../components/TimeIntervalButtons";
// import { Observable } from "rxjs";

Chart.register(CategoryScale);

export const chartTimeContext = createContext();

const Display = () => {
  //timeInterval is mostly being used to update our API call.
  const [timeInterval, setTimeInterval] = useState({
    interval: "1D",
    data: Data,
  });

  //chartData displays our chart, currently accepts data returned from our API call.

  const [chartData, setChartData] = useState({
    labels: timeInterval.data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: timeInterval.data.map((data) => data.userGain),
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

  //Make a click handler for our buttons to set timeInterval.

  //Checking our timeInterval each time it's changed.
  useEffect(() => {
    //Add in a use effect that will update the chart.
    //Set a timer here to grab our data.

    // let blah = foo.subscribe();

    console.log(timeInterval.data);
  }, [timeInterval, chartData]);

  return (
    <div className="flex flex-col py-16 h-max w-4/5 items-center">
      {/* <PieChart chartData={chartData} /> */}
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      {/* Time interval context provider is wrapped around relevent components */}
      <chartTimeContext.Provider
        value={{ timeInterval, setTimeInterval, chartData, setChartData }}
      >
        <LineChart chartData={chartData} />
        <TimeIntervalButtons />
        <Search />
        <Labels />
        <hr className="divide-slate-400/10 w-3/5 m-4" />
        <TickerMod />
        <TickerMod />
      </chartTimeContext.Provider>
    </div>
  );
};

export default Display;
