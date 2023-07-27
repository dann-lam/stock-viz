import indicatorTicker from "./indicatorTicker";
import { indicatorParser } from "./indicatorParser";

const indicatorIt = async (
  currVal,
  search,
  timeInterval,
  chartData,
  indicatorColor,
  setChartData
) => {
  console.log(
    "Entered indicatorTicker correctly? ",
    currVal,
    search,
    timeInterval
  );
  if (search) {
    const response = await indicatorTicker(currVal, search, timeInterval);
    const data = await response.json();
    let calledData = data[Object.keys(data)[1]];
    //The the latest chartData information.
    //UseEffect that listens specifically to changes to chart Data.
    //Only do this if you have the lastDate.

    if (chartData.labels[chartData.labels.length - 1]) {
      let lastDate = chartData.labels[chartData.labels.length - 1];
      lastDate = lastDate.getTime();
      console.log("indicator calledData: ", calledData);
      console.log("lastdate is: ", lastDate);
      let formattedData = indicatorParser(calledData, timeInterval, lastDate);
      console.log("formattedData: ", formattedData);
      let newObj = {
        label: `${currVal}`,
        data: formattedData,
        pointRadius: 1,
        tension: 0.4,
        borderColor: indicatorColor,
      };
      const updatedDatasets = [...chartData.datasets];
      updatedDatasets[1] = newObj;

      // Update the state with the new array of datasets
      setChartData((prevData) => ({
        ...prevData,
        datasets: updatedDatasets,
      }));
    }
  } else {
    console.log("Search not found. Not searching.");
  }
};

export default indicatorIt;
