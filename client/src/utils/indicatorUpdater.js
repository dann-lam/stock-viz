import indicatorFetch from "./indicatorFetch";
import { indicatorParser } from "./indicatorParser";

const indicatorUpdater = async (
  econIndicator,
  search,
  timeInterval,
  chartData,
  indicatorColor,
  setChartData
) => {


  if (search) {

    const response = await indicatorFetch(econIndicator, search, timeInterval);
    const data = await response.json();
    let calledData = await data[Object.keys(data)[1]];


    if (chartData.labels[chartData.labels.length - 1]) {
      let lastDate = chartData.labels[chartData.labels.length - 1];
      lastDate = lastDate.getTime();

      let formattedData = indicatorParser(calledData, timeInterval, lastDate);

      let newObj = {
        label: `${econIndicator}`,
        data: formattedData,
        pointRadius: 1,
        tension: 0.4,
        borderColor: indicatorColor,
      };
      const updatedDatasets = [...chartData.datasets];
      updatedDatasets[1] = newObj;

      // Update the state with the new array of datasets
      await setChartData((prevData) => ({
        ...prevData,
        datasets: updatedDatasets,
      }));
    }
  } else {
    console.log("Search not found. Not searching.");
  }
};

export default indicatorUpdater;
