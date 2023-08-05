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
  econIndicator,
  isNews
) => {
  let smallRadiiSize = 1;

  const pointRadiiHandler = (newsData) => {
    console.log("is news is: ", newsData);
    if (newsData.isDisplayNews && newsData.currNews) {
      return getNewsRadii(newsData.currNews);
    } else {
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
  try {
    // console.log("Looking for undefined: ", search, timeInterval, setChartData);
    const response = await searchTicker(search, timeInterval);
    // console.log("Response is: ", response);
    const data = await response.json();
    // console.log("Data is: ", data);
    //response returns a promise
    //This is accessing our data's returned values based on the second key.

    let calledData = data[Object.keys(data)[1]];

    //Takes our data and turns it into something the chart can see.
    let searchData = fetchParser(calledData, timeInterval);
    // Update the react variable that controls the chart.

    await setChartData((prevData) => ({
      ...prevData,
      labels: searchData.labels,
      datasets: [
        {
          ...prevData.datasets[0],
          label: `Closing Price`,
          data: searchData.data.map((item) => item.price),
          pointRadius: pointRadiiHandler(isNews),
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
      // console.log("econIndicator set to something else.", econIndicator);
    }
  } catch (err) {
    console.error(err);
  }
};

export default searchIt;
