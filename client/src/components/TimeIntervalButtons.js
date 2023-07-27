import React, { useContext, useEffect } from "react";
import { chartTimeContext } from "../App";
// import searchTicker from "../utils/searchTicker";
// import { fetchParser } from "../utils/fetchParser";
import searchIt from "../utils/searchIt";
import indicatorIt from "../utils/indicatorIt";
let TimeIntervalButtons = () => {
  const {
    setTimeInterval,
    search,
    timeInterval,
    setChartData,
    symbolColor,
    chartData,
    indicatorColor,
    testFuck,
    setTestFuck,
  } = useContext(chartTimeContext);

  useEffect(() => {
    // Create a debouncer for our memorizedSearchIt
    //Upon
    if (timeInterval) {
      console.log("useEffect from timeINtervalButton firing: ", timeInterval);
    } else {
      return console.log("No search or timeInterval found.");
    }
  }, [timeInterval]);
  //Button Logic to update our Time
  const timeChanger = async (event) => {
    event.preventDefault();
    console.log(`${event.target.dataset.interval} - was Pushed`);
    console.log("Setting time interval");
    setTimeInterval((prevState) => ({
      ...prevState,
      interval: event.target.dataset.interval,
    }));
    //Wrap our searches in this setTimeInterval updater, to ensure that we have the most up to date stuff.
    //We *could* use the useEffec to achieve this effect but the sideffects of updating it is unfortunate.

    //if search is empty, then only set the timeInterval, otherwise, if there is something there, THEN do the search.
    if (search) {
      setTimeInterval((currState) => {
        searchIt(search, currState, setChartData, symbolColor);
      });
    }
    if (
      chartData.labels.length > 0 &&
      (testFuck === "SMA" || testFuck === "EMA")
    ) {
      indicatorIt(
        testFuck,
        search,
        timeInterval,
        chartData,
        indicatorColor,
        setChartData
      );
    }
    //Set up a condition, where indicatorIt knows whether chartData exists or not. This determines whether we do the indicatorIt search.
    //Check to see if chartData.labels exists.
  };

  //This is taken from the searchClicker, need to refactor it.

  return (
    <div className="grid grid-cols-1  lg:grid-cols-5 lg:gap-8 w-4/8 py-8">
      <button
        data-interval="1D"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={timeChanger}
      >
        1D
      </button>
      <button
        data-interval="5D"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={timeChanger}
      >
        5D
      </button>
      <button
        data-interval="1M"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={timeChanger}
      >
        1M
      </button>
      <button
        data-interval="6M"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={timeChanger}
      >
        6M
      </button>
      <button
        data-interval="Max"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={timeChanger}
      >
        Max
      </button>
    </div>
  );
};
export default TimeIntervalButtons;
