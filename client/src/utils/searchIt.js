import searchTicker from "./searchTicker";

import { fetchParser } from "./fetchParser";

//timeInterval is fed into our API request
//Handle button click
const searchIt = async (search, timeInterval, setChartData, symbolColor) => {
  try {
    console.log("Looking for undefined: ", search, timeInterval, setChartData);
    const response = await searchTicker(search, timeInterval);
    console.log("Response is: ", response);
    const data = await response.json();
    console.log("Data is: ", data);
    //response returns a promise
    //This is accessing our data's returned values based on the second key.

    let calledData = data[Object.keys(data)[1]];
    console.log("Called data is: ", calledData);
    //Takes our data and turns it into something the chart can see.
    let chartData = fetchParser(calledData, timeInterval);
    // Update the react variable that controls the chart.
    console.log("Chart data is: ", chartData);
    setChartData((prevData) => ({
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
        ...prevData.datasets.slice(1),
      ],
    }));
  } catch (err) {
    console.error(err);
  }
};

export default searchIt;
