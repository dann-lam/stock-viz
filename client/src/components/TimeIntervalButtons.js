import React from "react";
// import searchFetch from "../utils/searchFetch";
// import { searchParser } from "../utils/searchParser";
import searchUpdater from "../utils/searchUpdater";
// import indicatorUpdater from "../utils/indicatorUpdater";
let TimeIntervalButtons = ({
  setTimeScale,
  search,
  setChartData,
  symbolColor,
  chartData,
  indicatorColor,
  econMode,
  news,
}) => {
  //Button Logic to update our Time
  const timeChanger = async (buttInterval) => {
    await setTimeScale(buttInterval);

    //Wrap our searches in this setTimeScale updater, to ensure that we have the most up to date stuff.
    //We *could* use the useEffec to achieve this effect but the sideffects of updating it is unfortunate.

    //if search is empty, then only set the timeInterval, otherwise, if there is something there, THEN do the search.

    if (search) {
      searchUpdater(
        search,
        buttInterval,
        setChartData,
        symbolColor,
        indicatorColor,
        econMode,
        news,
        chartData
      );
    }

    //Set up a condition, where indicatorUpdater knows whether chartData exists or not. This determines whether we do the indicatorUpdater search.
    //Check to see if chartData.labels exists.
  };

  return (
    <div className="grid grid-cols-1  lg:grid-cols-5 lg:gap-8 w-4/8 py-8">
      <button
        type="button"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={() => timeChanger("1D")}
      >
        1D
      </button>
      <button
        type="button"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={() => timeChanger("5D")}
      >
        5D
      </button>
      <button
        type="button"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={() => timeChanger("1M")}
      >
        1M
      </button>
      <button
        type="button"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={() => timeChanger("6M")}
      >
        6M
      </button>
      <button
        type="button"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={() => timeChanger("Max")}
      >
        Max
      </button>
    </div>
  );
};
export default TimeIntervalButtons;
