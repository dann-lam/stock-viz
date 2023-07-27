//write day specific parsers
//write week specific parsers

//Function designed to filter down our labels to 5, but isn't working as expected due to how charts are filtered.dis
// const selectEvenLabels = (labels) => {
//   const step = Math.floor(labels.length / 5);
//   return labels.filter(
//     (label, index) => index % step === 0 || index === labels.length - 1
//   );
// };

const onefiveDayLabelsFormat = (data, timeInterval) => {
  //dateKeys creates an array of all keys.
  let dateKeys = Object.keys(data);
  let ourLabels = [];
  let ourPrices = [];
  let lengthInterval = 0;
  console.log("in Labels formatter, time interval is: ", timeInterval);
  //I should convert this to a switch case.
  if (
    timeInterval === "1D" ||
    timeInterval === "5D" ||
    timeInterval === "Max"
  ) {
    lengthInterval = dateKeys.length;
    console.log("1D or 5D detected!", timeInterval, lengthInterval);
  } else if (timeInterval === "1M") {
    console.log("1M detected!", timeInterval, lengthInterval);
    lengthInterval = 20;
  } else if (timeInterval === "6M") {
    lengthInterval = 25;
  }

  console.log("lengthInterval is: ", lengthInterval);
  for (let i = 0; i < lengthInterval; i++) {
    //String interpolated to tack on the T00:00:00 so that we don't render the wrong time.

    let currPrice = data[dateKeys[i]]["4. close"];
    // ["4. close"]
    ourPrices.push(currPrice);
    ourLabels.push(new Date(`${dateKeys[i]}`));
  }
  //Filter out our 100 labels and filter it down to 5.
  // ourLabels = selectEvenLabels(ourLabels);
  // console.log(`ourLabels`);
  // console.log(ourLabels);
  let formatted = [ourLabels, ourPrices];
  return formatted;
  //Take those dates, format them and return them.
};
export const fetchParser = (data, timeInterval) => {
  let formattedData = {
    labels: "",
    data: "",
  };
  console.log("fetchParser timeInterval: ", timeInterval);
  console.log("Data found? Data: ", data);
  //Depending on what the timeInterval is, we'll format it to something ChartJS likes.
  //Essentially, because I am storing our formatted data as an array, we are accessing and then setting the appropriate values to the corresponding keys on our formatted data, and then returning it to our chart.
  if (timeInterval) {
    formattedData.labels = onefiveDayLabelsFormat(
      data,
      timeInterval
    )[0];
    formattedData.data = onefiveDayLabelsFormat(data, timeInterval)[1];
  }

  return formattedData;
};
