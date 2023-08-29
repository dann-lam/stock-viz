import React, { useRef } from "react";

import indicatorUpdater from "../utils/indicatorUpdater";
const Indicator = ({
  timeScale,
  chartData,
  search,
  setChartData,
  indicatorColor,
  setEconMode,
}) => {
  const emaSelectRef = useRef();

  const optionHandler = async () => {
    if (!(emaSelectRef.current.value === "Select")) {
      await setEconMode(emaSelectRef.current.value);
      //If an option other an select is selected, update our econMode to what was selected, which is known by useRef.

      //Then, use what was just selected and update the indicator and our chart.
      setEconMode((currVal) => {
        indicatorUpdater(
          currVal,
          search,
          timeScale,
          chartData,
          indicatorColor,
          setChartData
        );
        return currVal;
      });
    } else {
      //If it's still select, do nothing.
      return;
    }
  };

  return (
    <div>
      <select
        name="econIndicator"
        id="econIndicator"
        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm font-thin shadow-lg"
        onChange={optionHandler}
        ref={emaSelectRef}
      >
        <option value="Select" className="sm:text-sm font-thin">
          Please select
        </option>
        <option value="EMA" className="sm:text-sm font-thin">
          EMA
        </option>
        <option value="SMA" className="sm:text-sm font-thin">
          SMA
        </option>
      </select>
    </div>
  );
};

export default Indicator;
