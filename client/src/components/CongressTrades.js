import React, { useEffect } from "react";

let CongressTrades = ({ congressData }) => {
  //Loop through our object

  //     //Under each name, create a list element that contains our relevent information under eat name.

  const renderPurchaseInfo = (value) => {
    return value.map((trade, index) => (
      <div key={index}>
        <p>Amount: {trade.amount}</p>
        <p>Transaction Date: {trade.transaction_date}</p>
        <p>Type: {trade.type}</p>
        <p>Ptr Link: {trade.ptr_link}</p>
      </div>
    ));
  };

  const renderTrades = () => {
    if (congressData.trades) {
      return Object.entries(congressData.trades).map(([key, value]) => (
        <div key={key}>
          <p>Key: {key}</p>
          <p>Party: {value[0].party}</p>
          <p>State: {value[0].state}</p>
          {/* value needs to be iterated through, their keys also need to be key'd. */}
          {renderPurchaseInfo(value)}
          {/* <p>Value: {value[0].amount}</p> */}
        </div>
      ));
    } else {
      return <p>No trades data available.</p>;
    }
  };

  return (
    <>
      <hr className="divide-slate-400/10 w-3/5 m-4" />
      {renderTrades()}
    </>
  );
};

export default CongressTrades;
