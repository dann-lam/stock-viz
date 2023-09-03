import React from "react";
//Handler for our purchase information, designed to be somewhat modular.
//Could be further modularized / made efficient.
const renderPurchaseInfo = (value, action) => {
  //Should probably convert this to a switch case.
  //Returns parses the input and converts it to something easier to understand based on what is in the json.
  if (action === "transaction") {
    return (
      <ul>
        {value.map((trade, index) => {
          let content;
          let styling;
          if (trade.type === "purchase") {
            content = "BUY";
            styling = "text-green-600";
          } else if (trade.type === "sale_full") {
            content = "SELL";
            styling = "text-red-600";
          } else if (trade.type === "sale_partial") {
            content = "PART-SELL";
            styling = "text-red-400";
          } else {
            content = "?";
            styling = "text-green-600";
          }
          return (
            <li key={index} className={styling}>
              {content}
            </li>
          );
        })}
      </ul>
    );
    //Renders the estimated amount of money traded.
  } else if (action === "amount") {
    return (
      <ul>
        {value.map((trade, index) => (
          <li key={index}>{trade.amount}</li>
        ))}
      </ul>
    );
  } else if (action === "date") {
    return (
      <ul>
        {value.map((trade, index) => (
          <li key={index}>{trade.transaction_date}</li>
        ))}
      </ul>
    );
  } else if (action === "source") {
    return (
      <ul>
        {value.map((trade, index) => (
          <a target="_blank" key={index} href={trade.ptr_link} rel="noopener noreferrer" >
            <li className="text-blue-600">[Link]</li>
          </a>
          //   <li key={index}>{trade.ptr_link}</li>
        ))}
      </ul>
    );
  } else {
    return;
  }
};

const CongressIndividuals = (key, value) => {
  return (
    <>
      {/* Name */}
      <div className="h-8 flex items-center justify-center font-thin">
        <p>{key}</p>
      </div>
      {/* Party */}
      <div className="h-8 flex items-center justify-center font-thin">
        <p>{value[0].party}</p>
      </div>
      {/* State */}
      <div className="h-8 flex items-center justify-center font-thin">
        <p>{value[0].state}</p>
      </div>
      {/* Transaction Type: EG Buy or Sell */}
      <div className="flex whitespace-nowrap items-center justify-center font-thin">
        {renderPurchaseInfo(value, "transaction")}
      </div>
      {/* Transaction Amount: $500? 1000$? */}
      <div className="flex whitespace-nowrap items-center justify-center font-thin">
        {renderPurchaseInfo(value, "amount")}
      </div>
      {/* Transaction Date */}
      <div className="flex whitespace-nowrap items-center justify-center font-thin">
        {renderPurchaseInfo(value, "date")}
      </div>
      {/* Transaction Source */}
      <div className="flex whitespace-nowrap items-center justify-center font-thin">
        {renderPurchaseInfo(value, "source")}
      </div>
    </>
  );
};

export default CongressIndividuals;
