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
  isNews,
  chartData
) => {
  let smallRadiiSize = 1;

  const pointRadiiHandler = (isNews) => {
    //Check to see if isNews's display is on, and whether there is any information to be fetched.
    if (isNews?.isDisplayNews && isNews?.currNews.length > 0) {
      return getNewsRadii(isNews.currNews);
    } else {
      return smallRadiiSize;
    }
  };

  const getNewsRadii = (newsArr) => {
    const radii = [];
    for (let i = 0; i < newsArr.length; i++) {
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
      return updatedData;
    });
    // console.log("CurrData inside chartData is: ", currData);
    // indicatorChecker(currData);
  } catch (err) {
    console.error(err);
  }
};

export default searchIt;
