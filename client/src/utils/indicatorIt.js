import indicatorTicker from "./indicatorTicker";
import { indicatorParser } from "./indicatorParser";

const indicatorIt = async (
  econIndicator,
  search,
  timeInterval,
  chartData,
  indicatorColor,
  setChartData
) => {
  console.log(
    "Entered indicatorTicker correctly? ",
    econIndicator,
    search,
    timeInterval,
    chartData
  );

  if (search) {
    console.log("ChartData is: ", chartData);
    const response = await indicatorTicker(econIndicator, search, timeInterval);
    const data = await response.json();
    let calledData = await data[Object.keys(data)[1]];
    console.log("Indicator it data response: ", data);
    console.log("Indicator it calledData :", calledData);

    if (chartData.labels[chartData.labels.length - 1]) {
      let lastDate = chartData.labels[chartData.labels.length - 1];
      lastDate = lastDate.getTime();
      console.log("indicator calledData: ", calledData);
      console.log("lastdate is: ", lastDate);
      let formattedData = indicatorParser(calledData, timeInterval, lastDate);
      console.log("formattedData: ", formattedData);
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

export default indicatorIt;