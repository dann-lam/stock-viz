import React, { useEffect } from "react";
import CongressLabels from "./CongressLabels";
import CongressIndividuals from "./CongressIndividuals";
let CongressTrades = ({ congressData }) => {
  //Loop through our object

  //     //Under each name, create a list element that contains our relevent information under eat name.



  const renderTrades = () => {
    if (congressData.trades) {
      return Object.entries(congressData.trades).map(([key, value]) => (
        <div
          key={key}
          className="grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-8 w-4/5 py-2"
        >
          {CongressIndividuals(key, value)}
        </div>
      ));
    } else {
      return <p>No trades data available.</p>;
    }
  };
  //Take each key and value, and bring them to a component which will then render each of those values.
  //
  return (
    <>
      <hr className="divide-slate-400/10 w-3/5 m-4" />
      <CongressLabels />
      <hr className="divide-slate-400/10 w-3/5 m-4" />
      {renderTrades()}
    </>
  );
};

export default CongressTrades;
