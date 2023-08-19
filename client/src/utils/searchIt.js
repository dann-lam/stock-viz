import searchTicker from "./searchTicker";
import indicatorIt from "./indicatorIt";
import { fetchParser } from "./fetchParser";
import pointRadiiHandler from "./tooltiplabelHandler";

//timeInterval is fed into our API request
//Handle button click

const searchIt = async (
  search,
  timeInterval,
  setChartData,
  symbolColor,
  indicatorColor,
  econIndicator,
  isNews,
  chartData
) => {
  try {
    // console.log("Looking for undefined: ", search, timeInterval, setChartData);
    const response = await searchTicker(search, timeInterval);

    const data = await response.json();

    //response returns a promise
    //This is accessing our data's returned values based on the second key.

    let calledData = data[Object.keys(data)[1]];

    //Takes our data and turns it into something the chart can see.
    let searchData = fetchParser(calledData, timeInterval);
    // Update the react variable that controls the chart.

    let indicatorChecker = async (newChartData) => {
      if (econIndicator === "EMA" || econIndicator === "SMA") {
        await indicatorIt(
          econIndicator,
          search,
          timeInterval,
          newChartData,
          indicatorColor,
          setChartData
        );
        console.log("Exited out indicatorIt");
      } else {
        console.log("econIndicator set to something else.", econIndicator);
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
            pointRadius: pointRadiiHandler(isNews),
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
      console.log("updated Data is: ", updatedData)
      return updatedData;
    });
    // console.log("CurrData inside chartData is: ", currData);
    // indicatorChecker(currData);
  } catch (err) {
    console.error(err);
  }
};

export default searchIt;
