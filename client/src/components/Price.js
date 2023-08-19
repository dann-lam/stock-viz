import React from "react";

let Price = ({ chartData }) => {
  let lastPrice;
  if (chartData?.datasets[0]?.data[0]) {
    lastPrice = chartData.datasets[0].data[0];
    lastPrice = parseFloat(lastPrice);
  }
  console.log("Lastprice is: ", typeof lastPrice);
  return (
    <>
      <div>
        <p>{lastPrice} USD</p>
      </div>
    </>
  );
};

export default Price;
