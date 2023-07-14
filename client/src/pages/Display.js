import React, { createContext, useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../utils/data";
// import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import TickerMod from "../components/TickerMod";
import Search from "../components/Search";
import Labels from "../components/Labels";

Chart.register(CategoryScale);

export const TimeIntervalContext = createContext();

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
  const timeChanger = (event) => {
    event.preventDefault();
    setTimeInterval((prevState) => ({
      ...prevState,
      timeInterval: event.target.dataset.interval,
    }));
  };
  //Checking our timeInterval each time it's changed.
  useEffect(() => {
    //Add in a use effect that will update the chart.

    console.log(timeInterval.data);
  }, [timeInterval]);
  return (
    <TimeIntervalContext.Provider value={timeInterval}>
      <div className="flex flex-col py-16 h-max w-4/5 items-center">
        {/* <PieChart chartData={chartData} /> */}
        <h2 style={{ textAlign: "center" }}>Line Chart</h2>
        <LineChart chartData={chartData} />
        <div class="grid grid-cols-1  lg:grid-cols-8 lg:gap-8 w-4/8 py-8">
          <button
            data-interval="1D"
            class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
            onClick={timeChanger}
          >
            1D
          </button>
          <button
            data-interval="5D"
            class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
            onClick={timeChanger}
          >
            5D
          </button>
          <button
            data-interval="1M"
            class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
            onClick={timeChanger}
          >
            1M
          </button>
          <button
            data-interval="6M"
            class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
            onClick={timeChanger}
          >
            6M
          </button>
          <button
            data-interval="YTD"
            class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
            onClick={timeChanger}
          >
            YTD
          </button>
          <button
            data-interval="1Y"
            class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
            onClick={timeChanger}
          >
            1Y
          </button>
          <button
            data-interval="5Y"
            class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
            onClick={timeChanger}
          >
            5Y
          </button>
          <button
            data-interval="Max"
            class="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
            onClick={timeChanger}
          >
            Max
          </button>
        </div>
        <Search />
        <Labels />
        <hr className="divide-slate-400/10 w-3/5 m-4" />
        <TickerMod />
        <TickerMod />
      </div>
    </TimeIntervalContext.Provider>
  );
};

export default Display;
