import React, { useRef } from "react";

import indicatorIt from "../utils/indicatorIt";
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
      // seteconIndicator((prevVal) => {
      //   console.log("Current econIndicator is: ", prevVal);
      //   console.log("EconIndicator is: ", econIndicator);
      // });
      //Fetch information from the API.
      //indicatorIt is wrapped in the seteconIndicator to ensure that we are using the most up to date value.

      //I should only be calling for indicatorIt if we have chartData and a symbol.
      setEconMode((currVal) => {
        indicatorIt(
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
