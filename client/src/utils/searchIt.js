import searchTicker from "./searchTicker";
import indicatorIt from "./indicatorIt";
import { fetchParser } from "./fetchParser";

//timeInterval is fed into our API request
//Handle button click
const searchIt = async (
  search,
  timeInterval,
  setChartData,
  symbolColor,
  indicatorColor,
  econIndicator
) => {
  try {
    console.log("Looking for undefined: ", search, timeInterval, setChartData);
    const response = await searchTicker(search, timeInterval);
    console.log("Response is: ", response);
    const data = await response.json();
    console.log("Data is: ", data);
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
          ...prevData.datasets[0],
          label: `Closing Price`,
          data: chartData.data,
          pointRadius: 2,
          tension: 0.4,
          borderColor: symbolColor,
        },
        {
          ...prevData.datasets[1],
        },
        { ...prevData.datasets[2] },
      ],
    }));

    //If econIndicator is updated, then we should also update our indicator dataset.
    if (econIndicator === "EMA" || econIndicator === "SMA") {
      setChartData((currData) => {
        indicatorIt(
          econIndicator,
          search,
          timeInterval,
          currData,
          indicatorColor,
          setChartData
        );
        return currData;
      });
    } else {
      console.log("econIndicator set to something else.", econIndicator);
    }
  } catch (err) {
    console.error(err);
  }
};

export default searchIt;
