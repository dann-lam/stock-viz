import React, { useContext, useEffect } from "react";
import { chartTimeContext } from "../pages/Display";
import searchTicker from "../utils/searchTicker";
import { fetchParser } from "../utils/fetchParser";

let TimeIntervalButtons = () => {
  const { setTimeInterval, search, timeInterval, setChartData, chartData } =
    useContext(chartTimeContext);
  useEffect(() => {
    //Add in a use effect that will update the chart.
    //Set a timer here to grab our data.
    // let blah = foo.subscribe();
  }, [timeInterval, search, chartData, setTimeInterval, setChartData]);
  //Button Logic to update our Time
  const timeChanger = async (event) => {
    event.preventDefault();
    try {
      //This is taken from the searchClicker, need to refactor it.
      const response = await searchTicker(search, timeInterval);

      const data = await response.json();
      console.log("Data is: ");
      console.log(data);
      //response returns a promise
      //This is accessing our data's returned values based on the second key.

      let calledData = data[Object.keys(data)[1]];
      //Takes our data and turns it into something the chart can see.
      let chartData = fetchParser(calledData, timeInterval);
      // Update the react variable that controls the chart.
      await setChartData((prevData) => ({
        ...prevData,
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
      }));

      setTimeInterval((prevState) => ({
        ...prevState,
        interval: event.target.dataset.interval,
      }));
    } catch (err) {
      console.error(err);
    }
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
