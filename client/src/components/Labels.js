import React from "react";
//Labels for UX, number of columns is controlled by "lg:grid-cols-#"
const Labels = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-6 lg:gap-8 w-3/5 py-2">
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Search Symbol</p>
      </div>
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Symbol Color</p>
      </div>
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Indicator</p>
      </div>
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Indicator Color</p>
      </div>
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Display News</p>
      </div>
      <div className="h-8 shadow-lg text-teal-600 font-thin border-b-4 rounded-lg">
        <p className="text-sm">Congress</p>
      </div>
    </div>
  );
};

export default Labels;
