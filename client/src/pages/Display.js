import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
// import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import TickerMod from "../components/TickerMod";
import Labels from "../components/Labels";
import TimeIntervalButtons from "../components/TimeIntervalButtons";
import "chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm";
// import { Observable } from "rxjs";

Chart.register(CategoryScale);
//Moved contex to top level
// export const chartTimeContext = createContext();

const Display = ({
  search,
  timeInterval,
  symbolColor,
  chartData,
  setChartData,
  isNews,
  setTimeInterval,
  indicatorColor,
  econIndicator,
  setindicatorColor,
  setsymbolColor,
  setisNews,
  setSearch,
  setEconIndicator,
}) => {
  //Checking our timeInterval each time it's changed.

  // useEffect(() => {
  //   //Add in a use effect that will update the chart.
  //   //Set a timer here to grab our data.
  //   // let blah = foo.subscribe();
  //   console.log("useEffect: timeInterval, chartData, search, symbolcolor");
  //   console.log(timeInterval, chartData, search, symbolColor);
  // }, [timeInterval, chartData, search, symbolColor]);

  return (
    <div className="flex flex-col py-16 h-max w-4/5 items-center">
      <h2 style={{ textAlign: "center" }}> </h2>

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
    </div>
  );
};

export default Display;
