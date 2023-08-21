import React from "react";

let Price = ({ chartData }) => {
  const posPrice = {
    color: "rgb(0,128,0)",
  };
  const negPrice = {
    color: "rgb(255,0,0)",
  };
  let priceStatus;
  let lastPrice;
  let firstPrice;
  let currArrow;
  if (chartData?.datasets[0]?.data[0]) {
    lastPrice = chartData.datasets[0].data[0];
    lastPrice = parseFloat(lastPrice);
    firstPrice =
      chartData.datasets[0].data[chartData.datasets[0].data.length - 1];
    firstPrice = parseFloat(firstPrice);
  }

  let priceDiff = (((lastPrice - firstPrice) / firstPrice) * 100).toFixed(2);
  if (priceDiff >= 0) {
    priceStatus = posPrice;
    currArrow = "↑";
  } else {
    priceStatus = negPrice;
    currArrow = "↓";
  }
  //Look at priceDiff, if it's a negative number, make
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
