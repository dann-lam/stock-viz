import pointRadiiHandler from "./tooltiplabelHandler";

//setChartData - bound so we can setChartData
//targSet - target dataset to update
//targProperty - dataset's property to update.
//propertyVal - dataset's property's value to update.

const setChartDataUpdater = (
  setChartData,
  targSet,
  targProperty,
  propertyVal,
  news
) => {
  if (targProperty === undefined) {
  }

  setChartData((prevData) => {
    //updatedDataset = copy of what we had before.
    const updatedDataset = [...prevData.datasets];
    //if it's set to pointRadius, we need to set up
    //specific conditions to handle it...
    if (targProperty === "pointRadius") {
      //If we have a propertyVal we want to set it to...
      if (propertyVal) {
        updatedDataset[targSet] = {
          ...updatedDataset[targSet],
          [targProperty]: propertyVal,
        };
      } else {
        //Else, we want a newsArray aligned with our priceArray
        updatedDataset[targSet] = {
          ...updatedDataset[targSet],
          [targProperty]: pointRadiiHandler(news),
        };
      }
    } else if (targProperty) {
      //Update the specific targetSet
      updatedDataset[targSet] = {
        //make it a direct copy of whatever used to be in there.
        ...updatedDataset[targSet],
        //Update the targeted property with its value.
        [targProperty]: propertyVal,
      };
    } else if (targProperty === undefined) {
      //If it's undefined or empty, I presume we want to "turn it off" or make it inactive. There is actually sometimes properties on linecharts we can investigate to turn the display to false on specific datasets, but we're just emptying it for sake of ease at the moment.
      updatedDataset[targSet] = {};
    }
    return {
      ...prevData,
      datasets: updatedDataset,
    };
  });
};

export default setChartDataUpdater;
