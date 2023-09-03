import React from "react";
//Labels for UX, number of columns is controlled by "lg:grid-cols-#"
const CongressLabels = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-7 lg:gap-8 w-4/5 py-2">
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Name</p>
      </div>
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Party</p>
      </div>
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">State</p>
      </div>
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Transaction</p>
      </div>
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Amount</p>
      </div>
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Date</p>
      </div>
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Source</p>
      </div>
    </div>
  );
};

export default CongressLabels;
