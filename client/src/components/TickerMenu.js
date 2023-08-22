import React from "react";
// import { EditText, EditTextarea } from "react-edit-text";
// import "react-edit-text/dist/index.css";
import CheckBox from "./CheckBox";

import { PopoverPicker } from "./ColorPicker";
import Indicator from "./Indicator";
import Search from "./Search";
import newsFetch from "../utils/newsFetch";
// import newsParser from "../utils/newsParser";
// import pointRadiiHandler from "../utils/tooltiplabelHandler";
//Ticker menu - container that holds ticker related modifications for our chart.
import setChartDataUpdater from "../utils/setChartDataUpdater";
const TickerMenu = ({
  setChartData,
  setindicatorColor,
  setsymbolColor,
  symbolColor,
  indicatorColor,
  news,
  setNews,
  search,
  chartData,
  timeScale,
  setSearch,
  econMode,
  setEconMode,
}) => {
  //Update the symbolColor and chart data.
  const updateChartColor = (event) => {
    setsymbolColor(event);
    //Targets specifically the border color, copies over any left overs as well taht we may have missed.

    //Keep everything the same in the chart, but update the border color.
    setChartDataUpdater(setChartData, 0, "borderColor", symbolColor);
  };

  const updateIndicatorColor = (event) => {
    setindicatorColor(event);
    //everything is the same, specifically targets the indicatorColordataset and updates its border color.
    setChartDataUpdater(setChartData, 1, "borderColor", indicatorColor);
  };

  const checkBoxHandler = async () => {
    //Whenever we toggle the button, we change the state of news.isDisplayNews to true or false.
    await setNews((prevData) => ({
      ...prevData,
      isDisplayNews: !prevData.isDisplayNews,
    }));
    // This is bad because we're calling it twice. However, that's fine for now :).
    await setNews((currNews) => {
      //If the button is set to false: turn our displayNews off on the chart.
      if (currNews.isDisplayNews === false) {
        //Turn on pointRadius for the first Dataset,
        //Turn off the 2nd dataset (news Array)
        setChartDataUpdater(setChartData, 0, "pointRadius", 1);
        setChartDataUpdater(setChartData, 2);

        //OLD setChartData, kept just in case.
        // setChartData((prevData) => {
        //   const updatedChartData = {
        //     ...prevData,
        //     datasets: [
        //       { ...prevData.datasets[0], pointRadius: 1 },
        //       { ...prevData.datasets[1] },
        //       {},
        //       ...prevData.datasets.slice(3),
        //     ],
        //   };

        //   return updatedChartData;
        // });
      } else if (
        //If it's ON, and we have newsData, display it.
        currNews.isDisplayNews === true &&
        currNews.newsData.length > 0
      ) {
        setChartDataUpdater(setChartData, 0, "pointRadius");

        //OLD version, kept just in case.

        // setChartData((currNews) => ({
        //   ...currNews,
        //   datasets: [
        //     {
        //       ...currNews.datasets[0],
        //       pointRadius: pointRadiiHandler(currNews),
        //     },
        //     ...currNews.datasets.slice(1),
        //   ],
        // }));
      } else if (
        //If it's ON, and we don't have anything already, go get it.
        currNews.isDisplayNews === true &&
        currNews.newsData.length === 0 &&
        search &&
        chartData.labels
      ) {
        //This else statement only grabs our news information if the button is on, and if the data was not fetched before, and if we have the search term and chartData range.

        newsFetch(search, chartData, setChartData)
          .then(([feed, currNewsArr]) => {
            setNews((prevNews) => {
              const updatedNewsState = {
                ...prevNews,
                newsData: feed,
                currNews: currNewsArr,
              };
              //setChartData uses the most up to date news from the setNews
              setChartDataUpdater(setChartData, 0, "pointRadius");

              // Old Set Chart Data just in case :)

              // setChartData((prevData) => ({
              //   ...prevData,
              //   datasets: [
              //     {
              //       ...prevData.datasets[0],
              //       pointRadius: pointRadiiHandler(prevNews),
              //     },
              //     { ...prevData.datasets[1] },
              //   ],
              // }));

              return updatedNewsState;
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        //A generic catch all in case something bugs out. Currently doesn't do much.
        console.log(
          "Some other condition was hit lol. news, newsData: ",
          currNews.isDisplayNews,
          currNews.newsData
        );
      }
      return currNews;

      //End of our craziness.
    });
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8 w-3/5 py-2 ">
      <div className="flex items-center  justify-center">
        {/* <EditText name="textbox" placeholder="Enter Ticker" /> */}
        <Search
          timeScale={timeScale}
          setChartData={setChartData}
          search={search}
          setSearch={setSearch}
          symbolColor={symbolColor}
          chartData={chartData}
          indicatorColor={indicatorColor}
          econMode={econMode}
          news={news}
        />
      </div>
      <div className="flex items-center  justify-center">
        <PopoverPicker color={symbolColor} onChange={updateChartColor} />
      </div>
      <div className="h-8 flex items-center  justify-center font-thin">
        <Indicator
          timeScale={timeScale}
          chartData={chartData}
          search={search}
          setChartData={setChartData}
          indicatorColor={indicatorColor}
          setEconMode={setEconMode}
        />
      </div>
      <div className="flex items-center  justify-center">
        <PopoverPicker color={indicatorColor} onChange={updateIndicatorColor} />
      </div>
      <div className="flex items-center  justify-center">
        <CheckBox checked={news.isDisplayNews} onChange={checkBoxHandler} />
      </div>
    </div>
  );
};

export default TickerMenu;
