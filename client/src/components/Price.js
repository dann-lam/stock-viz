import React from "react";
//Component reflects the price and percent change for that time frame 
let Price = ({ chartData }) => {
  let priceStatus;
  let lastPrice;
  let firstPrice;
  let currArrow;
  //Checks to see chartData's datasets are known or unknown.
  if (chartData?.datasets[0]?.data[0]) {
    lastPrice = chartData.datasets[0].data[0];
    //parse them because it comes as a string.
    lastPrice = parseFloat(lastPrice);
    firstPrice =
      chartData.datasets[0].data[chartData.datasets[0].data.length - 1];
    firstPrice = parseFloat(firstPrice);
    //the "firstPrice" is actually the last price in the array, because that's the "earliest" price relative to the timeScale, similarly lastPrice is the first in the array.
  }
  //Calculate the percentile price difference.
  let priceDiff = (((lastPrice - firstPrice) / firstPrice) * 100).toFixed(2);
  //Determine what color to render the price with which arrow.
  if (priceDiff >= 0) {
    //priceStatus is set to green, currARrow is up.
    priceStatus = {
      color: "rgb(0,128,0)",
    };
    currArrow = "↑";
  } else {
    //priceStatus set to red, currARrow is down.
    priceStatus = {
      color: "rgb(255,0,0)",
    };
    currArrow = "↓";
  }

  return (
    <>
      <div>
        <p>{lastPrice} USD</p>
        <p style={priceStatus}>
          {(lastPrice - firstPrice).toFixed(2)} ({priceDiff})% {currArrow}
        </p>
      </div>
    </>
  );
};

export default Price;
