import React, { useContext } from "react";
import { chartTimeContext } from "../pages/Display";
import { searchTicker } from "../utils/searchTicker";

let TimeIntervalButtons = () => {
  const { setTimeInterval, search } = useContext(chartTimeContext);

  //Button Logic to update our Time
  const timeChanger = (event) => {
    event.preventDefault();

    setTimeInterval((prevState) => ({
      ...prevState,
      interval: event.target.dataset.interval,
    }));
    //This is taken from the searchClicker, need to refactor it.
  };
  return (
    <div className="grid grid-cols-1  lg:grid-cols-8 lg:gap-8 w-4/8 py-8">
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
        data-interval="YTD"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={timeChanger}
      >
        YTD
      </button>
      <button
        data-interval="1Y"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={timeChanger}
      >
        1Y
      </button>
      <button
        data-interval="5Y"
        className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg"
        onClick={timeChanger}
      >
        5Y
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
