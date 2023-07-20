import React, { useContext, useEffect } from "react";
import { chartTimeContext } from "../pages/Display";
import searchTicker from "../utils/searchTicker";
import { fetchParser } from "../utils/fetchParser";
let TimeIntervalButtons = () => {
  const { setTimeInterval, search, timeInterval, setChartData } =
    useContext(chartTimeContext);

  useEffect(() => {
    const searchIt = async () => {
      try {
        console.log("timeintervalbutton going into searchTicker", timeInterval);
        const response = await searchTicker(search, timeInterval);
        const data = await response.json();
        let calledData = await data[Object.keys(data)[1]];
        let chartData = fetchParser(calledData, timeInterval);
        setChartData({
          labels: chartData.labels,
          datasets: [
            {
              label: ``,
              data: chartData.data,
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        });
      } catch (err) {
        console.error(err);
      }
    };
    if (timeInterval) {
      searchIt();
    }
  }, [timeInterval, search, setChartData]);
  //Button Logic to update our Time
  const timeChanger = async (event) => {
    event.preventDefault();
    console.log(`${event.target.dataset.interval} - was Pushed`);
    console.log("Setting time interval");
    setTimeInterval((prevState) => ({
      ...prevState,
      interval: event.target.dataset.interval,
    }));
  };

  //This is taken from the searchClicker, need to refactor it.

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
