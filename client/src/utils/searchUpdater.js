import searchFetch from "./searchFetch";
import indicatorUpdater from "./indicatorUpdater";
import { searchParser } from "./searchParser";
import pointRadiiHandler from "./tooltiplabelHandler";

//timeScale is fed into our API request
//Handle button click

const searchUpdater = async (
  search,
  timeScale,
  setChartData,
  symbolColor,
  indicatorColor,
  econMode,
  news,
  chartData
) => {
  try {
    const response = await searchFetch(search, timeScale);

    const data = await response.json();

    //response returns a promise
    //This is accessing our data's returned values based on the second key.

    let calledData = data[Object.keys(data)[1]];

    //Takes our data and turns it into something the chart can see.
    let searchData = searchParser(calledData, timeScale);
    // Update the react variable that controls the chart.

    let indicatorChecker = async (newChartData) => {
      if (econMode === "EMA" || econMode === "SMA") {
        await indicatorUpdater(
          econMode,
          search,
          timeScale,
          newChartData,
          indicatorColor,
          setChartData
        );
      } else {
        return;
        // console.log("econMode set to something else.", econMode);
      }
    };

    await setChartData((currData) => {
      let updatedData = {
        ...currData,
        labels: searchData.labels,
        datasets: [
          {
            ...currData.datasets[0],
            label: `Closing Price`,
            data: searchData.data.map((item) => item.price),
            pointRadius: pointRadiiHandler(news),
            tension: 0.4,
            borderColor: symbolColor,
          },
          {
            ...currData.datasets[1],
          },
          { ...currData.datasets[2] },
        ],
      };
      indicatorChecker(updatedData);
      return updatedData;
    });
  } catch (err) {
    console.error(err);
  }
};

export default searchUpdater;
