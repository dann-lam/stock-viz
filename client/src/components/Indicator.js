import React, { useContext } from "react";

import { chartTimeContext } from "../App";

import indicatorIt from "../utils/indicatorIt";
const Indicator = () => {
  const {
    timeInterval,
    chartData,
    search,
    setChartData,
    indicatorColor,
    seteconIndicator,
    setTestFuck,
  } = useContext(chartTimeContext);
  const optionHandler = async (event) => {
    event.preventDefault();
    if (!(event.target.value === "Select")) {
      setTestFuck(event.target.value);
      // seteconIndicator((prevVal) => {
      //   console.log("Current econIndicator is: ", prevVal);
      //   console.log("EconIndicator is: ", econIndicator);
      // });
      //Fetch information from the API.
      //indicatorIt is wrapped in the seteconIndicator to ensure that we are using the most up to date value.

      //I should only be calling for indicatorIt if we have chartData and a symbol.

      setTestFuck((prevVal) => {
        if (search && chartData.labels.length > 0) {
          indicatorIt(
            prevVal,
            search,
            timeInterval,
            chartData,
            indicatorColor,
            setChartData
          );
        }
        return prevVal;
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
