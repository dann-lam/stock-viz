import React, { useContext, useEffect } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
// import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import TickerMod from "../components/TickerMod";
import Labels from "../components/Labels";
import TimeIntervalButtons from "../components/TimeIntervalButtons";
import { chartTimeContext } from "../App";
import "chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm";
// import { Observable } from "rxjs";

Chart.register(CategoryScale);
//Moved contex to top level
// export const chartTimeContext = createContext();

const Display = () => {
  const { search, timeInterval, symbolColor, chartData, } =
    useContext(chartTimeContext);

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

      <LineChart chartData={chartData} />
      <TimeIntervalButtons />

      <Labels />
      <hr className="divide-slate-400/10 w-3/5 m-4" />
      <TickerMod />
    </div>
  );
};

export default Display;
