import searchTicker from "./searchTicker";

import { fetchParser } from "./fetchParser";

//timeInterval is fed into our API request
//Handle button click
const searchIt = async (search, timeInterval, setChartData) => {
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
  } catch (err) {
    console.error(err);
  }
};

export default searchIt;
