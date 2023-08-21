import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
// import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import TickerMod from "../components/TickerMod";
import Labels from "../components/Labels";
import TimeIntervalButtons from "../components/TimeIntervalButtons";
import Price from "../components/Price";
import "chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm";
import Search from "../components/Search";
// import { Observable } from "rxjs";

Chart.register(CategoryScale);
//Moved contex to top level
// export const chartTimeContext = createContext();

const Display = () => {
  //timeInterval, stores which timeInterval to API call/render on chart.
  const [timeInterval, setTimeInterval] = useState("1D");
  //
  const [isNews, setisNews] = useState({
    isDisplayNews: false,
    newsData: [],
    currNews: [],
  });
  //Controls the color of the line on chart.
  const [econIndicator, setEconIndicator] = useState("Select");
  const [symbolColor, setsymbolColor] = useState("#AFC787");
  //If an economic indicator is chosen, this controls the color of it displayed on the chart.
  const [indicatorColor, setindicatorColor] = useState("#0000FF");
  //Search is simply a string that stores the symbol.
  const [search, setSearch] = useState("");
  //Stores chartData to be rendered w/ chartJS.
  const [chartData, setChartData] = useState({
    // labels: timeInterval.data.map((data) => data.year),
    labels: [],
    datasets: [],
  });

  // useEffect(() => {
  //   console.log("useeffect from display Fired.");
  // }, []);
  //Checking our timeInterval each time it's changed.
  // {chartData.datasets[0].data[0] !== undefined ? (
  //   <Price chartData={chartData} />
  // ) : null}
  // let priceRenderer = ({ chartData }) => {
  //   if (chartData?.datasets[0]?.data[0]) {
  //     console.log("True");
  //     return true;
  //   } else {
  //     console.log("False");
  //     return false;
  //   }
  // };
  return (
    <div className="flex flex-col py-16 h-max w-4/5 items-center">
      <h2 style={{ textAlign: "center" }}> </h2>
      {chartData?.datasets[0]?.data[0] ? (
        <>
          <Price chartData={chartData} />
          <LineChart
            chartData={chartData}
            timeInterval={timeInterval}
            search={search}
            isNews={isNews}
          />
          <TimeIntervalButtons
            setTimeInterval={setTimeInterval}
            search={search}
            setChartData={setChartData}
            symbolColor={symbolColor}
            chartData={chartData}
            indicatorColor={indicatorColor}
            econIndicator={econIndicator}
            isNews={isNews}
          />

          <Labels />
          <hr className="divide-slate-400/10 w-3/5 m-4" />
          <TickerMod
            setChartData={setChartData}
            setindicatorColor={setindicatorColor}
            setsymbolColor={setsymbolColor}
            symbolColor={symbolColor}
            indicatorColor={indicatorColor}
            isNews={isNews}
            setisNews={setisNews}
            search={search}
            chartData={chartData}
            timeInterval={timeInterval}
            setSearch={setSearch}
            econIndicator={econIndicator}
            setEconIndicator={setEconIndicator}
          />
        </>
      ) : (
        <div className="divide-slate-400/10 w-2/5 m-4">
          <Search
            timeInterval={timeInterval}
            setChartData={setChartData}
            search={search}
            setSearch={setSearch}
            symbolColor={symbolColor}
            chartData={chartData}
            indicatorColor={indicatorColor}
            econIndicator={econIndicator}
            isNews={isNews}
          />
          <TimeIntervalButtons
            setTimeInterval={setTimeInterval}
            search={search}
            setChartData={setChartData}
            symbolColor={symbolColor}
            chartData={chartData}
            indicatorColor={indicatorColor}
            econIndicator={econIndicator}
            isNews={isNews}
          />
        </div>
      )}
    </div>
  );
};

export default Display;
