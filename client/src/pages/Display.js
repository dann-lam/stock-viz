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
  //timeScale, stores which timeScale to API call/render on chart.
  const [timeScale, setTimeScale] = useState("1D");
  //
  const [news, setNews] = useState({
    isDisplayNews: false,
    newsData: [],
    currNews: [],
  });
  //Controls the color of the line on chart.
  const [econMode, setEconMode] = useState("Select");
  const [symbolColor, setsymbolColor] = useState("#AFC787");
  //If an economic indicator is chosen, this controls the color of it displayed on the chart.
  const [indicatorColor, setindicatorColor] = useState("#0000FF");
  //Search is simply a string that stores the symbol.
  const [search, setSearch] = useState("");
  //Stores chartData to be rendered w/ chartJS.
  const [chartData, setChartData] = useState({
    // labels: timeScale.data.map((data) => data.year),
    labels: [],
    datasets: [],
  });

  return (
    <div className="flex flex-col py-16 h-max w-4/5 items-center">
      <h2 style={{ textAlign: "center" }}> </h2>
      {chartData?.datasets[0]?.data[0] ? (
        <>
          <Price chartData={chartData} />
          <LineChart
            chartData={chartData}
            timeScale={timeScale}
            search={search}
            news={news}
          />
          <TimeIntervalButtons
            setTimeScale={setTimeScale}
            search={search}
            setChartData={setChartData}
            symbolColor={symbolColor}
            chartData={chartData}
            indicatorColor={indicatorColor}
            econMode={econMode}
            news={news}
          />

          <Labels />
          <hr className="divide-slate-400/10 w-3/5 m-4" />
          <TickerMod
            setChartData={setChartData}
            setindicatorColor={setindicatorColor}
            setsymbolColor={setsymbolColor}
            symbolColor={symbolColor}
            indicatorColor={indicatorColor}
            news={news}
            setNews={setNews}
            search={search}
            chartData={chartData}
            timeScale={timeScale}
            setSearch={setSearch}
            econMode={econMode}
            setEconMode={setEconMode}
          />
        </>
      ) : (
        <div className="divide-slate-400/10 w-2/5 m-4">
          <Search
            timeScale={timeScale}
            setChartData={setChartData}
            search={search}
            setSearch={setSearch}
            symbolColor={symbolColor}
            chartData={chartData}
            indicatorColor={indicatorColor}
            econMode={econMode}
            news={news}
          />
          <TimeIntervalButtons
            setTimeScale={setTimeScale}
            search={search}
            setChartData={setChartData}
            symbolColor={symbolColor}
            chartData={chartData}
            indicatorColor={indicatorColor}
            econMode={econMode}
            news={news}
          />
        </div>
      )}
    </div>
  );
};

export default Display;
