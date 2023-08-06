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

  let smallRadiiSize = 1;

  const pointRadiiHandler = (currNews) => {
    console.log("Is news from pointHandler: ", currNews);
    if (currNews?.isDisplayNews && currNews?.currNews) {
      console.log("Getting news radii!");
      return getNewsRadii(currNews.currNews);
    } else {
      console.log("Returning smallradii size.");
      return smallRadiiSize;
    }
  };

  const getNewsRadii = (newsArr) => {
    const radii = [];
    for (let i = 0; i < newsArr.length; i++) {
      console.log("News arr[i] is: ", newsArr[i]);
      if (newsArr[i] === undefined) {
        radii.push(smallRadiiSize);
      } else {
        radii.push(5);
      }
    }
    return radii;
  };

  const checkBoxHandler = async () => {
    //Whenever we toggle the button, we change the state of isNews.isDisplayNews to true or false.
    await setisNews((prevData) => ({
      ...prevData,
      isDisplayNews: !prevData.isDisplayNews,
    }));
    // This is bad because we're calling it twice. However, that's fine for now :).
    await setisNews((currNews) => {
      console.log("Curr news from the set: ", currNews);
      if (currNews.isDisplayNews === false) {
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
      } else if (
        currNews.isDisplayNews === true &&
        currNews.newsData.length > 0
      ) {
        console.log(
          "Display news is set to true, and length is greater than 0."
        );
        //This else if controls drawing or undrawing our data onto the chart. if we have the information.
        // if (chartData.labels[chartData.labels.length - 1]) {
        //   let lastDate = chartData.labels[chartData.labels.length - 1];
        //   lastDate = lastDate.getTime();
        //   //set chart Data
        // }
        //fetch newsData and format it to whatever timeInterval is involved.
        //Then set newsData to what we fetched.\
        //Set the chart Data
      } else if (
        currNews.isDisplayNews === true &&
        currNews.newsData.length === 0 &&
        search &&
        chartData.labels
      ) {
        //This else statement only grabs our news information if the button is on, and if the data was not fetched before, and if we have the search term and chartData range.
        console.log("Fetching newsData");
        newsFetch(search, chartData, setChartData)
          .then(([feed, currNewsArr]) => {
            setisNews((prevNews) => ({
              ...prevNews,
              newsData: feed,
              currNews: currNewsArr,
            }));
            setisNews((prevNews) => ({
              ...prevNews
            }))
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        console.log("setting chartData");
        setChartData((prevData) => ({
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              pointRadius: pointRadiiHandler(currNews),
            },
            { ...prevData.datasets[1] },
          ],
        }));
      } else {
        //A generic catch all in case something bugs out. Currently doesn't do much.
        console.log(
          "Some other condition was hit lol. isNews, newsData: ",
          currNews.isDisplayNews,
          currNews.newsData
        );
      }
      return currNews;

      //End of our craziness.
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
        <CheckBox checked={isNews.isDisplayNews} onChange={checkBoxHandler} />
      </div>
    </div>
  );
};

export default TickerMod;
