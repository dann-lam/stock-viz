import React, { useContext, useRef } from "react";
// import { EditText, EditTextarea } from "react-edit-text";
// import "react-edit-text/dist/index.css";
import CheckBox from "./CheckBox";
import { chartTimeContext } from "../App";

import { PopoverPicker } from "./ColorPicker";
import Indicator from "./Indicator";
import Search from "./Search";
import newsFetch from "../utils/newsFetch";
import newsParser from "../utils/newsParser";
let newsData;

const TickerMod = () => {
  const {
    setChartData,
    setindicatorColor,
    setsymbolColor,
    symbolColor,
    indicatorColor,
    isNews,
    setisNews,
    search,
    chartData,
  } = useContext(chartTimeContext);

  //Update the symbolColor and chart data.
  const updateChartColor = (event) => {
    setsymbolColor(event);
    //Targets specifically the border color, copies over any left overs as well taht we may have missed.
    setChartData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          borderColor: symbolColor,
        },
        ...prevData.datasets.slice(1),
      ],
    }));
  };
  const updateIndicatorColor = (event) => {
    setindicatorColor(event);
    setChartData((prevData) => ({
      ...prevData,
      datasets: [
        { ...prevData.datasets[0] },
        { ...prevData.datasets[1], borderColor: indicatorColor },
        ...prevData.datasets.slice(2),
      ],
    }));
  };

  const checkBoxHandler = async () => {
    await setisNews(!isNews);
    await setisNews((currNews) => {
      if (currNews === false) {
        //setChartData, with the third dataset being empty.
        setChartData((prevData) => ({
          ...prevData,
          datasets: [
            { ...prevData.datasets[0] },
            { ...prevData.datasets[1] },
            {},
            ...prevData.datasets.slice(3),
          ],
        }));
      } else if (currNews === true && newsData) {
        if (chartData.labels[chartData.labels.length - 1]) {
          let lastDate = chartData.labels[chartData.labels.length - 1];
          lastDate = lastDate.getTime();
          //set chart Data
        }

        //fetch newsData and format it to whatever timeInterval is involved.
        //Then set newsData to what we fetched.\
        //Set the chart Data
      } else if (currNews === true && !newsData && search && chartData.labels) {
        newsData = newsFetch(
          search,
          chartData,
          setChartData,
        );

        //take whatever was saved to newsData and just format it to whatever the current timeInterval is.
        //Set the chart data to whatever that was.
      } else {
        console.log(
          "Some other condition was hit lol. isNews, newsData: ",
          currNews,
          newsData
        );
      }
      return currNews;
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 w-3/5 py-2 ">
      <div className="flex items-center  justify-center">
        {/* <EditText name="textbox" placeholder="Enter Ticker" /> */}
        <Search />
      </div>
      <div className="flex items-center  justify-center">
        <PopoverPicker color={symbolColor} onChange={updateChartColor} />
      </div>
      <div className="h-8 flex items-center  justify-center font-thin">
        <Indicator />
      </div>
      <div className="flex items-center  justify-center">
        <PopoverPicker color={indicatorColor} onChange={updateIndicatorColor} />
      </div>
      <div className="flex items-center  justify-center">
        <CheckBox checked={isNews} onChange={checkBoxHandler} />
      </div>
    </div>
  );
};

export default TickerMod;
