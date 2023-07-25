import React, { useContext } from "react";
import indicatorTicker from "../utils/indicatorTicker";
import { chartTimeContext } from "../App";
import { indicatorParser } from "../utils/indicatorParser";
const Indicator = () => {
  const { timeInterval, chartData, search, setChartData, indicatorColor } =
    useContext(chartTimeContext);
  const optionHandler = async (event) => {
    event.preventDefault();
    if (!(event.target.value === "Select")) {
      let currVal = event.target.value;
      //Fetch information from the API.
      const response = await indicatorTicker(currVal, search, timeInterval);
      const data = await response.json();
      let calledData = data[Object.keys(data)[1]];
      let lastDate = chartData.labels[chartData.labels.length - 1];
      lastDate = lastDate.getTime();
      console.log("lastdate is: ", lastDate);
      let formattedData = indicatorParser(calledData, timeInterval, lastDate);
      console.log("formattedData: ", formattedData);
      let newObj = {
        label: `${currVal}`,
        data: formattedData,
        pointRadius: 1,
        tension: 0.4,
        borderColor: indicatorColor,
      };
      const updatedDatasets = [...chartData.datasets];
      updatedDatasets[1] = newObj;

      // Update the state with the new array of datasets
      setChartData((prevData) => ({
        ...prevData,
        datasets: updatedDatasets,
      }));
      // setChartData(
      //   (prevData) => (
      //     {
      //       ...prevData,
      //     }

      //   )
      // );
      //Once we get bet fetched, and then we format our returns, wet set the
      // chart data, to be on the second slot of our stuff.
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
